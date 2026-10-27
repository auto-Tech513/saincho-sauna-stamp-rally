import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import { webcrypto } from "node:crypto";
import { SEED_FACILITIES } from "../data.js";
import * as evidence from "../facility-evidence.js";
import * as nearby from "../nearby.js";
import { addressIssues, auditEvidence } from "../scripts/audit-facility-evidence.mjs";

const source = (await readFile(new URL("../app.js", import.meta.url), "utf8"))
  .replace(/^import\s*\{[\s\S]*?from "\.\/nearby.js";/, "")
  .replace(/^import[^\n]*from "\.\/facility-evidence.js";/m, "")
  .replace(/\ninit\(\);/, "\n");
const context = vm.createContext({ ...evidence, ...nearby, URL, URLSearchParams, crypto: webcrypto, performance, console,
  localStorage: { getItem: () => null }, location: { hostname: "localhost", pathname: "/", protocol: "http:", port: "8788" },
  window: { matchMedia: () => ({ matches: false }) }, document: { querySelector: () => ({}), querySelectorAll: () => [] } });
vm.runInContext(source, context);
vm.runInContext('appModulesReady=true;',context);
const run = code => vm.runInContext(code, context);

test("opened facilities retain their IDs, correct addresses and enabled stamping", () => {
  for (const id of ["manual-aichi-super-sauna-ichinomiya", "fukui-kaihatsu-onsen-sauna-resort-2026"]) {
    const facility = SEED_FACILITIES.find(item => item.id === id);
    assert.equal(facility.status, "open");
    assert.ok(!facility.tags.includes("開業予定"));
    assert.equal(evidence.applyFacilityEvidence({ ...facility, status: "planned" }).status, "open");
    context.facility = evidence.applyFacilityEvidence(facility);
    assert.equal(run("getFacilityStatus(facility)"), null);
  }
  assert.match(SEED_FACILITIES.find(item => item.id === "manual-aichi-super-sauna-ichinomiya").address, /一宮市大和町毛受一本松31/);
  const kanare = evidence.applyFacilityEvidence(SEED_FACILITIES.find(item => item.id === "manual-aichi-kanare-kitanoyu"));
  assert.equal(kanare.city, "名古屋市守山区");
  assert.match(kanare.address, /守山区森孝2-902/);
  assert.equal(auditEvidence().ok, true);
});

test("missing, zero and non-Japanese facility coordinates never route to 0,0", () => {
  for (const coordinates of [{}, {lat:0,lng:0}, {lat:null,lng:null}, {lat:"",lng:""}, {lat:50,lng:140}, {lat:35,lng:Infinity}]) {
    context.facility = { id:"test", name:"施設", address:"愛知県一宮市大和町毛受一本松31", ...coordinates };
    assert.equal(run("getFacilityCoordinate(facility)"), "");
    assert.match(new URL(run("getFacilityDirectionsUrl(facility)")).searchParams.get("destination"), /一宮市/);
  }
  context.facility = {lat:35.1,lng:136.9};
  assert.equal(run("getFacilityCoordinate(facility)"), "35.1,136.9");
});

test("deduped legacy IDs keep authoritative official fields over old shared content", () => {
  const facility = evidence.applyFacilityEvidence({ id:"saved-user-id", legacyIds:["manual-aichi-super-sauna-ichinomiya"], status:"planned", address:"名古屋ルーセント", tags:["開業予定"] });
  assert.equal(facility.status, "open");
  assert.match(facility.address, /一宮市/);
  assert.deepEqual(facility.tags, []);
});

test("Apz aliases share verified identity and keep existing saved IDs", () => {
  context.apzRecords = SEED_FACILITIES.filter(item => ["manual-aichi-apz", "si-2505"].includes(item.id)).map(evidence.applyFacilityEvidence);
  assert.equal(context.apzRecords.length, 2);
  assert.ok(context.apzRecords.every(item => item.address === "愛知県名古屋市千種区今池5-11-14"));
  run('state=createState(); state.visited["si-2505"]={at:"2026-10-01T00:00:00Z"};');
  assert.equal(run('dedupeFacilities(apzRecords).length'), 1);
  assert.equal(run('dedupeFacilities(apzRecords)[0].id'), "si-2505");
  assert.equal(run('dedupeFacilities(apzRecords)[0].legacyIds.includes("manual-aichi-apz")'), true);
  context.facility = context.apzRecords[0];
  assert.equal(run('matchesSearchBlob(createFacilitySearchRecord(facility).haystack,createSearchNeedles("リラクゼーションスパ アペゼ"))'), true);
  run('state.facilityMemos["manual-aichi-apz"]={text:"別の記録",updatedAt:"2026-10-01"};');
  assert.equal(run('dedupeFacilities(apzRecords).length'), 2);
  assert.equal(run('state.facilityMemos["manual-aichi-apz"].text'), "別の記録");
  run('state=createState();');
});

test("coverage does not turn unknown equipment into absent or invent temperatures", () => {
  assert.equal(evidence.getMissingEvidenceFields({id:"unknown"}).length, 7);
  assert.ok(evidence.getMissingEvidenceFields({id:"manual-mie-aou-no-mori"}).includes("水風呂"));
  assert.ok(evidence.getMissingEvidenceFields({id:"manual-aichi-kanare-kitanoyu"}).includes("サウナ温度"));
  assert.equal(evidence.getMissingEvidenceFields({id:"manual-aichi-super-sauna-ichinomiya"}).length, 0);
  assert.ok(!evidence.getVerifiedFeatures({id:"manual-aichi-kanare-kitanoyu"}).includes("温泉付き"));
  assert.ok(!evidence.getVerifiedFeatures({id:"fukui-kaihatsu-onsen-sauna-resort-2026"}).includes("水着必須"));
});

test("address audit detects corporate-context and article-headline contamination", () => {
  assert.ok(addressIssues({address:"三重県内にある貸切個室サウナ6施設!!"}).length);
  assert.ok(addressIssues({city:"一宮市",address:"愛知県名古屋市西区牛島町6番1号"}).length);
  assert.equal(addressIssues({city:"名古屋市守山区",address:"愛知県 名古屋市守山区 森孝2-902"}).length,0);
});

test("verified prices and equipment values are searchable without relying on legacy tags", () => {
  context.facility = evidence.applyFacilityEvidence(SEED_FACILITIES.find(item => item.id === "manual-aichi-super-sauna-ichinomiya"));
  assert.equal(run('matchesSearchBlob(createFacilitySearchRecord(facility).haystack,createSearchNeedles("約90℃"))'),true);
  assert.equal(run('matchesSearchBlob(createFacilitySearchRecord(facility).haystack,createSearchNeedles("薬草樽蒸"))'),true);
});

test("typing updates results without rebuilding hidden progress panels", async () => {
  run(`
    el.searchInput={value:"一宮"}; el.searchResultsStatus={dataset:{}};
    facilitySearchCache=[]; ensureFacilitySearchRecords=()=>Promise.resolve([]);
    moveToSearchPrefecture=()=>true;
    renderSummary=()=>{throw new Error("hidden summary redraw");};
    renderQuestPanel=()=>{throw new Error("hidden quest redraw");};
    renderExplore=()=>{el.searchResultsStatus.textContent="愛知県 · 1件";};
  `);
  assert.equal(await run('applySearchValue("一宮")'), true);
  assert.match(run('el.searchResultsStatus.textContent'), /1件/);
  assert.ok(Number(run('el.searchResultsStatus.dataset.searchElapsedMs')) >= 0);
});

test("a pending search cannot redraw or scroll a facility page after navigation", async () => {
  run('activeView="Facility"; renderExplore=()=>{throw new Error("background result redraw");};');
  assert.equal(await run('applySearchValue("一宮")'), false);
});
