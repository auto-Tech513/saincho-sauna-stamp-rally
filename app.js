const STORAGE_KEY = "saincho-state-v1";
const LEGACY_STORAGE_KEY = "yuincho-state-v1";
const SETTINGS_KEY = "saincho-settings-v1";
const LEGACY_SETTINGS_KEY = "yuincho-settings-v1";
const INSTALL_DISMISSED_KEY = "saincho-install-dismissed-v1";
const SHARED_FACILITIES_ENDPOINT = "./api/facilities";
const REVIEWS_ENDPOINT = "./api/reviews";
const CONTACT_ENDPOINT = "./api/contact";
const PROFILE_KEY = "saincho-profile-v1";
const RANKING_ENDPOINT = "./api/ranking";
const RANKING_REFRESH_MS = 10000;
const AMAZON_ASSOCIATE_TAG = "saunastampral-22";
const RAKUTEN_AFFILIATE_URL = "https://hb.afl.rakuten.co.jp/hgc/4145461f.ff7bbb59.41454620.00c2fd25/";
const RAKUTEN_AFFILIATE_UT = "eyJwYWdlIjoidXJsIiwidHlwZSI6InRleHQiLCJjb2wiOjF9";
const APP_BUILD_ID = "20260708-heat-lodge-v2";
const DATA_IMPORT_TIMEOUT_MS = 20000;
const DATA_MODULE_PATH = "./data.js";
const CONTENT_MODULE_PATH = "./content.js";
const GA_MEASUREMENT_ID = "G-FHGXDGF0M7";
const MOBILE_MENU_QUERY = window.matchMedia("(max-width: 899px)");
const MENU_EDGE_WIDTH = 46;
const MENU_SWIPE_DISTANCE = 72;
const MENU_SWIPE_MAX_VERTICAL = 64;
const SEARCH_RENDER_DELAY_MS = 120;
const APP_URL = "https://saincho-sauna-stamp-rally.pages.dev/";
const APP_SHARE_TEXT = "行ったサウナが、ただの記録じゃなく集めた証になる。サ印帳で全国約5000候補から押印、県マスター、称号、サ飯、口コミまで楽しめます。";
const ALLOWED_IMAGE_HOSTS = new Set([location.hostname, new URL(APP_URL).hostname]);
const AIRBNB_SAUNA_STAY_URL = "https://www.airbnb.jp/japan/stays/sauna";
const SAUNA_STAY_LINKS = [
  {
    title: "Airbnb サウナ付き宿の公式検索",
    label: "公式検索",
    prefecture: "全国",
    area: "Airbnb",
    url: AIRBNB_SAUNA_STAY_URL,
    note: "サウナ付き宿をAirbnb上で直接絞り込み、写真・料金・空室を確認できます。",
  },
  {
    title: "OLL GUESTHOUSE & SAUNA",
    label: "提供リンク",
    prefecture: "富山県",
    area: "富山市",
    url: "https://www.airbnb.jp/rooms/1288031974621802745?source_impression_id=p3_1783226684_P3znQkrzRJ-VlLlJ",
    note: "一棟貸しのサウナ付き宿として公開されている掲載ページです。料金・空室・設備はAirbnbで確認してください。",
  },
  {
    title: "囲炉裏とサウナの古民家貸切",
    label: "提供リンク",
    prefecture: "富山県",
    area: "魚津市",
    url: "https://www.airbnb.jp/rooms/1128015069214234827?source_impression_id=p3_1783226763_P3KMiuAQYMEtiUZR",
    note: "古民家貸切のサウナ付き宿として公開されている掲載ページです。料金・空室・設備はAirbnbで確認してください。",
  },
];
const BUSINESS_PLANS = [
  {
    name: "県別・サ飯バナー",
    price: "税込29,800円 / 3ヶ月",
    target: "飲食店・地域密着施設",
    detail: "サ飯ページ、県別枠、検索下部に掲載。近くで探しているユーザーに自然に届く導線です。",
    badge: "8枠限定",
    paymentUrl: "",
  },
  {
    name: "トップ・検索上部バナー",
    price: "税込59,800円 / 3ヶ月",
    target: "サウナ施設・温浴施設",
    detail: "トップ画面や検索直後の視認位置に掲出。初回来訪者と再訪ユーザーの両方に届きます。",
    badge: "4枠限定",
    paymentUrl: "",
  },
  {
    name: "プレミアム個別ページ",
    price: "税込98,000円 / 3ヶ月",
    target: "サウナ施設・旅館・民泊",
    detail: "専用写真、おすすめポイント、予約ボタン、公式リンク、クーポン案内、口コミ導線を強化します。",
    badge: "更新可",
    paymentUrl: "",
  },
  {
    name: "サウナ合宿先掲載",
    price: "税込49,800円 / 3ヶ月",
    target: "サウナ付き宿・民泊",
    detail: "サウナ合宿ページへ掲載。宿泊前提のユーザーに料金・空室確認ページまで案内します。",
    badge: "宿向け",
    paymentUrl: "",
  },
  {
    name: "サ印特典・クーポン導線",
    price: "税込19,800円 / 3ヶ月",
    target: "リピートを作りたい店舗",
    detail: "押印後やお気に入り登録後に、再訪理由になる特典案内を表示します。割引内容は店舗側で設定します。",
    badge: "追加施策",
    paymentUrl: "",
  },
  {
    name: "スポンサー次の一湯",
    price: "税込39,800円 / 3ヶ月",
    target: "新規来店を増やしたい施設",
    detail: "検索条件に合うユーザーへ、次の候補カードとして自然に掲出。押印、行きたい、経路まで短くつなぎます。",
    badge: "発見枠",
    paymentUrl: "",
  },
  {
    name: "サ飯セット送客",
    price: "税込34,800円 / 3ヶ月",
    target: "飲食店・温浴施設の共同施策",
    detail: "施設詳細の周辺サ飯導線や県別サ飯ページで、サウナ後の来店理由を作ります。限定メニューや特典と相性が良い枠です。",
    badge: "地域回遊",
    paymentUrl: "",
  },
  {
    name: "月次ミニレポート",
    price: "税込12,800円 / 月",
    target: "掲載効果を見たい事業者",
    detail: "表示位置、クリック導線、問い合わせ内容、改善提案を月1回まとめます。広告更新判断に使える軽量レポートです。",
    badge: "改善支援",
    paymentUrl: "",
  },
  {
    name: "撮影・編集オプション",
    price: "別途見積",
    target: "写真素材がない事業者",
    detail: "カメラマン代、往復移動費、撮り直し、編集代は別途。既存写真の提出だけでも掲載できます。",
    badge: "任意",
    paymentUrl: "",
  },
];
const CONTACT_TYPES = [
  "広告掲載・タイアップ",
  "プレミアム個別ページ",
  "サウナ合宿先掲載",
  "サ飯店舗掲載",
  "サ印特典・クーポン",
  "取材・撮影相談",
  "内容修正・権利連絡",
  "その他",
];
const BUSINESS_VALUE_POINTS = [
  {
    label: "来店直前",
    title: "検索、押印、経路の直前に出せる",
    text: "サウナに行く気持ちが高い瞬間へ出せるので、単なる認知広告より行動に近い導線になります。",
  },
  {
    label: "再訪理由",
    title: "サ印特典でまた行く理由を作る",
    text: "押印後の小さな報酬や限定案内は、割引だけに頼らず再訪のきっかけを作れます。",
  },
  {
    label: "地域回遊",
    title: "サウナ、サ飯、宿泊をまとめる",
    text: "サ飯店舗やサウナ付き宿と組み合わせることで、単発来店ではなく半日から一泊の回遊に変えます。",
  },
  {
    label: "正直な希少性",
    title: "枠数と期間を絞って効果を見やすく",
    text: "無制限掲載ではなく3ヶ月更新にすることで、掲載枠の価値と改善サイクルを保ちます。",
  },
];
const PROMOTION_COPY_OPTIONS = [
  {
    label: "収集欲",
    text: "行ったサウナが、ただの記録じゃなく“集めた証”になる。サ印帳で押印、県マスター、称号、サ飯まで。次の一湯が少し楽しみになる。",
  },
  {
    label: "検索意図",
    text: "サウナ検索、サ活記録、サウナ版御朱印をひとつに。全国約5000候補から探して、行った施設をサ印として残せます。",
  },
  {
    label: "仲間共有",
    text: "どこのサウナ行った？を、サ印で見せられるように。お気に入り、口コミ、ランキングまであるサウナ巡り用Webアプリです。",
  },
];
const QUICK_NOTE_TEMPLATES = [
  {
    label: "初回",
    text: "初訪問。よかった点: / 水風呂: / 外気浴: / 次回試したいこと: ",
  },
  {
    label: "3セット",
    text: "1セット目: 軽め / 2セット目: 標準 / 3セット目: 仕上げ。体調: / ととのい度: ",
  },
  {
    label: "熱波",
    text: "熱波・ロウリュあり。香り: / 熱さ: / 休憩の気持ちよさ: / 次回の狙い: ",
  },
  {
    label: "遠征",
    text: "遠征サ活。移動: / サ飯: / 宿: / ここだけの魅力: / 誰にすすめたいか: ",
  },
];
const IS_LOCAL_HOST = ["127.0.0.1", "localhost", "::1"].includes(location.hostname);
const IS_STATIC_LOCAL_PREVIEW = IS_LOCAL_HOST && !["8787", "8788"].includes(location.port);
const SEARCH_SEPARATOR_PATTERN = /[\s\u3000・･＆&.．,\u3001、/／\\+＋=＝_*＊'’"“”`´\-‐‑‒–—―ーｰ－−﹘﹣─━〜～~〰（）()【】\[\]「」『』：:]/g;
const SEARCH_WORD_SEPARATOR_PATTERN = /[\s\u3000・･＆&.．,\u3001、/／\\+＋=＝_*＊'’"“”`´（）()【】\[\]「」『』：:]+/g;
const KANA_LOOSE_MAP = {
  ァ: "ア", ィ: "イ", ゥ: "ウ", ェ: "エ", ォ: "オ",
  ャ: "ヤ", ュ: "ユ", ョ: "ヨ", ッ: "ツ", ヮ: "ワ",
  ヵ: "カ", ヶ: "ケ", ヰ: "イ", ヱ: "エ", ヲ: "オ", ヴ: "ブ",
};
const SEARCH_READING_REPLACEMENTS = [
  ["湯", "ユ"],
  ["温泉", "オンセン"],
  ["銭湯", "セントウ"],
  ["風呂", "フロ"],
  ["水風呂", "ミズブロ"],
  ["健康", "ケンコウ"],
  ["宝", "タカラ"],
  ["栄", "サカエ"],
  ["楽", "ラク"],
  ["竜泉寺", "リュウセンジ"],
  ["水春", "スイシュン"],
  ["富士", "フジ"],
  ["森", "モリ"],
  ["空", "ソラ"],
  ["海", "ウミ"],
  ["花", "ハナ"],
  ["城", "シロ"],
  ["亀", "カメ"],
  ["荘", "ソウ"],
  ["館", "カン"],
  ["駅前", "エキマエ"],
  ["湯処", "ユドコロ"],
  ["湯どころ", "ユドコロ"],
  ["湯所", "ユドコロ"],
  ["湯元", "ユモト"],
  ["湯屋", "ユヤ"],
  ["湯楽", "ユラク"],
  ["湯庵", "ユアン"],
  ["湯音", "ユネ"],
  ["楽の湯", "ラクノユ"],
  ["宝乃湯", "タカラノユ"],
  ["満天", "マンテン"],
  ["万葉", "マンヨウ"],
  ["極楽湯", "ゴクラクユ"],
  ["喜多の湯", "キタノユ"],
  ["平和温泉", "ヘイワオンセン"],
  ["＆", "アンド"],
  ["&", "アンド"],
  ["×", "エックス"],
  ["✕", "エックス"],
  ["✖", "エックス"],
];
const ROMAJI_DIGRAPHS = {
  キャ: "kya", キュ: "kyu", キョ: "kyo", シャ: "sha", シュ: "shu", ショ: "sho",
  チャ: "cha", チュ: "chu", チョ: "cho", ニャ: "nya", ニュ: "nyu", ニョ: "nyo",
  ヒャ: "hya", ヒュ: "hyu", ヒョ: "hyo", ミャ: "mya", ミュ: "myu", ミョ: "myo",
  リャ: "rya", リュ: "ryu", リョ: "ryo", ギャ: "gya", ギュ: "gyu", ギョ: "gyo",
  ジャ: "ja", ジュ: "ju", ジョ: "jo", ビャ: "bya", ビュ: "byu", ビョ: "byo",
  ピャ: "pya", ピュ: "pyu", ピョ: "pyo", ファ: "fa", フィ: "fi", フェ: "fe", フォ: "fo",
  ウィ: "wi", ウェ: "we", ウォ: "wo", ヴァ: "va", ヴィ: "vi", ヴェ: "ve", ヴォ: "vo",
  ティ: "ti", ディ: "di", トゥ: "tu", ドゥ: "du", シェ: "she", ジェ: "je", チェ: "che",
};
const ROMAJI_CHARS = {
  ア: "a", イ: "i", ウ: "u", エ: "e", オ: "o", カ: "ka", キ: "ki", ク: "ku", ケ: "ke", コ: "ko",
  サ: "sa", シ: "shi", ス: "su", セ: "se", ソ: "so", タ: "ta", チ: "chi", ツ: "tsu", テ: "te", ト: "to",
  ナ: "na", ニ: "ni", ヌ: "nu", ネ: "ne", ノ: "no", ハ: "ha", ヒ: "hi", フ: "fu", ヘ: "he", ホ: "ho",
  マ: "ma", ミ: "mi", ム: "mu", メ: "me", モ: "mo", ヤ: "ya", ユ: "yu", ヨ: "yo",
  ラ: "ra", リ: "ri", ル: "ru", レ: "re", ロ: "ro", ワ: "wa", ン: "n",
  ガ: "ga", ギ: "gi", グ: "gu", ゲ: "ge", ゴ: "go", ザ: "za", ジ: "ji", ズ: "zu", ゼ: "ze", ゾ: "zo",
  ダ: "da", ヂ: "ji", ヅ: "zu", デ: "de", ド: "do", バ: "ba", ビ: "bi", ブ: "bu", ベ: "be", ボ: "bo",
  パ: "pa", ピ: "pi", プ: "pu", ペ: "pe", ポ: "po",
};
const VIEW_META = {
  Explore: {
    path: "/",
    title: "サ印帳 | 全国サウナスタンプラリー・サ活記録アプリ",
    description: "サ印帳は、サウナを検索して行った施設をサ印として記録できる無料のサウナスタンプラリー・サ活記録アプリです。サウナ版御朱印、全国約5000候補、施設詳細、サ飯、称号、ランキングに対応。",
  },
  Facility: {
    path: "/facility/",
    title: "施設詳細 | サ印帳",
    description: "サ印帳の施設詳細ページです。施設写真、住所、3行情報、経路、周辺サ飯検索、お気に入り、口コミ、近隣宿、Gear導線をまとめて確認できます。",
  },
  Passport: {
    path: "/passport/",
    title: "サ印帳のサ印コレクション | 県別マスターと称号",
    description: "サ印帳で押印したサウナを全県・県別に切り替えて確認。県別マスター認定、称号、達成度でサ活の継続を楽しめます。",
  },
  Stats: {
    path: "/ranking/",
    title: "サ印ランキング TOP10 | サ印帳",
    description: "サ印帳のサ印数ランキング、訪問県、称号、行きたい候補を確認。サウナ仲間と記録を共有できます。",
  },
  Gear: {
    path: "/gear/",
    title: "サウナグッズ30選 | サ印帳 Gear",
    description: "サウナハット、サウナマット、水分補給、タオル、遠征グッズなど、初心者が失敗しにくいサウナGearをAmazon・楽天で比較できます。",
  },
  Stay: {
    path: "/stay/",
    title: "サウナ合宿先を探す | サ印帳",
    description: "サウナ付き宿をAirbnbなどの掲載ページで探すサ印帳の遠征ページです。施設詳細では近くの宿、遠征計画ではサウナ付き宿を分けて探せます。",
  },
  Contact: {
    path: "/contact/",
    title: "掲載・お問い合わせ | サ印帳",
    description: "サ印帳への広告掲載、プレミアム個別ページ、サウナ合宿先掲載、サ飯店舗掲載、内容修正や権利連絡はこちらからお問い合わせください。",
  },
  Sameshi: {
    path: "/sameshi/",
    title: "県別サ飯ガイド | サ印帳",
    description: "サウナ後に食べたい人気サ飯を県別に短く確認。全国の追加人気枠、公式・参照リンク、写真付きカードから店舗やメニューへすぐ移動できます。",
  },
  Guide: {
    path: "/guide/",
    title: "サウナ入門30記事 | 入り方・水風呂・持ち物・マナー",
    description: "初めてのサウナでも迷わない入り方、水風呂、休憩、水分補給、ロウリュ、サウナグッズ、マナーを30記事とFAQで確認できます。",
  },
  Add: {
    path: "/add/",
    title: "候補にないサウナを追加 | サ印帳",
    description: "サ印帳に候補がないサウナを自分で登録し、特徴、メモ、押印候補として管理できます。",
  },
};

let PREFECTURES = [];
let SEED_FACILITIES = [];
let GEAR_PRODUCTS = [];
let GUIDE_FAQS = [];
let SAUNA_ARTICLES = [];
let SAUNA_REFERENCES = [];
let SAMESHI_SPOTS = [];
let PRODUCT_RECOMMENDATIONS = [];

const TITLE_MILESTONES = [
  { count: 0, title: "湯けむり準備中" },
  { count: 1, title: "はじめの一湯" },
  { count: 5, title: "新米サウナー" },
  { count: 20, title: "初級サウナー" },
  { count: 50, title: "中級サウナー" },
  { count: 100, title: "上級サウナー" },
  { count: 250, title: "玄人サウナー" },
  { count: 400, title: "プロサウナー" },
  { count: 600, title: "名人サウナー" },
  { count: 800, title: "達人サウナー" },
  { count: 1000, title: "永世サウナー" },
  { count: 2000, title: "神人サウナー" },
];

const SEARCH_SYNONYM_GROUPS = [
  ["saunachelin", "サウナシュラン", "さうなしゅらん", "サウナシェラン", "サウナチェリン"],
  ["sauna", "サウナ", "さうな"],
  ["monkey", "モンキー", "もんきー"],
  ["wellbe", "ウェルビー", "うぇるびー"],
  ["lab", "ラボ", "らぼ"],
  ["hotel", "ホテル", "ほてる"],
  ["capsule", "カプセル", "かぷせる"],
  ["garden", "ガーデン", "がーでん"],
  ["resort", "リゾート", "りぞーと"],
  ["center", "センター", "せんたー"],
  ["cafe", "カフェ", "かふぇ"],
  ["spa", "スパ", "すぱ"],
  ["ofuro", "おふろ", "オフロ"],
  ["onsen", "温泉", "おんせん", "オンセン"],
  ["loyly", "ロウリュ", "ロウリュウ", "ろうりゅ", "セルフロウリュ"],
  ["private", "プライベート", "個室", "貸切"],
  ["yutopia", "湯とぴあ", "湯トピア", "ユートピア", "ゆーとぴあ", "ゆうとぴあ"],
  ["yuraku", "湯楽", "ゆらく", "ユラク"],
  ["yuyu", "ゆーゆー", "ゆうゆう", "ユーユー"],
  ["honoka", "ほのか", "ホノカ"],
  ["dormy", "ドーミー", "どーみー"],
  ["inn", "イン", "いん"],
  ["express", "エクスプレス", "えくすぷれす"],
  ["cabin", "キャビン", "きゃびん"],
  ["new", "ニュー", "にゅー"],
  ["king", "キング", "きんぐ"],
  ["queen", "クイーン", "くいーん"],
  ["grand", "グランド", "ぐらんど"],
  ["villa", "ヴィラ", "ビラ", "びら"],
  ["wellness", "ウェルネス", "うぇるねす"],
  ["and", "アンド", "あんど", "&", "＆"],
];
const SEARCH_CONNECTOR_TERMS = ["and", "アンド", "あんど", "&", "＆"];

const STAMP_STYLES = {
  wood: { kanji: "薪", color: "#B93A2B", bg: "#F6F3EC" },
  water: { kanji: "冷", color: "#B93A2B", bg: "#F6F3EC" },
  urban: { kanji: "街", color: "#B93A2B", bg: "#F6F3EC" },
  onsen: { kanji: "湯", color: "#B93A2B", bg: "#F6F3EC" },
  award: { kanji: "熱", color: "#B93A2B", bg: "#F6F3EC" },
  private: { kanji: "宿", color: "#B93A2B", bg: "#F6F3EC" },
  custom: { kanji: "私", color: "#B93A2B", bg: "#F6F3EC" },
};

const FEATURE_GROUPS = [
  {
    label: "サウナ室",
    options: ["ドライサウナ", "遠赤外線サウナ", "スチーム(ミスト)サウナ", "塩サウナ", "薪サウナ", "テントサウナ", "バレルサウナ"],
  },
  {
    label: "温度体験",
    options: ["セルフロウリュ", "アロマロウリュ", "熱波師あり", "水風呂あり", "外気あり", "外気なし"],
  },
  {
    label: "利用条件",
    options: ["温泉付き", "個室", "貸切可", "水着必須", "タオルレンタルあり", "タオルレンタルなし", "サウナハット禁止"],
  },
  {
    label: "滞在",
    options: ["サ飯あり", "サ飯なし", "サウナドリンク飲み放題", "宿泊可", "男女共用"],
  },
];

const FEATURE_OPTIONS = FEATURE_GROUPS.flatMap((group) => group.options);
const FEATURE_NORMALIZE_MAP = new Map(FEATURE_OPTIONS.map((feature) => [normalizeText(feature), feature]));
const FEATURE_ALIASES = {
  "スチーム(ミスト)サウナ": ["スチームサウナ", "ミストサウナ", "蒸気サウナ"],
  "外気あり": ["外気浴あり", "外気浴", "外気"],
  "外気なし": ["外気浴なし"],
  "水風呂あり": ["水風呂", "天然水風呂", "滝つぼ水風呂", "冷水", "冷水浴"],
  "熱波師あり": ["熱波", "アウフグース"],
  "アロマロウリュ": ["アロマロウリュウ"],
  "セルフロウリュ": ["セルフロウリュウ"],
  "温泉付き": ["温泉", "天然温泉", "源泉"],
  "個室": ["個室サウナ", "完全個室", "プライベートサウナ"],
  "サ飯あり": ["サ飯", "食事", "レストラン", "食堂"],
};
Object.entries(FEATURE_ALIASES).forEach(([feature, aliases]) => {
  aliases.forEach((alias) => FEATURE_NORMALIZE_MAP.set(normalizeText(alias), feature));
});
const FEATURE_CONFLICTS = new Map([
  ["外気あり", "外気なし"],
  ["外気なし", "外気あり"],
  ["サ飯あり", "サ飯なし"],
  ["サ飯なし", "サ飯あり"],
  ["タオルレンタルあり", "タオルレンタルなし"],
  ["タオルレンタルなし", "タオルレンタルあり"],
]);

const TRAIT_FEATURES = {
  wood: ["薪サウナ"],
  water: ["水風呂あり"],
  onsen: ["温泉付き"],
  private: ["宿泊可", "貸切可", "個室"],
};

const NON_DISPLAY_TAGS = new Set([
  "SaunaTime掲載",
  "サウナイキタイ掲載",
  "県別スターター",
  "県別30件補強",
  "県別50件補強",
  "ユーザー指定追加",
  "みんなの追加",
  "指定リスト",
  "地域照合",
  "指定リスト/地域照合",
  "設備未確認",
  "営業要確認",
  "要確認",
  "注目",
  "名店",
  "自然",
  "街サウナ",
  "温浴",
]);

const AROMAS = ["檜", "白樺", "薄荷", "ほうじ茶", "ヴィヒタ", "柚子", "松葉"];
const QUEST_COPY = [
  "未押印から発見",
  "県マスターを進める",
  "行きたいを育てる",
  "サ飯まで想像する",
  "次の遠征を温める",
];

const FACILITY_STATUS = {
  planned: { badge: "開業予定", action: "開業待ち" },
  verify: { badge: "要確認", action: "要確認" },
};

let state = loadState();
let settings = loadSettings();
let profile = loadProfile();
let selectedPrefecture = "全国";
let selectedGearCategory = "すべて";
let selectedArticleCategory = "すべて";
let selectedSameshiPrefecture = "東京都";
let activeFilter = "all";
let activeView = "Explore";
let activeFacilityId = "";
let searchTerm = "";
let searchNeedles = [];
let selectedFeatureFilters = new Set();
let sharedFacilities = [];
let sharedFacilitiesConfigured = false;
let leaderboardEntries = [];
let facilityReviews = {};
let facilityReviewLoadedIds = new Set();
let reviewsConfigured = null;
let rankingConfigured = null;
let toastTimer = 0;
let rankingSyncTimer = 0;
let rankingPollTimer = 0;
let searchRenderTimer = 0;
let isSearchComposing = false;
let visibleLimit = 36;
let questFacilityId = "";
let deferredInstallPrompt = null;
let menuSwipeStart = null;
let pendingPrefectureSlug = "";
let lastTrackedPagePath = "";
let memoDrafts = {};
let facilitiesCache = null;
let facilitySearchCache = null;
let facilitySearchMemoSignature = "";
let searchWarmScheduled = false;
let facilityFeatureCache = new Map();

const el = {
  main: document.querySelector(".main"),
  visitedCount: document.querySelector("#visitedCount"),
  nextMilestone: document.querySelector("#nextMilestone"),
  collectionScope: document.querySelector("#collectionScope"),
  rewardNudge: document.querySelector("#rewardNudge"),
  totalCandidateCount: document.querySelector("#totalCandidateCount"),
  coveredPrefCount: document.querySelector("#coveredPrefCount"),
  heroWishlistCount: document.querySelector("#heroWishlistCount"),
  progressRing: document.querySelector("#progressRing"),
  progressPercent: document.querySelector("#progressPercent"),
  searchInput: document.querySelector("#searchInput"),
  searchClearButton: document.querySelector("#searchClearButton"),
  prefStrip: document.querySelector("#prefStrip"),
  sourceRow: document.querySelector("#sourceRow"),
  featureFilterGrid: document.querySelector("#featureFilterGrid"),
  featureFilterCount: document.querySelector("#featureFilterCount"),
  addFeatureGrid: document.querySelector("#addFeatureGrid"),
  spotlight: document.querySelector("#spotlight"),
  facilityList: document.querySelector("#facilityList"),
  facilityDetail: document.querySelector("#facilityDetail"),
  passportPrefStrip: document.querySelector("#passportPrefStrip"),
  titleProgressPanel: document.querySelector("#titleProgressPanel"),
  stampGrid: document.querySelector("#stampGrid"),
  statsGrid: document.querySelector("#statsGrid"),
  prefBoard: document.querySelector("#prefBoard"),
  profileForm: document.querySelector("#profileForm"),
  profileNickname: document.querySelector("#profileNickname"),
  profileEmail: document.querySelector("#profileEmail"),
  profileStatus: document.querySelector("#profileStatus"),
  leaderboardList: document.querySelector("#leaderboardList"),
  leaderboardSummary: document.querySelector("#leaderboardSummary"),
  leaderboardUpdatedAt: document.querySelector("#leaderboardUpdatedAt"),
  leaderboardSyncButton: document.querySelector("#leaderboardSyncButton"),
  favoritesList: document.querySelector("#favoritesList"),
  shopGrid: document.querySelector("#shopGrid"),
  questPanel: document.querySelector("#questPanel"),
  gearCategoryStrip: document.querySelector("#gearCategoryStrip"),
  gearGrid: document.querySelector("#gearGrid"),
  gearCount: document.querySelector("#gearCount"),
  stayGrid: document.querySelector("#stayGrid"),
  stayCount: document.querySelector("#stayCount"),
  businessPlanGrid: document.querySelector("#businessPlanGrid"),
  businessValueGrid: document.querySelector("#businessValueGrid"),
  contactTypeGrid: document.querySelector("#contactTypeGrid"),
  contactForm: document.querySelector("#contactForm"),
  contactStatus: document.querySelector("#contactStatus"),
  promotionCopyGrid: document.querySelector("#promotionCopyGrid"),
  sameshiPrefStrip: document.querySelector("#sameshiPrefStrip"),
  sameshiGrid: document.querySelector("#sameshiGrid"),
  sameshiCount: document.querySelector("#sameshiCount"),
  sameshiSource: document.querySelector("#sameshiSource"),
  articleCategoryStrip: document.querySelector("#articleCategoryStrip"),
  guideGearRail: document.querySelector("#guideGearRail"),
  articleList: document.querySelector("#articleList"),
  articleCount: document.querySelector("#articleCount"),
  guideReferences: document.querySelector("#guideReferences"),
  guideFaq: document.querySelector("#guideFaq"),
  prefSelect: document.querySelector("#prefSelect"),
  addForm: document.querySelector("#addForm"),
  toast: document.querySelector("#toast"),
  settingsButton: document.querySelector("#settingsButton"),
  settingsDialog: document.querySelector("#settingsDialog"),
  closeSettingsButton: document.querySelector("#closeSettingsButton"),
  vibrationToggle: document.querySelector("#vibrationToggle"),
  resetButton: document.querySelector("#resetButton"),
  exportButton: document.querySelector("#exportButton"),
  importInput: document.querySelector("#importInput"),
  clearFilterButton: document.querySelector("#clearFilterButton"),
  installCard: document.querySelector("#installCard"),
  installHint: document.querySelector("#installHint"),
  installButton: document.querySelector("#installButton"),
  installDismissButton: document.querySelector("#installDismissButton"),
  installFromSettingsButton: document.querySelector("#installFromSettingsButton"),
  installHelpDialog: document.querySelector("#installHelpDialog"),
  closeInstallHelpButton: document.querySelector("#closeInstallHelpButton"),
  sharedAddHint: document.querySelector("#sharedAddHint"),
  achievementDialog: document.querySelector("#achievementDialog"),
  achievementEyebrow: document.querySelector("#achievementEyebrow"),
  achievementTitle: document.querySelector("#achievementTitle"),
  achievementBody: document.querySelector("#achievementBody"),
  closeAchievementButton: document.querySelector("#closeAchievementButton"),
  achievementOkButton: document.querySelector("#achievementOkButton"),
};

init();

async function init() {
  activeView = getViewFromLocation();
  applyActiveView(activeView);
  updateDocumentMetaForView(activeView);
  bindEvents();
  renderInstallPrompt();
  renderBootLoading();
  await waitForNextFrame();

  try {
    await loadAppModules();
  } catch (error) {
    renderBootError(error);
    return;
  }

  applyPendingRouteState();
  renderPrefSelect();
  renderFeatureControls();
  hydrateSearchFromUrl();
  renderSearchClearButton();
  renderProfilePanel();
  renderShopPanel();
  renderAll();
  trackPageView();
  prepareSearchIndexOnIntent();
  registerServiceWorkerWhenIdle();
  loadAnalyticsWhenIdle();
  if (IS_STATIC_LOCAL_PREVIEW) {
    sharedFacilitiesConfigured = false;
    rankingConfigured = false;
    renderSharedHint();
    renderLeaderboard();
  } else {
    loadSharedFacilities();
    loadRanking();
    startRankingPolling();
  }
  window.addEventListener("popstate", () => {
    activeView = getViewFromLocation();
    applyActiveView(activeView);
    updateDocumentMetaForView(activeView);
    renderAll();
    trackPageView();
    el.main.scrollTo({ top: 0, behavior: "smooth" });
  });
}

async function loadAppModules() {
  const version = encodeURIComponent(APP_BUILD_ID);
  const [dataModule, contentModule] = await Promise.all([
    importWithTimeout(getVersionedModuleSpecifier(DATA_MODULE_PATH, version), DATA_IMPORT_TIMEOUT_MS, "候補データ"),
    importWithTimeout(getVersionedModuleSpecifier(CONTENT_MODULE_PATH, version), DATA_IMPORT_TIMEOUT_MS, "コンテンツ"),
  ]);

  PREFECTURES = Array.isArray(dataModule.PREFECTURES) ? dataModule.PREFECTURES : [];
  SEED_FACILITIES = Array.isArray(dataModule.SEED_FACILITIES) ? dataModule.SEED_FACILITIES : [];
  GEAR_PRODUCTS = Array.isArray(contentModule.GEAR_PRODUCTS) ? contentModule.GEAR_PRODUCTS : [];
  GUIDE_FAQS = Array.isArray(contentModule.GUIDE_FAQS) ? contentModule.GUIDE_FAQS : [];
  SAUNA_ARTICLES = Array.isArray(contentModule.SAUNA_ARTICLES) ? contentModule.SAUNA_ARTICLES : [];
  SAUNA_REFERENCES = Array.isArray(contentModule.SAUNA_REFERENCES) ? contentModule.SAUNA_REFERENCES : [];
  SAMESHI_SPOTS = Array.isArray(contentModule.SAMESHI_SPOTS) ? contentModule.SAMESHI_SPOTS : [];
  PRODUCT_RECOMMENDATIONS = GEAR_PRODUCTS.slice(0, 4);

  if (!PREFECTURES.length || !SEED_FACILITIES.length) {
    throw new Error("候補データが空です");
  }
}

function getVersionedModuleSpecifier(path, version) {
  return /\.[0-9a-f]{8}\.js$/.test(path) ? path : `${path}?v=${version}`;
}

function applyPendingRouteState() {
  if (!pendingPrefectureSlug) return;
  const pref = PREFECTURES.find((item) => item.slug === pendingPrefectureSlug || item.saunaTimeSlug === pendingPrefectureSlug);
  if (pref) selectedPrefecture = pref.name;
  pendingPrefectureSlug = "";
}

function importWithTimeout(specifier, timeoutMs, label) {
  let timeoutId = 0;
  const timeout = new Promise((_, reject) => {
    timeoutId = window.setTimeout(() => reject(new Error(`${label}の読み込みが時間切れです`)), timeoutMs);
  });
  return Promise.race([import(specifier), timeout]).finally(() => window.clearTimeout(timeoutId));
}

function waitForNextFrame() {
  return new Promise((resolve) => window.requestAnimationFrame(() => resolve()));
}

function runWhenIdle(callback, timeout = 1600) {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(callback, { timeout });
    return;
  }
  window.setTimeout(callback, Math.min(timeout, 800));
}

function track(name, params = {}) {
  try {
    if (typeof window.gtag === "function") window.gtag("event", name, params);
  } catch {
    // Analytics must never interrupt the app flow.
  }
}

function warmSearchIndex() {
  if (facilitySearchCache || searchWarmScheduled) return;
  searchWarmScheduled = true;
  runWhenIdle(() => {
    try {
      if (facilitySearchCache) return;
      getFacilitySearchRecords();
    } catch {
      // The first real search will rebuild if idle warming is interrupted.
    } finally {
      searchWarmScheduled = false;
    }
  }, 3000);
}

function prepareSearchIndexOnIntent() {
  if (!el.searchInput) return;
  const scheduleWarmup = () => warmSearchIndex();
  el.searchInput.addEventListener("focus", scheduleWarmup, { once: true });
  el.searchInput.addEventListener("pointerdown", scheduleWarmup, { once: true });
}

function registerServiceWorkerWhenIdle() {
  runWhenIdle(registerServiceWorker, 2600);
}

function loadAnalyticsWhenIdle() {
  runWhenIdle(() => {
    const measurementId = window.__SAINCHO_GA_ID;
    if (!measurementId || document.querySelector("script[data-saincho-analytics]")) return;
    const script = document.createElement("script");
    script.async = true;
    script.dataset.sainchoAnalytics = "true";
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.append(script);
  }, 5200);
}

function renderBootLoading() {
  if (el.facilityList) {
    el.facilityList.innerHTML = `
      <div class="empty-state app-loading-state" role="status" aria-live="polite">
        <span class="loading-spinner" aria-hidden="true"></span>
        <p>全国約5000件のサウナ候補を読み込んでいます。</p>
      </div>
    `;
  }
}

function renderBootError(error) {
  console.error(error);
  if (el.collectionScope) el.collectionScope.textContent = "候補データの更新待ち";
  if (el.facilityList) {
    el.facilityList.innerHTML = `
      <div class="empty-state app-loading-state app-error-state" role="alert">
        <strong>候補データの読み込みが止まっています</strong>
        <p>古いService Workerや通信キャッシュを掴んでいる可能性があります。下のボタンで更新をやり直してください。</p>
        <button class="primary-button" type="button" data-action="reload-app">更新して再読み込み</button>
      </div>
    `;
  }
  showToast("候補データの読み込みをやり直してください");
}

function bindEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  document.addEventListener("click", (event) => {
    const openViewButton = event.target instanceof Element ? event.target.closest("[data-open-view]") : null;
    if (!openViewButton || el.main.contains(openViewButton)) return;
    event.preventDefault();
    if (el.settingsDialog.open) closeSettingsDialog();
    if (openViewButton.dataset.resetExplore === "true") resetExploreState();
    setView(openViewButton.dataset.openView);
  });

  document.querySelectorAll("[data-menu-view]").forEach((button) => {
    button.addEventListener("click", () => {
      closeSettingsDialog();
      setView(button.dataset.menuView);
    });
  });

  document.addEventListener("click", (event) => {
    const appActionButton = event.target instanceof Element ? event.target.closest("[data-app-action]") : null;
    if (!appActionButton) return;
    if (el.settingsDialog.open && appActionButton.closest(".settings-dialog")) closeSettingsDialog();
    if (appActionButton.dataset.appAction === "share-app") shareApp();
    if (appActionButton.dataset.appAction === "copy-app-url") copyAppUrl();
    if (appActionButton.dataset.appAction === "share-line") shareToLine();
    if (appActionButton.dataset.appAction === "copy-promo") copyPromotionText(appActionButton.dataset.copyIndex);
  });

  document.addEventListener("click", (event) => {
    const affiliateLink = event.target instanceof Element ? event.target.closest("[data-affiliate-vendor]") : null;
    if (!affiliateLink) return;
    track("affiliate_click", {
      vendor: affiliateLink.dataset.affiliateVendor || "unknown",
      item_title: affiliateLink.dataset.affiliateItem || "",
      surface: affiliateLink.dataset.affiliateSurface || activeView.toLowerCase(),
    });
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      visibleLimit = 36;
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("segment-active", item === button));
      renderExplore();
    });
  });

  el.searchInput.addEventListener("input", (event) => {
    renderSearchClearButton();
    if (event.isComposing || isSearchComposing) return;
    scheduleSearchRender(event.target.value);
  });

  el.searchInput.addEventListener("compositionstart", () => {
    isSearchComposing = true;
    clearSearchRenderTimer();
  });

  el.searchInput.addEventListener("compositionend", (event) => {
    isSearchComposing = false;
    scheduleSearchRender(event.target.value, { immediate: true });
  });

  el.searchClearButton.addEventListener("click", () => {
    if (!el.searchInput.value) return;
    el.searchInput.value = "";
    renderSearchClearButton();
    clearSearchRenderTimer();
    applySearchValue("");
    el.searchInput.focus();
  });

  el.prefStrip.addEventListener("click", (event) => {
    const button = event.target.closest("[data-prefecture]");
    if (!button) return;
    selectedPrefecture = button.dataset.prefecture;
    visibleLimit = 36;
    renderAll();
  });

  el.featureFilterGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-feature-filter]");
    if (!button) return;
    const feature = normalizeFeature(button.dataset.featureFilter);
    if (!feature) return;
    if (selectedFeatureFilters.has(feature)) {
      selectedFeatureFilters.delete(feature);
    } else {
      const conflict = FEATURE_CONFLICTS.get(feature);
      if (conflict) selectedFeatureFilters.delete(conflict);
      selectedFeatureFilters.add(feature);
    }
    visibleLimit = 36;
    renderFeatureFilterGrid();
    renderExplore();
  });

  el.addFeatureGrid.addEventListener("change", (event) => {
    const input = event.target.closest('input[name="features"]');
    if (!input?.checked) return;
    const feature = normalizeFeature(input.value);
    const conflict = FEATURE_CONFLICTS.get(feature);
    if (!conflict) return;
    const conflictInput = el.addFeatureGrid.querySelector(`input[name="features"][value="${cssEscape(conflict)}"]`);
    if (conflictInput) conflictInput.checked = false;
  });

  el.main.addEventListener("input", (event) => {
    const input = event.target instanceof Element ? event.target.closest("[data-note-input]") : null;
    if (!(input instanceof HTMLTextAreaElement)) return;
    memoDrafts[input.dataset.noteInput] = input.value;
  });

  el.main.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    const openViewButton = target.closest("[data-open-view]");
    if (openViewButton) {
      event.preventDefault();
      setView(openViewButton.dataset.openView);
      return;
    }

    const gearCategoryButton = target.closest("[data-gear-category]");
    if (gearCategoryButton) {
      selectedGearCategory = gearCategoryButton.dataset.gearCategory;
      renderGearPage();
      return;
    }

    const articleCategoryButton = target.closest("[data-article-category]");
    if (articleCategoryButton) {
      selectedArticleCategory = articleCategoryButton.dataset.articleCategory;
      renderGuidePage();
      return;
    }

    const sameshiPrefectureButton = target.closest("[data-sameshi-prefecture]");
    if (sameshiPrefectureButton) {
      selectedSameshiPrefecture = sameshiPrefectureButton.dataset.sameshiPrefecture;
      renderSameshiPage();
      return;
    }

    const moreButton = target.closest("[data-show-more]");
    if (moreButton) {
      visibleLimit += 36;
      renderExplore();
      return;
    }

    const button = target.closest("[data-action]");
    if (!button) return;
    if (button.dataset.action === "reload-app") {
      reloadAppFresh();
      return;
    }
    if (button.dataset.action === "prefill-add") {
      prefillAddFormFromSearch();
      return;
    }
    if (button.dataset.action === "draw-quest") {
      drawQuestFacility();
      return;
    }
    if (button.dataset.action === "quest-focus") {
      const facility = getFacilities().find((item) => item.id === button.dataset.id);
      if (facility) focusQuestFacility(facility);
      return;
    }
    if (button.dataset.action === "quest-wishlist") {
      const facility = getFacilities().find((item) => item.id === button.dataset.id);
      if (facility) addQuestWishlist(facility);
      return;
    }
    if (button.dataset.action === "quest-sameshi") {
      const facility = getFacilities().find((item) => item.id === button.dataset.id);
      openSameshiForFacility(facility);
      return;
    }
    if (button.dataset.action === "contact-plan") {
      focusContactPlan(button.dataset.planName);
      return;
    }

    const facility = getFacilities().find((item) => item.id === button.dataset.id);
    if (!facility) return;

    if (button.dataset.action === "stamp") stampFacility(facility);
    if (button.dataset.action === "unstamp") unstampFacility(facility);
    if (button.dataset.action === "wishlist") toggleWishlist(facility);
    if (button.dataset.action === "favorite") toggleFavorite(facility);
    if (button.dataset.action === "apply-note-template") applyNoteTemplate(facility, button.dataset.templateIndex);
    if (button.dataset.action === "save-note") saveFacilityMemo(facility, button);
    if (button.dataset.action === "delete-note") deleteFacilityMemo(facility);
    if (button.dataset.action === "share-note") shareFacilityMemo(facility);
    if (button.dataset.action === "share-facility") shareFacility(facility);
    if (button.dataset.action === "save-review") saveFacilityReview(facility, button);
    if (button.dataset.action === "delete-review") deleteFacilityReview(facility, button.dataset.reviewId);
  });

  el.main.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const card = target?.closest("[data-detail-card]");
    if (!card || isInteractiveCardTarget(target)) return;
    const facility = getFacilities().find((item) => item.id === card.dataset.detailCard);
    if (facility) openFacilityDetail(facility);
  });

  el.main.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target instanceof Element ? event.target : null;
    const card = target?.closest("[data-detail-card]");
    if (!card || target !== card) return;
    event.preventDefault();
    const facility = getFacilities().find((item) => item.id === card.dataset.detailCard);
    if (facility) openFacilityDetail(facility);
  });

  el.prefBoard.addEventListener("click", (event) => {
    const button = event.target.closest("[data-prefecture]");
    if (!button) return;
    selectedPrefecture = button.dataset.prefecture;
    setView("Explore");
  });

  el.passportPrefStrip.addEventListener("click", (event) => {
    const button = event.target.closest("[data-passport-prefecture]");
    if (!button) return;
    selectedPrefecture = button.dataset.passportPrefecture;
    visibleLimit = 36;
    renderAll();
  });

  el.profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nickname = el.profileNickname.value.trim();
    const email = el.profileEmail.value.trim();
    if (!nickname || !email || !el.profileEmail.validity.valid) {
      showToast("ニックネームとメールアドレスを確認してください");
      return;
    }
    profile = {
      id: profile.id || createClientId(),
      nickname: nickname.slice(0, 16),
      email: email.slice(0, 80),
      registeredAt: profile.registeredAt || new Date().toISOString(),
    };
    saveProfile();
    renderProfilePanel();
    syncRanking({ announce: true });
  });

  el.leaderboardSyncButton.addEventListener("click", () => syncRanking({ announce: true }));

  el.addForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(el.addForm);
    const memoText = String(form.get("note")).trim();
    const selectedFeatures = normalizeFeatures(form.getAll("features"));
    const custom = {
      id: `custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      name: String(form.get("name")).trim(),
      prefecture: String(form.get("prefecture")),
      city: String(form.get("city")).trim(),
      address: String(form.get("address")).trim(),
      trait: inferTraitFromFeatures(selectedFeatures),
      tags: ["マイサウナ", ...selectedFeatures],
      features: selectedFeatures,
      note: memoText,
      source: "自分で追加",
      sourceUrl: "",
      custom: true,
    };

    if (!custom.name) return;
    const duplicate = findDuplicateFacility(custom);
    if (duplicate) {
      selectedPrefecture = duplicate.prefecture;
      setSearchTerm(duplicate.name);
      el.searchInput.value = duplicate.name;
      setView("Explore");
      showToast(`${duplicate.name} はすでに候補にあります`);
      return;
    }

    let addedFacility = custom;
    let shared = false;
    try {
      const result = await publishSharedFacility(custom);
      if (result?.facility) {
        addedFacility = result.facility;
        shared = true;
        mergeSharedFacility(result.facility);
      } else {
        state.customFacilities.push(custom);
      }
    } catch {
      state.customFacilities.push(custom);
    }

    if (memoText) {
      state.facilityMemos[addedFacility.id] = {
        text: memoText,
        updatedAt: new Date().toISOString(),
      };
    }
    invalidateFacilityCaches();
    selectedPrefecture = addedFacility.prefecture;
    setSearchTerm(addedFacility.name);
    el.searchInput.value = addedFacility.name;
    saveState();
    el.addForm.reset();
    setView("Explore");
    showToast(shared ? `${addedFacility.name} をみんなの候補に追加しました` : `${addedFacility.name} を自分の候補に追加しました`);
  });

  el.contactForm?.addEventListener("submit", submitContactForm);

  el.settingsButton.addEventListener("click", openSettingsDialog);
  el.closeSettingsButton.addEventListener("click", closeSettingsDialog);
  el.vibrationToggle.checked = settings.vibration;
  el.vibrationToggle.addEventListener("change", () => {
    settings.vibration = el.vibrationToggle.checked;
    saveSettings();
  });

  el.resetButton.addEventListener("click", () => {
    if (!confirm("すべての押印・行きたい・お気に入り・メモ・口コミ・追加データを削除します。")) return;
    state = createState();
    invalidateFacilityCaches();
    saveState();
    closeSettingsDialog();
    renderAll();
    showToast("記録をリセットしました");
  });

  el.exportButton.addEventListener("click", exportState);
  el.importInput.addEventListener("change", importState);
  el.clearFilterButton.addEventListener("click", () => {
    selectedPrefecture = "全国";
    renderAll();
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    localStorage.removeItem(INSTALL_DISMISSED_KEY);
    renderInstallPrompt();
  });
  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    localStorage.setItem(INSTALL_DISMISSED_KEY, "installed");
    renderInstallPrompt();
    track("pwa_install");
    showToast("ホーム画面に追加しました");
  });
  window.addEventListener("resize", renderInstallPrompt);
  el.installButton.addEventListener("click", handleInstallClick);
  el.installDismissButton.addEventListener("click", () => {
    localStorage.setItem(INSTALL_DISMISSED_KEY, "dismissed");
    renderInstallPrompt();
  });
  el.installFromSettingsButton.addEventListener("click", () => {
    localStorage.removeItem(INSTALL_DISMISSED_KEY);
    if (isStandaloneMode()) {
      showToast("すでにホーム画面表示です");
      return;
    }
    handleInstallClick();
    renderInstallPrompt();
  });
  el.closeInstallHelpButton.addEventListener("click", () => el.installHelpDialog.close());
  el.closeAchievementButton.addEventListener("click", () => el.achievementDialog.close());
  el.achievementOkButton.addEventListener("click", () => el.achievementDialog.close());
  bindSwipeMenu();
}

function openSettingsDialog() {
  if (el.settingsDialog.open) return;
  if (typeof el.settingsDialog.showModal === "function") {
    el.settingsDialog.showModal();
    return;
  }
  el.settingsDialog.setAttribute("open", "");
}

function closeSettingsDialog() {
  if (!el.settingsDialog.open) return;
  if (typeof el.settingsDialog.close === "function") {
    el.settingsDialog.close();
    return;
  }
  el.settingsDialog.removeAttribute("open");
}

function bindSwipeMenu() {
  document.addEventListener("touchstart", (event) => {
    if (!MOBILE_MENU_QUERY.matches || event.touches.length !== 1) {
      menuSwipeStart = null;
      return;
    }
    const touch = event.touches[0];
    const target = event.target instanceof Element ? event.target : document.body;
    if (!el.settingsDialog.open) {
      if (!isMenuOpenSwipeStart(touch, target)) {
        menuSwipeStart = null;
        return;
      }
      menuSwipeStart = { mode: "open", x: touch.clientX, y: touch.clientY };
      return;
    }
    if (target.closest("input, textarea, select, button, a")) {
      menuSwipeStart = null;
      return;
    }
    menuSwipeStart = { mode: "close", x: touch.clientX, y: touch.clientY };
  }, { passive: true });

  document.addEventListener("touchend", (event) => {
    if (!menuSwipeStart || !event.changedTouches.length) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - menuSwipeStart.x;
    const dy = Math.abs(touch.clientY - menuSwipeStart.y);
    const mode = menuSwipeStart.mode;
    menuSwipeStart = null;
    if (dy > MENU_SWIPE_MAX_VERTICAL) return;
    if (mode === "open" && dx <= -MENU_SWIPE_DISTANCE) openSettingsDialog();
    if (mode === "close" && dx >= MENU_SWIPE_DISTANCE) closeSettingsDialog();
  }, { passive: true });
}

function isMenuOpenSwipeStart(touch, target) {
  if (touch.clientX < window.innerWidth - MENU_EDGE_WIDTH) return false;
  if (isBottomNavTouch(touch.clientY)) return false;
  return !target.closest("input, textarea, select, button, a, .bottom-nav, .category-strip, .pref-strip, .passport-scope-strip, .source-row, .gear-category-strip");
}

function resetExploreState() {
  clearSearchRenderTimer();
  searchTerm = "";
  searchNeedles = [];
  selectedPrefecture = "全国";
  selectedFeatureFilters.clear();
  activeFilter = "all";
  visibleLimit = 36;
  if (el.searchInput) el.searchInput.value = "";
  renderSearchClearButton();
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("segment-active", button.dataset.filter === "all");
  });
}

function isBottomNavTouch(clientY) {
  const nav = document.querySelector(".bottom-nav");
  if (!nav) return false;
  const rect = nav.getBoundingClientRect();
  return clientY >= rect.top - 12 && clientY <= rect.bottom + 12;
}

function setView(view) {
  if (!VIEW_META[view]) view = "Explore";
  if (view === "Sameshi" && selectedPrefecture !== "全国") selectedSameshiPrefecture = selectedPrefecture;
  if (view !== "Facility") activeFacilityId = "";
  activeView = view;
  applyActiveView(view);
  pushViewUrl(view);
  renderAll();
  el.main.scrollTo({ top: 0, behavior: "smooth" });
}

function openFacilityDetail(facility) {
  activeFacilityId = facility.id;
  activeView = "Facility";
  selectedPrefecture = facility.prefecture || selectedPrefecture;
  applyActiveView(activeView);
  pushViewUrl(activeView);
  renderAll();
  el.main.scrollTo({ top: 0, behavior: "smooth" });
}

function applyActiveView(view) {
  document.body.dataset.activeView = view.toLowerCase();
  Object.keys(VIEW_META).forEach((key) => {
    document.body.classList.toggle(`view-${key.toLowerCase()}`, key === view);
  });
  document.querySelectorAll(".view").forEach((section) => {
    section.classList.toggle("view-active", section.id === `view${view}`);
  });
  document.querySelectorAll("[data-view]").forEach((button) => {
    const active = button.dataset.view === view;
    button.classList.toggle("nav-active", active);
    button.toggleAttribute("aria-current", active);
  });
}

function renderAll() {
  removeSsrContent();
  renderSummary();
  if (activeView === "Explore") {
    renderQuestPanel();
    renderExplore();
    return;
  }
  if (activeView === "Facility") {
    renderFacilityDetail();
    return;
  }
  if (activeView === "Passport") {
    renderPassport();
    return;
  }
  if (activeView === "Stats") {
    renderStats();
    renderShopPanel();
    return;
  }
  if (activeView === "Gear") {
    renderGearPage();
    return;
  }
  if (activeView === "Stay") {
    renderStayPage();
    return;
  }
  if (activeView === "Contact") {
    renderContactPage();
    return;
  }
  if (activeView === "Sameshi") {
    renderSameshiPage();
    return;
  }
  if (activeView === "Guide") {
    renderGuidePage();
    return;
  }
}

function removeSsrContent() {
  document.getElementById("ssrContent")?.remove();
}

function renderSummary() {
  const facilities = getFacilities();
  const visitedTotal = Object.keys(state.visited).length;
  const wishlistTotal = Object.keys(state.wishlist).length;
  const rawPercent = facilities.length ? (visitedTotal / facilities.length) * 100 : 0;
  const percent = rawPercent > 0 && rawPercent < 1 ? rawPercent.toFixed(1) : Math.round(rawPercent).toString();
  const nextTitle = getNextTitle(visitedTotal);
  const coveredPrefTotal = Object.keys(countFacilitiesByPrefecture()).length;

  el.visitedCount.textContent = visitedTotal;
  el.progressPercent.textContent = `${percent}%`;
  el.progressRing.style.setProperty("--progress", `${rawPercent}%`);
  el.nextMilestone.textContent = nextTitle ? `あと${nextTitle.count - visitedTotal}湯で${nextTitle.title}` : "最高称号に到達済み";
  el.collectionScope.textContent = `${facilities.length}候補 / ${PREFECTURES.length}都道府県`;
  el.totalCandidateCount.textContent = facilities.length;
  el.coveredPrefCount.textContent = coveredPrefTotal;
  el.heroWishlistCount.textContent = wishlistTotal;
  renderRewardNudge(visitedTotal, wishlistTotal);
}

function renderRewardNudge(visitedTotal, wishlistTotal) {
  if (!el.rewardNudge) return;
  const nextTitle = getNextTitle(visitedTotal);
  const titleGoal = nextTitle
    ? { label: "次の称号", value: `あと${nextTitle.count - visitedTotal}湯`, hint: nextTitle.title }
    : { label: "称号", value: "到達済み", hint: "最高称号" };
  const prefGoal = getNearestPrefectureGoal();
  const wishlistGoal = wishlistTotal > 0
    ? { label: "行きたい", value: `${wishlistTotal}件`, hint: "未来の一湯" }
    : { label: "行きたい", value: "あと1件", hint: "候補を残す" };
  const goals = [titleGoal, prefGoal, wishlistGoal];
  el.rewardNudge.innerHTML = goals.map((goal) => `
    <div class="reward-pill">
      <span>${escapeHtml(goal.label)}</span>
      <strong>${escapeHtml(goal.value)}</strong>
      <em>${escapeHtml(goal.hint)}</em>
    </div>
  `).join("");
}

function renderQuestPanel() {
  if (!el.questPanel) return;
  const facility = getQuestFacility();
  const goal = getQuestGoal();
  const copy = QUEST_COPY[hashString(`${selectedPrefecture}:${searchTerm}:${Object.keys(state.visited).length}`) % QUEST_COPY.length];
  if (!facility) {
    el.questPanel.innerHTML = `
      <article class="quest-card quest-card-empty">
        <div class="quest-copy">
          <span>NEXT QUEST</span>
          <strong>候補を追加して次の一湯を作る</strong>
          <em>${escapeHtml(goal.hint)}</em>
        </div>
        <div class="quest-actions">
          <button class="primary-button" type="button" data-open-view="Add">追加</button>
          <button class="ghost-button" type="button" data-open-view="Passport">サ印</button>
          <button class="secondary-button" type="button" data-open-view="Sameshi">サ飯</button>
        </div>
      </article>
    `;
    return;
  }

  const wished = Boolean(state.wishlist[facility.id]);
  const tag = getDisplayTags(facility)[0] || getFacilitySourceLabel(facility) || "未押印";
  el.questPanel.innerHTML = `
    <article class="quest-card">
      <div class="quest-copy">
        <span>SAIN SLOT</span>
        <strong>${escapeHtml(goal.value)}</strong>
        <em>${escapeHtml(goal.hint)}</em>
      </div>
      <div class="quest-target">
        <span>${escapeHtml(copy)} / ${escapeHtml(tag)}</span>
        <strong>${escapeHtml(facility.name)}</strong>
        <em>${escapeHtml(getFacilityMeta(facility))}</em>
      </div>
      <div class="quest-actions">
        <button class="secondary-button" type="button" data-action="draw-quest">候補を引く</button>
        <button class="primary-button" type="button" data-action="quest-focus" data-id="${escapeAttr(facility.id)}">見る</button>
        <button class="ghost-button ${wished ? "is-active" : ""}" type="button" data-action="quest-wishlist" data-id="${escapeAttr(facility.id)}">${wished ? "候補入り" : "行きたい"}</button>
        <button class="sameshi-link-button" type="button" data-action="quest-sameshi" data-id="${escapeAttr(facility.id)}">サ飯</button>
      </div>
    </article>
  `;
}

function renderExplore() {
  renderFilterButtons();
  renderPrefStrip();
  renderSourceRow();
  const facilities = getFilteredFacilities();
  renderSpotlight(facilities);

  if (!facilities.length) {
    const addButton = searchTerm
      ? `<button class="ghost-button empty-add-button" type="button" data-action="prefill-add">このサウナを候補に追加</button>`
      : "";
    el.facilityList.innerHTML = `
      <div class="empty-state">
        <p>${searchTerm ? "該当する候補が見つかりません。候補にないサウナは自分で登録できます。" : `${escapeHtml(selectedPrefecture)}の候補はまだありません。参照リンクで探して、追加タブから登録できます。`}</p>
        ${addButton}
      </div>
    `;
    return;
  }

  const visibleFacilities = selectedPrefecture === "全国" ? facilities.slice(0, visibleLimit) : facilities;
  const moreCount = Math.max(0, facilities.length - visibleFacilities.length);
  const moreButton = moreCount
    ? `<button class="load-more-button" type="button" data-show-more="true">さらに${Math.min(36, moreCount)}件表示</button>`
    : "";
  el.facilityList.innerHTML = visibleFacilities.map(renderFacilityCard).join("") + moreButton;
}

function renderFilterButtons() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    const active = button.dataset.filter === activeFilter;
    button.classList.toggle("segment-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function scheduleSearchRender(value, options = {}) {
  clearSearchRenderTimer();
  const delay = options.immediate ? 0 : SEARCH_RENDER_DELAY_MS;
  searchRenderTimer = window.setTimeout(() => applySearchValue(value), delay);
}

function clearSearchRenderTimer() {
  if (!searchRenderTimer) return;
  window.clearTimeout(searchRenderTimer);
  searchRenderTimer = 0;
}

function applySearchValue(value) {
  searchRenderTimer = 0;
  setSearchTerm(value);
  visibleLimit = 36;
  const moved = moveToSearchPrefecture(value);
  if (moved) {
    renderAll();
  } else {
    renderExplore();
  }
}

function renderPrefStrip() {
  const countsByPref = countVisitedByPrefecture();
  const candidatesByPref = countFacilitiesByPrefecture();
  const allVisited = Object.keys(state.visited).length;
  const allCandidates = getFacilities().length;
  const chips = [
    `<button class="pref-chip ${selectedPrefecture === "全国" ? "pref-chip-active" : ""}" type="button" data-prefecture="全国">全国 ${allVisited}/${allCandidates}</button>`,
    ...PREFECTURES.map((pref) => {
      const active = selectedPrefecture === pref.name;
      const visitedCount = countsByPref[pref.name] || 0;
      const candidateCount = candidatesByPref[pref.name] || 0;
      return `<button class="pref-chip ${active ? "pref-chip-active" : ""}" type="button" data-prefecture="${escapeAttr(pref.name)}">${escapeHtml(shortPrefName(pref.name))} ${visitedCount}/${candidateCount}</button>`;
    }),
  ];
  el.prefStrip.innerHTML = chips.join("");
}

function renderSourceRow() {
  const pref = PREFECTURES.find((item) => item.name === selectedPrefecture);
  const ikitaiUrl = pref ? `https://sauna-ikitai.com/${pref.slug}` : "https://sauna-ikitai.com/";
  const saunaTimeUrl = pref ? `https://saunatime.jp/${pref.saunaTimeSlug || pref.slug}/` : "https://saunatime.jp/";
  const links = [
    ["サウナイキタイ", ikitaiUrl],
    ["SaunaTime", saunaTimeUrl],
    ["サウナマップ", "https://sauna-map.com/"],
    ["スーパー銭湯全国検索", "https://www.supersento.com/"],
    ["Instabase", "https://www.instabase.jp/sauna"],
    ["SAUNACHELIN", "https://www.saunachelin.com/"],
    ["Airbnbサウナ宿", VIEW_META.Stay.path, "Stay"],
    ["掲載・お問い合わせ", VIEW_META.Contact.path, "Contact"],
  ];
  el.sourceRow.innerHTML = links.map(([label, url, view]) => (
    view
      ? `<a href="${escapeAttr(url)}" data-open-view="${escapeAttr(view)}">${escapeHtml(label)}</a>`
      : `<a href="${escapeAttr(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`
  )).join("");
}

