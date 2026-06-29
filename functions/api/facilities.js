const KV_KEY = "facilities:v1";
const MAX_SHARED_FACILITIES = 2000;
const PREFECTURES = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
  "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
  "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
  "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県",
];
const FEATURES = [
  "ドライサウナ", "遠赤外線サウナ", "スチーム(ミスト)サウナ", "塩サウナ",
  "薪サウナ", "テントサウナ", "バレルサウナ", "セルフロウリュ",
  "アロマロウリュ", "熱波師あり", "水風呂あり", "外気あり", "外気なし",
  "温泉付き", "個室", "貸切可", "水着必須", "タオルレンタルあり",
  "タオルレンタルなし", "サウナハット禁止", "サ飯あり", "サ飯なし",
  "サウナドリンク飲み放題", "宿泊可", "男女共用",
];
const FEATURE_ALIASES = new Map([
  ["外気浴あり", "外気あり"],
  ["外気浴", "外気あり"],
  ["外気浴なし", "外気なし"],
]);
const FEATURE_CONFLICTS = new Map([
  ["外気あり", "外気なし"],
  ["外気なし", "外気あり"],
  ["サ飯あり", "サ飯なし"],
  ["サ飯なし", "サ飯あり"],
  ["タオルレンタルあり", "タオルレンタルなし"],
  ["タオルレンタルなし", "タオルレンタルあり"],
]);

export async function onRequestGet(context) {
  const storage = getStorage(context.env);
  if (!storage) return json({ facilities: [], configured: false }, 200);
  const facilities = await readFacilities(storage);
  return json({ facilities, configured: true }, 200);
}

export async function onRequestPost(context) {
  const storage = getStorage(context.env);
  if (!storage) return json({ error: "shared-storage-not-configured" }, 503);

  let body;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "invalid-json" }, 400);
  }

  const candidate = normalizeCandidate(body);
  if (!candidate) return json({ error: "invalid-facility" }, 400);

  const facilities = await readFacilities(storage);
  const key = facilityKey(candidate);
  const existing = facilities.find((facility) => facilityKey(facility) === key);
  if (existing) return json({ facility: existing, duplicate: true }, 200);
  if (facilities.length >= MAX_SHARED_FACILITIES) return json({ error: "shared-limit-reached" }, 409);

  const facility = {
    id: `shared-${hashId(`${candidate.prefecture}:${candidate.name}`)}`,
    name: candidate.name,
    prefecture: candidate.prefecture,
    city: candidate.city,
    trait: inferTrait(candidate.features),
    tags: ["みんなの追加", ...candidate.features],
    features: candidate.features,
    source: "みんなの追加",
    sourceUrl: "",
    shared: true,
    createdAt: new Date().toISOString(),
  };
  const next = [...facilities, facility].sort((a, b) => a.prefecture.localeCompare(b.prefecture, "ja") || a.name.localeCompare(b.name, "ja"));
  await storage.put(KV_KEY, JSON.stringify(next));
  return json({ facility, duplicate: false }, 201);
}

function getStorage(env) {
  return env.SAINCHO_FACILITIES || env.SAUNA_FACILITIES || null;
}

async function readFacilities(storage) {
  const value = await storage.get(KV_KEY, "json");
  if (!Array.isArray(value)) return [];
  return value.map(normalizeStoredFacility).filter(Boolean);
}

function normalizeCandidate(value) {
  if (!value || typeof value !== "object") return null;
  const name = cleanText(value.name, 64);
  const prefecture = cleanText(value.prefecture, 12);
  const city = cleanText(value.city, 40);
  const features = normalizeFeatures(value.features);
  if (!name || !PREFECTURES.includes(prefecture)) return null;
  return { name, prefecture, city, features };
}

function normalizeStoredFacility(value) {
  const candidate = normalizeCandidate(value);
  if (!candidate) return null;
  const id = typeof value.id === "string" && /^shared-[a-z0-9]+$/.test(value.id)
    ? value.id
    : `shared-${hashId(`${candidate.prefecture}:${candidate.name}`)}`;
  return {
    id,
    name: candidate.name,
    prefecture: candidate.prefecture,
    city: candidate.city,
    trait: inferTrait(candidate.features),
    tags: ["みんなの追加", ...candidate.features],
    features: candidate.features,
    source: "みんなの追加",
    sourceUrl: "",
    shared: true,
    createdAt: typeof value.createdAt === "string" ? value.createdAt : "",
  };
}

function normalizeFeatures(values) {
  if (!Array.isArray(values)) return [];
  const selected = [];
  values.forEach((value) => {
    const normalized = String(value).normalize("NFKC").trim();
    const feature = FEATURES.includes(normalized) ? normalized : FEATURE_ALIASES.get(normalized);
    if (!feature) return;
    const conflict = FEATURE_CONFLICTS.get(feature);
    if (conflict) {
      const conflictIndex = selected.indexOf(conflict);
      if (conflictIndex >= 0) selected.splice(conflictIndex, 1);
    }
    if (!selected.includes(feature)) selected.push(feature);
  });
  return FEATURES.filter((feature) => selected.includes(feature));
}

function inferTrait(features) {
  if (features.includes("温泉付き")) return "onsen";
  if (features.some((feature) => ["薪サウナ", "テントサウナ", "バレルサウナ"].includes(feature))) return "wood";
  if (features.some((feature) => ["個室", "貸切可"].includes(feature))) return "custom";
  if (features.includes("水風呂あり")) return "water";
  return "urban";
}

function cleanText(value, maxLength) {
  return String(value ?? "").normalize("NFKC").replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function facilityKey(facility) {
  return `${facility.prefecture}:${normalizeName(facility.name)}`;
}

function normalizeName(value) {
  return String(value)
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[＆&]/g, "")
    .replace(/[\s　・･.．\-ー－〜～~（）()【】[\]「」『』：:]/g, "")
    .replace(/天然温泉かけ流し|プレミア/g, "");
}

function hashId(value) {
  let hash = 2166136261;
  for (const char of normalizeName(value)) {
    hash ^= char.codePointAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}

function json(payload, status) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
