import { DATASET_META, PREFECTURES, SEED_FACILITIES } from "../data.js";
import { GEAR_PRODUCTS, GUIDE_FAQS, SAMESHI_SPOTS, SAUNA_ARTICLES, SAUNA_REFERENCES } from "../content.js";

const errors = [];
const warnings = [];
const prefNames = new Set(PREFECTURES.map((pref) => pref.name));
const prefSlugs = new Set(PREFECTURES.map((pref) => pref.slug));
const idCounts = countBy(SEED_FACILITIES, (facility) => facility.id);
const prefCounts = Object.fromEntries(PREFECTURES.map((pref) => [pref.name, 0]));

for (const facility of SEED_FACILITIES) {
  if (prefCounts[facility.prefecture] !== undefined) prefCounts[facility.prefecture] += 1;
}

assert(PREFECTURES.length === 47, `都道府県が47件ではありません: ${PREFECTURES.length}`);
assert(prefNames.size === 47, "都道府県名に重複があります");
assert(prefSlugs.size === 47, "都道府県slugに重複があります");
assert(SEED_FACILITIES.length >= 5000, `施設候補が5000件未満です: ${SEED_FACILITIES.length}`);
assert(![...idCounts.values()].some((count) => count > 1), "施設IDに重複があります");

for (const pref of PREFECTURES) {
  assert((prefCounts[pref.name] || 0) >= 80, `${pref.name}の候補が80件未満です: ${prefCounts[pref.name] || 0}`);
}

const invalidFacilities = SEED_FACILITIES.filter((facility) => (
  !facility.id || !facility.name || !prefNames.has(facility.prefecture) || !isHttpUrl(facility.sourceUrl)
));
assert(invalidFacilities.length === 0, `必須項目または参照URLが不正な施設が${invalidFacilities.length}件あります`);

const mealCounts = Object.fromEntries(PREFECTURES.map((pref) => [pref.name, 0]));
for (const spot of SAMESHI_SPOTS) {
  if (mealCounts[spot.prefecture] !== undefined) mealCounts[spot.prefecture] += 1;
}
assert(PREFECTURES.every((pref) => mealCounts[pref.name] >= 5), "サ飯候補が5件未満の都道府県があります");
assert(GEAR_PRODUCTS.length >= 30, `Gearが30件未満です: ${GEAR_PRODUCTS.length}`);
assert(SAUNA_ARTICLES.length >= 30, `入門記事が30本未満です: ${SAUNA_ARTICLES.length}`);
assert(GUIDE_FAQS.length >= 8, `FAQが8件未満です: ${GUIDE_FAQS.length}`);
assert(SAUNA_REFERENCES.length >= 4 && SAUNA_REFERENCES.every((item) => isHttpUrl(item.url)), "安全情報の参照URLが不足または不正です");
assert(SAUNA_ARTICLES.every((article) => JSON.stringify(article).length >= 220), "説明量が少なすぎる入門記事があります");

const aliases = findAliasGroups(SEED_FACILITIES);
const metrics = {
  catalogReviewedAt: DATASET_META.catalogReviewedAt || "",
  facilitiesRaw: SEED_FACILITIES.length,
  prefectures: PREFECTURES.length,
  minFacilitiesPerPrefecture: Math.min(...Object.values(prefCounts)),
  maxFacilitiesPerPrefecture: Math.max(...Object.values(prefCounts)),
  aliasesToCanonicalize: aliases.reduce((total, group) => total + group.items.length - 1, 0),
  withAddress: count(SEED_FACILITIES, (facility) => facility.address),
  withCityOrAddress: count(SEED_FACILITIES, (facility) => facility.city || facility.address),
  withOfficialUrl: count(SEED_FACILITIES, (facility) => isHttpUrl(facility.officialUrl)),
  withNote: count(SEED_FACILITIES, (facility) => facility.note),
  withAccess: count(SEED_FACILITIES, (facility) => facility.access),
  gearProducts: GEAR_PRODUCTS.length,
  guideArticles: SAUNA_ARTICLES.length,
  guideFaqs: GUIDE_FAQS.length,
  sameshiSpots: SAMESHI_SPOTS.length,
  minSameshiPerPrefecture: Math.min(...Object.values(mealCounts)),
};