function renderSpotlight(filteredFacilities = getFilteredFacilities()) {
  const pool = filteredFacilities.filter((facility) => !state.visited[facility.id] && !getFacilityStatus(facility));
  const facility = pool[0];
  if (!facility) {
    el.spotlight.innerHTML = "";
    return;
  }
  const wished = Boolean(state.wishlist[facility.id]);
  const favorite = Boolean(state.favorites[facility.id]);
  el.spotlight.innerHTML = `
    <article class="spotlight-card" data-detail-card="${escapeAttr(facility.id)}" role="link" tabindex="0" aria-label="${escapeAttr(facility.name)}の詳細を見る">
      <div>
        <span class="spotlight-label">次の一湯</span>
        <h3>${escapeHtml(facility.name)}</h3>
        <p>${escapeHtml(getFacilityMeta(facility))}</p>
        ${getFacilityAddress(facility) ? `<p class="spotlight-address">${escapeHtml(getFacilityAddress(facility))}</p>` : ""}
      </div>
      ${renderStamp(facility, false)}
      <div class="spotlight-actions">
        <button class="primary-button" type="button" data-action="stamp" data-id="${escapeAttr(facility.id)}">押印</button>
        <button class="secondary-button ${wished ? "is-active" : ""}" type="button" data-action="wishlist" data-id="${escapeAttr(facility.id)}">${wished ? "候補入り" : "行きたい"}</button>
        ${renderFavoriteButton(facility, favorite)}
        ${renderMapRouteLink(facility)}
        <button class="facility-share-button" type="button" data-action="share-facility" data-id="${escapeAttr(facility.id)}">Xでおすすめ</button>
      </div>
      ${renderFacilityGearNudge(facility)}
    </article>
  `;
}

