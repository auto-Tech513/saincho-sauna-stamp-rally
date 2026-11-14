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
const factNov14 = (label, value, sourceUrl) => ({ label, value, sourceUrl, checkedAt: "2026-11-14" });

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
    ids: ["st-kanagawa-63"], name: "東名厚木健康センター", status: "closed",
    features: [],
    facts: [{ label: "営業状況", value: "閉店（2025年8月31日をもって閉店。1997年開業、28年間の営業。閉店の理由は設備の老朽化と公式が案内）", sourceUrl: "https://yunoizumi.com/atsugi/blog_atsugi/3303/", checkedAt: "2026-11-12" }],
  },
  {
    ids: ["manual-gunma-cocofuro-misato"], name: "COCOFURO plus みさと温泉", status: "planned",
    features: [],
    facts: [{ label: "営業状況", value: "開業予定（2026年12月グランドオープン予定。正式な開業日は未発表のため、開業までは押印対象外）", sourceUrl: "https://misato.cocofuro.com/", checkedAt: "2026-11-13" }],
  },
  {
    ids: ["manual-tokyo-kocoowa-hiroo"], name: "Kocoo和", status: "planned",
    features: [],
    facts: [{ label: "営業状況", value: "開業予定（2026年11月16日グランドオープン予定。女性専用・完全個室サウナ。開業までは押印対象外）", sourceUrl: "https://kocoowa.com", checkedAt: "2026-11-14" }],
  },
  {
    ids: ["manual-kanagawa-renaissance-kamiooka"], name: "フィットネスクラブ＆サウナスパ ルネサンス上大岡", status: "open",
    features: ["温泉付き", "水風呂あり", "外気あり"],
    facts: [{ label: "営業状況", value: "営業中（2026年11月5日にリニューアルオープン。男女とも約90℃のドライサウナとオートロウリュ、水風呂16度前後、炭酸泉と天然温泉を備え、入浴のみの利用も可能）", sourceUrl: "https://www.sportsoasis.co.jp/sh81/post/renewal-kamiooka/", checkedAt: "2026-11-14" }],
  },
  {
    ids: ["st-iwate-187"], name: "サウナ＆カプセル宮古", status: "closed",
    features: [],
    facts: [{ label: "営業状況", value: "閉館（閉館日不明）。日帰り入浴の閉館リストに閉館として掲載（住所が登録情報と一致）。公式サイトは消滅し404。検索エンジンの地点情報も「Permanently Closed」と表示", sourceUrl: "https://yuru-to.net/closed.php?oid=47706", checkedAt: "2026-11-10" }],
  },
{
ids: ["st-hokkaido-976"], name: "森のスパリゾート 北海道ホテル", officialUrl: "https://www.hokkaidohotel.co.jp/stay/hotspring.html",
features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "宿泊可"],
facts: [
factNov14("料金", "日帰り入浴 大人2,000円（税込）、小学生以下500円。宿泊者は無料（入湯税150円別途）。回数券5枚綴り8,000円／10枚綴り15,000円", "https://www.hokkaidohotel.co.jp/stay/hotspring.html"),
factNov14("営業時間", "朝5:30〜9:00（最終入場、9:30終了）。日帰りは14:00〜21:00（最終入場）、宿泊者は14:00〜24:00", "https://www.hokkaidohotel.co.jp/stay/hotspring.html"),
factNov14("設備", "植物性モール温泉（源泉100%）。フィンランド式ロウリュ対応サウナ（男性用3段ベンチ、女性用は白樺の壁面）。露天風呂・ジャグジーあり", "https://www.hokkaidohotel.co.jp/stay/hotspring.html"),
factNov14("水風呂", "札内川の伏流水を使用し、年間を通じて低い水温をキープ（数値の公式表記なし）", "https://www.hokkaidohotel.co.jp/stay/hotspring.html"),
factNov14("利用条件", "入れ墨（ファッションタトゥー含む）のある方は利用不可", "https://www.hokkaidohotel.co.jp/stay/hotspring.html"),
],
},
{
ids: ["st-aomori-180"], name: "あおもり健康ランド", officialUrl: "http://www.aomorikenkouland.com/",
features: ["温泉付き"],
facts: [
factNov14("営業時間", "24時間営業", "http://www.aomorikenkouland.com/"),
factNov14("定休日", "年中無休", "http://www.aomorikenkouland.com/"),
factNov14("設備", "天然温泉の大浴場・露天風呂、休憩・仮眠室あり。サウナの種類・温度は公式トップページに明記なし", "http://www.aomorikenkouland.com/"),
],
},
{
ids: ["st-akita-274"], name: "こまち健康ランド", officialUrl: "https://www.spa-komachi.jp/",
features: ["温泉付き", "宿泊可"],
facts: [
factNov14("料金", "日帰り入浴 大人（中学生から）は受付時間帯制。7:00〜21:00 平日800円／土日祝900円、5:00〜7:00 平日600円／休日650円、21:00以降 平日600円／金土日祝650円。こども（4歳〜小学生）400〜500円", "https://www.spa-komachi.jp/"),
factNov14("営業時間", "日帰り入浴 5:00〜24:30", "https://www.spa-komachi.jp/"),
factNov14("設備", "天然温泉の大浴場・露天風呂。サウナの種類・温度は公式トップページに明記なし", "https://www.spa-komachi.jp/"),
],
},
{
ids: ["st-miyagi-2900"], name: "ドーミーインEXPRESS仙台広瀬通", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/ex_sendai/spa",
features: ["宿泊可"],
facts: [
factNov14("営業時間", "大浴場（2F）15:00〜翌10:00。サウナのみ深夜1:00〜早朝5:00は利用休止", "https://dormy-hotels.com/dormyinn/hotels/ex_sendai/spa"),
factNov14("設備", "男性専用大浴場（沸かし湯）。季節限定の変わり湯あり。サウナの種類・温度は公式に明記なし", "https://dormy-hotels.com/dormyinn/hotels/ex_sendai/spa"),
factNov14("利用条件", "大浴場は男性専用。女性宿泊者は系列3棟（野乃仙台・仙台駅前・仙台ANNEX）の大浴場を利用可。刺青・タトゥーの方は大浴場の利用不可", "https://dormy-hotels.com/dormyinn/hotels/ex_sendai/spa"),
],
},
{
ids: ["st-ibaraki-4416"], name: "スパ＆サウナ ホテル日立プラザ", officialUrl: "https://breezbay-group.com/hitachiplaza/bath/",
features: ["ロウリュあり", "水風呂あり", "宿泊可"],
facts: [
factNov14("営業時間", "大浴場 男性湯 夕16:00〜23:00・朝6:00〜8:30（毎日）。女性湯 夕16:00〜23:00・朝6:00〜8:30（土日のみ）", "https://breezbay-group.com/hitachiplaza/bath/"),
factNov14("設備", "フィンランドサウナ（男女別、ロウリュ対応）。ゲルマニウム温浴、リラクゼーションスペースあり", "https://breezbay-group.com/hitachiplaza/bath/"),
factNov14("水風呂", "冷水浴あり（温度の公式表記なし）", "https://breezbay-group.com/hitachiplaza/bath/"),
factNov14("利用条件", "タトゥーは原則不可。8cm×10cmのカバーシール1枚で隠せる場合は利用可（シールは持参）。子供の入浴は大人の同伴が必要", "https://breezbay-group.com/hitachiplaza/bath/"),
],
},
{
ids: ["st-tochigi-133"], name: "あさやホテル", officialUrl: "https://www.asaya-hotel.co.jp/spa/",
features: ["ロウリュあり", "スチーム(ミスト)サウナ", "温泉付き", "貸切可", "宿泊可"],
facts: [
factNov14("設備", "秀峰館・八番館の大浴場にロウリュウサウナとナノミストサウナ。自家源泉（アルカリ性単純温泉）の空中庭園露天風呂、貸切風呂あり", "https://www.asaya-hotel.co.jp/spa/"),
factNov14("利用条件", "日帰り入浴は2014年7月末で終了（現在は宿泊者のみ）。刺青・タトゥーのある方は大浴場の利用不可（貸切風呂・客室風呂は可、ワンポイントはカバーシールで覆える場合のみ大浴場可）。7歳以上は男女別の利用", "https://www.asaya-hotel.co.jp/faq/"),
],
},
{
ids: ["sc2025-satoyama-terrace"], name: "SATOYAMA TERRACE", officialUrl: "https://satoyama-terrace.com/sauna/",
features: ["薪サウナ", "水風呂あり", "外気あり", "男女共用", "宿泊可", "サ飯あり"],
facts: [
factNov14("料金", "日帰り大人2時間半 平日2,970円（税込）／休日3,850円。子供（12歳以下）2時間半1,100円。宿泊者は1,100円", "https://satoyama-terrace.com/sauna/"),
factNov14("営業時間", "平日10:00〜22:00／土日祝9:00〜22:00。最終入館21:00", "https://satoyama-terrace.com/sauna/"),
factNov14("設備", "山サウナ（約80〜85℃、定員27名、薪の香り）と滝サウナ（80℃前後、定員24名、天然水の滝で高湿度）", "https://satoyama-terrace.com/sauna/"),
factNov14("水風呂", "冷水浴2種。「浄めの水神」は里山の天然水を常温で掛け流し、「養生の水神」は変温型（夏季9〜15℃、冬季30〜40℃）", "https://satoyama-terrace.com/sauna/"),
factNov14("利用条件", "水着着用の男女兼用施設", "https://satoyama-terrace.com/sauna/"),
],
},
{
ids: ["sc2025-janu-tokyo"], name: "Janu Tokyo", officialUrl: "https://www.janu.com/janu-tokyo/ja/",
features: ["スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "個室", "貸切可", "宿泊可"],
facts: [
{ label: "利用条件", value: "サウナシュラン受賞対象は、ホテル内の貸切スパハウス「Spa House Experience」（バーニャ／ハマム、最大4名・2時間から）。宿泊者以外も利用可", sourceUrl: "https://www.janu.com/janu-tokyo/ja/wellness/", checkedAt: "2026-11-08"},
factNov14("料金", "日帰りはプライベートスパハウス体験のみ（要予約）。バーニャ 2時間200,000円／4時間333,000円、ハマム 2時間180,000円／4時間300,000円、スパハウス ジャーニー 3時間200,000円（税・サービス料込）", "https://www.janu.com/janu-tokyo/ja/wellness/"),
factNov14("営業時間", "ウェルネス施設は毎日6:30〜22:00。スパハウス体験は12:00以降の案内（最終トリートメント終了21:00）", "https://www.janu.com/janu-tokyo/ja/wellness/"),
factNov14("設備", "スパハウスはバーニャ（木張りのサウナ）またはハマム（大理石のスチームルーム）。各スパハウスに冷水浴と温浴、屋外テラスあり", "https://www.janu.com/janu-tokyo/ja/wellness/"),
factNov14("利用条件", "ウェルネス施設は16歳以上対象（16歳未満は保護者同意が必要）。スパハウスは事前予約制。通常のウェルネス施設は宿泊者・会員限定", "https://www.janu.com/janu-tokyo/ja/wellness/"),
],
},
{
ids: ["st-kanagawa-4"], name: "スカイスパYOKOHAMA", officialUrl: "https://www.skyspa.co.jp/",
features: ["ドライサウナ", "スチーム(ミスト)サウナ", "セルフロウリュ", "オートロウリュ", "熱波師あり", "ロウリュあり", "水風呂あり", "男女共用", "宿泊可", "サ飯あり", "タオルレンタルあり"],
facts: [
factNov14("料金", "一般入浴（5時間）平日2,600円／土日祝3,300円。1時間・2時間の短時間コースもあり。タオル・アメニティ・館内着込み（1時間プラン除く）", "https://www.skyspa.co.jp/charge/"),
factNov14("営業時間", "24時間営業・年中無休。浴室（サウナ含む）は清掃のため8:30〜10:30利用不可", "https://www.skyspa.co.jp/charge/"),
factNov14("設備", "男性メインサウナは約90℃でスタッフのアウフグースと約20分に一度のオートロウリュ。別室のロウリュサウナはセルフロウリュ可。女性はドライサウナ（80〜85℃）とスチームサウナ。男女共用のサウナシアターは約65℃", "https://www.skyspa.co.jp/spa_infomens/"),
factNov14("水風呂", "男性は約15℃、女性は約17℃をキープ", "https://www.skyspa.co.jp/spa_infomens/"),
{ label: "持ち物", value: "タオル・アメニティ込み。館内着は1時間コースを除き料金に含む", sourceUrl: "https://www.skyspa.co.jp/charge/", checkedAt: "2026-10-19"},
factNov14("利用条件", "中学生以上のみ入館可。入れ墨・タトゥーは原則利用不可。浴室は男女別（サウナシアターのみ男女共用）", "https://www.skyspa.co.jp/charge/"),
],
},
{
ids: ["st-toyama-290"], name: "舟橋・立山天然温泉 湯めごこち", officialUrl: "https://www.yumegokochi.co.jp/",
features: ["オートロウリュ", "熱波師あり", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "サ飯あり"],
facts: [
factNov14("料金", "一般大人1,080円／会員大人980円（タオル・バスタオル・館内着セット付、税込）。小人（3才〜小学生）一般430円／会員400円、3歳未満無料。岩盤浴は別途 一般550円／会員450円", "https://www.yumegokochi.co.jp/"),
factNov14("営業時間", "平日10:00〜24:00／土日祝9:00〜24:00（最終受付23:30）", "https://www.yumegokochi.co.jp/"),
factNov14("定休日", "毎週木曜日（祝日の場合は営業）", "https://www.yumegokochi.co.jp/"),
factNov14("設備", "2026年11月のリニューアルで男子サウナにikiストーブとオートロウリュを導入（昼は毎時30分に自動熱波、夜はスタッフのアウフグース）。女子サウナにはよもぎハーブサウナ。岩盤浴あり", "https://www.yumegokochi.co.jp/article/250"),
factNov14("水風呂", "あり（温度の公式表記なし）", "https://www.yumegokochi.co.jp/"),
factNov14("利用条件", "入れ墨・タトゥーのある方は入館不可", "https://www.yumegokochi.co.jp/"),
],
},
{
ids: ["st-yamanashi-2432"], name: "大菩薩の湯", officialUrl: "https://daibosatsunoyu.com/",
features: [],
facts: [
factNov14("料金", "大人（中学生以上）市内在住者500円／市外在住者700円。小人（小学生）市内300円／市外500円、小学生未満無料", "https://daibosatsunoyu.com/"),
factNov14("営業時間", "開館10:00〜21:00（受付10:00〜20:00）。入浴は20:45まで", "https://daibosatsunoyu.com/"),
factNov14("定休日", "毎週火曜日（臨時に変更することがあり）", "https://daibosatsunoyu.com/shisetsu.html"),
],
},
{
ids: ["st-nagano-4544"], name: "The Sauna", officialUrl: "https://lamp-guesthouse.com/sauna/",
features: ["薪サウナ", "ロウリュあり", "水風呂あり", "外気あり", "貸切可", "宿泊可"],
facts: [
factNov14("設備", "サウナ小屋5棟。1号棟ユクシは薪ストーブ。3〜5号棟は3時間完全貸切制で、4号棟ネリャはMondex社ストーブのコの字型設計", "https://lamp-guesthouse.com/sauna/"),
factNov14("水風呂", "地下水を汲み上げた専用の水風呂（深水・浅水の2種がある棟も）。温度の記載なし", "https://lamp-guesthouse.com/sauna/"),
factNov14("利用条件", "水着レンタルあり（男女ともサイズ展開あり・無料）。5号棟ヴィーシは2026年12月よりパブリックサウナに切り替わる予定", "https://lamp-guesthouse.com/sauna/"),
],
},
{
ids: ["sc2025-ochiairo"], name: "おちあいろう", officialUrl: "https://www.ochiairo.co.jp/en/facility/hot-spring/",
features: ["男女共用", "温泉付き", "宿泊可"],
facts: [
factNov14("営業時間", "大浴場 15:00〜24:00／5:00〜11:00（時間帯で男女入替。天狗の湯は両時間帯とも混浴）", "https://www.ochiairo.co.jp/en/facility/hot-spring/"),
factNov14("設備", "テーマの異なる3種のサウナ（天狗サウナ、月の湯の茶室サウナ、星の湯の星サウナ）。温泉はカルシウム・ナトリウム硫酸塩泉", "https://www.ochiairo.co.jp/en/facility/hot-spring/"),
factNov14("利用条件", "宿泊専用（日帰り利用なし）。天狗の湯は水着着用の男女混浴（2025年9月に改装）", "https://www.ochiairo.co.jp/en/facility/hot-spring/"),
],
},
{
ids: ["manual-aichi-wellbe-sakae"], name: "ウェルビー栄", officialUrl: "https://www.wellbe.co.jp/sakae/",
features: ["ロウリュあり", "熱波師あり", "男女共用", "宿泊可", "サ飯あり"],
facts: [
factNov14("営業時間", "サウナ 5:00〜24:00（最終退館26:00）。宿泊 14:00〜翌12:00。サウナシアター名古屋の開放は12:00〜23:00", "https://www.wellbe.co.jp/sakae/"),
factNov14("設備", "3階「サウナシアター名古屋」は約70名同時入室可。アウフグースをはじめとするサウナプログラムを毎日開催", "https://www.wellbe.co.jp/sakae/"),
factNov14("利用条件", "サウナシアター名古屋は館内着着用で男女共用。3階に男女共用の休憩エリアあり", "https://www.wellbe.co.jp/sakae/"),
],
},
{
ids: ["st-mie-4604"], name: "スポーツマンハウス鈴鹿 天然温泉 天名乃湯", officialUrl: "http://www.sportsmanhousesuzuka.com/facilities/",
features: ["温泉付き", "水風呂あり", "宿泊可"],
facts: [
factNov14("料金", "入浴料 大人（中学生以上）800円、小人（4才以上）400円。宿泊者は滞在中無料。タオルセット貸出300円", "http://www.sportsmanhousesuzuka.com/facilities/"),
factNov14("営業時間", "日帰り温泉 10:00〜22:00（最終入店21:30）", "http://www.sportsmanhousesuzuka.com/facilities/"),
factNov14("定休日", "年に数回、点検のため休業日があります", "http://www.sportsmanhousesuzuka.com/facilities/"),
factNov14("設備", "天然温泉（ナトリウム-塩化物強塩温泉、地下1000mから汲み上げ）。露天風呂・壺湯のほかサウナあり", "http://www.sportsmanhousesuzuka.com/facilities/"),
factNov14("水風呂", "あり（温度の記載なし）", "http://www.sportsmanhousesuzuka.com/facilities/"),
factNov14("利用条件", "刺青・タトゥー（フェイクタトゥー含む）のある方の入館は不可", "http://www.sportsmanhousesuzuka.com/facilities/"),
],
},
{
ids: ["st-kyoto-113"], name: "サウナ&カプセルホテル ルーマプラザ", officialUrl: "https://www.rumor-plaza.jp/",
features: ["ドライサウナ", "塩サウナ", "セルフロウリュ", "ロウリュあり", "熱波師あり", "水風呂あり", "外気あり", "宿泊可", "サ飯あり"],
facts: [
factNov14("料金", "レギュラーコース（9:00〜23:00入館、深夜1:00まで）通常日2,700円／土・特定日3,000円。ナイト 通常日3,600円／土・特定日3,900円。モーニング 通常日1,900円／土・特定日2,200円。1時間 通常日1,800円／土・特定日2,000円", "https://rumor-plaza.jp/guide/"),
factNov14("営業時間", "サウナ24時間（清掃時間9:00〜12:00はエリア順次閉鎖、毎週月曜10:00〜12:00は全館清掃のため利用不可）。7F・屋上は0:00〜6:00閉鎖", "https://rumor-plaza.jp/guide/"),
factNov14("設備", "ロウリュサウナ（6F、約90度、スタッフのロウリュサービスあり）、フィンランドサウナ（7F、約80度、セルフロウリュ可）、塩サウナ（7F、約70度）", "https://rumor-plaza.jp/sauna/"),
factNov14("水風呂", "6Fは水温17度。7Fは強冷水（14度）と冷水（20度）", "https://rumor-plaza.jp/sauna/"),
factNov14("利用条件", "男性専用。入墨・タトゥーのある方は入館不可", "https://www.rumor-plaza.jp/"),
],
},
{
ids: ["manual-hotel-apa-07"], name: "アパホテル〈大阪谷町四丁目駅前〉", officialUrl: "https://www.apahotel.com/hotel/kansai/osaka/osakatanimachi-4choume/",
features: ["水風呂あり", "宿泊可"],
facts: [
factNov14("料金", "大浴殿は宿泊者無料。入浴のみの日帰り利用は不可で、客室付きの日帰りプラン利用時に利用できる", "https://www.apahotel.com/hotel/kansai/osaka/osakatanimachi-4choume/"),
factNov14("営業時間", "大浴場 15:00〜翌10:00。サウナ室は安全点検のため2:00〜6:00は稼働休止", "https://www.apahotel.com/hotel/kansai/osaka/osakatanimachi-4choume/"),
factNov14("設備", "地下1階に大浴殿とサウナ「玄要の湯」（男女とも完備）", "https://www.apahotel.com/hotel/kansai/osaka/osakatanimachi-4choume/"),
factNov14("水風呂", "あり（温度の表記なし）", "https://www.apahotel.com/hotel/kansai/osaka/osakatanimachi-4choume/"),
factNov14("利用条件", "宿泊者・日帰りプラン利用者・契約に基づき許可された者のみ利用可。タトゥーは原則入場不可（ホテル指定のシールで覆える場合を除く）", "https://www.apahotel.com/agreement/"),
],
},
{
ids: ["manual-hotel-dormy-22"], name: "天然温泉 白鷺の湯 ドーミーイン姫路", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/himeji/",
features: ["ドライサウナ", "オートロウリュ", "ロウリュあり", "水風呂あり", "温泉付き", "宿泊可"],
facts: [
factNov14("営業時間", "大浴場 15:00〜翌10:00（サウナのみ深夜1:00〜翌5:00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/himeji/"),
factNov14("設備", "最上階12Fの男女別天然温泉大浴場「白鷺の湯」。高温サウナ（オートロウリュウ）、露天風呂、水風呂あり", "https://dormy-hotels.com/dormyinn/hotels/himeji/"),
factNov14("利用条件", "大浴場は男女別。日帰り入浴の案内は公式ページになし（宿泊者向け施設）", "https://dormy-hotels.com/dormyinn/hotels/himeji/"),
],
},
{
ids: ["manual-nara-ume-sauna"], name: "ume,sauna", officialUrl: "https://www.ume-yamazoe.com/sauna",
features: ["薪サウナ", "水風呂あり", "外気あり", "貸切可", "宿泊可"],
facts: [
{ label: "営業形態", value: "アウトドアフィンランド式サウナ（水着着用）。宿「ume, yamazoe」の宿泊客は枠制で貸切利用でき、日帰りプランもある（要予約）", sourceUrl: "https://www.ume-yamazoe.com/sauna", checkedAt: "2026-11-08"},
factNov14("料金", "宿泊客は宿泊料金内で1枠無料、2枠目は6,600円（税込）。日帰りプランもあるが、料金は公式サイト内に明記なし", "https://www.ume-yamazoe.com/sauna"),
factNov14("営業時間", "宿泊客の利用は4枠制（15:00〜16:45／17:00〜18:45／翌7:00〜8:45／9:00〜10:45、要予約・先着順）", "https://www.ume-yamazoe.com/sauna"),
factNov14("設備", "アウトドアフィンランド式サウナ（薪ストーブ）。水風呂は屋外にあり外気温で変動する", "https://www.ume-yamazoe.com/sauna"),
factNov14("利用条件", "水着着用必須（無料レンタルあり・数に限りあり）。宿泊客はグループ貸切", "https://www.ume-yamazoe.com/sauna"),
],
},
{
ids: ["st-wakayama-4792"], name: "SAUNA HOUSE on", officialUrl: "https://www.keyterrace.co.jp/saunahouseon/",
features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "個室", "貸切可", "宿泊可"],
facts: [
factNov14("料金", "基本プラン（税込）2時間日帰り（2名利用）33,000円（1名追加ごとに3,700円追加）／2時間宿泊（2名利用）22,000円。延長は1時間ごとに11,000円", "https://www.keyterrace.co.jp/saunahouseon/"),
factNov14("営業時間", "9:00〜22:00。予約受付は利用前日の15:00まで", "https://www.keyterrace.co.jp/saunahouseon/"),
factNov14("設備", "1日数組限定の個室プライベートサウナ（セルフロウリュ付き）。ガーデンテラスに水風呂と露天風呂（温泉水不使用）、外気浴エリアあり", "https://www.keyterrace.co.jp/saunahouseon/"),
factNov14("利用条件", "水着着用必須（持参）。2〜8名で利用可（子供含み8名まで同時利用可）。日帰り利用可", "https://www.keyterrace.co.jp/saunahouseon/"),
],
},
{
ids: ["st-shimane-4662"], name: "天然温泉の湯 四季荘", officialUrl: "https://shikisou.com/sauna/",
features: ["ロウリュあり", "オートロウリュ", "熱波師あり", "水風呂あり", "温泉付き", "サ飯あり", "宿泊可"],
facts: [
factNov14("料金", "日帰り料金（サウナエリア利用／税込）一般 平日1,480円・土日祝1,680円、会員 平日1,180円・土日祝1,380円。温泉利用は＋300円", "https://shikisou.com/sauna/"),
factNov14("営業時間", "通常営業 10:00〜21:30、朝サウナ 6:00〜9:00", "https://shikisou.com/sauna/"),
factNov14("設備", "フィンランド式ロウリュサウナ（サウナストーンは鳥取県産「レッドシリカ」）。オートロウリュウと自動熱波機があり、毎週日曜は熱波師「親方」が登場", "https://shikisou.com/sauna/"),
factNov14("水風呂", "総水量4トン・最深部160cm（当館の温泉を100%使用）。温度の表記なし", "https://shikisou.com/sauna/"),
factNov14("利用条件", "女性専用デーあり（毎月第1・第3木曜日）", "https://shikisou.com/sauna/"),
],
},
{
ids: ["st-hiroshima-4664"], name: "サウナ亀の家", officialUrl: "http://h-pacific.com/spakamenoya/",
features: ["ドライサウナ", "オートロウリュ", "ロウリュあり", "水風呂あり", "宿泊可"],
facts: [
factNov14("料金", "外来・大人 1,800円（バスタオル1枚・フェイスタオル1枚付）。宿泊者は無料。中学生以上は大人料金、幼児〜小学生は大人1人につき1人無料・2人目から500円", "http://h-pacific.com/spakamenoya/"),
factNov14("営業時間", "5:00～9:00 / 12:00～24:00（月1〜2回、メンテナンスにより営業時間が変更となる場合あり）", "http://h-pacific.com/spakamenoya/"),
factNov14("設備", "高温ドライサウナ約100℃、15分間隔のオートロウリュ（ミスト状）", "http://h-pacific.com/spakamenoya/"),
factNov14("水風呂", "約14℃", "http://h-pacific.com/spakamenoya/"),
factNov14("利用条件", "男性専用（女性用大浴場・サウナはなし）。入れ墨・タトゥー・タトゥーシールのある方は利用不可。中学生未満のみでの利用不可", "http://h-pacific.com/spakamenoya/"),
],
},
{
ids: ["st-tokushima-3680"], name: "天然温泉えびすの湯", officialUrl: "http://www.ebisunoyu.com/",
features: ["塩サウナ", "スチーム(ミスト)サウナ", "水風呂あり", "温泉付き", "サ飯あり"],
facts: [
factNov14("料金", "大人（中学生以上）一般 800円・会員750円、子供（3歳〜小学生）400円、3歳未満無料。岩盤浴は別途 大人500円", "http://www.ebisunoyu.com/facility/"),
factNov14("設備", "タワーサウナ（上と下が5段に分かれた設計）、塩サウナ、ミストサウナ、岩盤浴、蒸気風呂（室温48℃前後）", "http://www.ebisunoyu.com/facility/"),
factNov14("水風呂", "あり（温度の記載なし）", "http://www.ebisunoyu.com/facility/"),
],
},
{
ids: ["official-saga-mifuneyama-rakan"], name: "御船山楽園ホテル らかんの湯", officialUrl: "https://www.mifuneyama.co.jp/rakan.html",
features: ["薪サウナ", "ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "温泉付き", "宿泊可"],
facts: [
factNov14("料金", "宿泊者は無料。日帰り入浴も可能だが、料金は公式ページに明記なし", "https://www.mifuneyama.co.jp/rakan.html"),
factNov14("営業時間", "宿泊日 15:00〜24:00／翌日 6:00〜10:30（男女入れ替え制）", "https://www.mifuneyama.co.jp/rakan.html"),
factNov14("設備", "男湯は薪サウナ・ドライサウナと外気浴スペース。女湯はドライサウナ（キューゲル）と薬草スチームサウナ", "https://www.mifuneyama.co.jp/rakan.html"),
factNov14("水風呂", "男湯・女湯ともあり（温度の明記なし）", "https://www.mifuneyama.co.jp/rakan.html"),
factNov14("利用条件", "入れ墨・タトゥーをされている方は利用不可", "https://www.mifuneyama.co.jp/rakan.html"),
],
},
{
ids: ["st-oita-3855"], name: "ひょうたん温泉", officialUrl: "http://www.hyotan-onsen.com/",
features: ["温泉付き", "貸切可", "サ飯あり"],
facts: [
factNov14("料金", "大浴場 基本料金 大人1,160円（税込）、小学生400円、幼児280円。施設を出ない限り何回でも入り直し可", "http://www.hyotan-onsen.com/"),
factNov14("営業時間", "入浴時間 9:00〜翌1:00（大浴場は24:00まで、砂湯は22:30受付終了・23:00まで）", "http://www.hyotan-onsen.com/"),
factNov14("設備", "瀧湯（男湯19本・女湯8本）、むし湯、砂湯、露天風呂、家族風呂あり", "https://www.hyotan-onsen.com/onsen/daiyokujou.html"),
factNov14("臨時休業", "2026年11月30日〜12月4日は施設の点検工事等のため臨時休業（公式告知）。お食事処2店舗は11月30日〜12月11日まで休業", "http://www.hyotan-onsen.com/"),
],
},
  {
    ids: ["st-hokkaido-4690"], name: "SNOWY", officialUrl: "https://savebleu.amebaownd.com/pages/5461528/page_202110251045",
    features: ["貸切可", "温泉付き"],
    facts: [
      factNov14("料金", "大人1名（2名以上参加時）平日8,000円、土日・祝日8,800円（スプリングキャンペーン7,000円）。天然温泉「楓楓」の入浴料・レンタル料込み", "https://savebleu.amebaownd.com/pages/5461528/page_202110251045"),
      factNov14("営業時間", "1日2部制 ①10:30〜12:00 ②13:30〜15:00（各1時間半、要予約）。冬季限定開催", "https://savebleu.amebaownd.com/pages/5461528/page_202110251045"),
      factNov14("設備", "雪の中に設置するテントサウナ（完全プライベート）。ストーブ管理・設営・除雪はスタッフ対応。温度の数値表記なし", "https://savebleu.amebaownd.com/pages/5461528/page_202110251045"),
      factNov14("水風呂", "テントサウナには水風呂なし（公式明記）。体験後に入浴できる温泉施設「楓楓」内には水風呂あり", "https://savebleu.amebaownd.com/pages/5461528/page_202110251045"),
      factNov14("利用条件", "完全予約制・1組貸切。10歳（小学4年生）以上対象、小・中学生は保護者同伴。入れ墨等は不可。水着着用", "https://savebleu.amebaownd.com/pages/5461528/page_202110251045"),
    ],
  },
  {
    ids: ["st-hokkaido-232"], name: "えにわ温泉ほのか", officialUrl: "https://yudokoro-honoka.jp/eniwa/",
    features: ["オートロウリュ", "ロウリュあり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("設備", "2025年4月リニューアルでオートロウリュを導入。北海道遺産認定のモール泉と塩泉の2種類の温泉、岩盤浴あり。ロウリュイベントも開催", "https://yudokoro-honoka.jp/eniwa/"),
    ],
  },
  {
    ids: ["st-hokkaido-1083"], name: "シャトレーゼ ガトーキングダムサッポロ", officialUrl: "http://www.gateauxkingdom.com/pool-spa/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "本格的なドイツ式のサウナ。多彩な浴槽と、温泉がそそぐ露天風呂・陶器風呂あり（公式トップページ記載）", "http://www.gateauxkingdom.com/pool-spa/"),
    ],
  },
  {
    ids: ["st-hokkaido-409"], name: "スパ・イン メープルロッジ", officialUrl: "http://www.maplelodge.or.jp/",
    features: ["ロウリュあり", "水風呂あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴料 大人 平日1,000円・土日祝1,200円、小人300円、幼児無料（消費税・入湯税込）", "https://www.maplelodge.or.jp/hot/"),
      factNov14("営業時間", "日帰り入浴 11:00〜20:00（受付19:00まで）。宿泊者はチェックイン〜24:00、翌朝5:00〜9:30", "https://www.maplelodge.or.jp/hot/"),
      factNov14("設備", "本格的フィンランド式サウナ 約80℃。熱したサウナストーンへの散水（ロウリュ）で蒸気を発生させる", "https://www.maplelodge.or.jp/hot/"),
      factNov14("水風呂", "あり。源泉をそのまま利用した露天水風呂で約14℃", "https://www.maplelodge.or.jp/hot/"),
      factNov14("利用条件", "日帰り入浴可（宿泊者以外も利用可）。入浴料等の支払いは現金のみ", "https://www.maplelodge.or.jp/hot/"),
    ],
  },
  {
    ids: ["st-hokkaido-4551"], name: "スパアルパ", officialUrl: "https://www.hotel-emisia.com/sapporo/spa/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "日帰り 大人2,600円・小学生以下1,700円、3歳以下無料。宿泊者 大人1,300円（朝風呂1,000円）。税・サービス料込", "https://www.hotel-emisia.com/sapporo/spa/"),
      factNov14("営業時間", "日帰り・通常 12:00〜24:00（最終受付23:00）。宿泊者の朝風呂 6:30〜9:00（受付終了8:30）。遠赤外線サウナは12:00から利用可", "https://www.hotel-emisia.com/sapporo/spa/"),
      factNov14("定休日", "朝風呂のみ水曜日は休業（メンテナンスのため）", "https://www.hotel-emisia.com/sapporo/spa/"),
      factNov14("設備", "遠赤外線サウナとミストサウナ。水風呂やクナイプトシャワーなど多彩なお風呂あり", "https://www.hotel-emisia.com/sapporo/facilities/"),
      factNov14("水風呂", "あり（温度の表記なし）", "https://www.hotel-emisia.com/sapporo/spa/facilities/"),
      factNov14("利用条件", "日帰り利用可。タトゥーはカバー1枚（8cm×12cm）で隠せる場合のみ入浴可、それ以外は利用不可", "https://www.hotel-emisia.com/sapporo/spa/"),
    ],
  },
  {
    ids: ["st-hokkaido-15"], name: "ニコーリフレ", officialUrl: "http://www.nikoh.info/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "熱波師あり", "ロウリュあり", "水風呂あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "24時間コース ビジター平日4,000円・土日祝4,200円（会員 平日2,900円、5時間コース1,900円〜もあり）", "https://www.nikoh.info/spa-sauna/"),
      factNov14("営業時間", "24時間営業（チェックインは24時間受付）", "http://www.nikoh.info/"),
      factNov14("設備", "ロッキーサウナ約80℃とゲルマニウムミストサウナ40℃の2種類。熱波師によるロウリュイベントを1時間に1回（1日最大14回）開催", "https://www.nikoh.info/spa-sauna/"),
      factNov14("水風呂", "備長炭凛水風呂あり。地下水を汲み上げた16℃以下", "https://www.nikoh.info/spa-sauna/"),
      factNov14("利用条件", "入館は男性のみ（公式明記）。お子様料金は小学生以下で保護者同伴可、中学生からは大人料金", "https://www.nikoh.info/spa-sauna/"),
    ],
  },
  {
    ids: ["st-hokkaido-226"], name: "のんたの湯", officialUrl: "http://inamura-nonta.com/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "大人（中学生以上）750円、小人（4歳以上小学生以下）450円 ※税込。大人回数券8枚綴り5,000円", "http://inamura-nonta.com/"),
      factNov14("営業時間", "10:00〜22:00（入浴は10:00〜21:45まで）", "http://inamura-nonta.com/"),
      factNov14("定休日", "元日、春・秋の定期メンテナンス期間", "http://inamura-nonta.com/"),
      factNov14("設備", "サウナあり（種類・温度の記載は公式ページになし）。売店・軽食コーナー・休憩コーナーあり", "http://inamura-nonta.com/"),
    ],
  },
  {
    ids: ["st-hokkaido-256"], name: "ひまわり温泉 森の郷", officialUrl: "http://himawari-morinosato.com/home/",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "回数券 1冊11枚綴り＋1枚 5,000円（公式トップページ掲載）", "http://himawari-morinosato.com/home/"),
      factNov14("設備", "天然モール温泉の日帰り温泉施設。サウナ・露天風呂あり（公式トップページ記載）", "http://himawari-morinosato.com/home/"),
    ],
  },
  {
    ids: ["st-hokkaido-1138"], name: "ほろしん温泉ほたる館", officialUrl: "https://horosin-onsen.com/",
    features: ["スチーム(ミスト)サウナ", "水風呂あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "入浴料 大人500円・小人250円・小学生未満無料。岩盤浴は利用料1,000円（入館料500円＋岩盤浴料500円）、宿泊者は無料", "https://horosin-onsen.com/spa/"),
      factNov14("営業時間", "日帰り入浴 10:00〜22:00（サウナも10:00〜22:00）。大浴場は6:00〜24:00（脱衣所清掃9:00〜10:00）", "https://horosin-onsen.com/spa/"),
      factNov14("設備", "低温で湿度が保たれたサウナ室（温度の数値表記なし）。北投石を使ったミスト岩盤浴「健康殿」あり", "https://horosin-onsen.com/spa/"),
      factNov14("水風呂", "あり。源泉をそのまま使った冷鉱泉の水風呂で10〜13℃ほど", "https://horosin-onsen.com/spa/"),
      factNov14("利用条件", "日帰り入浴可（温泉宿）。岩盤浴「健康殿」は1度に最大7名まで", "https://horosin-onsen.com/spa/"),
    ],
  },
  {
    ids: ["st-hokkaido-1032"], name: "観月苑", officialUrl: "https://www.kangetsuen.com/",
    features: ["水風呂あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴 大人（中学生以上）2,000円、1歳〜小学生700円（バスタオル・フェイスタオルの無料レンタル含む）", "https://www.kangetsuen.com/hotspring/"),
      factNov14("営業時間", "日帰り入浴の受付は平日 午前5時〜8時・午後1時〜9時、土曜日・特定日は午前5時〜8時・午後1時〜3時・午後6時〜9時", "https://www.kangetsuen.com/hotspring/"),
      factNov14("設備", "モール温泉の大浴場（内風呂、ジャグジー、うたせ湯、寝湯、歩行湯、露天風呂、サウナ、水風呂）", "https://www.kangetsuen.com/hotspring/"),
      factNov14("水風呂", "あり（温度の公式表記なし）", "https://www.kangetsuen.com/hotspring/"),
      factNov14("利用条件", "日帰り入浴可。刺青・タトゥーをしている方の入館は固くお断り", "https://www.kangetsuen.com/hotspring/"),
    ],
  },
  {
    ids: ["st-hokkaido-4715"], name: "琴似温泉", officialUrl: "https://www.kita-no-sento.com/sento/146-2/",
    features: ["ドライサウナ"],
    facts: [
      factNov14("営業時間", "15：00〜21：00", "https://www.kita-no-sento.com/sento/146-2/"),
      factNov14("定休日", "月曜、金曜", "https://www.kita-no-sento.com/sento/146-2/"),
      factNov14("設備", "サウナ（乾）、超音波、気泡風呂（バイブラ）、薬湯、電気風呂、露天風呂", "https://www.kita-no-sento.com/sento/146-2/"),
    ],
  },
  {
    ids: ["st-hokkaido-178"], name: "黒松内温泉ぶなの森", officialUrl: "https://bunanosato.jimdosite.com/%E9%BB%92%E6%9D%BE%E5%86%85%E6%B8%A9%E6%B3%89%E3%81%B6%E3%81%AA%E3%81%AE%E6%A3%AE/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴料 大人(中学生以上) 600円、小人(小学生) 300円、就学前幼児 無料。岩盤浴は最初の1時間600円、家族風呂は最初の1時間1,000円", "https://bunanosato.jimdosite.com/%E9%BB%92%E6%9D%BE%E5%86%85%E6%B8%A9%E6%B3%89%E3%81%B6%E3%81%AA%E3%81%AE%E6%A3%AE/"),
      factNov14("営業時間", "夏季（4〜10月）11：00～21：30（最終入館21：00）、冬季（11〜3月）11：00～21：00（最終入館20：30）", "https://bunanosato.jimdosite.com/%E9%BB%92%E6%9D%BE%E5%86%85%E6%B8%A9%E6%B3%89%E3%81%B6%E3%81%AA%E3%81%AE%E6%A3%AE/"),
      factNov14("定休日", "夏季は毎月第1水曜日、冬季は第1・第3水曜日（祝日の場合は翌日）", "https://bunanosato.jimdosite.com/%E9%BB%92%E6%9D%BE%E5%86%85%E6%B8%A9%E6%B3%89%E3%81%B6%E3%81%AA%E3%81%AE%E6%A3%AE/"),
      factNov14("設備", "洋風浴室と和風浴室の2タイプ（日替わりで男女入れ替え）。ともに露天風呂とサウナあり。岩盤浴・家族風呂もあり", "https://bunanosato.jimdosite.com/%E9%BB%92%E6%9D%BE%E5%86%85%E6%B8%A9%E6%B3%89%E3%81%B6%E3%81%AA%E3%81%AE%E6%A3%AE/"),
      factNov14("利用条件", "日帰り入浴施設となっております（宿泊なし）", "https://bunanosato.jimdosite.com/%E9%BB%92%E6%9D%BE%E5%86%85%E6%B8%A9%E6%B3%89%E3%81%B6%E3%81%AA%E3%81%AE%E6%A3%AE/"),
    ],
  },
  {
    ids: ["st-hokkaido-1140"], name: "三笠天然温泉 太古の湯", officialUrl: "https://www.clh-kk.com/taikonoyu/",
    features: ["スチーム(ミスト)サウナ", "温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴 大人（中学生以上）平日900円・土日祝1,000円（フェイス・バスタオル付）、タオル無しは平日800円・土日祝900円", "http://www.clh-kk.com/taikonoyu/price/"),
      factNov14("営業時間", "ご入浴時間 朝6:30～9:00／昼夜10:00～23:00（最終受付21:00）", "https://www.taikonoyu.com/spa/"),
      factNov14("設備", "天然温泉（ナトリウム塩化物泉）。檜造りの高温サウナ「マグマサウナ」、富士山の溶岩を使ったミスト岩盤浴、檜の露天風呂、ジェット寝湯、日替わり湯", "https://www.taikonoyu.com/spa/"),
      factNov14("利用条件", "日帰り入浴可。入墨、タトゥーのある方は入浴不可。小学生以上の男女の混浴はできません。おむつの取れていないお子様は不可", "https://www.taikonoyu.com/spa/"),
    ],
  },
  {
    ids: ["st-hokkaido-170"], name: "森林公園温泉 きよら", officialUrl: "http://www.onsen-kiyora.com/",
    features: ["温泉付き", "貸切可"],
    facts: [
      factNov14("料金", "公衆浴場 入浴料金 大人（12歳以上）550円、中人（6歳～12歳未満）150円、小人（6歳未満）80円（2026年10月1日改定）", "http://www.onsen-kiyora.com/facility/"),
      factNov14("営業時間", "公衆浴場 11:00～24:00（受付 23:30まで）。家族風呂は平日14:00～翌1:00、土日祝12:00～翌1:00（受付24:00まで）", "http://www.onsen-kiyora.com/facility/"),
      factNov14("定休日", "年中無休（設備メンテナンスの為お休みする場合あり）", "http://www.onsen-kiyora.com/facility/"),
      factNov14("設備", "天然モール温泉（源泉掛け流し）の内風呂・露天風呂とサウナ（男女ともリニューアル済み）。家族風呂は全10室で、サウナ付きの室あり", "http://www.onsen-kiyora.com/spa/"),
      factNov14("利用条件", "刺青（タトゥー）及び泥酔の方は入館不可。7歳以上のお子様は同性のお風呂を利用。日帰りの入浴施設のみで宿泊は不可", "http://www.onsen-kiyora.com/facility/"),
    ],
  },
  {
    ids: ["st-hokkaido-407"], name: "秩父別温泉", officialUrl: "http://chipsk.jp/yuuyu/onsen/",
    features: ["スチーム(ミスト)サウナ", "温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "入浴料 ［大人］500円 ［小人］250円（小学生）。回数券は［11枚つづり］5,000円", "http://chipsk.jp/yuuyu/onsen/"),
      factNov14("営業時間", "日帰り入浴 9：00〜22：00（宿泊入浴は5：00〜7：30／9：00〜23：30）", "http://chipsk.jp/yuuyu/onsen/"),
      factNov14("設備", "天然温泉（単純温泉とナトリウムー塩化物泉の2源泉）。サウナ、ミストサウナ、露天風呂、ジャグジー、ジェットバス、電気風呂など", "http://chipsk.jp/yuuyu/onsen/"),
    ],
  },
  {
    ids: ["st-hokkaido-1065"], name: "天然温泉ＡＣＢ屯田店", officialUrl: "http://acb-tonden.sakura.ne.jp/index.html",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴料金 大 人（中学生以上）850円、シルバー（65歳以上）750円、こども（3歳～小学6年生まで）300円", "http://acb-tonden.sakura.ne.jp/fee.html"),
      factNov14("営業時間", "営業時間 10時～24時（最終入場23：30）", "http://acb-tonden.sakura.ne.jp/fee.html"),
      factNov14("定休日", "無休（設備メンテナンス等により、臨時休業する場合もございます）", "http://acb-tonden.sakura.ne.jp/fee.html"),
      factNov14("設備", "天然温泉（ナトリウム－塩化物温泉）の大浴場。露天風呂（漢方の薬湯風呂あり）、2種類のバイブラバス、寝湯など", "http://acb-tonden.sakura.ne.jp/bath.html"),
      factNov14("利用条件", "刺青、タトゥー（フェイクタトゥー、シール含む）をされている方は入館不可。「小学生・中学生のみ」での入店は不可。青少年は22時30分までに退店", "http://acb-tonden.sakura.ne.jp/fee.html"),
    ],
  },
  {
    ids: ["st-hokkaido-1114"], name: "湯の郷 絢ほのか", officialUrl: "https://yudokoro-honoka.jp/kiyota/",
    features: ["塩サウナ", "スチーム(ミスト)サウナ", "ロウリュあり", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴料金 大人（中学生以上）平日1,450円・土日祝/特別日1,650円（湯着 or タオルセット付）。子供（小学生）350円・400円。早朝料金（朝5時～9時）は大人 平日800円・土日祝900円", "https://yudokoro-honoka.jp/kiyota/fee/"),
      factNov14("営業時間", "24時間営業（お風呂は深夜3時～朝6時は清掃の為入浴不可。チェックアウトは午前9時、深夜1時以降は深夜割増料金）", "https://yudokoro-honoka.jp/kiyota/question/"),
      factNov14("設備", "高温サウナとスチーム塩サウナの2種のサウナ（男性露天にはバレルサウナ）、岩盤浴、薬湯や高濃度炭酸泉など8種類のお風呂。天然温泉ではございません", "https://yudokoro-honoka.jp/kiyota/"),
      factNov14("利用条件", "入墨、タトゥー及び泥酔の方のご入館は固くお断りいたします。7歳以上のお子様は同性のお風呂にご入浴いただいております。小・中学生のみのご利用は朝5時から夜7時まで", "https://yudokoro-honoka.jp/kiyota/fee/"),
    ],
  },
  {
    ids: ["st-hokkaido-1150"], name: "湯屋サーモン", officialUrl: "https://yuya-salmon.wixsite.com/sento",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴料金 大人￥550、小学生￥150、小人￥80。サウナ利用は別途￥100", "https://yuya-salmon.wixsite.com/sento"),
      factNov14("営業時間", "平 日 : 12:30〜 23:00 (最終受付 22:30)、土日祝 : 9:30〜 23:00", "https://yuya-salmon.wixsite.com/sento"),
      factNov14("定休日", "毎月第2・第4木曜(祝日除く)", "https://yuya-salmon.wixsite.com/sento"),
      factNov14("設備", "オートロウリュウ（別途￥100）のサウナ、露天 (TV有)、岩風呂(日替わり薬湯)、石風呂、内湯。お食事の提供あり", "https://yuya-salmon.wixsite.com/sento"),
      factNov14("水風呂", "あり（地下水かけ流し。温度の表記なし）", "https://yuya-salmon.wixsite.com/sento"),
    ],
  },
  {
    ids: ["sc2025-yuyado-daiichi"], name: "湯宿だいいち", officialUrl: "http://www.yoroushi.jp/",
    features: ["温泉付き", "貸切可", "宿泊可", "男女共用"],
    facts: [
      factNov14("設備", "養老牛温泉（天然温泉100%・源泉かけ流し）。露天風呂は男6・女4・混浴1、内湯は男女各3、サウナは男女各2。女性専用の岩盤浴（Stone Sauna）と川に面した貸切風呂あり", "https://yoroushi.jp/en/hot_spring/"),
      factNov14("利用条件", "日帰り入浴プランあり（朝の部・夜の部。公式ホームページからの予約制・事前決済制）。貸切風呂は45分3,300円（税込・要予約）。入湯税は大人150円が別途必要", "https://yoroushi.jp/blog/190/"),
    ],
  },
  {
    ids: ["st-hokkaido-169"], name: "湯処ほのか", officialUrl: "https://yudokoro-honoka.jp/kitahiro/",
    features: ["スチーム(ミスト)サウナ", "熱波師あり", "ロウリュあり", "サ飯あり"],
    facts: [
      factNov14("設備", "道内最大級の高濃度炭酸泉をはじめ多種多様のお風呂と2種のサウナ（高温サウナ・スチームサウナ）。熱波師によるロウリュイベントも開催", "https://yudokoro-honoka.jp/kitahiro/"),
      factNov14("利用条件", "異性の浴室利用は満6歳以下まで。岩盤浴は中学生以上のみ利用可（男女兼用・湯着着用、入浴料金に含まれる）", "https://yudokoro-honoka.jp/kitahiro/question/"),
    ],
  },
  {
    ids: ["st-iwate-65"], name: "ゆファミリーレストラン古戦場", officialUrl: "http://kosenjyo.com/",
    features: ["サ飯あり"],
    facts: [
      factNov14("営業時間", "10:00～21:30、10:00～20:30", "http://kosenjyo.com/"),
      factNov14("設備", "人工温泉（炭酸水素イオン泉）、岩盤サウナ、電気風呂、岩盤湯。小上がりの休憩スペースや大広間あり", "http://kosenjyo.com/"),
    ],
  },
  {
    ids: ["st-iwate-117"], name: "安比温泉 白樺の湯", officialUrl: "http://www.appi.co.jp/heal/shirakaba_spa",
    features: ["水風呂あり", "温泉付き"],
    facts: [
      factNov14("料金", "日帰り入浴 中学生以上1,200円、小学生800円（税込）。小学生未満は無料", "https://www.appi.co.jp/heal/heal-top/"),
      factNov14("営業時間", "13:00～22:00（最終受付21:30）", "https://www.appi.co.jp/heal/heal-top/"),
      factNov14("設備", "東北最大級の露天風呂、大浴場、岩風呂、寝湯、50人収容の大型サウナ、水風呂。泉質は単純温泉（サウナの温度は明記なし）", "https://www.appi.co.jp/heal/heal-top/"),
      factNov14("水風呂", "あり（温度の明記なし）", "https://www.appi.co.jp/heal/heal-top/"),
      factNov14("利用条件", "日帰り利用可。刺青・タトゥーは原則お断り（タトゥー隠しシールで隠せる場合は入浴可）", "https://www.appi.co.jp/heal/heal-top/"),
    ],
  },
  {
    ids: ["st-iwate-3362"], name: "新鉛温泉 愛隣館", officialUrl: "https://www.airinkan.com/",
    features: ["温泉付き", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴 大人1,200円（消費税・入湯税込）、小人600円", "https://www.airinkan.com/spa_calendar/spa_calendar.pdf"),
      factNov14("営業時間", "日帰り入浴 10:00～13:30（最終入館12:30）、14:00～19:00（最終入館18:00）", "https://www.airinkan.com/spa_calendar/spa_calendar.pdf"),
      factNov14("定休日", "日帰り入浴は受付カレンダー制（休館日・受入不可日あり。12/8・9は休館日、12/29～1/3は受入不可）", "https://www.airinkan.com/spa_calendar/spa_calendar.pdf"),
      factNov14("設備", "3つの自家源泉を3つの大浴場・17の湯船で楽しめる（岩露天風呂・立ち湯・貸切風呂など）", "https://www.airinkan.com/"),
      factNov14("利用条件", "日帰り入浴可（利用時間は入館より60分程度）。大浴場は時間帯により男女入替制", "https://www.airinkan.com/blog/?paged=18"),
    ],
  },
  {
    ids: ["st-iwate-1309"], name: "胆沢川温泉さくらの湯", officialUrl: "http://www.e-sakuranoyu.com/index.html",
    features: ["サ飯あり"],
    facts: [
      factNov14("定休日", "公式サイトの店舗情報欄に月ごとの定休日を掲載（11月は4日・18日）", "http://www.e-sakuranoyu.com/index.html"),
      factNov14("設備", "庭園を眺めながら入れる露天風呂、うたたねルーム、キッズコーナー、食堂（畳敷きの大広間・テーブル席・カウンター席）", "http://www.e-sakuranoyu.com/index.html"),
    ],
  },
  {
    ids: ["st-iwate-1312"], name: "舞鶴の湯", officialUrl: "https://maidurunoyu.com/",
    features: ["水風呂あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "大人 平日（終日）800円、土日祝は3時間以内800円・1日1,000円、18:00以降600円。小人 平日400円", "https://maidurunoyu.com/"),
      factNov14("営業時間", "9:30～20:30（入館受付は20:00まで）", "https://maidurunoyu.com/"),
      factNov14("定休日", "第3月曜日（祝日の場合は翌週に振り替え）", "https://maidurunoyu.com/"),
      factNov14("設備", "展望風呂、電気風呂、テレビ付きサウナ、水風呂を完備。源泉100％の天然温泉（ナトリウム塩化物泉）", "https://maidurunoyu.com/"),
      factNov14("水風呂", "あり（温度の明記なし）", "https://maidurunoyu.com/"),
    ],
  },
  {
    ids: ["st-miyagi-194"], name: "極楽湯 名取店", officialUrl: "https://natori.gokurakuyu.jp/",
    features: ["スチーム(ミスト)サウナ"],
    facts: [
      factNov14("営業時間", "朝8時～深夜2時", "https://natori.gokurakuyu.jp/"),
      factNov14("定休日", "年中無休", "https://natori.gokurakuyu.jp/"),
      factNov14("設備", "釜風呂（蒸気サウナ）あり（公式お知らせに記載）。露天風呂あり", "https://natori.gokurakuyu.jp/"),
    ],
  },
  {
    ids: ["st-miyagi-46"], name: "汗蒸幕のゆ", officialUrl: "http://hanjunmakunoyu.jp/",
    features: ["サ飯あり"],
    facts: [
      factNov14("営業時間", "平日 午前9:00～深夜1:00／土日祝・当館指定日 午前8:00～深夜1:00", "http://hanjunmakunoyu.jp/"),
      factNov14("設備", "汗蒸幕、ロッキーサウナ、女性専用「紫水晶サウナ」、男性専用「黄土サウナ」（温度の数値記載なし）", "http://hanjunmakunoyu.jp/"),
      factNov14("利用条件", "刺青、タトゥをしている方の入館不可。日帰り入浴施設", "http://hanjunmakunoyu.jp/"),
    ],
  },
  {
    ids: ["st-miyagi-2939"], name: "天然温泉 海神の湯 ドーミーインEXPRESS仙台シーサイド", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/sendai_ex/spa/",
    features: ["ドライサウナ", "オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "平日 15:00～翌9:00／土日休日 13:00～翌9:00（サウナのみ深夜1:00～朝5:00利用停止）", "https://dormy-hotels.com/dormyinn/hotels/sendai_ex/spa/"),
      factNov14("設備", "オートロウリュの高温ドライサウナ（温度の数値記載なし）。男女別天然温泉大浴場（自家源泉、ナトリウム-塩化物泉）、露天岩風呂、外気浴スペース", "https://dormy-hotels.com/dormyinn/hotels/sendai_ex/spa/"),
      factNov14("水風呂", "あり（浴槽種類に明記。温度の記載なし）", "https://dormy-hotels.com/dormyinn/hotels/sendai_ex/spa/"),
      factNov14("利用条件", "男女別大浴場。刺青・タトゥー等をされている方の入浴は不可。日帰り利用の可否は大浴場ページに明記なし", "https://dormy-hotels.com/dormyinn/hotels/sendai_ex/spa/"),
    ],
  },
  {
    ids: ["st-miyagi-4474"], name: "唐桑御殿つなかん", officialUrl: "http://moriyasuisan.com/",
    features: ["薪サウナ", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "日帰りサウナは各サウナ料金に1名1,000円追加。SAUNA TOASTER 4名まで5,000円、つなかんサウナ 4名まで12,000円、3つめのサウナ 4名まで10,000円", "https://moriyasuisan.com/sauna/"),
      factNov14("営業時間", "日帰りサウナは11:00〜14:00。宿泊サウナは枠制（15:00〜18:00／19:30〜22:30／4:00〜7:30など、サウナにより異なる）", "https://moriyasuisan.com/sauna/"),
      factNov14("設備", "3つの貸切サウナ。サウナトースターは車を改造したサウナで、HARVIA社のサウナ用薪ストーブを使いロウリュも可能。外気浴スペースあり", "https://moriyasuisan.com/sauna/"),
      factNov14("水風呂", "あり（つなかんサウナ。温度の記載なし）", "https://moriyasuisan.com/sauna/"),
      factNov14("利用条件", "完全貸切・予約制。水着を持参。日帰り利用可（宿泊予約・日帰り予約のオプションから予約）", "https://moriyasuisan.com/sauna/"),
    ],
  },
  {
    ids: ["st-akita-3379"], name: "かしわ温泉", officialUrl: "https://yurihonjo-kanko.jp/yrdb/kashiwaonsen/",
    features: ["温泉付き"],
    facts: [
      factNov14("営業時間", "9:00から20:30", "https://yurihonjo-kanko.jp/yrdb/kashiwaonsen/"),
      factNov14("定休日", "毎月第1、第3水曜日、12/31、1/1", "https://yurihonjo-kanko.jp/yrdb/kashiwaonsen/"),
    ],
  },
  {
    ids: ["st-akita-1248"], name: "にかほ市温泉保養センター はまなす", officialUrl: "https://www.nikaho-onsen-hamanasu.jp/",
    features: ["温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴料 大人400円、小学生200円、小学生未満無料（1人1回につき）。入浴休憩料は大人600円", "https://www.nikaho-onsen-hamanasu.jp/%E8%A4%87%E8%A3%BD-%E6%96%99%E9%87%91%E6%A1%88%E5%86%85-1"),
      factNov14("営業時間", "入浴はAM6:00～PM9:00。入浴休憩はAM9:00～PM4:00", "https://www.nikaho-onsen-hamanasu.jp/%E8%A4%87%E8%A3%BD-%E6%96%99%E9%87%91%E6%A1%88%E5%86%85-1"),
      factNov14("設備", "天然温泉の大浴場（打たせ湯・サウナあり）と庭園風露天風呂", "https://www.nikaho-onsen-hamanasu.jp/%E8%A4%87%E8%A3%BD-%E6%96%99%E9%87%91%E6%A1%88%E5%86%85-1"),
    ],
  },
  {
    ids: ["st-akita-1279"], name: "はーとぽーと大内ぽぽろっこ", officialUrl: "https://popolocco.com/",
    features: ["温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "温泉入浴料 大人（中学生以上）600円、小学生350円（幼児は無料）", "https://popolocco.com/"),
      factNov14("営業時間", "09：00〜21：00（最終入場 20：00）。大広間は09：00〜19：30", "https://popolocco.com/"),
      factNov14("設備", "温泉大浴場に泡風呂、サウナ、露天風呂あり（サウナの種類・温度の記載なし）", "https://popolocco.com/"),
      factNov14("利用条件", "日帰り入浴可。宿泊者は夜0：00までと朝6：00から8：00まで大浴場を利用可", "https://popolocco.com/"),
    ],
  },
  {
    ids: ["st-akita-1278"], name: "ぱいんすぱ新山", officialUrl: "https://painspashinzan.com/",
    features: ["水風呂あり", "温泉付き"],
    facts: [
      factNov14("料金", "1回：大人500円、小人（小学生未満）250円。休憩付き入浴券は大人600円、小人250円", "https://painspashinzan.com/"),
      factNov14("営業時間", "9:00から21:00（20:30まで入場）", "https://painspashinzan.com/"),
      factNov14("定休日", "毎週火曜日（祝日の場合は翌日）", "https://painspashinzan.com/"),
      factNov14("設備", "浴室は主浴槽と真湯のバイブラ、サウナ、水風呂で構成（サウナの種類・温度の記載なし）。泉質はナトリウム-塩化物強塩温泉", "https://painspashinzan.com/"),
      factNov14("水風呂", "あり（温度の記載なし）", "https://painspashinzan.com/"),
    ],
  },
  {
    ids: ["st-akita-3360"], name: "ホテルプラザ迎賓", officialUrl: "https://yokote.co.jp/yuyu/",
    features: ["温泉付き", "宿泊可", "貸切可"],
    facts: [
      factNov14("料金", "日帰り温泉ゆうゆうプラザ 1日入館ご利用券 おとな1,300円、中高生700円、小学生500円（ホテル宿泊者は無料）", "https://yokote.co.jp/yuyu/onsen/"),
      factNov14("営業時間", "日帰り温泉ゆうゆうプラザ 10：00～22：00（ご入館の受付は21：00まで）", "https://yokote.co.jp/yuyu/onsen/"),
      factNov14("設備", "1週間ごとに男女が入れ替わる2つの大浴場（湯布院・天人峡）のどちらにも露天風呂・サウナ・打たせ湯あり。天然温泉は温度47度・毎分720リットル自噴。別館に北投石の岩盤浴と貸切風呂", "https://yokote.co.jp/yuyu/onsen/"),
      factNov14("利用条件", "日帰り利用可（日帰り温泉ゆうゆうプラザとして営業）。ホテルプラザ迎賓の宿泊者は無料で利用可", "https://yokote.co.jp/yuyu/onsen/"),
    ],
  },
  {
    ids: ["st-akita-3556"], name: "ゆたろう", officialUrl: "http://www.ink.or.jp/~purantos/index.html",
    features: ["水風呂あり", "温泉付き"],
    facts: [
      factNov14("料金", "大人（中学生以上）400円、小学生200円、幼児100円", "http://www.ink.or.jp/~purantos/fee.html"),
      factNov14("営業時間", "入浴時間 5：30 ～ 21：00（12/31は18：00まで）。サウナは「サウナタイム」制で平日・土日祝で時間帯が異なる", "http://www.ink.or.jp/~purantos/business-hours.html"),
      factNov14("設備", "大浴場・ひのき湯・サウナ・水風呂（男女各）。源泉かけ流しで泉質はナトリウム・硫酸塩・塩化物泉", "http://www.ink.or.jp/~purantos/hall-information.html"),
      factNov14("水風呂", "あり（男女各。温度の記載なし）", "http://www.ink.or.jp/~purantos/hall-information.html"),
    ],
  },
  {
    ids: ["st-akita-1277"], name: "岩城温泉 港の湯", officialUrl: "https://akita-umiyoko.com/facility/",
    features: ["温泉付き"],
    facts: [
      factNov14("営業時間", "港の湯 10:00〜19:00（受付18:30）", "http://michinoeki-iwaki.com/onsen.html"),
      factNov14("設備", "ナトリウムー塩化物強塩泉の温泉（日本海を臨む露天風呂あり）で、サウナ付き", "https://akita-umiyoko.com/facility/"),
    ],
  },
  {
    ids: ["st-akita-1242"], name: "秋田温泉プラザ", officialUrl: "https://www.akitaonsen.co.jp/",
    features: ["水風呂あり", "外気あり", "温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "日帰り入浴 大人 平日700円（午前650円）・土日祝750円（午前700円）。小学生450円、幼児150円", "https://akitaonsen.co.jp/day/"),
      factNov14("営業時間", "10:00～21:30（最終入館21:00）。毎月第2・第4月曜日は清掃のため13:00から営業。宿泊者は24:00まで、朝風呂6:00～8:00", "https://akitaonsen.co.jp/day/"),
      factNov14("設備", "サウナあり（種類・温度の明記なし）。露天風呂・大浴場（あつ湯/ぬる湯）・シルキー風呂・ながまり湯・つぼ湯・打たせ湯", "https://akitaonsen.co.jp/spa/"),
      factNov14("水風呂", "あり（井戸水使用。温度の明記なし）", "https://akitaonsen.co.jp/spa/"),
      factNov14("利用条件", "日帰り入浴可。宿泊者は24:00まで利用可", "https://akitaonsen.co.jp/day/"),
    ],
  },
  {
    ids: ["st-akita-1272"], name: "西仙北ぬく森温泉ユメリア", officialUrl: "https://yumeria.site/",
    features: ["ドライサウナ", "水風呂あり", "外気あり", "温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴料金 大人（12歳以上）500円、小人（小学生）250円、小学生未満無料。中学生以上は大人料金", "https://yumeria.site/spa"),
      factNov14("営業時間", "10:00～21:00（20:30受付終了）", "https://yumeria.site/spa"),
      factNov14("定休日", "第2・第4水曜日（8月・12月を除く）ほか指定日が休館日", "https://yumeria.site/"),
      factNov14("設備", "和風・洋風の両浴室にドライサウナ・水風呂・寝湯・打たせ湯・薬湯。和風は露天岩風呂、洋風は露天ジャグジー風呂", "https://yumeria.site/spa"),
      factNov14("水風呂", "あり（温度の明記なし）", "https://yumeria.site/spa"),
      factNov14("利用条件", "和風・洋風浴室は日ごとに男女入替制。日帰り入浴・宿泊とも可", "https://yumeria.site/spa"),
    ],
  },
  {
    ids: ["st-yamagata-4279"], name: "アイアイひらた", officialUrl: "http://www.aiaihirata.co.jp/index.html",
    features: ["サ飯あり"],
    facts: [
      factNov14("定休日", "毎月第1週と第3週の火曜日（祝日と重なった場合は翌日に振替）", "http://www.aiaihirata.co.jp/index.html"),
    ],
  },
  {
    ids: ["st-yamagata-1365"], name: "あったまりランド深堀", officialUrl: "https://attamariland-fukabori.jp/",
    features: ["温泉付き", "外気あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("営業時間", "8:00～21:00（最終受付20:30）", "https://attamariland-fukabori.jp/"),
      factNov14("設備", "サウナあり（種類・温度の明記なし）。大浴場・ジェットバス・寝湯、源泉かけ流しの露天風呂（桧・岩風呂）", "https://attamariland-fukabori.jp/"),
      factNov14("利用条件", "日帰り温泉施設（日帰り利用可）。露天風呂は男女日替り。併設の宿泊施設『虹の館』あり", "https://attamariland-fukabori.jp/"),
    ],
  },
  {
    ids: ["st-yamagata-1371"], name: "クアハウス碁点", officialUrl: "http://kur-goten.jp/",
    features: ["温泉付き", "宿泊可", "貸切可"],
    facts: [
      factNov14("料金", "大人：450円 / 小学生：250円（幼児は無料）。宿泊の方は無料。入湯税として大人150円を別途頂戴", "https://www.kur-goten.jp/hot_spring"),
      factNov14("営業時間", "6:00～21:00(20:00受付終了) / チェックイン後～24:30 ※0:30～4:00は清掃のため利用不可", "https://www.kur-goten.jp/hot_spring"),
      factNov14("設備", "大浴場（サウナあり、温度の公式表記なし）、温度の違う3段の露天風呂、家族風呂（要予約）。泉質はナトリウム・カルシウム-塩化物温泉", "https://www.kur-goten.jp/hot_spring"),
      factNov14("利用条件", "日帰り入浴可。幼児（小学生未満）は無料", "https://www.kur-goten.jp/hot_spring"),
    ],
  },
  {
    ids: ["st-yamagata-1370"], name: "ひまわり温泉ゆ・ら・ら", officialUrl: "http://www.yurara.jp/#modal",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "大浴場に高温サウナとジェットバスを完備（サウナ温度の公式表記なし）。源泉かけ流し（ナトリウム-塩化物・炭酸水素塩泉）、露天風呂あり", "http://www.yurara.jp/"),
      factNov14("利用条件", "日帰り入浴可（宿泊・日帰り温泉施設）", "http://www.yurara.jp/"),
    ],
  },
  {
    ids: ["st-yamagata-2481"], name: "庄内町ギャラリー温泉 町湯", officialUrl: "http://www.machiyu.jp/index.html",
    features: ["オートロウリュ", "ロウリュあり", "温泉付き"],
    facts: [
      factNov14("料金", "入浴料 1回券：大人 560円 小学生 280円 ※未就学児無料（1ヶ月券：大人 11,200円）", "http://www.machiyu.jp/index.html"),
      factNov14("設備", "本場フィンランド式ロウリュサウナ（オートロウリュ）。源泉かけ流しの温泉", "http://www.machiyu.jp/index.html"),
    ],
  },
  {
    ids: ["st-yamagata-413"], name: "鷹山の湯", officialUrl: "http://yozan.gokurakuyu.jp/",
    features: [],
    facts: [
      factNov14("営業時間", "朝8時～夜23時", "https://yozan.gokurakuyu.jp/"),
      factNov14("定休日", "年中無休", "https://yozan.gokurakuyu.jp/"),
      { label: "施設営業時間", value: "朝8時～夜23時・年中無休", sourceUrl: "https://yozan.gokurakuyu.jp/", checkedAt: "2026-10-19" },
    ],
  },
  {
    ids: ["st-fukushima-36"], name: "郡山ユラックス熱海", officialUrl: "http://www.yracs.jp/",
    features: ["水風呂あり", "温泉付き"],
    facts: [
      factNov14("営業時間", "健康温泉 9:00～21:00（最終入場受付 20:00）。入浴券の販売は20:00まで", "https://www.yracs.jp/equipment"),
      factNov14("定休日", "毎月第1火曜日（5月・1月は振替日となります）。点検整備等で臨時休館する場合あり", "http://www.yracs.jp/"),
      factNov14("設備", "全身湯・圧注湯・寝湯・サウナ・露天風呂・水風呂・かぶり湯・つぼ湯・泡沫湯（泉質：アルカリ性単純泉）", "https://www.yracs.jp/equipment"),
      factNov14("水風呂", "あり（温度の記載なし）", "https://www.yracs.jp/equipment"),
      factNov14("利用条件", "お子様との混浴は6歳まで", "https://www.yracs.jp/equipment"),
    ],
  },
  {
    ids: ["st-fukushima-1478"], name: "摺上亭大鳥", officialUrl: "http://www.surikamiteiohtori.com/",
    features: ["水風呂あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴 大人1,000円（税込）・小学生500円（税込）", "https://www.surikamiteiohtori.com/spa/"),
      factNov14("営業時間", "日帰り入浴 受付11:00～14:00（利用時間は受付～15:00）。大浴場（宿泊者）15:00～25:00／5:00～9:30", "https://www.surikamiteiohtori.com/spa/"),
      factNov14("設備", "男女各浴場に内風呂・露天風呂・サウナ・水風呂を完備（泉質：単純泉）", "https://www.surikamiteiohtori.com/spa/"),
      factNov14("水風呂", "あり（男女各浴場完備。温度の記載なし）", "https://www.surikamiteiohtori.com/spa/"),
      factNov14("利用条件", "日帰り入浴可（予約不要、受付11:00～14:00）", "https://www.surikamiteiohtori.com/spa/"),
    ],
  },
  {
    ids: ["st-fukushima-1465"], name: "西会津温泉健康保養センター", officialUrl: "https://www.lotosinn.com/stay/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "10:00～21:00", "https://www.lotosinn.com/stay/"),
      factNov14("定休日", "第4月曜日（定休日が祝日の場合は翌日休）", "https://www.lotosinn.com/stay/"),
      factNov14("設備", "源泉掛け流しの天然ミネラル温泉", "https://www.lotosinn.com/stay/"),
      factNov14("利用条件", "日帰り入浴可。宿泊も可", "https://www.lotosinn.com/stay/"),
    ],
  },
  {
    ids: ["st-fukushima-1452"], name: "勿来温泉 関の湯", officialUrl: "http://sekinoyu-spa.com/",
    features: ["スチーム(ミスト)サウナ", "水風呂あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "遠赤外線サウナ、スチームサウナ（アロマテラピー）、水風呂、源泉露天風呂など13種類の風呂。天然温泉（塩化物温泉、泉温40.0℃）", "https://sekinoyu-spa.com/bath"),
      factNov14("水風呂", "あり（温度の記載なし）", "https://sekinoyu-spa.com/bath"),
    ],
  },
  {
    ids: ["st-fukushima-4626"], name: "裏磐梯レイクリゾート 五色の森", officialUrl: "https://www.lakeresort.jp/",
    features: ["スチーム(ミスト)サウナ", "温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴 大人（中学生以上）1,200円（税込）、4歳以上小学生まで800円（税込）、3歳以下無料。タオルセット400円（税込）", "https://www.lakeresort.jp/hotspring/"),
      factNov14("営業時間", "日帰り入浴 9:00～10:30（最終入場9:30）／13:30～21:00（最終入場20:00）", "https://www.lakeresort.jp/hotspring/"),
      factNov14("設備", "スチームサウナ（室内温度45℃～50℃）、露天風呂「ひばらみの湯」、大浴場「オーロラの湯」。源泉かけ流しの猫魔温泉（塩化物泉）", "https://www.lakeresort.jp/hotspring/"),
      factNov14("利用条件", "日帰り入浴可。宿泊者が多い日については入場規制をする場合あり", "https://www.lakeresort.jp/hotspring/"),
    ],
  },
  {
    ids: ["st-ibaraki-4174"], name: "いこいの郷常総", officialUrl: "http://ikoinosato-joso.com/index.html",
    features: ["宿泊可", "サ飯あり"],
    facts: [
      factNov14("営業時間", "10:00～21:00", "http://ikoinosato-joso.com/index.html"),
      factNov14("定休日", "第2・4火曜日", "http://ikoinosato-joso.com/index.html"),
      factNov14("設備", "大浴場に鬼怒川を望む展望風呂・露天風呂・ナノバブル浴・北投石のお風呂とサウナを用意", "http://ikoinosato-joso.com/index.html"),
    ],
  },
  {
    ids: ["st-ibaraki-38"], name: "とっぷ・さんて大洋", officialUrl: "https://topsante-hokota.com/",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "日帰り入浴 一般（中学生～64歳）昼間（10:00～17:00受付）850円／夜間（17:00～20:30受付）750円", "https://topsante-hokota.com/onsen.html"),
      factNov14("営業時間", "温浴 10:00～21:00（20:30受付終了）。一部施設の限定再開中は温浴・温水プールが金・土・日のみ営業", "https://topsante-hokota.com/onsen.html"),
      factNov14("定休日", "毎週月曜日（祝日の場合は翌日）、定期点検期間、年末（12月29日～12月31日）", "https://topsante-hokota.com/onsen.html"),
      factNov14("設備", "黒褐色の天然温泉（ナトリウム－塩化物強塩泉）の内湯・露天風呂とサウナ", "https://topsante-hokota.com/onsen.html"),
    ],
  },
  {
    ids: ["st-ibaraki-1651"], name: "ひたちなか温泉 喜楽里別邸", officialUrl: "http://www.yurakirari.com/kirari/hitachinaka/",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入館料（全日統一・税込）シンプルコース990円／ゆったりコース1,540円（全コースにレンタルタオルセット付）", "https://www.yurakirari.com/hitachinaka/fee/"),
      factNov14("営業時間", "8時～23時（最終受付 22時）", "https://www.yurakirari.com/hitachinaka/fee/"),
      factNov14("定休日", "年中無休（メンテナンス等のため、年に数回お休みを頂戴する場合あり）", "https://www.yurakirari.com/hitachinaka/fee/"),
      factNov14("設備", "オートロウリュウ付きサウナと高温サウナ。高濃度炭酸泉（1000ppm）や岩盤浴もあり", "https://www.yurakirari.com/hitachinaka/sauna/"),
      factNov14("水風呂", "あり（温度の記載なし）", "https://www.yurakirari.com/hitachinaka/sauna/"),
      factNov14("利用条件", "小学生以上が対象で未就学児は入館不可。刺青・タトゥー・タトゥーシールのある方の入館は不可", "https://www.yurakirari.com/hitachinaka/fee/"),
    ],
  },
  {
    ids: ["st-ibaraki-1655"], name: "やまの湯", officialUrl: "http://www.yamanoyu.com/index.html",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "塩サウナ", "水風呂あり", "外気あり", "サ飯あり"],
    facts: [
      factNov14("料金", "大人 平日850円／土日祝日950円", "https://www.yamanoyu.com/guide/index.html"),
      factNov14("営業時間", "10：00～25：00（入浴受付は24：20まで）", "https://www.yamanoyu.com/guide/index.html"),
      factNov14("定休日", "毎月第3月曜日（祝日の場合は翌日火曜日）", "https://www.yamanoyu.com/guide/index.html"),
      factNov14("設備", "和風・洋風の2エリアを男女日替わりで入れ替え。サウナ、スチームサウナ（和風風呂限定）、塩サウナ（洋風風呂）、水風呂、露天風呂", "http://www.yamanoyu.com/index.html"),
      factNov14("水風呂", "あり（温度の記載なし）", "http://www.yamanoyu.com/index.html"),
      factNov14("利用条件", "イレズミ・タトゥーシールのある方の入場は不可。7歳以上の男女の混浴は不可", "https://www.yamanoyu.com/guide/index.html"),
    ],
  },
  {
    ids: ["st-ibaraki-4594"], name: "天然温泉 湯舞音", officialUrl: "https://yubune-ryugasaki.jp/index.html",
    features: ["ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴プラン 大人（中学生以上）平日1,050円／休日1,250円", "https://yubune-ryugasaki.jp/about/price.html"),
      factNov14("営業時間", "天然温泉 9:00～24:00（最終受付23:30）。期間限定で金・土は25:00まで営業（最終受付24:00）", "https://yubune-ryugasaki.jp/about/price.html"),
      factNov14("定休日", "年に数回メンテナンス休館の予定あり", "https://yubune-ryugasaki.jp/about/price.html"),
      factNov14("設備", "サウナ（男性サウナでは土日祝にロウリュウイベント開催）。天然温泉（ナトリウム塩化物強塩温泉）の炭酸泉、岩盤浴ロウリュウも", "https://yubune-ryugasaki.jp/spa/detail_1.html"),
      factNov14("水風呂", "あり（温度の記載なし）", "https://yubune-ryugasaki.jp/spa/detail_1.html"),
      factNov14("利用条件", "刺青、タトゥーのある方は入館不可。異性浴場の利用は120cm未満かつ7歳未満の方のみ", "https://yubune-ryugasaki.jp/about/price.html"),
    ],
  },
  {
    ids: ["st-tochigi-114"], name: "ザ・グランドスパ南大門", officialUrl: "https://spa-nandaimon.com/",
    features: ["スチーム(ミスト)サウナ", "ロウリュあり", "熱波師あり", "水風呂あり", "温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("設備", "北関東最大級のグランドサウナとアロマスチームサウナ（40～50℃）。ロウリュウはアロマ水の蒸気を大きなうちわで室内に循環させる", "https://spa-nandaimon.com/sauna/"),
      factNov14("水風呂", "コールドスパ（水風呂）は約16℃と約22℃の2種類。深さは男湯120cm・女湯100cm", "https://spa-nandaimon.com/sauna/"),
    ],
  },
  {
    ids: ["st-tochigi-1547"], name: "ほたるの里 梵天の湯", officialUrl: "http://www.bonten-no-yu.com/index.html",
    features: ["ドライサウナ", "温泉付き", "個室", "貸切可", "サ飯あり"],
    facts: [
      factNov14("営業時間", "10:00～21:00", "http://www.bonten-no-yu.com/index.html"),
      factNov14("定休日", "休館日：2026年11月5日・19日、12月3日・17日、2027年1月1日・7日・21日（公式トップのお知らせに掲載）", "http://www.bonten-no-yu.com/index.html"),
      factNov14("設備", "乾式サウナ（男女浴室にそれぞれ配置）。源泉かけ流しの大露天風呂・内風呂、貸切の個室風呂（石風呂・桧風呂）あり", "https://www.bonten-no-yu.com/on_huro/"),
    ],
  },
  {
    ids: ["st-tochigi-1559"], name: "鬼怒川温泉ホテル", officialUrl: "https://www.kinugawaonsenhotel.com/",
    features: ["温泉付き", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴 大人1,650円（税込、入湯税別途50円）、小人（3歳～12歳）880円（税込）", "https://www.kinugawaonsenhotel.com/spa/keikoku.php"),
      factNov14("営業時間", "日帰り入浴 14:00～17:00（宿泊の混雑状況により受け付けできない場合あり）", "https://www.kinugawaonsenhotel.com/spa/keikoku.php"),
      factNov14("設備", "木造り大浴場「渓谷の湯」と石造り大浴場「湯里」に各5種の湯とサウナ。貸切露天風呂あり", "https://www.kinugawaonsenhotel.com/spa/keikoku.php"),
      factNov14("利用条件", "刺青・タトゥーは原則利用不可（タトゥー隠しシール等で隠せる場合は可）。小学生以上のお子様の男女混浴は不可", "https://www.kinugawaonsenhotel.com/spa/keikoku.php"),
    ],
  },
  {
    ids: ["st-tochigi-4759"], name: "森の天空サウナ＆露天風呂", officialUrl: "https://lbcg.net/sauna/",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "個室", "貸切可", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "大人 ￥6,600/人（税込）、小学生以下 ￥3,300/人。最低利用料金は大人2名様分～（13,200円～）", "https://lbcg.net/sauna/"),
      factNov14("営業時間", "完全予約制・1枠80分。予約枠は9:00～10:20／11:00～12:20／13:00～14:20／15:30～16:50／17:30～18:50／19:30～20:50（日帰りは①～④）", "https://lbcg.net/sauna/"),
      factNov14("設備", "フィンランド式サウナ（MISA製電気ストーブ・対流式）は最高温度110度・屋内セルフロウリュ式。ほうじ茶ロウリュが楽しめる", "https://lbcg.net/sauna/"),
      factNov14("水風呂", "水風呂 3～17度（季節により変動）", "https://lbcg.net/sauna/"),
      factNov14("利用条件", "完全貸切制（男湯・女湯の区別なし）。水着または湯浴み着の着用が必要。ファッションタトゥーOK。日帰り利用可（要予約）。温泉ではない", "https://lbcg.net/sauna/"),
    ],
  },
  {
    ids: ["st-tochigi-1517"], name: "栃木温泉 湯楽の里", officialUrl: "https://www.yurakirari.com/yura/tochigi/",
    features: ["オートロウリュ", "ロウリュあり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入館料 大人（中学生以上）平日920円・土/休日1,020円、こども（4歳～小学生）平日450円・土/休日500円", "https://www.yurakirari.com/yura/tochigi/fee.html"),
      factNov14("営業時間", "8時30分～24時（最終受付 23時30分）", "https://www.yurakirari.com/yura/tochigi/fee.html"),
      factNov14("設備", "ロウリュウサウナ（オートロウリュウを9時30分～23時30分の毎時30分に開催）。天然温泉・高濃度炭酸泉あり", "https://www.yurakirari.com/yura/tochigi/inside_spa.html"),
      factNov14("利用条件", "刺青・タトゥー・タトゥーシールのある方は入館不可。小学生以下のお子様のみでの入館は不可", "https://www.yurakirari.com/yura/tochigi/fee.html"),
    ],
  },
  {
    ids: ["st-gumma-1633"], name: "アパホテル〈高崎駅前〉", officialUrl: "https://www.apahotel.com/hotel/shutoken/01_takasaki-ekimae/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "大浴殿は宿泊者無料。入浴のみの日帰り利用は不可で、日帰りは客室付き「湯ったり日帰りプラン」シングル4,000円～", "https://www.apahotel.com/hotel/shutoken/01_takasaki-ekimae/"),
      factNov14("営業時間", "大浴殿 6:00～10:00／15:00～25:00", "https://www.apahotel.com/hotel/shutoken/01_takasaki-ekimae/"),
      factNov14("設備", "天然温泉大浴殿「玄要の湯」に露天風呂とサウナあり", "https://www.apahotel.com/hotel/shutoken/01_takasaki-ekimae/"),
      factNov14("利用条件", "大浴場は宿泊者・日帰りプラン利用者・契約に基づき許可された者のみ。入れ墨（タトゥー）は原則入場不可（ホテル指定のシールで覆える場合を除く）", "https://www.apahotel.com/agreement/"),
    ],
  },
  {
    ids: ["st-gunma-336"], name: "まえばし駅前天然温泉 ゆ～ゆ", officialUrl: "https://www.yuyuspa.com/",
    features: [],
    facts: [
      factNov14("営業時間", "AM10:00～PM10:00", "https://www.yuyuspa.com/"),
    ],
  },
  {
    ids: ["st-gumma-4492"], name: "みなかみホテルジュラク", officialUrl: "http://www.hotel-juraku.co.jp/minakami/",
    features: ["ドライサウナ", "水風呂あり", "温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "日帰りディナーブッフェ＆日帰り温泉プラン 大人8,800円・子供6,600円（3歳以下無料、受付15:00〜）", "http://www.hotel-juraku.co.jp/minakami/news/167539552243/"),
      factNov14("営業時間", "大浴場（男女入れ替え制）15:00〜深夜1:00／5:00〜10:00", "http://www.hotel-juraku.co.jp/minakami/spa/"),
      factNov14("設備", "天狗の湯にドライサウナ・水風呂、せせらぎの湯にボナサームサウナ。泉質はカルシウム・ナトリウム-硫酸塩・塩化物温泉（源泉42℃）", "http://www.hotel-juraku.co.jp/minakami/spa/"),
      factNov14("水風呂", "あり（天狗の湯。温度の表記なし）", "http://www.hotel-juraku.co.jp/minakami/spa/"),
      factNov14("利用条件", "刺青・タトゥー（シール類を含む）をされた方は入浴不可。温泉は宿泊者中心で、日帰りはプラン利用で可", "http://www.hotel-juraku.co.jp/minakami/spa/"),
    ],
  },
  {
    ids: ["gunma-private-sauna-zero"], name: "PRIVATE SAUNA ZERO", officialUrl: "https://sauna-zero.jp/",
    features: ["個室", "セルフロウリュ", "ロウリュあり"],
    facts: [
      factNov14("料金", "60分コース3,000円、90分コース4,300円、120分コース5,500円（税込）", "https://sauna-zero.jp/"),
      factNov14("営業時間", "平日10:00〜23:00、土日祝10:00〜21:00（最終受付は閉店の2時間前）", "https://sauna-zero.jp/"),
      factNov14("定休日", "水曜日", "https://sauna-zero.jp/"),
      factNov14("設備", "完全個室の本格フィンランド式サウナ（L字型ベンチ、1〜2名用）。アロマオイルを選んでセルフロウリュ可", "https://sauna-zero.jp/zero/facility/"),
      factNov14("利用条件", "完全個室制。ペア利用は男女でも入室可", "https://sauna-zero.jp/"),
    ],
  },
  {
    ids: ["st-gumma-339"], name: "高崎 京ヶ島天然温泉 湯都里", officialUrl: "https://www.yu-tori.jp/",
    features: ["温泉付き", "貸切可"],
    facts: [
      factNov14("定休日", "毎月第3木曜日（8月は休まず営業）。2026年11月は19日、12月は17日が休館日", "http://www.yu-tori.jp/"),
      factNov14("利用条件", "タトゥー・刺青（シール・ヘナを含む）のある方は入館不可。オムツを使用されている方は大浴場の利用不可。7歳以上のお子様の異性浴場への入浴不可", "http://www.yu-tori.jp/"),
    ],
  },
  {
    ids: ["st-gunma-115"], name: "草津温泉 大滝乃湯", officialUrl: "https://onsen-kusatsu.com/ohtakinoyu/",
    features: ["温泉付き", "貸切可", "サ飯あり"],
    facts: [
      factNov14("料金", "ちょいな三湯めぐり手形 大人2,100円（大滝乃湯・御座之湯・西の河原露天風呂に各1回入浴可、有効期限なし）", "https://onsen-kusatsu.com/tickets/"),
      factNov14("営業時間", "9:00～21:00（最終入館は20:00まで）", "https://onsen-kusatsu.com/ohtakinoyu/"),
      factNov14("設備", "男女別の合わせ湯・大浴場・湯滝のある露天風呂。煮川源泉かけ流し（酸性硫黄泉 pH2.1）。貸切風呂「しゃくなげ」1時間2,000円", "https://onsen-kusatsu.com/ohtakinoyu/hot-spring/"),
      factNov14("利用条件", "男女別（合わせ湯は男女で造りが異なる）。日帰り入浴施設", "https://onsen-kusatsu.com/ohtakinoyu/"),
    ],
  },
  {
    ids: ["st-gunma-338"], name: "天神の湯", officialUrl: "http://tenjinnoyu.com/index.php",
    features: ["温泉付き", "水風呂あり", "サ飯あり"],
    facts: [
      factNov14("料金", "風呂のみコース 大人950円（土日祝1,100円）・子供350円。朝風呂 大人850円（土日祝1,000円）", "http://tenjinnoyu.com/kannai.html"),
      factNov14("営業時間", "11:00〜深夜1:00（入館受付は深夜0:00まで）。朝風呂6:00〜10:00（受付9:00まで）。10:00〜11:00は一旦閉館", "http://tenjinnoyu.com/kannai.html"),
      factNov14("設備", "内風呂・露天風呂・サウナ・水風呂（自家源泉かけ流し）。サウナはロウリュ不可", "http://tenjinnoyu.com/kannai.html"),
      factNov14("水風呂", "あり（温度の表記なし）", "http://tenjinnoyu.com/index.php"),
      factNov14("利用条件", "刺青・タトゥーのある方は入館不可。18歳未満は22:00まで（2Fの利用は18歳以上のみ）。おむつをしている方は利用不可", "http://tenjinnoyu.com/access.html"),
    ],
  },
  {
    ids: ["st-gumma-1590"], name: "天然温泉湯楽部", officialUrl: "https://ota.yurabu.com/",
    features: ["温泉付き", "貸切可", "宿泊可", "男女共用", "サ飯あり"],
    facts: [
      factNov14("料金", "とくとくスパコース 大人（中学生以上）平日1,500円／土日祝日1,650円。銭湯コース 大人平日830円／土日祝980円", "https://ota.yurabu.com/yurabu/info/index.html"),
      factNov14("営業時間", "大浴場10時〜24時（朝風呂6時〜9時）、3Fモンゴル式サウナ10時〜24時。入館最終受付23時30分", "https://ota.yurabu.com/yurabu/info/index.html"),
      factNov14("定休日", "定休日なし（館内メンテナンスのため年に数回不定期に休館）", "https://ota.yurabu.com/yurabu/faq/index.html"),
      factNov14("設備", "モンゴル式サウナ（約60℃、麦飯石の遠赤外線火釜サウナ、館内着着用で男女一緒に利用可）、露天ゾーンにバレルサウナ、ヒマラヤピンク岩塩の薬石ルーム", "https://ota.yurabu.com/yurabu/sauna/index.html"),
      factNov14("利用条件", "入れ墨・タトゥー（シール等を含む）をされている方は入館不可。3歳未満およびオムツ使用の方は浴場利用不可。小学生以下は保護者同伴", "https://ota.yurabu.com/yurabu/faq/index.html"),
    ],
  },
  {
    ids: ["st-gunma-4790"], name: "毎日サウナ 前橋本店", officialUrl: "https://everyday-sauna.com/",
    features: ["薪サウナ", "セルフロウリュ", "ロウリュあり", "熱波師あり", "水風呂あり", "貸切可"],
    facts: [
      factNov14("料金", "平日60分1,100円・90分1,450円・120分1,800円。土日祝は60分1,300円・90分1,650円・120分2,000円", "https://everyday-sauna.com/stores/%e5%89%8d%e6%a9%8b%e6%9c%ac%e5%ba%97/"),
      factNov14("営業時間", "月〜金15:00〜24:00、土日祝12:00〜24:00", "https://everyday-sauna.com/stores/%e5%89%8d%e6%a9%8b%e6%9c%ac%e5%ba%97/"),
      factNov14("定休日", "なし", "https://everyday-sauna.com/stores/%e5%89%8d%e6%a9%8b%e6%9c%ac%e5%ba%97/"),
      factNov14("設備", "本格薪サウナ（セルフロウリュ可、アロマ水やヴィヒタ水を用意）。不定期でアウフグースサービスを実施", "https://everyday-sauna.com/stores/%e5%89%8d%e6%a9%8b%e6%9c%ac%e5%ba%97/"),
      factNov14("水風呂", "あり（水深990mmの檜水風呂と1人用桶水風呂。温度の表記なし）", "https://everyday-sauna.com/stores/%e5%89%8d%e6%a9%8b%e6%9c%ac%e5%ba%97/"),
      factNov14("利用条件", "男性専用（レディースデーを定期開催）。貸切サービスあり（1名〜10名、前日17時までに要予約）", "https://everyday-sauna.com/"),
    ],
  },
  {
    ids: ["st-saitama-4839"], name: "KUUMA シェアサウナ", officialUrl: "https://kuuma-sauna.jp/",
    features: ["水風呂あり", "貸切可"],
    facts: [
      factNov14("料金", "シェアルーム通常利用 40分980円・60分1,480円・80分1,980円（税込）。貸切120分25,000円（8名まで）", "https://kuuma-sauna.jp/"),
      factNov14("営業時間", "6:30〜24:00（最終受付 シェアルーム23:20）", "https://kuuma-sauna.jp/"),
      factNov14("定休日", "年末年始休業日あり", "https://kuuma-sauna.jp/"),
      factNov14("設備", "他のお客様とサウナ空間をシェアする大衆サウナ型のシェアルーム。水風呂完備（チラー設備による水温調整）", "https://kuuma-sauna.jp/"),
      factNov14("水風呂", "あり（チラー設備で水温調整。温度の数値表記なし）", "https://kuuma-sauna.jp/"),
      factNov14("利用条件", "通常は男性向け営業。月に一度レディースデーを開催。同性に限り貸切での利用も可", "https://kuuma-sauna.jp/"),
    ],
  },
  {
    ids: ["st-saitama-4838"], name: "KUUMA 個室サウナ", officialUrl: "https://kuuma-sauna.jp/",
    features: ["個室", "セルフロウリュ", "ロウリュあり", "水風呂あり"],
    facts: [
      factNov14("料金", "一人専用個室 70分3,500円・100分4,500円（税込）。広々個室（1〜2名用）100分 1名5,500円・2名8,500円", "https://kuuma-sauna.jp/"),
      factNov14("営業時間", "6:30〜24:00（最終受付 個室22:50）", "https://kuuma-sauna.jp/"),
      factNov14("定休日", "年末年始休業日あり", "https://kuuma-sauna.jp/"),
      factNov14("設備", "お好みに合わせた温度設定ができ、全室アウフグースの体験ができる個室サウナ。全室水風呂を完備", "https://kuuma-sauna.jp/"),
      factNov14("水風呂", "全室あり（チラー設備で水温調整。温度の数値表記なし）", "https://kuuma-sauna.jp/"),
      factNov14("利用条件", "完全個室（1人専用個室／1〜2名用の広々個室）", "https://kuuma-sauna.jp/"),
    ],
  },
  {
    ids: ["st-saitama-4776"], name: "SAUNEA浦和", officialUrl: "https://saunea.jp/event-place/",
    features: ["貸切可", "水風呂あり", "外気あり", "ロウリュあり"],
    facts: [
      factNov14("料金", "施設貸切 平日4時間44,000円・5時間55,000円・6時間66,000円（10名様まで一律料金）。土日祝4時間60,500円〜", "https://saunea.jp/event-place/"),
      factNov14("営業時間", "11:00〜21:00（宿泊は不可）", "https://saunea.jp/event-place/"),
      factNov14("設備", "屋外型サウナRIISI（キューブサウナ）、チラー搭載の温度管理水風呂プール、外気浴用アウトドアチェア", "https://saunea.jp/event-place/"),
      factNov14("水風呂", "あり（チラー搭載プールで温度管理。温度の数値表記なし）", "https://saunea.jp/event-place/"),
      factNov14("利用条件", "1日1組限定の完全貸切（最大20名）。サウナ利用時は水着着用必須。お一人様でのサウナ利用は不可", "https://saunea.jp/event-place/"),
    ],
  },
  {
    ids: ["st-saitama-4746"], name: "UUSIN by NEXT SAUNA", officialUrl: "https://next-sauna.com/",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "個室"],
    facts: [
      factNov14("料金", "ECONOMY ROOM 70分 税込4,400円／STANDARD ROOM 70分 税込6,600円・90分 税込8,250円／VIP ROOM 120分 税込11,000円", "https://next-sauna.com/uusin/"),
      factNov14("設備", "90℃・100℃・110℃の3段階に調節可能なフィンランド式サウナ。お好きなアロマ水でセルフロウリュも楽しめる", "https://next-sauna.com/uusin/"),
      factNov14("水風呂", "STANDARD ROOM以上の部屋に浴槽を設置し、水風呂として利用可（水風呂が苦手な方は温水でも入浴可）。温度の記載なし", "https://next-sauna.com/uusin/"),
      factNov14("利用条件", "完全個室型フィンランド式サウナ（ロイヤルパインズホテル浦和内）。ECONOMY ROOM・VIP ROOMはおひとりさまのみ、STANDARD ROOMは1〜2名で利用可能", "https://next-sauna.com/uusin/"),
    ],
  },
  {
    ids: ["st-saitama-4840"], name: "アテンドサウナ レストハウス名栗", officialUrl: "https://www.attend-sauna.net/",
    features: ["薪サウナ", "ロウリュあり", "水風呂あり", "外気あり", "貸切可"],
    facts: [
      factNov14("料金", "手ぶらでモルジュプラン 3時間 15,000円（税込）。テントサウナ一式・アロマロウリュセット・ととのい椅子・温度計・CO検知器を含む（薪はプランに含まれず各自用意）", "https://www.attend-sauna.net/"),
      factNov14("営業時間", "通年営業（レストハウス名栗）", "https://www.attend-sauna.net/"),
      factNov14("設備", "テントサウナブランド「MORZH」を使用した薪ストーブ式テントサウナ。アロマロウリュ対応", "https://www.attend-sauna.net/"),
      factNov14("水風呂", "天然の川（渓流）を水風呂として利用", "https://www.attend-sauna.net/"),
    ],
  },
  {
    ids: ["st-saitama-4691"], name: "おふろの王様 和光店", officialUrl: "https://www.ousama2603.com/wako/",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "入館料金 大人（中学生以上）平日1,050円／土・日・祝日1,200円。小人（4歳〜小学生）平日400円／土・日・祝日550円。4歳未満は無料。タオル等は含まれない", "https://www.ousama2603.com/wako/"),
      factNov14("営業時間", "9:00〜24:00（最終受付23:00）", "https://www.ousama2603.com/wako/"),
    ],
  },
  {
    ids: ["st-saitama-374"], name: "ふく乃湯", officialUrl: "http://www.art-kouba.com/kinrin/fukunoyu.html",
    features: ["ドライサウナ"],
    facts: [
      factNov14("料金", "大人430円、中人（小学生）180円、小人（未就学児）70円。サウナは別料金", "http://www.art-kouba.com/kinrin/fukunoyu.html"),
      factNov14("営業時間", "平日12:00〜24:00、土日祝日9:00〜24:00", "http://www.art-kouba.com/kinrin/fukunoyu.html"),
      factNov14("定休日", "無休", "http://www.art-kouba.com/kinrin/fukunoyu.html"),
      factNov14("設備", "サウナ（乾式・別料金）。バイブラバス・エステバス・ジェットバス・露天風呂・打たせ湯あり", "http://www.art-kouba.com/kinrin/fukunoyu.html"),
    ],
  },
  {
    ids: ["st-saitama-1711"], name: "見沼天然温泉 小春日和", officialUrl: "http://www.koharubiyori.co.jp/index.html",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "入館料（税込）大人 平日950円／土日祝1,050円、子供 平日600円／土日祝700円（2025年12月1日改定）", "http://www.koharubiyori.co.jp/"),
      factNov14("利用条件", "入館は5歳以上のお子様から。7歳以上のお子様は異性の脱衣所・浴室の利用不可", "http://www.koharubiyori.co.jp/"),
    ],
  },
  {
    ids: ["st-fukushima-4628"], name: "ラビスパ裏磐梯", officialUrl: "https://laviespa.com/",
    features: [], status: "closed",
    facts: [
      factNov14("営業状況", "公式サイトに閉館のお知らせが掲載され、2023年12月24日付の案内で営業停止（27年間の営業を終了）", "https://laviespa.com/"),
    ],
  },
  {
    ids: ["st-yamagata-1390"], name: "ハイジアパーク南陽", officialUrl: "http://hygeia-park.jp/",
    features: [], status: "closed",
    facts: [
      factNov14("営業状況", "南陽市の市報（2021年7月1日号）によれば、旧ハイジアパーク南陽は令和3年3月をもって閉館し営業を停止", "http://www.city.nanyo.yamagata.jp/up/files/giyousei/kouhoukoucyo/siho/pdf/1299.txt"),
    ],
  },
  {
    ids: ["st-ibaraki-357"], name: "湯楽の里 取手店", officialUrl: "https://www.yurakirari.com/",
    features: [], status: "closed",
    facts: [
      factNov14("営業状況", "公式の閉店告知により2024年1月8日をもって閉店。旧店舗ページは公式総合案内へ転送され、公式店舗一覧にも掲載がない", "https://www.yurakirari.com/"),
    ],
  },
  {
    ids: ["st-saitama-4934"], name: "西武秩父駅前温泉 祭の湯", officialUrl: "https://www.seibu-leisure.co.jp/matsuri/index.html",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "¥700～¥1,380（公式サイトに記載の価格帯）", "https://www.seibu-leisure.co.jp/matsuri/index.html"),
      factNov14("営業時間", "10:00～22:00（公式サイト表記）", "https://www.seibu-leisure.co.jp/matsuri/index.html"),
      factNov14("利用条件", "日帰り温泉施設。宿泊営業は秩父夜祭開催時など特別時のみ", "https://www.seibu-leisure.co.jp/matsuri/info/51026/index.html"),
    ],
  },
  {
    ids: ["st-saitama-20"], name: "草加健康センター", officialUrl: "http://www.yunoizumi.com/souka/",
    features: ["ロウリュあり", "水風呂あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "一般 平日1,250円／土日祝1,500円（館内着・タオルなし、2026年3月1日からの料金）。深夜2:00以降の在館は深夜料金+1,500円", "https://yunoizumi.com/souka/price/"),
      factNov14("営業時間", "10:00～翌朝8:00（入浴は10:00～深夜1:30、金・土・祝日前日は翌朝7:30まで）。朝風呂5:00～7:30", "https://yunoizumi.com/souka/price/"),
      factNov14("設備", "高温サウナ（男性3段・定員40名、女性4段・定員20名）。個性的な四つのロウリュを実施。効仙薬湯・露天草津の湯・高濃度炭酸泉あり", "http://www.yunoizumi.com/souka/"),
      factNov14("水風呂", "あり（深夜帯は男性のみサウナ・水風呂限定利用あり）。温度の記載なし", "https://yunoizumi.com/souka/price/"),
      factNov14("利用条件", "2階施設の利用には館内着の着用が必須（小学生以上）", "https://yunoizumi.com/souka/price/"),
    ],
  },
  {
    ids: ["st-saitama-1726"], name: "湯屋敷孝楽", officialUrl: "http://www.yuyashiki.com/",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "サ飯あり"],
    facts: [
      factNov14("料金", "大人 平日750円／土日祝850円、子供（3歳以上小学生以下）平日350円／土日祝400円", "http://www.yuyashiki.com/"),
      factNov14("営業時間", "10:00～25:00（最終受付24:00）", "http://www.yuyashiki.com/"),
      factNov14("定休日", "第3水曜日（2・8月は除く）", "http://www.yuyashiki.com/"),
      factNov14("設備", "オートロウリュウサウナ（入館料のみで利用可）。4D岩盤浴「孝蒸洞」、露天風呂・炭酸泉など9種類の内風呂", "http://www.yuyashiki.com/"),
      factNov14("水風呂", "冷水風呂あり（温度の記載なし）", "http://www.yuyashiki.com/"),
    ],
  },
  {
    ids: ["st-chiba-4796"], name: "PGF LAND", officialUrl: "https://tentsauna.pgf.land/",
    features: ["薪サウナ", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "テントサウナ 大人1名5,500円（税込）。1名利用の場合は7,000円（税込）。90分制", "https://tentsauna.pgf.land/"),
      factNov14("営業時間", "テントサウナは1日4部制（1部10:00-11:30／2部12:00-13:30／3部14:00-15:30／4部16:00-17:30）、各90分", "https://tentsauna.pgf.land/"),
      factNov14("設備", "薪ストーブのテントサウナ（80〜110度）。ロウリュウや薪の投入は利用者自身が行うセルフ式。アロマは20種類から選択可", "https://tentsauna.pgf.land/"),
      factNov14("水風呂", "小糸川が水風呂代わり（冬季12〜2月の川の水温は6〜9℃）。滝の天然湧き水も利用可", "https://tentsauna.pgf.land/"),
      factNov14("利用条件", "テントサウナ1基につき定員5名。飲酒しての利用不可。宿泊プランでは12歳以下はテントサウナ利用不可", "https://tentsauna.pgf.land/"),
    ],
  },
  {
    ids: ["st-chiba-4749"], name: "SEASIDE SURF SAUNA", officialUrl: "http://www.seasidesurfsauna.com/",
    features: ["薪サウナ", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "貸切可"],
    facts: [
      factNov14("設備", "エストニア産薪ストーブのサウナ（サーモウッドのサウナ室）。150分間のプライベートサウナ", "http://www.seasidesurfsauna.com/"),
      factNov14("水風呂", "常陸檜で作られた水風呂あり（温度の記載なし）。海が見渡せるテラスで外気浴も可", "http://www.seasidesurfsauna.com/"),
      factNov14("利用条件", "18歳未満の方のみでの利用は不可（小学生以上は保護者同伴で可）。飲酒されている方は利用不可", "http://www.seasidesurfsauna.com/"),
    ],
  },
  {
    ids: ["st-chiba-4807"], name: "オーシャンリゾート館山 Aハウス", officialUrl: "https://oceanresort.asia/a_house.html",
    features: ["貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "基本料金 平日69,000円／土・祝前日96,000円（おとな5名まで、税別）。別途リネン・管理費7,000円", "https://oceanresort.asia/a_house.html"),
      factNov14("営業時間", "チェックイン15:00以降、チェックアウト10:00（1棟貸切の宿泊施設）", "https://oceanresort.asia/a_house.html"),
      factNov14("設備", "バレルサウナ、温水対応オーシャンビュージャグジー、BBQグリル", "https://oceanresort.asia/a_house.html"),
      factNov14("利用条件", "1棟貸切のプライベートヴィラ（宿泊専用、日帰りプランなし）。2歳以下は無料。ペット同伴は要相談", "https://oceanresort.asia/a_house.html"),
    ],
  },
  {
    ids: ["st-chiba-4809"], name: "オーシャンリゾート館山 BBQハウス", officialUrl: "https://oceanresort.asia/bbq_house.html",
    features: ["貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "基本料金 平日96,000円／土・祝前日128,000円（おとな5名まで、税別）。別途リネン・管理費7,000円", "https://oceanresort.asia/bbq_house.html"),
      factNov14("営業時間", "チェックイン15:00以降、チェックアウト10:00（1棟貸切の宿泊施設）", "https://oceanresort.asia/bbq_house.html"),
      factNov14("設備", "バレルサウナ、屋外プール（常温）、温水対応露天ジャグジー、BBQグリル", "https://oceanresort.asia/bbq_house.html"),
      factNov14("利用条件", "1棟貸切のプライベートヴィラ（宿泊専用、日帰りプランなし）。2歳以下は無料。ペット同伴は要相談", "https://oceanresort.asia/bbq_house.html"),
    ],
  },
  {
    ids: ["st-chiba-4805"], name: "オーシャンリゾート館山 Kハウス", officialUrl: "https://oceanresort.asia/k_house.html",
    features: ["個室", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "基本料金 平日66,000円／土・祝前日86,000円（おとな5名まで、税別）。別途リネン・管理費7,000円", "https://oceanresort.asia/k_house.html"),
      factNov14("営業時間", "チェックイン15:00以降、チェックアウト10:00（1棟貸切の宿泊施設）", "https://oceanresort.asia/k_house.html"),
      factNov14("設備", "国産ヒノキ材のバレルサウナ（完全個室）、温水ジャグジーと常温ジャグジーの温冷ダブルジャグジー、BBQグリル", "https://oceanresort.asia/k_house.html"),
      factNov14("利用条件", "1棟貸切のプライベートヴィラ（宿泊専用、日帰りプランなし）。2歳以下は無料。ペット同伴は要相談", "https://oceanresort.asia/k_house.html"),
    ],
  },
  {
    ids: ["st-chiba-4806"], name: "オーシャンリゾート館山 Tハウス", officialUrl: "https://oceanresort.asia/t_house.html",
    features: ["貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "基本料金 平日86,000円（10〜3月の平日は79,000円）／土・祝前日118,000円（おとな5名まで、税別）。別途リネン・管理費7,000円", "https://oceanresort.asia/t_house.html"),
      factNov14("営業時間", "チェックイン15:00以降、チェックアウト10:00（1棟貸切の宿泊施設）。日帰りプランは時間指定制", "https://oceanresort.asia/t_house.html"),
      factNov14("設備", "オーシャンビューバレルサウナ、温水対応露天ジャグジー、オーシャンビュー足湯、BBQグリル", "https://oceanresort.asia/t_house.html"),
      factNov14("利用条件", "1棟貸切のプライベートヴィラ。日帰りプランあり（1時間20,000円／6時間パック100,000円、平日・日曜・祝日のみ、夏期・ハイシーズン・土曜・祝前日は対象外）。2歳以下は無料", "https://oceanresort.asia/t_house.html"),
    ],
  },
  {
    ids: ["st-chiba-4808"], name: "オーシャンリゾート館山 プールハウス", officialUrl: "https://oceanresort.asia/pool_house.html",
    features: ["貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "基本料金 平日86,000円／土・祝前日118,000円（おとな5名まで、税別）。別途リネン・管理費7,000円", "https://oceanresort.asia/pool_house.html"),
      factNov14("営業時間", "チェックイン15:00以降、チェックアウト10:00（1棟貸切の宿泊施設）。日帰りプランは時間指定制", "https://oceanresort.asia/pool_house.html"),
      factNov14("設備", "バレルサウナ、屋外プール（常温）、温水対応露天ジャグジー、BBQグリル", "https://oceanresort.asia/pool_house.html"),
      factNov14("利用条件", "1棟貸切のプライベートヴィラ。日帰りプランあり（1時間20,000円／6時間パック100,000円、平日・日曜・祝日のみ、夏期・ハイシーズン・土曜・祝前日は対象外、最大12名）。2歳以下は無料", "https://oceanresort.asia/pool_house.html"),
    ],
  },
  {
    ids: ["st-chiba-1781"], name: "かりんの湯", officialUrl: "https://www.thefarm.jp/karinnoyu/",
    features: ["ロウリュあり", "男女共用", "サ飯あり"],
    facts: [
      factNov14("料金", "フリータイムコース 大人 平日1,280円／土日祝1,980円。120分コース 大人 平日950円／土日祝1,390円。朝風呂 大人 平日840円／土日祝1,390円", "https://www.thefarm.jp/karinnoyu/"),
      factNov14("営業時間", "7:00～24:00（最終入館23:00）。120分コースは9:00～24:00、朝風呂は7:00～10:00（最終入館9:00）", "https://www.thefarm.jp/karinnoyu/"),
      factNov14("設備", "男女共用のロウリュサウナあり（男女でサウナ・お風呂・食事を1日楽しめる施設）", "https://www.thefarm.jp/karinnoyu/"),
      factNov14("利用条件", "幼児（3歳～小学校入学前）はサウナ利用不可。男女共用ロウリュサウナの利用時は水着の持参が必要。オムツの取れていない子は浴室設置のベビーバスを利用", "https://www.thefarm.jp/karinnoyu/"),
    ],
  },
  {
    ids: ["st-chiba-4393"], name: "ジートピア", officialUrl: "https://www.funabashi-sauna.com/",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴（4:00-24:00・最長20時間）平日1,600円／土日祝・特日1,700円。宿泊 平日3,200円／土日祝・特日3,400円。カプセルは別途＋800円～（いずれも税込）", "https://www.funabashi-sauna.com/"),
      factNov14("営業時間", "入浴 4:00～24:00。深夜入浴5時間（19:00～4:00に入館の場合）、宿泊（4:00～翌12:00・最長32時間）あり", "https://www.funabashi-sauna.com/"),
      factNov14("設備", "高温サウナと低温サウナ（入口にヴィヒタを配置し、セルフロウリュを推奨）。大風呂は41～43℃、ぬる湯は約33℃", "https://funabashi-sauna.com/sauna/"),
      factNov14("水風呂", "あり（船橋の地下天然水を使用。温度の記載なし）", "https://funabashi-sauna.com/sauna/"),
    ],
  },
  {
    ids: ["st-chiba-4757"], name: "ととのい整作所", officialUrl: "http://totonoi-seisakusyo.jp/",
    features: ["個室", "水風呂あり"],
    facts: [
      factNov14("設備", "北欧スタイルの個室サウナが6室。着替えからサウナ、水風呂まで完全なプライベートスペース（浦安駅徒歩1分・西友浦安店2F）", "http://totonoi-seisakusyo.jp/"),
    ],
  },
  {
    ids: ["st-chiba-365"], name: "船橋グランドサウナａｎｄカプセルホテル", officialUrl: "http://funabashi-grandsauna.jp/",
    features: ["水風呂あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("設備", "広びろとしたサウナ室、気泡バイブラーの大浴槽、温泉気分の薬湯、強力なボディーシャワー", "http://funabashi-grandsauna.jp/floormap/bath/"),
      factNov14("水風呂", "あり（冷水槽。温度の記載なし）", "http://funabashi-grandsauna.jp/floormap/bath/"),
      factNov14("利用条件", "男性専用。カプセルホテル併設（カプセル内はTV・Wi-Fi完備）", "http://funabashi-grandsauna.jp/"),
    ],
  },
  {
    ids: ["st-chiba-4582"], name: "天然温泉 湯～ねる", officialUrl: "https://u-neru.com/",
    features: ["オートロウリュ", "ロウリュあり", "熱波師あり", "水風呂あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "入浴 10時～25時（朝風呂6時～9時）。宿泊（キャビンホテル）はチェックイン10時～、チェックアウト翌10時まで", "https://u-neru.com/"),
      factNov14("設備", "天然温泉（ナトリウム－塩化物強塩泉）で源泉掛け流し風呂・展望風呂・高濃度炭酸泉など。内湯にサウナ完備。岩盤浴エリアで自動ロウリュ（11時～23時の2時間ごと）", "https://u-neru.com/onsen/"),
      factNov14("水風呂", "あり（月・金曜のアウフグースイベント「限界突破」時は水風呂10℃・サウナ100℃設定）", "https://u-neru.com/onsen/"),
      factNov14("利用条件", "入浴はオムツが完全に取れている子供に限る", "https://u-neru.com/onsen/"),
    ],
  },
  {
    ids: ["st-chiba-4737"], name: "天然温泉 湯舞音 袖ケ浦店", officialUrl: "https://yubune-sodegaura.jp/",
    features: ["ロウリュあり", "外気あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴プラン 大人（中学生以上）平日1,050円／休日1,250円、子供（3歳以上）平日500円／休日600円。岩盤浴プラン 大人 平日1,650円／休日1,950円（税込）", "https://yubune-sodegaura.jp/price"),
      factNov14("営業時間", "お風呂 9:00～24:00（最終受付23:30）。岩盤浴 9:00～23:30（最終受付23:00）", "https://yubune-sodegaura.jp/price"),
      factNov14("定休日", "年に数回メンテナンス休館の予定あり（日程は事前に告知）", "https://yubune-sodegaura.jp/price"),
      factNov14("設備", "袖ケ浦初の天然温泉をはじめ8種類のお風呂とサウナを完備。露天風呂には広々とした外気浴スペースあり。ロウリュウも楽しめる", "https://yubune-sodegaura.jp/"),
      factNov14("利用条件", "異性浴場の利用はおおむね7歳未満のみ。3歳未満の子供は無料。オムツ着用の大人の入浴は不可", "https://yubune-sodegaura.jp/price"),
    ],
  },
  {
    ids: ["st-chiba-4678"], name: "南柏天然温泉 すみれ", officialUrl: "https://minamikashiwa-sumire.com/",
    features: ["温泉付き", "ロウリュあり", "サ飯あり"],
    facts: [
      factNov14("料金", "入館料 大人（中学生以上）平日950円／土・日・祝1,100円、小人（4歳以上中学生未満）平日450円／土・日・祝550円。岩盤浴は別途平日700円／休日800円", "https://minamikashiwa-sumire.com/"),
      factNov14("営業時間", "7時～24時（最終受付23時）", "https://minamikashiwa-sumire.com/"),
      factNov14("定休日", "3・6・9・12月の第3木曜日", "https://minamikashiwa-sumire.com/"),
      factNov14("設備", "源泉かけ流し天然温泉（通称「熱の湯」）。5つの岩盤浴「La Viola」ではミュージックロウリュ等が楽しめる。食事処・リラクゼーションあり", "https://minamikashiwa-sumire.com/"),
    ],
  },
  {
    ids: ["st-chiba-76"], name: "舞浜ユーラシア", officialUrl: "http://www.my-spa.jp/index.html",
    features: ["温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "SPA入館料 大人（中学生以上）平日2,100円／土日祝2,600円（入湯税込、タオル付）。本館5F「SPA＋」は別途950円", "https://my-spa.jp/spa/price/?wovn=en"),
      factNov14("営業時間", "本館4F SPA（大浴場・サウナ）11:00～翌1:00、朝風呂5:00～9:00（最終入館8:00）。SPA＋は11:00～翌8:00（最終入館7:00）", "https://my-spa.jp/spa/price/?wovn=en"),
      factNov14("定休日", "年中無休（年2回程度、法定メンテナンスのため営業時間が異なる場合あり）", "https://my-spa.jp/spa/price/?wovn=en"),
      factNov14("設備", "日本最大級の展望サウナや天然温泉。本館5F SPA＋には各種サウナ・岩盤浴・足湯・露天風呂あり", "http://www.my-spa.jp/index.html"),
      factNov14("利用条件", "日帰り利用可。3歳以下は無料だが本館4F SPA・5F SPA＋は利用不可。SPA＋の岩盤浴・サウナは中学生未満利用不可", "https://my-spa.jp/spa/price/?wovn=en"),
    ],
  },
  {
    ids: ["st-chiba-1971"], name: "龍宮城スパホテル三日月", officialUrl: "http://www.mikazuki.co.jp/ryugu/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("利用条件", "日帰り利用可（日帰りリゾート「湯と遊び」あり）。宿泊も可", "http://www.mikazuki.co.jp/ryugu/"),
    ],
  },
  {
    ids: ["st-tokyo-4937"], name: "アカサカサウナ", officialUrl: "https://akasakasauna.hacomono.jp/reserve/schedule/1/1/",
    features: ["個室"],
    facts: [
      factNov14("利用条件", "完全予約制の個室サウナ（ROOM1～4）。ROOM1～3は1～2名、ROOM4は1～4名。予約はスタート1時間前まで、14日先まで可能", "https://akasakasauna.hacomono.jp/reserve/schedule/1/1/"),
    ],
  },
  {
    ids: ["st-tokyo-524"], name: "サウナ&カプセル サンフラワー", officialUrl: "http://www.sunflower-capsule.com/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "ロウリュあり", "熱波師あり", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "ドライサウナ約100℃、スチームサウナ約50℃。ドライサウナでは1時間に1度（12時～24時）スタッフによるロウリュサービスを実施、熱波イベントも定期開催", "https://www.sunflower-capsule.com/sauna/"),
      factNov14("水風呂", "地底から湧き出る天然の井戸水を使用。基本水温17℃", "https://www.sunflower-capsule.com/sauna/"),
      factNov14("利用条件", "男性専用。カプセルホテル併設で宿泊可", "http://www.sunflower-capsule.com/"),
    ],
  },
  {
    ids: ["st-tokyo-4488"], name: "サウナセンター", officialUrl: "https://sauna-center.jp/index.html",
    features: ["ロウリュあり", "熱波師あり", "サ飯あり", "宿泊可"],
    facts: [
      factNov14("料金", "3時間入浴 平日1,800円／土日祝2,300円、8時間入浴 平日2,300円／土日祝2,800円、宿泊（15:00～翌12:00）平日3,500円", "https://sauna-center.jp/sauna-center.html"),
      factNov14("営業時間", "入浴受付5:00～深夜1:00（深夜1:00を過ぎると深夜料金が発生）。10:00～11:00は風呂清掃のため浴室利用不可", "https://sauna-center.jp/sauna-center.html"),
      factNov14("定休日", "年中無休", "https://sauna-center.jp/sauna-center.html"),
      factNov14("設備", "高温多湿なサウナでアウフグースを実施（月～金17・19・21時、土・日は全6回）。6～7℃のペンギンルーム、5Fに食堂あり", "https://sauna-center.jp/sauna-center.html"),
      factNov14("利用条件", "男性専用（女性はレディースデーのみ利用可）。刺青・タトゥーのある方、酩酊の方は入店不可", "https://sauna-center.jp/sauna-center.html"),
    ],
  },
  {
    ids: ["st-kanagawa-4827"], name: "【関東】テントサウナパーク In 高瀬野", officialUrl: "https://reserve.saunaparadise.jp/kanagawa-sagamihara-sauna/",
    features: ["薪サウナ", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "貸切可"],
    facts: [
      factNov14("料金", "1日貸切 平日25,000円／土日祝30,000円（1予約6名まで同一料金、人数追加は3,000円/人）。別途入場料1,100円/人、駐車場1,100円/台", "https://reserve.saunaparadise.jp/kanagawa-sagamihara-sauna/"),
      factNov14("営業時間", "10:00～17:00（最終薪入れは16:00）。営業期間は4月～10月", "https://reserve.saunaparadise.jp/kanagawa-sagamihara-sauna/"),
      factNov14("定休日", "営業期間中は定休日なし（11月～3月は実施不可期間）", "https://reserve.saunaparadise.jp/kanagawa-sagamihara-sauna/"),
      factNov14("設備", "薪のテントサウナ。自分たちで火起こしをし、アロマ水でのロウリュも可能。同一区画内でBBQ実施可、更衣室・トイレあり", "https://reserve.saunaparadise.jp/kanagawa-sagamihara-sauna/"),
      factNov14("水風呂", "目の前の川が水風呂（川サウナ）。温度の記載なし", "https://reserve.saunaparadise.jp/kanagawa-sagamihara-sauna/"),
      factNov14("利用条件", "1組で貸切利用。事前予約制（クレジットカード・銀行振込）。電車でのアクセスは不可で車必須", "https://reserve.saunaparadise.jp/kanagawa-sagamihara-sauna/"),
    ],
  },
  {
    ids: ["st-kanagawa-4692"], name: "3S HOTEL HIRATSUKA", officialUrl: "https://hiratsuka.3shotel.jp/",
    features: ["セルフロウリュ", "ロウリュあり", "熱波師あり", "宿泊可"],
    facts: [
      factNov14("料金", "日帰りプラン（客室利用なし・サウナ大浴場最大3時間、18:00～最終チェックイン22:00）通常2,000円（平塚市・藤沢市の市民割等で1,300円）", "https://go-shonanlabel.reservation.jp/ja/hotels/hiratsuka-3shotel/plans/10205562"),
      factNov14("設備", "セルフロウリュできる本格フィンランド式サウナと大浴場。毎日熱波サービス（18:30～／19:30～／20:30～、各10分前後）", "https://go-shonanlabel.reservation.jp/ja/hotels/hiratsuka-3shotel/plans/10205562"),
      factNov14("利用条件", "男性専用（レディースデー毎月第2・4水曜日12:00～17:00、レディースタイム毎週日曜日5:00～7:30）。日帰り利用可、宿泊可。小学生以下の利用は不可", "https://go-shonanlabel.reservation.jp/ja/hotels/hiratsuka-3shotel/plans/10205562"),
    ],
  },
  {
    ids: ["st-kanagawa-4714"], name: "URBAN SPA", officialUrl: "https://www.u-spa-sauna.com/#home",
    features: ["水風呂あり"],
    facts: [
      factNov14("営業時間", "10:00～23:00", "https://www.u-spa-sauna.com/"),
      factNov14("定休日", "月曜休館", "https://www.u-spa-sauna.com/"),
      factNov14("設備", "大浴場と2種のサウナでゆったりできるスパスペースと、リラクゼーションスペースを備えた総合リラクゼーション施設（厚木アーバンホテル直営）", "https://www.u-spa-sauna.com/"),
      factNov14("水風呂", "男性エリアに水風呂あり（公式お知らせに「男性水風呂 冷却設備復旧のお知らせ」あり。温度の記載なし）", "https://www.u-spa-sauna.com/"),
    ],
  },
  {
    ids: ["st-kanagawa-4736"], name: "プロスタイル旅館横濱馬車道", officialUrl: "https://www.prostyleryokan.com/yokohamabashamichi/",
    features: ["個室", "貸切可", "宿泊可"],
    facts: [
      factNov14("設備", "完全貸切のプライベートサウナ。ご案内時にサウナをより楽しむための「キューゲル」を提供。作務衣やバスタオル等の用意があり手ぶらで利用可", "https://prostyleryokan.com/yokohamabashamichi/"),
      factNov14("利用条件", "完全貸切制のためカップルでの利用も可。日帰り（デイユース）での利用も可", "https://prostyleryokan.com/yokohamabashamichi/"),
    ],
  },
  {
    ids: ["st-kanagawa-4777"], name: "ホテルプラタナス新横浜", officialUrl: "https://www.hotel-platanus.jp/",
    features: ["ドライサウナ", "セルフロウリュ", "水風呂あり", "個室", "宿泊可"],
    facts: [
      factNov14("設備", "客室内プライベートサウナは90℃以上の高温ドライサウナ（プレミアルーム・ツイン・シングル）。水風呂専用の氷を無料で提供", "https://www.hotel-platanus.jp/room/?id=sec2"),
      factNov14("設備", "ホテル1階にシングルサウナルームがあり、セルフロウリュウも可能なドライサウナを楽しめる", "https://www.hotel-platanus.jp/"),
      factNov14("利用条件", "サウナはプライベートサウナ付き客室への宿泊で利用可。チェックイン15:00／チェックアウト10:00", "https://www.hotel-platanus.jp/"),
    ],
  },
  {
    ids: ["st-kanagawa-4743"], name: "ロウリューランド川崎", officialUrl: "https://www.loylyland.com/kawasaki/",
    features: ["セルフロウリュ", "ロウリュあり", "個室", "男女共用"],
    facts: [
      factNov14("料金", "完全会員制。会員プランは月額3,600円（シンプル）〜25,000円（フルタイム）。初回体験2,980円/人、会員同伴のビジター利用料4,400円", "https://www.loylyland.com/kawasaki/"),
      factNov14("営業時間", "平日 10:00〜23:00、土日祝 10:00〜20:00", "https://www.loylyland.com/kawasaki/"),
      factNov14("定休日", "毎週木曜日", "https://www.loylyland.com/kawasaki/"),
      factNov14("設備", "個室サウナ全25室（着替え・シャワー・サウナが個室内で完結）。セルフロウリュで温度・湿度を調整可。VIPルームはチラー（冷却機）付きシャワーや岩盤浴付きの蒸岩浴も", "https://www.loylyland.com/kawasaki/"),
      factNov14("水風呂", "浴槽タイプの水風呂はなし。全室にオーバーヘッドシャワーを完備し、VIPルームはチラーで年間を通じて約11℃に冷却された冷水シャワーを利用可", "https://www.loylyland.com/kawasaki/"),
      factNov14("利用条件", "完全会員制で事前予約が必要（会員登録なしの都度利用は不可）。男女ペアでの同室利用可（個室内は水着着用、専用ウェア貸出無料）。タトゥーは個室内であれば利用可", "https://www.loylyland.com/kawasaki/"),
    ],
  },
  {
    ids: ["st-kanagawa-4795"], name: "個室サウナ&タイ古式マッサージ ワイルームSpa横浜鶴見店", officialUrl: "https://wairoom-spa.com/",
    features: ["個室", "貸切可", "セルフロウリュ", "ロウリュあり", "水風呂あり", "男女共用"],
    facts: [
      factNov14("料金", "個室サウナ90分 4,800円〜（スタンダードルーム・1名専用）。VIPペアルーム90分 8,800円〜、プレミアムペアルーム90分 9,900円〜", "https://wairoom-spa.com/shops/tsurumi/"),
      factNov14("営業時間", "月・水〜金 12:00–23:00／土日 11:00–23:00（最終受付21:30）", "https://wairoom-spa.com/shops/tsurumi/"),
      factNov14("定休日", "火曜日", "https://wairoom-spa.com/shops/tsurumi/"),
      factNov14("設備", "フィンランド製ストーブ「MISA」とバルト海産サウナストーンを使用しロウリュ可。サウナ90〜100℃（プレミアムペアルームは85〜90℃）。水風呂・内気浴も室内に完備", "https://wairoom-spa.com/shops/tsurumi/"),
      factNov14("水風呂", "基本15℃。予約で氷入りのグルシン（10℃以下）にも対応し、苦手な場合は水温を上げることも可", "https://wairoom-spa.com/shops/tsurumi/"),
      factNov14("利用条件", "完全個室・1〜2名で貸切（プレミアムペアルームは3名まで）。男女同室OK。予約優先で、当日空きがあればウォークインも可", "https://wairoom-spa.com/shops/tsurumi/"),
    ],
  },
  {
    ids: ["st-kanagawa-4786"], name: "公衆アウトドアサウナ ノサウナ", officialUrl: "https://nosauna.net/",
    features: ["薪サウナ", "セルフロウリュ", "ロウリュあり", "外気あり", "男女共用", "貸切可"],
    facts: [
      factNov14("料金", "通常券（1日）3,000円、回数券（6回分）12,000円（2,000円/1回）。1日貸切100,000円。支払いは現金のみ", "https://nosauna.net/"),
      factNov14("設備", "タイプの違う複数のテントサウナはすべて薪ストーブ使用（地元の間伐材、サウナストーンは地元真鶴産の本小松石）。全サウナでセルフロウリュ可。森林外気浴と渓流あり", "https://nosauna.net/"),
      factNov14("利用条件", "水着など着衣での男女混浴。予約不要・時間制限なし。当日入場のみ。未就学児の利用は不可", "https://nosauna.net/"),
    ],
  },
  {
    ids: ["st-kanagawa-4837"], name: "山賊サウナ", officialUrl: "https://sanzokusauna.com/",
    features: ["薪サウナ", "スチーム(ミスト)サウナ", "水風呂あり", "男女共用", "サ飯あり"],
    facts: [
      factNov14("料金", "入場券（1時間30分）1,800円〜2,150円、入場券（2時間）2,300円〜2,650円 ※ドリンク飲み放題付きかどうかで変動。全て税込", "https://sanzokusauna.com/price/"),
      factNov14("営業時間", "オープン 月～金・祝10時／土日9時、最終入館19時30分、閉館21時", "https://sanzokusauna.com/shop/"),
      factNov14("定休日", "年中無休（月に1回程度メンテナンス休業あり）", "https://sanzokusauna.com/shop/"),
      factNov14("設備", "薪ストーブサウナ（モキ製作所「MS70」と特別仕様の超大型薪ストーブ）とスチームサウナ。併設の焼肉店「山賊ホルモン」でサ飯も可", "https://sanzokusauna.com/"),
      factNov14("水風呂", "箱根連山の井戸水を使った超ビッグサイズの桶水風呂。水温18度", "https://sanzokusauna.com/"),
      factNov14("利用条件", "男女共用。タトゥー・刺青はラッシュガード着用やタトゥー隠しシールで完全に見えない状態にすれば利用可。刺青のある方の3名様以上の利用は不可", "https://sanzokusauna.com/"),
    ],
  },
  {
    ids: ["st-kanagawa-424"], name: "竜泉寺の湯湘南茅ヶ崎店", officialUrl: "https://ryusenjinoyu.com/chigasaki/",
    features: ["ロウリュあり", "熱波師あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴 大人（中学生以上）平日980円／土日祝1,100円、朝風呂 平日880円／土日祝980円。岩盤浴は別途 平日800円／土日祝1,000円", "https://ryusenjinoyu.com/chigasaki/price/"),
      factNov14("営業時間", "入浴 朝6:00～深夜2:00（最終受付 深夜1:30）。岩盤浴 朝6:00～深夜1:30（最終受付 深夜0:30）", "https://ryusenjinoyu.com/chigasaki/price/"),
      factNov14("定休日", "年中無休（メンテナンス点検による休館日あり）", "https://ryusenjinoyu.com/chigasaki/"),
      factNov14("設備", "12種類のお風呂・サウナ。男性は毎時00分・30分に熱風が吹く「14連バズーカサウナ」、女性は「香り彩るロウリュサウナ」。高濃度炭酸泉や天然温泉の岩湯、岩盤浴もあり、アウフグースイベントも開催", "https://ryusenjinoyu.com/chigasaki/bath/"),
      factNov14("利用条件", "刺青・タトゥーのある方は入館不可。サウナは中学生以上。中学生未満のみの利用は不可、小学生は同性の保護者同伴、7歳以上および120cm以上のお子様の混浴は禁止", "https://ryusenjinoyu.com/chigasaki/price/"),
      { label: "休館日", value: "年中無休(メンテナンス点検による休館日あり)", sourceUrl: "https://ryusenjinoyu.com/chigasaki/", checkedAt: "2026-10-19" },
    ],
  },
  {
    ids: ["st-niigata-4278"], name: "アクアホテル 燕三条駅前店", officialUrl: "http://aqa-hotel.co.jp/",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "最上階10階の展望大浴場と高温サウナで、新潟平野を望みながら入浴できる", "http://aqa-hotel.co.jp/"),
    ],
  },
  {
    ids: ["st-niigata-2109"], name: "うみてらす名立ホテル光鱗", officialUrl: "http://www.umiterasu.co.jp/relax/",
    features: ["水風呂あり", "個室", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "入浴料 大人800円（土・日・祝日900円）・小人300円・幼児200円（税込）。全館（風呂+プール）大人1,700円", "http://www.umiterasu.co.jp/relax/"),
      factNov14("営業時間", "温浴 月～木 10:00～21:00、金・土・祝前日 10:00～22:00", "http://www.umiterasu.co.jp/relax/"),
      factNov14("設備", "高温サウナ・水風呂、展望露天風呂、全国温泉湯めぐり風呂（人工温泉）、強力ジェットバス", "http://www.umiterasu.co.jp/relax/"),
      factNov14("水風呂", "あり（温度の記載なし）", "http://www.umiterasu.co.jp/relax/"),
      factNov14("利用条件", "日帰り入浴可。お子様のみの入館は中学生以上（大人＝中学生以上）", "http://www.umiterasu.co.jp/relax/"),
    ],
  },
  {
    ids: ["st-niigata-2126"], name: "えちご川口温泉", officialUrl: "https://www.kawaguchi-onsen.com/",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "大人900円（中学生以上）・こども650円（小学生）・幼児100円（3歳以上）。18時以降は大人800円・こども550円", "https://www.kawaguchi-onsen.com/"),
      factNov14("営業時間", "10:00～21:00（最終受付20:00）", "https://www.kawaguchi-onsen.com/"),
      factNov14("定休日", "火曜日", "https://www.kawaguchi-onsen.com/"),
      factNov14("設備", "サウナ、岩盤浴ナノミストサウナ、露天風呂・大浴場、プール、トレーニングルーム。泉質は塩化物強塩温泉", "https://www.kawaguchi-onsen.com/"),
      factNov14("利用条件", "日帰り入浴可（日帰り温泉施設）。隣接するホテルサンローラの宿泊者は入館料不要で利用可", "https://hotel-sunrolla.jp/kawaguchi-onsen/"),
    ],
  },
  {
    ids: ["st-niigata-2097"], name: "カーブドッチヴィネスパ", officialUrl: "https://www.docci.com/vinespa/",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "貸切可"],
    facts: [
      factNov14("料金", "平日1,000円／土日祝1,500円／繁忙日2,000円（温泉入浴料・施設利用料込）", "https://www.docci.com/vinespa/"),
      factNov14("営業時間", "7:00～22:00（木曜日のみ10:00～22:00）", "https://www.docci.com/vinespa/"),
      factNov14("設備", "男女それぞれにサウナと水風呂、露天風呂・内湯（自家源泉、pH9.0の強アルカリ性）。貸切温泉「ガーデンスパ」にはセルフロウリュ付きサウナ", "https://www.docci.com/vinespa/"),
      factNov14("水風呂", "あり（男女各浴場に設置。温度の記載なし）", "https://www.docci.com/vinespa/"),
      factNov14("利用条件", "日帰り入浴可。小学校入学前のお子様の入館は不可", "https://www.docci.com/vinespa/"),
    ],
  },
  {
    ids: ["st-niigata-4274"], name: "くわどり湯ったり村", officialUrl: "http://kuwadori.jp/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("定休日", "火曜日・水曜日（通常の休館日。時期により日帰り入浴を営業する場合あり）", "http://kuwadori.jp/"),
      factNov14("設備", "天然温泉の露天風呂あり（温泉宿泊施設）", "http://kuwadori.jp/"),
      factNov14("利用条件", "日帰り入浴可", "http://kuwadori.jp/"),
    ],
  },
  {
    ids: ["st-niigata-4653"], name: "スパ＆ラウンジ長潟", officialUrl: "https://www.vertex-group.co.jp/spa-lounge/",
    features: ["ドライサウナ"],
    facts: [
      factNov14("料金", "1回利用 2,200円（税込）。月額会員 11,000円（税込）", "https://www.vertex-group.co.jp/spa-lounge/"),
      factNov14("営業時間", "平日・土曜 8:00～23:00（最終入館22:00）、日曜・祝日 8:00～22:00（最終入館21:00）", "https://www.vertex-group.co.jp/spa-lounge/"),
      factNov14("設備", "遠赤外線ドライサウナ（3段）。人工温泉（全国の名湯の泉質を1ヶ月毎に再現）、露天風呂", "https://www.vertex-group.co.jp/spa-lounge/"),
      factNov14("利用条件", "16歳未満は利用不可。刺青・タトゥーのある方は入浴不可", "https://www.vertex-group.co.jp/spa-lounge/"),
    ],
  },
  {
    ids: ["st-niigata-2071"], name: "ナステビュウ湯の山", officialUrl: "https://yunoyama.jp/",
    features: ["ロウリュあり", "温泉付き"],
    facts: [
      factNov14("料金", "大人 平日800円（17:00以降700円）、土・日・祝・特定日850円（17:00以降750円）。小学生400円、幼児（3歳以上）200円", "https://yunoyama.jp/information/"),
      factNov14("営業時間", "平日 10:00～21:00、土・日・祝・特定日 5:00～21:00（最終入場は終了30分前）。2026年12月～2027年3月の土日祝等は8:00開館", "https://yunoyama.jp/information/"),
      factNov14("定休日", "火曜日（営業カレンダー上の休館日）。2026年12月15日～18日は源泉設備メンテナンスのため臨時休館", "https://yunoyama.jp/information/"),
      factNov14("設備", "ロウリュウサウナを試験開催（土・日等、男性17時／女性16時）", "https://yunoyama.jp/"),
    ],
  },
  {
    ids: ["st-niigata-2144"], name: "ホテルグリーンプラザ上越", officialUrl: "https://www.jkokusai.co.jp/spa",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴 1,000円（フェイスタオル1枚付）※夏期シーズンの本館温泉の場合", "https://www.jkokusai.co.jp/spa"),
      factNov14("営業時間", "本館天然温泉 5:00～8:30／11:30～24:00、コネクション館天然温泉 5:00～11:30／13:30～24:00", "https://www.jkokusai.co.jp/spa"),
      factNov14("設備", "サウナ・ジャグジーあり。自家源泉の天然温泉「樺野沢温泉」の内風呂・露天風呂（岩風呂・桶風呂）", "https://www.jkokusai.co.jp/spa"),
      factNov14("利用条件", "日帰り入浴可（夏期は本館温泉、冬期は日帰りセンターアネックスの温泉施設）。入れ墨・タトゥーのある方は大きさに関係なく入館不可", "https://www.jkokusai.co.jp/spa"),
    ],
  },
  {
    ids: ["st-niigata-4448"], name: "ホテル双葉", officialUrl: "https://www.hotel-futaba.com/",
    features: ["温泉付き", "貸切可", "宿泊可"],
    facts: [
      factNov14("設備", "館内の温泉「ふたばの湯」（山の湯・里の湯・空の湯）、貸切風呂、露天風呂付客室あり", "https://www.hotel-futaba.com/"),
    ],
  },
  {
    ids: ["st-niigata-2095"], name: "ゆーパーク薬師", officialUrl: "http://www.yu-park.net/index.html",
    features: ["ドライサウナ", "水風呂あり", "温泉付き"],
    facts: [
      factNov14("料金", "入館料 大人800円、子供（3才〜11才）500円、2才以下無料", "http://www.yu-park.net/yup_charge.html"),
      factNov14("営業時間", "10:00～21:00（最終受付20:00）", "http://www.yu-park.net/yup_facility.html"),
      factNov14("定休日", "毎週水曜日（祝日の場合は翌日）", "http://www.yu-park.net/yup_facility.html"),
      factNov14("設備", "男女日替わりで入れ替わる両浴室にドライサウナと水風呂あり。泉質は単純温泉（弱アルカリ性低張性温泉）", "http://www.yu-park.net/yup_facility.html"),
      factNov14("水風呂", "あり（温度の記載なし）", "http://www.yu-park.net/yup_facility.html"),
      factNov14("利用条件", "タトゥー・入れ墨が入っている方の入館・入浴は不可", "http://www.yu-park.net/index.html"),
    ],
  },
  {
    ids: ["st-niigata-4566"], name: "鵜の浜人魚館", officialUrl: "http://www.ningyokan.jp/index",
    features: ["水風呂あり", "温泉付き"],
    facts: [
      factNov14("設備", "サウナ付大浴場と薬草湯付大浴場があり、毎日男女の入れ替えを実施。サウナは施設使用料金のみで追加費用なしに利用可", "https://www.ningyokan.jp/onsen"),
      factNov14("水風呂", "あり（サウナの利用案内に記載。温度の記載なし）", "https://www.ningyokan.jp/onsen"),
    ],
  },
  {
    ids: ["st-niigata-4501"], name: "釜ぶたの湯", officialUrl: "http://hidakk.co.jp/kamabutanoyu/",
    features: ["塩サウナ", "温泉付き"],
    facts: [
      factNov14("料金", "温泉のみ 大人（中学生以上）480円・小学生150円、温泉＋サウナ 大人800円（令和7年7月1日からの料金）", "http://hidakk.co.jp/kamabutanoyu/"),
      factNov14("営業時間", "午前7:00～午後11:00（最終受付 午後10:30）", "http://hidakk.co.jp/kamabutanoyu/"),
      factNov14("定休日", "年中無休", "http://hidakk.co.jp/kamabutanoyu/"),
      factNov14("設備", "高温サウナと低温ソルトサウナの2つが楽しめる。天然温泉（ナトリウム－塩化物・炭酸水素塩温泉）", "http://hidakk.co.jp/kamabutanoyu/"),
      factNov14("利用条件", "サウナは大人のみの利用。刺青・タトゥー（シールタイプやファッションタトゥーを含む）をされた方の入館は不可", "http://hidakk.co.jp/kamabutanoyu/"),
    ],
  },
  {
    ids: ["st-niigata-2114"], name: "魚沼市見晴らしの湯こまみ", officialUrl: "https://www.sp-koide.org/komami",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "大人（中学生以上）700円、子ども（3歳以上）400円、2歳以下無料", "https://www.sp-koide.org/komami"),
      factNov14("営業時間", "午前10時～午後8時30分（受付は午後8時まで）", "https://www.sp-koide.org/komami"),
      factNov14("定休日", "毎週火曜日（祝日の場合営業）、12月31日", "https://www.sp-koide.org/komami"),
      factNov14("利用条件", "入れ墨の入っている方の入浴は不可", "https://www.sp-koide.org/komami"),
    ],
  },
  {
    ids: ["st-niigata-2087"], name: "五泉市村松さくらんど温泉", officialUrl: "http://sakurand.com/",
    features: ["水風呂あり", "温泉付き"],
    facts: [
      factNov14("料金", "入館料 大人（中学生以上）700円、小学生300円、小学生未満無料。午後5時30分以降の入館は大人500円・小学生200円", "http://sakurand.com/"),
      factNov14("営業時間", "午前10時〜午後9時（入館受付終了 午後8時30分）", "http://sakurand.com/"),
      factNov14("定休日", "毎月第2木曜日（他に臨時休館する場合あり）", "http://sakurand.com/"),
      factNov14("設備", "「さくらの湯」「黄金の湯」の両浴室（男女が月で交替）に源泉風呂・大浴槽・サウナ・水風呂・露天風呂を完備", "https://sakurand.com/bath/"),
      factNov14("水風呂", "あり（温度の記載なし）", "https://sakurand.com/bath/"),
    ],
  },
  {
    ids: ["st-niigata-2143"], name: "上越市上越リゾートセンター くるみ家族園", officialUrl: "https://www.city.joetsu.niigata.jp/soshiki/fukusi/lifeguide-relax-kurumi-1.html",
    features: [],
    facts: [
      factNov14("料金", "一般 500円、小学生・中学生 250円、未就学児は無料", "https://www.city.joetsu.niigata.jp/soshiki/fukusi/lifeguide-relax-kurumi-1.html"),
      factNov14("営業時間", "開園時間 3月1日〜11月30日は午前9時〜午後9時、12月1日〜翌年2月末日は午前9時〜午後8時30分。入浴は午前10時から", "https://www.city.joetsu.niigata.jp/soshiki/fukusi/lifeguide-relax-kurumi-1.html"),
      factNov14("定休日", "火曜日（火曜日が休日のときはその翌日）、12月30日〜1月2日", "https://www.city.joetsu.niigata.jp/soshiki/fukusi/lifeguide-relax-kurumi-1.html"),
      factNov14("設備", "大きなお風呂を中心に、薬湯、サウナ等を完備（サウナ室はリニューアル済み）", "https://www.city.joetsu.niigata.jp/soshiki/fukusi/lifeguide-relax-kurumi-1.html"),
    ],
  },
  {
    ids: ["st-niigata-2128"], name: "神の宮温泉 かわら亭", officialUrl: "http://www.kawaratei.net/",
    features: ["ドライサウナ", "水風呂あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴 大人（中学生以上）1,000円（税込）、小学生 500円（税込）、未就学児 無料", "https://kawaratei.net/hotspring.php"),
      factNov14("営業時間", "日帰り入浴 10:30～15:00（最終受付14:30）", "https://kawaratei.net/hotspring.php"),
      factNov14("設備", "ドライサウナ（80～90℃に設定、利用時間6:00～23:00）、露天風呂・内湯。泉質はナトリウム塩化物温泉", "https://kawaratei.net/hotspring.php"),
      factNov14("水風呂", "夏季は露天風呂の浴槽の一つにメタケイ酸の冷鉱水（水風呂）が用意される（温度の記載なし）", "https://kawaratei.net/hotspring.php"),
      factNov14("利用条件", "日帰り入浴可（宿泊者と同じ入浴施設を利用可能）", "https://kawaratei.net/hotspring.php"),
    ],
  },
  {
    ids: ["st-niigata-2077"], name: "雪国の宿 高半", officialUrl: "http://www.takahan.co.jp/",
    features: ["水風呂あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "期間限定の朝風呂（日帰り入浴）大人2000円、小学生以下1000円（バスタオル・タオル、コーヒー等のサービス付き）", "http://www.takahan.co.jp/"),
      factNov14("営業時間", "朝風呂（日帰り入浴）5:30〜9:30（最終受付 9:00）。実施期間は10月2日〜11月30日までの金・土・日・月曜日", "http://www.takahan.co.jp/"),
      factNov14("設備", "男女各大浴場にサウナと露天風呂あり。源泉かけ流しの単純硫黄温泉（アルカリ性、pH9.6）", "https://www.takahan.co.jp/en/"),
      factNov14("水風呂", "男湯に山の湧水を使った水風呂あり（温度の記載なし）", "https://www.takahan.co.jp/en/"),
      factNov14("利用条件", "日帰り入浴は通常休止しており、期間限定の朝風呂のみ実施。基本は宿泊者向け", "http://www.takahan.co.jp/"),
    ],
  },
  {
    ids: ["st-niigata-2093"], name: "百花の里 城山温泉", officialUrl: "https://www.shiroyama-onsen.com/",
    features: ["温泉付き"],
    facts: [
      factNov14("営業時間", "午前10時～午後9時（入館受付終了 午後8時）", "https://www.shiroyama-onsen.com/"),
      factNov14("定休日", "毎週木曜日（変更となる場合あり）", "https://www.shiroyama-onsen.com/"),
    ],
  },
  {
    ids: ["st-kanagawa-4783"], name: "HUBHUB新百合ヶ丘", officialUrl: "https://hubhub.vacationgo.jp/facilities/shinyurigaoka",
    features: [], status: "closed",
    facts: [
      factNov14("営業状況", "公式ページに、2025年5月31日をもって営業を終了した旨が明記されている", "https://hubhub.vacationgo.jp/facilities/shinyurigaoka"),
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
