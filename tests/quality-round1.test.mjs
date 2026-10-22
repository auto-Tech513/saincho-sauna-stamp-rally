import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import { webcrypto } from "node:crypto";
import * as nearby from "../nearby.js";
import * as evidence from "../facility-evidence.js";

const source = (await readFile(new URL("../app.js", import.meta.url), "utf8"))
  .replace(/^import\s*\{[\s\S]*?from "\.\/nearby.js";/, "")
  .replace(/^import[^\n]*from "\.\/facility-evidence.js";/m, "")
  .replace(/\ninit\(\);/, "\n");
const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
function harness() {
  let failWrite = false, geoCalls = 0;
  const writes = [], status = { textContent: "" };
  const context = vm.createContext({ ...nearby, ...evidence, URL, URLSearchParams, crypto: webcrypto, performance, console, AbortSignal,
    localStorage: { getItem: () => null, setItem: (key, value) => { if (failWrite) throw new Error("QuotaExceededError"); writes.push({ key, value }); } },
    location: { hostname: "localhost", pathname: "/", protocol: "http:", port: "8788" },
    window: { matchMedia: () => ({ matches: false }), setTimeout, clearTimeout },
    navigator: { geolocation: { getCurrentPosition: resolve => { geoCalls++; resolve({ coords: {} }); } } },
    document: { querySelector: () => status, querySelectorAll: () => [] },
  });
  vm.runInContext(source, context);
  vm.runInContext('invalidateFacilityCaches=()=>{}; renderAll=()=>{}; showToast=()=>{}; el.settingsDialog={open:false};', context);
  return { context, writes, status, run: code => vm.runInContext(code, context), fail: () => { failWrite = true; }, geoCalls: () => geoCalls };
}
function payload(state = {}) {
  return JSON.stringify({ app: "saincho", version: 1, state: { visited: { sample: { at: "2026-10-22T00:00:00Z" } }, wishlist: {}, favorites: {}, customFacilities: [], ...state } });
}

test("foreign JSON, future versions, malformed maps and prototype keys cannot replace records", () => {
  const h = harness();
  h.run('state.visited.keep={at:"2026-10-22T00:00:00Z"}');
  for (const text of ['{}', '[]', '{"state":{}}', payload().replace('"version":1', '"version":2'), payload({ visited: [] }), payload({ visited: { invalid: true } }), '{"__proto__":{}}']) {
    h.context.text = text;
    assert.throws(() => h.run('parseRecordBackup(text)'));
  }
  assert.equal(h.run('Boolean(state.visited.keep)'), true);
  assert.equal(h.writes.length, 0);
});

test("valid backup keeps private notes and visits without importing permission or an active check-in", () => {
  const h = harness();
  h.context.text = payload({ facilityMemos: { sample: { text: "非公開メモ", updatedAt: "2026-10-22" } }, nearbyNotifications: true, locationConsentVersion: 1, activeCheckin: { facilityId: "sample", startedAt: "2026-10-22T00:00:00Z" } });
  assert.equal(h.run('parseRecordBackup(text).facilityMemos.sample.text'), "非公開メモ");
  assert.equal(h.run('parseRecordBackup(text).nearbyNotifications'), false);
  assert.equal(h.run('parseRecordBackup(text).locationConsentVersion'), 0);
  assert.equal(h.run('parseRecordBackup(text).activeCheckin'), null);
});

test("storage failure leaves live records untouched", () => {
  const h = harness();
  h.run('state.visited.keep={at:"2026-10-22T00:00:00Z"}');
  h.fail();
  assert.throws(() => h.run('commitRecordReplacement(createState())'));
  assert.equal(h.run('Boolean(state.visited.keep)'), true);
});

test("cancelled import does not write and explains that records were retained", async () => {
  const h = harness();
  h.context.backupText = payload();
  h.run('confirmRecordAction=async()=>false;');
  await h.run('importState({target:{files:[{size:100,name:"backup.json",text:async()=>backupText}],value:"selected"}})');
  assert.equal(h.writes.length, 0);
  assert.match(h.status.textContent, /キャンセル/);
});

test("geolocation cannot run before explanatory consent", async () => {
  const h = harness();
  h.run('confirmRecordAction=async()=>false;');
  await assert.rejects(h.run('getCurrentPosition()'));
  assert.equal(h.geoCalls(), 0);
  h.run('confirmRecordAction=async()=>true;');
  await h.run('getCurrentPosition()');
  assert.equal(h.geoCalls(), 1);
});

test("backup controls are adjacent, confirmations are labelled and restore is not destructive by default", () => {
  const section = html.slice(html.indexOf('<section class="record-backup"'), html.indexOf('<div class="stats-grid"'));
  assert.match(section, /id="exportButton"/);
  assert.match(section, /id="importInput"/);
  assert.match(html, /id="recordConfirmDialog" aria-labelledby="recordConfirmTitle" aria-describedby="recordConfirmDescription"/);
  assert.match(html, /value="cancel" autofocus/);
  assert.match(source, /公開済みの口コミ・募集・ランキング/);
});

test("cards use real independent links and every product-card renderer discloses advertising", () => {
  assert.doesNotMatch(source, /data-detail-card=[^\n]*role="link"/);
  assert.match(source, /class="facility-title-link" href=/);
  for (const name of ["renderGearCard", "renderGuideGearCard", "renderArticleGearItem", "renderCompactGearLink"]) {
    const body = source.slice(source.indexOf(`function ${name}(`)).split("\nfunction ")[0];
    assert.match(body, /PR・広告リンク/);
  }
  assert.match(source, /el\.settingsDialog\.showModal\(\)/);
});