function renderFacilityGearNudge(facility) {
  const picks = getFacilityGearProducts(facility).slice(0, 2);
  return `
    <div class="spotlight-gear">
      <div class="spotlight-gear-head">
        <span>GEAR CHECK</span>
        <strong>次の一湯に持っていく</strong>
        <button class="mini-button" type="button" data-open-view="Gear">一覧</button>
      </div>
      <div class="spotlight-gear-links">
        ${picks.map(renderCompactGearLink).join("")}
      </div>
    </div>
  `;
}

function renderFacilityCard(facility) {
  const visited = state.visited[facility.id];
  const wished = Boolean(state.wishlist[facility.id]);
  const favorite = Boolean(state.favorites[facility.id]);
  const status = getFacilityStatus(facility);
  const meta = getFacilityMeta(facility);
  const displayTags = getDisplayTags(facility);
  const tags = displayTags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
  const sourceBadge = renderFacilitySourceBadge(facility);
  const headBadge = visited
    ? `<span class="visited-badge">押印済</span>`
    : status
      ? `<span class="status-badge">${escapeHtml(status.badge)}</span>`
      : sourceBadge;
  const actions = visited
    ? `
      <button class="primary-button complete-button" type="button" disabled>押印済み</button>
      <button class="undo-button" type="button" data-action="unstamp" data-id="${escapeAttr(facility.id)}">取り消す</button>
    `
    : `
      <button class="primary-button" type="button" data-action="stamp" data-id="${escapeAttr(facility.id)}" ${status ? "disabled" : ""}>${status ? escapeHtml(status.action) : "押印する"}</button>
      <button class="secondary-button ${wished ? "is-active" : ""}" type="button" data-action="wishlist" data-id="${escapeAttr(facility.id)}" aria-pressed="${wished}">${wished ? "候補入り" : "行きたい"}</button>
    `;

  return `
    <article class="facility-card" data-detail-card="${escapeAttr(facility.id)}" role="link" tabindex="0" aria-label="${escapeAttr(facility.name)}の詳細を見る">
      ${renderStamp(facility, Boolean(visited))}
      <div class="card-body">
        <div class="card-head">
          <h3 class="facility-name">${escapeHtml(facility.name)}</h3>
          <div class="card-head-actions">
            ${headBadge}
            ${renderFavoriteButton(facility, favorite, true)}
          </div>
        </div>
        <p class="facility-meta">${escapeHtml(meta)}</p>
        ${renderFacilityAddress(facility)}
        ${tags ? `<div class="tag-row">${tags}</div>` : ""}
        <div class="card-actions ${visited ? "card-actions-visited" : ""}">${actions}</div>
        <div class="facility-utility-actions">
          ${renderMapRouteLink(facility)}
          <button class="facility-share-button" type="button" data-action="share-facility" data-id="${escapeAttr(facility.id)}">Xでおすすめ</button>
        </div>
        ${renderMemoPanel(facility)}
      </div>
    </article>
  `.trim();
}

function renderFavoriteButton(facility, active, compact = false) {
  return `
    <button class="favorite-button ${active ? "is-active" : ""} ${compact ? "favorite-button-compact" : ""}" type="button" data-action="favorite" data-id="${escapeAttr(facility.id)}" aria-pressed="${active}" aria-label="${active ? "お気に入りから外す" : "お気に入りに追加"}">
      <span aria-hidden="true">${active ? "★" : "☆"}</span>
    </button>
  `;
}

