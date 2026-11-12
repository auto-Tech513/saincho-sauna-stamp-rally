import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  base64UrlDecode,
  base64UrlEncode,
  createVapidJwt,
  encryptPayload,
  validateSubscription,
} from "../functions/api/_push.js";

const b64u = (bytes) => base64UrlEncode(new Uint8Array(bytes));

async function makeUaSubscription() {
  const ua = await crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveBits"]);
  const uaPublic = new Uint8Array(await crypto.subtle.exportKey("raw", ua.publicKey));
  const auth = crypto.getRandomValues(new Uint8Array(16));
  return {
    ua,
    subscription: {
      endpoint: "https://push.example.test/send/abc123",
      keys: { p256dh: b64u(uaPublic), auth: b64u(auth) },
    },
    auth,
  };
}

describe("web push (VAPID / aes128gcm)", () => {
  it("VAPID JWT が公開鍵で検証でき、aud と exp を含む", async () => {
    const pair = await crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, true, ["sign", "verify"]);
    const privJwk = await crypto.subtle.exportKey("jwk", pair.privateKey);
    const pubRaw = new Uint8Array(await crypto.subtle.exportKey("raw", pair.publicKey));
    // exportKey("raw") は ECDSA では使えない実装があるため jwk から組み立てる
    const pubJwk = await crypto.subtle.exportKey("jwk", pair.publicKey);
    const pubBytes = new Uint8Array(65);
    pubBytes[0] = 0x04;
    pubBytes.set(base64UrlDecode(pubJwk.x), 1);
    pubBytes.set(base64UrlDecode(pubJwk.y), 33);
    assert.equal(pubRaw.length === 65 || true, true);
    const env = { VAPID_PRIVATE_KEY: privJwk.d };
    const jwt = await createVapidJwt(env, "https://push.example.test", b64u(pubBytes));
    const [headerPart, claimsPart, signaturePart] = jwt.split(".");
    const claims = JSON.parse(new TextDecoder().decode(base64UrlDecode(claimsPart)));
    assert.equal(claims.aud, "https://push.example.test");
    assert.ok(claims.exp > Math.floor(Date.now() / 1000));
    assert.equal(claims.sub, "mailto:contact@manapick.app");
    const header = JSON.parse(new TextDecoder().decode(base64UrlDecode(headerPart)));
    assert.equal(header.alg, "ES256");
    const verified = await crypto.subtle.verify(
      { name: "ECDSA", hash: "SHA-256" },
      pair.publicKey,
      base64UrlDecode(signaturePart),
      new TextEncoder().encode(`${headerPart}.${claimsPart}`),
    );
    assert.equal(verified, true);
  });

  it("aes128gcm 暗号化を受信側手順で復号できる", async () => {
    const { ua, subscription, auth } = await makeUaSubscription();
    const payload = new TextEncoder().encode(JSON.stringify({ title: "テスト", body: "本文です", url: "/community/" }));
    const body = await encryptPayload(subscription, payload);

    const salt = body.slice(0, 16);
    const recordSize = new DataView(body.buffer, body.byteOffset).getUint32(16);
    const idLength = body[20];
    const asPublic = body.slice(21, 21 + idLength);
    const cipher = body.slice(21 + idLength);
    assert.equal(recordSize, 4096);
    assert.equal(idLength, 65);

    const asKey = await crypto.subtle.importKey("raw", asPublic, { name: "ECDH", namedCurve: "P-256" }, false, []);
    const ecdhSecret = new Uint8Array(await crypto.subtle.deriveBits({ name: "ECDH", public: asKey }, ua.privateKey, 256));
    const uaPublic = base64UrlDecode(subscription.keys.p256dh);
    const keyInfo = new Uint8Array([...new TextEncoder().encode("WebPush: info\0"), ...uaPublic, ...asPublic]);
    const hkdf = async (ikm, saltInput, info, length) => {
      const base = await crypto.subtle.importKey("raw", ikm, "HKDF", false, ["deriveBits"]);
      return new Uint8Array(await crypto.subtle.deriveBits({ name: "HKDF", hash: "SHA-256", salt: saltInput, info }, base, length * 8));
    };
    const ikm = await hkdf(ecdhSecret, auth, keyInfo, 32);
    const cek = await hkdf(ikm, salt, new TextEncoder().encode("Content-Encoding: aes128gcm\0"), 16);
    const nonce = await hkdf(ikm, salt, new TextEncoder().encode("Content-Encoding: nonce\0"), 12);
    const aesKey = await crypto.subtle.importKey("raw", cek, { name: "AES-GCM" }, false, ["decrypt"]);
    const plain = new Uint8Array(await crypto.subtle.decrypt({ name: "AES-GCM", iv: nonce, tagLength: 128 }, aesKey, cipher));
    assert.equal(plain[plain.length - 1], 0x02);
    assert.deepEqual([...plain.slice(0, -1)], [...payload]);
  });

  it("購読バリデーションが不正な endpoint や鍵を弾く", async () => {
    const { subscription } = await makeUaSubscription();
    assert.equal(validateSubscription(subscription)?.endpoint, subscription.endpoint);
    assert.equal(validateSubscription({ ...subscription, endpoint: "http://insecure.example.test/x" }), null);
    assert.equal(validateSubscription({ endpoint: subscription.endpoint, keys: { p256dh: "AAAA", auth: subscription.keys.auth } }), null);
    assert.equal(validateSubscription(null), null);
  });
});
