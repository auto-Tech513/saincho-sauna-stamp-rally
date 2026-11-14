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
    features: ["水風呂あり", "外気あり", "貸切可"],
    facts: [{ label: "利用条件", value: "一般利用不可（入居テナント専用）。天神住友生命FJビジネスセンター最上階のワーカー専用共用サウナで、SAUNACHELIN 2026の特別賞。一般の訪問・押印の対象には含めない", sourceUrl: "https://tenjinsfbc.jp/reboot/top-floor.php", checkedAt: "2026-11-11" }, { label: "設備", value: "最上階フロアにルーフトップサウナを配置。サウナ・水風呂・炭酸泉・外気浴スペースを完備し、眺望を楽しめるスカイテラス（貸切利用も可能）がある", sourceUrl: "https://tenjinsfbc.jp/reboot/top-floor.php", checkedAt: "2026-11-14" }, { label: "水風呂", value: "水風呂あり（サウナ・炭酸泉・外気浴スペースとともに完備）", sourceUrl: "https://tenjinsfbc.jp/reboot/top-floor.php", checkedAt: "2026-11-14" }],
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
    features: ["個室"],
    facts: [{ label: "営業状況", value: "開業予定（2026年11月16日グランドオープン予定。女性専用・完全個室サウナ。開業までは押印対象外）", sourceUrl: "https://kocoowa.com", checkedAt: "2026-11-14" }, { label: "設備", value: "女性のためのビューティーリトリート施設。全室「横になれるサウナ」設計の完全個室で、好みの温度に調整可能なサウナで120分間過ごせる", sourceUrl: "https://kocoowa.com", checkedAt: "2026-11-14" }],
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
ids: ["sc2025-janu-tokyo"], name: "Janu Tokyo", officialUrl: "https://www.janu.com/janu-tokyo/ja/", address: "〒106-0041 東京都港区麻布台1-2-2", city: "港区",
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
ids: ["st-kanagawa-4"], name: "スカイスパYOKOHAMA", officialUrl: "https://www.skyspa.co.jp/", address: "神奈川県横浜市西区高島2-19-12 スカイビル14F",
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
ids: ["manual-hotel-apa-07"], name: "アパホテル〈大阪谷町四丁目駅前〉", officialUrl: "https://www.apahotel.com/hotel/kansai/osaka/osakatanimachi-4choume/", address: "〒540-0011 大阪府大阪市中央区農人橋1-1-27", city: "大阪市",
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
ids: ["manual-hotel-dormy-22"], name: "天然温泉 白鷺の湯 ドーミーイン姫路", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/himeji/", address: "〒670-0964 兵庫県姫路市豊沢町160-2", city: "姫路市",
features: ["ドライサウナ", "オートロウリュ", "ロウリュあり", "水風呂あり", "温泉付き", "宿泊可"],
facts: [
factNov14("営業時間", "大浴場 15:00〜翌10:00（サウナのみ深夜1:00〜翌5:00は利用休止）", "https://dormy-hotels.com/dormyinn/hotels/himeji/"),
factNov14("設備", "最上階12Fの男女別天然温泉大浴場「白鷺の湯」。高温サウナ（オートロウリュウ）、露天風呂、水風呂あり", "https://dormy-hotels.com/dormyinn/hotels/himeji/"),
factNov14("利用条件", "大浴場は男女別。日帰り入浴の案内は公式ページになし（宿泊者向け施設）", "https://dormy-hotels.com/dormyinn/hotels/himeji/"),
],
},
{
ids: ["manual-nara-ume-sauna"], name: "ume,sauna", officialUrl: "https://www.ume-yamazoe.com/sauna", address: "〒630-2356 奈良県山辺郡山添村片平452", city: "山辺郡山添村",
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
  {
    ids: ["st-niigata-203"], name: "弥彦温泉 さくらの湯", officialUrl: "http://www.hotel-juraku.co.jp/sakura/index.htm",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "平日 昼間1,100円、平日夜間割引（17時～21時15分入館）650円。夕飯付入館セット1,500円（毎週金曜17:00～）", "http://www.hotel-juraku.co.jp/sakura/index.htm"),
      factNov14("定休日", "毎週火曜日。ただし2026年12月1日より定休日なし（年に数回、館内設備点検のため休館日あり）", "http://www.hotel-juraku.co.jp/sakura/index.htm"),
      factNov14("設備", "天然温泉100%。大露天風呂・壷湯・寝湯・腰掛湯・サウナ、岩盤浴（5種類の岩盤・計26床）、足湯", "http://www.hotel-juraku.co.jp/sakura/index.htm"),
      factNov14("利用条件", "泥酔の方、イレズミ及びタトゥーのある方の入館不可。小学生以上の混浴不可", "http://www.hotel-juraku.co.jp/sakura/index.htm"),
    ],
  },
  {
    ids: ["st-toyama-4768"], name: "SAUNA CNOC", officialUrl: "https://saunacnoc.com/",
    features: ["水風呂あり", "貸切可", "サ飯あり"],
    facts: [
      factNov14("料金", "一般利用 金曜日1,790円、土日祝1,990円。貸切（6名迄）金曜日11,980円、土日祝13,980円。7名以降+2,000円/人、最大12名迄", "https://saunacnoc.com/"),
      factNov14("営業時間", "通常枠（完全予約制・135分）①9:45〜12:00 ②13:00〜15:15 ③16:00〜18:15 ④19:00〜21:15。予約不要DAYは時間無制限", "https://saunacnoc.com/"),
      factNov14("定休日", "月〜木（定休日も貸切予約は受付可）", "https://saunacnoc.com/"),
      factNov14("水風呂", "地下水を使った水風呂", "https://saunacnoc.com/"),
      factNov14("利用条件", "原則男性専用（レディースデイ不定期開催）。貸切利用なら男女利用可。水着着用必須。料金にタオルセット含む", "https://saunacnoc.com/"),
    ],
  },
  {
    ids: ["st-toyama-125"], name: "おまき温泉スパガーデン和園", status: "suspended", officialUrl: "https://facebook.com/omakinonzen.waen/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "10:00～21:00（レストラン営業11:00～20:00）", "https://facebook.com/omakinonzen.waen/"),
      factNov14("定休日", "毎週水曜日", "https://facebook.com/omakinonzen.waen/"),
      { label: "営業状況", value: "2022年2月より休業中（Wikipedia「庄川温泉郷」）。旧公式ページ（sakura.ne.jp）は消滅し、公式の近況はFacebookページで発信", sourceUrl: "https://ja.wikipedia.org/wiki/%E5%BA%84%E5%B7%9D%E6%B8%A9%E6%B3%89%E9%83%B7", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["st-toyama-4334"], name: "グリーンパーク吉峰ゆ～ランド", officialUrl: "https://www.yoshimine.or.jp/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("営業時間", "午前10時～午後9時（受付は午後8時30分で終了）", "https://www.yoshimine.or.jp/?page_id=37"),
      factNov14("定休日", "毎週火曜日・その他メンテナンス休業有", "https://www.yoshimine.or.jp/?page_id=37"),
      factNov14("設備", "サウナやハーブ湯、天然石の露天風呂を含む4種類のお風呂。休憩室・お食事処併設", "https://www.yoshimine.or.jp/?page_id=37"),
    ],
  },
  {
    ids: ["st-toyama-287"], name: "スパ・アルプス", officialUrl: "http://www.sauna-alps.com/",
    features: ["水風呂あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "通常入館（4:00～翌1:00）一般2,100円/会員1,500円。3時間コース（4:00～21:00）一般1,500円/会員1,100円。子供（3歳～小学生）1,000円。土日祝は+100円", "http://www.sauna-alps.com/"),
      factNov14("営業時間", "24時間営業（チェックイン4:00～、チェックアウト～11:00）", "http://www.sauna-alps.com/"),
      factNov14("設備", "大浴場・ロッキーサウナ、天然水水風呂、うたせ湯、ジェット風呂、食事処、カプセルホテル", "http://www.sauna-alps.com/"),
      factNov14("水風呂", "天然水の水風呂（「青の洞窟」）", "http://www.sauna-alps.com/"),
      factNov14("利用条件", "未成年の方は保護者同伴。7歳以上のお子様の混浴不可（富山市公衆浴場法施行条例）", "http://www.sauna-alps.com/"),
    ],
  },
  {
    ids: ["st-toyama-329"], name: "ゆ～ゆうランド・花椿", officialUrl: "https://yu-yuuland.com/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "大人700円、小人（小・中学生）300円（税込）", "https://yu-yuuland.com/guide.html"),
      factNov14("営業時間", "10:00～21:00（入館は20:30まで）", "https://yu-yuuland.com/"),
      factNov14("定休日", "毎週水曜日・年末年始（祝日の場合はその翌日）", "https://yu-yuuland.com/"),
      factNov14("設備", "アロマテラピー効果抜群のサウナを備えた内風呂、総ヒノキ造りの露天風呂、お食事処", "https://yu-yuuland.com/"),
    ],
  },
  {
    ids: ["st-toyama-3345"], name: "らくち～の", officialUrl: "https://rakuchi-no.com/",
    features: ["タオルレンタルあり", "サ飯あり"],
    facts: [
      factNov14("料金", "お風呂 大人750円・小人450円、プール 大人550円・小人330円、全館 大人1,300円・小人780円。タオルレンタル1枚50円、バスタオル1枚100円", "https://rakuchi-no.com/"),
      factNov14("営業時間", "お風呂10:00～22:00、プール10:00～21:30、お食事11:00～21:00（L.O20:30）。日曜日は全館21:00閉館", "https://rakuchi-no.com/"),
      factNov14("定休日", "休館日は公式サイト上で日付を告知（月ごとに変動）", "https://rakuchi-no.com/"),
      factNov14("設備", "大浴場、サウナ、温水プール、フィットネスジム、岩盤温浴、食事処", "https://rakuchi-no.com/"),
      factNov14("利用条件", "刺青（Tattoo含む）の方、泥酔の方、感染症の方などの入館不可", "https://rakuchi-no.com/"),
    ],
  },
  {
    ids: ["st-toyama-292"], name: "金太郎温泉 カルナの館", officialUrl: "https://www.kintarouonsen.co.jp/karuna/",
    features: ["温泉付き", "貸切可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入館料 1日コース 大人1,300円・小人650円、3時間コース 大人1,100円・小人550円。貸切風呂（60分）1,800円", "https://kintarouonsen.co.jp/karuna/guide.php"),
      factNov14("営業時間", "午前8:30～午後11:30（最終受付 午後11:00）", "https://kintarouonsen.co.jp/karuna/guide.php"),
      factNov14("定休日", "年中無休", "https://kintarouonsen.co.jp/karuna/guide.php"),
      factNov14("設備", "高温サウナ、貸切風呂（4ルーム）、庭園大露天風呂、立山連峰パノラマ大浴殿、寝湯、打たせ湯など", "https://www.kintarouonsen.co.jp/karuna/"),
      factNov14("利用条件", "日帰り温泉施設。フェイスタオル1本110円、バスタオル1本220円、館内着貸出1セット110円", "https://kintarouonsen.co.jp/karuna/guide.php"),
    ],
  },
  {
    ids: ["st-toyama-288"], name: "高原鉱泉", officialUrl: "http://takaharakousen.com/",
    features: [],
    facts: [
      factNov14("料金", "入浴料 大人500円／中学生300円／小学生180円／未就学児100円", "http://takaharakousen.com/"),
      factNov14("営業時間", "火〜土 14:00〜24:00／日曜 8:00〜24:00", "http://takaharakousen.com/"),
      factNov14("定休日", "月曜（祝日も休み）", "http://takaharakousen.com/"),
      factNov14("設備", "地下80mから汲み上げたミネラルたっぷりの天然水を昔ながらの「薪釜」で沸かす、昭和32年創業の老舗銭湯", "http://takaharakousen.com/"),
    ],
  },
  {
    ids: ["st-toyama-4574"], name: "桜ヶ池クアガーデン", officialUrl: "https://sakuragaike.co.jp/",
    features: ["ドライサウナ", "温泉付き", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り 大人（中学生以上）1,650円、小学生1,200円、幼児（4歳～6歳）600円（桜ヶ池温泉含む）。宿泊者は無料（一部プランは別途600円）", "https://sakuragaike.co.jp/naturalspa/pool-sauna/"),
      factNov14("営業時間", "9:00～21:00（最終入場20:30）。清掃のため12:00～13:30は利用不可（土日祝のぞく）", "https://sakuragaike.co.jp/naturalspa/pool-sauna/"),
      factNov14("設備", "温泉ジェットプール（13種類のジェット水流アトラクション）、ドライサウナ、ハマム、桜ヶ池温泉", "https://sakuragaike.co.jp/naturalspa/pool-sauna/"),
      factNov14("利用条件", "日帰り利用可。お子様は4才以上から入場可（保護者同伴）。水着・バスタオルは持参（レンタル・販売あり）", "https://sakuragaike.co.jp/naturalspa/pool-sauna/"),
    ],
  },
  {
    ids: ["st-toyama-37"], name: "川合田温泉", officialUrl: "https://kawaidaonsen.jp/",
    features: ["ドライサウナ", "水風呂あり", "温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "日帰り昼食プラン4,400円（税込）～、夕食プラン5,500円（税込）～。宿泊1泊2食付き14,300円（税込）～", "https://kawaidaonsen.jp/about.html"),
      factNov14("営業時間", "サウナ利用時間 10:00〜22:30", "https://kawaidaonsen.jp/about.html"),
      factNov14("設備", "フィンランド式ドライサウナ／約100℃。男女別サウナ・浴室・水風呂・休憩室", "https://kawaidaonsen.jp/about.html"),
      factNov14("水風呂", "天然水を使用した水風呂", "https://kawaidaonsen.jp/about.html"),
      factNov14("利用条件", "日帰りプラン（食事付き）あり。宿泊には別途入湯税150円（中学生以上）", "https://kawaidaonsen.jp/about.html"),
    ],
  },
  {
    ids: ["st-toyama-2159"], name: "八尾ゆめの森ゆうゆう館", officialUrl: "https://www.uu-kan.com/",
    features: ["温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("設備", "広々とした浴場に泡風呂、サウナ、露天風呂あり", "https://uu-kan.com/"),
      factNov14("利用条件", "日帰り利用可（日帰りでも食事・温泉を利用可能）", "https://uu-kan.com/"),
    ],
  },
  {
    ids: ["st-ishikawa-453"], name: "アパホテル〈小松グランド〉", officialUrl: "https://www.apahotel.com/hotel/hokuriku/13_komatsugrand/",
    features: ["オートロウリュ", "セルフロウリュ", "ロウリュあり", "個室", "水風呂あり", "外気あり", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "大浴殿は宿泊者無料。日帰り入浴プラン（最大3時間）タオル貸出あり1,500円／タオル貸出なし1,200円、石川県民割1,000円", "https://www.apahotel.com/hotel/hokuriku/13_komatsugrand/"),
      factNov14("営業時間", "大浴殿 6：00～25：00（日帰り外来の最終受付 24：00）", "https://www.apahotel.com/hotel/hokuriku/13_komatsugrand/"),
      factNov14("設備", "Spa & Sauna「頂 -Itadaki-」：オートロウリュの大型サウナ室、セルフロウリュ可能な個室型サウナ、内風呂・露天風呂、外気浴・内気浴スペース", "https://www.apahotel.com/hotel/hokuriku/13_komatsugrand/"),
      factNov14("水風呂", "氷水の滝のある水風呂（男性のみ深さ90cmの大型水風呂）", "https://www.apahotel.com/hotel/hokuriku/13_komatsugrand/"),
      factNov14("利用条件", "日帰り入浴可（6プラン）。日帰り利用時は駐車場を3時間まで無料で利用可", "https://www.apahotel.com/hotel/hokuriku/13_komatsugrand/"),
    ],
  },
  {
    ids: ["st-ishikawa-2184"], name: "エキスパ(アパホテル〈金沢駅前〉)", officialUrl: "https://www3.apahotel.com/es/hotel/hokuriku/ishikawa/kanazawa-ekimae/",
    features: ["宿泊可"],
    facts: [
      factNov14("料金", "大浴場は宿泊者無料。宿泊者以外は1,500円（3時間）", "https://www3.apahotel.com/es/hotel/hokuriku/ishikawa/kanazawa-ekimae/"),
      factNov14("営業時間", "大浴場 6:00～翌1:00", "https://www3.apahotel.com/es/hotel/hokuriku/ishikawa/kanazawa-ekimae/"),
      factNov14("設備", "2F「アパ スパ金沢駅前」に大浴場・露天風呂・サウナを完備", "https://www3.apahotel.com/es/hotel/hokuriku/ishikawa/kanazawa-ekimae/"),
      factNov14("利用条件", "日帰り入浴可（宿泊者以外も1,500円/3時間で利用可）", "https://www3.apahotel.com/es/hotel/hokuriku/ishikawa/kanazawa-ekimae/"),
    ],
  },
  {
    ids: ["st-ishikawa-2193"], name: "オータム天然温泉しあわせの湯", officialUrl: "http://shiawasenoyu.co.jp/index.html",
    features: ["温泉付き", "貸切可", "水風呂あり", "サ飯あり"],
    facts: [
      factNov14("料金", "大浴場 大人780円、子供（小学生）300円、幼児（3歳〜）100円。源泉貸切風呂 60分2,780円／90分3,880円", "https://shiawasenoyu.co.jp/eigyou.html"),
      factNov14("営業時間", "大浴場 平日・土曜日10:00～深夜0:00、日・祝日9:00～深夜0:00（最終受付23:20）", "https://shiawasenoyu.co.jp/eigyou.html"),
      factNov14("定休日", "毎月第3木曜日（変更の場合あり）", "https://shiawasenoyu.co.jp/eigyou.html"),
      factNov14("設備", "黄土サウナ（高温）、冷凍サウナ、水風呂、源泉掛け流し露天風呂、貸切風呂（家族風呂）全6室", "https://shiawasenoyu.co.jp/ofuro.html"),
      factNov14("水風呂", "水風呂あり（サウナと併せて利用）", "https://shiawasenoyu.co.jp/ofuro.html"),
      factNov14("利用条件", "入墨（タトゥー）及び泥酔の方の入場は固くお断り", "https://shiawasenoyu.co.jp/eigyou.html"),
    ],
  },
  {
    ids: ["st-ishikawa-17"], name: "ドーミーイン金沢 加賀の湧泉", officialUrl: "https://www.hotespa.net/hotels/kanazawa/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "最上階14Fに男女別の天然温泉大浴場「加賀の湧泉」がある", "https://www.hotespa.net/hotels/kanazawa/"),
    ],
  },
  {
    ids: ["st-ishikawa-2190"], name: "ひょっこり温泉 島の湯", officialUrl: "http://user.notojima.jp/shimanoyu/top.html",
    features: ["温泉付き", "貸切可"],
    facts: [
      factNov14("利用条件", "貸切の家族風呂あり（予約不可。入浴料のほかに部屋代が必要）", "http://user.notojima.jp/shimanoyu/top.html"),
      factNov14("営業状況", "公式の休湯日のお知らせによれば、11月9日から当面の間休業中（11月下旬に再開予定）", "http://user.notojima.jp/shimanoyu/top.html"),
    ],
  },
  {
    ids: ["st-ishikawa-2240"], name: "ホテルアローレ", officialUrl: "https://www.arrowle.co.jp/",
    features: ["温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "日帰りプラン「アクティビティパスポート」大人2,000円（土日祝2,200円）。天然温泉大浴場などが1日利用でき1ドリンク付き", "https://www.arrowle.co.jp/"),
      factNov14("設備", "天然温泉大浴場・サウナあり（プール＆スパの冬期休業期間中も通常どおり利用可）", "https://www.arrowle.co.jp/"),
      factNov14("利用条件", "日帰り利用可（日帰りプラン「アクティビティパスポート」）", "https://www.arrowle.co.jp/"),
    ],
  },
  {
    ids: ["st-ishikawa-2236"], name: "ホテルウェルネス能登路", officialUrl: "https://hmihotelgroup.com/hotelwellness-notoji/",
    features: ["温泉付き", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り入浴料 大人550円（税込）、小学生300円（税込）、幼児・乳児は無料", "https://hmihotelgroup.com/hotelwellness-notoji/higaeri/index.html"),
      factNov14("営業時間", "日帰り入浴 11:00～21:00（最終受付20:30）。金曜日のみ15:00～21:00", "https://hmihotelgroup.com/hotelwellness-notoji/higaeri/index.html"),
      factNov14("定休日", "なし（日帰り入浴）", "https://hmihotelgroup.com/hotelwellness-notoji/higaeri/index.html"),
      factNov14("設備", "源泉かけ流しの天然温泉（泉質はナトリウム塩化物炭酸水素塩泉）。大浴場・露天風呂・サウナあり", "https://hmihotelgroup.com/hotelwellness-notoji/higaeri/index.html"),
      factNov14("利用条件", "日帰り入浴可。貸しバスタオル260円、フェイスタオル110円。支払いは現金のみ（クレジットカード利用不可）", "https://hmihotelgroup.com/hotelwellness-notoji/higaeri/index.html"),
    ],
  },
  {
    ids: ["st-ishikawa-2212"], name: "ユーフォリア千里浜", officialUrl: "http://www.hakui.ne.jp/euphoria/",
    features: ["ドライサウナ", "水風呂あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "浴場 一般 大人（中学生以上）550円、こども（小学生以下）200円。3歳未満は無料。浴場・プールセットは大人900円、こども350円", "http://www.hakui.ne.jp/euphoria/"),
      factNov14("営業時間", "温泉 9:30〜21:30（入館受付は21:00まで）", "http://www.hakui.ne.jp/euphoria/"),
      factNov14("定休日", "毎週水曜日、1月1日、1月2日。その他、臨時休館となる場合あり", "http://www.hakui.ne.jp/euphoria/"),
      factNov14("設備", "ドライサウナ（男性浴場は約96～98度、女性浴場は約90～94度）。源泉は千里浜温泉（ナトリウム塩化物泉）で露天風呂・寝湯・気泡湯あり。25mプール併設", "http://www.hakui.ne.jp/euphoria/"),
      factNov14("水風呂", "約22度", "http://www.hakui.ne.jp/euphoria/"),
    ],
  },
  {
    ids: ["st-ishikawa-4707"], name: "一里野高原ホテルろあん", officialUrl: "https://ichirino.jp/",
    features: ["温泉付き", "貸切可", "宿泊可"],
    facts: [
      factNov14("設備", "すべて源泉かけ流しの天然温泉。内湯・露天風呂のほか貸切風呂が2種類（総檜の内湯と露天の岩風呂）あり、サウナや岩盤浴も用意されている", "https://ichirino.jp/"),
      factNov14("利用条件", "日帰りプランあり", "https://ichirino.jp/"),
    ],
  },
  {
    ids: ["st-ishikawa-4770"], name: "吉田屋山王閣", officialUrl: "https://www.sannoukaku.com/",
    features: ["温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("設備", "2023年に2種類のサウナルームがオープン。3階「森の泉」はひのきを使用した明るい空間、1階「無限の命」は静かに過ごせる空間。大浴場は1階と3階にある", "https://www.sannoukaku.com/"),
    ],
  },
  {
    ids: ["st-ishikawa-2189"], name: "金城温泉元湯", officialUrl: "http://kinjo-onsen.jp/index.html",
    features: ["熱波師あり", "ロウリュあり", "水風呂あり", "温泉付き", "貸切可", "タオルレンタルあり"],
    facts: [
      factNov14("設備", "源泉100%かけ流しの温泉銭湯。サウナではアウフグースイベントを定期開催（第2・第4土曜の「金城あうふぐーす」、毎週月曜の「まんでマンデー」、日曜朝の熱波イベントなど）", "http://kinjo-onsen.jp/index.html"),
      factNov14("利用条件", "家族風呂（貸切風呂）が全14部屋あり、うち9部屋は予約可能。浴室にシャンプー・ボディーソープの備え付けはなく、持参するかフロントで購入する", "http://kinjo-onsen.jp/index.html"),
    ],
  },
  {
    ids: ["st-ishikawa-152"], name: "金沢ゆめのゆ", officialUrl: "http://www.yumenoyu.net/",
    features: ["温泉付き", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "基本入館料 平日 一般1,000円・会員800円・4歳〜12歳400円、土日祝 一般1,100円・会員1,000円・4歳〜12歳500円。深夜1時以降の滞在は深夜料金（平日1,200円／土日祝1,500円）加算", "https://yumenoyu.net/kanazawa/"),
      factNov14("営業時間", "24時間営業（基本入館は朝5時〜深夜1時）", "https://yumenoyu.net/kanazawa/"),
      factNov14("定休日", "年中無休", "https://yumenoyu.net/kanazawa/"),
      factNov14("利用条件", "入館料に貸タオル・貸バスタオル・貸館内着、ボディーソープ、シャンプー、リンス、歯ブラシ、ひげそり付き", "https://yumenoyu.net/kanazawa/"),
    ],
  },
  {
    ids: ["st-ishikawa-2210"], name: "大江戸温泉物語 ながやま", officialUrl: "https://home.kingsoft.jp/news/life/prenew_life/620318.html",
    features: ["温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "日帰りエンタメ満喫プラン（入浴＋ディナーバイキング＋無料アクティビティ）平日 大人5,100円／小学生3,600円／幼児1,500円、土日祝 大人6,100円／小学生4,300円／幼児1,800円、繁忙日 大人8,800円（消費税込・入湯税別）", "https://home.kingsoft.jp/news/life/prenew_life/620318.html"),
      factNov14("営業時間", "日帰りプランの入浴は15:00～24:00（最終受付22:00）、食事（バイキング）は17:00～21:30", "https://home.kingsoft.jp/news/life/prenew_life/620318.html"),
      factNov14("設備", "大浴場、露天風呂、サウナ、足湯のほか、スポーツパークやゲームセンター、カラオケなど10の無料アクティビティを用意", "https://home.kingsoft.jp/news/life/prenew_life/620318.html"),
      factNov14("利用条件", "日帰りプランは要事前予約。16歳未満のみでの予約・利用は不可（保護者同伴が必要）。同プランではプール利用不可", "https://home.kingsoft.jp/news/life/prenew_life/620318.html"),
    ],
  },
  {
    ids: ["st-ishikawa-2243"], name: "辰口温泉 総湯 里山の湯", officialUrl: "https://www.city.nomi.ishikawa.jp/www/contents/1001000000790/index.html",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "入浴料金 大人（中学生以上）520円、小人（3歳から小学生）100円、3歳未満無料。回数券（11回分）大人5,230円、年間利用券 大人31,420円（能美市在住の方のみ）", "https://www.city.nomi.ishikawa.jp/www/contents/1001000000790/index.html"),
      factNov14("営業時間", "午前10時から午後10時まで（最終入館時間は午後9時30分）", "https://www.city.nomi.ishikawa.jp/www/contents/1001000000790/index.html"),
      factNov14("定休日", "毎月第2水曜日と第4水曜日（その日が祝日の場合は翌日が定休日）", "https://www.city.nomi.ishikawa.jp/www/contents/1001000000790/index.html"),
      factNov14("設備", "浴室（内湯・サウナ・露天風呂）、畳サロン、ホール、ラウンジ、パウダーコーナー。泉質はナトリウム‐硫酸塩・塩化物泉（低張性弱アルカリ性温泉）", "https://www.city.nomi.ishikawa.jp/www/contents/1001000000790/index.html"),
    ],
  },
  {
    ids: ["st-ishikawa-2183"], name: "天然温泉 湯来楽 内灘店", officialUrl: "https://yurara-uchinada.jp/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "温泉付き"],
    facts: [
      factNov14("料金", "入浴料金 大人（会員）800円、大人（一般）920円、子供300円", "https://yurara-uchinada.jp/"),
      factNov14("営業時間", "10:00～23:30（最終受付22:30）", "https://yurara-uchinada.jp/"),
      factNov14("定休日", "休館日は6月、11月にそれぞれ2日間", "https://yurara-uchinada.jp/"),
      factNov14("設備", "サウナはシアタースタイルの「熱気風呂」と薬草の蒸気風呂「漢方蒸気風呂」。炭酸泉、壺風呂、ジェット風呂など多種のお湯と、北陸最大級の岩盤浴（5種類の部屋）", "https://yurara-uchinada.jp/spa/"),
      factNov14("水風呂", "サウナの後に浸かる水風呂あり（温度の記載なし）", "https://yurara-uchinada.jp/spa/"),
    ],
  },
  {
    ids: ["st-ishikawa-2211"], name: "展望温泉ほのぼの湯", officialUrl: "http://www.town.uchinada.lg.jp/webapps/www/info/detail.jsp?id=12320",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "利用料金 中学生以上500円、小学生200円、小学生未満無料（町内在住の65歳以上などは「利用証」の提示で割引・免除あり）", "http://www.town.uchinada.lg.jp/webapps/www/info/detail.jsp?id=12320"),
      factNov14("営業時間", "午前10時～午後9時30分（最終受付は午後9時）", "http://www.town.uchinada.lg.jp/webapps/www/info/detail.jsp?id=12320"),
      factNov14("定休日", "毎月第一火曜日、12月31日、1月1日", "http://www.town.uchinada.lg.jp/webapps/www/info/detail.jsp?id=12320"),
    ],
  },
  {
    ids: ["st-ishikawa-4480"], name: "比咩の湯", officialUrl: "https://www.himenoyu.jp/#",
    features: ["温泉付き", "貸切可"],
    facts: [
      factNov14("料金", "入浴料金 大人（中学生以上）600円、小人（5歳以上）300円、幼児（4歳以下）無料。貸切風呂は一回45分1,300円（別途、人数分の入浴料金が必要）", "https://himenoyu.jp/"),
      factNov14("営業時間", "お風呂（大浴場、貸切風呂）11:30～20:00（入館は19:30まで）", "https://himenoyu.jp/"),
      factNov14("定休日", "木曜日", "https://himenoyu.jp/"),
      factNov14("設備", "貸切風呂「せせらぎの蔵」はサウナ付き。大浴場（山の湯、川の湯）は日替わり。泉質はナトリウム・カルシウム－硫酸塩・塩化物温泉で源泉温度56.2度", "https://himenoyu.jp/"),
    ],
  },
  {
    ids: ["st-ishikawa-4456"], name: "満天の湯 白山インター店", officialUrl: "http://www.manten-yu.co.jp/hakusan/",
    features: [],
    facts: [
      factNov14("料金", "入浴料金 大人（中学生以上）朝風呂（〜10時）700円／一般850円／会員780円、中人（小学生）朝風呂300円／一般380円／会員350円、小人（5才以下）100円（会員は無料）", "https://www.manten-yu.co.jp/hakusan"),
      factNov14("営業時間", "6:00～23:00（最終受付22:30）", "https://www.manten-yu.co.jp/hakusan"),
      factNov14("定休日", "年中無休", "https://www.manten-yu.co.jp/hakusan"),
    ],
  },
  {
    ids: ["st-fukui-490"], name: "コミュニティリゾート リライム", officialUrl: "https://kaihotsunoyu.jp/",
    features: ["温泉付き", "男女共用", "熱波師あり", "水風呂あり", "外気あり", "宿泊可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入館料は90分制とフリータイム制。フリータイム 大人（中学生以上）平日 一般1,480円・会員1,380円、土日祝 一般1,680円・会員1,580円。サウナガーデンMoiは別途施設利用料（大人 平日 一般400円／土日祝 一般600円）", "https://kaihotsunoyu.jp/wp-content/themes/teaser/images/ryokin.pdf"),
      factNov14("営業時間", "24時間営業（天然温泉は6:00～25:00、サウナガーデンMoiは平日13:00～23:00／土日祝10:00～23:00）", "https://kaihotsunoyu.jp/"),
      factNov14("設備", "男女共用のサウナガーデンMoiに3つの異なるサウナと潜水可能な巨大水風呂。約40人収容のスタジアムサウナでは熱波師によるアウフグースイベントを実施。天然温泉「夢創湯」は地下1300mからのアルカリ性単純温泉", "https://kaihotsunoyu.jp/facility/"),
      factNov14("水風呂", "サウナガーデンMoiに2つの深さを持つ水風呂があり、潜水も可能", "https://kaihotsunoyu.jp/facility/"),
      factNov14("利用条件", "入墨・タトゥのある方は入館不可（当館専用カバーシールで完全に覆える場合のみ可）。中学生未満のみの利用は不可。併設ホテルでの宿泊も可", "https://kaihotsunoyu.jp/"),
    ],
  },
  {
    ids: ["st-fukui-4533"], name: "ホテル リバージュ アケボノ", officialUrl: "http://www.riverge.com/",
    features: ["ドライサウナ", "宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場・サウナのご利用時間 5:00～10:30、15:00～25:00（朝晩で男女浴室が入れ替わります）", "http://riverge.com/hotspa/"),
      factNov14("設備", "最上階の天空大浴場「曙覧」に遠赤外線サウナ（ドライサウナ）を完備。大浴場・小浴場の泉質は人工温泉ヘルストンとスーパーイオン水", "http://riverge.com/hotspa/"),
    ],
  },
  {
    ids: ["st-yamanashi-4738"], name: "88PEAKS", officialUrl: "https://88peaks.com/",
    features: ["薪サウナ", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "貸切可", "男女共用", "宿泊可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "プライベートサウナ貸切 1名様¥11,000／2名様¥7,150／3名様¥6,050／4〜8名様¥5,500。セルフロウリュ・バスタオル・ガウンセット付き", "https://88peaks.com/pricelist/"),
      factNov14("営業時間", "OPEN 10:00〜24:00（完全予約制）", "https://88peaks.com/"),
      factNov14("定休日", "水曜定休", "https://88peaks.com/"),
      factNov14("設備", "清里の森にある完全貸切サウナ。サウナロッジ・デッキ・シャワールーム・天然水の水風呂・ガーデンを1組で貸切利用できる", "https://88peaks.com/"),
      factNov14("水風呂", "八ヶ岳の天然水を使った水風呂（貸切エリア内）", "https://88peaks.com/pricelist/"),
      factNov14("利用条件", "完全予約制で最大8名まで。水着・Tシャツなど着用で男女一緒に利用可能。18歳以下の利用は不可（公式FAQ）", "https://88peaks.com/pricelist/"),
    ],
  },
  {
    ids: ["st-yamanashi-4732"], name: "FujiSauna", officialUrl: "https://fujisauna.com/",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "個室", "貸切可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "平日 1〜3名16,500円（4名様以上の場合 +3,300円/1名）、土・日曜日・祝日 1〜3名19,800円（+4,400円/1名）。税込、タオル・サウナマット込", "https://fujisauna.com/"),
      factNov14("営業時間", "2時間30分制の時間枠で営業。tuuli 10:00〜/13:00〜/16:00〜/19:00〜開始、taivas 11:00〜/14:00〜/17:00〜/20:00〜開始（冬季は最終枠休み）", "https://fujisauna.com/"),
      factNov14("設備", "HARVIA製大型サウナヒーター「LEGEND15」を導入しセルフロウリュが可能。一棟貸しのプライベートサウナ（tuuli・taivasの2棟）", "https://fujisauna.com/"),
      factNov14("水風呂", "富士山の天然水を使用した水風呂。夏は18度前後、冬は8度前後と季節で変化。飲用も可能", "https://fujisauna.com/"),
      factNov14("利用条件", "一棟貸しの完全プライベートサウナ。定員6名。事前オンライン決済、水着持参（水着レンタル1着1,100円あり）", "https://fujisauna.com/"),
    ],
  },
  {
    ids: ["st-yamanashi-2428"], name: "スパティオ小淵沢 延命の湯", officialUrl: "http://www.spatio.jp/hotspring/index.html",
    features: ["温泉付き", "水風呂あり", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴料金（税込） 市外：大人830円・小学生420円・幼児（6歳未満）無料／市民：大人460円・小学生210円・幼児（6歳未満）無料", "http://spatio.jp/hotspring/"),
      factNov14("営業時間", "10:00～22:00（受付終了 21:30）", "http://spatio.jp/hotspring/"),
      factNov14("定休日", "休館日は公式サイトの「営業日カレンダー」に掲載", "http://spatio.jp/hotspring/"),
      factNov14("設備", "大浴場、露天風呂、岩風呂、サウナ、水風呂（地下水利用）を完備。泉質はナトリウム―塩化物・炭酸水素塩・硫酸塩泉（源泉45.8℃）の高濃度天然ミネラル温泉", "http://spatio.jp/hotspring/"),
      factNov14("水風呂", "水風呂あり（地下水利用）", "http://spatio.jp/hotspring/"),
      factNov14("利用条件", "日帰り温泉施設。タオル等は各自で持参（受付にて販売もしている）", "http://spatio.jp/hotspring/"),
    ],
  },
  {
    ids: ["st-yamanashi-4486"], name: "玉川キャンプ村 ※テントサウナ利用時のみ", officialUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdfso6aP-n6P1Kn-Py4RQ7VPIcJBtgDqIzw9F8s9zQeAxer0g/viewform?usp=send_form",
    features: ["薪サウナ", "貸切可"],
    facts: [
      factNov14("料金", "テントサウナ利用料金 15,000円（税込）。テントサウナ・サウナストーブ・薪・ベンチ・温度計のセットで、設営・撤去付き", "https://docs.google.com/forms/d/e/1FAIpQLSdfso6aP-n6P1Kn-Py4RQ7VPIcJBtgDqIzw9F8s9zQeAxer0g/viewform?usp=send_form"),
      factNov14("利用条件", "ご利用時間は2時間制。1つのレンタルで8名様まで利用可能（一度に入れるのは最大4名まで）。水着・バスタオル等は持参。飲酒しながらの利用は不可", "https://docs.google.com/forms/d/e/1FAIpQLSdfso6aP-n6P1Kn-Py4RQ7VPIcJBtgDqIzw9F8s9zQeAxer0g/viewform?usp=send_form"),
    ],
  },
  {
    ids: ["st-yamanashi-425"], name: "桜庵", officialUrl: "http://sakuraan.net/index.html",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "塩サウナ", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("設備", "バレルサウナ、溶岩サウナ（セルフロウリュのドライサウナ・男性のみ）、竹炭サウナ（女性のみ）、スチーム塩サウナ（女性のみ）、塩もみサウナ（男性のみ）、炭酸泉、岩盤浴", "https://sakuraan.net/daytrip/"),
      factNov14("水風呂", "富士源水浴（サウナ後の冷水浴）", "https://sakuraan.net/daytrip/"),
      factNov14("料金", "早朝風呂は朝8:00にご入館（最終受付9:30）で入館料¥500引きとなり、12:00まで利用できる", "https://sakuraan.net/daytrip/"),
      factNov14("利用条件", "日帰り温浴・サウナの利用が可能（スパ＆ホテルのため宿泊も可）", "https://sakuraan.net/daytrip/"),
    ],
  },
  {
    ids: ["st-yamanashi-4411"], name: "山梨泊まれる温泉 より道の湯", officialUrl: "http://yorimichinoyu.jp/",
    features: ["ロウリュあり", "熱波師あり", "温泉付き", "外気あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("営業時間", "10：00〜23：00（最終受付22：00）", "http://yorimichinoyu.jp/"),
      factNov14("設備", "遠赤外線サウナ（男性サウナでは定期的にロウリュ熱波を実施）、3種類の岩盤浴（外気浴のできるテラス付き）、ナトリウム・カルシウム・硫酸塩泉の温泉", "http://yorimichinoyu.jp/"),
      factNov14("利用条件", "日帰り入浴が可能。宿泊施設も併設している", "http://yorimichinoyu.jp/"),
    ],
  },
  {
    ids: ["st-yamanashi-2408"], name: "秋山温泉", officialUrl: "http://www.akiyamaonsen.com/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "ロウリュあり", "熱波師あり", "温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "お風呂・プール利用料（1日）大人 通常期1,000円／繁忙期1,200円（上野原市民700円）、17時以降600円。小人 通常期800円／繁忙期1,000円。未就学児無料", "https://www.akiyamaonsen.com/about/"),
      factNov14("営業時間", "温泉＆サウナ 10:00～21:00（最終受付20:30）", "https://www.akiyamaonsen.com/about/"),
      factNov14("定休日", "毎週月曜日（祝日の場合は温泉・プールのみ営業）", "https://www.akiyamaonsen.com/about/"),
      factNov14("設備", "男性はスチームサウナ、女性はドライサウナ。屋外テントサウナでアウフグースを実施。源泉かけ流し温泉、露天風呂、温泉水プールあり", "https://www.akiyamaonsen.com/facility/"),
      factNov14("利用条件", "支払いは現金のみ（クレジットカード・電子マネー不可）。タオルセットレンタル300円", "https://www.akiyamaonsen.com/about/"),
    ],
  },
  {
    ids: ["st-yamanashi-2415"], name: "正徳寺温泉初花", officialUrl: "http://www.hatsuhana.info/index.html",
    features: ["温泉付き", "水風呂あり", "サ飯あり"],
    facts: [
      factNov14("営業時間", "午前10時〜午後9時", "http://www.hatsuhana.info/index.html"),
      factNov14("定休日", "木曜定休日（木曜日が休日の場合、前後日どちらかが振替定休日）", "http://www.hatsuhana.info/index.html"),
      factNov14("設備", "源泉掛け流しの露天風呂など9種の湯。野外サウナ、蒸し蔵風呂、うたせ湯など。お食事処あり", "http://www.hatsuhana.info/index.html"),
      factNov14("水風呂", "水風呂（25℃）と冷水樽風呂（17℃）", "http://www.hatsuhana.info/index.html"),
    ],
  },
  {
    ids: ["st-yamanashi-447"], name: "湯殿館", officialUrl: "http://www.yudenkan.com/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("営業時間", "10:00～22:00", "https://www.yudenkan.com/sauna.html"),
      factNov14("定休日", "毎月第1・第3火曜日", "https://www.yudenkan.com/sauna.html"),
      factNov14("設備", "浴槽の湯はすべて源泉掛け流し。サウナ、お食事処、休憩室、個室を備える", "http://www.yudenkan.com/"),
    ],
  },
  {
    ids: ["st-yamanashi-2437"], name: "富士西湖温泉 いずみの湯", officialUrl: "https://www.hamayouresort.com/spa_top/",
    features: ["温泉付き", "水風呂あり"],
    facts: [
      factNov14("料金", "¥900〜¥1,200（公式ページに価格帯として表示）", "https://www.hamayouresort.com/spa_top/"),
      factNov14("設備", "富士西湖のほとりの日帰り温泉施設。人工鉱泉のお風呂、露天風呂、サウナ、水風呂など多彩なお風呂", "https://www.hamayouresort.com/spa_top/"),
    ],
  },
  {
    ids: ["st-yamanashi-386"], name: "富士眺望の湯ゆらり", officialUrl: "https://www.fuji-yurari.jp/",
    features: ["温泉付き", "スチーム(ミスト)サウナ", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入泉料 大人 平日1,400円／土日祝1,700円（19:00以降は平日1,200円／土日祝1,500円）、子ども（4歳～小学生）平日750円／土日祝800円。貸バスタオル・フェイスタオル付", "https://www.fuji-yurari.jp/charge.html"),
      factNov14("営業時間", "平日10:00～21:00（最終入館20:00）、土日祝10:00～22:00（最終入館21:00）", "https://www.fuji-yurari.jp/"),
      factNov14("設備", "富士山を望む霊峰露天風呂・パノラマ風呂など全16種類のお風呂。サウナ、蒸し風呂、炭酸泉、洞窟風呂など", "https://www.fuji-yurari.jp/charge.html"),
    ],
  },
  {
    ids: ["st-yamanashi-2409"], name: "瑰泉", officialUrl: "https://www.yu-kaisen.jp/",
    features: ["温泉付き", "水風呂あり", "サ飯あり"],
    facts: [
      factNov14("設備", "大浴場にバブル風呂・寝湯・水風呂・プール、薬石高温サウナ。天然石を配した露天風呂や岩盤浴、お食事処・焼肉スペースあり", "https://www.yu-kaisen.jp/"),
      factNov14("水風呂", "大浴場に水風呂あり", "https://www.yu-kaisen.jp/"),
      factNov14("利用条件", "一回の入館で24時間滞在が可能", "https://www.yu-kaisen.jp/"),
    ],
  },
  {
    ids: ["st-nagano-4803"], name: "Farmer's Camp ポレポレ", officialUrl: "https://polepole.day/camp/sauna.html",
    features: ["薪サウナ", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "森のサウナ（2時間制）2名まで レギュラー／ミドルシーズン5,000円、ハイ／トップシーズン6,000円。1名追加2,000円～2,500円。貸切9,000円～18,000円", "https://polepole.day/camp/sauna.html"),
      factNov14("営業時間", "第1部12:00～14:00、第2部14:30～16:30、第3部17:00～19:00、第4部19:30～21:30（宿泊者のみ）", "https://polepole.day/camp/sauna.html"),
      factNov14("設備", "オーダーメイド薪ストーブのサウナ小屋（室温85℃～99℃、セルフロウリュ可）。天然湧き水の水風呂と森の中での外気浴", "https://polepole.day/camp/sauna.html"),
      factNov14("水風呂", "天然の湧き水を使った水風呂（年間を通じて12℃～15℃）", "https://polepole.day/camp/sauna.html"),
      factNov14("利用条件", "2時間制で最大6名まで。貸し切りも可能。少人数の場合は他の利用客と共同利用", "https://polepole.day/camp/sauna.html"),
    ],
  },
  {
    ids: ["st-nagano-2292"], name: "あぐりの湯こもろ", officialUrl: "https://www.komoron.com/agrinoyu/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "大人（12歳以上）700円、小人（6歳以上12歳未満）300円", "https://agri-yu.com/"),
      factNov14("営業時間", "10:00～21:00（最終受付20:30）", "https://agri-yu.com/"),
      factNov14("設備", "日帰り温泉施設。露天風呂やサウナから浅間山と小諸市街地を一望できる。食堂あり", "https://www.komoron.com/agrinoyu/"),
    ],
  },
  {
    ids: ["st-nagano-311"], name: "うるおい館", officialUrl: "http://www.uruoikan.com/",
    features: ["ドライサウナ", "ロウリュあり", "熱波師あり", "温泉付き", "宿泊可", "貸切可"],
    facts: [
      factNov14("営業時間", "日帰り入浴 10:00～23:00（最終入館22:30）、朝風呂 6:00～9:00（最終入館8:30）", "http://www.uruoikan.com/"),
      factNov14("設備", "男女両方にフィンランド式高温サウナ。男性側サウナ室でスタッフによる熱波ロウリュイベントを毎日開催。源泉かけ流しの露天風呂あり", "http://uruoikan.com/higaerionsen/"),
      factNov14("利用条件", "温泉宿だが日帰り入浴可。15歳未満のサウナ利用は不可。貸切風呂（要予約・別料金）あり", "http://uruoikan.com/higaerionsen/"),
    ],
  },
  {
    ids: ["st-nagano-446"], name: "かじかの湯(長野)", officialUrl: "https://kajikanoyu.com/kajikanoyu.html",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "大人（中学生以上）800円、小人（3歳以上小学生以下）400円、3歳未満無料（2026年4月1日改定）", "https://kajikanoyu.com/kajikanoyu/"),
      factNov14("営業時間", "10:00～20:00（最終受付19:30）", "https://kajikanoyu.com/kajikanoyu/"),
      factNov14("定休日", "毎週水曜日（祝日の場合は営業）", "https://kajikanoyu.com/kajikanoyu/"),
      factNov14("設備", "長野県最大規模の大浴場、高温サウナ、露天風呂など5種類の湯。泉質はアルカリ性単純温泉。和食処「かじか亭」あり", "https://kajikanoyu.com/kajikanoyu/"),
    ],
  },
  {
    ids: ["st-fukui-573"], name: "越のゆ敦賀店", officialUrl: "http://www.yu-iwashita.jp/tsuruga/",
    features: [], status: "closed",
    facts: [
      factNov14("営業状況", "公式サイトに「越のゆ敦賀店 閉店のお知らせ」が掲載され、未使用回数券の返金対応が案内されている", "http://www.yu-iwashita.jp/tsuruga/"),
    ],
  },
  {
    ids: ["st-ishikawa-2200"], name: "加賀観光ホテル", officialUrl: "http://kagakankoh-hotel.co.jp/",
    features: [], status: "suspended",
    facts: [
      factNov14("営業状況", "公式サイトの挨拶で、諸般の事情により休業する旨が案内されている（再開時期の記載なし）。グループホテルの季がさねは営業を継続", "http://kagakankoh-hotel.co.jp/"),
    ],
  },
  {
    ids: ["st-nagano-4696"], name: "つたの湯", officialUrl: "http://www.tsutakijuku.jp/spa/index.html",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "大人（中学生以上）800円、小学生400円、未就学のお子様は無料。回数券は6枚綴り4,000円", "https://www.tsutakijuku.jp/spa/"),
      factNov14("営業時間", "10：00～21：00（受付終了20：30）", "https://www.tsutakijuku.jp/spa/"),
      factNov14("定休日", "火曜定休・祝日の場合は翌日", "https://www.tsutakijuku.jp/spa/"),
      factNov14("設備", "露天風呂、源泉風呂、ジャグジー、サウナを完備。毎月3と7の付く日は通常より約5度高めの「高温サウナの日」、香りを楽しむ「低温サウナの日」がある", "https://www.tsutakijuku.jp/spa/"),
      factNov14("利用条件", "刺青のある方の入館はご遠慮いただいている。混浴は未就学児まで", "https://www.tsutakijuku.jp/spa/"),
      { label: "施設営業時間", value: "10：00～21：00（受付終了20：30）", sourceUrl: "https://www.tsutakijuku.jp/spa/", checkedAt: "2026-10-19" },
    ],
  },
  {
    ids: ["st-nagano-2309"], name: "ホットプラザ浅間", officialUrl: "http://www.asamaonsen.com/hot-plaza/index.php",
    features: ["水風呂あり", "温泉付き"],
    facts: [
      factNov14("料金", "入館料 大人750円、小人400円（小・中学生）、小学生未満無料。回数券（10枚つづり）大人6,750円・小人3,600円（2025年4月1日改訂）", "https://hotplaza.jp/service"),
      factNov14("営業時間", "午前10時～夜24時（最終入館と足湯は23時まで）", "https://hotplaza.jp/service"),
      factNov14("定休日", "毎週火曜日（祝日の時は営業して翌日休館）。年末年始、ゴールデンウィーク、お盆は無休で営業", "https://hotplaza.jp/service"),
      factNov14("設備", "大浴場、露天風呂、サウナ、水風呂、休憩所、無料駐車場、足湯", "https://hotplaza.jp/service"),
      factNov14("水風呂", "水風呂あり（設備一覧に記載）", "https://hotplaza.jp/service"),
    ],
  },
  {
    ids: ["st-nagano-2304"], name: "みはらしの湯", officialUrl: "https://www.ina-city-kankou.co.jp/miharashinoyu/",
    features: [],
    facts: [
      factNov14("料金", "大人（中学生以上）600円、児童（小学生）300円。11枚綴り 大人6,000円・児童3,000円", "https://www.ina-city-kankou.co.jp/miharashinoyu/"),
      factNov14("営業時間", "10時〜21時（受付は20時まで）", "https://www.ina-city-kankou.co.jp/miharashinoyu/"),
    ],
  },
  {
    ids: ["st-nagano-4575"], name: "ラーラ松本", officialUrl: "http://www.lala-matsumoto.jp/facility/",
    features: [],
    facts: [
      factNov14("料金", "一般浴室 1回券 大人（高校生以上）410円・小人（小中学生）210円。プール＋浴室セット券 1回券 大人1,040円・小人520円", "http://www.lala-matsumoto.jp/facility/"),
      factNov14("設備", "浴室は男女別にそれぞれ大浴場、展望風呂、サウナ室を備えている。身体の不自由な方専用の小浴室（要予約）もある", "http://www.lala-matsumoto.jp/facility/"),
    ],
  },
  {
    ids: ["st-nagano-4559"], name: "山と渓流の宿 仙流荘", officialUrl: "https://www.ina-city-kankou.co.jp/senryuso/",
    features: ["宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "日帰りプラン（平日限定・個室利用）2名1部屋5,000円（税込）※入浴料・食事別。宴会の会席料理は5,000円（税込）～", "https://www.ina-city-kankou.co.jp/senryuso/product/%e4%bb%99%e6%b5%81%e8%8d%98%e3%81%8c%e3%81%8a%e5%b1%8a%e3%81%91%e3%81%99%e3%82%8b%e6%97%a5%e5%b8%b0%e3%82%8a%e3%83%97%e3%83%a9%e3%83%b3/"),
      factNov14("営業時間", "日帰りプラン利用時間 午前11時30分～午後17時（レストラン営業 11:30～15:00、ラストオーダー14:30）", "https://www.ina-city-kankou.co.jp/senryuso/product/%e4%bb%99%e6%b5%81%e8%8d%98%e3%81%8c%e3%81%8a%e5%b1%8a%e3%81%91%e3%81%99%e3%82%8b%e6%97%a5%e5%b8%b0%e3%82%8a%e3%83%97%e3%83%a9%e3%83%b3/"),
      factNov14("利用条件", "日帰り利用可（平日限定の個室利用プランあり、入浴料別）。会席料理5,000円以上の利用で無料入浴券付き", "https://www.ina-city-kankou.co.jp/senryuso/product/%e4%bb%99%e6%b5%81%e8%8d%98%e3%81%8c%e3%81%8a%e5%b1%8a%e3%81%91%e3%81%99%e3%82%8b%e6%97%a5%e5%b8%b0%e3%82%8a%e3%83%97%e3%83%a9%e3%83%b3/"),
    ],
  },
  {
    ids: ["st-nagano-2325"], name: "信州須坂 関谷温泉湯っ蔵んど", officialUrl: "http://yukkuland.jp/index.php",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入館料 大人（中学生以上）750円、子供（小学生）400円。平日17時以降はナイト料金 大人550円・子供300円（指定日を除く）。小学生未満は無料", "http://yukkuland.jp/floor/index.php"),
      factNov14("営業時間", "10:00～21:00（最終入館20:00）10:00～22:00（最終入館21:00）", "http://yukkuland.jp/floor/index.php"),
      factNov14("定休日", "不定休（メンテナンス休暇あり）", "http://yukkuland.jp/floor/index.php"),
      factNov14("設備", "6種類9つのお風呂が楽しめる日帰り温泉施設。食堂・蔵カフェ・蔵パンあり", "http://yukkuland.jp/floor/index.php"),
    ],
  },
  {
    ids: ["st-nagano-414"], name: "星野温泉 トンボの湯", officialUrl: "http://www.hoshino-area.jp/archives/area/tonbo",
    features: ["スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り入浴料金 大人（中学生以上）1,550円、子供（3歳～小学生）1,050円（4月～11月、年末年始12/29～1/3）。12月～3月は大人1,350円、子供800円", "http://www.hoshino-area.jp/archives/area/tonbo"),
      factNov14("営業時間", "10:00-22:00（最終入場 21:15）", "http://www.hoshino-area.jp/archives/area/tonbo"),
      factNov14("設備", "源泉かけ流しの内湯・露天風呂、サウナ、水風呂、飲泉。サウナは温度約85〜90度のボナサウナで、20分ごとに熱源に水が注がれやわらかな蒸気が広がる", "http://www.hoshino-area.jp/archives/area/tonbo"),
      factNov14("水風呂", "野鳥の森の湧き水を使用し、通年約13度の安定した水温", "http://www.hoshino-area.jp/archives/area/tonbo"),
      factNov14("利用条件", "日帰り温泉施設で、宿泊の有無に関わらず利用可。タトゥー、刺青がある方は指定のカバーシール8枚で隠せる場合に限り入浴可。貸しタオルセット350円", "http://www.hoshino-area.jp/archives/area/tonbo"),
    ],
  },
  {
    ids: ["st-nagano-2383"], name: "天然温泉梓の湯ドーミーイン松本", officialUrl: "https://www.hotespa.net/hotels/matsumoto/",
    features: ["オートロウリュ", "ロウリュあり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "9F最上階に男女別大浴場。汲み上げの自家源泉「梓の湯」を使用し、オートロウリュ付きサウナを完備。2025年3月17日リニューアルオープン", "https://www.hotespa.net/hotels/matsumoto/"),
    ],
  },
  {
    ids: ["st-nagano-2911"], name: "天然温泉善光の湯ドーミーイン長野", officialUrl: "https://www.hotespa.net/hotels/nagano/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "11F最上階に天然温泉「善光の湯」の男女別大浴場を完備", "https://www.hotespa.net/hotels/nagano/"),
    ],
  },
  {
    ids: ["st-nagano-4769"], name: "湯田中温泉 よろづや", officialUrl: "https://yudanaka-yoroduya.com/concept.html",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "3箇所の自家源泉から引き込んだ天然温泉を掛け流しで提供。登録有形文化財の桃山大浴殿、庭園露天風呂、部屋付き露天風呂あり", "https://yudanaka-yoroduya.com/concept.html"),
    ],
  },
  {
    ids: ["st-nagano-4684"], name: "八千穂SAUNA\t", officialUrl: "https://yachiho-sauna.jp/",
    features: ["薪サウナ", "セルフロウリュ", "ロウリュあり", "熱波師あり", "水風呂あり", "外気あり"],
    facts: [
      factNov14("料金", "お一人様当たり 平日：2時間3,500円、3時間4,500円、7時間8,500円／土日祝：2時間4,000円、3時間5,000円、7時間9,500円", "https://yachiho-sauna.jp/"),
      factNov14("営業時間", "AM9時からPM7時", "https://yachiho-sauna.jp/"),
      factNov14("定休日", "休日：木曜日。今シーズンの営業期間は11月22日迄で、冬季は休業", "https://yachiho-sauna.jp/"),
      factNov14("設備", "3種類の本格薪焚きサウナ（小屋サウナ、バレルサウナ、テントサウナ）計9基。セルフロウリュ・セルフアウフグースが可能。低温60度から高温120度まで", "https://yachiho-sauna.jp/"),
      factNov14("水風呂", "北八ヶ岳の天然水を贅沢にかけ流した山の水プール・バレルプールがあり、渓流も利用できる", "https://yachiho-sauna.jp/"),
    ],
  },
  {
    ids: ["st-nagano-377"], name: "林檎の湯屋おぶ〜", officialUrl: "http://www.orchard.co.jp/obu/index.htm",
    features: ["セルフロウリュ", "オートロウリュ", "ロウリュあり", "水風呂あり", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴料 大人（中学生以上）平日900円／土日祝1,000円／繁忙期1,100円、子供（3歳以上）300円、幼児（2歳以下）無料。岩盤温浴は中学生以上600円", "http://www.orchard.co.jp/obu/about/index.html#01"),
      factNov14("営業時間", "入浴・サウナ 9:00~23:00（最終入場時間22:30）。岩盤温浴 10:00~21:50", "http://www.orchard.co.jp/obu/about/index.html#01"),
      factNov14("定休日", "機械設備点検の為、年に3回の休館日を設けている", "http://www.orchard.co.jp/obu/about/index.html#01"),
      factNov14("設備", "セルフロウリュサウナ、オートロウリュサウナ、うるおいサウナ、岩盤温浴、よもぎ蒸し。アルプス山系の伏流水をナノ水にしてお風呂・水風呂・館内全てに使用", "http://www.orchard.co.jp/obu/index.htm"),
      factNov14("水風呂", "極上の水風呂を完備（アルプス山系伏流水のナノ水を使用）", "http://www.orchard.co.jp/obu/index.htm"),
      factNov14("利用条件", "入れ墨・タトゥー（シール類・ペイントを含む）をされている方は入館不可。タオルセット（レンタル）400円、館内着（レンタル）360円", "http://www.orchard.co.jp/obu/about/index.html#01"),
    ],
  },
  {
    ids: ["st-gifu-4832"], name: "ASP SAUNA", officialUrl: "https://asp-sauna.com/",
    features: ["個室", "水風呂あり"],
    facts: [
      factNov14("料金", "90分：ソロサウナ1名（平日限定）4,800円、1〜2名8,800円、3名10,300円、4名11,800円／120分：ソロ6,800円、1〜2名11,800円、3名13,800円、4名15,800円", "https://asp-sauna.com/"),
      factNov14("営業時間", "月〜水・日曜日 10:00～22:00、金・土・祝前日 10:00～24:00", "https://asp-sauna.com/"),
      factNov14("定休日", "木曜", "https://asp-sauna.com/"),
      factNov14("設備", "3室のみのプライベートサウナ（バレルサウナ-華ノ間-、アップライトサウナ-梅ノ間-、半湿式サウナ-鈴ノ間-）。2部屋利用の場合のみ露天風呂の利用が可能", "https://asp-sauna.com/"),
      factNov14("水風呂", "長良川の天然地下水の水風呂", "https://asp-sauna.com/"),
      factNov14("利用条件", "プライベートサウナ。基本セット内容：バスタオル1枚／フェイスタオル2枚／サウナマット1枚／水（天然水）550ml×1本", "https://asp-sauna.com/"),
    ],
  },
  {
    ids: ["manual-gifu-croce-glamping"], name: "CROCEグランピング", officialUrl: "https://www.croce-glamping.com/service/sauna/",
    features: ["宿泊可"],
    facts: [
      factNov14("料金", "バレルサウナの利用料金はかからない（グランピング利用者限定・無料）", "https://www.croce-glamping.com/service/sauna/"),
      factNov14("設備", "地元名産の東濃ヒノキを贅沢に使用したバレルサウナ。1度に4名まで利用可能", "https://www.croce-glamping.com/service/sauna/"),
      factNov14("利用条件", "グランピングご利用（日帰りプラン含む）のお客様限定。サウナエリアは裸で利用不可で、水着またはサウナスーツ等の着用が必要。更衣室・シャワールームはない", "https://www.croce-glamping.com/service/sauna/"),
    ],
  },
  {
    ids: ["manual-gifu-itadori-sauna"], name: "ITADORI SAUNA", officialUrl: "https://itadori-sauna.com/",
    features: ["薪サウナ", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "貸切可", "宿泊可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "YURAGI SAUNA ¥5,000〜、清流サウナ1&2号 ¥11,000〜、KOMOREBI SAUNA ¥11,000〜、霧サウナ ¥13,500〜、ペアサウナ ¥14,000〜、RIVERSIDE VIP（1日貸切） ¥50,000〜", "https://itadori-sauna.com/"),
      factNov14("設備", "薪ストーブのテントサウナなど目的別に選べる6つのサウナ。サウナのあとは板取川へダイブし、SUPの上での外気浴もできる", "https://itadori-sauna.com/"),
      factNov14("水風呂", "水風呂の代わりに清流・板取川を利用（ライフジャケット着用必須）。頭まで沈む2mの大樽水風呂を備えたプランもある", "https://itadori-sauna.com/"),
      factNov14("利用条件", "完全貸切のプライベートサウナ。水着、サンダル、タオルを持参（レンタル品 各500円あり）。川に入る際はライフジャケット着用必須", "https://itadori-sauna.com/"),
    ],
  },
  {
    ids: ["manual-gifu-sauna-hotel-gifu"], name: "SAUNA HOTEL GIFU", officialUrl: "https://saunahotelgifu.com/",
    features: ["個室", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "全ての客室に温度調節が可能な個室サウナを設置。サウナ温度（設定可能）80~110℃、セルフロウリュ可能。屋上に開放されたととのいスペースがある", "https://saunahotelgifu.com/"),
      factNov14("水風呂", "水風呂 13度℃前後（客室内に完備）", "https://saunahotelgifu.com/"),
      factNov14("利用条件", "全室がサウナ付きのプライベートサウナホテル。サウナは宿泊する客室内で利用する", "https://saunahotelgifu.com/"),
    ],
  },
  {
    ids: ["st-gifu-2633"], name: "アクアリゾート 岐阜ふじの湯", officialUrl: "https://gifu-fujinoyu.jp/",
    features: ["オートロウリュ", "セルフロウリュ", "ロウリュあり", "熱波師あり", "スチーム(ミスト)サウナ", "塩サウナ", "水風呂あり", "外気あり", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("設備", "高温サウナ約100℃（男性は1時間ごとにオートロウリュウ、女性はセルフロウリュウ）、スチームサウナ、塩サウナ、炭酸風呂、露天風呂。人気熱波師によるアウフグースイベントを月に1回開催", "https://gifu-fujinoyu.jp/sauna/"),
      factNov14("水風呂", "冷たくて、水深が深いのが特徴の水風呂。「保温」「保湿」「浸透」に優れたナノ水を使用", "https://gifu-fujinoyu.jp/sauna/"),
      factNov14("利用条件", "刺青・タトゥーのある方のご利用は不可。貸しタオル50円、貸しバスタオル150円", "https://gifu-fujinoyu.jp/sauna/"),
    ],
  },
  {
    ids: ["manual-gifu-ibigawa-fujihashi"], name: "いび川温泉 藤橋の湯", officialUrl: "https://m-fujihashi.com/spa/",
    features: ["温泉付き", "水風呂あり", "貸切可", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴料 大人700円、小人（3歳以上12歳未満）400円", "https://m-fujihashi.com/spa/"),
      factNov14("営業時間", "[4月～11月] 10：00～21：00（最終受付 20：30）／[12月～3月] 10：00～20：00（最終受付 19：30）", "https://m-fujihashi.com/spa/"),
      factNov14("定休日", "木曜日（※祝日の場合は翌日定休日）、年末年始（12月31日、1月1日）", "https://m-fujihashi.com/spa/"),
      factNov14("設備", "露天風呂、内風呂、泡風呂、1人風呂、サウナ、替わり湯、歩行湯。貸切家族風呂・水風呂も完備。温泉内にお食事処あり", "https://m-fujihashi.com/spa/"),
      factNov14("水風呂", "水風呂を完備している", "https://m-fujihashi.com/spa/"),
      factNov14("利用条件", "貸切家族風呂は原則事前予約制。利用時間は①10：30～11：30 ②13：00～14：00 ③15：00～16：00 ④17：00～18：00の4枠", "https://m-fujihashi.com/spa/"),
    ],
  },
  {
    ids: ["manual-gifu-iroha"], name: "いろは JR岐阜駅前", officialUrl: "https://iroha-gifu.net/",
    features: ["個室", "セルフロウリュ", "ロウリュあり", "水風呂あり", "男女共用", "サ飯あり"],
    facts: [
      factNov14("料金", "Regular（〜2名）90分 1名3,500円・2名5,500円、120分 1名4,000円・2名6,000円／Large（〜3名）90分 1名4,000円〜／VIP（〜4名）90分 1名5,800円〜、180分 1名8,800円〜", "https://iroha-gifu.net/"),
      factNov14("営業時間", "サウナ 月〜金：10:00〜22:30（最終受付21:00）、土日祝前日：10:00〜23:30（最終受付22:00）", "https://iroha-gifu.net/"),
      factNov14("定休日", "水曜日", "https://iroha-gifu.net/"),
      factNov14("設備", "完全個室のプライベートサウナ全5室（VIP・Large・Regular）。各室にサウナ室、水風呂、アロマ、ととのいスペースを完備。1Fに蕎麦バーを併設", "https://iroha-gifu.net/"),
      factNov14("水風呂", "全ての個室内に水風呂を完備", "https://iroha-gifu.net/"),
      factNov14("利用条件", "完全事前予約制で、お支払いはクレジットカードのみの事前決済。男女での利用も可能（水着着用）。完全個室のためタトゥーのある方も利用可", "https://iroha-gifu.net/"),
    ],
  },
  {
    ids: ["manual-gifu-seiryu-totonou-sauna"], name: "ぎふ清流ととのうサウナ", officialUrl: "https://totonou.dolphin-group.co.jp/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "男女共用"],
    facts: [
      factNov14("設備", "4種類のサウナ（高温サウナ約95℃、屋外バレルサウナ約80℃、低温サウナ、ミストサウナ55℃）、冷気浴室、リラクゼーションプール、ジャグジー、露天風呂", "https://totonou.dolphin-group.co.jp/"),
      factNov14("水風呂", "長良川伏流水を使用した水風呂（水温約16℃）", "https://totonou.dolphin-group.co.jp/"),
      factNov14("利用条件", "男女水着着用にて利用できる会員制のサウナ・ジャグジー施設。中学生以上の方が利用可能", "https://totonou.dolphin-group.co.jp/"),
    ],
  },
  {
    ids: ["manual-gifu-kur-resort-yubunesawa"], name: "クアリゾート湯舟沢", officialUrl: "https://nakatsugawaonsen.com/",
    features: ["温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "お風呂利用料金 大人（中学生以上）平日700円・休日1,000円・ハイシーズン1,100円、小人（3才～小学生）400円・700円・800円", "https://nakatsugawaonsen.com/information/"),
      factNov14("営業時間", "平日 10:00～20:00（最終入館19:30）、休日（土日祝日） 10:00～21:00（最終入館20:30）", "https://nakatsugawaonsen.com/information/"),
      factNov14("定休日", "月に1度、点検日として休館日あり（営業カレンダーで確認）", "https://nakatsugawaonsen.com/information/"),
      factNov14("設備", "天然温泉ゾーンにサウナ・露天風呂・大浴場。バーデゾーンには13種類の機能風呂（クリスタル採暖サウナ等）、屋内温水プールもあり", "https://nakatsugawaonsen.com/spa/"),
      factNov14("利用条件", "刺青・タトゥー（シール類を含む）をされた方の入館は不可。タオル類・館内着は有料レンタル", "https://nakatsugawaonsen.com/information/"),
    ],
  },
  {
    ids: ["manual-gifu-sasayurinoyu"], name: "くしはら温泉 ささゆりの湯", officialUrl: "https://sasayurinoyu.jp/",
    features: ["水風呂あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入館料 大人700円、小人（4才～小学6年生まで）400円（税込）", "https://sasayurinoyu.jp/onsen.php"),
      factNov14("営業時間", "10:00～21:00（受付終了20:00）", "https://sasayurinoyu.jp/onsen.php"),
      factNov14("定休日", "毎週水曜日（祝日の場合は営業）、毎年12月30日～1月1日", "https://sasayurinoyu.jp/onsen.php"),
      factNov14("設備", "サウナ・水風呂のほか、内湯、ジャグジー、泡風呂、薬湯、展望露天風呂。泉質はアルカリ性単純温泉", "https://sasayurinoyu.jp/onsen.php"),
      factNov14("水風呂", "水風呂あり（温度の記載なし）", "https://sasayurinoyu.jp/onsen.php"),
    ],
  },
  {
    ids: ["st-gifu-4823"], name: "サウーニャ.エイワン", officialUrl: "https://reserva.be/saunaneara1/reserve?mode=service_staff&search_evt_no=27eJyzNLI0swQAAzoBFA",
    features: ["個室", "貸切可"],
    facts: [
      factNov14("料金", "サウナ利用 2時間 6,000円（税込）／3時間 8,000円（税込）", "https://reserva.be/saunaneara1/reserve?mode=service_staff&search_evt_no=27eJyzNLI0swQAAzoBFA"),
      factNov14("利用条件", "プライベートサウナ（予約制）", "https://reserva.be/saunaneara1/reserve?mode=service_staff&search_evt_no=27eJyzNLI0swQAAzoBFA"),
    ],
  },
  {
    ids: ["manual-gifu-nukui-onsen"], name: "ぬくい温泉", officialUrl: "https://www.nukuinoyu.jp/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "平日 大人850円・小人400円（4歳未満200円）、土日祝 大人950円（税込）。入浴料金のみで岩盤浴も利用可", "https://www.nukuinoyu.jp/user_guide"),
      factNov14("営業時間", "湯処 10:00～24:00（最終入館受付23:30）、岩盤浴 10:00～23:00", "https://www.nukuinoyu.jp/user_guide"),
      factNov14("定休日", "不定休（設備点検のため臨時休業あり）", "https://www.nukuinoyu.jp/user_guide"),
      factNov14("設備", "日帰り天然温泉と岩盤浴の施設。レストラン味処「湯楽里」、癒処「ゆるり」、休憩処、土産処あり", "https://www.nukuinoyu.jp/"),
      factNov14("利用条件", "刺青およびタトゥー（シール・ペイント等を含む）のある方、暴力団およびその関係者の入館は不可", "https://www.nukuinoyu.jp/user_guide"),
    ],
  },
  {
    ids: ["manual-gifu-badenpark-sogi"], name: "バーデンパークSOGI", officialUrl: "https://www.badenpark.net/",
    features: ["水風呂あり", "温泉付き", "タオルレンタルあり", "サ飯あり"],
    facts: [
      factNov14("料金", "お風呂 大人（中学生以上）800円・子供（小学生）400円、総合利用（お風呂・プール・ジム）大人1,600円・子供800円", "https://badenpark.net/"),
      factNov14("営業時間", "温泉 10:00〜22:00（最終受付21:30）", "https://badenpark.net/"),
      factNov14("定休日", "毎月第3木曜日", "https://badenpark.net/"),
      factNov14("設備", "サウナ・水風呂、総檜風呂、石風呂、露天風呂（岩風呂・薬風呂・壺湯6種）、温泉プール（バーデゾーン）、ジム。泉質はアルカリ性単純弱放射能温泉", "https://www.badenpark.net/spa/index.html"),
      factNov14("水風呂", "水風呂あり（水道水を使用。温度の記載なし）", "https://www.badenpark.net/spa/index.html"),
      factNov14("利用条件", "刺青・タトゥー（シール類すべて）のある方は入場不可。サウナは小学生以下の方は利用不可", "https://www.badenpark.net/spa/index.html"),
    ],
  },
  {
    ids: ["manual-gifu-hyoroku-sauna"], name: "ひょうろくサウナ", officialUrl: "https://hyorokusauna.com/",
    features: ["ロウリュあり", "外気あり", "貸切可", "サ飯あり"],
    facts: [
      factNov14("営業時間", "10:00～（要予約）", "https://hyorokusauna.com/"),
      factNov14("定休日", "不定休", "https://hyorokusauna.com/"),
      factNov14("設備", "貸切テントサウナ（ロウリュ可）と外気浴スペース。日本料理店「瓢麓苑」プロデュースで、鮎料理などのサ飯やBBQも楽しめる", "https://hyorokusauna.com/"),
      factNov14("水風呂", "水風呂はなく、サウナ後は清流・板取川に入って身体を冷やす", "https://hyorokusauna.com/"),
      factNov14("利用条件", "貸切利用・要予約", "https://hyorokusauna.com/"),
    ],
  },
  {
    ids: ["manual-gifu-fiteasy-gifumasaki-sauna"], name: "フィットイージー 岐阜正木店 / SAUNA", officialUrl: "https://lp.fiteasy.jp/lp-gifu-gifumasaki/",
    features: ["ロウリュあり", "水風呂あり", "個室", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "月会費 6,980円（税込7,678円）、入会金（顔認証ID発行料）税込3,300円、高校生会費 税込4,015円/月", "https://lp.fiteasy.jp/lp-gifu-gifumasaki/"),
      factNov14("営業時間", "月〜土 7:00〜23:00、日 9:00〜20:00", "https://lp.fiteasy.jp/lp-gifu-gifumasaki/"),
      factNov14("定休日", "なし", "https://fiteasy.co.jp/news/fit-easy-%E5%B2%90%E9%98%9C%E6%AD%A3%E6%9C%A8%E5%BA%97-sauna%E3%81%8C%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F/"),
      factNov14("設備", "大型サウナ（最大20名・男性専用）、小型サウナ（最大5名・女性専用）、屋外サウナ2棟（最大8名）、完全個室サウナ、アロマロウリュ、水素水サーバー", "https://lp.fiteasy.jp/lp-gifu-gifumasaki/"),
      factNov14("水風呂", "本格的な水風呂あり（個室サウナにも水風呂・ととのいスペース付き）。温度の記載なし", "https://lp.fiteasy.jp/lp-gifu-gifumasaki/"),
      factNov14("利用条件", "会員制でビジター利用不可。サウナは完全予約制。18歳以上の方が利用可能（高校生会員は15歳以上）", "https://lp.fiteasy.jp/lp-gifu-gifumasaki/"),
    ],
  },
  {
    ids: ["manual-gifu-yoro-tamayura"], name: "プライベートサウナ 養老たまゆら", officialUrl: "https://yorotamayura.hp.peraichi.com/accommodation_site_p1_1/",
    features: ["個室", "貸切可", "水風呂あり", "外気あり", "男女共用", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "1枠貸切料金 税込20,000円（大人4名まで。5人目から1人追加につき+5,000円）", "https://yorotamayura.hp.peraichi.com/accommodation_site_p1_1/"),
      factNov14("営業時間", "9:00〜18:30の3部制（1部 9:00〜11:30、2部 12:30〜15:00、3部 16:00〜18:30）", "https://yorotamayura.hp.peraichi.com/accommodation_site_p1_1/"),
      factNov14("定休日", "不定休", "https://yorotamayura.hp.peraichi.com/accommodation_site_p1_1/"),
      factNov14("設備", "フィンランド式バレルサウナ、陶器露天風呂、外気浴スペース、室内シャワースペース、マッサージチェア。タオル・水着の無料レンタルあり", "https://yorotamayura.hp.peraichi.com/accommodation_site_p1_1/"),
      factNov14("水風呂", "陶器の水風呂（チラー完備）", "https://yorotamayura.hp.peraichi.com/accommodation_site_p1_1/"),
      factNov14("利用条件", "完全個室プライベートサウナ（時間貸し・一棟貸切、事前予約制）。18歳未満のみの利用不可、未就学児は利用不可、10歳以下はサウナ利用不可", "https://yorotamayura.hp.peraichi.com/accommodation_site_p1_1/"),
    ],
  },
  {
    ids: ["manual-gifu-fine-garden-gifu"], name: "ホテルファインガーデン岐阜", officialUrl: "https://www.hotel-fine.co.jp/hotel/g-gifu/",
    features: ["個室", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "ご休憩 平日4,000～5,100円・土日祝4,400～5,610円、フリータイム 平日4,850～6,850円・土日祝5,335～7,535円、ご宿泊 7,100～12,350円", "https://www.hotel-fine.co.jp/hotel/g-gifu/"),
      factNov14("設備", "プライベートサウナ付き客室7部屋、露天風呂付き客室1部屋を完備", "https://www.hotel-fine.co.jp/hotel/g-gifu/"),
      factNov14("利用条件", "休憩（日帰り）利用可、宿泊可", "https://www.hotel-fine.co.jp/hotel/g-gifu/"),
    ],
  },
  {
    ids: ["manual-gifu-kaizu-onsen"], name: "海津温泉", officialUrl: "https://kaizuonsen.com/",
    features: ["温泉付き", "水風呂あり", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴料 大人580円・小人200円（いやしの湯・長寿の湯・ふくしの湯共通、入湯税含む）", "https://kaizuonsen.com/onsen"),
      factNov14("営業時間", "日帰り入浴 10:00〜21:30", "https://kaizuonsen.com/"),
      factNov14("定休日", "休館日は毎月10日（祝祭日または土日の場合はその翌平日）", "https://kaizuonsen.com/"),
      factNov14("設備", "源泉掛け流しの19のお風呂。北館・南館とも内風呂にサウナ・水風呂、露天に箱サウナ", "https://kaizuonsen.com/onsen"),
    ],
  },
  {
    ids: ["manual-gifu-meguminoyu"], name: "恵みの湯", officialUrl: "https://www.meguminoyu.jp/",
    features: ["ロウリュあり", "水風呂あり", "サ飯あり"],
    facts: [
      factNov14("設備", "男女ともに県内最大級の高温サウナでフィンランド式ロウリュ（ととのい生ハーブロウリュ）。自社農園の薬草ハーブの眠り湯・炭酸泉", "https://www.meguminoyu.jp/"),
      factNov14("水風呂", "県内最大級の水風呂は各務原の天然水を掛け流し", "https://www.meguminoyu.jp/"),
    ],
  },
  {
    ids: ["manual-gifu-new-gifu-sauna"], name: "新岐阜サウナ", officialUrl: "https://new-gifu-sauna.com/",
    features: ["セルフロウリュ", "ロウリュあり", "熱波師あり", "スチーム(ミスト)サウナ", "水風呂あり", "宿泊可"],
    facts: [
      factNov14("料金", "入館料 1,900円、こども（小学生以下）1,000円、朝風呂（5時～10時）1,000円。25時以降は入館料＋1,000円", "https://new-gifu-sauna.com/sauna-bath"),
      factNov14("営業時間", "営業時間 11時00分〜翌日10時00分（年中無休）", "https://new-gifu-sauna.com/"),
      factNov14("設備", "タワーサウナ（ガス・電気式NEPPAストーブ）、1時間おきのアウフグース、ロウリュウマシーンでセルフロウリュ、無農薬薬草のスチームサウナ", "https://new-gifu-sauna.com/sauna-bath"),
      factNov14("水風呂", "シングルの水風呂と、長良川清流掛け流しの水風呂", "https://new-gifu-sauna.com/sauna-bath"),
      factNov14("利用条件", "男性専用施設", "https://new-gifu-sauna.com/sauna-bath"),
    ],
  },
  {
    ids: ["manual-gifu-kanzaki-sanga-sauna"], name: "神崎サンガサウナ", officialUrl: "https://sangasauna.com/",
    features: ["水風呂あり", "貸切可", "男女共用", "サ飯あり"],
    facts: [
      factNov14("料金", "入場料 10:00〜19:00は2,000円、19:00〜は1,100円。小屋サウナは入場料に1名あたり2,000円追加", "https://sangasauna.com/"),
      factNov14("設備", "小屋サウナ（広葉樹のログサウナ、定員10名・予約制・貸切可）とコンテナサウナ（定員15名・パブリック）", "https://sangasauna.com/"),
      factNov14("水風呂", "川へダイブする天然の水風呂を含めた3つの水風呂", "https://sangasauna.com/"),
      factNov14("利用条件", "水着またはラッシュガードの着用必須。カップル・家族・友人同士で一緒に利用可。タトゥーは見えないようカバーが必要", "https://sangasauna.com/"),
    ],
  },
  {
    ids: ["manual-gifu-mago-no-yu"], name: "倉知温泉 マーゴの湯", officialUrl: "https://www.magonoyu.com/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("設備", "タワーサウナ（段差ごとに三段階の温度）、岩盤浴（翡翠房・ゲルマニウム房・岩塩房）、炭酸泉・露天風呂・シルク湯", "https://www.magonoyu.com/"),
    ],
  },
  {
    ids: ["manual-gifu-ogaki-yunoshiro"], name: "大垣天然温泉 湯の城", officialUrl: "https://www.p-castle.co.jp/yunoshiroogaki/",
    features: ["ロウリュあり", "水風呂あり", "温泉付き", "タオルレンタルあり", "サ飯あり"],
    facts: [
      factNov14("料金", "入泉料 大人（中学生以上）平日750円・土日祝850円、子供（3歳〜小学生）平日300円・土日祝350円、幼児（3歳未満）無料。レンタルタオルセット300円", "https://www.p-castle.co.jp/yunoshiroogaki/information"),
      factNov14("営業時間", "入泉時間は朝6:00より（火曜日のみ朝9:00より）。閉店は月・火・水・木・日が深夜12:00（最終受付 深夜11:30）、金・土・祝前日が深夜1:00（最終受付 深夜12:30）", "https://www.p-castle.co.jp/yunoshiroogaki/information"),
      factNov14("設備", "高温サウナ（90℃以上）で毎日開催の激アツサウナロウリュウ、冷水風呂＜大名の水風呂＞、天然温泉とナノ湯", "https://www.p-castle.co.jp/yunoshiroogaki/spa-zone"),
      factNov14("利用条件", "刺青（タトゥー）のある方の入館は不可", "https://www.p-castle.co.jp/yunoshiroogaki/information"),
    ],
  },
  {
    ids: ["manual-gifu-ikeda-onsen-shinkan"], name: "池田温泉 新館", officialUrl: "https://www.ikedaonsen.jp/",
    features: ["温泉付き", "水風呂あり", "スチーム(ミスト)サウナ"],
    facts: [
      factNov14("料金", "入浴料金（本館・新館共通）大人（中学生以上）平日700円・土日祝800円、小人（3歳〜小学生）350円、幼児（3歳未満）無料", "https://www.ikedaonsen.jp/"),
      factNov14("営業時間", "営業時間 10:00～22:00（最終受付21:30）", "https://www.ikedaonsen.jp/"),
      factNov14("定休日", "新館の休館日は水曜日（祝日の場合は営業）", "https://www.ikedaonsen.jp/"),
      factNov14("設備", "新館は内風呂に水風呂・サウナ、露天風呂・うたせ湯・寝ころび湯・ミストサウナ・家族風呂など", "https://www.ikedaonsen.jp/"),
    ],
  },
  {
    ids: ["manual-gifu-ikeda-onsen-honkan"], name: "池田温泉 本館", officialUrl: "https://www.ikedaonsen.jp/",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "入浴料金（本館・新館共通）大人（中学生以上）平日700円・土日祝800円、小人（3歳〜小学生）350円、幼児（3歳未満）無料", "https://www.ikedaonsen.jp/"),
      factNov14("営業時間", "営業時間 10:00～22:00（最終受付21:30）", "https://www.ikedaonsen.jp/"),
      factNov14("定休日", "本館の休館日は月曜日・火曜日", "https://www.ikedaonsen.jp/"),
      factNov14("営業状況", "公式サイトのトップページで「本館 現在臨時休業中」と案内されている（指定管理者移行に伴う臨時休業）", "https://www.ikedaonsen.jp/"),
      factNov14("設備", "本館は内風呂にサウナ・ジェットバス、露天風呂・源泉風呂・泡風呂・薬湯", "https://www.ikedaonsen.jp/"),
    ],
  },
  {
    ids: ["manual-gifu-tenko-no-yu"], name: "天光の湯", officialUrl: "https://tenko-spa.jp/",
    features: ["オートロウリュ", "セルフロウリュ", "ロウリュあり", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "温泉付き", "貸切可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入館料 大人（中学生以上）平日900円・土日祝1,000円、小人（4歳以上）平日450円・土日祝500円、幼児（3歳以下）無料。タオルセットレンタル250円", "https://tenko-spa.jp/"),
      factNov14("営業時間", "営業時間 8:00～23:00（チェックイン最終 22:00）", "https://tenko-spa.jp/"),
      factNov14("定休日", "年中無休（メンテナンス休館あり）", "https://tenko-spa.jp/"),
      factNov14("設備", "男湯にロウリュサウナ3種類、女湯にロウリュサウナ2種類と薬草スチームサウナ、オートロウリュサウナ、バレルサウナ（セルフロウリュ）。貸切温泉＆サウナ「離宮」", "https://tenko-spa.jp/"),
      factNov14("水風呂", "水風呂は3種類（グルシン水風呂など）。広々した外気浴スペース", "https://tenko-spa.jp/"),
    ],
  },
  {
    ids: ["manual-gifu-mitsumine"], name: "天然温泉 三峰", officialUrl: "https://www.mitsumine-onsen.com/",
    features: ["ドライサウナ", "ロウリュあり", "水風呂あり", "温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴料 大人 平日850円／土日祝950円、小学生 平日430円／土日祝480円、小学生未満無料", "https://www.mitsumine-onsen.com/"),
      factNov14("営業時間", "施設全体（お風呂・サウナ含む）10:00〜22:30（最終受付22:00）", "https://www.mitsumine-onsen.com/"),
      factNov14("定休日", "年中無休（メンテナンス休館あり）", "https://www.mitsumine-onsen.com/"),
      factNov14("設備", "ロウリュウサウナ『ロウリュウの森』、ドライサウナ、天然温泉（アルカリ単純泉）、お食事処〈季〉", "https://www.mitsumine-onsen.com/"),
      factNov14("水風呂", "水風呂『森の泉』水深90cm、天然地下水の水風呂", "https://www.mitsumine-onsen.com/"),
      factNov14("利用条件", "刺青・タトゥー（シール・ペイント含む）のある方は入館不可。バスタオルレンタル200円", "https://www.mitsumine-onsen.com/"),
    ],
  },
  {
    ids: ["manual-gifu-ogaki-korona"], name: "天然温泉 大垣コロナの湯", officialUrl: "https://www.korona.co.jp/onsen/ogk/",
    features: ["熱波師あり", "温泉付き"],
    facts: [
      factNov14("設備", "サウナ・岩盤浴あり。2026年3月6日にリフレッシュオープン、アウフグースイベントを開催", "https://www.korona.co.jp/onsen/ogk/"),
    ],
  },
  {
    ids: ["manual-gifu-yorimichi-onsen"], name: "土岐 よりみち温泉", officialUrl: "https://www.yorimichi-onsen.jp/",
    features: ["塩サウナ", "ロウリュあり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("営業時間", "温泉 9:00～23:00（土～24:00）、岩盤浴 9:00～22:30、最終入館受付 22:00", "https://www.yorimichi-onsen.jp/"),
      factNov14("定休日", "毎月第三火曜日", "https://www.yorimichi-onsen.jp/"),
      factNov14("設備", "漢方塩サウナ、岩盤浴（ロウリュウアトラクションあり）、超炭酸温泉風呂・回遊風呂・露天風呂、レストラン", "https://www.yorimichi-onsen.jp/"),
    ],
  },
  {
    ids: ["manual-gifu-yudokoro-minori"], name: "湯どころ みのり", officialUrl: "https://yudocoro-minori.com/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("設備", "岩盤&サウナ『LeLu』、お食事処『みのり食堂』、天然温泉", "https://yudocoro-minori.com/"),
    ],
  },
  {
    ids: ["manual-gifu-yunohana-island"], name: "湯の華アイランド", officialUrl: "https://www.spa-yunohana.com/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("設備", "乾式・湿式サウナ、全10種類の岩盤スパ（日本最大級『発汗洞』）、天然温泉『美肌の湯』、湯の華食堂・湯の華亭", "https://www.spa-yunohana.com/"),
      factNov14("定休日", "メンテナンス休館あり（2026年11月9日〜13日は休館し、11月14日朝9時より通常営業再開）", "https://www.spa-yunohana.com/"),
    ],
  },
  {
    ids: ["manual-gifu-mugegawa-onsen"], name: "武芸川温泉", officialUrl: "https://www.mugegawa.jp/",
    features: ["温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "大人 平日850円／土日祝950円、小人（4歳～小学生）400円、4歳未満200円 ※入浴料金のみで岩盤浴も利用可", "https://www.mugegawa.jp/user_guide"),
      factNov14("営業時間", "湯処 10:00～23:00（最終入館受付 22:30）、岩盤浴 10:00～22:30", "https://www.mugegawa.jp/user_guide"),
      factNov14("定休日", "不定休（設備点検のため臨時休業あり）", "https://www.mugegawa.jp/user_guide"),
      factNov14("設備", "天然温泉（関市内唯一の源泉かけ流し）、岩盤浴、味処『湯楽里』", "https://www.mugegawa.jp/"),
      factNov14("利用条件", "刺青・タトゥー（シール・ペイント等含む）のある方は入館不可。小学生以下の方は岩盤浴の利用不可", "https://www.mugegawa.jp/user_guide"),
    ],
  },
  {
    ids: ["st-gifu-4679"], name: "養心薬湯", officialUrl: "https://yohshin-yakutoh.conohawing.com/",
    features: ["スチーム(ミスト)サウナ"],
    facts: [
      factNov14("料金", "入場料 大人700円、小人100円、幼児100円（支払いは現金のみ）", "https://yohshin-yakutoh.conohawing.com/"),
      factNov14("営業時間", "平日 12:00～23:00、土日祝日 10:00～23:00", "https://yohshin-yakutoh.conohawing.com/"),
      factNov14("設備", "湿式漢方サウナ（相対湿度90％〜100％、約40℃〜50℃の低温高湿）、薬湯", "https://yohshin-yakutoh.conohawing.com/"),
      factNov14("利用条件", "石鹸・シャンプー・タオル等は準備なし（各自持参、販売あり）", "https://yohshin-yakutoh.conohawing.com/"),
    ],
  },
  {
    ids: ["manual-gifu-yusennosato"], name: "養老温泉 ゆせんの里", officialUrl: "https://yusennosato.com/",
    features: ["水風呂あり", "温泉付き", "宿泊可", "貸切可"],
    facts: [
      factNov14("営業時間", "みのり乃湯 日帰り 8:00～22:00（最終受付21:30）。温熱療法館 日帰り 10:00～22:00（最終受付21:00）", "https://yusennosato.com/hotspring"),
      factNov14("設備", "サウナ（約90度）、汗蒸幕（ハンジュンマク）、ラドン房、五色岩盤浴、貸切風呂『こすもす』、かけ流し天然温泉", "https://yusennosato.com/hotspring"),
      factNov14("水風呂", "水風呂（17℃）、養老の天然水を使用", "https://yusennosato.com/hotspring"),
      factNov14("利用条件", "日帰り利用可（日帰り温泉『みのり乃湯』）。ホテルなでしこ併設で宿泊可", "https://yusennosato.com/hotspring"),
    ],
  },
  {
    ids: ["manual-gifu-rokujo-kitanoyu"], name: "六条温泉 喜多の湯", officialUrl: "https://super-sentou.com/shop-information/rokujyo-onsen/",
    features: ["サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "ご入浴 大人（中学生以上）平日750円／土日祝900円、小人350円、幼児200円（3才以下無料）。岩盤浴 大人600円。入浴+岩盤浴セット 平日1300円／土日祝1450円", "https://super-sentou.com/shop-information/rokujyo-onsen/"),
      factNov14("営業時間", "ご入浴 9時～深夜1時（最終受付深夜0時）、岩盤浴 9時～深夜0時", "https://super-sentou.com/shop-information/rokujyo-onsen/"),
      factNov14("定休日", "年中無休（設備点検のため臨時休業の場合あり）", "https://super-sentou.com/shop-information/rokujyo-onsen/"),
      factNov14("設備", "高温サウナ、岩盤浴5種（女専房・岩塩房・電磁房・陶板房・涼風房）、食事処『MUTSU』", "https://super-sentou.com/shop-information/rokujyo-onsen/"),
      factNov14("利用条件", "刺青（タトゥー・タトゥーシール含む）のある方は入場不可。タオルセット（レンタル）350円", "https://super-sentou.com/shop-information/rokujyo-onsen/"),
    ],
  },
  {
    ids: ["manual-shizuoka-hitoyado-sauna"], name: "HITOYADO SAUNA", officialUrl: "https://hitoyadosauna.com/",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "個室", "貸切可"],
    facts: [
      factNov14("営業時間", "10：00～22：00", "https://hitoyadosauna.com/"),
      factNov14("定休日", "木曜日", "https://hitoyadosauna.com/"),
      factNov14("設備", "1組限定貸切の完全プライベートサウナ（サウナ室75℃設定、HARVIA製ストーブ、セルフロウリュ制限なし）、リビング付、水風呂・外気浴スペース", "https://hitoyadosauna.com/"),
      factNov14("利用条件", "完全予約制（インターネット事前予約・2日前まで）。12歳以下の方は利用不可。水着着用必須。タトゥー可（貸切のため）。アメニティ無料（タオル・水着・ローブ等）", "https://hitoyadosauna.com/"),
    ],
  },
  {
    ids: ["manual-shizuoka-rakuspa-hamamatsu"], name: "RAKU SPA Cafe 浜松", officialUrl: "https://rakuspa.com/hamamatsu/",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "フリータイム入館料 大人（中学生以上）平日 税込1,550円／土・日・祝 税込1,750円、子供（4歳〜小学生）平日 税込660円／土・日・祝 税込750円。60分・90分の時間制コースもあり", "https://rakuspa.com/hamamatsu/access/"),
      factNov14("営業時間", "7:00〜深夜1:00（最終受付 深夜0:00）", "https://rakuspa.com/hamamatsu/access/"),
      factNov14("設備", "オートロウリュウサウナ、高濃度炭酸泉、露天岩風呂など10種類のお風呂とサウナ。低温・高温2種類の岩盤浴あり", "https://rakuspa.com/hamamatsu/facilities/spa/"),
      factNov14("水風呂", "水風呂あり（お風呂・サウナページに掲載）", "https://rakuspa.com/hamamatsu/facilities/spa/"),
      factNov14("利用条件", "刺青・ファッションタトゥー・シールタトゥーのある方は入館不可。フリータイムはバスタオル・フェイスタオル・館内着のレンタル料込み", "https://rakuspa.com/hamamatsu/guide/faq.php"),
    ],
  },
  {
    ids: ["manual-shizuoka-sauna-mysa"], name: "sauna MYSA", officialUrl: "https://sauna-mysa.jp/",
    features: ["男女共用"],
    facts: [
      factNov14("料金", "2時間 2,500円／フリータイム 3,800円", "https://sauna-mysa.jp/"),
      factNov14("利用条件", "水着着用の男女共用サウナ。18歳以下の方は利用不可。アメニティはロッカーに揃っており、水着のみ持参", "https://sauna-mysa.jp/"),
    ],
  },
  {
    ids: ["st-shizuoka-4836"], name: "SAUNA煌-KOU-", officialUrl: "https://sauna-kou.com/",
    features: ["オートロウリュ", "ロウリュあり", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "フリータイム（9:00～22:00）平日2,700円・土日祝2,900円。時間制 1時間 平日1,200円・土日祝1,400円／2時間 1,500円・1,700円／3時間 1,900円・2,100円。22:00以降は深夜料金+200円", "https://sauna-kou.com/service/"),
      factNov14("営業時間", "月・土・日・祝日 7:00〜24:00、火〜金 10:00〜24:00", "https://sauna-kou.com/service/"),
      factNov14("定休日", "メンテナンス等で不定休", "https://sauna-kou.com/service/"),
      factNov14("設備", "陰陽の異なる2つのサウナ空間。オートロウリュあり。サ飯は食事処「こう月」のラーメン", "https://sauna-kou.com/"),
      factNov14("利用条件", "男性専用施設（レディースデーあり）。小学生以下のお客様は利用不可。入れ墨・タトゥーは指定のタトゥーシール（500円）を貼れば入浴可", "https://sauna-kou.com/service/"),
    ],
  },
  {
    ids: ["manual-shizuoka-aratama-no-yu"], name: "あらたまの湯", status: "suspended", officialUrl: "https://aratamanoyu.jp/",
    features: ["温泉付き", "貸切可"],
    facts: [
      factNov14("料金", "入浴料 大人（中学生以上）730円、小学生360円、70歳以上360円、幼児（小学生未満）無料。再入浴可能。貸切風呂は60分1,570円（別途入浴料が必要）", "https://aratamanoyu.jp/introduction/more1.html"),
      factNov14("営業時間", "9:00～21:00（最終受付 20:00）", "https://aratamanoyu.jp/introduction/more1.html"),
      factNov14("定休日", "毎週月曜日（施設点検のための休館日あり）", "https://aratamanoyu.jp/introduction/more1.html"),
      factNov14("設備", "森林の湯と石庭の湯の2ゾーンがあり、一週間ごとに男湯と女湯が入れ替わる。サウナ・貸切風呂あり。泉質はナトリウム-炭酸水素塩泉", "https://aratamanoyu.jp/introduction/more1.html"),
      factNov14("利用条件", "サウナを利用する場合は自身専用のサウナマットが必要。小学生以上のお子様の混浴は不可", "https://aratamanoyu.jp/introduction/more1.html"),
      factNov14("営業状況", "公式のお知らせ（2026年3月1日付）により、大規模改修工事のため令和8年4月1日より1年間休館中", "https://aratamanoyu.jp/"),
    ],
  },
  {
    ids: ["manual-shizuoka-bijinyu"], name: "おふろcafe bijinyu", officialUrl: "https://ofurocafe-bijinyu.com/",
    features: ["スチーム(ミスト)サウナ", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "土日祝フリータイム入館料 1,680円（館内着付き）。タオルセット300円、館内着300円", "https://ofurocafe-bijinyu.com/41631"),
      factNov14("営業時間", "5:00～9:00（1階のみ）／10:00～24:00。カフェ 11:00～LO21:00", "https://ofurocafe-bijinyu.com/"),
      factNov14("定休日", "第3火曜日", "https://ofurocafe-bijinyu.com/"),
      factNov14("設備", "2種類の源泉（硫黄泉のカブラヲ温泉と、pH9.9のアルカリ性単純温泉・籠上温泉）、蒸し風呂、女性限定泥パックあり。コミック・書籍約1万冊のライブラリ併設", "https://ofurocafe-bijinyu.com/hotsprings"),
    ],
  },
  {
    ids: ["manual-shizuoka-fukisarashi-yu"], name: "ふきさらし湯", officialUrl: "https://www.fukisarashi-yu.jp/",
    features: ["ロウリュあり", "水風呂あり", "外気あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴料（サウナ付き）大人（中学生以上）平日1,300円・土日祝1,500円（お風呂のみ 平日800円・土日祝900円）、子ども（4歳以上）全日500円。回数券あり", "https://www.fukisarashi-yu.jp/"),
      factNov14("営業時間", "7:00〜19:00（最終入浴18:30）、金・土 7:00〜21:00（最終入浴20:30）", "https://www.fukisarashi-yu.jp/"),
      factNov14("定休日", "火曜日定休（祝日は営業し翌平日休業）。その他臨時休業あり", "https://www.fukisarashi-yu.jp/"),
      factNov14("設備", "HARVIA製ストーブを採用したフィンランド式サウナ（低温多湿でロウリュを楽しむ蒸気浴）。お湯は美肌軟水を使用", "https://www.fukisarashi-yu.jp/"),
      factNov14("水風呂", "水風呂（水深110cm、軟水）と外気浴スペースあり", "https://www.fukisarashi-yu.jp/"),
      factNov14("利用条件", "小学生以下のお子様のみでの入浴は不可（保護者同伴が必要）。タオル貸出あり（バスタオル300円、タオルセット500円）", "https://www.fukisarashi-yu.jp/"),
    ],
  },
  {
    ids: ["manual-shizuoka-ole-inn"], name: "ホテルオーレイン", officialUrl: "https://www.ole-inn.com/",
    features: ["温泉付き", "ロウリュあり", "水風呂あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "天然温泉大浴場 15:00～翌10:00", "https://www.ole-inn.com/hotspa/"),
      factNov14("設備", "最上階14Fの天然温泉大浴場（露天風呂付き）。サウナ・ロウリュウ・水風呂（男性浴場のみ）あり。源泉名は静岡まちなか温泉、泉質はナトリウム-塩化物温泉", "https://www.ole-inn.com/hotspa/"),
      factNov14("水風呂", "水風呂あり（男性浴場のみ）", "https://www.ole-inn.com/hotspa/"),
      factNov14("利用条件", "ホテル利用者のみ利用可（日帰り利用は不可）", "https://www.ole-inn.com/hotspa/"),
    ],
  },
  {
    ids: ["manual-shizuoka-hotel-prive"], name: "ホテルプリヴェ静岡", officialUrl: "https://www.hotel-prive.com/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "宿泊可"],
    facts: [
      factNov14("料金", "スカイスパ（大浴場）の利用料金は無料（宿泊者専用）", "https://www.hotel-prive.com/spa/"),
      factNov14("営業時間", "スカイスパ 15:00～25:00（最終入場 24:30）／6:00～9:30（最終入場 9:00）", "https://www.hotel-prive.com/spa/"),
      factNov14("設備", "最上階14階のスカイスパに露天風呂、男湯にドライサウナ、女湯にスチームサウナを完備。露天風呂からは富士山を眺望できる", "https://www.hotel-prive.com/spa/"),
      factNov14("水風呂", "男湯に水風呂あり", "https://www.hotel-prive.com/spa/"),
      factNov14("利用条件", "スカイスパは宿泊者専用（日帰り利用は不可）", "https://www.hotel-prive.com/spa/"),
    ],
  },
  {
    ids: ["manual-shizuoka-yudai-onsen"], name: "ゆうだい温泉", officialUrl: "https://yugo.co.jp/",
    features: ["温泉付き", "水風呂あり", "ロウリュあり", "サ飯あり"],
    facts: [
      factNov14("設備", "地下1200メートルから毎分200リットル湧出する100％天然温泉（アルカリ性単純温泉）。富士山と駿河湾を一望できる大展望露天風呂、屋上足湯、レストランあり", "https://yugo.co.jp/"),
      factNov14("水風呂", "富士山天然水の掛け流し水風呂「しきじリスペクトの滝」あり", "https://yugo.co.jp/"),
    ],
  },
  {
    ids: ["manual-shizuoka-kunozan"], name: "リバティーリゾート久能山", officialUrl: "https://kunozan.jp/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "入館料 大人（中学生～）平日1000円・土日祝日1500円、子供（3歳～小学生）平日600円・土日祝日800円、幼児（～2歳以下）平日400円・土日祝日600円", "https://kunozan.jp/"),
      factNov14("営業時間", "11:00～22:00（入浴21:30迄）（岩盤浴21:00迄）。8月8日から営業開始時間を11時に変更", "https://kunozan.jp/"),
      factNov14("定休日", "休館日 11/10(火)・11/24(火)・12/8(火)・12/22(火)", "https://kunozan.jp/"),
      factNov14("設備", "岩盤浴あり", "https://kunozan.jp/"),
      factNov14("利用条件", "日帰り入浴可（日帰り温泉として営業、入館料制）。宿泊も可。3歳以上のおむつの取れた子供から入浴可", "https://kunozan.jp/"),
    ],
  },
  {
    ids: ["manual-shizuoka-hanasaki-no-yu"], name: "華咲の湯", officialUrl: "https://hanasakinoyu.jp/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "えんてつカード会員は平日の入浴料が900円（税込）。65歳以上は月～金のシニアDAYで入浴料1,000円（税込）", "https://hanasakinoyu.jp/"),
    ],
  },
  {
    ids: ["manual-shizuoka-kirakubo"], name: "気楽坊", officialUrl: "https://www.tokinosumika.com/spa/kirakubo/",
    features: ["スチーム(ミスト)サウナ", "熱波師あり", "水風呂あり", "外気あり", "温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "1日券（10:30～24:00）大人 平日1,540円・土日祝日2,090円、小人 平日715円・土日祝日935円。夜間券（18:00～24:00）大人 平日1,320円・土日祝日1,540円。朝風呂（7:00～9:30）全日1,000円", "https://www.tokinosumika.com/spa/kirakubo/"),
      factNov14("営業時間", "1日券 10:30～24:00、朝風呂 7:00～9:30", "https://www.tokinosumika.com/spa/kirakubo/"),
      factNov14("設備", "高温サウナ、低温サウナ（露天、定期的にスチームが発生）、大浴場、露天風呂、水風呂。泉質はアルカリ性単純温泉。サウナ熱波イベントを開催", "https://www.tokinosumika.com/spa/kirakubo/"),
      factNov14("水風呂", "富士山の伏流水を使用した水風呂", "https://www.tokinosumika.com/spa/kirakubo/"),
      factNov14("利用条件", "刺青（いれずみ）・タトゥーのある方は入浴不可。レンタルタオルセット250円。お子様の混浴は6歳まで", "https://www.tokinosumika.com/spa/kirakubo/"),
    ],
  },
  {
    ids: ["manual-shizuoka-suruga-kenko-land"], name: "駿河健康ランド", officialUrl: "https://www.kur-hotel.co.jp/suruga/",
    features: ["温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "健康ランド入館料1,980円（宿泊料金に入館料が含まれる）", "https://www.kur-hotel.co.jp/suruga/"),
      factNov14("営業時間", "24時間営業", "https://www.kur-hotel.co.jp/suruga/"),
      factNov14("設備", "サウナ・岩盤浴完備。駿河湾を望む露天風呂は化石海水温泉を使用。仮眠室、コワーキングルーム、レストラン8店舗あり", "https://www.kur-hotel.co.jp/suruga/"),
      factNov14("利用条件", "宿泊可。宿泊者はチェックイン前の10:00から健康ランドを利用可能", "https://www.kur-hotel.co.jp/suruga/"),
    ],
  },
  {
    ids: ["manual-shizuoka-manyo-numazu"], name: "沼津・湯河原温泉 万葉の湯", officialUrl: "https://www.manyo.co.jp/numazu/",
    features: ["ロウリュあり", "温泉付き", "宿泊可", "貸切可", "サ飯あり"],
    facts: [
      factNov14("設備", "サウナでロウリュを毎日開催。家族風呂あり", "https://www.manyo.co.jp/numazu/"),
      factNov14("利用条件", "刺青・タトゥーをされている方の入館はお断り（当館の定めるルールを守れる方は入館可）。18歳未満の方のみでの入館は不可。日帰り入浴・宿泊ともに利用可", "https://www.manyo.co.jp/numazu/"),
    ],
  },
  {
    ids: ["manual-shizuoka-seishin-toki"], name: "精神と時の部屋", officialUrl: "https://seisintotokinoheya.com/",
    features: ["個室", "セルフロウリュ", "ロウリュあり"],
    facts: [
      factNov14("営業時間", "24時間（会員）、13時～21時（ビジター）", "https://seisintotokinoheya.com/"),
      factNov14("設備", "フィンランドサウナの個室を4台設置（80℃・90℃・100℃の3段階に温度調節可能、セルフロウリュウ可）。冷水シャワー、クールサウナ、フリースペースあり", "https://seisintotokinoheya.com/"),
      factNov14("水風呂", "水風呂はなく、冷水シャワーと冷却された風を浴びるクールサウナでクールダウンする", "https://seisintotokinoheya.com/"),
      factNov14("利用条件", "静岡市初の会員制個室サウナで男性限定。ビジター・体験の場合は要予約", "https://seisintotokinoheya.com/"),
    ],
  },
  {
    ids: ["manual-shizuoka-castle-sanoharu"], name: "静岡キャッスルホテル佐乃春", officialUrl: "https://castleshizuoka.hotel-support.co.jp/",
    features: ["宿泊可"],
    facts: [
      factNov14("料金", "宿泊 1名1泊 3,600円（税込）～", "https://castleshizuoka.hotel-support.co.jp/"),
    ],
  },
  {
    ids: ["manual-shizuoka-yufukei-shiori"], name: "湯風景しおり", officialUrl: "https://yufukeishiori.com/",
    features: ["ロウリュあり", "サ飯あり"],
    facts: [
      factNov14("設備", "ロウリュを開催（開催時間は公式サイトで案内）。全館に極上ナノ水を使用", "https://yufukeishiori.com/"),
    ],
  },
  {
    ids: ["manual-shizuoka-takanoyu"], name: "富士山天然水SPA サウナ鷹の湯", officialUrl: "https://yuya-p.jp/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "タオルレンタルあり", "サ飯あり"],
    facts: [
      factNov14("料金", "一般 平日1,200円・土日祝日1,400円、会員 平日1,000円・土日祝日1,200円、シニア（70歳以上）一般 平日1,100円・土日祝日1,200円。小学生は全日500円", "https://yuya-p.jp/"),
      factNov14("営業時間", "平日 9時～23時（最終入館22:00）、土日 8時～23時（最終入館22:00）。浴室の利用は22時30分まで。バレルサウナは10時～21時", "https://yuya-p.jp/"),
      factNov14("設備", "ドライサウナ（男湯100℃・女湯90℃）、薬草スチームサウナ、高温高湿サウナ、オートロウリュウのバレルサウナの4種。茶湯（24℃）、露天トゴール温泉あり", "https://yuya-p.jp/"),
      factNov14("水風呂", "富士山伏流水の天然水水風呂（かけ流し）。男湯露天にヒノキ水風呂（打たせ水あり）", "https://yuya-p.jp/"),
      factNov14("利用条件", "サウナ中心の施設のため未就学児および身長120cm以下の方は利用不可。入館料にタオルは含まれず、貸しタオルセットあり（有料）", "https://yuya-p.jp/"),
    ],
  },
  {
    ids: ["manual-shizuoka-hananoyu"], name: "富嶽温泉 花の湯", officialUrl: "https://www.tokinosumika.com/hananoyu/",
    features: ["塩サウナ", "スチーム(ミスト)サウナ", "温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "10:00～翌日9:00（23時間営業）。午前2時～午前6時は点検・清掃のため入浴不可", "https://tokinosumika.com/hananoyu/onsen"),
      factNov14("設備", "大露天風呂（草津の湯・変わり湯・陶器風呂ほか）、高濃度炭酸泉、麦飯石塩サウナ、備長炭サウナ、女湯露天にフィンランド式テントサウナ、薬草釜風呂", "https://tokinosumika.com/hananoyu/onsen"),
      factNov14("利用条件", "日帰り利用可（立ち寄り券あり。立ち寄り券利用時はバスタオル・館内着は別料金）。お食事のみの利用は入場料金不要。宿泊可（客室101室）", "https://tokinosumika.com/hananoyu/onsen"),
    ],
  },
  {
    ids: ["manual-shizuoka-konohana-no-yu"], name: "木の花の湯", officialUrl: "https://www.gotemba-konohananoyu.jp/",
    features: ["ロウリュあり", "熱波師あり", "温泉付き", "貸切可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入館料 平日 大人(中学生以上)1,800円・こども(3才～小学生)950円／土日祝 大人2,200円・こども1,150円。13時までの入館割引あり。貸切個室露天風呂「花伝」は1時間5,500円～", "https://www.gotemba-konohananoyu.jp/guide/"),
      factNov14("営業時間", "10:30～22:00（最終受付21:00）", "https://www.gotemba-konohananoyu.jp/guide/"),
      factNov14("定休日", "メンテナンスによる休館あり（不定期）", "https://www.gotemba-konohananoyu.jp/guide/"),
      factNov14("設備", "自家源泉の大浴場・富士山ビューの大露天風呂、サウナ（ロウリュウサービス）、貸切個室露天風呂19室、レストラン「ダイニング花衣」", "https://www.gotemba-konohananoyu.jp/facilities/"),
      factNov14("利用条件", "日帰り温泉施設。タトゥーによる入浴制限を解除（タトゥーフレンドリー推進）。3歳未満の大浴場利用不可。料金にフェイスタオル・バスタオル・諸税を含む", "https://www.gotemba-konohananoyu.jp/guide/"),
    ],
  },
  {
    ids: ["manual-shizuoka-minato-onsen"], name: "用宗みなと温泉", officialUrl: "https://minato-onsen.jp/",
    features: ["水風呂あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "平日 会員850円・一般1,000円／土日祝日 会員1,000円・一般1,200円、小学生まで350円、幼児（3歳以下）無料。回数券（10枚綴り）あり", "https://minato-onsen.jp/"),
      factNov14("営業時間", "10:00～24:00（最終受付23:00）。土日祝日は9:00開館", "https://minato-onsen.jp/"),
      factNov14("設備", "100％天然温泉の露天風呂、主浴槽、炭酸風呂、水風呂、サウナ。食事処「アオサギ食堂」、クラフトビール醸造所併設", "https://minato-onsen.jp/"),
      factNov14("水風呂", "水風呂あり（良質な天然水を使用した浴槽の一つとして公式サイトに記載）", "https://minato-onsen.jp/"),
    ],
  },
  {
    ids: ["manual-aichi-cred-spa-sauna"], name: "CRED SPA SAUNA", officialUrl: "https://www.credspasauna.com/",
    features: ["オートロウリュ", "ロウリュあり", "セルフロウリュ", "水風呂あり", "外気あり", "個室", "貸切可", "男女共用", "タオルレンタルあり"],
    facts: [
      factNov14("営業時間", "11:30～23:00（最終入館22:00、グループRoomは21:30）", "https://www.credspasauna.com/"),
      factNov14("設備", "38名まで入れる大型サウナ（オートロウリュは20分ごとに実施、貸切利用可）、完全個室のプライベートRoom（シングル／グループ、セルフロウリュ可）、バイブラの水風呂、芝生エリア", "https://www.credspasauna.com/"),
      factNov14("利用条件", "決済はキャッシュレスのみ。水着・サウナハット・タオル・ポンチョ等のレンタルあり。TatooはTatooデーの日のみ利用可", "https://www.credspasauna.com/"),
    ],
  },
  {
    ids: ["manual-aichi-ie-sauna-aichi"], name: "IE:SAUNA AICHI", officialUrl: "https://resauna.jp/aichi/",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "個室", "貸切可", "男女共用", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "プライベート8,000円／人、セミプライベート4,000円／人、パブリック2時間2,200円・3時間3,000円（いずれも1人あたり）", "https://resauna.jp/aichi/"),
      factNov14("営業時間", "プライベート 平日11:00-19:00・土日祝9:00-22:30、パブリック（平日のみ）19:00-22:00", "https://resauna.jp/aichi/"),
      factNov14("定休日", "年中無休（その他不定期で休みをいただく場合あり）", "https://resauna.jp/aichi/"),
      factNov14("設備", "一軒家を改装した貸切プライベートサウナ。フィンランド式サウナストーブで日替わりアロマのセルフロウリュ可。屋内外のととのいスペース、ラウンジ併設", "https://resauna.jp/aichi/"),
      factNov14("水風呂", "長方形の水風呂は水温16℃前後で、最大5人ほど入ることができる広さ", "https://resauna.jp/aichi/"),
      factNov14("利用条件", "タトゥー・刺青はラッシュガード等で完全に隠して利用（プライベートプラン除く）。食べ物・飲み物の持ち込み不可。水着等のレンタル各500円", "https://resauna.jp/aichi/"),
    ],
  },
  {
    ids: ["manual-aichi-loca-nagoya"], name: "LOCA THE CLASS. NAGOYA", officialUrl: "https://www.loca-nagoya.com/",
    features: ["個室", "水風呂あり", "外気あり"],
    facts: [
      factNov14("料金", "2時間制。初回体験￥20,000〜、ビジター利用￥50,000〜、会員1～2名様￥12,000〜・3名様￥15,000〜・4名様￥20,000〜（いずれも税込）", "https://www.loca-nagoya.com/"),
      factNov14("営業時間", "9:00〜翌4:00（最終受付2:00）。平日は11:00～翌4:00", "https://www.loca-nagoya.com/"),
      factNov14("設備", "完全個室4部屋（定員4名）。富士山溶岩プレートを使うマグマスパ式サウナ、地層式濾過（LOCA）装置の水風呂、外気浴スペース。サウナ用ウェア・ガウン完備", "https://www.loca-nagoya.com/"),
      factNov14("水風呂", "富士山の溶岩で作られた水風呂に、独自の濾過システムを使用したミネラル鉱石水をチラー循環", "https://www.loca-nagoya.com/"),
      factNov14("利用条件", "会員制サウナ（ビジター利用・初回体験も可）", "https://www.loca-nagoya.com/"),
    ],
  },
  {
    ids: ["manual-aichi-nagono-workbar-sauna"], name: "NAGONO WORK BAR&SAUNA（なごのサウナ）", officialUrl: "https://leopards.co.jp/service/workbarsauna/",
    features: ["ロウリュあり", "水風呂あり", "個室", "貸切可"],
    facts: [
      factNov14("営業時間", "1F SAUNA 10:00～22:30（営業日は月〜日。祝日・お盆・年末年始は休業している場合あり）", "https://leopards.co.jp/service/workbarsauna/"),
      factNov14("設備", "1Fは完全貸切の本格フィンランド式サウナ（岐阜県産ヒノキ使用、室温90度前後を基本設定、ロウリュ可、120分間、6名様まで貸切利用可）", "https://leopards.co.jp/service/workbarsauna/"),
      factNov14("利用条件", "完全予約制の貸切利用。手ぶらで利用可（アメニティ完備）", "https://leopards.co.jp/service/workbarsauna/"),
    ],
  },
  {
    ids: ["manual-aichi-raku-spa-garden-nagoya"], name: "RAKU SPA GARDEN 名古屋", officialUrl: "https://rakuspa.com/nagoya/",
    features: ["塩サウナ", "熱波師あり", "水風呂あり", "温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "フリータイム入館 大人 平日 税込2,100円・土日祝 税込2,750円、子供 平日 税込660円・土日祝 税込770円。夜割（21:00～）・90分コース・朝風呂あり", "https://rakuspa.com/nagoya/access/"),
      factNov14("営業時間", "[日～木・祝] 9:00～翌2:00（最終受付 翌1:00）、[金・土・祝前日] 9:00～翌8:00（最終受付 翌1:00）。朝風呂は土・日・祝5:00～8:00", "https://rakuspa.com/nagoya/access/"),
      factNov14("設備", "天然温泉（炭酸の湯・絹の湯・岩の湯・壺の湯ほか）、高温サウナ、塩サウナ（女湯のみ）、岩盤浴5種類、コミック5万冊以上、食事メニュー200種類以上", "https://rakuspa.com/nagoya/facilities/spa/"),
      factNov14("水風呂", "炭酸水風呂", "https://rakuspa.com/nagoya/facilities/spa/"),
      factNov14("利用条件", "フリータイム入館料にタオルセット・館内着・岩盤浴利用を含む。大人（中学生以上）・子供（4歳〜小学生）・3歳以下は無料。入館料は時季によりシーズン料金として変動する場合あり", "https://rakuspa.com/nagoya/access/"),
    ],
  },
  {
    ids: ["st-aichi-4824"], name: "reborn蒲郡店", officialUrl: "https://mens-reborn.jp/sauna/",
    features: ["個室", "セルフロウリュ", "ロウリュあり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "90分 1名様￥4,500／120分 ￥5,000／150分 ￥6,000（2名様は1名あたり￥500オフ、メンバーズ会員は表示価格から￥1,000オフ）", "https://mens-reborn.jp/sauna/"),
      factNov14("営業時間", "10:00～23:00", "https://mens-reborn.jp/"),
      factNov14("定休日", "水曜日／第2・4木曜日", "https://mens-reborn.jp/"),
      factNov14("設備", "個室プライベートサウナ（定員3名、最大105℃、セルフロウリュウ可、40インチ大型モニタで動画視聴可能）", "https://mens-reborn.jp/sauna/"),
      factNov14("利用条件", "完全予約制（当日予約可）。男性専用サロン併設。タオル無料・サウナハットレンタルありで手ぶら来店可", "https://mens-reborn.jp/sauna/"),
    ],
  },
  {
    ids: ["manual-aichi-sauna-m"], name: "Sauna M", officialUrl: "https://sauna-m.com/",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "個室", "貸切可", "男女共用"],
    facts: [
      factNov14("料金", "ビジター120分コース（税抜）：1名 平日10,500円／平日夜間・土日祝12,500円、2名 14,500円／16,500円、3名 18,500円／20,500円、4名 22,500円／24,500円。180分コースあり", "https://sauna-m.com/"),
      factNov14("営業時間", "日～木曜 10:00～22:00、金・土曜 10:00～29:00", "https://sauna-m.com/"),
      factNov14("設備", "コンセプトの異なる完全個室2室（アグニ・ヴァナ）。本格フィンランド式サウナでセルフロウリュが可能、サウナ温度100度前後。水風呂と外気浴スペースを各室に完備", "https://sauna-m.com/"),
      factNov14("水風呂", "全室に水風呂完備。水温15℃～16℃程度", "https://sauna-m.com/"),
      factNov14("利用条件", "完全予約制・完全貸切の個室サウナ。男女での利用が可能（各室4名まで、最大6名）。支払いは完全キャッシュレス決済で現金不可", "https://sauna-m.com/"),
    ],
  },
  {
    ids: ["manual-aichi-sauna-dot"], name: "SAUNA.（サウナドット）", officialUrl: "https://saunadot.com/",
    features: ["オートロウリュ", "セルフロウリュ", "ロウリュあり", "水風呂あり", "貸切可"],
    facts: [
      factNov14("料金", "入館料90分：月〜木 2,380円、金土日祝前日 2,640円。延長料金 30分330円。貸切プラン 120分30,000円（税別）、150分40,000円（税別）", "https://saunadot.com/"),
      factNov14("営業時間", "月〜木 12:00〜24:00（23時受付終了）、金土日祝前日 12:00〜03:00（02時受付終了）", "https://saunadot.com/"),
      factNov14("定休日", "不定休", "https://saunadot.com/"),
      factNov14("設備", "サウナ室2室：第1サウナ室「ヘロヘロ」（Heloストーブ2基、毎時00分・30分のオートロウリュ、ロフト・寝転びスペース）、第2サウナ室「ケロパッチ」（ケロの古木、セルフロウリュ可）", "https://saunadot.com/"),
      factNov14("水風呂", "バイブラ付き水風呂2種：アクリル製シングル「名古屋ソルジャー」9.5°、常温バイブラ「ブルーラグーンレスト」20°", "https://saunadot.com/"),
    ],
  },
  {
    ids: ["manual-aichi-sense-sauna"], name: "SENSE sauna", officialUrl: "https://sense-sauna.jp/",
    features: ["セルフロウリュ", "ロウリュあり", "熱波師あり", "水風呂あり", "外気あり", "個室", "サ飯あり"],
    facts: [
      factNov14("営業時間", "サウナ 9:00～24:00（最終受付23:30）、金曜日・土曜日はオールナイト営業。コワーキング 9:00～24:00", "https://sense-sauna.jp/"),
      factNov14("定休日", "年中無休", "https://sense-sauna.jp/"),
      factNov14("設備", "宇宙をテーマにした4つのサウナ室（SUN 100℃、OCEAN 80℃・セルフロウリュ可、ZEN 90℃・30分毎にスタッフロウリュ、MOON テラスの個室）、個室7室、外気浴スペース、カフェ＆バー併設", "https://sense-sauna.jp/"),
      factNov14("水風呂", "檜の水樽「WATERBAREREL」3つ", "https://sense-sauna.jp/"),
      factNov14("利用条件", "男性専用サウナ。会員登録・予約不要", "https://sense-sauna.jp/"),
    ],
  },
  {
    ids: ["manual-aichi-tenet-sauna"], name: "TENET SAUNA", officialUrl: "https://tenetsauna.jp/",
    features: ["個室", "貸切可", "水風呂あり", "外気あり", "男女共用", "サ飯あり"],
    facts: [
      factNov14("料金", "1名利用（税込）：60分 平日4,000円／土日祝4,500円、90分 5,000円／5,500円、120分 6,000円／6,500円、150分 7,000円／7,500円。2名利用・男女2名利用のプランあり", "https://tenetsauna.jp/"),
      factNov14("営業時間", "12:00～翌4:00（日曜日は12:00～23:00）", "https://tenetsauna.jp/"),
      factNov14("定休日", "不定休", "https://tenetsauna.jp/"),
      factNov14("設備", "完全個室サウナ全6室（各室に水風呂完備、サウナ室から水風呂まで3歩）。女性専用サウナ室・ととのいルーム、よもぎ蒸しあり。旧「Private Sauna EXIT」からリニューアル", "https://tenetsauna.jp/"),
      factNov14("水風呂", "各個室に水風呂を設置", "https://tenetsauna.jp/"),
      factNov14("利用条件", "完全予約制。1室につき最大2名まで。個室では施設指定の館内着・水着の着用が必要。タトゥーのある方も利用可。子ども・ペットの同伴は不可", "https://tenetsauna.jp/"),
    ],
  },
  {
    ids: ["manual-aichi-tobe-sauna"], name: "TOBE SAUNA", officialUrl: "https://tobesauna.com/",
    features: ["個室", "水風呂あり"],
    facts: [
      factNov14("料金", "90分利用（完全予約制）：1名 平日¥5,000／土日祝¥5,500、2名 ¥9,000／¥10,000、3名 ¥12,000／¥13,500、4名 ¥14,000／¥16,000。19:00以降は夜間料金おひとりさま+500円", "https://tobesauna.com/"),
      factNov14("営業時間", "11:00～24:30（最終受付23:00）", "https://tobesauna.com/"),
      factNov14("設備", "北欧フィンランドの伝統的な樽型サウナを導入した完全個室サウナ。水風呂、酵素BOXを備え、コワーキングスペースも併設", "https://tobesauna.com/"),
      factNov14("水風呂", "水風呂を完備（木製コーティング済のリラックスバスタブ）", "https://tobesauna.com/"),
      factNov14("利用条件", "完全予約制。男女での同時利用は不可（同性同士のみ、最大4名まで）。タトゥーのある方も利用可。子ども・ペットの同伴不可、飲食物の持ち込み不可", "https://tobesauna.com/"),
    ],
  },
  {
    ids: ["manual-aichi-zakioka-sauna"], name: "ZAKIOKA SAUNA", officialUrl: "https://zakiokasauna.com/",
    features: ["セルフロウリュ", "ロウリュあり", "熱波師あり", "水風呂あり", "外気あり", "男女共用", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "2時間プラン 平日2,780円（税込）／土日・祝2,980円（税込）、時間無制限 平日3,780円（税込）／土日・祝3,980円（税込）。延長料金あり（30分まで250円など）", "https://zakiokasauna.com/"),
      factNov14("営業時間", "9:00〜20:00（入館は18:00まで）", "https://zakiokasauna.com/"),
      factNov14("定休日", "木曜日（営業日は月～水・金～日）", "https://zakiokasauna.com/"),
      factNov14("設備", "六角形のサウナ棟とフィンランド「サウニア」の縦型バレルサウナの2棟。セルフロウリュ可、スタッフによるアウフグースあり。お食事処「itadaki」併設", "https://zakiokasauna.com/"),
      factNov14("水風呂", "名水百選の湧水を使った3種類の水風呂：潜る水風呂ZABOON（1人用・深さ130cm）、寝る水風呂GOROON（1人用・深さ30cm）、座る水風呂PUKAAN（4人用・深さ60cm）", "https://zakiokasauna.com/"),
      factNov14("利用条件", "男女共用施設。中学生未満は利用不可（中学生から高校生までは保護者同伴で利用可能）。タトゥーのある方も利用可。バスタオル・フェイスタオル・館内着の無料貸出あり", "https://zakiokasauna.com/"),
    ],
  },
  {
    ids: ["manual-aichi-zicca-sauna"], name: "ZICCAサウナ", officialUrl: "https://www.zicca-sauna.com/",
    features: ["個室", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり"],
    facts: [
      factNov14("料金", "部屋により異なる。MIYA・SHIZUKA：60分 ¥5,000～／120分 ¥10,000、OKU・HIBIKI：60分 ¥3,600～／120分 ¥7,200、URARA：60分 ¥3,300～／120分 ¥6,600", "https://www.zicca-sauna.com/rooms/miya.html"),
      factNov14("営業時間", "通常9:00～21:00（メンバーシップ枠の利用者は朝6:30～夜24:00）", "https://www.zicca-sauna.com/"),
      factNov14("設備", "完全個室5室（MIYA・SHIZUKA・OKU・HIBIKI・URARA）。サウナ室は温度設定70℃〜110℃（予約時に指定可）、フィンランド式サウナストーブ、セルフロウリュ対応（定員1〜2名）", "https://www.zicca-sauna.com/rooms/miya.html"),
      factNov14("水風呂", "水風呂は外気スペースに設置：温度10℃〜20℃、ReFINE浄水システムとBeauty Aquaナノバブルを採用", "https://www.zicca-sauna.com/rooms/miya.html"),
      factNov14("利用条件", "MIYA・SHIZUKA・OKU・HIBIKIは男性専用ルーム、URARAは女性専用準備室", "https://www.zicca-sauna.com/"),
    ],
  },
  {
    ids: ["manual-aichi-wood-design-park-okazaki"], name: "ウッドデザインパーク岡崎", officialUrl: "https://wood-designpark.jp/okazaki/sauna/",
    features: ["薪サウナ", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "貸切可", "宿泊可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "テントサウナ利用料（お一人あたり）：2名様でのご利用 3,500円/人、3名様 3,300円/人、4名様以上 3,100円/人。BBQ利用は+2,600円/人。宿泊者は30％OFF", "https://wood-designpark.jp/okazaki/sauna/"),
      factNov14("営業時間", "利用時間は3部制：午前の部 10:30～13:30、午後の部 14:30～17:30、ナイトの部 18:30～21:00", "https://wood-designpark.jp/okazaki/sauna/"),
      factNov14("定休日", "年中無休", "https://wood-designpark.jp/okazaki/sauna/"),
      factNov14("設備", "ロシア製3層式テントサウナ（薪ストーブ、セルフロウリュ可）。シャワールーム完備（シャンプー、コンディショナー、ボディソープ、ドライヤー）", "https://wood-designpark.jp/okazaki/sauna/"),
      factNov14("水風呂", "清流・乙川が天然の水風呂（ねそべりエリア、ナイアガラエリア、ダイビングエリア）。雨の日はドラム缶水風呂", "https://wood-designpark.jp/okazaki/sauna/"),
      factNov14("利用条件", "ご利用人数は2名様～6名様（テントサウナに一度に入れる人数は4名まで）。1名様での利用も可能だが2名様分の料金が必要。有料レンタル：バスタオル300円/枚など", "https://wood-designpark.jp/okazaki/sauna/"),
    ],
  },
  {
    ids: ["manual-aichi-kanie-sauna"], name: "カニエサウナ", officialUrl: "https://kaniesauna.com/",
    features: ["オートロウリュ", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "1時間15分：平日 基本料金 1,000円／タオル付き 1,150円、土日祝 基本料金 1,200円／貸しタオル付き 1,350円。延長料金 15分ごと 200円", "https://kaniesauna.com/"),
      factNov14("営業時間", "月〜木 11時〜25時、金曜日 11時〜27時、土曜日 8時〜27時、日曜日 8時〜25時。祝前日は27時まで営業", "https://kaniesauna.com/"),
      factNov14("定休日", "年中無休", "https://kaniesauna.com/"),
      factNov14("設備", "ヒノキで作ったサウナ室（オートロウリュウとセルフロウリュウあり）、シャワールーム、温浴、屋上外気浴スペース", "https://kaniesauna.com/"),
      factNov14("水風呂", "水風呂は9℃と15℃の2種類", "https://kaniesauna.com/"),
    ],
  },
  {
    ids: ["manual-aichi-canal-resort"], name: "キャナル・リゾート", officialUrl: "https://canalresort.jp/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("設備", "源泉48.8℃の天然温泉のお風呂ゾーン、岩盤浴ゾーン、リラクゼーションゾーン、キャナルラウンジ、グルメゾーンを備える名古屋最大級の温浴施設。南エリアにはテントサウナ・バレルサウナがある", "https://canalresort.jp/"),
    ],
  },
  {
    ids: ["manual-aichi-totonoiya"], name: "サウナ とと乃井や", officialUrl: "https://totonoiya.net/",
    features: ["水風呂あり", "外気あり", "サ飯あり"],
    facts: [
      factNov14("料金", "平日：サウナ1時間1,500円・1時間30分1,800円・2時間2,100円・フリータイム3,500円。土日祝：1時間1,800円・フリータイム4,400円", "https://totonoiya.net/"),
      factNov14("営業時間", "6:00～0:00", "https://totonoiya.net/"),
      factNov14("定休日", "年中無休", "https://totonoiya.net/"),
      factNov14("設備", "レインシャワー、冷水シャワー、高気圧酸素ボックス、イートインスペース、漫画スペース、マッサージチェア、外気浴スペース（インフィニティチェア）を完備", "https://totonoiya.net/"),
      factNov14("水風呂", "かけ流しの天然地下水風呂（18℃）と、直立で頭のてっぺんまで入れる超冷軟水風呂（9〜15℃）の2種類", "https://totonoiya.net/"),
      factNov14("利用条件", "18歳未満は利用不可。刺青・タトゥーのある方は利用不可。黙浴がルールで、受付で説明とお約束への同意が必要", "https://totonoiya.net/"),
    ],
  },
  {
    ids: ["manual-aichi-sauna-pia"], name: "サウナ ピア", officialUrl: "https://www.sauna-pia.co.jp/",
    features: ["水風呂あり", "外気あり", "サ飯あり"],
    facts: [
      factNov14("料金", "レギュラータイム2,700円（土・日・祝は+100円）、ショートタイム（60分）1,500円、サンライズタイム1,900円、朝風呂1,100円。深夜追加料金1,000円", "https://www.sauna-pia.co.jp/price"),
      factNov14("営業時間", "入館AM11:00〜（AM9:00閉館、最終受付AM8:40）。オールナイト営業", "https://www.sauna-pia.co.jp/price"),
      factNov14("定休日", "年中無休", "https://sauna-pia.co.jp/"),
      factNov14("設備", "本格的フィンランド方式のサウナ室（100℃超えの高温サウナ）、庭の見える浴槽、レストルーム、仮眠室、コミックルーム（約9,000冊）、AVルーム、食事処「水郷」", "https://www.sauna-pia.co.jp/info"),
      factNov14("水風呂", "常時オーバーフローしている清潔な水風呂", "https://www.sauna-pia.co.jp/info"),
      factNov14("利用条件", "男性専用施設。飲食物の持ち込みは禁止。中学生以下は父兄同伴で利用可（オールタイム半額）", "https://www.sauna-pia.co.jp/info"),
    ],
  },
  {
    ids: ["manual-aichi-sauna-moya"], name: "サウナ 靄", officialUrl: "https://sauna-moya.jp/",
    features: ["個室", "水風呂あり", "外気あり"],
    facts: [
      factNov14("料金", "会員制プラン：90分 月2回8,800円・月4回15,400円・月8回26,400円（税込）、120分 月2回11,000円・月4回19,800円・月8回33,000円（税込）。同伴者は90分4,400円・120分5,500円", "https://sauna-moya.jp/"),
      factNov14("営業時間", "10時〜25時", "https://sauna-moya.jp/"),
      factNov14("定休日", "不定休", "https://sauna-moya.jp/"),
      factNov14("設備", "テーマの異なる4室のプライベートサウナ（一ノ間1〜2名、二ノ間1〜4名、三ノ間1名、四ノ間1〜3名）。完全個室で水風呂・外気浴スペースを備える", "https://sauna-moya.jp/"),
      factNov14("水風呂", "水風呂を完備（完全個室・外気浴スペースあり）", "https://sauna-moya.jp/"),
      factNov14("利用条件", "会員制・事前予約制のプライベートサウナ。異性同士の同室利用は不可。会員の同伴者は会員登録不要", "https://sauna-moya.jp/"),
    ],
  },
  {
    ids: ["manual-aichi-sauna-fuji-sakae"], name: "サウナ＆カプセル フジ栄", officialUrl: "https://fto.co.jp/",
    features: ["オートロウリュ", "ロウリュあり", "熱波師あり", "スチーム(ミスト)サウナ", "セルフロウリュ", "水風呂あり", "貸切可", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "普通入泉 平日2,500円・土日祝2,700円、深夜入泉 平日3,500円・土日祝3,700円、60分サウナ1,500円。貸切サウナ（90分）は平日4,000円〜", "https://fto.co.jp/sauna_spa/"),
      factNov14("営業時間", "普通入泉の入館は6:00～24:00（深夜2時以降は深夜料金+1,000円で翌12:00まで利用可）。深夜入泉は0:00～6:00入館で12:00まで利用可", "https://fto.co.jp/sauna_spa/"),
      factNov14("定休日", "毎月第2火曜日は清掃・消毒のため10:00～14:00閉館", "https://fto.co.jp/sauna_spa/"),
      factNov14("設備", "漢のサウナ（80〜90℃、毎時00分アウフグース・毎時30分三連式オートロウリュウ）、亜熱帯スチーム、木漏れ日ロウリュウ（70〜80℃）、全長20mの超音波流水バス、カプセルホテル368室", "https://fto.co.jp/sauna_spa/"),
      factNov14("水風呂", "浅瀬の水（約25℃）と深海の水（約14℃）の2種類の水風呂", "https://fto.co.jp/sauna_spa/"),
      factNov14("利用条件", "男性専用施設。カプセル宿泊可（宿泊料金にサウナ＆バス料金を含む）。貸切サウナは5名から予約可（90分・セルフロウリュウ付き）", "https://fto.co.jp/capsule/"),
    ],
  },
  {
    ids: ["manual-aichi-saunalab-nagoya"], name: "サウナラボ名古屋", officialUrl: "https://saunalab.jp/nagoya/",
    features: ["男女共用", "貸切可", "サ飯あり"],
    facts: [
      factNov14("料金", "3時間 平日2,700円・土日祝／特定日3,300円（延長30分ごと500円）。フリー（平日のみ）4,500円。ナイトサウナ2時間（18:00〜閉店）平日2,000円・土日祝2,500円。小学生500円", "https://saunalab.jp/nagoya/"),
      factNov14("営業時間", "12:00〜21:00（サウナの利用は20:30まで）", "https://saunalab.jp/nagoya/"),
      factNov14("定休日", "火曜日（2026年3月より毎週火曜日が定休日）", "https://saunalab.jp/nagoya/"),
      factNov14("設備", "男女共用サウナ、女性専用・男性専用サウナ、休憩スペース「フォレストライブラリー」「マウンテンライブラリー」、ウィスキング（完全予約制）、サウナグッズ販売のサウナマーケット", "https://saunalab.jp/nagoya/"),
      factNov14("利用条件", "男女共用のサウナ施設で、当日予約なしで利用可。貸切プランあり。小学生は保護者同伴、小学生未満は無料", "https://saunalab.jp/nagoya/"),
    ],
  },
  {
    ids: ["manual-aichi-mikawaonsen-kaiyutei"], name: "みかわ温泉 海遊亭", officialUrl: "https://mikawaonsen.co.jp/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴 大人1,200円・子供800円・未就学児500円（いずれも税込）", "http://mikawaonsen.co.jp/en/bath/"),
      factNov14("営業時間", "大浴場 6:00～10:00・15:00～23:00（サウナは15:00～22:00）。日帰り入浴は15:00～18:00", "http://mikawaonsen.co.jp/en/bath/"),
      factNov14("定休日", "不定休（日帰り入浴は来館前に電話での確認が必要）", "http://mikawaonsen.co.jp/en/bath/"),
      factNov14("設備", "男女別の大浴場とサウナを備える温泉旅館（全27室）。離れ「ゆらぎ」全4室には三河湾を望む客室専有露天風呂がある", "http://mikawaonsen.co.jp/en/access-faq/"),
      factNov14("利用条件", "日帰り入浴可（15:00～18:00、サウナも利用可）。大浴場への犬の同伴は不可（入浴中は犬は客室で待機）", "http://mikawaonsen.co.jp/en/bath/"),
    ],
  },
  {
    ids: ["st-aichi-4703"], name: "安心お宿プレミア名古屋栄店", officialUrl: "https://www.anshin-oyado.jp/nagoya/miryoku.html",
    features: ["オートロウリュ", "ロウリュあり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "湯処プラン（お風呂・サウナ・ラウンジ）2時間1,980円・5時間2,480円・10時間2,980円（税込）。宿泊プランは1泊6,480円〜", "https://en.anshin-oyado.jp/shop/nagoya/price/"),
      factNov14("営業時間", "24時間営業（宿泊プラン12:00～翌日15:00、湯処プラン3:00～26:00）。大浴場・サウナにはメンテナンス時間帯あり", "https://www.anshin-oyado.jp/nagoya/miryoku.html"),
      factNov14("設備", "人工温泉（40種類以上の天然ミネラル配合）、オートロウリュ式サウナ、岩盤浴（女性大浴場のみ）、個室シャワー（女性大浴場のみ）、フリーラウンジ、無料のドリンクバー・朝食カレー", "https://www.anshin-oyado.jp/nagoya/miryoku.html"),
      factNov14("利用条件", "日帰り利用可（湯処プラン）。男女別フロアのカプセルホテル。18歳未満の利用は不可", "https://www.anshin-oyado.jp/nagoya/miryoku.html"),
    ],
  },
  {
    ids: ["manual-aichi-kamenoi-chitamihama"], name: "亀の井ホテル 知多美浜", officialUrl: "https://kamenoi-hotels.com/chitamihama/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り温泉 平日 大人（中学生以上）800円・小学生400円・未就学児無料、土日祝 大人900円・小学生400円・未就学児無料", "https://kamenoi-hotels.com/chitamihama/onsen/"),
      factNov14("営業時間", "日帰り温泉 火・金曜日13:00～20:30、その他の曜日11:00～20:30（受付終了20:00）。宿泊者 5:00～9:00、11:00～24:00（火・金は13:00～）", "https://kamenoi-hotels.com/chitamihama/onsen/"),
      factNov14("設備", "天然温泉（みはま温泉）の大浴場・露天風呂。泉質はナトリウム・塩化物-炭酸水素塩泉", "https://kamenoi-hotels.com/chitamihama/onsen/"),
      factNov14("利用条件", "日帰り温泉の利用が可能（曜日により開始時刻が異なる）", "https://kamenoi-hotels.com/chitamihama/onsen/"),
      { label: "サウナ設備", value: "公式サイトの温泉ページにサウナの記載なし（2026-11-12確認）。ホテルは営業中で、天然温泉の大浴場・露天風呂がある。サウナの有無が確認できないため要確認のまま掲載", sourceUrl: "https://kamenoi-hotels.com/chitamihama/onsen/", checkedAt: "2026-11-12" },
    ],
  },
  {
    ids: ["manual-aichi-routine"], name: "個室サウナROUTINE", officialUrl: "https://sauna-routine.com/",
    features: ["個室", "セルフロウリュ", "ロウリュあり", "水風呂あり", "貸切可"],
    facts: [
      factNov14("料金", "シングルルーム（1名）60分3,000円・90分4,000円・120分5,000円、グループルーム（最大2名）90分8,000円・120分10,000円、貸切プラン（最大8名）120分35,000円", "https://sauna-routine.com/"),
      factNov14("営業時間", "6:00～26:00（木曜日は10:00～26:00）。WEB予約は24時間可能", "https://sauna-routine.com/"),
      factNov14("設備", "個室サウナ（シングルルーム／最大2名のグループルーム）。フィンランド式ロウリュ、水風呂、シャワールーム、リラックススペース、パウダースペース", "https://sauna-routine.com/"),
      factNov14("利用条件", "男性専用の会員制（会員登録無料）。事前WEB予約制で、支払いはクレジットカードのみ。手ぶら利用可（大小タオル・アメニティを用意）", "https://sauna-routine.com/"),
    ],
  },
  {
    ids: ["manual-aichi-ozone-yunoshiro"], name: "大曽根温泉 湯の城", officialUrl: "https://www.p-castle.co.jp/yunoshiro/",
    features: ["ロウリュあり", "熱波師あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("設備", "極上の温泉12種類の湯巡りとサウナ、岩盤浴「癒の城」、食事処", "https://www.p-castle.co.jp/yunoshiro/about-yunoshiro"),
    ],
  },
  {
    ids: ["manual-aichi-midori-rakunoyu"], name: "天然温泉 みどり楽の湯", officialUrl: "https://rakunoyu.com/midori/",
    features: ["温泉付き", "水風呂あり", "サ飯あり"],
    facts: [
      factNov14("料金", "入泉料 大人（会員）平日850円・土日祝900円、大人（一般）平日950円・土日祝1,000円、小学生400円、幼児（4歳～小学生未満）200円。岩盤房 大人 会員450円・一般550円", "https://rakunoyu.com/midori/"),
      factNov14("営業時間", "全日8:00～24:00（最終受付23:30）。岩盤房は8:00～23:30", "https://rakunoyu.com/midori/"),
      factNov14("定休日", "年中無休（メンテナンス休館日あり）", "https://rakunoyu.com/midori/"),
      factNov14("設備", "自家源泉の天然温泉（室内風呂・大自然露天風呂、炭酸泉）、サウナ、岩盤房、食事処「楽然」、無料コミックコーナー（6,000冊）", "https://rakunoyu.com/midori/"),
      factNov14("水風呂", "サウナ後に利用できる冷水浴を用意。男性露天には水風呂あり", "https://rakunoyu.com/midori/"),
      factNov14("利用条件", "入れ墨・タトゥー（シール・ペイント等含む）のある方は入館不可。小学生以下のお子様のみでの入浴は不可", "https://rakunoyu.com/midori/"),
    ],
  },
  {
    ids: ["manual-aichi-korona-anjo"], name: "天然温泉コロナの湯 安城店", officialUrl: "https://www.korona.co.jp/onsen/anj/",
    features: ["熱波師あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("設備", "アウフグースイベントを実施。サウナ飯の提供あり（内容は季節・店舗により異なる）", "https://www.korona.co.jp/onsen/detail/2"),
      factNov14("営業状況", "公式のお知らせにより、リニューアル工事に伴い2026年10月26日から12月17日まで休業中（12月18日にリニューアルオープン予定）", "https://www.korona.co.jp/onsen/anj/"),
    ],
  },
  {
    ids: ["manual-aichi-toukichirou"], name: "湯のや 天然温泉 湯吉郎", officialUrl: "https://toukichirou.com/",
    features: ["スチーム(ミスト)サウナ", "オートロウリュ", "ロウリュあり", "塩サウナ", "セルフロウリュ", "水風呂あり", "外気あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("設備", "100%天然温泉スチームサウナ「湯げ吉」、15分毎にスタートするオートアロマロウリュと塩サウナの2種類のサウナ（温冷交互浴「零秒サ室」）。3Fテラスにはセルフロウリュが楽しめるテントサウナ", "https://toukichirou.com/sauna"),
      factNov14("水風呂", "天然温泉を満たした冷水風呂「美ず吉」、天然水風呂・清涼地下水風呂。サウナ室内に水風呂を備える「零秒サ室」あり", "https://toukichirou.com/sauna"),
    ],
  },
  {
    ids: ["manual-aichi-hotel-hoqa"], name: "名古屋HOTEL HOQA 花色の湯", officialUrl: "https://nagoyahotel-hoqa.jp/",
    features: ["ドライサウナ", "セルフロウリュ", "ロウリュあり", "個室", "外気あり", "男女共用", "宿泊可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("設備", "全室個室のプライベートサウナ（ドライサウナ、約85℃〜95℃設定、定員2名）。個室露天風呂（ラドン含有人工温泉）、客室ごとに異なる天然鉱石の岩盤浴、リクライニングチェア", "https://nagoyahotel-hoqa.jp/spa-sauna/"),
      factNov14("水風呂", "専用の水風呂はなく、ロウリュ用の砕氷（無料）での対応が案内されている", "https://nagoyahotel-hoqa.jp/spa-sauna/"),
      factNov14("利用条件", "ショートステイ/デイユースなどの日帰り利用が可能。完全個室のため男女での利用も可能。フェイスタオル・バスタオル・館内着・サウナマット等のレンタル・アメニティあり", "https://nagoyahotel-hoqa.jp/spa-sauna/"),
    ],
  },
  {
    ids: ["manual-aichi-kanayama-hotel"], name: "名古屋金山ホテル", officialUrl: "https://kanayama-hotel.jp/",
    features: ["宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場・サウナ 15:30～24:00、5:00～9:00（朝風呂）", "https://kanayama-hotel.jp/facility/spa/"),
      factNov14("設備", "2026年7月に大浴場をリニューアルし、サウナを新設。寝湯のある大浴場（男性2F・女性3F）", "https://kanayama-hotel.jp/facility/spa/"),
      factNov14("利用条件", "利用時間内は何度でも利用可能。宿泊者は系列スパ「湯～とぴあ宝」を無料で利用可能（フロントで無料入場券を配布）", "https://kanayama-hotel.jp/facility/spa/"),
      { label: "サウナ設備", value: "2026年7月の大浴場リニューアルでサウナを新設（公式サイトの施設・Spaページに明記）。利用時間 15:30〜24:00／5:00〜9:00（朝風呂）、男性2F・女性3F", sourceUrl: "https://kanayama-hotel.jp/facility/spa/", checkedAt: "2026-11-12" },
    ],
  },
  {
    ids: ["manual-aichi-ryusenji-moriyama"], name: "竜泉寺の湯 名古屋守山本店", officialUrl: "https://www.ryusenjinoyu.com/moriyama",
    features: ["温泉付き", "タオルレンタルあり", "サ飯あり"],
    facts: [
      factNov14("営業時間", "ご入浴 朝6:00～深夜2:30（最終受付 深夜1:45）。フォレストヴィラ 朝6:00～深夜2:00（最終受付 深夜1:00）。朝風呂 朝6:00～9:00", "https://www.ryusenjinoyu.com/moriyama"),
      factNov14("定休日", "年中無休（メンテナンス点検による休館日あり）", "https://www.ryusenjinoyu.com/moriyama"),
      factNov14("設備", "絶景露天風呂（天然温泉）、高濃度炭酸泉など全13種の浴槽、天然アロマの岩盤浴、大人の癒し空間「フォレストヴィラ」、貸しタオルセット（有料）", "https://www.ryusenjinoyu.com/moriyama"),
    ],
  },
  {
    ids: ["manual-aichi-tatsuki-sauna"], name: "龍城さうな", officialUrl: "https://tatsukisauna.com/",
    features: ["セルフロウリュ", "オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "一般入浴 平日1,800円・土日祝2,100円（税込）", "https://tatsukisauna.com/information"),
      factNov14("営業時間", "9:00～23:00（最終受付22:00）", "https://tatsukisauna.com/information"),
      factNov14("設備", "静サウナ（セルフロウリュウ・室温90℃・約6人）と動サウナ（オートロウリュウ・室温90℃・約9人）の2種、浴槽（36℃）、外気浴場。貸しタオル無料", "https://tatsukisauna.com/facility"),
      factNov14("水風呂", "温度14~16℃", "https://tatsukisauna.com/facility"),
    ],
  },
  {
    ids: ["manual-mie-cova-kakuda"], name: "COVA KAKUDA", officialUrl: "https://cova-iseshima.jp/",
    features: ["薪サウナ", "ロウリュあり", "水風呂あり", "個室", "宿泊可"],
    facts: [
      factNov14("料金", "1泊1室2名利用 1名151,000円～（税込）オールインクルーシブ", "https://cova-iseshima.jp/cms/wp-content/uploads/2024/11/NEWSLETTER-COVA_KAKUDA_VOL1_jp.pdf"),
      factNov14("設備", "全4棟のプライベートヴィラ（うち2棟にロウリュ可能なプライベートサウナ付き）、間伐材の薪を使うサウナ棟（室温75℃程度）、石風呂を再現したサウナ", "https://cova-iseshima.jp/cms/wp-content/uploads/2024/11/NEWSLETTER-COVA_KAKUDA_VOL1_jp.pdf"),
      factNov14("水風呂", "16℃程度に保ったコールドバス（水風呂）を用意。ヴィラMIHARASHIにはチラー付きコールドバス", "https://cova-iseshima.jp/cms/wp-content/uploads/2024/11/NEWSLETTER-COVA_KAKUDA_VOL1_jp.pdf"),
      factNov14("利用条件", "宿泊プランはオールインクルーシブ（夕食・朝食、飲み物、アクティビティ、サウナ、1クルーズを含む）", "https://cova-iseshima.jp/cms/wp-content/uploads/2024/11/NEWSLETTER-COVA_KAKUDA_VOL1_jp.pdf"),
    ],
  },
  {
    ids: ["manual-mie-kabuku-resort"], name: "Kabuku Resort", officialUrl: "https://kabuku-co.jp/",
    features: ["宿泊可"],
    facts: [
      factNov14("料金", "テントサウナ体験 4,000円（プライベートパーゴラ付きラグジュアリーテントのオプション体験）", "https://kabuku-co.jp/stay/glamping/"),
      factNov14("設備", "フィンランド式テントサウナ体験、ドラム缶風呂体験（いずれも有料オプション）", "https://kabuku-co.jp/stay/glamping/"),
      factNov14("利用条件", "テントサウナ体験は有料オプションで一部客室のみ用意あり。オプション体験は消灯の22:00まで利用可", "https://kabuku-co.jp/stay/glamping/"),
    ],
  },
  {
    ids: ["manual-mie-sauna152"], name: "SAUNA152", officialUrl: "https://sauna152.com/",
    features: ["水風呂あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "60分 平日¥1,650・土日祝¥2,200／120分 平日¥2,200・土日祝¥2,750／180分 平日¥2,750・土日祝¥3,300", "https://sauna152.com/"),
      factNov14("営業時間", "平日 13:00〜23:00、土日祝 11:00〜23:00（最終受付 22:00）", "https://sauna152.com/"),
      factNov14("定休日", "月曜（祝日の月曜は営業）", "https://sauna152.com/"),
      factNov14("設備", "サウナ室（テレビなし）、水風呂、ととのいスペース（椅子7種類・1人1席）", "https://sauna152.com/"),
      factNov14("水風呂", "地下水を2つのフィルターでろ過した水風呂", "https://sauna152.com/"),
      factNov14("利用条件", "会員制ではない。バスタオル持参が基本で、忘れた場合はレンタルあり", "https://sauna152.com/"),
    ],
  },
  {
    ids: ["manual-mie-secret-sauna-kaiho"], name: "SECRET SAUNA KAIHO", officialUrl: "https://kaiho-sauna.com/",
    features: ["貸切可", "男女共用", "温泉付き"],
    facts: [
      factNov14("料金", "施設利用料 9,000円／人（土日祝は+1,000円／人）。団体割 4-5名様10%OFF・6-8名様20%OFF。BBQ付きプラン 3,980円／人", "https://kaiho-sauna.com/"),
      factNov14("営業時間", "ご予約時間枠 9:30-12:30／13:00-16:00／16:30-19:30／20:00-23:00（1日4枠）", "https://kaiho-sauna.com/"),
      factNov14("設備", "「伊賀の国 大山田温泉さるびの」内にある貸切サウナ施設。タオル・アメニティ（シャンプー、リンス、ボディソープ、ドライヤー等）完備", "https://kaiho-sauna.com/"),
      factNov14("利用条件", "1枠3時間の貸切制、2名〜（最大収容人数8名）。水着を着用して男女混浴可能", "https://kaiho-sauna.com/"),
    ],
  },
  {
    ids: ["manual-mie-aquaignis"], name: "アクアイグニス片岡温泉", officialUrl: "https://aquaignis.jp/",
    features: ["温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "片岡温泉 入湯料 大人（中学生以上）平日600円・土日祝800円、子供（3歳〜小学生）平日300円・土日祝400円、3歳未満無料", "https://aquaignis.jp/spa_kataoka.php"),
      factNov14("営業時間", "片岡温泉 6:00〜24:00", "https://aquaignis.jp/spa_kataoka.php"),
      factNov14("定休日", "片岡温泉 無休", "https://aquaignis.jp/spa_kataoka.php"),
      factNov14("設備", "加水・加温・循環一切無しの源泉100％かけ流し天然温泉（アルカリ性単純温泉「美人の湯」）、竹林の露天風呂。SPAエリアにミネラルミスト浴あり", "https://aquaignis.jp/spa_kataoka.php"),
      factNov14("利用条件", "日帰り入浴可。入墨（タトゥー）のある方は入館不可。レンタルタオル100円・レンタルバスタオル200円", "https://aquaignis.jp/spa_kataoka.php"),
    ],
  },
  {
    ids: ["manual-mie-ageki-onsen"], name: "おふろcafe あげき温泉", officialUrl: "https://inabe-ageki-base.com/",
    features: ["オートロウリュ", "ロウリュあり", "熱波師あり", "水風呂あり", "外気あり", "温泉付き", "男女共用", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入館料（日帰り温泉）大人 平日750円（会員700円）・土日祝900円（会員850円）、小人400円。サウナラウンジSerow 平日600円・土日祝800円（入館料別途）", "https://inabe-ageki-base.com/onsen"),
      factNov14("営業時間", "日帰り温泉 11:00〜21:00（最終入館20:30）、サウナラウンジSerow 11:00〜20:00（最終受付19:00）", "https://inabe-ageki-base.com/onsen"),
      factNov14("設備", "アルカリ性単純温泉（露天風呂・内湯・サウナ定員4名）。別館サウナラウンジSerowにはオートロウリュサウナなど3種のサウナと外気浴デッキ、アウフグースイベント（毎日14:00/17:00）", "https://inabe-ageki-base.com/onsen"),
      factNov14("水風呂", "天然井戸水の水風呂", "https://inabe-ageki-base.com/onsen"),
      factNov14("利用条件", "日帰り温泉の利用可。サウナラウンジSerowは男女共用で水着・専用着の着用が必要、中学生以上のみ利用可", "https://inabe-ageki-base.com/onsen"),
    ],
  },
  {
    ids: ["manual-mie-yumoriza"], name: "おふろcafe 湯守座", officialUrl: "https://ofurocafe-yumoriza.com/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("営業時間", "10:00〜翌朝9:00（23時間営業）", "https://ofurocafe-yumoriza.com/en/"),
      factNov14("設備", "弱アルカリ単純温泉（加水なし・加温あり・ろ過循環使用あり）、温泉泥パック、大衆演劇を無料で観劇できる芝居小屋", "https://ofurocafe-yumoriza.com/"),
      factNov14("利用条件", "刺青・タトゥのある方、皮膚に疾患のある方などは入館不可", "https://ofurocafe-yumoriza.com/"),
    ],
  },
  {
    ids: ["manual-mie-sun-urashima"], name: "サン浦島 悠季の里", officialUrl: "https://www.sun-urashima.co.jp/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "敷地内に2つの源泉、鳥羽本浦温泉「珠光の湯」（pH9.5）と「新 珠光の湯」（pH9.8）。男女それぞれに大浴場と、あつ湯・ぬる湯のある多種の露天風呂を完備", "https://www.sun-urashima.co.jp/"),
    ],
  },
  {
    ids: ["manual-mie-bl-kuwana"], name: "ビジネスホテルビーエル桑名", officialUrl: "https://b-l.jp/",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "サウナ付きの大浴場あり（男性用のみ）", "https://b-l.jp/"),
      factNov14("利用条件", "大浴場・サウナは男性用のみ", "https://b-l.jp/"),
    ],
  },
  {
    ids: ["manual-mie-sunpia-iga"], name: "ヒルホテル サンピア伊賀", officialUrl: "https://www.hh-sunpia-iga.co.jp/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "天然温泉「芭蕉の湯」", "https://www.hh-sunpia-iga.co.jp/"),
      factNov14("料金", "温泉イベント「メンズデー」では男性の温泉入浴料がお得な700円", "https://www.hh-sunpia-iga.co.jp/"),
    ],
  },
  {
    ids: ["manual-mie-mitasunoyu"], name: "みたすの湯", officialUrl: "https://mts-ise.com/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("営業時間", "9:00〜23:00（最終受付22:30）。毎月1日は朝6時から営業", "http://www.mts-ise.com/yu/"),
      factNov14("定休日", "無休", "https://mts-ise.com/"),
      factNov14("設備", "11種類のお風呂とサウナ（高温サウナ・釜風呂あり）。お食事処あり", "http://www.mts-ise.com/yu/"),
    ],
  },
  {
    ids: ["manual-mie-toyohama"], name: "リゾートヒルズ豊浜", officialUrl: "https://www.toyohama.co.jp/",
    features: ["温泉付き", "貸切可", "宿泊可"],
    facts: [
      factNov14("設備", "社宮司温泉（pH9.3の炭酸水素塩泉）の大浴場、客室内露天風呂、貸切露天風呂「天空の湯」「磯笛の湯」", "https://www.toyohama.co.jp/"),
      factNov14("利用条件", "貸切露天風呂は宿泊特典として40分利用可（当日先約制）", "https://www.toyohama.co.jp/"),
    ],
  },
  {
    ids: ["st-mie-4821"], name: "伊勢パールピアホテル", officialUrl: "https://www.pearlpier.com/facilities/#public",
    features: ["水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場「やわらぎの湯」夜16:00〜24:00／朝5:00〜9:00", "https://www.pearlpier.com/facilities/"),
      factNov14("設備", "女性「月光」：内湯・水風呂・サウナ・内気浴スペース。男性「朝日」：内湯・水風呂・テラスサウナ・外気浴スペース。サウナは尾鷲産ヒノキのサウナ小屋", "https://www.pearlpier.com/facilities/"),
      factNov14("水風呂", "女性・男性の大浴場いずれにも水風呂あり", "https://www.pearlpier.com/facilities/"),
      factNov14("利用条件", "刺青・タトゥー（シール・ボディペイント含む）のある方は入浴不可。テラスサウナ（男性用）は備え付けサウナパンツ着用必須", "https://www.pearlpier.com/facilities/"),
      { label: "施設営業時間", value: "夜 16:00〜24:00 / 朝 5:00〜9:00 やわらぎの湯 月光（女性）：内湯・水風呂・サウナ・内気浴スペース やわらぎの湯 朝日（男性）：内湯・水風呂・テラスサウナ・外気浴スペース", sourceUrl: "https://www.pearlpier.com/facilities/#public", checkedAt: "2026-10-19" },
    ],
  },
  {
    ids: ["manual-mie-nabetagawa"], name: "季の邸 鍋田川", officialUrl: "https://www.nabetagawa.co.jp/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "天然温泉（地下1350mより湧出）", "https://www.nabetagawa.co.jp/"),
      factNov14("利用条件", "日帰り温泉の利用可（公式サイトに日帰り温泉の案内あり）", "https://www.nabetagawa.co.jp/"),
    ],
  },
  {
    ids: ["manual-mie-todaya"], name: "戸田家", officialUrl: "https://www.todaya.co.jp/",
    features: ["温泉付き", "貸切可", "宿泊可"],
    facts: [
      factNov14("設備", "風流野天風呂棟「湯亭」に樽風呂・陶器風呂・岩風呂など。無料の貸切風呂5つ", "https://www.todaya.co.jp/"),
    ],
  },
  {
    ids: ["manual-mie-kumano-no-sato-matsusaka"], name: "松阪温泉 熊野の郷", officialUrl: "https://www.kumano-no-sato.com/matsusaka/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入館料 一般930円・会員870円、小人500円（3歳以上・中学生未満、3歳未満無料）。岩盤浴は別料金（一般740円）で岩盤浴のみの利用不可", "https://www.kumano-no-sato.com/matsusaka/"),
      factNov14("営業時間", "平日・土曜 午前10:00～深夜12:00（最終受付 午後11:00）。日曜・祝日は朝風呂 午前7:30～午前10:00＋通常営業 午前10:00～深夜12:00", "https://www.kumano-no-sato.com/matsusaka/"),
    ],
  },
  {
    ids: ["manual-mie-shinmenoyu"], name: "神馬の湯", officialUrl: "https://shinmenoyu.jp/",
    features: ["温泉付き", "サ飯あり", "セルフロウリュ"],
    facts: [
      factNov14("営業時間", "平日 朝9:00〜深夜23:00（最終入館 深夜22:00）、土日祝 朝7:00〜深夜24:00（最終受付 深夜23:00）", "https://shinmenoyu.jp/"),
      factNov14("設備", "天然温泉、展望露天風呂、岩盤浴あり", "https://shinmenoyu.jp/"),
    ],
  },
  {
    ids: ["manual-mie-yuami-no-shima"], name: "長島温泉 湯あみの島", officialUrl: "https://www.nagashima-onsen.co.jp/yuami/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("営業時間", "営業時間は10時～23時（受付：22時まで）", "https://www.nagashima-onsen.co.jp/yuami/spa/index.html"),
      factNov14("設備", "男女あわせて17種類の露天風呂や内湯が揃う33,000㎡の日本最大級の温泉施設。サウナ・シャワー室も用意。泉質はアルカリ性単純温泉（美肌の湯）", "https://www.nagashima-onsen.co.jp/yuami/spa/index.html"),
      factNov14("利用条件", "オフィシャルホテル併設。ご宿泊のお客様は無料で湯あみの島をご利用いただけます", "https://www.nagashima-onsen.co.jp/yuami/spa/index.html"),
    ],
  },
  {
    ids: ["manual-mie-jab"], name: "天然温泉ジャブ", officialUrl: "https://jab53.com/",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "入浴料 大人（中学生以上）750円（税込）、小人（4歳〜小学生）300円（税込）、3歳以下無料。火曜日・木曜日限定割引 大人680円（税込）。岩盤浴は入浴の方は無料で利用可", "http://jab53.com/price/"),
      factNov14("営業時間", "月曜日〜木曜日・日曜日 9時30分〜23時00分、金曜日・土曜日 9時30分〜0時00分。祝祭日の前日は深夜0時00分まで営業", "http://jab53.com/price/"),
      factNov14("設備", "地下から53℃で湧き出る天然温泉。テントサウナ（要予約）、岩盤浴、BBQ、スタジオなどのアクティビティあり", "https://jab53.com/"),
      factNov14("利用条件", "岩盤浴は中学生以上のご利用になり、岩盤浴のみのご利用はできません。テントサウナは要予約", "http://jab53.com/price/"),
    ],
  },
  {
    ids: ["manual-mie-hisetsu-camp-sauna"], name: "飛雪の滝キャンプ場", officialUrl: "https://hisetsu.jp/main/activity/tent-sauna/",
    features: ["薪サウナ", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "貸切可", "男女共用", "宿泊可"],
    facts: [
      factNov14("料金", "サボッタ 2時間2,000円、モルジュ 2時間2,500円、EX-PRO 2時間2,000円（いずれも1人あたり。小学生は半額、小学生未満は無料）", "https://hisetsu.jp/main/activity/tent-sauna/"),
      factNov14("営業時間", "利用時間 9時～21時（最終受付17時まで）。7月下旬～8月31日は13時～21時、10月1日～3月31日は9時～20時。日帰り利用の方は通年最終受付15時まで", "https://hisetsu.jp/main/activity/tent-sauna/"),
      factNov14("設備", "フィンランド式・ロシア式の専用テントに薪ストーブを設置したテントサウナ。貸し切り利用で、サウナストーンに水をかけるセルフロウリュが可能。着衣で利用し男女一緒の利用も可", "https://hisetsu.jp/main/activity/tent-sauna/"),
      factNov14("水風呂", "飛雪の滝の滝つぼが水風呂。冬の水温は10度以下になります", "https://hisetsu.jp/main/activity/tent-sauna/"),
      factNov14("利用条件", "当日までに電話予約が必要。水着やタオル、ポンチョなどのレンタルはありません。日帰り体験の場合、シャワールームを利用可能（3分100円）", "https://hisetsu.jp/main/activity/tent-sauna/"),
    ],
  },
  {
    ids: ["manual-mie-honzoyu"], name: "本草湯", officialUrl: "https://vison.jp/shop/detail.php?id=74",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり"],
    facts: [
      factNov14("設備", "座る位置で温度帯が異なる階段式サウナ（タワー型ヒーターでどの座面からでもセルフロウリュウ可能）と、ロフトサウナの2種があり日替わりで男女入れ替え。水風呂あり", "https://vison.jp/shop/detail.php?id=133"),
    ],
  },
  {
    ids: ["manual-mie-nabarinoyu"], name: "名張の湯", officialUrl: "https://www.nabarinoyu.com/",
    features: ["ドライサウナ", "ロウリュあり", "温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴料 大人（中学生以上）平日900円・土日祝950円、小人（小学生迄）平日450円・土日祝500円、乳幼児（3才以下）無料。岩盤浴は大人平日800円・土日祝850円（別途入浴料が必要）", "https://nabarinoyu.com/guide.php"),
      factNov14("営業時間", "10：00～24：00（最終受付23：00迄）。岩盤浴の最終受付は22：30", "https://nabarinoyu.com/guide.php"),
      factNov14("定休日", "年中無休（メンテナンス休館あり）", "https://nabarinoyu.com/guide.php"),
      factNov14("設備", "天然温泉（泉質は含硫黄-ナトリウム・カルシウム-塩化物温泉）の露天岩風呂など。岩盤浴「癒しの岩盤SPAきらり」にはロウリュウサウナがあり、男子遠赤外線サウナも設置", "https://nabarinoyu.com/floormap.php?no=2"),
      factNov14("利用条件", "刺青、タトゥー(シール等含む)のある方の入館は不可。入浴料にタオルは含まれておらず、レンタルタオル(フェイスタオル+バスタオル)は300円。小学生以下だけでの入浴・岩盤浴利用は不可", "https://nabarinoyu.com/guide.php"),
    ],
  },
  {
    ids: ["manual-mie-hanashobu-suzuka"], name: "鈴鹿天然温泉 花しょうぶ", officialUrl: "https://hanashobu.com/suzuka/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "塩サウナ", "ロウリュあり", "熱波師あり", "水風呂あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴料 大人・中学生 平日 一般820円・会員770円、土・日・祝 一般920円・会員870円。子供（4歳以上）全日350円、3歳以下は無料。美汗房（岩盤浴）大人・中学生750円、子供350円（別途入浴料が必要）", "https://hanashobu.com/suzuka/"),
      factNov14("設備", "熱気風炉（高温乾燥サウナ）、漢方蒸気風炉（スチーム）、熱塩風炉（塩サウナ）、水風呂、炭酸風呂、岩風呂、壷湯、露天炭酸風呂。天然温泉は源泉49.3度のアルカリ性単純温泉で100%かけ流し。美汗房では定期的にロウリュウサービスを実施", "https://hanashobu.com/suzuka/facilities/"),
      factNov14("水風呂", "水風呂あり（汗をかいた開いた毛穴を引き締めます。足から腰にかけてゆっくりとお入りください）", "https://hanashobu.com/suzuka/facilities/"),
    ],
  },
  {
    ids: ["st-shiga-4545"], name: "スポック富士見", officialUrl: "https://fujimi-pool.com/",
    features: [],
    facts: [
      factNov14("営業時間", "営業時間9:00～21:00", "https://fujimi-pool.com/"),
      factNov14("定休日", "休館日 月曜日", "https://fujimi-pool.com/"),
      factNov14("設備", "一年中スイミングが楽しめる温水プールや各種マシンを備えたトレーニングルーム、浴場などを用意", "https://fujimi-pool.com/"),
    ],
  },
  {
    ids: ["st-shiga-4602"], name: "レストイン多賀", officialUrl: "https://www.greens.co.jp/taga/",
    features: ["宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴1時間まで 大人700円・小人350円、延長300円/時間。入浴＆休憩（男性のみ）4時間2,000円・6時間2,500円。回数券7,000円（11枚綴り）", "https://www.greens.co.jp/taga/spa/"),
      factNov14("営業時間", "大浴場 12:00～翌10:00、サウナ 15:00～24:00", "https://www.greens.co.jp/taga/spa/"),
      factNov14("利用条件", "日帰り入浴可（宿泊者以外も利用可）。バスタオル貸出100円・フェイスタオル50円", "https://www.greens.co.jp/taga/spa/"),
    ],
  },
  {
    ids: ["st-shiga-2809"], name: "健康パークあざいバーデあざい", officialUrl: "http://www.kenkoupark.com/index.html",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり"],
    facts: [
      factNov14("料金", "バーデバス 大人700円・小人400円、バス＋プール 大人800円・小人500円、セラミックバス 大人2,500円・小人1,500円", "http://www.kenkoupark.com/bath.html"),
      factNov14("営業時間", "お風呂 3～12月 10:00～21:30（受付終了21:00）、1～2月 10:00～21:00（受付終了20:30）", "http://www.kenkoupark.com/bath.html"),
      factNov14("定休日", "毎週火曜日（祝日の場合は営業）", "http://www.kenkoupark.com/facilityinfomation.html"),
      factNov14("設備", "サウナ4種（ハードフィーリング90～95℃、ソフトフィーリング90～95℃、輻射サウナ（スチーム併用）50～60℃、遠赤外線サウナ50～60℃）、天然鉱石風呂、炭酸泉風呂、露天風呂", "http://www.kenkoupark.com/facilityinfomation.html"),
      factNov14("水風呂", "水深40cm、水温17～20℃", "http://www.kenkoupark.com/bath.html"),
    ],
  },
  {
    ids: ["st-shiga-4534"], name: "守山湯元水春 ピエリ守山", officialUrl: "http://suisyun.jp/pieri-moriyama/",
    features: ["ドライサウナ", "オートロウリュ", "ロウリュあり", "熱波師あり", "温泉付き", "外気あり", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴料 大人 平日1,050円・土日祝1,150円、小人 平日520円・土日祝570円、回数券（6枚綴り）5,700円", "https://suisyun.jp/pieri-moriyama/news/2512rokinkaitei/"),
      factNov14("営業時間", "月～土 10:00～24:00（最終受付23:30）、日・祝 7:00～24:00（最終受付23:30）", "https://suisyun.jp/pieri-moriyama/latest-info/2550/"),
      factNov14("定休日", "年中無休（メンテナンスのため臨時休業あり）", "https://suisyun.jp/pieri-moriyama/latest-info/2550/"),
      factNov14("設備", "遠赤外線サウナ（1時間毎に自動でサウナストーンへ注水するオートロウリュ）、ドライサウナ、天然温泉「琵琶湖美人の湯」、岩盤浴4種、レストラン、露天風呂", "http://suisyun.jp/pieri-moriyama/"),
    ],
  },
  {
    ids: ["st-shiga-2795"], name: "草津湯元 水春", officialUrl: "http://suisyun.jp/kusatsu/",
    features: ["ドライサウナ", "セルフロウリュ", "オートロウリュ", "ロウリュあり", "熱波師あり", "塩サウナ", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴料 大人 平日1,050円・土日祝1,200円、回数券（6枚綴り）5,800円（小人・幼児は現行どおり）", "https://suisyun.jp/kusatsu/news/2612ryokinkaitei/"),
      factNov14("営業時間", "9:00～25:00（最終受付24:00）、年中無休（メンテナンス休館あり）", "https://suisyun.jp/kusatsu/news/2612ryokinkaitei/"),
      factNov14("設備", "サウナ3種（ロウリュサウナ、漢方薬草サウナ、バレルサウナ＝セルフロウリュ可）、毎時自動ロウリュ実施、女性限定・塩サウナロウリュ（木曜）、天然温泉「近江草津 美人の湯」、岩盤浴", "https://suisyun.jp/kusatsu/"),
      { label: "施設営業時間", value: "9:00 ～ 25:00（最終受付 24:00）年中無休 ※メンテナンスのため臨時休業する場合がございます。", sourceUrl: "https://suisyun.jp/kusatsu/", checkedAt: "2026-10-19" },
    ],
  },
  {
    ids: ["st-kyoto-31"], name: "サウナの梅湯", officialUrl: "https://yutonamisha.com/sento/umeyu/",
    features: ["ドライサウナ", "水風呂あり", "タオルレンタルあり"],
    facts: [
      factNov14("営業時間", "朝6時～26時", "https://yutonamisha.com/sento/umeyu/"),
      factNov14("定休日", "木曜日", "https://yutonamisha.com/sento/umeyu/"),
      factNov14("料金", "大人550円、中学生400円、小学生200円、幼児100円。入浴回数券5,300円", "https://yutonamisha.com/sento/umeyu/"),
      factNov14("設備", "男湯・女湯とも 深風呂、浅風呂（ジェット風呂）、水風呂、電気風呂、薬湯、ドライサウナ。フェイスタオル貸出100円", "https://yutonamisha.com/sento/umeyu/"),
    ],
  },
  {
    ids: ["st-hyogo-4813"], name: "GROUND ROCK CASTLE sauna", officialUrl: "https://grc.dog/",
    features: ["薪サウナ", "水風呂あり", "貸切可", "宿泊可", "タオルレンタルあり", "サ飯あり"],
    facts: [
      factNov14("営業時間", "サウナ 9:00～18:00", "https://grc.dog/information"),
      factNov14("料金", "バレルサウナ利用2時間30分：薪ストーブtahti 平日11,000円、薪ilma 平日13,200円～、薪vuori 平日22,000円～、遠赤外線ガスpolku 平日11,000円（税込・2名分含む、土日祝・ハイシーズンは増額）", "https://grc.dog/information"),
      factNov14("設備", "バレルサウナ4棟（薪ストーブ3種・遠赤外線ガス1種）と山の湧き水の水風呂（WATER BATH）。シャワー施設利用料・サウナセットレンタル込み", "https://grc.dog/"),
    ],
  },
  {
    ids: ["st-hyogo-4819"], name: "HOTTERS24 西宮上ヶ原店", officialUrl: "https://hotters24.com/nishinomiyauegahara/",
    features: ["個室", "セルフロウリュ", "ロウリュあり"],
    facts: [
      factNov14("料金", "入会金4,400円（税込・初回のみ、事務手数料等含む）、月会費10,890円（税込）/月", "https://hotters24.com/nishinomiyauegahara/"),
      factNov14("営業時間", "24時間・年中無休（スタッフアワー13:00～22:00、登録手続きの最終受付21:30）", "https://hotters24.com/nishinomiyauegahara/"),
      factNov14("設備", "個室サウナ5台（セルフロウリュウできる1人の空間）、フリーザーサウナ、内気浴、ととのい椅子", "https://hotters24.com/nishinomiyauegahara/"),
      factNov14("利用条件", "会員制（月会費制）の個室サウナ", "https://hotters24.com/nishinomiyauegahara/"),
    ],
  },
  {
    ids: ["st-hyogo-4822"], name: "simanoyadoya", officialUrl: "https://simanoyadoya.jp/",
    features: ["個室", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "貸切可", "宿泊可"],
    facts: [
      factNov14("設備", "プライベートサウナ（10平米、サウナストーブ2台、高温対応80℃～110℃、アロマ使用のロウリュウ可）、チラー付き水風呂、野外デッキ、シャワーブース", "https://simanoyadoya.jp/"),
      factNov14("水風呂", "チラー付き水風呂（温度管理されており夏も冷たい）", "https://simanoyadoya.jp/"),
      factNov14("利用条件", "1日1組限定・一棟貸切の宿泊施設（チェックイン16:00／チェックアウト11:00、最大5名）。食事の用意なし。サウナは滞在中24時間利用可能", "https://simanoyadoya.jp/"),
    ],
  },
  {
    ids: ["st-nara-2847"], name: "ほてい湯", officialUrl: "http://hoteiyu.iiyudana.net/index.html",
    features: ["温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴料 大人（中学生以上）530円・中人（小学生）200円・小人（幼稚園児以下）100円、サウナ150円、回数券（11枚綴り）5,300円", "http://hoteiyu.iiyudana.net/index.html"),
      factNov14("営業時間", "昼15:00～深夜12:00", "http://hoteiyu.iiyudana.net/index.html"),
      factNov14("定休日", "毎週金曜日", "http://hoteiyu.iiyudana.net/index.html"),
      factNov14("設備", "奈良県初の人工温泉の銭湯（厚生労働省認可の温泉原液を使用）。使用する全ての水に高純度軟水を使用。サウナあり（別料金150円）", "http://hoteiyu.iiyudana.net/index.html"),
      factNov14("利用条件", "手ぶらセット（入浴料＋シャンプー・リンス・ボディソープ・貸タオル・貸バスタオル）750円", "http://hoteiyu.iiyudana.net/index.html"),
    ],
  },
  {
    ids: ["st-nara-2833"], name: "十津川温泉 ホテル昴", officialUrl: "http://www.hotel-subaru.jp/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "源泉100%かけ流しの天然温泉（泉質：ナトリウム炭酸水素塩泉）。露天風呂、大浴場、檜風呂・五右衛門風呂、打たせ湯、寝湯、飲泉、足湯", "https://www.hotel-subaru.jp/spa/"),
    ],
  },
  {
    ids: ["st-nara-2843"], name: "奈良ロイヤルホテル ラ・ロイヤル・スパ", officialUrl: "https://nara-royal.co.jp/onsen/",
    features: ["ドライサウナ", "ロウリュあり", "水風呂あり", "温泉付き", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "大人1,080円、お子様（4歳～小学生）770円。岩盤浴2,080円（天然温泉入浴・館内着・タオルセット含む）", "https://nara-royal.co.jp/onsen/"),
      factNov14("営業時間", "天然温泉・サウナ 13:00～23:00（最終受付 22:00）。岩盤浴 13:00～22:00（最終受付 21:00）", "https://nara-royal.co.jp/onsen/"),
      factNov14("設備", "男性サウナはフィンランド式（ロウリュ有、約90～95度、定員48名）、女性サウナはドライサウナ（約90度、定員10名）。天然温泉大浴場、岩盤浴、歩行用プール", "https://nara-royal.co.jp/onsen/"),
      factNov14("水風呂", "水風呂約18度（地下水を使用）", "https://nara-royal.co.jp/onsen/"),
      factNov14("利用条件", "日帰り利用可（宿泊のお客様はもちろん、日帰りのお客様にもご利用いただけます）。刺青・タトゥー（フェイクタトゥー含む）の方は入館不可。タオルセットレンタル200円", "https://nara-royal.co.jp/onsen/"),
    ],
  },
  {
    ids: ["st-nara-2836"], name: "奈良健康ランド", officialUrl: "https://www.narakenkoland.net/",
    features: ["ロウリュあり", "熱波師あり", "水風呂あり", "温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入館料 大人2,200円、学生1,320円、シニア（60歳以上）1,320円、小人（3歳～小学生）880円。有料サウナエリアは入館料＋330円（中学生以上）", "https://www.narakenkoland.net/about"),
      factNov14("営業時間", "24時間営業（大浴場は男性側24時間、女性側6:00～翌3:30。有料サウナエリア 9:00～翌1:00）", "https://www.narakenkoland.net/"),
      factNov14("定休日", "無休（メンテナンス等による休館有）", "https://www.narakenkoland.net/about"),
      factNov14("設備", "有料サウナエリアに男女計8種類のサウナ・岩盤浴（ロウリュウサウナ、クールサウナ、岩塩房、薬草効石房など）。アウフグースイベントを定期開催、毎週火・金曜は「ナラ熱波」。天然大和温泉の大浴場・露天風呂、食事処あり", "https://www.narakenkoland.net/facility/ganban"),
      factNov14("水風呂", "水風呂あり（有料サウナエリアは大浴場内にあり、水風呂への行き来が可能）", "https://www.narakenkoland.net/facility/ganban"),
      factNov14("利用条件", "有料サウナエリアは中学生以上のみ利用可（小人は利用不可）。入館料にフェイスタオル・バスタオル・館内着が含まれる", "https://www.narakenkoland.net/about"),
    ],
  },
  {
    ids: ["st-wakayama-2851"], name: "ふくろうの湯", officialUrl: "http://www.fukurou-yu.com/",
    features: ["ドライサウナ", "水風呂あり", "温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "ご入浴のみ 大人 平日1,300円・土日祝1,400円、小人600円。ご入浴＋岩盤浴 大人 平日1,860円・土日祝1,960円", "https://www.fukurou-yu.com/charge/"),
      factNov14("営業時間", "日曜～木曜日 10:00～23:00（受付終了22:00）、金曜・土曜・祝前日 10:00～24:00（受付終了23:00）", "https://www.fukurou-yu.com/charge/"),
      factNov14("定休日", "毎月第3火曜日（祝祭日の場合は翌日）", "https://www.fukurou-yu.com/charge/"),
      factNov14("設備", "遠赤外線サウナ、漢方薬草サウナ（女性のみ）、岩盤浴。源泉掛け流し風呂・壺湯・ジェットバスなど多彩な浴槽（泉質：含鉄―ナトリウム―塩化物 炭酸水素塩強塩温泉）。お食事処あり", "https://www.fukurou-yu.com/spa/"),
      factNov14("水風呂", "水風呂あり（遠赤外線サウナとの交代浴が勧められている）", "https://www.fukurou-yu.com/spa/"),
      factNov14("利用条件", "大小に関わらず刺青（タトゥー）を入れている方は入館不可。タオルはレンタル有（バスタオル・フェイスタオルセット220円）", "https://www.fukurou-yu.com/spa/"),
    ],
  },
  {
    ids: ["st-tottori-4713"], name: "GOOD BLESS GARDEN サウナ＆ステイ", officialUrl: "https://goodblessgarden.com/shop",
    features: ["熱波師あり", "貸切可", "宿泊可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "サウナ・大浴場 中学生以上1,500円、小学生以下550円（タオル・館内着付）。女性専用岩盤浴 一般3,000円。朝風呂 中学生以上800円・小学生以下330円。貸切（1〜20名）30,000円", "https://goodblessgarden.com/shop"),
      factNov14("設備", "サウナ・大浴場のほか女性専用の岩盤浴やチムジルバン、漫画コーナー、食事処も備える複合施設。7周年記念の24時間熱波イベントなど熱波イベントを開催", "https://goodblessgarden.com/shop"),
      factNov14("利用条件", "キャビン宿泊可（1名様 月〜木・日・祝4,500円〜/泊、金・土・祝日前5,500円〜/泊、スパ施設利用無料）。貸切は同性での利用のみ", "https://goodblessgarden.com/shop"),
    ],
  },
  {
    ids: ["st-tottori-4693"], name: "Nature Sauna", officialUrl: "https://tottori-camppark.jp/sauna.html",
    features: [],
    facts: [
      factNov14("営業時間", "サウナ 11:00～17:30（土曜日のみ19:30まで）", "https://tottori-camppark.jp/ikkoganaru/"),
      factNov14("定休日", "営業日は毎週金曜・土曜・日曜・月曜の週4日", "https://tottori-camppark.jp/ikkoganaru/"),
      factNov14("設備", "フィンランド式サウナ（大山隠岐国立公園内・一向平キャンプ場）", "https://tottori-camppark.jp/ikkoganaru/"),
    ],
  },
  {
    ids: ["st-tottori-3591"], name: "温泉館ホットピア鹿野", officialUrl: "https://www.shikano-net.com/day-spa/",
    features: ["温泉付き", "水風呂あり"],
    facts: [
      factNov14("料金", "大人550円、小人280円", "https://www.shikano-net.com/2012/06/post.html"),
      factNov14("営業時間", "10:00～22:00", "https://www.shikano-net.com/2012/06/post.html"),
      factNov14("定休日", "休館日は毎月第一木曜日（第一木曜日が祝日の場合は第二木曜日）", "https://www.shikano-net.com/2012/06/post.html"),
      factNov14("設備", "サウナ、内風呂、露天風呂、水風呂、足湯（正面駐車場脇）。泉質は単純温泉（弱アルカリ性低張性高温泉）、泉温64.1℃", "https://www.shikano-net.com/2012/06/post.html"),
    ],
  },
  {
    ids: ["st-tottori-3076"], name: "華水亭", officialUrl: "https://www.kaike-grandhotel.co.jp/kasuitei/bihadanoyu.html",
    features: ["温泉付き", "宿泊可", "貸切可"],
    facts: [
      factNov14("設備", "自家源泉「宝生の泉」の大浴場（男性・女性ともサウナあり）、露天風呂、貸切露天風呂（家族風呂）4ヶ所", "https://www.kaike-grandhotel.co.jp/kasuitei/bihadanoyu.html"),
      factNov14("利用条件", "日帰り入浴の受け入れはなし（宿泊者専用）。貸切露天風呂も宿泊のお客様のみ利用可", "https://www.kaike-grandhotel.co.jp/kasuitei/bihadanoyu.html"),
    ],
  },
  {
    ids: ["st-tottori-719"], name: "日帰り温泉オーシャン", officialUrl: "http://www.ocean-g.com/index.html",
    features: ["スチーム(ミスト)サウナ", "水風呂あり", "温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("営業時間", "11:00〜23:00", "https://ocean-g.com/price.html#a"),
      factNov14("設備", "高温の遠赤外線サウナと低温のミストサウナ、源泉かけ流しの大露天風呂・内風呂・電気風呂、海の見えるレストラン", "https://ocean-g.com/onsen.html#c"),
      factNov14("水風呂", "深さの異なる2つの浴槽を用意", "https://ocean-g.com/onsen.html#c"),
      factNov14("利用条件", "入れ墨・タトゥーのある方は利用不可（会員規約に明記）。タオル・館内着・アメニティは無料で用意があり手ぶら利用可", "https://ocean-g.com/price.html#a"),
    ],
  },
  {
    ids: ["st-tottori-3595"], name: "養生館", officialUrl: "https://www.yozyokan.jp/index.html",
    features: ["温泉付き", "貸切可", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り入浴 大人（中学生以上）1,000円（税込）、小人（3歳～小学生）500円（税込）、幼児（0～2歳）無料。貸切風呂の日帰り利用は大人1,300円（税込）～", "https://yozyokan.jp/hotspring/"),
      factNov14("営業時間", "日帰り入浴は16:00頃～19:30頃（土日祝は13:00頃～）。大浴場は5:30～9:30／15:00～23:30（展望大浴場は～24:30）", "https://yozyokan.jp/hotspring/"),
      factNov14("設備", "全て自家源泉かけ流しの七種の温泉（露天大浴場・展望大浴場・貸切風呂3種）。泉質は塩化物・硫酸塩泉", "https://yozyokan.jp/hotspring/"),
      factNov14("利用条件", "日帰り入浴可（入浴のみの利用は大浴場のみ）。タオルは持参（フェイスタオル販売100円、バスタオル貸出200円）", "https://yozyokan.jp/hotspring/"),
    ],
  },
  {
    ids: ["official-shimane-izumo-hotel-the-cliff"], name: "IZUMO HOTEL THE CLIFF", officialUrl: "https://hotel-the-cliff.jp/sauna/",
    features: ["ドライサウナ", "セルフロウリュ", "ロウリュあり", "個室", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "5,000円（税込）／1枠（2名様）", "https://hotel-the-cliff.jp/sauna/"),
      factNov14("設備", "ヒノキ造りのプライベートサウナルーム。セルフロウリュで蒸気浴も可。海と空のパノラマビュー", "https://hotel-the-cliff.jp/sauna/"),
      factNov14("利用条件", "宿泊者（ステイゲスト）のみ利用可。完全時間帯予約制で、宿泊予約の際にオプションの「スパ」より希望の時間枠を予約。サウナルームは1組ごとに貸切", "https://hotel-the-cliff.jp/sauna/"),
    ],
  },
  {
    ids: ["st-okayama-4818"], name: "HOTTERS24 岡山今店", officialUrl: "https://hotters24.com/okayamaima/",
    features: ["個室"],
    facts: [
      factNov14("料金", "入会金4,400円（税込・初回のみ、事務手数料等含む）、月会費10,890円（税込）／月", "https://hotters24.com/okayamaima/"),
      factNov14("営業時間", "24時間・年中無休（スタッフアワー13:00〜22:00、登録手続きは最終受付21:30）", "https://hotters24.com/okayamaima/"),
      factNov14("設備", "個室サウナ5台、フリーザーサウナ（冷水ミスト室も備える）、アクアシャワー、ととのい椅子、2Fくつろぎスペース。個室サウナの温度設定は3段階", "https://hotters24.com/okayamaima/"),
      factNov14("利用条件", "会員制（月会費制）の個室サウナ", "https://hotters24.com/okayamaima/"),
    ],
  },
  {
    ids: ["st-okayama-4644"], name: "ホテルアベストグランデ岡山", officialUrl: "https://www.hotelabest-okayama.com/",
    features: ["外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "大浴場「なごみの湯」は半露天やサウナなど多数のお風呂を備え、駅前エリア随一の広さ。7Fにフィットネスジム", "https://www.hotelabest-okayama.com/"),
      factNov14("利用条件", "日帰りでも大浴場を利用可能。日帰り（デイユース）プランは最大6時間滞在、6:00～12:00または12:00～18:00の販売で電話予約制", "https://www.hotelabest-okayama.com/"),
    ],
  },
  {
    ids: ["st-okayama-4591"], name: "後楽温泉 ほのかの湯", officialUrl: "https://www.honokanoyu.jp/",
    features: ["スチーム(ミスト)サウナ", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入館料 大人（中学生以上）平日850円・土日祝900円、子供（4歳～小学生）350円、幼児（3歳以下）200円", "https://www.honokanoyu.jp/"),
      factNov14("営業時間", "全日10:00～24:00（最終受付23:30）", "https://www.honokanoyu.jp/"),
      factNov14("設備", "高濃度水素サウナ（低温サウナ、1時間毎に水素ミストのアトラクション）、シルク風呂（ほたるの湯）、ナノ炭酸泉、風穴風呂など。お食事処「なごみ」あり", "https://www.honokanoyu.jp/"),
      factNov14("利用条件", "刺青・タトゥー（シール・プリント・ペインティングを含む）のある方は入館不可。小学生以下のお子様は保護者同伴", "https://www.honokanoyu.jp/"),
      { label: "施設営業時間", value: "全日／10:00 ～ 24:00 ※最終受付時間 23:30", sourceUrl: "https://www.honokanoyu.jp/", checkedAt: "2026-10-19" },
    ],
  },
  {
    ids: ["st-okayama-3642"], name: "瀬戸大橋温泉 やま幸", officialUrl: "https://www.s-yamakou.co.jp/",
    features: ["温泉付き", "水風呂あり", "外気あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("営業時間", "10:00～23:30", "https://s-yamakou.co.jp/"),
      factNov14("設備", "天然温泉（ナトリウムー塩化物泉）の大浴場、露天風呂、サウナ、水風呂、薬湯、岩風呂、寝湯など", "https://s-yamakou.co.jp/hotspring/"),
      factNov14("水風呂", "水風呂あり", "https://s-yamakou.co.jp/hotspring/"),
      factNov14("利用条件", "日帰り入浴可。宿泊施設「ホテルやま幸」併設", "https://s-yamakou.co.jp/"),
    ],
  },
  {
    ids: ["st-okayama-3644"], name: "瀬戸内温泉 たまの湯", officialUrl: "https://www.seto-tamanoyu.jp/",
    features: ["スチーム(ミスト)サウナ", "温泉付き", "外気あり", "サ飯あり"],
    facts: [
      factNov14("設備", "天然温泉の露天風呂「棚田の湯」「沢の湯」に、スタジアムサウナと芳香ミストサウナの2種類のサウナ。2種類の岩盤浴と冷気房（クールダウン室）、お食事処あり", "https://www.seto-tamanoyu.jp/"),
    ],
  },
  {
    ids: ["st-okayama-2926"], name: "天然温泉阿智の湯ドーミーイン倉敷", officialUrl: "https://www.hotespa.net/hotels/kurashiki/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "最上階9Fに男女別天然温泉大浴場「阿智の湯」（内湯）", "https://www.hotespa.net/hotels/kurashiki/"),
    ],
  },
  {
    ids: ["st-okayama-4553"], name: "湯原温泉 八景", officialUrl: "https://hakkei-yubara.jp/",
    features: ["温泉付き", "個室", "貸切可", "宿泊可", "外気あり"],
    facts: [
      factNov14("料金", "日帰り入浴 お一人様1,000円・小人500円（タオル付）。貸切サウナ「風の湯」（80分制・最大4名）宿泊者3,300円・日帰り5,500円", "https://hakkei-yubara.jp/spa/"),
      factNov14("営業時間", "大浴場「川の湯」6:00～10:00／11:30～24:00。日帰り入浴は11:30～14:00（最終入館13:30）と18:00～21:00（最終入館20:30）", "https://hakkei-yubara.jp/spa/"),
      factNov14("設備", "男女別大浴場「川の湯」（サウナあり）、完全予約制の貸切サウナ「風の湯」、貸切Spa「空の湯」・貸切風呂。向かいに24時間無料の混浴露天風呂「砂湯」", "https://hakkei-yubara.jp/spa/"),
      factNov14("利用条件", "日帰り利用可（貸切サウナはデイトリップ利用可、中学生以上）。火・水曜日と休館日明けの昼の日帰り入浴は休み", "https://hakkei-yubara.jp/spa/"),
    ],
  },
  {
    ids: ["st-hiroshima-4655"], name: "CANDEO HOTELS 広島八丁堀", officialUrl: "https://www.candeohotels.com/ja/hiroshima-hatchobori/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("料金", "日帰りビジター スタンダード（15～23時）大人平日1,600円・土日祝1,800円、朝湯（6～11時）大人平日1,200円・土日祝1,400円（タオルセット付）", "https://www.candeohotels.com/ja/hiroshima-hatchobori/offers/skyspa_visitor_hiroshima/"),
      factNov14("営業時間", "スカイスパ（宿泊者）15:00～翌11:00（サウナは2:00～6:00利用不可）", "https://www.candeohotels.com/ja/hiroshima-hatchobori/skyspa/"),
      factNov14("設備", "最上階スカイスパに展望露天風呂・内風呂。男性：ドライサウナ・水風呂・ととのい椅子、女性：ミストサウナ", "https://www.candeohotels.com/ja/hiroshima-hatchobori/skyspa/"),
      factNov14("利用条件", "日帰り利用可（初回はスカイスパ会員登録と顔写真付き身分証が必要）。タトゥーのある方は日帰り入浴不可", "https://www.candeohotels.com/ja/hiroshima-hatchobori/offers/skyspa_visitor_hiroshima/"),
    ],
  },
  {
    ids: ["st-hiroshima-3544"], name: "いなり湯(広島)", officialUrl: "http://www.inariyu.com/index.html",
    features: [],
    facts: [
      factNov14("設備", "銭湯。サウナ、休憩スペース（畳）あり。備長炭で湯をきれいにし、ブラックシリカを使用", "http://www.inariyu.com/index.html"),
    ],
  },
  {
    ids: ["st-hiroshima-730"], name: "お湯処 美福", officialUrl: "http://www.mifuku-yu.co.jp/mobile/",
    features: ["ロウリュあり"],
    facts: [
      factNov14("料金", "大人入浴料700円（令和8年10月1日改定、改定前680円）。サウナ利用のロイヤルコースA・回数券・定期券も改定対象。中人・小人料金は据え置き", "http://www.mifuku-yu.co.jp/mobile/"),
      factNov14("設備", "16種類のお風呂とサウナ。爆風ロウリュサービスやアロマ水・アイスボールによるロウリュイベントを実施", "http://www.mifuku-yu.co.jp/mobile/"),
    ],
  },
  {
    ids: ["st-hiroshima-762"], name: "グランドサウナ広島", officialUrl: "https://www.grand-sauna.com/hiroshima/",
    features: ["オートロウリュ", "ロウリュあり", "熱波師あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("営業時間", "24時間年中無休", "https://www.grand-sauna.com/hiroshima/"),
      factNov14("設備", "オートロウリュサウナ、カプセルルーム（個室カプセルあり）、レストラン、ボディケア。アウフグース・熱波イベントを開催", "https://www.grand-sauna.com/hiroshima/"),
      factNov14("利用条件", "男性専用", "https://www.grand-sauna.com/hiroshima/"),
    ],
  },
  {
    ids: ["st-hiroshima-3510"], name: "スーパー銭湯 ゆらら", officialUrl: "https://yurara.ichifujinetwork.co.jp/",
    features: ["塩サウナ", "水風呂あり", "熱波師あり", "サ飯あり"],
    facts: [
      factNov14("営業時間", "10:00〜24:00（受付は23:30まで）", "https://yurara.ichifujinetwork.co.jp/"),
      factNov14("定休日", "毎週木曜日（祭日の場合は翌日）", "https://yurara.ichifujinetwork.co.jp/"),
      factNov14("設備", "露天風呂、ヒノキ風呂、ハーブ湯、エステバス、こども風呂など多彩な浴槽と、エステサウナ・塩サウナの2種類のサウナ。お食事処、リラクゼーションあり", "https://yurara.ichifujinetwork.co.jp/bath/"),
      factNov14("水風呂", "水風呂あり", "https://yurara.ichifujinetwork.co.jp/bath/"),
    ],
  },
  {
    ids: ["st-hiroshima-3520"], name: "ホットカモ", officialUrl: "http://www.hotkamo.com/index.html",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "温泉入場料 大人（中学生以上）サウナ付き800円・入浴のみ700円、小人（小学生）300円、幼児200円", "http://www.hotkamo.com/index.html"),
      factNov14("設備", "地下2000mから汲み上げた天然ラジウム温泉。男湯・女湯あわせて8種類以上のお風呂はすべて天然温泉", "http://www.hotkamo.com/index.html"),
    ],
  },
  {
    ids: ["st-hiroshima-3511"], name: "宇品天然温泉 ほの湯", officialUrl: "https://www.honoyu.jp/ujina/index.html",
    features: ["温泉付き", "水風呂あり", "サ飯あり"],
    facts: [
      factNov14("営業時間", "9:00〜23:00（最終受付22:00）", "https://www.honoyu.jp/ujina/index.html"),
      factNov14("設備", "天然温泉かけ流しの源泉風呂・岩風呂、炭酸泉、サウナ、内湯（白湯・リラクゼーションバス・ジェットバス等）、食事処、リラクゼーション", "https://www.honoyu.jp/ujina/index.html"),
      factNov14("水風呂", "サウナの後に利用できる冷水風呂あり", "https://www.honoyu.jp/ujina/index.html"),
    ],
  },
  {
    ids: ["st-hiroshima-733"], name: "栗原温泉", officialUrl: "https://kurihara-onsen.jimdosite.com/",
    features: [],
    facts: [
      factNov14("料金", "1階 銭湯500円、2階 サウナ・電気風呂・泡風呂700円", "https://kurihara-onsen.jimdosite.com/"),
      factNov14("営業時間", "銭湯 全日15:00〜21:00（20:30受付終了）。サウナ 火水木金14:00〜22:00、土日11:00〜22:00（いずれも21:00受付終了）", "https://kurihara-onsen.jimdosite.com/"),
      factNov14("定休日", "月曜日", "https://www.ononavi.jp/staying/spa/detail.html?detail_id=721"),
      factNov14("設備", "1階が銭湯、2階にサウナ・電気風呂・泡風呂。温泉は湧いておらず銭湯である旨が公式サイトに明記されている", "https://kurihara-onsen.jimdosite.com/"),
    ],
  },
  {
    ids: ["st-hiroshima-3535"], name: "尾道平原温泉 ぽっぽの湯", officialUrl: "http://poppo.info/index.html",
    features: ["ドライサウナ", "塩サウナ", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("設備", "男性は遠赤サウナ（通常90℃）、女性は塩サウナ（通常75℃）。サウナウィーク期間（11月13日～19日）は設定温度を5℃高くする", "http://poppo.info/"),
      factNov14("利用条件", "食事のみの利用も可（番台での受付が必要）。駐車場での車中泊は1台1泊1,000円で、入浴受付時に申請する", "http://poppo.info/"),
    ],
  },
  {
    ids: ["st-hiroshima-3509"], name: "福山コロナの湯天然温泉", officialUrl: "http://www.korona.co.jp/Onsen/fuy/Original/index.asp?Seq=1251&SubSeq=1",
    features: ["温泉付き", "熱波師あり"],
    facts: [
      factNov14("設備", "天然温泉の大浴場・露天風呂・サウナがあり、アウフグースイベントを開催している", "https://www.korona.co.jp/onsen/fuy/"),
    ],
  },
  {
    ids: ["st-yamaguchi-4634"], name: "アクアヒルやない", officialUrl: "https://shisetsu.mizuno.jp/m-7108",
    features: [],
    facts: [
      factNov14("料金", "温浴施設（個人使用）大人（高校生以上）520円、小人（中学生以下）260円。回数券（6枚綴り）は大人2,600円・小人1,300円", "https://shisetsu.mizuno.jp/m-7108/guide"),
      factNov14("営業時間", "火～土曜日10:00～21:00、日曜・祝祭日10:00～18:00（最終受付は閉館時間の1時間前）", "https://shisetsu.mizuno.jp/m-7108/guide"),
      factNov14("定休日", "毎週月曜日・年末年始（月曜日が祝日の場合はその翌日）", "https://shisetsu.mizuno.jp/m-7108/guide"),
      factNov14("利用条件", "温浴施設には全身シャンプーを備え付け。タオル・ブラシ等は備え付けがないため持参が必要（タオルの販売はあり）", "https://shisetsu.mizuno.jp/m-7108/guide"),
    ],
  },
  {
    ids: ["st-yamaguchi-4624"], name: "エクストールイン山陽小野田厚狭駅前", officialUrl: "https://kawaroku.co.jp/exas/appeal/",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "大浴場「ねたろうの湯」にサウナあり", "https://kawaroku.co.jp/exas/appeal/"),
    ],
  },
  {
    ids: ["st-yamaguchi-3677"], name: "かんぽの宿 光", officialUrl: "https://kamenoi-hotels.com/setouchihikari/onsen/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴 大人（中学生以上）650円、お子さま（小学生）300円", "https://kamenoi-hotels.com/setouchihikari/onsen/"),
      factNov14("営業時間", "大浴場・サウナ 5:30～9:30／11:30～24:00。日帰り入浴は11:30～15:30（15:00最終受付）", "https://kamenoi-hotels.com/setouchihikari/onsen/"),
      factNov14("定休日", "日帰り入浴は水曜日が定休日", "https://kamenoi-hotels.com/setouchihikari/onsen/"),
      factNov14("設備", "天然温泉（光室積温泉・単純温泉）の展望大浴場とサウナ（2名様程度）", "https://kamenoi-hotels.com/setouchihikari/onsen/"),
      factNov14("水風呂", "公式案内に「水風呂のご用意はございません」と明記", "https://kamenoi-hotels.com/setouchihikari/onsen/"),
      factNov14("利用条件", "日帰り入浴可。タオルは持参するかフロントで購入（200円）", "https://kamenoi-hotels.com/setouchihikari/onsen/"),
    ],
  },
  {
    ids: ["st-yamaguchi-3674"], name: "グリーンステイながうら", officialUrl: "http://greenstay-nagaura.com/hoyoukan/",
    features: ["水風呂あり", "タオルレンタルあり", "宿泊可"],
    facts: [
      factNov14("料金", "大人（中学生以上）520円、町内に住所を有する65歳以上410円、小人（4歳以上小学生以下）300円、3歳以下無料。回数券（11枚）中学生以上5,230円", "http://greenstay-nagaura.com/hoyoukan/"),
      factNov14("営業時間", "10:00～20:00（最終受付19:30）。通常21:00までの夏季営業時間だが時短営業中", "http://greenstay-nagaura.com/hoyoukan/"),
      factNov14("定休日", "毎週火曜日（火曜日が祝日の場合はその翌日）", "http://greenstay-nagaura.com/hoyoukan/"),
      factNov14("設備", "海水を汲み上げて沸かす「潮風呂」と白湯、日替わりのリフレッシュ湯の3浴槽。浴室奥にサウナ施設あり", "http://greenstay-nagaura.com/hoyoukan/"),
      factNov14("水風呂", "サウナ利用案内に水風呂の記載あり", "http://greenstay-nagaura.com/hoyoukan/"),
      factNov14("利用条件", "サウナは1度に最大5名まで。バスタオルレンタル100円。障害者手帳等の交付を受けている方は入浴料100円引き", "http://greenstay-nagaura.com/hoyoukan/"),
    ],
  },
  {
    ids: ["st-yamaguchi-3671"], name: "サンシャインサザンセト", officialUrl: "https://www.marissa-resort.jp/facility/#spa",
    features: ["温泉付き", "水風呂あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場 6:00～10:00・13:00～23:00（月曜・金曜～日曜）、6:00～10:00・15:00～23:00（火曜～木曜）。サウナ 15:00～23:00", "https://www.marissa-resort.jp/facility/#spa"),
      factNov14("設備", "源泉は片添ヶ浜温泉。風呂の種類は大浴場・露天風呂・水風呂・サウナ。屋内プール・屋外プール併設", "https://www.marissa-resort.jp/facility/#spa"),
      factNov14("水風呂", "水風呂あり（公式ページの風呂の種類に記載）", "https://www.marissa-resort.jp/facility/#spa"),
      factNov14("利用条件", "入れ墨・タトゥーのあるお客様の大浴場の利用は不可（タトゥーシールを含む）。カバーシールで完全に覆い隠せる場合に限り利用可", "https://www.marissa-resort.jp/facility/#spa"),
    ],
  },
  {
    status: "suspended",
    ids: ["st-yamaguchi-769"], name: "バーデンハウス三丘", officialUrl: "https://www.barden-mitsuo.jp/",
    features: ["温泉付き", "水風呂あり"],
    facts: [
      factNov14("営業状況", "公式サイトのお知らせ（2022年3月25日付）で、新型コロナの影響と原油価格高騰により2022年5月11日より当面の間休業と発表。再開の告知は公式サイトで確認できない", "https://www.barden-mitsuo.jp/"),
      factNov14("料金", "入館料 大人(中学生以上)770円、小人(3歳〜小学生)550円、幼児(0歳〜2歳)280円。タオル・館内着の貸出しはなし", "https://www.barden-mitsuo.jp/"),
      factNov14("営業時間", "10:00〜20:30", "https://www.barden-mitsuo.jp/"),
      factNov14("定休日", "毎週水曜日・木曜日", "https://www.barden-mitsuo.jp/"),
      factNov14("設備", "露天風呂、岩風呂、寝湯、歩行浴、サウナ、冷水浴など。泉源はアルカリ性単純硫黄温泉、単純弱放射能冷鉱泉、アルカリ性単純放射能温泉の3種", "https://www.barden-mitsuo.jp/"),
      factNov14("水風呂", "冷水浴あり", "https://www.barden-mitsuo.jp/"),
    ],
  },
  {
    ids: ["st-yamaguchi-4631"], name: "ヘルシーランド下関", officialUrl: "http://s-kanrikousha.com/healthytop.html",
    features: ["ドライサウナ", "水風呂あり"],
    facts: [
      factNov14("料金", "浴場（1人1日につき）一般630円、中・高校生440円、3歳以上小学生以下310円。下関市・北九州市在住の65歳以上は310円", "http://s-kanrikousha.com/healthyryoukin.html"),
      factNov14("設備", "大浴場（内湯・薬湯・水風呂・露天風呂）と遠赤外線サウナ（温度は80度前後）。50m・25mプール併設の複合施設", "http://s-kanrikousha.com/healthyshisetsu.html"),
      factNov14("水風呂", "大浴場に水風呂あり", "http://s-kanrikousha.com/healthyshisetsu.html"),
    ],
  },
  {
    ids: ["st-yamaguchi-4641"], name: "ホテルルートイン山口 湯田温泉", officialUrl: "https://www.route-inn.co.jp/hotel_list/yamaguchi/index_hotel_id_672/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "天然温泉の大浴場とサウナあり（公式ページの館内設備として大浴場・天然温泉・サウナを掲載）", "https://www.route-inn.co.jp/hotel_list/yamaguchi/index_hotel_id_672/"),
    ],
  },
  {
    ids: ["st-yamaguchi-4262"], name: "ゆーぱーく光", officialUrl: "http://ppp.seika-spc.co.jp/upark-hikari/",
    features: ["温泉付き"],
    facts: [
      factNov14("営業時間", "10:00～21:00（20時30分 受付終了）", "http://ppp.seika-spc.co.jp/upark-hikari/"),
      factNov14("定休日", "月曜日（月曜が祝日の場合は翌日）", "http://ppp.seika-spc.co.jp/upark-hikari/"),
      factNov14("設備", "大浴場（岩風呂、洋風呂）・家族風呂・サウナ・休憩室を備えた温泉施設。泉質はナトリウム・カルシウム－塩化物冷鉱泉", "http://ppp.seika-spc.co.jp/upark-hikari/"),
    ],
  },
  {
    ids: ["st-yamaguchi-4623"], name: "リゾートホテル美萩", officialUrl: "http://resorthotel-mihagi.com/",
    features: ["温泉付き", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴 大人（中学生以上）1,200円、小学生以下600円、乳児無料。貸切風呂 45分4,400円", "https://resorthotel-mihagi.com/onsen/"),
      factNov14("営業時間", "日帰り入浴 通常15:00～22:00（最終受付21:00）、火・水は17:00～22:00。サウナ 15:00～23:00。貸切風呂は15:00〜21:00スタート（最終受付18:00）", "https://resorthotel-mihagi.com/onsen/"),
      factNov14("設備", "自家源泉「萩指月温泉」（カルシウム・ナトリウム塩化物泉）のパノラマ展望大浴場（サウナ、バイブラバス、寝湯式ジェットバス、打たせ湯、ボディシャワー）、絶景露天風呂、貸切風呂", "https://resorthotel-mihagi.com/onsen/"),
      factNov14("利用条件", "日帰り入浴可（パノラマ展望大浴場）。7月連休～8月末、土曜日、連休、GW、お盆、年末年始などは利用できない場合あり。海水浴利用の方の日帰り入浴は不可", "https://resorthotel-mihagi.com/onsen/"),
    ],
  },
  {
    ids: ["st-yamaguchi-3665"], name: "国民宿舎 大城", officialUrl: "http://www.oojou.jp/",
    features: ["温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("定休日", "温泉・ランチの定休日は毎週月曜日・火曜日（祝日は営業）。公式の温泉・ランチカレンダー（令和8年9月現在）による", "https://www.oojou.jp/wp/wp-content/uploads/2026/10/de1c46f36e043317a836e987fd7897f0.pdf"),
      factNov14("設備", "全室オーシャンビューの客室、海を望む露天風呂（温泉）、展望レストランを備える", "https://www.oojou.jp/"),
      factNov14("利用条件", "温泉は日帰り利用も可能（公式サイトに「日帰り温泉・ランチ」の案内あり）", "https://www.oojou.jp/"),
    ],
  },
  {
    ids: ["st-yamaguchi-3672"], name: "山口 湯田温泉 ホテル かめ福", officialUrl: "http://www.kamefuku.com/",
    features: ["温泉付き", "タオルレンタルあり", "サ飯あり"],
    facts: [
      factNov14("料金", "大人（中学生以上）1,500円、小学生700円、幼児300円、2歳以下無料（いずれも税込・フェイスタオル付）。バスタオルは別途200円", "https://kamefuku.com/onsen/"),
      factNov14("営業時間", "月曜日～土曜日13:00～24:00、日曜日12:00～24:00（最終受付はいずれも22:00）", "https://kamefuku.com/onsen/"),
      factNov14("設備", "大浴場・壺湯・立ち湯があり、男性浴場にはサウナ、女性浴場には岩盤浴を備える。泉質はアルカリ性単純温泉（pH9.01）", "https://kamefuku.com/onsen/"),
      factNov14("利用条件", "日帰り入浴可。タトゥーのある方は入浴不可。オムツが取れていない子はベビーバス利用", "https://kamefuku.com/onsen/"),
    ],
  },
  {
    ids: ["st-yamaguchi-4298"], name: "上関海峡温泉 鳩子の湯", officialUrl: "http://www.hatokonoyu.jp/index.html",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴料は中学生以上800円、4才～小学6年生400円、3才以下無料", "https://www.hatokonoyu.jp/2026/10/16/3892/"),
      factNov14("設備", "TV設備付サウナ、畳の無料休憩室、売店、サポートルームを完備。館内にレストラン「うみべ。」がある", "https://www.hatokonoyu.jp/"),
      factNov14("利用条件", "日帰り入浴が可能な温泉施設", "https://www.hatokonoyu.jp/"),
    ],
  },
  {
    ids: ["st-yamaguchi-767"], name: "石船温泉憩の家", officialUrl: "http://kanokougen.com/onsen/",
    features: ["温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "温泉入浴料（税込）大人 市内450円・市外650円、60歳以上 市内240円・市外650円、小・中学生 市内120円・市外350円、小学生未満は無料", "http://kanokougen.com/onsen/"),
      factNov14("営業時間", "11:00～21:00", "https://kanokougen.com/"),
      factNov14("定休日", "毎週火曜日（祝日の場合は翌日休館）、12月29日～1月1日", "https://kanokougen.com/"),
      factNov14("設備", "源泉掛け流し天然温泉。内湯、サウナ、日替わり露天風呂（男性は奇数日・女性は偶数日）、食堂がある", "http://kanokougen.com/onsen/"),
      factNov14("利用条件", "日帰り入浴がメインの温泉で日帰り入浴可。タオルの貸し出しはなく、タオル（小）を280円で販売", "http://kanokougen.com/onsen/"),
    ],
  },
  {
    ids: ["st-yamaguchi-765"], name: "道の駅 願成就温泉", officialUrl: "https://www.ganjojuonsen.com/",
    features: ["温泉付き", "貸切可", "サ飯あり"],
    facts: [
      factNov14("料金", "一般浴場 大人520円、小学生300円、未就学児無料", "https://www.ganjojuonsen.com/"),
      factNov14("営業時間", "一般浴場 9:00～21:00（受付は20:30まで、退館20:50）。貸切風呂は9:00～19:30", "https://www.ganjojuonsen.com/"),
      factNov14("定休日", "毎月第3水曜日（全館休館）", "https://www.ganjojuonsen.com/"),
      factNov14("設備", "一般浴場のほか貸切風呂（設置数1、予約制・1コマ45分から）、レストラン「ゆ楽園」、売店がある", "https://www.ganjojuonsen.com/"),
    ],
  },
  {
    ids: ["st-yamaguchi-3673"], name: "日本海温泉・鹿島の湯", officialUrl: "http://www.abucreation.com/facilities/onsen/",
    features: ["温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "一般600円（サウナ込）、阿武町民一般500円、子供（小学生まで）300円、4才未満無料（2022年6月1日改定）", "https://www.abucreation.com/facilities/onsen/"),
      factNov14("営業時間", "月・火・木・金10:00～21:00、土10:00～22:00、日9:00～21:00（受付は終了30分前まで）", "https://www.abucreation.com/facilities/onsen/"),
      factNov14("定休日", "毎週水曜日（水曜日が祝日の場合は木曜日）", "https://www.abucreation.com/facilities/onsen/"),
      factNov14("設備", "男女ともサウナ室を完備（利用料金に含む）。地下1,000mから汲み上げる天然温泉で、2階の浴室から日本海を眺望できる", "https://www.abucreation.com/facilities/onsen/"),
      factNov14("利用条件", "貸しタオル100円、貸しバスタオル200円。ボディソープ・シャンプーは備え付け", "https://www.abucreation.com/facilities/onsen/"),
      { label: "施設営業時間", value: "月・火・木・金 10:00～21:00 （受付 20時30分まで） 土 10:00～22:00 （受付 21時30分まで）日 9:00～21:00 （受付 20時30分まで） ※混雑時は受付時間を早める場合がございます。", sourceUrl: "https://www.abucreation.com/facilities/onsen/", checkedAt: "2026-10-19" },
    ],
  },
  {
    ids: ["st-yamaguchi-3655"], name: "萩阿武川温泉 ふれあい会館", officialUrl: "https://hagiabugawaonsenpark.jimdofree.com/",
    features: ["温泉付き", "貸切可"],
    facts: [
      factNov14("料金", "温泉利用料金（サウナ込み・税込）大人（中学生以上）550円、小人（小学生）250円、幼児・乳児100円", "https://hagiabugawaonsenpark.jimdofree.com/%E6%96%BD%E8%A8%AD%E7%B4%B9%E4%BB%8B/%E6%B8%A9%E6%B3%89/"),
      factNov14("営業時間", "10:00～20:00（最終受付19:30）", "https://hagiabugawaonsenpark.jimdofree.com/%E6%96%BD%E8%A8%AD%E7%B4%B9%E4%BB%8B/%E6%B8%A9%E6%B3%89/"),
      factNov14("定休日", "火曜日（祝日を除く）", "https://hagiabugawaonsenpark.jimdofree.com/%E6%96%BD%E8%A8%AD%E7%B4%B9%E4%BB%8B/%E6%B8%A9%E6%B3%89/"),
      factNov14("設備", "地下1,000mから湧き出るアルカリ性単純温泉（美人湯）。サウナあり（料金込み）。露天風呂は源泉温度35度の湯を使用。大浴場・中浴場は月・曜日により男女入れ替え制", "https://hagiabugawaonsenpark.jimdofree.com/%E6%96%BD%E8%A8%AD%E7%B4%B9%E4%BB%8B/%E6%B8%A9%E6%B3%89/"),
      factNov14("利用条件", "小浴場は予約制で30分単位の利用。館外に出ると再入浴はできない", "https://hagiabugawaonsenpark.jimdofree.com/%E6%96%BD%E8%A8%AD%E7%B4%B9%E4%BB%8B/%E6%B8%A9%E6%B3%89/"),
    ],
  },
  {
    ids: ["st-yamaguchi-4622"], name: "萩本陣 湯の丸", officialUrl: "https://www.hagihonjin.co.jp/",
    features: ["温泉付き", "貸切可", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り温泉 大人（中学生以上）1,100円（平日13:00～15:00）／1,650円（18:00～21:00等）、特別日（年末年始・GW・お盆）2,500円。小人（3才～小学生）550円～1,250円", "https://www.hagihonjin.co.jp/daytrip/"),
      factNov14("営業時間", "日帰り温泉の受付は13:00～21:00（最終受付20:00）。時間帯により料金が異なる", "https://www.hagihonjin.co.jp/daytrip/"),
      factNov14("定休日", "設備点検等のため不定休（休業日は公式サイトのお知らせで案内）", "https://www.hagihonjin.co.jp/daytrip/"),
      factNov14("設備", "地下約2000メートルから汲み上げる自家源泉で14種類の湯めぐり。露天風呂やサウナあり。事前予約制の貸切温泉（檜造り）も用意", "https://www.hagihonjin.co.jp/daytrip/"),
      factNov14("利用条件", "日帰り温泉の利用が可能（平日15:00～18:00は宿泊者専用時間で日帰り利用不可）。料金にフェイスタオルの利用料を含み、貸バスタオルは330円", "https://www.hagihonjin.co.jp/daytrip/"),
    ],
  },
  {
    ids: ["st-tokushima-4564"], name: "鳴門天然温泉 あらたえの湯", officialUrl: "http://aratae.jp/naruto/",
    features: ["温泉付き"],
    facts: [
      factNov14("営業時間", "朝8：00～24：00（最終受付 23：00）", "http://aratae.jp/naruto/"),
      factNov14("定休日", "不定休", "http://aratae.jp/naruto/"),
    ],
  },
  {
    ids: ["st-kagawa-3715"], name: "カメリア温泉", officialUrl: "https://spa-kameria.com/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "入浴料 大人680円・高齢者460円・身障者/子供360円（2026年7月3日改定）。回数券 大人6,800円・高齢者4,600円", "https://spa-kameria.com/event-news/news/bathing-fee-revision/"),
    ],
  },
  {
    ids: ["st-kagawa-736"], name: "ゴールデンタイム高松", officialUrl: "https://goldentime-takamatsu.com/",
    features: ["温泉付き", "ロウリュあり", "熱波師あり", "宿泊可"],
    facts: [
      factNov14("設備", "源泉かけ流しのラドン天然温泉を使った5種類のバスと、低温のフィンランド式サウナ・IKIサウナの2種類のサウナ", "https://goldentime-takamatsu.com/"),
      factNov14("利用条件", "男性専用。カプセルホテルご利用のお客様は天然温泉やサウナが24時間ご利用可能", "https://goldentime-takamatsu.com/"),
    ],
  },
  {
    ids: ["st-kagawa-737"], name: "サウナ＆カプセル・ファーストイン高松", officialUrl: "http://first-inn.flips.jp/",
    features: ["塩サウナ", "宿泊可"],
    facts: [
      factNov14("料金", "サウナ 基本料金1,900円、2時間1,100円、朝風呂800円（いずれも税込）。回数券5枚綴り（2時間）5,000円、フリータイム8,500円", "http://first-inn.flips.jp/"),
      factNov14("営業時間", "サウナ 11時～24時。朝風呂は6時～9時。AM0時～AM6時は大浴場・サウナのご利用不可", "http://first-inn.flips.jp/"),
      factNov14("設備", "大浴場、塩サウナ、高温サウナ、リクライニングルーム", "http://first-inn.flips.jp/"),
      factNov14("利用条件", "大浴場・サウナは男性専用", "http://first-inn.flips.jp/"),
    ],
  },
  {
    ids: ["st-kagawa-3727"], name: "トレスタ白山", officialUrl: "http://www.tresta.jp/guide/spa.html",
    features: ["温泉付き", "水風呂あり", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴 大人800円、小人（小学生以下）500円、シルバー（60歳以上）700円。お得な回数券の販売もあり", "https://www.tresta.jp/spa/"),
      factNov14("営業時間", "日帰り入浴 10：00～21：00（火曜日は13：00～）、最終受付20：30。宿泊者の大浴場利用は15：00～24：00／翌6：00～8：30", "https://www.tresta.jp/spa/"),
      factNov14("設備", "天然温泉「虹の湯」（ナトリウム炭酸水素塩冷鉱泉）。男湯・女湯に内風呂、水風呂、泡風呂、露天風呂、サウナを備える", "https://www.tresta.jp/spa/"),
      factNov14("利用条件", "日帰り入浴が可能。身体に入墨（タトゥー）の入っている方は入浴不可", "https://www.tresta.jp/spa/"),
    ],
  },
  {
    ids: ["st-kagawa-739"], name: "瀬戸大橋四国健康村", officialUrl: "http://www.kenkou-mura.com/",
    features: ["ロウリュあり"],
    facts: [
      factNov14("設備", "ロウリュサウナがあり、毎週日曜は男性サウナで「朝から夜までロウリュ」、毎週金曜は「チャレンジロウリュ」を実施（公式トップの案内）", "http://www.kenkou-mura.com/"),
    ],
  },
  {
    ids: ["st-ehime-3744"], name: "たかのこの湯", officialUrl: "http://takanokono.jp/hotspring/",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "サ飯あり", "宿泊可"],
    facts: [
      factNov14("料金", "一般 平日800円・土日祝850円、シニア（65歳以上）平日700円・土日祝750円、1歳〜小学生以下300円、朝湯の会（朝5時〜10時）600円", "https://takanokono.jp/hotspring"),
      factNov14("営業時間", "入浴時間 05:00〜25:00（札止め24:00）", "https://takanokono.jp/hotspring"),
      factNov14("定休日", "年中無休", "https://takanokono.jp/hotspring"),
      factNov14("設備", "オートロウリュサウナ、水風呂、露天風呂、歩行浴、電気風呂、寝湯など。地下1200mから湧く源泉（47℃）のアルカリ性単純温泉", "https://takanokono.jp/hotspring"),
      factNov14("水風呂", "水風呂あり", "https://takanokono.jp/hotspring"),
      factNov14("利用条件", "入れ墨（タトゥ含む）のある方は入場不可。小学生以下は保護者同伴が必要。併設ホテルの宿泊者は入浴無料", "https://takanokono.jp/hotspring"),
      { label: "休館日", value: "年中無休", sourceUrl: "https://takanokono.jp/hotspring", checkedAt: "2026-10-19" },
    ],
  },
  {
    ids: ["st-ehime-3751"], name: "権現温泉", officialUrl: "https://gongen-onsen.com/",
    features: ["温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("営業時間", "温泉の利用時間 10:00〜22:00（札止め21:30）", "https://gongen-onsen.com/onsen/"),
      factNov14("設備", "ジェットバス、気泡湯、薬湯、サウナなど多彩な湯船。泉質はアルカリ性単純泉。館内に食堂「友國食堂」あり", "https://gongen-onsen.com/onsen/"),
    ],
  },
  {
    ids: ["st-ehime-4294"], name: "森の国ぽっぽ温泉", officialUrl: "http://poppoonsen.com/",
    features: ["温泉付き", "貸切可"],
    facts: [
      factNov14("料金", "当日券 大人（高校生以上）550円、65歳以上450円、中学生350円、小学生200円、小学生未満無料。家族風呂は1部屋/1時間2,000円（別途入浴料が必要）", "http://poppoonsen.com/guide/"),
      factNov14("営業時間", "10:00〜22:00（21:30札止め）", "http://poppoonsen.com/guide/"),
      factNov14("定休日", "休館日は月ごとに設定（2026年11月は9日）", "http://poppoonsen.com/"),
      factNov14("設備", "JR松丸駅舎内にある天然温泉。明治の湯・滑床の湯の2浴室（男女が日替わりで入れ替え）、家族風呂、駅前の無料足湯（10:00〜17:00）", "http://poppoonsen.com/onsen/"),
    ],
  },
  {
    ids: ["st-ehime-3736"], name: "鈍川せせらぎ交流館", officialUrl: "https://seseragi-onsen.com/",
    features: ["水風呂あり", "外気あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "大人（中学生以上）560円、小人（3歳以上小学生以下）280円、高齢者（満65歳以上）450円。障がい者とその介護者は半額", "https://seseragi-onsen.com/spa"),
      factNov14("設備", "主浴槽、ジャグジー風呂、露天風呂、うたせ湯に加え、サウナ設備と水風呂を完備。屋外ウッドデッキで外気浴可。泉質はラドン含有量が高いアルカリ性単純泉（pH9.9）", "https://seseragi-onsen.com/spa"),
      factNov14("水風呂", "水風呂あり", "https://seseragi-onsen.com/spa"),
    ],
  },
  {
    ids: ["st-ehime-3730"], name: "南道後温泉ていれぎの湯", officialUrl: "https://teiregi.jp/",
    features: ["塩サウナ", "温泉付き"],
    facts: [
      factNov14("料金", "平日 大人680円・小人（3歳〜小学生）300円、土日祝日 大人790円・小人300円", "http://teiregi.jp/blog/about/"),
      factNov14("営業時間", "6:00〜24:00（札止23:00）", "http://teiregi.jp/blog/about/"),
      factNov14("定休日", "年中無休", "http://teiregi.jp/blog/about/"),
      factNov14("設備", "テントサウナ、塩サウナ、遠赤外線サウナを備える。地下1200mから自噴する源泉と療養泉「黄金湯」はじめ10種類以上の温泉", "https://teiregi.jp/"),
    ],
  },
  {
    ids: ["st-ehime-3739"], name: "媛彦温泉", officialUrl: "http://himehiko.jp/main/",
    features: ["温泉付き", "貸切可", "水風呂あり", "外気あり"],
    facts: [
      factNov14("料金", "大人（中学生以上）平日700円・土日祝750円、シニア（65歳以上）平日650円・土日祝700円、子供（1歳〜小学生以下）250円、朝湯500円", "https://himehiko.jp/hotspring/"),
      factNov14("営業時間", "大浴場 午前9時〜翌7時", "https://himehiko.jp/hotspring/"),
      factNov14("定休日", "年中無休（年1回の施設点検日を除く）", "https://himehiko.jp/hotspring/"),
      factNov14("設備", "大浴場は全9種類の湯船（女風呂のみ+1種類）。全20室の貸切風呂には露天風呂・サウナ・水風呂付きの部屋がある", "http://himehiko.jp/main/"),
      factNov14("水風呂", "貸切風呂に水風呂あり", "http://himehiko.jp/main/"),
      factNov14("利用条件", "入れ墨（タトゥ含む）のある方は入場不可。小学生以下は保護者同伴が必要", "https://himehiko.jp/hotspring/"),
    ],
  },
  {
    ids: ["st-kochi-4552"], name: "宿毛リゾート 椰子の湯", officialUrl: "http://yashinoyu.com/index.html",
    features: ["外気あり", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴 大人（中学生以上）平日950円・土日祝日1,000円（税込）、子ども（4歳以上小学生以下）500円、3歳以下無料", "https://yashinoyu.com/onsen.html"),
      factNov14("営業時間", "日帰り入浴 6:00～8:30／12:00～20:00（札止め19:30）。宿泊のお客様 6:00～8:30／15:00～23:00", "https://yashinoyu.com/onsen.html"),
      factNov14("設備", "四国初の大展望棚田状露天風呂と露天桧風呂（男女日替わりで入れ替え）", "https://yashinoyu.com/onsen.html"),
      factNov14("利用条件", "日帰り入浴可。刺青・タトゥーのある方のご入浴はお断り", "https://yashinoyu.com/onsen.html"),
    ],
  },
  {
    ids: ["st-kochi-3801"], name: "城西館", officialUrl: "https://www.jyoseikan.co.jp/",
    features: ["外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "最上階8Fに展望露天風呂と展望大浴場（男湯「いごっそうの湯」・女湯「はちきんの湯」）。湯上がり茶屋「城見櫓」あり", "https://www.jyoseikan.co.jp/spa/large-bath/"),
    ],
  },
  {
    ids: ["st-kochi-4659"], name: "天然温泉 紺碧の湯 ドーミーイン高知", officialUrl: "https://www.hotespa.net/hotels/kochi/",
    features: ["ドライサウナ", "水風呂あり", "外気あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "2Fに男女別天然温泉大浴場「紺碧の湯」。内湯は南国市のながおか温泉から運んだ天然温泉（低張性アルカリ性温泉）。男女とも内湯・外湯・高温ドライサウナ・水風呂を設置", "https://www.hotespa.net/hotels/kochi/"),
      factNov14("水風呂", "深めの水風呂あり（男女とも）", "https://www.hotespa.net/hotels/kochi/"),
    ],
  },
  {
    ids: ["st-kochi-3795"], name: "道の駅 木の香温泉", officialUrl: "https://konokaonsen.jp/facility/natural_hot_spring.php",
    features: ["水風呂あり", "温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴料 大人800円（税込）、小人500円、シニア割引500円、障がい者500円", "https://konokaonsen.jp/facility/natural_hot_spring.php"),
      factNov14("営業時間", "11:00～20:00（札止め）。※2026年12月1日より12:00～20:00（受付終了19:30）に変更（公式お知らせ）", "https://konokaonsen.jp/news/detail.php?iid=298"),
      factNov14("定休日", "火曜日。※冬期（12月1日～3月31日）は温泉棟が毎週火・水曜日定休（公式お知らせ）", "https://konokaonsen.jp/news/detail.php?iid=298"),
      factNov14("設備", "男女別内風呂・露天風呂、サウナ、水風呂。泉質はナトリウム塩化物泉。レストラン・宿泊施設併設", "https://konokaonsen.jp/facility/natural_hot_spring.php"),
      factNov14("水風呂", "水風呂あり", "https://konokaonsen.jp/facility/natural_hot_spring.php"),
    ],
  },
  {
    ids: ["sc2025-sakurado"], name: "SAUNA SAKURADO", officialUrl: "https://sauna-sakurado.spa/",
    features: ["ドライサウナ", "薪サウナ", "ロウリュあり", "水風呂あり", "個室", "男女共用", "サ飯あり"],
    facts: [
      factNov14("料金", "全6室の個室料金 9,000円〜（3-D・2名・125分）～46,860円〜（2-A・7名・140分）。入会金22,000円（税込）", "https://sauna-sakurado.spa/features/spacious-sauna-room/"),
      factNov14("営業時間", "9:00-24:00", "https://sauna-sakurado.spa/"),
      factNov14("定休日", "不定休（各SNSをご確認ください）", "https://sauna-sakurado.spa/"),
      factNov14("設備", "全6室のプライベートサウナ。METOS社IKI-Kiuasヒーターで約90℃のドライサウナとロウリュ、2-Aには薪ストーブ。1Fにカフェバー「SKIFF」併設", "https://sauna-sakurado.spa/features/spacious-sauna-room/"),
      factNov14("水風呂", "超軟水「白水」の水風呂（水深90〜110cm）を全室に完備", "https://sauna-sakurado.spa/features/spacious-sauna-room/"),
      factNov14("利用条件", "会員制・基本紹介制。水着着用で男女利用可。事前決済（電子決済とクレジット決済のみ）", "https://sauna-sakurado.spa/"),
    ],
  },
  {
    ids: ["st-fukuoka-4778"], name: "SHIAGARU SAUNA", officialUrl: "https://shiagaru-sauna.com/",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり"],
    facts: [
      factNov14("料金", "福岡天神店：平日60分1,400円～（入館時間帯・利用時間により変動、120分2,000円まで）、土日祝60分1,700円～。延長は1時間ごとに1,000円", "https://shiagaru-sauna.com/"),
      factNov14("営業時間", "平日 12:00〜24:00（最終受付23:00）、土日祝 10:00〜23:00（最終受付22:00）", "https://shiagaru-sauna.com/"),
      factNov14("設備", "効果の異なる2種類のサウナ（深部体温サウナはオートロウリュ＆オートアウフグース、末端体温サウナはフットレスト付き）と、3種のフローティング水風呂、ととのいスペース（しあがるーむ）", "https://shiagaru-sauna.com/"),
      factNov14("水風呂", "3種のフローティング水風呂", "https://shiagaru-sauna.com/"),
      factNov14("利用条件", "予約優先制。キャッシュレス決済のみで現金は利用不可", "https://shiagaru-sauna.com/"),
    ],
  },
  {
    ids: ["st-fukuoka-791"], name: "ウェルビー福岡", officialUrl: "https://www.wellbe.co.jp/fukuoka/",
    features: ["ロウリュあり", "熱波師あり", "水風呂あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "福岡店 入館料2時間 平日2,000円・土日祝特定日2,500円（＋1時間ごと500円、最大料金4,000円／4,500円）。ナイト2時間 2,500円／3,000円", "https://www.wellbe.co.jp/fukuoka/"),
      factNov14("営業時間", "サウナ 5:00〜23:00、カプセル 14:00〜翌日11:00", "https://www.wellbe.co.jp/fukuoka/"),
      factNov14("設備", "フィンランド式サウナ（HARVIA製ストーブ、80℃〜90℃、ロウリュ可）、アウフグース、からふろ、アイスサウナ。レストラン、カプセルホテル・プレミアムルーム併設", "https://www.wellbe.co.jp/fukuoka/"),
      factNov14("水風呂", "強冷水風呂＆弱冷水風呂", "https://www.wellbe.co.jp/fukuoka/"),
    ],
  },
  {
    ids: ["st-fukuoka-4487"], name: "かんぽの宿 柳川", officialUrl: "https://kamenoi-hotels.com/yanagawa/onsen/",
    features: ["温泉付き", "水風呂あり", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴 大人（中学生以上）600円、子供（小学生）300円、幼児（4歳～小学生未満）100円。貸切風呂は1回50分2,000円", "https://kamenoi-hotels.com/yanagawa/onsen/"),
      factNov14("営業時間", "日帰り入浴 昼の部：展望風呂11:00～15:00、露天風呂／サウナ12:00～15:00（受付終了14:00）。夜の部18:00～21:00（受付終了20:00）", "https://kamenoi-hotels.com/yanagawa/onsen/"),
      factNov14("定休日", "毎週火曜日（昼の部）は浴室定期点検のため日帰り温泉を休止", "https://kamenoi-hotels.com/yanagawa/onsen/"),
      factNov14("設備", "5階展望風呂、露天風呂（サウナ・水風呂併設）、貸切風呂（バリアフリー対応）。泉質はナトリウム-炭酸水素塩・塩化物泉（柳川温泉）", "https://kamenoi-hotels.com/yanagawa/onsen/"),
      factNov14("水風呂", "露天風呂に水風呂併設", "https://kamenoi-hotels.com/yanagawa/onsen/"),
      factNov14("利用条件", "日帰り入浴可（貸切風呂の日帰り予約は不可）", "https://kamenoi-hotels.com/yanagawa/onsen/"),
    ],
  },
  {
    ids: ["st-fukuoka-4787"], name: "サウナヨーガン福岡天神", officialUrl: "https://yogan-sauna-fukuoka-tenjin.jp/",
    features: ["セルフロウリュ", "水風呂あり", "外気あり", "個室", "サ飯あり"],
    facts: [
      factNov14("料金", "パブリック（平日75分）会員1,600円～・一般1,900円～、土日祝（60分）会員1,800円・一般2,100円。プライベートサウナ90分 平日7,700円・土日祝8,800円", "https://yogan-sauna-fukuoka-tenjin.jp/price/"),
      factNov14("営業時間", "入館7:30〜23:00（平日の料金表の入館時間帯による）", "https://yogan-sauna-fukuoka-tenjin.jp/price/"),
      factNov14("設備", "男性専用パブリックサウナ2室（約100℃の溶岩サウナ、セルフロウリュ可能な瞑想サウナ）とプライベートサウナ1室（最大3名）。屋上外気浴、お食事処「長浜 まんさく鮨」併設", "https://yogan-sauna-fukuoka-tenjin.jp/"),
      factNov14("水風呂", "10℃前後に保たれた水風呂", "https://yogan-sauna-fukuoka-tenjin.jp/"),
      factNov14("利用条件", "パブリックサウナは男性専用で予約不要の日帰り利用可。女性・家族は予約制プライベートサウナを利用可。パブリックではタトゥーは原則不可（タトゥーシールで隠れる範囲は可）", "https://yogan-sauna-fukuoka-tenjin.jp/"),
    ],
  },
  {
    ids: ["st-fukuoka-4390"], name: "ホテルキャビナス福岡", officialUrl: "http://cabinas.jp/",
    features: ["宿泊可", "サ飯あり"],
    facts: [
      factNov14("営業時間", "24時間受付（サウナ・大浴場は24時間利用可、チェックアウト11:00）", "http://cabinas.jp/"),
      factNov14("設備", "サウナ・大浴場を備えたカプセルホテル（ロイヤル個室カプセル・個室カプセル・連結カプセル）。お食事付きプランあり", "http://cabinas.jp/"),
      factNov14("利用条件", "男性専用", "http://cabinas.jp/"),
    ],
  },
  {
    ids: ["st-fukuoka-797"], name: "まむしの湯", officialUrl: "http://www.mamushi-spa.co.jp/index.html",
    features: ["塩サウナ", "貸切可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴料（タオル別）大人880円、子供（4才～小学生）400円。貸タオル150円、貸バスタオル300円。家族風呂1時間3,300円（要予約）", "http://mamushi-spa.co.jp/spa.html"),
      factNov14("設備", "高温サウナ・低温サウナ（塩サウナ利用可）、露天風呂、ワイン風呂、お茶風呂、壺風呂、家族風呂、お食事処「十坊」", "http://mamushi-spa.co.jp/spa.html"),
      factNov14("利用条件", "刺青・タトゥーを入れている方は入館不可（大浴場・家族風呂・レストラン・売店すべて）", "http://mamushi-spa.co.jp/spa.html"),
    ],
  },
  {
    ids: ["st-fukuoka-3841"], name: "もじ楽の湯", officialUrl: "https://terihaspa.jp/moji/furo.html",
    features: ["ドライサウナ", "水風呂あり", "貸切可", "宿泊可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴のみ 大人 平日1,100円・土日祝1,200円（会員990円・1,100円）、3歳～小学生500円、0歳～2歳無料。岩盤浴付きコース 大人2,200円・土日祝2,400円", "http://terihaspa.jp/moji"),
      factNov14("定休日", "年中無休（メンテナンス休館日あり）", "https://terihaspa.jp/moji/furo.html"),
      factNov14("設備", "関門海峡を望む眺望露天風呂（大里の湯・風華の湯）、炭酸泉、陶器風呂、スタジアムサウナ（遠赤外線）、岩盤房「美彩汗房」、家族風呂、ホテル棟併設", "https://terihaspa.jp/moji/furo.html"),
      factNov14("水風呂", "吟水風呂（ミネラルを豊富に含んだ水風呂）あり", "https://terihaspa.jp/moji/furo.html"),
      factNov14("利用条件", "刺青・タトゥー（シール・ペイント等含む）のある方は入館不可。タオルは別途料金（レンタルタオルセット400円、販売タオル280円）", "https://terihaspa.jp/moji/furo.html"),
    ],
  },
  {
    ids: ["st-fukuoka-783"], name: "華の湯 片野店", officialUrl: "https://hananoyu-hiburan.com/charge/",
    features: ["サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴料 大人800円、子供（3歳以上小学生以下）380円、学割500円。回数券（11枚綴り）5,000円。タオルレンタル100円、バスタオルレンタル200円", "https://hananoyu-hiburan.com/charge/"),
      factNov14("営業時間", "6:00〜深夜1:00（最終受付24:00）", "https://hananoyu-hiburan.com/guide/"),
      factNov14("定休日", "年中無休", "https://hananoyu-hiburan.com/guide/"),
      factNov14("設備", "大浴場、サウナ、休憩所、もみほぐし、エステ、食堂（華の湯食堂）", "https://hananoyu-hiburan.com/facility/"),
      factNov14("利用条件", "刺青・タトゥー（シール不可）・ボディーペイントのある方は入館不可。シャンプー・リンス・ボディーソープの備え付けなし（各100円で販売）", "https://hananoyu-hiburan.com/charge/"),
    ],
  },
  {
    ids: ["st-fukuoka-4490"], name: "赤村ふるさとセンター 源じいの森温泉", officialUrl: "http://www.genjii.com/spa/spa_1.htm",
    features: ["温泉付き", "水風呂あり", "個室", "貸切可"],
    facts: [
      factNov14("料金", "大人（15歳以上）一般700円・村内550円、子供（5歳以上〜中学生以下）350円・村内300円。家族風呂（1時間）平日1,600円・土日祝1,900円", "https://www.genjii.com/spa"),
      factNov14("営業時間", "10:00～21:00（受付時間は20:00まで、家族風呂の受付時間は19:00まで）", "https://www.genjii.com/spa"),
      factNov14("定休日", "第三木曜日・年末年始", "https://www.genjii.com/spa"),
      factNov14("設備", "天然温泉（単純温泉）の露天風呂・大浴場、貸し切りの家族風呂（和室付き）、プライベートサウナ、大広間（無料休憩所）", "https://www.genjii.com/spa"),
      factNov14("水風呂", "16℃前後の水風呂あり（サウナとの交互浴が可能）", "https://www.genjii.com/spa"),
    ],
  },
  {
    ids: ["st-fukuoka-3840"], name: "筑紫野 天拝の郷", officialUrl: "https://tenpainosato.com/",
    features: ["セルフロウリュ", "オートロウリュ", "ロウリュあり", "温泉付き", "貸切可", "サ飯あり"],
    facts: [
      factNov14("定休日", "原則として毎月第2火曜日を休館日とする（第2火曜日が祝日などの場合は別日）", "https://tenpainosato.com/"),
      factNov14("設備", "地下1,500mから湧き出る天然温泉「天拝の湯」、セルフロウリュサウナ（男性のみ）、オートロウリュサウナ（女性のみ）、露天風呂、和室付き貸し切り家族風呂（全6室）、自然食ビュッフェレストラン「姫蛍」", "https://tenpainosato.com/"),
    ],
  },
  {
    ids: ["st-fukuoka-3824"], name: "游心の湯", officialUrl: "https://yushin-yu.com/",
    features: ["セルフロウリュ", "ロウリュあり", "熱波師あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("営業時間", "月〜土曜日 9:00〜25:00（最終入館24:00）、日曜日・祝日・特別日 7:00〜25:00（最終入館24:00）", "https://yushin-yu.com/facilities/ofuro"),
      factNov14("設備", "源泉掛け流し温泉の露天風呂・高濃度炭酸泉、男性フィンランド式サウナ室、男女メディテーションサウナ室、女性フィンランド式サウナ室。セルフロウリュ式サウナがあり、アウフグースイベントを毎日開催", "https://yushin-yu.com/facilities/ofuro"),
    ],
  },
  {
    ids: ["st-saga-4478"], name: "嬉野温泉 旅館 大正屋", officialUrl: "http://www.taishoya.com/",
    features: ["スチーム(ミスト)サウナ", "温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "立寄り湯（四季の湯）入浴料 大人1,300円（中学生以上）、子供600円（小学生）、幼児無料", "https://www.taishoya.com/taishoya/spa/"),
      factNov14("営業時間", "立寄り湯（四季の湯）12:00～23:00", "https://www.taishoya.com/taishoya/spa/"),
      factNov14("設備", "大浴場「四季の湯」「滝の湯」があり、滝の湯には温泉熱を利用したミストサウナを併設（22:30まで）", "https://www.taishoya.com/taishoya/spa/"),
      factNov14("利用条件", "日帰り入浴可（四季の湯のみ）。滝の湯は宿泊者専用で、12:00～15:00は清掃時間のため立寄り不可", "https://www.taishoya.com/taishoya/spa/"),
    ],
  },
  {
    ids: ["st-saga-4473"], name: "鏡山温泉茶屋 美人の湯", officialUrl: "https://www.karatsu-kankou.jp/gourmet/detail/11/Gourmet",
    features: ["温泉付き", "貸切可", "サ飯あり"],
    facts: [
      factNov14("料金", "大人 800円（税込）、小人（2歳～小学生）450円（税込）。17:00以降は大人 700円（税込）、小人 400円（税込）", "https://www.karatsu-kankou.jp/gourmet/detail/11/Gourmet"),
      factNov14("営業時間", "温泉 10:00～22:00（最終受付 21:30）", "https://www.karatsu-kankou.jp/gourmet/detail/11/Gourmet"),
      factNov14("定休日", "毎月第3木曜日（祝日の場合は営業）、12/31。※1月・2月・8月は無休", "https://www.karatsu-kankou.jp/gourmet/detail/11/Gourmet"),
      factNov14("設備", "露天風呂、サウナ（男・女）有り。地下1,600mから汲み上げる温泉", "https://www.karatsu-kankou.jp/gourmet/detail/11/Gourmet"),
      factNov14("設備", "源泉かけ流し温泉（露天風呂・たる風呂）、家族風呂、食事処があり、お食事のみの利用も可", "http://kagamiyamaonsenchaya.com/"),
    ],
  },
  {
    ids: ["st-saga-3948"], name: "佐賀大和温泉ホテルアマンディ", officialUrl: "https://www.amandi.jp/saga/index.html",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "岩盤浴コース（入湯＋岩盤浴）一般 1,350円（税込）、会員 1,100円（税込）", "https://www.amandi.jp/saga/spa.html"),
      factNov14("営業時間", "岩盤浴 月 12:00～20:00、火・水・木 12:00～21:00、金・土・日・祝 12:00～22:00（受付は各1時間前まで）", "https://www.amandi.jp/saga/spa.html"),
      factNov14("設備", "地下1300mより湧き出る天然温泉（炭酸泉）100％かけ流し、露天風呂、岩盤浴（ストーン・スパ）", "https://www.amandi.jp/saga/spa.html"),
      factNov14("利用条件", "岩盤浴のご利用は中学生以上。当日はフリータイムで利用可", "https://www.amandi.jp/saga/spa.html"),
    ],
  },
  {
    ids: ["st-saga-3933"], name: "大町温泉ひじり乃湯", officialUrl: "http://yutokuonsen.com/omachi.html",
    features: ["ドライサウナ", "水風呂あり", "温泉付き", "貸切可", "サ飯あり"],
    facts: [
      factNov14("料金", "大人（中学生以上）一般900円・会員800円、小人（小学生）一般450円・会員400円、幼児（3歳以上）一般350円・会員300円（令和8年9月1日改定）", "https://yutokuonsen.com/omachi.html"),
      factNov14("営業時間", "平日 10:00～21:30（最終受付21:00）、土日祝 10:00～22:00（最終受付21:30）", "https://yutokuonsen.com/omachi.html"),
      factNov14("定休日", "毎週火曜日（祝日は別日）", "https://yutokuonsen.com/omachi.html"),
      factNov14("設備", "遠赤外線サウナ、水風呂、庭園露天風呂など10種類のお風呂、貸切風呂、岩盤浴、お食事処「ひじり亭」、無料休憩室", "https://yutokuonsen.com/omachi.html"),
      factNov14("水風呂", "遠赤外線サウナとあわせて水風呂あり", "https://yutokuonsen.com/omachi.html"),
      factNov14("利用条件", "日帰り入浴可（日帰り温泉施設）", "https://yutokuonsen.com/omachi.html"),
      { label: "休館日", value: "毎週火曜祝日は別日", sourceUrl: "https://yutokuonsen.com/omachi.html", checkedAt: "2026-10-19" },
    ],
  },
  {
    ids: ["st-saga-4477"], name: "武雄温泉 鷲乃湯", officialUrl: "http://www.takeo-kk.net/spa/001333.php",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "大人740円、子供（3才～小学生）370円", "http://www.takeo-kk.net/spa/001333.php"),
      factNov14("営業時間", "入浴時間 6:30～23:45（最終受付は23:00まで）", "http://www.takeo-kk.net/spa/001333.php"),
      factNov14("設備", "通常の内湯の他に、露天風呂とサウナがある温泉施設。旅館「楼門亭」の浴場を兼ねている", "http://www.takeo-kk.net/spa/001333.php"),
      factNov14("利用条件", "入れ墨者、泥酔者、マナー違反者はお断り。ボディーソープ、リンスインシャンプーあり", "http://www.takeo-kk.net/spa/001333.php"),
    ],
  },
  {
    ids: ["st-saga-3587"], name: "北方温泉四季の里 七彩の湯", officialUrl: "http://www.nanaironoyu.com/",
    features: ["温泉付き", "貸切可", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "温泉入浴料 大人800円、子供400円。家族風呂は1時間 室料（1,500円～2,000円）＋温泉入浴料", "http://www.nanaironoyu.com/"),
      factNov14("営業時間", "家族風呂は土日祝日のみ営業 16:00～21:00（最終受付19:45）、平日は休業", "http://www.nanaironoyu.com/"),
      factNov14("設備", "岩風呂、ひょうたん風呂、満月風呂、四角風呂などの浴槽と家族風呂。日帰り・宴会施設、食事処、宿泊施設あり", "http://www.nanaironoyu.com/"),
      factNov14("利用条件", "日帰り利用可。家族風呂は予約不可", "http://www.nanaironoyu.com/"),
      { label: "施設営業時間", value: "12:00～21:00", sourceUrl: "http://www.nanaironoyu.com/", checkedAt: "2026-10-19" },
    ],
  },
  {
    ids: ["st-nagasaki-4616"], name: "i+Land Nagasaki　MINATO SPA 岩盤 TERRACE", officialUrl: "https://www.islandnagasaki.jp/spa/minato-spa.php",
    features: ["宿泊可"],
    facts: [
      factNov14("料金", "［岩盤浴＋大浴場］大人 平日800円・土日祝1,000円、小学生 平日500円・土日祝700円", "https://www.islandnagasaki.jp/wp/wp-content/uploads/2025/02/ilandpless_25spring.pdf"),
      factNov14("営業時間", "6:00～23:00（最終受付22:30）", "https://www.islandnagasaki.jp/wp/wp-content/uploads/2025/02/ilandpless_25spring.pdf"),
      factNov14("設備", "効能や気分で選べる3種の岩盤浴（ホットストーンスパ）と、漫画約10,000冊のヒーリングラウンジ", "https://www.islandnagasaki.jp/en/"),
      factNov14("利用条件", "日帰り利用可。宿泊者は岩盤浴・大浴場・ヒーリングラウンジを無料で利用可", "https://www.islandnagasaki.jp/wp/wp-content/uploads/2025/02/ilandpless_25spring.pdf"),
    ],
  },
  {
    ids: ["st-nagasaki-3954"], name: "雲仙宮崎旅館", officialUrl: "http://www.miyazaki-ryokan.co.jp/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "大叫喚地獄より引湯した源泉かけ流しの温泉（硫黄泉）で、3つの湯場がある", "http://www.miyazaki-ryokan.co.jp/"),
    ],
  },
  {
    ids: ["st-nagasaki-842"], name: "港洋館みなとサウナ", officialUrl: "https://minatosauna.jp/saunaspa/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "オートロウリュ", "ロウリュあり", "水風呂あり", "タオルレンタルあり", "宿泊可"],
    facts: [
      factNov14("料金", "小学生以下は3時間1,200円、時間延長は毎時600円。一般の基本料金は公式サイトの料金表（画像）に掲載", "https://minatosauna.jp/saunaspa/"),
      factNov14("設備", "総檜造りのドライサウナ（95℃、オートロウリュ）、氷点下極冷サウナ（平均-15℃）、スチームミストサウナ、大浴場", "https://minatosauna.jp/saunaspa/"),
      factNov14("水風呂", "水風呂は20℃（地下水を使用）。氷点下極冷サウナの利用時間は6:00～24:00", "https://minatosauna.jp/saunaspa/"),
      factNov14("利用条件", "男性専用。タトゥー・イレズミのある方、泥酔者は入館不可。午前2時～4時は清掃のため大浴場・水風呂・全サウナ利用不可", "https://minatosauna.jp/"),
    ],
  },
  {
    ids: ["st-nagasaki-2935"], name: "出島の湯ドーミーイン長崎", officialUrl: "https://www.hotespa.net/hotels/nagasaki/",
    features: ["ドライサウナ", "水風呂あり", "宿泊可"],
    facts: [
      factNov14("設備", "3Fに男女別大浴場「出島の湯」。男女とも二槽の内湯（超軟水の沸かし湯とシルキーバス）と高温ドライサウナ、チラー付きの水風呂", "https://www.hotespa.net/hotels/nagasaki/"),
      factNov14("水風呂", "チラー付きの水風呂あり", "https://www.hotespa.net/hotels/nagasaki/"),
      factNov14("営業状況", "公式のお知らせにより、改修工事のため2026年12月1日から2027年2月28日まで全館休館予定", "https://www.hotespa.net/hotels/nagasaki/"),
    ],
  },
  {
    ids: ["st-nagasaki-806"], name: "諫早グリーンホテル", officialUrl: "https://www.isahaya-greenhotel.jp/index.html",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "男性サウナあり（公式サイトで「男性サウナ無料」と案内）", "https://www.isahaya-greenhotel.jp/index.html"),
    ],
  },
  {
    ids: ["st-kumamoto-4528"], name: "たかの湯", officialUrl: "https://kuma1010.com/custom/400",
    features: [],
    facts: [
      factNov14("営業時間", "14:00～22:00", "https://kuma1010.com/custom/400"),
      factNov14("定休日", "月曜日", "https://kuma1010.com/custom/400"),
      factNov14("設備", "サウナあり。浴槽に埋め込んだ麦飯石によるお湯。駐車場12台", "https://kuma1010.com/custom/400"),
    ],
  },
  {
    ids: ["st-kumamoto-4590"], name: "つる乃湯 熊本インター店", officialUrl: "https://www.hatagoinn.com/kamenoyu/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "温泉付き", "貸切可", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "日帰り入浴 大人550円、小学生200円、幼児80円。貸切風呂は60分2,300円～4,000円（現在は営業休止中）", "https://www.hatagoinn.com/kamenoyu/"),
      factNov14("営業時間", "内風呂6:00～23:00（11月4日から短縮）、露天風呂11:00～22:30、サウナ6:00～22:00", "https://www.hatagoinn.com/kamenoyu/"),
      factNov14("設備", "天然温泉かけ流しの大浴場。男女とも特大スタジアム遠赤サウナ、女湯にはスチームサウナ。水風呂、外気浴スペース、貸切風呂9室", "https://www.hatagoinn.com/kamenoyu/"),
      factNov14("水風呂", "公式サイトで露天風呂・水風呂は営業休止中と案内（サウナは通常どおり利用可）", "https://www.hatagoinn.com/kamenoyu/"),
      factNov14("利用条件", "日帰り入浴可。サウナの利用は中学生以上。刺青・タトゥーのある方は大浴場利用不可（貸切風呂は可）", "https://www.hatagoinn.com/kamenoyu/"),
    ],
  },
  {
    ids: ["st-kumamoto-832"], name: "どんぐり村温泉センター", officialUrl: "https://www.dongurimura.info/onsen.html",
    features: ["ドライサウナ", "水風呂あり", "温泉付き"],
    facts: [
      factNov14("料金", "入浴券 大人 日中（10時～深夜1時半）600円・深夜（深夜1時半～翌7時半）700円、子供350円、幼児110円", "https://www.dongurimura.info/"),
      factNov14("営業時間", "オールナイト営業。日中10:00～深夜1:30、深夜1:30～翌7:30", "https://www.dongurimura.info/"),
      factNov14("設備", "全湯源泉かけ流し（水風呂を除く）のアルカリ性単純温泉（pH9.5以上）。岩造りの露天風呂、ドライサウナ、水風呂", "https://www.dongurimura.info/"),
      factNov14("水風呂", "露天にある水風呂は約18℃", "https://www.dongurimura.info/"),
      factNov14("利用条件", "タトゥー・入れ墨（類似シール含む）のある方、暴力団関係者、泥酔者は入館不可。日帰り施設", "https://www.dongurimura.info/"),
    ],
  },
  {
    ids: ["st-kumamoto-4527"], name: "ピースフル優祐悠", officialUrl: "https://www.peaceful.jp/",
    features: ["宿泊可", "サ飯あり"],
    facts: [
      factNov14("設備", "入浴・宿泊・お食事施設を備えた総合スパ施設。サウナ利用者向けの「サウナ飯」の案内あり", "https://www.peaceful.jp/"),
    ],
  },
  {
    ids: ["st-kumamoto-838"], name: "ふれあいの丘交流センター", officialUrl: "http://www.town.gyokuto.kumamoto.jp/fureainooka/fureainooka.html",
    features: ["水風呂あり", "温泉付き", "貸切可"],
    facts: [
      factNov14("料金", "入館料 大人（中学生以上）500円、高齢者（70歳以上）350円、子ども（5歳以上）100円、幼児無料（令和7年5月1日改定）。家族湯は1時間500円（別途入館料）", "https://www.town.gyokuto.kumamoto.jp/kiji003631/index.html"),
      factNov14("営業時間", "9:30～21:00（最終受付20:30）。令和8年7月から特別営業中で、土曜日は9:00～21:00、その他の曜日は15:30まで", "https://www.town.gyokuto.kumamoto.jp/kiji003631/index.html"),
      factNov14("定休日", "毎週月曜日", "https://www.town.gyokuto.kumamoto.jp/kiji003631/index.html"),
      factNov14("設備", "展望サウナ（田園風景や列車を眺望）、和風・洋風風呂（男女週替わり）、露天風呂、電気風呂、家族湯", "https://www.town.gyokuto.kumamoto.jp/kiji003631/index.html"),
      factNov14("水風呂", "展望サウナ前に水風呂あり", "https://www.town.gyokuto.kumamoto.jp/kiji003631/index.html"),
    ],
  },
  {
    ids: ["st-kumamoto-4017"], name: "ペルラの湯舟", officialUrl: "http://hotel-alegria.jp/perla/",
    features: ["温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴料800円。岩盤浴（ヒーリングサウナ）は600円、入浴セットは1,200円（税込）", "https://hotel-alegria.jp/spa/"),
      factNov14("営業時間", "早朝6:00～8:30（最終入館8:00）／通常14:00～21:30（最終入館21:00）。岩盤浴は14:00～21:30", "https://hotel-alegria.jp/spa/"),
      factNov14("設備", "「山の湯・森の湯」と「海の湯」の露天風呂（日替わりで男女入替）、ゲルマニウム・麦飯石の岩盤浴（ヒーリングサウナ）", "https://hotel-alegria.jp/spa/"),
      factNov14("利用条件", "日帰り入浴可（ホテル公式サイトに日帰り天然温泉の案内あり）", "http://hotel-alegria.jp/perla/"),
    ],
  },
  {
    ids: ["st-kumamoto-847"], name: "ホテル カーナ A", officialUrl: "http://hotel-carna-a.jp/plan/capsule-reclining",
    features: ["宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場・サウナの利用時間は16:00～0:00、早朝5:00～10:00", "http://hotel-carna-a.jp/plan/capsule-reclining"),
      factNov14("設備", "男女別の大浴場とサウナあり", "http://hotel-carna-a.jp/plan/capsule-reclining"),
      factNov14("利用条件", "入れ墨・タトゥーのお客様は入浴をお断り（利用規則）。大浴場・サウナは宿泊プランの案内として掲載", "http://hotel-carna-a.jp/information"),
    ],
  },
  {
    ids: ["st-kumamoto-836"], name: "ユーパレス弁天", status: "suspended", officialUrl: "https://u-benten.net/",
    features: [],
    facts: [
      factNov14("料金", "温泉 大人（高校生以上）400円、小人（3歳〜中学生）200円、幼児（2歳まで）無料", "https://u-benten.net/wp-content/pdf/2412_event.pdf"),
      factNov14("営業時間", "温泉 10:00～23:00（最終受付22:30）", "https://u-benten.net/wp-content/pdf/2412_event.pdf"),
      factNov14("営業状況", "公式サイトのお知らせ（2026年8月5日付）により、大規模改修工事のため休館中。休館期間中は建物内外（駐車場含む）への出入り不可と公式トップに明記", "https://u-benten.net/"),
    ],
  },
  {
    ids: ["st-kumamoto-859"], name: "ゆのまえ温泉湯楽里", officialUrl: "http://www.y-yurari.co.jp/page0101.html",
    features: ["温泉付き", "貸切可", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("設備", "塩分を含んだ「潮湯」の天然温泉。木の温もりに包まれた大浴場のほか、薬湯やサウナ・家族湯、露天風呂あり", "https://www.y-yurari.co.jp/"),
      factNov14("定休日", "毎月第2・第4月曜日は休館日（祝日等でずれることがある）", "https://www.y-yurari.co.jp/"),
      factNov14("利用条件", "ご宿泊のお客様ほか、立ち寄り湯でもご利用いただけます（日帰り利用可）", "https://www.y-yurari.co.jp/"),
    ],
  },
  {
    ids: ["st-kumamoto-863"], name: "一勝地温泉 かわせみ", officialUrl: "https://kawasemi-kuma.com/",
    features: ["温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("設備", "地下から湧き出る豊かな源泉をそのまま掛け流し", "https://kawasemi-kuma.com/"),
      factNov14("利用条件", "日帰り入浴はもちろん、お食事やご宿泊にも対応", "https://kawasemi-kuma.com/"),
    ],
  },
  {
    ids: ["st-kumamoto-4006"], name: "熊本城温泉 城の湯", officialUrl: "https://shironoyu.com/",
    features: ["セルフロウリュ", "オートロウリュ", "ロウリュあり", "熱波師あり", "水風呂あり", "外気あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "サウナ利用料 時間無制限1,200円。受付時に学生証提示で800円。バスタオル・フェイスタオル付き", "https://shironoyu.com/"),
      factNov14("営業時間", "平日 17時～25時、土日祝 12時～25時", "https://shironoyu.com/"),
      factNov14("定休日", "毎週月曜日（祝日にあたる場合は変更有り）", "https://shironoyu.com/"),
      factNov14("設備", "HARVIA製サウナヒーターを備え、オートロウリュ・セルフロウリュに対応した本格フィンランドサウナが2部屋（霊巌洞サウナ・本丸サウナ）", "https://shironoyu.com/"),
      factNov14("水風呂", "ミネラルを豊富に含む熊本100%井水を使用した露天水風呂を2つ用意", "https://shironoyu.com/"),
      factNov14("利用条件", "男性用サウナ（男性専用）。タオル貸し出し無料で手ぶら来店可。22:00以降はタトゥーが入っているお客様も入場可能。完全黙浴", "https://shironoyu.com/"),
    ],
  },
  {
    ids: ["st-kumamoto-4040"], name: "四季の森", officialUrl: "https://www.aso-shikinomori.com/index.html",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "四季の森の温泉はpH8.1の弱アルカリ性で、とろっとした泉質が特徴の「美人の湯」。源泉かけ流し", "https://www.aso-shikinomori.com/index.html"),
    ],
  },
  {
    ids: ["st-kumamoto-4018"], name: "城南天然温泉旅館", officialUrl: "https://katarunomori.jp/",
    features: ["温泉付き", "貸切可", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴料 大人：800円／小人：450円／未就学児：無料。家族風呂 60分2,500円（特別部屋4,000円）", "https://katarunomori.jp/"),
      factNov14("営業時間", "9:00～22:00（最終受付21:00）", "https://katarunomori.jp/"),
      factNov14("定休日", "毎週水曜日（祝日の場合は営業）", "https://katarunomori.jp/"),
      factNov14("設備", "アルカリ性単純温泉の大浴場には露天・サウナ完備。家族風呂2部屋あり", "https://katarunomori.jp/"),
      factNov14("利用条件", "温泉のみのご利用（日帰り入浴）も可能", "https://katarunomori.jp/"),
    ],
  },
  {
    ids: ["st-kumamoto-839"], name: "草枕温泉てんすい", officialUrl: "http://www.kusamakura.jp/kusa_on/index.html",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "温泉・宿泊・物産館・バーベキュー・展望サウナ・キャンプなどの総合レジャー施設", "https://deeprelaxviewsauna.localinfo.jp/"),
    ],
  },
  {
    ids: ["st-kumamoto-4630"], name: "温泉くま村湯の駅", status: "suspended", officialUrl: "http://yunoeki.com/",
    features: [],
    facts: [
      factNov14("営業状況", "公式サイトに「豪雨被害による営業停止のお知らせ」を掲載。令和2年7月豪雨で1階部分が甚大な被害を受け営業を停止しており、再開の告知は公式サイトで確認できない", "http://yunoeki.com/"),
    ],
  },
  {
    ids: ["st-kumamoto-4024"], name: "大谷の湯", officialUrl: "https://ootanino-yu.com/",
    features: ["温泉付き", "外気あり", "貸切可"],
    facts: [
      factNov14("料金", "大人（中学生以上）630円、小人（小学生以下）350円、3歳未満無料。家族風呂（全3室）50分2,000円・80分2,500円", "https://ootanino-yu.com/"),
      factNov14("営業時間", "10:00～24:00（受付：大浴場23:30、家族風呂23:00）", "https://ootanino-yu.com/"),
      factNov14("定休日", "第1水曜日", "https://ootanino-yu.com/"),
      factNov14("設備", "地下1000mから汲み上げる源泉かけ流し100％の天然温泉。大浴場、露天風呂、サウナ、家族風呂（3室）、レストラン併設", "https://ootanino-yu.com/"),
    ],
  },
  {
    ids: ["st-kumamoto-4557"], name: "通潤山荘", officialUrl: "https://tsujun.jp/",
    features: ["温泉付き", "外気あり", "宿泊可"],
    facts: [
      factNov14("料金", "立ち寄り湯600円（現金のみ）", "https://tsujun.jp/"),
      factNov14("営業時間", "立ち寄り湯14:00～20:00（最終受付19:30）。宿泊者の温泉利用15:00～21:00", "https://tsujun.jp/"),
      factNov14("定休日", "立ち寄り湯は年中無休（施設の点検、補修時を除く）", "https://tsujun.jp/"),
      factNov14("設備", "天然温泉の大浴場、サウナ、露天風呂", "https://tsujun.jp/"),
      factNov14("利用条件", "日帰り入浴（立ち寄り湯）可。立ち寄り湯の支払いは現金のみ", "https://tsujun.jp/"),
      factNov14("営業状況", "公式サイトのお知らせ（2026年9月1日付）により、令和8年熊本地震のためサウナ・露天風呂は利用不可。露天風呂は11月1日から3月31日まで営業休止", "https://tsujun.jp/"),
    ],
  },
  {
    ids: ["st-oita-3865"], name: "ほていの湯(大分)", officialUrl: "https://www.taketan.jp/spots/detail/211",
    features: ["温泉付き", "外気あり", "貸切可"],
    facts: [
      factNov14("料金", "大人600円・小人（小学生）300円、以下無料。貸切湯2,000円/60分", "https://www.taketan.jp/spots/detail/211"),
      factNov14("営業時間", "夏季（5月～9月）10:00～21:00（最終受付20:30）、冬季（10月～4月）11:00～20:30（最終受付20:00）。サウナは12:00～", "https://www.taketan.jp/spots/detail/211"),
      factNov14("定休日", "第2木曜（祝祭日の場合は第3木曜）", "https://www.taketan.jp/spots/detail/211"),
      factNov14("設備", "大浴場（ジェットバス）・露天風呂・桶風呂・サウナ（男女各1）・家族風呂（合計4室）。源泉掛け流しの炭酸泉（炭酸水素塩泉）", "https://www.taketan.jp/spots/detail/211"),
    ],
  },
  {
    ids: ["st-oita-3854"], name: "ラムネ温泉館", officialUrl: "http://www.lamune-onsen.co.jp/",
    features: ["温泉付き", "外気あり", "貸切可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "大浴場 大人800円／小学生400円／未就学児200円。家族風呂 1時間3,000円", "https://lamune-onsen.co.jp/access/"),
      factNov14("営業時間", "午前10時～午後10時", "https://lamune-onsen.co.jp/access/"),
      factNov14("定休日", "毎月第1水曜日（1月と5月は第2水曜日）", "https://lamune-onsen.co.jp/access/"),
      factNov14("設備", "源泉かけ流しの内湯（42℃）と外湯・露天（32℃の炭酸泉）、サウナルーム（高温汗室）を大浴場に併設。家族風呂3室、美術館併設", "https://lamune-onsen.co.jp/access/"),
      factNov14("利用条件", "家族風呂は電話予約不可・現地先着順。大浴場にはシャンプー・ボディーソープの備え付けなし。バスタオルの貸出（有料）あり", "https://lamune-onsen.co.jp/access/"),
    ],
  },
  {
    ids: ["st-oita-3589"], name: "温泉療養文化館 御前湯", officialUrl: "http://www.gozenyu.com/index.html",
    features: ["温泉付き"],
    facts: [
      factNov14("営業時間", "朝6時から営業（公式トップページ記載。終了時刻は確認できなかった）", "http://www.gozenyu.com/index.html"),
      factNov14("設備", "サウナ、マッサージルーム等の設備あり。日本でも指折りの炭酸泉（長湯温泉）", "http://www.gozenyu.com/index.html"),
    ],
  },
  {
    ids: ["st-oita-827"], name: "竹田温泉花水月", officialUrl: "https://www.taketan.jp/spots/detail/40",
    features: ["温泉付き", "貸切可"],
    facts: [
      factNov14("料金", "大人（中学生以上）600円、子ども（6歳～小学生）300円、家族風呂 2,200円/60分", "https://www.taketan.jp/spots/detail/40"),
      factNov14("営業時間", "11:00～21:00（入館は20:30まで）。足湯は土日祝 12:00～17:00利用可能", "https://www.taketan.jp/spots/detail/40"),
      factNov14("定休日", "木曜（祝日は営業）。6月にメンテナンス休館あり", "https://www.taketan.jp/spots/detail/40"),
      factNov14("設備", "大浴場・サウナ（各 男1・女1ずつ）・家族風呂（2）。塩化物泉、源泉温度40.3度", "https://www.taketan.jp/spots/detail/40"),
    ],
  },
  {
    ids: ["st-oita-3852"], name: "長湯温泉 かじか庵 • ゆの花", officialUrl: "http://www.kajikaan.com/",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "貸切可", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "立寄り湯 大人600円・子供300円（タオル持参の場合）。タオル150円、バスタオル250円", "http://www.kajikaan.com/spa-man.html"),
      factNov14("営業時間", "大浴場・岩盤浴・貸切風呂 10:00～23:00（入館は22:00まで）。宿泊者は翌朝6:00～8:00も大浴場利用可（サウナ等は不可）", "http://www.kajikaan.com/spa-man.html"),
      factNov14("定休日", "毎週火曜日（火曜日が祝日の際は営業）。毎月の休館日は公式サイトのお知らせで告知", "http://www.kajikaan.com/spa-man.html"),
      factNov14("設備", "男湯にセルフロウリュ式サウナ（アロマオイル入りの掛け水を用意）。2021年12月より女湯にもサウナ設置（定員3名）。岩盤浴・貸切風呂・露天風呂あり", "http://www.kajikaan.com/spa.html"),
      factNov14("水風呂", "冬季は湯量が少ない日や湯温が38～40℃になるため、露天風呂をサウナの水風呂として利用", "http://www.kajikaan.com/spa.html"),
      factNov14("利用条件", "日帰り入浴（立寄り湯）可。お食事利用者は立寄り湯の入浴料が割引になる案内あり", "http://www.kajikaan.com/spa-man.html"),
    ],
  },
  {
    ids: ["st-oita-4512"], name: "鶴崎ホテル", officialUrl: "https://breezbay-group.com/tsurusaki-h/bath/index.html",
    features: ["ドライサウナ", "水風呂あり", "温泉付き", "貸切可", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り入浴 大浴場（男性専用）500円。貸切露天風呂1時間/2,500円、貸切内湯は14:00～17:00が1時間/1,000円、17:00～深夜0:00が1時間/2,000円", "https://breezbay-group.com/tsurusaki-h/bath/index.html"),
      factNov14("営業時間", "大浴場（男性専用）平日14:00～深夜2:00、土・日・祝日12:00～深夜2:00、深夜4:00～翌朝9:00。日帰り入浴は14:00～深夜0:00", "https://breezbay-group.com/tsurusaki-h/bath/index.html"),
      factNov14("設備", "男性用サウナはフィンランドから直輸入した本格サウナ（温度100～110℃）。家族風呂（貸切）・露天風呂あり。女性用の大浴場はない", "https://breezbay-group.com/tsurusaki-h/bath/index.html"),
      factNov14("水風呂", "水風呂完備（サウナ・ジャグジー・水風呂・打たせ湯）", "https://breezbay-group.com/tsurusaki-h/bath/index.html"),
      factNov14("利用条件", "日帰り入浴可。朝時間（深夜4:00～翌朝9:00）はサウナ等は利用不可で源泉のみ。タトゥーは原則不可（8cm×10cmのカバーシール1枚で隠れる場合は可）", "https://breezbay-group.com/tsurusaki-h/bath/index.html"),
    ],
  },
  {
    ids: ["st-oita-3856"], name: "鉄輪むし湯", officialUrl: "https://www.city.beppu.oita.jp/sisetu/shieionsen/detail11.html",
    features: ["スチーム(ミスト)サウナ", "温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "むし湯700円（中学生以上入浴可能）、レンタル浴衣220円、入浴回数券（10枚綴り）6,300円。足むしは無料", "https://www.city.beppu.oita.jp/sisetu/shieionsen/detail11.html"),
      factNov14("営業時間", "6時30分～20時（最終受付19時30分）。令和8年10月1日～令和9年1月31日は7時30分～19時30分（最終受付19時）に変更", "https://www.city.beppu.oita.jp/sisetu/shieionsen/detail11.html"),
      factNov14("定休日", "第4木曜日（祝日の場合は翌日）", "https://www.city.beppu.oita.jp/sisetu/shieionsen/detail11.html"),
      factNov14("設備", "温泉で熱せられた石室の床に薬草「石菖」を敷き詰めた蒸し湯。男女別各4名同時利用可能。足蒸しあり", "https://www.city.beppu.oita.jp/sisetu/shieionsen/detail11.html"),
      factNov14("利用条件", "むし湯は中学生以上入浴可能。Tシャツ短パン持参可能", "https://www.city.beppu.oita.jp/sisetu/shieionsen/detail11.html"),
      { label: "施設営業時間", value: "7時30分～19時30分（最終受付19時00分）", sourceUrl: "https://www.city.beppu.oita.jp/sisetu/shieionsen/detail11.html", checkedAt: "2026-10-19" },
    ],
  },
  {
    ids: ["st-oita-4465"], name: "天然温泉 白糸の湯 ドーミーイン大分", officialUrl: "https://www.hotespa.net/hotels/oita/",
    features: ["外気あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "最上階12Fに天然温泉大浴場「白糸の湯」。内湯は別府温泉からの運び湯（単純温泉）を使用。露天風呂・壺風呂あり", "https://www.hotespa.net/hotels/oita/"),
    ],
  },
  {
    ids: ["st-oita-3914"], name: "百歳の湯（ニューグロリア大分ホテル）", officialUrl: "http://gloria-oita.com/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場、サウナは男女とも24時間利用可能（宿泊者）", "http://gloria-oita.com/facility"),
      factNov14("設備", "男女別天然温泉大浴場（内湯 男1・女1）とサウナ（男1・女1）。大分市中心部の地下より湧く天然温泉100%かけ流し", "http://gloria-oita.com/facility"),
      factNov14("利用条件", "宿泊のお客様はチェックアウトまで24時間入り放題。日帰り入浴の案内は公式ページで確認できなかった", "http://gloria-oita.com/"),
    ],
  },
  {
    ids: ["st-oita-3857"], name: "別府温泉 杉乃井ホテル　大展望露天風呂 棚湯", officialUrl: "https://www.suginoi-hotel.com/facilities/tanayu.html",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "5段からなる湯船を棚田状に広げた大展望露天風呂「棚湯」。水着で入れる屋外型温泉アクアガーデン併設", "https://www.suginoi-hotel.com/facilities/tanayu.html"),
      factNov14("設備", "2023年7月1日の棚湯リニューアルでサウナエリアを拡充。サウナ室をロウリュウサウナに改修し、アロマ水による自動ロウリュウと光の演出を実施", "https://suginoi.orixhotelsandresorts.com/uploads/2023/06/release20230606.pdf"),
      factNov14("水風呂", "水風呂を新規設置し、外気浴スペースと一体化", "https://suginoi.orixhotelsandresorts.com/uploads/2023/06/release20230606.pdf"),
    ],
  },
  {
    ids: ["st-miyazaki-867"], name: "カプセルルーム＆サウナ・マリノーヴァ", officialUrl: "https://www.hotel-marix.co.jp/marix/marinova/",
    features: ["水風呂あり", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入泉 大浴場・サウナA（3時間以内）780円、B（3時間以上）1,100円、D（2:00～5:00）1,150円、F（5:00～10:00）850円。宿泊者は入泉無料", "https://www.hotel-marix.co.jp/marix/marinova/"),
      factNov14("営業時間", "大浴場・サウナ入泉 15:00～翌10:00（日帰りは時間区分・最終受付あり）", "https://www.hotel-marix.co.jp/marix/marinova/"),
      factNov14("設備", "準天然光明石温泉（人工温泉）の大浴場、北欧式サウナ、水風呂、カプセルルーム、休憩室、仮眠室、ボディケア・フットケア", "https://www.hotel-marix.co.jp/marix/marinova/"),
      factNov14("水風呂", "天然大淀裂罅水を使用した水風呂", "https://www.hotel-marix.co.jp/marix/marinova/"),
      factNov14("利用条件", "日帰り入泉は男性専用。泥酔者、暴力団関係者、入れ墨・ボディーアート（タトゥ・ペイント・シール）のある方は入場不可", "https://www.hotel-marix.co.jp/marix/marinova/"),
    ],
  },
  {
    ids: ["st-miyazaki-868"], name: "スパぱうぱう", officialUrl: "https://www.hotel-marix.co.jp/lagoon/spapawpaw/",
    features: ["水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入泉 大人 平日700円・土日祝日800円、小学生以下400円（くつろぎ着とタオルセット付）。宿泊者は入泉無料", "https://www.hotel-marix.co.jp/lagoon/spapawpaw/"),
      factNov14("営業時間", "日帰り入泉 10:00～23:00（最終受付22:30）。宿泊者は15:00～23:00（最終受付22:30）と6:00～8:00（最終受付7:30）", "https://www.hotel-marix.co.jp/lagoon/spapawpaw/"),
      factNov14("定休日", "月に1回メンテナンス休館あり。2026年大浴場休館日は1/19、3/2、4/6、5/11、6/8、7/6、8/31、9/28、11/2、12/14", "https://www.hotel-marix.co.jp/lagoon/spapawpaw/"),
      factNov14("設備", "準天然光明石温泉（人工温泉）の大浴場。男女別浴場（男湯TOTOKA・女湯MAREKA）に寝湯、へそ湯、腰湯、露天風呂、電気風呂、水風呂、北欧式サウナ。岩盤浴あり", "https://www.hotel-marix.co.jp/lagoon/spapawpaw/"),
      factNov14("水風呂", "男女別浴場に水風呂あり", "https://www.hotel-marix.co.jp/lagoon/spapawpaw/"),
      factNov14("利用条件", "日帰り入泉可能。泥酔者、暴力団関係者、入れ墨・ボディーアート（タトゥ・ペイント・シール）のある方は入場不可", "https://www.hotel-marix.co.jp/lagoon/spapawpaw/"),
    ],
  },
  {
    ids: ["st-miyazaki-25"], name: "宮崎第一ホテル", officialUrl: "http://www.23-1111.com/",
    features: ["水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "男性専用の大浴場にサウナ、水風呂、低温浴風呂、露天風呂。女性専用の岩盤浴・低温サウナあり", "http://www.23-1111.com/"),
      factNov14("利用条件", "大浴場は男性専用", "http://www.23-1111.com/"),
    ],
  },
  {
    ids: ["st-miyazaki-2886"], name: "極楽湯 宮崎店", officialUrl: "https://www.aceland.jp/gokurakuyu/",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴料金 おとな（中学生以上）800円、こども（3歳〜）450円（平日・土日祝日とも）。レンタルタオルセット420円、貸バスタオル250円", "https://www.aceland.jp/relax/spa/"),
      factNov14("営業時間", "9:00-25:00（土日祝 7:00-25:00）※最終受付 24:20", "https://www.aceland.jp/relax/spa/"),
      factNov14("設備", "遠赤外線サウナ（2025年5月より男女サウナ室にオートロウリュ導入、およそ30分に1回自動で開始）、天然温泉の内湯、露天岩風呂、露天檜風呂、水風呂", "https://www.aceland.jp/relax/spa/"),
      factNov14("水風呂", "水風呂あり（サウナ・水風呂・外気冷却を組み合わせた反復浴を案内）", "https://www.aceland.jp/relax/spa/"),
      factNov14("利用条件", "入館料金は現金のみ。入墨（タトゥー）及び泥酔の方は利用不可。サウナは安全面の観点から12歳以下のお子様の利用不可", "https://www.aceland.jp/relax/spa/"),
    ],
  },
  {
    ids: ["st-miyazaki-3581"], name: "合歓木温泉 広原店", officialUrl: "https://nemunoki-onsen.com/",
    features: ["水風呂あり", "温泉付き"],
    facts: [
      factNov14("料金", "入浴料金 大人500円、学生（中学生以上）450円、小学生以下300円", "https://nemunoki-onsen.com/"),
      factNov14("営業時間", "広原店 年中無休 朝5:15～夜10:00（最終受付 夜9:00）", "https://nemunoki-onsen.com/"),
      factNov14("定休日", "年中無休", "https://nemunoki-onsen.com/"),
      factNov14("設備", "遠赤外線サウナ、広々とした水風呂。毎日浴槽・水風呂槽を完全排水して清掃・殺菌し新湯を張る", "https://nemunoki-onsen.com/"),
      factNov14("水風呂", "霧島裂罅水を使用した水温約18℃の水風呂（広くて深い水風呂）", "https://nemunoki-onsen.com/"),
    ],
  },
  {
    ids: ["st-miyazaki-132"], name: "湯之元温泉", officialUrl: "http://www.yunomoto.org/",
    features: ["温泉付き", "外気あり", "宿泊可"],
    facts: [
      factNov14("料金", "入浴料（日帰り）大人650円、小人（3才～12才）300円", "https://yunomoto.org/spa.php"),
      factNov14("営業時間", "入浴時間（日帰り）10:00～21:00 ※日帰り入浴の最終受付は20:30まで（宿泊は07:00～22:00）", "https://yunomoto.org/spa.php"),
      factNov14("設備", "日本最古の高濃度炭酸泉の温泉宿。浴場には内湯［温泉］、内湯［冷泉］、露天風呂を用意。泉質は炭酸水素塩冷鉱泉、源泉温度21.6℃", "https://yunomoto.org/spa.php"),
      factNov14("利用条件", "日帰り入浴可。入れ墨、タトゥーをされている方の入泉は不可", "https://yunomoto.org/spa.php"),
    ],
  },
  {
    ids: ["st-kagoshima-4159"], name: "かいせい乃湯", officialUrl: "http://kaiseinoyu.com/",
    features: ["温泉付き"],
    facts: [
      factNov14("設備", "源泉かけ流しの天然温泉。泉質はナトリウム-塩化物・硫酸塩・炭酸水素塩温泉。男湯・女湯、くつろぎスペース、無料駐車場50台以上", "http://kaiseinoyu.com/"),
    ],
  },
  {
    ids: ["st-kagoshima-4127"], name: "スパランドら・ら・ら", officialUrl: "http://www.spa-rarara.com/",
    features: ["ロウリュあり", "温泉付き", "外気あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("営業時間", "大浴場（温泉）午前10時から午後9時30分まで。スパゾーン（水着浴室）午前10時から午後9時まで ※当面の間、時間短縮での営業を継続（午前10時から午後6時まで）", "http://www.spa-rarara.com/"),
      factNov14("設備", "石造り洋風湯（Yurara）、ヒバ香る和風湯（湯楽里）、開放露天とロウリュサウナ。アルカリ性単純泉。水着で楽しむ25種のスパゾーン、レストラン、宿泊施設あり", "http://www.spa-rarara.com/"),
    ],
  },
  {
    ids: ["st-kagoshima-4160"], name: "フォンタナの丘かもう", officialUrl: "http://f-kamou.com/spa",
    features: ["温泉付き", "外気あり", "宿泊可"],
    facts: [
      factNov14("料金", "一般入浴 大人600円、子供（小学生以下）300円、乳児（3歳未満）無料。一日入浴 大人1,000円、子供500円、乳児無料", "http://f-kamou.com/spa"),
      factNov14("営業時間", "露天風呂付き大浴場 8:00～20:00（入浴受付は19:00まで）", "http://f-kamou.com/spa"),
      factNov14("設備", "3つの源泉をミックスした源泉かけ流しの天然温泉（炭酸水素塩泉、pH7.83の弱アルカリ性）。大浴場には高温・低温の湯、サウナがあり、大露天風呂には信楽焼の湯船の殿湯・姫湯", "http://f-kamou.com/spa"),
    ],
  },
  {
    ids: ["st-kagoshima-916"], name: "ふれあいセンターわくわく川辺", officialUrl: "https://wakuwakukawanabe.jimdosite.com/",
    features: ["貸切可"],
    facts: [
      factNov14("料金", "一般大人入浴券460円（回数券11枚4,600円）、南九州市在住65歳以上270円、中人（6歳以上11歳まで）150円、小人（1歳以上6歳未満）80円。家族風呂（定員5名）60分1,570円・90分2,090円", "https://wakuwakukawanabe.jimdosite.com/"),
      factNov14("営業時間", "午前10時～午後9時（入浴受付は午後8時30分終了、家族湯は午後7時40分までの受付）", "https://wakuwakukawanabe.jimdosite.com/"),
      factNov14("定休日", "毎月第2、第4水曜日 ※休館日が祝日の場合、翌日を休館日とする", "https://wakuwakukawanabe.jimdosite.com/"),
      factNov14("設備", "家族風呂（定員5名）あり。身障者風呂は3時間以上前の予約制（2時間520円）", "https://wakuwakukawanabe.jimdosite.com/"),
    ],
  },
  {
    ids: ["st-kagoshima-889"], name: "姶良市温泉センターくすの湯", officialUrl: "http://www.city.aira.lg.jp/chiiki-kamo/gyosei/shisetsu/kanko/kusunoyu.html",
    features: ["ドライサウナ", "水風呂あり", "外気あり", "温泉付き"],
    facts: [
      factNov14("料金", "一般入浴料（1人1回）大人300円、小人150円（小人は中学生・15歳以下、未就学児は無料）。割引回数券 大人3,000円、小人1,500円", "http://www.city.aira.lg.jp/chiiki-kamo/gyosei/shisetsu/kanko/kusunoyu.html"),
      factNov14("営業時間", "午前10時～午後9時", "http://www.city.aira.lg.jp/chiiki-kamo/gyosei/shisetsu/kanko/kusunoyu.html"),
      factNov14("定休日", "月曜日（休館日が祝日のときは、翌平日営業日）", "http://www.city.aira.lg.jp/chiiki-kamo/gyosei/shisetsu/kanko/kusunoyu.html"),
      factNov14("設備", "ドライサウナ（壁やベンチをヒノキで一新、TV完備）、主浴、電気風呂、リラックス風呂、屋根つき露天風呂。泉質はナトリウム-塩化物温泉", "http://www.city.aira.lg.jp/chiiki-kamo/gyosei/shisetsu/kanko/kusunoyu.html"),
      factNov14("水風呂", "豊富な天然水を使用した深さ1メートルの水風呂", "http://www.city.aira.lg.jp/chiiki-kamo/gyosei/shisetsu/kanko/kusunoyu.html"),
      factNov14("利用条件", "シャンプー、ボディーソープ、タオルなどは各自持参（売店で販売もあり）。ドライヤー（無料）完備", "http://www.city.aira.lg.jp/chiiki-kamo/gyosei/shisetsu/kanko/kusunoyu.html"),
      factNov14("営業状況", "姶良市公式ページの臨時休館のお知らせにより、サウナベンチリニューアルのため11月24日から11月30日まで臨時休館（営業再開は12月1日10時からの予定）", "http://www.city.aira.lg.jp/chiiki-kamo/gyosei/shisetsu/kanko/kusunoyu.html"),
    ],
  },
  {
    ids: ["st-kagoshima-4119"], name: "芦刈温泉", officialUrl: "https://www.asikari-spa.com/index.html",
    features: ["スチーム(ミスト)サウナ", "温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "大人（12歳以上）460円、中人（6歳以上）150円、小人（6歳未満）80円。入浴レンタルセット（タオル・バスタオル・シャンプー等）350円", "https://asikari-spa.com/"),
      factNov14("営業時間", "6:00〜24:00", "https://asikari-spa.com/"),
      factNov14("設備", "源泉かけ流しのひのき風呂・露天風呂・つぼ湯、ミストサウナ、ジャグジーなどの機能風呂。併設のお食事処あり", "https://asikari-spa.com/"),
    ],
  },
  {
    ids: ["st-kagoshima-907"], name: "一本桜温泉センター", status: "suspended", officialUrl: "https://www.kagoshima-onsen1010.net/sento-map/kagoshima/korimoto/post-51.php",
    features: ["水風呂あり", "温泉付き", "貸切可"],
    facts: [
      factNov14("営業時間", "24時間営業（休業前の案内）", "https://www.kagoshima-onsen1010.net/sento-map/kagoshima/korimoto/post-51.php"),
      factNov14("定休日", "年中無休（休業前の案内）", "https://www.kagoshima-onsen1010.net/sento-map/kagoshima/korimoto/post-51.php"),
      factNov14("設備", "露天風呂・サウナ・水風呂・電気風呂・ジェットバス・岩風呂・家族湯。男湯・女湯それぞれに浴室が2つずつ", "https://www.kagoshima-onsen1010.net/sento-map/kagoshima/korimoto/post-51.php"),
      factNov14("営業状況", "鹿児島県公衆浴場組合の公式ページに「2026年3月より建替え工事の為休業中です。（2028年度オープン予定）」と明記", "https://www.kagoshima-onsen1010.net/sento-map/kagoshima/korimoto/post-51.php"),
    ],
  },
  {
    ids: ["st-kagoshima-4639"], name: "奄美ポートタワーホテル", officialUrl: "http://porttower.net/index.html",
    features: ["水風呂あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "朝食とお風呂のセット1,320円（税込）※男性のみ。宿泊者は大浴場無料", "http://porttower.net/index.html"),
      factNov14("営業時間", "浴場 午前の部5:30〜9:30、午後の部13:00〜23:30（午後の部は男性サウナ付き）", "http://porttower.net/index.html"),
      factNov14("設備", "3階に男性用大浴場と女性用小浴場。男性用大浴場にはサウナ室・水風呂を完備", "http://porttower.net/index.html"),
      factNov14("水風呂", "男性用大浴場に水風呂あり", "http://porttower.net/index.html"),
      factNov14("利用条件", "外来（日帰り）入浴は男性のみ利用可能。女性の外来入浴は2023年2月1日より停止（宿泊の女性客は利用可）", "http://porttower.net/index.html"),
    ],
  },
  {
    ids: ["st-kagoshima-899"], name: "温泉お乃湯", officialUrl: "http://www.tsumagari.jp/onoyu/",
    features: ["温泉付き", "貸切可", "サ飯あり"],
    facts: [
      factNov14("料金", "貸切家族風呂は1部屋1時間2,000円または2,500円（部屋タイプによる）。大浴場の入浴料はページに明記なし", "http://www.tsumagari.jp/onoyu/"),
      factNov14("営業時間", "6:00〜22:00", "http://www.tsumagari.jp/onoyu/"),
      factNov14("定休日", "第1月曜日", "http://www.tsumagari.jp/onoyu/"),
      factNov14("設備", "天然温泉の大浴場・露天風呂・サウナ、岩盤浴、貸切家族風呂5タイプ7室（休憩室付き）、広間・食事の用意あり", "http://www.tsumagari.jp/onoyu/"),
    ],
  },
  {
    ids: ["st-kagoshima-910"], name: "亀乃湯(鹿児島) ", officialUrl: "http://www.kagoshima-onsen1010.net/sento-map/post-48.php",
    features: ["水風呂あり"],
    facts: [
      factNov14("営業時間", "14:00〜22:30", "https://www.kagoshima-onsen1010.net/sento-map/kagoshima/korimoto/post-48.php"),
      factNov14("定休日", "毎週月曜日", "https://www.kagoshima-onsen1010.net/sento-map/kagoshima/korimoto/post-48.php"),
      factNov14("設備", "サウナ・水風呂・うたせ・電気風呂・ジェットバス・気泡浴・鍵付きロッカー・マッサージ機・コインランドリー。大浴槽は麦飯石を利用した人工温泉", "https://www.kagoshima-onsen1010.net/sento-map/kagoshima/korimoto/post-48.php"),
    ],
  },
  {
    ids: ["st-kagoshima-908"], name: "郡元温泉", officialUrl: "http://www.kagoshima-onsen1010.net/sento-map/kagoshima/korimoto/post-52.php",
    features: ["水風呂あり", "温泉付き"],
    facts: [
      factNov14("営業時間", "5:30〜22:30", "http://www.kagoshima-onsen1010.net/sento-map/kagoshima/korimoto/post-52.php"),
      factNov14("定休日", "第2・第4木曜日（祝日の場合翌日）", "http://www.kagoshima-onsen1010.net/sento-map/kagoshima/korimoto/post-52.php"),
      factNov14("設備", "サウナ・水風呂・うたせ・電気風呂・ジェットバス・気泡浴・ジャグジー・寝風呂・岩風呂・浮風呂。泉質は塩化物泉", "http://www.kagoshima-onsen1010.net/sento-map/kagoshima/korimoto/post-52.php"),
    ],
  },
  {
    ids: ["st-kagoshima-4556"], name: "古民家村家族湯 天空", officialUrl: "https://kazokuyu-tenku.com/",
    features: ["水風呂あり", "温泉付き", "個室", "貸切可"],
    facts: [
      factNov14("料金", "1室料金（霧島店・姶良店共通）1時間2,700円、75分2,900円、90分3,100円、2時間4,700円、3時間5,700円、4時間7,700円、5時間9,200円、6時間11,000円、7時間13,000円", "https://kazokuyu-tenku.com/"),
      factNov14("営業時間", "10時〜翌0時00分（受付〜23時00分）※霧島店・姶良店共通", "https://kazokuyu-tenku.com/"),
      factNov14("定休日", "休館日なし", "https://kazokuyu-tenku.com/"),
      factNov14("設備", "霧島店は全11室が離れの貸切家族湯。各室に内風呂・露天風呂・サウナ・水風呂・和室を完備し源泉かけ流し。姶良店はガス遠赤外線サウナ（90〜100度）完備", "https://kazokuyu-tenku.com/"),
      factNov14("利用条件", "電話予約不可（宿泊も不可）。1組何名でも利用可（1名から可）", "https://kazokuyu-tenku.com/"),
    ],
  },
  {
    ids: ["st-kagoshima-4682"], name: "薩摩黒温泉 山華", officialUrl: "https://www.sanga-kagoshima.jp",
    features: ["温泉付き", "個室", "貸切可"],
    facts: [
      factNov14("営業時間", "10:00〜23:00（最終受付22:00）", "https://www.sanga-kagoshima.jp"),
      factNov14("設備", "全8室の貸切風呂（内湯＋露天風呂付き7室、内湯＋露天風呂＋サウナ付き1室）。鹿児島では珍しい琥珀色の黒湯（モール泉）", "https://www.sanga-kagoshima.jp"),
    ],
  },
  {
    ids: ["st-kagoshima-919"], name: "指宿こころの湯", officialUrl: "http://ibusukikokoro.jp/index.html",
    features: ["温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("設備", "バラエティに富んだ6種のお風呂と2種のサウナ（ナノ水使用）。岩盤浴施設「遊癒快房」、お食事処「一心」、漫画コーナーあり", "http://ibusukikokoro.jp/"),
      factNov14("利用条件", "日帰り温泉「こころの湯」を併設した宿泊施設「指宿こころの宿」（客室数66室）", "http://ibusukikokoro.jp/"),
    ],
  },
  {
    ids: ["st-kagoshima-4536"], name: "慈眼寺温泉", officialUrl: "http://www.kagoshima-onsen1010.net/sento-map/post-53.php",
    features: ["水風呂あり", "温泉付き", "貸切可"],
    facts: [
      factNov14("営業時間", "6:00〜22:00", "https://www.kagoshima-onsen1010.net/upload/files/kagoshimasentomap-2303a.pdf"),
      factNov14("定休日", "第2月曜日（祝日の場合第3月曜日）", "https://www.kagoshima-onsen1010.net/upload/files/kagoshimasentomap-2303a.pdf"),
      factNov14("設備", "サウナ・水風呂・うたせ・電気風呂・超音波・気泡浴・岩風呂・家族湯・休憩室。泉質は単純温泉（組合発行の銭湯地図の設備記号による）", "https://www.kagoshima-onsen1010.net/upload/files/kagoshimasentomap-2303a.pdf"),
    ],
  },
  {
    ids: ["st-kagoshima-876"], name: "前田温泉 カジロが湯", officialUrl: "http://maedasangyo.com/",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "入浴料 430円", "http://maedasangyo.com/"),
      factNov14("営業時間", "9:00～20:00", "http://maedasangyo.com/"),
      factNov14("定休日", "木曜定休", "http://maedasangyo.com/"),
      factNov14("利用条件", "霧島温泉郷 唯一の立ち寄り湯（日帰り入浴）", "http://maedasangyo.com/"),
    ],
  },
  {
    ids: ["st-kagoshima-4518"], name: "竹迫温泉", officialUrl: "http://takezako-onsen.com/",
    features: [],
    facts: [
      factNov14("料金", "大人 460円（中学生以上）、中人 150円（小学生）、小人 80円（幼児）", "http://takezako-onsen.com/"),
      factNov14("営業時間", "5:30～22:30", "http://takezako-onsen.com/"),
      factNov14("定休日", "第3木曜日（祝日の場合は翌日）", "http://takezako-onsen.com/"),
      factNov14("設備", "深風呂、ジェットバス、電気風呂、気泡浴、サウナ、鍵付きロッカー、駐車場28台", "http://takezako-onsen.com/"),
    ],
  },
  {
    ids: ["st-okinawa-4317"], name: "グランヴィリオリゾート石垣島グランヴィリオガーデン", officialUrl: "https://www.grandvrio-hotelresort.com/ishigaki/grandvriogarden/relaxation/#link02",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "ヴィラガーデン グランドコート1Fに大浴場あり（ソルトスパ「美塩」は大浴場隣に所在）", "https://www.grandvrio-hotelresort.com/ishigaki/grandvriogarden/relaxation/"),
    ],
  },
  {
    ids: ["st-okinawa-4734"], name: "プロスタイル旅館那覇県庁前", officialUrl: "https://www.prostyleryokan.com/okinawa/kenchomae/",
    features: ["個室", "貸切可", "宿泊可"],
    facts: [
      factNov14("設備", "完全貸切のプライベートサウナルームを設置。着替え、サウナ浴、冷水浴、休憩のすべてがひとつの個室で完結し、アメニティやタオルを完備", "https://www.mapion.co.jp/news/release/000000046.000019104-all/"),
    ],
  },
  {
    ids: ["st-okinawa-937"], name: "浦添の湯", officialUrl: "https://xystus.co.jp/equipment/urasoeno-yu/",
    features: ["スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "温泉付き"],
    facts: [
      factNov14("料金", "時間制限なし1,200円、1時間利用800円、子供（3歳～小学生）400円。大人料金にはタオル・ウェア含む。2027年1月4日より時間制限なし1,500円、1時間1,000円、子供500円に改定", "https://xystus.co.jp/news/%e6%b5%a6%e6%b7%bb%e3%81%ae%e6%b9%af-%e6%96%99%e9%87%91%e6%94%b9%e5%ae%9a%e3%81%ae%e3%81%8a%e7%9f%a5%e3%82%89%e3%81%9b/"),
      factNov14("営業時間", "ジスタス浦添の営業時間は月～金9:00～23:00、土・日・祝9:00～22:00（浦添の湯は館内3階の施設）", "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/6104/a343ff9f8d.pdf"),
      factNov14("設備", "地下1500mから汲み上げた太古海水の天然温泉。源泉かけ流しの浴室と露天風呂があり、高温サウナ、スチームサウナを楽しめる", "https://xystus.co.jp/equipment/urasoeno-yu/"),
      factNov14("水風呂", "浴室に水風呂あり", "https://xystus.co.jp/equipment/urasoeno-yu/"),
    ],
  },
  {
    ids: ["st-okinawa-3985"], name: "宮古島温泉", officialUrl: "https://miyakojima-onsen.co.jp/index.html",
    features: ["外気あり", "温泉付き"],
    facts: [
      factNov14("設備", "宮古島の地下から湧き出る源泉をそのまま利用した大浴場と露天風呂。大浴場にはサウナも完備し、打たせ湯、寝湯、ジャグジーもある", "https://miyakojima-onsen.co.jp/index.html"),
    ],
  },
  {
    ids: ["si-hokkaido-98"], name: "吹上温泉保養センター 白銀荘", officialUrl: "http://kamifurano-hokkaido.com/",
    features: ["ロウリュあり", "外気あり", "温泉付き", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入館料 大人700円、中・高校生500円、小学生300円。回数券12枚綴り6,000円", "http://kamifurano-hokkaido.com/?page_id=2"),
      factNov14("営業時間", "入浴時間10:00～22:00（朝風呂6:00～8:00、8:00～10:00は清掃のため入浴不可）。サウナは10:00～22:00。館内利用時間9:00～22:00（最終入館21:00）", "http://kamifurano-hokkaido.com/?page_id=2"),
      factNov14("設備", "ロウリュのできるサウナ室（15名）、主浴槽、気泡風呂、寝風呂、打たせ湯のある室内浴場と、水深1mの大露天風呂など水着着用の男女共同浴槽", "http://kamifurano-hokkaido.com/?page_id=2"),
      factNov14("利用条件", "日帰り入浴可。共同浴槽は水着が必要（水着レンタル300円、バスタオルレンタル300円）。宿泊は自炊式で大人3,100円ほか", "http://kamifurano-hokkaido.com/?page_id=2"),
    ],
  },
  {
    ids: ["si-hokkaido-166"], name: "ニコーリフレ SAPPORO", officialUrl: "https://www.nikoh.info",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "熱波師あり", "ロウリュあり", "水風呂あり", "宿泊可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "ビジターは24時間コースのみ 平日4,000円・土日祝＆特別日4,200円。リフレ会員は24時間コース平日2,900円・土日祝＆特別日3,100円、5時間コース1,900円から", "https://www.nikoh.info/spa-sauna/"),
      factNov14("営業時間", "24時間営業（チェックインから最大24時間利用可能）", "https://www.nikoh.info/spa-sauna/"),
      factNov14("設備", "約80℃のロッキーサウナと40℃のゲルマニウムミストサウナの2種類。大浴場は水素風呂。熱波師によるロウリュサービスを1時間に1回、1日最大14回開催", "https://www.nikoh.info/spa-sauna/"),
      factNov14("水風呂", "備長炭凛水風呂は地下水から汲み上げた16℃以下の水温", "https://www.nikoh.info/spa-sauna/"),
      factNov14("利用条件", "ご入館は男性のみ可能。バスタオル・フェイスタオルは何枚でも無料、アメニティ各種を無料で用意", "https://www.nikoh.info/spa-sauna/"),
    ],
  },
  {
    ids: ["si-hokkaido-4521"], name: "北こぶし知床 ホテル&リゾート", officialUrl: "https://www.shiretoko.co.jp/",
    features: ["ドライサウナ", "オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場・サウナ 15:00～24:00／翌5:00～10:00（KAKUUNA側・UNEUNA側で男女入替）", "https://www.shiretoko.co.jp/onsen"),
      factNov14("設備", "展望大浴場「大海原」と露天スペース「汐音」。サウナは温度90度・収容10人のドライサウナ（HARVIA製ストーブ）2室「KAKUUNA」「UNEUNA」で10分に1回のオートロウリュ。屋上外気浴スペースあり", "https://www.shiretoko.co.jp/onsen"),
      factNov14("水風呂", "水風呂は約15.7度（季節により変動あり）、収容人数2人、水深90cm", "https://www.shiretoko.co.jp/onsen"),
      factNov14("営業状況", "公式のお知らせにより、館内メンテナンスのため2026年12月1日から12月10日まで休館（大浴場も利用不可）", "https://www.shiretoko.co.jp/"),
    ],
  },
  {
    ids: ["si-hokkaido-8555"], name: "定山渓 鹿の湯", officialUrl: "https://shikanoyu.co.jp/shikanoyu/",
    features: ["温泉付き", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り入浴 午前 大人1,000円／小学生500円、午後 大人1,500円／小学生750円（税込）。フェイスタオル・バスタオル無料", "https://www.mapion.co.jp/news/release/000000064.000096644-all/"),
      factNov14("営業時間", "日帰り入浴 午前6:00～9:30（8:30受付終了）、午後13:00～21:00（20:00受付終了）。営業時間は日によって変わる場合がある", "https://www.mapion.co.jp/news/release/000000064.000096644-all/"),
      factNov14("設備", "大浴場にあるサークル型サウナ『円式』は2025年9月19日に第一期改修工事が完了し座面が三段構えになった。円式のある浴場は午前・午後で男女が入れ替わる", "https://www.mapion.co.jp/news/release/000000064.000096644-all/"),
      factNov14("利用条件", "日帰り入浴可。刺青（入れ墨）、タトゥーをされている方の入浴はお断り", "https://www.mapion.co.jp/news/release/000000064.000096644-all/"),
    ],
  },
  {
    ids: ["si-hokkaido-4998"], name: "月見湯", officialUrl: "https://9056899086.amebaownd.com/",
    features: ["ドライサウナ", "ロウリュあり"],
    facts: [
      factNov14("営業時間", "13:45~24:00", "https://9056899086.amebaownd.com/"),
      factNov14("定休日", "火曜日（火曜日が祝日となる場合は営業することがある）", "https://9056899086.amebaownd.com/"),
      factNov14("設備", "札幌市豊平区月寒にある昔ながらの銭湯。男性・女性の高温サウナにHARVIAを導入し、定期的にロウリュイベントを開催", "https://9056899086.amebaownd.com/"),
    ],
  },
  {
    ids: ["si-hokkaido-6182"], name: "GARDENS CABIN (ガーデンズキャビン)", officialUrl: "https://www.gardenscabin.com/",
    features: ["ロウリュあり", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り入浴 税込1,500円（タオル付）", "https://www.gardenscabin.com/"),
      factNov14("営業時間", "日帰り入浴14:00～22:00。大浴場（宿泊者）の営業時間は5:30～9:30、15:00～26:00", "https://www.gardenscabin.com/"),
      factNov14("設備", "地下一階の大浴場に薬湯、寝湯、サウナルームを完備。ロウリュができるサウナがある", "https://www.gardenscabin.com/"),
      factNov14("利用条件", "日帰り入浴可", "https://www.gardenscabin.com/"),
    ],
  },
  {
    ids: ["si-chiba-114510"], name: "毎日サウナ東京 幕張店", officialUrl: "https://everyday-sauna-tokyo.com/",
    features: ["薪サウナ", "スチーム(ミスト)サウナ"],
    facts: [
      factNov14("料金", "平日1時間1,300円から（時間制）", "https://everyday-sauna-tokyo.com/home"),
      factNov14("営業時間", "本館サウナ 6:00〜翌4:00（4:00〜6:00は清掃時間）。別館はなれは24時間営業", "https://everyday-sauna-tokyo.com/home"),
      factNov14("設備", "薪火サウナ、ケロ材を使用した「ケロ蒸喜乱舞」、瞑想特化型の蒸気サウナなど5種類のサウナ室を完備", "https://everyday-sauna-tokyo.com/home"),
    ],
  },
  {
    ids: ["si-nagano-46909"], name: "SAUNA TEN \"Birch and cloud forest\"", officialUrl: "https://koumi.gateauxkingdom.com/spa/sauna",
    features: ["薪サウナ", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "大人・中学生以上 120分 平日4,500円／土日祝5,000円、小学生以上2,500円。完全貸切（6名まで・150分）平日37,500円／土日祝42,000円", "https://koumi.gateauxkingdom.com/spa/sauna"),
      factNov14("営業時間", "10:30〜18:00（最終受付16時、要予約）。営業期間は5〜11月", "https://koumi.gateauxkingdom.com/spa/sauna"),
      factNov14("定休日", "定休日なし", "https://koumi.gateauxkingdom.com/spa/sauna"),
      factNov14("設備", "蓄熱式ストーブのログサウナ（定員10人・貸切可能）とウィスキング専用サウナコタ（定員2人・予約制）。白樺エキスのロウリュあり。利用料に隣接する天然温泉「星空の湯」の利用を含む", "https://koumi.gateauxkingdom.com/spa/sauna"),
      factNov14("水風呂", "北八ヶ岳の伏流水を使った「飲める湧き水風呂」（5〜10月13℃、4月・11月10℃）とワイン樽水風呂", "https://koumi.gateauxkingdom.com/spa/sauna"),
      factNov14("利用条件", "最終受付16時までに予約が必要。完全貸切利用も可能（最大15名まで）", "https://koumi.gateauxkingdom.com/spa/sauna"),
    ],
  },
  {
    ids: ["si-saga-104474"], name: "JIN6サウナ", officialUrl: "https://jinroku-sauna.kujira-yobuko.com/",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "男女共用", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り2時間半 大人 平日2,970円／休日3,850円、中・高生 平日1,485円／休日1,925円、小学生1,100円（いずれも税込）。延長は30分550円", "https://jinroku-sauna.kujira-yobuko.com/"),
      factNov14("営業時間", "10:00〜22:00（最終入館21:00）", "https://jinroku-sauna.kujira-yobuko.com/"),
      factNov14("設備", "鯨サウナ、イカサウナ、唐津焼 窯サウナ（唐津茶セルフロウリュ）の3種のサウナ。タオルセットは無料レンタル、水着・ポンチョ・サウナハットは有料レンタル", "https://jinroku-sauna.kujira-yobuko.com/"),
      factNov14("水風呂", "イカの生け簀を活用したイケス水風呂と、ガラス張りの空中水風呂", "https://jinroku-sauna.kujira-yobuko.com/"),
      factNov14("利用条件", "水着着用で利用できる男女兼用施設。日帰り利用可・予約不要。中尾甚六HOTELに併設", "https://jinroku-sauna.kujira-yobuko.com/"),
    ],
  },
  {
    ids: ["si-87829"], name: "休日湯", officialUrl: "https://www.kyuujitsu.com/facility/qjitsuu/",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("営業時間", "大浴場 10:00〜翌9:00（1:30〜翌5:30は大浴場清掃）。最終入場22時、翌9時完全退館", "https://www.kyuujitsu.com/facility/qjitsuu/"),
      factNov14("設備", "25平米・定員15人のサウナ室（サウナストーブ2台、ゲリラオートロウリュ実施）。源泉掛け流しの主浴槽、露天風呂（三身浴乃湯）、浅湯、電湯。泉質はナトリウム‐塩化物泉", "https://www.kyuujitsu.com/facility/qjitsuu/"),
      factNov14("水風呂", "ブラックシリカ天然鉱石から滴る水と天井から降りかかるミストによる「浴びる水風呂」。浴槽の深さは女湯約114cm、男湯約130cm", "https://www.kyuujitsu.com/facility/qjitsuu/"),
      factNov14("利用条件", "浴槽が深いため18歳以上のお客様限定。休日券・遅割15・遅割18にはレンタルタオルが付く", "https://www.kyuujitsu.com/facility/qjitsuu/"),
    ],
  },
  {
    ids: ["si-101404"], name: "御成桑拿", officialUrl: "https://onari-sauna.com/",
    features: ["スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "男女共用", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "平日 60分2,000円・90分2,400円・120分2,700円、土日祝 60分2,300円・90分2,700円・120分3,000円（税込）", "https://foods-ch.infomart.co.jp/news/280325"),
      factNov14("営業時間", "平日 11:00〜22:00、土日祝 9:00〜22:00（最終受付21:00）", "https://foods-ch.infomart.co.jp/news/280325"),
      factNov14("設備", "電気式スチームジェネレーター搭載のサウナ室（約25平方メートル、最大30人収容、サウナストーブ2台）。浴槽は温浴／水風呂。2Fに内気浴スペース、屋上に外気浴用ウッドデッキ", "https://www.mapion.co.jp/news/release/000000077.000074146-all/"),
      factNov14("利用条件", "入浴形態は男女混浴（水着着用）。水着のレンタルあり（通常550円）", "https://www.mapion.co.jp/news/release/000000077.000074146-all/"),
    ],
  },
  {
    ids: ["si-100877"], name: "高輪SAUNAS", officialUrl: "https://saunas-saunas.com/takanawa/",
    features: ["熱波師あり", "ロウリュあり", "水風呂あり", "個室", "貸切可", "サ飯あり"],
    facts: [
      factNov14("設備", "男性5室・女性3室のサウナ室でアウフグース等のリトリートプログラムを実施。ウィスキングや貸切に対応したプライベートサウナのほか、レストラン、ワークスペース、ナップスペース、アロマラボを併設", "https://saunas-saunas.com/takanawa/"),
      factNov14("水風呂", "男女ともに2種類の水風呂と湯船を完備", "https://saunas-saunas.com/takanawa/"),
    ],
  },
  {
    ids: ["manual-tokyo-rakuspa-fuchu"], name: "RAKU SPA Station 府中", officialUrl: "https://rakuspa.com/fuchu/", address: "〒183-0022 東京都府中市宮西町1-5-1 府中トーセイビルI", city: "府中市",
    features: ["セルフロウリュ", "オートロウリュ", "ロウリュあり", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "フリーコース 大人 平日2,100円／土日祝2,480円、ショートコース（90分）大人 平日1,480円／土日祝1,680円（いずれも税込）。朝風呂（土日祝6:00〜8:00）大人1,200円", "https://rakuspa.com/fuchu/access/"),
      factNov14("営業時間", "[日〜木・祝] 10:00〜翌1:00（最終受付24:00）、[金・土・祝前日] 10:00〜翌8:00（最終受付 翌7:00）。朝風呂は土日祝6:00〜8:00", "https://rakuspa.com/fuchu/access/"),
      factNov14("定休日", "不定休（年数回メンテナンスで休館あり）", "https://www.mapion.co.jp/news/release/000000146.000108434-all/"),
      factNov14("設備", "天然温泉の黒湯（大黒湯・半露天風呂）。男湯にオートロウリュサウナと12F天空サウナ（100℃セルフロウリュ・70℃テントサウナ）、女湯に雲海ミストサウナ", "https://rakuspa.com/fuchu/facilities/spa/"),
      factNov14("水風呂", "冷水風呂あり。天空エリアには潜水可能な壺水風呂", "https://rakuspa.com/fuchu/facilities/spa/"),
      factNov14("利用条件", "3歳以下は無料。フリーコース・ショートコースは館内着・タオルセット込み。翌1:00〜翌6:00はお風呂・サウナ利用不可", "https://rakuspa.com/fuchu/access/"),
    ],
  },
  {
    ids: ["manual-tokyo-rakuspa-musashikoganei"], name: "RAKU SPA Station 武蔵小金井", officialUrl: "https://rakuspa.com/musashi/", address: "〒184-0004 東京都小金井市本町2-1-11", city: "小金井市",
    features: ["ドライサウナ", "セルフロウリュ", "オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "フリータイム 大人 平日2,100円／土日祝2,400円、120分コース 大人 平日1,550円／土日祝1,850円、60分コース 大人 平日1,050円／土日祝1,350円（いずれも税込）", "https://rakuspa.com/musashi/access/"),
      factNov14("営業時間", "[日〜木・祝] 9:00〜翌2:00（最終受付 翌1:00）、[金・土・祝前日] 9:00〜翌8:00（最終受付 翌7:00）。朝風呂は土日祝6:00〜8:00", "https://rakuspa.com/musashi/access/"),
      factNov14("設備", "男湯に4種のサウナ（バレル型セルフロウリュ、30分毎のロウリュ熱波、高温ドライ等）と女湯にロウリュサウナ、女性専用岩盤浴2種。炭酸風呂や半露天の岩風呂、壺風呂など多彩なお風呂", "https://rakuspa.com/musashi/facilities/spa/"),
      factNov14("水風呂", "男湯に超冷水風呂と美泡水風呂、女湯に水風呂", "https://rakuspa.com/musashi/access/"),
      factNov14("利用条件", "3歳以下は無料。フリータイム・120分コースはタオルセット・館内着込み。翌2:00〜翌6:00はお風呂・サウナ・岩盤浴利用不可", "https://rakuspa.com/musashi/access/"),
    ],
  },
  {
    ids: ["manual-tokyo-yurakunosato-kunitachi"], name: "国立温泉 湯楽の里", officialUrl: "https://www.yurakirari.com/kunitachi/", address: "〒186-0012 東京都国立市泉3丁目29-11（フレスポ国立南内）", city: "国立市",
    features: ["温泉付き", "外気あり", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "大人（中学生以上）平日1,020円／土・休日1,220円、こども（4歳〜小学生）平日520円／土・休日620円（いずれも税込）。3歳以下無料", "https://www.yurakirari.com/kunitachi/fee/"),
      factNov14("営業時間", "9時〜深夜1時（最終受付24時）", "https://www.yurakirari.com/kunitachi/fee/"),
      factNov14("定休日", "年に数回、メンテナンス等のため休館する場合あり", "https://www.yurakirari.com/kunitachi/fee/"),
      factNov14("設備", "内湯に2種類のサウナと高濃度炭酸泉、源泉掛け流しの露天風呂、ジェットバス、寝ころび湯。お食事処やリラクゼーション施設を併設", "https://www.yurakirari.com/kunitachi/"),
      factNov14("利用条件", "レンタルタオル150円、レンタルバスタオル200円、レンタル館内着250円", "https://www.yurakirari.com/kunitachi/fee/"),
    ],
  },
  {
    ids: ["manual-hotel-apa-01"], name: "アパホテル〈名古屋丸の内駅前〉", officialUrl: "https://www.apahotel.com/hotel/tokai/aichi/nagoyamarunouchi-ekimae/", address: "〒460-0002 愛知県名古屋市中区丸の内2-17-28", city: "名古屋市",
    features: ["ドライサウナ", "水風呂あり", "外気あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "朝 6：00〜10：00 / 夜 15：00〜25：00", "https://www.apahotel.com/hotel/tokai/aichi/nagoyamarunouchi-ekimae/"),
      factNov14("料金", "ご宿泊者様無料", "https://www.apahotel.com/hotel/tokai/aichi/nagoyamarunouchi-ekimae/"),
      factNov14("設備", "最上階14階の天然温泉大浴殿「玄要の湯」・露天風呂「星彩の湯」・ドライサウナ・水風呂完備（温泉は加水・加温し、循環ろ過式で提供）", "https://www.apahotel.com/hotel/tokai/aichi/nagoyamarunouchi-ekimae/"),
      factNov14("水風呂", "水風呂完備", "https://www.apahotel.com/hotel/tokai/aichi/nagoyamarunouchi-ekimae/"),
      factNov14("利用条件", "料金は「ご宿泊者様無料」と案内されており、日帰り入浴の記載はない", "https://www.apahotel.com/hotel/tokai/aichi/nagoyamarunouchi-ekimae/"),
      { label: "大浴場・サウナ", value: "6:00～10:00 / 15:00～25:00", sourceUrl: "https://www.apahotel.com/hotel/tokai/aichi/nagoyamarunouchi-ekimae/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-apa-02"], name: "アパホテル〈京都駅堀川通〉", officialUrl: "https://www.apahotel.com/hotel/kansai/kyoto/kyotoeki-horikawa/", address: "〒600-8236 京都府京都市下京区油小路通塩小路西油小路町1番地", city: "京都市",
    features: ["ドライサウナ", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "朝 6:00〜10:00 / 夜 15:00〜25:00", "https://www.apahotel.com/hotel/kansai/kyoto/kyotoeki-horikawa/"),
      factNov14("料金", "宿泊者無料", "https://www.apahotel.com/hotel/kansai/kyoto/kyotoeki-horikawa/"),
      factNov14("設備", "最上階11階大浴殿「玄要の湯」に大浴殿・露天風呂・サウナ・水風呂（各男女別）。ドライサウナ、水風呂・外気浴スペース完備", "https://www.apahotel.com/hotel/kansai/kyoto/kyotoeki-horikawa/"),
      factNov14("水風呂", "水風呂完備（外気浴スペースも完備）", "https://www.apahotel.com/hotel/kansai/kyoto/kyotoeki-horikawa/"),
      factNov14("利用条件", "ご利用はご宿泊者様のみ。ただし「湯ったり日帰りプラン」利用者は大浴殿を無料で利用可能（大浴場の利用は15:00から）", "https://www.apahotel.com/hotel/kansai/kyoto/kyotoeki-horikawa/"),
      { label: "大浴場・サウナ", value: "6:00～10:00 / 15:00～25:00", sourceUrl: "https://www.apahotel.com/hotel/kansai/kyoto/kyotoeki-horikawa/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-apa-03"], name: "アパホテル〈鈴鹿中央〉", officialUrl: "https://www.apahotel.com/hotel/tokai/mie/suzuka-chuou/", address: "〒513-0827 三重県鈴鹿市大池3丁目11番地35号", city: "鈴鹿市",
    features: ["宿泊可"],
    facts: [
      factNov14("営業時間", "4:00pm〜12:00am、6:00am～9:00am（サウナは4:00pm〜12:00am）", "https://www.apahotel.com/hotel/tokai/mie/suzuka-chuou/"),
      factNov14("料金", "宿泊者専用（無料）", "https://www.apahotel.com/hotel/tokai/mie/suzuka-chuou/"),
      factNov14("設備", "1階男女別浴殿（男性浴殿・女性浴殿）、サウナ", "https://www.apahotel.com/hotel/tokai/mie/suzuka-chuou/"),
      factNov14("利用条件", "宿泊者専用（無料）と明記されており、日帰り入浴は不可", "https://www.apahotel.com/hotel/tokai/mie/suzuka-chuou/"),
      { label: "大浴場・サウナ", value: "6:00～9:00 / 16:00～24:00", sourceUrl: "https://www.apahotel.com/hotel/tokai/mie/suzuka-chuou/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-apa-04"], name: "アパホテル＆リゾート〈上越妙高〉", officialUrl: "https://www.apahotel.com/resort/myoko/spa/", address: "〒949-2224 新潟県妙高市桶海1090", city: "妙高市",
    features: ["水風呂あり", "外気あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "12:00〜24:00、6:00〜10:00 ※入場は終了60分前迄 ※ホテル宿泊営業日と同一営業", "https://www.apahotel.com/resort/myoko/spa/"),
      factNov14("料金", "ご宿泊のお客様は無料。日帰り入浴のお客様は大人800円、小学生400円", "https://www.apahotel.com/resort/myoko/spa/"),
      factNov14("設備", "天然温泉露天風呂「金泉の湯」（男湯・女湯）、準天然光明石温泉（人工温泉）の大浴殿、サウナ（男性・女性）。2023年シーズンに水風呂（壺式）を新設", "https://www.apahotel.com/resort/myoko/spa/"),
      factNov14("水風呂", "水風呂（壺式）を男性1槽、女性2槽新設（2023年シーズン）", "https://www.apahotel.com/resort/myoko/spa/"),
      factNov14("利用条件", "日帰り入浴可（大人800円、小学生400円）。入れ墨（タトゥー）をされた方のご入場は固くお断り", "https://www.apahotel.com/resort/myoko/spa/"),
      { label: "大浴場・サウナ", value: "6:00～10:00 / 12:00～24:00", sourceUrl: "https://www.apahotel.com/resort/myoko/spa/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-apa-05"], name: "アパホテル〈加賀大聖寺駅前〉", officialUrl: "https://www.apahotel.com/hotel/hokuriku/ishikawa/kagadaisyouji-ekimae/", address: "〒922-0842 石川県加賀市熊坂町イ226-4", city: "加賀市",
    features: ["外気あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "6時～9時・15時～25時", "https://www.apahotel.com/hotel/hokuriku/ishikawa/kagadaisyouji-ekimae/"),
      factNov14("料金", "無料", "https://www.apahotel.com/hotel/hokuriku/ishikawa/kagadaisyouji-ekimae/"),
      factNov14("設備", "大浴殿「玄要の湯」（種類：沸かし湯）。内湯・露天風呂・サウナ", "https://www.apahotel.com/hotel/hokuriku/ishikawa/kagadaisyouji-ekimae/"),
      factNov14("利用条件", "ご宿泊中のお客様のみ利用可能。チェックイン前・チェックアウト後・外来でのご利用は承っていない（日帰り入浴不可）", "https://www.apahotel.com/hotel/hokuriku/ishikawa/kagadaisyouji-ekimae/"),
      { label: "大浴場・サウナ", value: "6:00～9:00 / 15:00～25:00", sourceUrl: "https://www.apahotel.com/hotel/hokuriku/ishikawa/kagadaisyouji-ekimae/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-apa-06"], name: "アパホテル〈千葉八千代緑が丘〉", officialUrl: "https://www.apahotel.com/hotel/syutoken/chiba/chibayachiyo/", address: "〒276-0049 千葉県八千代市緑が丘1-2-30", city: "八千代市",
    features: ["温泉付き", "外気あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "15:00～25:00、翌朝 6:00～10:00", "https://www.apahotel.com/hotel/syutoken/chiba/chibayachiyo/"),
      factNov14("料金", "ホテル宿泊者は無料", "https://www.apahotel.com/hotel/syutoken/chiba/chibayachiyo/"),
      factNov14("設備", "天然温泉大浴殿・露天風呂、サウナ（2F）。泉質はナトリウム-炭酸水素塩・塩化物泉（加水・加温・循環ろ過）", "https://www.apahotel.com/hotel/syutoken/chiba/chibayachiyo/"),
      factNov14("利用条件", "「大浴殿のみのご利用は行っておりません」と明記されており、日帰り入浴は不可（宿泊者のみ）", "https://www.apahotel.com/hotel/syutoken/chiba/chibayachiyo/"),
      { label: "大浴場・サウナ", value: "6:00～10:00 / 15:00～25:00", sourceUrl: "https://www.apahotel.com/hotel/syutoken/chiba/chibayachiyo/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-apa-08"], name: "アパホテル〈大阪天満〉", officialUrl: "https://www.apahotel.com/hotel/kansai/osaka/osakatenma/", address: "〒530-0035 大阪府大阪市北区同心2-16-15", city: "大阪市",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "朝 6:00〜10:00、夜 15:00〜25:00", "https://www.apahotel.com/hotel/kansai/osaka/osakatenma/"),
      factNov14("料金", "宿泊・日帰りプランご利用者無料 ※外来は受け付けておりません", "https://www.apahotel.com/hotel/kansai/osaka/osakatenma/"),
      factNov14("設備", "2階大浴殿「玄要の湯」に露天風呂、内風呂、サウナ、水風呂を完備。サウナ室にはオートロウリュ・オートブロー（20分間隔）、水風呂にはチラー（冷却装置）を導入", "https://www.apahotel.com/hotel/kansai/osaka/osakatenma/"),
      factNov14("水風呂", "水風呂完備（チラーで温度管理）。露天風呂エリアに外気浴用のイスを増設", "https://www.apahotel.com/hotel/kansai/osaka/osakatenma/"),
      factNov14("利用条件", "外来（入浴のみの利用）は不可。日帰りプラン利用者は利用可能（大浴殿の利用は15時から）。日帰りプラン料金はシングル4,000円から、セミダブル6,000円から、ツイン7,000円から", "https://www.apahotel.com/hotel/kansai/osaka/osakatenma/"),
      { label: "大浴場・サウナ", value: "6:00～10:00 / 15:00～25:00", sourceUrl: "https://www.apahotel.com/hotel/kansai/osaka/osakatenma/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-apa-09"], name: "アパホテル〈淀屋橋駅前〉", officialUrl: "https://www.apahotel.com/hotel/kansai/osaka/yodoyabashi-ekimae/", address: "〒541-0044 大阪府大阪市中央区伏見町3-1-9", city: "大阪市",
    features: ["水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "朝 6:00〜10:00 / 夜 15:00〜25:00 ", "https://www.apahotel.com/hotel/kansai/osaka/yodoyabashi-ekimae/"),
      factNov14("料金", "宿泊者無料。日帰りプラン料金は1名利用シングル5,000円〜、2名利用セミダブル7,000円〜（1室あたり）", "https://www.apahotel.com/hotel/kansai/osaka/yodoyabashi-ekimae/"),
      factNov14("設備", "地下1階の準天然光明石温泉（人工温泉）大浴殿「玄要の湯」。大浴殿・露天風呂・サウナ・水風呂を完備", "https://www.apahotel.com/hotel/kansai/osaka/yodoyabashi-ekimae/"),
      factNov14("水風呂", "水風呂完備 ※冷却装置（チラー）を備えていないため、季節によって水温が変動", "https://www.apahotel.com/hotel/kansai/osaka/yodoyabashi-ekimae/"),
      factNov14("利用条件", "外来は「ご宿泊者様、ご契約者様のみ利用可能」と明記。日帰りプラン利用時は大浴殿を利用可能", "https://www.apahotel.com/hotel/kansai/osaka/yodoyabashi-ekimae/"),
      { label: "大浴場・サウナ", value: "6:00～10:00 / 15:00～25:00", sourceUrl: "https://www.apahotel.com/hotel/kansai/osaka/yodoyabashi-ekimae/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-apa-10"], name: "アパホテル＆リゾート〈大阪なんば駅前タワー〉", officialUrl: "https://www.apahotel.com/resort/osaka-namba-ekimae-tower/spa/", address: "〒556-0017 大阪府大阪市浪速区湊町1-2-13", city: "大阪市",
    features: ["宿泊可"],
    facts: [
      factNov14("営業時間", "15:00～26:00、6:00～10:00 ※宿泊者専用（日帰りプラン利用者含む）／外来利用不可", "https://www.apahotel.com/resort/osaka-namba-ekimae-tower/spa/"),
      factNov14("設備", "4階大浴殿「玄要の湯」。準天然光明石温泉（人工温泉）を導入し、ジェットバス・寝湯・サウナ・ぬる湯を併設", "https://www.apahotel.com/resort/osaka-namba-ekimae-tower/spa/"),
      factNov14("利用条件", "宿泊者専用（日帰りプラン利用者含む）で外来利用不可。入れ墨（タトゥー）は専用のタトゥーシールで覆い隠せる方のみ利用可能", "https://www.apahotel.com/resort/osaka-namba-ekimae-tower/spa/"),
      { label: "大浴場・サウナ", value: "15:00～26:00 / 6:00～10:00", sourceUrl: "https://www.apahotel.com/resort/osaka-namba-ekimae-tower/spa/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-candeo-01"], name: "カンデオホテルズ半田", officialUrl: "https://www.candeohotels.com/ja/aichi-handa/", address: "〒475-0859 愛知県半田市天王町1-50-8", city: "半田市",
    features: ["ドライサウナ", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴（タオルセット付・税込）スタンダード15〜23時：平日大人1,000円・土日祝1,200円、朝湯6〜11時：平日大人800円・土日祝1,000円、特別期間：大人1,300円", "https://www.candeohotels.com/ja/aichi-handa/offers/skyspa_visitor_handa/"),
      factNov14("営業時間", "スカイスパ 15:00〜翌11:00（サウナは15:00〜深夜2:00、6:00〜11:00）。日帰り受付は15〜23時（最終受付22時）と6〜11時（最終受付10時）", "https://www.candeohotels.com/ja/aichi-handa/skyspa/"),
      factNov14("設備", "男性：露天風呂、内風呂、水風呂、ドライサウナ／女性：露天風呂、内風呂（女性用サウナなし）。最上階の展望露天風呂", "https://www.candeohotels.com/ja/aichi-handa/skyspa/"),
      factNov14("水風呂", "水風呂は男性のみ（女性側にサウナ・水風呂なし）", "https://www.candeohotels.com/ja/aichi-handa/skyspa/"),
      factNov14("利用条件", "日帰り入浴可（初回はスカイスパ会員登録と顔写真付き身分証の提示が必要）。タトゥーのある方は日帰り入浴不可", "https://www.candeohotels.com/ja/aichi-handa/offers/skyspa_visitor_handa/"),
      { label: "大浴場・サウナ", value: "15:00〜翌11:00", sourceUrl: "https://www.candeohotels.com/ja/aichi-handa/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-candeo-02"], name: "カンデオホテルズ京都烏丸六角", officialUrl: "https://www.candeohotels.com/ja/kyoto-rokkaku/", address: "〒604-8164 京都市中京区六角通烏丸西入骨屋町149（室町通下がる六角東入る南側）", city: "京都市",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "15:00〜翌11:00（サウナは2:00〜6:00利用不可）", "https://www.candeohotels.com/ja/kyoto-rokkaku/skyspa/"),
      factNov14("設備", "女性：外湯、内湯、ミストサウナ／男性：外湯、内湯、水風呂、ドライサウナ。大浴場棟最上階（4F）の外湯あり", "https://www.candeohotels.com/ja/kyoto-rokkaku/skyspa/"),
      factNov14("水風呂", "水風呂は男性のみ", "https://www.candeohotels.com/ja/kyoto-rokkaku/skyspa/"),
      factNov14("利用条件", "スカイスパは宿泊者限定（日帰り利用不可）。2023年5月24日よりボディアート・タトゥー等による受入制限を撤廃", "https://www.candeohotels.com/ja/kyoto-rokkaku/skyspa/"),
      { label: "大浴場・サウナ", value: "15:00〜翌11:00", sourceUrl: "https://www.candeohotels.com/ja/kyoto-rokkaku/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-candeo-03"], name: "カンデオホテルズ菊陽熊本空港", officialUrl: "https://www.candeohotels.com/ja/kumamoto-kikuyo/", address: "〒869-1101 熊本県菊池郡菊陽町津久礼2380-1", city: "菊池郡菊陽町",
    features: ["ロウリュあり", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴（タオルセット付・税込）スタンダード15〜23時：平日大人1,000円・土日祝1,200円、朝湯6〜11時：平日大人800円・土日祝1,000円、特別期間：大人1,500円", "https://www.candeohotels.com/ja/kumamoto-kikuyo/offers/skyspa_visitor_kikuyo/"),
      factNov14("営業時間", "スカイスパは男女入替制（15:00〜翌11:00の間で男女別に時間帯を設定、曜日により異なる）。日帰り受付は15〜23時（最終22時）と6〜11時（最終10時）", "https://www.candeohotels.com/ja/kumamoto-kikuyo/skyspa/"),
      factNov14("設備", "男女共通（入替制）：展望露天風呂、内風呂、水風呂、ロウリュウサウナ、ととのい椅子", "https://www.candeohotels.com/ja/kumamoto-kikuyo/skyspa/"),
      factNov14("水風呂", "水風呂あり（男女入替制で利用）", "https://www.candeohotels.com/ja/kumamoto-kikuyo/skyspa/"),
      factNov14("利用条件", "日帰り入浴可（初回はスカイスパ会員登録と顔写真付き身分証の提示が必要）。タトゥーのある方は日帰り入浴不可。男女入替制のため利用時間帯はフロントで確認", "https://www.candeohotels.com/ja/kumamoto-kikuyo/offers/skyspa_visitor_kikuyo/"),
      { label: "大浴場・サウナ", value: "15:00〜翌11:00（男女入替制、曜日により男女の時間帯が異なる）", sourceUrl: "https://www.candeohotels.com/ja/kumamoto-kikuyo/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-candeo-04"], name: "カンデオホテルズ大津熊本空港", officialUrl: "https://www.candeohotels.com/ja/kumamoto-ozu/", address: "〒869-1235 熊本県菊池郡大津町室736-1", city: "菊池郡大津町",
    features: ["ドライサウナ", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴（タオルセット付・税込）スタンダード15〜23時：平日大人1,000円・土日祝1,200円、朝湯6〜11時：平日大人800円・土日祝1,000円、特別期間：大人1,500円", "https://www.candeohotels.com/ja/kumamoto-ozu/offers/skyspa_visitor_ozu/"),
      factNov14("営業時間", "スカイスパ 15:00〜翌11:00（サウナは15:00〜深夜2:00）。日帰り受付は15〜23時（最終受付22時）と6〜11時（最終受付10時）", "https://www.candeohotels.com/ja/kumamoto-ozu/skyspa/"),
      factNov14("設備", "男性：露天風呂、内風呂、水風呂、ドライサウナ／女性：露天風呂、内風呂（女性用サウナなし）", "https://www.candeohotels.com/ja/kumamoto-ozu/skyspa/"),
      factNov14("水風呂", "水風呂は男性のみ（女性側にサウナ・水風呂なし）", "https://www.candeohotels.com/ja/kumamoto-ozu/skyspa/"),
      factNov14("利用条件", "日帰り入浴可（初回はスカイスパ会員登録と顔写真付き身分証の提示が必要）。タトゥーのある方は日帰り入浴不可", "https://www.candeohotels.com/ja/kumamoto-ozu/offers/skyspa_visitor_ozu/"),
      { label: "大浴場・サウナ", value: "15:00〜翌11:00", sourceUrl: "https://www.candeohotels.com/ja/kumamoto-ozu/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-candeo-05"], name: "カンデオホテルズ静岡島田", officialUrl: "https://www.candeohotels.com/ja/shizuoka-shimada/", address: "〒427-0104 静岡県島田市井口1417", city: "島田市",
    features: ["水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "男女入替制。女性：15:00〜17:45、21:45〜23:45、3:00〜5:45、9:00〜11:00／男性：18:00〜21:30、24:00〜2:45、6:00〜8:45", "https://www.candeohotels.com/ja/shizuoka-shimada/skyspa/"),
      factNov14("設備", "男女共通（入替制）：展望露天風呂、内風呂、水風呂、サウナ", "https://www.candeohotels.com/ja/shizuoka-shimada/skyspa/"),
      factNov14("水風呂", "水風呂あり（男女入替制で利用）", "https://www.candeohotels.com/ja/shizuoka-shimada/skyspa/"),
      factNov14("利用条件", "スカイスパは宿泊者限定（日帰り利用不可）。男女入替制", "https://www.candeohotels.com/ja/shizuoka-shimada/skyspa/"),
      { label: "大浴場・サウナ", value: "女性：15:00〜17:45、21:45〜23:45、3:00〜5:45、9:00〜11:00／男性：18:00〜21:30、24:00〜2:45、6:00〜8:45（男女入替制）", sourceUrl: "https://www.candeohotels.com/ja/shizuoka-shimada/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-candeo-06"], name: "カンデオホテルズ大阪ザ・タワー", officialUrl: "https://www.candeohotels.com/ja/osaka-tower/", address: "〒530-0004 大阪府大阪市北区堂島浜1-1-27（フロント17階）", city: "大阪市",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "15:00〜翌11:00（サウナは2:00〜6:00利用不可）", "https://www.candeohotels.com/ja/osaka-tower/skyspa/"),
      factNov14("設備", "男性・女性とも：露天風呂、内風呂、水風呂、ロウリュサウナ（オートロウリュ式、フィンランドiki社製ストーブ）。最上階31階のインフィニティ露天風呂はギネス世界記録認定", "https://www.candeohotels.com/ja/osaka-tower/skyspa/"),
      factNov14("水風呂", "水風呂あり（男女とも）", "https://www.candeohotels.com/ja/osaka-tower/skyspa/"),
      factNov14("利用条件", "スカイスパは宿泊者限定（日帰り利用不可）。ボディアート・タトゥー等による受入制限なし", "https://www.candeohotels.com/ja/osaka-tower/skyspa/"),
      { label: "大浴場・サウナ", value: "15:00〜翌11:00", sourceUrl: "https://www.candeohotels.com/ja/osaka-tower/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-candeo-07"], name: "カンデオホテルズ大阪なんば", officialUrl: "https://www.candeohotels.com/ja/osaka-namba/", address: "〒542-0083 大阪府大阪市中央区東心斎橋2-2-5", city: "大阪市",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "15:00〜翌11:00（サウナは2:00〜6:00利用不可）", "https://www.candeohotels.com/ja/osaka-namba/skyspa/"),
      factNov14("設備", "女性：露天風呂、内風呂、ミストサウナ／男性：露天風呂、内風呂、水風呂、ドライサウナ。湯上がり処（ラウンジ）あり", "https://www.candeohotels.com/ja/osaka-namba/skyspa/"),
      factNov14("水風呂", "水風呂は男性のみ", "https://www.candeohotels.com/ja/osaka-namba/skyspa/"),
      factNov14("利用条件", "スカイスパは宿泊者限定（日帰り利用不可）。ボディアート・タトゥー等による受入制限なし", "https://www.candeohotels.com/ja/osaka-namba/skyspa/"),
      { label: "大浴場・サウナ", value: "15:00〜翌11:00", sourceUrl: "https://www.candeohotels.com/ja/osaka-namba/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-candeo-08"], name: "カンデオホテルズ大阪岸辺", officialUrl: "https://www.candeohotels.com/ja/osaka-kishibe/", address: "〒564-0018 大阪府吹田市岸部新町5-45", city: "吹田市",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴（タオルセット付・税込）スタンダード15〜23時：平日大人1,600円・土日祝1,800円、朝湯6〜11時：平日大人1,200円・土日祝1,400円、特別期間：大人2,000円", "https://www.candeohotels.com/ja/osaka-kishibe/offers/skyspa_visitor_kishibe/"),
      factNov14("営業時間", "スカイスパ 15:00〜翌11:00（サウナは2:00〜6:00利用不可）。日帰り受付は15〜23時（最終受付22時）と6〜11時（最終受付10時）", "https://www.candeohotels.com/ja/osaka-kishibe/skyspa/"),
      factNov14("設備", "女性：露天風呂、内風呂、ミストサウナ／男性：露天風呂、内風呂、水風呂、ドライサウナ", "https://www.candeohotels.com/ja/osaka-kishibe/skyspa/"),
      factNov14("水風呂", "水風呂は男性のみ", "https://www.candeohotels.com/ja/osaka-kishibe/skyspa/"),
      factNov14("利用条件", "日帰り入浴可（初回はスカイスパ会員登録と顔写真付き身分証の提示が必要）。タトゥーのある方は日帰り入浴不可", "https://www.candeohotels.com/ja/osaka-kishibe/offers/skyspa_visitor_kishibe/"),
      { label: "大浴場・サウナ", value: "15:00〜翌11:00", sourceUrl: "https://www.candeohotels.com/ja/osaka-kishibe/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-candeo-09"], name: "カンデオホテルズ大阪心斎橋", officialUrl: "https://www.candeohotels.com/ja/osaka-shinsaibashi/", address: "〒542-0085 大阪府大阪市中央区心斎橋筋2丁目7-12", city: "大阪市",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "15:00〜翌11:00（サウナは2:00〜6:00利用不可）", "https://www.candeohotels.com/ja/osaka-shinsaibashi/skyspa/"),
      factNov14("設備", "男性・女性とも：露天風呂、内風呂、水風呂、ロウリュサウナ（オートロウリュ式、SAWO社製タワーラウンドヒーター採用）", "https://www.candeohotels.com/ja/osaka-shinsaibashi/skyspa/"),
      factNov14("水風呂", "水風呂あり（男女とも）", "https://www.candeohotels.com/ja/osaka-shinsaibashi/skyspa/"),
      factNov14("利用条件", "スカイスパは宿泊者限定（日帰り利用不可）", "https://www.candeohotels.com/ja/osaka-shinsaibashi/skyspa/"),
      { label: "大浴場・サウナ", value: "15:00〜翌11:00", sourceUrl: "https://www.candeohotels.com/ja/osaka-shinsaibashi/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-candeo-10"], name: "カンデオホテルズ大阪枚方", officialUrl: "https://www.candeohotels.com/ja/osaka-hirakata/", address: "〒573-0032 大阪府枚方市岡東町19-1 ステーションヒル枚方（フロント19階）", city: "枚方市",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴（タオルセット付・税込）大人2,000円・小人1,000円（枚方市民は大人1,500円・小人750円）、特別期間：大人2,400円（市民2,000円）", "https://www.candeohotels.com/ja/osaka-hirakata/offers/skyspa_visitor_hirakata/"),
      factNov14("営業時間", "スカイスパ 15:00〜翌11:00（サウナは2:00〜6:00利用不可、オートロウリュは15:30〜翌10:30に毎時00分・30分作動）。日帰り受付は6〜11時（最終10時）と15〜23時（最終22時）", "https://www.candeohotels.com/ja/osaka-hirakata/skyspa/"),
      factNov14("設備", "男性・女性とも：露天風呂、内風呂、水風呂、ロウリュサウナ（オート）。地上26階・約100mの最上階スカイスパ", "https://www.candeohotels.com/ja/osaka-hirakata/skyspa/"),
      factNov14("水風呂", "水風呂あり（男女とも）", "https://www.candeohotels.com/ja/osaka-hirakata/skyspa/"),
      factNov14("利用条件", "日帰り入浴可（初回はスカイスパ会員登録と顔写真付き身分証の提示が必要）。タトゥーのある方は日帰り入浴不可", "https://www.candeohotels.com/ja/osaka-hirakata/offers/skyspa_visitor_hirakata/"),
      { label: "大浴場・サウナ", value: "15:00〜翌11:00", sourceUrl: "https://www.candeohotels.com/ja/osaka-hirakata/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-candeo-11"], name: "ザ シンギュラリ ホテル ＆ スカイスパ アット ユニバーサル・スタジオ・ジャパン", officialUrl: "https://www.candeohotels.com/ja/singulari/", address: "〒554-0024 大阪府大阪市此花区島屋6丁目2番25号", city: "大阪市",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "最上階スカイスパ。女性：露天風呂、内風呂、ミストサウナ／男性：露天風呂、内風呂、水風呂、ドライサウナ", "https://www.candeohotels.com/ja/singulari/skyspa/"),
      factNov14("営業時間", "スカイスパ 15:00〜翌11:00（サウナは2:00〜6:00は利用不可）", "https://www.candeohotels.com/ja/singulari/skyspa/"),
      factNov14("利用条件", "スカイスパの利用は宿泊者限定（日帰り入浴不可）。タトゥーのある方はタトゥーカバーシールを利用", "https://www.candeohotels.com/ja/singulari/skyspa/"),
      { label: "大浴場・サウナ", value: "15:00〜翌11:00", sourceUrl: "https://www.candeohotels.com/ja/singulari/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-candeo-12"], name: "カンデオホテルズ茅野", officialUrl: "https://www.candeohotels.com/ja/nagano-chino/", address: "〒391-0000 長野県茅野市中沖2-7", city: "茅野市",
    features: ["ドライサウナ", "水風呂あり", "外気あり", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("設備", "最上階スカイスパ。男性：露天風呂、内風呂、水風呂、ドライサウナ／女性：露天風呂、内風呂（女性用サウナなし）", "https://www.candeohotels.com/ja/nagano-chino/skyspa/"),
      factNov14("営業時間", "スカイスパ（宿泊者）15:00〜翌11:00", "https://www.candeohotels.com/ja/nagano-chino/skyspa/"),
      factNov14("料金", "日帰り入浴（平日のみ、タオルセット付・税込）スタンダード15〜23時 大人1,000円・小人500円、朝湯6〜11時 大人800円・小人400円", "https://www.candeohotels.com/ja/nagano-chino/offers/skyspa_visitor_chino/"),
      factNov14("利用条件", "日帰り入浴は平日のみで、スカイスパ会員登録（顔写真付き身分証が必要）。タトゥーのある方は日帰り入浴不可", "https://www.candeohotels.com/ja/nagano-chino/offers/skyspa_visitor_chino/"),
      factNov14("営業状況", "公式のお知らせ（2026年11月4日付）により、機器故障のため男女ともスカイスパの露天風呂が利用不可（復旧日程は未定）。内風呂・サウナ・水風呂は通常通り利用可", "https://www.candeohotels.com/ja/nagano-chino/"),
      { label: "大浴場・サウナ", value: "15:00〜翌11:00", sourceUrl: "https://www.candeohotels.com/ja/nagano-chino/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-candeo-13"], name: "カンデオホテルズ東京新橋", officialUrl: "https://www.candeohotels.com/ja/tokyo-shimbashi/", address: "〒105-0004 東京都港区新橋3-6-8", city: "港区",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "最上階スカイスパ。女性：露天風呂、内風呂、ミストサウナ／男性：露天風呂、内風呂、水風呂、ドライサウナ", "https://www.candeohotels.com/ja/tokyo-shimbashi/skyspa/"),
      factNov14("営業時間", "スカイスパ 15:00〜翌11:00（サウナは2:00〜6:00は利用不可）", "https://www.candeohotels.com/ja/tokyo-shimbashi/skyspa/"),
      factNov14("利用条件", "スカイスパの利用は宿泊者限定（日帰り入浴不可）。タトゥーのある方はタトゥーカバーシールを利用", "https://www.candeohotels.com/ja/tokyo-shimbashi/skyspa/"),
      { label: "大浴場・サウナ", value: "15:00〜翌11:00", sourceUrl: "https://www.candeohotels.com/ja/tokyo-shimbashi/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-candeo-14"], name: "カンデオホテルズ東京六本木", officialUrl: "https://www.candeohotels.com/ja/tokyo-roppongi/", address: "〒106-0032 東京都港区六本木6-7-11", city: "港区",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "最上階スカイスパ。女性：露天風呂、内風呂、ミストサウナ／男性：露天風呂、内風呂、水風呂、ドライサウナ", "https://www.candeohotels.com/ja/tokyo-roppongi/skyspa/"),
      factNov14("営業時間", "スカイスパ 15:00〜翌11:00（サウナは3:00〜6:00は利用不可）", "https://www.candeohotels.com/ja/tokyo-roppongi/skyspa/"),
      factNov14("利用条件", "スカイスパの利用は宿泊者限定（日帰り入浴不可）。ボディアート・タトゥー等による受入制限なし", "https://www.candeohotels.com/ja/tokyo-roppongi/skyspa/"),
      { label: "大浴場・サウナ", value: "15:00〜翌11:00", sourceUrl: "https://www.candeohotels.com/ja/tokyo-roppongi/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-roynet-01"], name: "ダイワロイネットホテル松江駅前", officialUrl: "https://www.daiwaroynet.jp/matsue-ekimae/", address: "〒690-0003 島根県松江市朝日町590-10", city: "松江市",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "サウナ付き大浴場あり（そのほかフィットネスルーム、男女別コインランドリー、無人コンビニエンスストア）", "https://www.daiwaroynet.jp/matsue-ekimae/"),
      factNov14("利用条件", "大浴場・サウナは宿泊者専用（日帰り入浴不可）", "https://www.daiwaroynet.jp/matsue-ekimae/"),
      { label: "大浴場・サウナ", value: "15:00～24:00／6:00～10:00", sourceUrl: "https://www.daiwaroynet.jp/matsue-ekimae/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-01"], name: "天然温泉 つつじの湯 ドーミーインEXPRESS豊橋", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/toyohashi/", address: "〒440-0893 愛知県豊橋市札木町118", city: "豊橋市",
    features: ["ドライサウナ", "水風呂あり", "外気あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "1Fに男女別天然温泉大浴場「つつじの湯」。内湯（池田さくら温泉からの運び湯、炭酸水素塩泉）、外湯、高温ドライサウナ、水風呂", "https://dormy-hotels.com/dormyinn/hotels/toyohashi/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用停止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/toyohashi/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-03"], name: "天然温泉 扇浜の湯 ドーミーイン川崎", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/kawasaki/", address: "〒210-0005 神奈川県川崎市川崎区東田町9-3", city: "川崎市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "天然温泉大浴場「扇浜（おうぎはま）の湯」", "https://dormy-hotels.com/dormyinn/hotels/kawasaki/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/kawasaki/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-04"], name: "天然温泉 茶月の湯 ドーミーインEXPRESS掛川", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/kakegawa/", address: "〒436-0075 静岡県掛川市仁藤町3-12", city: "掛川市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "最上階13Fに男女別天然温泉大浴場「茶月（さつき）の湯」", "https://dormy-hotels.com/dormyinn/hotels/kakegawa/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/kakegawa/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-05"], name: "天然温泉 富嶽の湯 ドーミーイン三島", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/mishima/", address: "〒411-0035 静岡県三島市大宮町3-18-33", city: "三島市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "最上階12Fに富士山を望む男女別天然温泉大浴場「富嶽（ふがく）の湯」", "https://dormy-hotels.com/dormyinn/hotels/mishima/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/mishima/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-06"], name: "天然温泉 碧宝の湯 ドーミーイン小松", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/komatsu/", address: "〒923-0868 石川県小松市日の出町4丁目211番", city: "小松市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "天然温泉大浴場「碧宝（へきほう）の湯」", "https://dormy-hotels.com/dormyinn/hotels/komatsu/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～翌5：00利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/komatsu/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-07"], name: "天然温泉 そが浜の湯 ドーミーイン千葉City Soga", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/soga/", address: "〒260-0842 千葉県千葉市中央区南町2-15-4", city: "千葉市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "天然温泉大浴場「そが浜の湯」。浴場は小さめで、琥珀色の天然温泉", "https://dormy-hotels.com/dormyinn/hotels/soga/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/soga/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-08"], name: "天然温泉 水都の湯 ドーミーインPREMIUM大阪北浜", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/osakakitahama/", address: "〒541-0043 大阪府大阪市中央区高麗橋1丁目6番7号", city: "大阪市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "最上階13Fに男女別天然温泉大浴場「水都（すいと）の湯」", "https://dormy-hotels.com/dormyinn/hotels/osakakitahama/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/osakakitahama/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-09"], name: "天然温泉 朝霧の湯 ドーミーインPREMIUMなんばANNEX", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/nanba_ax/", address: "〒542-0083 大阪府大阪市中央区東心斎橋2-1-6", city: "大阪市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "最上階13Fに男女別大浴場「朝霧（あさぎり）の湯」（天然温泉）", "https://dormy-hotels.com/dormyinn/hotels/nanba_ax/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/nanba_ax/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-10"], name: "天然温泉 夕霧の湯 ドーミーインPREMIUMなんば", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/premium_nanba/", address: "〒542-0082 大阪府大阪市中央区島之内2-14-23", city: "大阪市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "最上階13Fに男女別大浴場「夕霧（ゆうぎり）の湯」", "https://dormy-hotels.com/dormyinn/hotels/premium_nanba/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/premium_nanba/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-11"], name: "すえひろの湯 ドーミーイン秋葉原", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/akihabara/", address: "〒101-0021 東京都千代田区外神田4-12-5", city: "千代田区",
    features: ["外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "最上階9Fに男女別大浴場「すえひろの湯」。男性露天風呂は広く、露天風呂にはTVも設置", "https://dormy-hotels.com/dormyinn/hotels/akihabara/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/akihabara/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-12"], name: "ドーミーインEXPRESS目黒青葉台", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/meguro/", address: "〒153-0042 東京都目黒区青葉台3-21-8", city: "目黒区",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "大浴場あり（全日男女入替制）", "https://dormy-hotels.com/dormyinn/hotels/meguro/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（全日男女入替制：女性15：00～20：00／男性20：30～翌10：00、サウナのみ深夜1：00～5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/meguro/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-13"], name: "ドーミーインPREMIUM渋谷神宮前", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/shibuya/", address: "〒150-0001 東京都渋谷区神宮前6-24-4", city: "渋谷区",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "男女別大浴場あり", "https://dormy-hotels.com/dormyinn/hotels/shibuya/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/shibuya/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-14"], name: "亀島川温泉 新川の湯 ドーミーイン東京八丁堀", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/tokyohatchobori/", address: "〒104-0033 東京都中央区新川2-20-4", city: "中央区",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "天然温泉大浴場「新川（しんかわ）の湯」（亀島川温泉）", "https://dormy-hotels.com/dormyinn/hotels/tokyohatchobori/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/tokyohatchobori/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-15"], name: "春日の湯 ドーミーイン後楽園", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/korakuen/", address: "〒113-0033 東京都文京区本郷4-23-14", city: "文京区",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "宿泊可"],
    facts: [
      factNov14("設備", "B1階に男女別サウナ付大浴場「春日の湯」。男性サウナは高温ドライ、女性サウナはミストを設置。内湯はあつ湯とぬる湯。外気浴スペースはなし", "https://dormy-hotels.com/dormyinn/hotels/korakuen/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/korakuen/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-16"], name: "天然温泉 七宝の湯 ドーミーインPREMIUM銀座", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/ginza/", address: "〒104-0061 東京都中央区銀座6-16-8", city: "中央区",
    features: ["ドライサウナ", "水風呂あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "地下1階に天然温泉“黒湯”の男女別大浴場「七宝の湯」。温泉は千葉県匝瑳市からの運び湯。高温ドライサウナ、水風呂も設えている", "https://dormy-hotels.com/dormyinn/hotels/ginza/"),
      { label: "大浴場・サウナ", value: "15：00～翌朝10：00（サウナのみ1：00～5：00利用停止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/ginza/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-17"], name: "天然温泉 豊穣の湯 ドーミーイン池袋", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/ikebukuro/", address: "〒170-0013 東京都豊島区東池袋3-11-11", city: "豊島区",
    features: ["外気あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "最上階15Fに天然温泉の男女別大浴場「豊穣の湯」。露天風呂付の大浴場で、池袋エリア唯一の黒湯・内湯", "https://dormy-hotels.com/dormyinn/hotels/ikebukuro/"),
      { label: "大浴場・サウナ", value: "15：00～翌朝10：00（サウナのみ1：00～5：00利用停止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/ikebukuro/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-18"], name: "展望大浴場 あさひ湯 ドーミーインEXPRESS浅草", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/asakusa/", address: "〒111-0033 東京都台東区花川戸1-3-4", city: "台東区",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "展望大浴場「あさひ湯」", "https://dormy-hotels.com/dormyinn/hotels/asakusa/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（曜日別男女入替制、サウナのみ深夜1：00～5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/asakusa/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-19"], name: "伝馬の湯 ドーミーインPREMIUM東京小伝馬町", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/tokyokodenmacho/", address: "〒103-0001 東京都中央区日本橋小伝馬町2番3号", city: "中央区",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "11F最上階に男女別大浴場「伝馬の湯」", "https://dormy-hotels.com/dormyinn/hotels/tokyokodenmacho/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/tokyokodenmacho/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-20"], name: "徒士の湯 ドーミーイン上野・御徒町", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/ueno/", address: "〒110-0005 東京都台東区上野6丁目7番22号", city: "台東区",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "最上階12Fに男女別大浴場「徒士の湯」", "https://dormy-hotels.com/dormyinn/hotels/ueno/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/ueno/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-21"], name: "明神の湯 ドーミーインPREMIUM神田", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/kanda/", address: "〒101-0041 東京都千代田区神田須田町1-16", city: "千代田区",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "大浴場「明神の湯」", "https://dormy-hotels.com/dormyinn/hotels/kanda/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～翌5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/kanda/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-23"], name: "石狩の湯 ドーミーインPREMIUM札幌", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/premium_sapporo", address: "〒060-0062 北海道札幌市中央区南2条西6丁目4-1", city: "札幌市",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "大浴場「石狩の湯」", "https://dormy-hotels.com/dormyinn/hotels/premium_sapporo"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/premium_sapporo", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-24"], name: "狸の湯 ドーミーイン札幌ANNEX", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/sapporo_ax", address: "〒060-0063 北海道札幌市中央区南三条西6丁目10-6", city: "札幌市",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "大浴場「狸の湯」", "https://dormy-hotels.com/dormyinn/hotels/sapporo_ax"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/sapporo_ax", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-25"], name: "天然温泉 幸鐘の湯 ドーミーイン東室蘭", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/higashimuroran/", address: "〒050-0074 北海道室蘭市中島町2-30-11", city: "室蘭市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "天然温泉大浴場「幸鐘の湯」。北海道でも有数の温泉地・洞爺湖からの運び湯", "https://dormy-hotels.com/dormyinn/hotels/higashimuroran/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/higashimuroran/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-26"], name: "天然温泉 常呂川の湯 ドーミーイン北見", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/kitami/", address: "〒090-0044 北海道北見市北四条西2丁目7-1", city: "北見市",
    features: ["温泉付き", "外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "2Fに男女別天然温泉大浴場「常呂川の湯」。アルカリ泉質の天然温泉露天風呂あり", "https://dormy-hotels.com/dormyinn/hotels/kitami/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/kitami/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-27"], name: "天然温泉 神威の湯 ドーミーイン旭川", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/asahikawa/", address: "〒070-0035 北海道旭川市5条通6丁目964-1", city: "旭川市",
    features: ["温泉付き", "外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "10F最上階に天然温泉大浴場「神威の湯」。露天風呂あり", "https://dormy-hotels.com/dormyinn/hotels/asahikawa/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/asahikawa/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-28"], name: "天然温泉 樽前の湯 ドーミーイン苫小牧", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/tomakomai/", address: "〒053-0023 北海道苫小牧市錦町2-1-22", city: "苫小牧市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "9F最上階に自家源泉の男女別大浴場「樽前の湯」", "https://dormy-hotels.com/dormyinn/hotels/tomakomai/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/tomakomai/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-29"], name: "天然温泉 鶴舞の湯 ドーミーイン千歳", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/chitose", address: "〒066-0063 北海道千歳市幸町4丁目20番地1号", city: "千歳市",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "貸切可", "宿泊可"],
    facts: [
      factNov14("設備", "1階に天然温泉大浴場「鶴舞の湯」（「鶴の湯温泉」の運び湯）。男女共に天然温泉の露天風呂、高温サウナ（オートロウリュ付き）、水風呂を用意。貸切風呂も用意", "https://dormy-hotels.com/dormyinn/hotels/chitose"),
      factNov14("水風呂", "水風呂あり（男女共に用意）", "https://dormy-hotels.com/dormyinn/hotels/chitose"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/chitose", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-30"], name: "天然温泉 天都の湯 ドーミーイン網走", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/abashiri/", address: "〒093-0012 北海道網走市南二条西3丁目1番地の1", city: "網走市",
    features: ["温泉付き", "外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "最上階9Fに男女別天然温泉大浴場「天都の湯」。最上階の露天風呂からはオホーツク海と知床連山を一望できる。温泉はドーミーイン北見からの運び湯", "https://dormy-hotels.com/dormyinn/hotels/abashiri/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/abashiri/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-31"], name: "天然温泉 天北の湯 ドーミーイン稚内", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/wakkanai/", address: "〒097-0022 北海道稚内市中央2-7-13", city: "稚内市",
    features: ["温泉付き", "外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "最上階10Fに男女別天然温泉大浴場「天北の湯」。露天風呂あり", "https://dormy-hotels.com/dormyinn/hotels/wakkanai/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～翌5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/wakkanai/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-32"], name: "天然温泉 灯の湯 ドーミーインPREMIUM小樽", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/otaru/", address: "〒047-0032 北海道小樽市稲穂3-9-1", city: "小樽市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "2Fに男女別天然温泉大浴場「灯の湯」。内湯・岩風呂・ヒノキ風呂あり", "https://dormy-hotels.com/dormyinn/hotels/otaru/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/otaru/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-33"], name: "天然温泉 白樺の湯 ドーミーイン帯広", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/obihiro/", address: "〒080-0012 北海道帯広市西二条南9-11-1", city: "帯広市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "2Fに男女別天然温泉大浴場「白樺の湯」", "https://dormy-hotels.com/dormyinn/hotels/obihiro/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/obihiro/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-dormy-34"], name: "天然温泉 幣舞の湯 ドーミーインPREMIUM釧路", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/kushiro/", address: "〒085-0015 北海道釧路市北大通2-1", city: "釧路市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "最上階13Fに男女別天然温泉大浴場「幣舞の湯」", "https://dormy-hotels.com/dormyinn/hotels/kushiro/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～翌5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/kushiro/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-mystays-01"], name: "ホテルマイステイズプレミア成田", officialUrl: "https://www.mspnarita.com/pool-spa/", address: "〒286-0131 千葉県成田市大山31", city: "成田市",
    features: ["宿泊可"],
    facts: [
      factNov14("料金", "サウナ付き浴場・お風呂とも550円（ご滞在の方限定で有料）", "https://www.mspnarita.com/pool-spa/"),
      factNov14("営業時間", "サウナ付き浴場・お風呂 6:00～11:00（最終入場10:30）、15:00～22:00（最終入場21:30）", "https://www.mspnarita.com/pool-spa/"),
      factNov14("設備", "サウナ付き浴場と屋内プール（約15メートル・2コース）を併設", "https://www.mspnarita.com/pool-spa/"),
      factNov14("利用条件", "ご滞在の方限定のため日帰り入浴は不可。小学生以下のお子様のみでの利用はできない", "https://www.mspnarita.com/pool-spa/"),
      { label: "大浴場・サウナ", value: "6:00～11:00／15:00～22:00", sourceUrl: "https://iconia.co.jp/hotel-mystays-premier-narita-chiba/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-mystays-02"], name: "ホテルマイステイズプレミア札幌パーク", officialUrl: "https://iconia.co.jp/hotel-mystays-premier-sapporo-park-hokkaido/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "天然温泉を完備", "https://iconia.co.jp/hotel-mystays-premier-sapporo-park-hokkaido/"),
    ],
  },
  {
    ids: ["manual-hotel-routeinn-01"], name: "ルートイングランティア東海 Spa & Relaxation", officialUrl: "https://www.hotel-grantia.co.jp/tokai/", address: "〒476-0003 愛知県東海市荒尾町丸根1-21", city: "東海市",
    features: ["温泉付き", "外気あり", "宿泊可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り入浴：温浴+リラクゼーションルーム 大人 平日1,000円／土日・祝日1,200円、温浴のみ 大人 平日800円／土日・祝日950円。ご宿泊者は無料", "https://hotel-grantia.co.jp/tokai/spa/"),
      factNov14("営業時間", "外来利用 10:00～24:30／宿泊者 5:00～10:00、15:00～24:30", "https://hotel-grantia.co.jp/tokai/spa/"),
      factNov14("設備", "天然温泉「華の湯」（源泉名：永和温泉、泉質はナトリウム－塩化物・炭酸水素塩温泉）。内風呂、露天風呂、サウナ（男風呂・女風呂）、替り湯のほか、お食事処「和み」とリラクゼーションスペースがある", "https://hotel-grantia.co.jp/tokai/spa/"),
      factNov14("利用条件", "日帰り入浴可。タオルセットは300円。愛知県青少年条例により23:00～翌6:00は18歳未満の方は利用できない", "https://hotel-grantia.co.jp/tokai/spa/"),
      { label: "大浴場・サウナ", value: "5:00～10:00 / 15:00～24:30", sourceUrl: "https://www.hotel-grantia.co.jp/tokai/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-02"], name: "ホテルルートイン松山北", officialUrl: "https://www.route-inn.co.jp/hotel_list/ehime/index_hotel_id_782/", address: "〒791-8005 愛媛県松山市東長戸四丁目８番１２号", city: "松山市",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "大浴場を完備", "https://www.route-inn.co.jp/hotel_list/ehime/index_hotel_id_782/"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/ehime/index_hotel_id_782/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-03"], name: "ホテルルートインGrand守谷駅前", officialUrl: "https://www.route-inn.co.jp/hotel_list/ibaraki/index_hotel_id_735/", address: "〒302-0115 茨城県守谷市中央二丁目17-８", city: "守谷市",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "光明石人工温泉を完備。女性大浴場にはReFaシャワーヘッド・ReFaドライヤーを設置", "https://www.route-inn.co.jp/hotel_list/ibaraki/index_hotel_id_735/"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/ibaraki/index_hotel_id_735/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-04"], name: "ホテルルートイン美濃加茂", officialUrl: "https://www.route-inn.co.jp/hotel_list/gifu/index_hotel_id_33/", address: "〒505-0041 岐阜県美濃加茂市太田町2449-1", city: "美濃加茂市",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "大浴場とサウナがある（公式ページの施設一覧に「大浴場」「サウナ」と明記）", "https://www.route-inn.co.jp/hotel_list/gifu/index_hotel_id_33/"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/gifu/index_hotel_id_33/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-06"], name: "ホテルルートイン京都久御山", officialUrl: "https://www.route-inn.co.jp/hotel_list/kyoto/index_hotel_id_737/", address: "〒613-0022 京都府久世郡久御山町市田鈴間102番地", city: "久世郡久御山町",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "天然温泉を完備した広々とした浴場とサウナがある（公式ページの施設一覧にも「大浴場」「天然温泉」「サウナ」と明記）", "https://www.route-inn.co.jp/hotel_list/kyoto/index_hotel_id_737/"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/kyoto/index_hotel_id_737/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-07"], name: "ホテルルートインGrand前橋", officialUrl: "https://www.route-inn.co.jp/hotel_list/gunma/index_hotel_id_746/", address: "〒371-0847 群馬県前橋市大友町1丁目5番地4", city: "前橋市",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "サウナ付き大浴場がある（公式ページの施設一覧にも「大浴場」「サウナ」と明記）", "https://www.route-inn.co.jp/hotel_list/gunma/index_hotel_id_746/"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/gunma/index_hotel_id_746/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-08"], name: "ホテルルートインGrand太田駅前", officialUrl: "https://www.route-inn.co.jp/hotel_list/gunma/index_hotel_id_680/", address: "〒373-0851 群馬県太田市飯田町1380", city: "太田市",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "女性大浴場あり（公式お知らせ：女性大浴場にReFaシャワーヘッドとReFaドライヤーを設置）", "https://www.route-inn.co.jp/hotel_list/gunma/index_hotel_id_680/"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/gunma/index_hotel_id_680/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-09"], name: "ホテルルートインGrand秩父", officialUrl: "https://www.route-inn.co.jp/hotel_list/saitama/index_hotel_id_714/", address: "〒368-0023 埼玉県秩父市大宮4628-2", city: "秩父市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "大浴場あり。天然温泉・サウナを完備（公式サイトの設備案内）。女性大浴場あり", "https://www.route-inn.co.jp/hotel_list/saitama/index_hotel_id_714/"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/saitama/index_hotel_id_714/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-10"], name: "ルートイングランティア羽生SPA RESORT", officialUrl: "https://www.hotel-grantia.co.jp/hanyu/", address: "〒348-0054 埼玉県羽生市西3丁目19-3", city: "羽生市",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "温泉付き", "貸切可", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "「華のゆ」入館料（税込）：フリータイム 大人 平日1,000円／土日祝1,200円、子供（小学生まで）平日650円／土日祝750円。21時以降 大人 平日800円／土日祝1,000円、子供 平日550円／土日祝650円", "https://hotel-grantia.co.jp/hanyu/spa/"),
      factNov14("料金", "岩盤浴400円（専用着・タオル付き）。貸切風呂 平日1,100円・土日祝1,300円（1時間・要予約）", "https://hotel-grantia.co.jp/hanyu/spa/"),
      factNov14("営業時間", "岩盤浴の営業時間 10:00～23:30（最終受付22:30）", "https://hotel-grantia.co.jp/hanyu/spa/"),
      factNov14("設備", "スーパー健康ランド「華のゆ」は羽生温泉・源泉かけながし（泉質：ナトリウム－炭酸水素塩・塩化物温泉）。内風呂（圧注浴・貸切風呂）、露天風呂（ごろりん湯・寝湯・活性石風呂・座湯・壺風呂）あり", "https://hotel-grantia.co.jp/hanyu/spa/"),
      factNov14("設備", "高温サウナ・ミストサウナ・岩盤浴（女性専用スペースあり）を完備。タオル類の貸出あり（フェイスタオル100円・バスタオル200円・タオルセット300円、料金は税込）", "https://hotel-grantia.co.jp/hanyu/spa/"),
      factNov14("水風呂", "水風呂あり（内風呂エリアに設置）", "https://hotel-grantia.co.jp/hanyu/spa/"),
      factNov14("利用条件", "日帰り入浴可（入館料制）。宿泊者はチェックイン手続き後12時から入浴可、チェックアウト日は10時以降入浴不可。チェックアウト後の利用は通常の日帰り入浴として入館料を精算", "https://hotel-grantia.co.jp/hanyu/spa/"),
      { label: "大浴場・サウナ", value: "10:00～24:00", sourceUrl: "https://www.hotel-grantia.co.jp/hanyu/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-11"], name: "ホテルルートインGrand三沢-EAST COURT-", officialUrl: "https://www.route-inn.co.jp/hotel_list/aomori/index_hotel_id_741/", address: "〒033-0011 青森県三沢市幸町一丁目10番1号", city: "三沢市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "光明石人工温泉の大浴場を完備。サウナあり（公式サイトの設備案内）。2025年8月20日開業、全259室", "https://www.route-inn.co.jp/hotel_list/aomori/index_hotel_id_741/"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/aomori/index_hotel_id_741/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-12"], name: "ホテルルートイン島田吉田インター", officialUrl: "https://www.route-inn.co.jp/hotel_list/shizuoka/index_hotel_id_26/", address: "〒427-0104 静岡県島田市井口1194", city: "島田市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場の利用時間 15:00～2:00／5:00～10:00", "https://www.route-inn.co.jp/datas/files/2026/04/10/f0290c86ee2f389528dcf59914ad1604f387f4e6.pdf"),
      factNov14("設備", "活性石人工温泉大浴場（総客室数119室）。男性大浴場ではサウナも利用可", "https://www.route-inn.co.jp/datas/files/2026/04/10/f0290c86ee2f389528dcf59914ad1604f387f4e6.pdf"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/shizuoka/index_hotel_id_26/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-13"], name: "ホテルルートイン千葉浜野-東京湾岸道-", officialUrl: "https://www.route-inn.co.jp/hotel_list/chiba/index_hotel_id_674/", address: "〒260-0824 千葉県千葉市中央区浜野町1025ｰ110", city: "千葉市",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "大浴場・サウナあり（公式サイトの設備案内。全329室）", "https://www.route-inn.co.jp/hotel_list/chiba/index_hotel_id_674/"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/chiba/index_hotel_id_674/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-14"], name: "ホテルルートインGrand佐久-佐久平駅南-", officialUrl: "https://www.route-inn.co.jp/hotel_list/nagano/index_hotel_id_780/", address: "〒385-0022 長野県佐久市岩村田5513番地1", city: "佐久市",
    features: ["水風呂あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "天然温泉の大浴場を完備。浴場内にはサウナ・水風呂も完備（公式サイトの開業お知らせ）。2026年6月22日開業、全194室", "https://www.route-inn.co.jp/hotel_list/nagano/index_hotel_id_780/"),
      factNov14("水風呂", "水風呂あり（浴場内に完備）", "https://www.route-inn.co.jp/hotel_list/nagano/index_hotel_id_780/"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/nagano/index_hotel_id_780/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-15"], name: "ホテルルートインGrand上田駅前", officialUrl: "https://www.route-inn.co.jp/hotel_list/nagano/index_hotel_id_634/", address: "〒386-0025 長野県上田市天神一丁目5番7号", city: "上田市",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "大浴場・サウナあり（公式サイトの設備案内。全199室）。女性大浴場あり", "https://www.route-inn.co.jp/hotel_list/nagano/index_hotel_id_634/"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/nagano/index_hotel_id_634/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-16"], name: "ホテルルートイン大牟田", officialUrl: "https://www.route-inn.co.jp/hotel_list/fukuoka/index_hotel_id_745/", address: "〒836-0037 福岡県大牟田市岬町6番地67", city: "大牟田市",
    features: ["外気あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場の利用時間 15:00～2:00／5:00～10:00", "https://www.route-inn.co.jp/datas/files/2025/11/05/cea26a645ed684054260e24ba90874ee2e89f5ef.pdf"),
      factNov14("設備", "男女別大浴場（露天風呂・サウナあり）。総客室数328室、2025年12月26日オープン", "https://www.route-inn.co.jp/datas/files/2025/11/05/cea26a645ed684054260e24ba90874ee2e89f5ef.pdf"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/fukuoka/index_hotel_id_745/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-17"], name: "ルートイングランティア福岡宮若-脇田温泉-", officialUrl: "https://www.hotel-grantia.co.jp/wakamiya/", address: "〒822-0133 福岡県宮若市脇田778-1", city: "宮若市",
    features: ["温泉付き", "外気あり", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り入館料 大人平日800円・小人500円（3歳〜小学生未満300円）、土日祝は100円アップ。岩盤浴500円、レンタルバスタオル100円。宿泊者は入浴無料", "https://www.hotel-grantia.co.jp/wakamiya/spa/"),
      factNov14("営業時間", "日帰り入浴 10:00～23:00（宿泊者は6:00〜9:00も利用可）", "https://www.hotel-grantia.co.jp/wakamiya/spa/"),
      factNov14("定休日", "年中無休", "https://www.hotel-grantia.co.jp/wakamiya/spa/"),
      factNov14("設備", "脇田温泉「華の湯」は源泉掛け流しの天然温泉（アルカリ性単純温泉）。サウナ（TV付き）、露天風呂、内湯あり", "https://www.hotel-grantia.co.jp/wakamiya/spa/"),
      factNov14("利用条件", "日帰り入浴可（宿泊者は入浴無料）", "https://www.hotel-grantia.co.jp/wakamiya/spa/"),
      { label: "大浴場・サウナ", value: "6:00～9:00 / 10:00～23:00", sourceUrl: "https://www.hotel-grantia.co.jp/wakamiya/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-18"], name: "ホテルルートインGrand旭川駅前", officialUrl: "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_635/", address: "〒070-0030 北海道旭川市宮下通8丁目1962-1", city: "旭川市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場利用時間 15:00～2:00／5:00～10:00", "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_635/"),
      factNov14("設備", "天人峡天然温泉の大浴場「旅人の湯」", "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_635/"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_635/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-19"], name: "ホテルルートインGrand室蘭", officialUrl: "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_666/", address: "〒050-0074 北海道室蘭市中島町2丁目22-2", city: "室蘭市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "天然温泉の大浴場とサウナあり（公式トップページの施設アイコン表示による）", "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_666/"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_666/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-20"], name: "ホテルルートインGrand北見駅前", officialUrl: "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_644/", address: "〒090-0040 北海道北見市大通西1丁目2-1", city: "北見市",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "大浴場あり（女性大浴場へのReFa設置を公式お知らせで案内）", "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_644/"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_644/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-21"], name: "ホテルルートイン帯広駅前", officialUrl: "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_68/", address: "〒080-0013 北海道帯広市西三条南11丁目8番地", city: "帯広市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "15:00～26:00／5:00～10:00", "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_68/"),
      factNov14("設備", "1Fに天然モール温泉浴場「旅人の湯」（サウナ付）", "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_68/"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/hokkaido/index_hotel_id_68/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-22"], name: "ルートイングランティア函館駅前", officialUrl: "https://www.hotel-grantia.co.jp/hakodate-st/", address: "〒040-0063 北海道函館市若松町21-3", city: "函館市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場利用時間 15:00～2:00／5:00～10:00", "https://www.hotel-grantia.co.jp/hakodate-st/spa/"),
      factNov14("設備", "最上階13階に源泉掛け流しの天然温泉「旅人の湯」。サウナは男女ともあり（定員2名程、利用時間は大浴場と同じ）", "https://www.hotel-grantia.co.jp/hakodate-st/spa/"),
      factNov14("水風呂", "水風呂はございません（公式明記。サウナ入口横にシャワーブースの案内あり）", "https://www.hotel-grantia.co.jp/hakodate-st/spa/"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.hotel-grantia.co.jp/hakodate-st/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-nono-01"], name: "天然温泉 花波の湯 御宿 野乃大阪淀屋橋", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/nono_yodoyabashi/", address: "〒541-0041 大阪府大阪市中央区北浜2丁目5番19号", city: "大阪市",
    features: ["ドライサウナ", "水風呂あり", "温泉付き", "外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "最上階13Fに男女別天然温泉大浴場「花波の湯」。生駒山の天然ラドン温泉をタンクローリーで運搬。男女とも内湯、外湯（壺湯）、高温ドライサウナ、水風呂を設置", "https://dormy-hotels.com/dormyinn/hotels/nono_yodoyabashi/"),
      factNov14("水風呂", "男女とも水風呂を設置", "https://dormy-hotels.com/dormyinn/hotels/nono_yodoyabashi/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～翌5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/nono_yodoyabashi/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-nono-02"], name: "天然温泉 花風の湯 御宿 野乃なんば", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/nono_nanba/", address: "〒542-0073 大阪府大阪市中央区日本橋1-4-18", city: "大阪市",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "天然温泉の大浴場「花風の湯」", "https://dormy-hotels.com/dormyinn/hotels/nono_nanba/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/nono_nanba/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-nono-03"], name: "天然温泉 凌雲の湯 御宿 野乃浅草", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/nono_asakusa/", address: "〒111-0032 東京都台東区浅草2-7-20", city: "台東区",
    features: ["水風呂あり", "温泉付き", "外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "地下1階に男女別天然温泉大浴場「凌雲の湯」。内湯は自家源泉の黒湯。ほかに壺風呂、サウナ、水風呂があり、外気を感じながらの壺湯も利用できる", "https://dormy-hotels.com/dormyinn/hotels/nono_asakusa/"),
      factNov14("水風呂", "水風呂あり", "https://dormy-hotels.com/dormyinn/hotels/nono_asakusa/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～早朝5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/nono_asakusa/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-nono-04"], name: "天然温泉 凌天の湯 御宿 野乃浅草別邸", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/nono_asakusabettei/", address: "〒111-0032 東京都台東区浅草2-7-26", city: "台東区",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "地下1階に男女別天然温泉大浴場「凌天の湯」。内湯は自家源泉の黒湯で、ジェットバス、壺風呂、セルフロウリュのサウナ、水風呂がある", "https://dormy-hotels.com/dormyinn/hotels/nono_asakusabettei/"),
      factNov14("水風呂", "水風呂あり（天然温泉大浴場「凌天の湯」内）", "https://dormy-hotels.com/dormyinn/hotels/nono_asakusabettei/"),
      { label: "大浴場・サウナ", value: "15：00～翌10：00（サウナのみ深夜1：00～翌5：00は利用休止）", sourceUrl: "https://dormy-hotels.com/dormyinn/hotels/nono_asakusabettei/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-mitsuigarden-01"], name: "三井ガーデンホテル福岡祇園", officialUrl: "https://www.gardenhotels.co.jp/fukuoka-gion/",
    features: ["スチーム(ミスト)サウナ", "外気あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場 15:00 - 25:00、6:00 - 9:00", "https://corp.gardenhotels.co.jp/pdf/MGH_News_20190618.pdf"),
      factNov14("設備", "最上階13階の大浴場「Roof Top Living Bath」。人工温泉の内湯や人工炭酸泉の露天風呂に加え、寝湯やスチームサウナを設けている", "https://corp.gardenhotels.co.jp/pdf/MGH_News_20190618.pdf"),
      factNov14("利用条件", "大浴場は宿泊者専用（日帰り入浴は不可）", "https://corp.gardenhotels.co.jp/pdf/MGH_News_20190618.pdf"),
    ],
  },
  {
    ids: ["manual-tokyo-suehiroyu"], name: "すえひろ湯", officialUrl: "https://suehiroyu.tokyo/",
    features: ["水風呂あり"],
    facts: [
      factNov14("営業時間", "平日 15:00-25:00／土日祝 10:00-25:00（最終入店24:30）", "https://suehiroyu.tokyo/"),
      factNov14("定休日", "定休日なし（2026年6月より定休日を廃止し、毎日営業）", "https://suehiroyu.tokyo/"),
      factNov14("設備", "アツアツの格納式ストーブサウナ、キンキンに冷えた水風呂、風呂上がりに飲めるクラフトビール", "https://suehiroyu.tokyo/"),
      factNov14("水風呂", "水風呂あり", "https://suehiroyu.tokyo/"),
    ],
  },
  {
    ids: ["manual-fukuoka-totopa-hakata"], name: "TOTOPA 博多駅前店", officialUrl: "https://totopa.jp/hakata/",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "基本料金（2時間）2,480円（税込）、以降30分ごと+500円（税込）、土日祝・特定日+500円（税込）。タオル・アメニティ、ソフトドリンク飲み放題は入館料に含まれる", "https://totopa.jp/hakata/"),
      factNov14("営業時間", "営業時間：8:00 - 23:00（最終受付22:00）", "https://totopa.jp/hakata/"),
      factNov14("設備", "3階は男性フロア、4階は女性フロア。各フロアにウエスタンレッドシダーを一本丸ごと使った「千年サウナ」、水風呂、湯船をひとつずつ備え、外気浴・内気浴スペースもある", "https://totopa.jp/hakata/"),
      factNov14("水風呂", "男性フロアは頭まで浸かることを推奨する水深120cmの水風呂。女性フロアにも水風呂あり", "https://totopa.jp/hakata/"),
      factNov14("利用条件", "完全キャッシュレス（現金不可）。利用にはLINEアプリの友だち追加からの会員登録が必要。予約不要のウォークイン制", "https://totopa.jp/hakata/"),
    ],
  },
  {
    ids: ["manual-hokkaido-biaclyn-hakodate"], name: "HOTEL 白林 HAKODATE", officialUrl: "https://www.biaclyn.com/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "宿泊可"],
    facts: [
      factNov14("営業時間", "ウェルネススペース OPEN 9:00-24:00", "https://www.biaclyn.com/"),
      factNov14("設備", "ウェルネス棟の「サンクチュアリウェルネス」には、暖炉、ジャグジー、小プール、ドライサウナ、ミストサウナを設置", "https://www.biaclyn.com/wellness-space/"),
    ],
  },
  {
    ids: ["manual-tokyo-koganeyu-shinjuku"], name: "黄金湯 新宿", officialUrl: "https://koganeyu.com/shinjuku",
    features: ["セルフロウリュ", "オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴料金 大人 600円（中学生以上）、小学生 200円、幼児 100円。サウナは別料金のオプション（2時間制・時間帯により料金が異なる）。貸しタオルセット +300円〜", "https://koganeyu.com/shinjuku"),
      factNov14("営業時間", "平日・土日祝 12:30 - 24:00（8月26日〜 12:30 - 翌9:30）", "https://koganeyu.com/shinjuku"),
      factNov14("定休日", "第一・第三火曜日", "https://koganeyu.com/shinjuku"),
      factNov14("設備", "男性サウナ「THE ABYSS」は2基のオートロウリュサウナ、女性サウナ「THE COCOON」はセルフロウリュ。高濃度炭酸泉、薬湯、内水風呂、外気浴スペースあり", "https://koganeyu.com/shinjuku/facility"),
      factNov14("水風呂", "内水風呂 17度（地下水掛け流し）。サウナ用に約15〜16℃の天然地下水を使用した水風呂「THE POTION」", "https://koganeyu.com/shinjuku/facility"),
    ],
  },
  {
    ids: ["st-hokkaido-4588"], name: "プレミアホテル-CABIN-札幌", officialUrl: "http://cabin.kenhotels.com/sapporo/cn/",
    features: ["セルフロウリュ", "ロウリュあり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "天然温泉スパ（地下1階）：宿泊客13:30～翌10:00、日帰り客13:30～23:00（最終入場22:00）", "http://cabin.kenhotels.com/sapporo/cn/"),
      factNov14("設備", "天然温泉スパとリラクゼーションサロン（地下1階）", "http://cabin.kenhotels.com/sapporo/cn/"),
    ],
  },
  {
    ids: ["st-hokkaido-1151"], name: "北見湯元のつけ乃湯", officialUrl: "https://notsuke-tai.com/index.html",
    features: [],
    facts: [
      factNov14("料金", "大人（12歳以上）490円、小人（6～12歳未満）150円、幼児（6歳未満）80円。回数券（11枚綴り）4,900円※税込", "https://notsuke-tai.com/index.html"),
      factNov14("営業時間", "11:00～22:00（受付終了時間21:30）", "https://notsuke-tai.com/index.html"),
      factNov14("定休日", "無休（年末年始は営業時間が変更になるため要問合せ）", "https://notsuke-tai.com/index.html"),
    ],
  },
  {
    ids: ["st-iwate-68"], name: "一関温泉 山桜 桃の湯", officialUrl: "https://www.momonoyu.co.jp/",
    features: ["水風呂あり", "外気あり", "温泉付き", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "2時間 大人：平日（月～金）850円、土曜・日曜・祝祭日1,180円／子ども：平日630円、土日祝960円。1日フリー 大人1,950円、子ども1,510円", "https://www.momonoyu.co.jp/guide"),
      factNov14("営業時間", "日帰り入浴 5:00～23:00（最終受付22:00）", "https://www.momonoyu.co.jp/guide"),
      factNov14("設備", "源泉かけ流しの17種類のお風呂があり、大浴場にサウナ（大型TV付）と水風呂、露天風呂、岩盤浴（別途料金）がある", "https://www.momonoyu.co.jp/"),
      factNov14("水風呂", "サウナ（大型TV付）のある大浴場に水風呂がある", "https://www.momonoyu.co.jp/"),
      factNov14("利用条件", "2時間コースはタオル・バスタオルが別途料金。1日フリーはタオル・バスタオル・専用館内着付き", "https://www.momonoyu.co.jp/guide"),
    ],
  },
  {
    ids: ["st-iwate-3881"], name: "開運の湯", officialUrl: "https://kaiunnoyu.info/",
    features: ["水風呂あり", "温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "サービスデー：プル釜デー（毎週火曜日）・レディースデー（水曜日）・メンズデー（木曜日）はいずれも1,150円（税込）。タオルセット貸出は別途220円", "https://kaiunnoyu.info/"),
      factNov14("設備", "本場韓国式サウナ「プル釜」と岩盤浴コースがある。天然ラドン温泉の大浴場・露天風呂を備える", "https://kaiunnoyu.info/"),
      factNov14("水風呂", "水風呂がある（2025年10月8日付の公式お知らせで水風呂の温度変更を案内）", "https://kaiunnoyu.info/"),
      factNov14("利用条件", "支払いは現金のみ（電子マネー・クレジットカード不可）。入れ墨・タトゥー（シール類を含む）のある方の入浴は不可", "https://kaiunnoyu.info/"),
    ],
  },
  {
    ids: ["st-iwate-1316"], name: "悠久の湯平泉温泉", officialUrl: "https://www.town.hiraizumi.iwate.jp/index.cfm/25,0,125,271,html",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "使用料（令和7年4月1日改定）：3時間以下 大人700円、3時間を超える時間 大人1,000円。年末年始を除く午後7時以降は大人500円。バスタオル1枚150円", "https://hi-hp-production.s3.ap-northeast-1.amazonaws.com/wp-content/uploads/2024/08/27161502/1212T32%E5%B9%B3%E6%B3%89%E7%94%BAR06%E5%B9%B412%E6%9C%88%E4%BC%9A%E8%AD%B0%E2%96%A0%EF%BC%93%E5%8F%B7%EF%BC%8D%E6%9C%AC%E6%96%87.pdf"),
    ],
  },
  {
    ids: ["st-miyagi-4482"], name: "MARUMORI-SAUNA", officialUrl: "https://www.marumori-sauna.jp/",
    features: ["薪サウナ", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "貸切可"],
    facts: [
      factNov14("料金", "一棟貸切：2名24,000円／3名30,000円／4名40,000円／5名50,000円／6名57,000円／7名63,000円／8名72,000円", "https://totonoibiyori.pref.miyagi.jp/?facility_information=marumori-sauna"),
      factNov14("営業時間", "10:00〜17:00", "https://totonoibiyori.pref.miyagi.jp/?facility_information=marumori-sauna"),
      factNov14("設備", "薪ストーブの熱で汗をかき、清流にダイブして冷やし、森の外気浴で休むアウトドアサウナ。セルフロウリュの案内もある", "https://totonoibiyori.pref.miyagi.jp/?facility_information=marumori-sauna"),
      factNov14("水風呂", "水風呂は川（清流）を利用し、サウナ後は清流にダイブできる", "https://totonoibiyori.pref.miyagi.jp/?facility_information=marumori-sauna"),
      factNov14("利用条件", "一棟貸切のプライベートサウナ（貸切や少人数での利用も可能）", "https://totonoibiyori.pref.miyagi.jp/?facility_information=marumori-sauna"),
    ],
  },
  {
    ids: ["st-miyagi-277"], name: "キュア国分町", officialUrl: "http://cure-kokubuncho.jp/",
    features: ["宿泊可"],
    facts: [
      factNov14("料金", "標準2,800円（入館から24時間まで）、3時間パック1,700円、5時間パック2,200円。土日祝・特定日は各プラン100円加算。0:00～5:00の入館・滞在は深夜料金800円が別途", "https://totonoibiyori.pref.miyagi.jp/?facility_information=%e3%82%b5%e3%82%a6%e3%83%8a%ef%bc%86%e3%82%ab%e3%83%97%e3%82%bb%e3%83%ab-%e3%82%ad%e3%83%a5%e3%82%a2%e5%9b%bd%e5%88%86%e7%94%ba"),
      factNov14("営業時間", "24時間営業", "https://totonoibiyori.pref.miyagi.jp/?facility_information=%e3%82%b5%e3%82%a6%e3%83%8a%ef%bc%86%e3%82%ab%e3%83%97%e3%82%bb%e3%83%ab-%e3%82%ad%e3%83%a5%e3%82%a2%e5%9b%bd%e5%88%86%e7%94%ba"),
      factNov14("利用条件", "男性専用（「男性専科」の24時間営業・カプセルホテル併設型の温浴サウナ施設）", "https://totonoibiyori.pref.miyagi.jp/?facility_information=%e3%82%b5%e3%82%a6%e3%83%8a%ef%bc%86%e3%82%ab%e3%83%97%e3%82%bb%e3%83%ab-%e3%82%ad%e3%83%a5%e3%82%a2%e5%9b%bd%e5%88%86%e7%94%ba"),
    ],
  },
  {
    ids: ["st-miyagi-1441"], name: "ホテルモントレ仙台 サラ・テレナ", officialUrl: "https://www.hotelmonterey.co.jp/sendai/spa/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "12:00～23:00（最終受付22:00）。朝風呂6:00～9:00（最終受付8:30、リラクゼーションスペース利用不可）", "https://www.hotelmonterey.co.jp/sendai/spa/"),
      factNov14("定休日", "スパ休館日あり（2026年は12月7日、2027年は1月4日・2月1日・3月1日など。公式ページに年間日程を掲載）", "https://www.hotelmonterey.co.jp/sendai/spa/"),
      factNov14("設備", "天然温泉（ナトリウム-塩化物泉、加水・加温・循環ろ過式）にサウナ、ジェットスパ、リラクゼーションスペースを完備", "https://www.hotelmonterey.co.jp/sendai/spa/"),
      factNov14("利用条件", "宿泊者限定で日帰り利用はできない。利用時は客室のタオルを持参。入れ墨・タトゥーのある方は入場不可", "https://www.hotelmonterey.co.jp/sendai/spa/"),
    ],
  },
  {
    ids: ["st-miyagi-1410"], name: "大江戸温泉物語 仙台コロナの湯", officialUrl: "https://www.korona.co.jp/Onsen/sen/index.asp",
    features: ["ロウリュあり", "温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入泉料 大人（中学生以上）平日1,200円／土日祝1,400円（会員 平日1,100円／土日祝1,300円）、小人（3歳～小学生）平日550円／土日祝650円、2歳以下無料。別途入湯税70円", "https://www.korona.co.jp/onsen/basic/sen/224"),
      factNov14("営業時間", "コロナの湯 全日 6:00～翌2:00（最終受付 翌1:30）。フォーレスト（岩盤浴エリア）は6:00～翌1:00", "https://www.korona.co.jp/onsen/basic/sen/224"),
      factNov14("定休日", "4ヶ月に一度メンテナンス休館日あり（年3回不定休）", "https://www.korona.co.jp/onsen/basic/sen/224"),
      factNov14("設備", "天然温泉の大浴場に加え、フォーレスト（3種の岩盤浴ゾーン、ロウリュアトラクション、クールルーム、コミックコーナー等）がある", "https://www.korona.co.jp/onsen/basic/sen/224"),
      factNov14("利用条件", "刺青、タトゥー、タトゥーシールのある方は利用不可。レンタルタオルセット（バス・フェイス）380円", "https://www.korona.co.jp/onsen/basic/sen/224"),
    ],
  },
  {
    ids: ["st-miyagi-1424"], name: "天然温泉青葉の湯ドーミーイン仙台ANNEX", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/sendai_ax/spa/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "3階に男女別天然温泉大浴場「青葉の湯」。地下1200mからくみ上げる自家温泉で、内湯・外湯ともに高張性泉", "https://dormy-hotels.com/dormyinn/hotels/sendai_ax/"),
    ],
  },
  {
    ids: ["st-akita-1283"], name: "にしめ湯っ娘ランド", officialUrl: "https://nishimeyukkolandyou.wixsite.com/nishime-yukkoland",
    features: ["宿泊可"],
    facts: [
      factNov14("営業時間", "24時間営業", "https://common3.pref.akita.lg.jp/kosodate/yutai-info/shops/yus658"),
      factNov14("定休日", "定休日なし（24時間営業・年中無休）", "https://common3.pref.akita.lg.jp/kosodate/yutai-info/shops/yus658"),
    ],
  },
  {
    ids: ["st-akita-4579"], name: "鹿角トレーニングセンター アルパス", officialUrl: "https://r.goope.jp/alpas/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "日帰り温泉（展望温泉）通常13:00～21:00（最終受付 20:15）", "https://r.goope.jp/alpas/"),
      factNov14("定休日", "休館日は4月～11月の毎月第2・第4月曜日（祝日の場合は翌日）", "https://r.goope.jp/alpas/"),
    ],
  },
  {
    ids: ["st-akita-1284"], name: "鶴舞温泉", officialUrl: "http://tsurumai.fun/",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "入湯料（消費税込）中学生以上65歳未満600円、65歳以上600円、身体障害者（手帳所持者）500円、小人（小学生）300円", "http://tsurumai.fun/"),
      factNov14("営業時間", "入浴は午前9時から午後9時まで", "http://tsurumai.fun/"),
      factNov14("定休日", "休館日：毎月第3木曜日（休日に当たる場合は前日）", "http://tsurumai.fun/"),
      factNov14("設備", "大浴場と露天風呂からは日本庭園を眺められる。また、気泡風呂、サウナも完備している", "http://tsurumai.fun/"),
    ],
  },
  {
    ids: ["st-akita-272"], name: "天王温泉くらら", officialUrl: "https://michinoeki-tenno.jp/spa/",
    features: ["水風呂あり"],
    facts: [
      factNov14("料金", "入浴料金（税込）大人500円、小学生200円、小学生未満無料。貸しタオル250円。入浴回数券（11回分）5,000円", "https://michinoeki-tenno.jp/spa/"),
      factNov14("営業時間", "10:00～20:00（最終受付19:30）。原油価格高騰に伴い営業時間を短縮中", "https://michinoeki-tenno.jp/spa/"),
      factNov14("定休日", "毎月第2月曜日（祝日の場合は翌日）。メンテナンスのため変更になる場合がある", "https://michinoeki-tenno.jp/spa/"),
      factNov14("設備", "和と洋の2種類の大浴場をはじめ、低温・高温の2種類のサウナ、露天風呂（洋風はジャグジー、和風は岩風呂）がある", "https://michinoeki-tenno.jp/spa/"),
      factNov14("水風呂", "大浴場に水風呂（大・小）あり（和風・洋風とも）", "https://michinoeki-tenno.jp/spa/"),
    ],
  },
  {
    ids: ["st-yamagata-1378"], name: "べに花温泉 ひなの湯", officialUrl: "http://www.hinanoyu.com/",
    features: ["温泉付き", "個室", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴料 一般400円・小学生100円、回数券4,000円（2026年4月1日に町条例により改定。公式Instagramの料金改定のお知らせによる）", "https://www.instagram.com/p/DSrYUinkzKQ/"),
      factNov14("定休日", "月1回の休館日あり（公式Instagramで2026年10月8日（木）が休館日、翌9日6:00から営業再開と案内）", "https://www.instagram.com/p/DeLCeIZT0D6/"),
      factNov14("設備", "泉質はナトリウム塩化物泉。入浴介助が必要な方向けの「ひな風呂」、44畳の休憩室、8畳の個室から最大100名までの宴会場、レストラン、マッサージあり", "http://www.hinanoyu.com/"),
    ],
  },
  {
    ids: ["st-yamagata-208"], name: "ゆ〜チェリー", officialUrl: "http://www.yu-cherry.com/",
    features: ["温泉付き", "外気あり", "サ飯あり"],
    facts: [
      factNov14("料金", "大人350円、小人（1才〜小学生）150円、回数券（11回分）3,500円", "https://yamagatakanko.com/attractions/detail_10824.html"),
      factNov14("営業時間", "6:00～22:00", "https://yamagatakanko.com/attractions/detail_10824.html"),
      factNov14("定休日", "毎月第1月曜日（祝日の場合は翌日）", "https://yamagatakanko.com/attractions/detail_10824.html"),
      factNov14("設備", "男女それぞれに浴槽が3つあり、全て泉質の異なる100%源泉掛け流し。露天風呂、サウナ、売店、食堂、休憩室（有料）あり", "https://yamagatakanko.com/attractions/detail_10824.html"),
    ],
  },
  {
    ids: ["st-yamagata-1391"], name: "添川温泉しらさぎ荘", officialUrl: "https://www.iide-shirasagi.com/",
    features: [],
    facts: [
      factNov14("営業時間", "9:00〜21:00（最終受付20:30）。公式Instagramの年末年始案内に記載の通常営業時間", "https://www.instagram.com/p/DS5uZj-k7Cp/"),
      factNov14("料金", "飯豊町在住の75歳以上は入浴料300円（身分証の提示が必要）。一般料金は公式ページで確認できず", "https://www.instagram.com/p/DS5uZj-k7Cp/"),
    ],
  },
  {
    ids: ["st-fukushima-3382"], name: "スパリゾートハワイアンズ　モノリスタワー", officialUrl: "https://www.hawaiians.co.jp/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "外気あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場 14:00～2:00、4:00～9:00（大浴場男女入れ替え制）", "https://www.hawaiians.co.jp/stay/monolith/spa/"),
      factNov14("設備", "大浴場「すみの湯」「うずの湯」。泉質は硫黄泉、源泉かけ流し・加水なし。全身浴／半身浴／外気浴／歩行浴／スチームサウナ／ドライサウナ／打たせ湯／浅瀬の湯", "https://www.hawaiians.co.jp/stay/monolith/spa/"),
    ],
  },
  {
    ids: ["st-ibaraki-1644"], name: "いちの湯 水戸店", officialUrl: "http://itinoyu.com/mito/",
    features: ["塩サウナ", "水風呂あり", "外気あり"],
    facts: [
      factNov14("料金", "大人：平日900円・土日祝日1000円／子供：平日450円・土日祝日500円（4歳～小学校6年生まで）／朝風呂（10時までにご入館の方）大人800円", "https://itinoyu.com/calendar/mito/202610.pdf"),
      factNov14("営業時間", "平日 9:00～22:00（最終入場21:00）／土日祝日 7:00～24:00（最終入場23:00）", "https://itinoyu.com/calendar/mito/202610.pdf"),
      factNov14("定休日", "設備点検の為、年数回休館日あり", "https://itinoyu.com/calendar/mito/202610.pdf"),
      factNov14("設備", "スタジアム・サウナと塩サウナの2種類のサウナ", "https://itinoyu.com/mito/sauna.html"),
      factNov14("水風呂", "水風呂あり。サウナ後は露天での外気浴（休憩）を案内", "https://itinoyu.com/mito/sauna.html"),
    ],
  },
  {
    ids: ["st-ibaraki-1661"], name: "鹿島セントラル天然温泉美人の湯 ゆの華", officialUrl: "https://art-kashima-central.com/hotsprings/",
    features: ["ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "タオルレンタルあり", "サ飯あり"],
    facts: [
      factNov14("営業時間", "月〜金 11:00〜25:00（最終入店24:30）／土日祝 6:00〜25:00（最終入店24:30）", "https://art-kashima-central.com/hotsprings/"),
      factNov14("料金", "入館料：大人（中学生以上）平日1,000円・土日祝1,200円、小人（4歳〜小学生）平日450円・土日祝600円、3歳以下無料", "https://art-kashima-central.com/hotsprings/"),
      factNov14("設備", "ロウリュサウナ（Harvia製ストーブ、約33㎡、日替わりアロマロウリュ開催）、露天風呂2種（日替わり男女入れ替え制）、内風呂（温泉大浴槽・ジェットバス・寝湯）。自家源泉100%の天然温泉", "https://art-kashima-central.com/hotsprings/"),
      factNov14("水風呂", "水風呂あり（サウナ→水風呂→外気浴の「ととのう3STEP」を案内）", "https://art-kashima-central.com/hotsprings/"),
      factNov14("利用条件", "日帰り入浴可（入館料制）。入れ墨・タトゥーのある方は大浴場の利用不可。有料貸出タオルあり（フェイス100円/バス200円/セット300円）", "https://art-kashima-central.com/hotsprings/"),
    ],
  },
  {
    ids: ["st-tochigi-1519"], name: "極楽湯宇都宮店", officialUrl: "https://www.gokurakuyu.ne.jp/tempo/utsunomiya/index.html",
    features: [],
    facts: [
      factNov14("料金", "大人 平日780円・土日祝830円、子供（4歳〜小学生）450円、3歳以下無料、回数券10枚綴り7,000円（2026年5月13日改定）", "https://www.instagram.com/p/DYJB9z2SUeJ/"),
      factNov14("営業時間", "午前8時～深夜3時（最終受付2:20）", "https://page.line.me/hnk1055b"),
      { label: "施設営業時間", value: "午前8:00～深夜3:00 ※最終受付2:20", sourceUrl: "https://www.gokurakuyu.ne.jp/tempo/utsunomiya/index.html", checkedAt: "2026-10-19" },
    ],
  },
  {
    ids: ["st-gumma-1604"], name: "ホテルグリーンプラザ軽井沢", officialUrl: "https://www.hgp.co.jp/inf/Z10/hgp/",
    features: ["温泉付き", "外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "自家源泉の天然温泉大浴場「暁の湯」（内湯・露天風呂）", "https://home.kingsoft.jp/news/pr/atpress/568758.html"),
    ],
  },
  {
    ids: ["st-saitama-57"], name: "バーデン・ガーデン", officialUrl: "https://badengarden.com/",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "24時間営業（宿泊はチェックイン16:00～／チェックアウト10:00まで）", "https://badengarden.com/"),
      factNov14("料金", "ショート（10:00～・3時間）2,100円、レギュラー（10:00～深夜2時まで）2,600円、深夜料金（深夜2時以降）+1,500円。午前3時～5時は清掃のため入浴不可", "https://badengarden.com/"),
      factNov14("料金", "朝得（5:00～10:00入館・4時間）タオルのみ1,400円・館内着付き1,600円、延長300円/1時間（3時間まで）", "https://www.instagram.com/p/DdDzX1MTPX1/"),
      factNov14("設備", "フィンランド直輸入のケロサウナ（設定温度92℃前後、オートロウリュは20分ごとに稼働）、日本初のカルターサウナ、露天風呂、不感風呂、ジェット風呂（41℃前後）", "https://badengarden.com/"),
      factNov14("水風呂", "備長炭タワーを設置した水風呂（温度は12℃台）", "https://badengarden.com/"),
      factNov14("利用条件", "男性専用", "https://badengarden.com/"),
    ],
  },
  {
    ids: ["st-saitama-1698"], name: "極楽湯上尾店", officialUrl: "https://www.gokurakuyu.ne.jp/tempo/ageo/index.html",
    features: ["温泉付き", "外気あり"],
    facts: [
      factNov14("営業時間", "平日 9:00～翌2:00、土日祝 7:00～翌2:00（最終入店1:20）", "https://www.instagram.com/gokurakuyu_ageo/"),
      factNov14("設備", "天然温泉の極楽湯上尾店。露天岩風呂、炭酸ひのき風呂、くりぬき風呂、温鉱石うたた寝湯、ジェットバスなど多彩。お食事処、ほぐし処、カットサロンなどの設備も充実", "https://page.line.me/wcf6363n"),
    ],
  },
  {
    ids: ["st-saitama-4935"], name: "祭の湯 個室サウナ「月-tsuki-」「滝-taki-」", officialUrl: "https://www.seibu-leisure.co.jp/matsuri/index.html",
    features: ["個室", "貸切可", "タオルレンタルあり", "温泉付き"],
    facts: [
      factNov14("料金", "入館料 平日 大人1,100円・子供700円、土日祝・特定日 大人1,380円・子供800円。個室サウナ（90分・1部屋）平日3,000円、土日祝・特定日5,000円", "https://www.seibu-leisure.co.jp/matsuri/faq/index.html"),
      factNov14("営業時間", "温泉エリア 10:00～22:00（最終受付21:30）、土日祝は朝風呂6:00～9:00あり。個室サウナ 10:30～21:10（最終受付19:40）", "https://www.seibu-leisure.co.jp/matsuri/faq/index.html"),
      factNov14("定休日", "定休日なし（臨時休業・メンテナンス休業を除き毎日営業）", "https://www.seibu-leisure.co.jp/matsuri/faq/index.html"),
      factNov14("利用条件", "個室サウナ「月」「滝」はフロントでの当日予約または事前予約が必要。料金にサウナ着とレンタルタオル（2名分）を含む。刺青・タトゥーの方の入館は不可", "https://www.seibu-leisure.co.jp/matsuri/faq/index.html"),
    ],
  },
  {
    ids: ["st-chiba-1780"], name: "君津の湯", officialUrl: "https://www.kimitsu-yu.com/index.html",
    features: ["水風呂あり"],
    facts: [
      factNov14("営業時間", "9:00〜24:00（毎日）", "https://www.furusato-tax.jp/product/detail/12225/5998737"),
      factNov14("設備", "地下600mから湧き出る天然水を使った13種類のお風呂と選べるサウナ。水風呂は地下から汲み上げた水をそのまま使用", "https://www.furusato-tax.jp/product/detail/12225/5998737"),
      factNov14("水風呂", "水風呂あり（地下から汲み上げた天然水をそのまま使用）", "https://www.furusato-tax.jp/product/detail/12225/5998737"),
    ],
  },
  {
    ids: ["st-kanagawa-11"], name: "藤沢　冨士見湯", officialUrl: "http://k-o-i.jp/koten/fujimiyu-sho.html",
    features: [],
    facts: [
      factNov14("営業時間", "15時00分～22時00分", "https://www.city.fujisawa.kanagawa.jp/kourei-s/kenko/kenko/kenko/new_fureai.html"),
      factNov14("定休日", "毎週木曜日", "https://www.city.fujisawa.kanagawa.jp/kourei-s/kenko/kenko/kenko/new_fureai.html"),
      factNov14("料金", "入浴料 大人570円・小学生250円（神奈川県公衆浴場入浴料金の統制額。藤沢市が案内する一般料金、2026年4月1日から）", "https://www.city.fujisawa.kanagawa.jp/kourei-s/kenko/kenko/kenko/new_fureai.html"),
    ],
  },
  {
    ids: ["st-niigata-3890"], name: "いい湯らてい", officialUrl: "http://www.iiyuratei.com/", status: "suspended",
    features: ["温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り入浴 大人900円・小学生600円・小学生未満無料。タオルセットレンタル200円、館内着レンタル200円", "https://niigata-kankou.or.jp/spot/detail_11356.html"),
      factNov14("営業時間", "10時～21時", "https://niigata-kankou.or.jp/spot/detail_11356.html"),
      factNov14("定休日", "毎月第3水曜日", "https://niigata-kankou.or.jp/spot/detail_11356.html"),
      factNov14("営業状況", "休館中（2026年9月25日から。レジオネラ属菌の基準値超過と不適切な衛生管理が判明し、公式サイトに「不適切な衛生管理についてのお詫び」を掲載中。再開時期は未定。料金・営業時間は休館前の通常営業時のもの）", "http://www.iiyuratei.com/"),
    ],
  },
  {
    ids: ["st-niigata-205"], name: "秋葉温泉 花水", officialUrl: "http://www.casui.net/top/",
    features: ["ドライサウナ", "水風呂あり", "外気あり", "温泉付き", "貸切可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "大人(中学生以上) 910円、小人(小学生) 400円", "https://niigata-kankou.or.jp/spot/detail_44496.html"),
      factNov14("営業時間", "10時～21時（最終受付20時30分）", "https://niigata-kankou.or.jp/spot/detail_44496.html"),
      factNov14("定休日", "年中無休", "https://niigata-kankou.or.jp/spot/11334"),
      factNov14("設備", "男性浴室にドライサウナ（約90℃・11名）、女性浴室に遠赤外線サウナ（約77℃・8名）。男女とも屋根付きの露天風呂あり", "https://niigata-kankou.or.jp/spot/detail_44496.html"),
      factNov14("水風呂", "男女各1つ。チラー入りで約15℃（真夏約17℃・真冬約10℃）", "https://niigata-kankou.or.jp/spot/detail_44496.html"),
    ],
  },
  {
    ids: ["st-toyama-2912"], name: "天然温泉 富山 剱の湯 御宿 野乃", officialUrl: "https://dormy-hotels.com/dormyinn/hotels/nono_toyama/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り温泉 朝風呂 大人900円・小人700円、昼風呂 大人1,200円・小人700円。2026年12月5日より土日祝・大型連休は朝風呂 大人1,000円、昼風呂 大人1,500円・小人900円に改定", "https://dormy-hotels.com/dormyinn/hotels/nono_toyama/news/article/1725"),
      factNov14("営業時間", "日帰り温泉 朝風呂 6:00～9:00（最終入場8:00）、昼風呂 15:00～21:00（最終入場20:00）。宿泊者向け大浴場は15:00～翌10:00", "https://dormy-hotels.com/dormyinn/pamphlet/nono_toyama/"),
      factNov14("設備", "2Fの男女別天然温泉大浴場「剱の湯」。内湯・岩風呂・壺風呂・露天風呂・打たせ湯はいずれも天然温泉で、男女ともドライサウナとスチームサウナを完備", "https://dormy-hotels.com/dormyinn/hotels/nono_toyama/"),
      factNov14("水風呂", "水風呂あり", "https://dormy-hotels.com/dormyinn/hotels/nono_toyama/"),
      factNov14("利用条件", "日帰り入浴可（朝風呂・昼風呂の2区分）", "https://dormy-hotels.com/dormyinn/pamphlet/nono_toyama/"),
    ],
  },
  {
    ids: ["st-ishikawa-451"], name: "テルメ金沢", officialUrl: "http://www.terume.net/",
    features: ["ドライサウナ", "セルフロウリュ", "オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "個室", "宿泊可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入館料 大人（中学生以上）1,100円、小人（4〜12歳）平日400円・土日祝500円・特定日600円、3歳以下無料。あさ割平日750円・土日祝850円、よる割1,000円", "https://www.terume.net/price/"),
      factNov14("料金", "追加レンタル：フェイスタオル1枚100円、バスタオル1枚200円、館内着1着300円。深夜1時を過ぎると深夜料金が自動加算（平日1,900円・土日祝2,200円・特定日2,500円）", "https://www.terume.net/price/"),
      factNov14("営業時間", "24時間営業・24時間受付可能。大浴場・サウナは午前6時〜翌朝3時", "https://www.terume.net/price/"),
      factNov14("設備", "松島温泉白糸の湯。男女別・それぞれ10種類以上のお風呂。泉質ナトリウム-塩化物泉、泉温53.3度、湧出量404リットル/分", "https://www.terume.net/spa/"),
      factNov14("設備", "男性高温サウナ「スタジアムサウナ」と女性高温サウナ「ハーブサウナ」はオートロウリュ付（20分ごと）、男女低温サウナ「クラシックサウナ」はセルフロウリュ付。毎週金曜夜に爆風ロウリュ開催", "https://www.hot-ishikawa.jp/blog/detail_576.html"),
      factNov14("水風呂", "サウナ・水風呂も完備され、露天風呂では外気浴も可能。水風呂は浴槽一覧にも記載", "https://www.hot-ishikawa.jp/blog/detail_576.html"),
      factNov14("利用条件", "中学生までは保護者同伴。高校生のみの入館は22時までに退館。入れ墨・タトゥーの方、暴力団関係者、過度な飲酒の方の入館は不可。7歳以上の混浴は不可", "https://www.terume.net/flow/"),
    ],
  },
  {
    ids: ["st-fukui-2260"], name: "セントピアあわら", officialUrl: "https://awara-saintpia.jp/",
    features: ["温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "高校生以上 600円、小中学生 360円、3歳以上・幼児 240円。回数券（10枚綴り）高校生以上4,200円、定期券（30日間）高校生以上6,000円", "https://awara-saintpia.jp/"),
      factNov14("営業時間", "10:00〜23:00（最終受付 22:30）", "https://awara-saintpia.jp/"),
      factNov14("定休日", "休館日：毎月第3火曜日", "https://awara-saintpia.jp/"),
      factNov14("利用条件", "泥酔者、反社会的勢力関係者、刺青やタトゥーのある方、皮膚疾患・伝染性疾患のある方の入場は不可。身長120cm以上もしくは7才以上のお子様の混浴不可、飲食物の持込不可、支払いは現金のみ", "https://awara-saintpia.jp/"),
      factNov14("設備", "浴場は天の湯・地の湯の2つ。浴室にはリンスインシャンプー・ボディソープ備え付け。お食事のみの利用も可。貸しバスタオル・タオル等の用意あり。食事処「あわら茶屋ふらり」あり", "https://awara-saintpia.jp/"),
    ],
  },
  {
    ids: ["st-fukui-3055"], name: "松岡サウナ", officialUrl: "https://matsuokasauna.com/",
    features: ["宿泊可", "サ飯あり"],
    facts: [
      factNov14("利用条件", "男性は夏場に日帰り入浴ができます（永平寺町の魅力紹介マガジン記載）", "http://akiyametabank.com/eiheiji/wp-content/uploads/eiheijicho_guide.pdf"),
      factNov14("定休日", "年中無休（永平寺町の魅力紹介マガジン記載）", "http://akiyametabank.com/eiheiji/wp-content/uploads/eiheijicho_guide.pdf"),
    ],
  },
  {
    ids: ["st-yamanashi-385"], name: "山中湖温泉 紅富士の湯", officialUrl: "http://www.benifuji.co.jp/",
    features: ["温泉付き"],
    facts: [
      factNov14("営業時間", "2026年9月の営業時間：平日11:00～19:00、土日祝11:00～20:00、最終受付は閉館45分前（公式Instagram）", "https://www.instagram.com/p/DdAeY3tH2sH/"),
      factNov14("設備", "露天檜風呂、大浴場、サウナを完備。露天風呂からは男湯女湯共に富士山を望むことができる。リラクゼーション施設、食堂、畳個室を併設", "https://lake-yamanakako.com/footer/faq"),
      factNov14("利用条件", "日帰り温泉施設（山中湖にある日帰り温泉施設2つのうち1つ）。泉質はpH10.3のアルカリ性単純温泉", "https://lake-yamanakako.com/footer/faq"),
      { label: "休館日", value: "毎週月曜日・火曜日", sourceUrl: "https://www.benifuji.co.jp/", checkedAt: "2026-10-19" },
    ],
  },
  {
    ids: ["st-nagano-4415"], name: "グリーンビレッジ横川 かやぶきの館", officialUrl: "http://www.kayabukinoyakata.jp/index.html",
    features: ["宿泊可"],
    facts: [
      factNov14("料金", "本館内の入浴施設：大人500円、小人200円（公式サイト客室案内）", "https://kayabukinoyakata.jp/guestroom/"),
      factNov14("営業時間", "日帰り入浴 10時～20時、大人500円 小人200円（辰野町公式ページ）", "https://www.town.tatsuno.lg.jp/kanko/tomaru_nyuyoku/1934.html"),
      factNov14("定休日", "火曜日休館（辰野町公式ページの日帰り入浴欄）", "https://www.town.tatsuno.lg.jp/kanko/tomaru_nyuyoku/1934.html"),
      factNov14("利用条件", "日帰り入浴可（薬草の湯）。宿泊も可で客室は和室10部屋、車中泊用サイトもあり（公式サイト）", "https://kayabukinoyakata.jp/guestroom/"),
    ],
  },
  {
    ids: ["st-nagano-2317"], name: "ファインビュー室山", officialUrl: "http://www.fineview.co.jp/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "午前10時から午後9時30分（午後8時30分受付終了）チェックイン午後3時から、チェックアウト午前10時まで", "https://www.city.azumino.nagano.jp/soshiki/32/45457.html"),
      factNov14("設備", "利用可能な施設：いなか体験室、研修室、会議室、大浴場、レストラン（安曇野市公式ページ）", "https://www.city.azumino.nagano.jp/soshiki/32/45457.html"),
      factNov14("設備", "日帰り入浴が可能な大浴場に露天風呂あり。ふたつある大浴場は日替わりで男湯女湯を交代。無色透明のアルカリ性単純温泉（長野県公式観光サイト）", "https://www.go-nagano.net/hot-springs-and-relaxation/id16908"),
      factNov14("利用条件", "日帰り入浴可。標高800mの高台に立つ温泉宿泊施設で宿泊も可（安曇野市公式ページ）", "https://www.city.azumino.nagano.jp/soshiki/32/45457.html"),
    ],
  },
  {
    ids: ["st-akita-1290"], name: "雄物川地域局えがおの丘", officialUrl: "http://egaonooka.jp/", status: "closed",
    features: [],
    facts: [
      factNov14("営業状況", "閉館（2024年11月30日をもって閉館。横手市の里見地区交流センターだより（令和6年12月12日発行）に「11月いっぱいで閉館となりました」と記載）", "https://www.city.yokote.lg.jp/_res/projects/default_project/_page_/001/002/937/202208821.pdf"),
    ],
  },
  {
    ids: ["st-akita-1271"], name: "あいのの温泉 鶴ヶ池荘", officialUrl: "http://tsurugaikesou.com/index.html", status: "suspended",
    features: [],
    facts: [
      factNov14("営業状況", "休館中（横手市の公共温泉施設で、入浴サービスは休止中。市は改修工事と指定管理者の選定を進め、令和9年1月頃の入浴サービス再開を目指している。横手市山内地域課だより令和6年6月1日号で確認）", "https://www.city.yokote.lg.jp/_res/projects/default_project/_page_/001/003/307/sannai36.pdf"),
    ],
  },
  {
    ids: ["st-ibaraki-1659"], name: "関所の湯", officialUrl: "http://sekisyo-no-yu.com/", status: "closed",
    features: [],
    facts: [
      factNov14("営業状況", "閉館（日帰り温泉としての営業は終了。現在は住宅型有料老人ホームに隣接する介護サービス「関所の湯」として運営されており、一般入浴はできない。介護サービスの利用には要介護認定と有料登録が必要）", "http://sekisyo-no-yu.com/"),
    ],
  },
  {
    ids: ["st-ishikawa-4681"], name: "エイトポイントイン金沢", officialUrl: "https://www.rio-hotels.co.jp/kanazawa/", status: "closed",
    features: [],
    facts: [
      factNov14("営業状況", "閉館（運営会社リオ・ホテルズが公式サイトに「営業終了のお知らせ」を掲載。2026年1月16日のチェックアウトをもって営業終了）", "https://www.rio-hotels.co.jp/kanazawa/"),
    ],
  },
  {
    ids: ["st-nagano-2324"], name: "もみの湯", status: "suspended", officialUrl: "http://mominokisou.com/",
    features: ["温泉付き", "貸切可"],
    facts: [
      factNov14("料金", "入浴料 原村村民 500円、一般 650円、子ども 300円、未就学児 無料", "http://mominokisou.com/"),
      factNov14("営業時間", "10:00〜21:30（21:00までに入館）", "http://mominokisou.com/"),
      factNov14("定休日", "第3火曜日（祝祭日の場合は翌日）", "http://mominokisou.com/"),
      factNov14("設備", "大浴場、露天風呂、サウナ、リフレッシュルーム、大休憩室、貸切家族風呂（宿泊者限定）。地下1,300mから湧出する源泉かけ流し", "http://mominokisou.com/"),
      factNov14("利用条件", "貸切家族風呂は宿泊者限定。樅の木荘の宿泊者はもみの湯を無料で利用可", "http://mominokisou.com/"),
      factNov14("営業状況", "休館中（改修工事のため2026年11月1日〜2027年3月31日は休業。期間中は日帰り入浴も休業。樅の木荘の公式サイトで確認）", "http://mominokisou.com/"),
    ],
  },
  {
    ids: ["st-nagano-2344"], name: "ロイヤルホテル長野", officialUrl: "https://mercure-naganomatsushiro-resortandspa.jp/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場 6:00～10:00（最終入場9:30）／15:00～23:00（最終入場22:30）", "https://mercure-naganomatsushiro-resortandspa.jp/spa/"),
      factNov14("料金", "大浴場は宿泊者無料（入湯税は宿泊代金に含まれております）", "https://mercure-naganomatsushiro-resortandspa.jp/spa/"),
      factNov14("設備", "松代温泉の露天温泉岩風呂「夕姫の湯」、大浴場（内湯は沸かし湯）、サウナ、温泉ラウンジ。いずれも3階", "https://mercure-naganomatsushiro-resortandspa.jp/spa/"),
      factNov14("利用条件", "入れ墨・タトゥーは原則入浴不可（8cm×10cmのカバーシール2枚で隠せる場合のみ可、シールはフロントで販売）", "https://mercure-naganomatsushiro-resortandspa.jp/spa/"),
    ],
  },
  {
    ids: ["st-nagano-2349"], name: "金沢温泉 金鶏の湯", officialUrl: "https://www.city.chino.lg.jp/soshiki/chiikifukushi/1359.html",
    features: [],
    facts: [
      factNov14("料金", "大人600円 中学生以下300円", "https://www.suwa-tourism.jp/assets/uploads/2026/02/omotenasimap.pdf"),
      factNov14("定休日", "水曜日定休", "https://www.suwa-tourism.jp/assets/uploads/2026/02/omotenasimap.pdf"),
    ],
  },
  {
    ids: ["st-nagano-378"], name: "信州健康ランド", officialUrl: "http://www.kur-hotel.co.jp/shinsyu/",
    features: ["塩サウナ", "オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "入館料1,980円（公式トップに「健康ランドの入館料1,980円が宿泊に含まれている」と明記）", "https://www.kur-hotel.co.jp/shinsyu/"),
      factNov14("営業時間", "24時間営業", "https://www.kur-hotel.co.jp/shinsyu/"),
      factNov14("設備", "サウナ4種類（NEPPAサウナ100度、塩サウナ50度、高温サウナ120度、クリスタルサウナ46〜48度）、露天風呂など多種のお風呂、岩盤浴", "https://www.kur-hotel.co.jp/shinsyu/spa/"),
      factNov14("水風呂", "水風呂あり（お風呂一覧に明記）", "https://www.kur-hotel.co.jp/shinsyu/spa/"),
    ],
  },
  {
    ids: ["manual-shizuoka-superhotel-hamamatsu"], name: "スーパーホテル浜松", officialUrl: "https://www.superhotel.co.jp/s_hotels/hamamatsu/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "天然温泉「浜松出世の湯」（男女別の大浴場）", "https://www.superhotel.co.jp/onsen/"),
      factNov14("利用条件", "タトゥー・ペイント等のある方は入浴不可（チェーン公式の温泉案内の注意事項）", "https://www.superhotel.co.jp/onsen/"),
    ],
  },
  {
    ids: ["manual-aichi-sauna-bug"], name: "SAUNA BUG", officialUrl: "https://sauna-bug.com/",
    features: ["薪サウナ", "水風呂あり"],
    facts: [
      factNov14("料金", "平日 60分1,200円（以降30分ごとに+300円）／土日 60分1,400円（以降30分ごとに+400円）", "https://medical.jiji.com/prtimes/405622"),
      factNov14("営業時間", "平日12:00～24:00、土日10:00～24:00（開業前の発表値）", "https://medical.jiji.com/prtimes/405622"),
      factNov14("設備", "特注薪ストーブとスチームジェネレーターを備え、水風呂エリアと、サウナ室内で氷水を浴びる「BUGクナイプ」がある", "https://medical.jiji.com/prtimes/405622"),
    ],
  },
  {
    ids: ["manual-aichi-wellbe-imaike"], name: "ウェルビー今池", officialUrl: "https://www.wellbe.co.jp/imaike/",
    features: ["水風呂あり"],
    facts: [
      factNov14("設備", "水風呂と冷凍サウナを備える（公式Instagram投稿による）", "https://www.instagram.com/p/Daz0mP8mDA5/"),
    ],
  },
  {
    ids: ["manual-aichi-mens-sauna-plaza"], name: "メンズサウナプラザ", officialUrl: "https://www.plaza85.co.jp/%E9%A4%A8%E5%86%85%E3%81%AE%E3%81%94%E6%A1%88%E5%86%85/%E3%83%A1%E3%83%B3%E3%82%BA%E3%82%B5%E3%82%A6%E3%83%8A%E3%83%97%E3%83%A9%E3%82%B6/",
    features: ["ドライサウナ", "水風呂あり", "宿泊可"],
    facts: [
      factNov14("料金", "一般2,300円（税込）、宿泊者は無料、メンバーズ会員1,500円（税込）。サブスク月額13,200円（税込）〜", "https://www.plaza85.co.jp/館内のご案内/メンズサウナプラザ/"),
      factNov14("営業時間", "大浴場 11:00～深夜0:00、早朝5:00～10:00（毎週月曜のみ清掃点検のため8:00まで）。サウナ 11:00～深夜0:00", "https://www.plaza85.co.jp/館内のご案内/メンズサウナプラザ/"),
      factNov14("設備", "遠赤外線サウナ、大浴場、ジャグジー、水風呂", "https://www.plaza85.co.jp/館内のご案内/メンズサウナプラザ/"),
      factNov14("利用条件", "男性専用。宿泊者以外も日帰りで利用可", "https://www.plaza85.co.jp/館内のご案内/メンズサウナプラザ/"),
    ],
  },
  {
    ids: ["manual-aichi-yunoyu-toyohashi"], name: "ゆのゆ TOYOHASHI", officialUrl: "https://yunoyu.jp/",
    features: [],
    facts: [
      factNov14("営業時間", "午前9時から午前0時まで", "https://www.east-mikawa.jp/secure/3006/yunoyu.pdf"),
      factNov14("定休日", "年中無休（メンテナンス休館あり）", "https://www.east-mikawa.jp/secure/3006/yunoyu.pdf"),
      factNov14("設備", "東海地区最大級の炭酸泉など13種類のお風呂と岩盤浴（ゆのゆラウンジ）", "https://www.east-mikawa.jp/secure/3006/yunoyu.pdf"),
    ],
  },
  {
    ids: ["manual-aichi-yutopia-takara"], name: "湯～とぴあ宝", officialUrl: "https://www.yu-t.com/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "個室", "サ飯あり", "タオルレンタルあり", "宿泊可"],
    facts: [
      factNov14("料金", "入館料（通常プラン）大人 平日2,400円・土日祝2,800円。夕方半額プラン 平日1,200円・土日祝1,400円（17:00～深夜2:00）。朝風呂プラン 大人 平日900円・土日祝1,000円。深夜割増料金2,400円", "https://www.yu-t.com/guidance/"),
      factNov14("営業時間", "24時間営業（浴場は5:00～翌1:00、清掃のため1:00～5:00は利用不可）", "https://www.yu-t.com/guidance/"),
      factNov14("定休日", "年中無休", "https://www.yu-t.com/guidance/"),
      factNov14("設備", "30種類のお風呂と8種類のサウナ。ロウリュウサウナ、オートロウリュウサウナ（30分に1回自動）、ミストサウナ、遠赤外線ドライサウナ、水風呂、露天風呂", "https://www.yu-t.com/bath/"),
      factNov14("利用条件", "刺青・タトゥー（シール含む）のある方は入館不可", "https://www.yu-t.com/guidance/"),
    ],
  },
  {
    ids: ["st-mie-2756"], name: "ＪＡ鈴鹿さつき温泉", officialUrl: "https://ja-suzuka.or.jp/spa/",
    features: ["ドライサウナ", "水風呂あり", "外気あり", "温泉付き"],
    facts: [
      factNov14("料金", "入場料 大人（中学生以上）650円、子供（4歳以上～小学生）200円。回数券11枚綴り（大人用）6,500円", "https://ja-suzuka.or.jp/living/suzuka-satsuki-onsen/"),
      factNov14("設備", "大浴場、露天風呂、水風呂、遠赤外線サウナ（平均温度は約85度）。地下1,400mから汲み上げる100%かけ流しの天然温泉（弱アルカリ性単純温泉）", "https://ja-suzuka.or.jp/living/suzuka-satsuki-onsen/"),
    ],
  },
  {
    ids: ["st-tottori-4722"], name: "ICHINOYU TENT SAUNA", officialUrl: "https://ichinoyu.yoshiokaonsencho.com/",
    features: ["セルフロウリュ", "ロウリュあり", "温泉付き", "貸切可"],
    facts: [
      factNov14("営業時間", "8:00〜21:00（最終入館20:30）", "https://www.city.tottori.lg.jp/page/5348.html"),
      factNov14("定休日", "不定休（メンテナンス休館あり）", "https://www.city.tottori.lg.jp/page/5348.html"),
      factNov14("料金", "一般入浴：大人（高校生以上）700円、小人（小・中学生）350円、シニア（65歳以上）600円。貸切風呂2,200円（40〜50分）", "https://www.city.tottori.lg.jp/page/5348.html"),
      factNov14("設備", "テントサウナはロシア製三層式テント「MORZH」を使用し、サウナストーンに温泉をかけるセルフロウリュ可。大浴場は木風呂・岩風呂（各露天風呂・打たせ湯付）、貸切風呂、わんこの湯あり", "https://www.city.tottori.lg.jp/page/5348.html"),
      factNov14("利用条件", "テントサウナは完全予約制（前日までの受付）", "https://www.city.tottori.lg.jp/page/5348.html"),
    ],
  },
  {
    ids: ["st-tottori-3590"], name: "おーゆ・ランド", officialUrl: "http://www.ou-kaike.co.jp/?page_id=19",
    features: ["貸切可"],
    facts: [
      factNov14("営業時間", "おーゆ・ランド 10:00〜23:00（最終受付22:30）。月1回12時オープンあり", "https://www.ou-kaike.co.jp/rv-park"),
      factNov14("料金", "大浴場入浴料金：大人550円〜。貸切風呂入浴料金：2名 大人2,300円〜", "https://www.ou-kaike.co.jp/rv-park"),
      factNov14("利用条件", "大浴場には石鹸・シャンプー・タオル等の備え付けなし（持参または券売機で購入）", "https://www.ou-kaike.co.jp/rv-park"),
    ],
  },
  {
    ids: ["st-tottori-3594"], name: "パルプラスオン", officialUrl: "https://www.houki-town.jp/new2/5/3/2/",
    features: ["温泉付き"],
    facts: [
      factNov14("営業時間", "利用可能時間 10:00〜21:00（1〜3月は20:00まで）", "https://www.houki-town.jp/user/filer_public/10/eb/10eb794b-b9b2-4f0b-bb63-44f5c2743cf3/guang-bao-houki8yue-hao-4.pdf"),
      factNov14("定休日", "水曜日（祝日の場合は翌日）", "https://www.houki-town.jp/user/filer_public/10/eb/10eb794b-b9b2-4f0b-bb63-44f5c2743cf3/guang-bao-houki8yue-hao-4.pdf"),
    ],
  },
  {
    ids: ["st-hiroshima-3547"], name: "江戸風呂", status: "suspended", officialUrl: "http://www.sensuijima.jp/kokokara/top.html",
    features: ["スチーム(ミスト)サウナ", "薪サウナ", "宿泊可"],
    facts: [
      factNov14("営業時間", "館内大浴場6：00～23：00、洞窟蒸風呂『江戸風呂』10：00～17：30", "http://www.sensuijima.jp/"),
      factNov14("設備", "昔ながらの薪を炊き上げた洞窟蒸し風呂『江戸風呂』。溜まった毒素を出し、リフレッシュできる蒸し風呂", "http://www.sensuijima.jp/"),
      factNov14("利用条件", "大人専用の宿として運営。学生以下のお子さまは宿泊不可", "http://www.sensuijima.jp/"),
      factNov14("営業状況", "休館中（2026年9月4日から全館メンテナンスのため休館中。メンテナンスが終わり次第営業を再開すると公式サイトで告知。運営：ベネフィットホテル株式会社）", "http://www.sensuijima.jp/"),
    ],
  },
  {
    ids: ["st-hiroshima-3530"], name: "神辺天然温泉 ぐらんの湯", officialUrl: "http://grannoyu.com/",
    features: ["ドライサウナ", "塩サウナ", "オートロウリュ", "ロウリュあり", "水風呂あり", "温泉付き", "男女共用", "タオルレンタルあり", "サ飯あり"],
    facts: [
      factNov14("料金", "入館料 大人（中学生以上）平日900円・土日祝950円、小人（小学生以下）500円、レンタルタオルセット350円。高温ロウリュ熱波サウナ利用料500円（サウナ着込）", "https://grannoyu.com/intro/guide"),
      factNov14("営業時間", "9：00～24：00（最終受付23：00）。高温ロウリュ熱波サウナは10：00～23：00", "https://grannoyu.com/intro/guide"),
      factNov14("設備", "内湯に生源泉かけ流し、温泉大浴槽、ジェットバスの健爽浴、寝湯、高温のタワーサウナ、中温の塩サウナ（女湯のみ）、瞑想サウナ（男湯のみ）。露天風呂に温泉岩風呂・炭酸泉・石壷湯", "https://grannoyu.com/uchiyu"),
      factNov14("水風呂", "17℃の冷水風呂", "https://grannoyu.com/uchiyu"),
      factNov14("利用条件", "イレズミ・タトゥ（ボディペイントシールを含む）をされている方の入館不可。8歳以上もしくは身長120cm以上の場合、混浴はできません", "https://grannoyu.com/intro/guide"),
    ],
  },
  {
    ids: ["st-yamaguchi-4650"], name: "ホテルニュータナカ", status: "closed", officialUrl: "http://www.newtanaka.jp/",
    features: [],
    facts: [
      factNov14("営業状況", "閉館（2024年2月29日をもって営業終了。新所有者グローバルエージェンツの公式発表による。建物は大規模改修のうえ『THE LIVELY 山口』として2027年春の再開業を予定）", "https://adv.tokyo-np.co.jp/prtimes/article84109/"),
    ],
  },
  {
    ids: ["st-yamaguchi-3652"], name: "道の駅 蛍街道西ノ市 蛍の湯", officialUrl: "https://www.toyota-hotaru.com/floormap/onsen/",
    features: ["ドライサウナ", "水風呂あり", "外気あり", "温泉付き"],
    facts: [
      factNov14("料金", "入浴回数券（一般・10枚綴り）7,200円", "https://www.toyota-hotaru.com/floormap/onsen/"),
      factNov14("営業時間", "10:00～21:00（最終受付20:00）", "https://www.toyota-hotaru.com/floormap/onsen/"),
      factNov14("設備", "ドライサウナ『ホタルサウナ』（定員8名、設定温度は男性95度・女性90度）が蛍の湯内にある。蛍の湯は舞の湯・光の湯の2浴場で月に一度男女入れ替え", "https://toyota-hotaru.com/pages/hotaru-sauna"),
      factNov14("水風呂", "水風呂は温泉源泉を使用（設定温度16.5度）", "https://toyota-hotaru.com/pages/hotaru-sauna"),
      factNov14("利用条件", "刺青・タトゥー・タトゥーシールのある方は入浴不可。混浴可能な年齢は6才（未就学児）まで", "https://www.toyota-hotaru.com/floormap/onsen/"),
    ],
  },
  {
    ids: ["st-yamaguchi-3656"], name: "竜崎温泉潮風の湯", officialUrl: "http://ryuzakionsen.info/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴券 大人（中学生以上）730円、小人410円、特例料金520円（町内在住65歳以上・障害者手帳所持者等）。回数券10回（大人）5,230円", "https://www.ryuzakionsen.info/onsen"),
      factNov14("設備", "大浴場・露天風呂・サウナ完備。塩化物強塩温泉で湯はセピア色。露天風呂から嵩山と安下庄湾を一望できる", "http://ryuzakionsen.info/"),
      factNov14("利用条件", "日帰り温泉施設（館内に宿泊施設はない）。家族風呂の予約は要介護・高齢者・障がい者・1歳未満のお子様連れの方のみ可能", "https://www.ryuzakionsen.info/onsen"),
    ],
  },
  {
    ids: ["st-ehime-3740"], name: "潮の香りの天然温泉 シーパMAKOTO", officialUrl: "http://www.seapa.jp/",
    features: ["水風呂あり", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "大人750円・850円、小人（4歳～小学生）400円、回数券7,500円・6,500円", "https://seapa.jp/page2"),
      factNov14("営業時間", "大浴場ご利用時間 10:00～23:00（札止め22:30）", "https://seapa.jp/page2"),
      factNov14("定休日", "年中無休", "https://seapa.jp/"),
      factNov14("設備", "大浴場にサウナ・水風呂のほか露天風呂・内湯（海水の潮湯）・気泡浴・ジェットバス。貸切家族風呂14室（うち2室は露天風呂・個室サウナ付き）", "https://seapa.jp/page2"),
      factNov14("水風呂", "大浴場に水風呂あり", "https://seapa.jp/page2"),
      factNov14("利用条件", "日帰り入浴可（大浴場・貸切家族風呂）。宿泊施設を併設", "https://seapa.jp/page2"),
    ],
  },
  {
    ids: ["st-fukuoka-3816"], name: "都久志の湯", officialUrl: "http://tsukushino-yu.com/",
    features: [],
    facts: [
      factNov14("利用条件", "日帰り入浴施設（太宰府市内、竈門神社から一番近くにある日帰り入浴施設と公式プロフィールに記載）", "https://www.instagram.com/tsukushi_no_yu/"),
    ],
  },
  {
    ids: ["st-saga-3571"], name: "佐賀ぽかぽか温泉", officialUrl: "https://www.souyu.co.jp/shisetsu/saga_pokapoka",
    features: ["ドライサウナ", "塩サウナ", "スチーム(ミスト)サウナ", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入館料〔平日〕大人（中学生以上）850円・小人（小学生）400円・幼児300円・2歳以下無料〔土日祝〕大人950円・小人450円・幼児350円。岩盤浴セット（大汗洞）平日大人1,600円等", "https://www.souyu.co.jp/shisetsu/saga_pokapoka"),
      factNov14("営業時間", "平日9:00～25:00、土日祝8:00～25:00（最終受付は全日23:00）", "https://www.souyu.co.jp/shisetsu/saga_pokapoka"),
      factNov14("定休日", "毎月第2木曜日", "https://www.souyu.co.jp/shisetsu/saga_pokapoka"),
      factNov14("設備", "露天風呂・壷湯・寝転び湯・ジェットバス・足湯、ドライサウナ、ミスト塩サウナ、岩盤浴「大汗洞」6種（熱波洞でロウリュウ）。泉質はアルカリ性単純温泉（地下600m）", "https://www.souyu.co.jp/shisetsu/saga_pokapoka"),
      factNov14("水風呂", "冷水風呂あり", "https://www.souyu.co.jp/shisetsu/saga_pokapoka"),
    ],
  },
  {
    ids: ["st-nagasaki-4443"], name: "はさみ温泉 湯治楼", officialUrl: "http://seisyunnosato.jp/onsen/",
    features: ["温泉付き"],
    facts: [
      factNov14("設備", "源泉かけ流しの高濃度炭酸泉（別名「心臓の湯」）", "https://furusato.jal.co.jp/goods/detail/fa198ee9260aaafcf12a3979655fcad3"),
    ],
  },
  {
    ids: ["st-yamaguchi-3653"], name: "海眺の宿 あいお荘", officialUrl: "http://www.aioso.com/spa/", status: "suspended",
    features: [],
    facts: [
      factNov14("営業状況", "休館中（山口市所有の国民宿舎秋穂荘。指定管理者の解散に伴い2026年8月31日で営業を終え、9月1日から当分の間利用休止。山口市と運営者が会見で発表）", "https://newsdig.tbs.co.jp/articles/tys/2850012?display=1"),
    ],
  },
  {
    ids: ["st-kumamoto-4521"], name: "阿蘇白水温泉 瑠璃", officialUrl: "https://ruri.aso-hakusui.com/",
    features: [],
    facts: [
      factNov14("営業時間", "午前11時〜午後8時（3月1日から延長。変更前は午前11時〜午後6時）", "https://www.vill.minamiaso.lg.jp/kiji0034434/3_4434_10499_up_j7kp0onb.pdf"),
      factNov14("料金", "大人600円（シャンプー・リンス・ボディソープなし）／800円（シャンプー・リンス・ボディソープ付き）", "https://www.vill.minamiaso.lg.jp/kiji0034434/3_4434_10499_up_j7kp0onb.pdf"),
    ],
  },
  {
    ids: ["st-kumamoto-860"], name: "多良木町えびすの湯", officialUrl: "http://www.town.taragi.lg.jp/gyousei/soshiki/chouminfukushi/ebisunoyu/148.html",
    features: [],
    facts: [
      factNov14("料金", "大人450円・小人（3歳以上中学生まで）300円・大人回数券（6回分）2,250円（令和6年1月1日改定）。家族風呂は廃止、3歳未満は無料", "https://www.town.taragi.lg.jp/material/files/group/16/ebisunoyuryoukin.pdf"),
    ],
  },
  {
    ids: ["st-oita-821"], name: "スーパー温泉やまなみの湯", officialUrl: "http://diamondgroup.co.jp/yamanaminoyu/beppu/",
    features: ["セルフロウリュ", "オートロウリュ", "ロウリュあり", "塩サウナ", "水風呂あり", "外気あり", "温泉付き", "個室", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "平日 大人（中学生以上）580円・小人（4才〜小学生）220円・幼児無料、土日祝 大人680円・小人250円（サウナ料含む）。家族風呂60分 平日2,200円・土日祝2,500円", "http://diamondgroup.co.jp/yamanaminoyu/beppu/"),
      factNov14("営業時間", "12:00〜翌8:40（土日祝は24時間営業、月2回の月曜は15:00〜翌8:40）", "https://enjoyonsen.city.beppu-jp.com/onsen/yamanami-no-yu-a-one-of-a-kind-onsen-experience-where-art-hot-springs-and-innovative-saunas-come-together/"),
      factNov14("定休日", "無休", "https://enjoyonsen.city.beppu-jp.com/onsen/yamanami-no-yu-a-one-of-a-kind-onsen-experience-where-art-hot-springs-and-innovative-saunas-come-together/"),
      factNov14("設備", "山の湯・海の湯に計6種のサウナ（セルフロウリュ・オートロウリュIKI・塩サウナ・遠赤外線スタジアム・アロマ・漢方）、露天風呂、外気浴デッキ、全11室の家族風呂", "http://diamondgroup.co.jp/yamanaminoyu/beppu/"),
      factNov14("水風呂", "デュアルチラー強冷泉風呂（冷却装置チラーをダブル稼働させた水風呂）", "http://diamondgroup.co.jp/yamanaminoyu/beppu/"),
      factNov14("利用条件", "ドミトリー宿泊「やまなみの宿」あり（平日3,800円・土日祝4,500円、入浴料込みで大浴場を何度でも利用可、小学生以下は利用不可）", "http://diamondgroup.co.jp/yamanaminoyu/beppu/"),
    ],
  },
  {
    ids: ["st-oita-4716"], name: "長崎鼻ビーチリゾート", officialUrl: "https://nagasakibana-beach.com/",
    features: ["貸切可"],
    facts: [
      factNov14("営業時間", "9:00〜18:00", "https://mantan-web.jp/prtimes/article/20261112prt00m200000731a.html"),
      factNov14("定休日", "水曜日（繁忙期は無休）", "https://mantan-web.jp/prtimes/article/20261112prt00m200000731a.html"),
      factNov14("設備", "海を眺めるトレーラーサウナ（貸切90分・事前予約制の「長崎鼻サウナ満喫プラン」は1名19,700円〜・2名1室利用時）", "https://www.asahi.com/and/pressrelease/16253869"),
    ],
  },
  {
    ids: ["st-oita-816"], name: "豊の国健康ランド", officialUrl: "http://www.toyonokuni-k.com/",
    features: ["ドライサウナ", "ロウリュあり", "水風呂あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "入館料（タオル・浴衣レンタル付）大人1,250円・小学生625円・幼児310円・3歳以下無料／お風呂のみ 大人500円・小学生250円・幼児120円・3歳以下無料／深夜料金（深夜2時～朝5時）1,320円", "https://www.toyonokuni-k.com/facilities/yu.html"),
      factNov14("営業時間", "お風呂のみ利用は朝5時～深夜0時", "https://www.toyonokuni-k.com/facilities/yu.html"),
      factNov14("設備", "遠赤外線サウナ、ロウリュウ（サウナストーンに水をかける方式、1日5回＝11:00/14:30/18:30/19:30/20:30、無料）、岩盤浴場「癒泉洞」、泳げるお風呂・歩行浴・ジェットバス", "https://www.toyonokuni-k.com/facilities/yu.html"),
      factNov14("水風呂", "天然の井戸水を使った冷水風呂あり", "https://www.toyonokuni-k.com/facilities/yu.html"),
      factNov14("利用条件", "タオル類は持参（入館プランはタオル・浴衣レンタル付）。石鹸・シャンプー等は無料備え付け。宿泊・宴会の客は入館料込みで浴場を利用可", "https://www.toyonokuni-k.com/facilities/yu.html"),
    ],
  },
  {
    ids: ["st-miyazaki-4093"], name: "すきむらんど温泉かじかの湯", officialUrl: "https://www.sukimuland.com/",
    features: ["ドライサウナ", "温泉付き"],
    facts: [
      factNov14("営業時間", "かじかの湯 10:00～21:00", "https://www.sukimuland.com/"),
      factNov14("定休日", "第2・第4木曜日", "https://www.sukimuland.com/"),
      factNov14("設備", "フィンランド式サウナを備えた天然温泉施設", "https://www.sukimuland.com/"),
    ],
  },
  {
    ids: ["st-miyazaki-4078"], name: "観音さくらの里", officialUrl: "https://miyakonojo-bonchi.com/kannonsakura/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "温泉 大人（中学生以上）1回420円・1日630円、小人（小学生）1回210円・1日310円、幼児無料", "https://miyakonojo-bonchi.com/kannonsakura/"),
      factNov14("営業時間", "7:00〜21:00（最終受付20:00）", "https://miyakonojo-bonchi.com/kannonsakura/"),
      factNov14("定休日", "水曜日（祝日、シーズン中は変動）", "https://miyakonojo-bonchi.com/kannonsakura/"),
      factNov14("設備", "アルカリ性単純温泉。内風呂・露天風呂・水流浴・舞湯・浮風呂・電気風呂・歩行浴・釜風呂・サウナなど13種類のお風呂。レストラン・売店・休憩大広間あり", "https://miyakonojo-bonchi.com/kannonsakura/"),
    ],
  },
  {
    ids: ["st-miyazaki-4461"], name: "宮崎カーフェリー", officialUrl: "http://www.miyazakicarferry.com/index.html",
    features: [],
    facts: [
      factNov14("営業時間", "展望浴室 宮崎港発：乗船～22:00・朝6:15～入港前／神戸港発：朝7:00～入港前。シャワールームは乗船～入港前いつでも利用可", "https://www.miyazakicarferry.com/shipinfo/facilities/"),
      factNov14("設備", "4F展望浴室（大浴場）とシャワールーム。シャンプー・コンディショナー・ボディソープ・ドライヤー・コインロッカー（100円リターン式）備え付け", "https://www.miyazakicarferry.com/shipinfo/facilities/"),
      factNov14("利用条件", "荒天時は入浴できない場合あり。入浴料の記載なし（乗船客向け施設）", "https://www.miyazakicarferry.com/shipinfo/facilities/"),
    ],
  },
  {
    ids: ["st-kagoshima-897"], name: "たぬき湯", officialUrl: "http://tanukiyu.jp/",
    features: ["水風呂あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "公衆浴場入浴料金（鹿児島県公衆浴場組合、2026年11月1日改定）大人（12歳以上）500円・中人（6歳以上12歳未満）150円・小人（6歳未満）80円", "https://www.kagoshima-onsen1010.net/info/post-106.php"),
      factNov14("営業時間", "6:00～24:00", "https://www.kagoshima-onsen1010.net/upload/files/kagoshimasentomap-2303a.pdf"),
      factNov14("定休日", "年中無休", "https://www.kagoshima-onsen1010.net/upload/files/kagoshimasentomap-2303a.pdf"),
      factNov14("設備", "露天風呂・サウナ・水風呂・岩風呂・うたせ湯・電気風呂・超音波風呂・気泡風呂・食事処。泉質は単純泉（組合の銭湯案内図による）", "https://www.kagoshima-onsen1010.net/upload/files/kagoshimasentomap-2303a.pdf"),
    ],
  },
  {
    ids: ["st-kagoshima-4130"], name: "中山温泉", officialUrl: "http://www13.plala.or.jp/chuzanonsen/index.html",
    features: ["水風呂あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "公衆浴場入浴料金（鹿児島県公衆浴場組合、2026年11月1日改定）大人（12歳以上）500円・中人（6歳以上12歳未満）150円・小人（6歳未満）80円", "https://www.kagoshima-onsen1010.net/info/post-106.php"),
      factNov14("営業時間", "9:30～22:30", "https://www.kagoshima-onsen1010.net/upload/files/kagoshimasentomap-2303a.pdf"),
      factNov14("定休日", "第2木曜日（祝日の場合翌週）", "https://www.kagoshima-onsen1010.net/upload/files/kagoshimasentomap-2303a.pdf"),
      factNov14("設備", "サウナ・水風呂・岩風呂・うたせ湯・電気風呂・超音波風呂・気泡風呂・家族風呂・食事処。泉質は塩化物泉（組合の銭湯案内図による）", "https://www.kagoshima-onsen1010.net/upload/files/kagoshimasentomap-2303a.pdf"),
    ],
  },
  {
    ids: ["st-okinawa-935"], name: "EMウェルネス 暮らしの発酵ライフスタイルリゾート", officialUrl: "https://kurashinohakko.jp/emspa/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり"],
    facts: [
      factNov14("料金", "大人（13歳以上）平日1,800円・土日祝2,000円、小人（4〜12歳）1,000円、3歳以下無料。岩盤浴はオプション800円", "https://kurashinohakko.jp/emspa/"),
      factNov14("営業時間", "大浴場・サウナ 6:30〜22:00、岩盤浴 6:30〜21:30（最終受付20:00）", "https://kurashinohakko.jp/emspa/"),
      factNov14("定休日", "第1・第3月曜日は日中休館", "https://kurashinohakko.jp/emspa/"),
      factNov14("設備", "展望大浴場、シルキーバス、水風呂、EMミストサウナ、EMドライサウナ、岩盤浴。湯は温泉ではなくEMセラミックスろ過システムを通した軟水", "https://kurashinohakko.jp/emspa/"),
      factNov14("水風呂", "水温18度に設定", "https://kurashinohakko.jp/emspa/"),
      factNov14("利用条件", "大浴場・サウナ・岩盤浴の利用は予約不要。日帰り入館料制", "https://kurashinohakko.jp/emspa/"),
    ],
  },
  {
    ids: ["st-okinawa-116"], name: "アートホテル石垣島 にぃふぁい湯", officialUrl: "https://www.art-ishigakijima.com/facilities/bath.php",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "タオルレンタルあり", "宿泊可"],
    facts: [
      factNov14("料金", "宿泊者は無料。日帰りはレンタルタオルセット付で13歳以上2,000円、7〜12歳1,000円、6歳以下無料", "https://www.art-ishigakijima.com/facilities/bath.php"),
      factNov14("営業時間", "宿泊者 6:00〜9:00（最終入場8:45）／15:00〜24:00（最終入場23:45）。日帰りは16:30〜24:00", "https://www.art-ishigakijima.com/facilities/bath.php"),
      factNov14("設備", "男湯に高温サウナ・寝湯・水風呂、女湯にミストサウナ・打たせ湯を併設。超軟水の大浴場", "https://www.art-ishigakijima.com/facilities/bath.php"),
      factNov14("水風呂", "男湯に水風呂あり", "https://www.art-ishigakijima.com/facilities/bath.php"),
      factNov14("利用条件", "日帰り入浴可。タトゥーはシール等で隠せば利用可。7歳以上の男女は混浴不可", "https://www.art-ishigakijima.com/facilities/bath.php"),
    ],
  },
  {
    ids: ["st-okinawa-934"], name: "テルメヴィラちゅらーゆ", officialUrl: "https://www.hotespa.net/spa/chula-u/",
    features: [],
    facts: [
      factNov14("料金", "令和8年6月1日改定の公式料金表：一般・大人（12歳以上）平日の正規料金1,800円、朝風呂（7:00〜9:00）は1,000円。料金にタオル代は含まれない", "https://dormy-hotels.com/spa/chula-u/files/images/top/pdf_price.pdf"),
      factNov14("営業時間", "屋内お風呂 7:00〜23:00（最終受付22:00）、屋外プール・低温サウナ 10:00〜21:00", "https://www.hotespa.net/spa/chula-u/"),
      factNov14("定休日", "基本は通年営業。2027年1月6日は12時より休館（最終受付11時）、1月7日は終日休館（施設点検）", "https://www.hotespa.net/spa/chula-u/"),
      factNov14("設備", "屋内お風呂、屋外プール（ヒーリングプール・多目的プール・浅瀬プール）、低温サウナ、クールダウンルーム", "https://www.hotespa.net/spa/chula-u/"),
      factNov14("利用条件", "多目的プール・浅瀬プール・クールダウンルームは2026年12月1日〜2027年3月中旬まで冬季休業", "https://www.hotespa.net/spa/chula-u/"),
    ],
  },
  {
    ids: ["st-okinawa-118"], name: "琉球温泉 龍神の湯", officialUrl: "https://www.resorts.co.jp/senaga/ryujinhotspring",
    features: ["ロウリュあり", "スチーム(ミスト)サウナ", "塩サウナ", "水風呂あり", "外気あり", "温泉付き", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "宿泊者無料。日帰りは大人 全日2,000円、小人 全日1,000円（入湯税・消費税込、バスタオル・フェイスタオル付）", "https://www.resorts.co.jp/senaga/ryujinhotspring"),
      factNov14("営業時間", "6:00〜24:00（最終受付23:00）。浴場は金龍・銀龍の日替わり制", "https://www.resorts.co.jp/senaga/ryujinhotspring"),
      factNov14("定休日", "年中無休（台風等の荒天時は臨時休業の場合あり）", "https://www.resorts.co.jp/senaga/ryujinhotspring"),
      factNov14("設備", "天然温泉（泉質：ナトリウム塩化物-強塩泉）。金龍・銀龍ともロウリュサウナとミストサウナ（塩サウナ）、露天風呂（立ち湯・壺湯・岩湯／寝湯）、内湯", "https://www.resorts.co.jp/senaga/ryujinhotspring"),
      factNov14("水風呂", "ナノ水の水風呂、水温17℃前後", "https://www.resorts.co.jp/senaga/ryujinhotspring"),
      factNov14("利用条件", "日帰り入浴可。タトゥー・刺青のある方、日常的におむつを着用されている方は入浴不可。熱風ロウリュは1日5回（9時/14時/17時/19時/21時）開催", "https://www.resorts.co.jp/senaga/ryujinhotspring"),
    ],
  },
  {
    ids: ["manual-hotel-apa-11"], name: "アパホテル＆リゾート〈札幌〉", officialUrl: "https://www.apahotel.com/resort/sapporo/", address: "〒005-0804 北海道札幌市南区川沿4条2丁目1-1", city: "札幌市",
    features: [],
    facts: [
      factNov14("営業時間", "大浴殿の午後営業は通常15:00開始。2026年11月16日〜20日はサウナ改修工事のため18:00〜24:00に変更、期間中の朝のサウナは6:00〜8:00のみ利用可", "https://www.apahotel.com/resort/sapporo/news/detail-1618.html"),
      factNov14("設備", "大浴殿内にサウナあり（公式お知らせが大浴殿内のサウナ改修工事を案内）", "https://www.apahotel.com/resort/sapporo/news/detail-1618.html"),
      { label: "大浴場・サウナ", value: "6:00～10:00 / 15:00～24:00", sourceUrl: "https://www.apahotel.com/resort/sapporo/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["manual-hotel-routeinn-05"], name: "ホテルルートイン仙台東", officialUrl: "https://www.route-inn.co.jp/hotel_list/miyagi/index_hotel_id_664/", address: "〒984-0011 宮城県仙台市若林区六丁の目西町1-60", city: "仙台市",
    features: ["宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場 利用時間 15：00～2：00／5：00～10：00", "https://www.route-inn.co.jp/datas/files/2025/07/12/07c2a25087ecc9d594830320e2c03bd669bfc831.pdf"),
      factNov14("設備", "ラジウム人工温泉大浴場", "https://www.route-inn.co.jp/datas/files/2025/07/12/07c2a25087ecc9d594830320e2c03bd669bfc831.pdf"),
      { label: "大浴場・サウナ", value: "15:00～2:00 / 5:00～10:00", sourceUrl: "https://www.route-inn.co.jp/hotel_list/miyagi/index_hotel_id_664/", checkedAt: "2026-11-08" },
    ],
  },
  {
    ids: ["st-hokkaido-1131"], name: "ホテルモントレエーデルホフ札幌 カルロビ・バリ・スパ", officialUrl: "https://www.hotelmonterey.co.jp/edelhof/spa/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "14:00～23:00（最終入浴受付 22:30）／朝風呂 7:00～10:00（最終入浴受付 9:30）", "https://www.hotelmonterey.co.jp/edelhof/spa/"),
      factNov14("定休日", "休館日あり（2026年は9月7日・10月5日・11月9日・12月7日ほか、公式ページに日程一覧を掲載）", "https://www.hotelmonterey.co.jp/edelhof/spa/"),
      factNov14("設備", "本館14階の天然温泉スパ「カルロビ・バリ・スパ」。泉質はナトリウム-塩化物泉（加水・加温・循環ろ過式）", "https://www.hotelmonterey.co.jp/edelhof/spa/"),
      factNov14("利用条件", "宿泊者専用（無料）。日帰り入浴サービスは2024年3月31日をもって終了。入れ墨・タトゥー等のボディーペイントのある方は入場不可。18歳未満は保護者同伴", "https://www.hotelmonterey.co.jp/edelhof/spa/"),
    ],
  },
  {
    ids: ["st-aomori-944"], name: "青森まちなかおんせん", officialUrl: "https://aomori.atinnhotels.com/onsen",
    features: ["温泉付き", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り入浴料 おとな530円・こども200円・乳幼児100円（青森センターホテル宿泊者は宿泊料金に入浴料を含む）", "https://aomori.atinnhotels.com/onsen"),
      factNov14("営業時間", "日帰り利用時間 6：00～24：00（最終入場 23:30）", "https://aomori.atinnhotels.com/onsen"),
      factNov14("設備", "自家源泉掛け流しの天然温泉（源泉名：古川温泉／泉質：ナトリウム-塩化物泉／泉温45.1°C）", "https://aomori.atinnhotels.com/onsen"),
      factNov14("利用条件", "タオル貸出セット（バスタオル・フェイスタオル一式）270円、手ぶらセット（タオル一式・歯ブラシ・かみそり）430円", "https://aomori.atinnhotels.com/onsen"),
    ],
  },
  {
    ids: ["st-aomori-4376"], name: "浅虫温泉 椿館", officialUrl: "https://www.aomori-tsubakikan.com/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "源泉掛け流し温泉「椿の湯」。9本の自家源泉の大浴場・露天風呂・広いサウナ。泉質は単純温泉（低張性弱アルカリ性高温泉）", "https://www.aomori-tsubakikan.com/"),
    ],
  },
  {
    ids: ["st-iwate-1337"], name: "喜盛の湯", officialUrl: "http://kimorinoyu.com/",
    features: ["温泉付き", "水風呂あり", "ロウリュあり", "オートロウリュ", "スチーム(ミスト)サウナ", "塩サウナ", "サ飯あり"],
    facts: [
      factNov14("料金", "朝風呂 大人 平日700円・土日祝750円、ご入浴 大人 平日900円・土日祝950円、小学生350円、幼児（4歳以上）無料、アロマ岩盤浴500円（岩盤浴衣・大タオル付き）、回数券10回分7,900円", "http://kimorinoyu.com/price/"),
      factNov14("営業時間", "ご入浴 朝6時～深夜2時（最終受付 深夜1時30分）、岩盤浴 朝6時～深夜1時30分（最終受付 深夜12時）、朝風呂 朝6時～朝9時", "http://kimorinoyu.com/price/"),
      factNov14("定休日", "年中無休", "http://kimorinoyu.com/"),
      factNov14("水風呂", "超冷水風呂（10℃未満）と水風呂あり", "http://kimorinoyu.com/bath/"),
      factNov14("設備", "11種類のお風呂（高濃度炭酸泉・露天岩風呂・スーパー電気風呂等）、男性バズーカロウリュサウナ（ロウリュは毎時00分・30分開始）、女性オートロウリュサウナ・漢方スチーム塩サウナ、岩盤浴、お食事処あり", "http://kimorinoyu.com/bath/"),
      factNov14("利用条件", "サウナ・岩盤浴の利用は中学生以上。入館料金にタオルは含まれない。入れ墨・タトゥー（シール類を含む）の方はお断り", "http://kimorinoyu.com/price/"),
    ],
  },
  {
    ids: ["st-miyagi-4331"], name: "カプセルホテル とぽす 仙台駅西口", officialUrl: "https://topos-hotel.jp/",
    features: ["ドライサウナ", "水風呂あり", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("営業時間", "温浴 AM11:00～翌日AM9:30まで利用可能（清掃時間9:30～11:00は利用不可）。宿泊はチェックイン15:00～・チェックアウト10:00", "https://topos-hotel.jp/"),
      factNov14("料金", "温浴（露天風呂・サウナ利用）2時間コース ビジター1,400円、平日6時間コース ビジター2,600円、平日フリータイム ビジター1,200円。タオルセット・館内着セット各300円", "https://topos-hotel.jp/"),
      factNov14("設備", "大浴場、露天風呂、サウナ、飲食スペース、パウダールーム等。カプセルホテル併設", "https://topos-hotel.jp/"),
      factNov14("利用条件", "男性専用施設。刺青・タトゥーの方、泥酔状態の方は入館不可。専用駐車場なし", "https://topos-hotel.jp/"),
    ],
  },
  {
    ids: ["st-yamagata-1377"], name: "スーパー銭湯テルメ", officialUrl: "https://terme-mg.com/",
    features: ["サ飯あり"],
    facts: [
      factNov14("営業時間", "月〜土曜日・祝日 10:00〜24:00、日曜日 6:00〜24:00", "https://terme-mg.com/"),
      factNov14("料金", "大人入浴券700円、シニア割引（65才以上）入浴料700円→600円、学生割引入浴料700円→600円", "https://terme-mg.com/"),
    ],
  },
  {
    ids: ["st-fukushima-4328"], name: "花ももの湯", officialUrl: "http://www.hotel-juraku.co.jp/hanamomonoyu/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("利用条件", "日帰り入浴ならびにランチバイキングの営業は2026年6月30日をもって終了。2026年7月1日より宿泊者専用営業", "http://www.hotel-juraku.co.jp/hanamomonoyu/"),
    ],
  },
  {
    ids: ["st-fukushima-1499"], name: "郡山温泉", officialUrl: "http://www.koriyamaonsen.jp/",
    features: ["ドライサウナ", "水風呂あり", "外気あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "源泉かけ流しのアルカリ性単純温泉。内湯、露天岩風呂、露天寝湯、打たせ湯、遠赤外線サウナ、水風呂あり", "http://www.koriyamaonsen.jp/"),
      factNov14("利用条件", "日帰り入浴・各種宴会・宿泊に対応。入湯税は現地にて別途（現金のみ）支払い", "http://www.koriyamaonsen.jp/"),
    ],
  },
  {
    ids: ["st-fukushima-1467"], name: "月光温泉クアハイム", officialUrl: "http://www.gekkouonsen.co.jp/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入浴1日コース通常1,700円（風呂の日は1,000円）", "https://gekkouonsen.co.jp/news/furo/"),
    ],
  },
  {
    ids: ["st-fukushima-1487"], name: "富士の湯(会津若松)", officialUrl: "http://fujinoyu.jp/",
    features: ["外気あり", "温泉付き"],
    facts: [
      factNov14("設備", "露天風呂あり（2026年12月1日〜2027年3月31日の冬期間は露天風呂を休止）", "http://fujinoyu.jp/"),
    ],
  },
  {
    ids: ["st-ibaraki-1666"], name: "あそう温泉白帆の湯", officialUrl: "https://shirahonoyu.com/",
    features: ["スチーム(ミスト)サウナ", "外気あり", "温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "大人740円、子供・障がい者310円。17:00以降は大人530円、子供・障がい者210円。入湯税150円別。レンタルタオル・レンタル作衣は有料", "https://shirahonoyu.com/"),
      factNov14("設備", "お風呂はすべて最上階。展望露天風呂、内湯、薬湯、ジェットバス、サウナ（湿度が高く体への負担が少ない）", "https://shirahonoyu.com/"),
    ],
  },
  {
    ids: ["st-ibaraki-4410"], name: "つくばウェルネスパーク", officialUrl: "https://tsukuba-wp.com/",
    features: ["外気あり"],
    facts: [
      factNov14("料金", "ヘルスプラザ利用料（1回につき）大人（中学生以上）730円、小人（満3歳以上）410円、満65歳以上410円。上記料金で温浴施設・トレーニングルーム・プールが利用可", "https://tsukuba-wp.com/area_A/"),
      factNov14("営業時間", "ヘルスプラザ（本棟）平日10:00～22:00、土日祝9:00～22:00（最終受付21:15）", "https://tsukuba-wp.com/area_A/"),
      factNov14("定休日", "エリアA・Dは毎月第1・第3木曜日（祝日の場合はその翌週）。全エリア12月31日・1月1日", "https://tsukuba-wp.com/sisetu/"),
      factNov14("設備", "温浴施設（浴室・露天風呂・サウナ）、25mプール・幼児用プール、トレーニングルーム、研修室", "https://tsukuba-wp.com/sisetu/"),
      factNov14("利用条件", "貸切風呂あり（身体等不自由な方・介助者が必要な高齢者に限る）", "https://tsukuba-wp.com/area_A/"),
    ],
  },
  {
    ids: ["st-hokkaido-970"], name: "極楽湯さっぽろ弥生店", officialUrl: "", status: "closed",
    features: [],
    facts: [
      factNov14("営業状況", "閉店（2021年8月31日をもって閉店。建物所有のJR北海道と運営の北海道キヨスクが2021年4月13日付で公式発表）", "https://www.jrhokkaido.co.jp/CM/Info/press/pdf/210413_KO_Gokurakuyu.pdf"),
    ],
  },
  {
    ids: ["st-fukushima-1446"], name: "郡山湯処 まねきの湯", officialUrl: "", status: "closed",
    features: [],
    facts: [
      factNov14("営業状況", "閉館（2025年9月30日をもって閉館。運営会社コシダカホールディングスの公式開示による。同社の温浴事業は終了）", "https://finance.logmi.jp/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM0JpQXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cceb0c3112dbf539282a88511e8169a4bc779472/20250819544154_pdf_general.pdf"),
    ],
  },
  {
    ids: ["st-oita-819"], name: "北浜温泉・テルマス", officialUrl: "https://www.city.beppu.oita.jp/sisetu/shieionsen/detail8.html", status: "closed",
    features: [],
    facts: [
      factNov14("営業状況", "閉館（別府市営施設。2022年3月31日に廃止。別府市公式の廃止後の財産有効活用に関する調査文書で確認）", "https://www.city.beppu.oita.jp/doc/sangyou/onsen/sounding2/03.pdf"),
    ],
  },
  {
    ids: ["st-ibaraki-1654"], name: "湯楽の里 土浦店", officialUrl: "https://www.yurakirari.com/yura/tsuchiura/",
    features: ["ロウリュあり", "温泉付き", "外気あり"],
    facts: [
      factNov14("営業時間", "9:00～25:00（全日）", "https://www.yurakirari.com/yura/tsuchiura/"),
      factNov14("料金", "￥350～￥950（公式サイト表示の価格帯）", "https://www.yurakirari.com/yura/tsuchiura/"),
      factNov14("設備", "天然温泉、露天風呂、高濃度炭酸泉（1,000ppm）、ロウリュウサウナ", "https://www.yurakirari.com/yura/tsuchiura/"),
    ],
  },
  {
    ids: ["st-gunma-1594"], name: "テルメテルメ", officialUrl: "https://www.hotelvillage.co.jp/therme",
    features: ["温泉付き"],
    facts: [
      factNov14("料金", "温泉コース（一般・税込）大人 平日930円・土/日/特日1,150円、小学生・幼児（3〜6才）平日440円・土/日/特日660円。プール・温泉コース 大人 平日1,480円・土/日/特日1,920円", "https://www.hotelvillage.co.jp/therme"),
      factNov14("営業時間", "平日11:00～20:00、土/日/特日10:00～20:00、夏季期間9:30～20:00（最終入場19:30）", "https://www.hotelvillage.co.jp/therme"),
      factNov14("定休日", "休館日（年3回）", "https://smilelife.pref.gunma.jp/childrearing/passport/17716/"),
      factNov14("設備", "屋内プール・屋外プール（夏季限定）、万代鉱源泉とわたの湯の2源泉の浴場、サウナ、休憩所", "https://www.hotelvillage.co.jp/therme"),
      factNov14("利用条件", "日帰り利用可。13歳未満のお子様は保護者同伴必須。プールはスイミングキャップ着用必須（無料レンタルあり）", "https://www.hotelvillage.co.jp/therme"),
    ],
  },
  {
    ids: ["st-saitama-1686"], name: "にいざ温泉", officialUrl: "https://www.fantasy.co.jp/oyugiwa/niizaonsen/",
    features: ["ロウリュあり", "熱波師あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入館料 大人 平日900円／土日祝1,000円、子ども400円（3歳～小学生）", "https://www.fantasy.co.jp/company/wp-content/uploads/2026/05/FINAL_20260526_OYUGIWA_niiza.pdf"),
      factNov14("営業時間", "9:00～25:00（最終受付24:30）。レストラン10:00～23:00（ラストオーダー22:30）", "https://www.fantasy.co.jp/company/wp-content/uploads/2026/05/FINAL_20260526_OYUGIWA_niiza.pdf"),
      factNov14("設備", "天然温泉、新設のロウリュサウナ（フィンランド産サウナストーン採用）、レストラン、キッズコーナー「お子さま広場」。3と7のつく日は「熱波の日」としてスタッフの熱波イベントを開催", "https://www.fantasy.co.jp/company/wp-content/uploads/2026/05/FINAL_20260526_OYUGIWA_niiza.pdf"),
    ],
  },
  {
    ids: ["st-saitama-1697"], name: "春日部温泉 湯楽の里", officialUrl: "https://www.yurakirari.com/yura/kasukabe/",
    features: ["ロウリュあり", "温泉付き", "外気あり", "サ飯あり"],
    facts: [
      factNov14("料金", "大人（中学生以上）平日1,050円・土・休日1,150円、こども（4歳～小学生）平日430円・土・休日530円（3歳以下無料）、カード入館回数券10回分9,400円、いずれも税込", "https://www.yurakirari.com/yura/kasukabe/fee.html"),
      factNov14("営業時間", "9時～深夜1時（最終受付24時30分）", "https://www.yurakirari.com/yura/kasukabe/"),
      factNov14("設備", "天然温泉、露天風呂、高濃度炭酸泉、ロウリュウサウナ、お食事処", "https://www.yurakirari.com/yura/kasukabe/"),
    ],
  },
  {
    ids: ["st-chiba-1753"], name: "船橋温泉 湯楽の里", officialUrl: "https://www.yurakirari.com/funabashi/",
    features: ["オートロウリュ", "ロウリュあり", "塩サウナ", "水風呂あり", "温泉付き", "外気あり"],
    facts: [
      factNov14("料金", "大人 平日980円・土・休日1,150円、こども（4歳～小学生）平日450円・土・休日550円（3歳以下無料）、岩盤浴500円、いずれも税込", "https://www.yurakirari.com/funabashi/"),
      factNov14("営業時間", "9時～深夜1時（最終受付24時）", "https://www.yurakirari.com/funabashi/"),
      factNov14("設備", "源泉名「湯楽の里 船橋温泉」（含よう素-ナトリウム-塩化物強塩泉）、露天風呂は源泉加温かけ流し、高濃度炭酸泉（1,000ppm）、塩サウナ", "https://www.yurakirari.com/funabashi/spa/"),
      factNov14("設備", "男湯・女湯にオートロウリュウ（9時30分～24時、毎時00分・30分開始）。男湯ではスタッフのロウリュウパフォーマンス（現在はサイレント形式で不定期開催）", "https://www.yurakirari.com/funabashi/spa/"),
      factNov14("水風呂", "水風呂あり", "https://www.yurakirari.com/funabashi/spa/"),
    ],
  },
  {
    ids: ["st-chiba-1764"], name: "南増尾健美の湯", officialUrl: "http://kashiken.3riku.co.jp/index.html",
    features: ["オートロウリュ", "ロウリュあり", "サ飯あり"],
    facts: [
      factNov14("設備", "男性サウナにオートロウリュウ（2026年4月30日付お知らせで復旧を告知）。月例でアウフグースイベントを開催。食事処あり（ラーメン・蕎麦等の麺類、定食、アルコール類）", "http://kashiken.3riku.co.jp/index.html"),
    ],
  },
  {
    ids: ["st-tokyo-3127"], name: "センチュリオンホテル＆スパ上野駅前", officialUrl: "https://www.centurion-hotel.com/ueno-sta/",
    features: ["宿泊可"],
    facts: [
      factNov14("利用条件", "日帰り入浴の受付あり（公式サイト新着情報に2026.03.24付『日帰り料金改定のお知らせ』を掲載）", "https://www.centurion-hotel.com/ueno-sta/"),
    ],
  },
  {
    ids: ["st-kanagawa-1977"], name: "天然温泉・満天の湯", officialUrl: "https://mantennoyu.com/",
    features: ["オートロウリュ", "ロウリュあり", "スチーム(ミスト)サウナ", "塩サウナ", "水風呂あり", "外気あり", "温泉付き", "熱波師あり", "サ飯あり"],
    facts: [
      factNov14("営業時間", "朝6時から営業", "https://mantennoyu.com/"),
      factNov14("設備", "タワーサウナ（毎時間加湿するオートロウリュ）、スチーム塩サウナ（50度）、天然温泉の露天岩風呂・壺湯・シルクの湯、内湯（和漢炭酸湯・日替わり風呂・各種ジェットバス）", "https://mantennoyu.com/ofuro/"),
      factNov14("水風呂", "満天名物、ミントが香る水風呂", "https://mantennoyu.com/ofuro/"),
    ],
  },
  {
    ids: ["st-niigata-2075"], name: "ひすいの湯", officialUrl: "https://hisuinoyu.com/",
    features: ["温泉付き", "個室", "タオルレンタルあり"],
    facts: [
      factNov14("営業時間", "12:00～22:00（受付終了21:30）、年中無休", "https://hisuinoyu.com/"),
      factNov14("料金", "昼（12:00～16:00）大人（中学生以上）1,000円・子供（3才以上）550円／夜（16:00～22:00）大人800円・子供500円。レンタルタオルセット200円、浴衣200円", "https://hisuinoyu.com/"),
      factNov14("設備", "フォッサマグナから湧き出る化石海水型温泉の日帰り温泉施設。温水プール（12:00～21:00）併設。個室『明星』（風呂・TV・トイレ付）2時間3,000円、個室『黒姫』（TV付）3時間3,000円", "https://hisuinoyu.com/"),
    ],
  },
  {
    ids: ["st-niigata-4277"], name: "みつけ健幸の湯 ほっとぴあ", officialUrl: "http://www.hotpia.jp/",
    features: [],
    facts: [
      factNov14("料金", "入浴のみ平日：大人（中学生以上）880円・65歳以上650円・小人（小学生以下）300円、土日祝：980円・750円・350円（2歳まで無料）。入浴+岩盤浴は平日1,580円・土日祝1,730円（いずれも大人）", "http://www.hotpia.jp/pdf/price2505-2.pdf"),
      factNov14("営業時間", "8:00～23:00（最終入場22:30）。12月31日は8:00～20:00（最終入場19:30）", "http://www.hotpia.jp/pdf/251217.pdf"),
    ],
  },
  {
    ids: ["st-niigata-2080"], name: "桂の関温泉ゆーむ", officialUrl: "https://www.sekikawamura.org/yu-mu",
    features: ["温泉付き", "外気あり"],
    facts: [
      factNov14("営業時間", "午前10時～午後9時30分", "https://www.sekikawamura.org/yu-mu"),
      factNov14("定休日", "毎月第3水曜日（その日が休日の場合は翌日）", "https://www.sekikawamura.org/yu-mu"),
      factNov14("料金", "入館料：大人700円（12歳以上）・大人（村民等）500円・小人300円（4歳未満無料）・障がい者及び介助者300円", "https://www.sekikawamura.org/yu-mu"),
      factNov14("設備", "男女大浴場・露天風呂・サウナ・気泡浴槽・女性専用歩行浴槽・休憩室・カラオケルーム等。泉質はナトリウム・カルシウム硫酸塩温泉", "https://www.sekikawamura.org/yu-mu"),
    ],
  },
  {
    ids: ["st-niigata-2078"], name: "福寿温泉じょんのび館", officialUrl: "https://www.jonnobi.com/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("営業時間", "午前10時から午後10時", "https://www.city.niigata.lg.jp/nishikan/shisetsu/yoka/jonnobi.html"),
      factNov14("定休日", "第1・第3水曜日（1月・12月は扱いが異なる旨の記載あり）、1月1日・12月31日", "https://www.city.niigata.lg.jp/nishikan/shisetsu/yoka/jonnobi.html"),
      factNov14("料金", "大人（中学生以上）880円・小人（小学生）400円・小学生未満無料", "https://www.city.niigata.lg.jp/nishikan/shisetsu/yoka/jonnobi.html"),
      factNov14("設備", "内湯『平家蛍の湯』（スチームサウナ・ドライサウナ）と『源氏蛍の湯』（森のサウナ・ドライサウナ）が日替わりで男女入替。角田山の天然水を使った水風呂、食堂（じょんのび食堂）あり", "https://www.jonnobi.com/"),
    ],
  },
  {
    ids: ["st-ishikawa-4381"], name: "金沢マンテンホテル", officialUrl: "https://www.manten-hotel.com/kanazawa/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場：夜15：00～24：00、朝5：00～10：00", "https://www.manten-hotel.com/kanazawa/onsen/"),
      factNov14("設備", "男湯：高温サウナ・水風呂・露天風呂、女湯：ハーブミストサウナ。泉質はラジウム人工泉、大浴場は2階", "https://www.manten-hotel.com/kanazawa/onsen/"),
      factNov14("水風呂", "男湯に水風呂あり", "https://www.manten-hotel.com/kanazawa/onsen/"),
    ],
  },
  {
    ids: ["st-ishikawa-4400"], name: "小松グリーンホテル", officialUrl: "https://www.komatsu-gh.jp/",
    features: ["温泉付き", "ドライサウナ", "水風呂あり", "外気あり", "個室", "貸切可", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り入浴：大人1名500円、小学生1名150円、小学生未満1名70円、サウナご利用の方は1名300円。回数券（入浴券6枚綴り）2,800円", "https://www.komatsu-gh.jp/spa.html"),
      factNov14("料金", "貸切家族風呂『十湯物語』：60分1,800円～2,200円、サウナ・水風呂・露天風呂付きタイプ（加賀平野・白山）は90分2,800円", "https://www.komatsu-gh.jp/private.html"),
      factNov14("営業時間", "日帰り入浴 9：00～24：00（最終受付23：30）。宿泊者はチェックイン～24：00・5：00～チェックアウト、大浴場は無料", "https://www.komatsu-gh.jp/spa.html"),
      factNov14("設備", "源泉掛け流し天然温泉の大浴場（泉質：ナトリウム－塩化物泉、源泉名：小松グリーン温泉）。貸切家族風呂『十湯物語』は完全個室・全室バリアフリーの全10室", "https://www.komatsu-gh.jp/private.html"),
      factNov14("水風呂", "サウナには鉄分を多く含む水風呂あり", "https://www.komatsu-gh.jp/spa.html"),
    ],
  },
  {
    ids: ["si-ishikawa-34534"], name: "ROKU : 金沢 private sauna", officialUrl: "https://coubic.com/roku_sauna",
    features: ["ドライサウナ", "個室", "貸切可"],
    facts: [
      factNov14("営業時間", "月〜金 10:00 - 21:00、土・日 10:00 - 21:00", "https://coubic.com/roku_sauna"),
      factNov14("設備", "ヒノキを使った円形の本格フィンランド式プライベートサウナ（金沢駅徒歩8分、マンション2階の一室）", "https://coubic.com/roku_sauna"),
      factNov14("利用条件", "予約制の部屋貸切。同性でのご利用のみ（異性でのご利用は出来ません）。ご予約は2週間先まで受け付け", "https://coubic.com/roku_sauna"),
    ],
  },
  {
    ids: ["st-ishikawa-2231"], name: "法師", officialUrl: "http://ho-shi.co.jp/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場：15：00～24：00、翌朝6：00～10：00（2026年9月1日より変更）", "https://www.ho-shi.co.jp/info/news2/2161"),
      factNov14("利用条件", "日帰り入浴は15：00～18：00（最終入浴受付時間17：00）。ご宿泊のお客様が優先のため繁忙期は受付をしていない", "https://www.ho-shi.co.jp/info/news2/2161"),
    ],
  },
  {
    ids: ["st-fukui-2257"], name: "九頭竜温泉", officialUrl: "https://heiseinoyu.com/",
    features: ["温泉付き", "ドライサウナ"],
    facts: [
      factNov14("料金", "大人（中学生以上）800円、大野市民700円、市民65歳以上600円、障がい者・介護者500円、子ども（3歳以上）400円、市民の子ども350円、障がい児250円", "https://heiseinoyu.com/"),
      factNov14("営業時間", "平日 14:00 – 21:00／土日祝 10:00 – 21:00（最終入館は閉館の1時間前）。冬期（12月〜3月）は20:00まで", "https://heiseinoyu.com/"),
      factNov14("定休日", "火曜・水曜、元旦（祝日の場合は直近の平日が休館）", "https://heiseinoyu.com/"),
      factNov14("設備", "五右衛門風呂、大きな窓の内湯、サウナ。泉質はアルカリ性単純温泉（自噴源泉100％、源泉名：九頭竜温泉）", "https://heiseinoyu.com/"),
    ],
  },
  {
    ids: ["st-fukui-2251"], name: "敦賀きらめき温泉リラ・ポート", officialUrl: "https://www.relaport.jp/",
    features: ["温泉付き", "ドライサウナ"],
    facts: [
      factNov14("設備", "バーデプール、レストラン、キッズルーム、フィットネスルーム、休憩スペース、売店（公式サイトのサービス案内）", "https://www.relaport.jp/"),
      factNov14("利用条件", "刺青・タトゥー（シール含む）のある方、泥酔者・暴力団関係者等の入館は不可。飲食物の持ち込み不可、小学生以上のお子様の混浴は不可", "https://www.relaport.jp/"),
    ],
  },
  {
    ids: ["st-yamanashi-2420"], name: "山梨日帰り温泉 湯めみの丘", officialUrl: "http://yumemionsen.pepper.jp/",
    features: ["温泉付き"],
    facts: [
      factNov14("利用条件", "介護用パンツご使用の方、オムツが取れていないお子様、生理中の方、泥酔されている方、入れ墨のある方、おでき等のある方は入浴できない（公式サイトの案内）", "http://yumemionsen.pepper.jp/"),
    ],
  },
  {
    ids: ["st-yamanashi-2411"], name: "石和健康ランド", officialUrl: "https://www.kur-hotel.co.jp/isawa/",
    features: ["宿泊可", "温泉付き"],
    facts: [
      factNov14("料金", "入館料 一般大人（中学生以上）1,980円、子供（3歳～小学生）990円、会員1,540円、団体割引（10名様以上）1,760円、回数券（8枚綴り）11,000円", "https://www.kur-hotel.co.jp/isawa/fee"),
      factNov14("料金", "滞在中に03:00を超えると深夜割増1,320円。岩盤浴は入り放題550円、入館料とのセットプラン一般2,380円・会員1,940円", "https://www.kur-hotel.co.jp/isawa/fee"),
      factNov14("営業時間", "終日営業。清掃時間（男湯04:00～05:00、女湯03:00～04:00）以外はいつでも入浴可能。岩盤浴の営業時間は10:00～翌08:00", "https://www.kur-hotel.co.jp/isawa/fee"),
      factNov14("利用条件", "入館料は日帰り入浴のお客様のみ適用され、宿泊のお客様は入館無料。宿泊当日はホテルチェックイン（15:00）前の10:00から健康ランドを無料利用可", "https://www.kur-hotel.co.jp/isawa/fee"),
    ],
  },
  {
    ids: ["st-nagano-2283"], name: "八峰の湯", officialUrl: "https://www.yahho-onsen.jp/",
    features: ["温泉付き", "熱波師あり", "サ飯あり"],
    facts: [
      factNov14("料金", "入館料 大人700円（平日割引-100円）、子ども300円（4歳～小学生、平日割引-100円）※GW・お盆・年末年始は平日割引なし。岩盤浴は別途500円。入館時に入湯税+50円", "https://www.yahho-onsen.jp/"),
      factNov14("料金", "大人回数券（12回分）7,000円、子供回数券（12回分）3,000円、入浴＆岩盤浴回数券（5回分）4,000円、温泉会員 半年15,000円・3ヶ月7,500円", "https://www.yahho-onsen.jp/"),
      factNov14("営業時間", "10:00～21:00（最終受付20:00）。お食事処 10:00～20:00（ラストオーダー）", "https://www.yahho-onsen.jp/"),
      factNov14("定休日", "2026年度メンテナンス休館日：11月4日・5日、2027年1月13日・14日、3月3日・4日", "https://www.yahho-onsen.jp/"),
    ],
  },
  {
    ids: ["manual-gifu-yohaku"], name: "YOHAKU｜サウナ付き貸切宿", officialUrl: "https://itadori-sauna.com/",
    features: ["貸切可", "宿泊可", "薪サウナ", "外気あり"],
    facts: [
      factNov14("料金", "YOHAKU-庵（AN）¥39,800〜、YOHAKU-苑（EN）¥85,000〜（運営ITADORI SAUNA公式サイトの宿泊案内）", "https://itadori-sauna.com/"),
      factNov14("利用条件", "サウナ付き一棟貸しの宿。庵（AN）は定員4名・テントサウナ付き、苑（EN）は最大10名・TAMAGO SAUNA付きで2026年7月オープン", "https://itadori-sauna.com/"),
    ],
  },
  {
    ids: ["st-gifu-4680"], name: "田辺温熱保養所", officialUrl: "https://r.goope.jp/dlwnsghek1985",
    features: ["スチーム(ミスト)サウナ"],
    facts: [
      factNov14("設備", "薬草の蒸気による樽蒸し・蒸し風呂（日本古来の蒸気風呂）を公式サイトで案内", "https://r.goope.jp/dlwnsghek1985"),
    ],
  },
  {
    ids: ["manual-shizuoka-fujinos"], name: "HOTEL & SAUNA FUJINOS", officialUrl: "https://fujino-s.com/",
    features: ["貸切可", "個室", "水風呂あり", "セルフロウリュ", "宿泊可", "外気あり"],
    facts: [
      factNov14("料金", "貸切サウナ スタンダードプラン（120min）：1名様8,900円、2名様10,900円、3名様12,400円、4名様13,900円", "https://fujino-s.com/sauna/"),
      factNov14("営業時間", "貸切サウナ（Sui翠／Sou蒼）利用時間 朝6:00～翌2:30（最終入場24:30）", "https://fujino-s.com/sauna/"),
      factNov14("営業時間", "屋上ソラサウナ（宿泊者専用）朝4:30～9:00、夜16:00～22:00（入場は21:30まで）", "https://fujino-s.com/hotel/"),
      factNov14("水風呂", "富士山の天然地下水を使用した水風呂（貸切サウナ）。ソラサウナにも富士の天然水風呂あり", "https://fujino-s.com/sauna/"),
      factNov14("利用条件", "貸切サウナはWEBでの事前予約制・決済はクレジットカード。保護者同伴のない18歳未満は利用不可。ソラサウナは水着着用必須・定員4名・刺青（入れ墨）のある方は利用不可", "https://fujino-s.com/sauna/"),
      factNov14("利用条件", "チェックイン15:30～23:00、チェックアウト10:00。全13室の無人フロント・非接触型ホテルで、入館には予約時に発行する暗証番号が必要", "https://fujino-s.com/hotel/"),
    ],
  },
  {
    ids: ["manual-shizuoka-capsule-inn"], name: "HOTEL CAPSULE INN SHIZUOKA", officialUrl: "https://capsuleinn-shizuoka.jp/",
    features: ["宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "宿泊価格（税込・1泊）シングル¥4,000-～/人、グループ¥6,000-～/室、個室¥9,900-～/人 ※土日祝前日などは変動する場合あり", "https://capsuleinn-shizuoka.jp/"),
      factNov14("利用条件", "チェックイン16:00～24:00、チェックアウト10:00まで。全館禁煙、専用駐車場なし（近隣コインパーキング利用）。18歳未満のみの宿泊は親権者の同意書が必要", "https://capsuleinn-shizuoka.jp/"),
      factNov14("設備", "シャワールーム（6F）は16時～翌朝10時まで利用可能。無料サービス：館内着、バスタオル、フェイスタオル、シャンプー類、歯ブラシ、ドライヤー等", "https://capsuleinn-shizuoka.jp/"),
    ],
  },
  {
    ids: ["manual-shizuoka-thermal-climb-fuji"], name: "Thermal Climb Studio FUJI", officialUrl: "https://www.sauna-club.jp/",
    features: ["ロウリュあり", "水風呂あり", "貸切可", "男女共用"],
    facts: [
      factNov14("料金", "2時間コース ¥3,500（税込）※土日祝は利用不可／5時間コース ¥8,800（税込）", "https://www.sauna-club.jp/"),
      factNov14("営業時間", "10:00〜20:00（受付時間の公式表記）", "https://www.sauna-club.jp/"),
      factNov14("定休日", "火曜日", "https://www.sauna-club.jp/"),
      factNov14("設備", "5つのサウナ（ケロサウナ、マウンテンサウナ、テルマリウム、ベンベルグサウナ、キャンプ（エコ）サウナ）", "https://www.sauna-club.jp/"),
      factNov14("利用条件", "水着着用（無料レンタル可）。施設の貸切も可能。飲食物の持ち込み不可", "https://www.sauna-club.jp/"),
    ],
  },
  {
    ids: ["manual-shizuoka-fuua"], name: "オーシャンスパ Fuua", officialUrl: "https://www.atamibayresort.com/fuua/",
    features: ["温泉付き", "ロウリュあり", "熱波師あり", "外気あり", "タオルレンタルあり", "サ飯あり"],
    facts: [
      factNov14("料金", "基本料金 平日：大人3,080円・小人2,310円／土日祝日・特定日：大人3,410円・小人2,530円。アフター5（17時〜）平日大人2,310円、アフター8（20時〜）平日大人1,110円。別途入湯税150円", "https://www.atamibayresort.com/fuua/info/"),
      factNov14("営業時間", "10:00〜22:00（最終入館21:00）", "https://www.atamibayresort.com/fuua/info/"),
      factNov14("定休日", "休館日：2026年6月29日・30日、9月28日・29日、2027年1月5日・6日（ほかメンテナンス休館あり）", "https://www.atamibayresort.com/fuua/info/"),
      factNov14("設備", "展望サウナ、ロウリュ、岩盤浴、露天立ち湯、かけ流し露天湯など。入館料に館内着・タオルレンタル料を含む", "https://www.atamibayresort.com/fuua/info/"),
      factNov14("利用条件", "日帰り入浴可（事前予約不要）。0〜3歳は入館不可。18歳未満は保護者（20歳以上）の同伴が必要", "https://www.atamibayresort.com/fuua/info/"),
    ],
  },
  {
    ids: ["manual-shizuoka-sauna-tenryu"], name: "サウナ天竜", officialUrl: "https://www.saunatenryu.info/",
    features: ["薪サウナ", "外気あり", "貸切可"],
    facts: [
      factNov14("営業時間", "11：00～17：00", "https://www.saunatenryu.info/"),
      factNov14("設備", "8人用バレルサウナ2台、8人用テントサウナ3台（いずれも薪ストーブ）。サウナ温度90〜110度。外気浴エリアにインフィニティチェア50台等", "https://www.saunatenryu.info/"),
      factNov14("水風呂", "クールダウンは目の前の阿多古川を利用（川の水温は夏20度前後・冬7度前後）", "https://www.saunatenryu.info/"),
      factNov14("利用条件", "貸切予約は電話か公式LINEから。子どもの利用は6歳以上をお願い。雨天・強風時は中止の可能性あり。支払いは現金・PayPay", "https://www.saunatenryu.info/"),
    ],
  },
  {
    ids: ["manual-shizuoka-fujikaguyanoyu"], name: "ふじかぐやの湯", officialUrl: "https://sinkankyocleancenter.com/",
    features: ["個室", "サ飯あり"],
    facts: [
      factNov14("料金", "一般700円、小中学生350円、未就学児無料（富士市広報ふじ掲載の利用料）", "https://www.city.fuji.shizuoka.jp/documents/6461/rn2ola000002onl0.pdf"),
      factNov14("料金", "貸切個室・カラオケ室は各1時間1,000円（税込）", "https://sinkankyocleancenter.com/spas/#usage"),
      factNov14("営業時間", "9:00〜21:00", "https://sinkankyocleancenter.com/spas/#usage"),
      factNov14("定休日", "毎週月曜日（休日の場合は、次の休日でない日）、年末年始（12/29～1/3）", "https://sinkankyocleancenter.com/spas/#usage"),
      factNov14("設備", "炭酸泉・檜風呂・露天風呂・ジェットバス・サウナなど。個室型の小浴場（要予約）、大広間、レストランFUGAKU、貸切個室、カラオケ室", "https://sinkankyocleancenter.com/spas/#usage"),
      factNov14("利用条件", "タオルのレンタルはなし（販売：フェイスタオル150円、バスタオル500円）。7歳以上の男女混浴不可", "https://sinkankyocleancenter.com/spas/#usage"),
    ],
  },
  {
    ids: ["manual-shizuoka-rapec"], name: "ラペック静岡", officialUrl: "",
    features: [],
    facts: [
      factNov14("設備", "4階の男女更衣室にシャワー・浴室・サウナ施設が付属（静岡市の指定管理者募集要項による）。トレーニング場・フィットネス場を併設", "https://www.city.shizuoka.lg.jp/documents/59682/01-shizuoka-hontori-boshuyoko.pdf"),
    ],
  },
  {
    ids: ["manual-shizuoka-oasis-gotemba"], name: "御殿場スパリゾート オアシス御殿場", officialUrl: "http://www.oasisgotemba.com/",
    features: ["水風呂あり", "外気あり", "サ飯あり", "宿泊可"],
    facts: [
      factNov14("設備", "サウナ・水風呂・外気浴あり（公式サイト表記）。炭酸泉などバラエティーに富んだお風呂、館内調理の食事、ボディケア・あかすり等のリフレッシュコース", "http://www.oasisgotemba.com/"),
    ],
  },
  {
    ids: ["manual-shizuoka-waraku"], name: "工芸ノ宿 和楽", officialUrl: "https://craftinn-waraku.jp/",
    features: ["個室", "ロウリュあり", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "別邸の全5室にプライベートサウナと檜風呂を完備し、茶のロウリュが楽しめる", "https://craftinn-waraku.jp/room/"),
      factNov14("水風呂", "客室「和」には広々とした檜の水風呂があり、外気浴も可能", "https://craftinn-waraku.jp/room-a/"),
      factNov14("利用条件", "一棟貸しの宿泊施設。サウナは別邸客室のプライベートサウナで、公式サイトに日帰り入浴の案内はない", "https://craftinn-waraku.jp/room/"),
    ],
  },
  {
    ids: ["manual-shizuoka-izumi-sauna"], name: "泉サウナ", officialUrl: "https://coubic.com/izumi_sauna",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "貸切可", "個室", "男女共用", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "貸切料金（税込）平日 1名9,000円・2名10,000円・3名11,000円・4名12,000円／土日祝 1名9,000円・2名11,000円・3名13,000円・4名15,000円", "https://izumi-sauna.stores.jp/reserve/izumi_sauna/booking_pages#pageContent"),
      factNov14("営業時間", "平日8:00開始・土日6:00開始（開始枠は6時・8時・10時・12時・14時・16時・18時・20時・22時）。基本情報の営業時間は8:00〜23:59", "https://izumi-sauna.stores.jp/reserve/izumi_sauna/booking_pages#pageContent"),
      factNov14("設備", "サウナ113℃、緑茶のセルフロウリュ、水風呂（夏場13℃〜15℃・冬場15℃〜17℃）、外気浴ルーム、シャワー2基", "https://coubic.com/izumi_sauna"),
      factNov14("利用条件", "完全予約制（ネット予約のみ・クレジット事前決済、完全キャッシュレス）。サウナ90分＋休憩60分、最大4名。男女で入る際は水着着用必須（水着レンタル300円）", "https://izumi-sauna.stores.jp/reserve/izumi_sauna/booking_pages#pageContent"),
    ],
  },
  {
    ids: ["manual-shizuoka-chame-yudono"], name: "茶目湯殿", officialUrl: "https://www.tokinosumika.com/spa/chame", status: "suspended",
    features: ["薪サウナ", "セルフロウリュ", "ロウリュあり", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "温泉付き", "男女共用"],
    facts: [
      factNov14("営業状況", "営業一時休止中（時之栖公式の温泉一覧ページで明記。通常時の料金・営業時間は公式詳細ページ掲載の内容）", "https://www.tokinosumika.com/spa/"),
      factNov14("料金", "入場料金 1日券 平日2,000円・土日祝日2,500円／夜間券（18:00〜21:00）平日1,700円・土日祝日2,200円", "https://www.tokinosumika.com/spa/chame"),
      factNov14("営業時間", "10:00～21:00（最終受付20:00）。天空の湯と展望フィンランド風サウナは季節制（4〜10月 10:00〜19:00、11〜3月 10:00〜17:00）", "https://www.tokinosumika.com/spa/chame"),
      factNov14("定休日", "不定休", "https://www.tokinosumika.com/spa/chame"),
      factNov14("設備", "展望フィンランド風サウナ（薪ストーブ、セルフロウリュ可、男女共用・水着着用）、低温ミストサウナ、炭酸泉の露天風呂、内風呂、水風呂（富士山の地下水使用）。泉質はアルカリ性単純温泉（pH8.7）", "https://www.tokinosumika.com/spa/chame"),
      factNov14("利用条件", "18歳未満入館不可。入墨（タトゥー）のある方は入館不可。貸出水着500円。アメニティ（浴衣・タオル等）付き", "https://www.tokinosumika.com/spa/chame"),
    ],
  },
  {
    ids: ["manual-shizuoka-yunoki-no-sato"], name: "東静岡 天然温泉 柚木の郷", officialUrl: "https://www.yunokinosato.com/information.html",
    features: ["ロウリュあり", "スチーム(ミスト)サウナ", "水風呂あり", "温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入泉料 平日 大人（中学生以上）1,200円・子供（小学生以下）600円・3歳以下無料／土日祝 大人1,430円・子供700円・3歳以下無料。薬石健美房（岩盤浴）大人1,200円（入泉料が別途必要）", "https://www.yunokinosato.com/information.html"),
      factNov14("営業時間", "平日10:00〜深夜0時、土日祝9:00〜深夜0時（最終受付23:30）。薬石健美房は平日10:30〜・土日祝10:00〜（最終受付23:00）", "https://www.yunokinosato.com/information.html"),
      factNov14("定休日", "年中無休（施設メンテナンス日を除く）", "https://www.yunokinosato.com/information.html"),
      factNov14("設備", "8つのお風呂（岩風呂・炭酸泉・寝湯・源泉立湯・水風呂・あつ湯・ぬく湯・座湯）、熱風蒸屋（ロウリュウサウナ）、美潤蒸屋（ナノミストサウナ）、薬石健美房（岩盤浴6種）", "https://www.yunokinosato.com/information.html"),
      factNov14("利用条件", "タオルは入泉料に含まれない（フェイスタオル販売180円、バスタオルレンタル220円、入泉セット340円）。イレズミ（タトゥー・シールを含む）のある方は入館不可。全館禁煙（喫煙所あり）", "https://www.yunokinosato.com/information.html"),
    ],
  },
  {
    ids: ["manual-shizuoka-fujinokokoroyu"], name: "富士の心湯", officialUrl: "https://rembrandt-style.com/gotemba-komakado_info/spa_g",
    features: ["水風呂あり", "外気あり", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "一時利用者 平日 大人800円・小人400円／休日 大人1,000円・小人500円（税込）。宿泊者は無料", "https://rembrandt-style.com/gotemba-komakado_info/spa_g"),
      factNov14("営業時間", "一時利用者 6:00～23:00（最終入店22:00）。宿泊者 6:00～10:00／16:00～25:00（最終入店24:00）", "https://rembrandt-style.com/gotemba-komakado_info/spa_g"),
      factNov14("設備", "内風呂「富士山の湯」（設定41度）、露天風呂「お茶の湯」（設定42度）、溶岩石サウナと天然水風呂は男性のみ。湯は富士山の伏流水（地下100mから汲み上げ、天然バナジウム含有）", "https://rembrandt-style.com/gotemba-komakado_info/spa_g"),
      factNov14("利用条件", "入れ墨・タトゥーのある方は大浴場利用不可（宿泊者は客室浴室を利用）。オムツの取れていない乳幼児は利用不可。貸タオルセット300円", "https://rembrandt-style.com/gotemba-komakado_info/spa_g"),
    ],
  },
  {
    ids: ["st-mie-4794"], name: "987サウナ", officialUrl: "https://987sauna.pages.dev/",
    features: ["貸切可", "水風呂あり", "外気あり", "ロウリュあり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "完全貸切バレルサウナプラン 3時間 5,000円〜/人（2人利用7,000円/人、3人6,000円/人、4人5,500円/人、5人以上5,000円/人）", "https://987sauna.pages.dev/"),
      factNov14("営業時間", "10:00〜23:30", "https://987sauna.pages.dev/"),
      factNov14("定休日", "定休日なし", "https://987sauna.pages.dev/"),
      factNov14("設備", "バレルサウナ（完全貸切）、水風呂、外気浴スペース。ロウリュ可（オプション：アロマロウリュ300円、氷バケツ500円、追加薪300円、焚き火1,500円）", "https://987sauna.pages.dev/"),
      factNov14("利用条件", "完全貸切・予約制。バスタオル・フェイスタオル・ポンチョ・サウナハット・シャンプー類・ドライヤーは無料", "https://987sauna.pages.dev/"),
    ],
  },
  {
    ids: ["manual-mie-free-and-easy-sauna"], name: "Free And Easy Sauna", officialUrl: "https://fecr.jp/",
    features: ["貸切可"],
    facts: [
      factNov14("設備", "貸切バレルサウナ「Free And Easy Sauna」（時間の経過とともに様々な色に変わる照明のサウナ空間）", "https://fecr.jp/%e3%83%90%e3%83%ac%e3%83%ab%e3%82%b5%e3%82%a6%e3%83%8a%e3%80%80%e9%81%82%e3%81%ab%e3%82%aa%e3%83%bc%e3%83%97%e3%83%b3%ef%bc%81%ef%bc%81/"),
    ],
  },
  {
    ids: ["manual-mie-moku-iseshima"], name: "MOKU ISESHIMA", officialUrl: "https://moku-iseshima.com/",
    features: ["宿泊可", "貸切可"],
    facts: [
      factNov14("設備", "YADO TERASU（1日1組限定のスイートルーム）に特別サウナ・露天風呂・インフィニティプール", "https://moku-iseshima.com/"),
      factNov14("利用条件", "1日1組限定のオーベルジュで、サウナは宿泊施設「YADO TERASU」に付属。アクセスは賢島港からのチェックインクルーザーまたはヘリコプター", "https://moku-iseshima.com/"),
    ],
  },
  {
    ids: ["manual-mie-sparkle"], name: "Sparkle", officialUrl: "https://www.sparkle-uga.com/",
    features: ["貸切可", "宿泊可", "外気あり"],
    facts: [
      factNov14("設備", "宇賀渓の自然の中にある、テントサウナ・プール付きの民泊貸切コテージ", "https://www.sparkle-uga.com/"),
      factNov14("利用条件", "一棟貸切・1日1組限定。BBQ可", "https://www.sparkle-uga.com/"),
    ],
  },
  {
    ids: ["manual-mie-asahinoyu"], name: "あさひの湯", officialUrl: "https://asobix-asahi.jp/asahinoyu",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "温泉付き"],
    facts: [
      factNov14("設備", "サウナルーム、スチームサウナ（女湯のみ）、露天岩風呂温泉、炭酸泉風呂、立ち湯、つぼ湯（男湯のみ）、ジェット温泉（女湯のみ）", "https://asobix-asahi.jp/asahinoyu"),
      factNov14("設備", "地下1,700mから湧き出す天然温泉（泉質：ナトリウム－塩化物温泉、源泉温度51.8℃）", "https://asobix-asahi.jp/asahinoyu"),
      factNov14("水風呂", "水風呂あり（施設案内に掲載）", "https://asobix-asahi.jp/asahinoyu"),
      factNov14("利用条件", "入れ墨、タトゥー（シールペイントも含む）、及び泥酔の方のご入浴は固くお断り", "https://asobix-asahi.jp/asahinoyu"),
    ],
  },
  {
    ids: ["manual-mie-kurhaus-nagashima"], name: "クアハウス長島", officialUrl: "https://cis-gr.com/naspo/kurhaus/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "温泉付き"],
    facts: [
      factNov14("料金", "おとな（中学生以上）980円・小学生 500円・幼児（3歳以上）300円 ※3歳未満は無料。回数券10回券7,500円・20回券14,500円。フェイスタオル・バスタオルは料金に含まれる", "https://cis-gr.com/naspo/kurhaus/"),
      factNov14("営業時間", "10:30～22:00（最終受付 21:30）※第三木曜日は塩素消毒のため営業時間が変更になります", "https://cis-gr.com/naspo/kurhaus/"),
      factNov14("定休日", "12/31と1/1は休み（その他メンテナンスによる臨時休業あり）", "https://cis-gr.com/naspo/kurhaus/"),
      factNov14("設備", "遠赤外線サウナ＆スチームサウナ（スチームサウナは女性風呂のみ）、9種類の浴槽、源泉かけ流し天然温泉（アルカリ性単純温泉）", "https://cis-gr.com/naspo/kurhaus/"),
      factNov14("水風呂", "水風呂あり（サウナの隣に設置）", "https://cis-gr.com/naspo/kurhaus/"),
      factNov14("利用条件", "入墨・タトゥー（シール類を含む）をされている方などはお断り。7歳以上のお子さまは混浴できません", "https://cis-gr.com/naspo/kurhaus/"),
    ],
  },
  {
    ids: ["manual-mie-heal-in-yokkaichi"], name: "ヒールイン四日市", officialUrl: "http://www.heal-in8.com/",
    features: ["宿泊可"],
    facts: [
      factNov14("利用条件", "男性専用大浴場・サウナ設備あり。宿泊者およびマンスリーアパート利用者が利用可能（公式トップ記載）", "http://www.heal-in8.com/"),
    ],
  },
  {
    ids: ["manual-mie-himorogien"], name: "ひもろぎ苑", officialUrl: "https://hi-mo.jp/",
    features: ["貸切可"],
    facts: [
      factNov14("設備", "尾高高原の1000坪を超える敷地にあるリラクゼーション施設。施設内にサウナ「sauna華」、古民家風カフェいろり、山のほぐし処 楽尚庵", "https://hi-mo.jp/"),
      factNov14("利用条件", "完全貸切のプライベート空間。時間貸しプランは3種（公式トップ）", "https://hi-mo.jp/"),
    ],
  },
  {
    ids: ["manual-mie-hoshinoyu"], name: "ほしの湯", officialUrl: "http://www.hoshinoyu.net/",
    features: ["サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "大人（中学生から）800円、子供（3歳から小学生まで）300円、2歳まで無料。学生割引550円（学生証提示）。深夜割引：22時以降 大人650円。手ぶらセット350円、フェイスタオル180円", "http://www.hoshinoyu.net/"),
      factNov14("営業時間", "毎日10時開店・23時30分閉店（最終受付22時40分）", "http://www.hoshinoyu.net/"),
      factNov14("設備", "露天風呂、岩盤浴、サウナ、ジェットバス、リラクゼーション、御食事処", "http://www.hoshinoyu.net/"),
      factNov14("利用条件", "7歳以上は男女別での入浴（桑名市の条例に基づく）", "http://www.hoshinoyu.net/"),
    ],
  },
  {
    ids: ["manual-mie-hot-space"], name: "ホットスペース", officialUrl: "http://saunad0202.wixsite.com/my-site",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "個室", "貸切可", "男女共用", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "完全貸切・税込・1ドリンク付：90分 1人¥4,000/2人¥7,000/3人¥9,000/4人¥10,000、2時間 1人¥5,000〜、3時間 1人¥6,500〜。5名以上は1人ごとに¥2,000。延長1時間¥1,500", "http://saunad0202.wixsite.com/my-site"),
      factNov14("営業時間", "9:00-24:00（電話受付は基本的に21時まで）", "http://saunad0202.wixsite.com/my-site"),
      factNov14("設備", "テントサウナ・個室サウナ、セルフロウリュ、外気浴スペース、ドラム缶水風呂、シャワー", "http://saunad0202.wixsite.com/my-site"),
      factNov14("水風呂", "ドラム缶水風呂あり", "http://saunad0202.wixsite.com/my-site"),
      factNov14("利用条件", "完全プライベート（貸切）。水着・バスタオル・サウナマットなど無料貸し出し。22:00以降の利用・5名以上・中学生以下のお連れ様がいる場合は電話受付のみ", "http://saunad0202.wixsite.com/my-site"),
    ],
  },
  {
    ids: ["st-mie-486"], name: "ゆうゆう会館", officialUrl: "https://yu-yu-k.jp/",
    features: ["ドライサウナ", "セルフロウリュ", "ロウリュあり", "水風呂あり", "男女共用", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "大人（中学生以上）680円（タイムプラン平日）〜、小学生300円", "https://yu-yu-k.jp/"),
      factNov14("営業時間", "全日10:00～23:00（入館最終受付 22:30）", "https://yu-yu-k.jp/"),
      factNov14("定休日", "火曜日", "https://yu-yu-k.jp/"),
      factNov14("設備", "95℃の昭和ストロング系ドライサウナ、遠赤外線サウナ、ヒーリングサウナ3室（50°C〜70°C）、天然温泉かけ流しの大露天風呂、高濃度炭酸泉、薬湯、大衆演劇、レストラン", "https://yu-yu-k.jp/"),
      factNov14("水風呂", "地下300mからくみ上げた井戸水を使用した水風呂", "https://yu-yu-k.jp/bath/"),
      factNov14("利用条件", "ヒーリングサウナは館内着着用の上、男女共用利用（館内着レンタル350円・税込）。小学生以下のお子様・妊娠中の方・飲酒されている方はヒーリングサウナ利用不可", "https://yu-yu-k.jp/bath/"),
    ],
  },
  {
    ids: ["manual-mie-asahiyu-ise"], name: "旭湯", officialUrl: "http://ise-asahiyu.com/",
    features: ["ドライサウナ", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "大人 500円、小学生 200円、乳幼児（0才～就学前まで）100円。入泉＆遠赤サウナ（湯上りバスタオル付）650円、手ぶらコース750円、お伊勢さんコース900円 ※令和8年2月10日改定", "http://ise-asahiyu.com/annai.shtml"),
      factNov14("営業時間", "12:00～24:00", "http://ise-asahiyu.com/annai.shtml"),
      factNov14("定休日", "水曜日（休舘日）", "http://ise-asahiyu.com/annai.shtml"),
      factNov14("設備", "遠赤サウナ、二見浦の海水を使った汐湯・露天風呂", "http://ise-asahiyu.com/annai.shtml"),
      factNov14("利用条件", "刺青・タトゥー（シール含む）の方はご入泉はお断り。7歳以上のお子様の男女混浴はできません", "http://ise-asahiyu.com/annai.shtml"),
    ],
  },
  {
    ids: ["manual-mie-yunose"], name: "榊原温泉 湯の瀬", officialUrl: "https://sakakibaraonsen.com/",
    features: ["温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("設備", "温浴施設に福祉旅館・レストラン・バーベキュー場・キャンプサイトを併設したバリアフリーな温泉旅館", "https://sakakibaraonsen.com/"),
    ],
  },
  {
    ids: ["manual-mie-mantennoyu"], name: "三滝温泉 満殿の湯", officialUrl: "http://www.mantennoyu.net/",
    features: ["ドライサウナ", "水風呂あり", "外気あり", "サ飯あり"],
    facts: [
      factNov14("営業時間", "9:00～25:00（全日）", "http://www.mantennoyu.net/"),
      factNov14("設備", "13種類のお風呂（シルク風呂・巨岩風呂・高濃度炭酸泉など）と高温スタジアムサウナ（遠赤外線）を完備。お食事処あり", "http://www.mantennoyu.net/hotspring/"),
      factNov14("水風呂", "水風呂と冷水風呂あり", "http://www.mantennoyu.net/hotspring/"),
    ],
  },
  {
    ids: ["shiga-user-1f8g7z5"], name: "BY THE BIWAKO", officialUrl: "https://go2iza.com/iza/btb/",
    features: ["水風呂あり", "外気あり", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "60,000円 / 泊 〜", "https://go2iza.com/iza/btb/"),
      factNov14("設備", "IZAオリジナルサウナ（4人用・HARVIA製ストーブ）、水風呂、ジャグジー、BBQコンロ、焚き火台", "https://go2iza.com/iza/btb/"),
      factNov14("水風呂", "庭のアウトドアスペースに水風呂とジャグジーを完備", "https://go2iza.com/iza/btb/"),
      factNov14("利用条件", "1日1組限定・最大11名の一棟貸し。チェックイン16:00〜19:00、チェックアウト11:00", "https://go2iza.com/iza/btb/"),
    ],
  },
  {
    ids: ["shiga-user-165k21d"], name: "IZA takashima 湊", officialUrl: "https://go2iza.com/iza/takashima-minato/",
    features: ["水風呂あり", "外気あり", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "75,000円 / 泊 〜", "https://go2iza.com/iza/takashima-minato/"),
      factNov14("設備", "バレルサウナ（4人用・TYLO製電気ストーブ）、ジャグジー、水風呂、BBQコンロ、焚き火台", "https://go2iza.com/iza/takashima-minato/"),
      factNov14("水風呂", "プライベートガーデンに水風呂とジャグジーを完備", "https://go2iza.com/iza/takashima-minato/"),
      factNov14("利用条件", "1日1組限定・最大15名。チェックイン16:00〜19:00、チェックアウト11:00", "https://go2iza.com/iza/takashima-minato/"),
    ],
  },
  {
    ids: ["shiga-user-17bq8py"], name: "IZA近江舞子", officialUrl: "https://go2iza.com/iza/oumimaiko-nagi/",
    features: ["水風呂あり", "外気あり", "貸切可", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "70,000円 / 泊 〜（凪-nagi-棟）", "https://go2iza.com/iza/oumimaiko-nagi/"),
      factNov14("料金", "デイユース（平日限定・期間限定）：4時間プラン20,000円／1組、2時間プラン（サウナのみ）10,000円／1組（いずれも税込・1組4名まで）", "https://go2iza.com/iza/oumimaiko-nagi/dayuse/"),
      factNov14("設備", "バレルサウナ（ONE SAUNA・4人用・METOS製ストーブ）、ワイン樽水風呂、ジャグジー、BBQコンロ、焚き火台をウッドデッキに完備", "https://go2iza.com/iza/oumimaiko-nagi/"),
      factNov14("水風呂", "ワイン樽の水風呂を屋外ウッドデッキに完備", "https://go2iza.com/iza/oumimaiko-nagi/"),
      factNov14("利用条件", "1日1組限定・最大10名。チェックイン16:00〜19:00、チェックアウト11:00", "https://go2iza.com/iza/oumimaiko-nagi/"),
    ],
  },
  {
    ids: ["shiga-user-11znma6"], name: "MOTHER HAUS プライベートサウナ", officialUrl: "https://motherhaus-sauna.com/",
    features: ["個室", "貸切可", "水風呂あり", "男女共用", "タオルレンタルあり"],
    facts: [
      factNov14("利用条件", "完全予約制の一棟貸切プライベートサウナ。水着着用の混浴となり、水着の貸し出しサービスあり", "https://motherhaus-sauna.com/"),
      factNov14("設備", "サウナ、水風呂、お風呂を完備。タオル・ガウン・サンダル・水着の貸し出しあり", "https://motherhaus-sauna.com/"),
    ],
  },
  {
    ids: ["shiga-user-nxsjvz"], name: "NEST琵琶湖", officialUrl: "https://www.nest-biwako.com/",
    features: ["温泉付き", "個室", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "1泊2日（2名〜5名）¥68,000~", "https://www.nest-biwako.com/"),
      factNov14("設備", "室内温水プール（30℃）、客室天然温泉、プライベートサウナを完備した1棟貸切ヴィラ（全2棟）", "https://www.nest-biwako.com/"),
      factNov14("利用条件", "定員2〜5名・1棟貸切", "https://www.nest-biwako.com/"),
    ],
  },
  {
    ids: ["shiga-user-123ecqy"], name: "Resoreat Takashima", officialUrl: "https://go2iza.com/tksm_gmb",
    features: ["貸切可", "宿泊可", "水風呂あり", "外気あり"],
    facts: [
      factNov14("料金", "宿泊料金 40,000円／泊〜（ヴィラ「蒼-sou」「颯-hayate」）", "https://go2iza.com/tksm_gmb"),
      factNov14("設備", "4人用バレルサウナ（電気ストーブHARVIA）、テラスにジャグジー・水風呂・BBQコンロ・インフィニティチェア・焚き火台・ハンモック", "https://go2iza.com/tksm_gmb"),
      factNov14("利用条件", "1日2組限定の貸別荘（定員最大10名）。チェックイン16:00〜19:00／チェックアウト10:00。禁煙・花火禁止・ペット不可", "https://go2iza.com/tksm_gmb"),
    ],
  },
  {
    ids: ["shiga-user-15kywts"], name: "RESORT × SPA Future RESORT", officialUrl: "https://futureresort.net/",
    features: ["宿泊可", "貸切可", "温泉付き"],
    facts: [
      factNov14("料金", "日帰り（昼の一般開放）サウナ3,500円（プール利用可）／プール3,000円（最大6名まで）／大浴場1,500円", "https://www.mapion.co.jp/news/release/ap438849-all/"),
      factNov14("営業時間", "昼の一般開放 11:00～14:00", "https://www.mapion.co.jp/news/release/ap438849-all/"),
      factNov14("設備", "大浴場「水晶の湯（女湯）」「岩の湯（男湯）」は宿泊中自由に利用可。「宙の棟suite」にバレルサウナ・信楽焼の専用浴槽、高級ヴィラにプライベートプール", "https://futureresort.net/"),
      factNov14("利用条件", "日帰りは昼の一般開放のみで、3日前までの事前予約制（当日受付不可）", "https://www.mapion.co.jp/news/release/ap438849-all/"),
      factNov14("利用条件", "チェックイン15:00／チェックアウト11:00", "https://futureresort.net/"),
    ],
  },
  {
    ids: ["shiga-user-11b4qo"], name: "RS GLAMPING", officialUrl: "https://go2iza.com/rs-glamping_gmb",
    features: ["宿泊可", "外気あり", "ロウリュあり"],
    facts: [
      factNov14("料金", "宿泊料金 25,000円／泊〜。BBQコンロ利用は別途4,400円（税込）", "https://go2iza.com/rs-glamping_gmb"),
      factNov14("設備", "バレルサウナ（4人用、電気ストーブHARVIA）、ジャグジー、BBQコンロ、インフィニティチェア（プライベートガーデン）", "https://go2iza.com/rs-glamping_gmb"),
      factNov14("利用条件", "1日2組限定、定員最大6名（ドームテント）。チェックイン16:00〜19:00／チェックアウト10:00。禁煙・花火禁止・ペット不可", "https://go2iza.com/rs-glamping_gmb"),
    ],
  },
  {
    ids: ["shiga-user-1a3j9be"], name: "Seas Sauna HIRA", officialUrl: "https://8sauna.jp/",
    features: ["薪サウナ", "水風呂あり", "外気あり", "男女共用", "貸切可"],
    facts: [
      factNov14("料金", "平日120分2,200円／180分2,860円、土日祝120分2,970円／180分4,180円（1人あたり税込）。貸切は平日のみ・180分55,000円〜（10名まで、追加1名+5,500円〜）", "https://8sauna.jp/"),
      factNov14("営業時間", "10:00～21:00（最終受付19:00）。冬季は営業時間短縮あり", "https://8sauna.jp/"),
      factNov14("定休日", "金曜日", "https://8sauna.jp/"),
      factNov14("設備", "大型サウナ室に本格薪サウナストーブ3台、外気浴スペース", "https://8sauna.jp/"),
      factNov14("水風呂", "比良山からの地下水を汲み上げた井戸水の水風呂（水路状）", "https://8sauna.jp/"),
      factNov14("利用条件", "水着・湯汲着着用の男女共用パブリックサウナ。ネットにて事前予約制（空きがあれば当日受入可）。16歳未満・未成年者のみ・妊娠中は利用不可。水着・タオルのレンタルなし（販売のみ）", "https://8sauna.jp/"),
    ],
  },
  {
    ids: ["shiga-user-1nbsrf5"], name: "SHIGARAKI SAUNA", officialUrl: "https://shigaraki37.jp/",
    features: ["薪サウナ", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "貸切可", "宿泊可", "個室"],
    facts: [
      factNov14("料金", "宿泊料金 55,000円（税込）〜", "https://shigaraki37.jp/"),
      factNov14("設備", "土のサウナ（関西初のアースバッグ工法、薪ストーブ、75〜90度、6名）とお茶のサウナ（電気ストーブ、90〜100度、朝宮茶のロウリュウォーター）、いずれもセルフロウリュ可。信楽焼の露天風呂あり", "https://shigaraki37.jp/"),
      factNov14("水風呂", "信楽の地下水をチラーで冷却（13度／冬場5度、水深90〜110cm、2名）", "https://shigaraki37.jp/"),
      factNov14("利用条件", "1日1組・最大6名の完全貸切の一棟貸しホテル。チェックイン15:00〜17:00／チェックアウト翌10:00。宿泊者専用で日帰り利用なし", "https://shigaraki37.jp/"),
    ],
  },
  {
    ids: ["shiga-user-19fsx83"], name: "おごと温泉 びわこ緑水亭", officialUrl: "https://ryokusuitei.com/",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "温泉付き", "宿泊可", "外気あり"],
    facts: [
      factNov14("料金", "宿泊料金 32,670円〜132,000円（公式サイト掲載の価格帯）", "https://ryokusuitei.com/"),
      factNov14("設備", "大浴場に北欧産バレルサウナ（セルフロウリュ可）と露天風呂を併設。客室露天風呂は24時間温度管理された温泉配湯", "https://ryokusuitei.com/"),
      factNov14("水風呂", "大浴場に温度管理された水風呂あり", "https://ryokusuitei.com/"),
      factNov14("利用条件", "チェックイン15:00／チェックアウト10:00。大浴場はタトゥーのある方は利用不可（客室露天風呂は可、無料シールあり）", "https://ryokusuitei.com/"),
    ],
  },
  {
    ids: ["shiga-user-wjp1yg"], name: "おごと温泉 湯元舘", officialUrl: "https://www.yumotokan.co.jp/",
    features: ["スチーム(ミスト)サウナ", "温泉付き", "外気あり", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "貸切露天風呂 1回50分 7,000円（税込）※宿泊・昼食・夕食プランご利用のお客様が対象", "https://www.yumotokan.co.jp/spa/"),
      factNov14("営業時間", "露天「湯幻逍遥」の入浴時間 5時～24時（10:30～12:30清掃）", "https://www.yumotokan.co.jp/spa/"),
      factNov14("設備", "露天「湯幻逍遥」（ミストサウナあり）、最上階露天「月心の湯」、眺望大浴場「湖望の湯」「山望の湯」、貸切露天風呂2か所。各浴場は日替わりで男女交代制", "https://www.yumotokan.co.jp/spa/"),
      factNov14("利用条件", "日帰りプランあり（公式サイトに食事付き日帰りプランの案内あり）", "http://www.yumotokan.co.jp/"),
    ],
  },
  {
    ids: ["shiga-user-8e4ce4"], name: "くつき温泉 てんくう", officialUrl: "http://www.gp-kutsuki.com/",
    features: ["温泉付き", "外気あり"],
    facts: [
      factNov14("料金", "お風呂 大人（中学生以上）850円・小人（3歳以上）400円。お風呂＋プール 大人1,600円・小人800円", "https://gp-kutsuki.com/spa"),
      factNov14("営業時間", "お風呂10:00〜21:00（受付終了20:30）、プール10:00〜19:00（プール営業は3月中旬〜9月末、10月〜3月中旬は休業）", "https://gp-kutsuki.com/spa"),
      factNov14("設備", "「てんぐの湯」にサウナ・露天風呂、土日祝限定（14:00〜）の「木の湯・石の湯」。プールゾーンにきのこサウナ・てんぐぶろ（露天風呂）", "https://gp-kutsuki.com/spa"),
      factNov14("設備", "泉質はアルカリ性単純温泉（源泉：朽木温泉、泉温26.2度）", "https://gp-kutsuki.com/spa"),
    ],
  },
  {
    ids: ["shiga-user-1plgjyn"], name: "グランドメルキュール琵琶湖リゾート＆スパ", officialUrl: "https://grand-mercure-lakebiwa-resortandspa.jp/",
    features: ["温泉付き", "宿泊可", "外気あり"],
    facts: [
      factNov14("設備", "長浜城跡に湧出する「長浜太閤温泉」の大浴場・露天風呂・サウナ、温泉ラウンジ", "https://grand-mercure-lakebiwa-resortandspa.jp/"),
      factNov14("利用条件", "チェックイン15:00／チェックアウト11:00", "https://all.accor.com/hotel/C1Q7/index.id.shtml"),
    ],
  },
  {
    ids: ["shiga-user-g1h0se"], name: "グリーンホテルYes長浜みなと館", officialUrl: "http://www.nagahama-minatokan.com/",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "サウナあり（公式お知らせに「2024.12.13 サウナのメンテナンス終了しました」「2024.3.27 サウナ設備の修理が完了しました」と記載）", "http://www.nagahama-minatokan.com/"),
      factNov14("利用条件", "チェックイン15:00／チェックアウト10:00。電話受付は5:00～24:00", "http://www.nagahama-minatokan.com/"),
    ],
  },
  {
    ids: ["shiga-user-wjucab"], name: "サウナ&スパ ソレイユ 長浜", officialUrl: "https://soleil-sauna.jp/",
    features: ["オートロウリュ", "セルフロウリュ", "スチーム(ミスト)サウナ", "個室", "水風呂あり", "外気あり", "サ飯あり"],
    facts: [
      factNov14("設備", "オートロウリュのタワーサウナ、個室サウナ、男湯限定でセルフロウリュができる瞑想サウナ、女湯限定の薬草ミストサウナ、炭酸泉、薬湯、白湯（男湯限定）", "https://soleil-sauna.jp/sauna-bath/"),
      factNov14("水風呂", "水風呂あり。男湯限定で通常より低温に設定された極冷水風呂もあり", "https://soleil-sauna.jp/sauna-bath/"),
      factNov14("設備", "サウナ・お風呂の後に外気に身をゆだねるととのいスペースあり。館内レストランとリラクゼーションルームを併設", "https://soleil-sauna.jp/sauna-bath/"),
    ],
  },
  {
    ids: ["shiga-user-1a6n533"], name: "スパリゾート雄琴 あがりゃんせ", officialUrl: "https://www.agaryanse.co.jp/",
    features: ["温泉付き", "タオルレンタルあり", "サ飯あり"],
    facts: [
      factNov14("料金", "1日入館料 大人（中学生以上）平日 通常1,650円・会員1,450円／土日祝 通常2,050円・会員1,850円。小人（4歳～小学6年生）平日800円・土日祝900円、3歳以下無料。館内着・タオルセットは入館料に含まれる", "https://www.agaryanse.co.jp/user-guide"),
      factNov14("営業時間", "午前10時～深夜0時（最終受付午後11時）", "https://www.agaryanse.co.jp/user-guide"),
      factNov14("定休日", "年中無休（不定期にメンテナンス休業あり）", "https://www.agaryanse.co.jp/user-guide"),
      factNov14("設備", "二種類の自家源泉、露天風呂、大浴場、つぼ湯、岩盤浴（大人無料、別途ウェア代300円）、高温サウナ、バレルサウナ、足湯", "https://www.agaryanse.co.jp/"),
      factNov14("利用条件", "入れ墨・ボディアート（タトゥー・ペイント・シール）のある方は入館不可。16歳未満は保護者同伴。飲食物の持ち込み禁止。支払いは現金と各種クレジットのみ（電子決済不可）", "https://www.agaryanse.co.jp/user-guide"),
    ],
  },
  {
    ids: ["shiga-user-negeea"], name: "ドガサウナ", officialUrl: "https://doga-sauna.com/",
    features: ["水風呂あり", "外気あり", "貸切可", "男女共用"],
    facts: [
      factNov14("料金", "おとな平日2,420円、平日・朝割1,870円、土日祝3,300円、子ども（小学6年生まで）990円、回数券11枚綴り24,200円（いずれも税込）。貸切は3時間制で平日55,000円・土日祝88,000円（10名基本）", "https://doga-sauna.com/"),
      factNov14("営業時間", "10:00～22:00（最終受付20:00）", "https://doga-sauna.com/"),
      factNov14("定休日", "毎週木曜日、その他臨時休業あり", "https://doga-sauna.com/"),
      factNov14("設備", "築100年を超える土蔵を再生したパブリックサウナ。外気浴スペースあり", "https://doga-sauna.com/"),
      factNov14("水風呂", "地下から汲み上げた自然水の水風呂", "https://doga-sauna.com/"),
      factNov14("利用条件", "男女共用のため水着着用必須。予約なしで利用可、貸切利用も可。飲食物の持ち込み不可", "https://doga-sauna.com/"),
    ],
  },
  {
    ids: ["shiga-user-1foircl"], name: "マキノ高原 温泉さらさ", officialUrl: "https://makinokougen.co.jp",
    features: ["温泉付き"],
    facts: [
      factNov14("定休日", "毎週水曜日", "https://takashima-kanko.jp/en/spot/2018/06/post_140.html"),
      factNov14("設備", "男女別の大浴室、四季湯（低温湯）、寝湯（ジャグジー）、大浴場、露天風呂、水着着用のバーデゾーン（スパゾーン）", "https://takashima-kanko.jp/en/spot/2018/06/post_140.html"),
    ],
  },
  {
    ids: ["shiga-user-1vk2426"], name: "ワニベース 貸切りサウナ", officialUrl: "https://wanibase.com/",
    features: ["薪サウナ", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "貸切可", "タオルレンタルあり", "宿泊可"],
    facts: [
      factNov14("料金", "テントサウナ貸切100分：1名9,000円、2名1人4,500円、3名1人4,000円、4名1人3,500円（5名様～は2テント）。別途お車1台1,000円。現金決済のみ", "https://wanibase.com/activity-2/"),
      factNov14("料金", "ヨットサウナ貸切100分23,000円（6名様まで、1人約3,800円）。夏休み期間（7/18～8/31）26,000円、お盆期間（8/8～8/16）30,000円。別途駐車料金1,000円/1台", "https://wanibase.com/yacht-sauna/"),
      factNov14("設備", "貸切テントサウナ（薪ストーブ、ロウリュセット・薪付き）。更衣室・トイレ・シャワー、ドライヤー完備。フェイスタオル200円・バスタオル300円等のレンタルあり", "https://wanibase.com/activity-2/"),
      factNov14("水風呂", "天然地下水の水風呂と、琵琶湖の2つの天然水風呂", "https://wanibase.com/activity-2/"),
      factNov14("利用条件", "貸切制。水着など濡れてもいい服で利用し、下着での利用は不可。現金決済のみ。琵琶湖へ入る際はライフジャケット（無料）を必ず着用。入れ墨・タトゥーの露出は遠慮", "https://wanibase.com/activity-2/"),
    ],
  },
  {
    ids: ["shiga-user-1frphtk"], name: "延命湯", officialUrl: "https://enmeiyu.info",
    features: ["水風呂あり"],
    facts: [
      factNov14("営業時間", "（受付）17:00～22:30（最終23:00終了）", "https://enmeiyu.info"),
      factNov14("定休日", "毎月3・8・13・18・23・28日", "https://enmeiyu.info"),
      factNov14("設備", "サウナ、ジェット風呂、泡風呂、水風呂、ネオン風呂、電気風呂", "https://enmeiyu.info"),
      factNov14("利用条件", "支払いは現金のみ（クレジットカード不可）。敬老の日・こどもの日は対象者無料。駐車場は清水神社有料駐車場（延命湯利用者は無料）", "https://enmeiyu.info"),
    ],
  },
  {
    ids: ["shiga-user-134ghnk"], name: "甲賀温泉 やっぽんぽんの湯", officialUrl: "https://www.diamond-s.co.jp/yappon/",
    features: ["温泉付き", "外気あり", "貸切可", "宿泊可", "タオルレンタルあり", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴料金（税込）一般大人 平日1,300円・土日祝1,600円、甲賀市民 平日1,000円・土日祝1,300円、子供（小学生以下）500円、幼児（3歳未満）無料。岩盤浴530円、家族風呂1時間 外来6,000円", "https://www.diamond-s.co.jp/yappon/charge/"),
      factNov14("営業時間", "12:00～22:00（最終受付21:00）。ご宿泊の方は6:00～9:30、22:00～23:00も利用可", "https://www.diamond-s.co.jp/yappon/"),
      factNov14("設備", "露天岩風呂・大浴場・岩盤浴・サウナ・家族風呂（個室浴2室）あり。泉質はナトリウム-炭酸水素塩冷鉱泉", "https://www.diamond-s.co.jp/yappon/"),
    ],
  },
  {
    ids: ["shiga-user-1ibupig"], name: "守山 天然温泉 ほたるの湯", officialUrl: "https://hotarunoyu.jp/",
    features: ["温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入館料（一般・税込）大人（中学生以上）平日1,050円・土日祝1,150円、小人（小学生）平日500円・土日祝550円、幼児（3〜5歳）平日290円・土日祝340円、2歳以下無料", "https://hotarunoyu.jp/"),
      factNov14("営業時間", "施設全体 10:00～24:00（最終受付23:30）", "https://hotarunoyu.jp/"),
      factNov14("利用条件", "刺青・タトゥー（シール・ペイント含む）のある方は利用不可。オムツの取れていないお子様やオムツ着用の高齢者は入浴不可", "https://hotarunoyu.jp/"),
    ],
  },
  {
    ids: ["shiga-user-1ptudij"], name: "十二坊温泉ゆらら", officialUrl: "http://www.12-yurara.jp/",
    features: ["温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴券 大人800円・小人400円、回数券（11枚）大人8,000円・小人4,000円、温泉＋岩盤浴 大人1,500円（いずれも税込）", "https://www.12-yurara.jp/guide/#price"),
      factNov14("営業時間", "温泉 10:00～22:00（最終受付21:20）。修験の湯と百伝の湯は日替わり", "https://www.12-yurara.jp/guide/#price"),
      factNov14("定休日", "保守点検のため臨時休館あり（事前に公式ホームページでお知らせ）", "https://www.12-yurara.jp/guide/#price"),
      factNov14("設備", "岩盤浴あり（岩盤浴のみの利用は不可、700円）", "https://www.12-yurara.jp/guide/#price"),
      factNov14("利用条件", "刺青（イレズミ）のある方は利用不可。条例により8歳以上の混浴は禁止。飲食物・アルコール類の持ち込み不可", "https://www.12-yurara.jp/guide/#price"),
    ],
  },
  {
    ids: ["shiga-user-dz0wm7"], name: "水口温泉つばきの湯", officialUrl: "https://tsubakinoyu.jp/",
    features: ["温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入館料（税込）大人（中学生以上）平日900円・土日祝日1,000円、小人（小学生以下）450円、3歳未満無料。レンタルタオルセット280円", "https://tsubakinoyu.jp/"),
      factNov14("営業時間", "施設全体 10:00～23:00（最終受付22:30）", "https://tsubakinoyu.jp/"),
      factNov14("定休日", "年中無休（メンテナンスのため休館する場合あり）", "https://tsubakinoyu.jp/"),
    ],
  },
  {
    ids: ["shiga-user-140ucsy"], name: "蒼の湖邸 BIWAFRONT HIKONE", officialUrl: "https://www.biwa-front.com/",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "温泉付き", "外気あり", "宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場「びわ湖温泉 居醒の湯」6:00～11:00（4月～11月は5:00～）/ 15:00～24:00", "https://www.biwa-front.com/hotspring/"),
      factNov14("設備", "自家源泉「びわ湖 松原温泉」（ナトリウム-炭酸水素塩泉、地下約1500m）。深さ110cmの深湯露天風呂、内湯ジェットバス、オートロウリュ導入のサウナ（80～90℃）と水風呂完備", "https://www.biwa-front.com/hotspring/"),
      factNov14("利用条件", "大浴場はご宿泊のお客様は無料で利用可。日帰りでの利用は受け付けていない。入場にはカードキーが必要", "https://www.biwa-front.com/hotspring/"),
    ],
  },
  {
    ids: ["shiga-user-4llpcp"], name: "大津温泉 おふろcaféびわこ座", officialUrl: "https://ofurocafe-biwakoza.com/",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "サ飯あり", "タオルレンタルあり", "宿泊可"],
    facts: [
      factNov14("料金", "フリータイム（一般・税込）大人（中学生以上）平日1,568円・土日祝1,788円、小人 平日737円・土日祝792円、未就学児 平日165円・土日祝220円。時間制60分 大人798円（税込）", "https://ofurocafe-biwakoza.com/information"),
      factNov14("営業時間", "10:00〜25:00（最終受付24:00）", "https://ofurocafe-biwakoza.com/information"),
      factNov14("定休日", "年中無休（数ヶ月に1度、設備メンテナンスのために休館することがある）", "https://ofurocafe-biwakoza.com/faq"),
      factNov14("設備", "地下1500mから汲み上げたラドンを含む天然温泉（源泉名：古琵琶湖ラドンの湯）を全浴槽で使用。自動ロウリュウサウナ（ikiサウナ、11:00～24:00の毎時00分・20分・40分に発動）と水風呂あり", "https://ofurocafe-biwakoza.com/ofuro"),
      factNov14("利用条件", "刺青・タトゥーのある方は入館不可。館内への飲食物の持ち込み不可。中学生未満の利用は保護者同伴が必要", "https://ofurocafe-biwakoza.com/information"),
    ],
  },
  {
    ids: ["shiga-user-c7snl7"], name: "長命寺温泉 天葉の湯", officialUrl: "http://amahanoyu.com/",
    features: ["温泉付き", "タオルレンタルあり", "サ飯あり"],
    facts: [
      factNov14("料金", "大人（中学生以上）月〜木・金1,200円、土日祝1,500円。小学生600円（土日祝700円）、未就学児400円（土日祝500円）。入浴料にレンタルタオル含む", "http://amahanoyu.com/"),
      factNov14("利用条件", "入れ墨・タトゥーのある方は原則入浴不可（月〜木21〜23時、金・土・日・祝22〜24時は入浴可）。3歳未満はベビーバスでの入浴のみ", "http://amahanoyu.com/"),
      factNov14("設備", "七種類のお湯があり、ラジウム温泉を備える。高温サウナでのロウリュウサービスは現在中止（公式お知らせ）", "http://amahanoyu.com/"),
    ],
  },
  {
    ids: ["shiga-user-1e0rf80"], name: "天然温泉 比良とぴあ", officialUrl: "http://www.hiratopia.com/",
    features: ["温泉付き", "外気あり"],
    facts: [
      factNov14("営業時間", "10:00～21:00（受付終了20:30）", "http://www.hiratopia.com/intro/index.html"),
      factNov14("定休日", "年末年始・不定期メンテナンス有", "http://www.hiratopia.com/"),
      factNov14("設備", "大浴場（八雲乃湯・武奈乃湯）と露天風呂あり。泉質は単純温泉（低張性弱アルカリ性低温泉）", "http://www.hiratopia.com/"),
      factNov14("利用条件", "入れ墨・ボディアート（タトゥー、ペイント、シール）のある方は入館不可", "http://www.hiratopia.com/intro/index.html"),
    ],
  },
  {
    ids: ["shiga-user-1m6zl2m"], name: "都湯-ZEZE-", officialUrl: "https://miyakoyu.jp/",
    features: ["ドライサウナ", "水風呂あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴料550円、サウナ150円、タオル貸出100円", "https://miyakoyu.jp/pages/zeze"),
      factNov14("営業時間", "平日15:00～24:00、土・祝14:00～24:00、日曜8:00～24:00", "https://miyakoyu.jp/pages/zeze"),
      factNov14("定休日", "毎週木曜日", "https://miyakoyu.jp/pages/zeze"),
      factNov14("設備", "120℃の高温ドライサウナ、電気風呂、ジェット風呂あり。お湯は薪専用の釜で沸かす", "https://miyakoyu.jp/pages/zeze"),
      factNov14("水風呂", "天然地下水100%掛け流し（地下60mより汲み上げ）。施設の自慢として公式が紹介", "https://miyakoyu.jp/pages/zeze"),
    ],
  },
  {
    ids: ["shiga-user-1dhrjdx"], name: "湯トピアきりしま", officialUrl: "",
    features: ["ドライサウナ", "水風呂あり", "外気あり"],
    facts: [
      factNov14("営業時間", "PM3:30〜PM10:30", "https://shigafuro.com/furo/kirishima/"),
      factNov14("定休日", "毎週月曜日", "https://shigafuro.com/furo/kirishima/"),
      factNov14("設備", "サウナ（遠赤外線ヒーター）、ジェットバス、電気風呂、薬湯、露天風呂", "https://shigafuro.com/furo/kirishima/"),
      factNov14("水風呂", "井戸水かけ流しの水風呂（18℃）", "https://shigafuro.com/furo/kirishima/"),
    ],
  },
  {
    ids: ["shiga-user-1y0fohl"], name: "琵琶湖ホテル", officialUrl: "https://www.keihanhotels-resorts.co.jp/biwakohotel/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "宿泊者は無料。レストランとセット利用の場合 大人 1,700円、小人（5歳～12歳）800円、4歳以下 無料", "https://www.keihanhotels-resorts.co.jp/biwakohotel/spa/"),
      factNov14("営業時間", "宿泊者 6:00～10:00／14:00～24:00。レストランランチとセット利用の場合は14:00～17:00", "https://www.keihanhotels-resorts.co.jp/biwakohotel/spa/"),
      factNov14("利用条件", "温泉のみの利用は不可（宿泊またはレストランセット利用が必要）。入れ墨・タトゥーのある方は利用不可", "https://www.keihanhotels-resorts.co.jp/biwakohotel/spa/"),
      factNov14("設備", "男湯にドライサウナ、女湯にミストサウナ。展望露天風呂・内風呂あり。泉質は単純温泉（低張性弱アルカリ性低温泉）", "https://www.keihanhotels-resorts.co.jp/biwakohotel/spa/"),
      factNov14("水風呂", "男湯の内湯内に水風呂あり", "https://www.keihanhotels-resorts.co.jp/biwakohotel/spa/"),
    ],
  },
  {
    ids: ["shiga-user-1hisq4o"], name: "琵琶湖マリオットホテル", officialUrl: "http://www.marriott.com/hotels/travel/osalb-lake-biwa-marriott-resort/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "温泉大浴場とサウナあり（公式サイトの施設案内に温泉浴場・サウナの記載）", "http://www.marriott.com/hotels/travel/osalb-lake-biwa-marriott-resort/"),
      factNov14("利用条件", "温泉浴場・サウナは宿泊施設の設備として案内されており、日帰り入浴の記載はない", "http://www.marriott.com/hotels/travel/osalb-lake-biwa-marriott-resort/"),
    ],
  },
  {
    ids: ["shiga-user-qy4sgq"], name: "琵琶湖湯", officialUrl: "",
    features: [],
    facts: [
      factNov14("料金", "490円", "https://shigafuro.com/furo/biwakoyu/"),
      factNov14("営業時間", "17:00~23:00", "https://shigafuro.com/furo/biwakoyu/"),
      factNov14("定休日", "月曜", "https://shigafuro.com/furo/biwakoyu/"),
      factNov14("設備", "サウナ、ジェットバス、電気風呂（お湯の温度およそ41℃）。ドライヤー貸出あり", "https://shigafuro.com/furo/biwakoyu/"),
    ],
  },
  {
    ids: ["shiga-user-pn41xy"], name: "宝船温泉 湯元ことぶき", officialUrl: "http://takarabuneonsen.com/",
    features: ["セルフロウリュ", "水風呂あり", "外気あり", "温泉付き", "男女共用", "貸切可", "サ飯あり"],
    facts: [
      factNov14("料金", "日帰り入浴 大人￥700／子供（1歳〜小学6年生）¥350／0歳￥200", "https://www.takarabuneonsen.com/onsen"),
      factNov14("営業時間", "日帰り入浴 9:00〜20:00（19:30最終受付）。貸切露天風呂 10:00〜20:00（19:00最終受付）。併設バレルサウナ 10:00〜20:00", "https://www.takarabuneonsen.com/onsen"),
      factNov14("定休日", "月曜定休", "http://takarabuneonsen.com/"),
      factNov14("料金", "併設バレルサウナは90分制：平日（火〜金）¥2,000/人、土日祝 ¥2,500/人", "https://www.takarabune-sauna.com/"),
      factNov14("設備", "北欧産大型バレルサウナ（8〜10名、TYLO製電気ストーブ）でセルフロウリュ可。水着着用の男女混浴の屋外サウナ。天然温泉露天風呂あり", "https://www.takarabune-sauna.com/"),
      factNov14("水風呂", "バレルサウナに源泉かけ流しの水風呂「冷泉」（約18〜19℃）とチラー冷却の「極冷泉」（約14〜16℃）", "https://www.takarabune-sauna.com/"),
      factNov14("利用条件", "バレルサウナは平日のみ前日までの要予約（土日祝は予約優先）。貸切は電話受付のみ。水着レンタル500円", "https://www.takarabune-sauna.com/"),
      factNov14("設備", "泉質はメタケイ酸含有冷鉱泉（にごり湯）。日帰り入浴は男女別内風呂のみで、露天風呂は貸切利用でのみ利用可能", "https://www.takarabuneonsen.com/onsen"),
    ],
  },
  {
    ids: ["shiga-user-5svv5m"], name: "北近江リゾート 天然温泉 北近江の湯", officialUrl: "https://kitaoumi.com/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "ロウリュあり", "熱波師あり", "温泉付き", "サ飯あり", "宿泊可"],
    facts: [
      factNov14("料金", "ゆったりコース現行料金 平日 一般1,600円・会員1,200円・子ども800円／土日祝 一般1,800円・会員1,400円・子ども900円（入浴コース料金は据え置き）", "https://kitaoumi.com/202611-3/"),
      factNov14("設備", "男性浴室に高温サウナ・遠赤外線サウナ、女性浴室に遠赤外線サウナ・ミストサウナ。スタッフによるアウフグース・ロウリュサービスあり", "https://kitaoumi.com/"),
      factNov14("利用条件", "ゆったりコースは「ゆったりラウンジ」で24時間滞在可能。深夜0:00以降の滞在は深夜料金が必要", "https://kitaoumi.com/"),
      factNov14("設備", "レストラン「北近江食堂」あり（温泉を利用しない食事のみの利用も可）", "https://kitaoumi.com/"),
    ],
  },
  {
    ids: ["shiga-user-6r05kp"], name: "里湯昔話 雄山荘", officialUrl: "https://yuzanso.co.jp/",
    features: ["温泉付き", "宿泊可", "外気あり"],
    facts: [
      factNov14("料金", "日帰り温泉 大人〜中学生 2,200円／3歳〜小学生 1,100円（バスタオル付、2歳以下無料）", "https://yuzanso.co.jp/news/3187/"),
      factNov14("営業時間", "日帰り温泉の大浴場利用可能時間 11:00〜14:30（最終入場14:00）", "https://yuzanso.co.jp/news/3187/"),
      factNov14("営業時間", "宿泊者の大浴場 6:00〜9:00（入場8:45まで）／15:00〜24:00（入場23:45まで）", "https://yuzanso.co.jp/hotspring/"),
      factNov14("利用条件", "日帰り温泉は予約不要で通年受入。清掃メンテナンスのため利用できない日あり", "https://yuzanso.co.jp/news/3187/"),
      factNov14("設備", "屋外サウナ（4名様が利用可能）、露天風呂（打たせ湯・ジェット湯・ジャグジー）、桶風呂。泉質はpH9.0のアルカリ性単純温泉", "https://yuzanso.co.jp/hotspring/"),
    ],
  },
  {
    ids: ["shiga-user-1yhm5oa"], name: "和乃リトリートひといき", officialUrl: "https://cafe-inn-hitoiki.com",
    features: ["貸切可", "個室", "水風呂あり", "宿泊可"],
    facts: [
      factNov14("利用条件", "貸切サウナは日帰り、または宿泊のお客様限定。日帰りサウナの予約はじゃらん経由", "https://cafe-inn-hitoiki.com/"),
      factNov14("営業時間", "表参道棟の貸切サウナ利用可能時間は15:00-21:00。宿泊している棟以外のサウナは利用不可", "https://cafe-inn-hitoiki.com/?page_id=101"),
      factNov14("設備", "蔵を改装した貸切サウナ《蔵》（薬草の香り）と茶室風貸切サウナ《茶》（滋賀県産茶葉の香り）。各棟に貸切サウナ付き客室あり", "https://cafe-inn-hitoiki.com/?page_id=101"),
      factNov14("水風呂", "十三番街A・B棟の浴室に信楽焼陶器水風呂あり。お風呂・サウナともに地元の伊吹薬草を楽しめる仕様", "https://cafe-inn-hitoiki.com/?page_id=101"),
    ],
  },
  {
    ids: ["kyoto-user-1hze32m"], name: "GOOD NATURE HOTEL KYOTO", officialUrl: "https://goodnaturehotels.com/ja/home-ja/",
    features: ["セルフロウリュ", "水風呂あり", "外気あり", "個室", "宿泊可"],
    facts: [
      factNov14("設備", "客室「テラスサウナルーム」（1日1室限定）のテラス27㎡にバレルサウナ・水風呂・外気浴スペースを完備。METOS製電気ストーブでセルフロウリュ可、水風呂はチラー付き", "https://www.mapion.co.jp/news/release/000000013.000071609-all/"),
      factNov14("利用条件", "大浴場はなく、サウナは「テラスサウナルーム」宿泊者専用。日帰り利用なし", "https://www.mapion.co.jp/news/release/000000013.000071609-all/"),
    ],
  },
  {
    ids: ["kyoto-user-1nj2sax"], name: "kasika 京都北山", officialUrl: "https://kasika-sauna.jp/",
    features: ["貸切可", "個室", "セルフロウリュ", "ロウリュあり", "水風呂あり"],
    facts: [
      factNov14("料金", "平日 1グループ6名まで1部あたり 30,000円(税込)／土日祝 36,000円(税込)。1回3時間利用の料金", "https://www.mapion.co.jp/news/release/000000019.000112911-all/"),
      factNov14("営業時間", "10時～25時", "https://www.mapion.co.jp/news/release/000000019.000112911-all/"),
      factNov14("利用条件", "完全貸切・完全予約制。1回最大6名、3時間利用。予約は利用当日の4時間前まで。公式予約サイトで無料会員登録が必要。男女で利用する場合は水着着用必須。館内は禁煙", "https://kasika-sauna.jp/"),
      factNov14("設備", "ロウリュ（フィンランドの香りの水）で湿度・温度を自分で調節可能。水風呂・温浴の温冷交代浴、エアベッドでのクールダウン、光学式心拍センサーで「ととのい」を可視化", "https://kasika-sauna.jp/"),
    ],
  },
  {
    ids: ["kyoto-user-1pvtyjx"], name: "KUDOCHI sauna 京都河原町店", officialUrl: "https://kudochi-sauna.com/kyotokawaramachi/",
    features: ["個室", "水風呂あり", "男女共用", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "CRADLE・SPIRITS（定員4名）120分16,000円、ナイト5時間24,000円。GENESIS・ECLIPSE（定員6名）120分23,000円、ナイト5時間32,000円", "https://kudochi-sauna.com/kyotokawaramachi/"),
      factNov14("営業時間", "24時間営業", "https://kudochi-sauna.com/kyotokawaramachi/"),
      factNov14("設備", "全室完全個室。全室に水風呂を完備し、水温はチラーで制御。音・光・香り・温度をカスタマイズ可能", "https://kudochi-sauna.com/kyotokawaramachi/"),
      factNov14("水風呂", "全室水風呂完備（チラーで一定温度に制御）", "https://kudochi-sauna.com/kyotokawaramachi/"),
      factNov14("利用条件", "完全事前予約制（直接来店では利用不可）。京都河原町店は男女での利用が可能。水着レンタルは男女用とも1着500円。タオル・アメニティの用意あり", "https://kudochi-sauna.com/kyotokawaramachi/"),
    ],
  },
  {
    ids: ["kyoto-user-j3dknm"], name: "MACHIYA:SAUNA KYOTO", officialUrl: "https://resauna.jp/kyoto",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "貸切可", "宿泊可", "男女共用", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "3時間プラン 1人あたり平日8,000円、土日祝9,800円", "https://resauna.jp/kyoto"),
      factNov14("営業時間", "4部制 9:00-12:00／12:30-15:30／16:00-19:00／19:30-22:30", "https://resauna.jp/kyoto"),
      factNov14("定休日", "不定休（休業情報はSNS・HPで案内）", "https://resauna.jp/kyoto"),
      factNov14("設備", "築160年の京町家を一棟貸切。サウナ室は85℃設定でセルフロウリュ・アロマロウリュ可。外気浴スペース（縁側）と内気浴の和室あり", "https://resauna.jp/kyoto"),
      factNov14("水風呂", "庭を臨む半露天の檜風呂（チラーで冷却）", "https://resauna.jp/kyoto"),
      factNov14("利用条件", "2-6名の完全貸切・男女混浴利用可。事前予約制。1名利用でも2名分の料金。宿泊プランあり（チェックイン16:30-20:30、チェックアウト11:00）。レンタルポンチョ・水着は各500円", "https://resauna.jp/kyoto"),
    ],
  },
  {
    ids: ["kyoto-user-139djtj"], name: "MOKSA（モクサ）", officialUrl: "https://moksa.jp/",
    features: ["個室", "貸切可", "宿泊可"],
    facts: [
      factNov14("設備", "窯風呂から着想した完全予約制プライベートサウナ『蒸庵』3種（炭蒸／檜蒸／美蒸）", "https://moksa.jp/"),
      factNov14("利用条件", "サウナは完全予約制の貸切（プライベートサウナ）。宿泊施設『moksa Rebirth Hotel』内", "https://moksa.jp/"),
    ],
  },
  {
    ids: ["kyoto-user-be4qvn"], name: "Private City Sauna RE:ZONE", officialUrl: "https://sauna-rezone.com/",
    features: ["個室", "セルフロウリュ", "ロウリュあり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "シングルルーム（1名）60分3,680円・80分4,680円・100分5,680円（税込）。グループルーム（1-3名）80分11,040円（税込）", "https://sauna-rezone.com/room"),
      factNov14("営業時間", "8:00-22:00（最終受付）。不定休", "https://sauna-rezone.com/about"),
      factNov14("設備", "フィンランド式サウナルーム（helo製ストーブ）。お好きなタイミングでロウリュウ可。全室に冷水オーバーヘッドシャワーとハンドシャワー、タオル（大・小）・アメニティ・飲み物2本を用意", "https://sauna-rezone.com/room"),
      factNov14("利用条件", "完全個室。グループルームは1-3名で利用する", "https://sauna-rezone.com/room"),
    ],
  },
  {
    ids: ["kyoto-user-1g20k0a"], name: "sayoka", officialUrl: "https://sayoka-kyoto.com/",
    features: ["個室", "貸切可", "男女共用", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "1枠140分（2名分料金）平日10:00-12:20／13:00-15:20は¥15,400、16:00-18:20／19:00-21:20は¥17,600。土日祝は¥17,600〜¥19,800。3名以上は1人につき追加料金（平日¥4,400／土日祝¥5,500）", "https://sayoka-kyoto.com/archives/515"),
      factNov14("営業時間", "平日10:00-21:20、土日祝9:00-23:00（1枠140分、土日祝21:00-23:00枠のみ120分）", "https://sayoka-kyoto.com/archives/515"),
      factNov14("定休日", "月曜日", "https://sayoka-kyoto.com/archives/515"),
      factNov14("利用条件", "完全個室・完全予約制のプライベートサウナ。男女一緒の利用可。水着レンタルは1セット¥500。バスタオル・フェイスタオル等のアメニティあり", "https://sayoka-kyoto.com/archives/515"),
    ],
  },
  {
    ids: ["kyoto-user-1xehjlq"], name: "カルドグラン京都河原町", officialUrl: "https://www.hotyoga-caldo.com/grankyoto/",
    features: ["オートロウリュ", "ロウリュあり"],
    facts: [
      factNov14("営業時間", "平日 10:00～23:00、土日祝 10:00～20:00", "https://www.hotyoga-caldo.com/grankyoto/"),
      factNov14("定休日", "毎週木曜日", "https://www.hotyoga-caldo.com/grankyoto/"),
      factNov14("設備", "フィンランド式「オートロウリュ」のサウナ、岩盤浴、フィットネスジム、溶岩石ホットスタジオを併設", "https://www.hotyoga-caldo.com/grankyoto/"),
    ],
  },
  {
    ids: ["kyoto-user-dmr65k"], name: "さがの温泉 天山の湯", officialUrl: "https://ndg.jp/tenzan/",
    features: ["温泉付き", "水風呂あり", "サ飯あり"],
    facts: [
      factNov14("設備", "天然温泉（源泉かけ流し・炭酸泉）、露天風呂、高温サウナ、水風呂を完備。お食事処・リラクゼーションあり", "https://ndg.jp/tenzan/"),
      factNov14("水風呂", "水風呂完備", "https://ndg.jp/tenzan/"),
      factNov14("利用条件", "タトゥーのある方は隠しても入浴できず、館内利用は不可。予約は不要（リラクゼーション・宴会は要予約）。駐車場は150台ほどで利用中は無料", "https://ndg.jp/tenzan/"),
    ],
  },
  {
    ids: ["kyoto-user-b2tgx"], name: "ササウナ SASAUNA Sakura Sauna & Spa Kyoto", officialUrl: "https://sasauna.com/",
    features: ["水風呂あり", "外気あり"],
    facts: [
      factNov14("設備", "檜を用いたデザイン空間。外気浴スペース（京町家の坪庭がコンセプト）とチルスペースあり。ドリンク飲み放題", "https://sasauna.com/"),
      factNov14("水風呂", "滝と一体化した超低温の水風呂『清水風呂』", "https://sasauna.com/"),
      factNov14("利用条件", "男性専用施設。未就学児は保護者同伴でも利用不可。事前予約は受け付けていない。現金は取り扱わずキャッシュレス決済のみ。ホテル宿泊者以外も利用可。フェイスタオル・サウナマット等が用意され手ぶら利用可", "https://sasauna.com/"),
    ],
  },
  {
    ids: ["kyoto-user-hdhyis"], name: "スパ＆ホテル水春 松井山手", officialUrl: "https://suisyun.jp/matsuiyamate/",
    features: ["オートロウリュ", "ロウリュあり", "個室", "温泉付き", "外気あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("営業時間", "スパ 朝6:00～深夜2:00（最終受付 深夜1:30）。ご入館受付 朝6:00～深夜1:30", "https://suisyun.jp/matsuiyamate/uncategorized/男湯の営業時間変更のお知らせ/"),
      factNov14("定休日", "不定休（休館日は公式サイトで告知。2026年11月18日（水）は休館日）", "https://suisyun.jp/matsuiyamate/"),
      factNov14("設備", "全17種類のお風呂やロウリュサウナ・個室サウナ、6種類の岩盤浴を完備。遠赤外線サウナではオートロウリュを実施。完全個室のプライベートサウナはセルフロウリュ可（要事前予約）", "https://suisyun.jp/matsuiyamate/"),
      factNov14("利用条件", "日帰り入浴可（公式サイトに「日帰りでも、宿泊でも楽しめる」と明記）。ホテルチェックイン15:00～／チェックアウト11:00", "https://suisyun.jp/matsuiyamate/"),
    ],
  },
  {
    ids: ["kyoto-user-vym1qx"], name: "ホテルエルシエント京都", officialUrl: "https://www.elcient.com/kyoto/",
    features: ["宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場（イーストウィング2階）16:00～25:00／6:00～9:00", "https://www.elcient.com/kyoto/faq/"),
      factNov14("設備", "イーストウィング2階に男女別のサウナ付き大浴場「SPA EL」を完備", "https://www.elcient.com/kyoto/faq/"),
      factNov14("利用条件", "大浴場は宿泊者専用（日帰り入浴不可）で、宿泊者は無料。刺青・タトゥーのある方は入浴不可。タオルは客室から持参", "https://www.elcient.com/kyoto/faq/"),
    ],
  },
  {
    ids: ["kyoto-user-ewlj5"], name: "ホテルモントレ京都 スパ トリニテ", officialUrl: "https://www.hotelmonterey.co.jp/kyoto/spa/",
    features: ["宿泊可"],
    facts: [
      factNov14("営業時間", "スパ・トリニテ（13F）宿泊者12:00～23:00（最終受付22:30）。朝風呂（宿泊者限定）7:00～9:00（最終受付8:30）", "https://www.hotelmonterey.co.jp/kyoto/spa/"),
      factNov14("定休日", "スパ休館日あり（11/10（火）・12/1（火））", "https://www.hotelmonterey.co.jp/kyoto/spa/"),
      factNov14("料金", "宿泊者は大浴場・休憩ラウンジの利用無料。ビジターの入浴はマッサージセット利用時のみ可（入浴料金2,500円＋各マッサージメニュー）", "https://www.hotelmonterey.co.jp/kyoto/spa/"),
      factNov14("利用条件", "日帰り入浴のみの利用は不可。入れ墨・タトゥーのある方は入浴不可。3歳未満およびおむつが取れていない子は入場不可。7歳以上の混浴不可", "https://www.hotelmonterey.co.jp/kyoto/spa/"),
    ],
  },
  {
    ids: ["kyoto-user-1trj6eg"], name: "ホテルロイヤルヒル福知山&スパ", officialUrl: "http://royalhill-fukuchiyama.com/",
    features: ["水風呂あり", "外気あり", "温泉付き", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("営業時間", "平日 6:30～9:00（内湯のみ営業）・17:00～23:00（最終入場22:30）／土日祝 6:30～23:00（最終入場22:30）", "https://royalhill-fukuchiyama.com/spa"),
      factNov14("料金", "大人900円（特典割引800円・平日のみ、除外日あり）、小人450円。回数券（大人）10枚つづり8,000円", "https://royalhill-fukuchiyama.com/spa"),
      factNov14("設備", "檜露天風呂をはじめ、独立型サウナ、水風呂などを完備。泉質はナトリウム・カルシウム塩化物泉（強塩泉）の高成分療養泉", "https://royalhill-fukuchiyama.com/spa"),
      factNov14("水風呂", "サウナと併せて水風呂あり", "https://royalhill-fukuchiyama.com/spa"),
      factNov14("利用条件", "日帰り入浴可（入泉料制）。入れ墨のある方（ポイントタトゥー・フェイクタトゥー・シールタトゥー含む）は入場不可。バスタオルレンタル100円", "https://royalhill-fukuchiyama.com/spa"),
    ],
  },
  {
    ids: ["kyoto-user-adprgs"], name: "リブマックスリゾート京丹後シーフロント", officialUrl: "https://www.livemax-resort.com/kyoto/kyotango/daytrip/",
    features: ["温泉付き", "外気あり", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り温泉 一般（タオルセット付）大人1,200円・子供900円、一般（タオルなし）大人900円・子供600円。京丹後市民はフェイスタオル付で大人900円・子供600円", "https://www.livemax-resort.com/kyoto/kyotango/daytrip/"),
      factNov14("営業時間", "日帰り温泉 8:00～11:00（最終受付10:00）14:00～24:00（最終受付22:00）※火曜日は15:00～の利用", "https://www.livemax-resort.com/kyoto/kyotango/daytrip/"),
      factNov14("設備", "大浴場・露天風呂・サウナを完備。サウナは男女入替制（女性6:00～11:00／男性15:00～24:00）。源泉は木津温泉、泉質は単純温泉", "https://www.livemax-resort.com/kyoto/kyotango/hotspring/"),
      factNov14("利用条件", "日帰り入浴可。子供料金は4歳～12歳まで、0歳～3歳は無料。フェイスタオル貸出100円、バスタオル貸出200円", "https://www.livemax-resort.com/kyoto/kyotango/daytrip/"),
    ],
  },
  {
    ids: ["kyoto-user-1w868ny"], name: "安心お宿プレミア京都四条烏丸店", officialUrl: "https://www.anshin-oyado.jp/kyoto/",
    features: ["スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "宿泊可"],
    facts: [
      factNov14("設備", "男女とも露天風呂やミストサウナ、水風呂を完備。女性湯処には岩盤浴も設置", "https://www.prdesse.com/posts/download_file/16270/pdf/pdf_file"),
    ],
  },
  {
    ids: ["kyoto-user-1jp67yg"], name: "丸福樓", officialUrl: "https://marufukuro.com/",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "任天堂旧本社社屋（既存棟3棟）と安藤忠雄氏設計監修の新棟からなる全18室（スイート4室含む）のホテル。ゲストラウンジ、レストランを併設", "https://marufukuro.com/"),
    ],
  },
  {
    ids: ["kyoto-user-1ubgh8r"], name: "京都 玉の湯", officialUrl: "https://kyoto-tamanoyu.com/",
    features: ["水風呂あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "大人（中学生以上）550円※中学生は学生証提示で400円、小学生200円、乳幼児100円（2才以下無料）。大人入浴券（京都府組合加盟店共通）10枚5,300円", "https://kyoto-tamanoyu.com/"),
      factNov14("営業時間", "月〜金 15:00-24:00／土 14:00-25:00", "https://kyoto-tamanoyu.com/"),
      factNov14("定休日", "日曜日", "https://kyoto-tamanoyu.com/"),
      factNov14("設備", "サウナ・水風呂・ジェット風呂・電気（低周波）風呂・深、浅風呂（泡）", "https://kyoto-tamanoyu.com/"),
      factNov14("水風呂", "サウナと併せて水風呂あり", "https://kyoto-tamanoyu.com/"),
      factNov14("利用条件", "入墨が入っていても利用可。水着着用での利用は不可。貸しタオルあり", "https://kyoto-tamanoyu.com/"),
    ],
  },
  {
    ids: ["kyoto-user-3m2ccw"], name: "京都プライベートサウナ高瀬川", officialUrl: "http://instagram.com/takasegawa.sauna/",
    features: ["個室", "貸切可", "セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "男女共用", "熱波師あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "ウィスキング90分プラン（ソロウィスキング＋90分貸切プライベートサウナ）9,800円（通常14,100円）※月・木・土限定", "https://select-type.com/rsv/?id=bHv1iONNlWY"),
      factNov14("設備", "高瀬川を眺める貸切プライベートサウナ。セルフロウリュ可。水風呂・外気浴スペースあり", "https://select-type.com/rsv/?id=bHv1iONNlWY"),
      factNov14("水風呂", "水風呂あり（各プランの利用内容に含む）", "https://select-type.com/rsv/?id=bHv1iONNlWY"),
      factNov14("利用条件", "完全貸切・予約制。男女一緒に利用可。飲酒後の利用・酒類の持ち込みは禁止", "https://select-type.com/rsv/?id=bHv1iONNlWY"),
    ],
  },
  {
    ids: ["kyoto-user-6lj07l"], name: "京都るり渓温泉 for REST RESORT", officialUrl: "https://rurikei.jp/",
    features: ["温泉付き", "宿泊可", "男女共用", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り温泉（プール／水着温泉エリア付）平日 大人（12歳以上）800円・小人（4歳以上）400円、土日祝 大人950円・小人500円。岩盤浴エリア追加料金 平日大人800円・土日祝1,000円", "https://rurikei.jp/spa#daiyokujo"),
      factNov14("営業時間", "るり湯 7:00～23:30（最終受付23:00）", "https://www.mapion.co.jp/news/release/000000120.000050120-all/"),
      factNov14("定休日", "年中無休", "https://rurikei.jp/"),
      factNov14("設備", "弱放射能温泉（ラドン温泉）の大浴場、水着で入る男女混浴の水着温泉（サウナ・露天風呂あり）、全長25mの温水プール、岩盤浴（ランタンテラス）", "https://rurikei.jp/spa#daiyokujo"),
      factNov14("利用条件", "日帰り利用可。水着温泉は水着着用で男女混浴。宿泊施設も併設", "https://rurikei.jp/spa#daiyokujo"),
    ],
  },
  {
    ids: ["kyoto-user-rnv4pe"], name: "五香湯", officialUrl: "http://gokouyu.net/",
    features: ["水風呂あり", "サ飯あり"],
    facts: [
      factNov14("設備", "バドガシュタインラドン222鉱石の湯、電気風呂、泡風呂、薬湯、水風呂、低温・高温の2種類のサウナ、ラジウム岩盤浴（別料金）", "http://gokouyu.net/"),
      factNov14("水風呂", "2階に水風呂あり", "http://gokouyu.net/"),
      factNov14("利用条件", "京都府浴場組合加盟の銭湯。岩盤浴は別料金。軽食コーナーあり", "http://gokouyu.net/"),
    ],
  },
  {
    ids: ["kyoto-user-1a97bp3"], name: "壬生温泉 はなの湯", officialUrl: "https://hanano-yu.jp/",
    features: ["温泉付き", "水風呂あり", "外気あり", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入館料 大人（中学生以上）平日890円／土日祝1,020円、小人（小学生以下）平日370円／土日祝420円、3歳未満無料。レンタルタオルセット250円", "https://hanano-yu.jp/guide/guide.html"),
      factNov14("営業時間", "施設全体 10:00～25:00（最終受付24:00）", "https://hanano-yu.jp/"),
      factNov14("設備", "露天風呂（岩風呂・つぼ湯は守山天然温泉ほたるの湯からの運び湯）、タワーサウナ、備長炭水風呂、ジェットバス、電気風呂", "https://hanano-yu.jp/establishment/establish.html"),
      factNov14("水風呂", "備長炭水風呂あり", "https://hanano-yu.jp/establishment/establish.html"),
      factNov14("利用条件", "刺青やタトゥー（シール・ペイント含む）のある方は利用不可。入館制で何度でも入浴可", "https://hanano-yu.jp/guide/guide.html"),
    ],
  },
  {
    ids: ["kyoto-user-1mkggjh"], name: "誠の湯", officialUrl: "https://makotonoyu.jp/",
    features: ["ドライサウナ", "オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "サ飯あり", "宿泊可"],
    facts: [
      factNov14("料金", "平日 大人1,000円（タオル有り1,200円）・小人500円（タオル有り600円）。休日 大人1,100円（タオル有り1,300円）・小人550円（タオル有り650円）", "https://makotonoyu.jp/"),
      factNov14("営業時間", "8:00～23:00（受付終了22:00）", "https://makotonoyu.jp/"),
      factNov14("設備", "檜の「木の湯」と溶岩の「石の湯」の2浴場（男女日替わり）。各浴場に露天風呂・サウナ・水風呂を完備。ドライサウナは90度～100度", "https://makotonoyu.jp/"),
      factNov14("水風呂", "水風呂あり（井戸水かけ流し）", "https://makotonoyu.jp/"),
      factNov14("利用条件", "旅館「湯の宿 松栄」が運営する日帰り入浴施設。タトゥー・入れ墨（シール等含む）は原則お断り", "https://makotonoyu.jp/"),
    ],
  },
  {
    ids: ["kyoto-user-ok4zny"], name: "船岡温泉", officialUrl: "https://www.kyo1010.com/funaoka-onsen/",
    features: ["水風呂あり", "外気あり"],
    facts: [
      factNov14("営業時間", "15:00〜25:00（日曜 8:00〜25:00）", "https://www.kyo1010.com/funaoka-onsen/"),
      factNov14("定休日", "なし（無休）", "https://www.kyo1010.com/funaoka-onsen/"),
      factNov14("設備", "露天風呂、檜風呂、深風呂、浅風呂、ジェットバス、薬風呂、サウナ、水風呂、打たせ湯。日本で初めて導入された電気風呂がある", "https://www.kyo1010.com/funaoka-onsen/"),
      factNov14("水風呂", "水風呂あり", "https://www.kyo1010.com/funaoka-onsen/"),
    ],
  },
  {
    ids: ["kyoto-user-11cb2lw"], name: "貸切ルーフトップサウナ＆BBQ Ciel京都", officialUrl: "https://cielkyoto.com/",
    features: ["薪サウナ", "水風呂あり", "外気あり", "貸切可", "個室", "タオルレンタルあり", "サ飯あり"],
    facts: [
      factNov14("料金", "1部（10:00〜13:00）¥2,000／人、2部（14:00〜17:00）¥2,500／人、3部（18:00〜21:00）¥2,700／人。薪ストーブテントサウナレンタル ¥10,000／枠（税込）", "https://cielkyoto.com/rooftop/"),
      factNov14("営業時間", "10:00〜21:00（1回3時間の3部制）", "https://cielkyoto.com/rooftop/"),
      factNov14("設備", "聖護院ビル屋上の薪ストーブテントサウナ、水風呂、外気浴スペース、BBQ設備、シャワー・更衣スペース", "https://cielkyoto.com/"),
      factNov14("水風呂", "約15〜16℃に保たれた水風呂", "https://cielkyoto.com/rooftop/"),
      factNov14("利用条件", "完全貸切・一組限定。全員分の飲み放題プランの注文が必要。飲酒後のサウナ利用は禁止。ペット同伴可。サウナ利用者にはタオルセットが無料で付属", "https://cielkyoto.com/"),
    ],
  },
  {
    ids: ["kyoto-user-19bgwxs"], name: "大黒湯", officialUrl: "https://daikokuyu-kyoto.jp/",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "大人：550円、中人（小学生）：200円、小人（幼児）：100円。タオルレンタル50円", "https://daikokuyu-kyoto.jp/"),
      factNov14("営業時間", "月〜金：15:00〜25:00、土日：6:00〜25:00", "https://daikokuyu-kyoto.jp/"),
      factNov14("定休日", "火曜日", "https://daikokuyu-kyoto.jp/"),
      factNov14("設備", "男女湯共にオートロウリュ式サウナ、水風呂あり。熱風呂は男湯47℃、女湯43℃", "https://daikokuyu-kyoto.jp/"),
      factNov14("水風呂", "水風呂あり（男女湯共）", "https://daikokuyu-kyoto.jp/"),
      factNov14("利用条件", "タトゥーのある方も利用可（公式FAQで「大歓迎です」）。朝風呂は駐車場を利用不可。サウナヒーターに水をかけないこと", "https://daikokuyu-kyoto.jp/"),
    ],
  },
  {
    ids: ["kyoto-user-928m8d"], name: "竹取温泉 灯りの湯", officialUrl: "http://www.akarinoyu.com/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "塩サウナ", "オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("営業時間", "平日・土 9:30～24:30（最終受付24:00）、日祝 6:00～24:30（最終受付24:00）", "http://www.akarinoyu.com/hot-spring/"),
      factNov14("定休日", "メンテナンス時のみ休館", "http://www.akarinoyu.com/hot-spring/"),
      factNov14("設備", "熱汗房（遠赤外線サウナ）、潤汗房（スチーム・塩サウナ）、オートロウリュウ、天然温泉露天風呂「竹観の湯」、浸透炭酸の湯、岩盤浴「灯汗房」、お食事処「かぐや」", "http://www.akarinoyu.com/hot-spring/"),
      factNov14("水風呂", "石清水（水風呂）、設定温度17℃", "http://www.akarinoyu.com/hot-spring/"),
      factNov14("利用条件", "岩盤浴は24:00まで（最終受付23:00）。岩盤浴利用者にはレンタルタオルセットが付く", "http://www.akarinoyu.com//stone-sauna/"),
    ],
  },
  {
    ids: ["kyoto-user-wazg8n"], name: "天橋立ホテル", officialUrl: "https://www.amanohashidate-htl.co.jp/",
    features: ["塩サウナ", "ロウリュあり", "温泉付き", "外気あり", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り入浴：大人（中学生以上）1,500円、中人（小学生）1,000円、小人（小学生未満）無料（入湯税・消費税込、フェイスタオル貸出・バスタオル付）", "https://www.amanohashidate-htl.co.jp/spa/"),
      factNov14("営業時間", "日帰り入浴 11:30～20:30受付終了（毎週火曜は定期点検のため16:00以降利用可）。展望大浴場（宿泊者）5:00～9:00／11:30～24:00", "https://www.amanohashidate-htl.co.jp/spa/"),
      factNov14("設備", "サウナ「天の岩戸」（岩塩・黄土使用）、サウナ「天の籠」（2025年10月リニューアル、ロウリュを楽しめる）、天橋立一望の露天風呂、壷湯（源泉100％かけ流し）、ソルトピット、足湯", "https://www.amanohashidate-htl.co.jp/spa/"),
      factNov14("利用条件", "日帰り入浴可（宿泊者以外も利用できる）。大浴場は日ごとに男女が入れ替わる。泉質は含弱放射能-ナトリウム-塩化物泉（天橋立温泉）", "https://www.amanohashidate-htl.co.jp/spa/"),
    ],
  },
  {
    ids: ["kyoto-user-ec5yho"], name: "東宇治天然温泉 源氏の湯", officialUrl: "https://genji-yu.com/uji/",
    features: ["ロウリュあり", "熱波師あり", "スチーム(ミスト)サウナ", "塩サウナ", "水風呂あり", "外気あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "大人入浴料 1,100円（税込）※運営会社（株）弘商会のプレスリリース（2024年9月）による", "https://en.atpress.com/news/406339"),
      factNov14("営業時間", "平日 10:00～24:00（最終受付23:00）、土日祝 9:00～24:00（最終受付23:00）、朝風呂 6:00～9:00（土日祝のみ、最終受付8:30）", "https://en.atpress.com/news/406339"),
      factNov14("定休日", "年中無休", "https://en.atpress.com/news/406339"),
      factNov14("設備", "ロウリュサウナ（露天エリア、スーパーロウリュ等のロウリュサービス実施）、漢方薬草塩スチームサウナ、天然温泉露天風呂（地下1111m、ナトリウム・カルシウム塩化物温泉）、ナノ高濃度炭酸泉、お食事処", "https://genji-yu.com/uji/spa/"),
      factNov14("水風呂", "水深1m、水温18℃の水風呂", "https://genji-yu.com/uji/spa/"),
    ],
  },
  {
    ids: ["kyoto-user-1sxahtu"], name: "日の出湯", officialUrl: "http://www.eonet.ne.jp/~hinodeyu/",
    features: ["水風呂あり"],
    facts: [
      factNov14("料金", "大人（中学生以上）550円、中人（小学生）200円、小人（乳幼児）100円。学生証提示で中学生は400円", "http://www.eonet.ne.jp/~hinodeyu/"),
      factNov14("営業時間", "16:00～23:00", "http://www.eonet.ne.jp/~hinodeyu/"),
      factNov14("定休日", "毎週木曜日", "http://www.eonet.ne.jp/~hinodeyu/"),
      factNov14("設備", "浴槽（深めと浅め）、ジェット風呂、電気風呂、水風呂", "http://www.eonet.ne.jp/~hinodeyu/"),
      factNov14("水風呂", "水風呂あり", "http://www.eonet.ne.jp/~hinodeyu/"),
      factNov14("利用条件", "駐車場なし。ランナーズステーションとしても利用可（脱衣場利用・荷物預かり、入浴料が必要）", "http://www.eonet.ne.jp/~hinodeyu/"),
    ],
  },
  {
    ids: ["kyoto-user-19hoo6l"], name: "白山湯 高辻店", officialUrl: "http://hakusanyu.co.jp/",
    features: [],
    facts: [
      factNov14("利用条件", "7才以上の男女の混浴はご遠慮ください。体を洗ってから浴槽に入ること（公式サイト掲載の利用上の注意）", "http://hakusanyu.co.jp/takatsuji"),
    ],
  },
  {
    ids: ["kyoto-user-msitah"], name: "風風の湯", officialUrl: "https://dormy-hotels.com/spa/fufu/",
    features: ["温泉付き", "外気あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入泉料 大人（中学生以上）平日1,200円・土日祝日1,400円、小人（3歳〜小学生）600円、乳幼児（2歳以下）300円（税込）。バスタオルレンタル200円", "https://dormy-hotels.com/spa/fufu/"),
      factNov14("営業時間", "12:00～22:00（最終受付21:30）", "https://dormy-hotels.com/spa/fufu/"),
      factNov14("定休日", "定休日なし（無休）", "https://dormy-hotels.com/spa/fufu/"),
      factNov14("設備", "天然温泉の内湯・露天風呂（源泉名：嵐山温泉、泉質：単純温泉（低張性弱アルカリ性温泉）、泉温35.2度）", "https://dormy-hotels.com/spa/fufu/spa.php"),
      factNov14("利用条件", "タトゥー・タトゥーシールのある方、泥酔の方の入浴は不可。施設内に駐車場はなく提携駐車場（有料）あり", "https://dormy-hotels.com/spa/fufu/faq.php"),
    ],
  },
  {
    ids: ["kyoto-user-15k4tfq"], name: "六角スパサウナ", officialUrl: "https://rokkakuspa.com/",
    features: ["貸切可", "個室", "セルフロウリュ", "ロウリュあり", "水風呂あり", "タオルレンタルあり", "男女共用", "サ飯あり"],
    facts: [
      factNov14("料金", "140分 18,000円（1〜4名まで同料金、5名以上は1名につき2,000円追加、最大8名）", "https://rokkakuspa.com/"),
      factNov14("営業時間", "9:30～20:50（4部制：9:30〜／12:30〜／15:30〜／18:30〜、各140分）", "https://rokkakuspa.com/"),
      factNov14("定休日", "年中無休", "https://rokkakuspa.com/"),
      factNov14("設備", "茶室サウナ（サウナストーブを囲み4人が寝転べる広さ）、岩盤浴（2名同時利用可能）、トトノイ空間、ReFa製品完備", "https://rokkakuspa.com/"),
      factNov14("水風呂", "醒ヶ井の上質な地下水を使用した2つの水風呂（掛け流し、利用ごとに水を入れ替え）", "https://rokkakuspa.com/"),
      factNov14("利用条件", "京町家一棟の完全貸切・完全事前予約制。男女の同時利用可（水着着用）。タトゥーのある方も利用可。ロウリュ用にほうじ茶・紅茶を用意。バスタオル・フェイスタオル・サウナハット・ガウンの無料レンタルあり", "https://rokkakuspa.com/"),
    ],
  },
  {
    ids: ["osaka-user-13126t4"], name: "eni.sauna", officialUrl: "https://go2eni.com/sauna",
    features: ["個室", "貸切可", "水風呂あり", "男女共用", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "宵：平日4,000円〜・休日5,000円〜、暁：平日5,000円〜・休日6,000円〜、曙：平日8,000円〜・休日9,000円〜（1名利用時の料金、1名追加ごとに+2,000円）", "https://go2eni.com/sauna"),
      factNov14("営業時間", "9:30～20:30", "https://go2eni.com/sauna"),
      factNov14("設備", "全3室の完全個室（曙：最大6名、暁：最大2名、宵：最大2名）。各室にサウナ、シャワー、壺水風呂、畳スペースを設置。バスタオル・フェイスタオル・サウナポンチョを用意", "https://go2eni.com/sauna"),
      factNov14("水風呂", "各室に壺水風呂あり", "https://go2eni.com/sauna"),
      factNov14("利用条件", "男女でも利用可能。受付は1階eni.cafe", "https://go2eni.com/sauna"),
    ],
  },
  {
    ids: ["osaka-user-u57sgy"], name: "HOTEL Cargo Shinsaibashi", officialUrl: "https://hpdsp.jp/hotel-cargo/",
    features: ["宿泊可", "外気あり", "タオルレンタルあり"],
    facts: [
      factNov14("営業時間", "大浴場 15:00～翌3:00 / 6:00～9:00", "https://hpdsp.jp/hotel-cargo/facility"),
      factNov14("設備", "9Fに男女別大浴場と信楽焼の露天風呂（男女各1）。公式サイトの浴場情報ではサウナは男女とも設置なし", "https://hpdsp.jp/hotel-cargo/hot_spring"),
      factNov14("利用条件", "大浴場は宿泊者が無料で利用可能。日帰り入浴の案内は公式サイトに記載なし。チェックイン15:00～／チェックアウト～10:00", "https://hpdsp.jp/hotel-cargo/facility"),
    ],
  },
  {
    ids: ["osaka-user-u0b57v"], name: "KUDOCHI sauna 大阪心斎橋店", officialUrl: "https://kudochi-sauna.com/shinsaibashi/",
    features: ["個室", "貸切可", "水風呂あり", "男女共用", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "MOONPALACE（定員2名）90分7,000円・ナイト5時間13,000円、FROSTLAND／EL DORADO（3名）120分14,000円・ナイト22,000円、LAPUTA／ATLANTIS（4名）120分17,000円・ナイト25,000円、SHANGRI-LA／CAVALON（6名）120分27,000円・ナイト38,000円", "https://kudochi-sauna.com/shinsaibashi/"),
      factNov14("営業時間", "24時間営業", "https://kudochi-sauna.com/shinsaibashi/"),
      factNov14("設備", "全室完全個室の7室。サウナ温度は100度〜110度まで調整可。タオル・アメニティの用意あり。水着レンタルは男女用とも1着500円", "https://kudochi-sauna.com/shinsaibashi/"),
      factNov14("水風呂", "全室に水風呂完備。13℃〜15℃程度（気温の高い時期は16〜18℃程度）で、チラーで温度制御", "https://kudochi-sauna.com/shinsaibashi/"),
      factNov14("利用条件", "完全事前予約制（直接来店では利用不可）。クレジットカードにて事前決済。大阪心斎橋店は男女での利用が可能", "https://kudochi-sauna.com/shinsaibashi/"),
    ],
  },
  {
    ids: ["osaka-user-1ek1v75"], name: "M's sauna", officialUrl: "https://www.mssauna.com/",
    features: ["個室", "セルフロウリュ", "ロウリュあり", "水風呂あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "通常利用120分（税込）。SALDO 昼の部（11:00〜21:30）¥10,000／夜の部（21:30〜29:00）¥13,000、ILME ¥15,000／¥19,000、VALOA ¥20,000／¥25,000。1時間延長は+¥5,500〜", "https://www.mssauna.com/"),
      factNov14("営業時間", "11:00〜翌5:00（最終受付は26時）", "https://www.mssauna.com/"),
      factNov14("設備", "フィンランド式サウナ（設定温度90℃、ロウリュウ可、アロマは6種類から選択）。ととのいルームとサウナ室に大型モニター、オーバーヘッドシャワー等を完備したプライベートサウナ", "https://www.mssauna.com/"),
      factNov14("水風呂", "設定温度15℃（VALOAのみ製氷機あり）", "https://www.mssauna.com/"),
      factNov14("利用条件", "完全予約制。入会費・年会費無料。当日キャンセルは100%のキャンセル料金が発生。決済方法は現金", "https://www.mssauna.com/"),
    ],
  },
  {
    ids: ["osaka-user-1su3rxw"], name: "MENTE はなれ福島店", officialUrl: "https://mente-salon.com/",
    features: ["貸切可", "水風呂あり", "男女共用", "セルフロウリュ", "ロウリュあり", "外気あり"],
    facts: [
      factNov14("設備", "一棟貸切サウナ＆スパ。サウナ、水風呂、スパルーム全てに映像アートを用意。専属セラピストによるリラクゼーション施術を好きなタイミングで利用可能", "https://mente-salon.com/"),
      factNov14("水風呂", "水風呂あり（サウナ・水風呂・スパルームを一棟貸切で利用可能）", "https://mente-salon.com/"),
      factNov14("利用条件", "最大6名まで利用可能な一棟貸切。オールインクルーシブ制。女性は貸切利用時のみ可", "https://mente-salon.com/salon/umeda/"),
    ],
  },
  {
    ids: ["osaka-user-7xb7zf"], name: "MENTE 梅田店", officialUrl: "https://mente-salon.com/salon/umeda/",
    features: ["個室", "セルフロウリュ", "ロウリュあり", "貸切可"],
    facts: [
      factNov14("料金", "個室サウナ80分 ¥5,000（2名利用80分 ¥10,000）。初回利用時に会員手数料 ¥1,000（税込）。貸切プラン180分 ¥300,000", "https://mente-salon.com/salon/umeda/"),
      factNov14("営業時間", "10:00〜24:00", "https://mente-salon.com/salon/umeda/"),
      factNov14("定休日", "不定休", "https://mente-salon.com/salon/umeda/"),
      factNov14("設備", "寝転べる1人用個室サウナ（最大2名利用可）。サウナヒーターはMETOS社製。各個室に冷水シャワー（常時15℃前後）とインフィニティチェアを完備。水風呂はなし（冷水シャワー方式）", "https://mente-salon.com/salon/umeda/"),
      factNov14("利用条件", "男性専用店舗。完全予約制（WEB・LINE・電話）。手ぶらで利用可能", "https://mente-salon.com/salon/umeda/"),
    ],
  },
  {
    ids: ["osaka-user-1j28a4y"], name: "SAUNA OOO OSAKA", officialUrl: "https://ooo-sauna.com/osaka.html",
    features: ["個室", "セルフロウリュ", "ロウリュあり", "水風呂あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "三日月の部屋（1〜2名）100分 ¥5,500〜／120分 ¥6,500〜、上弦の部屋（1〜4名）100分 ¥6,500〜／120分 ¥7,500〜、満月の部屋（1〜8名）120分 ¥9,000〜（平日18:10までの枠）・それ以外の枠 ¥12,000〜", "https://ooo-sauna.com/osaka.html"),
      factNov14("設備", "月の満ち欠けをテーマにした3室。サウナ室は90〜100℃設定でセルフロウリュ可。水風呂、シャワー、休憩スペース、パウダールームあり。水着・サウナハットの貸し出し（オプション）あり", "https://ooo-sauna.com/osaka.html"),
      factNov14("水風呂", "水風呂あり（公式サイトの設備一覧に記載）", "https://ooo-sauna.com/osaka.html"),
      factNov14("利用条件", "完全予約制。WEB予約のみで電話予約は不可、支払いは事前クレジット決済。1名まで同一料金、2名以上は1名追加ごとに¥2,500（満月の部屋は¥3,000）", "https://ooo-sauna.com/osaka.html"),
    ],
  },
  {
    ids: ["osaka-user-1b160lq"], name: "SAUNA Pod 槃", officialUrl: "https://saunapod.jp/",
    features: ["個室", "貸切可", "セルフロウリュ", "ロウリュあり", "男女共用", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "Room01 4,950円〜／2名以降 7,000円〜", "https://saunapod.jp/"),
      factNov14("定休日", "不定休（完全予約制）", "https://saunapod.jp/"),
      factNov14("設備", "全4室の個室貸切プライベートサウナ。各室に脱衣室・休憩スペース・浴室・サウナ室を分離。サウナ室は90度以上の高温設定で全室セルフロウリュ可。タオル一式等のアメニティを用意", "https://saunapod.jp/"),
      factNov14("利用条件", "完全予約制で、予約・決済はオンラインのみ。男性・女性とも利用可（Room2・4のみ男女での利用が可能）。所在地の詳細は予約完了後のページで案内", "https://saunapod.jp/"),
    ],
  },
  {
    ids: ["osaka-user-1065z3t"], name: "SPAWORLD HOTEL&RESORT", officialUrl: "https://www.spaworld.co.jp/",
    features: ["ドライサウナ", "ロウリュあり", "熱波師あり", "水風呂あり", "外気あり", "温泉付き", "貸切可", "宿泊可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入館料 中学生以上1,500円・小学生以下1,000円。プール入場料込みは平日2,000円・土日祝2,700円（小学生以下1,200円/1,700円）。岩盤浴は別途平日800円・土日祝1,000円", "https://www.spaworld.co.jp/english/open-fee.html"),
      factNov14("営業時間", "温泉 AM10:00～翌AM8:45（AM8:45～AM10:00は館内点検のため入浴不可）。岩盤浴 10:00～翌5:00（最終受付4:00）。貸切家族風呂 11:00～23:00", "https://www.spaworld.co.jp/info/eigyo/"),
      factNov14("設備", "4Fヨーロッパゾーンと6Fアジアゾーンの世界各国をテーマにした温泉浴場（月替わりで男女入替）、サウナシアター、岩盤浴、プール、貸切家族風呂、スポーツジム、併設ホテル", "https://www.spaworld.co.jp/onsen/#eur-sec"),
      factNov14("水風呂", "古代ローマ風呂の黄金風呂（水風呂）やフィンランド・サウナハウスの水風呂などがあり、温冷交代入浴が可能", "https://www.spaworld.co.jp/onsen/#eur-sec"),
      factNov14("利用条件", "タトゥー（タトゥーインク・シール含む）のある方は入館不可。小学生以下は保護者同伴が必要。ホテルはチェックイン15:00・チェックアウト10:00", "https://www.spaworld.co.jp/english/open-fee.html"),
    ],
  },
  {
    ids: ["osaka-user-1g93dki"], name: "うめきた温泉 蓮 Wellbeing Park", officialUrl: "https://umekita-onsen.jp/",
    features: ["温泉付き", "個室", "貸切可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "ベーシックプラン 一般 平日3,190円（税込）・土日祝3,740円（税込）、RENアプリ会員 平日2,970円・土日祝3,520円。入湯のみ1,650円（税込）", "https://umekita-onsen.jp/information"),
      factNov14("営業時間", "24時間（大浴場・サウナも24時間）。大浴場は清掃のため利用できない時間帯あり（男性大浴場2:00～3:00／女性大浴場4:00～6:00）", "https://umekita-onsen.jp/information"),
      factNov14("定休日", "年中無休（施設整備・点検のため休館または一部施設が利用できない場合あり）", "https://umekita-onsen.jp/information"),
      factNov14("設備", "大浴場・サウナ、岩盤浴・溶岩浴、屋内プール、屋外温水インフィニティプール、個室貸切風呂・サウナ（プライベートルーム）、ジム、御食事処", "https://umekita-onsen.jp/information"),
      factNov14("利用条件", "利用は12歳以上に限る（12歳未満は入館不可）。各種セット料金で12時間滞在可、12時間超過で追加料金2,970円（税込）。深夜帯（0:00～5:00）の滞在は深夜料金1,100円（税込）", "https://umekita-onsen.jp/information"),
      factNov14("利用条件", "刺青・タトゥーのある方は入館不可。ただし当館指定のカバーシール（有料）4枚までで完全に覆えるサイズのファッションタトゥーは、貼った上で利用可", "https://umekita-onsen.jp/information"),
    ],
  },
  {
    ids: ["osaka-user-31rg0y"], name: "カプセルホテル J・garden新大阪", officialUrl: "https://jgarden-hotel.jp/",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "大浴場（男性のみ）や休憩コーナー、キャビンルーム、カプセルルーム、女性専用フロア（3Fレディースフロア、パウダールーム完備）", "https://jgarden-hotel.jp/"),
      factNov14("利用条件", "カプセルホテル（宿泊施設）。大浴場は男性のみで、女性はフロア内のシャワーを利用", "https://jgarden-hotel.jp/"),
    ],
  },
  {
    ids: ["osaka-user-1o8217c"], name: "キャビン＆カプセルホテル J-SHIP大阪難波", officialUrl: "https://hotel-j-ship.com/",
    features: ["宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("営業時間", "大浴場（男性3階・女性2階とも）利用時間 17:00～翌朝9:30", "https://hotel-j-ship.com/hot_spring"),
      factNov14("設備", "ジャグジー付き大浴場（男性3階・女性2階）、女性専用完全個室シャワールーム、コインランドリー（洗濯機1回300円・乾燥機30分100円）", "https://hotel-j-ship.com/hot_spring"),
      factNov14("利用条件", "大浴場は宿泊者のみ利用可。チェックイン16時／チェックアウト10時。フェイスタオルとバスタオルは1泊につき1セット無料。デザインタトゥーの方も大浴場を利用可", "https://hotel-j-ship.com/hot_spring"),
    ],
  },
  {
    ids: ["osaka-user-120inyk"], name: "グランドサウナ心斎橋", officialUrl: "https://www.grand-sauna.com/shinsaibashi/",
    features: ["ドライサウナ", "塩サウナ", "スチーム(ミスト)サウナ", "ロウリュあり", "熱波師あり", "外気あり", "個室", "宿泊可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "早朝サウナコース（5～12時）1,500円、90分サウナコース1,500円、フリータイムコース（15時間）2,300円（会員/割引券2,000円）、深夜料金（23時～翌5時）600円", "https://www.grand-sauna.com/shinsaibashi/price/"),
      factNov14("料金", "カプセルホテル スタンダードルーム3,500円～、個室カプセルルーム4,500円～、女性個室カプセルルーム3,800円～", "https://www.grand-sauna.com/shinsaibashi/price/"),
      factNov14("営業時間", "サウナ/スパ 24時間営業・年中無休（毎週火曜日10時～13時は清掃のため浴場全体及び6F仮眠スペース使用不可）。カプセルホテル チェックイン15時～27時・チェックアウト10時", "https://www.grand-sauna.com/shinsaibashi/price/"),
      factNov14("設備", "塩サウナ、対流式ストーンサウナ、薬草スチームサウナ、バイブラ大浴場、露天風呂、レストラン、ボディケア、コワーキングスペース", "https://www.grand-sauna.com/shinsaibashi/price/"),
      factNov14("利用条件", "女性はシャワーブースのみ利用可（女性用の浴場・サウナなし）。中学生以下は利用不可、高校生は保護者の同伴または許可が必要", "https://www.grand-sauna.com/shinsaibashi/price/"),
    ],
  },
  {
    ids: ["osaka-user-1c8nzmu"], name: "なにわ健康ランド 湯〜トピア", officialUrl: "https://naniwa-utopia.com/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "塩サウナ", "セルフロウリュ", "オートロウリュ", "ロウリュあり", "熱波師あり", "水風呂あり", "外気あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "入館料1,380円。入館から24時間滞在は3,150円（入館料＋深夜料1,650円＋燃料調整費120円）。半個室Re:freeプラン5,070円（入館料・深夜料・朝食込み）、巣ごもりルーム4,030円", "https://naniwa-utopia.com/stay"),
      factNov14("営業時間", "24時間営業", "https://naniwa-utopia.com/"),
      factNov14("定休日", "定休日なし", "https://naniwa-utopia.com/"),
      factNov14("設備", "男女ともに複数のサウナ（高温・超高温サウナ、美肌ソルトサウナ、フィンランド式セルフロウリュサウナ、森サウナ、サプリサウナTO-JI等）、露天風呂、薬湯「延寿湯」、ひのき風呂、レストラン", "https://naniwa-utopia.com/sauna"),
      factNov14("水風呂", "温度や深さが異なる水風呂を複数用意（露天エリアの水風呂、森サウナエリアの一人用の深い水風呂など）", "https://naniwa-utopia.com/sauna"),
      factNov14("利用条件", "日帰り利用可。半個室Re:freeは17時～翌朝11時利用可で途中外出も可能（他のプランは外出不可）。Re:freeは男女共用スペース", "https://naniwa-utopia.com/stay"),
    ],
  },
  {
    ids: ["osaka-user-d9b62s"], name: "ニュージャパン梅田 (カプセルイン大阪)", officialUrl: "https://www.umedasauna-newjapan.jp/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "クイックスパ（1時間）1,900円（土日祝2,000円）、モーニングスパ（5:00～12:00）2,100円（土日祝2,200円）、フリースパ（12時間）2,700円（土日祝3,000円）、深夜料金（23:00～5:00）+800円", "https://www.umedasauna-newjapan.jp/sauna/price.html"),
      factNov14("営業時間", "24時間（月曜朝8時から正午まで清掃のため閉店）", "https://www.umedasauna-newjapan.jp/sauna/"),
      factNov14("設備", "高温サウナ（30分毎の自動ロウリュ）、低温サウナ、ミストサウナ、フィンランドサウナ、湯上りサウナ、温水プール・ジャグジー、露天風呂フロア（3F）", "https://www.umedasauna-newjapan.jp/sauna/detail.html"),
      factNov14("水風呂", "1F・2Fに水風呂、3F露天風呂フロアに樽型の水風呂", "https://www.umedasauna-newjapan.jp/sauna/detail.html"),
      factNov14("利用条件", "男性専用施設（カプセルイン大阪併設）。18歳未満の方、ボディーアート（刺青・タトゥ・ペイントシール等）のある方は利用不可。日帰り利用可", "https://www.umedasauna-newjapan.jp/sauna/price.html"),
    ],
  },
  {
    ids: ["osaka-user-z0wkgr"], name: "ヘルシー温泉タテバ", officialUrl: "https://tateba.com/",
    features: ["塩サウナ", "スチーム(ミスト)サウナ", "ドライサウナ", "水風呂あり", "外気あり", "サ飯あり"],
    facts: [
      factNov14("営業時間", "14:00〜翌5:00", "https://tateba.com/"),
      factNov14("定休日", "年中無休", "https://tateba.com/"),
      factNov14("設備", "塩サウナ、スチームサウナ（追加料金なし）、遠赤外線サウナ（北側浴室・追加料金300円）、炭酸泉、竹垣風露天風呂、薬風呂、ジェットバス。北側・南側浴室は日替わり", "https://tateba.com/"),
      factNov14("水風呂", "水風呂あり（露天エリア）", "https://tateba.com/"),
      factNov14("利用条件", "タトゥーOK（公式明記）。無料駐車場31台（2時間無料）。ボディソープ・シャンプー備え付け、軽食コーナー・日焼けサロン併設", "https://tateba.com/"),
    ],
  },
  {
    ids: ["osaka-user-18sjb5w"], name: "ユートピア白玉温泉", officialUrl: "https://utopia-shiratama.com/",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴料 大人600円・中学生400円・小学生200円・幼児100円。サウナ料金300円（2時間制・専用リストバンド制、返却後の入浴は可）", "https://utopia-shiratama.com/"),
      factNov14("営業時間", "AM6:00〜AM25:00（翌1:00）", "https://utopia-shiratama.com/"),
      factNov14("定休日", "年中無休", "https://utopia-shiratama.com/"),
      factNov14("設備", "ボナサウナ（約10分に1回のオートロウリュ・高温）、高濃度炭酸泉（1000PPM）、主湯・エステ風呂・電気風呂・露天風呂、外気浴スペース（寝そべりチェア4台・椅子8台）", "https://utopia-shiratama.com/"),
      factNov14("水風呂", "氷風呂（日本初、水温15℃をキープし定期的に氷を投入、実用新案特許取得）", "https://utopia-shiratama.com/"),
      factNov14("利用条件", "一般公衆浴場のためタトゥー可。貸しタオル100円・貸しバスタオル200円・レンタルサウナハット200円、無料駐車場20台、ドライヤー無料", "https://utopia-shiratama.com/"),
    ],
  },
  {
    ids: ["osaka-user-cwbbqx"], name: "リーベルホテル大阪", officialUrl: "https://www.hotel-liber.jp/",
    features: ["温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り（RIVERSIDE SPA）大人（中学生以上）2,000円＋入湯税150円、小人（4歳〜小学生）1,500円（タオルレンタル含む）。宿泊者は追加料金不要", "https://hotel-liber.jp/spa/spa/"),
      factNov14("営業時間", "日帰り利用：月〜木 6:00–9:00（最終受付8:00）／11:00–24:00（最終受付22:00）、金・土・日・祝 6:00–9:00／11:00–25:00", "https://hotel-liber.jp/spa/spa/"),
      factNov14("設備", "RIVERSIDE SPAは地下約1,000mの天然温泉。炭酸風呂・露天風呂・サウナ完備", "https://hotel-liber.jp/spa/spa/"),
      factNov14("利用条件", "日帰り入浴可。入れ墨・タトゥーのある方、3歳以下、おむつ着用のお子様は入浴不可。7歳以上は同性浴場の利用", "https://hotel-liber.jp/spa/spa/"),
    ],
  },
  {
    ids: ["osaka-user-2mx5ie"], name: "わがまちサウナ 大阪野田", officialUrl: "https://wagamachi-sauna.com/",
    features: ["ロウリュあり", "水風呂あり", "貸切可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "男性専用パブリックサウナ（予約不要）75分 ¥1,450／2時間 ¥1,800。プライベート（貸切）サウナ（予約制・最大4名）月〜金 ¥6,000〜／土日 ¥8,800〜", "https://wagamachi-sauna.com/"),
      factNov14("営業時間", "平日10時〜23時、土日祝7時15分〜（最終受付22時）", "https://wagamachi-sauna.com/"),
      factNov14("設備", "4段型タワーのパブリックサウナ（最大18名）、ロウリュできるプライベートサウナ、内気浴スペース「ととのいば」（パブリックサウナ・水風呂・ととのいばは黙浴）", "https://wagamachi-sauna.com/"),
      factNov14("水風呂", "水深110cmの水風呂", "https://wagamachi-sauna.com/"),
      factNov14("利用条件", "LINE会員登録必須、完全キャッシュレス。手ぶら利用OK（バスタオル・フェイスタオル・アメニティ完備）", "https://wagamachi-sauna.com/"),
    ],
  },
  {
    ids: ["osaka-user-1m1sc4u"], name: "宇宙.サウナ 寺田町店", officialUrl: "https://uchusauna.jp/",
    features: ["薪サウナ", "水風呂あり", "外気あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "平日60分 ¥1,250〜180分 ¥2,650、土日祝60分 ¥1,450〜180分 ¥2,850（税込）。延長30分ごと 平日450円／土日祝550円。タオルセットレンタル ¥350", "https://uchusauna.jp/"),
      factNov14("営業時間", "平日 12:00–26:00、土日祝 10:00–26:00（原則毎日営業）", "https://uchusauna.jp/"),
      factNov14("設備", "大阪初の薪サウナ専門店。特注薪ストーブのサウナ室（室温90度×高湿度、溶岩石×天然鉱石）、サ室で冷水を浴びるクナイプ、星空の下の半外気浴、温かい美泡の湯", "https://uchusauna.jp/"),
      factNov14("水風呂", "美泡水風呂2つ", "https://uchusauna.jp/"),
      factNov14("利用条件", "男性専用（レディースデー定期開催予定）。通常営業は予約不要、入館にはLINE会員証が必要、完全キャッシュレス。タトゥー可（タトゥーバンド ¥350を装着）、水着着用は禁止", "https://uchusauna.jp/"),
    ],
  },
  {
    ids: ["osaka-user-11wr484"], name: "屋上の北欧サウナ店 LOMA", officialUrl: "https://loma-sauna.com/",
    features: ["貸切可", "個室", "外気あり", "ロウリュあり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "貸切料金（1〜2名・税込）平日 ¥7,700〜、土日祝 ¥8,800〜。3名以上は1名あたり追加 ¥3,300。テントサウナ設備を含むルーフトップエリア全体のレンタル料", "https://loma-sauna.com/"),
      factNov14("営業時間", "1枠2時間制（予約制）：10:00〜12:00／13:00〜15:00／16:00〜18:00／19:00〜21:00", "https://loma-sauna.com/"),
      factNov14("設備", "屋上テントサウナ（フィンランドMISA製電気ストーブ、約90度、ロウリュ可）、外気浴エリア、室内プライベートルーム（バスルーム・パウダーコーナー有）。3階はカフェ、4階がサウナフロア", "https://loma-sauna.com/"),
      factNov14("利用条件", "完全貸切・予約制（推奨1〜2名、最大4名）。サウナ浴は水着着用。タオル・水着は持参推奨で有料レンタルあり。未成年者のみでの利用不可", "https://loma-sauna.com/"),
    ],
  },
  {
    ids: ["osaka-user-3fiqq5"], name: "会員制プライベートサウナHAAAVE.", officialUrl: "https://haaave.net/",
    features: ["個室", "水風呂あり", "男女共用", "スチーム(ミスト)サウナ"],
    facts: [
      factNov14("料金", "初回体験 Room1・2（定員2名／2時間）¥16,000、Room3（定員4名／2時間）¥25,000（税込）。ビジター料金 Room1・2 ¥33,000、Room3 ¥50,000。会員GOLDは月会費 ¥22,000＋利用料 Room1・2 ¥10,000／Room3 ¥20,000", "https://haaave.net/price"),
      factNov14("営業時間", "平日 10:00〜24:15、土日祝 9:45〜24:30", "https://haaave.net/"),
      factNov14("設備", "コンセプトの異なる3つの完全個室（Room1 BOTANICAL、Room2 JAPANESE MODERN、Room3 MAGMA SPA）。Room3は富士山の天然溶岩を敷き詰めたマグマスパ式サウナ（室温65℃・湿度55〜65%）", "https://haaave.net/"),
      factNov14("水風呂", "全室水風呂完備", "https://haaave.net/"),
      factNov14("利用条件", "会員制プライベートサウナ。初回体験の後、会員プランまたはビジタープランで利用可。大阪初の男女で利用可能な個室サウナ（保健所認可済）", "https://haaave.net/"),
    ],
  },
  {
    ids: ["osaka-user-vayout"], name: "空庭温泉 OSAKA BAY TOWER", officialUrl: "https://www.solaniwa.com/",
    features: ["温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入館料（日程により変動）大人 2,310円〜、小人 一律1,320円、70歳以上 一律1,800円（タオル・館内浴衣付き、税込）。入館料が1,651円以上の場合は別途入湯税150円", "https://kyodonewsprwire.jp/release/202611120081"),
      factNov14("営業時間", "11:00～23:00（最終入場 22:00）", "https://kyodonewsprwire.jp/release/202611120081"),
      factNov14("定休日", "不定休（月1回）。公式サイトに休館日を掲載（直近は2026年12月9日、2027年1月13日、2月3日）", "https://www.solaniwa.com/"),
      factNov14("利用条件", "日帰り入浴施設（温泉型テーマパーク）。入館料にタオル・館内浴衣のレンタルが含まれる", "https://kyodonewsprwire.jp/release/202611120081"),
    ],
  },
  {
    ids: ["osaka-user-1lg1t19"], name: "個室サウナとと 東梅田店", officialUrl: "https://toto-sauna.com/",
    features: ["個室", "セルフロウリュ", "ロウリュあり", "水風呂あり", "男女共用", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "90分1名 平日 ¥6,980・土日 ¥7,980、120分1名 平日 ¥7,980・土日 ¥8,980、180分1名 平日 ¥10,980・土日 ¥11,980（税込、タオル等込み）。2〜3名プランあり", "https://toto-sauna.com/"),
      factNov14("営業時間", "東梅田店：月・火・水 11:00〜23:00、木・金 11:00〜25:00、土・日 9:00〜25:00", "https://toto-sauna.com/"),
      factNov14("定休日", "不定休", "https://toto-sauna.com/"),
      factNov14("設備", "完全個室（東梅田店は「燈」「蒼」の2室）。セルフロウリュができるサウナストーブとアロマロウリュ、チラー完備の水風呂、個室内の休憩スペース。手ぶらで利用可", "https://toto-sauna.com/"),
      factNov14("水風呂", "チラー完備の水風呂（外気温により変動し、夏は16℃前後、冬は15℃を下回る）", "https://toto-sauna.com/"),
      factNov14("利用条件", "事前予約制。料金にバスタオル・フェイスタオルが含まれ、水着・サウナハットの無料レンタルあり。未就学児は利用不可、小学生は保護者同伴で半額", "https://toto-sauna.com/"),
    ],
  },
  {
    ids: ["osaka-user-1eyy5qr"], name: "個室サウナとと 南船場店", officialUrl: "https://toto-sauna.com/",
    features: ["個室", "セルフロウリュ", "水風呂あり"],
    facts: [
      factNov14("料金", "90分1名 平日6,980円・土日7,980円／120分1名 7,980円・8,980円／180分1名 10,980円・11,980円（税込）。2〜3名プランあり。バスタオル2枚・フェイスタオル1枚等を含む", "https://toto-sauna.com/"),
      factNov14("営業時間", "月・火・水 11:00〜23:00／木・金 11:00〜25:00／土・日 9:00〜25:00", "https://toto-sauna.com/"),
      factNov14("定休日", "不定休", "https://toto-sauna.com/"),
      factNov14("設備", "個室サウナ2室（黒の間22.32㎡・白の間18.42㎡）。セルフロウリュ可、チラー完備の水風呂あり", "https://toto-sauna.com/"),
      factNov14("水風呂", "チラー完備の水風呂（夏は16℃前後、冬は15℃を下回る）", "https://toto-sauna.com/"),
      factNov14("利用条件", "事前予約をお願いしている。未就学児は利用不可、小学生は保護者同伴で通常料金の半額。水着・サウナハットのレンタルは追加料金なし", "https://toto-sauna.com/"),
    ],
  },
  {
    ids: ["osaka-user-1p6138r"], name: "光の温泉メディカルサウナ", officialUrl: "https://onnetsu-challenge.com/lp/",
    features: [],
    facts: [
      factNov14("設備", "育成光線（遠赤外線8〜14μm）のメディカルサウナ。服を着たまま入れる低温温熱サウナ", "https://onnetsu-challenge.com/lp/"),
      factNov14("利用条件", "温熱チャレンジプログラムの参加者募集（費用無料、1回60分・週2回・全4回、データ提供への協力が参加条件）。妊娠中・妊娠の可能性がある方、ペースメーカー使用中、重篤な疾患で治療中の方は参加不可", "https://onnetsu-challenge.com/lp/"),
    ],
  },
  {
    ids: ["osaka-user-bc4jgf"], name: "真大阪サウナ", officialUrl: "https://shin-osaka-sauna.com/",
    features: ["個室", "セルフロウリュ", "ロウリュあり", "水風呂あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "STANDARD（森／宇宙）60分4,000円・90分6,000円・120分8,000円（最大2名）／PREMIUM 90分9,000円・120分11,000円（最大3名）／VIP 120分15,000円（最大3名）。税込、同伴者は同室利用に限り無料", "https://shin-osaka-sauna.com/"),
      factNov14("設備", "部屋ごとに種類の異なる個室サウナ（キューゲルサウナ、ベッドサウナ、壁面ロウリュサウナ等）。セルフロウリュ可、タオル無料貸出、Wi-Fi・パウダールーム完備、タトゥーOK", "https://shin-osaka-sauna.com/"),
      factNov14("水風呂", "水風呂は年中16度", "https://shin-osaka-sauna.com/"),
      factNov14("利用条件", "完全予約制。1室2名利用は同性同士が原則、VIPルームのみ男女利用可でその際は水着着用必須。利用は15歳から65歳まで", "https://shin-osaka-sauna.com/"),
    ],
  },
  {
    ids: ["osaka-user-73bcpd"], name: "鶴見緑地湯元 水春", officialUrl: "https://suisyun.jp/tsurumi/",
    features: ["ドライサウナ", "塩サウナ", "ロウリュあり", "水風呂あり", "温泉付き", "外気あり", "サ飯あり"],
    facts: [
      factNov14("営業時間", "9時～深夜2時（日祝は朝6時から）", "https://suisyun.jp/tsurumi/"),
      factNov14("設備", "遠赤外線サウナと漢方薬草塩サウナの2種類（男性浴場には瞑想サウナも）。ロウリュサービスを実施。13種のお風呂、大阪最大級の岩盤浴（5種の岩盤房）", "https://suisyun.jp/tsurumi/"),
      factNov14("水風呂", "水風呂も完備している", "https://suisyun.jp/tsurumi/"),
      factNov14("利用条件", "身長120cm以上または小学生以上のいずれかに該当するお子様の混浴は不可。小学生以下のお子様のみの入浴は不可", "https://suisyun.jp/tsurumi/"),
    ],
  },
  {
    ids: ["osaka-user-fhxa4o"], name: "天然温泉 なにわの湯", officialUrl: "https://naniwanoyu.com/",
    features: ["ドライサウナ", "オートロウリュ", "ロウリュあり", "塩サウナ", "スチーム(ミスト)サウナ", "温泉付き", "外気あり", "サ飯あり"],
    facts: [
      factNov14("料金", "大人（中学生以上）平日900円／土日祝日1,000円、小人（小学生）全日450円、乳幼児（0才〜未就学児）全日200円。お得な回数券（6枚綴）5,000円。タオル150円・バスタオル500円（販売）。税込", "https://naniwanoyu.com/"),
      factNov14("営業時間", "平日10:00〜25:00、土日祝8:00〜25:00（最終受付は24:00）", "https://naniwanoyu.com/"),
      factNov14("定休日", "年中無休（メンテナンスのため休館する日あり）", "https://naniwanoyu.com/"),
      factNov14("設備", "遠赤タワーサウナ（オートロウリュ）、塩サウナ（女湯）、スチームサウナ（男湯・約45℃の蒸気）。地下659mから汲み上げた源泉100%の天然温泉「美人湯」、天空の大パノラマ露天風呂", "https://naniwanoyu.com/"),
      factNov14("利用条件", "刺青・タトゥーの方の入浴は不可。小学生以下のお子様は保護者同伴が必須。再入浴は不可（1回入浴制）。飲食物の持込不可", "https://naniwanoyu.com/"),
    ],
  },
  {
    ids: ["osaka-user-1ggz25r"], name: "天然温泉 ひなたの湯 新大阪店", officialUrl: "https://www.hinatanoyu.com/",
    features: ["温泉付き", "外気あり"],
    facts: [
      factNov14("営業時間", "日〜金曜日 6:00〜25:00（24:00受付締め切り）・土曜日 8:00〜25:00（24:00受付締め切り）", "https://www.hinatanoyu.com/"),
      factNov14("定休日", "年中無休（施設管理・維持のための休館あり）", "https://www.hinatanoyu.com/"),
      factNov14("設備", "天然温泉で7種類の浴槽（炭酸泉・満天の湯・天の壺湯・なごみの湯等）とサウナ室。ビル9階の屋上露天風呂", "https://www.hinatanoyu.com/"),
    ],
  },
  {
    ids: ["osaka-user-1n2rhb7"], name: "天然温泉 延羽の湯 鶴橋店", officialUrl: "https://www.nobuta123.co.jp/nobehatsuruhashi/",
    features: ["ドライサウナ", "ロウリュあり", "セルフロウリュ", "熱波師あり", "塩サウナ", "水風呂あり", "温泉付き", "貸切可", "サ飯あり"],
    facts: [
      factNov14("営業時間", "朝9時～深夜2時（最終受付 深夜1時）。薬石汗蒸房の最終受付は深夜24時", "https://www.nobuta123.co.jp/nobehatsuruhashi/"),
      factNov14("定休日", "年中無休（施設点検日は除く）", "https://www.nobuta123.co.jp/nobehatsuruhashi/"),
      factNov14("設備", "2つのロウリュサウナと塩サウナ（女性のみ）。アウフグースやセルフロウリュが楽しめる。薬石汗蒸房（12種類の薬鉱石を使った韓国式サウナ）、4Fに貸切家族風呂11室", "https://www.nobuta123.co.jp/nobehatsuruhashi/"),
      factNov14("水風呂", "水風呂あり（ロウリュサウナ、水風呂、ととのいスペースは2022年にリニューアル）", "https://www.nobuta123.co.jp/nobehatsuruhashi/"),
    ],
  },
  {
    ids: ["osaka-user-1llt0xt"], name: "天然温泉 延羽の湯 本店 (羽曳野店)", officialUrl: "https://www.nobuta123.co.jp/nobehahabikino/",
    features: ["ドライサウナ", "ロウリュあり", "セルフロウリュ", "熱波師あり", "温泉付き", "外気あり", "サ飯あり"],
    facts: [
      factNov14("料金", "入泉料 大人（中学生以上）1,000円～、小人（小学生以下）550円～。岩盤浴 大人（中学生以上）950円～、小人（小学生以下）650円～", "https://www.nobuta123.co.jp/nobehahabikino/"),
      factNov14("営業時間", "朝10時～深夜2時（最終受付 深夜1時）。薬石汗蒸房の最終受付は深夜24時", "https://www.nobuta123.co.jp/nobehahabikino/"),
      factNov14("定休日", "年中無休（施設点検日は除く）", "https://www.nobuta123.co.jp/nobehahabikino/"),
      factNov14("設備", "男女ともに高温サウナ（ロウリュ〈アウフグース〉を実施する「熱風蒸釜」）とセルフロウリュのドライサウナ「熱の室」の2室。源泉掛け流しの露天風呂（6種類・3つの温度帯）、薬石汗蒸房", "https://www.nobuta123.co.jp/nobehahabikino/"),
    ],
  },
  {
    ids: ["osaka-user-ti6zcg"], name: "天然温泉ひなたの湯 大阪ユニバーサルベイサイド", officialUrl: "https://www.hinatanoyu.com/osaka-universal-bayside/",
    features: ["ドライサウナ", "オートロウリュ", "ロウリュあり", "熱波師あり", "水風呂あり", "外気あり", "温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("営業時間", "7:00～24:00（受付終了23:00）", "https://www.hinatanoyu.com/osaka-universal-bayside/guide/"),
      factNov14("料金", "大人（中学生以上）平日1,100円・土日祝1,400円（運営会社・信和ホテルズの公式プレスリリースに通常料金として掲載）", "https://medical.jiji.com/prtimes/379172"),
      factNov14("設備", "遠赤外線サウナ（設定90℃）、地上14階の天然温泉露天風呂、人工炭酸泉など男女各6種類の浴槽、外気浴スペース", "https://www.hinatanoyu.com/osaka-universal-bayside/bath/"),
      factNov14("水風呂", "水風呂あり（設定温度17℃）", "https://www.hinatanoyu.com/osaka-universal-bayside/bath/"),
      factNov14("利用条件", "日帰り入浴可。館内はキャッシュレス決済（リストバンドによる精算）", "https://www.hinatanoyu.com/osaka-universal-bayside/guide/"),
    ],
  },
  {
    ids: ["osaka-user-11wzcxk"], name: "天然露天温泉 スパスミノエ", officialUrl: "https://spasuminoe.jp/",
    features: ["ロウリュあり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "大人 平日800円・土日祝900円、小人 平日400円・土日祝450円、乳幼児 平日200円・土日祝220円、65歳以上600円（火・木曜シニアDAY）、大人回数券10枚綴り7,300円（2025年4月1日改定）", "http://spasuminoe.jp/wp-content/uploads/2025/02/20250401kaitei.pdf"),
      factNov14("設備", "スーパーロウリュウサウナ（isness導入、ガス遠赤外線ヒーター）、超高濃度炭酸泉（1,300ppm以上）、ジェットバス、露天風呂2種、お食事処あり", "https://spasuminoe.jp/"),
    ],
  },
  {
    ids: ["osaka-user-1tzg1zl"], name: "湯源郷 太平のゆ なんば店", officialUrl: "http://taiheinoyu.jp/mysite13/indexn.html",
    features: ["サ飯あり"],
    facts: [
      factNov14("営業時間", "ご入浴 8:00～25:00（受付終了24:00）、岩盤浴 8:00～24:00（受付終了23:00）", "http://taiheinoyu.jp/mysite13/202605nanbacalendar.pdf"),
      factNov14("定休日", "年中無休（施設点検等により休館の場合あり）", "http://taiheinoyu.jp/mysite13/indexn.html"),
      factNov14("料金", "入浴＋ランチセット1,980円、入浴＋岩盤浴＋ランチセット2,680円（公式カレンダーに掲載）", "http://taiheinoyu.jp/mysite13/202605nanbacalendar.pdf"),
      factNov14("利用条件", "入墨・タトゥー（ペイント・シール含む）のある方は入館不可", "http://taiheinoyu.jp/mysite13/202605nanbacalendar.pdf"),
      factNov14("設備", "岩盤浴（利用者専用）、コミックコーナー（4,000冊以上・雑誌あり）", "http://taiheinoyu.jp/mysite13/indexn.html"),
    ],
  },
  {
    ids: ["osaka-user-1wcyont"], name: "道頓堀サウナ", officialUrl: "https://dotonbori-sauna.com/",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "個室", "貸切可", "男女共用", "タオルレンタルあり"],
    facts: [
      factNov14("設備", "バレルサウナ（約100℃、セルフロウリュ可、アロマ水使用可）、デッキチェア、ラウンジ、シャワーブース付きパウダールーム", "https://dotonbori-sauna.com/en/pages/facilities"),
      factNov14("水風呂", "国内ヒノキ製の水風呂（水温は季節に応じて調整）", "https://dotonbori-sauna.com/en/pages/facilities"),
      factNov14("利用条件", "屋上1フロアを1組で貸切る完全プライベート制で、男女一緒に利用可。サウナ後は併設旅館・大和屋本店の大浴場を無料・時間無制限で利用可", "https://dotonbori-sauna.com/en/pages/facilities"),
    ],
  },
  {
    ids: ["osaka-user-49wea8"], name: "入船温泉", officialUrl: "http://www.irihune.co.jp/",
    features: ["オートロウリュ", "ロウリュあり", "熱波師あり", "水風呂あり", "タオルレンタルあり"],
    facts: [
      factNov14("営業時間", "平日 6:00〜23:00（最終受付22:30）、土日 6:00〜24:00（最終受付23:30）", "http://www.irihune.co.jp/"),
      factNov14("定休日", "月曜日", "http://www.irihune.co.jp/"),
      factNov14("設備", "METOS製オートロウリュサウナヒーター「ZIEL」導入サウナ、露天風呂、マイクロバブルバス。スタッフによるアロマロウリュ・アウフグースあり", "http://www.irihune.co.jp/"),
      factNov14("水風呂", "水風呂あり（全てのお風呂・水風呂が軟水）", "http://www.irihune.co.jp/"),
      factNov14("利用条件", "タトゥーがあっても利用可（タトゥーフレンドリー）。サウナは別料金（リストバンド制）、12歳以下はサウナ利用不可、貸バスタオル有料", "http://www.irihune.co.jp/"),
    ],
  },
  {
    ids: ["osaka-user-4wodts"], name: "八尾グランドホテル", officialUrl: "https://yaogrand.com/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入館料 大人 一般2,600円・ナイター（17:00〜）1,300円・朝風呂（4:00〜7:30）1,000円、小人1,000円（タオル・バスタオル・浴衣の貸出含む）", "https://yaogrand.com/whole_day"),
      factNov14("営業時間", "10:00～翌8:00", "https://yaogrand.com/whole_day"),
      factNov14("定休日", "年中無休（劇場休演日あり）", "https://yaogrand.com/whole_day"),
      factNov14("利用条件", "日帰り入館可（温泉・劇場の利用プランあり）", "https://yaogrand.com/whole_day"),
      factNov14("設備", "天然温泉（八尾温泉）、露天の足湯、アカスリ、マッサージ、仮眠室、レストラン・居酒屋", "https://yaogrand.com/facility"),
    ],
  },
  {
    ids: ["osaka-user-1jmp4os"], name: "夢の公衆浴場 五色", officialUrl: "https://goshiki.co.jp/",
    features: ["タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴料 大人（高校生以上）600円・中学生400円・小学生200円・0〜5歳100円、サウナ200円（貸バスタオル付）（大阪府浴場組合公定料金）", "https://goshiki.co.jp/access/"),
      factNov14("営業時間", "24時間営業", "https://goshiki.co.jp/"),
      factNov14("定休日", "年中無休（月曜日6:00〜11:00は設備点検のため休業）", "https://goshiki.co.jp/qa/"),
      factNov14("利用条件", "深夜料金はかからない。未成年のみの入館は22時以降入浴不可", "https://goshiki.co.jp/qa/"),
    ],
  },
  {
    ids: ["hyogo-user-ch6pzy"], name: "itadaki Sauna19", officialUrl: "https://sauna19.com/",
    features: ["個室", "貸切可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "2名まで120分枠 月〜金10,000円・土日祝12,000円〜（時間帯により最大16,000円）。3名様は+5,000円（土日祝+6,000円）、4名様は+10,000円（土日祝+12,000円）", "https://sauna19.com/"),
      factNov14("営業時間", "9:00〜23:30（完全予約制、120分・150分の時間枠制）", "https://sauna19.com/"),
      factNov14("利用条件", "WEB予約のみ（電話予約不可）。最大4名まで、18歳未満は利用不可。水着レンタル500円（税込）", "https://sauna19.com/"),
      factNov14("設備", "プライベートサウナ、休憩スペース（シャワーブースあり）。バスタオル・フェイスタオル・サウナポンチョ等の常備品あり。隣接する懐石料理「明月記」のサウナ御膳・サ弁あり（要事前予約）", "https://sauna19.com/"),
    ],
  },
  {
    ids: ["hyogo-user-1u5a0n5"], name: "private sauna苦楽園", officialUrl: "http://t3aiyx.b-merit.jp/xw8rgq/web/",
    features: ["個室", "水風呂あり"],
    facts: [
      factNov14("料金", "個室料金：Room1（1名専用）90分6,000円。Room2・Room3（1〜4名）90分 1名8,000円・2名13,000円、120分 1名10,000円・2名15,000円・3名18,000円・4名20,000円", "http://t3aiyx.b-merit.jp/xw8rgq/web/"),
      factNov14("設備", "個室サウナ全3室（Room1〜Room3）。Room2・Room3は水風呂完備、Room1は水風呂なし（冷水シャワー対応）", "http://t3aiyx.b-merit.jp/xw8rgq/web/"),
      factNov14("水風呂", "Room2は水深150cmの水風呂完備、Room3は広めの水風呂完備。Room1は水風呂なし", "http://t3aiyx.b-merit.jp/xw8rgq/web/"),
      factNov14("利用条件", "完全個室（プライベート）利用。所要時間には清掃・準備時間を含む", "http://t3aiyx.b-merit.jp/xw8rgq/web/"),
    ],
  },
  {
    ids: ["hyogo-user-1rz9ggw"], name: "Prus Sauna 兵庫姫路店", officialUrl: "https://prussauna-himeji.com/",
    features: ["個室", "貸切可", "水風呂あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "Secret Sauna Himeji：90分9,000円／120分12,000円／150分15,000円／180分18,000円（最大6名、4名まで追加料金なし、5〜6名は1名につき5,000円追加）", "https://prussauna-himeji.com/"),
      factNov14("設備", "完全個室のフィンランド式サウナ（国産檜）", "https://prussauna-himeji.com/"),
      factNov14("水風呂", "水風呂あり（チラーで水温調整可）", "https://prussauna-himeji.com/"),
      factNov14("利用条件", "事前予約制・クレジットカード事前決済。水着・サウナハット・タオル・アメニティは無料。完全個室のため刺青可", "https://prussauna-himeji.com/"),
    ],
  },
  {
    ids: ["hyogo-user-1gm9be0"], name: "SAUNA & SPA 花の湯 HANAKITA", officialUrl: "https://www.venus-town-himejihanakita.com/institution/hananoyu/",
    features: ["ドライサウナ", "塩サウナ", "水風呂あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴料金：大人（中学生以上）900円、小人（3歳～小学生以下）500円", "https://www.venus-town-himejihanakita.com/institution/hananoyu/"),
      factNov14("営業時間", "10:00～24:00（サウナは23:30まで、最終受付23:30）", "https://www.venus-town-himejihanakita.com/institution/hananoyu/"),
      factNov14("設備", "高温サウナ、塩サウナ（女湯のみ・75℃）、水風呂、主浴・ぬる湯・電気風呂・ジェットバス・陶器風呂", "https://www.venus-town-himejihanakita.com/institution/hananoyu/"),
      factNov14("水風呂", "水風呂あり（通常よりも低めの温度に設定）", "https://www.venus-town-himejihanakita.com/institution/hananoyu/"),
      factNov14("利用条件", "貸バスタオル150円、花の湯タオル（フェイスタオル）100円", "https://www.venus-town-himejihanakita.com/institution/hananoyu/"),
    ],
  },
  {
    ids: ["hyogo-user-toefox"], name: "SAUNA STATION", officialUrl: "https://saunastation.net/",
    features: ["熱波師あり", "水風呂あり"],
    facts: [
      factNov14("営業時間", "サウナ体験コース：月・火・木・金 20:00〜23:00、土・日・祝 10:00〜23:00", "https://saunastation.net/"),
      factNov14("定休日", "水曜（サウナ体験コースのスケジュール表による）", "https://saunastation.net/"),
      factNov14("設備", "出張テントサウナ・テントサウナレンタル・サウナ体験の3コース。熱波師の夫婦が運営（ウィスキングは＋4,000円/1名）", "https://saunastation.net/"),
      factNov14("水風呂", "水風呂あり（テントを出た後は水風呂に入れる）", "https://saunastation.net/"),
      factNov14("利用条件", "水着・タオルのレンタルなし（持参）", "https://saunastation.net/"),
    ],
  },
  {
    ids: ["hyogo-user-3000pe"], name: "SETRE SAUNA（セトレサウナ）", officialUrl: "https://hotelsetre.com/",
    features: ["個室", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "客室「TOTONOI」宿泊料金：7名様利用でお一人様 木・金・日￥27,000（税込）～、土曜￥34,000（税込）～（夕食・朝食・ラウンジ利用料込み）", "https://home.kingsoft.jp/news/pr/atpress/296792.html?from=recent_v2_%E5%A7%AB%E8%B7%AF"),
      factNov14("設備", "客室TOTONOIのテラスに宮崎杉の純国産バレルサウナ（収容6～8名程度、扉の反対側は全面ガラス張り）を設置。2ベッドルーム・最大7名のプライベートサウナ付き客室", "https://home.kingsoft.jp/news/pr/atpress/296792.html?from=recent_v2_%E5%A7%AB%E8%B7%AF"),
      factNov14("定休日", "ホテルは火曜・水曜定休日（祝日・夏期・年末年始を除く）", "https://home.kingsoft.jp/news/pr/atpress/296792.html?from=recent_v2_%E5%A7%AB%E8%B7%AF"),
      factNov14("利用条件", "サウナは宿泊客室「TOTONOI」専用のプライベートサウナ（チェックイン15:00／チェックアウト11:00、2名～最大7名）", "https://home.kingsoft.jp/news/pr/atpress/296792.html?from=recent_v2_%E5%A7%AB%E8%B7%AF"),
    ],
  },
  {
    ids: ["hyogo-user-1r99kvc"], name: "アクアイグニス淡路島", officialUrl: "https://aquaignis-awaji.jp/",
    features: ["スチーム(ミスト)サウナ", "男女共用", "温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "ワンプライス（大露天風呂・内湯・外湯・サウナ利用可）：平日 大人2,500円・小学生以下1,250円、土日祝 大人3,000円・小学生以下1,500円、2歳以下無料", "https://www.mapion.co.jp/news/release/000000012.000072765-all/"),
      factNov14("設備", "幅45mのインフィニティ大露天風呂「伊弉冉の湯湯」、内湯・外湯「伊弉諾の湯」、ミストサウナ、バレルサウナ", "https://www.mapion.co.jp/news/release/000000012.000072765-all/"),
      factNov14("定休日", "定休日なし（国営明石海峡公園の定休日に準ずる）", "https://www.mapion.co.jp/news/release/000000012.000072765-all/"),
      factNov14("利用条件", "大露天風呂「伊弉冉の湯湯」は湯あみ着着用の男女共用。バスタオル・フェイスタオル・湯あみ着のレンタル付き", "https://www.mapion.co.jp/news/release/000000012.000072765-all/"),
    ],
  },
  {
    ids: ["hyogo-user-xlbjlg"], name: "おでんサウナ", officialUrl: "https://coubic.com/oden_sauna",
    features: ["セルフロウリュ", "ロウリュあり", "水風呂あり", "個室", "貸切可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "サウナ90分・貸切料金（税込）：平日 1名10,000円〜8名17,000円、土日祝 1名11,000円〜8名18,000円、大型連休 1名12,000円〜8名26,000円", "https://izumi-sauna.stores.jp/reserve/oden_sauna/booking_pages"),
      factNov14("営業時間", "営業日は金曜・土曜・日曜・月曜の4日間。開始枠は平日10:00〜、土日8:00〜（8:00枠は現在調整のため休止中）、最終20:00〜", "https://izumi-sauna.stores.jp/reserve/oden_sauna/booking_pages"),
      factNov14("定休日", "火曜・水曜・木曜（営業日は金・土・日・月曜の週4日）", "https://izumi-sauna.stores.jp/reserve/oden_sauna/booking_pages"),
      factNov14("設備", "サウナ99℃（セルフロウリュ）、シャワー4基、サウナ室は最大8名", "https://izumi-sauna.stores.jp/reserve/oden_sauna/booking_pages"),
      factNov14("水風呂", "水風呂温度：夏場13℃〜15℃、冬場15℃〜17℃", "https://izumi-sauna.stores.jp/reserve/oden_sauna/booking_pages"),
      factNov14("利用条件", "完全予約制の貸切専門（最大8名）。予約はネットのみ・クレジットカード事前決済。水着着用必須（レンタル1名300円）。タオル類は無料貸出。利用客には1階「おでん屋うず」のおでん盛り合わせ付き", "https://izumi-sauna.stores.jp/reserve/oden_sauna/booking_pages"),
    ],
  },
  {
    ids: ["hyogo-user-1ou3tfn"], name: "サウナリゾートオリエンタル神戸", officialUrl: "https://www.centurion-hotel.com/v-kobe/",
    features: ["オートロウリュ", "ロウリュあり", "水風呂あり", "スチーム(ミスト)サウナ", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り利用 2,600円～（入浴料金込・タオルセット付）", "https://www.centurion-hotel.com/v-kobe/facilities/"),
      factNov14("営業時間", "大浴場は24時間利用可（清掃11:00〜15:00）。毎月第1月曜日11:00〜16:00は設備メンテナンスのため利用停止", "https://www.centurion-hotel.com/v-kobe/facilities/"),
      factNov14("設備", "男性浴場：自動ロウリュ付き高温サウナ、水風呂、内湯（バイブラ・ジェット付き）。女性浴場：スチームサウナ、低温炭酸風呂、内湯", "https://www.centurion-hotel.com/v-kobe/facilities/"),
      factNov14("水風呂", "男性浴場に水風呂あり", "https://www.centurion-hotel.com/v-kobe/facilities/"),
      factNov14("利用条件", "日帰り入浴可（入浴料金込・タオルセット付の日帰り利用プランあり）。2Fの大浴場「サウナリゾート オリエンタル」", "https://www.centurion-hotel.com/v-kobe/facilities/"),
    ],
  },
  {
    ids: ["hyogo-user-j7o6wd"], name: "ジェームス山天然温泉 月の湯舟", officialUrl: "http://www.tsuki-no-yufune.com/",
    features: ["塩サウナ", "水風呂あり", "外気あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "内風呂・露天風呂・サウナ利用：大人（中学生以上）平日1,000円・土日祝1,030円、小人（4歳〜小学生）450円。一般入浴（内湯のみ）は大人500円・中人200円・小人100円でサウナ・露天風呂は利用不可", "https://www.tsuki-no-yufune.com/fee"),
      factNov14("営業時間", "午前9:00〜翌午前0:00（最終受付 午後11時）", "http://www.tsuki-no-yufune.com/"),
      factNov14("設備", "男湯は広々とした高温のスタジアムサウナ、女湯は塩サウナとロッキーサウナ。天然温泉（乳白色）の湯と天然海水の露天風呂", "https://www.tsuki-no-yufune.com/sauna"),
      factNov14("水風呂", "水風呂・外気浴スペースあり", "https://www.tsuki-no-yufune.com/sauna"),
      factNov14("利用条件", "泥酔の方、刺青・タトゥー・暴力団並びにその関係者は入館不可。タオル等は持参または館内購入", "https://www.tsuki-no-yufune.com/fee"),
    ],
  },
  {
    ids: ["hyogo-user-1kn9ytm"], name: "チムジルバンスパ神戸", officialUrl: "http://www.chimuspa.com/",
    features: ["塩サウナ", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴（税込）大人（中学生以上）会員1,000円・一般1,100円、小人（3才〜小学生）500円、3才未満無料。土日祝（その他特定日）は会員1,100円・一般1,200円・小人600円。岩盤浴は別途会員900円・一般1,000円", "https://chimuspa.com/guide#howTo"),
      factNov14("設備", "遠赤外線タワーサウナ（高温）、漢方薬草蒸気塩サウナ（低温）、ロウリュウ、備長炭水風呂、天然温泉の岩風呂・高濃度炭酸泉・日替り湯・寝ころび湯など。源泉は須磨白川温泉（アルカリ性単純温泉）", "https://chimuspa.com/facilities#onsen"),
      factNov14("水風呂", "備長炭水風呂", "https://chimuspa.com/facilities#onsen"),
      factNov14("利用条件", "チムジルバン（岩盤浴）のみの利用は不可。小人（3才〜小学生）は岩盤浴を利用できない。会員入会費300円", "https://chimuspa.com/guide#howTo"),
    ],
  },
  {
    ids: ["hyogo-user-hegv6a"], name: "つかさ湯", officialUrl: "",
    features: [],
    facts: [
      factNov14("料金", "大人500円・中人（小学生）200円・小人（未就学児）100円（神戸市の銭湯入浴料金据え置き支援の対象施設、2026年3月1日〜2027年3月31日。通常の兵庫県上限は大人570円）", "https://www.city.kobe.lg.jp/a84140/kenko/health/hygiene/sento/shien.html"),
      factNov14("営業時間", "14:00〜23:00（最終受付22:20）", "https://www.city.kobe.lg.jp/documents/2127/20260216192037.pdf"),
      factNov14("定休日", "木曜日", "https://www.city.kobe.lg.jp/documents/2127/20260216192037.pdf"),
    ],
  },
  {
    ids: ["hyogo-user-17owoba"], name: "ときわ湯", officialUrl: "",
    features: [],
    facts: [
      factNov14("料金", "大人500円・中人（小学生）200円・小人（未就学児）100円（神戸市の銭湯入浴料金据え置き支援の対象施設、2026年3月1日〜2027年3月31日。通常の兵庫県上限は大人570円）", "https://www.city.kobe.lg.jp/a84140/kenko/health/hygiene/sento/shien.html"),
      factNov14("営業時間", "16:00〜23:00（問い合わせは15:00以降）", "https://www.city.kobe.lg.jp/documents/2127/20260216192037.pdf"),
      factNov14("定休日", "土曜日", "https://www.city.kobe.lg.jp/documents/2127/20260216192037.pdf"),
    ],
  },
  {
    ids: ["hyogo-user-46nfyf"], name: "ネスタリゾート神戸 天然温泉 十界の湯", officialUrl: "https://nesta.co.jp/",
    features: ["温泉付き", "タオルレンタルあり", "サ飯あり", "宿泊可", "貸切可"],
    facts: [
      factNov14("料金", "入浴料（税込・タオルセット付）大人（中学生以上）日程区分により2,300円／2,000円／1,800円、子供（中学生未満）1,150円／1,000円／800円、3歳以下無料。岩盤浴（古式蒸窯）は別途1,000円（税込）", "https://nesta.co.jp/spa/guide/"),
      factNov14("営業時間", "通常営業 10:00～24:00（最終受付23:00）、時短営業日は10:00～22:00（最終受付21:00）。岩盤浴・家族風呂の最終受付は通常22:00／時短20:00", "https://nesta.co.jp/spa/facilities/"),
      factNov14("定休日", "年中無休（施設点検日は除く）", "https://nesta.co.jp/spa/facilities/"),
      factNov14("設備", "大小様々な露天風呂（岩風呂・寝湯・秘湯「杜乃湯」など）、サウナ、岩盤浴（着衣サウナ・古式蒸窯）、家族風呂「離れ湯舍」", "https://nesta.co.jp/spa/"),
      factNov14("利用条件", "日帰り入浴可。イレズミ・タトゥー（シール・ペイント含む）のある方は入館不可。小学生以下は保護者同伴", "https://nesta.co.jp/spa/guide/"),
    ],
  },
  {
    ids: ["hyogo-user-1tlx8b4"], name: "パルシェ香りの館・香りの湯", officialUrl: "https://parchez.co.jp/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("営業時間", "香りの湯 11:00～22:00（受付終了 21:00）", "https://parchez.co.jp/"),
      factNov14("定休日", "休館日は公式サイトで都度案内（確認時点で11月17日・12月1日・12月15日が休館日として掲示）", "https://parchez.co.jp/"),
      factNov14("設備", "天然温泉の流水風呂（瀬戸内海を一望できる展望風呂）", "https://parchez.co.jp/"),
    ],
  },
  {
    ids: ["hyogo-user-n0qmv5"], name: "みのたにグリーンスポーツホテル 銀河の湯", officialUrl: "https://en.kobe-glamping.com/activities/hot-spring/",
    features: ["ドライサウナ", "水風呂あり", "温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "大人（中学生以上）平日850円・土日祝950円（再入場券は平日1,000円・土日祝1,100円）、小人（4歳以上）平日400円・土日祝450円、3歳以下無料", "https://en.kobe-glamping.com/activities/hot-spring/"),
      factNov14("営業時間", "平日17:00〜22:00、土日祝14:00〜22:00（最終入場21:00、施設休館日を除く）。グランピング宿泊者は朝風呂7:00〜9:00も利用可", "https://en.kobe-glamping.com/activities/hot-spring/"),
      factNov14("設備", "大浴場・大露天風呂・ドライサウナ・水風呂・壺湯（女湯）・寝湯（男湯、冬季は利用不可）・バブルバス。単純弱放射能泉（pH8.3、源泉34℃）を地下1,200mから使用", "https://en.kobe-glamping.com/activities/hot-spring/"),
      factNov14("水風呂", "水風呂あり", "https://en.kobe-glamping.com/activities/hot-spring/"),
      factNov14("利用条件", "日帰り入浴可。タトゥーのある方・泥酔の方・暴力団関係者は入浴不可。グランピング宿泊者は無料", "https://en.kobe-glamping.com/activities/hot-spring/"),
    ],
  },
  {
    ids: ["hyogo-user-1m40n7t"], name: "宮島温泉", officialUrl: "",
    features: ["水風呂あり", "外気あり"],
    facts: [
      factNov14("営業時間", "15:00〜22:00", "https://hyogo1010.com/sento_list/kobe-miyajimaonsen/"),
      factNov14("定休日", "土曜日", "https://hyogo1010.com/sento_list/kobe-miyajimaonsen/"),
      factNov14("設備", "うたせ湯・サウナ（高温・無料）・ジェット・水風呂・電気風呂・露天風呂", "https://hyogo1010.com/sento_list/kobe-miyajimaonsen/"),
      factNov14("水風呂", "水風呂あり", "https://hyogo1010.com/sento_list/kobe-miyajimaonsen/"),
    ],
  },
  {
    ids: ["hyogo-user-1790s0s"], name: "月光園 鴻朧館", officialUrl: "http://www.gekkoen.co.jp/",
    features: ["温泉付き", "外気あり", "貸切可", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "日帰りコース（食事付き・税込）寛8,800円・和13,200円・雅18,150円。入湯税お一人様75円を別途頂戴", "https://ssl.gekkoen.co.jp/kourokan/dayplan.html"),
      factNov14("利用条件", "日帰り利用可（食事付き日帰りコース。お部屋のご利用はなし）。貸切風呂は要予約", "https://ssl.gekkoen.co.jp/kourokan/dayplan.html"),
      factNov14("設備", "自家泉源の金泉を源泉掛け流しで提供。貸切テーマ風呂3種（檜風呂・洞窟風呂・ワイン風呂）。姉妹館「游月山荘」の温泉も利用可", "https://ssl.gekkoen.co.jp/kourokan/dayplan.html"),
    ],
  },
  {
    ids: ["hyogo-user-fvv4rv"], name: "三田天然温泉 寿ノ湯", officialUrl: "https://kotobuki-yu.com/",
    features: ["塩サウナ", "ロウリュあり", "水風呂あり", "温泉付き"],
    facts: [
      factNov14("設備", "サウナは本場フィンランド式バレルサウナ・ロウリュ塩サウナ・高温サウナの3種。岩盤浴（岩塩・薬草・ゲルマ）と酵素風呂もあり", "https://kotobuki-yu.com/activity/ichiyu/"),
      factNov14("水風呂", "バレルサウナは水風呂・ととのいスペースへの導線まで計算された設計", "https://kotobuki-yu.com/activity/ichiyu/"),
    ],
  },
  {
    ids: ["hyogo-user-jtgohw"], name: "新鶴湯", officialUrl: "",
    features: ["スチーム(ミスト)サウナ", "水風呂あり"],
    facts: [
      factNov14("営業時間", "15:00～22:00", "https://hyogo1010.com/sento_list/himeji-shintsuruyu/"),
      factNov14("定休日", "日曜日", "https://hyogo1010.com/sento_list/himeji-shintsuruyu/"),
      factNov14("設備", "サウナ（スチーム・無料）・ジェット・水風呂・電気風呂・気泡風呂", "https://hyogo1010.com/sento_list/himeji-shintsuruyu/"),
      factNov14("水風呂", "水風呂あり", "https://hyogo1010.com/sento_list/himeji-shintsuruyu/"),
    ],
  },
  {
    ids: ["hyogo-user-iezsww"], name: "森の湯", officialUrl: "http://www.morinoyu.com/", status: "suspended",
    features: [],
    facts: [
 factNov14("営業状況", "浴室内天井の修繕工事のため11月5日（木）より臨時休業中。再開時期は決まり次第HPやSNSで案内（公式サイトの重要なお知らせ）", "http://www.morinoyu.com/"),
      factNov14("料金", "2026年3月19日より 大人570円・中人200円・小人100円、入浴・サウナ750円（公式サイトの料金改定のお知らせ）", "http://www.morinoyu.com/kakakukaitei_26.html"),
      factNov14("利用条件", "浴室内天井の修繕工事のため11月5日（木）より臨時休業中。再開時期は決まり次第HPやSNSで案内するとしている", "http://www.morinoyu.com/"),
    ],
  },
  {
    ids: ["hyogo-user-1r3y3aw"], name: "神戸クアハウス", officialUrl: "https://kobe-kua-house.com/", status: "suspended",
    features: [],
    facts: [
 factNov14("営業状況", "2024年3月末をもって長期休館中（公式サイトのお知らせ「2024年3月末をもって長期休館いたします」「3月31日の営業をもち長期休業に入りました」）", "https://kobe-kua-house.com/"),
      factNov14("利用条件", "2024年3月31日の営業をもって長期休業中（公式サイトのお知らせ「2024年3月末をもって長期休館いたします」）", "https://kobe-kua-house.com/"),
    ],
  },
  {
    ids: ["hyogo-user-yru0ya"], name: "神戸サウナ＆スパ", officialUrl: "http://www.kobe-sauna.co.jp/",
    features: ["温泉付き", "外気あり", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("営業時間", "24時間利用可", "http://www.kobe-sauna.co.jp/"),
      factNov14("設備", "天然温泉・露天風呂・本格サウナ・カプセルホテルを完備", "http://www.kobe-sauna.co.jp/"),
      factNov14("利用条件", "ご入館は中学生（12歳）以上から。小学生以下の方は利用不可", "http://www.kobe-sauna.co.jp/"),
      factNov14("利用条件", "タオル・館内着など必要なアメニティは全て用意あり。サウナコースで入館の方は外出不可", "http://www.kobe-sauna.co.jp/"),
    ],
  },
  {
    ids: ["hyogo-user-1il2ira"], name: "神戸ハーバーランド温泉 万葉倶楽部", officialUrl: "https://www.manyo.co.jp/kobe/eng/fee-schedule/",
    features: ["温泉付き", "貸切可", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "マル得セット入館料 大人（中学生以上）2,950円・小学生1,310円・幼児（3歳〜未就学児）1,070円（税込、大人は入湯税75円別途）。朝風呂（5:00〜9:00）は大人1,500円", "https://www.manyo.co.jp/kobe/eng/fee-schedule/"),
      factNov14("営業時間", "24時間・年中無休（大浴場は清掃のため毎日2:00〜5:00利用不可）。滞在は朝5:00〜翌3:00までで、3:00以降は深夜料金が必要", "https://www.manyo.co.jp/kobe/eng/fee-schedule/"),
      factNov14("設備", "岩盤浴（10:00〜翌1:00、一般1,200円・有料会員960円）、貸切家族風呂（1時間2,860円・要予約）", "https://www.manyo.co.jp/kobe/eng/fee-schedule/"),
    ],
  },
  {
    ids: ["hyogo-user-10dqxag"], name: "神戸みなと温泉 蓮", officialUrl: "https://ren-onsen.jp/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "日帰り入館料 平日2,715円・土日祝3,155円（消費税・入湯税込）", "https://ren-onsen.jp/"),
      factNov14("利用条件", "日帰り利用可（日帰り温泉プランあり）。日帰り温泉は12歳以上のご利用に限る", "https://ren-onsen.jp/"),
      factNov14("利用条件", "大きさを問わず、刺青・タトゥーがあるお客様のご利用は不可", "https://ren-onsen.jp/"),
    ],
  },
  {
    ids: ["hyogo-user-14m6zk6"], name: "神戸レディススパ", officialUrl: "https://www.kobe-sauna.co.jp/ladies-floor/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "ロウリュあり", "熱波師あり", "水風呂あり", "温泉付き", "宿泊可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("営業時間", "ご入浴・サウナの営業時間は8:00～23:00。宿泊者は深夜1時～5時はメンテナンス・清掃のためサウナ・スパ・岩盤浴を利用できない", "https://www.kobe-sauna.co.jp/ladies-floor/beginner/"),
      factNov14("設備", "ドライサウナ（熱波師によるロウリュサービスあり）、ミストサウナ「ローズテルマリウム」、天然温泉「神乃湯温泉」、岩盤浴2種（ルナ・ルーム／テラ・ルーム）", "https://www.kobe-sauna.co.jp/ladies-floor/sauna-spa/"),
      factNov14("水風呂", "3Fレディスフロアのサウナ＆スパエリアに水風呂がある", "https://www.kobe-sauna.co.jp/ladies-floor/floor-guide/"),
      factNov14("料金", "岩盤浴は別途520円（メンバーズカード会員は無料）", "https://www.kobe-sauna.co.jp/ladies-floor/beginner/"),
      factNov14("利用条件", "女性専用フロア。ビル共通の案内で、入館は中学生（12歳）以上から、小学生以下は利用不可", "https://www.kobe-sauna.co.jp/"),
    ],
  },
  {
    ids: ["hyogo-user-1dy2c1k"], name: "太山寺温泉 なでしこの湯", officialUrl: "http://www.nadeshikonoyu.com/",
    features: ["ロウリュあり", "温泉付き", "外気あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("設備", "ロウリュウサウナ、露天風呂、源泉かけ流し、滝湯、宿泊施設、お食事処", "http://www.nadeshikonoyu.com/"),
    ],
  },
  {
    ids: ["hyogo-user-1j3sjca"], name: "第一平和温泉 龍の湯", officialUrl: "https://hyogo1010.com/sento_list/kobe-daiichiheiwaonsen/",
    features: ["水風呂あり", "温泉付き", "外気あり"],
    facts: [
      factNov14("営業時間", "14:00〜翌朝10:00", "https://hyogo1010.com/sento_list/kobe-daiichiheiwaonsen/"),
      factNov14("定休日", "無休", "https://hyogo1010.com/sento_list/kobe-daiichiheiwaonsen/"),
      factNov14("設備", "サウナ（高温・有料）、ジェット、天然温泉、水風呂、電気風呂、露天風呂", "https://hyogo1010.com/sento_list/kobe-daiichiheiwaonsen/"),
      factNov14("料金", "大人500円・中人200円・小人100円（2026年3月1日〜2027年3月31日、神戸市の入浴料金据え置き支援による。兵庫県の上限料金は570円）", "https://www.city.kobe.lg.jp/a84140/kenko/health/hygiene/sento/shien.html"),
    ],
  },
  {
    ids: ["hyogo-user-ffu317"], name: "潮芦屋温泉 SPA水春", officialUrl: "https://suisyun.jp/ashiya/",
    features: ["塩サウナ", "セルフロウリュ", "ロウリュあり", "温泉付き", "外気あり", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入館料 大人 平日1,870円・土日祝2,090円、小人 平日990円・土日祝1,100円（税込、別途入湯税75円）。岩盤浴は大人 +880円（平日）／+990円（土日祝）", "https://suisyun.jp/ashiya/fee"),
      factNov14("営業時間", "9:00～25:00（最終入館受付24:00）", "https://suisyun.jp/ashiya/fee"),
      factNov14("定休日", "年中無休（メンテナンスのため臨時休館する場合あり）", "https://suisyun.jp/ashiya/fee"),
      factNov14("設備", "ロウリュサウナ、漢方薬草塩サウナ、男性浴場にセルフロウリュサウナ「瞑想サウナ」、天然温泉「潮彩の湯」、13種類のお風呂、岩盤浴、レストラン「水春亭」", "https://suisyun.jp/ashiya/"),
      factNov14("利用条件", "刺青(入れ墨)・タトゥー（タトゥーシール含む）のある方は入場不可。小人のみでの入館・入浴は不可", "https://suisyun.jp/ashiya/fee"),
    ],
  },
  {
    ids: ["hyogo-user-1ejkw5g"], name: "天然温泉 あぐろの湯", officialUrl: "http://www.aguro-no-yu.com/",
    features: ["ドライサウナ", "オートロウリュ", "ロウリュあり", "スチーム(ミスト)サウナ", "温泉付き", "外気あり", "タオルレンタルあり"],
    facts: [
      factNov14("営業時間", "10:00~24:00 最終受付（23:15）", "http://www.aguro-no-yu.com/"),
      factNov14("定休日", "年中無休", "http://www.aguro-no-yu.com/"),
      factNov14("料金", "大人（中学生以上）1,000円・小人（3歳～小学生）450円（税込、2歳以下は無料）。レンタルバスタオル150円・販売タオル200円", "http://www.aguro-no-yu.com/"),
      factNov14("設備", "ドライサウナは1時間に1回のオートロウリュウ付き、薬草サウナは天然の生薬やハーブを使用したミストサウナ、天然温泉・炭酸風呂など11種類の浴槽、露天風呂", "http://www.aguro-no-yu.com/"),
    ],
  },
  {
    ids: ["hyogo-user-fxh8ab"], name: "天然温泉 双葉温泉", officialUrl: "https://www.futabaonsen.com/",
    features: ["水風呂あり", "外気あり", "温泉付き"],
    facts: [
      factNov14("営業時間", "月・火・木・金・土・日 15:00～23:30（23:00受付終了）", "https://www.futabaonsen.com/"),
      factNov14("定休日", "水曜日", "https://www.futabaonsen.com/"),
      factNov14("料金", "大人550円・小学生200円・乳幼児100円、サウナは130円加算", "https://www.futabaonsen.com/"),
      factNov14("設備", "男湯・女湯ともに露天風呂と内湯2ヶ所が源泉かけ流し。水風呂、電気風呂、ジェットバス、サウナ（別料金）。泉質はナトリウム-塩化物・炭酸水素塩泉", "https://www.futabaonsen.com/"),
    ],
  },
  {
    ids: ["hyogo-user-1c0ebbj"], name: "湯あそびひろば 森温泉", officialUrl: "http://morionsen.life.coocan.jp/",
    features: ["ドライサウナ", "水風呂あり", "外気あり", "タオルレンタルあり"],
    facts: [
      factNov14("営業時間", "通常 午後2時～翌0時30分。朝風呂は毎週日曜日のみ午前7時～午前10時30分。入店は営業終了の30分前まで", "http://morionsen.life.coocan.jp/info.html"),
      factNov14("定休日", "第一・第三・第五火曜日、元旦", "http://morionsen.life.coocan.jp/info.html"),
      factNov14("料金", "大人（中学生以上）500円・中人（小学生）200円・小人（乳児・幼児）100円、サウナ150円（サウナ用貸バスタオル付き）、手ぶらセット690円［サウナなし］／840円［サウナ付き］（2026/03/01改定）", "http://morionsen.life.coocan.jp/info.html"),
      factNov14("設備", "ローリングバス、リラックバス、ジェットバス、水風呂、乾式サウナ（有料）、電気風呂、露天風呂（人工温泉）", "http://morionsen.life.coocan.jp/shisethu.html"),
    ],
  },
  {
    ids: ["hyogo-user-19g7bpz"], name: "湯の華廊", officialUrl: "https://www.yunokarou.com/facilities/",
    features: ["温泉付き", "外気あり", "タオルレンタルあり", "サ飯あり"],
    facts: [
      factNov14("料金", "大人（中学生以上）平日 会員900円・一般950円、土日祝 会員930円・一般980円、特日 会員1,030円・一般1,080円。小人（4歳以上）平日450円・一般500円、土日祝480円・一般530円、3歳以下無料", "https://www.yunokarou.com/facilities/"),
      factNov14("営業時間", "本館 午前10時～午前0時（最終受付午後11時）、別館「癒し蔵」午前10時～午後11時（最終受付午後10時）", "https://www.mapion.co.jp/news/release/000000747.000023550-all/"),
      factNov14("設備", "岩盤浴（溶岩石・天降石の2種14床）、薬草風呂、温暖ルーム、外気浴チルスペース、レンタルタオルセット280円、食事処あり", "https://www.yunokarou.com/facilities/"),
      factNov14("利用条件", "イレズミ・タトゥーのある方は入館不可", "https://www.yunokarou.com/facilities/"),
    ],
  },
  {
    ids: ["hyogo-user-1ce529a"], name: "道の駅よかわ（吉川温泉よかたん）", officialUrl: "https://www.76-2401.com/yokatan/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "外気あり", "温泉付き", "貸切可", "サ飯あり"],
    facts: [
      factNov14("営業時間", "10:00～22:00（受付時間は21:00まで）", "https://www.76-2401.com/yokatan/spa_information/"),
      factNov14("定休日", "毎週月曜日（月曜祝日の場合は翌火曜日休館）", "https://www.76-2401.com/yokatan/"),
      factNov14("設備", "幸の湯（岩造り）＝ドライサウナ・水風呂、福の湯（木造り）＝スチームサウナ・水風呂。大浴場・源泉風呂・露天風呂・家族風呂・足湯（10時から18時まで）あり", "https://www.76-2401.com/yokatan/spa_information/"),
    ],
  },
  {
    ids: ["hyogo-user-1lou3ff"], name: "美健SPA 湯櫻（SPAキセラ川西）", officialUrl: "https://spa-kisela-kawanishi.jp/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "セルフロウリュ", "熱波師あり", "ロウリュあり", "水風呂あり", "サ飯あり"],
    facts: [
      factNov14("料金", "大人（中学生以上）平日900円・土日祝1,050円、小人（4歳以上）平日450円・土日祝520円。2026年12月1日改定で大人950/1,100円、小人470/550円（岩盤処は改定なし）", "https://spa-kisela-kawanishi.jp/news/2612ryokinkaitei/"),
      factNov14("営業時間", "10:00～深夜1:00（最終受付0:30）", "https://spa-kisela-kawanishi.jp/events/261111totonoe-day/"),
      factNov14("定休日", "不定休（休館日は公式サイトのお知らせで告知。2026年12月7日〜11日は休館）", "https://spa-kisela-kawanishi.jp/"),
      factNov14("設備", "サウナ4種（バレルサウナ・遠赤外線サウナ・瞑想サウナ（男湯）・スチームサウナ（女湯））、岩盤浴、6種のお風呂。毎週土日に遠赤サウナでスタッフロウリュ、アウフグースイベントあり", "https://spa-kisela-kawanishi.jp/"),
      factNov14("水風呂", "冷水風呂あり（イベント時に男性のみ氷水風呂を実施）", "https://spa-kisela-kawanishi.jp/events/261111totonoe-day/"),
    ],
  },
  {
    ids: ["hyogo-user-1uphg1v"], name: "姫路キヤッスルグランヴィリオホテル 華楽の湯", officialUrl: "https://www.himejicastlehotel.co.jp/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("設備", "華楽の湯は、大小あわせて5種類のお風呂と、ikiサウナやオンドル、岩盤浴などを備える温浴施設", "https://www.himejicastlehotel.co.jp/"),
    ],
  },
  {
    ids: ["hyogo-user-16k6kzu"], name: "兵衛向陽閣", officialUrl: "https://www.hyoe.co.jp/",
    features: ["温泉付き", "貸切可", "宿泊可", "外気あり"],
    facts: [
      factNov14("設備", "和風の一の湯、洋風の二の湯、湯治場風の三の湯と3つの大浴場（九つの湯ぶね）すべて金泉、それぞれに露天風呂と内湯あり。2種類の貸切露天風呂でも金泉を楽しめる", "https://www.hyoe.co.jp/welcome/"),
      factNov14("利用条件", "日帰りプランあり（公式サイトに「宿泊・日帰りプラン」を掲載）", "https://www.hyoe.co.jp/"),
    ],
  },
  {
    ids: ["hyogo-user-cz5z9x"], name: "蓬川温泉 みずきの湯", officialUrl: "http://www.mizukinoyu.com/",
    features: ["オートロウリュ", "ロウリュあり", "熱波師あり", "サ飯あり"],
    facts: [
      factNov14("料金", "入館料 大人870円、小人440円。八汗房（岩盤浴）大人800円、小人400円", "https://www.mizukinoyu.com/map.html"),
      factNov14("設備", "高濃度炭酸泉の大浴場、スタジアムサウナ（熱波風炉）で2時間に1回スタッフによるロウリュウアトラクション、熱風風炉でプロペラによるオートロウリュウが1時間に1回、岩盤浴ゾーンは8種類の発汗処", "https://mizukinoyu.com/bath.html"),
      factNov14("利用条件", "刺青・タトゥーのある方の入場はお断り", "https://www.mizukinoyu.com/map.html"),
    ],
  },
  {
    ids: ["hyogo-user-cz61n0"], name: "名湯 宝乃湯", officialUrl: "https://takaranoyu.jp/",
    features: ["オートロウリュ", "ロウリュあり", "塩サウナ", "スチーム(ミスト)サウナ", "温泉付き", "男女共用", "外気あり", "サ飯あり"],
    facts: [
      factNov14("営業時間", "入浴 10:00～24:00（最終受付23:00）、岩盤浴 10:00～23:00（最終受付22:00）", "https://takaranoyu.jp/"),
      factNov14("定休日", "年中無休（臨時メンテナンス日を除く）", "https://takaranoyu.jp/"),
      factNov14("設備", "男女浴室ともに屋内風呂1槽・露天風呂6種9槽、ロウリュサウナ、塩サウナ、女性浴室のみミストサウナ。自動ロウリュサウナは80℃～90℃。源泉かけ流しの黄金泉、岩盤浴施設5室、食事処あり", "https://takaranoyu.jp/"),
    ],
  },
  {
    ids: ["hyogo-user-ttbeet"], name: "有馬温泉 太閤の湯", officialUrl: "https://www.taikounoyu.com/",
    features: ["温泉付き"],
    facts: [
      factNov14("設備", "日本一の温泉成分濃度をもつ「金泉」をはじめとする、26種類のお風呂と岩盤浴", "https://www.taikounoyu.com/"),
    ],
  },
  {
    ids: ["hyogo-user-1n3wo72"], name: "有馬街道温泉 すずらんの湯", officialUrl: "https://suzurannoyu.jp/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "セルフロウリュ", "オートロウリュ", "ロウリュあり", "水風呂あり", "外気あり", "温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴のみ 大人 平日1,000円・土日祝/特日1,200円、子供 平日600円・土日祝800円、6歳以下無料。岩盤浴付きプラン 大人2,000円/日。レンタルはハンドタオル150円・バスタオル200円・セット300円", "https://suzurannoyu.jp/prices/"),
      factNov14("営業時間", "入浴 10:00–24:00（最終入場23:00）、岩盤浴 10:00–23:00（最終入場22:00）", "https://suzurannoyu.jp/prices/"),
      factNov14("設備", "サウナ（オートロウリュ、宮水使用・15分に一度）、スチームサウナ（宮水ミスト）、森のサウナ蒸庵（大型タワーサウナ・セルフロウリュ、男性のみ）、岩盤浴4種、神戸最大級の庭園露天風呂", "https://suzurannoyu.jp/onsen-4/"),
      factNov14("水風呂", "ひのき水風呂・水風呂はいずれも宮水かけ流し", "https://suzurannoyu.jp/onsen-4/"),
      factNov14("利用条件", "イレズミ・タトゥー（フェイクタトゥーシールを含む）のある方の入浴は固くお断り", "https://suzurannoyu.jp/onsen-4/"),
    ],
  },
  {
    ids: ["hyogo-user-16v9p1"], name: "恋野温泉うはらの湯", officialUrl: "https://uharanoyu.com/",
    features: ["温泉付き"],
    facts: [
      factNov14("営業時間", "6:00～23:30（最終受付23:00）", "https://uharanoyu.com/"),
      factNov14("料金", "大人（中学生以上）平日1,200円・土日祝1,300円、朝風呂（6時～9時入館・10時までに退館）平日850円・土日祝900円、小人（3歳～小学生）平日650円・土日祝700円、2歳以下無料。バスタオル+フェイスタオル1セット無料", "https://uharanoyu.com/"),
      factNov14("利用条件", "岩盤浴は9:00～22:30（最終受付22:00）、平日800円・土日祝900円。中学生以上のみ利用可、岩盤浴のみの利用は不可", "https://uharanoyu.com/"),
    ],
  },
  {
    ids: ["st-wakayama-4547"], name: "幸福湯(和歌山)", officialUrl: "https://kofukuyu.com/",
    features: ["タオルレンタルあり"],
    facts: [
      factNov14("料金", "大人（中学生以上）490円・中人（小学生）170円・小人（乳幼児）100円。貸し出しタオル30円・バスタオル50円", "https://kofukuyu.com/"),
      factNov14("営業時間", "11:00〜23:30／15:30〜23:30（曜日により異なる。公式トップの表記どおり）", "https://kofukuyu.com/"),
      factNov14("定休日", "毎週水曜日", "https://kofukuyu.com/"),
      factNov14("利用条件", "サウナは入浴料に含まれており、追加料金はかからない（公式サイトFAQの明記）", "https://kofukuyu.com/"),
    ],
  },
  {
    ids: ["st-tottori-3604"], name: "ベイサイドスクエア皆生ホテル", officialUrl: "https://kaikehotel.com/",
    features: ["温泉付き", "宿泊可"],
    facts: [
      factNov14("料金", "2026年11月21日から土日・祝・祝前日の大人入浴料を800円から1,000円に、岩盤浴を1,500円から1,700円に改定（公式ニュース）", "https://kaikehotel.com/?p=12012"),
      factNov14("設備", "日本海を望む展望浴場「汐の湯」と韓国式低温サウナ「汗溌房」がある", "https://kaikehotel.com/"),
    ],
  },
  {
    ids: ["st-tottori-3600"], name: "ホテルモナーク鳥取", officialUrl: "https://hotel-monarque.jp/",
    features: ["温泉付き", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り入浴 大人（中学生以上）1,200円・子供（小学生）600円・幼児（未就学児）無料（タオル代含む）。宿泊者は大浴場・サウナ無料", "https://hotel-monarque.jp/hot_spring"),
      factNov14("営業時間", "大浴場 6:00～9:30／12:30～24:00。サウナ 17:00～23:00。日帰り入浴 12:30～17:00（最終受付16:30）", "https://hotel-monarque.jp/hot_spring"),
      factNov14("設備", "天然温泉大浴場「おしどりの湯」（自家源泉・鳥取温泉）。サウナはHARVIA製ヒーター導入で約83℃〜85℃設定、最大収容4名", "https://hotel-monarque.jp/hot_spring"),
      factNov14("利用条件", "日帰り入浴可（12:30～17:00、タオル代含む）。食事利用者は当日限定400円で入浴可。回数券11枚綴り10,000円", "https://hotel-monarque.jp/hot_spring"),
    ],
  },
  {
    ids: ["st-tottori-718"], name: "ラピスパ", officialUrl: "https://www.rapi-spa.com/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("営業時間", "10時〜22時（最終受付21時30分）。温泉プールは平日16時〜／土日・祝日10時〜", "https://www.rapi-spa.com/post/news/weekly_gourmet_20261016/"),
      factNov14("定休日", "毎週木曜日", "https://www.rapi-spa.com/post/news/weekly_gourmet_20261016/"),
    ],
  },
  {
    ids: ["st-tottori-3592"], name: "関金温泉 せきがね湯命館", officialUrl: "http://www.yumeikan.com/",
    features: ["温泉付き"],
    facts: [
      factNov14("営業時間", "ご入浴時間 10:00～21:00（最終受付20:30）", "http://www.yumeikan.com/"),
    ],
  },
  {
    ids: ["st-tottori-3603"], name: "渓泉閣", officialUrl: "https://www.keisenkaku.com/",
    features: ["水風呂あり", "温泉付き", "貸切可", "宿泊可"],
    facts: [
      factNov14("営業時間", "大浴場のご利用時間 6時～9時まで、11時～24時まで。家族風呂は16時～21時まで", "https://www.keisenkaku.com/html/onsen.html"),
      factNov14("設備", "男女大浴場に内湯・ジェットバス・サウナ・水風呂完備し、庭園露天風呂がある。貸切の家族風呂は事前予約制", "https://www.keisenkaku.com/html/onsen.html"),
      factNov14("水風呂", "男性大浴場・女性大浴場とも水風呂完備", "https://www.keisenkaku.com/html/onsen.html"),
    ],
  },
  {
    ids: ["st-tottori-3562"], name: "白鳳の里 淀江ゆめ温泉", officialUrl: "http://www.hakuhou.jp/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("営業時間", "平日10:00～21:00（最終受付20:30）、土日祝10:00～22:00（最終受付21:00）", "http://www.hakuhou.jp/"),
      factNov14("定休日", "毎月第4水曜日（祝日の場合は翌日）", "http://www.hakuhou.jp/"),
      factNov14("設備", "源泉かけ流しの日帰り温泉施設で、サウナも完備。館内にレストランゆめ亭がある", "http://www.hakuhou.jp/"),
    ],
  },
  {
    ids: ["st-shimane-758"], name: "おろち湯ったり館", officialUrl: "http://unnan-ud.com/orochi/",
    features: ["温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "一般入浴券600円、児童（4歳〜小学生）300円、70歳以上500円、会員300円（税込）", "http://unnan-ud.com/orochi/"),
      factNov14("営業時間", "温泉 10:00～21:00（最終受付20:30）、プール 10:00～20:30", "http://unnan-ud.com/orochi/"),
      factNov14("定休日", "毎週水曜日（設備メンテナンス等で休館する場合あり）", "http://unnan-ud.com/orochi/"),
      factNov14("設備", "8種類の温泉が楽しめる日帰り温泉（岩風呂・木風呂など）。プール・食事処を併設", "http://unnan-ud.com/orochi/"),
      factNov14("利用条件", "男女混浴制限年齢はおおむね7歳以上", "http://unnan-ud.com/orochi/"),
    ],
  },
  {
    ids: ["st-shimane-755"], name: "きまち湯治村大森の湯", officialUrl: "https://oomorinoyu.com/",
    features: ["セルフロウリュ", "ロウリュあり", "温泉付き", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "大人（中学生以上）平日880円・休日980円、小学生・未就学児 平日350円・休日400円（税込）。回数券（10枚綴り）7,000円", "https://oomorinoyu.com/information/"),
      factNov14("営業時間", "10:00〜21:00（最終受付20:30）", "https://oomorinoyu.com/information/"),
      factNov14("定休日", "年中無休", "https://oomorinoyu.com/information/"),
      factNov14("設備", "セルフロウリュサウナ2種（ハルビア社製ストーブ使用の「サウナ蔵-KURA-」と、地元産・来待石の「サウナ室-MURO-」）。泉質は低張性アルカリ性低温泉", "https://oomorinoyu.com/onsen/"),
      factNov14("利用条件", "刺青・タトゥのある方は入館不可。ただし当館指定のカバーシール（税込220円）で覆えるタトゥー・ボディアートは利用可", "https://oomorinoyu.com/onsen/"),
    ],
  },
  {
    ids: ["st-hiroshima-3533"], name: "スーパー健康ランド華のゆ(広島)", officialUrl: "https://www.route-inn.co.jp/hananoyu-fukuyama/", status: "suspended",
    features: ["温泉付き", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("営業状況", "全館改装工事のため2026年5月15日〜2027年4月30日（予定）休業中（公式サイトのお知らせ「華のゆ温浴施設 工事休業のお知らせ」）", "https://www.route-inn.co.jp/hananoyu-fukuyama/"),
      factNov14("料金", "大人 入浴料900円、子供（4歳〜小学生）入浴料500円（税込）。タオルセット・館内着のレンタルは各200円", "https://www.route-inn.co.jp/hananoyu-fukuyama/price.html"),
      factNov14("営業時間", "10:00～24:00（最終受付23:00）", "https://www.route-inn.co.jp/hananoyu-fukuyama/"),
      factNov14("利用条件", "入浴料にタオル・館内着は含まれない。併設ホテル「ルートイングランティア福山 SPA RESORT」の温浴施設", "https://www.route-inn.co.jp/hananoyu-fukuyama/price.html"),
    ],
  },
  {
    ids: ["st-hiroshima-761"], name: "ニュージャパンＥＸ", officialUrl: "https://sauna-nj.com/",
    features: ["宿泊可", "サ飯あり"],
    facts: [
      factNov14("営業時間", "入浴・サウナ 5:00〜翌2:00（2:00〜5:00は清掃のため利用不可）。24時間営業。宿泊はチェックイン15:00／チェックアウト10:00", "https://sauna-nj.com/"),
      factNov14("定休日", "年中無休", "https://sauna-nj.com/"),
      factNov14("設備", "サウナ・大浴場・カプセルホテルを備え、レストランとボディケア（あかすり・塩もみ等）あり", "https://sauna-nj.com/"),
      factNov14("利用条件", "男性専用施設。入れ墨・タトゥーの入った方は入館不可。飲食物の持ち込み不可", "https://sauna-nj.com/"),
    ],
  },
  {
    ids: ["st-yamaguchi-4387"], name: "海峡ビューしものせき", officialUrl: "https://www.kv-shimonoseki.com/",
    features: ["宿泊可"],
    facts: [
      factNov14("設備", "大浴場あり。関門海峡・関門橋を望みながらの入浴ができる（2024年3月11日リニューアルオープン）", "https://www.mapion.co.jp/news/release/000000002.000135965-all/"),
    ],
  },
  {
    ids: ["st-yamaguchi-4621"], name: "周防阿弥陀寺", officialUrl: "http://www.c-able.ne.jp/~amidaji",
    features: [],
    facts: [
      factNov14("設備", "石風呂あり。重源上人が東大寺用材伐り出しの人夫のために設けたと伝えられ、公式サイトは「鎌倉時代のサウナ」と紹介。新しい石風呂は毎月第1日曜日に地元の世話役が焚いている", "http://www.c-able.ne.jp/~amidaji/amidaji.html"),
      factNov14("利用条件", "湯屋（重要有形民俗文化財）での入浴は、7月の開山忌に湯を立てて行われる", "http://www.c-able.ne.jp/~amidaji/amidaji.html"),
    ],
  },
  {
    ids: ["st-tokushima-4383"], name: "NEXEL ネクセル リラクゼーション&スパ", officialUrl: "https://nexel.info/",
    features: ["宿泊可"],
    facts: [
      factNov14("利用条件", "チェックイン16:00〜（最終受付23:00）、チェックアウト10:00", "https://nexel.info/"),
    ],
  },
  {
    ids: ["st-tokushima-4549"], name: "昭和湯(徳島)", officialUrl: "https://www.east-tokushima.jp/en/explore/detail.php?id=363",
    features: ["水風呂あり"],
    facts: [
      factNov14("料金", "大人450円・小学生150円・未就学児70円", "https://www.east-tokushima.jp/en/explore/detail.php?id=363"),
      factNov14("営業時間", "平日15:00〜22:00、土日祝14:00〜22:00", "https://www.east-tokushima.jp/en/explore/detail.php?id=363"),
      factNov14("定休日", "毎月2日・3日・12日・13日・22日・23日", "https://www.east-tokushima.jp/en/explore/detail.php?id=363"),
      factNov14("設備", "サウナ・水風呂・日替わり薬湯あり（2018年リニューアル）", "https://www.east-tokushima.jp/en/explore/detail.php?id=363"),
    ],
  },
  {
    ids: ["st-ehime-3769"], name: "かみとくの湯", officialUrl: "https://kamitokunoyu.jp/",
    features: ["貸切可"],
    facts: [
      factNov14("料金", "大浴場 大人650円・高齢者600円、手ぶらセット950円（2023年1月1日改定）。家族風呂：露天風呂付1時間3,000円／サウナ付1時間3,500円", "https://kamitokunoyu.jp/info/001.pdf"),
      factNov14("設備", "家族風呂あり（露天風呂付・サウナ付）。「あひる風呂」は露天風呂付家族風呂で1部屋限定・予約制、予約時間は9時から2時間ごと最終21時", "https://kamitokunoyu.jp/kazoku/ahiru.pdf"),
    ],
  },
  {
    ids: ["st-ehime-3731"], name: "しまなみ温泉 喜助の湯", officialUrl: "https://www.kisuke.com/yu-imabari/",
    features: ["温泉付き"],
    facts: [
      factNov14("営業時間", "6:00～24:00（最終受付 23:00）", "https://www.mapion.co.jp/news/release/000000393.000110610-all/"),
      factNov14("料金", "入浴料：一般800円、子ども300円", "https://topics.smt.docomo.ne.jp/amp/article/eventbank/region/eventbank-10603139"),
    ],
  },
  {
    ids: ["st-ehime-4253"], name: "マーレ・グラッシア大三島", officialUrl: "http://jf-omishima.or.jp/publics/index/19/",
    features: [],
    facts: [
      factNov14("料金", "大人（中学生以上）700円、高齢者（65歳以上）560円、小人（3歳以上小学生以下）350円、3歳未満無料。回数券12枚つづり大人7,000円（令和7年10月1日改定）", "http://jf-omishima.or.jp/publics/index/19/"),
      factNov14("営業時間", "入浴 10:00～20:00（19:30札止め）", "http://jf-omishima.or.jp/publics/index/19/"),
      factNov14("定休日", "毎週水曜日（定休日）及び2月の第1火・水・木曜日（オーバーホール日）", "http://jf-omishima.or.jp/publics/index/19/"),
      factNov14("設備", "海水風呂（塩湯）、露天風呂（岩風呂あり）、展望風呂、歩行浴、マッサージバス（ジェット）など6種類のお風呂", "http://jf-omishima.or.jp/publics/index/19/"),
    ],
  },
  {
    ids: ["st-ehime-3732"], name: "伊予の湯治場 喜助の湯", officialUrl: "https://www.kisuke.com/yu-matsuyama/",
    features: ["オートロウリュ", "ロウリュあり", "温泉付き", "外気あり", "サ飯あり"],
    facts: [
      factNov14("営業時間", "5:00～26:00（最終受付 25:00）", "https://prtimes.jp/main/html/rd/p/000000430.000110610.html"),
      factNov14("設備", "2026年6月に温浴・サウナ・飲食エリアを大規模リニューアル。天然温泉は地下1,500mから湧出。15種類の生薬をブレンドした薬草風呂を期間限定で提供", "https://prtimes.jp/main/html/rd/p/000000430.000110610.html"),
    ],
  },
  {
    ids: ["st-kochi-4371"], name: "土佐御苑", officialUrl: "https://tosagyoen.co.jp/",
    features: ["宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "日帰り入浴料1,000円（夕食と一緒に大浴場を利用する場合は500円）。バスタオル貸し出し300円、小タオル200円", "https://tosagyoen.co.jp/bath/"),
      factNov14("営業時間", "入浴時間 朝5:30～9:00（最終受付8:00）、夕16:00～24:00（最終受付23:00）。サウナは夜のみ利用可", "https://tosagyoen.co.jp/bath/"),
      factNov14("設備", "男女とも大浴場にサウナあり。露天風呂には天然ラジウム鉱石のかめ風呂、室戸海洋深層水を使った岩風呂", "https://tosagyoen.co.jp/bath/"),
      factNov14("利用条件", "日帰り入浴可。イレズミ・タトゥーの入っているお客様のご利用は固くお断り。宿泊客は入浴料・タオル代なし", "https://tosagyoen.co.jp/bath/"),
    ],
  },
  {
    ids: ["hyogo-user-1ryh2b6"], name: "天然温泉 蓬莱湯", officialUrl: "https://houraiyu.jp/", status: "suspended",
    features: [],
    facts: [
      factNov14("営業状況", "しばらくのあいだ休業中（尼崎浴場組合が2026年11月2日に発表。再開時期は見込みが整い次第案内するとしている）", "https://amagasaki.mypl.net/shop/00000387904/news?d=3476859"),
    ],
  },
  {
    ids: ["st-fukuoka-792"], name: "グリーンランド中洲店", officialUrl: "http://greenland-group.jp/nakasu/",
    features: ["オートロウリュ", "ドライサウナ", "水風呂あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "通常サウナ 一般2,900円・会員2,300円／3時間サウナ（平日）一般2,100円・会員1,900円／90分サウナ（平日）一般1,400円・会員1,200円（税込）", "https://greenland-group.jp/nakasu/price"),
      factNov14("営業時間", "24時間営業", "http://greenland-group.jp/nakasu/"),
      factNov14("定休日", "年中無休", "http://greenland-group.jp/nakasu/"),
      factNov14("設備", "5F大浴場・サウナに、オートロウリュのフィンランドサウナと昔ながらの遠赤外線サウナを完備", "http://greenland-group.jp/nakasu/"),
      factNov14("水風呂", "16℃前後の冷水風呂と不感湯（ぬる湯）あり", "http://greenland-group.jp/nakasu/"),
      factNov14("利用条件", "入れ墨（タトゥー含む）を指定シールで覆えば入浴可能とする試験運用は2026年5月1日で終了（公式お知らせ）", "https://greenland-group.jp/news/1811/"),
    ],
  },
  {
    ids: ["st-fukuoka-4402"], name: "みなと温泉 波葉の湯", officialUrl: "https://namiha.jp/",
    features: ["ドライサウナ", "水風呂あり", "温泉付き", "貸切可", "男女共用", "サ飯あり"],
    facts: [
      factNov14("料金", "2026年11月19日改定：入浴 平日1,150円・土日祝1,300円／岩盤浴 平日1,800円・土日祝2,200円／貸切風呂90分 土日祝4,300円（平日は変更なし）", "https://namiha.jp/2026/11/03/%E2%80%BB%E4%BE%A1%E6%A0%BC%E6%94%B9%E5%AE%9A%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B/"),
      factNov14("営業時間", "ご入浴10:00～23:00（最終受付22:15）／岩盤浴10:00～22:30（最終受付21:30）／貸切風呂10:00～22:30（最終受付21:00）", "https://namiha.jp/"),
      factNov14("定休日", "年中無休（年数回、設備点検休業あり）", "https://namiha.jp/"),
      factNov14("設備", "高温サウナ「熱香房」（男女各）／男性サウナ約100℃設定（2025年4月増設）／岩盤浴「薬石健美香房」（7つの薬石サウナ）／貸切風呂5室", "https://namiha.jp/shisetsu/spa"),
      factNov14("水風呂", "水風呂（上水）約16℃・循環式", "https://namiha.jp/shisetsu/spa"),
      factNov14("利用条件", "熱香房（高温サウナ）は小学生まで安全管理上利用不可。浴室内へのポンチョ持ち込みは防犯上禁止", "https://namiha.jp/shisetsu/spa"),
    ],
  },
  {
    ids: ["st-fukuoka-3819"], name: "天然温泉おとぎの杜", officialUrl: "http://www.otogi-mori.com/",
    features: ["セルフロウリュ", "ロウリュあり", "塩サウナ", "水風呂あり", "外気あり", "温泉付き", "サ飯あり"],
    facts: [
      factNov14("料金", "入浴回数券10枚9,300円（税込）※2026年12月の料金改定後は10枚9,800円。2026年12月より入浴料金改定の公式告知あり", "https://otogi-mori.com/8887"),
      factNov14("営業時間", "月〜土10:00〜25:00（最終受付24時）／日曜日7:00〜25:00（最終受付24時）", "https://otogi-mori.com/8887"),
      factNov14("設備", "遠赤外線のフィンランド式サウナ／メディテーションサウナ（男湯・セルフロウリュ可）／塩サウナ（女湯）／ロウリュサービスを男女各サウナで毎日3回実施", "https://otogi-mori.com/otogi-mori/ofuro"),
      factNov14("水風呂", "深冷水風呂（男湯）・涼やかな水風呂あり", "https://otogi-mori.com/otogi-mori/ofuro"),
    ],
  },
  {
    ids: ["st-saga-3941"], name: "ヌルヌル有田温泉", officialUrl: "https://www.arita-onsen.com",
    features: ["水風呂あり", "温泉付き", "貸切可"],
    facts: [
      factNov14("料金", "一般入浴料 大人（高校生以上）800円・小人（小中学生）500円・3歳以上未就学児300円・3歳未満無料／会員 大人700円・小人400円／貸切風呂60分2,500円（別途入浴料）", "https://www.arita.jp/stay/post_6.html"),
      factNov14("営業時間", "10:30～21:30（最終受付21:00まで）※当面の間", "https://www.arita.jp/stay/post_6.html"),
      factNov14("定休日", "毎週水曜日（祝祭日は営業します）", "https://www.arita.jp/stay/post_6.html"),
      factNov14("設備", "大浴場、サウナ、露天風呂、個室風呂を備える。貸切風呂は7室", "https://www.arita.jp/stay/post_6.html"),
      factNov14("水風呂", "大浴場・露天水風呂にサウナがついています", "https://www.arita.jp/stay/post_6.html"),
    ],
  },
  {
    ids: ["st-nagasaki-801"], name: "サウナサン", officialUrl: "http://www.sauna-sun.com/",
    features: ["ロウリュあり", "熱波師あり", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("設備", "ロウリュ＆アウフグースを毎週木・土・日の14:00／17:00／21:00に開催", "http://www.sauna-sun.com/"),
      factNov14("利用条件", "男性専用（カプセルホテル併設）", "http://www.sauna-sun.com/"),
    ],
  },
  {
    ids: ["st-nagasaki-843"], name: "稲佐山温泉ふくの湯", officialUrl: "https://www.fukunoyu.com/nagasaki/",
    features: ["スチーム(ミスト)サウナ", "ロウリュあり", "温泉付き"],
    facts: [
      factNov14("営業時間", "月～木・日 9:30～翌1:00(最終受付 翌0:30)／金・土・祝前日 9:30～翌2:00(最終受付 翌1:30)", "https://www.fukunoyu.com/nagasaki/"),
      factNov14("定休日", "年中無休(メンテナンス日を除く)。2026年11月9日～11月12日は店休日", "https://www.fukunoyu.com/nagasaki/"),
      factNov14("設備", "長崎市内を一望できる露天風呂、家族風呂、岩盤浴あり。漢方スチーム×瞑想サウナ、岩盤浴「福蒸洞」では2種のロウリュウサービスを実施", "https://www.fukunoyu.com/nagasaki/"),
      factNov14("利用条件", "家族風呂を含め、刺青及びボディタトゥー・ペイントタトゥーのある方は入店不可。支払いは現金のみ", "https://www.fukunoyu.com/nagasaki/"),
    ],
  },
  {
    ids: ["st-nagasaki-3959"], name: "稲佐山温泉ホテルアマンディ", officialUrl: "https://inasayama-amandi.jp/", status: "suspended",
    features: ["温泉付き", "宿泊可"],
    facts: [
 factNov14("営業状況", "改修工事のため2026年11月1日〜2027年4月20日（予定）全館営業休止中。最終営業日は2026年10月31日（公式サイトのお知らせ）", "https://inasayama-amandi.jp/news20260401.html"),
      factNov14("営業時間", "10:00～24:00", "https://inasayama-amandi.jp/"),
      factNov14("設備", "バリ風露天風呂、100％源泉の温浴、岩盤浴、エステルーム、あかすりを用意。日帰り温泉・宿泊・宴会・レストラン併設", "https://inasayama-amandi.jp/"),
      factNov14("利用条件", "改修工事のため全館営業休止:最終営業日2026年10月31日、休止期間2026年11月1日～2027年4月20日(予定)。日帰り温泉入湯回数券は2026年10月31日までの利用", "https://inasayama-amandi.jp/news20260401.html"),
    ],
  },
  {
    ids: ["st-nagasaki-4385"], name: "西彼保健福祉センター 遊湯館", officialUrl: "https://www.shakyo-saikai.jp/%E5%85%A5%E6%B5%B4%E6%96%BD%E8%A8%AD", status: "suspended",
    features: [],
    facts: [
 factNov14("営業状況", "設備故障の修繕と館内空調・電気設備・浴室工事のため臨時休館中。休館期間は2027年1月31日まで（予定）延長（西海市社会福祉協議会の公式ページ）", "https://www.shakyo-saikai.jp/%E5%85%A5%E6%B5%B4%E6%96%BD%E8%A8%AD"),
      factNov14("料金", "市内:3歳～11歳80円、12歳～17歳100円、65歳以上200円／市外:12歳以上310円。回数券(12枚綴り)あり。タオル150円・石鹸150円で販売", "https://www.shakyo-saikai.jp/%E5%85%A5%E6%B5%B4%E6%96%BD%E8%A8%AD"),
      factNov14("営業時間", "午後1時～午後8時30分(午後8時最終受付)", "https://www.shakyo-saikai.jp/%E5%85%A5%E6%B5%B4%E6%96%BD%E8%A8%AD"),
      factNov14("定休日", "毎週日曜日。元旦は休館。機械設備メンテナンスのため臨時休館する場合あり", "https://www.shakyo-saikai.jp/%E5%85%A5%E6%B5%B4%E6%96%BD%E8%A8%AD"),
      factNov14("設備", "小さいですがサウナもあります。飲み物の自販機と休憩室あり(売店なし)。石鹸やタオルは持参", "https://www.shakyo-saikai.jp/%E5%85%A5%E6%B5%B4%E6%96%BD%E8%A8%AD"),
      factNov14("利用条件", "設備故障の修繕と館内空調・電気設備・浴室工事のため臨時休館中。休館期間は令和9年1月31日まで(予定)延長", "https://www.shakyo-saikai.jp/%E5%85%A5%E6%B5%B4%E6%96%BD%E8%A8%AD"),
    ],
  },
  {
    ids: ["st-kumamoto-82"], name: "サウナと天然温泉 湯らっくす", officialUrl: "https://www.yulax.info/",
    features: ["温泉付き", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("営業時間", "365日24時間営業。温泉・サウナは10時～翌8時(8～10時は清掃のため入浴不可)", "https://www.yulax.info/"),
      factNov14("設備", "天然温泉・サウナのほかレストラン、あかすり・マッサージ(10時～25時)、ヨガスタジオあり", "https://www.yulax.info/"),
      factNov14("利用条件", "入浴のみの場合はタオル持参(館内販売あり)で支払いは現金のみ。休憩・宿泊プランはタオル貸出あり。ドミトリー(男女共用・女性専用)は予約専用、チェックイン12:00～・チェックアウト11:00まで", "https://www.yulax.info/"),
    ],
  },
  {
    ids: ["st-kumamoto-854"], name: "八代センター サウナ", officialUrl: "https://yatushirosauna.hirameki7.site/",
    features: ["ドライサウナ", "水風呂あり"],
    facts: [
      factNov14("料金", "1,500円（フェイスタオル、バスタオル、館内着、カミソリ、歯ブラシ込み）※現金のみ", "https://yatushirosauna.hirameki7.site/"),
      factNov14("営業時間", "16:00 ～ 22:00 ※最終受付 20:00", "https://yatushirosauna.hirameki7.site/"),
      factNov14("定休日", "火曜日、水曜日", "https://yatushirosauna.hirameki7.site/"),
      factNov14("設備", "昔ながらのドライサウナ、水質が良い水風呂だけで営業", "https://yatushirosauna.hirameki7.site/"),
      factNov14("水風呂", "水質が良い水風呂あり", "https://yatushirosauna.hirameki7.site/"),
      factNov14("利用条件", "男性専用", "https://yatushirosauna.hirameki7.site/"),
    ],
  },
  {
    ids: ["st-oita-78"], name: "CITY SPA てんくう", officialUrl: "https://www.jroitacity.jp/contents/cityspatenku/language/english/index.html",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "水風呂あり", "温泉付き", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "入浴プラン平日1,900円（小人1,500円）・土日祝2,200円（小人1,500円）、ヒーリングプラン平日2,400円・土日祝2,700円", "https://www.jroitacity.jp/contents/cityspatenku/language/english/index.html"),
      factNov14("営業時間", "11:00〜24:00（受付はヒーリングプラン23:00まで、入浴プラン23:30まで）", "https://www.jroitacity.jp/contents/cityspatenku/language/english/index.html"),
      factNov14("設備", "20階に内湯、フィンランドサウナ、アロマスチームサウナ、21階に露天風呂（天然温泉・高濃度炭酸泉）", "https://www.jroitacity.jp/contents/cityspatenku/language/english/index.html"),
      factNov14("水風呂", "ヒーリングスパに15℃のCool Spa（冷水浴）あり", "https://www.jroitacity.jp/contents/cityspatenku/language/english/index.html"),
      factNov14("利用条件", "タトゥー（シール含む）のある方は入館不可、3歳未満は入館不可、タオルは料金に含む", "https://www.jroitacity.jp/contents/cityspatenku/language/english/index.html"),
    ],
  },
  {
    ids: ["st-miyazaki-4074"], name: "松泉宮", officialUrl: "https://seagaia.co.jp/wellness/onsen/",
    features: ["温泉付き", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "月読はオーシャンタワー宿泊者無料（入湯税150円）。外来利用は大人1,100円、コンドミニアム宿泊者は大人1,100円・子供600円", "https://seagaia.co.jp/wellness/onsen/"),
      factNov14("営業時間", "月読 6:00～23:30（最終入場23:00）。外来利用は10:00～16:00。毎週水曜10:00～12:00はメンテナンスでクローズ", "https://seagaia.co.jp/wellness/onsen/"),
      factNov14("設備", "新浴棟「満月」はサウナや泥パックを備える。月読・新月・満月の大浴場と貸切温泉「離れ湯」あり", "https://seagaia.co.jp/wellness/onsen/"),
      factNov14("利用条件", "月読・満月・新月は原則フェニックス・シーガイア・オーシャン・タワー宿泊者専用（月読は外来利用あり）。原則タトゥー・刺青の露出は不可", "https://seagaia.co.jp/wellness/onsen/"),
    ],
  },
  {
    ids: ["st-miyazaki-4097"], name: "美人の湯", officialUrl: "https://bijinnoyu.tokiwa-kai.or.jp/",
    features: ["水風呂あり", "温泉付き", "貸切可"],
    facts: [
      factNov14("料金", "入浴料 大人（中学生以上）550円、小人（3歳～小学生）300円。1日入浴料 大人800円、小人400円", "https://bijinnoyu.tokiwa-kai.or.jp/info/s_bijin/"),
      factNov14("営業時間", "11:00～21:00（最終受付20:30）", "https://bijinnoyu.tokiwa-kai.or.jp/info/s_bijin/"),
      factNov14("設備", "大浴場、露天風呂、歩行浴、泡風呂、ジェットバス、サウナ、水風呂。シャンプー、ボディソープ、ドライヤー常設", "https://bijinnoyu.tokiwa-kai.or.jp/info/s_bijin/"),
      factNov14("水風呂", "設備に水風呂あり", "https://bijinnoyu.tokiwa-kai.or.jp/info/s_bijin/"),
      factNov14("利用条件", "入れ墨（刺青）をワンポイントでも入れている方の入浴は不可", "https://bijinnoyu.tokiwa-kai.or.jp/info/s_bijin/"),
    ],
  },
  {
    ids: ["st-kagoshima-906"], name: "エクセルサウナタイセイ", officialUrl: "https://www.taisei-grp.co.jp/excelsauna/",
    features: [],
    facts: [
      factNov14("設備", "カプセル・サウナ・大浴場・マッサージあり（公式サイト表記）。受付はホテルタイセイアネックス地下1階", "https://www.taisei-grp.co.jp/excelsauna/"),
    ],
  },
  {
    ids: ["st-kagoshima-902"], name: "ホテルニューニシノ", officialUrl: "http://www.new-nishino.co.jp/",
    features: ["ドライサウナ", "スチーム(ミスト)サウナ", "ロウリュあり", "温泉付き", "宿泊可", "サ飯あり"],
    facts: [
      factNov14("料金", "温泉・サウナはホテル宿泊者は無料。レディースデー参加費2,200円／ホテル宿泊者は無料", "https://new-nishino.co.jp/news/events/ladysday/"),
      factNov14("設備", "大浴場、フィンランドサウナ（アロマ水ロウリュ実施）、備長炭蒸気サウナ（低温サウナ）あり。入泉料にタオル、館内着、シャンプー類等を含む", "https://new-nishino.co.jp/news/events/ladysday/"),
      factNov14("利用条件", "温泉・サウナは男性専用。女性は月1回のレディースデーのみ利用可", "https://new-nishino.co.jp/news/events/ladysday/"),
    ],
  },
  {
    ids: ["st-kagoshima-925"], name: "奄美体験交流館", officialUrl: "https://kenkoudotakara.org/", status: "suspended",
    features: ["塩サウナ", "水風呂あり"],
    facts: [
 factNov14("営業状況", "ボイラー室内の機械故障により浴場は臨時休業中。営業再開の目処は立っていない（運営NPO公式サイトの2026年10月21日付お知らせ）", "https://kenkoudotakara.org/"),
      factNov14("料金", "大人1,000円、65歳以上500円、障がい者500円、ゆい会員800円、小中学生300円、未就学児無料", "https://kenkoudotakara.org/list/%e5%85%a5%e6%b5%b4%e6%96%bd%e8%a8%ad/"),
      factNov14("営業時間", "火曜～土曜 15:00～20:00、日曜日 13:00～20:00", "https://kenkoudotakara.org/list/%e5%85%a5%e6%b5%b4%e6%96%bd%e8%a8%ad/"),
      factNov14("定休日", "月曜休館", "https://kenkoudotakara.org/list/%e5%85%a5%e6%b5%b4%e6%96%bd%e8%a8%ad/"),
      factNov14("設備", "大浴場に高温サウナ（80～90℃）、小浴場に塩サウナ（60～70℃）、五右衛門風呂、ジェットバス、水風呂あり", "https://kenkoudotakara.org/list/%e5%85%a5%e6%b5%b4%e6%96%bd%e8%a8%ad/"),
      factNov14("水風呂", "大・小浴場それぞれに水風呂あり", "https://kenkoudotakara.org/list/%e5%85%a5%e6%b5%b4%e6%96%bd%e8%a8%ad/"),
    ],
  },
  {
    ids: ["st-kagoshima-4157"], name: "高尾野温泉センターもみじ", officialUrl: "https://www.pref.kagoshima.jp/suisuinavi/18162.html",
    features: ["水風呂あり", "温泉付き", "貸切可"],
    facts: [
      factNov14("料金", "家族湯 1時間2,000円（一般入浴料は県公式ページに記載なし）", "https://www.pref.kagoshima.jp/suisuinavi/18162.html"),
      factNov14("営業時間", "7時-22時（最終受付21時30分）", "https://www.pref.kagoshima.jp/suisuinavi/18162.html"),
      factNov14("定休日", "毎月第3水曜日（工事を含む臨時休館あり）", "https://www.pref.kagoshima.jp/suisuinavi/18162.html"),
      factNov14("設備", "大浴場（一般浴場、リラックス湯、冷水浴、あがり湯など）、サウナ、露天風呂、家族風呂、身障者浴室などを備える町営温泉", "https://www.pref.kagoshima.jp/suisuinavi/18162.html"),
      factNov14("水風呂", "大浴場に冷水浴あり", "https://www.pref.kagoshima.jp/suisuinavi/18162.html"),
    ],
  },
  {
    ids: ["airbnb-sauna-1304288010826577065"], name: "Airbnbサウナ宿: 箱根町の一軒家", officialUrl: "https://www.airbnb.jp/rooms/1304288010826577065",
    features: ["ロウリュあり", "水風呂あり", "温泉付き", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "基本料金には4名様まで含まれ、5名様以上は1名につき10,000円／泊の追加料金が発生。最大8名様まで宿泊可能", "https://www.airbnb.jp/rooms/1304288010826577065"),
      factNov14("設備", "ロウリュ対応の専用サウナと水風呂、天然温泉（二ノ平温泉）、屋根付きBBQ・焚き火スペースを完備", "https://www.airbnb.jp/rooms/1304288010826577065"),
      factNov14("利用条件", "1日1組限定の一棟完全貸切。22:00〜翌7:00は屋外設備を利用できない", "https://www.airbnb.jp/rooms/1304288010826577065"),
    ],
  },
  {
    ids: ["airbnb-sauna-569348993862700416"], name: "Airbnbサウナ宿: 南都留郡のヴィラ", officialUrl: "https://www.airbnb.jp/rooms/569348993862700416",
    features: ["薪サウナ", "水風呂あり", "外気あり", "貸切可", "宿泊可", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "サウナの利用は別途有料（事前に連絡が必要）。アーリーチェックイン・レイトチェックアウトは1時間1部屋5,000円", "https://www.airbnb.jp/rooms/569348993862700416"),
      factNov14("営業時間", "サウナ専用施設は事前予約制・1枠2時間制で、利用は原則として夜19時30分まで", "https://www.airbnb.jp/rooms/569348993862700416"),
      factNov14("設備", "MOKI製MS30薪ストーブのバレルサウナ（最大120℃、推奨90〜100℃、大人4名用、アロマ15種類）", "https://www.airbnb.jp/rooms/569348993862700416"),
      factNov14("水風呂", "富士山の天然井戸水を使用したかけ流しの約16度の水風呂。冬季12月中旬〜3月中頃は外気浴のみ", "https://www.airbnb.jp/rooms/569348993862700416"),
      factNov14("利用条件", "ルームチャージ制で最大6名様まで宿泊可能。各部屋にサウナはなく、敷地内のサウナ専用施設を貸切で利用", "https://www.airbnb.jp/rooms/569348993862700416"),
    ],
  },
  {
    ids: ["airbnb-sauna-1029464563387789494"], name: "Airbnbサウナ宿: 秩父郡・長瀞町の城", officialUrl: "https://www.airbnb.jp/rooms/1029464563387789494",
    features: ["水風呂あり", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "バレルサウナ（無料）、ガス式BBQコンロ（無料）", "https://www.airbnb.jp/rooms/1029464563387789494"),
      factNov14("設備", "バレルサウナ（水風呂設備あり）、大型リビング80帖、ベッド合計9台、敷地面積900㎡のプライベート空間", "https://www.airbnb.jp/rooms/1029464563387789494"),
      factNov14("利用条件", "1日1組限定の完全プライベート空間。ペット不可。9名様利用時はベッド1台が簡易ベッドになる", "https://www.airbnb.jp/rooms/1029464563387789494"),
    ],
  },
  {
    ids: ["airbnb-sauna-1208172055106658475"], name: "Airbnbサウナ宿: 国頭郡・恩納村の一軒家", officialUrl: "https://www.airbnb.jp/rooms/1208172055106658475",
    features: ["個室", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "サウナは施設付帯の有料設備で3,000円／お一人につき。朝食は事前予約制で1食1,500円", "https://www.airbnb.jp/rooms/1208172055106658475"),
      factNov14("営業時間", "サウナ利用時間は午後4時〜午後8時受付、指定の開始時間より2時間利用可能。利用日の1日前までにリクエストが必要", "https://www.airbnb.jp/rooms/1208172055106658475"),
      factNov14("利用条件", "ゲスト3人・寝室1・ベッド3の1棟貸し。サウナ利用時は水着が必要", "https://www.airbnb.jp/rooms/1208172055106658475"),
      factNov14("設備", "専用サウナあり（ホスト手作りのプライベートサウナ）", "https://www.airbnb.jp/rooms/1208172055106658475"),
    ],
  },
  {
    ids: ["airbnb-sauna-623570536658879730"], name: "Airbnbサウナ宿: 今治市のヴィラ", officialUrl: "https://www.airbnb.jp/rooms/623570536658879730",
    features: ["貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "バレルサウナは有料オプションで3時間貸切1人1,000円（宿泊者のみ利用可能、着衣必須）", "https://www.airbnb.jp/rooms/623570536658879730"),
      factNov14("設備", "庭に設置した完全貸切のバレルサウナと、サウナ横のシャワー（冷温水）。1日1組限定で最大7名様が宿泊可能", "https://www.airbnb.jp/rooms/623570536658879730"),
      factNov14("利用条件", "サウナは宿泊者のみ利用可能。庭・サウナ・ビーチでは裸にならず水着を着用すること", "https://www.airbnb.jp/rooms/623570536658879730"),
    ],
  },
  {
    ids: ["airbnb-sauna-1109974535423776664"], name: "Airbnbサウナ宿: 小諸市のコテージ", officialUrl: "https://www.airbnb.jp/rooms/1109974535423776664",
    features: ["貸切可", "宿泊可"],
    facts: [
      factNov14("設備", "電気サウナのサウナルームあり。ウッドデッキに外風呂（給湯可能、水着着用）と人数分のインフィニティチェア", "https://www.airbnb.jp/rooms/1109974535423776664"),
      factNov14("営業時間", "サウナとウッドデッキは21時から翌日7時までサイレントタイムのため利用不可", "https://www.airbnb.jp/rooms/1109974535423776664"),
      factNov14("利用条件", "最大5名、チェックイン15時〜19時・チェックアウト〜10時。男性のみの利用不可、1家族または1カップルのみ", "https://www.airbnb.jp/rooms/1109974535423776664"),
      factNov14("料金", "宿泊税は1名様1泊200円（長野県条例、事前チェックイン時のカードで自動決済）", "https://www.airbnb.jp/rooms/1109974535423776664"),
    ],
  },
  {
    ids: ["airbnb-sauna-673484250918254959"], name: "Airbnbサウナ宿: 美作の古民家", officialUrl: "https://www.airbnb.jp/rooms/673484250918254959",
    features: ["薪サウナ", "水風呂あり", "外気あり", "貸切可", "宿泊可"],
    facts: [
      factNov14("設備", "手作りの卵形サウナ（卵サウナ）に薪ストーブを備え、焚き付け材・薪・サウナマットを用意", "https://www.airbnb.jp/rooms/673484250918254959"),
      factNov14("水風呂", "屋外の冷水浴槽と、五右衛門風呂を加工した露天水風呂、サウナチェアあり", "https://www.airbnb.jp/rooms/673484250918254959"),
      factNov14("利用条件", "一棟貸切でゲスト8人・寝室2・ベッド8。サウナ利用時は水着着用が必要で、水着は持参する", "https://www.airbnb.jp/rooms/673484250918254959"),
    ],
  },
  {
    ids: ["airbnb-sauna-967835026303647145"], name: "Airbnbサウナ宿: いすみ市の一軒家", officialUrl: "https://www.airbnb.jp/rooms/967835026303647145",
    features: ["ロウリュあり", "水風呂あり", "貸切可", "宿泊可"],
    facts: [
      factNov14("料金", "ロウリュウサウナは事前申込制で利用代20,000円の追加料金。サウナマット・ハット・ポンチョの貸出あり", "https://www.airbnb.jp/rooms/967835026303647145"),
      factNov14("設備", "サウナ、プール、露天風呂あり。露天風呂は夏場は氷で冷たい水風呂としても利用できる", "https://www.airbnb.jp/rooms/967835026303647145"),
      factNov14("営業時間", "屋外施設は20:00までの利用で、20:00〜翌8:00は利用不可（騒音回避のため）", "https://www.airbnb.jp/rooms/967835026303647145"),
      factNov14("利用条件", "10名様で貸切の一棟貸切。サウナ利用時は水着着用が必要", "https://www.airbnb.jp/rooms/967835026303647145"),
    ],
  },
  {
    ids: ["airbnb-sauna-1177917028374984284"], name: "Airbnbサウナ宿: 南都留郡・山中湖村のログハウス", officialUrl: "https://www.airbnb.jp/rooms/1177917028374984284",
    features: ["外気あり", "貸切可", "宿泊可"],
    facts: [
      factNov14("設備", "木々に囲まれたバレルサウナあり。延床115㎡・3LDKのログハウスで、山中湖へ徒歩11分", "https://www.airbnb.jp/rooms/1177917028374984284"),
      factNov14("料金", "BBQは有料オプション4,500円（道具付き、食材のみ準備）。犬は1頭ごとに2,500円", "https://www.airbnb.jp/rooms/1177917028374984284"),
      factNov14("利用条件", "一日一組限定の宿。バレルサウナの後は外の休憩スペースで森林浴ができる", "https://www.airbnb.jp/rooms/1177917028374984284"),
    ],
  },
  {
    ids: ["airbnb-sauna-1364939466283889766"], name: "Airbnbサウナ宿: 高山市の一軒家", officialUrl: "https://www.airbnb.jp/rooms/1364939466283889766",
    features: ["貸切可", "宿泊可"],
    facts: [
      factNov14("設備", "貸切のバレルサウナと陶器製露天風呂（光明石を使用した人工温泉）あり。ロウリュは利用不可", "https://www.airbnb.jp/rooms/1364939466283889766"),
      factNov14("利用条件", "定員7名、寝室3室、1日1組限定の117㎡一棟貸し。敷地内無料駐車場1台、フェイスタオル・バスタオル等の備品あり", "https://www.airbnb.jp/rooms/1364939466283889766"),
    ],
  },
  {
    ids: ["airbnb-sauna-49556931"], name: "Airbnbサウナ宿: 上水内郡信濃町のタイニーハウス", officialUrl: "https://www.airbnb.jp/rooms/49556931",
    features: ["薪サウナ", "水風呂あり", "宿泊可"],
    facts: [
      factNov14("設備", "野尻湖を見下ろす薪ストーブのサウナ（薪焚きサウナ）と専用屋外ジャグジー、絶景の水風呂あり", "https://www.airbnb.jp/rooms/49556931"),
      factNov14("利用条件", "ゲスト6人、寝室1室、ベッド5（クイーン1台とシングル布団4枚）。薪ストーブの火はゲスト自身で調整、駐車場は道路沿いに3台ほど", "https://www.airbnb.jp/rooms/49556931"),
    ],
  },
  {
    ids: ["airbnb-sauna-1199849915634981495"], name: "Airbnbサウナ宿: 与謝郡・伊根町の一軒家", officialUrl: "https://www.airbnb.jp/rooms/1199849915634981495",
    features: ["スチーム(ミスト)サウナ", "貸切可", "宿泊可"],
    facts: [
      factNov14("設備", "1階お風呂にミストサウナ完備。アメニティ表記にサウナ、露天風呂（温泉以外）・ジャグジーあり", "https://www.airbnb.jp/rooms/1199849915634981495"),
      factNov14("利用条件", "ゲスト8人、寝室2室、ベッド4、66㎡、1日1組の一棟貸し（舟屋）。車椅子利用の方は1級障害者手帳提示で宿泊料金の50%を返金と明記", "https://www.airbnb.jp/rooms/1199849915634981495"),
    ],
  },
  {
    ids: ["si-1995"], name: "スパ&ホテル 舞浜ユーラシア", officialUrl: "https://my-spa.jp/spa/",
    features: ["温泉付き", "男女共用", "宿泊可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "SPA入館料 大人（中学生以上）平日2,100円・土日祝2,600円、小人平日1,000円・土日祝1,300円（バスタオル・フェイスタオル各1枚付き）。SPA+は別途950円、朝風呂 大人平日1,200円・土日祝1,500円", "https://my-spa.jp/spa/price/?wovn=en"),
      factNov14("営業時間", "本館4階SPA（大浴場・サウナ）11:00～翌1:00、朝風呂5:00～9:00（最終受付8:00）、清掃のため1:00～5:00は4階全エリア閉鎖。本館5階SPA+は11:00～翌8:00", "https://my-spa.jp/spa/price/?wovn=en"),
      factNov14("定休日", "年中無休。法定メンテナンスのため年に2回ほど営業時間が異なる場合あり", "https://my-spa.jp/spa/price/?wovn=en"),
      factNov14("設備", "地下1,700mの源泉かけ流し天然温泉など13種類の風呂と本格サウナ8種類の男女別SPA。SPA+には約70℃・70人収容のグランビューサウナ、岩盤浴、約5℃のICE DOMEなど", "https://my-spa.jp/spa/spaplus/"),
      factNov14("利用条件", "日帰り入浴可。宿泊者は本館4階SPAを無料で利用可。3歳以下は無料だが4階SPA・5階SPA+は利用不可。SPA+の岩盤浴・サウナは中学生未満利用不可", "https://my-spa.jp/spa/price/?wovn=en"),
    ],
  },
  {
    ids: ["si-1382"], name: "天然温泉コミュニティリゾート リライム", officialUrl: "https://kaihotsunoyu.jp/",
    features: ["熱波師あり", "水風呂あり", "温泉付き", "男女共用", "宿泊可", "サ飯あり", "タオルレンタルあり"],
    facts: [
      factNov14("料金", "フリータイム 大人（中学生以上）平日1,380円～1,480円・土日祝1,580円～1,680円（会員・一般で異なる、タオル・バスタオル付き）。90分コース 大人平日830円～880円・土日祝930円～980円。深夜料金は別途大人1,800円～2,000円", "https://kaihotsunoyu.jp/wp-content/themes/teaser/images/ryokin.pdf"),
      factNov14("営業時間", "24時間営業。天然温泉は6:00～25:00（深夜1:00～6:00は入浴不可）。サウナガーデンMoiは平日13:00～23:00・土日祝10:00～23:00", "https://kaihotsunoyu.jp/facility/"),
      factNov14("設備", "地下1,300mから湧く天然温泉「夢創湯」（アルカリ性単純温泉）と高濃度炭酸泉。男女共用のサウナガーデンMoiに3つの異なるサウナ、約40人収容のスタジアムサウナで熱波師によるアウフグースを実施", "https://kaihotsunoyu.jp/facility/"),
      factNov14("水風呂", "サウナガーデンMoiに潜水OKの巨大水風呂あり。2つの深さを持つ水風呂で潜水も可能", "https://kaihotsunoyu.jp/facility/"),
      factNov14("利用条件", "入墨・タトゥのある方は入館不可（当館専用カバーシールで完全に覆える場合に限り上限2枚で可）。中学生未満のみでの利用は不可。ホテル併設で宿泊可", "https://kaihotsunoyu.jp/"),
    ],
  },
  {
    ids: ["si-2388"], name: "スパリゾート オアシス御殿場", officialUrl: "http://www.oasisgotemba.com/",
    features: ["水風呂あり", "外気あり", "サ飯あり"],
    facts: [
      factNov14("設備", "公式サイトのタイトルに「サウナ・水風呂・外気浴」と明記。バラエティーに富んだ風呂があり、食事は全て館内にて調理される", "http://www.oasisgotemba.com/"),
    ],
  },
 {
 ids: ["si-1377"], name: "越のゆ 福井店", officialUrl: "http://www.yu-iwashita.jp/fukui/", status: "closed",
 features: [],
 facts: [
 factNov14("営業状況", "2026年6月30日をもって閉店（公式サイトの閉店のお知らせ。回数券は越のゆ鯖江店とONSEN&SAUNA RESORT かいほつの湯で引き続き利用可能と案内）", "http://www.yu-iwashita.jp/fukui/"),
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
