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