function renderFacilityAddress(facility) {
  const address = getFacilityAddress(facility);
  if (!address && !facility.city) return "";
  const value = address || `公開エリア: ${getFacilityAreaLabel(facility)}`;
  return `
    <p class="facility-address ${address ? "" : "facility-area"}">
      <span class="map-route-icon" aria-hidden="true"></span>
      <span>${escapeHtml(value)}</span>
    </p>
  `;
}

function renderMapRouteLink(facility) {
  const label = getFacilityAddress(facility) || getFacilityCoordinate(facility) ? "経路" : "地図で探す";
  return `
    <a class="map-route-button" href="${escapeAttr(getFacilityDirectionsUrl(facility))}" target="_blank" rel="noreferrer" aria-label="Google Mapsで${escapeAttr(facility.name)}への経路を開く">
      <span class="map-route-icon" aria-hidden="true"></span>
      <span>${label}</span>
    </a>
  `;
}

function renderFacilityDetail() {
  if (!el.facilityDetail) return;
  const facility = getFacilityById(activeFacilityId);
  if (!facility) {
    updateDocumentMetaForView("Facility");
    syncFacilityStructuredData(null);
    el.facilityDetail.innerHTML = `
      <div class="empty-state facility-detail-empty">
        <strong>施設が見つかりません</strong>
        <p>候補が更新された可能性があります。検索に戻って施設名で探してください。</p>
        <button class="primary-button" type="button" data-open-view="Explore">検索へ戻る</button>
      </div>
    `;
    return;
  }

  updateDocumentMetaForView("Facility", facility);
  syncFacilityStructuredData(facility);

  const visited = Boolean(state.visited[facility.id]);
  const wished = Boolean(state.wishlist[facility.id]);
  const favorite = Boolean(state.favorites[facility.id]);
  const status = getFacilityStatus(facility);
  const address = getFacilityAddress(facility);
  const area = getFacilityAreaLabel(facility);
  const tags = getDisplayTags(facility).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
  const detailLines = getFacilityDetailLines(facility);
  const photo = getFacilityPhoto(facility);
  const photoStyle = ` style="background-image: url('${escapeAttr(photo.url)}')"`;
  const gear = getFacilityGearProducts(facility).slice(0, 3);
  const ratingCopy = facility.rating && facility.reviewCount
    ? `掲載評価 ${facility.rating} / ${facility.reviewCount}レビュー`
    : "";

  el.facilityDetail.innerHTML = `
    <article class="facility-detail">
      <button class="back-button" type="button" data-open-view="Explore">検索へ戻る</button>
      <div class="facility-detail-hero">
        <div class="facility-photo ${photo.isFallback ? "facility-photo-fallback" : ""}"${photoStyle}>
          <span>${escapeHtml(photo.label)}</span>
        </div>
        <div class="facility-detail-copy">
          <p class="eyebrow">SAUNA DETAIL</p>
          <h2>${escapeHtml(facility.name)}</h2>
          <p>${escapeHtml(getFacilityMeta(facility))}</p>
          ${ratingCopy ? `<em>${escapeHtml(ratingCopy)}</em>` : ""}
          <div class="tag-row">${tags || `<span class="tag">施設詳細</span>`}</div>
        </div>
      </div>

      <section class="detail-info-card" aria-label="3行情報">
        ${detailLines.map((line) => `
          <div>
            <span>${escapeHtml(line.label)}</span>
            <strong>${escapeHtml(line.value)}</strong>
          </div>
        `).join("")}
      </section>

      <section class="detail-action-grid" aria-label="施設アクション">
        <button class="primary-button" type="button" data-action="stamp" data-id="${escapeAttr(facility.id)}" ${visited || status ? "disabled" : ""}>${visited ? "押印済み" : status ? escapeHtml(status.action) : "押印する"}</button>
        <button class="secondary-button ${wished ? "is-active" : ""}" type="button" data-action="wishlist" data-id="${escapeAttr(facility.id)}">${wished ? "候補入り" : "行きたい"}</button>
        <button class="favorite-wide-button ${favorite ? "is-active" : ""}" type="button" data-action="favorite" data-id="${escapeAttr(facility.id)}" aria-pressed="${favorite}">${favorite ? "★ お気に入り" : "☆ お気に入り"}</button>
        ${visited ? `<button class="undo-button" type="button" data-action="unstamp" data-id="${escapeAttr(facility.id)}">押印を取り消す</button>` : ""}
        ${renderMapRouteLink(facility)}
        <a class="sameshi-map-button" href="${escapeAttr(getNearbySameshiUrl(facility))}" target="_blank" rel="noreferrer">周辺サ飯</a>
        <button class="facility-share-button" type="button" data-action="share-facility" data-id="${escapeAttr(facility.id)}">Xでおすすめ</button>
      </section>

      <section class="detail-panel detail-location-panel">
        <div>
          <p class="eyebrow">LOCATION</p>
          <h3>すぐ向かうための情報</h3>
        </div>
        <dl>
          <div>
            <dt>住所</dt>
            <dd>${address ? escapeHtml(address) : escapeHtml(area ? `公開エリア: ${area}` : "住所確認中")}</dd>
          </div>
          <div>
            <dt>参照</dt>
            <dd>${renderFacilitySourceBadge(facility)}</dd>
          </div>
          ${facility.access ? `<div><dt>アクセス</dt><dd>${escapeHtml(facility.access)}</dd></div>` : ""}
        </dl>
        <p>${address ? "住所が確認できる候補は経路ボタンで直接ルート検索できます。" : "番地住所が公開確認できない候補は、施設名と公開エリアでGoogle Maps検索を開きます。"}</p>
      </section>

      <section class="detail-panel detail-unique-panel">
        <div>
          <p class="eyebrow">NEXT MOVE</p>
          <h3>サ印帳だけの使い方</h3>
        </div>
        <div class="detail-unique-grid">
          <a href="${escapeAttr(getNearbySameshiUrl(facility))}" target="_blank" rel="noreferrer">
            <span>サ飯</span>
            <strong>施設名＋飲食店で探す</strong>
          </a>
          <button type="button" data-open-view="Gear">
            <span>補給</span>
            <strong>オロポ・水分補給はGearで準備</strong>
          </button>
          <div class="lodging-search-card">
            <span>遠征</span>
            <strong>近くの宿を予約サイトで探す</strong>
            <div>${renderLodgingLinks(facility)}</div>
          </div>
        </div>
      </section>

      <section class="detail-panel detail-gear-panel">
        <div class="panel-head">
          <div>
            <p class="eyebrow">GEAR</p>
            <h3>この一湯の持ち物</h3>
          </div>
          <button class="mini-button" type="button" data-open-view="Gear">Gearへ</button>
        </div>
        <div class="detail-gear-grid">
          ${gear.map(renderCompactGearLink).join("")}
        </div>
      </section>

      ${renderDetailMemoPanel(facility)}
      ${renderReviewPanel(facility)}
    </article>
  `;
  loadFacilityReviews(facility.id);
}

function getFacilityById(id) {
  return getFacilities().find((facility) => facility.id === id || (facility.legacyIds || []).includes(id));
}

function getFacilityDetailPath(facility) {
  return `/facility/${encodeURIComponent(facility.id)}/`;
}

function getFacilityDetailUrl(facility) {
  return new URL(getFacilityDetailPath(facility), APP_URL).href;
}

function getFacilityPhoto(facility) {
  const image = getDisplayImageUrl(facility);
  if (image) {
    return {
      url: image,
      label: "施設写真",
      isFallback: false,
    };
  }
  return {
    url: buildFacilityPlaceholderSvg(facility),
    label: "サ印プレースホルダー",
    isFallback: true,
  };
}

function getDisplayImageUrl(value) {
  const raw = typeof value === "object" && value ? String(value.image || "").trim() : String(value || "").trim();
  if (!raw) return "";
  try {
    const url = new URL(raw, location.origin);
    if (url.protocol !== "https:" && url.protocol !== "http:") return "";
    if (!ALLOWED_IMAGE_HOSTS.has(url.hostname)) return "";
    return url.href;
  } catch {
    return "";
  }
}

