export async function checkRateLimit(storage, request, scope, options = {}) {
  if (!storage) return { ok: true };
  const limit = Math.max(1, Math.floor(Number(options.limit) || 20));
  const windowSeconds = Math.max(30, Math.floor(Number(options.windowSeconds) || 600));
  const now = Date.now();
  const bucket = Math.floor(now / (windowSeconds * 1000));
  const client = await clientHash(request);
  const key = `rate:v1:${scope}:${bucket}:${client}`;
  const current = await storage.get(key, "json").catch(() => null);
  const count = Number(current?.count || 0);
  const resetAt = (bucket + 1) * windowSeconds * 1000;
  if (count >= limit) {
    return {
      ok: false,
      retryAfter: Math.max(1, Math.ceil((resetAt - now) / 1000)),
    };
  }
  await storage.put(key, JSON.stringify({ count: count + 1, resetAt: new Date(resetAt).toISOString() }), {
    expirationTtl: windowSeconds + 90,
  }).catch(() => null);
  return { ok: true };
}

export function rateLimitHeaders(result) {
  return {
    "retry-after": String(result.retryAfter || 60),
  };
}

async function clientHash(request) {
  const ip = request.headers.get("cf-connecting-ip")
    || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || "unknown-ip";
  const ua = request.headers.get("user-agent") || "unknown-agent";
  const raw = `${ip}:${ua.slice(0, 160)}`;
  if (globalThis.crypto?.subtle) {
    const bytes = new TextEncoder().encode(raw);
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("").slice(0, 32);
  }
  return fallbackHash(raw);
}

function fallbackHash(value) {
  let hash = 2166136261;
  for (const char of String(value)) {
    hash ^= char.codePointAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}
