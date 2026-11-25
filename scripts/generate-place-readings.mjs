// 検索用の地名の読み（search-readings.js）を作る。
// 出典：総務省「全国地方公共団体コード」の「都道府県コード及び市区町村コード」（Excel）
//   掲載ページ https://www.soumu.go.jp/denshijiti/code.html
//   ファイル   https://www.soumu.go.jp/main_content/000925835.xlsx
// 使い方：node scripts/generate-place-readings.mjs <ダウンロードした xlsx> <取得日 YYYY-MM-DD>
// 読みは出典のカナ（半角）をそのまま全角・ひらがなにしたものだけを使う。推測で読みを足さない。
// 施設データ（data.js）の県・市区町村・住所・施設名に出てくる地名だけを収める。
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";
import { PREFECTURES, SEED_FACILITIES } from "../data.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE_PAGE = "https://www.soumu.go.jp/denshijiti/code.html";
const SOURCE_FILE = "https://www.soumu.go.jp/main_content/000925835.xlsx";
const [xlsxPath, fetchedAt] = process.argv.slice(2);
if (!xlsxPath || !/^\d{4}-\d{2}-\d{2}$/.test(fetchedAt || "")) {
  console.error("usage: node scripts/generate-place-readings.mjs <000925835.xlsx> <YYYY-MM-DD>");
  process.exit(1);
}

// --- xlsx（zip）の最小限の読み取り ---
function readZip(buffer) {
  let eocd = buffer.length - 22;
  while (eocd >= 0 && buffer.readUInt32LE(eocd) !== 0x06054b50) eocd -= 1;
  if (eocd < 0) throw new Error("zip の終端が見つかりません");
  const count = buffer.readUInt16LE(eocd + 10);
  let offset = buffer.readUInt32LE(eocd + 16);
  const files = new Map();
  for (let i = 0; i < count; i += 1) {
    const method = buffer.readUInt16LE(offset + 10);
    const size = buffer.readUInt32LE(offset + 20);
    const nameLength = buffer.readUInt16LE(offset + 28);
    const extraLength = buffer.readUInt16LE(offset + 30);
    const commentLength = buffer.readUInt16LE(offset + 32);
    const local = buffer.readUInt32LE(offset + 42);
    const name = buffer.toString("utf8", offset + 46, offset + 46 + nameLength);
    const localName = buffer.readUInt16LE(local + 26);
    const localExtra = buffer.readUInt16LE(local + 28);
    const start = local + 30 + localName + localExtra;
    const raw = buffer.subarray(start, start + size);
    files.set(name, method === 8 ? zlib.inflateRawSync(raw) : raw);
    offset += 46 + nameLength + extraLength + commentLength;
  }
  return files;
}

const decodeXml = (value) => value
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&apos;/g, "'")
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&amp;/g, "&");

function readSheets(files) {
  // 共有文字列：ルビ（<rPh>）は除き、本文の <t> だけをつなぐ
  const shared = [...(files.get("xl/sharedStrings.xml")?.toString("utf8") || "").matchAll(/<si>([\s\S]*?)<\/si>/g)]
    .map(([, si]) => [...si.replace(/<rPh\b[\s\S]*?<\/rPh>/g, "").matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map(([, t]) => decodeXml(t)).join(""));
  const workbook = files.get("xl/workbook.xml").toString("utf8");
  const rels = files.get("xl/_rels/workbook.xml.rels").toString("utf8");
  const relTarget = new Map([...rels.matchAll(/<Relationship [^>]*Id="([^"]+)"[^>]*Target="([^"]+)"/g)].map(([, id, target]) => [id, target]));
  const sheets = {};
  for (const [, name, rid] of workbook.matchAll(/<sheet [^>]*name="([^"]+)"[^>]*r:id="([^"]+)"/g)) {
    const target = relTarget.get(rid).replace(/^\/?(xl\/)?/, "xl/");
    const xml = files.get(target).toString("utf8");
    const rows = [];
    for (const [, rowXml] of xml.matchAll(/<row\b[^>]*>([\s\S]*?)<\/row>/g)) {
      const row = [];
      for (const [, attrs, body] of rowXml.matchAll(/<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)) {
        const ref = /r="([A-Z]+)\d+"/.exec(attrs)[1];
        const col = [...ref].reduce((n, ch) => n * 26 + ch.charCodeAt(0) - 64, 0) - 1;
        const type = /t="([^"]+)"/.exec(attrs)?.[1];
        const v = /<v>([\s\S]*?)<\/v>/.exec(body || "")?.[1];
        let value = "";
        if (type === "s" && v !== undefined) value = shared[Number(v)];
        else if (type === "inlineStr") value = [...(body || "").matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map(([, t]) => decodeXml(t)).join("");
        else if (v !== undefined) value = decodeXml(v);
        row[col] = value;
      }
      rows.push(Array.from(row, (cell) => cell ?? ""));
    }
    sheets[decodeXml(name)] = rows;
  }
  return sheets;
}

const toReading = (halfKana) => {
  const katakana = String(halfKana || "").normalize("NFKC").replace(/\s+/g, "");
  if (!/^[ァ-ヶー]+$/.test(katakana)) return "";
  return katakana.replace(/[ァ-ヶ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60));
};

const sheets = readSheets(readZip(await fs.readFile(xlsxPath)));
const [mainName, wardName] = Object.keys(sheets);
const mainRows = sheets[mainName].slice(1).filter((row) => /^\d{6}$/.test(row[0]));
const wardRows = sheets[wardName].slice(1).filter((row) => /^\d{6}$/.test(row[0]));