function buildFacilityPlaceholderSvg(facility = {}) {
  const style = STAMP_STYLES[facility.trait] || STAMP_STYLES.custom;
  const name = String(facility.name || "サ印帳").trim();
  const initial = (name.replace(/\s+/g, "")[0] || "湯").slice(0, 1);
  const meta = [facility.prefecture, facility.city].filter(Boolean).join(" / ") || "SAUNA STAMP";
  const paper = "#F6F3EC";
  const washi = "#EDE8DC";
  const ink = "#1F1D18";
  const softInk = "#5C5850";
  const line = "#D9D2C2";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
      <rect width="960" height="540" rx="40" fill="${paper}"/>
      <path d="M0 94h960M0 188h960M0 282h960M0 376h960M0 470h960" stroke="${washi}" stroke-width="2" opacity=".72"/>
      <path d="M86 84h788v372H86z" fill="none" stroke="${line}" stroke-width="3"/>
      <circle cx="256" cy="270" r="144" fill="none" stroke="${style.color}" stroke-width="18" opacity=".88"/>
      <circle cx="256" cy="270" r="110" fill="none" stroke="${style.color}" stroke-width="5" stroke-dasharray="18 16" opacity=".62"/>
      <path d="M182 318c42 24 106 24 148 0" fill="none" stroke="${style.color}" stroke-width="14" stroke-linecap="round" opacity=".82"/>
      <path d="M192 238c18 20 18 46 0 66M248 224c18 24 18 54 0 82M304 238c18 20 18 46 0 66" fill="none" stroke="${style.color}" stroke-width="14" stroke-linecap="round" opacity=".82"/>
      <text x="256" y="302" text-anchor="middle" font-family="Yu Mincho, serif" font-size="96" font-weight="700" fill="${style.color}">${escapeSvgText(initial)}</text>
      <text x="506" y="258" font-family="Noto Sans JP, system-ui, sans-serif" font-size="42" font-weight="700" fill="${ink}">${escapeSvgText(name.slice(0, 18))}</text>
      <text x="508" y="318" font-family="Noto Sans JP, system-ui, sans-serif" font-size="24" font-weight="700" fill="${softInk}">${escapeSvgText(meta.slice(0, 28))}</text>
      <text x="86" y="500" font-family="Inter, system-ui, sans-serif" font-size="20" font-weight="600" fill="${softInk}" letter-spacing="3">SAINCHO PLACE</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeSvgText(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function getFacilityDetailLines(facility) {
  const features = getDisplayTags(facility);
  const address = getFacilityAddress(facility);
  const source = getFacilitySourceLabel(facility);
  const area = getFacilityAreaLabel(facility) || "全国候補";
  return [
    { label: "エリア", value: area },
    { label: "住所", value: address || (facility.city ? `${facility.city}周辺` : "参照元で確認") },
    { label: "特徴", value: features.slice(0, 3).join(" / ") || source || "サ印対象" },
  ];
}

function renderPassport() {
  renderPassportPrefStrip();
  renderTitleProgress();
  const facilities = getFacilities().filter((facility) => selectedPrefecture === "全国" || facility.prefecture === selectedPrefecture);
  const sorted = [...facilities].sort((a, b) => {
    const aTime = state.visited[a.id]?.at || "";
    const bTime = state.visited[b.id]?.at || "";
    return bTime.localeCompare(aTime);
  });

  if (!sorted.length) {
    el.stampGrid.innerHTML = `<div class="empty-state"><p>候補を追加すると、ここにサ印帳が育ちます。</p></div>`;
    return;
  }

  el.stampGrid.innerHTML = sorted.map((facility) => {
    const visited = state.visited[facility.id];
    const memo = getFacilityMemo(facility.id);
    const date = visited ? formatDate(visited.at) : "未押印";
    return `
      <article class="stamp-tile">
        ${renderStamp(facility, Boolean(visited))}
        <p class="stamp-title">${escapeHtml(facility.name)}</p>
        <span class="stamp-date">${escapeHtml(date)}</span>
        ${memo ? `<p class="stamp-note">${escapeHtml(memo.text)}</p>` : ""}
        <button class="tiny-share-button" type="button" data-action="share-facility" data-id="${escapeAttr(facility.id)}">施設を共有</button>
        ${memo ? `<button class="tiny-share-button" type="button" data-action="share-note" data-id="${escapeAttr(facility.id)}">Xで共有</button>` : ""}
        ${visited ? `<button class="tiny-undo-button" type="button" data-action="unstamp" data-id="${escapeAttr(facility.id)}">取り消す</button>` : ""}
      </article>
    `;
  }).join("");
}

function renderPassportPrefStrip() {
  const countsByPref = countVisitedByPrefecture();
  const candidatesByPref = countEligibleFacilitiesByPrefecture();
  const allVisited = Object.keys(state.visited).length;
  const allEligible = countEligibleFacilities().length;
  const chips = [
    `<button class="pref-chip ${selectedPrefecture === "全国" ? "pref-chip-active" : ""}" type="button" data-passport-prefecture="全国">全国 ${allVisited}/${allEligible}</button>`,
    ...PREFECTURES.map((pref) => {
      const active = selectedPrefecture === pref.name;
      const visitedCount = countsByPref[pref.name] || 0;
      const candidateCount = candidatesByPref[pref.name] || 0;
      const mastered = candidateCount > 0 && visitedCount >= candidateCount;
      return `<button class="pref-chip ${active ? "pref-chip-active" : ""} ${mastered ? "pref-chip-mastered" : ""}" type="button" data-passport-prefecture="${escapeAttr(pref.name)}">${escapeHtml(shortPrefName(pref.name))} ${visitedCount}/${candidateCount}</button>`;
    }),
  ];
  el.passportPrefStrip.innerHTML = chips.join("");
}

function renderTitleProgress() {
  const visitedTotal = Object.keys(state.visited).length;
  const current = getCurrentTitle(visitedTotal);
  const next = getNextTitle(visitedTotal);
  const remaining = next ? next.count - visitedTotal : 0;
  const titlePercent = next
    ? Math.min(100, Math.round(((visitedTotal - current.count) / Math.max(1, next.count - current.count)) * 100))
    : 100;
  const prefProgress = selectedPrefecture === "全国" ? null : getPrefectureMasterProgress(selectedPrefecture);
  const prefCopy = prefProgress
    ? `${selectedPrefecture}: ${prefProgress.visited}/${prefProgress.eligible}湯${prefProgress.mastered ? " / マスター認定済み" : ` / あと${prefProgress.remaining}湯`}`
    : `${getMasteredPrefectures().length}/${PREFECTURES.length}県をマスター`;

  el.titleProgressPanel.innerHTML = `
    <article class="title-card">
      <img src="./assets/achievement-mascot.webp" width="180" height="120" alt="" />
      <div class="title-card-body">
        <span class="title-kicker">現在の称号</span>
        <strong>${escapeHtml(current.title)}</strong>
        <p>${next ? `あと${remaining}湯で${escapeHtml(next.title)}` : "最高称号に到達済み"}</p>
        <div class="title-progress" aria-label="次の称号までの進捗">
          <span style="width:${titlePercent}%"></span>
        </div>
        <em>${escapeHtml(prefCopy)}</em>
      </div>
    </article>
  `;
}

function renderMemoPanel(facility) {
  const memo = getFacilityMemo(facility.id);
  const updatedAt = memo?.updatedAt ? formatDate(memo.updatedAt) : "";
  return `
    <details class="memo-panel" ${memo ? "open" : ""}>
      <summary>
        <span>メモ</span>
        <strong>${memo ? "保存済み" : "追加"}</strong>
      </summary>
      <div class="memo-body">
        ${memo ? `<p class="memo-text">${escapeHtml(memo.text)}</p>` : ""}
        ${updatedAt ? `<span class="memo-date">${escapeHtml(updatedAt)} 更新</span>` : ""}
        <textarea data-note-input="${escapeAttr(facility.id)}" maxlength="240" rows="3" placeholder="感想、気付き、水風呂、再訪したい理由">${memo ? escapeHtml(memo.text) : ""}</textarea>
        <div class="memo-actions">
          <button class="secondary-button" type="button" data-action="save-note" data-id="${escapeAttr(facility.id)}">${memo ? "更新" : "保存"}</button>
          ${memo ? `<button class="undo-button" type="button" data-action="delete-note" data-id="${escapeAttr(facility.id)}">取り消す</button>` : ""}
          ${memo ? `<button class="share-button" type="button" data-action="share-note" data-id="${escapeAttr(facility.id)}">Xで共有</button>` : ""}
        </div>
      </div>
    </details>
  `;
}

function renderDetailMemoPanel(facility) {
  const memo = getFacilityMemo(facility.id);
  const draft = memoDrafts[facility.id];
  const inputValue = draft !== undefined ? draft : (memo?.text || "");
  const updatedAt = memo?.updatedAt ? formatDate(memo.updatedAt) : "";
  const quickTemplates = QUICK_NOTE_TEMPLATES.map((template, index) => `
    <button class="quick-note-button" type="button" data-action="apply-note-template" data-id="${escapeAttr(facility.id)}" data-template-index="${index}">
      <span>${escapeHtml(template.label)}</span>
      <strong>${escapeHtml(template.text)}</strong>
    </button>
  `).join("");
  return `
    <section class="memo-panel detail-memo-panel" aria-label="施設メモ">
      <div class="detail-memo-head">
        <div>
          <p class="eyebrow">MEMO</p>
          <h3>自分用メモ</h3>
        </div>
        ${updatedAt ? `<span>${escapeHtml(updatedAt)} 更新</span>` : `<span>未保存</span>`}
      </div>
      ${memo ? `<p class="memo-text">${escapeHtml(memo.text)}</p>` : ""}
      <div class="quick-note-grid" aria-label="サ活メモテンプレ">
        ${quickTemplates}
      </div>
      <textarea data-note-input="${escapeAttr(facility.id)}" maxlength="240" rows="4" placeholder="感想、気付き、水風呂、再訪したい理由">${escapeHtml(inputValue)}</textarea>
      <div class="memo-actions detail-memo-actions">
        <button class="secondary-button" type="button" data-action="save-note" data-id="${escapeAttr(facility.id)}">${memo ? "メモ更新" : "メモ保存"}</button>
        ${memo ? `<button class="undo-button" type="button" data-action="delete-note" data-id="${escapeAttr(facility.id)}">取り消す</button>` : ""}
        ${memo ? `<button class="share-button" type="button" data-action="share-note" data-id="${escapeAttr(facility.id)}">Xで共有</button>` : ""}
      </div>
    </section>
  `;
}

function applyNoteTemplate(facility, indexValue) {
  const template = QUICK_NOTE_TEMPLATES[Number(indexValue)];
  if (!template) return;
  const textarea = [...el.main.querySelectorAll("[data-note-input]")]
    .find((input) => input.dataset.noteInput === facility.id);
  if (!(textarea instanceof HTMLTextAreaElement)) return;
  const current = textarea.value.trim();
  const next = current ? `${current}\n${template.text}` : template.text;
  const text = next.slice(0, Number(textarea.maxLength) || 240);
  state.facilityMemos[facility.id] = {
    text,
    updatedAt: new Date().toISOString(),
  };
  delete memoDrafts[facility.id];
  invalidateFacilityCaches();
  saveState();
  renderAll();
  const nextTextarea = [...el.main.querySelectorAll("[data-note-input]")]
    .find((input) => input.dataset.noteInput === facility.id);
  if (nextTextarea instanceof HTMLTextAreaElement) {
    nextTextarea.focus();
    nextTextarea.setSelectionRange(nextTextarea.value.length, nextTextarea.value.length);
  }
  showToast(`${template.label}テンプレをメモに保存しました`);
}

function renderReviewPanel(facility) {
  const reviews = getFacilityReviews(facility.id);
  const nickname = profile.nickname || "匿名サウナー";
  return `
    <section class="review-panel" aria-label="口コミ投稿">
      <div class="panel-head">
        <div>
          <p class="eyebrow">REVIEW</p>
          <h3>口コミを投稿</h3>
        </div>
        <span>${reviews.length}件</span>
      </div>
      <div class="review-form">
        <label>
          <span>評価</span>
          <select data-review-rating="${escapeAttr(facility.id)}" aria-label="口コミ評価">
            <option value="5">5 とても良い</option>
            <option value="4">4 良い</option>
            <option value="3">3 普通</option>
            <option value="2">2 合わなかった</option>
            <option value="1">1 要確認</option>
          </select>
        </label>
        <label class="review-text-label">
          <span>${escapeHtml(nickname)}として投稿</span>
          <textarea data-review-input="${escapeAttr(facility.id)}" maxlength="280" rows="3" placeholder="温度、水風呂、外気浴、混雑、再訪したい理由"></textarea>
        </label>
        <button class="primary-button" type="button" data-action="save-review" data-id="${escapeAttr(facility.id)}">口コミ投稿</button>
      </div>
      <div class="review-list" id="reviewList-${escapeAttr(facility.id)}">
        ${reviews.length ? reviews.map((review) => renderReviewCard(facility, review)).join("") : `<p class="review-empty">${reviewsConfigured === false ? "共有口コミは未接続です。投稿するとこの端末に保存されます。" : "最初の口コミを待っています。"}</p>`}
      </div>
    </section>
  `;
}

function renderReviewCard(facility, review) {
  const owned = review.clientId && review.clientId === profile.id;
  return `
    <article class="review-card">
      <div>
        <strong>${"★".repeat(Math.max(1, Math.min(5, Number(review.rating) || 5)))}</strong>
        <span>${escapeHtml(review.nickname || "匿名サウナー")} / ${escapeHtml(formatDate(review.createdAt) || "投稿日不明")}</span>
      </div>
      <p>${escapeHtml(review.text)}</p>
      ${owned ? `<button class="tiny-undo-button" type="button" data-action="delete-review" data-id="${escapeAttr(facility.id)}" data-review-id="${escapeAttr(review.id)}">削除</button>` : ""}
    </article>
  `;
}

function renderStats() {
  const visitedTotal = Object.keys(state.visited).length;
  const prefectureTotal = Object.keys(countVisitedByPrefecture()).length;
  const wishlistTotal = Object.keys(state.wishlist).length;
  const masteredTotal = getMasteredPrefectures().length;
  const currentTitle = getCurrentTitle(visitedTotal).title;

  el.statsGrid.innerHTML = [
    ["押印", `${visitedTotal}`],
    ["訪問県", `${prefectureTotal}`],
    ["行きたい", `${wishlistTotal}`],
    ["称号", currentTitle],
  ].map(([label, value]) => `
    <div class="stat-box ${label === "称号" ? "stat-box-title" : ""}">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");

  const countsByPref = countVisitedByPrefecture();
  const candidatesByPref = countEligibleFacilitiesByPrefecture();
  el.prefBoard.innerHTML = PREFECTURES.map((pref) => {
    const count = countsByPref[pref.name] || 0;
    const candidateCount = candidatesByPref[pref.name] || 0;
    const badge = candidateCount > 0 && count >= candidateCount ? "マスター" : `あと${Math.max(0, candidateCount - count)}`;
    return `
      <button class="pref-progress" type="button" data-prefecture="${escapeAttr(pref.name)}">
        <strong>${escapeHtml(shortPrefName(pref.name))}</strong>
        <span>${count}/${candidateCount}湯 / ${badge}</span>
      </button>
    `;
  }).join("");
  el.prefBoard.insertAdjacentHTML("afterbegin", `
    <button class="pref-progress pref-progress-master" type="button" data-prefecture="全国">
      <strong>県マスター</strong>
      <span>${masteredTotal}/${PREFECTURES.length}県</span>
    </button>
  `);
  renderLeaderboard();
  renderFavoritesPanel();
  renderPromotionCopyGrid();
}

function renderPromotionCopyGrid() {
  if (!el.promotionCopyGrid) return;
  el.promotionCopyGrid.innerHTML = PROMOTION_COPY_OPTIONS.map((item, index) => `
    <button class="promotion-copy-card" type="button" data-app-action="copy-promo" data-copy-index="${index}">
      <span>${escapeHtml(item.label)}</span>
      <strong>${escapeHtml(item.text)}</strong>
    </button>
  `).join("");
}

function renderProfilePanel() {
  el.profileNickname.value = profile.nickname || "";
  el.profileEmail.value = profile.email || "";
  el.profileStatus.textContent = isProfileComplete() ? "参加中" : "未登録";
}

function renderLeaderboard() {
  const visitedTotal = Object.keys(state.visited).length;
  const currentTitle = getCurrentTitle(visitedTotal).title;
  const localEntry = isProfileComplete()
    ? {
      id: profile.id,
      nickname: profile.nickname,
      stamps: visitedTotal,
      title: currentTitle,
      local: true,
      updatedAt: new Date().toISOString(),
    }
    : null;
  const entries = mergeRankingEntries(leaderboardEntries, localEntry);
  const sorted = [...entries]
    .sort((a, b) => b.stamps - a.stamps || a.nickname.localeCompare(b.nickname, "ja"))
    .slice(0, 10);
  const ownRank = localEntry ? sorted.findIndex((entry) => entry.id === profile.id) + 1 : 0;
  const entryAbove = ownRank > 1 ? sorted[ownRank - 2] : null;
  const gapToAbove = entryAbove ? Math.max(1, entryAbove.stamps - visitedTotal + 1) : 0;
  const topTenEdge = sorted.length >= 10 ? sorted[9] : null;
  const gapToTopTen = topTenEdge && !ownRank ? Math.max(1, topTenEdge.stamps - visitedTotal + 1) : 0;

  if (!isProfileComplete()) {
    el.leaderboardSummary.textContent = "登録すると上位10名ランキングに同期されます。メールは表示されません。";
  } else if (rankingConfigured) {
    el.leaderboardSummary.textContent = ownRank > 1
      ? `あなたは${ownRank}位。あと${gapToAbove}湯で${ownRank - 1}位が見えます。`
      : ownRank === 1
        ? `あなたは1位。${visitedTotal}湯で首位キープ中です。`
        : gapToTopTen
          ? `上位10名まであと${gapToTopTen}湯。${visitedTotal}湯で追走中です。`
          : `${visitedTotal}湯で同期中`;
  } else {
    el.leaderboardSummary.textContent = "共有ランキングは未接続です。登録内容は端末内で保持しています。";
  }

  if (!sorted.length) {
    el.leaderboardList.innerHTML = `<div class="leaderboard-empty">最初の参加者を待っています。</div>`;
  } else {
    el.leaderboardList.innerHTML = sorted.map((entry, index) => `
      <article class="leaderboard-row ${entry.id === profile.id ? "is-you" : ""} ${index < 3 ? `is-top-${index + 1}` : ""}">
        <strong>${index + 1}</strong>
        <div>
          <span>${escapeHtml(entry.nickname)}</span>
          <em>${escapeHtml(entry.title)}</em>
        </div>
        <b>${entry.stamps}湯</b>
      </article>
    `).join("");
  }
  const latest = sorted.map((entry) => entry.updatedAt).filter(Boolean).sort().at(-1);
  el.leaderboardUpdatedAt.textContent = rankingConfigured
    ? `10秒ごとに自動更新${latest ? ` / ${formatDateTime(latest)}` : ""}`
    : "Cloudflare KV接続後に全ユーザーランキングが有効になります";
}

function renderShopPanel() {
  el.shopGrid.innerHTML = PRODUCT_RECOMMENDATIONS.map((item) => renderGearCard(item, "compact")).join("");
}

function renderGearPage() {
  const categories = ["すべて", ...uniqueStrings(GEAR_PRODUCTS.map((item) => item.category))];
  if (!categories.includes(selectedGearCategory)) selectedGearCategory = "すべて";
  const products = selectedGearCategory === "すべて"
    ? GEAR_PRODUCTS
    : GEAR_PRODUCTS.filter((item) => item.category === selectedGearCategory);

  el.gearCount.textContent = `${products.length}/${GEAR_PRODUCTS.length}件`;
  el.gearCategoryStrip.innerHTML = categories.map((category) => `
    <button class="pref-chip ${selectedGearCategory === category ? "pref-chip-active" : ""}" type="button" data-gear-category="${escapeAttr(category)}">
      ${escapeHtml(category)}
    </button>
  `).join("");
  el.gearGrid.innerHTML = products.map((item) => renderGearCard(item, "full")).join("");
}

function renderStayPage() {
  if (!el.stayGrid) return;
  el.stayCount.textContent = `${SAUNA_STAY_LINKS.length}件`;
  el.stayGrid.innerHTML = SAUNA_STAY_LINKS.map((item) => `
    <article class="stay-card">
      <span>${escapeHtml(item.label)} / ${escapeHtml(item.prefecture || "全国")}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <strong>${escapeHtml([item.prefecture, item.area].filter(Boolean).join(" / "))}</strong>
      <p>${escapeHtml(item.note)}</p>
      <a href="${escapeAttr(item.url)}" target="_blank" rel="noreferrer">掲載ページを見る</a>
    </article>
  `).join("");
}

function renderContactPage() {
  if (!el.businessPlanGrid || !el.contactTypeGrid) return;
  el.businessPlanGrid.innerHTML = BUSINESS_PLANS.map((plan) => `
    <article class="business-plan-card">
      <span>${escapeHtml(plan.badge)}</span>
      <h3>${escapeHtml(plan.name)}</h3>
      <strong>${escapeHtml(plan.price)}</strong>
      <p>${escapeHtml(plan.detail)}</p>
      <em>${escapeHtml(plan.target)}</em>
      ${plan.paymentUrl
        ? `<a class="business-payment-button" href="${escapeAttr(plan.paymentUrl)}" target="_blank" rel="nofollow sponsored noreferrer">カードで申し込む</a>`
        : `<button class="business-payment-button business-payment-button-inquiry" type="button" data-action="contact-plan" data-plan-name="${escapeAttr(plan.name)}">問い合わせる</button>`}
    </article>
  `).join("");
  if (el.businessValueGrid) {
    el.businessValueGrid.innerHTML = BUSINESS_VALUE_POINTS.map((item) => `
      <article class="business-value-card">
        <span>${escapeHtml(item.label)}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `).join("");
  }
  el.contactTypeGrid.innerHTML = CONTACT_TYPES.map((type, index) => `
    <label class="contact-choice">
      <input type="radio" name="type" value="${escapeAttr(type)}" ${index === 0 ? "checked" : ""} />
      <span>${escapeHtml(type)}</span>
    </label>
  `).join("");
}

function focusContactPlan(planName = "") {
  setView("Contact");
  window.setTimeout(() => {
    const message = el.contactForm?.elements?.message;
    const organization = el.contactForm?.elements?.organization;
    if (message && !message.value.trim()) {
      message.value = `${planName}について相談したいです。\n施設名・エリア:\n掲載したい内容:\n希望開始時期:`;
    }
    organization?.focus();
    track("contact_plan_intent", { plan_name: planName });
  }, 120);
}

function renderFavoritesPanel() {
  if (!el.favoritesList) return;
  const favorites = getFavoriteFacilities();
  if (!favorites.length) {
    el.favoritesList.innerHTML = `
      <div class="favorites-empty">
        <strong>まだお気に入りはありません</strong>
        <span>施設カードの星を押すと、後でここから戻れます。</span>
      </div>
    `;
    return;
  }
  el.favoritesList.innerHTML = favorites.slice(0, 12).map((facility) => `
    <article class="favorite-row" data-detail-card="${escapeAttr(facility.id)}" role="link" tabindex="0" aria-label="${escapeAttr(facility.name)}の詳細を見る">
      <div>
        <strong>${escapeHtml(facility.name)}</strong>
        <span>${escapeHtml(getFacilityMeta(facility))}</span>
      </div>
      <button class="favorite-button is-active" type="button" data-action="favorite" data-id="${escapeAttr(facility.id)}" aria-label="お気に入りから外す" aria-pressed="true"><span aria-hidden="true">★</span></button>
    </article>
  `).join("");
}

function renderSameshiPage() {
  if (!el.sameshiGrid) return;
  const prefecturesWithMeals = new Set(SAMESHI_SPOTS.map((item) => item.prefecture));
  if (!prefecturesWithMeals.has(selectedSameshiPrefecture)) {
    selectedSameshiPrefecture = selectedPrefecture !== "全国" && prefecturesWithMeals.has(selectedPrefecture)
      ? selectedPrefecture
      : "東京都";
  }
  const spots = SAMESHI_SPOTS.filter((item) => item.prefecture === selectedSameshiPrefecture);
  el.sameshiCount.textContent = `${selectedSameshiPrefecture} ${spots.length}件 / 全国${SAMESHI_SPOTS.length}件`;
  el.sameshiPrefStrip.innerHTML = PREFECTURES.map((pref) => {
    const active = selectedSameshiPrefecture === pref.name;
    const count = SAMESHI_SPOTS.filter((item) => item.prefecture === pref.name).length;
    return `
      <button class="pref-chip ${active ? "pref-chip-active" : ""}" type="button" data-sameshi-prefecture="${escapeAttr(pref.name)}">
        ${escapeHtml(shortPrefName(pref.name))} ${count}
      </button>
    `;
  }).join("");
  el.sameshiGrid.innerHTML = spots.map(renderSameshiCard).join("");
  el.sameshiSource.textContent = "リンクは公式ページまたは確認用の参照ページです。未確認の公式URLは推測で追加していません。";
}

function renderSameshiCard(item) {
  const linkKind = item.linkLabel === "公式" ? "source-badge-official" : "";
  const displayImage = getDisplayImageUrl(item.image);
  const imageStyle = displayImage
    ? ` style="background-image: url('${escapeAttr(displayImage)}')"`
    : "";
  return `
    <article class="sameshi-card">
      <div class="meal-photo meal-photo-${escapeAttr(item.photo || "teishoku")}"${imageStyle} aria-hidden="true">
        <span>${escapeHtml(item.category || "サ飯")}</span>
      </div>
      <div class="sameshi-body">
        <div class="card-head">
          <h3 class="facility-name">${escapeHtml(item.spot)}</h3>
          <a class="source-badge ${linkKind}" href="${escapeAttr(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.linkLabel || "参照")}</a>
        </div>
        <p class="facility-meta">${escapeHtml([item.prefecture, item.area].filter(Boolean).join(" / "))}</p>
        <strong>${escapeHtml(item.menu)}</strong>
        <p>${escapeHtml(item.note)}</p>
      </div>
    </article>
  `;
}

function renderGuidePage() {
  const categories = ["すべて", ...uniqueStrings(SAUNA_ARTICLES.map((item) => item.category))];
  if (!categories.includes(selectedArticleCategory)) selectedArticleCategory = "すべて";
  const articles = selectedArticleCategory === "すべて"
    ? SAUNA_ARTICLES
    : SAUNA_ARTICLES.filter((item) => item.category === selectedArticleCategory);

  el.articleCount.textContent = `${articles.length}/${SAUNA_ARTICLES.length}記事`;
  el.articleCategoryStrip.innerHTML = categories.map((category) => `
    <button class="pref-chip ${selectedArticleCategory === category ? "pref-chip-active" : ""}" type="button" data-article-category="${escapeAttr(category)}">
      ${escapeHtml(category)}
    </button>
  `).join("");
  renderGuideGearRail(articles);
  el.articleList.innerHTML = articles.map(renderArticleCard).join("");
  el.guideReferences.innerHTML = SAUNA_REFERENCES.map((item) => `
    <a href="${escapeAttr(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a>
  `).join("");
  renderGuideFaq();
}

function renderGuideFaq() {
  if (!el.guideFaq) return;
  el.guideFaq.innerHTML = GUIDE_FAQS.map((item, index) => `
    <article class="faq-card">
      <details ${index < 2 ? "open" : ""}>
        <summary>${escapeHtml(item.question)}</summary>
        <p>${escapeHtml(item.answer)}</p>
      </details>
    </article>
  `).join("");
}

function renderGuideGearRail(articles) {
  const products = getGuideGearProducts(articles).slice(0, 4);
  el.guideGearRail.innerHTML = `
    <div class="guide-gear-head">
      <div>
        <span>READ TO GEAR</span>
        <strong>読んだら、次のサウナを快適にする</strong>
      </div>
      <button class="mini-button" type="button" data-open-view="Gear">Gear 30件</button>
    </div>
    <div class="guide-gear-grid">
      ${products.map((item) => renderGuideGearCard(item)).join("")}
    </div>
  `;
}

function renderGearCard(item, mode) {
  const links = getGearLinks(item);
  return `
    <article class="shop-card ${mode === "full" ? "gear-card-full" : ""}">
      <span>${escapeHtml(item.category)}</span>
      <h4>${escapeHtml(item.title)}</h4>
      <p>${escapeHtml(item.reason)}</p>
      <em>${escapeHtml(item.proof)}</em>
      <div class="shop-card-actions">
        <a href="${escapeAttr(links.amazon)}" target="_blank" rel="nofollow sponsored noreferrer" data-affiliate-vendor="amazon" data-affiliate-item="${escapeAttr(item.title)}" data-affiliate-surface="${escapeAttr(mode)}">Amazon</a>
        <a href="${escapeAttr(links.rakuten)}" target="_blank" rel="nofollow sponsored noreferrer" data-affiliate-vendor="rakuten" data-affiliate-item="${escapeAttr(item.title)}" data-affiliate-surface="${escapeAttr(mode)}">楽天 高評価順</a>
      </div>
    </article>
  `;
}

function renderArticleCard(article, index) {
  const products = getArticleGearProducts(article).slice(0, 2);
  return `
    <article class="article-card">
      <details ${index === 0 ? "open" : ""}>
        <summary>
          <span>${escapeHtml(article.category)}</span>
          <strong>${escapeHtml(article.title)}</strong>
        </summary>
        <div class="article-body">
          <p>${escapeHtml(article.lead)}</p>
          <ul>
            ${article.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
          </ul>
          <div class="article-action">
            <b>実践</b>
            <span>${escapeHtml(article.action)}</span>
          </div>
          <div class="article-caution">
            <b>注意</b>
            <span>${escapeHtml(article.caution)}</span>
          </div>
          <div class="article-gear">
            <div class="article-gear-head">
              <b>関連Gear</b>
              <button class="mini-button" type="button" data-open-view="Gear">一覧へ</button>
            </div>
            ${products.map((item) => renderArticleGearItem(item)).join("")}
          </div>
        </div>
      </details>
    </article>
  `;
}

function renderGuideGearCard(item) {
  const links = getGearLinks(item);
  return `
    <article>
      <span>${escapeHtml(item.category)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <div>
        <a href="${escapeAttr(links.amazon)}" target="_blank" rel="nofollow sponsored noreferrer" data-affiliate-vendor="amazon" data-affiliate-item="${escapeAttr(item.title)}" data-affiliate-surface="guide">Amazon</a>
        <a href="${escapeAttr(links.rakuten)}" target="_blank" rel="nofollow sponsored noreferrer" data-affiliate-vendor="rakuten" data-affiliate-item="${escapeAttr(item.title)}" data-affiliate-surface="guide">楽天</a>
      </div>
    </article>
  `;
}

function renderArticleGearItem(item) {
  const links = getGearLinks(item);
  return `
    <div class="article-gear-item">
      <span>${escapeHtml(item.title)}</span>
      <div>
        <a href="${escapeAttr(links.amazon)}" target="_blank" rel="nofollow sponsored noreferrer" data-affiliate-vendor="amazon" data-affiliate-item="${escapeAttr(item.title)}" data-affiliate-surface="article">Amazon</a>
        <a href="${escapeAttr(links.rakuten)}" target="_blank" rel="nofollow sponsored noreferrer" data-affiliate-vendor="rakuten" data-affiliate-item="${escapeAttr(item.title)}" data-affiliate-surface="article">楽天</a>
      </div>
    </div>
  `;
}

function renderCompactGearLink(item) {
  const links = getGearLinks(item);
  return `
    <article>
      <span>${escapeHtml(item.category)}</span>
      <strong>${escapeHtml(item.title)}</strong>
      <div>
        <a href="${escapeAttr(links.amazon)}" target="_blank" rel="nofollow sponsored noreferrer" data-affiliate-vendor="amazon" data-affiliate-item="${escapeAttr(item.title)}" data-affiliate-surface="compact">Amazon</a>
        <a href="${escapeAttr(links.rakuten)}" target="_blank" rel="nofollow sponsored noreferrer" data-affiliate-vendor="rakuten" data-affiliate-item="${escapeAttr(item.title)}" data-affiliate-surface="compact">楽天</a>
      </div>
    </article>
  `;
}

function getFacilityGearProducts(facility) {
  const features = getFacilityFeatures(facility);
  const categories = new Set(["水分補給", "サウナハット", "マット"]);
  if (features.some((feature) => ["テントサウナ", "薪サウナ", "バレルサウナ"].includes(feature))) {
    categories.add("ウェア");
    categories.add("足元");
    categories.add("バッグ");
  }
  if (features.some((feature) => ["水着必須", "男女共用"].includes(feature))) categories.add("ウェア");
  if (features.some((feature) => ["セルフロウリュ", "アロマロウリュ", "熱波師あり"].includes(feature))) categories.add("香り");
  if (features.some((feature) => ["個室", "貸切可"].includes(feature))) categories.add("香り");
  if (features.includes("宿泊可")) categories.add("遠征");
  return uniqueProducts([...categories].flatMap(productsByCategory));
}

function getGuideGearProducts(articles) {
  if (selectedArticleCategory === "すべて") return PRODUCT_RECOMMENDATIONS;
  const categories = uniqueStrings(articles.map((article) => article.category));
  const picked = categories.flatMap((category) => getProductsForArticleCategory(category));
  return uniqueProducts(picked.length ? picked : PRODUCT_RECOMMENDATIONS);
}

function getArticleGearProducts(article) {
  const byCategory = getProductsForArticleCategory(article.category);
  if (byCategory.length) return byCategory;
  const text = normalizeText([article.title, article.lead, article.action].join(" "));
  if (/水分|水風呂|汗|夏|遠征|移動/.test(text)) return productsByCategory("水分補給");
  if (/ハット|髪|頭|熱/.test(text)) return productsByCategory("サウナハット");
  if (/マット|座面|衛生/.test(text)) return productsByCategory("マット");
  if (/タオル|拭く|洗う/.test(text)) return productsByCategory("タオル");
  return PRODUCT_RECOMMENDATIONS;
}

function getProductsForArticleCategory(category) {
  const map = {
    基本: ["サウナハット", "マット", "タオル", "水分補給"],
    安全: ["水分補給", "視界", "計測"],
    水風呂: ["水分補給", "タオル"],
    休憩: ["サウナハット", "タオル", "水分補給"],
    水分: ["水分補給", "ボトル"],
    マナー: ["タオル", "マット", "バッグ"],
    ロウリュ: ["香り", "サウナハット", "水分補給"],
    道具: ["サウナハット", "マット", "タオル", "バッグ", "視界"],
    施設選び: ["バッグ", "タオル", "水分補給", "視界"],
    種類: ["サウナハット", "マット", "水分補給"],
    体調: ["水分補給", "計測"],
    季節: ["水分補給", "ウェア"],
    女性: ["ケア", "タオル", "バッグ"],
    記録: ["計測", "遠征"],
    用語: ["水分補給", "サウナハット"],
    混雑: ["耳栓", "バッグ"],
    ソロ: ["バッグ", "リラックス"],
    遠征: ["遠征", "バッグ", "水分補給"],
    サ飯: ["水分補給"],
    買い物: ["サウナハット", "マット", "タオル", "水分補給"],
    チェック: ["水分補給", "タオル", "マット"],
    上達: ["計測", "水分補給"],
  };
  const productCategories = map[category] || [];
  const firstPicks = productCategories.map((item) => productsByCategory(item)[0]).filter(Boolean);
  return uniqueProducts([...firstPicks, ...productCategories.flatMap(productsByCategory)]);
}

function productsByCategory(category) {
  if (category === "耳栓") {
    return GEAR_PRODUCTS.filter((item) => /耳栓/.test(item.title));
  }
  return GEAR_PRODUCTS.filter((item) => item.category === category);
}

function uniqueProducts(products) {
  const seen = new Set();
  return products.filter((item) => {
    if (!item || seen.has(item.title)) return false;
    seen.add(item.title);
    return true;
  });
}

function renderPrefSelect() {
  el.prefSelect.innerHTML = PREFECTURES.map((pref) => `<option value="${escapeAttr(pref.name)}">${escapeHtml(pref.name)}</option>`).join("");
}

function renderFeatureControls() {
  renderFeatureFilterGrid();
  el.addFeatureGrid.innerHTML = FEATURE_GROUPS.map((group) => `
    <div class="feature-group" aria-label="${escapeAttr(group.label)}">
      ${group.options.map((feature) => `
        <label class="feature-option">
          <input type="checkbox" name="features" value="${escapeAttr(feature)}" />
          <span>${escapeHtml(feature)}</span>
        </label>
      `).join("")}
    </div>
  `).join("");
}

function renderFeatureFilterGrid() {
  const selectedCount = selectedFeatureFilters.size;
  el.featureFilterCount.textContent = selectedCount ? `${selectedCount}件選択中` : "指定なし";
  el.featureFilterGrid.innerHTML = FEATURE_OPTIONS.map((feature) => {
    const active = selectedFeatureFilters.has(feature);
    return `<button class="feature-chip ${active ? "is-active" : ""}" type="button" data-feature-filter="${escapeAttr(feature)}" aria-pressed="${active}">${escapeHtml(feature)}</button>`;
  }).join("");
}

function renderSearchClearButton() {
  el.searchClearButton.hidden = !el.searchInput.value;
}

function hydrateSearchFromUrl() {
  if (!location.protocol.startsWith("http")) return;
  const query = new URLSearchParams(location.search).get("q");
  if (!query) return;
  el.searchInput.value = query.slice(0, 80);
  setSearchTerm(el.searchInput.value);
  moveToSearchPrefecture(el.searchInput.value);
}

function renderStamp(facility, unlocked) {
  const style = STAMP_STYLES[facility.trait] || STAMP_STYLES.custom;
  const className = unlocked ? "stamp-art" : "stamp-art locked";
  const inlineStyle = `--stamp-color:${style.color};--stamp-bg:${style.bg};`;
  return `
    <div class="${className}" style="${inlineStyle}" aria-label="${escapeAttr(facility.name)}のスタンプ">
      <span class="stamp-kanji">${escapeHtml(style.kanji)}</span>
    </div>
  `;
}

function stampFacility(facility) {
  const status = getFacilityStatus(facility);
  if (state.visited[facility.id] || status) {
    if (status) showToast(`${facility.name} は${status.badge}のため押印できません`);
    return;
  }
  const beforeVisitedTotal = Object.keys(state.visited).length;
  const beforeTitle = getCurrentTitle(beforeVisitedTotal);
  const wasPrefMastered = isPrefectureMastered(facility.prefecture);
  const aroma = AROMAS[Math.floor(Math.random() * AROMAS.length)];
  state.visited[facility.id] = {
    at: new Date().toISOString(),
    aroma,
  };
  delete state.wishlist[facility.id];
  saveState();
  track("stamp_add", { facility_id: facility.id, prefecture: facility.prefecture || "", facility_name: facility.name });
  queueRankingSync();
  if (settings.vibration && "vibrate" in navigator) navigator.vibrate([20, 30, 20]);
  renderAll();
  const afterVisitedTotal = beforeVisitedTotal + 1;
  const afterTitle = getCurrentTitle(afterVisitedTotal);
  const prefMastered = !wasPrefMastered && isPrefectureMastered(facility.prefecture);
  showToast(`${facility.name} を押印。今日の余韻は${aroma}`);
  if (prefMastered) {
    window.setTimeout(() => showAchievement({
      eyebrow: "PREFECTURE MASTER",
      title: `${facility.prefecture}のマスターサウナー認定`,
      body: "開業予定・要確認を除くサ印をすべて集めました。",
    }), 220);
  } else if (afterTitle.count > beforeTitle.count) {
    window.setTimeout(() => showAchievement({
      eyebrow: "NEW TITLE",
      title: `${afterTitle.title} 認定`,
      body: `${afterVisitedTotal}湯のサ印を集めました。次の一湯がまた近づいています。`,
    }), 220);
  }
}

function unstampFacility(facility) {
  if (!state.visited[facility.id]) return;
  delete state.visited[facility.id];
  saveState();
  track("stamp_remove", { facility_id: facility.id, prefecture: facility.prefecture || "", facility_name: facility.name });
  queueRankingSync();
  renderAll();
  showToast(`${facility.name} の押印を取り消しました`);
}

function toggleWishlist(facility) {
  if (state.wishlist[facility.id]) {
    delete state.wishlist[facility.id];
    showToast(`${facility.name} を候補から外しました`);
    track("wishlist_remove", { facility_id: facility.id, prefecture: facility.prefecture || "" });
  } else {
    state.wishlist[facility.id] = { at: new Date().toISOString() };
    showToast(`${facility.name} を行きたい候補に入れました`);
    track("wishlist_add", { facility_id: facility.id, prefecture: facility.prefecture || "" });
  }
  saveState();
  renderAll();
}

function toggleFavorite(facility) {
  if (state.favorites[facility.id]) {
    delete state.favorites[facility.id];
    showToast(`${facility.name} をお気に入りから外しました`);
    track("favorite_remove", { facility_id: facility.id, prefecture: facility.prefecture || "" });
  } else {
    state.favorites[facility.id] = { at: new Date().toISOString() };
    showToast(`${facility.name} をお気に入りに追加しました`);
    track("favorite_add", { facility_id: facility.id, prefecture: facility.prefecture || "" });
  }
  saveState();
  renderAll();
}

function focusQuestFacility(facility) {
  selectedPrefecture = facility.prefecture;
  activeFilter = "all";
  visibleLimit = 36;
  el.searchInput.value = facility.name;
  renderSearchClearButton();
  setSearchTerm(facility.name);
  setView("Explore");
  showToast(`${facility.name} を表示しました`);
}

function addQuestWishlist(facility) {
  if (state.wishlist[facility.id]) {
    showToast(`${facility.name} はすでに行きたい候補です`);
    return;
  }
  state.wishlist[facility.id] = { at: new Date().toISOString(), quest: true };
  saveState();
  renderAll();
  showToast(`${facility.name} を行きたいに入れました`);
}

function drawQuestFacility() {
  const pool = getQuestPool();
  if (!pool.length) {
    questFacilityId = "";
    renderQuestPanel();
    showToast("今の条件で未押印候補がありません");
    return;
  }
  const currentIndex = pool.findIndex((facility) => facility.id === questFacilityId);
  const nextIndex = pool.length === 1 ? 0 : (Math.floor(Math.random() * (pool.length - 1)) + currentIndex + 1) % pool.length;
  questFacilityId = pool[nextIndex].id;
  renderQuestPanel();
  showToast(`${pool[nextIndex].name} が出ました`);
}

function openSameshiForFacility(facility) {
  selectedSameshiPrefecture = facility?.prefecture || (selectedPrefecture !== "全国" ? selectedPrefecture : selectedSameshiPrefecture);
  setView("Sameshi");
}

function isInteractiveCardTarget(target) {
  return Boolean(target?.closest("button, a, input, textarea, select, label, summary, details, [data-no-card-open]"));
}

function saveFacilityMemo(facility, button) {
  const panel = button.closest(".memo-panel");
  const input = [...(panel?.querySelectorAll("[data-note-input]") || [])]
    .find((item) => item.dataset.noteInput === facility.id);
  const text = input?.value.trim() || "";
  if (!text) {
    deleteFacilityMemo(facility);
    return;
  }
  state.facilityMemos[facility.id] = {
    text,
    updatedAt: new Date().toISOString(),
  };
  delete memoDrafts[facility.id];
  invalidateFacilityCaches();
  saveState();
  renderAll();
  showToast(`${facility.name} のメモを保存しました`);
}

function deleteFacilityMemo(facility) {
  delete memoDrafts[facility.id];
  if (!state.facilityMemos[facility.id]) {
    renderAll();
    return;
  }
  delete state.facilityMemos[facility.id];
  invalidateFacilityCaches();
  saveState();
  renderAll();
  showToast(`${facility.name} のメモを取り消しました`);
}

async function loadFacilityReviews(facilityId) {
  if (!facilityId || reviewsConfigured === false || IS_STATIC_LOCAL_PREVIEW || facilityReviewLoadedIds.has(facilityId)) return;
  facilityReviewLoadedIds.add(facilityId);
  try {
    const url = new URL(REVIEWS_ENDPOINT, document.baseURI || location.href);
    url.searchParams.set("facilityId", facilityId);
    const response = await fetch(url.href, { headers: { accept: "application/json" } });
    if (!response.ok) throw new Error("reviews-load-failed");
    const payload = await response.json();
    reviewsConfigured = payload.configured !== false;
    facilityReviews[facilityId] = normalizeReviews(payload.reviews || []);
    if (activeView === "Facility" && activeFacilityId === facilityId) renderFacilityDetail();
  } catch {
    reviewsConfigured = false;
  }
}

async function saveFacilityReview(facility, button) {
  const panel = button.closest(".review-panel");
  const text = panel?.querySelector(`[data-review-input="${cssEscape(facility.id)}"]`)?.value.trim() || "";
  const rating = Number(panel?.querySelector(`[data-review-rating="${cssEscape(facility.id)}"]`)?.value || 5);
  if (!text) {
    showToast("口コミ本文を入力してください");
    return;
  }
  const review = {
    id: `local-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    facilityId: facility.id,
    clientId: profile.id || createClientId(),
    nickname: profile.nickname || "匿名サウナー",
    rating: Math.max(1, Math.min(5, Math.floor(rating) || 5)),
    text: text.slice(0, 280),
    createdAt: new Date().toISOString(),
  };

  if (reviewsConfigured !== false && !IS_STATIC_LOCAL_PREVIEW) {
    try {
      const response = await fetch(REVIEWS_ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify(review),
      });
      if (!response.ok) throw new Error("review-save-failed");
      const payload = await response.json();
      reviewsConfigured = payload.configured !== false;
      facilityReviews[facility.id] = normalizeReviews(payload.reviews || []);
      facilityReviewLoadedIds.add(facility.id);
      renderAll();
      showToast(`${facility.name} に口コミを投稿しました`);
      return;
    } catch {
      reviewsConfigured = false;
    }
  }

  const localReviews = normalizeReviews([review, ...(state.facilityReviews[facility.id] || [])]).slice(0, 20);
  state.facilityReviews[facility.id] = localReviews;
  saveState();
  renderAll();
  showToast(`${facility.name} の口コミをこの端末に保存しました`);
}

async function deleteFacilityReview(facility, reviewId) {
  if (!reviewId) return;
  if (reviewsConfigured && !IS_STATIC_LOCAL_PREVIEW) {
    try {
      const url = new URL(REVIEWS_ENDPOINT, document.baseURI || location.href);
      url.searchParams.set("facilityId", facility.id);
      url.searchParams.set("reviewId", reviewId);
      url.searchParams.set("clientId", profile.id || "");
      const response = await fetch(url.href, { method: "DELETE", headers: { accept: "application/json" } });
      if (response.ok) {
        const payload = await response.json();
        facilityReviews[facility.id] = normalizeReviews(payload.reviews || []);
        renderAll();
        showToast("口コミを削除しました");
        return;
      }
    } catch {
      reviewsConfigured = false;
    }
  }
  const next = (state.facilityReviews[facility.id] || []).filter((review) => review.id !== reviewId);
  state.facilityReviews[facility.id] = next;
  saveState();
  renderAll();
  showToast("口コミを削除しました");
}

function getFacilityReviews(facilityId) {
  return normalizeReviews(facilityReviews[facilityId] || state.facilityReviews[facilityId] || []);
}

async function submitContactForm(event) {
  event.preventDefault();
  const form = new FormData(el.contactForm);
  const payload = {
    type: String(form.get("type") || "").trim(),
    organization: String(form.get("organization") || "").trim(),
    name: String(form.get("name") || "").trim(),
    email: String(form.get("email") || "").trim(),
    website: String(form.get("website") || "").trim(),
    prefecture: String(form.get("prefecture") || "").trim(),
    message: String(form.get("message") || "").trim(),
    page: location.href,
  };
  if (!payload.type || !payload.email || !payload.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    setContactStatus("種別、返信先メール、内容を確認してください。", true);
    return;
  }

  const submitButton = el.contactForm.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = true;
  setContactStatus("送信しています。", false);

  if (!IS_STATIC_LOCAL_PREVIEW) {
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("contact-save-failed");
      const result = await response.json();
      if (result.configured !== false) {
        el.contactForm.reset();
        renderContactPage();
        setContactStatus("送信しました。返信が必要な内容は確認後に連絡します。", false);
        track("contact_submit", { type: payload.type, configured: true });
        showToast("お問い合わせを送信しました");
        return;
      }
    } catch {
      // Fall back to a prefilled mail client below.
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  }

  if (submitButton) submitButton.disabled = false;
  openContactMail(payload);
  track("contact_submit", { type: payload.type, configured: false });
  setContactStatus("保存先が未接続のため、問い合わせ本文をコピーできる形で表示しました。", false);
}

function setContactStatus(message, isError) {
  if (!el.contactStatus) return;
  el.contactStatus.textContent = message;
  el.contactStatus.classList.toggle("is-error", Boolean(isError));
}

function openContactMail(payload) {
  const body = [
    `お問い合わせ種別: ${payload.type}`,
    `事業者名・施設名: ${payload.organization || "未入力"}`,
    `担当者名: ${payload.name || "未入力"}`,
    `返信先: ${payload.email}`,
    `Web/予約ページ: ${payload.website || "未入力"}`,
    `都道府県・エリア: ${payload.prefecture || "未入力"}`,
    "",
    payload.message,
    "",
    `送信ページ: ${payload.page}`,
  ].join("\n");
  navigator.clipboard?.writeText(body).catch(() => null);
  window.prompt("お問い合わせ本文をコピーして、運営者の連絡先へ送ってください", body);
}

function shareFacilityMemo(facility) {
  const memo = getFacilityMemo(facility.id);
  if (!memo) {
    showToast("共有するメモがありません");
    return;
  }
  const text = [
    `サ印帳: ${facility.name}`,
    [facility.prefecture, facility.city].filter(Boolean).join(" / "),
    memo.text,
    "#サ印帳 #サウナ",
  ].filter(Boolean).join("\n");
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  track("share", { method: "x_note", facility_id: facility.id, prefecture: facility.prefecture || "" });
  window.open(url, "_blank", "noopener,noreferrer");
}

function shareFacility(facility) {
  const detail = [facility.prefecture, facility.city].filter(Boolean).join(" / ");
  const address = getFacilityAddress(facility);
  const tags = normalizeFeatures(facility.tags || []).slice(0, 4);
  const text = [
    `サ印帳でおすすめ: ${facility.name}`,
    detail,
    address ? `住所: ${address}` : "",
    tags.length ? `特徴: ${tags.join("・")}` : "",
    "#サ印帳 #サウナ",
  ].filter(Boolean).join("\n");
  const params = new URLSearchParams({ text });
  params.set("url", getFacilityDetailUrl(facility));
  track("share", { method: "x_facility", facility_id: facility.id, prefecture: facility.prefecture || "" });
  window.open(`https://twitter.com/intent/tweet?${params.toString()}`, "_blank", "noopener,noreferrer");
}

async function shareApp() {
  const shareData = {
    title: "サ印帳 | サウナスタンプラリー",
    text: APP_SHARE_TEXT,
    url: getCurrentShareUrl(),
  };
  if (navigator.share) {
    try {
      await navigator.share(shareData);
      track("share", { method: "webshare", view: activeView });
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
    }
  }
  const params = new URLSearchParams({ text: shareData.text, url: shareData.url });
  track("share", { method: "x_app", view: activeView });
  window.open(`https://twitter.com/intent/tweet?${params.toString()}`, "_blank", "noopener,noreferrer");
}

async function copyAppUrl() {
  const url = getCurrentShareUrl();
  try {
    await navigator.clipboard.writeText(url);
    track("share", { method: "copy", view: activeView });
    showToast("URLをコピーしました");
  } catch {
    window.prompt("URLをコピーしてください", url);
  }
}

async function copyPromotionText(indexValue) {
  const index = Number(indexValue);
  const item = PROMOTION_COPY_OPTIONS[index];
  if (!item) return;
  try {
    await navigator.clipboard.writeText(item.text);
    showToast(`${item.label}向け告知文をコピーしました`);
  } catch {
    window.prompt("告知文をコピーしてください", item.text);
  }
}

function shareToLine() {
  const url = new URL("https://social-plugins.line.me/lineit/share");
  url.searchParams.set("url", getCurrentShareUrl());
  track("share", { method: "line", view: activeView });
  window.open(url.href, "_blank", "noopener,noreferrer");
}

function getCurrentShareUrl() {
  if (location.protocol.startsWith("http")) return location.href;
  return APP_URL;
}

async function loadSharedFacilities() {
  try {
    const response = await fetch(SHARED_FACILITIES_ENDPOINT, { headers: { accept: "application/json" } });
    if (!response.ok) return;
    const payload = await response.json();
    sharedFacilitiesConfigured = payload.configured !== false;
    sharedFacilities = normalizeSharedFacilities(payload.facilities || []);
    invalidateFacilityCaches();
    renderAll();
  } catch {
    sharedFacilitiesConfigured = false;
  } finally {
    renderSharedHint();
  }
}

async function publishSharedFacility(facility) {
  const response = await fetch(SHARED_FACILITIES_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      name: facility.name,
      prefecture: facility.prefecture,
      city: facility.city,
      address: facility.address || "",
      features: facility.features || [],
    }),
  });
  if (!response.ok) throw new Error("shared-save-failed");
  const payload = await response.json();
  return { facility: normalizeSharedFacility(payload.facility), duplicate: Boolean(payload.duplicate) };
}

