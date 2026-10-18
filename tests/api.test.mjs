import test from "node:test";
import assert from "node:assert/strict";
import * as ranking from "../functions/api/ranking.js";
import * as reviews from "../functions/api/reviews.js";

function storage() {
  const values = new Map();
  return { get: async key => values.has(key) ? JSON.parse(values.get(key)) : null, put: async (key,value) => values.set(key,value) };
}
function context(kv, method, path, body, token = "a".repeat(64)) {
  return {env:{SAINCHO_FACILITIES:kv},request:new Request(`https://example.test/api/${path}`,{method,headers:{"content-type":"application/json",authorization:`Bearer ${token}`},...(body ? {body:JSON.stringify(body)} : {})})};
}
test("ranking protects an existing participant and does not publish credentials", async () => {
  const kv=storage();
  const profile={participantId:"participant-1",nickname:"テスト",email:"audit@example.test",stamps:5};
  assert.equal((await ranking.onRequestPost(context(kv,"POST","ranking",profile))).status,200);
  assert.equal((await ranking.onRequestPost(context(kv,"POST","ranking",{...profile,stamps:6}))).status,200);
  assert.equal((await ranking.onRequestPost(context(kv,"POST","ranking",{...profile,stamps:7},"b".repeat(64)))).status,403);
  assert.equal((await ranking.onRequestPost(context(kv,"POST","ranking",{...profile,email:"other@example.test"}))).status,403);
  const payload=await (await ranking.onRequestGet(context(kv,"GET","ranking"))).json();
  assert.equal(payload.entries[0].stamps,6);
  assert.equal(payload.entries[0].title,"新米サウナー");
  assert.ok(!JSON.stringify(payload).includes("emailHash"));
  assert.ok(!JSON.stringify(payload).includes("ownerHash"));
});
test("reviews preserve ownership, hide client identifiers, and deduplicate retry",async()=>{
  const kv=storage();
  const review={facilityId:"facility-1",clientId:"client-1",nickname:"感想",text:"外気浴が心地よかった",rating:4};
  const first=await reviews.onRequestPost(context(kv,"POST","reviews",review));
  assert.equal(first.status,201);
  const saved=await first.json();
  assert.equal(saved.reviews[0].owned,true);
  assert.ok(!("clientId" in saved.reviews[0]));
  const again=await (await reviews.onRequestPost(context(kv,"POST","reviews",review))).json();
  assert.equal(again.reviews.length,1);
  const publicResult=await (await reviews.onRequestGet(context(kv,"GET","reviews?facilityId=facility-1",null,"b".repeat(64)))).json();
  assert.equal(publicResult.reviews[0].owned,false);
  const path=`reviews?facilityId=facility-1&reviewId=${saved.reviews[0].id}&clientId=client-1`;
  assert.equal((await reviews.onRequestDelete(context(kv,"DELETE",path,null,"b".repeat(64)))).status,403);
  assert.equal((await reviews.onRequestDelete(context(kv,"DELETE",path))).status,200);
  const empty=await (await reviews.onRequestGet(context(kv,"GET","reviews?facilityId=facility-1"))).json();
  assert.deepEqual(empty.reviews,[]);
});
