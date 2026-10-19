import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { readFile } from "node:fs/promises";
import { webcrypto } from "node:crypto";
import * as evidence from "../facility-evidence.js";
import * as nearby from "../nearby.js";

const source = (await readFile(new URL("../app.js", import.meta.url), "utf8"))
  .replace(/^import\s*\{[\s\S]*?from "\.\/nearby.js";/, "")
  .replace(/^import[^\n]*from "\.\/facility-evidence.js";/m, "")
  .replace(/\ninit\(\);/, "\n");
function harness() {
  const context = vm.createContext({ ...evidence, ...nearby, URL, URLSearchParams, crypto: webcrypto, performance,
    localStorage: { getItem: () => null }, location: { hostname: "localhost", pathname: "/", protocol: "http:" },
    window: { matchMedia: () => ({ matches: false }) }, document: { querySelector: () => ({}), querySelectorAll: () => [] } });
  vm.runInContext(source, context);
  const run = code => vm.runInContext(code, context);
  run(`facilitiesCache=[
    {id:"a",name:"あさひ温泉",prefecture:"愛知県",features:["塩サウナ","水風呂あり","外気あり"],tags:["ユーザー指定追加"]},
    {id:"b",name:"ひかり温泉",prefecture:"愛知県",features:["ドライサウナ","水風呂あり","外気なし"],tags:["ユーザー指定追加"]},
    {id:"c",name:"みなと温泉",prefecture:"沖縄県",features:["塩サウナ"],tags:["ユーザー指定追加"]}
  ]; facilitySearchCache=facilitiesCache.map(createFacilitySearchRecord);
  el.featureFilterCount={}; el.featureFilterPanel={hidden:false}; el.featureFilterGrid={};`);
  return { context, run };
}

test("feature counts respect prefecture, saved filter, query and AND selections", () => {
  const { run } = harness();
  assert.equal(run('getFeatureAvailabilityCounts().get("塩サウナ")'), 2);
  run('selectedPrefecture="愛知県"; selectedFeatureFilters.add("水風呂あり");');
  assert.equal(run('getFeatureAvailabilityCounts().get("塩サウナ")'), 1);
  run('setSearchTerm("ひかり");');
  assert.equal(run('getFeatureAvailabilityCounts().get("塩サウナ")'), 0);
  run('setSearchTerm(""); activeFilter="favorite"; state.favorites={b:{at:"test"}};');
  assert.equal(run('getFeatureAvailabilityCounts().get("塩サウナ")'), 0);
  assert.equal(run('getFeatureAvailabilityCounts().get("ドライサウナ")'), 1);
});

test("conflicting selection counts show the replacement result", () => {
  const { run } = harness();
  run('selectedFeatureFilters.add("外気あり");');
  assert.equal(run('getFeatureAvailabilityCounts().get("外気なし")'), 1);
  assert.equal(run('getFilteredFacilities().length'), 1);
});

test("zero-result features are disabled but an active zero selection remains removable", () => {
  const { run } = harness();
  run('selectedPrefecture="北海道"; selectedFeatureFilters.add("塩サウナ"); renderFeatureFilterGrid();');
  const html = run('el.featureFilterGrid.innerHTML');
  assert.match(html, /data-feature-filter="ドライサウナ"[^>]*disabled/);
  assert.match(html, /data-feature-filter="塩サウナ" aria-pressed="true" ><span/);
  assert.match(html, /data-feature-reset/);
});

test("official salt and auto-loyly features reach the search index", () => {
  const { run } = harness();
  assert.equal(run('getFacilityFeatures({id:"manual-aichi-okazaki-rakunoyu"}).includes("塩サウナ")'), true);
  assert.equal(run('getFacilityFeatures({id:"manual-aichi-super-sauna-ichinomiya"}).includes("オートロウリュ")'), true);
  assert.equal(run('getFacilityStatus(applyFacilityEvidence({id:"si-80496"})).badge'), "臨時休業");
});

test("explicit official aliases share evidence and one result without losing saved IDs", () => {
  const { run } = harness();
  run('facilitiesCache=null; SEED_FACILITIES=[{id:"st-okinawa-940",name:"りっかりっか湯",prefecture:"沖縄県"},{id:"si-okinawa-4327",name:"天然温泉 りっかりっか湯(那覇セントラルホテル)",prefecture:"沖縄県"}]; state.favorites={"si-okinawa-4327":{at:"test"}};');
  assert.equal(run('getFacilities().length'), 1);
  assert.equal(run('getFacilities()[0].id'), "si-okinawa-4327");
  assert.equal(run('getFacilityFeatures(getFacilities()[0]).includes("塩サウナ")'), true);
});

test("a suspended facility cannot start check-in or become a nearby recommendation", async () => {
  const { context, run } = harness();
  context.closed = evidence.applyFacilityEvidence({id:"st-kyoto-4811",name:"FIRST THE SAUNA",lat:34.989132,lng:135.756307,address:"京都市下京区"});
  run('getCurrentPosition=()=>{throw new Error("must not request position");}; facilitiesCache=[closed];');
  await run('startFacilityCheckin(closed)');
  assert.doesNotMatch(run('renderCheckinPanel(closed)'), /data-action="start-checkin"/);
  assert.match(run('renderFacilityCardFacts(closed)'), /臨時休業中/);
  assert.equal(run('getNearestFacilities(34.989132,135.756307).length'), 0);
});

test("nearby food uses an address, not coordinates that Maps can ignore in category queries", () => {
  const { context, run } = harness();
  context.facility = { name: "施設A", lat: 35.1, lng: 136.9, address: "愛知県名古屋市" };
  let url = new URL(run('getNearbySameshiUrl(facility)'));
  assert.equal(url.searchParams.get("api"), "1");
  assert.equal(url.searchParams.get("query"), "飲食店 愛知県名古屋市 周辺");
  context.facility = { name: "施設A", lat: 0, lng: 0, address: "愛知県名古屋市中区1-2" };
  url = new URL(run('getNearbySameshiUrl(facility)'));
  assert.equal(url.searchParams.get("query"), "飲食店 愛知県名古屋市中区1-2 周辺");
  context.facility = { name: "施設A", prefecture: "愛知県", city: "名古屋市" };
  assert.match(new URL(run('getNearbySameshiUrl(facility)')).searchParams.get("query"), /施設A.*愛知県.*名古屋市/);
});
