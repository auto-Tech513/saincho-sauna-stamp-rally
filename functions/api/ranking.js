const KV_KEY = "ranking:v1";
const MAX_RANKING_ENTRIES = 5000;
const PUBLIC_LIMIT = 100;
const TITLE_MILESTONES = [
  { count: 0, title: "湯けむり準備中" },
  { count: 1, title: "はじめの一湯" },
  { count: 5, title: "新米サウナー" },
  { count: 20, title: "初級サウナー" },
  { count: 50, title: "中級サウナー" },
  { count: 100, title: "上級サウナー" },
  { count: 250, title: "玄人サウナー" },
  { count: 400, title: "プロサウナー" },
  { count: 600, title: "名人サウナー" },
  { count: 800, title: "達人サウナー" },
  { count: 1000, title: "永世サウナー" },
  { count: 2000, title: "神人サウナー" },
];

export async function onRequestGet(context) {
  const storage = getStorage(context.env);
  if (!storage) return json({ entries: [], configured: false }, 200);
  const entries = await readEntries(storage);
  return json({ entries: publicEntries(entries), configured: true }, 200);
}

export async function onRequestPost(context) {
  const storage = getStorage(context.env);
  if (!storage) return json({ error: "ranking-storage-not-configured" }, 503);

  let body;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "invalid-json" }, 400);
  }

  const candidate = await normalizeCandidate(body);
  if (!candidate) return json({ error: "invalid-profile" }, 400);

  const entries = await readEntries(storage);
  const withoutCurrent = entries.filter((entry) => entry.id !== candidate.id && entry.emailHash !== candidate.emailHash);
  const next = [
    ...withoutCurrent,
    {
      id: candidate.id,
      nickname: candidate.nickname,
      emailHash: candidate.emailHash,
      stamps: candidate.stamps,
      title: getTitle(candidate.stamps),
      updatedAt: new Date().toISOString(),
    },
  ].sort(sortEntries).slice(0, MAX_RANKING_ENTRIES);

  await storage.put(KV_KEY, JSON.stringify(next));
  return json({ entries: publicEntries(next), configured: true }, 200);
}

function getStorage(env) {
  return env.SAINCHO_RANKINGS || env.SAINCHO_FACILITIES || env.SAUNA_FACILITIES || null;
}

async function readEntries(storage) {
  const value = await storage.get(KV_KEY, "json");
  if (!Array.isArray(value)) return [];
  return value.map(normalizeStoredEntry).filter(Boolean).sort(sortEntries);
}

async function normalizeCandidate(value) {
  if (!value || typeof value !== "object") return null;
  const nickname = cleanText(value.nickname, 16);
  const email = cleanEmail(value.email);
  const participantId = cleanId(value.participantId);
  const stamps = Math.max(0, Math.min(5000, Math.floor(Number(value.stamps) || 0)));
  if (!nickname || !email) return null;
  const emailHash = await sha256(email);
  return {
    id: participantId || `rank-${emailHash.slice(0, 18)}`,
    nickname,
    emailHash,
    stamps,
  };
}

function normalizeStoredEntry(value) {
  if (!value || typeof value !== "object") return null;
  const id = cleanId(value.id);
  const nickname = cleanText(value.nickname, 16);
  const emailHash = typeof value.emailHash === "string" && /^[a-f0-9]{64}$/.test(value.emailHash) ? value.emailHash : "";
  const stamps = Math.max(0, Math.min(5000, Math.floor(Number(value.stamps) || 0)));
  if (!id || !nickname) return null;
  return {
    id,
    nickname,
    emailHash,
    stamps,
    title: getTitle(stamps),
    updatedAt: typeof value.updatedAt === "string" ? value.updatedAt : "",
  };
}

function publicEntries(entries) {
  return entries.sort(sortEntries).slice(0, PUBLIC_LIMIT).map((entry) => ({
    id: entry.id,
    nickname: entry.nickname,
    stamps: entry.stamps,
    title: getTitle(entry.stamps),
    updatedAt: entry.updatedAt,
  }));
}

function sortEntries(a, b) {
  return b.stamps - a.stamps || String(a.updatedAt).localeCompare(String(b.updatedAt)) || a.nickname.localeCompare(b.nickname, "ja");
}

function getTitle(count) {
  return TITLE_MILESTONES.reduce((current, milestone) => (
    count >= milestone.count ? milestone : current
  ), TITLE_MILESTONES[0]).title;
}

function cleanText(value, maxLength) {
  return String(value ?? "").normalize("NFKC").replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function cleanEmail(value) {
  const email = String(value ?? "").normalize("NFKC").trim().toLowerCase().slice(0, 80);
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : "";
}

function cleanId(value) {
  return String(value ?? "").normalize("NFKC").trim().replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 80);
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
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
