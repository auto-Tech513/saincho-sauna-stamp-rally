import { readFile, writeFile } from "node:fs/promises";
import { SEED_FACILITIES } from "../data.js";
import { parseOfficialEvidence } from "./official-evidence-parser.mjs";
import { CURATED_FACILITY_EVIDENCE } from "../facility-evidence.js";

const report = JSON.parse(await readFile(new URL("../output/official-audit/report.json", import.meta.url), "utf8"));
const profiles = [];
const rejected = [];
const curatedIds = new Set(CURATED_FACILITY_EVIDENCE.flatMap(profile => profile.ids));
// Operator / municipal facility sites reviewed for this import. Associations are not operators.
const operatorHosts = new Set([
  "www.s-re.jp", "www.jexer.jp", "www.heart-herb.co.jp", "takanokono.jp", "soratomori.com",
  "h-pacific.com", "chipsk.jp", "mecena-sueyoshi.com", "ryusenjinoyu.com", "sauna-spot.com",
  "www.pearlpier.com", "www.tsutakijuku.jp", "www.city.beppu.oita.jp", "pokaon.net",
  "www.honokanoyu.jp", "www.nanaironoyu.com", "yutokuonsen.com", "suisyun.jp", "coco-villa.jp",
  "www.gokurakuyu.ne.jp", "yozan.gokurakuyu.jp", "www.abucreation.com", "www.benifuji.co.jp",
]);
for (const row of report.results) {
  if (row.error) continue;
  if (curatedIds.has(row.id)) continue;
  if (!operatorHosts.has(new URL(row.sourceUrl).host)) {
    rejected.push({ id: row.id, name: row.name, reason: "運営者・自治体の施設サイトとして今回の採用対象にしていない" });
    continue;
  }
  const facility = SEED_FACILITIES.find(item => item.id === row.id);
  const { html } = JSON.parse(await readFile(row.cacheFile, "utf8"));
  const profile = parseOfficialEvidence(html, facility, row.sourceUrl, row.checkedAt);
  if (profile) profiles.push(profile);
  else rejected.push({ id: row.id, name: row.name, reason: "施設名一致・対象項目の両方を満たさない" });
}
profiles.sort((a,b) => a.ids[0].localeCompare(b.ids[0]));
await writeFile(new URL("../official-page-evidence.js", import.meta.url), `// Generated from identity-matched official labeled fields; not a whole-catalog verification.\nexport const OFFICIAL_PAGE_EVIDENCE = ${JSON.stringify(profiles, null, 2)};\n`);
await writeFile(new URL("../output/official-audit/compiled.json", import.meta.url), JSON.stringify({ profiles: profiles.length, facts: profiles.reduce((n,p)=>n+p.facts.length,0), rejected }, null, 2));
console.log(JSON.stringify({ fetched: report.results.filter(r=>!r.error).length, profiles: profiles.length, facts: profiles.reduce((n,p)=>n+p.facts.length,0), rejected: rejected.length }));
