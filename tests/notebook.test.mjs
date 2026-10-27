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

function harness(options = {}) {
  const status = { textContent: "" };
  const values = Object.fromEntries(Object.entries({ text: "非公開の感想", date: "2026-10-19", sets: "3", saunaMinutes: "8", waterMinutes: "1", restMinutes: "8", feeling: "4", nickname: "", rating: "5", ...options }).map(([key, value]) => [key, { value, checked: value === true }]));
  const form = { dataset: { activityForm: "test" }, elements: { namedItem: name => values[name] }, reportValidity: () => true, querySelector: () => status };
  const button = { disabled: false, closest: () => form };
  const writes = [];
  const context = vm.createContext({ ...nearby, ...evidence, URL, URLSearchParams, crypto: webcrypto, performance, console, AbortSignal, localStorage: { getItem: () => null, setItem: (key,value) => writes.push(JSON.parse(value)) }, location: { hostname: "localhost", pathname: "/", protocol: "http:", port: "8788" }, window: { matchMedia: () => ({ matches: false }) }, document: { querySelector: () => ({}), querySelectorAll: () => [] }, form, button, status });
  vm.runInContext(source, context);
  vm.runInContext('renderFacilityDetail=()=>{}; invalidateFacilityCaches=()=>{}; el.facilityDetail={querySelector:()=>status}; activeView="Facility"; activeFacilityId="test";', context);
  return { context, status, values, writes, save: () => vm.runInContext('saveActivityNote({id:"test",name:"テスト施設"},button)', context), read: code => vm.runInContext(code,context) };
}

test("private-first notebook has one text field and does not preselect publication or a visit", () => {
  const h = harness();
  const html = h.read('renderActivityNotebook({id:"test"})');
  assert.equal((html.match(/<textarea/g) || []).length, 1);
  assert.doesNotMatch(html, /name="publish" checked/);
  assert.doesNotMatch(html, /name="recordVisit" checked/);
  assert.equal(h.read('normalizeFacilityMemos({test:{text:"a".repeat(280)}}).test.text.length'), 280);
});

test("private memo saves without a network request and survives form redraws", async () => {
  const h = harness();
  h.context.fetch = () => { throw new Error("must not send private text"); };
  await h.save();
  assert.equal(h.read('state.facilityMemos.test.text'), "非公開の感想");
  assert.equal(h.read('state.visitLogs.test'), undefined);
  assert.match(h.status.textContent, /公開していません/);
  assert.equal(h.read('activityDrafts.get("test").text'), "非公開の感想");
});

test("failed publication preserves local content and retry upserts one visit", async () => {
  const h = harness({ recordVisit: true, publish: true });
  let calls = 0;
  h.context.fetch = async () => { calls++; return { ok: false, status: 503 }; };
  await h.save();
  await h.save();
  assert.equal(calls, 2);
  assert.equal(h.read('state.visitLogs.test.length'), 1);
  assert.equal(h.read('state.facilityMemos.test.text'), "非公開の感想");
  assert.equal(h.read('activityDrafts.get("test").publish'), true);
  assert.match(h.status.textContent, /端末への保存は完了/);
  h.context.fetch = async (url, request) => {
    calls++;
    const payload = JSON.parse(request.body);
    assert.equal(payload.text, "非公開の感想");
    assert.ok(!("sets" in payload));
    return { ok: true, json: async () => ({ configured: true, reviews: [{ id: "server-1", owned: true, ...payload }] }) };
  };
  await h.save();
  assert.equal(h.read('activityDrafts.get("test").publish'), false);
  assert.equal(h.read('state.visitLogs.test.length'), 1);
  h.values.publish.checked = false;
  await h.save();
  assert.equal(calls, 3);
});

test("storage failure rolls back memory and never publishes", async () => {
  const h = harness({ recordVisit: true, publish: true });
  h.context.localStorage.setItem = () => { throw new Error("quota"); };
  h.context.fetch = () => { throw new Error("must not publish after local failure"); };
  await h.save();
  assert.equal(h.read('state.facilityMemos.test'), undefined);
  assert.equal(h.read('state.visitLogs.test'), undefined);
  assert.match(h.status.textContent, /保存に失敗/);
});

test("pending publication blocks duplicate sends after redraw and preserves newer edits", async () => {
  const h = harness({ publish: true });
  let resolvePost;
  let calls = 0;
  h.context.fetch = () => { calls++; return new Promise(resolve => { resolvePost = resolve; }); };
  const pending = h.save();
  h.context.button.disabled = false;
  await h.save();
  assert.equal(calls, 1);
  h.values.text.value = "送信後に書き直した未保存の感想";
  h.read('rememberActivityDraft(form)');
  resolvePost({ ok: true, json: async () => ({ configured: true, reviews: [{ id: "posted", owned: true, facilityId: "test", text: "非公開の感想" }] }) });
  await pending;
  assert.equal(h.read('activityDrafts.get("test").text'), "送信後に書き直した未保存の感想");
  assert.match(h.status.textContent, /まだ保存・公開していません/);
  assert.equal(h.context.button.disabled, false);
});

