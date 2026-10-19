import { load } from "cheerio";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { DATASET_META, PREFECTURES, SEED_FACILITIES } from "../data.js";
import { addressIssues } from "./audit-facility-evidence.mjs";

const apply = process.argv.includes("--apply");
const limit = Number(process.argv.find(arg => arg.startsWith("--limit="))?.split("=")[1]) || Infinity;
const targets = SEED_FACILITIES.filter(item => /^https:\/\/saunatime\.jp\/saunas\/\d+\/$/.test(item.sourceUrl)).slice(0, limit);
const checkedAt = new Intl.DateTimeFormat("en-CA", {timeZone:"Asia/Tokyo"}).format(new Date());
const results = [];
const blockedHosts = new Set();
let cursor = 0;

await Promise.all(Array.from({length: 4}, async () => {
  while (cursor < targets.length) {
    const facility = targets[cursor++];
    const result = await inspect(facility);
    results.push(result);
    if (apply && result.valid) {
      facility.sourceCheckedAt = checkedAt;
      if (result.address && !/^https?:\/\//.test(facility.addressSource || "")) {
        facility.address = result.address;
        facility.addressSource = "SaunaTime参照ページ";
        facility.addressCheckedAt = checkedAt;
      }
      if (result.officialUrl) {
        facility.officialUrl = result.officialUrl;
        facility.officialUrlSource = facility.sourceUrl;
      }
      if (result.latitude && result.longitude) {
        facility.lat = result.latitude;
        facility.lng = result.longitude;
      }
    }
    if (results.length % 100 === 0) console.log(`Checked ${results.length}/${targets.length}; matched ${results.filter(r=>r.valid).length}`);
    await new Promise(resolve => setTimeout(resolve, 200));
  }
}));

await mkdir(new URL("../output/catalog/",import.meta.url),{recursive:true});
await writeFile(new URL(`../output/catalog/refresh-${checkedAt}.json`,import.meta.url),JSON.stringify({checkedAt,apply,results},null,2));
if (apply) {
  DATASET_META.lastSourceAuditAt = checkedAt;
  DATASET_META.lastSourceAuditScope = `SaunaTime施設別参照ページ${results.filter(r=>r.valid).length}件。全施設の営業状況確認を意味しません。`;
  const output = `// Generated data for サ印帳. Edit source lists carefully; keep sourceUrl as the verification page.\nexport const DATASET_META = ${JSON.stringify(DATASET_META,null,2)};\n\nexport const PREFECTURES = ${JSON.stringify(PREFECTURES,null,2)};\n\nexport const SEED_FACILITIES = ${JSON.stringify(SEED_FACILITIES,null,2)};\n`;
  await writeFile(new URL("../data.js", import.meta.url),output);
}
console.log(JSON.stringify({targets:targets.length,matched:results.filter(r=>r.valid).length,addresses:results.filter(r=>r.address).length,changedAddresses:results.filter(r=>r.address && r.address!==r.previousAddress).length,officialLinks:results.filter(r=>r.officialUrl).length,errors:results.filter(r=>r.error).length,report:`output/catalog/refresh-${checkedAt}.json`},null,2));

async function inspect(facility) {
  const base = {id:facility.id,name:facility.name,url:facility.sourceUrl,previousAddress:facility.address||""};
  const host = new URL(facility.sourceUrl).host;
  if (blockedHosts.has(host)) return {...base,error:"host-blocked"};
  try {
    const response = await fetch(facility.sourceUrl,{headers:{"user-agent":"SainchoCatalogAudit/2.0 (+https://saincho-sauna-stamp-rally.pages.dev/about/)"},signal:AbortSignal.timeout(12000)});
    if ([403,429].includes(response.status)) { blockedHosts.add(host); return {...base,error:`HTTP ${response.status}`}; }
    if (!response.ok) return {...base,error:`HTTP ${response.status}`};
    const html = await response.text();
    const $ = load(html);
    const title = $("meta[property='og:title']").attr("content") || $("h1").text();
    if (!normalize(title).includes(normalize(facility.name))) return {...base,error:"facility-name-mismatch",title};
    const address = $(".sauna-access .address").text().normalize("NFKC").replace(/^\s*住所[：:]\s*/,"").replace(/\s+/g," ").trim();
    if (address && (!address.includes(facility.prefecture) || address.length>180 || !/\d/.test(address))) return {...base,error:"address-invalid",observedAddress:address};
    const issues = addressIssues({ ...facility, address });
    if (issues.length) return {...base,error:"address-review-required",observedAddress:address,issues};
    const officialCandidate = $(".sauna-official-page a[href]").first().attr("href") || "";
    const officialUrl = /^https?:\/\//.test(officialCandidate) && !/saunatime\.jp|sauna-ikitai\.com/.test(new URL(officialCandidate).host) ? officialCandidate : "";
    const latitude = Number($(".sauna-access .latitude").text());
    const longitude = Number($(".sauna-access .longitude").text());
    return {...base,valid:true,address,officialUrl,latitude:latitude>=20&&latitude<=46?latitude:null,longitude:longitude>=122&&longitude<=154?longitude:null};
  } catch(error) { return {...base,error:error.name}; }
}

function normalize(value) {
  return String(value).normalize("NFKC").toLowerCase().replace(/[\s・･&＆〜～ーｰ\-()（）]/g,"");
}
