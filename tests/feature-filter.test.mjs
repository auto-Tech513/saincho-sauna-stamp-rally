import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { readFile } from "node:fs/promises";
import { webcrypto } from "node:crypto";
import { MessageChannel } from "node:worker_threads";
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
  vm.runInContext('appModulesReady=true;',context);
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

test("KIWAMI official identities produce two stores and retain a saved legacy ID", () => {
  const { run } = harness();
  run(`facilitiesCache=null; SEED_FACILITIES=[
    {id:"sc2025-kiwami-osu",name:"KIWAMI SAUNA 大須",prefecture:"愛知県"},
    {id:"manual-aichi-kiwami-honten",name:"KIWAMI SAUNA 本店",prefecture:"愛知県"},
    {id:"si-60076",name:"KIWAMI SAUNA",prefecture:"愛知県"}
  ]; state.favorites={"si-60076":{at:"test"}};`);
  assert.equal(run('getFacilities().length'), 2);
  assert.equal(run('getFavoriteFacilities()[0].id'), "si-60076");
  assert.equal(run('getFavoriteFacilities()[0].name'), "KIWAMI SAUNA 本店");
  assert.equal(run('getFacilityById("manual-aichi-kiwami-honten").id'), "si-60076");
  assert.equal(run('getFacilityById("sc2025-kiwami-osu").address'), "愛知県名古屋市中区橘1丁目4-12");
  assert.equal(run('getMissingEvidenceFields(getFacilityById("sc2025-kiwami-osu")).includes("持ち物")'), true);
  assert.equal(run('getFacilityById("si-60076").trait'), "urban");
});

test("fitness scope preserves direct links, saved gyms and log-only records without overmatching spas", () => {
  assert.equal(evidence.isFitnessFacility({ id: "si-98204", name: "フィットイージー 徳島出来島店" }), true);
  assert.equal(evidence.isFitnessFacility({ id: "si-11562", name: "ゼロスポーツ" }), true);
  assert.equal(evidence.isFitnessFacility({ id: "manual-gifu-fiteasy-gifumasaki-sauna", name: "フィットイージー 岐阜正木店 / SAUNA" }), false);
  for (const name of ["ルネサンス仙台卸町24", "ジェクサー新宿", "スポーツクラブNAS", "フィットネスクラブA"]) {
    assert.equal(evidence.isFitnessFacility({ name }), true, name);
  }
  for (const name of ["埼玉スポーツセンター天然温泉", "御殿場オアシス", "セントラルホテル", "渋谷SAUNAS", "NASU SAUNA"]) {
    assert.equal(evidence.isFitnessFacility({ name }), false, name);
  }
  const { run } = harness();
  run('facilitiesCache=[...facilitiesCache,{id:"gym",name:"ルネサンス仙台卸町24",lat:35,lng:137}]; state.favorites.gym={at:"test"};');
  assert.equal(run('getFacilities().some(f=>f.id==="gym")'), false);
  assert.equal(run('getFacilityById("gym").name'), "ルネサンス仙台卸町24");
  assert.equal(run('getFavoriteFacilities().some(f=>f.id==="gym")'), true);
  assert.equal(run('getFacilities()===getFacilities()'), true);
  run('state.favorites={}; state.visitLogs.gym=[{id:"log1"}];');
  assert.equal(run('hasFacilityUserSignal(getFacilityById("gym"))'), true);
  run('facilitiesCache=[{id:"new",name:"新しい温泉"}];');
  assert.equal(run('getFacilities()[0].id'), "new");
});

test("version checks detect a stale app without reloading or touching saved data", async () => {
  const { context, run } = harness();
  const notice = { hidden: true };
  const script = { src: "https://example.com/app.abcdef01.js" };
  context.document.querySelector = selector => selector === "#appUpdateNotice" ? notice : script;
  context.AbortSignal = AbortSignal;
  let calls = 0;
  let app = "app.abcdef02.js";
  context.fetch = async () => { calls++; return { ok: true, json: async () => ({ app }) }; };
  context.location.replace = () => { throw new Error("must not reload without consent"); };
  await run('checkAppUpdate({force:true})');
  assert.equal(notice.hidden, false);
  await run('checkAppUpdate()');
  assert.equal(calls, 1);
  app = "app.abcdef01.js";
  await run('checkAppUpdate({force:true})');
  assert.equal(notice.hidden, true);
  context.fetch = async () => { throw new Error("offline"); };
  await run('checkAppUpdate({force:true})');
  assert.equal(notice.hidden, true);
});

