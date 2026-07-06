const KV_PREFIX = "contacts:v1:";
const MAX_TEXT = 1200;
import { checkRateLimit, rateLimitHeaders } from "./_shared.js";

export async function onRequestPost(context) {
  const storage = getStorage(context.env);
  if (!storage) return json({ configured: false, error: "contact-storage-not-configured" }, 503);
  const rateLimit = await checkRateLimit(storage, context.request, "contact-post", { limit: 5, windowSeconds: 3600 });
  if (!rateLimit.ok) return json({ error: "rate-limited" }, 429, rateLimitHeaders(rateLimit));

  let body;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "invalid-json" }, 400);
  }

  const inquiry = normalizeInquiry(body);
  if (!inquiry) return json({ error: "invalid-contact" }, 400);

  const id = `contact-${Date.now().toString(36)}-${hashId(`${inquiry.email}:${inquiry.message}`)}`;
  await storage.put(`${KV_PREFIX}${id}`, JSON.stringify({
    ...inquiry,
    id,
    createdAt: new Date().toISOString(),
  }));
  return json({ configured: true, id }, 201);
}

function getStorage(env) {
  return env.SAINCHO_CONTACTS || env.SAINCHO_FACILITIES || env.SAUNA_FACILITIES || null;
}

function normalizeInquiry(value) {
  if (!value || typeof value !== "object") return null;
  const type = cleanText(value.type, 40);
  const email = cleanEmail(value.email);
  const message = cleanText(value.message, MAX_TEXT);
  if (!type || !email || !message) return null;
  return {
    type,
    email,
    message,
    organization: cleanText(value.organization, 80),
    name: cleanText(value.name, 40),
    website: cleanUrlText(value.website, 180),
    prefecture: cleanText(value.prefecture, 40),
    page: cleanUrlText(value.page, 220),
  };
}

function cleanText(value, maxLength) {
  return String(value ?? "").normalize("NFKC").replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function cleanUrlText(value, maxLength) {
  return String(value ?? "").normalize("NFKC").replace(/[<>"'`]/g, "").trim().slice(0, maxLength);
}

function cleanEmail(value) {
  const email = String(value ?? "").normalize("NFKC").trim().toLowerCase().slice(0, 120);
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : "";
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