test("HTTP success without the posted review is not reported as publication success", async () => {
  const h = harness({ publish: true });
  h.context.fetch = async () => ({ ok: true, json: async () => ({ configured: true, reviews: [] }) });
  await h.save();
  assert.match(h.status.textContent, /公開を確認できませんでした/);
  assert.equal(h.read('activityDrafts.get("test").publish'), true);
});

test("official facility aliases show reviews from both IDs and delete using their original ID", async () => {
  const h = harness();
  h.context.document.baseURI = "https://example.test/";
  h.context.document.getElementById = () => null;
  h.read('getFacilityById=()=>null; renderAll=()=>{}; showToast=()=>{};');
  const calls = [];
  h.context.fetch = async (url, options) => {
    const id = new URL(url).searchParams.get("facilityId");
    calls.push({ id, method: options.method || "GET" });
    if (options.method === "DELETE") return { ok: true, json: async () => ({ reviews: [] }) };
    return { ok: true, json: async () => ({ configured: true, reviews: [{ id: `review-${id}`, facilityId: id, text: `感想-${id}`, owned: true }] }) };
  };
  await h.read('loadFacilityReviews("manual-aichi-apz")');
  assert.equal(h.read('getFacilityReviews("manual-aichi-apz").length'), 2);
  assert.deepEqual(calls.map(call => call.id).sort(), ["manual-aichi-apz", "si-2505"]);
  await h.read('deleteFacilityReview({id:"manual-aichi-apz"},"review-si-2505")');
  assert.equal(calls.at(-1).id, "si-2505");
  assert.equal(calls.at(-1).method, "DELETE");
  assert.equal(h.read('getFacilityReviews("manual-aichi-apz").length'), 1);
});

test("partial alias review fetch retains available reviews and permits retry", async () => {
  const h = harness();
  h.context.document.baseURI = "https://example.test/";
  h.context.document.getElementById = () => null;
  h.read('getFacilityById=()=>null;');
  let broken = true;
  h.context.fetch = async url => {
    const id = new URL(url).searchParams.get("facilityId");
    if (id === "si-2505" && broken) throw new Error("network");
    return { ok: true, json: async () => ({ configured: true, reviews: [{ id: `r-${id}`, facilityId: id, text: id }] }) };
  };
  await h.read('loadFacilityReviews("manual-aichi-apz")');
  assert.equal(h.read('getFacilityReviews("manual-aichi-apz").length'), 1);
  assert.equal(h.read('reviewsConfigured'), false);
  assert.equal(h.read('facilityReviewLoadedIds.has("manual-aichi-apz")'), false);
  broken = false;
  await h.read('loadFacilityReviews("manual-aichi-apz")');
  assert.equal(h.read('getFacilityReviews("manual-aichi-apz").length'), 2);
});

test("a review list says loading until an empty result is confirmed", () => {
  const h = harness();
  h.read('getFacilityById=()=>null;');
  assert.match(h.read('renderReviewList({id:"manual-aichi-apz"})'), /読み込んでいます/);
  assert.doesNotMatch(h.read('renderReviewList({id:"manual-aichi-apz"})'), /まだ口コミはありません/);
  h.read('facilityReviewLoadedIds.add("manual-aichi-apz");');
  assert.match(h.read('renderReviewList({id:"manual-aichi-apz"})'), /まだ口コミはありません/);
});

test("official evidence is field-dated, alias-safe and never promotes legacy equipment", () => {
  assert.ok(evidence.CURATED_FACILITY_EVIDENCE.length >= 20);
  assert.ok(evidence.FACILITY_EVIDENCE.length > evidence.CURATED_FACILITY_EVIDENCE.length);
  for (const profile of evidence.FACILITY_EVIDENCE) {
    for (const row of profile.facts) {
      assert.match(row.checkedAt, /^\d{4}-\d{2}-\d{2}$/);
      assert.equal(new Date(row.checkedAt).toISOString().slice(0, 10), row.checkedAt);
      assert.ok(["https:", "http:"].includes(new URL(row.sourceUrl).protocol));
    }
  }
  assert.equal(evidence.getFacilityEvidence({id:"si-82784"}), evidence.getFacilityEvidence({id:"st-aichi-4936"}));
  const h = harness();
  assert.equal(h.read('getFacilityFeatures({id:"legacy",features:["外気あり"],tags:["温泉付き"]}).length'), 0);
  assert.ok(!evidence.getVerifiedFeatures({id:"si-2522"}).includes("温泉付き"));
  assert.ok(!h.read('getFacilityFeatures({id:"si-2522",features:["温泉付き"],tags:["みんなの追加"]}).includes("温泉付き")'));
});
