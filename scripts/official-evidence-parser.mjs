import { load } from "cheerio";

const normalize = text => String(text || "").normalize("NFKC").toLowerCase().replace(/[\s\p{P}\p{S}]/gu, "");
const textOf = text => String(text || "").replace(/\s+/g, " ").trim();

export function parseOfficialEvidence(html, facility, sourceUrl, checkedAt) {
  const $ = load(html);
  const name = normalize(facility.name);
  const title = normalize($("title").text());
  const identities = $("h1").map((_, e) => normalize($(e).text())).get();
  if (name.length < 4 || !(title.includes(name) || identities.some(identity => identity.length >= 4 && (identity.includes(name) || name.includes(identity))))) return null;
  $("header,nav,footer,aside,script,style,.related,.recommend").remove();
  const facts = [];
  const features = new Set();
  const pairs = [];
  $("dt,th").each((_, element) => {
    const label = textOf($(element).text());
    const isDt = $(element).is("dt");
    const value = textOf(isDt ? $(element).next("dd").text() : $(element).nextAll("td").map((_, td) => $(td).text()).get().join(" / "));
    if (label && value && label.length <= 35 && value.length <= 450) pairs.push({ label, value, element, isDt });
  });
  const hours = pairs.filter(row => /^営業時間[：: ]*$/.test(row.label));
  // Multiple distinct hours often belong to restaurants, salons and other tenants.
  if (new Set(hours.map(row => row.value)).size === 1 && /[0-9０-９]/.test(hours[0]?.value || "") && !/お食事処営業時間|ほぐし処営業時間|かみきりどころ営業時間/.test(hours[0].value)) {
    facts.push({ label: "施設営業時間", value: hours[0].value });
  }
  for (const row of pairs) {
    if (/^(?:ご)?(?:入浴|入泉|入館)料金?[：: ]*$/.test(row.label) && /[円¥￥]/.test(row.value)) {
      // Do not pull a whole table: neighboring rows can be efficacy claims or unrelated fees.
      const headers = row.isDt ? "" : textOf($(row.element).closest("table").find("thead").text());
      if (!headers && /大人|小人|中学生|一般|会員/.test(row.value)) facts.push({ label: "料金", value: row.value });
    }
    if (/^(?:定休日|休館日)[：: ]*$/.test(row.label) && row.value.length < 180) facts.push({ label: "休館日", value: row.value });
    if (/^(サウナ|水風呂)(?:室|ストーブ|ルーム|の温度|温度|室温|収容人数|設備|の種類)?(?:の温度)?$/.test(row.label) && row.value.length < 180 && !/効果|代謝|美肌|治療/.test(row.value) && !/^[-ー―\s]+$/.test(row.value)) {
      facts.push({ label: row.label === "サウナ" ? "サウナ設備" : row.label, value: row.value });
      if (!/なし|無し|ありません|不可|0(?:名|人)/.test(row.value.normalize("NFKC"))) {
        for (const feature of ["塩サウナ", "遠赤外線サウナ", "オートロウリュ", "セルフロウリュ", "テントサウナ", "バレルサウナ", "ドライサウナ"]) if (row.value.includes(feature)) features.add(feature);
        if (row.label.startsWith("水風呂") && /あり|[1-9].*(?:名|人|℃|度)/.test(row.value.normalize("NFKC"))) features.add("水風呂あり");
      }
    }
  }
  const unique = [...new Map(facts.map(row => [`${row.label}:${row.value}`, row])).values()];
  if (!unique.length) return null;
  return { ids: [facility.id], officialUrl: sourceUrl, method: "official-labeled-fields", features: [...features], facts: unique.map(row => ({ ...row, sourceUrl, checkedAt })) };
}
