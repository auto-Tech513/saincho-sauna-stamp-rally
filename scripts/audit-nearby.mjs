import assert from "node:assert/strict";
import {
  MAX_NEARBY_GEO_ACCURACY_METERS,
  NEARBY_RADIUS_KM,
  findNearestFacilities,
  haversineDistanceKm,
  isUsableNearbyPosition,
} from "../nearby.js";
import { SEED_FACILITIES } from "../data.js";

assert.equal(NEARBY_RADIUS_KM, 2, "近隣検索半径は2kmである必要があります");
assert.equal(MAX_NEARBY_GEO_ACCURACY_METERS, 1000, "低精度位置情報の上限が意図せず変わっています");

const origin = { latitude: 35, longitude: 135 };
const facilities = [
  facility("same", 35, 135),
  facility("inside", 35.0178, 135),
  facility("outside", 35.0181, 135),
  facility("far", 35.08, 135),
  { ...facility("airbnb", 35.001, 135), source: "Airbnb" },
  { ...facility("no-address", 35.001, 135), address: "" },
];

const results = findNearestFacilities(facilities, origin.latitude, origin.longitude, {
  radiusKm: NEARBY_RADIUS_KM,
  limit: 10,
  requireAddress: true,
  excludeSources: ["Airbnb"],
});

assert.deepEqual(results.map((item) => item.facility.id), ["same", "inside"]);
assert(results.every((item) => item.distanceKm <= 2), "2kmを超える施設が混入しています");
assert.equal(haversineDistanceKm(35, 135, 35, 135), 0, "同一点の距離が0ではありません");
assert(isUsableNearbyPosition({ coords: { ...origin, accuracy: 30 } }));
assert(!isUsableNearbyPosition({ coords: { ...origin, accuracy: 1500 } }));

const eligibleFacilities = SEED_FACILITIES.filter((facility) => (
  facility.source !== "Airbnb"
  && String(facility.address || "").trim()
  && Number.isFinite(Number(facility.lat))
  && Number.isFinite(Number(facility.lng))
));
assert(eligibleFacilities.length > 0, "住所・座標確認済みの近隣検索対象がありません");

const requiredNearbyFacilities = [
  ["天然温泉アーバンクア SPA＆LIVING", 35.151703, 136.90863],
  ["山王温泉 喜多の湯", 35.153732, 136.890625],
];
for (const [name, latitude, longitude] of requiredNearbyFacilities) {
  const facilityRecord = SEED_FACILITIES.find((item) => item.name === name);
  assert.ok(facilityRecord, `${name} が候補に必要です`);
  assert.ok(String(facilityRecord.address || "").trim(), `${name} に確認済み住所が必要です`);
  const atFacility = findNearestFacilities([facilityRecord], latitude, longitude, {
    radiusKm: NEARBY_RADIUS_KM,
    requireAddress: true,
  });
  assert.equal(atFacility.length, 1, `${name} が2km検索の対象になる必要があります`);
  assert.ok(atFacility[0].distanceKm < 0.01, `${name} の座標が住所検索結果と一致する必要があります`);
}

console.log(JSON.stringify({
  ok: true,
  radiusKm: NEARBY_RADIUS_KM,
  included: results.map((item) => ({ id: item.facility.id, distanceKm: Number(item.distanceKm.toFixed(3)) })),
  excluded: ["outside", "far", "airbnb", "no-address"],
  eligibleCatalogFacilities: eligibleFacilities.length,
  requiredFacilities: requiredNearbyFacilities.map(([name]) => name),
}, null, 2));

function facility(id, lat, lng) {
  return { id, name: id, address: "テスト住所", source: "公式", lat, lng };
}
