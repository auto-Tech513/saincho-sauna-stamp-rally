// Web Push の購読管理と送信（VAPID / aes128gcm、RFC 8291・8292）。
// 秘密鍵は Cloudflare Pages のシークレット VAPID_PRIVATE_KEY（P-256 の d 値、base64url）から読む。
// 未設定の間は送信を自動でスキップし、機能全体が無効化される（購読登録だけが先行可能）。

export const VAPID_PUBLIC_KEY = "BDrZSIx8EnTWyOrHtUZqj5Gp90y_fk_cn0mgSD8oQWm_dsNmxfmAjOiyIwl5kSvdLvyELSoogO64SIMQlrJ8naM";
const VAPID_SUBJECT = "mailto:contact@manapick.app";
const SUBSCRIPTIONS_KEY = "push:subs:v1";
const MAX_SUBSCRIPTIONS = 2000;

export function getPushStorage(env) {
  return env?.SAINCHO_REVIEWS || env?.SAINCHO_FACILITIES || env?.SAUNA_FACILITIES || null;
}

export function isPushConfigured(env) {
  return Boolean(env?.VAPID_PRIVATE_KEY);
}

export async function readSubscriptions(storage) {
  const value = await storage.get(SUBSCRIPTIONS_KEY, "json").catch(() => null);
  if (!Array.isArray(value)) return [];
  return value.filter((sub) => sub && typeof sub.endpoint === "string" && sub.keys?.p256dh && sub.keys?.auth);
}

export async function addSubscription(storage, subscription) {
  const subs = await readSubscriptions(storage);
  const next = subs.filter((sub) => sub.endpoint !== subscription.endpoint);
  next.push({ ...subscription, createdAt: new Date().toISOString() });
  await storage.put(SUBSCRIPTIONS_KEY, JSON.stringify(next.slice(-MAX_SUBSCRIPTIONS)));
  return next.length;
}

export async function removeSubscription(storage, endpoint) {
  const subs = await readSubscriptions(storage);
  const next = subs.filter((sub) => sub.endpoint !== endpoint);
  if (next.length !== subs.length) await storage.put(SUBSCRIPTIONS_KEY, JSON.stringify(next));
  return next.length;
}

export function validateSubscription(value) {
  if (!value || typeof value !== "object") return null;
  let url;
  try {
    url = new URL(String(value.endpoint || ""));
  } catch {
    return null;
  }
  if (url.protocol !== "https:" || url.href.length > 1024) return null;
  const p256dh = String(value.keys?.p256dh || "");
  const auth = String(value.keys?.auth || "");
  const uaPublic = base64UrlDecode(p256dh);
  const authBytes = base64UrlDecode(auth);
  if (!uaPublic || uaPublic.length !== 65 || uaPublic[0] !== 0x04) return null;
  if (!authBytes || authBytes.length < 16) return null;
  return { endpoint: url.href, keys: { p256dh, auth } };
}

// 新しいサ活募集の作成時に呼ばれる。未設定・購読ゼロなら何もしない。
export async function sendPushForNewEvent(storage, env, event) {
  if (!storage || !isPushConfigured(env)) return { sent: 0, skipped: "not-configured" };
  const subs = await readSubscriptions(storage);
  if (!subs.length) return { sent: 0, skipped: "no-subscribers" };
  const dateText = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo", month: "numeric", day: "numeric", weekday: "short", hour: "2-digit", minute: "2-digit",
  }).format(new Date(event.date));
  const payload = {
    title: "新しいサ活募集があります",
    body: `${event.prefecture}｜${event.venue}「${event.title}」（${dateText}）`,
    url: "/community/",
    tag: `community-${event.id}`,
  };
  return sendPushToAll(storage, env, subs, payload);
}

export async function sendPushToAll(storage, env, subs, payload) {
  const plaintext = new TextEncoder().encode(JSON.stringify(payload));
  let sent = 0;
  const dead = [];
  for (let i = 0; i < subs.length; i += 10) {
    const batch = subs.slice(i, i + 10);
    await Promise.all(batch.map(async (sub) => {
      try {
        const status = await sendOne(env, sub, plaintext);
        if (status >= 200 && status < 300) sent += 1;
        else if (status === 404 || status === 410) dead.push(sub.endpoint);
      } catch {
        // 個別の送信失敗は全体を止めない。
      }
    }));
  }
  for (const endpoint of dead) await removeSubscription(storage, endpoint);
  return { sent, removed: dead.length };
}

