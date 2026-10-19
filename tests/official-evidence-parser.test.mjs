import test from "node:test";
import assert from "node:assert/strict";
import { parseOfficialEvidence } from "../scripts/official-evidence-parser.mjs";

const facility = { id: "sample", name: "サンプル温泉" };
const parse = body => parseOfficialEvidence(`<title>サンプル温泉 公式</title>${body}`, facility, "https://example.com/spa/", "2026-10-19");

test("official extraction rejects a corporate or different-facility page", () => {
  assert.equal(parseOfficialEvidence("<title>別の温泉</title><dl><dt>営業時間</dt><dd>9:00〜22:00</dd></dl>", facility, "https://example.com/", "2026-10-19"), null);
});

test("fees keep age qualifiers without copying adjacent efficacy rows", () => {
  const result = parse("<table><tr><th>入浴料</th><td>大人500円、小学生200円</td></tr><tr><th>効能</th><td>治療、美肌</td></tr></table>");
  assert.deepEqual(result.facts.map(row => row.value), ["大人500円、小学生200円"]);
  assert.equal(result.facts[0].sourceUrl, "https://example.com/spa/");
});

test("ambiguous column prices and multiple tenant hours are not promoted", () => {
  assert.equal(parse("<table><thead><tr><th>平日</th><th>休日</th></tr></thead><tr><th>入浴料</th><td>大人500円</td><td>800円</td></tr></table>"), null);
  assert.equal(parse("<dl><dt>営業時間</dt><dd>9:00〜22:00</dd><dt>営業時間</dt><dd>食事処11:00〜21:00</dd></dl>"), null);
});

test("facility hours are explicitly not bathing hours, holidays retain exceptions", () => {
  const result = parse("<dl><dt>営業時間</dt><dd>9:00〜23:00 ※スパ22:00まで</dd><dt>休館日</dt><dd>月曜（祝日は営業）</dd></dl>");
  assert.equal(result.facts[0].label, "施設営業時間");
  assert.match(result.facts[0].value, /スパ22:00/);
  assert.equal(result.facts[1].value, "月曜（祝日は営業）");
});

test("negative equipment and full-width zero never become positive features", () => {
  const result = parse("<dl><dt>水風呂収容人数</dt><dd>０名</dd><dt>サウナ</dt><dd>塩サウナなし</dd></dl>");
  assert.deepEqual(result.features, []);
  assert.deepEqual(parse("<dl><dt>水風呂収容人数</dt><dd>１名</dd></dl>").features, ["水風呂あり"]);
});
