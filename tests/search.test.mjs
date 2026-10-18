import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import vm from "node:vm";
import {webcrypto} from "node:crypto";
import * as nearby from "../nearby.js";

const source=(await readFile(new URL("../app.js",import.meta.url),"utf8"))
  .replace(/^import\s*\{[\s\S]*?from "\.\/nearby.js";/,"")
  .replace(/\ninit\(\);/,"\n");
const context=vm.createContext({...nearby,URL,URLSearchParams,crypto:webcrypto,performance,console,setTimeout,clearTimeout,localStorage:{getItem:()=>null},location:{hostname:"localhost",pathname:"/",protocol:"http:",port:"4173"},window:{matchMedia:()=>({matches:false})},document:{querySelector:()=>({}),querySelectorAll:()=>[]}});
vm.runInContext(source,context);
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
test("a broad search does not get trapped in the first prefecture",()=>{
  vm.runInContext('PREFECTURES=[{name:"北海道"},{name:"愛知県"}]; selectedPrefecture="愛知県"; facilitySearchCache=[{facility:{prefecture:"北海道"},haystack:buildSearchBlob(["サウナ北海道"])},{facility:{prefecture:"愛知県"},haystack:buildSearchBlob(["サウナ愛知"])}]; moveToSearchPrefecture("サウナ");',context);
  assert.equal(vm.runInContext('selectedPrefecture',context),"全国");
});
