// Field-level official checks, not a claim that the entire catalog was refreshed.
const checkedAt = "2026-10-19";
const fact = (label, value, sourceUrl) => ({ label, value, sourceUrl, checkedAt });
const monkey = "https://www.sauna-monkey.com/";
const urban = "https://p-castle.co.jp/urban_quar/information/";
const sanno = "https://super-sentou.com/shop-information/sanno-onsen/";
const shikiji = "https://www.saunashikiji.jp/priceinfo/";
const sky = "https://www.skyspa.co.jp/charge/";
const karumaru = "https://karumaru.jp/ikebukuro/guidance.html";

export const FACILITY_EVIDENCE = [
  {
    ids: ["st-aichi-4936", "si-82784"], officialUrl: monkey,
    address: "愛知県名古屋市中村区名駅南1丁目17-23 ニッタビルB1F",
    features: ["セルフロウリュ", "熱波師あり", "スチーム(ミスト)サウナ", "水風呂あり", "個室", "タオルレンタルあり"],
    facts: [
      fact("料金", "パブリック: 平日60分1,800円 / 土日祝90分2,400円。ほかの時間コースあり", monkey),
      fact("営業時間", "月〜木・日祝9:00〜24:00 / 金土・祝前日9:00〜翌2:00。特別営業日は公式参照", monkey),
      fact("サウナ・水風呂", "パブリック3室（約50・90・100℃）、水風呂約15・25℃、内気浴エリア", monkey),
      fact("利用条件", "パブリックは男性専用（特別日を除く）。男女利用の個室は事前予約・決済制", monkey),
      fact("持ち物", "パブリックはフェイス・バスタオル各1枚、マット・アメニティ込み", monkey),
      fact("アクセス", "JR名古屋駅桜通口から徒歩約5分 / サンロードS6出口から約1分", monkey),
    ],
  },
  {
    ids: ["manual-aichi-urban-quar", "si-2524"], officialUrl: "https://p-castle.co.jp/urban_quar/",
    address: "愛知県名古屋市中区富士見町16-17 キャッスルタウン記念橋3F",
    features: ["温泉付き", "スチーム(ミスト)サウナ", "サ飯あり", "タオルレンタルあり"],
    facts: [
      fact("料金", "一般・お風呂3時間: 平日1,050円 / 土日祝1,300円。岩盤浴付きは別コース", urban),
      fact("営業時間", "月〜木・日祝6:00〜翌1:30。金土・祝前日は深夜営業、開始時刻・清掃時間は公式参照", urban),
      fact("設備", "天然温泉、3種類のサウナ、館内レストラン。岩盤浴は対象コースで利用", "https://p-castle.co.jp/urban_quar/"),
      fact("夜間利用", "深夜営業日も大浴場・脱衣所は1:30〜6:00、岩盤浴は1:00〜6:00利用不可", urban),
      fact("持ち物", "大人の各コースはタオルセット付き。小人料金はタオル・専用着が別途", urban),
    ],
  },
  {
    ids: ["si-2522"], officialUrl: sanno,
    address: "愛知県名古屋市中川区山王1-601",
    features: ["ドライサウナ", "サ飯あり", "タオルレンタルあり"],
    facts: [
      fact("料金", "中学生以上の入浴: 平日880円 / 土日祝980円。岩盤浴は別料金", sanno),
      fact("営業時間", "日〜木9:00〜24:00（受付23:00まで） / 金土・祝前日9:00〜翌1:00（受付24:00まで）", sanno),
      fact("設備", "高温サウナ、食事処。美肌の湯は人工温泉と公式に記載", sanno),
      fact("持ち物", "タオルセットのレンタル350円", sanno),
      fact("アクセス", "名鉄・山王駅から徒歩5分", sanno),
    ],
  },
  {
    ids: ["manual-shizuoka-sauna-shikiji"], officialUrl: "https://www.saunashikiji.jp/",
    features: ["水風呂あり", "宿泊可", "タオルレンタルあり"],
    facts: [
      fact("料金", "男性: 平日1,700円 / 土日祝1,900円。女性1日1,200円。時間限定料金あり", shikiji),
      fact("営業時間", "24時間営業・年中無休（公式掲載）。臨時変更は公式で確認", shikiji),
      fact("水風呂", "天然水の水風呂", shikiji),
      fact("持ち物", "通常入浴料は館内着・タオル込み。女性1時間800円コースは含まれません", shikiji),
      fact("宿泊", "深夜2:00〜翌10:00の滞在は入浴料に宿泊料金が加算", shikiji),
    ],
  },
  {
    ids: ["st-kanagawa-4"], officialUrl: "https://www.skyspa.co.jp/",
    address: "神奈川県横浜市西区高島2-19-12 スカイビル14F",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "サ飯あり", "宿泊可", "タオルレンタルあり"],
    facts: [
      fact("営業時間", "24時間営業。浴室・サウナは清掃のため8:30〜10:30利用不可", sky),
      fact("設備", "ドライサウナ・水風呂。ミストサウナは女性浴室。館内レストラン・宿泊室あり", sky),
      fact("持ち物", "タオル・アメニティ込み。館内着は1時間コースを除き料金に含む", sky),
      fact("利用条件", "中学生以上。混雑時は入場制限あり", sky),
    ],
  },
  {
    ids: ["si-tokyo-6656"], officialUrl: "https://karumaru.jp/ikebukuro/",
    features: ["宿泊可", "タオルレンタルあり"],
    facts: [
      fact("料金", "一般通常3,480円 / 60分1,980円。金曜・休前日、休日、深夜は条件別の割増あり", karumaru),
      fact("営業時間", "11:00〜翌10:00 / 浴場11:00〜翌9:00。特定日を除く", karumaru),
      fact("利用条件", "男性専用・18歳以上（高校生不可、受験利用の例外は施設へ確認）", karumaru),
      fact("持ち物", "フェイス・バスタオル、館内着のレンタル込み", karumaru),
      fact("宿泊", "カプセル・ホテル客室あり。宿泊は別プラン", karumaru),
    ],
  },
];

const byId = new Map(FACILITY_EVIDENCE.flatMap(profile => profile.ids.map(id => [id, profile])));
export function getFacilityEvidence(facility) { return byId.get(facility.id) || null; }
export function getVerifiedFeatures(facility) { return getFacilityEvidence(facility)?.features || []; }
export function applyFacilityEvidence(facility) {
  const evidence = getFacilityEvidence(facility);
  if (!evidence) return facility;
  return { ...facility, officialUrl: evidence.officialUrl, ...(evidence.address ? { address: evidence.address, addressCheckedAt: checkedAt } : {}) };
}
