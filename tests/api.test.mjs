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
test("ranking facility disclosure is opt-in only, lazy, and erased on opt-out", async () => {
  const kv=storage();
  const profile={participantId:"participant-9",nickname:"開示テスト",email:"share@example.test",stamps:5};
  // 既定（未設定）は非開示: TOP10 にフラグは無く、個別取得でも一覧は返らない
  assert.equal((await ranking.onRequestPost(context(kv,"POST","ranking",profile))).status,200);
  let payload=await (await ranking.onRequestGet(context(kv,"GET","ranking"))).json();
  assert.equal(payload.entries[0].shareStamps,undefined);
  let detail=await (await ranking.onRequestGet(context(kv,"GET","ranking?participant=participant-9"))).json();
  assert.equal(detail.participant.shareStamps,false);
  assert.deepEqual(detail.participant.facilityIds,[]);
  // フラグなしで facilityIds だけ送っても開示されない
  assert.equal((await ranking.onRequestPost(context(kv,"POST","ranking",{...profile,stamps:6,facilityIds:["fac-a"]}))).status,200);
  detail=await (await ranking.onRequestGet(context(kv,"GET","ranking?participant=participant-9"))).json();
  assert.equal(detail.participant.shareStamps,false);
  // オプトイン: TOP10 にはフラグだけが立ち、一覧は含まれない（軽さの担保）
  assert.equal((await ranking.onRequestPost(context(kv,"POST","ranking",{...profile,stamps:7,shareStamps:true,facilityIds:["fac-a","fac-b","fac-a","!!!"]}))).status,200);
  payload=await (await ranking.onRequestGet(context(kv,"GET","ranking"))).json();
  assert.equal(payload.entries[0].shareStamps,true);
  assert.ok(!JSON.stringify(payload).includes("facilityIds"));
  assert.ok(!JSON.stringify(payload).includes("fac-a"));
  // 個別取得でのみ、重複除去・整形済みの一覧が返る
  detail=await (await ranking.onRequestGet(context(kv,"GET","ranking?participant=participant-9"))).json();
  assert.equal(detail.participant.shareStamps,true);
  assert.equal(detail.participant.nickname,"開示テスト");
  assert.deepEqual(detail.participant.facilityIds,["fac-a","fac-b"]);
  // オプトアウトすると一覧は消え、個別取得でも返らない
  assert.equal((await ranking.onRequestPost(context(kv,"POST","ranking",{...profile,stamps:8,shareStamps:false,facilityIds:["fac-a"]}))).status,200);
  detail=await (await ranking.onRequestGet(context(kv,"GET","ranking?participant=participant-9"))).json();
  assert.equal(detail.participant.shareStamps,false);
  assert.deepEqual(detail.participant.facilityIds,[]);
  payload=await (await ranking.onRequestGet(context(kv,"GET","ranking"))).json();
  assert.equal(payload.entries[0].shareStamps,undefined);
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