function mergeSharedFacility(facility) {
  if (!facility) return;
  const key = facilityDuplicateKey(facility);
  sharedFacilities = [
    ...sharedFacilities.filter((item) => facilityDuplicateKey(item) !== key),
    facility,
  ].sort((a, b) => a.prefecture.localeCompare(b.prefecture, "ja") || a.name.localeCompare(b.name, "ja"));
  invalidateFacilityCaches();
}

function normalizeSharedFacilities(values) {
  if (!Array.isArray(values)) return [];
  const normalized = values.map(normalizeSharedFacility).filter(Boolean);
  return dedupeFacilities(normalized);
}

function normalizeSharedFacility(value) {
  if (!value || typeof value !== "object") return null;
  const name = String(value.name || "").trim().slice(0, 64);
  const prefecture = String(value.prefecture || "").trim();
  if (!name || !PREFECTURES.some((pref) => pref.name === prefecture)) return null;
  const features = normalizeFeatures(value.features || value.tags || []);
  return {
    id: typeof value.id === "string" ? value.id : `shared-${Date.now().toString(36)}`,
    name,
    prefecture,
    city: String(value.city || "").trim().slice(0, 40),
    address: String(value.address || "").trim().slice(0, 96),
    trait: value.trait || inferTraitFromFeatures(features),
    tags: ["みんなの追加", ...features],
    features,
    source: "みんなの追加",
    sourceUrl: "",
    shared: true,
  };
}

function renderSharedHint() {
  if (!el.sharedAddHint) return;
  el.sharedAddHint.textContent = sharedFacilitiesConfigured
    ? "追加した施設は、公開候補として他のユーザーにも表示されます。"
    : "共有ストレージ未接続時は、この端末の候補として保存します。";
}

async function reloadAppFresh() {
  try {
    if ("serviceWorker" in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.update().catch(() => null)));
    }
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => key.startsWith("saincho-")).map((key) => caches.delete(key)));
    }
  } catch {
    // Reload still helps when cache APIs are unavailable or blocked.
  } finally {
    location.replace(`${location.pathname}${location.search ? `${location.search}&` : "?"}refresh=${Date.now()}${location.hash}`);
  }
}

function getFilteredFacilities() {
  const needsSearchIndex = searchNeedles.length > 0 || selectedFeatureFilters.size > 0;
  if (!needsSearchIndex) {
    return getFacilities().filter((facility) => {
      const selected = selectedPrefecture === "全国" || facility.prefecture === selectedPrefecture;
      const matchesFilter =
        activeFilter === "all" ||
        (activeFilter === "unvisited" && !state.visited[facility.id]) ||
        (activeFilter === "wishlist" && state.wishlist[facility.id]) ||
        (activeFilter === "favorite" && state.favorites[facility.id]);
      return selected && matchesFilter;
    });
  }

  return getFacilitySearchRecords().filter(({ facility, features, haystack }) => {
    const selected = selectedPrefecture === "全国" || facility.prefecture === selectedPrefecture;
    const matchesSearch = !searchNeedles.length || matchesSearchBlob(haystack, searchNeedles);
    const matchesFeatures = [...selectedFeatureFilters].every((feature) => features.includes(feature));
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "unvisited" && !state.visited[facility.id]) ||
      (activeFilter === "wishlist" && state.wishlist[facility.id]) ||
      (activeFilter === "favorite" && state.favorites[facility.id]);
    return selected && matchesSearch && matchesFeatures && matchesFilter;
  }).map(({ facility }) => facility);
}

function getFacilities() {
  if (facilitiesCache) return facilitiesCache;
  const custom = state.customFacilities.map((facility) => ({
    ...facility,
    features: normalizeFeatures(facility.features || facility.tags || []),
    trait: facility.trait || inferTraitFromFeatures(facility.features || facility.tags || []),
    tags: facility.tags?.length ? facility.tags : ["マイサウナ"],
  }));
  facilitiesCache = dedupeFacilities([...SEED_FACILITIES, ...sharedFacilities, ...custom]);
  return facilitiesCache;
}

function getFavoriteFacilities() {
  return getFacilities()
    .filter((facility) => state.favorites[facility.id])
    .sort((a, b) => {
      const aTime = state.favorites[a.id]?.at || "";
      const bTime = state.favorites[b.id]?.at || "";
      return bTime.localeCompare(aTime) || a.name.localeCompare(b.name, "ja");
    });
}

function getFacilitySearchRecords() {
  const memoSignature = getFacilityMemoSearchSignature();
  if (facilitySearchCache && facilitySearchMemoSignature === memoSignature) return facilitySearchCache;
  facilitySearchMemoSignature = memoSignature;
  facilitySearchCache = getFacilities().map((facility) => {
    const memo = getFacilityMemo(facility.id);
    const features = getFacilityFeatures(facility);
    const haystack = buildSearchBlob([
      facility.name,
      facility.prefecture,
      facility.city,
      getFacilityAddress(facility),
      getFacilityMapSearchText(facility),
      facility.source,
      facility.note,
      facility.access,
      facility.facilityType,
      memo?.text,
      ...features,
      ...features.flatMap((feature) => FEATURE_ALIASES[feature] || []),
      ...(facility.tags || []),
    ]);
    return {
      facility,
      features,
      haystack,
      nameBlob: buildSearchBlob([facility.name]),
    };
  });
  return facilitySearchCache;
}

function getFacilityMemoSearchSignature() {
  return Object.entries(state.facilityMemos)
    .map(([id, memo]) => `${id}:${memo?.updatedAt || ""}:${memo?.text || ""}`)
    .sort()
    .join("|");
}

function invalidateFacilityCaches() {
  facilitiesCache = null;
  facilitySearchCache = null;
  facilitySearchMemoSignature = "";
  facilityFeatureCache = new Map();
}

function getFacilityMeta(facility) {
  return [facility.prefecture, facility.city, getFacilitySourceLabel(facility)].filter(Boolean).join(" / ");
}

