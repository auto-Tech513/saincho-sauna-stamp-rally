import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import vm from "node:vm";
import {webcrypto} from "node:crypto";
import * as nearby from "../nearby.js";
import * as evidence from "../facility-evidence.js";

const source=(await readFile(new URL("../app.js",import.meta.url),"utf8"))
  .replace(/^import\s*\{[\s\S]*?from "\.\/nearby.js";/,"")
  .replace(/^import[^\n]*from "\.\/facility-evidence.js";/m, "")
  .replace(/\ninit\(\);/,"\n");
const context=vm.createContext({...nearby,...evidence,URL,URLSearchParams,crypto:webcrypto,performance,console,setTimeout,clearTimeout,localStorage:{getItem:()=>null},location:{hostname:"localhost",pathname:"/",protocol:"http:",port:"4173"},window:{matchMedia:()=>({matches:false})},document:{querySelector:()=>({}),querySelectorAll:()=>[]}});
vm.runInContext(source,context);
vm.runInContext('appModulesReady=true;',context);
const search=(name,query)=>vm.runInContext(`matchesSearchBlob(buildSearchBlob([${JSON.stringify(name)}]),createSearchNeedles(${JSON.stringify(query)}))`,context);

test("facility spelling variants and separators return the intended name",()=>{
  for(const query of ["サウナモンキー","さうなもんきー","Sauna monkey","SAUNA　MONKEY","ｻｳﾅﾓﾝｷｰ"]){assert.ok(search("SAUNA MONKEY",query),query);}
  for(const query of ["湯〜とぴあ宝","湯ーとピア宝","ゆーとぴあ宝","湯～とぴあ 宝"]){assert.ok(search("湯～とぴあ宝",query),query);}
  assert.ok(search("SAUNACHELIN 2025","さうなしゅらん"));
  assert.equal(search("SAUNA MONKEY","存在しない施設"),false);
});
test("equipment is not inferred from a city or poetic facility name",()=>{
  const result=vm.runInContext('getFacilityFeatures({id:"forest",name:"森と川のサウナ",city:"温泉町",trait:"wood",features:[]})',context);
  assert.equal(result.length,0);
});
test("a specific facility name is not expanded into a generic hotel category",()=>{
  const query = "ホテルモントレエーデルホフ札幌";
  assert.ok(search("ホテルモントレエーデルホフ札幌 カルロビ・バリ・スパ", query));
  assert.equal(search("ホテルエミシア札幌 スパアルパ", query), false);
  assert.equal(search("プレミアホテル-CABIN-札幌", query), false);
  assert.ok(search("セルフロウリュ", "loyly"));
});
test("a broad search does not get trapped in the first prefecture",()=>{
  vm.runInContext('PREFECTURES=[{name:"北海道"},{name:"愛知県"}]; selectedPrefecture="愛知県"; facilitySearchCache=[{facility:{prefecture:"北海道"},haystack:buildSearchBlob(["サウナ北海道"])},{facility:{prefecture:"愛知県"},haystack:buildSearchBlob(["サウナ愛知"])}]; moveToSearchPrefecture("サウナ");',context);
  assert.equal(vm.runInContext('selectedPrefecture',context),"全国");
});
test("a successful ranking read does not hide a failed registration",async()=>{
  context.fetch=async()=>({ok:true,json:async()=>({configured:true,entries:[]})});
  context.AbortSignal=AbortSignal;
  await vm.runInContext('renderLeaderboard=()=>{}; rankingWriteError="登録送信に失敗"; loadRanking()',context);
  assert.equal(vm.runInContext('rankingLastError',context),"登録送信に失敗");
});

test("compact result actions keep map and review labels unambiguous",()=>{
  const unknownMap=vm.runInContext('renderMapRouteLink({id:"unknown",name:"住所未確認のサウナ",prefecture:"愛知県"},{compact:true})',context);
  assert.match(unknownMap,/<span>地図<\/span>/);
  assert.match(unknownMap,/aria-label="Google Mapsで住所未確認のサウナを地図で探す"/);
  const shares=vm.runInContext('renderFacilityShareButtons({id:"test"},{includeReview:false})',context);
  assert.match(shares,/share-facility-native/);
  assert.match(shares,/Xでおすすめ/);
  assert.doesNotMatch(shares,/jump-reviews/);
  const detailShares=vm.runInContext('renderFacilityShareButtons({id:"test"})',context);
  assert.match(detailShares,/jump-reviews/);
});

test("a failed search preparation releases stale-result protection and allows retry", async () => {
  vm.runInContext(`
    el.facilityList = { inert: false, setAttribute(name, value) { this[name] = value; } };
    el.searchResultsStatus = { textContent: "" };
    facilitySearchCache = null;
    ensureFacilitySearchRecords = () => Promise.reject(new Error("test preparation failure"));
    console = { ...console, error() {} };
  `, context);
  assert.equal(await vm.runInContext('applySearchValue("ホテル")', context), false);
  assert.equal(vm.runInContext('el.facilityList.inert', context), false);
  assert.equal(vm.runInContext('el.facilityList["aria-busy"]', context), "false");
  assert.match(vm.runInContext('el.searchResultsStatus.textContent', context), /もう一度検索/);
});

test("visit date and export date use the local calendar day around midnight", () => {
  assert.equal(vm.runInContext('getLocalDateInputValue({getTime:()=>Date.parse("2026-10-18T16:30:00Z"),getTimezoneOffset:()=>-540})', context), "2026-10-19");
  assert.equal(vm.runInContext('getLocalDateInputValue({getTime:()=>Date.parse("2026-10-19T01:30:00Z"),getTimezoneOffset:()=>420})', context), "2026-10-18");
});
