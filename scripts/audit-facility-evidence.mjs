import { pathToFileURL } from "node:url";
import { SEED_FACILITIES } from "../data.js";
import { FACILITY_EVIDENCE, applyFacilityEvidence, getFacilityEvidence, getMissingEvidenceFields } from "../facility-evidence.js";

export function addressIssues(facility) {
  const address = String(facility.address || "").normalize("NFKC").replace(/\s/g, "");
  if (!address) return [];
  const issues = [];
  if (/内にある|施設[!！]|本社|会社概要|アクセスはこちら|https?:/.test(address)) issues.push("住所欄に紹介文・本社・URLの疑い");
  const prefecture = facility.prefecture || "";
  if (prefecture && address.split(prefecture).length > 2) issues.push("都道府県名の重複");
  const city = String(facility.city || "").normalize("NFKC").replace(/\s/g, "").match(/^(.+?市(?:.+?区)?|.+?郡.+?[町村]|.+?区|.+?[町村])/u)?.[0];
  if (city && !address.includes(city)) issues.push(`市区町村の不一致候補: ${city}`);
  return issues;
}

export function auditEvidence() {
  const facilities = SEED_FACILITIES.map(applyFacilityEvidence);
  const addressCandidates = facilities.flatMap(facility => {
    const issues = addressIssues(facility);
    return issues.length ? [{ id: facility.id, name: facility.name, address: facility.address, issues }] : [];
  });
  const profileErrors = FACILITY_EVIDENCE.flatMap(profile => {
    const errors = [];
    if (!profile.ids.some(id => SEED_FACILITIES.some(facility => facility.id === id))) errors.push("該当IDなし");
    for (const row of profile.facts) {
      if (!row.value || !/^https:\/\//.test(row.sourceUrl) || !/^\d{4}-\d{2}-\d{2}$/.test(row.checkedAt)) errors.push("出典・日付・内容不足");
    }
    return errors.map(error => ({ id: profile.ids[0], error }));
  });
  const placeholderErrors = addressCandidates.filter(item => item.issues.some(issue => issue.startsWith("住所欄")));
  return {
    ok: profileErrors.length === 0 && placeholderErrors.length === 0,
    scope: `全${facilities.length}候補を機械検査。公式サイトとの全件照合を意味しません。市区町村不一致は旧行政区・郡省略も含む要確認候補です。`,
    rawCandidates: facilities.length,
    officialProfiles: FACILITY_EVIDENCE.length,
    sourceDatedFacts: FACILITY_EVIDENCE.reduce((sum, profile) => sum + profile.facts.length, 0),
    withOfficialFacts: facilities.filter(facility => getFacilityEvidence(facility)).length,
    withoutOfficialFacts: facilities.filter(facility => !getFacilityEvidence(facility)).length,
    officialFieldCoveragePercent: Number((facilities.filter(facility => getFacilityEvidence(facility)).length / facilities.length * 100).toFixed(2)),
    meets95PercentOfficialFieldCoverage: facilities.filter(facility => getFacilityEvidence(facility)).length / facilities.length >= 0.95,
    completeSevenCategories: facilities.filter(facility => !getMissingEvidenceFields(facility).length).length,
    remainingAddressCandidates: addressCandidates,
    errors: [...profileErrors, ...placeholderErrors],
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = auditEvidence();
  if (process.argv.includes("--strict") && !result.meets95PercentOfficialFieldCoverage) {
    result.ok = false;
    result.errors.push({ error: "公式項目の掲載率95%に未達。構造検査の成功はデータ網羅性の合格ではありません。" });
  }
  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) process.exitCode = 1;
}
