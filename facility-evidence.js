// Field-level official checks, not a claim that the entire catalog was refreshed.
import { OFFICIAL_PAGE_EVIDENCE } from "./official-page-evidence.js";
const checkedAt = "2026-10-19";
const fact = (label, value, sourceUrl) => ({ label, value, sourceUrl, checkedAt });
const monkey = "https://www.sauna-monkey.com/";
const urban = "https://p-castle.co.jp/urban_quar/information/";
const sanno = "https://super-sentou.com/shop-information/sanno-onsen/";
const shikiji = "https://www.saunashikiji.jp/priceinfo/";
const sky = "https://www.skyspa.co.jp/charge/";
const karumaru = "https://karumaru.jp/ikebukuro/guidance.html";
const ichinomiya = "https://supersauna.jp/price";
const ichinomiyaSauna = "https://supersauna.jp/sauna";
const kanare = "https://super-sentou.com/shop-information/kanare-onsen/";
const kaihotsu = "https://kaihotsunoyu.jp/price/";
const eagle = "https://sauna-eagle.jp/faq/";
const nagoya = "https://nagoyasauna.com/";
const apz = "https://apz-spa.com/system/";
const apzSpa = "https://apz-spa.com/saunaspa/";
const kaki = "https://kakitsubata-spa.com/";
const okazaki = "https://rakunoyu.com/okazaki/information.html";
const okazakiSauna = "https://rakunoyu.com/okazaki/sauna.html";
const mori = "https://leopards.co.jp/service/aounomori";
const hamakita = "https://spa-solani.com/store/112/";
const kajimachi = "https://www.zaza-chuokan.com/shop/かじまちの湯-spa-solani/";
const kameyama = "https://kameyama-sauna.com/";

