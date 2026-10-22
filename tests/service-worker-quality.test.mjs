import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const source = await readFile(new URL("../sw.js", import.meta.url), "utf8");
function harness({ failInstall = false } = {}) {
  const handlers = {}, calls = [], waits = [];
  let finishInstall;
  const installation = new Promise((resolve, reject) => { finishInstall = failInstall ? () => reject(new Error("offline")) : resolve; });
  const context = vm.createContext({ URL, Response,
    self: { location: { origin: "https://example.test" }, addEventListener: (name, fn) => { handlers[name] = fn; }, skipWaiting: () => { calls.push("skipWaiting"); } },
    caches: { open: async () => ({ addAll: paths => { calls.push(paths); return installation; }, put: async () => { calls.push("put"); } }), match: async (request, options) => { calls.push({ request, options }); return null; } },
    fetch: async () => new Response("ok"),
  });
  vm.runInContext(source, context);
  return { handlers, calls, waits, finishInstall, event: { waitUntil: promise => waits.push(promise), respondWith: promise => waits.push(promise) } };
}

test("offline shell includes all application modules and activation waits for successful caching", async () => {
  assert.doesNotMatch(source, /\.\/llms\.txt/);
  const h = harness();
  h.handlers.install(h.event);
  await Promise.resolve(); await Promise.resolve();
  assert.equal(h.calls.includes("skipWaiting"), false);
  assert.ok(h.calls[0].includes("./app.js") && h.calls[0].includes("./data.js") && h.calls[0].includes("./official-page-evidence.js"));
  h.finishInstall();
  await Promise.all(h.waits);
  assert.equal(h.calls.includes("skipWaiting"), true);
});

test("failed shell installation never activates an incomplete replacement", async () => {
  const h = harness({ failInstall: true });
  h.handlers.install(h.event);
  h.finishInstall();
  await assert.rejects(Promise.all(h.waits));
  assert.equal(h.calls.includes("skipWaiting"), false);
});

test("hashed module query variants can reuse offline files, APIs never use the cache", async () => {
  const h = harness();
  h.handlers.fetch({ ...h.event, request: { url: "https://example.test/data.1234abcd.js?v=old", method: "GET" } });
  await Promise.all(h.waits);
  assert.equal(h.calls.find(call => call?.options)?.options.ignoreSearch, true);
  const api = harness();
  api.handlers.fetch({ ...api.event, request: { url: "https://example.test/api/ranking", method: "GET" } });
  await Promise.all(api.waits);
  assert.equal(api.calls.length, 0);
});