function getFacilityAddress(facility) {
  return String(facility.address || "").trim();
}

function getFacilityAreaLabel(facility) {
  return [facility.prefecture, facility.city].filter(Boolean).join(" / ");
}

function getFacilityCoordinate(facility) {
  const lat = Number(facility.lat);
  const lng = Number(facility.lng);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return "";
  return `${lat},${lng}`;
}

function getFacilityMapSearchText(facility) {
  const address = getFacilityAddress(facility);
  if (address) return [facility.name, address].filter(Boolean).join(" ");
  const coordinate = getFacilityCoordinate(facility);
  if (coordinate) return coordinate;
  return [
    facility.name,
    facility.prefecture,
    facility.city,
  ].filter(Boolean).join(" ");
}

function getFacilityDirectionsUrl(facility) {
  const destination = getFacilityCoordinate(facility) || getFacilityMapSearchText(facility);
  const url = new URL("https://www.google.com/maps/dir/");
  url.searchParams.set("api", "1");
  url.searchParams.set("destination", destination || facility.name);
  return url.href;
}

function getNearbySameshiUrl(facility) {
  const query = [
    "飲食店",
    facility.name,
    getFacilityAreaLabel(facility),
    "周辺",
  ].filter(Boolean).join(" ");
  const url = new URL("https://www.google.com/maps/search/");
  url.searchParams.set("api", "1");
  url.searchParams.set("query", query || `${facility.name} 飲食店`);
  return url.href;
}

function renderLodgingLinks(facility) {
  return getLodgingLinks(facility).map((item) => `
    <a href="${escapeAttr(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a>
  `).join("");
}

function getLodgingLinks(facility) {
  const query = getLodgingSearchQuery(facility);
  return [
    ["楽天トラベル候補", buildSearchUrl(`site:travel.rakuten.co.jp ${query} 楽天トラベル`)],
    ["一休", `https://www.ikyu.com/search?kwd=${encodeURIComponent(query)}`],
    ["Agoda候補", buildSearchUrl(`site:agoda.com ${query} Agoda`)],
  ].map(([label, url]) => ({ label, url }));
}

function getLodgingSearchQuery(facility) {
  return [
    facility.name,
    getFacilityAreaLabel(facility),
    "近くの宿 ホテル",
  ].filter(Boolean).join(" ");
}

function buildSearchUrl(query) {
  const url = new URL("https://www.google.com/search");
  url.searchParams.set("q", query);
  return url.href;
}

function getFacilitySourceLabel(facility) {
  const source = String(facility.source || "").trim();
  const url = String(facility.sourceUrl || "");
  if (/指定リスト|地域照合|営業要確認/.test(source)) {
    if (/sauna-ikitai\.com/.test(url)) return "サウナイキタイ";
    if (/saunatime\.jp/.test(url)) return "SaunaTime";
    if (/supersento\.com/.test(url)) return "スーパー銭湯全国検索";
    if (/sauna-map\.com/.test(url)) return "サウナマップ";
    if (/yoriyu\.com/.test(url)) return "より湯";
    return url ? "参照元" : "";
  }
  return source || (url ? "参照元" : "");
}

function renderFacilitySourceBadge(facility) {
  const sourceLabel = getFacilitySourceLabel(facility);
  const officialUrl = String(facility.officialUrl || "").trim();
  const sourceUrl = String(facility.sourceUrl || "").trim();
  const links = [];
  if (officialUrl) {
    links.push(`<a class="source-badge source-badge-official" href="${escapeAttr(officialUrl)}" target="_blank" rel="noreferrer">公式</a>`);
  }
  if (sourceUrl) {
    links.push(`<a class="source-badge" href="${escapeAttr(sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(sourceLabel)}</a>`);
  }
  if (!links.length) return `<span class="source-badge">${escapeHtml(sourceLabel)}</span>`;
  return `<span class="source-badge-group">${links.join("")}</span>`;
}

function getDisplayTags(facility) {
  const features = getFacilityFeatures(facility);
  const sourceTags = (facility.tags || []).filter((tag) => !NON_DISPLAY_TAGS.has(tag) && !features.includes(tag) && !features.includes(normalizeFeature(tag)));
  const tags = uniqueStrings([...features, ...sourceTags]).slice(0, 8);
  return tags;
}

function getFacilityFeatures(facility) {
  const signature = [
    facility.id,
    facility.name,
    facility.city,
    getFacilityAddress(facility),
    facility.note,
    facility.trait,
    ...(facility.features || []),
    ...(facility.tags || []),
  ].join("|");
  const cached = facilityFeatureCache.get(facility.id);
  if (cached?.signature === signature) return cached.features;

  const explicit = normalizeFeatures(facility.features || []);
  let features;
  if ((facility.tags || []).includes("ユーザー指定追加") || (facility.tags || []).includes("みんなの追加")) {
    features = normalizeFeatures([...explicit, ...(facility.tags || [])]);
    facilityFeatureCache.set(facility.id, { signature, features });
    return features;
  }

  const inferred = new Set([...explicit, ...(TRAIT_FEATURES[facility.trait] || [])]);
  const text = normalizeText([
    facility.name,
    facility.city,
    getFacilityAddress(facility),
    facility.note,
    ...(facility.tags || []),
  ].join(" "));

  if (/(天然温泉|温泉|源泉)/.test(text)) inferred.add("温泉付き");
  if (/(個室|完全個室|プライベート|private|貸切|貸し切り)/.test(text)) inferred.add("個室");
  if (/(貸切|貸し切り|一棟貸|予約制)/.test(text)) inferred.add("貸切可");
  if (/(ドライサウナ|高温サウナ|昭和ストロング|遠赤外線)/.test(text)) inferred.add("ドライサウナ");
  if (/遠赤外線/.test(text)) inferred.add("遠赤外線サウナ");
  if (/(薪サウナ|薪|まきサウナ|wood)/.test(text)) inferred.add("薪サウナ");
  if (/(スチーム|ミスト|蒸し|薬草|漢方)/.test(text)) inferred.add("スチーム(ミスト)サウナ");
  if (/塩サウナ/.test(text)) inferred.add("塩サウナ");
  if (/テントサウナ/.test(text)) inferred.add("テントサウナ");
  if (/バレルサウナ/.test(text)) inferred.add("バレルサウナ");
  if (/(熱波|アウフグース)/.test(text)) inferred.add("熱波師あり");
  if (/セルフロウリュ/.test(text)) inferred.add("セルフロウリュ");
  if (/アロマロウリュ/.test(text)) inferred.add("アロマロウリュ");
  if (/(水風呂|天然水|冷水)/.test(text)) inferred.add("水風呂あり");
  if (/(水着必須|水着着用|男女共用)/.test(text)) inferred.add("水着必須");
  if (/男女共用/.test(text)) inferred.add("男女共用");
  if (/(宿泊|カプセル|ホテル|旅館)/.test(text)) inferred.add("宿泊可");
  if (/(タオルレンタルあり|タオルあり|手ぶら)/.test(text)) inferred.add("タオルレンタルあり");
  if (/(タオルレンタルなし|タオルなし|要持参)/.test(text)) inferred.add("タオルレンタルなし");
  if (/(外気浴なし|外気なし)/.test(text)) inferred.add("外気なし");
  if (!inferred.has("外気なし") && /(外気浴|外気あり|露天|テラス|川|森|海|湖)/.test(text)) inferred.add("外気あり");
  if (/(サ飯なし|食事なし|レストランなし)/.test(text)) inferred.add("サ飯なし");
  if (!inferred.has("サ飯なし") && /(サ飯|食堂|レストラン|カフェ|蕎麦|ごはん|食事)/.test(text)) inferred.add("サ飯あり");
  if (/(飲み放題|ドリンク飲み放題)/.test(text)) inferred.add("サウナドリンク飲み放題");
  if (/サウナハット禁止/.test(text)) inferred.add("サウナハット禁止");

  features = normalizeFeatures([...inferred]);
  facilityFeatureCache.set(facility.id, { signature, features });
  return features;
}

function normalizeFeatures(values) {
  if (!Array.isArray(values)) return [];
  const selected = [];
  values.forEach((value) => {
    const feature = normalizeFeature(value);
    if (!feature) return;
    const conflict = FEATURE_CONFLICTS.get(feature);
    if (conflict) {
      const conflictIndex = selected.indexOf(conflict);
      if (conflictIndex >= 0) selected.splice(conflictIndex, 1);
    }
    if (!selected.includes(feature)) selected.push(feature);
  });
  return FEATURE_OPTIONS.filter((feature) => selected.includes(feature));
}

function normalizeFeature(value) {
  return FEATURE_NORMALIZE_MAP.get(normalizeText(value)) || "";
}

function inferTraitFromFeatures(values) {
  const features = normalizeFeatures(values);
  if (features.some((feature) => ["薪サウナ", "テントサウナ", "バレルサウナ"].includes(feature))) return "wood";
  if (features.some((feature) => ["宿泊可", "貸切可", "個室"].includes(feature))) return "private";
  if (features.includes("温泉付き")) return "onsen";
  if (features.includes("水風呂あり")) return "water";
  if (features.some((feature) => ["ドライサウナ", "遠赤外線サウナ", "熱波師あり"].includes(feature))) return "urban";
  return "custom";
}

function uniqueStrings(values) {
  return [...new Set(values.filter(Boolean))];
}

function moveToSearchPrefecture(value) {
  const term = normalizeText(value);
  const needles = createSearchNeedles(value);
  if (!term) return false;

  const prefMatch = PREFECTURES.find((pref) => {
    const full = buildSearchBlob([pref.name]);
    const short = buildSearchBlob([shortPrefName(pref.name)]);
    return full === term || short === term || (term.length >= 2 && (full.includes(term) || short.includes(term)));
  });
  if (prefMatch) return setSelectedPrefecture(prefMatch.name);

  if (term.length < 2) return false;
  const records = getFacilitySearchRecords();
  const nameMatch = records.find(({ nameBlob }) => matchesSearchBlob(nameBlob, needles));
  if (nameMatch) return setSelectedPrefecture(nameMatch.facility.prefecture);

  const matchingFacilities = records.filter(({ haystack }) => matchesSearchBlob(haystack, needles));
  const matchedPrefectures = [...new Set(matchingFacilities.map(({ facility }) => facility.prefecture))];
  if (matchedPrefectures.length === 1) return setSelectedPrefecture(matchedPrefectures[0]);
  return false;
}

function setSelectedPrefecture(prefecture) {
  if (!prefecture || selectedPrefecture === prefecture) return false;
  selectedPrefecture = prefecture;
  visibleLimit = 36;
  return true;
}

function prefillAddFormFromSearch() {
  const name = el.searchInput.value.trim();
  setView("Add");
  if (name) el.addForm.elements.name.value = name;
  if (selectedPrefecture !== "全国") el.addForm.elements.prefecture.value = selectedPrefecture;
  window.setTimeout(() => el.addForm.elements.name.focus(), 80);
}

function findDuplicateFacility(candidate) {
  const candidateName = normalizeFacilityName(candidate.name);
  return getFacilities().find((facility) => (
    facility.prefecture === candidate.prefecture &&
    normalizeFacilityName(facility.name) === candidateName
  ));
}

function countVisitedByPrefecture() {
  return getFacilities().reduce((acc, facility) => {
    if (!state.visited[facility.id]) return acc;
    acc[facility.prefecture] = (acc[facility.prefecture] || 0) + 1;
    return acc;
  }, {});
}

function countFacilitiesByPrefecture() {
  return getFacilities().reduce((acc, facility) => {
    acc[facility.prefecture] = (acc[facility.prefecture] || 0) + 1;
    return acc;
  }, {});
}

function countEligibleFacilities() {
  return getFacilities().filter((facility) => !getFacilityStatus(facility));
}

function countEligibleFacilitiesByPrefecture() {
  return countEligibleFacilities().reduce((acc, facility) => {
    acc[facility.prefecture] = (acc[facility.prefecture] || 0) + 1;
    return acc;
  }, {});
}

function getPrefectureMasterProgress(prefecture) {
  const eligible = countEligibleFacilities().filter((facility) => facility.prefecture === prefecture);
  const visited = eligible.filter((facility) => state.visited[facility.id]).length;
  return {
    eligible: eligible.length,
    visited,
    remaining: Math.max(0, eligible.length - visited),
    mastered: eligible.length > 0 && visited >= eligible.length,
  };
}

function getNearestPrefectureGoal() {
  const scopedPrefecture = selectedPrefecture !== "全国" ? selectedPrefecture : "";
  const progresses = PREFECTURES.map((pref) => ({
    prefecture: pref.name,
    ...getPrefectureMasterProgress(pref.name),
  })).filter((item) => item.eligible > 0 && !item.mastered);
  const current = scopedPrefecture
    ? progresses.find((item) => item.prefecture === scopedPrefecture)
    : null;
  const target = current || progresses
    .filter((item) => item.visited > 0)
    .sort((a, b) => a.remaining - b.remaining || b.visited - a.visited)[0] || progresses[0];
  if (!target) return { label: "県マスター", value: "完走", hint: "全県認定" };
  if (target.visited === 0 && !current) {
    return { label: "県マスター", value: "あと1湯", hint: "最初の県へ" };
  }
  return {
    label: shortPrefName(target.prefecture),
    value: `あと${target.remaining}湯`,
    hint: "県マスター",
  };
}

function getQuestFacility() {
  const facilities = getFacilities();
  const current = facilities.find((facility) => facility.id === questFacilityId && !state.visited[facility.id] && !getFacilityStatus(facility));
  if (current) return current;
  const pool = getQuestPool();
  if (!pool.length) return null;
  const seed = hashString(`${selectedPrefecture}:${searchTerm}:${Object.keys(state.visited).length}:${Object.keys(state.wishlist).length}`);
  return pool[seed % pool.length];
}

function getQuestPool() {
  const filtered = getFilteredFacilities().filter((facility) => !state.visited[facility.id] && !getFacilityStatus(facility));
  if (filtered.length) return filtered.slice(0, selectedPrefecture === "全国" ? 180 : filtered.length);
  const eligible = countEligibleFacilities().filter((facility) => !state.visited[facility.id]);
  const wishlist = eligible.filter((facility) => state.wishlist[facility.id]);
  if (wishlist.length) return wishlist;
  const nearPref = getNearestPrefectureGoal();
  const nearPrefName = PREFECTURES.find((pref) => shortPrefName(pref.name) === nearPref.label)?.name;
  const nearPrefFacilities = nearPrefName ? eligible.filter((facility) => facility.prefecture === nearPrefName) : [];
  if (nearPrefFacilities.length) return nearPrefFacilities;
  return eligible.slice(0, 240);
}

function getQuestGoal() {
  const visitedTotal = Object.keys(state.visited).length;
  const nextTitle = getNextTitle(visitedTotal);
  if (nextTitle && nextTitle.count - visitedTotal <= 3) {
    return { value: `あと${nextTitle.count - visitedTotal}湯`, hint: `${nextTitle.title}が近い` };
  }
  const prefGoal = getNearestPrefectureGoal();
  if (/あと\d+湯/.test(prefGoal.value)) {
    return { value: prefGoal.value, hint: `${prefGoal.hint}: ${prefGoal.label}` };
  }
  const wishlistTotal = Object.keys(state.wishlist).length;
  if (!wishlistTotal) return { value: "あと1候補", hint: "未来の一湯を残す" };
  return { value: `${wishlistTotal}件候補`, hint: "行きたいを押印へ進める" };
}

function hashString(value) {
  let hash = 0;
  for (const char of String(value)) {
    hash = ((hash << 5) - hash + char.charCodeAt(0)) | 0;
  }
  return Math.abs(hash);
}

function isPrefectureMastered(prefecture) {
  return getPrefectureMasterProgress(prefecture).mastered;
}

function getMasteredPrefectures() {
  return PREFECTURES.filter((pref) => isPrefectureMastered(pref.name));
}

function getCurrentTitle(count) {
  return TITLE_MILESTONES.reduce((current, milestone) => (
    count >= milestone.count ? milestone : current
  ), TITLE_MILESTONES[0]);
}

function getNextTitle(count) {
  return TITLE_MILESTONES.find((milestone) => milestone.count > count) || null;
}

function startRankingPolling() {
  if (rankingConfigured === false) return;
  clearInterval(rankingPollTimer);
  rankingPollTimer = window.setInterval(loadRanking, RANKING_REFRESH_MS);
}

async function loadRanking() {
  try {
    const response = await fetch(RANKING_ENDPOINT, { headers: { accept: "application/json" } });
    if (!response.ok) throw new Error("ranking-load-failed");
    const payload = await response.json();
    rankingConfigured = payload.configured !== false;
    leaderboardEntries = normalizeRankingEntries(payload.entries || []);
  } catch {
    rankingConfigured = false;
    leaderboardEntries = [];
    clearInterval(rankingPollTimer);
  } finally {
    renderLeaderboard();
  }
}

function queueRankingSync() {
  if (!isProfileComplete()) return;
  clearTimeout(rankingSyncTimer);
  rankingSyncTimer = window.setTimeout(() => syncRanking({ announce: false }), 700);
}

async function syncRanking({ announce } = { announce: false }) {
  if (!isProfileComplete()) {
    if (announce) showToast("ランキング参加登録をしてください");
    return;
  }
  if (rankingConfigured === false) {
    renderLeaderboard();
    if (announce) showToast("共有ランキングは未接続です");
    return;
  }
  const stamps = Object.keys(state.visited).length;
  const title = getCurrentTitle(stamps).title;
  try {
    const response = await fetch(RANKING_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        participantId: profile.id,
        nickname: profile.nickname,
        email: profile.email,
        stamps,
        title,
      }),
    });
    if (!response.ok) throw new Error("ranking-save-failed");
    const payload = await response.json();
    rankingConfigured = true;
    leaderboardEntries = normalizeRankingEntries(payload.entries || []);
    renderLeaderboard();
    track("ranking_join", { stamps, title, announce: Boolean(announce) });
    if (announce) showToast("ランキングを更新しました");
  } catch {
    rankingConfigured = false;
    renderLeaderboard();
    if (announce) showToast("共有ランキングは未接続です");
  }
}

function normalizeRankingEntries(values) {
  if (!Array.isArray(values)) return [];
  return values.map((entry) => ({
    id: typeof entry.id === "string" ? entry.id : "",
    nickname: typeof entry.nickname === "string" ? entry.nickname.slice(0, 16) : "匿名サウナー",
    stamps: Number.isFinite(Number(entry.stamps)) ? Math.max(0, Math.floor(Number(entry.stamps))) : 0,
    title: typeof entry.title === "string" ? entry.title.slice(0, 20) : getCurrentTitle(0).title,
    updatedAt: typeof entry.updatedAt === "string" ? entry.updatedAt : "",
  })).filter((entry) => entry.id && entry.nickname)
    .sort((a, b) => b.stamps - a.stamps || a.nickname.localeCompare(b.nickname, "ja"))
    .slice(0, 50);
}

function mergeRankingEntries(entries, localEntry) {
  const merged = new Map();
  entries.forEach((entry) => merged.set(entry.id, entry));
  if (localEntry) merged.set(localEntry.id, localEntry);
  return [...merged.values()];
}