export const CURATED_FACILITY_EVIDENCE = [
  {
    ids: ["st-kyoto-4811", "si-80496"], officialUrl: "https://first-kyoto.com/sauna/", status: "suspended",
    features: [],
    facts: [fact("営業状況", "2026年9月25日の公式続報で、漏水被害による臨時休業中・営業再開の目途未定と案内。通常の料金・設備ページは営業再開を意味しません", "https://first-kyoto.com/news/316/")],
  },
  {
    ids: ["st-okinawa-940", "si-okinawa-4327"], officialUrl: "https://www.nahacen.com/rikka/index.html",
    address: "沖縄県那覇市牧志2-16-36 スパ アネックス1F", city: "那覇市",
    features: ["ドライサウナ", "塩サウナ", "スチーム(ミスト)サウナ", "温泉付き", "水風呂あり", "サ飯あり", "タオルレンタルあり"],
    facts: [
      fact("料金", "大人・タオル持参: 平日1,250円 / 土日祝1,500円。タオル付き: 平日1,650円 / 土日祝1,800円（税込・入湯税込）。ほかのコースあり", "https://www.nahacen.com/rikka/index.html"),
      fact("営業時間", "温泉6:00〜23:00（受付22:30まで）。ドライ・塩サウナは平日9:00から、土日祝6:00から。ミストは全日6:00から。年中無休", "https://www.nahacen.com/rikka/index.html"),
      fact("設備・温度", "ドライ・塩・スチームの3種。スチームは室温50度と公式掲載。男女浴場は日替わり", "https://www.nahacen.com/rikka/index.html"),
      fact("水風呂", "冷水浴槽あり（温度の掲載値は未確認）", "https://www.nahacen.com/rikka/index.html"),
      fact("利用条件", "刺青・タトゥーのある方は入場不可。小学生未満は保護者同伴。浴場内の撮影・携帯電話使用禁止", "https://www.nahacen.com/rikka/index.html"),
      fact("持ち物", "Aコースはタオル持参、Bコースはフェイス・バスタオル付き。返却式ロッカー用に100円玉を用意", "https://www.nahacen.com/rikka/index.html"),
      fact("サ飯", "館内ゆんたく10:00〜21:00（L.O.20:00）。食事のみの利用可。駐車場は温泉利用で3時間無料", "https://www.nahacen.com/rikka/index.html"),
    ],
  },
  {
    ids: ["manual-shizuoka-sola-spa-hamakita"], officialUrl: hamakita,
    address: "静岡県浜松市浜名区平口2861 サンストリート浜北1F", city: "浜松市浜名区",
    features: ["ドライサウナ", "水風呂あり", "サ飯あり"],
    facts: [
      fact("料金", "入浴・サウナ: 大人600円 / 小学生以下300円。岩盤浴付きは1,000円 / 500円", hamakita),
      fact("営業時間", "8:00〜24:00（最終受付23:30）", hamakita),
      fact("設備・温度", "ドライサウナ100℃、水風呂14℃。白湯・替わり湯、岩盤浴1種類（公式掲載の設定）", hamakita),
      fact("住所表記", "施設公式の旧区名「浜北区」を、浜松市の町名一覧で現行の「浜名区」に照合", "https://www.city.hamamatsu.shizuoka.jp/gyousei/intro/dmc/kuwari/hamana/index.html"),
    ],
  },
  {
    ids: ["manual-shizuoka-kajimachi-solani"], officialUrl: kajimachi,
    address: "静岡県浜松市中央区鍛冶町100-1 ザザ中央館3F", city: "浜松市中央区",
    features: ["宿泊可", "タオルレンタルあり"],
    facts: [
      fact("料金", "入浴・サウナ1時間700円 / 2時間800円 / 4時間1,500円 / 8時間2,000円。延長10分100円", kajimachi),
      fact("営業時間", "店舗は24時間営業。毎週水曜12:00〜15:00は浴室メンテナンスでシャワーのみ", kajimachi),
      fact("設備", "浴場・サウナ・岩盤浴・漫画・休憩スペース・カプセルルーム。岩盤浴は館内着と大判タオルのレンタル必須", kajimachi),
      fact("持ち物", "レンタル: フェイスタオル200円 / バスタオル400円 / 大判タオル500円 / 館内着500円", kajimachi),
      fact("利用条件", "日帰りは予約不要。宿泊料金は日によって異なり、宿泊予約サイトで受付", kajimachi),
    ],
  },
  {
    ids: ["manual-mie-kameyama-zekcho-sauna"], officialUrl: kameyama, status: "open",
    address: "三重県鈴鹿市小岐須町祓塚", city: "鈴鹿市",
    features: ["セルフロウリュ", "外気あり", "個室", "貸切可", "テントサウナ"],
    facts: [
      fact("料金", "1組3時間24,000円 / 2時間20,000円（税込）", kameyama),
      fact("営業時間", "月によって営業枠が変動。公式LINEで日程・時間を確認して予約", kameyama),
      fact("設備・温度", "貸切テントサウナ・60〜110℃で調整可能と公式記載。冷却は川を利用", kameyama),
      fact("水風呂", "天然の川。真夏でも18℃程度と公式記載（季節・天候で変動、当日の実測ではありません）", kameyama),
      fact("利用条件", "1枠1組限定。4人以下推奨、6人まで追加料金なし。天候による中止あり", kameyama),
      fact("持ち物", "飲み物、サンダル、濡れてもよい服、タオルを持参", kameyama),
    ],
  },
  {
    ids: ["manual-aichi-super-sauna-ichinomiya"], officialUrl: ichinomiya,
    address: "愛知県一宮市大和町毛受一本松31", city: "一宮市", status: "open",
    features: ["オートロウリュ", "熱波師あり", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "サ飯あり", "タオルレンタルあり"],
    facts: [
      fact("料金", "時間無制限: 平日2,000円 / 土日祝2,500円（税込）。薬草樽蒸は別途1,800円・2時間制", ichinomiya),
      fact("営業時間", "9:00〜翌1:00（最終受付24:00）。年中無休、設備点検休館あり", ichinomiya),
      fact("設備・温度", "5種のサウナ: 熱 約80℃ / 瞑 約60℃ / 霧 約60℃ / 杜 約90℃ / 樽は別料金。公式掲載の目安", ichinomiyaSauna),
      fact("水風呂", "4槽: 7〜9℃ / 14〜17℃ / 22〜24℃ / 22〜24℃（バイブラ）。内外気浴スペースあり", ichinomiyaSauna),
      fact("利用条件", "男性専用（レディースデーを除く）・中学生以上。中学生は18歳以上の保護者同伴", ichinomiya),
      fact("持ち物", "フェイス・バスタオル、館内着、アメニティ、浴室内ドリンクサーバー込み", ichinomiya),
      fact("開業", "2026年9月8日グランドオープン", "https://supersauna.jp/news/31"),
    ],
  },
  {
    ids: ["manual-aichi-kanare-kitanoyu"], officialUrl: kanare,
    address: "愛知県名古屋市守山区森孝2-902", city: "名古屋市守山区",
    features: ["ドライサウナ", "サ飯あり", "タオルレンタルあり"],
    facts: [
      fact("料金", "中学生以上: 平日800円 / 土日祝950円（税込）。岩盤浴は別途600円", kanare),
      fact("営業時間", "入浴9:00〜24:00（最終受付23:00）。岩盤浴9:00〜23:00（受付22:00まで）", kanare),
      fact("設備", "高温ドライサウナ、人工温泉、炭酸風呂、岩盤浴、食事処えびす。天然温泉ではなく人工温泉と記載", kanare),
      fact("持ち物", "タオルセットのレンタル400円。シャンプー・コンディショナー・ボディソープ備え付け", kanare),
      fact("利用条件", "タトゥー・シールを含む入れ墨のある方は入館不可。小学生以下だけの入場不可", kanare),
    ],
  },
  {
    ids: ["fukui-kaihatsu-onsen-sauna-resort-2026"], officialUrl: "https://kaihotsunoyu.jp/",
    address: "福井県福井市開発5丁目1207", city: "福井市", status: "open",
    features: ["温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      fact("料金", "一般大人90分: 平日880円 / 土日祝980円。フリータイム1,480円 / 1,680円（税込）", kaihotsu),
      fact("営業時間", "館内24時間 / 天然温泉6:00〜翌1:00。Moiは平日13:00〜23:00、土日祝10:00〜23:00", kaihotsu),
      fact("設備", "天然温泉とサウナガーデンMoi。Moiは入館料に加え一般平日400円 / 土日祝600円", kaihotsu),
      fact("利用条件", "Moiは水着着用・中学生以上。水着必須はMoiの条件であり大浴場全体の条件ではありません", "https://kaihotsunoyu.jp/サウナ/post-978/"),
      fact("持ち物", "大人フリータイムはタオル付き。水着レンタル330円・タオルセット350円", kaihotsu),
      fact("開業", "サウナガーデンMoiは2026年9月1日グランドオープン（公式発表）", "https://kaihotsunoyu.jp/サウナ/post-978/"),
    ],
  },
  {
    ids: ["manual-aichi-sauna-eagle"], officialUrl: "https://sauna-eagle.jp/",
    features: ["オートロウリュ", "水風呂あり", "タオルレンタルあり"],
    facts: [
      fact("料金", "通常一般: 平日2,780円 / 週末祝日3,280円。深夜2時以降は別途1,200円。特別営業期間は変更あり", eagle),
      fact("営業時間", "24時間営業。浴室清掃8:30〜10:00は入浴不可", eagle),
      fact("設備・温度", "メインサウナ約90℃ / オートロウリュサウナ約70℃（公式の設定温度）", eagle),
      fact("水風呂", "約16℃ / シングル約7℃ / シルキー約30℃（公式の設定温度）", eagle),
      fact("持ち物", "タオル・シャンプー類など無料アメニティあり", eagle),
      fact("利用条件", "男性3歳以上。中学生以下は18歳以上の保護者同伴。高校生は保護者なしの場合22時まで", eagle),
    ],
  },
  {
    ids: ["manual-aichi-nagoya-sauna"], officialUrl: nagoya, status: "open",
    address: "愛知県名古屋市中村区太閤通6丁目86-3",
    features: ["水風呂あり", "外気あり", "サ飯あり", "タオルレンタルあり"],
    facts: [
      fact("料金", "75分: 平日1,500円 / 土日祝1,700円、19時以降は各200円増。延長15分300円", nagoya),
      fact("営業時間", "日月8:00〜翌1:00 / 火水木10:00〜翌1:00 / 金土8:00〜翌3:00。祝前日は翌3:00まで、祝日は8:00から", nagoya),
      fact("設備", "交流浴・黙浴の2サウナ室、屋上外気浴、お風呂、併設ナゴヤメシ", nagoya),
      fact("水風呂", "9℃と15℃の2種類（公式掲載の目安）", nagoya),
      fact("持ち物", "タオルレンタル200円。入浴料にドリンク3種類飲み放題を含む", nagoya),
      fact("利用条件", "男性専用。レディースデーは公式Instagramで告知", nagoya),
      fact("アクセス", "バス停・大門通から徒歩1分。無料駐車場7台", nagoya),
    ],
  },
  {
    ids: ["manual-aichi-apz"], officialUrl: "https://apz-spa.com/",
    features: ["オートロウリュ", "熱波師あり", "スチーム(ミスト)サウナ", "水風呂あり", "宿泊可"],
    facts: [
      fact("料金", "普通入館・平日: 男性2,300円 / 女性2,200円、土日祝は各200円増。60分は男性1,300円 / 女性1,200円", apz),
      fact("営業時間", "普通入館4:00〜24:00。サウナ・スパ清掃4:00〜6:00、毎月第3水曜9:00〜13:00は閉館", apz),
      fact("設備・温度", "男性: ザ・サウナ80〜85℃ / スチーム約52℃ / ドローム約90℃。女性: スチーム約52℃ / ドローム約90℃", apzSpa),
      fact("水風呂", "男性は約25℃・14℃ / 女性は約21℃・17℃（公式掲載の目安）", apzSpa),
      fact("夜間利用", "普通入館で深夜2時以降は1,000円加算。0:00〜4:00入館は深夜入館料金が別設定", apz),
      fact("宿泊", "男女別カプセルあり（男性92室・女性20室）。宿泊は別プラン", apz),
    ],
  },
  {
    ids: ["manual-aichi-kakitsubata"], officialUrl: kaki,
    address: "愛知県刈谷市東境町吉野55番地 刈谷ハイウェイオアシス",
    features: ["温泉付き", "ドライサウナ", "水風呂あり"],
    facts: [
      fact("料金", "2026年10月19日照合時: 一般大人950円 / 会員900円 / 小人470円。11月1日の改定予告あり", kaki),
      fact("営業時間", "平日9:00〜23:00 / 土日祝7:00〜23:00（受付22:15まで）。毎月15日休館、土日祝なら翌平日", kaki),
      fact("設備", "天然温泉、3段のタワーサウナ、炭酸泉。岩盤浴は別エリア", "https://kakitsubata-spa.com/spring"),
      fact("水風呂", "約16℃の設定（公式掲載）", "https://kakitsubata-spa.com/spring"),
      fact("アクセス", "刈谷PA直結。一般道からも利用可能", "https://kakitsubata-spa.com/access"),
    ],
  },
  {
    ids: ["manual-aichi-okazaki-rakunoyu"], officialUrl: "https://rakunoyu.com/okazaki/",
    address: "愛知県岡崎市庄司田1丁目14-14",
    features: ["オートロウリュ", "遠赤外線サウナ", "塩サウナ", "スチーム(ミスト)サウナ", "水風呂あり", "サ飯あり", "タオルレンタルあり"],
    facts: [
      fact("料金", "一般大人: 平日950円 / 土日祝1,000円。岩盤房は別途550円（中学生以上）", okazaki),
      fact("営業時間", "浴室・サウナ9:00〜23:00（最終受付22:30）。メンテナンス・年末年始の変更あり", okazaki),
      fact("設備・温度", "湿式遠赤外線約70℃、スチーム塩サウナ約50℃。ロウリュサウナは男性限定", okazakiSauna),
      fact("水風呂", "深さ約1mの水風呂（公式掲載）。温度の数値は同ページに記載なし", okazakiSauna),
      fact("持ち物", "フェイス・バスタオルのレンタル350円。館内着300円", okazaki),
      fact("利用条件", "小学生以下だけの入浴不可。岩盤房は中学生以上。繁忙期は特別料金の場合あり", okazaki),
    ],
  },
  {
    ids: ["manual-mie-aou-no-mori"], officialUrl: mori,
    address: "三重県三重郡菰野町大字杉谷字倉谷2302-1",
    features: ["薪サウナ", "テントサウナ", "個室", "貸切可"],
    facts: [
      fact("設備・温度", "MORIは2〜4名貸切テントサウナ・薪ストーブ80〜100℃。NIWAとはプラン・設備が異なります", "https://leopards.co.jp/service/mori"),
      fact("利用条件", "MORIはグループ貸切・WEB予約制。宿泊不可（NIWAとは条件が異なります）", "https://leopards.co.jp/service/mori"),
      fact("持ち物", "MORIは水着を持参。タオル・ドリンクを含むプランと公式記載", "https://leopards.co.jp/service/mori"),
      fact("アクセス", "MORIもNIWA前の駐車場を利用。菰野ICから車で約10分", mori),
    ],
  },
  {
    ids: ["st-aichi-4936", "si-82784"], officialUrl: monkey,
    address: "愛知県名古屋市中村区名駅南1丁目17-23 ニッタビルB1F",
    features: ["セルフロウリュ", "熱波師あり", "スチーム(ミスト)サウナ", "水風呂あり", "個室", "タオルレンタルあり"],
    facts: [
      fact("料金", "パブリック: 平日60分1,800円 / 土日祝90分2,400円。ほかの時間コースあり", monkey),
      fact("営業時間", "月〜木・日祝9:00〜24:00 / 金土・祝前日9:00〜翌2:00。特別営業日は公式参照", monkey),
      fact("設備・温度", "パブリック3室（約50・90・100℃）、水風呂約15・25℃、内気浴エリア", monkey),
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

const curatedIds = new Set(CURATED_FACILITY_EVIDENCE.flatMap(profile => profile.ids));
export const FACILITY_EVIDENCE = [...CURATED_FACILITY_EVIDENCE, ...OFFICIAL_PAGE_EVIDENCE.filter(profile => !profile.ids.some(id => curatedIds.has(id)))];
const byId = new Map(FACILITY_EVIDENCE.flatMap(profile => profile.ids.map(id => [id, profile])));
export function getFacilityEvidence(facility) {
  return byId.get(facility.id) || (facility.legacyIds || []).map(id => byId.get(id)).find(Boolean) || null;
}
export function getVerifiedFeatures(facility) { return getFacilityEvidence(facility)?.features || []; }
export function applyFacilityEvidence(facility) {
  const evidence = getFacilityEvidence(facility);
  if (!evidence) return facility;
  const { city, status } = evidence;
  return {
    ...facility,
    officialUrl: evidence.officialUrl,
    ...(city ? { city } : {}),
    ...(status ? { status, tags: (facility.tags || []).filter(tag => !/開業予定|2026年秋/.test(tag)) } : {}),
    ...(evidence.address ? { address: evidence.address, addressSource: evidence.officialUrl, addressCheckedAt: checkedAt } : {}),
  };
}

export function getMissingEvidenceFields(facility) {
  const facts = getFacilityEvidence(facility)?.facts || [];
  const labels = new Set(facts.map(row => row.label));
  if (facts.some(row => row.label === "設備・温度" && /水風呂/.test(row.value))) labels.add("水風呂");
  if (facts.some(row => /設備・温度/.test(row.label) && /[0-9０-９]+(?:℃|度)/.test(row.value))) labels.add("サウナ温度");
  return [
    ["料金", ["料金"]], ["営業時間", ["営業時間"]],
    ["サウナ設備", ["設備", "設備・温度", "サウナ設備", "サウナストーブ", "サウナルーム", "サウナ収容人数"]], ["水風呂", ["水風呂", "水風呂収容人数", "水風呂温度", "水風呂の温度"]],
    ["サウナ温度", ["サウナ温度", "サウナ室温", "サウナの温度", "サウナ室の温度"]],
    ["利用条件", ["利用条件"]], ["持ち物", ["持ち物"]],
  ].filter(([, alternatives]) => !alternatives.some(label => labels.has(label))).map(([label]) => label);
}
