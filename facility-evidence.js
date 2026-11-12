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
const kiwamiHonten = "https://kiwamisauna.com/store/honten";
const kiwamiOsu = "https://kiwamisauna.com/store/osu";
const kiwamiPrice = "https://kiwamisauna.com/system/price";
const factToday = (label, value, sourceUrl) => ({ label, value, sourceUrl, checkedAt: "2026-10-20" });
const factNov8 = (label, value, sourceUrl) => ({ label, value, sourceUrl, checkedAt: "2026-11-08" });

export const CURATED_FACILITY_EVIDENCE = [
  {
    ids: ["manual-aichi-kiwami-honten", "si-60076"], name: "KIWAMI SAUNA 本店", trait: "urban", officialUrl: kiwamiHonten,
    address: "愛知県名古屋市西区浅間2丁目14-24", city: "名古屋市西区浅間",
    features: ["水風呂あり", "外気あり", "貸切可", "サ飯あり"],
    facts: [
      factToday("料金", "通常1時間未満: 平日1,600円 / 休日1,800円。以降15分400円 / 450円。2時間以上は3,600円 / 3,900円（税込）。月曜朝の別プランあり", kiwamiPrice),
      factToday("営業時間", "月7:00〜23:30、火〜木11:30〜23:30、金11:30〜翌1:00、土日祝7:00〜翌1:00。入店締切は閉店45分前", kiwamiHonten),
      factToday("設備", "総檜のサウナ室、ロウリュ対応ストーブ、中庭の外気浴。完全貸切プランは別途案内", kiwamiHonten),
      factToday("水風呂", "最深部2m・水温16.5℃の超軟水と公式掲載（当日の実測値ではありません）", kiwamiHonten),
      factToday("利用条件", "完全キャッシュレス・現金不可。高校生以下はサウナ・サウナドリンク料金半額", kiwamiPrice),
      factToday("レンタル", "ポンチョ・サウナハット500円、使い切りサウナパンツ50円", kiwamiPrice),
      factToday("サ飯", "2階「食堂きわみ」は食事のみも利用可。11:30〜23:00（L.O.22:30）", kiwamiHonten),
      factToday("アクセス", "浅間町駅徒歩1分。店舗駐車場は計4台（うち軽専用1台）", kiwamiHonten),
    ],
  },
  {
    ids: ["sc2025-kiwami-osu"], officialUrl: kiwamiOsu,
    address: "愛知県名古屋市中区橘1丁目4-12", city: "名古屋市中区橘",
    features: ["セルフロウリュ", "水風呂あり", "サ飯あり"],
    facts: [
      factToday("料金", "通常1時間未満: 平日1,800円 / 休日2,000円。以降15分450円 / 500円。2時間以上は3,900円 / 4,200円（税込）。朝・夜間・ラウンジは別プラン", kiwamiPrice),
      factToday("営業時間", "施設は24時間、サウナエリアは6:00〜翌4:00", kiwamiOsu),
      factToday("設備", "天井高4.2m・4段式タワーサウナ。利用者がロウリュする方式。蔵を改装した内気浴スペース・湯風呂あり", kiwamiOsu),
      factToday("水風呂", "深さ約2m。温度の数値は店舗公式本文で未確認", kiwamiOsu),
      factToday("利用条件", "男性専用（月1回レディースデーあり。日程は公式で確認）", kiwamiOsu),
      factToday("決済・割引", "完全キャッシュレス・現金不可。高校生以下はサウナ・サウナドリンク料金半額", kiwamiPrice),
      factToday("レンタル", "ポンチョ・サウナハット500円、使い切りサウナパンツ100円、歯ブラシ・髭剃り100円", kiwamiPrice),
      factToday("サ飯", "併設中華「Mă by KIWAMI」15:00〜23:00（L.O.22:00）", kiwamiOsu),
      factToday("アクセス", "大須観音駅徒歩7分、上前津駅徒歩10分。店舗駐車場なし", kiwamiOsu),
    ],
  },
  {
    ids: ["si-2776"], name: "軍人湯", status: "closed",
    features: [],
    facts: [{ label: "営業状況", value: "2026年3月31日に閉業。参照元の施設名表記に閉業日が含まれ、関西の2026年閉店情報一覧（京都）にも掲載", sourceUrl: "https://kansai-kaiten.com/kaitenheiten2026_kyoto/", checkedAt: "2026-11-04" }],
  },
  {
    ids: ["st-kyoto-4811", "si-80496"], officialUrl: "https://first-kyoto.com/sauna/", status: "closed",
    features: [],
    facts: [{ label: "営業状況", value: "2026年10月23日の公式発表で、2026年8月の漏水事故からの営業再開を断念し、FIRST THE SAUNA・GOLF・BASEの全施設の閉店を決定と案内（臨時休業から閉店へ変更）", sourceUrl: "https://first-kyoto.com/news/319/", checkedAt: "2026-11-04" }],
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
    ids: ["manual-aichi-apz", "si-2505"], name: "アペゼ", officialUrl: "https://apz-spa.com/",
    address: "愛知県名古屋市千種区今池5-11-14", city: "名古屋市千種区今池",
    searchAliases: ["リラクゼーションスパ アペゼ", "リラクゼーション・スパ・アペゼ"],
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
  // 2026-11-08 curation batch (expert I shortlist, each value read on the official page that day).
  {
    ids: ["st-ibaraki-4554"], name: "つくば温泉 喜楽里 別邸",
    facts: [
      factNov8("営業時間", "9時～24時（最終受付23時）", "https://www.yurakirari.com/kirari/tsukuba/"),
      factNov8("料金", "入館料（税込）大人：平日1,300円 / 土・休日1,500円。小学生：平日750円 / 土・休日850円。岩盤浴・温熱房：平日450円 / 土・休日600円。カード入館回数券（10回分）12,000円", "https://www.yurakirari.com/kirari/tsukuba/price.html"),
      factNov8("利用条件", "未就学児は入館不可", "https://www.yurakirari.com/kirari/tsukuba/price.html"),
    ],
  },
  {
    ids: ["st-hokkaido-15"], name: "ニコーリフレ",
    facts: [
      factNov8("料金", "24時間コース（外出不可）：リフレ会員 平日2,900円 / 土日祝・特別日3,100円、ビジター 平日4,000円 / 土日祝・特別日4,200円。会員5時間コース：リフレタイム（16時まで受付）平日1,900円 / 土日祝2,100円、ナイトタイム（20時まで受付）平日2,100円 / 土日祝2,300円。深夜料金は別途1,200円", "https://www.nikoh.info/spa-sauna/price/"),
    ],
  },
  {
    ids: ["st-ishikawa-2185"], name: "天然温泉 サウナ片町",
    facts: [
      factNov8("営業時間", "大浴殿（天然温泉アパスパ金沢中央）6:00～24:00、年中無休。宿泊者は入浴無料", "https://www.apahotel.com/hotel/hokuriku/07_kanazawa-chuou/"),
      factNov8("料金", "外来入浴は1日1,200円（税込、フェイスタオル・バスタオル付き）。入泉回数券（6枚綴り）5,500円（税込）", "https://www.apahotel.com/hotel/hokuriku/07_kanazawa-chuou/"),
      factNov8("設備", "岩盤浴（ヒーリングルーム）は14:00～22:30、別途500円（宿泊者も有料）", "https://www.apahotel.com/hotel/hokuriku/07_kanazawa-chuou/"),
    ],
  },
  {
    ids: ["st-kanagawa-1993"], name: "おふろの王様 港南台店",
    facts: [
      factNov8("営業時間", "9:00～24:00（最終受付23:00）", "https://www.ousama2603.com/shop/kounandai/"),
      factNov8("料金", "入館料金：平日 大人（中学生以上）会員850円 / 一般1,000円、小人（小学生）350円。土・日・祝日 大人 会員980円 / 一般1,100円、小人350円。入浴回数券（10枚綴り）7,700円。小学生未満は無料", "https://www.ousama2603.com/shop/kounandai/"),
    ],
  },
  {
    ids: ["st-toyama-283"], name: "満天の湯 富山店",
    facts: [
      // Hours are NOT curated: the official access page itself shows both 8:00 and 7:00 openings.
      factNov8("料金", "入浴料：大人（中学生以上）朝風呂（10時まで）700円、10時以降は一般850円 / 会員780円、回数券は1回あたり730円。中人（小学生）：朝風呂300円、10時以降は一般380円 / 会員350円、回数券300円。小人（5才以下）：朝風呂・一般100円、10時以降の会員は無料", "http://www.manten-yu.co.jp/toyama/access/"),
      factNov8("休館日", "年中無休", "http://www.manten-yu.co.jp/toyama/access/"),
    ],
  },
  {
    ids: ["st-tokushima-3696"], name: "あらたえの湯",
    facts: [
      factNov8("営業時間", "朝8:00～深夜1:00（最終受付 深夜0:00）。金曜日・土曜日・祝日の前日は朝8:00～深夜2:00（最終受付 深夜1:00）", "http://aratae.jp/"),
      factNov8("休館日", "店休日は第2水曜日", "http://aratae.jp/"),
    ],
  },
  // 2026-11-08: facility added at the owner's request (Instagram @8seas_sauna).
  // All values read on the official site https://8sauna.jp/ the same day.
  {
    ids: ["manual-shiga-8seas-hira"], name: "8Seas Sauna HIRA", officialUrl: "https://8sauna.jp/",
    address: "〒520-0502 滋賀県大津市南小松1695-1", city: "大津市南小松",
    features: ["水風呂あり", "外気あり", "貸切可"],
    facts: [
      factNov8("営業時間", "10:00～21:00（最終受付19:00）。冬季は営業時間短縮あり", "https://8sauna.jp/"),
      factNov8("休館日", "金曜日", "https://8sauna.jp/"),
      factNov8("料金", "1人あたり（税込）：平日 120分2,200円 / 180分2,860円、土日祝 120分2,970円 / 180分4,180円。季節によって価格が変更する場合あり。貸切は平日のみ、180分55,000円～（10名まで、追加1名ごとに5,500円～）", "https://8sauna.jp/"),
      factNov8("設備", "大型サウナ室に国産薪ストーブ3台。比良山の地下水を使った人工河川の水風呂があり、水温は一年を通して15℃前後と公式掲載。木々に囲まれた外気浴スペース", "https://8sauna.jp/"),
      factNov8("利用条件", "男女共用のパブリックサウナで、水着・湯汲着（ラッシュガード等）の着用が必須。ネットで事前予約（空きがあれば当日受入あり）。16歳未満は利用不可。水着・タオルは販売のみでレンタルはなし", "https://8sauna.jp/"),
    ],
  },
  {
    ids: ["manual-aichi-fukunoyu-kasugai"], name: "大泉寺温泉 福の湯", officialUrl: "https://www.fukunoyu.co.jp/",
    address: "〒486-0812 愛知県春日井市大泉寺町220-1", city: "春日井市",
    features: [],
    facts: [
      factNov8("営業時間", "10:00～深夜0:00（最終受付23:30）", "https://www.fukunoyu.co.jp/"),
      factNov8("定休日", "年中無休（年2～3回、設備点検のため休館あり）", "https://www.fukunoyu.co.jp/"),
      factNov8("料金", "入館料 大人（中学生以上）平日1,000円／土日祝特1,000円、子ども（3歳～小学生）平日300円／土日祝特400円、学割 全日700円、岩盤浴 全日1,000円", "https://www.fukunoyu.co.jp/"),
    ],
  },
  {
    ids: ["manual-tokyo-keio-takaosan"], name: "京王高尾山温泉 / 極楽湯", officialUrl: "https://www.takaosan-onsen.jp/",
    address: "〒193-0844 東京都八王子市高尾町2229-7", city: "八王子市",
    features: [],
    facts: [
      factNov8("営業時間", "8:00～22:30（最終入館受付21:45）", "https://www.takaosan-onsen.jp/"),
      factNov8("定休日", "年中無休", "https://www.takaosan-onsen.jp/"),
    ],
  },
  {
    ids: ["manual-tokyo-gokurakuyu-tama"], name: "極楽湯 多摩センター店", officialUrl: "https://www.rakuspa.com/",
    address: "〒206-0033 東京都多摩市落合1-30-1", city: "多摩市",
    features: [],
    facts: [
      factNov8("営業時間", "平日・祝 9:00～翌2:00／土日 7:00～翌2:00（最終受付 翌1:20）", "https://www.rakuspa.com/"),
      factNov8("定休日", "年中無休", "https://www.rakuspa.com/"),
    ],
  },
  {
    ids: ["manual-tokyo-rakuspa-fuchu"], name: "RAKU SPA Station 府中", officialUrl: "https://rakuspa.com/fuchu/",
    address: "〒183-0022 東京都府中市宮西町1-5-1 府中トーセイビルI", city: "府中市",
    features: [],
    facts: [
      factNov8("営業時間", "[日～木・祝] 10:00～翌1:00（最終受付24:00）／[金・土・祝前日] 10:00～翌8:00（最終受付 翌7:00）／朝風呂[土日祝] 6:00～8:00", "https://rakuspa.com/fuchu/"),
    ],
  },
  {
    ids: ["manual-tokyo-rakuspa-musashikoganei"], name: "RAKU SPA Station 武蔵小金井", officialUrl: "https://rakuspa.com/musashi/",
    address: "〒184-0004 東京都小金井市本町2-1-11", city: "小金井市",
    features: [],
    facts: [
      factNov8("営業時間", "[日～木・祝] 9:00～翌2:00（最終受付 翌1:00）／[金・土・祝前日] 9:00～翌8:00（最終受付 翌7:00）／朝風呂[土日祝] 6:00～8:00", "https://rakuspa.com/musashi/"),
    ],
  },
  {
    ids: ["manual-aichi-gokurakuyu-toyohashi"], name: "極楽湯 豊橋店", officialUrl: "https://www.rakuspa.com/",
    address: "〒440-0092 愛知県豊橋市瓜郷町一新替13-1", city: "豊橋市",
    features: [],
    facts: [
      factNov8("営業時間", "平日 9:00～翌2:00／土日祝 6:00～翌2:00（最終受付 翌1:20）", "https://www.rakuspa.com/"),
      factNov8("定休日", "年中無休", "https://www.rakuspa.com/"),
    ],
  },
  {
    ids: ["manual-osaka-gokurakuyu-hirakata"], name: "極楽湯 枚方店", officialUrl: "https://www.gokurakuyu.com/hirakata/hirakata.html",
    address: "〒573-1132 大阪府枚方市招提田近3-8-1", city: "枚方市",
    features: [],
    facts: [
      factNov8("営業時間", "平日 10:00～翌2:00／土日祝 6:00～翌2:00（受付終了 翌1:30）", "https://www.gokurakuyu.com/hirakata/hirakata.html"),
      factNov8("定休日", "毎月第3水曜日", "https://www.gokurakuyu.com/hirakata/hirakata.html"),
      factNov8("料金", "入浴料 大人（中学生以上）600円、小学生200円、幼児（3歳以上）100円、2歳以下無料", "https://www.gokurakuyu.com/hirakata/hirakata.html"),
    ],
  },
  {
    ids: ["manual-osaka-gokurakuyu-ibaraki"], name: "極楽湯 茨木店", officialUrl: "https://www.rakuspa.com/",
    address: "〒567-0025 大阪府茨木市田中町18-18", city: "茨木市",
    features: [],
    facts: [
      factNov8("営業時間", "平日 8:00～深夜2:00／土日祝 6:00～深夜2:00（最終受付 深夜1:30）", "https://www.rakuspa.com/"),
      factNov8("定休日", "年中無休（メンテナンス休館あり）", "https://www.rakuspa.com/"),
    ],
  },
  {
    ids: ["manual-osaka-gokurakuyu-sakai"], name: "極楽湯 堺泉北店", officialUrl: "https://www.rakuspa.com/",
    address: "〒590-0106 大阪府堺市南区豊田825", city: "堺市",
    features: [],
    facts: [
      factNov8("営業時間", "平日 9:00～翌2:00／土日祝 6:00～翌2:00（最終受付 翌1:30）", "https://www.rakuspa.com/"),
      factNov8("定休日", "無休", "https://www.rakuspa.com/"),
    ],
  },
  {
    ids: ["manual-tokyo-saunametsa-oimachi"], name: "サウナメッツァ大井町トラックス", officialUrl: "https://ryusenjinoyu.com/saunametsaoimachi/",
    address: "〒140-0005 東京都品川区広町2丁目1番3号 OIMACHI TRACKS HOTEL & RESIDENCE TOWER 4階", city: "品川区",
    features: [],
    facts: [
      factNov8("営業時間", "6:00～翌2:00（最終入館1:00）", "https://ryusenjinoyu.com/saunametsaoimachi/"),
      factNov8("定休日", "不定休", "https://ryusenjinoyu.com/saunametsaoimachi/"),
    ],
  },
  {
    ids: ["manual-tokyo-manyo-machida"], name: "東京・湯河原温泉 万葉の湯", officialUrl: "https://www.manyo.co.jp/machida/",
    address: "〒194-0004 東京都町田市鶴間7丁目3番1号", city: "町田市",
    features: [],
    facts: [
      factNov8("営業時間", "24時間営業", "https://www.manyo.co.jp/machida/"),
      factNov8("定休日", "年中無休", "https://www.manyo.co.jp/machida/"),
    ],
  },
  {
    ids: ["manual-tokyo-manyo-toyosu"], name: "東京豊洲 万葉倶楽部", officialUrl: "https://www.toyosu-senkyakubanrai.jp/",
    address: "〒135-0061 東京都江東区豊洲6丁目5番1号", city: "江東区",
    features: [],
    facts: [
      factNov8("営業時間", "24時間営業", "https://www.toyosu-senkyakubanrai.jp/"),
      factNov8("定休日", "年中無休（休業日なし）", "https://www.toyosu-senkyakubanrai.jp/"),
    ],
  },
  {
    ids: ["manual-hokkaido-manyo-futomi"], name: "ふとみ銘泉 万葉の湯", officialUrl: "https://www.manyo.co.jp/futomi/",
    address: "〒061-3776 北海道石狩郡当別町太美町1695", city: "石狩郡当別町",
    features: [],
    facts: [
      factNov8("営業時間", "午前10:00～翌朝9:00（深夜0:00～朝6:00は大浴場清掃のため入浴不可）", "https://www.manyo.co.jp/futomi/"),
      factNov8("定休日", "年中無休", "https://www.manyo.co.jp/futomi/"),
      factNov8("料金", "入館料 大人（中学生以上）1,800円、子ども（小学生）700円、幼児（3才以上）300円", "https://www.manyo.co.jp/futomi/"),
    ],
  },
  {
    ids: ["manual-hokkaido-manyo-asahikawa"], name: "旭川高砂台 万葉の湯", officialUrl: "https://www.manyo.co.jp/asahikawa/",
    address: "〒070-8061 北海道旭川市高砂台1丁目1-52", city: "旭川市",
    features: [],
    facts: [
      factNov8("営業時間", "午前10:00～翌朝9:00", "https://www.manyo.co.jp/asahikawa/"),
      factNov8("定休日", "年中無休", "https://www.manyo.co.jp/asahikawa/"),
    ],
  },
  {
    ids: ["manual-chiba-ooedo-kimitsu"], name: "大江戸温泉物語 君津の森", officialUrl: "https://www.ooedoonsen.jp/kimitsu/day_trip/",
    address: "〒292-1144 千葉県君津市法木384-119", city: "君津市",
    features: [],
    facts: [
      factNov8("営業時間", "日帰り入浴 11:00～20:00（最終入場19:00）", "https://www.ooedoonsen.jp/kimitsu/day_trip/"),
      factNov8("料金", "日帰り入浴 大人 平日620円／土日祝800円／繁忙日1,000円、小学生 平日320円／土日祝470円／繁忙日590円、幼児 平日120円／土日祝140円／繁忙日170円、3歳未満無料", "https://www.ooedoonsen.jp/kimitsu/day_trip/"),
    ],
  },
  {
    ids: ["manual-tokyo-yurakunosato-akishima"], name: "昭島温泉 湯楽の里", officialUrl: "https://www.yurakirari.com/akishima/",
    address: "〒196-0001 東京都昭島市美堀町3-14-10", city: "昭島市",
    features: [],
    facts: [
      factNov8("営業時間", "9時～深夜1時（最終受付24時30分）", "https://www.yurakirari.com/akishima/"),
      factNov8("料金", "入館料 大人（中学生以上）平日1,030円／土・休日1,130円、こども（4歳～小学生）平日450円／土・休日500円", "https://www.yurakirari.com/akishima/"),
    ],
  },
  {
    ids: ["manual-tokyo-yurakunosato-kunitachi"], name: "国立温泉 湯楽の里", officialUrl: "https://www.yurakirari.com/kunitachi/",
    address: "〒186-0012 東京都国立市泉3丁目29-11（フレスポ国立南内）", city: "国立市",
    features: [],
    facts: [
      factNov8("営業時間", "9時～深夜1時（最終受付24時）", "https://www.yurakirari.com/kunitachi/"),
    ],
  },
  {
    ids: ["manual-tokyo-ofuronosama-tama"], name: "おふろの王様 多摩百草店", officialUrl: "https://www.ousama2603.com/tamamogusa/",
    address: "〒206-0001 東京都多摩市和田1352-1", city: "多摩市",
    features: [],
    facts: [
      factNov8("営業時間", "入館 9:00～24:00（最終受付23:00）", "https://www.ousama2603.com/tamamogusa/"),
      factNov8("定休日", "年中無休", "https://www.ousama2603.com/tamamogusa/"),
    ],
  },
  {
    ids: ["manual-tokyo-ofuronosama-hanakoganei"], name: "おふろの王様 花小金井店", officialUrl: "https://www.ousama2603.com/hanakoganei/",
    address: "〒187-0003 東京都小平市花小金井南町3-9-10", city: "小平市",
    features: [], status: "suspended",
    facts: [
      factNov8("営業時間", "入館 9:00～24:00（最終受付23:00）", "https://www.ousama2603.com/hanakoganei/"),
      factNov8("定休日", "年中無休", "https://www.ousama2603.com/hanakoganei/"),
      factNov8("営業状況", "2026年4月からリニューアル工事のため休館中。再開は2026年12月の予定と公式案内", "https://www.ousama2603.com/hanakoganei/"),
    ],
  },
  {
    ids: ["manual-aichi-corona-handa"], name: "天然温泉コロナの湯 半田店", officialUrl: "https://www.korona.co.jp/onsen/han/",
    address: "愛知県半田市旭町3-11-1", city: "半田市",
    features: [],
    facts: [
      factNov8("営業時間", "月～金 9:00～23:00（最終受付22:30）／土・日 7:00～23:00（最終受付22:30）", "https://www.korona.co.jp/onsen/han/"),
      factNov8("定休日", "4ヶ月に一度メンテナンス休館日あり（年3回不定休）", "https://www.korona.co.jp/onsen/han/"),
      factNov8("料金", "入泉料 大人（中学生以上）平日900円／土・日・祝1,000円、小人（3歳～小学生）400円、2歳以下無料", "https://www.korona.co.jp/onsen/han/"),
    ],
  },
  {
    ids: ["st-chiba-1750"], name: "大江戸温泉物語 浦安万華郷", officialUrl: "https://www.ooedoonsen.jp/",
    features: [], status: "closed",
    facts: [
      factNov8("営業状況", "借地契約の満了により、2024年6月2日をもって営業を終了（閉館）。大江戸温泉物語の公式発表による", "https://www.ooedoonsen.jp/wp-content/uploads/news-closing-20240603-02.pdf"),
    ],
  },
  {
    ids: ["sc2025-totopa"], name: "TOTOPA 都立明治公園店", officialUrl: "https://totopa.jp/",
    address: "〒160-0013 東京都新宿区霞ヶ丘町5-7 都立明治公園内 A棟2・3階", city: "新宿区",
    features: [],
    facts: [
      factNov8("料金", "平日 1時間1,980円（税込2,178円）～、土日祝 1時間2,480円（税込2,728円）～（2025年8月1日～の料金体系）", "https://totopa.jp/"),
      factNov8("設備", "男性フロアに複数のサウナ室、女性フロアにサウナ、スチームサウナを備える", "https://totopa.jp/"),
    ],
  },
  {
    ids: ["sc2025-janu-tokyo"], name: "Janu Tokyo", officialUrl: "https://www.janu.com/janu-tokyo/ja/",
    address: "〒106-0041 東京都港区麻布台1-2-2", city: "港区",
    features: [],
    facts: [
      factNov8("利用条件", "サウナシュラン受賞対象は、ホテル内の貸切スパハウス「Spa House Experience」（バーニャ／ハマム、最大4名・2時間から）。宿泊者以外も利用可", "https://www.janu.com/janu-tokyo/ja/wellness/"),
    ],
  },
  {
    ids: ["manual-nara-ume-sauna"], name: "ume,sauna", officialUrl: "https://www.ume-yamazoe.com/sauna",
    address: "〒630-2356 奈良県山辺郡山添村片平452", city: "山辺郡山添村",
    features: [],
    facts: [
      factNov8("営業形態", "アウトドアフィンランド式サウナ（水着着用）。宿「ume, yamazoe」の宿泊客は枠制で貸切利用でき、日帰りプランもある（要予約）", "https://www.ume-yamazoe.com/sauna"),
    ],
  },
  {
    ids: ["manual-tokyo-steams"], name: "SteaMs.", officialUrl: "https://steams-tokyo.com/",
    address: "〒107-0052 東京都港区赤坂9-5-12 パークサイドシックス B1-D", city: "港区",
    features: [],
    facts: [
      factNov8("営業時間", "10:00～22:00（水曜日は貸切限定）。完全予約制の女性向けハーバルスチームサウナ", "https://steams-tokyo.com/"),
      factNov8("営業状況", "2026年11月30日の営業をもって閉店と公式発表（最終受付20:00）", "https://steams-tokyo.com/news/post-369/"),
    ],
  },
  {
    ids: ["manual-hotel-apa-01"], name: "アパホテル〈名古屋丸の内駅前〉", officialUrl: "https://www.apahotel.com/hotel/tokai/aichi/nagoyamarunouchi-ekimae/",
    address: "〒460-0002 愛知県名古屋市中区丸の内2-17-28", city: "名古屋市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "6:00～10:00 / 15:00～25:00", "https://www.apahotel.com/hotel/tokai/aichi/nagoyamarunouchi-ekimae/"),
    ],
  },
  {
    ids: ["manual-hotel-apa-02"], name: "アパホテル〈京都駅堀川通〉", officialUrl: "https://www.apahotel.com/hotel/kansai/kyoto/kyotoeki-horikawa/",
    address: "〒600-8236 京都府京都市下京区油小路通塩小路西油小路町1番地", city: "京都市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "6:00～10:00 / 15:00～25:00", "https://www.apahotel.com/hotel/kansai/kyoto/kyotoeki-horikawa/"),
    ],
  },
  {
    ids: ["manual-hotel-apa-03"], name: "アパホテル〈鈴鹿中央〉", officialUrl: "https://www.apahotel.com/hotel/tokai/mie/suzuka-chuou/",
    address: "〒513-0827 三重県鈴鹿市大池3丁目11番地35号", city: "鈴鹿市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "6:00～9:00 / 16:00～24:00", "https://www.apahotel.com/hotel/tokai/mie/suzuka-chuou/"),
    ],
  },
  {
    ids: ["manual-hotel-apa-04"], name: "アパホテル＆リゾート〈上越妙高〉", officialUrl: "https://www.apahotel.com/resort/myoko/spa/",
    address: "〒949-2224 新潟県妙高市桶海1090", city: "妙高市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "6:00～10:00 / 12:00～24:00", "https://www.apahotel.com/resort/myoko/spa/"),
    ],
  },
  {
    ids: ["manual-hotel-apa-05"], name: "アパホテル〈加賀大聖寺駅前〉", officialUrl: "https://www.apahotel.com/hotel/hokuriku/ishikawa/kagadaisyouji-ekimae/",
    address: "〒922-0842 石川県加賀市熊坂町イ226-4", city: "加賀市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "6:00～9:00 / 15:00～25:00", "https://www.apahotel.com/hotel/hokuriku/ishikawa/kagadaisyouji-ekimae/"),
    ],
  },
  {
    ids: ["manual-hotel-apa-06"], name: "アパホテル〈千葉八千代緑が丘〉", officialUrl: "https://www.apahotel.com/hotel/syutoken/chiba/chibayachiyo/",
    address: "〒276-0049 千葉県八千代市緑が丘1-2-30", city: "八千代市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "6:00～10:00 / 15:00～25:00", "https://www.apahotel.com/hotel/syutoken/chiba/chibayachiyo/"),
    ],
  },
  {
    ids: ["manual-hotel-apa-07"], name: "アパホテル〈大阪谷町四丁目駅前〉", officialUrl: "https://www.apahotel.com/hotel/kansai/osaka/osakatanimachi-4choume/",
    address: "〒540-0011 大阪府大阪市中央区農人橋1-1-27", city: "大阪市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～翌10:00", "https://www.apahotel.com/hotel/kansai/osaka/osakatanimachi-4choume/"),
    ],
  },
  {
    ids: ["manual-hotel-apa-08"], name: "アパホテル〈大阪天満〉", officialUrl: "https://www.apahotel.com/hotel/kansai/osaka/osakatenma/",
    address: "〒530-0035 大阪府大阪市北区同心2-16-15", city: "大阪市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "6:00～10:00 / 15:00～25:00", "https://www.apahotel.com/hotel/kansai/osaka/osakatenma/"),
    ],
  },
  {
    ids: ["manual-hotel-apa-09"], name: "アパホテル〈淀屋橋駅前〉", officialUrl: "https://www.apahotel.com/hotel/kansai/osaka/yodoyabashi-ekimae/",
    address: "〒541-0044 大阪府大阪市中央区伏見町3-1-9", city: "大阪市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "6:00～10:00 / 15:00～25:00", "https://www.apahotel.com/hotel/kansai/osaka/yodoyabashi-ekimae/"),
    ],
  },
  {
    ids: ["manual-hotel-apa-10"], name: "アパホテル＆リゾート〈大阪なんば駅前タワー〉", officialUrl: "https://www.apahotel.com/resort/osaka-namba-ekimae-tower/spa/",
    address: "〒556-0017 大阪府大阪市浪速区湊町1-2-13", city: "大阪市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～26:00 / 6:00～10:00", "https://www.apahotel.com/resort/osaka-namba-ekimae-tower/spa/"),
    ],
  },
  {
    ids: ["manual-hotel-apa-11"], name: "アパホテル＆リゾート〈札幌〉", officialUrl: "https://www.apahotel.com/resort/sapporo/",
    address: "〒005-0804 北海道札幌市南区川沿4条2丁目1-1", city: "札幌市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "6:00～10:00 / 15:00～24:00", "https://www.apahotel.com/resort/sapporo/"),
    ],
  },
  {
    ids: ["manual-hotel-candeo-01"], name: "カンデオホテルズ半田", officialUrl: "https://www.candeohotels.com/ja/aichi-handa/",
    address: "〒475-0859 愛知県半田市天王町1-50-8", city: "半田市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00〜翌11:00", "https://www.candeohotels.com/ja/aichi-handa/"),
    ],
  },
  {
    ids: ["manual-hotel-candeo-02"], name: "カンデオホテルズ京都烏丸六角", officialUrl: "https://www.candeohotels.com/ja/kyoto-rokkaku/",
    address: "〒604-8164 京都市中京区六角通烏丸西入骨屋町149（室町通下がる六角東入る南側）", city: "京都市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00〜翌11:00", "https://www.candeohotels.com/ja/kyoto-rokkaku/"),
    ],
  },
  {
    ids: ["manual-hotel-candeo-03"], name: "カンデオホテルズ菊陽熊本空港", officialUrl: "https://www.candeohotels.com/ja/kumamoto-kikuyo/",
    address: "〒869-1101 熊本県菊池郡菊陽町津久礼2380-1", city: "菊池郡菊陽町",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00〜翌11:00（男女入替制、曜日により男女の時間帯が異なる）", "https://www.candeohotels.com/ja/kumamoto-kikuyo/"),
    ],
  },
  {
    ids: ["manual-hotel-candeo-04"], name: "カンデオホテルズ大津熊本空港", officialUrl: "https://www.candeohotels.com/ja/kumamoto-ozu/",
    address: "〒869-1235 熊本県菊池郡大津町室736-1", city: "菊池郡大津町",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00〜翌11:00", "https://www.candeohotels.com/ja/kumamoto-ozu/"),
    ],
  },
  {
    ids: ["manual-hotel-candeo-05"], name: "カンデオホテルズ静岡島田", officialUrl: "https://www.candeohotels.com/ja/shizuoka-shimada/",
    address: "〒427-0104 静岡県島田市井口1417", city: "島田市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "女性：15:00〜17:45、21:45〜23:45、3:00〜5:45、9:00〜11:00／男性：18:00〜21:30、24:00〜2:45、6:00〜8:45（男女入替制）", "https://www.candeohotels.com/ja/shizuoka-shimada/"),
    ],
  },
  {
    ids: ["manual-hotel-candeo-06"], name: "カンデオホテルズ大阪ザ・タワー", officialUrl: "https://www.candeohotels.com/ja/osaka-tower/",
    address: "〒530-0004 大阪府大阪市北区堂島浜1-1-27（フロント17階）", city: "大阪市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00〜翌11:00", "https://www.candeohotels.com/ja/osaka-tower/"),
    ],
  },
  {
    ids: ["manual-hotel-candeo-07"], name: "カンデオホテルズ大阪なんば", officialUrl: "https://www.candeohotels.com/ja/osaka-namba/",
    address: "〒542-0083 大阪府大阪市中央区東心斎橋2-2-5", city: "大阪市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00〜翌11:00", "https://www.candeohotels.com/ja/osaka-namba/"),
    ],
  },
  {
    ids: ["manual-hotel-candeo-08"], name: "カンデオホテルズ大阪岸辺", officialUrl: "https://www.candeohotels.com/ja/osaka-kishibe/",
    address: "〒564-0018 大阪府吹田市岸部新町5-45", city: "吹田市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00〜翌11:00", "https://www.candeohotels.com/ja/osaka-kishibe/"),
    ],
  },
  {
    ids: ["manual-hotel-candeo-09"], name: "カンデオホテルズ大阪心斎橋", officialUrl: "https://www.candeohotels.com/ja/osaka-shinsaibashi/",
    address: "〒542-0085 大阪府大阪市中央区心斎橋筋2丁目7-12", city: "大阪市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00〜翌11:00", "https://www.candeohotels.com/ja/osaka-shinsaibashi/"),
    ],
  },
  {
    ids: ["manual-hotel-candeo-10"], name: "カンデオホテルズ大阪枚方", officialUrl: "https://www.candeohotels.com/ja/osaka-hirakata/",
    address: "〒573-0032 大阪府枚方市岡東町19-1 ステーションヒル枚方（フロント19階）", city: "枚方市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00〜翌11:00", "https://www.candeohotels.com/ja/osaka-hirakata/"),
    ],
  },
  {
    ids: ["manual-hotel-candeo-11"], name: "ザ シンギュラリ ホテル ＆ スカイスパ アット ユニバーサル・スタジオ・ジャパン", officialUrl: "https://www.candeohotels.com/ja/singulari/",
    address: "〒554-0024 大阪府大阪市此花区島屋6丁目2番25号", city: "大阪市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00〜翌11:00", "https://www.candeohotels.com/ja/singulari/"),
    ],
  },
  {
    ids: ["manual-hotel-candeo-12"], name: "カンデオホテルズ茅野", officialUrl: "https://www.candeohotels.com/ja/nagano-chino/",
    address: "〒391-0000 長野県茅野市中沖2-7", city: "茅野市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00〜翌11:00", "https://www.candeohotels.com/ja/nagano-chino/"),
    ],
  },
  {
    ids: ["manual-hotel-candeo-13"], name: "カンデオホテルズ東京新橋", officialUrl: "https://www.candeohotels.com/ja/tokyo-shimbashi/",
    address: "〒105-0004 東京都港区新橋3-6-8", city: "港区",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00〜翌11:00", "https://www.candeohotels.com/ja/tokyo-shimbashi/"),
    ],
  },
  {
    ids: ["manual-hotel-candeo-14"], name: "カンデオホテルズ東京六本木", officialUrl: "https://www.candeohotels.com/ja/tokyo-roppongi/",
    address: "〒106-0032 東京都港区六本木6-7-11", city: "港区",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00〜翌11:00", "https://www.candeohotels.com/ja/tokyo-roppongi/"),
    ],
  },
  {
    ids: ["manual-hotel-roynet-01"], name: "ダイワロイネットホテル松江駅前", officialUrl: "https://www.daiwaroynet.jp/matsue-ekimae/",
    address: "〒690-0003 島根県松江市朝日町590-10", city: "松江市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～24:00／6:00～10:00", "https://www.daiwaroynet.jp/matsue-ekimae/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-01"], name: "天然温泉 つつじの湯 ドーミーインEXPRESS豊橋", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/toyohashi/",
    address: "〒440-0893 愛知県豊橋市札木町118", city: "豊橋市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用停止）", "https://dormy-hotels.com/dormyinn/hotels/toyohashi/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-02"], name: "天然温泉 三州の湯 ドーミーインEXPRESS三河安城", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/mikawaanjo/",
    address: "〒446-0059 愛知県安城市三河安城本町1-1-3", city: "安城市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/mikawaanjo/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-03"], name: "天然温泉 扇浜の湯 ドーミーイン川崎", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/kawasaki/",
    address: "〒210-0005 神奈川県川崎市川崎区東田町9-3", city: "川崎市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/kawasaki/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-04"], name: "天然温泉 茶月の湯 ドーミーインEXPRESS掛川", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/kakegawa/",
    address: "〒436-0075 静岡県掛川市仁藤町3-12", city: "掛川市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/kakegawa/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-05"], name: "天然温泉 富嶽の湯 ドーミーイン三島", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/mishima/",
    address: "〒411-0035 静岡県三島市大宮町3-18-33", city: "三島市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/mishima/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-06"], name: "天然温泉 碧宝の湯 ドーミーイン小松", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/komatsu/",
    address: "〒923-0868 石川県小松市日の出町4丁目211番", city: "小松市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～翌5：00利用休止）", "https://dormy-hotels.com/dormyinn/hotels/komatsu/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-07"], name: "天然温泉 そが浜の湯 ドーミーイン千葉City Soga", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/soga/",
    address: "〒260-0842 千葉県千葉市中央区南町2-15-4", city: "千葉市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/soga/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-08"], name: "天然温泉 水都の湯 ドーミーインPREMIUM大阪北浜", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/osakakitahama/",
    address: "〒541-0043 大阪府大阪市中央区高麗橋1丁目6番7号", city: "大阪市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/osakakitahama/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-09"], name: "天然温泉 朝霧の湯 ドーミーインPREMIUMなんばANNEX", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/nanba_ax/",
    address: "〒542-0083 大阪府大阪市中央区東心斎橋2-1-6", city: "大阪市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/nanba_ax/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-10"], name: "天然温泉 夕霧の湯 ドーミーインPREMIUMなんば", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/premium_nanba/",
    address: "〒542-0082 大阪府大阪市中央区島之内2-14-23", city: "大阪市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/premium_nanba/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-11"], name: "すえひろの湯 ドーミーイン秋葉原", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/akihabara/",
    address: "〒101-0021 東京都千代田区外神田4-12-5", city: "千代田区",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/akihabara/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-12"], name: "ドーミーインEXPRESS目黒青葉台", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/meguro/",
    address: "〒153-0042 東京都目黒区青葉台3-21-8", city: "目黒区",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（全日男女入替制：女性15：00～20：00／男性20：30～翌10：00、サウナのみ深夜1：00～5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/meguro/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-13"], name: "ドーミーインPREMIUM渋谷神宮前", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/shibuya/",
    address: "〒150-0001 東京都渋谷区神宮前6-24-4", city: "渋谷区",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/shibuya/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-14"], name: "亀島川温泉 新川の湯 ドーミーイン東京八丁堀", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/tokyohatchobori/",
    address: "〒104-0033 東京都中央区新川2-20-4", city: "中央区",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/tokyohatchobori/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-15"], name: "春日の湯 ドーミーイン後楽園", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/korakuen/",
    address: "〒113-0033 東京都文京区本郷4-23-14", city: "文京区",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/korakuen/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-16"], name: "天然温泉 七宝の湯 ドーミーインPREMIUM銀座", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/ginza/",
    address: "〒104-0061 東京都中央区銀座6-16-8", city: "中央区",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌朝10：00（サウナのみ1：00～5：00利用停止）", "https://dormy-hotels.com/dormyinn/hotels/ginza/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-17"], name: "天然温泉 豊穣の湯 ドーミーイン池袋", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/ikebukuro/",
    address: "〒170-0013 東京都豊島区東池袋3-11-11", city: "豊島区",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌朝10：00（サウナのみ1：00～5：00利用停止）", "https://dormy-hotels.com/dormyinn/hotels/ikebukuro/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-18"], name: "展望大浴場 あさひ湯 ドーミーインEXPRESS浅草", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/asakusa/",
    address: "〒111-0033 東京都台東区花川戸1-3-4", city: "台東区",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（曜日別男女入替制、サウナのみ深夜1：00～5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/asakusa/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-19"], name: "伝馬の湯 ドーミーインPREMIUM東京小伝馬町", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/tokyokodenmacho/",
    address: "〒103-0001 東京都中央区日本橋小伝馬町2番3号", city: "中央区",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/tokyokodenmacho/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-20"], name: "徒士の湯 ドーミーイン上野・御徒町", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/ueno/",
    address: "〒110-0005 東京都台東区上野6丁目7番22号", city: "台東区",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/ueno/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-21"], name: "明神の湯 ドーミーインPREMIUM神田", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/kanda/",
    address: "〒101-0041 東京都千代田区神田須田町1-16", city: "千代田区",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～翌5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/kanda/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-22"], name: "天然温泉 白鷺の湯 ドーミーイン姫路", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/himeji/",
    address: "〒670-0964 兵庫県姫路市豊沢町160-2", city: "姫路市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/himeji/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-23"], name: "石狩の湯 ドーミーインPREMIUM札幌", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/premium_sapporo",
    address: "〒060-0062 北海道札幌市中央区南2条西6丁目4-1", city: "札幌市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/premium_sapporo"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-24"], name: "狸の湯 ドーミーイン札幌ANNEX", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/sapporo_ax",
    address: "〒060-0063 北海道札幌市中央区南三条西6丁目10-6", city: "札幌市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/sapporo_ax"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-25"], name: "天然温泉 幸鐘の湯 ドーミーイン東室蘭", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/higashimuroran/",
    address: "〒050-0074 北海道室蘭市中島町2-30-11", city: "室蘭市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/higashimuroran/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-26"], name: "天然温泉 常呂川の湯 ドーミーイン北見", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/kitami/",
    address: "〒090-0044 北海道北見市北四条西2丁目7-1", city: "北見市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/kitami/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-27"], name: "天然温泉 神威の湯 ドーミーイン旭川", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/asahikawa/",
    address: "〒070-0035 北海道旭川市5条通6丁目964-1", city: "旭川市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/asahikawa/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-28"], name: "天然温泉 樽前の湯 ドーミーイン苫小牧", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/tomakomai/",
    address: "〒053-0023 北海道苫小牧市錦町2-1-22", city: "苫小牧市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/tomakomai/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-29"], name: "天然温泉 鶴舞の湯 ドーミーイン千歳", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/chitose",
    address: "〒066-0063 北海道千歳市幸町4丁目20番地1号", city: "千歳市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/chitose"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-30"], name: "天然温泉 天都の湯 ドーミーイン網走", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/abashiri/",
    address: "〒093-0012 北海道網走市南二条西3丁目1番地の1", city: "網走市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/abashiri/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-31"], name: "天然温泉 天北の湯 ドーミーイン稚内", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/wakkanai/",
    address: "〒097-0022 北海道稚内市中央2-7-13", city: "稚内市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～翌5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/wakkanai/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-32"], name: "天然温泉 灯の湯 ドーミーインPREMIUM小樽", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/otaru/",
    address: "〒047-0032 北海道小樽市稲穂3-9-1", city: "小樽市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/otaru/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-33"], name: "天然温泉 白樺の湯 ドーミーイン帯広", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/obihiro/",
    address: "〒080-0012 北海道帯広市西二条南9-11-1", city: "帯広市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/obihiro/"),
    ],
  },
  {
    ids: ["manual-hotel-dormy-34"], name: "天然温泉 幣舞の湯 ドーミーインPREMIUM釧路", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/kushiro/",
    address: "〒085-0015 北海道釧路市北大通2-1", city: "釧路市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～翌5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/kushiro/"),
    ],
  },
  {
    ids: ["manual-hotel-mystays-01"], name: "ホテルマイステイズプレミア成田", officialUrl: "https://iconia.co.jp/hotel-mystays-premier-narita-chiba/",
    address: "〒286-0131 千葉県成田市大山31", city: "成田市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "6:00～11:00／15:00～22:00", "https://iconia.co.jp/hotel-mystays-premier-narita-chiba/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-01"], name: "ルートイングランティア東海 Spa & Relaxation", officialUrl: "https://www.hotel-grantia.co.jp/tokai/",
    address: "〒476-0003 愛知県東海市荒尾町丸根1-21", city: "東海市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "5:00～10:00 / 15:00～24:30", "https://www.hotel-grantia.co.jp/tokai/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-02"], name: "ホテルルートイン松山北", officialUrl: "https://www.route-inn.co.jp/hotel_list/ehime/index_hotel_id_782/",
    address: "〒791-8005 愛媛県松山市東長戸四丁目８番１２号", city: "松山市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/ehime/index_hotel_id_782/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-03"], name: "ホテルルートインGrand守谷駅前", officialUrl: "https://www.route-inn.co.jp/hotel_list/ibaraki/index_hotel_id_735/",
    address: "〒302-0115 茨城県守谷市中央二丁目17-８", city: "守谷市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/ibaraki/index_hotel_id_735/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-04"], name: "ホテルルートイン美濃加茂", officialUrl: "https://www.route-inn.co.jp/hotel_list/gifu/index_hotel_id_33/",
    address: "〒505-0041 岐阜県美濃加茂市太田町2449-1", city: "美濃加茂市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/gifu/index_hotel_id_33/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-05"], name: "ホテルルートイン仙台東", officialUrl: "https://www.route-inn.co.jp/hotel_list/miyagi/index_hotel_id_664/",
    address: "〒984-0011 宮城県仙台市若林区六丁の目西町1-60", city: "仙台市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/miyagi/index_hotel_id_664/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-06"], name: "ホテルルートイン京都久御山", officialUrl: "https://www.route-inn.co.jp/hotel_list/kyoto/index_hotel_id_737/",
    address: "〒613-0022 京都府久世郡久御山町市田鈴間102番地", city: "久世郡久御山町",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/kyoto/index_hotel_id_737/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-07"], name: "ホテルルートインGrand前橋", officialUrl: "https://www.route-inn.co.jp/hotel_list/gunma/index_hotel_id_746/",
    address: "〒371-0847 群馬県前橋市大友町1丁目5番地4", city: "前橋市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/gunma/index_hotel_id_746/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-08"], name: "ホテルルートインGrand太田駅前", officialUrl: "https://www.route-inn.co.jp/hotel_list/gunma/index_hotel_id_680/",
    address: "〒373-0851 群馬県太田市飯田町1380", city: "太田市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/gunma/index_hotel_id_680/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-09"], name: "ホテルルートインGrand秩父", officialUrl: "https://www.route-inn.co.jp/hotel_list/saitama/index_hotel_id_714/",
    address: "〒368-0023 埼玉県秩父市大宮4628-2", city: "秩父市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/saitama/index_hotel_id_714/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-10"], name: "ルートイングランティア羽生SPA RESORT", officialUrl: "https://www.hotel-grantia.co.jp/hanyu/",
    address: "〒348-0054 埼玉県羽生市西3丁目19-3", city: "羽生市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "10:00～24:00", "https://www.hotel-grantia.co.jp/hanyu/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-11"], name: "ホテルルートインGrand三沢-EAST COURT-", officialUrl: "https://www.route-inn.co.jp/hotel_list/aomori/index_hotel_id_741/",
    address: "〒033-0011 青森県三沢市幸町一丁目10番1号", city: "三沢市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/aomori/index_hotel_id_741/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-12"], name: "ホテルルートイン島田吉田インター", officialUrl: "https://www.route-inn.co.jp/hotel_list/shizuoka/index_hotel_id_26/",
    address: "〒427-0104 静岡県島田市井口1194", city: "島田市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/shizuoka/index_hotel_id_26/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-13"], name: "ホテルルートイン千葉浜野-東京湾岸道-", officialUrl: "https://www.route-inn.co.jp/hotel_list/chiba/index_hotel_id_674/",
    address: "〒260-0824 千葉県千葉市中央区浜野町1025ｰ110", city: "千葉市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/chiba/index_hotel_id_674/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-14"], name: "ホテルルートインGrand佐久-佐久平駅南-", officialUrl: "https://www.route-inn.co.jp/hotel_list/nagano/index_hotel_id_780/",
    address: "〒385-0022 長野県佐久市岩村田5513番地1", city: "佐久市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/nagano/index_hotel_id_780/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-15"], name: "ホテルルートインGrand上田駅前", officialUrl: "https://www.route-inn.co.jp/hotel_list/nagano/index_hotel_id_634/",
    address: "〒386-0025 長野県上田市天神一丁目5番7号", city: "上田市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/nagano/index_hotel_id_634/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-16"], name: "ホテルルートイン大牟田", officialUrl: "https://www.route-inn.co.jp/hotel_list/fukuoka/index_hotel_id_745/",
    address: "〒836-0037 福岡県大牟田市岬町6番地67", city: "大牟田市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/fukuoka/index_hotel_id_745/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-17"], name: "ルートイングランティア福岡宮若-脇田温泉-", officialUrl: "https://www.hotel-grantia.co.jp/wakamiya/",
    address: "〒822-0133 福岡県宮若市脇田778-1", city: "宮若市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "6:00～9:00 / 10:00～23:00", "https://www.hotel-grantia.co.jp/wakamiya/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-18"], name: "ホテルルートインGrand旭川駅前", officialUrl: "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_635/",
    address: "〒070-0030 北海道旭川市宮下通8丁目1962-1", city: "旭川市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_635/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-19"], name: "ホテルルートインGrand室蘭", officialUrl: "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_666/",
    address: "〒050-0074 北海道室蘭市中島町2丁目22-2", city: "室蘭市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_666/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-20"], name: "ホテルルートインGrand北見駅前", officialUrl: "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_644/",
    address: "〒090-0040 北海道北見市大通西1丁目2-1", city: "北見市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_644/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-21"], name: "ホテルルートイン帯広駅前", officialUrl: "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_68/",
    address: "〒080-0013 北海道帯広市西三条南11丁目8番地", city: "帯広市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_68/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-22"], name: "ルートイングランティア函館駅前", officialUrl: "https://www.hotel-grantia.co.jp/hakodate-st/",
    address: "〒040-0063 北海道函館市若松町21-3", city: "函館市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15:00～2:00 / 5:00～10:00", "https://www.hotel-grantia.co.jp/hakodate-st/"),
    ],
  },
  {
    ids: ["manual-hotel-nono-01"], name: "天然温泉 花波の湯 御宿 野乃大阪淀屋橋", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/nono_yodoyabashi/",
    address: "〒541-0041 大阪府大阪市中央区北浜2丁目5番19号", city: "大阪市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～翌5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/nono_yodoyabashi/"),
    ],
  },
  {
    ids: ["manual-hotel-nono-02"], name: "天然温泉 花風の湯 御宿 野乃なんば", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/nono_nanba/",
    address: "〒542-0073 大阪府大阪市中央区日本橋1-4-18", city: "大阪市",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/nono_nanba/"),
    ],
  },
  {
    ids: ["manual-hotel-nono-03"], name: "天然温泉 凌雲の湯 御宿 野乃浅草", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/nono_asakusa/",
    address: "〒111-0032 東京都台東区浅草2-7-20", city: "台東区",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/nono_asakusa/"),
    ],
  },
  {
    ids: ["manual-hotel-nono-04"], name: "天然温泉 凌天の湯 御宿 野乃浅草別邸", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/nono_asakusabettei/",
    address: "〒111-0032 東京都台東区浅草2-7-26", city: "台東区",
    features: [],
    facts: [
      factNov8("大浴場・サウナ", "15：00～翌10：00（サウナのみ深夜1：00～翌5：00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/nono_asakusabettei/"),
    ],
  },
  {
    ids: ["st-hokkaido-4636"], name: "北見温泉 金の湯", status: "closed",
    features: [],
    facts: [{ label: "営業状況", value: "運営のノーザンアークリゾートが2024年3月末をもって全事業を終了（北海道新聞2024年2月8日付報道）。ホテルは2021年11月から無期限休館していた", sourceUrl: "http://ja.wikipedia.org/wiki/ノーザンアークリゾート", checkedAt: "2026-11-08" }],
  },
  {
    ids: ["st-chiba-4709"], name: "アジアンSOLA SPA牧の原モア温泉", status: "closed",
    features: [],
    facts: [{ label: "営業状況", value: "2023年6月に閉館。ニフティ温泉の施設ページも「SOLA SPA 牧の原モア温泉（閉館しました）」と表示", sourceUrl: "https://onsen.nifty.com/kashiwa-onsen/onsen016768/kuchikomi/", checkedAt: "2026-11-08" }],
  },
  {
    ids: ["st-fukuoka-4493"], name: "英彦山温泉 しゃくなげ荘", status: "closed",
    features: [],
    facts: [{ label: "営業状況", value: "令和2年（2020年）3月末をもって休館し閉館。Google Mapsでも「Permanently closed」と表示", sourceUrl: "https://www.google.co.jp/maps/place/%E8%8B%B1%E5%BD%A6%E5%B1%B1%E6%B8%A9%E6%B3%89/@33.4758086,130.8959353,15z/data=!4m5!3m4!1s0x0:0xcb2b2399f8eb1a66!8m2!3d33.4758086!4d130.8959353", checkedAt: "2026-11-08" }],
  },
  {
    ids: ["st-niigata-4172"], name: "妙高市ほっとランド", status: "closed",
    features: [],
    facts: [{ label: "営業状況", value: "Google Mapsで「閉業」と表示（住所・電話番号が登録情報と一致）。妙高市の公式紹介ページは既に削除され404", sourceUrl: "https://www.google.co.jp/maps/place/%E5%A6%99%E9%AB%98%E5%B8%82%E3%81%BB%E3%81%A3%E3%81%A8%E3%83%A9%E3%83%B3%E3%83%89/@37.0408717,138.2660262,17z/data=!3m1!4b1!4m6!3m5!1s0x5ff672e91850712d:0x5346c9c7657e59d0!8m2!3d37.0408717!4d138.2660262!16s%2Fg%2F1tdyl1dq", checkedAt: "2026-11-09" }],
  },
  {
    ids: ["st-toyama-125"], name: "おまき温泉スパガーデン和園", status: "suspended",
    features: [],
    facts: [{ label: "営業状況", value: "2022年2月より休業中（Wikipedia「庄川温泉郷」）。旧公式ページ（sakura.ne.jp）は消滅し、公式の近況はFacebookページで発信", sourceUrl: "https://ja.wikipedia.org/wiki/%E5%BA%84%E5%B7%9D%E6%B8%A9%E6%B3%89%E9%83%B7", checkedAt: "2026-11-08" }],
  },
  {
    ids: ["manual-aichi-kanayama-hotel"], name: "名古屋金山ホテル",
    features: [],
    facts: [{ label: "サウナ設備", value: "2026年7月の大浴場リニューアルでサウナを新設（公式サイトの施設・Spaページに明記）。利用時間 15:30〜24:00／5:00〜9:00（朝風呂）、男性2F・女性3F", sourceUrl: "https://kanayama-hotel.jp/facility/spa/", checkedAt: "2026-11-12" }],
  },
  {
    ids: ["manual-aichi-kamenoi-chitamihama"], name: "亀の井ホテル 知多美浜",
    features: [],
    facts: [{ label: "サウナ設備", value: "公式サイトの温泉ページにサウナの記載なし（2026-11-12確認）。ホテルは営業中で、天然温泉の大浴場・露天風呂がある。サウナの有無が確認できないため要確認のまま掲載", sourceUrl: "https://kamenoi-hotels.com/chitamihama/onsen/", checkedAt: "2026-11-12" }],
  },
  {
    ids: ["st-toyama-2152"], name: "湯来楽 砺波店", status: "closed",
    features: [],
    facts: [{ label: "営業状況", value: "閉店（運営会社の株式会社ゆららが2022年3月に破産手続き開始。施設は2022年1月に休業・閉館したと複数媒体が報じ、サウナイキタイとニフティ温泉も閉店表示。閉店日は媒体により1月20日／21日の差があり未確定）", sourceUrl: "https://www.ryoko-net.co.jp/?p=104348", checkedAt: "2026-11-11" }],
  },
  {
    ids: ["st-fukushima-1510"], name: "サウナ＆カプセルキュア いわき駅前店", status: "closed",
    features: [],
    facts: [{ label: "営業状況", value: "閉店（サウナイキタイの掲載データで2021年時点で閉店扱い。ニフティ温泉も「閉店しました」と表示し、公式サイトは取得不能。閉店日は明記なし）", sourceUrl: "https://onsen.nifty.com/iwaki-onsen/onsen010973/", checkedAt: "2026-11-11" }],
  },
  {
    ids: ["st-fukuoka-4468"], name: "鍛冶町サウナ", status: "closed",
    features: [],
    facts: [{ label: "営業状況", value: "閉店（旧施設）。同じ場所は現在「小倉サウナ TOTONOI」として営業中で、公式サイトに旧サウナプラザカメリア跡へのリニューアルオープンと記載がある。鍛冶町サウナはその前々代にあたる（閉店年は未確認）", sourceUrl: "https://www.totonoikokura.com/", checkedAt: "2026-11-11" }],
  },
  {
    ids: ["manual-fukuoka-reboot"], name: "REBOOT!", status: "restricted",
    features: [],
    facts: [{ label: "利用条件", value: "一般利用不可（入居テナント専用）。天神住友生命FJビジネスセンター最上階のワーカー専用共用サウナで、SAUNACHELIN 2026の特別賞。一般の訪問・押印の対象には含めない", sourceUrl: "https://tenjinsfbc.jp/reboot/top-floor.php", checkedAt: "2026-11-11" }],
  },
  {
    ids: ["st-fukui-573"], name: "越のゆ敦賀店", status: "closed",
    features: [],
    facts: [{ label: "営業状況", value: "閉店（公式サイトに「閉店のお知らせ」と回数券の返金案内を掲載。閉店日は公式ページ本文に明記なし）", sourceUrl: "http://www.yu-iwashita.jp/tsuruga/", checkedAt: "2026-11-11" }],
  },
  {
    ids: ["st-iwate-187"], name: "サウナ＆カプセル宮古", status: "closed",
    features: [],
    facts: [{ label: "営業状況", value: "閉館（閉館日不明）。日帰り入浴の閉館リストに閉館として掲載（住所が登録情報と一致）。公式サイトは消滅し404。検索エンジンの地点情報も「Permanently Closed」と表示", sourceUrl: "https://yuru-to.net/closed.php?oid=47706", checkedAt: "2026-11-10" }],
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
  const { name, city, status, trait } = evidence;
  return {
    ...facility,
    ...(name ? { name } : {}),
    ...(trait ? { trait } : {}),
    ...(evidence.officialUrl ? { officialUrl: evidence.officialUrl } : {}),
    ...(city ? { city } : {}),
    ...(status ? { status, tags: (facility.tags || []).filter(tag => !/開業予定|2026年秋/.test(tag)) } : {}),
    ...(evidence.address ? { address: evidence.address, addressSource: evidence.officialUrl, addressCheckedAt: evidence.facts[0]?.checkedAt || checkedAt } : {}),
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

// Names explicitly describing a gym/fitness club, or that provider's club URL.
// Do not classify generic "sports", "central hotel" or "oasis" as fitness.
const FITNESS_FACILITY_IDS = new Set([
  "si-98204", // https://shops.fiteasy.jp/shop184 (not the standalone Gifu Masaki sauna)
  "si-11562", // https://zero-sp.com/facilities/
]);
export function isFitnessFacility(facility) {
  if (FITNESS_FACILITY_IDS.has(facility.id) || (facility.legacyIds || []).some(id => FITNESS_FACILITY_IDS.has(id))) return true;
  if (facility.facilityType === "fitness") return true;
  if (/ルネサンス|ジェクサー|スポーツクラブ|フィットネス|セントラルウェルネスクラブ|ワールドプラスジム/u.test(facility.name || "")) return true;
  try {
    const url = new URL(facility.officialUrl || "");
    const host = url.hostname.replace(/^www\./, "");
    return ["s-re.jp", "sportsoasis.co.jp"].includes(host)
      || (host === "jexer.jp" && /\/fitness\//.test(url.pathname))
      || (host === "central.co.jp" && /\/club\//.test(url.pathname));
  } catch { return false; }
}
