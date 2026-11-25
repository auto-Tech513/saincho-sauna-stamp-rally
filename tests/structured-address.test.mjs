import test from "node:test";
import assert from "node:assert/strict";
import { SEED_FACILITIES } from "../data.js";
import { applyFacilityEvidence, splitPostalCodeFromAddress } from "../facility-evidence.js";

const normalize = (text) => String(text).replace(/[\s　]/g, "").replace(/^〒(\d{3})[-−‐－ー]?(\d{4})/, "〒$1-$2");
const split = (address) => {
  const { postalCode = "", streetAddress = "" } = splitPostalCodeFromAddress(address);
  return { postalCode, streetAddress };
};

test("structured data splits the leading postal code out of streetAddress", () => {
  assert.deepEqual(split("〒002-8043 北海道札幌市北区東茨戸132"), { postalCode: "002-8043", streetAddress: "北海道札幌市北区東茨戸132" });
  assert.deepEqual(split("〒300-4234茨城県つくば市山木1562"), { postalCode: "300-4234", streetAddress: "茨城県つくば市山木1562" });
  assert.deepEqual(split("〒9300083 富山県富山市総曲輪3丁目9−2"), { postalCode: "930-0083", streetAddress: "富山県富山市総曲輪3丁目9−2" });
  assert.deepEqual(split("東京都港区赤坂1-2-3"), { postalCode: "", streetAddress: "東京都港区赤坂1-2-3" });
  // 7桁の郵便番号として読めないものは分けない
  assert.deepEqual(split("〒1500-2 愛媛県西条市今在家1500-2"), { postalCode: "", streetAddress: "〒1500-2 愛媛県西条市今在家1500-2" });
});

test("every facility address keeps its full text after the postal code split", () => {
  let count = 0;
  for (const facility of SEED_FACILITIES.map(applyFacilityEvidence)) {
    const address = String(facility.address || "").trim();
    if (!address) continue;
    const { postalCode, streetAddress } = split(address);
    if (postalCode) {
      count += 1;
      assert.match(postalCode, /^\d{3}-\d{4}$/, facility.id);
      assert.ok(!streetAddress.includes("〒"), facility.id);
      assert.ok(streetAddress.length > 0, facility.id);
    }
    assert.equal(normalize(`${postalCode ? `〒${postalCode}` : ""}${streetAddress}`), normalize(address), facility.id);
  }
  assert.ok(count > 0);
});
