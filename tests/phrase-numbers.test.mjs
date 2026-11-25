import test from "node:test";
import assert from "node:assert/strict";
import { phraseBreaks } from "../phrase.js";

// 決定キュー #41（2026-11-25）：数字の途中で改行される（「水深1｜40cm」）のを防ぐ。
// 切れ目が数字の内部（桁の間、桁に挟まれた区切り・小数点の前後）に無いことを固定する。
const DIGIT = /[0-9０-９]/;
const SEP = /[,，.．]/;

function assertNoBreakInsideNumbers(text) {
  const breaks = phraseBreaks(text);
  for (const b of breaks) {
    const x = text[b - 1] || "";
    const y = text[b] || "";
    assert.ok(!(DIGIT.test(x) && DIGIT.test(y)), `数字の間で割れている: ${text} @${b}`);
    assert.ok(!(DIGIT.test(x) && SEP.test(y) && DIGIT.test(text[b + 1] || "")), `数字の区切りの手前で割れている: ${text} @${b}`);
    assert.ok(!(SEP.test(x) && DIGIT.test(y) && DIGIT.test(text[b - 2] || "")), `数字の区切りの後ろで割れている: ${text} @${b}`);
  }
  return breaks;
}

test("水深・水温などの数字が途中で割れない", () => {
  assert.deepEqual(phraseBreaks("水深140cm"), []);
  assert.deepEqual(phraseBreaks("水温16.5℃"), []);
  assert.deepEqual(phraseBreaks("水深１４０cm"), []);
  assertNoBreakInsideNumbers("水深140cmの水風呂");
  assertNoBreakInsideNumbers("水深1.37mの水風呂");
  assertNoBreakInsideNumbers("貸出水着500円");
});

test("時刻・日付・金額の数字も途中で割れない", () => {
  assertNoBreakInsideNumbers("営業時間は11:00〜23:00");
  assertNoBreakInsideNumbers("毎週水曜12:00〜15:00は浴室メンテナンス");
  assertNoBreakInsideNumbers("2026年11月24日オープン");
  assertNoBreakInsideNumbers("水深1,450m");
  assertNoBreakInsideNumbers("景品1.5倍");
});

test("数字の前後の文節の切れ目は従来どおり残る", () => {
  // 数字そのものを守るだけで、文節の切れ目を消しすぎない
  assert.ok(phraseBreaks("温度は42.5度").length > 0);
  assert.ok(phraseBreaks("サウナシュラン2026発表").length > 0);
  assert.ok(phraseBreaks("水風呂の水深は140cmです").length > 0);
});
