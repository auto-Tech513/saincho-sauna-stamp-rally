import { checkRateLimit, rateLimitHeaders } from "./_shared.js";
import { VAPID_PUBLIC_KEY, addSubscription, getPushStorage, isPushConfigured, removeSubscription, validateSubscription } from "./_push.js";

// Web Push の購読登録・解除。送信に必要な秘密鍵は別途シークレットで管理し、
// ここでは購読情報（endpoint と暗号鍵）のみを KV に保存する。
export async function onRequestGet(context) {
  return json({ configured: isPushConfigured(context.env), publicKey: VAPID_PUBLIC_KEY }, 200);
}

export async function onRequestPost(context) {
  const storage = getPushStorage(context.env);
  if (!storage) return json({ error: "push-storage-not-configured" }, 503);

  let body;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "invalid-json" }, 400);
  }

  if (body?.action === "subscribe") {
    const rateLimit = await checkRateLimit(storage, context.request, "push-subscribe", { limit: 10, windowSeconds: 600 });
    if (!rateLimit.ok) return json({ error: "rate-limited" }, 429, rateLimitHeaders(rateLimit));
    const subscription = validateSubscription(body.subscription);
    if (!subscription) return json({ error: "invalid-subscription" }, 400);
    const count = await addSubscription(storage, subscription);
    return json({ ok: true, count }, 201);
  }

  if (body?.action === "unsubscribe") {
    const rateLimit = await checkRateLimit(storage, context.request, "push-unsubscribe", { limit: 30, windowSeconds: 600 });
    if (!rateLimit.ok) return json({ error: "rate-limited" }, 429, rateLimitHeaders(rateLimit));
    const endpoint = String(body.endpoint || "");
    if (!endpoint.startsWith("https://") || endpoint.length > 1024) return json({ error: "invalid-endpoint" }, 400);
    const count = await removeSubscription(storage, endpoint);
    return json({ ok: true, count }, 200);
  }

  return json({ error: "unsupported-action" }, 400);
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