async function sendOne(env, subscription, plaintext) {
  const body = await encryptPayload(subscription, plaintext);
  const audience = new URL(subscription.endpoint).origin;
  const jwt = await createVapidJwt(env, audience);
  const response = await fetch(subscription.endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/octet-stream",
      "content-encoding": "aes128gcm",
      ttl: "3600",
      urgency: "normal",
      authorization: `vapid t=${jwt}, k=${VAPID_PUBLIC_KEY}`,
    },
    body,
  });
  return response.status;
}

// VAPID (RFC 8292): ES256 で署名した JWT を作る。
export async function createVapidJwt(env, audience, publicKey = VAPID_PUBLIC_KEY) {
  const privateBytes = base64UrlDecode(String(env?.VAPID_PRIVATE_KEY || ""));
  if (!privateBytes || privateBytes.length !== 32) throw new Error("vapid-private-key-invalid");
  const publicBytes = base64UrlDecode(publicKey);
  const jwk = {
    kty: "EC",
    crv: "P-256",
    x: base64UrlEncode(publicBytes.slice(1, 33)),
    y: base64UrlEncode(publicBytes.slice(33, 65)),
    d: base64UrlEncode(privateBytes),
  };
  const key = await crypto.subtle.importKey("jwk", jwk, { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
  const header = { typ: "JWT", alg: "ES256" };
  const claims = { aud: audience, exp: Math.floor(Date.now() / 1000) + 12 * 60 * 60, sub: VAPID_SUBJECT };
  const unsigned = `${base64UrlEncode(new TextEncoder().encode(JSON.stringify(header)))}.${base64UrlEncode(new TextEncoder().encode(JSON.stringify(claims)))}`;
  const signature = await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, key, new TextEncoder().encode(unsigned));
  return `${unsigned}.${base64UrlEncode(new Uint8Array(signature))}`;
}

// aes128gcm (RFC 8291): 購読者の公開鍵と auth secret でペイロードを暗号化する。
export async function encryptPayload(subscription, plaintext) {
  const uaPublic = base64UrlDecode(subscription.keys.p256dh);
  const authSecret = base64UrlDecode(subscription.keys.auth);
  if (!uaPublic || !authSecret) throw new Error("subscription-keys-invalid");
  const ephemeral = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"]);
  const asPublic = new Uint8Array(await crypto.subtle.exportKey("raw", ephemeral.publicKey));
  const uaKey = await crypto.subtle.importKey("raw", uaPublic, { name: "ECDH", namedCurve: "P-256" }, false, []);
  const ecdhSecret = new Uint8Array(await crypto.subtle.deriveBits({ name: "ECDH", public: uaKey }, ephemeral.privateKey, 256));

  const keyInfo = concatBytes(new TextEncoder().encode("WebPush: info\0"), uaPublic, asPublic);
  const ikm = await hkdf(ecdhSecret, authSecret, keyInfo, 32);
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const cek = await hkdf(ikm, salt, new TextEncoder().encode("Content-Encoding: aes128gcm\0"), 16);
  const nonce = await hkdf(ikm, salt, new TextEncoder().encode("Content-Encoding: nonce\0"), 12);

  const aesKey = await crypto.subtle.importKey("raw", cek, { name: "AES-GCM" }, false, ["encrypt"]);
  const padded = concatBytes(plaintext, new Uint8Array([0x02]));
  const cipher = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: nonce, tagLength: 128 }, aesKey, padded));

  const header = new Uint8Array(16 + 4 + 1 + asPublic.length);
  header.set(salt, 0);
  new DataView(header.buffer).setUint32(16, 4096);
  header[20] = asPublic.length;
  header.set(asPublic, 21);
  return concatBytes(header, cipher);
}

async function hkdf(ikm, salt, info, length) {
  const base = await crypto.subtle.importKey("raw", ikm, "HKDF", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "HKDF", hash: "SHA-256", salt, info }, base, length * 8);
  return new Uint8Array(bits);
}

function concatBytes(...parts) {
  const total = parts.reduce((sum, part) => sum + part.length, 0);
  const out = new Uint8Array(total);
  let offset = 0;
  for (const part of parts) {
    out.set(part, offset);
    offset += part.length;
  }
  return out;
}

export function base64UrlEncode(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}

export function base64UrlDecode(text) {
  try {
    const normalized = String(text).replaceAll("-", "+").replaceAll("_", "/");
    const padded = normalized + "=".repeat((4 - (normalized.length % 4)) % 4);
    const binary = atob(padded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    return bytes;
  } catch {
    return null;
  }
}