const reviewedAt = new Date(`${metrics.catalogReviewedAt}T00:00:00Z`);
const reviewAgeDays = Number.isNaN(reviewedAt.getTime()) ? Number.POSITIVE_INFINITY : Math.floor((Date.now() - reviewedAt.getTime()) / 86400000);
metrics.catalogReviewAgeDays = reviewAgeDays;
assert(reviewAgeDays <= 60, `カタログ確認日から60日を超えています: ${metrics.catalogReviewedAt || "未設定"}`);

if (metrics.withAddress / metrics.facilitiesRaw < 0.5) warnings.push(`番地住所の掲載率が50%未満です: ${ratio(metrics.withAddress, metrics.facilitiesRaw)}`);
if (metrics.withOfficialUrl / metrics.facilitiesRaw < 0.2) warnings.push(`公式URLの掲載率が20%未満です: ${ratio(metrics.withOfficialUrl, metrics.facilitiesRaw)}`);
if (metrics.withNote / metrics.facilitiesRaw < 0.5) warnings.push(`施設固有の紹介文掲載率が50%未満です: ${ratio(metrics.withNote, metrics.facilitiesRaw)}`);
if (aliases.length) warnings.push(`別名候補${metrics.aliasesToCanonicalize}件をビルド時に正規URLへ統合します`);

console.log(JSON.stringify({ ok: errors.length === 0, metrics, warnings, errors }, null, 2));
if (errors.length) process.exitCode = 1;

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function count(values, predicate) {
  return values.reduce((total, value) => total + (predicate(value) ? 1 : 0), 0);
}

function countBy(values, keyFor) {
  const result = new Map();
  for (const value of values) {
    const key = keyFor(value);
    result.set(key, (result.get(key) || 0) + 1);
  }
  return result;
}

function isHttpUrl(value) {
  try {
    return /^https?:$/.test(new URL(String(value || "")).protocol);
  } catch {
    return false;
  }
}

function ratio(value, total) {
  return `${Math.round((value / Math.max(1, total)) * 100)}% (${value}/${total})`;
}

function findAliasGroups(facilities) {
  const groups = new Map();
  for (const facility of facilities) {
    for (const key of duplicateKeys(facility)) {
      if (!groups.has(key)) groups.set(key, new Map());
      groups.get(key).set(facility.id, facility);
    }
  }
  const uniqueGroups = new Map();
  for (const [key, items] of groups) {
    if (items.size < 2) continue;
    const list = [...items.values()];
    const signature = list.map((item) => item.id).sort().join("|");
    if (!uniqueGroups.has(signature)) uniqueGroups.set(signature, { key, items: list });
  }
  return [...uniqueGroups.values()];
}

function duplicateKeys(facility) {
  const name = normalizeBasic(facility.name);
  const names = new Set([
    normalizeFacilityName(name),
    ...name.split(/[\/／|｜]/).map(normalizeFacilityName),
  ]);
  return [...names].filter((value) => value.length >= 4).map((value) => `${facility.prefecture}:${value}`);
}

function normalizeFacilityName(value) {
  return normalizeBasic(value)
    .split(/[\/／|｜]/)[0]
    .replace(/（[^）]*）/g, "")
    .replace(/\([^)]*\)/g, "")
    .replace(/[\s\u3000・･＆&.．,、/／\\+＋=＝_*＊'’"“”`´\-‐‑‒–—―ーｰ－−﹘﹣─━〜～~〰（）()【】\[\]「」『』：:]/g, "")
    .replace(/天然温泉かけ流し/g, "")
    .replace(/プレミア/g, "");
}

function normalizeBasic(value) {
  return String(value || "").normalize("NFKC").trim().toLowerCase().replace(/\s+/g, " ");
}