test("search indexing yields without relying on clamped timers when supported", async () => {
  const { context, run } = harness();
  let yields = 0;
  context.window.scheduler = { yield: async () => { yields++; } };
  await run('yieldSearchWork()');
  assert.equal(yields, 1);
  delete context.window.scheduler;
  context.MessageChannel = MessageChannel;
  context.window.setTimeout = () => { throw new Error("must use MessageChannel"); };
  await run('yieldSearchWork()');
});

test("deduplicating normalization work preserves every legacy search token", () => {
  const { context, run } = harness();
  for (const value of ["ＫＩＷＡＭＩ ＳＡＵＮＡ", "きわみ・サウナ", "キャナル・リゾート", "〒451-0035 浅間2丁目14-24", "しきじ", "オートロウリュ 水風呂", "ﾌﾟﾚﾐｱﾎﾃﾙ", "ぎょうざ＆サ飯"]) {
    context.sample = value;
    const legacy = run(`JSON.stringify(uniqueStrings([normalizeText(sample),...expandSearchTextVariants(normalizeText(sample)).slice(0,12)]).flatMap(variant=>[variant,toHiragana(variant),toKatakana(variant),normalizeCompact(variant),normalizeKanaLoose(variant),normalizeKanaLongVowels(variant),romanizeSearchText(variant)]).map(normalizeSearchToken).filter(Boolean).filter((x,i,a)=>a.indexOf(x)===i).sort())`);
    const current = run('(()=>{const tokens=new Set(); addSearchBlobTokens(tokens,sample);return JSON.stringify([...tokens].sort());})()');
    assert.equal(current, legacy, value);
  }
});

test("typing before module loading never caches an empty catalog or loses the query", async () => {
  const { run } = harness();
  run('appModulesReady=false; facilitySearchCache=null; el.searchResultsStatus={dataset:{}}; ensureFacilitySearchRecords=()=>{throw new Error("must wait for module data");};');
  assert.equal(await run('applySearchValue("kiwami",100)'), false);
  assert.equal(run('searchTerm'), "kiwami");
  assert.equal(run('pendingSearchIntent.startedAt'), 100);
  assert.equal(run('facilitySearchCache'), null);
});

test("client metadata keeps a gym noindex and resets on return to discovery", () => {
  const { context, run } = harness();
  context.metaCalls = {};
  run('updateMeta=(attribute,name,value)=>{metaCalls[name]=value;}; isArticleRoute=()=>false;');
  run('updateDocumentMetaForView("Facility",{id:"gym",name:"ルネサンス仙台卸町24",officialUrl:"https://www.s-re.jp/sendai-oroshimachi/"});');
  assert.equal(context.metaCalls.robots, "noindex, follow");
  assert.equal(context.metaCalls.googlebot, "noindex, follow");
  run('updateDocumentMetaForView("Explore");');
  assert.equal(context.metaCalls.robots, "index, follow, max-image-preview:large");
});

test("a CSS-only release also prompts an explicit update", async () => {
  const { context, run } = harness();
  const notice = { hidden: true };
  context.document.querySelector = selector => selector === "#appUpdateNotice" ? notice : selector.startsWith("link") ? { href: "https://example.com/styles.1234.css" } : { src: "https://example.com/app.abcdef.js" };
  context.AbortSignal = AbortSignal;
  context.fetch = async () => ({ ok: true, json: async () => ({ app: "app.abcdef.js", styles: "styles.5678.css" }) });
  await run('checkAppUpdate({force:true})');
  assert.equal(notice.hidden, false);
});
