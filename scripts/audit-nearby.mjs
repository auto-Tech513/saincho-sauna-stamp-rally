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

console.log(JSON.stringify({
  ok: true,
  radiusKm: NEARBY_RADIUS_KM,
  included: results.map((item) => ({ id: item.facility.id, distanceKm: Number(item.distanceKm.toFixed(3)) })),
  excluded: ["outside", "far", "airbnb", "no-address"],
  eligibleCatalogFacilities: eligibleFacilities.length,
}, null, 2));

function facility(id, lat, lng) {
  return { id, name: id, address: "テスト住所", source: "公式", lat, lng };
}
