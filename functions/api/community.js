import { checkRateLimit, rateLimitHeaders } from "./_shared.js";

const STORAGE_KEY = "community:v1";
const MAX_EVENTS = 80;
const MAX_ATTENDEES = 30;

export async function onRequestGet(context) {
  const storage = getStorage(context.env);
  if (!storage) return json({ events: [], configured: false }, 200);
  return json({ events: publicEvents(await readEvents(storage)), configured: true }, 200);
}

export async function onRequestPost(context) {
  const storage = getStorage(context.env);
  if (!storage) return json({ error: "community-storage-not-configured" }, 503);
  const rateLimit = await checkRateLimit(storage, context.request, "community-post", { limit: 20, windowSeconds: 600 });
  if (!rateLimit.ok) return json({ error: "rate-limited" }, 429, rateLimitHeaders(rateLimit));

  let body;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "invalid-json" }, 400);
  }

  const events = await readEvents(storage);
  if (body?.action === "join") {
    const eventId = cleanId(body.eventId);
    const clientId = cleanId(body.clientId);
    if (!eventId || !clientId) return json({ error: "join-params-required" }, 400);
    let found = false;
    const next = events.map((event) => {
      if (event.id !== eventId) return event;
      found = true;
      return { ...event, attendees: [...new Set([...event.attendees, clientId])].slice(0, MAX_ATTENDEES) };
    });
    if (!found) return json({ error: "event-not-found" }, 404);
    await storage.put(STORAGE_KEY, JSON.stringify(next));
    return json({ events: publicEvents(next), configured: true }, 200);
  }

  if (body?.action !== "create") return json({ error: "unsupported-action" }, 400);
  const incoming = normalizeIncomingEvent(body);
  if (!incoming) return json({ error: "invalid-event" }, 400);
  const event = {
    ...incoming,
    id: `event-${hashId(`${incoming.clientId}:${incoming.title}:${incoming.date}:${Date.now()}`)}`,
    hostId: incoming.clientId,
    attendees: [],
    createdAt: new Date().toISOString(),
  };
  delete event.clientId;
  const next = [event, ...events].slice(0, MAX_EVENTS);
  await storage.put(STORAGE_KEY, JSON.stringify(next));
  return json({ events: publicEvents(next), configured: true }, 201);
}

function getStorage(env) {
  return env.SAINCHO_REVIEWS || env.SAINCHO_FACILITIES || env.SAUNA_FACILITIES || null;
}

async function readEvents(storage) {
  const value = await storage.get(STORAGE_KEY, "json");
  if (!Array.isArray(value)) return [];
  const cutoff = Date.now() - 6 * 60 * 60 * 1000;
  return value
    .map(normalizeStoredEvent)
    .filter((event) => event && Date.parse(event.date) >= cutoff)
    .sort((a, b) => String(a.date).localeCompare(String(b.date)))
    .slice(0, MAX_EVENTS);
}

function normalizeIncomingEvent(value) {
  if (!value || typeof value !== "object") return null;
  const title = cleanText(value.title, 48);
  const prefecture = cleanText(value.prefecture, 12);
  const venue = cleanText(value.venue, 64);
  const note = cleanText(value.note, 180);
  const nickname = cleanText(value.nickname, 16) || "匿名サウナー";
  const clientId = cleanId(value.clientId);
  const dateValue = Date.parse(value.date);
  const maxDate = Date.now() + 366 * 24 * 60 * 60 * 1000;
  if (!title || !prefecture || !venue || !clientId || !Number.isFinite(dateValue) || dateValue <= Date.now() || dateValue > maxDate) return null;
  return { title, prefecture, venue, note, nickname, clientId, date: new Date(dateValue).toISOString() };
}

function normalizeStoredEvent(value) {
  const id = cleanId(value?.id);
  const hostId = cleanId(value?.hostId);
  const title = cleanText(value?.title, 48);
  const prefecture = cleanText(value?.prefecture, 12);
  const venue = cleanText(value?.venue, 64);
  const dateValue = Date.parse(value?.date);
  if (!id || !hostId || !title || !prefecture || !venue || !Number.isFinite(dateValue)) return null;
  return {
    id,
    hostId,
    title,
    prefecture,
    venue,
    date: new Date(dateValue).toISOString(),
    note: cleanText(value?.note, 180),
    nickname: cleanText(value?.nickname, 16) || "匿名サウナー",
    attendees: [...new Set(Array.isArray(value?.attendees) ? value.attendees.map(cleanId).filter(Boolean) : [])].slice(0, MAX_ATTENDEES),
    createdAt: typeof value?.createdAt === "string" ? value.createdAt : "",
  };
}

function publicEvents(events) {
  return events.map(({ attendees, ...event }) => ({ ...event, attendeeCount: attendees.length }));
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