// 施設データの地名の出どころ（県ごと）：市区町村欄・住所・施設名
const textByPref = new Map();
for (const facility of SEED_FACILITIES) {
  const list = textByPref.get(facility.prefecture) || [];
  list.push([facility.city, facility.address, facility.name].filter(Boolean).join(" "));
  textByPref.set(facility.prefecture, list);
}
const appearsIn = (pref, name) => (textByPref.get(pref) || []).some((text) => text.includes(name));

const entries = new Map(); // `${reading}:${name}` -> [reading, name]
const add = (reading, name) => { if (reading && name) entries.set(`${reading}:${name}`, [reading, name]); };
const unreadable = [];

// 1. 都道府県（47すべて）
const prefReading = new Map();
for (const [, pref, city, prefKana] of mainRows) {
  if (city) continue;
  const reading = toReading(prefKana);
  if (!reading) { unreadable.push(pref); continue; }
  prefReading.set(pref, reading);
  add(reading, pref);
}
const missingPrefs = PREFECTURES.map((pref) => pref.name).filter((name) => !prefReading.has(name));

// 2. 市区町村（東京23区を含む）：施設データに出てくるものだけ
const cityReading = new Map();
let municipalityCount = 0;
for (const [, pref, city, , cityKana] of mainRows) {
  if (!city) continue;
  const reading = toReading(cityKana);
  if (!reading) { unreadable.push(`${pref}${city}`); continue; }
  cityReading.set(`${pref}:${city}`, reading);
  if (!appearsIn(pref, city)) continue;
  add(reading, city);
  municipalityCount += 1;
}

// 3. 政令指定都市の区：読みは「市の読み＋区の読み」なので、市の読みが先頭に一致するときだけ区の読みを取り出す
let wardCount = 0;
const wardSkipped = [];
for (const [, pref, fullName, , fullKana] of wardRows) {
  const parent = [...cityReading.keys()].map((key) => key.split(":")).find(([p, c]) => p === pref && c.endsWith("市") && fullName.startsWith(c) && fullName.length > c.length);
  if (!parent) continue; // 市そのものの行
  const [, cityName] = parent;
  const reading = toReading(fullKana);
  const parentReading = cityReading.get(`${pref}:${cityName}`);
  if (!reading || !reading.startsWith(parentReading)) { wardSkipped.push(fullName); continue; }
  if (!appearsIn(pref, fullName)) continue;
  add(reading.slice(parentReading.length), fullName.slice(cityName.length));
  wardCount += 1;
}

// 施設データの市区町村欄のうち、読みの付いた地名を1つも含まないもの（対象外として件数を出す）
const names = [...new Set([...entries.values()].map(([, name]) => name))];
const uncoveredCities = new Map();
for (const facility of SEED_FACILITIES) {
  const city = String(facility.city || "").trim();
  if (!city) continue;
  if (names.some((name) => city.includes(name))) continue;
  uncoveredCities.set(city, (uncoveredCities.get(city) || 0) + 1);
}
const stationFacilities = SEED_FACILITIES.filter((facility) => /駅/.test([facility.name, facility.address, facility.access, facility.city].filter(Boolean).join(" "))).length;

const sorted = [...entries.values()].sort((a, b) => a[0].localeCompare(b[0], "ja") || a[1].localeCompare(b[1], "ja"));
const body = sorted.map(([reading, name]) => `${reading}:${name}`).join("|");
const output = `// 検索用の地名の読み（ひらがな）。施設データ・KV・localStorage の形式は変えず、検索のときだけ使う。
// 出典：総務省「全国地方公共団体コード」都道府県コード及び市区町村コード（令和6年1月1日更新）
//   掲載ページ ${SOURCE_PAGE}
//   ファイル   ${SOURCE_FILE}
//   取得日     ${fetchedAt}
// 読みは出典のカナ（半角）を全角・ひらがなにしたものだけ。推測で足した読みは無い。
// 収録：都道府県 ${prefReading.size}件、市区町村 ${municipalityCount}件、政令指定都市の区 ${wardCount}件（施設データの市区町村欄・住所・施設名に出てくるものだけ）
// 作り方：node scripts/generate-place-readings.mjs <xlsx> <取得日>
// 形式：「読み:地名」を「|」でつないだ文字列
export const PLACE_READINGS_SOURCE = ${JSON.stringify({ title: "総務省 全国地方公共団体コード（都道府県コード及び市区町村コード、令和6年1月1日更新）", page: SOURCE_PAGE, file: SOURCE_FILE, fetchedAt })};
export const PLACE_READINGS = ${JSON.stringify(body)};
`;
await fs.writeFile(path.join(ROOT, "search-readings.js"), output);
console.log(JSON.stringify({
  sheets: [mainName, wardName],
  prefectures: prefReading.size,
  missingPrefs,
  municipalities: municipalityCount,
  wards: wardCount,
  entries: sorted.length,
  unreadable,
  wardSkipped,
  uncoveredCityValues: uncoveredCities.size,
  uncoveredCityFacilities: [...uncoveredCities.values()].reduce((a, b) => a + b, 0),
  uncoveredCitySamples: [...uncoveredCities.keys()].slice(0, 40),
  stationFacilities,
  bytes: Buffer.byteLength(output),
}, null, 1));