function exportState() {
  const payload = {
    exportedAt: new Date().toISOString(),
    app: "saincho",
    version: 1,
    state,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `saincho-${new Date().toISOString().slice(0, 10)}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

async function handleInstallClick() {
  if (isStandaloneMode()) {
    showToast("すでにホーム画面表示です");
    return;
  }
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    if (choice.outcome === "accepted") {
      localStorage.setItem(INSTALL_DISMISSED_KEY, "installed");
      renderInstallPrompt();
      return;
    }
    renderInstallPrompt();
    return;
  }
  showInstallHelp();
}

function renderInstallPrompt() {
  if (!el.installCard) return;
  const dismissed = localStorage.getItem(INSTALL_DISMISSED_KEY);
  const installable = Boolean(deferredInstallPrompt);
  const mobileLike = window.matchMedia("(max-width: 720px), (pointer: coarse)").matches;
  if (isStandaloneMode() || dismissed || (!installable && !mobileLike)) {
    el.installCard.hidden = true;
    return;
  }
  el.installHint.textContent = installable ? "次から1タップで開けます" : getInstallHint();
  el.installButton.textContent = installable ? "追加" : "手順";
  el.installCard.hidden = false;
}

function showInstallHelp() {
  if (el.settingsDialog.open) closeSettingsDialog();
  if (typeof el.installHelpDialog.showModal === "function") {
    el.installHelpDialog.showModal();
    return;
  }
  alert("iPhone/iPadはSafariで開き、共有ボタンから「ホーム画面に追加」→「追加」。AndroidはChrome右上メニューから「アプリをインストール」または「ホーム画面に追加」を選んでください。");
}

function getInstallHint() {
  if (isAppleTouchDevice()) return "Safariの共有→ホーム画面に追加";
  if (/Android/i.test(navigator.userAgent)) return "Chromeメニュー→インストール";
  return "iPhoneはSafariの共有 / AndroidはChromeメニュー";
}

function isStandaloneMode() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function isAppleTouchDevice() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

function isSafeHttpUrl(value) {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

async function importState(event) {
  const [file] = event.target.files;
  if (!file) return;
  try {
    const payload = JSON.parse(await file.text());
    const imported = payload.state || payload;
    state = normalizeState(imported);
    invalidateFacilityCaches();
    saveState();
    renderAll();
    showToast("記録を読み込みました");
  } catch {
    showToast("読み込みに失敗しました");
  } finally {
    event.target.value = "";
  }
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
    return normalizeState(JSON.parse(stored));
  } catch {
    return createState();
  }
}

function normalizeState(value) {
  const fallback = createState();
  if (!value || typeof value !== "object") return fallback;
  return {
    visited: isPlainObject(value.visited) ? value.visited : fallback.visited,
    wishlist: isPlainObject(value.wishlist) ? value.wishlist : fallback.wishlist,
    favorites: isPlainObject(value.favorites) ? value.favorites : fallback.favorites,
    facilityMemos: isPlainObject(value.facilityMemos) ? normalizeFacilityMemos(value.facilityMemos) : fallback.facilityMemos,
    facilityReviews: isPlainObject(value.facilityReviews) ? normalizeLocalReviews(value.facilityReviews) : fallback.facilityReviews,
    customFacilities: Array.isArray(value.customFacilities) ? value.customFacilities.filter(isValidCustomFacility) : [],
  };
}

function createState() {
  return {
    visited: {},
    wishlist: {},
    favorites: {},
    facilityMemos: {},
    facilityReviews: {},
    customFacilities: [],
  };
}

function normalizeFacilityMemos(value) {
  return Object.fromEntries(Object.entries(value).filter(([, memo]) => (
    memo &&
    typeof memo === "object" &&
    typeof memo.text === "string" &&
    memo.text.trim()
  )).map(([id, memo]) => [id, {
    text: memo.text.trim().slice(0, 240),
    updatedAt: typeof memo.updatedAt === "string" ? memo.updatedAt : new Date().toISOString(),
  }]));
}

function normalizeLocalReviews(value) {
  return Object.fromEntries(Object.entries(value).map(([facilityId, reviews]) => {
    if (!Array.isArray(reviews)) return [facilityId, []];
    return [facilityId, normalizeReviews(reviews)];
  }).filter(([, reviews]) => reviews.length));
}

function normalizeReviews(values) {
  if (!Array.isArray(values)) return [];
  const seen = new Set();
  return values.map((review) => {
    if (!review || typeof review !== "object") return null;
    const id = typeof review.id === "string" && review.id ? review.id.slice(0, 80) : "";
    const text = typeof review.text === "string" ? review.text.trim().slice(0, 280) : "";
    if (!id || !text || seen.has(id)) return null;
    seen.add(id);
    return {
      id,
      facilityId: typeof review.facilityId === "string" ? review.facilityId.slice(0, 120) : "",
      clientId: typeof review.clientId === "string" ? review.clientId.slice(0, 80) : "",
      nickname: typeof review.nickname === "string" && review.nickname.trim() ? review.nickname.trim().slice(0, 16) : "匿名サウナー",
      rating: Math.max(1, Math.min(5, Math.floor(Number(review.rating) || 5))),
      text,
      createdAt: typeof review.createdAt === "string" ? review.createdAt : new Date().toISOString(),
    };
  }).filter(Boolean)
    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
    .slice(0, 30);
}

function isValidCustomFacility(value) {
  return value && typeof value === "object" && typeof value.id === "string" && typeof value.name === "string" && typeof value.prefecture === "string";
}

function isPlainObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadProfile() {
  try {
    const value = JSON.parse(localStorage.getItem(PROFILE_KEY));
    if (!value || typeof value !== "object") return createProfile();
    return {
      id: typeof value.id === "string" && value.id ? value.id : createClientId(),
      nickname: typeof value.nickname === "string" ? value.nickname.trim().slice(0, 16) : "",
      email: typeof value.email === "string" ? value.email.trim().slice(0, 80) : "",
      registeredAt: typeof value.registeredAt === "string" ? value.registeredAt : "",
    };
  } catch {
    return createProfile();
  }
}

function createProfile() {
  return {
    id: createClientId(),
    nickname: "",
    email: "",
    registeredAt: "",
  };
}

function saveProfile() {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

function isProfileComplete() {
  return Boolean(profile.id && profile.nickname && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email));
}

function createClientId() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function loadSettings() {
  try {
    const stored = localStorage.getItem(SETTINGS_KEY) || localStorage.getItem(LEGACY_SETTINGS_KEY);
    const value = JSON.parse(stored);
    return { vibration: value?.vibration !== false };
  } catch {
    return { vibration: true };
  }
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function showToast(message) {
  clearTimeout(toastTimer);
  el.toast.textContent = message;
  el.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    el.toast.classList.remove("is-visible");
  }, 2600);
}

function showAchievement({ eyebrow, title, body }) {
  el.achievementEyebrow.textContent = eyebrow;
  el.achievementTitle.textContent = title;
  el.achievementBody.textContent = body;
  if (typeof el.achievementDialog.showModal === "function") {
    el.achievementDialog.showModal();
    return;
  }
  showToast(title);
}

function shortPrefName(name) {
  if (name === "北海道") return name;
  return name.replace(/[都道府県]$/, "");
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function formatDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("ja-JP", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function getViewFromLocation() {
  const path = location.pathname.replace(/\/+$/, "/") || "/";
  const facilityMatch = path.match(/^\/facility\/([^/]+)\/$/);
  if (facilityMatch) {
    activeFacilityId = decodeURIComponent(facilityMatch[1]);
    return "Facility";
  }
  const prefMatch = path.match(/^\/pref\/([^/]+)\/$/);
  if (prefMatch) {
    const slug = decodeURIComponent(prefMatch[1]);
    const pref = PREFECTURES.find((item) => item.slug === slug || item.saunaTimeSlug === slug);
    if (pref) selectedPrefecture = pref.name;
    else pendingPrefectureSlug = slug;
    activeFacilityId = "";
    return "Explore";
  }
  if (/^\/guide\/[^/]+\/$/.test(path)) {
    activeFacilityId = "";
    return "Guide";
  }
  activeFacilityId = "";
  const found = Object.entries(VIEW_META).find(([, meta]) => meta.path === path);
  return found?.[0] || "Explore";
}

function pushViewUrl(view) {
  updateDocumentMetaForView(view);
  if (!location.protocol.startsWith("http")) return;
  const path = view === "Facility" && activeFacilityId
    ? `/facility/${encodeURIComponent(activeFacilityId)}/`
    : VIEW_META[view]?.path || "/";
  if (location.pathname !== path) history.pushState({ view }, "", path);
  trackPageView();
}

function trackPageView() {
  if (!location.protocol.startsWith("http")) return;
  const pagePath = `${location.pathname}${location.search}`;
  if (lastTrackedPagePath === pagePath) return;
  lastTrackedPagePath = pagePath;
  if (typeof window.gtag !== "function") return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: pagePath,
    page_location: location.href,
    page_title: document.title,
  });
}

function updateDocumentMetaForView(view, facility = null) {
  const baseMeta = VIEW_META[view] || VIEW_META.Explore;
  const meta = facility ? getFacilityMetaTags(facility) : baseMeta;
  const url = facility ? getFacilityDetailUrl(facility) : new URL(baseMeta.path, APP_URL).href;
  document.title = meta.title;
  updateMeta("name", "description", meta.description);
  updateMeta("property", "og:title", meta.title);
  updateMeta("property", "og:description", meta.description);
  updateMeta("property", "og:url", url);
  updateMeta("name", "twitter:title", meta.title.replace(" | サ印帳", ""));
  updateMeta("name", "twitter:description", meta.description);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = url;
}

function getFacilityMetaTags(facility) {
  const area = getFacilityAreaLabel(facility);
  const address = getFacilityAddress(facility);
  const features = getDisplayTags(facility).slice(0, 3).join("、");
  const title = `${facility.name} | サ印帳 施設詳細`;
  const description = [
    `${facility.name}のサ印帳施設詳細。`,
    area ? `${area}。` : "",
    address ? `住所は${address}。` : "住所未確認の候補は参照元とGoogle Mapsで確認できます。",
    features ? `特徴: ${features}。` : "",
    "押印、メモ、経路検索、周辺サ飯、Gear導線をまとめて確認できます。",
  ].join("");
  return { title, description: description.slice(0, 180) };
}

function updateMeta(attribute, key, content) {
  const node = document.querySelector(`meta[${attribute}="${cssEscape(key)}"]`);
  if (node) node.setAttribute("content", content);
}

function syncFacilityStructuredData(facility) {
  const id = "facilityStructuredData";
  let node = document.querySelector(`#${id}`);
  if (!facility) {
    node?.remove();
    return;
  }
  if (!node) {
    node = document.createElement("script");
    node.type = "application/ld+json";
    node.id = id;
    document.head.appendChild(node);
  }
  const address = getFacilityAddress(facility);
  const coordinate = getFacilityCoordinate(facility);
  const image = getDisplayImageUrl(facility);
  const data = {
    "@context": "https://schema.org",
    "@type": facility.source === "Airbnb" ? "LodgingBusiness" : "LocalBusiness",
    "@id": `${getFacilityDetailUrl(facility)}#place`,
    name: facility.name,
    url: getFacilityDetailUrl(facility),
    sameAs: [facility.officialUrl, facility.sourceUrl].filter(Boolean),
    image: image ? [image] : undefined,
    address: address ? {
      "@type": "PostalAddress",
      streetAddress: address,
      addressCountry: "JP",
    } : undefined,
    areaServed: getFacilityAreaLabel(facility) || undefined,
    geo: coordinate ? {
      "@type": "GeoCoordinates",
      latitude: Number(facility.lat),
      longitude: Number(facility.lng),
    } : undefined,
    amenityFeature: getDisplayTags(facility).slice(0, 8).map((tag) => ({
      "@type": "LocationFeatureSpecification",
      name: tag,
      value: true,
    })),
    potentialAction: [
      {
        "@type": "ViewAction",
        name: "Google Mapsで経路を見る",
        target: getFacilityDirectionsUrl(facility),
      },
      {
        "@type": "SearchAction",
        name: "周辺のサ飯を探す",
        target: getNearbySameshiUrl(facility),
      },
    ],
  };
  node.textContent = JSON.stringify(removeUndefinedDeep(data));
}

function removeUndefinedDeep(value) {
  if (Array.isArray(value)) return value.map(removeUndefinedDeep).filter((item) => item !== undefined);
  if (!value || typeof value !== "object") return value;
  const entries = Object.entries(value)
    .map(([key, item]) => [key, removeUndefinedDeep(item)])
    .filter(([, item]) => item !== undefined && item !== "");
  return Object.fromEntries(entries);
}

function getGearLinks(item) {
  return {
    amazon: item.amazonUrl ? buildAmazonUrl(item.amazonUrl) : buildAmazonSearchUrl(item.amazonQuery || item.title),
    rakuten: item.rakutenUrl || buildRakutenAffiliateUrl(item.rakutenQuery || item.title),
  };
}

function buildAmazonUrl(value) {
  const url = new URL(value);
  if (AMAZON_ASSOCIATE_TAG) url.searchParams.set("tag", AMAZON_ASSOCIATE_TAG);
  return url.href;
}

function buildAmazonSearchUrl(query) {
  const url = new URL("https://www.amazon.co.jp/s");
  url.searchParams.set("k", query);
  url.searchParams.set("s", "review-rank");
  if (AMAZON_ASSOCIATE_TAG) url.searchParams.set("tag", AMAZON_ASSOCIATE_TAG);
  return url.href;
}

function buildRakutenAffiliateUrl(query) {
  const target = new URL(`https://search.rakuten.co.jp/search/mall/${encodeURIComponent(query)}/`);
  target.searchParams.set("s", "6");
  const url = new URL(RAKUTEN_AFFILIATE_URL);
  url.searchParams.set("pc", target.href);
  url.searchParams.set("link_type", "text");
  url.searchParams.set("ut", RAKUTEN_AFFILIATE_UT);
  return url.href;
}

function getFacilityMemo(id) {
  const memo = state.facilityMemos[id];
  if (!memo?.text) return null;
  return memo;
}

function getFacilityStatus(facility) {
  return FACILITY_STATUS[facility.status] || null;
}

function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function setSearchTerm(value) {
  searchTerm = normalizeText(value);
  searchNeedles = createSearchNeedles(value);
}

function createSearchNeedles(value) {
  const base = normalizeText(value);
  if (!base) return [];
  const words = tokenizeSearchInput(base)
    .filter(Boolean)
    .filter((word) => !isSearchConnectorNeedle(normalizeSearchToken(word)));
  const tokens = words.length ? words : [base];
  return tokens
    .map(createSearchNeedleGroup)
    .filter((group) => group.length);
}

function tokenizeSearchInput(value) {
  return normalizeText(value)
    .replace(/\band\b/g, " ")
    .split(SEARCH_WORD_SEPARATOR_PATTERN)
    .map((word) => word.trim())
    .filter(Boolean);
}

function createSearchNeedleGroup(term) {
  return uniqueStrings([
    ...createSearchPrimaryVariants(term),
    ...(shouldUseSynonymExpansion(term) ? expandSearchTerm(term) : []),
  ].map(normalizeSearchToken))
    .filter((needle) => needle.length >= 1)
    .filter((needle) => !isSearchConnectorNeedle(needle))
    .slice(0, 96);
}

function createSearchPrimaryVariants(term) {
  const termVariants = uniqueStrings([term, ...expandSearchTextVariants(term)]).slice(0, 32);
  return termVariants.flatMap((value) => [
    value,
    toHiragana(value),
    toKatakana(value),
    normalizeCompact(value),
    normalizeKanaLoose(value),
    normalizeKanaLongVowels(value),
    romanizeSearchText(value),
  ]);
}

function shouldUseSynonymExpansion(term) {
  const compact = normalizeSearchToken(term);
  const ascii = /^[a-z0-9]+$/.test(normalizeCompact(term));
  const kana = /[ぁ-んァ-ン]/.test(term);
  return ascii || kana || compact.length <= 3;
}

function matchesSearchNeedles(parts, needles) {
  if (!needles.length) return true;
  const blob = buildSearchBlob(parts);
  return matchesSearchBlob(blob, needles);
}

function matchesSearchBlob(blob, needles) {
  return needles.every((group) => group.some((needle) => blob.includes(needle)));
}

function isSearchConnectorNeedle(needle) {
  return SEARCH_CONNECTOR_TERMS.some((term) => normalizeSearchToken(term) === needle);
}

function buildSearchBlob(parts) {
  const values = parts.filter(Boolean).map((part) => String(part));
  const tokens = new Set();
  values.forEach((value) => {
    addSearchBlobTokens(tokens, value);
    tokenizeSearchInput(value).slice(0, 16).forEach((word) => addSearchBlobTokens(tokens, word));
  });
  addMatchedSynonymTokens(tokens);
  return [...tokens].filter(Boolean).join(" ");
}

function addSearchBlobTokens(tokens, value) {
  const normalized = normalizeText(value);
  if (!normalized) return;
  const variants = uniqueStrings([
    normalized,
    ...expandSearchTextVariants(normalized).slice(0, 12),
  ]);
  variants.forEach((variant) => {
    [
      variant,
      toHiragana(variant),
      toKatakana(variant),
      normalizeCompact(variant),
      normalizeKanaLoose(variant),
      normalizeKanaLongVowels(variant),
      romanizeSearchText(variant),
    ].forEach((token) => {
      const normalizedToken = normalizeSearchToken(token);
      if (normalizedToken) tokens.add(normalizedToken);
    });
  });
}

function addMatchedSynonymTokens(tokens) {
  const currentTokens = [...tokens];
  SEARCH_SYNONYM_GROUPS.forEach((group) => {
    const groupTokens = uniqueStrings(group.flatMap((term) => [
      normalizeSearchToken(term),
      normalizeKanaLoose(term),
      normalizeKanaLongVowels(term),
      romanizeSearchText(term),
    ])).filter(Boolean);
    const matched = groupTokens.some((groupToken) => currentTokens.some((token) => {
      if (token === groupToken) return true;
      return groupToken.length >= 4 && token.length >= 4 && (token.includes(groupToken) || groupToken.includes(token));
    }));
    if (!matched) return;
    group.forEach((term) => addSearchBlobTokens(tokens, term));
  });
}

function expandSearchTerm(term) {
  const normalized = normalizeText(term);
  const termVariants = uniqueStrings([normalized, ...expandSearchTextVariants(normalized)]).slice(0, 32);
  const variants = termVariants.flatMap((value) => [
    value,
    toHiragana(value),
    toKatakana(value),
    normalizeCompact(value),
    normalizeKanaLoose(value),
    normalizeKanaLongVowels(value),
    romanizeSearchText(value),
  ]);
  const normalizedCandidates = uniqueStrings(termVariants.flatMap((value) => [
    normalizeCompact(value),
    normalizeSearchToken(value),
    normalizeKanaLoose(value),
    normalizeKanaLongVowels(value),
    romanizeSearchText(value),
  ]));
  SEARCH_SYNONYM_GROUPS.forEach((group) => {
    const normalizedGroup = uniqueStrings(group.flatMap((item) => [
      normalizeSearchToken(item),
      normalizeKanaLoose(item),
      normalizeKanaLongVowels(item),
      romanizeSearchText(item),
    ])).filter(Boolean);
    const genericSaunaGroup = normalizedGroup.some((item) => item === "sauna" || item === "サウナ");
    if (normalizedGroup.some((item) => normalizedCandidates.some((candidate) => {
      if (candidate === item) return true;
      if (genericSaunaGroup) return false;
      return candidate.length >= 4 && item.length >= 3 && (candidate.includes(item) || item.includes(candidate));
    }))) {
      variants.push(...group);
    }
  });
  return variants;
}

function expandSearchTextVariants(source) {
  const normalized = normalizeText(source);
  if (!normalized) return [];
  const variants = new Set([normalized]);
  for (const [from, to] of SEARCH_READING_REPLACEMENTS) {
    const current = [...variants];
    for (const value of current) {
      if (!value.includes(from)) continue;
      variants.add(value.split(from).join(to));
      if (variants.size >= 80) return [...variants];
    }
  }
  return [...variants];
}

function normalizeSearchToken(value) {
  return normalizeCompact(toKatakana(value));
}

function normalizeCompact(value) {
  return normalizeText(value).replace(SEARCH_SEPARATOR_PATTERN, "");
}

function normalizeKanaLoose(value) {
  return normalizeCompact(toKatakana(value)).replace(/[ァィゥェォャュョッヮヵヶヰヱヲヴ]/g, (char) => KANA_LOOSE_MAP[char] || char);
}

function normalizeKanaLongVowels(value) {
  let folded = normalizeKanaLoose(value);
  let previous = "";
  while (folded !== previous) {
    previous = folded;
    folded = folded
      .replace(/ユウ/g, "ユ")
      .replace(/([キシチニヒミリギジヂビピ]ユ)ウ/g, "$1")
      .replace(/ユ{3,}/g, "ユユ")
      .replace(/([エケセテネヘメレゲゼデベペ])(イ|エ)/g, "$1")
      .replace(/([オコソトノホモヨロゴゾドボポ])(ウ|オ)/g, "$1");
  }
  return folded;
}

function romanizeSearchText(value) {
  const kana = normalizeKanaLongVowels(value);
  if (/[一-龯々]/.test(kana)) return "";
  let result = "";
  for (let index = 0; index < kana.length; index += 1) {
    const pair = kana.slice(index, index + 2);
    if (ROMAJI_DIGRAPHS[pair]) {
      result += ROMAJI_DIGRAPHS[pair];
      index += 1;
      continue;
    }
    const char = kana[index];
    if (ROMAJI_CHARS[char]) {
      result += ROMAJI_CHARS[char];
    } else if (/[a-z0-9]/i.test(char)) {
      result += char.toLowerCase();
    }
  }
  return result;
}

function toKatakana(value) {
  return String(value).replace(/[\u3041-\u3096]/g, (char) => String.fromCharCode(char.charCodeAt(0) + 0x60));
}

function toHiragana(value) {
  return String(value).replace(/[\u30a1-\u30f6]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));
}

function normalizeFacilityName(value) {
  return normalizeText(value)
    .split(/[\/／|｜]/)[0]
    .replace(/（[^）]*）/g, "")
    .replace(/\([^)]*\)/g, "")
    .replace(SEARCH_SEPARATOR_PATTERN, "")
    .replace(/天然温泉かけ流し/g, "")
    .replace(/プレミア/g, "");
}

function dedupeFacilities(facilities) {
  const keyToIndex = new Map();
  const result = [];
  facilities.forEach((facility) => {
    const keys = facilityDuplicateKeys(facility);
    const existingIndex = keys.map((key) => keyToIndex.get(key)).find((index) => Number.isInteger(index));
    if (existingIndex === undefined) {
      const index = result.push({ ...facility }) - 1;
      keys.forEach((key) => keyToIndex.set(key, index));
      return;
    }
    result[existingIndex] = mergeDuplicateFacility(result[existingIndex], facility);
    facilityDuplicateKeys(result[existingIndex]).forEach((key) => keyToIndex.set(key, existingIndex));
    keys.forEach((key) => keyToIndex.set(key, existingIndex));
  });
  return result;
}

function facilityDuplicateKeys(facility) {
  const pref = facility.prefecture || "";
  const name = normalizeText(facility.name);
  const nameParts = name.split(/[\/／|｜]/).map((part) => part.trim()).filter(Boolean);
  const normalizedNames = uniqueStrings([
    normalizeFacilityName(name),
    ...nameParts.map(normalizeFacilityName),
  ]).filter((value) => value.length >= 4);
  return normalizedNames.map((value) => `${pref}:${value}`);
}

function mergeDuplicateFacility(current, incoming) {
  const keepIncomingId = hasFacilityUserSignal(incoming) && !hasFacilityUserSignal(current);
  const primary = keepIncomingId ? incoming : current;
  const secondary = keepIncomingId ? current : incoming;
  const legacyIds = uniqueStrings([
    primary.id,
    secondary.id,
    ...(primary.legacyIds || []),
    ...(secondary.legacyIds || []),
  ]).filter((id) => id && id !== primary.id);
  return {
    ...secondary,
    ...primary,
    id: primary.id,
    name: preferFacilityName(primary.name, secondary.name),
    address: primary.address || secondary.address,
    addressSource: primary.addressSource || secondary.addressSource,
    city: primary.city || secondary.city,
    lat: primary.lat || secondary.lat,
    lng: primary.lng || secondary.lng,
    image: primary.image || secondary.image,
    rating: primary.rating || secondary.rating,
    reviewCount: primary.reviewCount || secondary.reviewCount,
    features: normalizeFeatures([...(secondary.features || []), ...(primary.features || [])]),
    tags: uniqueStrings([...(secondary.tags || []), ...(primary.tags || [])]),
    source: primary.source || secondary.source,
    sourceUrl: primary.sourceUrl || secondary.sourceUrl,
    legacyIds,
  };
}

function preferFacilityName(primaryName, secondaryName) {
  const primary = String(primaryName || "").trim();
  const secondary = String(secondaryName || "").trim();
  if (!primary) return secondary;
  if (!secondary) return primary;
  if (primary.includes("/") && !secondary.includes("/")) return secondary;
  return primary.length <= secondary.length + 8 ? primary : secondary;
}

function hasFacilityUserSignal(facility) {
  const ids = [facility.id, ...(facility.legacyIds || [])].filter(Boolean);
  return ids.some((id) => (
    state.visited[id] ||
    state.wishlist[id] ||
    state.favorites[id] ||
    state.facilityMemos[id] ||
    (state.facilityReviews[id] || []).length
  ));
}

function cssEscape(value) {
  return window.CSS?.escape ? CSS.escape(value) : String(value).replaceAll('"', '\\"');
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || location.protocol === "file:") return;
  let reloadedForController = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (reloadedForController) return;
    reloadedForController = true;
    const key = `saincho-controller-reload-${APP_BUILD_ID}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
    location.reload();
  });
  navigator.serviceWorker.register(`./sw.js?v=${encodeURIComponent(APP_BUILD_ID)}`)
    .then((registration) => registration.update())
    .catch(() => {});
}
