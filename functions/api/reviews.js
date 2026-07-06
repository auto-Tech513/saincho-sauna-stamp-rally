const KV_PREFIX = "reviews:v1:";
const MAX_REVIEWS_PER_FACILITY = 40;
import { checkRateLimit, rateLimitHeaders } from "./_shared.js";

export async function onRequestGet(context) {
  const storage = getStorage(context.env);
  if (!storage) return json({ reviews: [], configured: false }, 200);
  const facilityId = cleanId(new URL(context.request.url).searchParams.get("facilityId"));
  if (!facilityId) return json({ error: "facility-id-required" }, 400);
  const reviews = await readReviews(storage, facilityId);
  return json({ reviews, configured: true }, 200);
}

export async function onRequestPost(context) {
  const storage = getStorage(context.env);
  if (!storage) return json({ error: "reviews-storage-not-configured" }, 503);
  const rateLimit = await checkRateLimit(storage, context.request, "reviews-post", { limit: 12, windowSeconds: 600 });
  if (!rateLimit.ok) return json({ error: "rate-limited" }, 429, rateLimitHeaders(rateLimit));

  let body;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "invalid-json" }, 400);
  }

  const review = normalizeIncomingReview(body);
  if (!review) return json({ error: "invalid-review" }, 400);

  const current = await readReviews(storage, review.facilityId);
  const next = [
    {
      ...review,
      id: `review-${hashId(`${review.facilityId}:${review.clientId}:${review.text}:${Date.now()}`)}`,
      createdAt: new Date().toISOString(),
    },
    ...current,
  ].slice(0, MAX_REVIEWS_PER_FACILITY);
  await storage.put(storageKey(review.facilityId), JSON.stringify(next));
  return json({ reviews: next, configured: true }, 201);
}

export async function onRequestDelete(context) {
  const storage = getStorage(context.env);
  if (!storage) return json({ error: "reviews-storage-not-configured" }, 503);
  const rateLimit = await checkRateLimit(storage, context.request, "reviews-delete", { limit: 40, windowSeconds: 600 });
  if (!rateLimit.ok) return json({ error: "rate-limited" }, 429, rateLimitHeaders(rateLimit));
  const url = new URL(context.request.url);
  const facilityId = cleanId(url.searchParams.get("facilityId"));
  const reviewId = cleanId(url.searchParams.get("reviewId"));
  const clientId = cleanId(url.searchParams.get("clientId"));
  if (!facilityId || !reviewId || !clientId) return json({ error: "delete-params-required" }, 400);
  const current = await readReviews(storage, facilityId);
  const next = current.filter((review) => !(review.id === reviewId && review.clientId === clientId));
  await storage.put(storageKey(facilityId), JSON.stringify(next));
  return json({ reviews: next, configured: true }, 200);
}

function getStorage(env) {
  return env.SAINCHO_REVIEWS || env.SAINCHO_FACILITIES || env.SAUNA_FACILITIES || null;
}

async function readReviews(storage, facilityId) {
  const value = await storage.get(storageKey(facilityId), "json");
  if (!Array.isArray(value)) return [];
  return value.map(normalizeStoredReview).filter(Boolean).slice(0, MAX_REVIEWS_PER_FACILITY);
}

function normalizeIncomingReview(value) {
  if (!value || typeof value !== "object") return null;
  const facilityId = cleanId(value.facilityId);
  const clientId = cleanId(value.clientId);
  const nickname = cleanText(value.nickname, 16) || "匿名サウナー";
  const text = cleanText(value.text, 280);
  const rating = Math.max(1, Math.min(5, Math.floor(Number(value.rating) || 5)));
  if (!facilityId || !clientId || !text) return null;
  return { facilityId, clientId, nickname, text, rating };
}

function normalizeStoredReview(value) {
  const review = normalizeIncomingReview(value);
  const id = cleanId(value?.id);
  if (!review || !id) return null;
  return {
    ...review,
    id,
    createdAt: typeof value.createdAt === "string" ? value.createdAt : "",
  };
}

function storageKey(facilityId) {
  return `${KV_PREFIX}${facilityId}`;
}

function cleanText(value, maxLength) {
  return String(value ?? "").normalize("NFKC").replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function cleanId(value) {
  return String(value ?? "").normalize("NFKC").trim().replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 120);
}

function hashId(value) {
  let hash = 2166136261;
  for (const char of String(value)) {
    hash ^= char.codePointAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}

function json(payload, status, extraHeaders = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...extraHeaders,
    },
  });
}
