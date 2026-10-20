import {
  MAX_NEARBY_GEO_ACCURACY_METERS,
  NEARBY_RADIUS_KM,
  findNearestFacilities,
  haversineDistanceKm,
  isUsableNearbyPosition,
} from "./nearby.js";
import { applyFacilityEvidence, getFacilityEvidence, getVerifiedFeatures, getMissingEvidenceFields, isFitnessFacility } from "./facility-evidence.js";

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
const COMMUNITY_ENDPOINT = "./api/community";
const RANKING_REFRESH_MS = 10000;
const AMAZON_ASSOCIATE_TAG = "saunastampral-22";
const RAKUTEN_AFFILIATE_URL = "https://hb.afl.rakuten.co.jp/hgc/4145461f.ff7bbb59.41454620.00c2fd25/";
const RAKUTEN_AFFILIATE_UT = "eyJwYWdlIjoidXJsIiwidHlwZSI6InRleHQiLCJjb2wiOjF9";
const APP_BUILD_ID = "20261020-catalog-scope-v3";
const DATA_IMPORT_TIMEOUT_MS = 20000;
const DATA_MODULE_PATH = "./data.js";
const CONTENT_MODULE_PATH = "./content.js";
const GA_MEASUREMENT_ID = "G-FHGXDGF0M7";
const MOBILE_MENU_QUERY = window.matchMedia("(max-width: 899px)");
const MENU_EDGE_WIDTH = 46;
const MENU_SWIPE_DISTANCE = 72;
const MENU_SWIPE_MAX_VERTICAL = 64;
const SEARCH_RENDER_DELAY_MS = 80;
const APP_URL = "https://saincho-sauna-stamp-rally.pages.dev/";
const JAPAN_MAP_URL = "./assets/japan-map-mobile.svg";
const CHECKIN_REQUIRED_MS = 60 * 60 * 1000;
const CHECKIN_RADIUS_METERS = 300;
const NEARBY_RESULT_RADIUS_KM = NEARBY_RADIUS_KM;
const NEARBY_NOTIFICATION_RADIUS_KM = NEARBY_RADIUS_KM;
const NEARBY_NOTIFICATION_COOLDOWN_MS = 12 * 60 * 60 * 1000;
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
  {
    title: "整う家｜プライベートサウナ付き一棟貸し",
    label: "Airbnb掲載",
    prefecture: "茨城県",
    area: "龍ケ崎市",
    url: "https://www.airbnb.jp/rooms/763351679868128955",
    note: "貸切サウナを備えた一棟貸し。設備・料金・空室は掲載ページで確認してください。",
  },
  {
    title: "海を望むサウナハウス",
    label: "Airbnb掲載",
    prefecture: "茨城県",
    area: "大洗町",
    url: "https://www.airbnb.jp/rooms/1494699472118716899",
    note: "海辺での滞在とサウナを組み合わせられる一棟貸しです。",
  },
  {
    title: "Sauna & Stay Kitsunichiso",
    label: "Airbnb掲載",
    prefecture: "栃木県",
    area: "益子町",
    url: "https://www.airbnb.jp/rooms/1287442554843809685",
    note: "益子の滞在拠点として掲載されているサウナ付き宿です。",
  },
  {
    title: "Earthboat Nasu｜温泉・サウナ付き",
    label: "Airbnb掲載",
    prefecture: "栃木県",
    area: "那須町",
    url: "https://www.airbnb.jp/rooms/1598351303897168016",
    note: "貸切露天風呂とプライベートサウナを備えたアウトドア滞在先です。",
  },
  {
    title: "サウナ付き古民家一棟貸し宿",
    label: "4.83 / 53件",
    prefecture: "宮城県",
    area: "丸森町",
    url: "https://www.airbnb.jp/rooms/818299841716584135",
    note: "囲炉裏、薪ストーブ、サウナを備えた古民家宿。掲載評価は確認時点の表示です。",
  },
  {
    title: "woodbell sauna サウナコテージ秋保",
    label: "4.81 / 32件",
    prefecture: "宮城県",
    area: "仙台市",
    url: "https://www.airbnb.jp/rooms/1199564465085875363",
    note: "フィンランド式サウナとチラー付き水風呂を備えた一棟貸しです。",
  },
  {
    title: "Edge Sauna 9 Shirakawa",
    label: "5.0",
    prefecture: "福島県",
    area: "白河市",
    url: "https://www.airbnb.jp/rooms/1571457663588771628",
    note: "薪サウナ、伏流水の水風呂、里山外気浴を楽しめる古民家宿です。",
  },
  {
    title: "羊蹄山を望む SAUNA＆VILLA 焚火",
    label: "5.0",
    prefecture: "北海道",
    area: "真狩村",
    url: "https://www.airbnb.jp/rooms/1362686063189065697",
    note: "大型薪ストーブのフィンランド式サウナを備えた貸切ヴィラです。",
  },
  {
    title: "Ko Niseko Sauna",
    label: "ゲストチョイス 4.95",
    prefecture: "北海道",
    area: "ニセコ町",
    url: "https://www.airbnb.jp/rooms/1047509053369096396",
    note: "確認時点でゲストチョイス、39件のレビューが表示されたサウナ付き宿です。",
  },
  {
    title: "オーシャンビューのサウナヴィラ",
    label: "Airbnb掲載",
    prefecture: "北海道",
    area: "石狩市",
    url: "https://www.airbnb.jp/rooms/1466311946387082296",
    note: "海を望む滞在とプライベートサウナを組み合わせられるヴィラです。",
  },
  {
    title: "函館クラシックホテルズ｜サウナ付き古民家",
    label: "ゲストチョイス",
    prefecture: "北海道",
    area: "函館市",
    url: "https://www.airbnb.jp/rooms/1445983407970963978",
    note: "函館西部地区の古民家を改装したサウナ付き一棟貸しです。",
  },
  {
    title: "Sauna Villa Yoichi",
    label: "Airbnb掲載",
    prefecture: "北海道",
    area: "余市町",
    url: "https://www.airbnb.jp/rooms/874881942890005273",
    note: "余市でサウナ滞在を計画できる貸切ヴィラです。",
  },
  {
    title: "Villa Harunire Otaru",
    label: "Airbnb掲載",
    prefecture: "北海道",
    area: "小樽市",
    url: "https://www.airbnb.jp/rooms/1269252662212235130",
    note: "小樽で利用できるサウナ付きの貸切宿です。",
  },
  {
    title: "妙高高原 薪サウナ付きリトリート｜永遠",
    label: "4.89",
    prefecture: "新潟県",
    area: "妙高市",
    url: "https://www.airbnb.jp/rooms/1556923966755090576",
    note: "本格コンテナ薪サウナを備えた妙高高原の滞在先です。",
  },
  {
    title: "丘庭｜木曽の森のサウナ付き一棟貸し",
    label: "4.70 / 43件",
    prefecture: "長野県",
    area: "南木曽町",
    url: "https://www.airbnb.jp/rooms/1392486979508290682",
    note: "屋外デッキとエストニア式プライベートサウナを備えた1日1組の宿です。",
  },
  {
    title: "軽井沢パノラミックハウス｜サウナ付き",
    label: "ゲストチョイス 4.96",
    prefecture: "長野県",
    area: "御代田町",
    url: "https://www.airbnb.jp/rooms/1370285251598154050",
    note: "軽井沢と浅間山を望むサウナ付きヴィラ。確認時点で51件のレビュー表示があります。",
  },
  {
    title: "安曇野プライベートサウナヴィラ",
    label: "Airbnb掲載",
    prefecture: "長野県",
    area: "安曇野市",
    url: "https://www.airbnb.jp/rooms/1670297019991399559",
    note: "安曇野の自然と貸切サウナを楽しめるヴィラです。",
  },
  {
    title: "飛騨高山 テントサウナ付き貸切宿",
    label: "5.0",
    prefecture: "岐阜県",
    area: "高山市",
    url: "https://www.airbnb.jp/rooms/1476628804271272943",
    note: "自然の中でテントサウナ、焚き火、BBQを楽しめる一棟貸しです。",
  },
  {
    title: "古民家サウナ一棟貸し｜京丹波",
    label: "4.62 / 13件",
    prefecture: "京都府",
    area: "京丹波町",
    url: "https://www.airbnb.jp/rooms/1552626394634102635",
    note: "蔵を生かしたサウナ、水風呂、外部シャワーを備えた貸切宿です。",
  },
  {
    title: "久美浜 バレルサウナ付き貸切宿",
    label: "ゲストチョイス 4.98",
    prefecture: "京都府",
    area: "京丹後市",
    url: "https://www.airbnb.jp/rooms/1471362459426364108",
    note: "箱石浜近くのバレル型フィンランド式サウナ付き一棟貸しです。",
  },
  {
    title: "SEIMU SAUNA Tamade",
    label: "ゲストチョイス 5.0",
    prefecture: "大阪府",
    area: "大阪市",
    url: "https://www.airbnb.jp/rooms/1622145907799765019",
    note: "確認時点でゲストチョイス、13件のレビューが表示されたプライベートサウナ宿です。",
  },
  {
    title: "SAUNA & CURRY URI 東大阪",
    label: "Airbnb掲載",
    prefecture: "大阪府",
    area: "東大阪市",
    url: "https://www.airbnb.jp/rooms/1402033608137367707",
    note: "HARVIA製ストーブ、チラー水風呂、セルフロウリュを備えた一棟貸しです。",
  },
  {
    title: "野村の宿 かまどと壺湯の宿",
    label: "4.93 / 30件",
    prefecture: "大阪府",
    area: "大阪市西成区",
    url: "https://www.airbnb.jp/rooms/1052525694300605844",
    note: "壺湯とサウナを備えた最大7名の一棟貸しです。",
  },
  {
    title: "Hub.Hanazonocho｜プライベートサウナ宿",
    label: "Airbnb掲載",
    prefecture: "大阪府",
    area: "大阪市西成区",
    url: "https://www.airbnb.jp/rooms/1177298102056302429",
    note: "なんばへ電車で4分、最大8名で利用できるサウナ付き貸切宿です。",
  },
  {
    title: "中津・梅田 プライベートサウナ＆水風呂付き宿",
    label: "4.94",
    prefecture: "大阪府",
    area: "大阪市北区",
    url: "https://www.airbnb.jp/rooms/1548942927350646385",
    note: "最大7名でサウナと水風呂を貸切利用できる和モダンの宿です。",
  },
  {
    title: "なんば7分 プライベートサウナ付き一棟貸し",
    label: "5.0",
    prefecture: "大阪府",
    area: "大阪市",
    url: "https://www.airbnb.jp/rooms/1525725500893711125",
    note: "最大8名、天王寺・関西空港からアクセスしやすいサウナ付き宿です。",
  },
  {
    title: "USJ近くのサウナ付き貸切ハウス",
    label: "ゲストチョイス 5.0",
    prefecture: "大阪府",
    area: "大阪市此花区",
    url: "https://www.airbnb.jp/rooms/1446205544692386441",
    note: "確認時点でゲストチョイス、17件のレビューが表示された貸切宿です。",
  },
  {
    title: "HOUS_AGAL Beach Club&Villa 淡路",
    label: "4.71",
    prefecture: "兵庫県",
    area: "洲本市",
    url: "https://www.airbnb.jp/rooms/803899886083214123",
    note: "海沿いのプールと薪火サウナを備えた一棟貸切ヴィラです。",
  },
  {
    title: "LOOP-shiso｜サウナ付き貸別荘",
    label: "4.84 / 19件",
    prefecture: "兵庫県",
    area: "宍粟市",
    url: "https://www.airbnb.jp/rooms/964912437005256559",
    note: "BBQとサウナ付き大浴場を楽しめる最大12名の貸別荘です。",
  },
  {
    title: "ACOA Takashima｜琵琶湖サウナコテージ",
    label: "4.88 / 16件",
    prefecture: "滋賀県",
    area: "高島市",
    url: "https://www.airbnb.jp/rooms/1302638279946837333",
    note: "琵琶湖まで1分、約200㎡のサウナ付き一棟貸しです。",
  },
  {
    title: "SETO CLAS TSUDA 瀬戸内TABITO",
    label: "4.81 / 63件",
    prefecture: "香川県",
    area: "さぬき市",
    url: "https://www.airbnb.jp/rooms/1053169751388897626",
    note: "サウナ、焚き火、プールを備えた一棟貸し。確認時点で63件のレビュー表示があります。",
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
  About: {
    path: "/about/",
    title: "運営・データ方針 | サ印帳",
    description: "サ印帳の施設データの確認基準、更新方法、広告・アフィリエイト方針、プライバシー、内容修正窓口を公開しています。",
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
  Community: {
    path: "/community/",
    title: "サウナ仲間・サ活募集 | サ印帳",
    description: "都道府県、日時、集合施設を決めて少人数のサ活仲間を募集。連絡先を公開せず、参加表明までサ印帳で管理できます。",
  },
  Add: {
    path: "/add/",
    title: "候補にないサウナを追加 | サ印帳",
    description: "サ印帳に候補がないサウナを自分で登録し、特徴、メモ、押印候補として管理できます。",
  },
  StampRally: {
    path: "/sauna-stamp-rally/",
    title: "サウナスタンプラリーをスマホで楽しむ | サ印帳",
    description: "サウナスタンプラリーの始め方、押印・行きたい・県別マスター・サ活ログの使い分けを、無料Webアプリのサ印帳で具体的に確認できます。",
  },
  Goshuin: {
    path: "/sauna-goshuin/",
    title: "サウナ御朱印のように訪問記録を集める | サ印帳",
    description: "サウナ御朱印のように訪問の証をスマホへ残す方法と、施設公式の御朱印や物理スタンプとの違いを確認できます。",
  },
};

let PREFECTURES = [];
let SEED_FACILITIES = [];
let DATASET_META = {};
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
    options: ["セルフロウリュ", "オートロウリュ", "アロマロウリュ", "熱波師あり", "水風呂あり", "外気あり", "外気なし"],
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
  suspended: { badge: "臨時休業", action: "休業中" },
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
let selectedStayPrefecture = "全国";
let selectedCommunityPrefecture = "全国";
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
let communityEvents = [];
let communityConfigured = null;
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
let discoveryFacilitiesCache = null;
let discoveryFacilitiesSource = null;
let lastUpdateCheckAt = 0;
let updateCheckPending = null;
let appModulesReady = false;
let pendingSearchIntent = null;
let facilitySearchCache = null;
let facilitySearchMemoSignature = "";
let facilitySearchBuild = null;
let facilityCacheVersion = 0;
let searchGeneration = 0;
let searchSynonymTokens = null;
const searchTokenCache = new Map();
const activityDrafts = new Map();
const activitySaves = new Set();
let facilityDetailTab = "info";
const reviewRequests = new Set();
let rankingLoading = false;
let rankingSaving = false;
let rankingLastError = "";
let rankingWriteError = "";
let rankingUpdatedAt = "";
let searchWarmScheduled = false;
let facilityFeatureCache = new Map();
let japanMapMarkup = "";
let checkinTimer = 0;
let pendingVisitLogShare = null;
let pendingVisitLogShareObjectUrl = "";

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
  searchResultsStatus: document.querySelector("#searchResultsStatus"),
  searchForm: document.querySelector("#searchForm"),
  searchPrefectureSelect: document.querySelector("#searchPrefectureSelect"),
  featureFilterToggle: document.querySelector("#featureFilterToggle"),
  featureFilterPanel: document.querySelector("#featureFilterPanel"),
  featureFilterApply: document.querySelector("#featureFilterApply"),
  exploreExtras: document.querySelector("#exploreExtras"),
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
  japanMap: document.querySelector("#japanMap"),
  visitLogSummary: document.querySelector("#visitLogSummary"),
  profileForm: document.querySelector("#profileForm"),
  profileNickname: document.querySelector("#profileNickname"),
  profileEmail: document.querySelector("#profileEmail"),
  profileStatus: document.querySelector("#profileStatus"),
  profileFeedback: document.querySelector("#profileFeedback"),
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
  stayPrefStrip: document.querySelector("#stayPrefStrip"),
  businessPlanGrid: document.querySelector("#businessPlanGrid"),
  businessValueGrid: document.querySelector("#businessValueGrid"),
  contactTypeGrid: document.querySelector("#contactTypeGrid"),
  contactForm: document.querySelector("#contactForm"),
  contactStatus: document.querySelector("#contactStatus"),
  aboutContent: document.querySelector("#aboutContent"),
  promotionCopyGrid: document.querySelector("#promotionCopyGrid"),
  sameshiPrefStrip: document.querySelector("#sameshiPrefStrip"),
  sameshiGrid: document.querySelector("#sameshiGrid"),
  sameshiCount: document.querySelector("#sameshiCount"),
  sameshiSource: document.querySelector("#sameshiSource"),
  communityCount: document.querySelector("#communityCount"),
  communityFilter: document.querySelector("#communityFilter"),
  communityList: document.querySelector("#communityList"),
  communityForm: document.querySelector("#communityForm"),
  communityPrefecture: document.querySelector("#communityPrefecture"),
  communityStatus: document.querySelector("#communityStatus"),
  communityRefreshButton: document.querySelector("#communityRefreshButton"),
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
  settingsScrim: document.querySelector("#settingsScrim"),
  closeSettingsButton: document.querySelector("#closeSettingsButton"),
  vibrationToggle: document.querySelector("#vibrationToggle"),
  homePrefectureSelect: document.querySelector("#homePrefectureSelect"),
  nearbyNotificationToggle: document.querySelector("#nearbyNotificationToggle"),
  settingsNearbyButton: document.querySelector("#settingsNearbyButton"),
  homePrefectureButton: document.querySelector("#homePrefectureButton"),
  homePrefectureLabel: document.querySelector("#homePrefectureLabel"),
  nearbySaunaButton: document.querySelector("#nearbySaunaButton"),
  nearbyResult: document.querySelector("#nearbyResult"),
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
  visitLogShareDialog: document.querySelector("#visitLogShareDialog"),
  visitLogShareImage: document.querySelector("#visitLogShareImage"),
  visitLogShareStatus: document.querySelector("#visitLogShareStatus"),
  closeVisitLogShareButton: document.querySelector("#closeVisitLogShareButton"),
  shareVisitLogImageButton: document.querySelector("#shareVisitLogImageButton"),
  downloadVisitLogImageButton: document.querySelector("#downloadVisitLogImageButton"),
};

init();

async function init() {
  activeView = getViewFromLocation();
  applyActiveView(activeView);
  if (!isArticleRoute() && !/^\/pref\//.test(location.pathname)) updateDocumentMetaForView(activeView);
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
  renderHomePrefectureControls();
  renderCommunityPrefectureSelect();
  renderFeatureControls();
  if (el.searchInput.value) setSearchTerm(el.searchInput.value);
  else hydrateSearchFromUrl();
  renderSearchClearButton();
  renderProfilePanel();
  saveProfile();
  renderShopPanel();
  renderAll();
  warmSearchIndex();
  trackPageView();
  prepareSearchIndexOnIntent();
  registerServiceWorkerWhenIdle();
  loadAnalyticsWhenIdle();
  if (IS_STATIC_LOCAL_PREVIEW) {
    sharedFacilitiesConfigured = false;
    rankingConfigured = false;
    communityConfigured = false;
    renderSharedHint();
    renderLeaderboard();
  } else {
    loadSharedFacilities();
    loadRanking();
    loadCommunityEvents();
    startRankingPolling();
  }
  resumeActiveCheckin();
  checkNearbyOnLaunch();
  window.addEventListener("popstate", () => {
    if (/^\/guide\/[^/]+\/$/.test(location.pathname) && !document.getElementById("ssrContent")) {
      location.reload();
      return;
    }
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
  DATASET_META = dataModule.DATASET_META && typeof dataModule.DATASET_META === "object" ? dataModule.DATASET_META : {};
  GEAR_PRODUCTS = Array.isArray(contentModule.GEAR_PRODUCTS) ? contentModule.GEAR_PRODUCTS : [];
  GUIDE_FAQS = Array.isArray(contentModule.GUIDE_FAQS) ? contentModule.GUIDE_FAQS : [];
  SAUNA_ARTICLES = Array.isArray(contentModule.SAUNA_ARTICLES) ? contentModule.SAUNA_ARTICLES : [];
  SAUNA_REFERENCES = Array.isArray(contentModule.SAUNA_REFERENCES) ? contentModule.SAUNA_REFERENCES : [];
  SAMESHI_SPOTS = Array.isArray(contentModule.SAMESHI_SPOTS) ? contentModule.SAMESHI_SPOTS : [];
  PRODUCT_RECOMMENDATIONS = GEAR_PRODUCTS.slice(0, 4);

  if (!PREFECTURES.length || !SEED_FACILITIES.length) {
    throw new Error("候補データが空です");
  }
  invalidateFacilityCaches();
  appModulesReady = true;
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
  runWhenIdle(() => ensureFacilitySearchRecords().finally(() => {
    searchWarmScheduled = false;
  }), 1200);
}

function prepareSearchIndexOnIntent() {
  if (!el.searchInput) return;
  const scheduleWarmup = () => warmSearchIndex();
  el.searchInput.addEventListener("focus", scheduleWarmup, { once: true });
  el.searchInput.addEventListener("pointerdown", scheduleWarmup, { once: true });
}

function registerServiceWorkerWhenIdle() {
  runWhenIdle(registerServiceWorker, 2600);
  runWhenIdle(() => checkAppUpdate(), 3200);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") checkAppUpdate();
  });
}

function loadAnalyticsWhenIdle() {
  let loaded = false;
  const load = () => {
    if (loaded) return;
    loaded = true;
    const measurementId = window.__SAINCHO_GA_ID;
    if (!measurementId || document.querySelector("script[data-saincho-analytics]")) return;
    const script = document.createElement("script");
    script.async = true;
    script.dataset.sainchoAnalytics = "true";
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.append(script);
  };
  ["pointerdown", "keydown", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, load, { once: true, passive: true });
  });
  window.setTimeout(load, 8000);
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
      if (button.dataset.menuTarget) {
        requestAnimationFrame(() => {
          document.getElementById(button.dataset.menuTarget)?.scrollIntoView({ block: "start", behavior: "instant" });
          el.profileNickname.focus({ preventScroll: true });
        });
      }
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
    if (appActionButton.dataset.appAction === "reload-app") document.querySelector("#appUpdateDialog")?.showModal();
    if (appActionButton.dataset.appAction === "cancel-reload-app") document.querySelector("#appUpdateDialog")?.close();
    if (appActionButton.dataset.appAction === "confirm-reload-app") {
      appActionButton.disabled = true;
      appActionButton.textContent = "読み込み中…";
      reloadAppFresh();
    }
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
      el.main.scrollTo({ top: 0, behavior: "instant" });
    });
  });

  el.searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearSearchRenderTimer();
    const value = el.searchInput.value;
    const submit = el.searchForm.querySelector('[type="submit"]');
    submit.disabled = true;
    try {
      const applied = await applySearchValue(value);
      if (applied && activeView === "Explore") {
        el.searchInput.blur();
        el.main.scrollTo({ top: 0, behavior: "instant" });
        el.searchResultsStatus.focus({ preventScroll: true });
      }
    } finally { submit.disabled = false; }
  });

  el.searchPrefectureSelect.addEventListener("change", () => {
    selectedPrefecture = el.searchPrefectureSelect.value;
    visibleLimit = 36;
    renderAll();
    el.main.scrollTo({ top: 0, behavior: "instant" });
  });
  el.featureFilterToggle.addEventListener("click", () => {
    el.featureFilterPanel.hidden = !el.featureFilterPanel.hidden;
    el.featureFilterToggle.setAttribute("aria-expanded", String(!el.featureFilterPanel.hidden));
    renderFeatureFilterGrid();
  });
  el.featureFilterApply.addEventListener("click", () => {
    el.featureFilterPanel.hidden = true;
    el.featureFilterToggle.setAttribute("aria-expanded", "false");
    el.main.scrollTo({ top: 0, behavior: "instant" });
    el.searchResultsStatus.focus({ preventScroll: true });
  });

  el.searchInput.addEventListener("input", (event) => {
    renderSearchClearButton();
    if (event.isComposing || isSearchComposing) return;
    scheduleSearchRender(event.target.value);
  });

  el.searchInput.addEventListener("compositionstart", () => {
    isSearchComposing = true;
    searchGeneration += 1;
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
    if (event.target.closest("[data-feature-reset]")) {
      selectedFeatureFilters.clear();
      visibleLimit = 36;
      renderExplore();
      return;
    }
    const button = event.target.closest("[data-feature-filter]");
    if (!button || button.disabled) return;
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
    const notebook = event.target.closest?.("[data-activity-form]");
    if (notebook) rememberActivityDraft(notebook);
    const input = event.target instanceof Element ? event.target.closest("[data-note-input]") : null;
    if (!(input instanceof HTMLTextAreaElement)) return;
    memoDrafts[input.dataset.noteInput] = input.value;
  });
  el.main.addEventListener("change", (event) => {
    const notebook = event.target.closest?.("[data-activity-form]");
    if (notebook) {
      rememberActivityDraft(notebook);
      syncActivityOptions(notebook);
    }
  });

  el.main.addEventListener("submit", (event) => {
    const form = event.target.closest?.("[data-activity-form]");
    if (!form) return;
    event.preventDefault();
    const facility = getFacilityById(form.dataset.activityForm);
    if (facility) saveActivityNote(facility, form.querySelector(".activity-save"));
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

    const stayPrefectureButton = target.closest("[data-stay-prefecture]");
    if (stayPrefectureButton) {
      selectedStayPrefecture = stayPrefectureButton.dataset.stayPrefecture;
      renderStayPage();
      return;
    }

    const nearbyFacilityButton = target.closest("[data-nearby-facility]");
    if (nearbyFacilityButton) {
      const facility = getFacilityById(nearbyFacilityButton.dataset.nearbyFacility);
      if (facility) openFacilityDetail(facility);
      return;
    }

    const moreButton = target.closest("[data-show-more]");
    if (moreButton) {
      visibleLimit += 36;
      renderExplore();
      return;
    }
    if (target.closest("[data-show-more-passport]")) {
      visibleLimit += 36;
      renderPassport();
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
    if (button.dataset.action === "clear-search-filters") {
      selectedPrefecture = "全国";
      selectedFeatureFilters.clear();
      activeFilter = "all";
      visibleLimit = 36;
      renderFeatureFilterGrid();
      renderAll();
      el.main.scrollTo({ top: 0, behavior: "instant" });
      el.searchResultsStatus.focus({ preventScroll: true });
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
    if (button.dataset.action === "community-filter") {
      selectedCommunityPrefecture = button.dataset.prefecture || "全国";
      renderCommunityPage();
      return;
    }
    if (button.dataset.action === "community-join") {
      joinCommunityEvent(button.dataset.eventId);
      return;
    }

    const facility = getFacilityById(button.dataset.id);
    if (!facility) return;

    if (button.dataset.action === "detail-tab") showFacilityDetailTab(facility, button.dataset.tab, { focus: true });
    if (button.dataset.action === "open-activity") showFacilityDetailTab(facility, "note", { focus: true });
    if (button.dataset.action === "save-activity") saveActivityNote(facility, button);
    if (button.dataset.action === "new-activity") {
      const draft = activityDrafts.get(facility.id);
      if (draft?.dirty && (draft.text.trim() || draft.recordVisit) && !window.confirm("保存していない入力を破棄して、新しい記録を始めますか？")) return;
      activityDrafts.set(facility.id, createActivityDraft(facility, { fresh: true }));
      renderFacilityDetail();
    }
    if (button.dataset.action === "edit-activity") {
      const log = (state.visitLogs[facility.id] || []).find(item => item.id === button.dataset.logId);
      if (log) {
        activityDrafts.set(facility.id, { ...createActivityDraft(facility, { fresh: true }), ...log, text: log.note, logId: log.id, recordVisit: true });
        facilityDetailTab = "note";
        renderFacilityDetail();
        el.main.scrollTo({ top: 0, behavior: "instant" });
      }
    }
    if (button.dataset.action === "stamp") stampFacility(facility);
    if (button.dataset.action === "unstamp") unstampFacility(facility);
    if (button.dataset.action === "wishlist") toggleWishlist(facility);
    if (button.dataset.action === "favorite") toggleFavorite(facility);
    if (button.dataset.action === "open-detail") openFacilityDetail(facility);
    if (button.dataset.action === "save-note") saveFacilityMemo(facility, button);
    if (button.dataset.action === "delete-note") deleteFacilityMemo(facility);
    if (button.dataset.action === "share-note") shareFacilityMemo(facility);
    if (button.dataset.action === "share-facility") shareFacility(facility);
    if (button.dataset.action === "share-facility-native") shareFacilityNative(facility);
    if (button.dataset.action === "jump-reviews") focusFacilityReviews(facility);
    if (button.dataset.action === "start-checkin") startFacilityCheckin(facility);
    if (button.dataset.action === "cancel-checkin") cancelFacilityCheckin(facility);
    if (button.dataset.action === "report-facility") requestFacilityCorrection(facility);
    if (button.dataset.action === "retry-reviews") loadFacilityReviews(facility.id, { force: true });
    if (button.dataset.action === "delete-review") deleteFacilityReview(facility, button.dataset.reviewId);
    if (button.dataset.action === "delete-visit-log") deleteVisitLog(facility, button.dataset.logId);
    if (button.dataset.action === "share-visit-log") openVisitLogShare(facility, button.dataset.logId);
  });

  el.main.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const card = target?.closest("[data-detail-card]");
    if (!card || isInteractiveCardTarget(target)) return;
    const facility = getFacilityById(card.dataset.detailCard);
    if (facility) openFacilityDetail(facility);
  });

  el.main.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target instanceof Element ? event.target : null;
    const card = target?.closest("[data-detail-card]");
    if (!card || target !== card) return;
    event.preventDefault();
    const facility = getFacilityById(card.dataset.detailCard);
    if (facility) openFacilityDetail(facility);
  });

  el.prefBoard.addEventListener("click", (event) => {
    const button = event.target.closest("[data-prefecture]");
    if (!button) return;
    selectedPrefecture = button.dataset.prefecture;
    setView("Explore");
  });

  el.japanMap?.addEventListener("click", (event) => {
    const prefectureNode = event.target instanceof Element ? event.target.closest(".prefecture[data-code]") : null;
    if (!prefectureNode) return;
    const pref = PREFECTURES[Number(prefectureNode.dataset.code) - 1];
    if (!pref) return;
    selectedPrefecture = pref.name;
    setView("Explore");
  });

  el.japanMap?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const prefectureNode = event.target instanceof Element ? event.target.closest(".prefecture[data-code]") : null;
    if (!prefectureNode) return;
    event.preventDefault();
    prefectureNode.dispatchEvent(new MouseEvent("click", { bubbles: true }));
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
      authToken: profile.authToken || createClientId() + createClientId(),
    };
    saveProfile();
    syncRanking({ announce: true });
  });

  el.leaderboardSyncButton.addEventListener("click", () => loadRanking());

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
  el.communityForm?.addEventListener("submit", submitCommunityEvent);
  el.communityRefreshButton?.addEventListener("click", () => loadCommunityEvents({ announce: true }));

  el.settingsButton.addEventListener("click", openSettingsDialog);
  el.closeSettingsButton.addEventListener("click", closeSettingsDialog);
  el.settingsScrim?.addEventListener("click", closeSettingsDialog);
  el.settingsDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeSettingsDialog();
  });
  el.vibrationToggle.checked = settings.vibration;
  el.vibrationToggle.addEventListener("change", () => {
    settings.vibration = el.vibrationToggle.checked;
    saveSettings();
  });
  el.homePrefectureSelect?.addEventListener("change", () => {
    state.homePrefecture = el.homePrefectureSelect.value;
    saveState();
    renderHomePrefectureControls();
    showToast(state.homePrefecture ? `${state.homePrefecture}をマイ県に登録しました` : "マイ県を解除しました");
  });
  el.nearbyNotificationToggle?.addEventListener("change", async () => {
    if (el.nearbyNotificationToggle.checked) {
      const enabled = await enableNearbyNotifications();
      state.nearbyNotifications = enabled;
      el.nearbyNotificationToggle.checked = enabled;
    } else {
      state.nearbyNotifications = false;
    }
    saveState();
  });
  el.homePrefectureButton?.addEventListener("click", openHomePrefecture);
  el.nearbySaunaButton?.addEventListener("click", () => findNearbySaunas({ announce: true }));
  el.settingsNearbyButton?.addEventListener("click", () => {
    closeSettingsDialog();
    setView("Explore");
    findNearbySaunas({ announce: true });
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
  el.closeVisitLogShareButton?.addEventListener("click", closeVisitLogShareDialog);
  el.shareVisitLogImageButton?.addEventListener("click", shareVisitLogImage);
  el.downloadVisitLogImageButton?.addEventListener("click", downloadVisitLogShareImage);
  el.visitLogShareDialog?.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeVisitLogShareDialog();
  });
  el.visitLogShareDialog?.addEventListener("close", clearVisitLogSharePreview);
  bindSwipeMenu();
}

function openSettingsDialog() {
  if (el.settingsDialog.open) return;
  if (typeof el.settingsDialog.show === "function") el.settingsDialog.show();
  else el.settingsDialog.setAttribute("open", "");
  el.settingsScrim.hidden = false;
  document.body.classList.add("settings-open");
  window.requestAnimationFrame(() => el.closeSettingsButton.focus({ preventScroll: true }));
}

function closeSettingsDialog() {
  if (el.settingsDialog.open) {
    if (typeof el.settingsDialog.close === "function") el.settingsDialog.close();
    else el.settingsDialog.removeAttribute("open");
  }
  el.settingsScrim.hidden = true;
  document.body.classList.remove("settings-open");
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
  if (view !== "Explore") clearSearchRenderTimer();
  if (view === "Passport") visibleLimit = 36;
  if (view === "Sameshi" && selectedPrefecture !== "全国") selectedSameshiPrefecture = selectedPrefecture;
  if (view !== "Facility") activeFacilityId = "";
  activeView = view;
  applyActiveView(view);
  pushViewUrl(view);
  renderAll();
  el.main.scrollTo({ top: 0, behavior: "smooth" });
}

function openFacilityDetail(facility) {
  clearSearchRenderTimer();
  facilityDetailTab = "info";
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
  document.body.classList.toggle("is-article", isArticleRoute());
  if (isArticleRoute()) return;
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
    renderVisitLogSummary();
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
  if (activeView === "About") {
    renderAboutPage();
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
  if (activeView === "Community") {
    renderCommunityPage();
    return;
  }
  if (activeView === "StampRally" || activeView === "Goshuin") return;
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
  document.body.classList.toggle("has-search-query", Boolean(searchTerm.trim()));
  if (searchTerm.trim()) el.exploreExtras.open = false;
  renderFilterButtons();
  renderPrefStrip();
  renderSourceRow();
  renderFeatureFilterGrid();
  if ((searchNeedles.length || selectedFeatureFilters.size) && !facilitySearchCache) {
    el.facilityList.setAttribute("aria-busy", "true");
    el.facilityList.inert = true;
    if (el.searchResultsStatus) el.searchResultsStatus.textContent = "検索を準備しています…";
    ensureFacilitySearchRecords().then(() => {
      if (activeView === "Explore" && !isSearchComposing) applySearchValue(el.searchInput.value,
        pendingSearchIntent?.value === el.searchInput.value ? pendingSearchIntent.startedAt : performance.now());
    }).catch((error) => {
      console.error("Search preparation failed", error);
      el.facilityList.setAttribute("aria-busy", "false");
      el.facilityList.inert = false;
      el.searchResultsStatus.textContent = "検索の準備に失敗しました。もう一度検索してください。";
    });
    return;
  }
  el.facilityList.setAttribute("aria-busy", "false");
  el.facilityList.inert = false;
  const facilities = getFilteredFacilities();
  if (el.searchResultsStatus) el.searchResultsStatus.textContent = `${selectedPrefecture} · ${facilities.length.toLocaleString("ja-JP")}件`;
  if (!searchTerm.trim()) renderSpotlight(facilities);

  if (!facilities.length) {
    const hasFilters = selectedPrefecture !== "全国" || selectedFeatureFilters.size > 0 || activeFilter !== "all";
    const resetButton = hasFilters
      ? `<button class="search-submit-button" type="button" data-action="clear-search-filters">絞り込みを解除</button>`
      : "";
    const addButton = searchTerm
      ? `<button class="ghost-button empty-add-button" type="button" data-action="prefill-add">このサウナを候補に追加</button>`
      : "";
    el.facilityList.innerHTML = `
      <div class="empty-state">
        <p>${hasFilters ? "条件に一致する候補は0件です。絞り込みを解除するか、検索文字を変えてください。" : searchTerm ? "該当する候補が見つかりません。別の表記でも検索できます。候補にないサウナは自分で登録できます。" : "表示できる候補がありません。時間をおいて再読み込みしてください。"}</p>
        <p>ジム・フィットネス併設施設は通常の検索対象外です。</p>
        ${resetButton}
        ${addButton}
      </div>
    `;
    return;
  }

  const visibleFacilities = facilities.slice(0, visibleLimit);
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
  delete el.searchResultsStatus.dataset.searchElapsedMs;
  delete el.searchResultsStatus.dataset.searchRenderMs;
  const startedAt = performance.now();
  pendingSearchIntent = { value, startedAt };
  const delay = options.immediate ? 0 : SEARCH_RENDER_DELAY_MS;
  searchRenderTimer = window.setTimeout(() => applySearchValue(value, startedAt), delay);
}

function clearSearchRenderTimer() {
  searchGeneration += 1;
  if (!searchRenderTimer) return;
  window.clearTimeout(searchRenderTimer);
  searchRenderTimer = 0;
}

async function applySearchValue(value, startedAt = performance.now()) {
  const generation = ++searchGeneration;
  searchRenderTimer = 0;
  if (!appModulesReady) {
    pendingSearchIntent = { value, startedAt };
    setSearchTerm(value);
    el.searchResultsStatus.textContent = "候補データを読み込んでいます…";
    return false;
  }
  if (value.trim()) {
    if (!facilitySearchCache) {
      el.facilityList.setAttribute("aria-busy", "true");
      el.facilityList.inert = true;
      el.searchResultsStatus.textContent = "検索を準備しています…";
    }
    try {
      await ensureFacilitySearchRecords();
    } catch (error) {
      console.error("Search preparation failed", error);
      if (generation === searchGeneration) {
        el.facilityList.setAttribute("aria-busy", "false");
        el.facilityList.inert = false;
        el.searchResultsStatus.textContent = "検索の準備に失敗しました。もう一度検索してください。";
      }
      return false;
    }
  }
  if (generation !== searchGeneration || activeView !== "Explore" || isSearchComposing || el.searchInput.value !== value) return false;
  const renderStartedAt = performance.now();
  setSearchTerm(value);
  visibleLimit = 36;
  moveToSearchPrefecture(value);
  if (!value.trim()) {
    renderSummary();
    renderQuestPanel();
  }
  renderExplore();
  if (document.activeElement === el.searchInput) el.main.scrollTo({ top: 0, behavior: "instant" });
  // Local diagnostics only: no query text or timing is transmitted to a server.
  el.searchResultsStatus.dataset.searchElapsedMs = (performance.now() - startedAt).toFixed(1);
  el.searchResultsStatus.dataset.searchRenderMs = (performance.now() - renderStartedAt).toFixed(1);
  if (pendingSearchIntent?.value === value) pendingSearchIntent = null;
  return true;
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
  el.searchPrefectureSelect.innerHTML = [
    `<option value="全国">全国</option>`,
    ...PREFECTURES.map(pref => `<option value="${escapeAttr(pref.name)}">${escapeHtml(pref.name)}</option>`),
  ].join("");
  el.searchPrefectureSelect.value = selectedPrefecture;
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
      <div class="spotlight-copy">
        <span class="spotlight-label">次の一湯</span>
        <div class="spotlight-title-row">
          <h3>${escapeHtml(facility.name)}</h3>
          ${renderFavoriteButton(facility, favorite, true)}
        </div>
        <p>${escapeHtml(getFacilityMeta(facility))}</p>
        ${getFacilityAddress(facility) ? `<p class="spotlight-address">${escapeHtml(getFacilityAddress(facility))}</p>` : ""}
      </div>
      ${renderStamp(facility, false)}
      <div class="spotlight-actions">
        <button class="primary-button" type="button" data-action="stamp" data-id="${escapeAttr(facility.id)}">押印</button>
        <button class="secondary-button ${wished ? "is-active" : ""}" type="button" data-action="wishlist" data-id="${escapeAttr(facility.id)}">${wished ? "候補入り" : "行きたい"}</button>
        ${renderMapRouteLink(facility)}
        ${renderFacilityShareButtons(facility)}
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
  const meta = getFacilityAreaLabel(facility) || facility.prefecture;
  const displayTags = getDisplayTags(facility).slice(0, 3);
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
      <button class="stamp-outline-button" type="button" data-action="stamp" data-id="${escapeAttr(facility.id)}" ${status ? "disabled" : ""}>${status ? escapeHtml(status.action) : "押印する"}</button>
      <button class="secondary-button ${wished ? "is-active" : ""}" type="button" data-action="wishlist" data-id="${escapeAttr(facility.id)}" aria-pressed="${wished}">${wished ? "候補入り" : "行きたい"}</button>
    `;

  return `
    <article class="facility-card" data-detail-card="${escapeAttr(facility.id)}" role="link" tabindex="0" aria-label="${escapeAttr(facility.name)}の詳細を見る">
      ${renderStamp(facility, Boolean(visited))}
      <div class="card-body">
        <div class="card-head">
          <h3 class="facility-name">${escapeHtml(facility.name)}</h3>
          <div class="card-head-actions">
            ${renderFavoriteButton(facility, favorite, true)}
          </div>
        </div>
        <p class="facility-meta">${escapeHtml(meta)}</p>
        ${renderFacilityAddress(facility)}
        ${renderFacilityCardFacts(facility)}
        <div class="facility-utility-actions">
          <button class="facility-detail-button" type="button" data-action="open-activity" data-id="${escapeAttr(facility.id)}">サ活を書く</button>
          ${renderMapRouteLink(facility, { compact: true })}
          <button class="facility-review-button" type="button" data-action="jump-reviews" data-id="${escapeAttr(facility.id)}">口コミ</button>
        </div>
        <div class="card-actions ${visited ? "card-actions-visited" : ""}">${actions}</div>
        <div class="card-evidence">${headBadge}${tags}</div>
        <details class="card-more-actions">
          <summary>共有</summary>
          <div class="card-more-body">
            ${renderFacilityShareButtons(facility, { includeReview: false })}
          </div>
        </details>
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

function renderFacilityShareButtons(facility, { includeReview = true } = {}) {
  return `
    <button class="facility-native-share-button" type="button" data-action="share-facility-native" data-id="${escapeAttr(facility.id)}">共有する</button>
    ${includeReview ? `<div class="facility-social-pair">` : ""}
      <button class="facility-share-button" type="button" data-action="share-facility" data-id="${escapeAttr(facility.id)}">Xでおすすめ</button>
      ${includeReview ? `<button class="facility-review-button" type="button" data-action="jump-reviews" data-id="${escapeAttr(facility.id)}">口コミ</button></div>` : ""}
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

function renderMapRouteLink(facility, { compact = false } = {}) {
  const hasLocation = Boolean(getFacilityAddress(facility) || getFacilityCoordinate(facility));
  const label = hasLocation ? "経路" : compact ? "地図" : "地図で探す";
  const accessibleLabel = hasLocation ? `${facility.name}への経路を開く` : `${facility.name}を地図で探す`;
  return `
    <a class="map-route-button" href="${escapeAttr(getFacilityDirectionsUrl(facility))}" target="_blank" rel="noreferrer" aria-label="Google Mapsで${escapeAttr(accessibleLabel)}">
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
    el.facilityDetail.innerHTML = '<div class="empty-state"><h2>施設が見つかりません</h2><button class="secondary-button" data-open-view="Explore">検索へ戻る</button></div>';
    return;
  }
  updateDocumentMetaForView("Facility", facility);
  syncFacilityStructuredData(facility);
  const id = escapeAttr(facility.id);
  const visited = Boolean(state.visited[facility.id]);
  const status = getFacilityStatus(facility);
  const wished = Boolean(state.wishlist[facility.id]);
  const favorite = Boolean(state.favorites[facility.id]);
  const evidence = getFacilityEvidence(facility);
  const facts = evidence?.facts || [];
  const address = getFacilityAddress(facility);
  const legacyFeatures = uniqueStrings([...(facility.features || []), ...(facility.tags || [])])
    .filter(value => normalizeFeature(value));
  const photo = getFacilityPhoto(facility);
  el.facilityDetail.innerHTML = `
    <article class="facility-detail facility-workspace">
      <button class="back-button" type="button" data-open-view="Explore">検索へ戻る</button>
      <header class="facility-masthead">
        ${renderStamp(facility, visited)}
        <div><h2>${escapeHtml(facility.name)}</h2><p>${escapeHtml(getFacilityAreaLabel(facility))}${visited ? " · 押印済み" : ""}</p></div>
        ${renderFavoriteButton(facility, favorite, true)}
      </header>
      <div class="facility-primary-actions" ${facilityDetailTab !== "info" ? "hidden" : ""}>
        <button class="facility-detail-button" type="button" data-action="open-activity" data-id="${id}">サ活を書く</button>
        ${renderMapRouteLink(facility)}
        <button class="facility-stamp-action" type="button" data-action="stamp" data-id="${id}" ${visited || status ? "disabled" : ""}>${visited ? "押印済み" : status ? escapeHtml(status.action) : "押印する"}</button>
      </div>
      <nav class="facility-tabs" aria-label="施設詳細の表示">
        ${[["info","施設情報"],["note","サ活ノート"],["reviews","口コミ"]].map(([tab,label]) => `<button type="button" data-action="detail-tab" data-tab="${tab}" data-id="${id}" aria-controls="facility-pane-${tab}" aria-current="${facilityDetailTab === tab ? "page" : "false"}">${label}</button>`).join("")}
      </nav>
      <section id="facility-pane-info" class="facility-pane" aria-label="施設情報" ${facilityDetailTab !== "info" ? "hidden" : ""}>
        ${status ? `<p class="facility-notice">${escapeHtml(status.badge)} — 訪問前に公式で営業状況を確認してください。</p>` : ""}
        ${isFitnessFacility(facility) ? '<p class="facility-notice">ジム・フィットネス併設施設。通常のサウナ検索・近隣候補には表示していません。利用条件は運営元へご確認ください。</p>' : ""}
        <dl class="facility-facts">
          ${facts.map(row => `<div><dt>${escapeHtml(row.label)}</dt><dd>${escapeHtml(row.value)} <a href="${escapeAttr(row.sourceUrl)}" target="_blank" rel="noreferrer" aria-label="${escapeAttr(row.label)}の公式出典">出典</a></dd></div>`).join("")}
          <div><dt>住所</dt><dd>${escapeHtml(address || `${getFacilityAreaLabel(facility)}（番地未確認）`)}${address ? `<small class="address-checked">住所照合: ${escapeHtml(facility.addressCheckedAt || "未確認")}</small>` : ""}</dd></div>
          ${!evidence && facility.access ? `<div><dt>掲載アクセス</dt><dd>${escapeHtml(facility.access)}</dd></div>` : ""}
        </dl>
        <p class="facility-provenance">${evidence ? `${evidence.method === "official-labeled-fields" ? "公式ページの項目を取得" : "掲載した公式情報を照合"}: ${escapeHtml(getEvidenceDate(evidence))}。${facts.some(row => row.label === "施設営業時間") ? "施設営業時間と浴場・サウナの利用時間は異なる場合があります。" : ""}${facts.some(row => /℃|[0-9０-９]度/.test(row.value)) ? "温度は掲載値であり実測ではありません。" : ""}臨時変更は公式へ。` : "料金・設備は参照元でご確認ください。確認できた項目から順次掲載します。"}</p>
        ${getMissingEvidenceFields(facility).length ? `<details class="facility-disclosure"><summary>掲載範囲・未確認項目</summary><p>未確認: ${escapeHtml(getMissingEvidenceFields(facility).join("・"))}。未掲載は「設備なし」を意味しません。${facility.sourceCheckedAt ? `参照ページの取得確認日: ${escapeHtml(facility.sourceCheckedAt)}（営業・設備の確認日ではありません）。` : ""}</p></details>` : ""}
        <div class="facility-inline-actions">${renderFacilitySourceBadge(facility)}<button type="button" data-action="report-facility" data-id="${id}">情報の修正</button></div>
        ${!evidence && (legacyFeatures.length || facility.note) ? `<details class="facility-disclosure"><summary>旧掲載の紹介・設備（未再照合）</summary>${facility.note ? `<p>${escapeHtml(facility.note)}</p>` : ""}<p>${escapeHtml(legacyFeatures.join(" / "))}</p><p>公式の裏付けを再確認できていないため、確定情報や設備検索には使用していません。</p></details>` : ""}
        <details class="facility-disclosure"><summary>サ印コレクションを見る</summary><img class="collection-preview" src="${escapeAttr(photo.url)}" alt="${escapeAttr(facility.name)}のサ印コレクション" loading="lazy" decoding="async" /></details>
      </section>
      <section id="facility-pane-note" class="facility-pane" aria-label="サ活ノート" ${facilityDetailTab !== "note" ? "hidden" : ""}>${renderActivityNotebook(facility)}</section>
      <section id="facility-pane-reviews" class="facility-pane review-panel" data-review-facility="${id}" aria-label="口コミ" ${facilityDetailTab !== "reviews" ? "hidden" : ""}>
        <div class="panel-head"><h3>口コミ</h3><span>${getFacilityReviews(facility.id).length}件</span></div>
        <button class="secondary-button" type="button" data-action="open-activity" data-id="${id}">サ活ノートから投稿</button>
        <div class="review-list" id="reviewList-${id}">${renderReviewList(facility)}</div>
      </section>
      <details class="facility-disclosure facility-more"><summary>保存・共有・周辺情報</summary>
        <div class="facility-secondary-actions">
          <button type="button" data-action="wishlist" data-id="${id}" aria-pressed="${wished}">${wished ? "行きたい登録済み" : "行きたいに保存"}</button>
          <button type="button" data-action="share-facility-native" data-id="${id}">共有する</button>
          <button type="button" data-action="share-facility" data-id="${id}">Xでおすすめ</button>
          <a href="${escapeAttr(getNearbySameshiUrl(facility))}" target="_blank" rel="noreferrer" aria-label="${escapeAttr(facility.name)}周辺の飲食店をGoogle Mapsで探す">周辺サ飯</a>
          <button type="button" data-open-view="Gear">持ち物・Gear</button>
        </div>
        <p class="facility-provenance">周辺サ飯は${address ? "掲載住所" : "施設名・エリア（住所未確認）"}を基準にGoogle Mapsで飲食店を検索します。距離・営業時間は検索先で確認してください。</p>
        <div class="lodging-search-card"><strong>周辺の宿</strong><div>${renderLodgingLinks(facility)}</div></div>
        ${!visited ? renderCheckinPanel(facility) : `<button class="tiny-undo-button" type="button" data-action="unstamp" data-id="${id}">押印を取り消す</button>`}
      </details>
    </article>`;
  loadFacilityReviews(facility.id);
}

function showFacilityDetailTab(facility, tab, { focus = false } = {}) {
  if (!["info", "note", "reviews"].includes(tab)) return;
  if (activeView !== "Facility" || activeFacilityId !== facility.id) openFacilityDetail(facility);
  facilityDetailTab = tab;
  el.facilityDetail.querySelector(".facility-primary-actions").hidden = tab !== "info";
  el.facilityDetail.querySelectorAll(".facility-pane").forEach(pane => { pane.hidden = pane.id !== `facility-pane-${tab}`; });
  el.facilityDetail.querySelectorAll('[data-action="detail-tab"]').forEach(button => button.setAttribute("aria-current", button.dataset.tab === tab ? "page" : "false"));
  el.main.scrollTo({ top: 0, behavior: "instant" });
  if (focus) el.facilityDetail.querySelector(`[data-tab="${tab}"]`)?.focus({ preventScroll: true });
}

function getEvidenceDate(evidence) {
  return [...new Set((evidence?.facts || []).map(row => row.checkedAt).filter(Boolean))].sort().at(-1) || "取得日不明";
}

function renderFacilityCardFacts(facility) {
  const evidence = getFacilityEvidence(facility);
  const rows = evidence?.facts.filter(row => ["営業状況", "料金", "営業時間", "施設営業時間", "設備", "設備・温度", "サウナ設備", "サウナルーム", "サウナストーブ", "サウナ収容人数", "水風呂", "水風呂収容人数", "利用条件", "休館日"].includes(row.label)).slice(0, 4) || [];
  return `<dl class="card-facts">${rows.map(row => `<div><dt>${escapeHtml(row.label)}</dt><dd>${escapeHtml(row.value)}</dd></div>`).join("")}</dl><p class="card-verification">${evidence ? `公式${evidence.method === "official-labeled-fields" ? "掲載値取得" : "照合"} ${escapeHtml(getEvidenceDate(evidence))} · 利用条件・出典は詳細へ` : "料金・営業時間・設備は公式で要確認"}</p>`;
}
function renderCheckinPanel(facility) {
  const coordinate = getFacilityCoordinate(facility);
  const active = state.activeCheckin?.facilityId === facility.id ? state.activeCheckin : null;
  const visited = Boolean(state.visited[facility.id]);
  if (getFacilityStatus(facility)) return `<p class="facility-provenance">${escapeHtml(getFacilityStatus(facility).badge)}のため滞在チェックインは利用できません。</p>`;
  if (visited) {
    return `
      <section class="detail-panel checkin-panel checkin-complete" aria-label="滞在チェックイン">
        <div><p class="eyebrow">CHECK IN</p><h3>この施設は押印済みです</h3><p>訪問記録としてサ印帳に保存されています。</p></div>
      </section>
    `;
  }
  if (!coordinate) {
    return `
      <section class="detail-panel checkin-panel checkin-unavailable" aria-label="滞在チェックイン">
        <div><p class="eyebrow">CHECK IN</p><h3>滞在チェックインは準備中</h3><p>座標確認済みの施設だけで利用できます。位置情報は端末内の距離判定にのみ使います。</p></div>
      </section>
    `;
  }
  if (active) {
    const elapsed = Math.max(0, Date.now() - Date.parse(active.startedAt));
    const percent = Math.min(100, Math.round((elapsed / CHECKIN_REQUIRED_MS) * 100));
    const remainingMinutes = Math.max(0, Math.ceil((CHECKIN_REQUIRED_MS - elapsed) / 60000));
    return `
      <section class="detail-panel checkin-panel is-active" aria-label="滞在チェックイン">
        <div>
          <p class="eyebrow">CHECK IN</p>
          <h3>滞在を確認中</h3>
          <p>施設付近で60分経過後、位置をもう一度確認して自動押印します。位置情報は送信しません。</p>
        </div>
        <div class="checkin-meter" aria-label="滞在確認 ${percent}%">
          <div><span class="checkin-progress-fill" style="width:${percent}%"></span></div>
          <strong class="checkin-remaining">あと${remainingMinutes}分</strong>
        </div>
        <button class="undo-button" type="button" data-action="cancel-checkin" data-id="${escapeAttr(facility.id)}">チェックインを中止</button>
      </section>
    `;
  }
  return `
    <section class="detail-panel checkin-panel" aria-label="滞在チェックイン">
      <div>
        <p class="eyebrow">CHECK IN</p>
        <h3>滞在60分で自動押印</h3>
        <p>ボタンを押した時だけ位置情報を確認します。300m以内で開始し、60分後の再確認に成功すると押印します。</p>
      </div>
      <button class="checkin-button" type="button" data-action="start-checkin" data-id="${escapeAttr(facility.id)}">滞在チェックインを開始</button>
    </section>
  `;
}

async function startFacilityCheckin(facility) {
  if (state.visited[facility.id] || getFacilityStatus(facility) || !getFacilityCoordinate(facility)) return;
  if (state.activeCheckin && state.activeCheckin.facilityId !== facility.id) {
    showToast("別の施設でチェックイン中です。先に中止してください");
    return;
  }
  try {
    const position = await getCurrentPosition({ highAccuracy: true, maximumAge: 0 });
    const distanceMeters = getDistanceFromFacilityMeters(position, facility);
    const allowance = CHECKIN_RADIUS_METERS + Math.min(100, Math.max(0, Number(position.coords.accuracy) || 0));
    if (distanceMeters > allowance) {
      showToast(`施設から約${Math.round(distanceMeters)}m離れています。300m以内で開始してください`);
      return;
    }
    state.activeCheckin = {
      facilityId: facility.id,
      startedAt: new Date().toISOString(),
      lastVerifiedAt: new Date().toISOString(),
      distanceMeters: Math.round(distanceMeters),
    };
    saveState();
    startCheckinTimer();
    renderAll();
    track("checkin_start", { facility_id: facility.id, prefecture: facility.prefecture || "" });
    showToast("滞在チェックインを開始しました");
  } catch (error) {
    showToast(getGeolocationErrorMessage(error));
  }
}

function cancelFacilityCheckin(facility) {
  if (state.activeCheckin?.facilityId !== facility.id) return;
  state.activeCheckin = null;
  saveState();
  stopCheckinTimer();
  renderAll();
  showToast("滞在チェックインを中止しました");
}

function resumeActiveCheckin() {
  const checkin = state.activeCheckin;
  if (!checkin) return;
  const facility = getFacilityById(checkin.facilityId);
  if (!facility || state.visited[checkin.facilityId]) {
    state.activeCheckin = null;
    saveState();
    return;
  }
  startCheckinTimer();
}

function startCheckinTimer() {
  stopCheckinTimer();
  checkinTimer = window.setInterval(updateCheckinProgress, 15000);
  updateCheckinProgress();
}

function stopCheckinTimer() {
  if (!checkinTimer) return;
  window.clearInterval(checkinTimer);
  checkinTimer = 0;
}

function updateCheckinProgress() {
  const checkin = state.activeCheckin;
  if (!checkin) {
    stopCheckinTimer();
    return;
  }
  const elapsed = Math.max(0, Date.now() - Date.parse(checkin.startedAt));
  const percent = Math.min(100, Math.round((elapsed / CHECKIN_REQUIRED_MS) * 100));
  const remainingMinutes = Math.max(0, Math.ceil((CHECKIN_REQUIRED_MS - elapsed) / 60000));
  document.querySelector(".checkin-progress-fill")?.style.setProperty("width", `${percent}%`);
  const remaining = document.querySelector(".checkin-remaining");
  if (remaining) remaining.textContent = remainingMinutes ? `あと${remainingMinutes}分` : "位置を再確認中";
  if (elapsed >= CHECKIN_REQUIRED_MS) completeFacilityCheckin();
}

async function completeFacilityCheckin() {
  const checkin = state.activeCheckin;
  if (!checkin || checkin.completing) return;
  checkin.completing = true;
  const facility = getFacilityById(checkin.facilityId);
  if (!facility || getFacilityStatus(facility)) {
    state.activeCheckin = null;
    saveState();
    stopCheckinTimer();
    renderAll();
    return;
  }
  try {
    const position = await getCurrentPosition({ highAccuracy: true, maximumAge: 0 });
    const distanceMeters = getDistanceFromFacilityMeters(position, facility);
    const allowance = CHECKIN_RADIUS_METERS + Math.min(100, Math.max(0, Number(position.coords.accuracy) || 0));
    if (distanceMeters > allowance) {
      state.activeCheckin = null;
      saveState();
      stopCheckinTimer();
      renderAll();
      showToast("施設付近を確認できなかったため自動押印しませんでした");
      return;
    }
    state.activeCheckin = null;
    saveState();
    stopCheckinTimer();
    stampFacility(facility);
    track("checkin_complete", { facility_id: facility.id, prefecture: facility.prefecture || "" });
  } catch (error) {
    checkin.completing = false;
    showToast(`${getGeolocationErrorMessage(error)}。チェックインは継続します`);
  }
}

function getDistanceFromFacilityMeters(position, facility) {
  return haversineDistanceKm(
    position.coords.latitude,
    position.coords.longitude,
    Number(facility.lat),
    Number(facility.lng),
  ) * 1000;
}

function getFacilityById(id) {
  return getFacilities({ includeFitness: true }).find((facility) => facility.id === id || (facility.legacyIds || []).includes(id));
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
    label: "",
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
  const displayName = [...name].length > 18 ? `${[...name].slice(0, 17).join("")}…` : name;
  const nameSize = [...displayName].length > 14 ? 34 : [...displayName].length > 10 ? 40 : 48;
  const meta = [facility.prefecture, facility.city].filter(Boolean).join(" / ") || "SAUNA STAMP";
  const displayMeta = [...meta].length > 24 ? `${[...meta].slice(0, 23).join("")}…` : meta;
  const serial = [...name].reduce((total, char) => (total * 31 + char.codePointAt(0)) % 10000, 173).toString().padStart(4, "0");
  const paper = "#FFF9ED";
  const ink = "#162321";
  const softInk = "#52615D";
  const line = "#DDD3C1";
  const seal = style.color || "#D6422B";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
      <defs>
        <pattern id="grain" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r="1" fill="#B9AD98" opacity=".22"/><circle cx="13" cy="12" r="1" fill="#B9AD98" opacity=".16"/></pattern>
        <linearGradient id="wash" x1="0" x2="1"><stop stop-color="#FFF9ED"/><stop offset="1" stop-color="#F2E8D6"/></linearGradient>
      </defs>
      <rect width="960" height="540" rx="38" fill="url(#wash)"/>
      <rect width="960" height="540" rx="38" fill="url(#grain)"/>
      <path d="M78 72h804v396H78z" fill="none" stroke="${line}" stroke-width="3"/>
      <path d="M392 72v396" stroke="${line}" stroke-width="3"/>
      <circle cx="235" cy="270" r="132" fill="#FFFDF7" stroke="${seal}" stroke-width="18"/>
      <circle cx="235" cy="270" r="101" fill="none" stroke="${seal}" stroke-width="5" stroke-dasharray="15 13" opacity=".72"/>
      <path d="M160 312c31-28 58-28 88 0 31-28 58-28 88 0" fill="none" stroke="#0B7771" stroke-width="15" stroke-linecap="round"/>
      <path d="M180 254c-18-24-14-47 7-69M235 254c-18-24-14-51 8-76M290 254c-18-24-14-47 7-69" fill="none" stroke="${seal}" stroke-width="15" stroke-linecap="round"/>
      <path d="M169 347c34 18 98 18 132 0" fill="none" stroke="${seal}" stroke-width="12" stroke-linecap="round"/>
      <rect x="112" y="95" width="98" height="36" rx="18" fill="${ink}"/>
      <text x="161" y="120" text-anchor="middle" font-family="system-ui, sans-serif" font-size="17" font-weight="800" fill="${paper}" letter-spacing="2">NO.${serial}</text>
      <text x="447" y="152" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="${seal}" letter-spacing="4">NEXT SAUNA</text>
      <text x="447" y="254" font-family="system-ui, sans-serif" font-size="${nameSize}" font-weight="760" fill="${ink}">${escapeSvgText(displayName)}</text>
      <text x="449" y="307" font-family="system-ui, sans-serif" font-size="23" font-weight="650" fill="${softInk}">${escapeSvgText(displayMeta)}</text>
      <rect x="447" y="352" width="116" height="48" rx="24" fill="${seal}"/>
      <text x="505" y="385" text-anchor="middle" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#FFF9ED">${escapeSvgText(style.kanji)}の一湯</text>
      <text x="447" y="444" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="${softInk}" letter-spacing="3">SAINCHO COLLECTION</text>
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
  const facilities = getFacilities({ includeFitness: true }).filter(facility => !isFitnessFacility(facility) || hasFacilityUserSignal(facility))
    .filter((facility) => selectedPrefecture === "全国" || facility.prefecture === selectedPrefecture);
  const sorted = [...facilities].sort((a, b) => {
    const aTime = state.visited[a.id]?.at || "";
    const bTime = state.visited[b.id]?.at || "";
    return bTime.localeCompare(aTime);
  });

  if (!sorted.length) {
    el.stampGrid.innerHTML = `<div class="empty-state"><p>候補を追加すると、ここにサ印帳が育ちます。</p></div>`;
    return;
  }

  el.stampGrid.innerHTML = sorted.slice(0, visibleLimit).map((facility) => {
    const visited = state.visited[facility.id];
    const memo = getFacilityMemo(facility.id);
    const date = visited ? formatDate(visited.at) : "未押印";
    return `
      <article class="stamp-tile" data-detail-card="${escapeAttr(facility.id)}" role="link" tabindex="0" aria-label="${escapeAttr(facility.name)}の施設詳細を見る">
        ${renderStamp(facility, Boolean(visited))}
        <p class="stamp-title">${escapeHtml(facility.name)}</p>
        <span class="stamp-date">${escapeHtml(date)}</span>
        ${memo ? `<p class="stamp-note">${escapeHtml(memo.text)}</p>` : ""}
        <button class="tiny-share-button" type="button" data-action="share-facility" data-id="${escapeAttr(facility.id)}">施設を共有</button>
        ${memo ? `<button class="tiny-share-button" type="button" data-action="share-note" data-id="${escapeAttr(facility.id)}">Xで共有</button>` : ""}
        ${visited ? `<button class="tiny-undo-button" type="button" data-action="unstamp" data-id="${escapeAttr(facility.id)}">取り消す</button>` : ""}
      </article>
    `;
  }).join("") + (sorted.length > visibleLimit
    ? `<button class="load-more-button" type="button" data-show-more-passport>さらに${Math.min(36, sorted.length - visibleLimit)}件表示</button>`
    : "");
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


function getLocalDateInputValue(date = new Date()) {
  const localTime = date.getTime() - date.getTimezoneOffset() * 60000;
  return new Date(localTime).toISOString().slice(0, 10);
}

function createActivityDraft(facility, { fresh = false } = {}) {
  return {
    text: fresh ? "" : (memoDrafts[facility.id] ?? state.facilityMemos[facility.id]?.text ?? ""),
    date: getLocalDateInputValue(), sets: "3", saunaMinutes: "8", waterMinutes: "1", restMinutes: "8", feeling: "4",
    recordVisit: false, publish: false, rating: "5", nickname: profile.nickname || "", logId: "", createdAt: "",
  };
}

function renderActivityNotebook(facility) {
  const id = escapeAttr(facility.id);
  const draft = activityDrafts.get(facility.id) || createActivityDraft(facility);
  activityDrafts.set(facility.id, draft);
  const logs = state.visitLogs[facility.id] || [];
  const memo = state.facilityMemos[facility.id];
  return `
    <div class="notebook-head"><h3>サ活ノート</h3><button type="button" data-action="new-activity" data-id="${id}">新しい記録</button></div>
    <form class="activity-form" data-activity-form="${id}">
      <label class="activity-text"><span>感想・自分用メモ</span><textarea name="text" maxlength="280" rows="3" placeholder="水風呂、混雑、再訪したい理由">${escapeHtml(draft.text)}</textarea></label>
      <p class="notebook-privacy">${memo ? `前回のメモ保存: ${escapeHtml(formatDate(memo.updatedAt))}。` : ""}通常はこの端末だけに保存します。</p>
      <label class="notebook-toggle"><input type="checkbox" name="recordVisit" ${draft.recordVisit ? "checked" : ""} /><span>セット数・時間も記録する</span></label>
      <fieldset class="activity-measurements" ${!draft.recordVisit ? "hidden disabled" : ""}>
        <legend>今回のサ活</legend>
        <label class="activity-date"><span>訪問日</span><input type="date" name="date" value="${escapeAttr(draft.date)}" required /></label>
        ${[["sets","セット数",1,8,1],["saunaMinutes","サウナ（分）",1,40,1],["waterMinutes","水風呂（分）",0,10,0.5],["restMinutes","休憩（分）",0,40,1],["feeling","体感（1〜5）",1,5,1]].map(([name,label,min,max,step]) => `<label><span>${label}</span><input type="number" inputmode="${step === 0.5 ? "decimal" : "numeric"}" name="${name}" min="${min}" max="${max}" step="${step}" required value="${escapeAttr(String(draft[name]))}" /></label>`).join("")}
      </fieldset>
      <label class="notebook-toggle"><input type="checkbox" name="publish" ${draft.publish ? "checked" : ""} /><span>この感想を口コミとして公開する</span></label>
      <fieldset class="activity-public" ${!draft.publish ? "hidden disabled" : ""}>
        <legend>公開する内容</legend>
        <p>上の感想が全員に公開されます。個人の連絡先は書かないでください。セット数・時間は公開しません。</p>
        <label><span>公開名（任意）</span><input name="nickname" maxlength="16" autocomplete="nickname" value="${escapeAttr(draft.nickname)}" placeholder="匿名サウナー" /></label>
        <label><span>評価</span><select name="rating">${[[5,"とても良い"],[4,"良い"],[3,"普通"],[2,"合わなかった"],[1,"良くなかった"]].map(([value,label]) => `<option value="${value}" ${Number(draft.rating) === value ? "selected" : ""}>${value} ${label}</option>`).join("")}</select></label>
      </fieldset>
      <p class="activity-save-status" role="status"></p>
      <button class="facility-detail-button activity-save" type="button" data-action="save-activity" data-id="${id}" ${activitySaves.has(facility.id) ? "disabled" : ""}>${draft.publish ? "保存して口コミを公開" : "端末に保存"}</button>
    </form>
    ${memo ? `<details class="facility-disclosure"><summary>保存済みメモの管理</summary><p>${escapeHtml(memo.text)}</p><button class="tiny-undo-button" type="button" data-action="delete-note" data-id="${id}">メモを削除</button></details>` : ""}
    <details class="facility-disclosure activity-history"><summary>保存済みのサ活（${logs.length}件）</summary>
      <div class="visit-log-list">${logs.length ? logs.map(log => `<article><strong>${escapeHtml(log.date)} · ${log.sets}セット · 体感${log.feeling}/5</strong><p>サウナ${log.saunaMinutes}分 / 水風呂${log.waterMinutes}分 / 休憩${log.restMinutes}分</p>${log.note ? `<p>${escapeHtml(log.note)}</p>` : ""}<div class="visit-log-actions"><button type="button" data-action="edit-activity" data-id="${id}" data-log-id="${escapeAttr(log.id)}">編集</button><button class="visit-log-share-button" type="button" data-action="share-visit-log" data-id="${id}" data-log-id="${escapeAttr(log.id)}">画像で共有</button><button class="tiny-undo-button" type="button" data-action="delete-visit-log" data-id="${id}" data-log-id="${escapeAttr(log.id)}">削除</button></div></article>`).join("") : "<p>保存済みの訪問記録はありません。</p>"}</div>
    </details>`;
}

function rememberActivityDraft(form) {
  const previous = activityDrafts.get(form.dataset.activityForm) || {};
  const value = name => form.elements.namedItem(name)?.value || "";
  const draft = { ...previous, dirty: true };
  for (const name of ["text", "date", "sets", "saunaMinutes", "waterMinutes", "restMinutes", "feeling", "nickname", "rating"]) draft[name] = value(name);
  draft.recordVisit = Boolean(form.elements.namedItem("recordVisit")?.checked);
  draft.publish = Boolean(form.elements.namedItem("publish")?.checked);
  activityDrafts.set(form.dataset.activityForm, draft);
  return draft;
}

function syncActivityOptions(form) {
  for (const [name, selector] of [["recordVisit", ".activity-measurements"], ["publish", ".activity-public"]]) {
    const enabled = form.elements.namedItem(name).checked;
    const fields = form.querySelector(selector);
    fields.hidden = !enabled;
    fields.disabled = !enabled;
  }
  form.querySelector(".activity-save").textContent = form.elements.namedItem("publish").checked ? "保存して口コミを公開" : "端末に保存";
}

async function saveActivityNote(facility, button) {
  if (button.disabled || activitySaves.has(facility.id)) return;
  const form = button.closest("[data-activity-form]");
  if (!form.reportValidity()) return;
  const draft = rememberActivityDraft(form);
  const text = draft.text.trim().slice(0, 280);
  const status = form.querySelector(".activity-save-status");
  if (!text && (!draft.recordVisit || draft.publish)) {
    status.textContent = "感想を入力してください。時間だけ残す場合は口コミ公開を外してください。";
    return;
  }
  const previousMemo = state.facilityMemos[facility.id];
  const previousLogs = state.visitLogs[facility.id];
  const now = new Date().toISOString();
  if (text) state.facilityMemos[facility.id] = { text, updatedAt: now };
  if (draft.recordVisit) {
    draft.logId ||= createClientId();
    draft.createdAt ||= now;
    const log = normalizeVisitLog({ ...draft, id: draft.logId, note: text, createdAt: draft.createdAt });
    state.visitLogs[facility.id] = [log, ...(previousLogs || []).filter(item => item.id !== log.id)].slice(0, 24);
  }
  try { saveState(); } catch {
    if (previousMemo) state.facilityMemos[facility.id] = previousMemo; else delete state.facilityMemos[facility.id];
    if (previousLogs) state.visitLogs[facility.id] = previousLogs; else delete state.visitLogs[facility.id];
    status.textContent = "端末への保存に失敗しました。空き容量やブラウザの保存設定を確認してください。入力は保持しています。";
    return;
  }
  delete memoDrafts[facility.id];
  draft.dirty = false;
  invalidateFacilityCaches();
  if (!draft.publish) {
    renderFacilityDetail();
    el.facilityDetail.querySelector(".activity-save-status").textContent = "端末に保存しました。口コミは公開していません。";
    el.facilityDetail.querySelector(".activity-save")?.focus?.({ preventScroll: true });
    return;
  }
  if (IS_STATIC_LOCAL_PREVIEW) {
    status.textContent = "端末に保存しました。このプレビューでは口コミを公開できません。";
    return;
  }
  button.disabled = true;
  activitySaves.add(facility.id);
  status.textContent = "端末に保存済み。口コミを送信しています…";
  try {
    const response = await fetch(REVIEWS_ENDPOINT, {
      method: "POST", headers: { "content-type": "application/json", accept: "application/json", authorization: `Bearer ${profile.authToken}` },
      body: JSON.stringify({ facilityId: facility.id, clientId: profile.id, nickname: draft.nickname.trim() || "匿名サウナー", rating: Number(draft.rating), text }),
      signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) throw new Error(response.status === 429 ? "投稿回数の制限です。時間を置いて再試行してください。" : "口コミを公開できませんでした。通信を確認して再試行してください。");
    const payload = await response.json();
    const submittedText = text.normalize("NFKC").replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, 280);
    if (payload.configured === false || !Array.isArray(payload.reviews) || !payload.reviews.some(review => review.id && review.owned === true && review.facilityId === facility.id && review.text === submittedText)) throw new Error("口コミの公開を確認できませんでした。");
    facilityReviews[facility.id] = normalizeReviews(payload.reviews);
    facilityReviewLoadedIds.add(facility.id);
    reviewsConfigured = true;
    const latestDraft = activityDrafts.get(facility.id);
    if (latestDraft === draft) draft.publish = false;
    activitySaves.delete(facility.id);
    if (activeView === "Facility" && activeFacilityId === facility.id) {
      renderFacilityDetail();
      el.facilityDetail.querySelector(".activity-save-status").textContent = latestDraft === draft ? "端末に保存し、口コミを公開しました。口コミタブで確認できます。" : "送信した感想を公開しました。送信後に編集した内容は、まだ保存・公開していません。";
    } else {
      showToast(`${facility.name}の口コミを公開しました`);
    }
  } catch (error) {
    const message = `端末への保存は完了。${error.name === "TimeoutError" ? "公開の確認が時間切れです。" : error.message} 入力は保持しています。`;
    if (activeView === "Facility" && activeFacilityId === facility.id) {
      el.facilityDetail.querySelector(".activity-save-status").textContent = message;
    } else {
      showToast(`${facility.name}: ${message}`);
    }
  } finally {
    activitySaves.delete(facility.id);
    button.disabled = false;
    if (activeView === "Facility" && activeFacilityId === facility.id) {
      const currentButton = el.facilityDetail.querySelector(".activity-save");
      if (currentButton) currentButton.disabled = false;
    }
  }
}


function deleteVisitLog(facility, logId) {
  const logs = state.visitLogs[facility.id] || [];
  state.visitLogs[facility.id] = logs.filter((log) => log.id !== logId);
  if (!state.visitLogs[facility.id].length) delete state.visitLogs[facility.id];
  if (activityDrafts.get(facility.id)?.logId === logId) activityDrafts.delete(facility.id);
  saveState();
  renderFacilityDetail();
  showToast("サ活ログを削除しました");
}

function renderVisitLogSummary() {
  if (!el.visitLogSummary) return;
  const entries = Object.entries(state.visitLogs)
    .flatMap(([facilityId, logs]) => logs.map((log) => ({ facilityId, ...log })))
    .sort((a, b) => String(b.date).localeCompare(String(a.date)) || String(b.createdAt).localeCompare(String(a.createdAt)));
  if (!entries.length) {
    el.visitLogSummary.innerHTML = `<div><p class="eyebrow">PRIVATE LOG</p><h3>サ活ログ</h3><p>施設詳細からセット数と体感を残すと、ここで振り返れます。</p></div>`;
    return;
  }
  const averageSets = (entries.reduce((sum, log) => sum + log.sets, 0) / entries.length).toFixed(1);
  const averageFeeling = (entries.reduce((sum, log) => sum + log.feeling, 0) / entries.length).toFixed(1);
  el.visitLogSummary.innerHTML = `
    <div class="panel-head"><div><p class="eyebrow">PRIVATE LOG</p><h3>サ活ログ</h3></div><span>${entries.length}回</span></div>
    <div class="visit-log-metrics"><div><strong>${averageSets}</strong><span>平均セット</span></div><div><strong>${averageFeeling}</strong><span>平均体感 / 5</span></div></div>
    <div class="visit-log-recent">${entries.slice(0, 5).map((log) => {
      const facility = getFacilityById(log.facilityId);
      return `<article class="visit-log-recent-item">
        <button type="button" data-nearby-facility="${escapeAttr(log.facilityId)}"><strong>${escapeHtml(facility?.name || "施設記録")}</strong><span>${escapeHtml(log.date)} / ${log.sets}セット / 体感${log.feeling}</span></button>
        ${facility ? `<button class="visit-log-share-button" type="button" data-action="share-visit-log" data-id="${escapeAttr(facility.id)}" data-log-id="${escapeAttr(log.id)}">画像で共有</button>` : ""}
      </article>`;
    }).join("")}</div>
  `;
}

async function openVisitLogShare(facility, logId) {
  const log = (state.visitLogs[facility.id] || []).find((item) => item.id === logId);
  if (!log || !el.visitLogShareDialog || !el.visitLogShareImage) {
    showToast("共有するサ活ログを確認できませんでした");
    return;
  }
  clearVisitLogSharePreview();
  el.visitLogShareImage.removeAttribute("src");
  el.visitLogShareImage.alt = `${facility.name}のサ活ログ共有画像`;
  el.visitLogShareStatus.textContent = "共有画像を作成しています";
  el.shareVisitLogImageButton.disabled = true;
  el.downloadVisitLogImageButton.disabled = true;
  if (typeof el.visitLogShareDialog.showModal === "function") el.visitLogShareDialog.showModal();
  else el.visitLogShareDialog.setAttribute("open", "");
  try {
    const blob = await createVisitLogShareImage(facility, log);
    const fileName = buildVisitLogShareFileName(facility, log);
    pendingVisitLogShareObjectUrl = URL.createObjectURL(blob);
    pendingVisitLogShare = { facility, log, blob, fileName };
    el.visitLogShareImage.src = pendingVisitLogShareObjectUrl;
    el.visitLogShareStatus.textContent = "この画像だけが共有されます。端末内の他の記録は含みません。";
    el.shareVisitLogImageButton.disabled = false;
    el.downloadVisitLogImageButton.disabled = false;
    track("visit_log_share_preview", { facility_id: facility.id, prefecture: facility.prefecture || "" });
  } catch (error) {
    console.error(error);
    el.visitLogShareStatus.textContent = "画像を作成できませんでした。再度お試しください。";
    showToast("サ活ログ画像を作成できませんでした");
  }
}

async function shareVisitLogImage() {
  if (!pendingVisitLogShare) return;
  const { facility, log, blob, fileName } = pendingVisitLogShare;
  const file = new File([blob], fileName, { type: "image/png" });
  const shareData = {
    title: `${facility.name}のサ活ログ | サ印帳`,
    text: `${formatVisitLogDate(log.date)}、${facility.name}で${log.sets}セット。体感${log.feeling}/5。`,
    url: getFacilityDetailUrl(facility),
    files: [file],
  };
  if (navigator.share && (!navigator.canShare || navigator.canShare({ files: [file] }))) {
    try {
      await navigator.share(shareData);
      track("share", { method: "webshare_visit_log_image", facility_id: facility.id, prefecture: facility.prefecture || "" });
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
    }
  }
  if (navigator.clipboard && window.ClipboardItem) {
    try {
      await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
      track("share", { method: "clipboard_visit_log_image", facility_id: facility.id, prefecture: facility.prefecture || "" });
      showToast("サ活ログ画像をコピーしました");
      return;
    } catch {
      // Image clipboard support varies by browser; saving is the reliable fallback.
    }
  }
  downloadVisitLogShareImage();
}

function downloadVisitLogShareImage() {
  if (!pendingVisitLogShare || !pendingVisitLogShareObjectUrl) return;
  const link = document.createElement("a");
  link.href = pendingVisitLogShareObjectUrl;
  link.download = pendingVisitLogShare.fileName;
  document.body.append(link);
  link.click();
  link.remove();
  track("share", { method: "download_visit_log_image", facility_id: pendingVisitLogShare.facility.id, prefecture: pendingVisitLogShare.facility.prefecture || "" });
  showToast("サ活ログ画像を保存しました");
}

function closeVisitLogShareDialog() {
  if (el.visitLogShareDialog?.open) el.visitLogShareDialog.close();
  else el.visitLogShareDialog?.removeAttribute("open");
  clearVisitLogSharePreview();
}

function clearVisitLogSharePreview() {
  if (pendingVisitLogShareObjectUrl) URL.revokeObjectURL(pendingVisitLogShareObjectUrl);
  pendingVisitLogShareObjectUrl = "";
  pendingVisitLogShare = null;
}

async function createVisitLogShareImage(facility, log) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("canvas-unavailable");
  const headerImage = await loadCanvasImage(new URL("/assets/saincho-header-ritual.webp", location.origin).href).catch(() => null);
  const appIcon = await loadCanvasImage(new URL("/icons/saincho-icon-1024.png", location.origin).href).catch(() => null);

  context.fillStyle = "#F2EBDD";
  context.fillRect(0, 0, canvas.width, canvas.height);
  if (headerImage) drawCanvasImageCover(context, headerImage, 0, 0, 1080, 300);
  else {
    context.fillStyle = "#122421";
    context.fillRect(0, 0, 1080, 300);
  }
  context.fillStyle = "rgba(7, 17, 15, 0.62)";
  context.fillRect(0, 0, 1080, 300);

  if (appIcon) {
    drawCanvasRoundedRect(context, 56, 54, 124, 124, 24, "#FFF9EE");
    context.drawImage(appIcon, 64, 62, 108, 108);
  }
  context.fillStyle = "#FFFFFF";
  context.font = '800 30px -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif';
  context.fillText("SAUNA STAMP RALLY", 210, 94);
  context.font = '900 62px -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif';
  context.fillText("サ印帳", 208, 166);
  context.fillStyle = "#F5D661";
  context.font = '800 26px -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif';
  context.fillText("サ活の余韻を、一枚に。", 208, 214);

  drawCanvasRoundedRect(context, 46, 258, 988, 1018, 30, "#FFFDF8");
  context.fillStyle = "#D9402E";
  context.font = '900 24px -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif';
  context.fillText("SAUNA LOG", 92, 322);
  context.fillStyle = "#12201E";
  context.font = '900 52px -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif';
  const facilityBottom = drawCanvasWrappedText(context, facility.name, 92, 392, 620, 66, 2);
  context.fillStyle = "#5C6965";
  context.font = '750 28px -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif';
  const area = [facility.prefecture, facility.city].filter(Boolean).join(" / ");
  context.fillText(area || "サウナ記録", 92, facilityBottom + 46);
  context.fillText(formatVisitLogDate(log.date), 92, facilityBottom + 90);

  const sealX = 818;
  const sealY = facilityBottom + 62;
  context.strokeStyle = "#D9402E";
  context.lineWidth = 12;
  context.beginPath();
  context.arc(sealX, sealY, 84, 0, Math.PI * 2);
  context.stroke();
  context.setLineDash([12, 10]);
  context.lineWidth = 4;
  context.beginPath();
  context.arc(sealX, sealY, 65, 0, Math.PI * 2);
  context.stroke();
  context.setLineDash([]);
  context.fillStyle = "#D9402E";
  context.font = '900 48px -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif';
  context.textAlign = "center";
  context.fillText(String(log.sets), sealX, sealY + 8);
  context.font = '800 19px -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif';
  context.fillText("SETS", sealX, sealY + 39);
  context.textAlign = "left";

  const metricsY = Math.max(620, facilityBottom + 190);
  const metrics = [
    ["サウナ", `${log.saunaMinutes}分`],
    ["水風呂", `${log.waterMinutes}分`],
    ["休憩", `${log.restMinutes}分`],
  ];
  metrics.forEach(([label, value], index) => {
    const x = 92 + index * 300;
    drawCanvasRoundedRect(context, x, metricsY, 276, 150, 20, index === 0 ? "#E64A37" : index === 1 ? "#DFF2EF" : "#F2E5C9");
    context.fillStyle = index === 0 ? "#FFFFFF" : "#52615D";
    context.font = '800 23px -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif';
    context.fillText(label, x + 24, metricsY + 43);
    context.fillStyle = index === 0 ? "#FFFFFF" : "#12201E";
    context.font = '900 46px -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif';
    context.fillText(value, x + 24, metricsY + 108);
  });

  const feelingY = metricsY + 206;
  context.fillStyle = "#52615D";
  context.font = '800 24px -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif';
  context.fillText("今日の体感", 92, feelingY);
  context.fillStyle = "#D6A719";
  context.font = '900 50px -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif';
  context.fillText(`${"★".repeat(log.feeling)}${"☆".repeat(5 - log.feeling)}`, 92, feelingY + 62);

  const noteY = feelingY + 118;
  drawCanvasRoundedRect(context, 92, noteY, 876, 190, 22, "#EDF4F1");
  context.fillStyle = "#007F77";
  context.font = '900 22px -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif';
  context.fillText("TODAY'S NOTE", 120, noteY + 42);
  context.fillStyle = "#12201E";
  context.font = '750 30px -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif';
  drawCanvasWrappedText(context, log.note || "今日のコンディションを記録しました。", 120, noteY + 92, 816, 44, 2);

  context.fillStyle = "#52615D";
  context.font = '700 22px -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif';
  context.fillText("自分に合う入り方を、次の一湯へ。", 92, 1220);
  context.fillStyle = "#007F77";
  context.font = '800 22px -apple-system, BlinkMacSystemFont, "Hiragino Sans", sans-serif';
  context.fillText("saincho-sauna-stamp-rally.pages.dev", 92, 1252);

  return new Promise((resolve, reject) => canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("canvas-encode-failed")), "image/png", 0.92));
}

function drawCanvasRoundedRect(context, x, y, width, height, radius, fillStyle) {
  const r = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + width, y, x + width, y + height, r);
  context.arcTo(x + width, y + height, x, y + height, r);
  context.arcTo(x, y + height, x, y, r);
  context.arcTo(x, y, x + width, y, r);
  context.closePath();
  context.fillStyle = fillStyle;
  context.fill();
}

function drawCanvasWrappedText(context, text, x, y, maxWidth, lineHeight, maxLines) {
  const units = String(text || "").match(/[A-Za-z0-9][A-Za-z0-9＆&.\-]*|./gu) || [];
  const lines = [];
  let line = "";
  const lineStartProhibited = /^[、。，．・：；？！!?)）］｝」』】〉》〕〙〗〟’”]$/u;
  units.forEach((unit) => {
    const candidate = line + unit;
    if (line && context.measureText(candidate).width > maxWidth) {
      if (lineStartProhibited.test(unit)) {
        lines.push(candidate);
        line = "";
      } else {
        lines.push(line.trimEnd());
        line = unit.trimStart();
      }
    } else {
      line = candidate;
    }
  });
  if (line) lines.push(line.trimEnd());
  const visible = lines.slice(0, maxLines);
  if (lines.length > maxLines && visible.length) {
    let last = visible[visible.length - 1];
    while (last && context.measureText(`${last}…`).width > maxWidth) last = last.slice(0, -1);
    visible[visible.length - 1] = `${last}…`;
  }
  visible.forEach((value, index) => context.fillText(value, x, y + index * lineHeight));
  return y + Math.max(0, visible.length - 1) * lineHeight;
}

function drawCanvasImageCover(context, image, x, y, width, height) {
  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const sourceWidth = width / scale;
  const sourceHeight = height / scale;
  const sourceX = (image.naturalWidth - sourceWidth) / 2;
  const sourceY = (image.naturalHeight - sourceHeight) / 2;
  context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
}

function loadCanvasImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = url;
  });
}

function buildVisitLogShareFileName(facility, log) {
  const safeName = facility.name.normalize("NFKC").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "").slice(0, 40) || "sauna";
  return `saincho-${log.date}-${safeName}.png`;
}

function formatVisitLogDate(value) {
  const [year, month, day] = String(value || "").split("-");
  return year && month && day ? `${year}年${Number(month)}月${Number(day)}日` : value;
}


function renderReviewList(facility) {
  const reviews = getFacilityReviews(facility.id);
  return `${reviews.map(review => renderReviewCard(facility, review)).join("")}${reviewsConfigured === false
    ? `<p class="review-empty" role="status">口コミを取得できませんでした。入力内容は保持しています。</p><button class="secondary-button" type="button" data-action="retry-reviews" data-id="${escapeAttr(facility.id)}">口コミを再取得</button>`
    : reviews.length ? "" : `<p class="review-empty">まだ口コミはありません。最初の感想を残しませんか。</p>`}`;
}

function focusFacilityReviews(facility) {
  showFacilityDetailTab(facility, "reviews", { focus: true });
}

function renderReviewCard(facility, review) {
  const owned = review.owned || (review.clientId && review.clientId === profile.id);
  return `
    <article class="review-card">
      <div>
        <strong>${"★".repeat(Math.max(1, Math.min(5, Number(review.rating) || 5)))}</strong>
        <span>${escapeHtml(review.nickname || "匿名サウナー")} / ${escapeHtml(formatDate(review.createdAt) || "投稿日不明")}</span>
      </div>
      <p>${escapeHtml(review.text)}</p>
      ${String(review.id).startsWith("local-") ? `<small>この端末のみの記録・未公開</small>` : ""}
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
  renderJapanMap();
  renderLeaderboard();
  renderFavoritesPanel();
  renderPromotionCopyGrid();
}

async function renderJapanMap() {
  if (!el.japanMap) return;
  if (!japanMapMarkup) {
    el.japanMap.innerHTML = `<div class="map-loading"><span class="loading-spinner" aria-hidden="true"></span><strong>日本地図を読み込み中</strong></div>`;
    try {
      const response = await fetch(JAPAN_MAP_URL);
      if (!response.ok) throw new Error("map-load-failed");
      japanMapMarkup = await response.text();
    } catch {
      el.japanMap.innerHTML = `<div class="community-empty"><strong>地図を読み込めませんでした</strong><span>下の県一覧は引き続き利用できます。</span></div>`;
      return;
    }
  }
  if (activeView !== "Stats") return;
  el.japanMap.innerHTML = japanMapMarkup;
  const countsByPref = countVisitedByPrefecture();
  const candidatesByPref = countEligibleFacilitiesByPrefecture();
  el.japanMap.querySelectorAll(".prefecture[data-code]").forEach((node) => {
    const pref = PREFECTURES[Number(node.dataset.code) - 1];
    if (!pref) return;
    const visited = countsByPref[pref.name] || 0;
    const total = candidatesByPref[pref.name] || 0;
    const ratio = total ? visited / total : 0;
    const level = ratio >= 1 ? 3 : ratio >= 0.5 ? 2 : ratio > 0 ? 1 : 0;
    node.classList.add(`map-progress-${level}`);
    node.setAttribute("role", "button");
    node.setAttribute("tabindex", "0");
    node.setAttribute("aria-label", `${pref.name} ${visited}/${total}湯${level === 3 ? " マスター" : ""}`);
    const title = node.querySelector("title") || document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = `${pref.name} ${visited}/${total}湯`;
    if (!title.parentNode) node.prepend(title);
  });
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
  el.profileStatus.textContent = isProfileComplete() ? "端末に保存済み" : "未登録";
}

function renderLeaderboard() {
  const visitedTotal = Object.keys(state.visited).length;
  const ownEntry = leaderboardEntries.find(entry => entry.id === profile.id);
  const publicStamps = ownEntry?.stamps ?? 0;
  const entries = mergeRankingEntries(leaderboardEntries, null);
  const sorted = [...entries]
    .sort((a, b) => b.stamps - a.stamps || a.nickname.localeCompare(b.nickname, "ja"))
    .slice(0, 10);
  const ownRank = ownEntry ? sorted.findIndex((entry) => entry.id === profile.id) + 1 : 0;
  const topTenEdge = sorted.length >= 10 ? sorted[9] : null;
  const gapToTopTen = topTenEdge && !ownRank ? Math.max(1, topTenEdge.stamps - visitedTotal + 1) : 0;

  if (!isProfileComplete()) {
    el.leaderboardSummary.textContent = "登録すると上位10名ランキングに同期されます。メールは表示されません。";
  } else if (rankingConfigured) {
    el.leaderboardSummary.textContent = ownRank > 1
      ? `あなたは${ownRank}位。${publicStamps}湯の記録を公開中です。`
      : ownRank === 1
        ? `あなたは1位。${publicStamps}湯の記録を公開中です。`
        : gapToTopTen
          ? `上位10名まであと${gapToTopTen}湯。${visitedTotal}湯で追走中です。`
          : "公開ランキングの上位10名にあなたの記録はありません。";
  } else {
    el.leaderboardSummary.textContent = rankingLastError || "ランキングを確認しています。登録内容は端末内に保存されます。";
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
  el.leaderboardUpdatedAt.textContent = rankingConfigured
    ? `表示中は30秒ごとに確認${rankingUpdatedAt ? ` / 取得 ${formatDateTime(rankingUpdatedAt)}` : ""}`
    : "通信状態を確認して「更新」から再試行できます。";
  if (el.profileFeedback) {
    el.profileFeedback.textContent = rankingSaving ? "ランキングに送信しています…" : rankingLastError || (isProfileComplete() ? "登録内容はこの端末に保存されています。別端末への引き継ぎには対応していません。" : "ニックネームとメールで参加できます。公開されるのはニックネーム・サ印数・称号です。");
    el.profileFeedback.classList.toggle("is-error", Boolean(rankingLastError));
  }
  el.profileForm.querySelector('[type="submit"]').disabled = rankingSaving;
  el.profileStatus.textContent = rankingSaving ? "送信中" : isProfileComplete() ? (rankingLastError ? "再送信が必要" : "端末に保存済み") : "未登録";
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
  const prefectures = ["全国", ...uniqueStrings(SAUNA_STAY_LINKS.map((item) => item.prefecture).filter((name) => name && name !== "全国"))];
  if (!prefectures.includes(selectedStayPrefecture)) selectedStayPrefecture = "全国";
  const stays = selectedStayPrefecture === "全国"
    ? SAUNA_STAY_LINKS
    : SAUNA_STAY_LINKS.filter((item) => item.prefecture === selectedStayPrefecture);
  el.stayCount.textContent = `${stays.length}/${SAUNA_STAY_LINKS.length}件`;
  el.stayPrefStrip.innerHTML = prefectures.map((prefecture) => `
    <button class="pref-chip ${selectedStayPrefecture === prefecture ? "pref-chip-active" : ""}" type="button" data-stay-prefecture="${escapeAttr(prefecture)}">
      ${escapeHtml(prefecture)}
    </button>
  `).join("");
  el.stayGrid.innerHTML = stays.map((item) => `
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

function renderAboutPage() {
  if (!el.aboutContent) return;
  const facilities = getFacilities();
  const withAddress = facilities.filter((facility) => getFacilityAddress(facility)).length;
  const withArea = facilities.filter((facility) => facility.city || getFacilityAddress(facility)).length;
  const withOfficial = facilities.filter((facility) => facility.officialUrl).length;
  const directSources = facilities.filter((facility) => facility.sourceUrl && !/[?&](keyword|q)=/i.test(facility.sourceUrl)).length;
  const reviewedAt = formatDate(DATASET_META.catalogReviewedAt) || "未設定";
  const methodologyAt = formatDate(DATASET_META.methodologyVersion) || "未設定";
  const percent = (value) => facilities.length ? `${Math.round((value / facilities.length) * 100)}%` : "0%";

  el.aboutContent.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">TRUST & METHODOLOGY</p>
        <h2>運営・データ方針</h2>
      </div>
      <span class="count-badge">透明性</span>
    </div>
    <section class="about-hero">
      <span>件数より、判断できる情報へ</span>
      <h3>確認できた事実と未確認を分けて表示します</h3>
      <p>サ印帳は施設名、都道府県、参照URLを基礎にし、住所、公式URL、設備タグは公開確認できた項目だけを掲載します。未確認項目を推測で埋めません。</p>
    </section>
    <section class="about-metrics" aria-label="掲載データの品質指標">
      <article><span>表示候補</span><strong>${facilities.length.toLocaleString("ja-JP")}</strong><em>重複統合後</em></article>
      <article><span>番地住所あり</span><strong>${percent(withAddress)}</strong><em>${withAddress.toLocaleString("ja-JP")}件</em></article>
      <article><span>市区町村以上</span><strong>${percent(withArea)}</strong><em>${withArea.toLocaleString("ja-JP")}件</em></article>
      <article><span>直接参照URL</span><strong>${percent(directSources)}</strong><em>${directSources.toLocaleString("ja-JP")}件</em></article>
    </section>
    <div class="about-grid">
      <section class="about-card">
        <p class="eyebrow">EDITORIAL</p>
        <h3>掲載と検証の基準</h3>
        <ol>
          <li>同一県の名称・別名・旧称を正規化し、重複候補を統合します。</li>
          <li>住所と特徴は参照ページまたは公式情報で公開確認できた場合のみ表示します。</li>
          <li>開業予定・要確認は県マスターの対象外にし、訪問済み施設と混同させません。</li>
          <li>営業時間、料金、休館日は変動するため、訪問前の公式確認を案内します。</li>
        </ol>
        <p>カタログ確認日: ${escapeHtml(reviewedAt)} / 方針更新日: ${escapeHtml(methodologyAt)}</p>
      </section>
      <section class="about-card">
        <p class="eyebrow">CORRECTIONS</p>
        <h3>誤りを直す最短経路</h3>
        <p>施設詳細の「情報修正を知らせる」から、施設ID、現在値、正しい内容、確認できる公式URLを送れます。ユーザー追加候補は共有ストレージ接続時に他の利用者へ反映されます。</p>
        <button class="secondary-button" type="button" data-open-view="Contact">掲載・修正窓口を開く</button>
        <a class="secondary-button" href="https://saincho-official.hatenablog.com/" rel="me noreferrer">公式ブログで更新情報を見る</a>
      </section>
      <section class="about-card">
        <p class="eyebrow">PRIVACY</p>
        <h3>記録と個人情報</h3>
        <p>押印、行きたい、お気に入り、メモは原則として端末内に保存します。ランキングのメールアドレスはサーバー側でハッシュ化し、画面には表示しません。お問い合わせ内容は返信対応のため保存される場合があります。</p>
      </section>
      <section class="about-card">
        <p class="eyebrow">MONETIZATION</p>
        <h3>広告・アフィリエイト</h3>
        <p>GearのAmazon・楽天リンクを経由した購入で運営が紹介料を受け取る場合があります。表示順や説明は報酬額ではなく用途別に整理し、価格、在庫、レビューはリンク先の最新情報を優先します。広告掲載は広告であることが分かる表示にします。</p>
      </section>
      <section class="about-card about-card-wide">
        <p class="eyebrow">AUTOMATION</p>
        <h3>自動化できること、できないこと</h3>
        <p>GitHubへの変更はCloudflare Pagesへ自動デプロイされ、ビルド時にID、都道府県件数、重複、URL形式、記事数、サ飯数を検査します。外部施設の閉店、移転、料金変更を推測で自動上書きはしません。監査で異常を検出し、根拠を確認してから更新します。</p>
        <div class="about-inline-stats"><span>公式URLあり ${withOfficial.toLocaleString("ja-JP")}件</span><span>サ飯 ${SAMESHI_SPOTS.length.toLocaleString("ja-JP")}件</span><span>入門記事 ${SAUNA_ARTICLES.length}本</span><span>Gear ${GEAR_PRODUCTS.length}件</span></div>
      </section>
    </div>
  `;
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

function requestFacilityCorrection(facility) {
  setView("Contact");
  window.setTimeout(() => {
    const typeInput = [...(el.contactForm?.elements?.type || [])]
      .find((input) => input.value === "内容修正・権利連絡");
    if (typeInput) typeInput.checked = true;
    const organization = el.contactForm?.elements?.organization;
    const website = el.contactForm?.elements?.website;
    const prefecture = el.contactForm?.elements?.prefecture;
    const message = el.contactForm?.elements?.message;
    if (organization) organization.value = facility.name;
    if (website && !website.value) website.value = facility.officialUrl || facility.sourceUrl || "";
    if (prefecture) prefecture.value = getFacilityAreaLabel(facility);
    if (message && !message.value.trim()) {
      message.value = [
        `施設ID: ${facility.id}`,
        `施設名: ${facility.name}`,
        `現在の掲載住所: ${getFacilityAddress(facility) || "未掲載"}`,
        "修正したい項目:",
        "正しい内容:",
        "確認できる公式URL:",
      ].join("\n");
    }
    message?.focus();
    track("facility_correction_intent", { facility_id: facility.id, prefecture: facility.prefecture || "" });
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

function renderCommunityPage() {
  if (!el.communityList) return;
  const localEvents = state.localCommunityEvents || [];
  const events = normalizeCommunityEvents([...communityEvents, ...localEvents]);
  const filtered = selectedCommunityPrefecture === "全国"
    ? events
    : events.filter((item) => item.prefecture === selectedCommunityPrefecture);
  el.communityCount.textContent = `${filtered.length}件`;
  const activePrefectures = uniqueStrings(events.map((item) => item.prefecture));
  const filterPrefs = ["全国", ...activePrefectures];
  el.communityFilter.innerHTML = filterPrefs.map((prefecture) => `
    <button class="feature-chip ${selectedCommunityPrefecture === prefecture ? "is-active" : ""}" type="button" data-action="community-filter" data-prefecture="${escapeAttr(prefecture)}">${escapeHtml(prefecture === "全国" ? "全国" : shortPrefName(prefecture))}</button>
  `).join("");
  if (!filtered.length) {
    el.communityList.innerHTML = `
      <div class="community-empty">
        <strong>${selectedCommunityPrefecture === "全国" ? "最初のサ活募集を作れます" : `${escapeHtml(selectedCommunityPrefecture)}の募集はまだありません`}</strong>
        <span>日時と集合施設を決め、無理のない少人数募集から始めましょう。</span>
      </div>
    `;
    return;
  }
  el.communityList.innerHTML = filtered.map(renderCommunityCard).join("");
}

function renderCommunityCard(item) {
  const joined = Boolean(state.joinedCommunityEvents[item.id]) || item.attendees.includes(profile.id);
  const date = new Intl.DateTimeFormat("ja-JP", { month: "numeric", day: "numeric", weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(item.date));
  return `
    <article class="community-card">
      <div class="community-date"><strong>${escapeHtml(date)}</strong><span>${escapeHtml(item.prefecture)}</span></div>
      <div class="community-copy">
        <span class="community-host">${escapeHtml(item.nickname || "匿名サウナー")}さん主催</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p><strong>${escapeHtml(item.venue)}</strong>${item.note ? `<span>${escapeHtml(item.note)}</span>` : ""}</p>
      </div>
      <div class="community-participation">
        <span>${item.attendeeCount + 1}人参加予定</span>
        <button class="${joined ? "secondary-button is-active" : "primary-button"}" type="button" data-action="community-join" data-event-id="${escapeAttr(item.id)}" ${joined ? "disabled" : ""}>${joined ? "参加予定" : "参加する"}</button>
      </div>
    </article>
  `;
}

async function loadCommunityEvents(options = {}) {
  if (IS_STATIC_LOCAL_PREVIEW || communityConfigured === false) {
    renderCommunityPage();
    return;
  }
  try {
    const response = await fetch(COMMUNITY_ENDPOINT, { headers: { accept: "application/json" } });
    if (!response.ok) throw new Error("community-load-failed");
    const payload = await response.json();
    communityConfigured = payload.configured !== false;
    communityEvents = normalizeCommunityEvents(payload.events || []);
    if (activeView === "Community") renderCommunityPage();
    if (options.announce) showToast("サ活募集を更新しました");
  } catch {
    communityConfigured = false;
    if (activeView === "Community") renderCommunityPage();
    if (options.announce) showToast("共有募集を読み込めませんでした。端末内の募集を表示します");
  }
}

async function submitCommunityEvent(event) {
  event.preventDefault();
  const form = new FormData(el.communityForm);
  const payload = {
    action: "create",
    title: String(form.get("title") || "").trim(),
    prefecture: String(form.get("prefecture") || "").trim(),
    date: String(form.get("date") || "").trim(),
    venue: String(form.get("venue") || "").trim(),
    note: String(form.get("note") || "").trim(),
    clientId: profile.id || createClientId(),
    nickname: profile.nickname || "匿名サウナー",
  };
  const normalized = normalizeCommunityEvent({ ...payload, id: `local-event-${Date.now().toString(36)}`, createdAt: new Date().toISOString(), attendees: [] });
  if (!normalized || Date.parse(normalized.date) <= Date.now()) {
    setCommunityStatus("未来の日時と必須項目を確認してください。", true);
    return;
  }
  setCommunityStatus("公開しています。", false);
  if (!IS_STATIC_LOCAL_PREVIEW && communityConfigured !== false) {
    try {
      const response = await fetch(COMMUNITY_ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("community-save-failed");
      const result = await response.json();
      communityConfigured = result.configured !== false;
      communityEvents = normalizeCommunityEvents(result.events || []);
      el.communityForm.reset();
      renderCommunityPrefectureSelect();
      renderCommunityPage();
      setCommunityStatus("サ活募集を公開しました。", false);
      track("community_create", { prefecture: payload.prefecture });
      return;
    } catch {
      communityConfigured = false;
    }
  }
  state.localCommunityEvents = normalizeCommunityEvents([normalized, ...(state.localCommunityEvents || [])]).slice(0, 30);
  saveState();
  el.communityForm.reset();
  renderCommunityPrefectureSelect();
  renderCommunityPage();
  setCommunityStatus("この端末に募集を保存しました。共有ストレージ接続後に全ユーザーへ公開できます。", false);
}

async function joinCommunityEvent(eventId) {
  const item = normalizeCommunityEvents([...communityEvents, ...(state.localCommunityEvents || [])]).find((event) => event.id === eventId);
  if (!item || state.joinedCommunityEvents[eventId]) return;
  if (!IS_STATIC_LOCAL_PREVIEW && communityConfigured !== false && !eventId.startsWith("local-event-")) {
    try {
      const response = await fetch(COMMUNITY_ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify({ action: "join", eventId, clientId: profile.id || createClientId(), nickname: profile.nickname || "匿名サウナー" }),
      });
      if (!response.ok) throw new Error("community-join-failed");
      const result = await response.json();
      communityEvents = normalizeCommunityEvents(result.events || []);
    } catch {
      communityConfigured = false;
    }
  } else if (eventId.startsWith("local-event-")) {
    state.localCommunityEvents = (state.localCommunityEvents || []).map((event) => event.id === eventId
      ? { ...event, attendees: uniqueStrings([...(event.attendees || []), profile.id || createClientId()]) }
      : event);
  }
  state.joinedCommunityEvents[eventId] = { at: new Date().toISOString() };
  saveState();
  renderCommunityPage();
  showToast(`${item.title}に参加予定として登録しました`);
  track("community_join", { event_id: eventId, prefecture: item.prefecture });
}

function normalizeCommunityEvents(values) {
  if (!Array.isArray(values)) return [];
  const seen = new Set();
  return values.map(normalizeCommunityEvent).filter((item) => {
    if (!item || seen.has(item.id) || Date.parse(item.date) < Date.now() - 6 * 60 * 60 * 1000) return false;
    seen.add(item.id);
    return true;
  }).sort((a, b) => String(a.date).localeCompare(String(b.date))).slice(0, 80);
}

function normalizeCommunityEvent(value) {
  if (!value || typeof value !== "object") return null;
  const id = String(value.id || "").replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 100);
  const title = String(value.title || "").normalize("NFKC").replace(/[<>]/g, "").trim().slice(0, 48);
  const prefecture = String(value.prefecture || "").trim().slice(0, 12);
  const date = String(value.date || "").trim();
  const venue = String(value.venue || "").normalize("NFKC").replace(/[<>]/g, "").trim().slice(0, 64);
  if (!id || !title || !prefecture || !venue || !Number.isFinite(Date.parse(date))) return null;
  return {
    id,
    title,
    prefecture,
    date: new Date(date).toISOString(),
    venue,
    note: String(value.note || "").normalize("NFKC").replace(/[<>]/g, "").trim().slice(0, 180),
    hostId: String(value.hostId || value.clientId || "").replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 80),
    nickname: String(value.nickname || "匿名サウナー").normalize("NFKC").replace(/[<>]/g, "").trim().slice(0, 16) || "匿名サウナー",
    attendees: uniqueStrings(Array.isArray(value.attendees) ? value.attendees.map((id) => String(id).replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 80)) : []).slice(0, 30),
    attendeeCount: Math.max(0, Math.min(30, Math.floor(Number(value.attendeeCount) || (Array.isArray(value.attendees) ? value.attendees.length : 0)))),
    createdAt: typeof value.createdAt === "string" ? value.createdAt : "",
  };
}

function setCommunityStatus(message, isError) {
  if (!el.communityStatus) return;
  el.communityStatus.textContent = message;
  el.communityStatus.classList.toggle("is-error", Boolean(isError));
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
  const visual = getGearVisualType(item);
  return `
    <article class="shop-card ${mode === "full" ? "gear-card-full" : ""}">
      <div class="gear-card-visual gear-card-visual-${visual}" role="img" aria-label="${escapeAttr(item.title)}の使用イメージ">
        <span>${escapeHtml(item.category)}</span>
      </div>
      <div class="gear-card-copy">
        <h4>${escapeHtml(item.title)}</h4>
        <p>${escapeHtml(item.reason)}</p>
        <em>${escapeHtml(item.proof)}</em>
      </div>
      <div class="shop-card-actions">
        <a href="${escapeAttr(links.amazon)}" target="_blank" rel="nofollow sponsored noreferrer" data-affiliate-vendor="amazon" data-affiliate-item="${escapeAttr(item.title)}" data-affiliate-surface="${escapeAttr(mode)}">Amazon</a>
        <a href="${escapeAttr(links.rakuten)}" target="_blank" rel="nofollow sponsored noreferrer" data-affiliate-vendor="rakuten" data-affiliate-item="${escapeAttr(item.title)}" data-affiliate-surface="${escapeAttr(mode)}">楽天 高評価順</a>
      </div>
    </article>
  `;
}

function getGearVisualType(item) {
  const text = `${item.category || ""} ${item.title || ""}`;
  if (/水分|ドリンク|オロポ|ボトル/.test(text)) return "hydration";
  if (/ハット|タオル|ポンチョ/.test(text)) return "textile";
  if (/マット|足元|サンダル/.test(text)) return "mat";
  if (/バッグ|ポーチ|遠征/.test(text)) return "bag";
  if (/ケア|スキン|ヘア|アロマ/.test(text)) return "care";
  if (/計測|時計|タイマー|温度/.test(text)) return "timer";
  return "kit";
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

function renderHomePrefectureControls() {
  const options = [
    `<option value="">未登録</option>`,
    ...PREFECTURES.map((pref) => `<option value="${escapeAttr(pref.name)}">${escapeHtml(pref.name)}</option>`),
  ].join("");
  if (el.homePrefectureSelect) {
    el.homePrefectureSelect.innerHTML = options;
    el.homePrefectureSelect.value = PREFECTURES.some((pref) => pref.name === state.homePrefecture) ? state.homePrefecture : "";
  }
  if (el.homePrefectureLabel) el.homePrefectureLabel.textContent = state.homePrefecture || "マイ県を登録";
  if (el.nearbyNotificationToggle) el.nearbyNotificationToggle.checked = state.nearbyNotifications === true;
}

function renderCommunityPrefectureSelect() {
  if (!el.communityPrefecture) return;
  el.communityPrefecture.innerHTML = PREFECTURES.map((pref) => `<option value="${escapeAttr(pref.name)}">${escapeHtml(pref.name)}</option>`).join("");
  el.communityPrefecture.value = state.homePrefecture || "東京都";
}

function openHomePrefecture() {
  if (!state.homePrefecture) {
    openSettingsDialog();
    window.setTimeout(() => el.homePrefectureSelect?.focus(), 50);
    return;
  }
  selectedPrefecture = state.homePrefecture;
  visibleLimit = 36;
  renderAll();
  el.prefStrip?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  showToast(`${state.homePrefecture}の候補を表示しました`);
}

async function findNearbySaunas(options = {}) {
  if (!navigator.geolocation) {
    showToast("この端末では位置情報を利用できません");
    return [];
  }
  if (el.nearbyResult) el.nearbyResult.innerHTML = `<span class="loading-spinner" aria-hidden="true"></span><strong>現在地を確認しています</strong>`;
  try {
    const position = await getCurrentPosition({ highAccuracy: true, maximumAge: 30000 });
    if (!isUsableNearbyPosition(position)) {
      throw new Error(`position-accuracy:${Math.round(Number(position?.coords?.accuracy) || 0)}`);
    }
    const candidates = getNearestFacilities(position.coords.latitude, position.coords.longitude, 5);
    renderNearbyResults(candidates);
    if (options.notify) await notifyNearestFacility(candidates[0]);
    if (options.announce) {
      showToast(candidates.length ? `${candidates.length}件の近隣候補を表示しました` : "2km以内に住所・座標確認済み候補がありません");
    }
    track("nearby_search", { result_count: candidates.length });
    return candidates;
  } catch (error) {
    const accuracyError = String(error?.message || "").startsWith("position-accuracy:");
    if (el.nearbyResult) el.nearbyResult.innerHTML = accuracyError
      ? `<strong>現在地の精度が不足しています</strong><span>屋外や窓の近くで、位置情報を再取得してください。</span>`
      : `<strong>位置情報を確認できませんでした</strong><span>端末の設定で位置情報を許可してください。</span>`;
    if (options.announce) showToast(getGeolocationErrorMessage(error));
    return [];
  }
}

function renderNearbyResults(candidates) {
  if (!el.nearbyResult) return;
  if (!candidates.length) {
    el.nearbyResult.innerHTML = `<strong>2km以内に候補なし</strong><span>住所・座標を確認できたサウナだけを表示します。</span>`;
    return;
  }
  el.nearbyResult.innerHTML = candidates.slice(0, 3).map(({ facility, distanceKm }) => `
    <button type="button" data-nearby-facility="${escapeAttr(facility.id)}">
      <span>${distanceKm < 1 ? `${Math.round(distanceKm * 1000)}m` : `${distanceKm.toFixed(1)}km`}</span>
      <strong>${escapeHtml(facility.name)}</strong>
      <em>${escapeHtml(facility.prefecture || "")}</em>
    </button>
  `).join("");
}

function getNearestFacilities(latitude, longitude, limit = 5) {
  return findNearestFacilities(getFacilities().filter(facility => !getFacilityStatus(facility)), latitude, longitude, {
    limit,
    radiusKm: NEARBY_RESULT_RADIUS_KM,
    requireAddress: true,
    excludeSources: ["Airbnb"],
  });
}

function getCurrentPosition(options = {}) {
  return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, {
    enableHighAccuracy: options.highAccuracy === true,
    timeout: 12000,
    maximumAge: options.maximumAge ?? 120000,
  }));
}

function getGeolocationErrorMessage(error) {
  if (String(error?.message || "").startsWith("position-accuracy:")) {
    return `位置精度が${MAX_NEARBY_GEO_ACCURACY_METERS}mを超えています。場所を変えて再取得してください`;
  }
  if (error?.code === 1) return "位置情報が許可されていません";
  if (error?.code === 2) return "現在地を取得できませんでした";
  if (error?.code === 3) return "位置情報の取得が時間切れです";
  return "位置情報を確認できませんでした";
}

async function enableNearbyNotifications() {
  if (!("Notification" in window) || !("serviceWorker" in navigator)) {
    showToast("このブラウザは近隣通知に対応していません");
    return false;
  }
  const permission = Notification.permission === "granted" ? "granted" : await Notification.requestPermission();
  if (permission !== "granted") {
    showToast("通知が許可されていません");
    return false;
  }
  showToast("アプリを開いた時に近隣候補を通知します");
  await findNearbySaunas({ notify: true });
  return true;
}

async function checkNearbyOnLaunch() {
  if (!state.nearbyNotifications || !("Notification" in window) || Notification.permission !== "granted") return;
  runWhenIdle(() => findNearbySaunas({ notify: true }), 4000);
}

async function notifyNearestFacility(item) {
  if (!item || item.distanceKm > NEARBY_NOTIFICATION_RADIUS_KM || Notification.permission !== "granted") return;
  const lastAt = Date.parse(state.nearbyNotificationLog[item.facility.id] || "") || 0;
  if (Date.now() - lastAt < NEARBY_NOTIFICATION_COOLDOWN_MS) return;
  const registration = await navigator.serviceWorker.ready.catch(() => null);
  if (!registration) return;
  await registration.showNotification("近くにサ印候補があります", {
    body: `${item.facility.name}まで約${item.distanceKm < 1 ? `${Math.round(item.distanceKm * 1000)}m` : `${item.distanceKm.toFixed(1)}km`}`,
    icon: "/icons/icon-192.png",
    badge: "/icons/icon-192.png",
    tag: `nearby-${item.facility.id}`,
    data: { url: getFacilityDetailPath(item.facility) },
  });
  state.nearbyNotificationLog[item.facility.id] = new Date().toISOString();
  saveState();
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
  if (el.featureFilterPanel.hidden) return;
  if (!facilitySearchCache) {
    el.featureFilterGrid.innerHTML = '<p role="status">確認済みの特徴を集計しています…</p>';
    ensureFacilitySearchRecords().then(() => renderFeatureFilterGrid()).catch(() => {
      el.featureFilterGrid.innerHTML = '<p role="status">集計できませんでした。検索画面を開き直してください。</p>';
    });
    return;
  }
  const counts = getFeatureAvailabilityCounts();
  const buttons = FEATURE_OPTIONS.map((feature) => {
    const active = selectedFeatureFilters.has(feature);
    const count = counts.get(feature) || 0;
    return { available: count > 0 || active, html: `<button class="feature-chip ${active ? "is-active" : ""}" type="button" data-feature-filter="${escapeAttr(feature)}" aria-pressed="${active}" ${!count && !active ? 'disabled title="現在の条件に一致する確認情報はありません"' : ""}><span class="feature-chip-label">${escapeHtml(feature)}</span> <span class="feature-chip-count">${count}件</span></button>` };
  });
  el.featureFilterGrid.innerHTML = buttons.filter(item => item.available).map(item => item.html).join("")
    + `<details class="feature-unavailable"><summary>一致する確認情報がない特徴</summary>${buttons.filter(item => !item.available).map(item => item.html).join("")}</details>`
    + (selectedCount ? '<button class="feature-reset" type="button" data-feature-reset>特徴の選択を解除</button>' : "");
}

function getFeatureAvailabilityCounts() {
  const counts = new Map(FEATURE_OPTIONS.map(feature => [feature, 0]));
  const base = getFilteredFacilities({ ignoreFeatures: true });
  for (const facility of base) {
    const features = getFacilityFeatures(facility);
    for (const feature of features) {
      const others = [...selectedFeatureFilters].filter(selected => selected !== feature && selected !== FEATURE_CONFLICTS.get(feature));
      if (others.every(selected => features.includes(selected))) counts.set(feature, (counts.get(feature) || 0) + 1);
    }
  }
  return counts;
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
  activityDrafts.delete(facility.id);
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

async function loadFacilityReviews(facilityId, { force = false } = {}) {
  if (!facilityId || IS_STATIC_LOCAL_PREVIEW || reviewRequests.has(facilityId) || (!force && facilityReviewLoadedIds.has(facilityId))) return;
  reviewRequests.add(facilityId);
  try {
    const url = new URL(REVIEWS_ENDPOINT, document.baseURI || location.href);
    url.searchParams.set("facilityId", facilityId);
    const response = await fetch(url.href, { headers: { accept: "application/json", authorization: `Bearer ${profile.authToken}` }, signal: AbortSignal.timeout(12000) });
    if (!response.ok) throw new Error("reviews-load-failed");
    const payload = await response.json();
    reviewsConfigured = payload.configured !== false;
    facilityReviews[facilityId] = normalizeReviews(payload.reviews || []);
    facilityReviewLoadedIds.add(facilityId);
  } catch {
    reviewsConfigured = false;
  } finally {
    reviewRequests.delete(facilityId);
    const facility = getFacilityById(facilityId);
    const list = document.getElementById(`reviewList-${facilityId}`);
    if (facility && list) {
      list.innerHTML = renderReviewList(facility);
      const count = list.closest(".review-panel")?.querySelector(".panel-head > span");
      if (count) count.textContent = `${getFacilityReviews(facilityId).length}件`;
    }
  }
}


async function deleteFacilityReview(facility, reviewId) {
  if (!reviewId) return;
  if (!IS_STATIC_LOCAL_PREVIEW && !String(reviewId).startsWith("local-")) {
    try {
      const url = new URL(REVIEWS_ENDPOINT, document.baseURI || location.href);
      url.searchParams.set("facilityId", facility.id);
      url.searchParams.set("reviewId", reviewId);
      url.searchParams.set("clientId", profile.id || "");
      const response = await fetch(url.href, { method: "DELETE", headers: { accept: "application/json", authorization: `Bearer ${profile.authToken}` }, signal: AbortSignal.timeout(12000) });
      if (response.ok) {
        const payload = await response.json();
        facilityReviews[facility.id] = normalizeReviews(payload.reviews || []);
        renderAll();
        showToast("口コミを削除しました");
        return;
      }
      showToast(response.status === 403 ? "この端末では削除できない口コミです。修正窓口へご連絡ください" : "削除できませんでした。再試行してください");
      return;
    } catch {
      reviewsConfigured = false;
      showToast("削除できませんでした。通信を確認して再試行してください");
      return;
    }
  }
  const next = (state.facilityReviews[facility.id] || []).filter((review) => review.id !== reviewId);
  state.facilityReviews[facility.id] = next;
  saveState();
  renderAll();
  showToast("口コミを削除しました");
}

function getFacilityReviews(facilityId) {
  return normalizeReviews([...(facilityReviews[facilityId] || []), ...(state.facilityReviews[facilityId] || [])]);
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
  const tags = getFacilityFeatures(facility).slice(0, 4);
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

async function shareFacilityNative(facility) {
  const detail = [facility.prefecture, facility.city].filter(Boolean).join(" / ");
  const shareData = {
    title: `${facility.name} | サ印帳`,
    text: [`次のサウナ候補: ${facility.name}`, detail].filter(Boolean).join("\n"),
    url: getFacilityDetailUrl(facility),
  };
  if (navigator.share) {
    try {
      await navigator.share(shareData);
      track("share", { method: "webshare_facility", facility_id: facility.id, prefecture: facility.prefecture || "" });
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
    }
  }
  try {
    await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
    track("share", { method: "copy_facility", facility_id: facility.id, prefecture: facility.prefecture || "" });
    showToast("施設URLをコピーしました。LINEなどに貼り付けられます");
  } catch {
    window.prompt("施設URLをコピーしてください", shareData.url);
  }
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

function getFilteredFacilities({ ignoreFeatures = false } = {}) {
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
    const matchesFeatures = ignoreFeatures || [...selectedFeatureFilters].every((feature) => features.includes(feature));
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "unvisited" && !state.visited[facility.id]) ||
      (activeFilter === "wishlist" && state.wishlist[facility.id]) ||
      (activeFilter === "favorite" && state.favorites[facility.id]);
    return selected && matchesSearch && matchesFeatures && matchesFilter;
  }).map(({ facility }) => facility);
}

function getFacilities({ includeFitness = false } = {}) {
  if (!facilitiesCache) {
    const custom = state.customFacilities.map((facility) => ({
      ...facility,
      features: normalizeFeatures(facility.features || facility.tags || []),
      trait: facility.trait || inferTraitFromFeatures(facility.features || facility.tags || []),
      tags: facility.tags?.length ? facility.tags : ["マイサウナ"],
    }));
    facilitiesCache = dedupeFacilities([...SEED_FACILITIES, ...sharedFacilities, ...custom].map(applyFacilityEvidence)).map(applyFacilityEvidence);
  }
  if (includeFitness) return facilitiesCache;
  if (discoveryFacilitiesSource !== facilitiesCache) {
    discoveryFacilitiesSource = facilitiesCache;
    discoveryFacilitiesCache = facilitiesCache.filter(facility => !isFitnessFacility(facility));
  }
  return discoveryFacilitiesCache;
}

function getFavoriteFacilities() {
  return getFacilities({ includeFitness: true })
    .filter((facility) => state.favorites[facility.id])
    .sort((a, b) => {
      const aTime = state.favorites[a.id]?.at || "";
      const bTime = state.favorites[b.id]?.at || "";
      return bTime.localeCompare(aTime) || a.name.localeCompare(b.name, "ja");
    });
}

function getFacilitySearchRecords() {
  return facilitySearchCache || [];
}

function ensureFacilitySearchRecords() {
  const memoSignature = getFacilityMemoSearchSignature();
  if (facilitySearchCache && facilitySearchMemoSignature === memoSignature) return Promise.resolve(facilitySearchCache);
  if (facilitySearchBuild) return facilitySearchBuild;
  const version = facilityCacheVersion;
  const facilities = getFacilities();
  facilitySearchBuild = (async () => {
    const records = [];
    const buildStart = performance.now();
    let sliceStart = performance.now();
    let yieldWaitMs = 0;
    for (const facility of facilities) {
      records.push(createFacilitySearchRecord(facility));
      if (performance.now() - sliceStart >= 6) {
        const waitStart = performance.now();
        await yieldSearchWork();
        yieldWaitMs += performance.now() - waitStart;
        if (version !== facilityCacheVersion) return null;
        sliceStart = performance.now();
      }
    }
    if (el.searchResultsStatus) {
      el.searchResultsStatus.dataset.searchIndexWorkMs = (performance.now() - buildStart - yieldWaitMs).toFixed(1);
      el.searchResultsStatus.dataset.searchIndexYieldMs = yieldWaitMs.toFixed(1);
    }
    facilitySearchMemoSignature = memoSignature;
    facilitySearchCache = records;
    return records;
  })().finally(() => { facilitySearchBuild = null; });
  return facilitySearchBuild.then(records => records || ensureFacilitySearchRecords());
}

function yieldSearchWork() {
  if (typeof window.scheduler?.yield === "function") return window.scheduler.yield();
  if (typeof MessageChannel === "function") return new Promise(resolve => {
    const channel = new MessageChannel();
    channel.port1.onmessage = () => {
      channel.port1.close();
      channel.port2.close();
      resolve();
    };
    channel.port2.postMessage(null);
  });
  return new Promise(resolve => window.setTimeout(resolve, 0));
}

function createFacilitySearchRecord(facility) {
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
      ...(getFacilityEvidence(facility)?.facts || []).map(row => `${row.label} ${row.value}`),
      ...features,
      ...features.flatMap((feature) => FEATURE_ALIASES[feature] || []),
      ...(facility.tags || []).filter(tag => !normalizeFeature(tag)),
    ]);
    return {
      facility,
      features,
      haystack,
      nameBlob: buildSearchBlob([facility.name]),
    };
}

function getFacilityMemoSearchSignature() {
  return Object.entries(state.facilityMemos)
    .map(([id, memo]) => `${id}:${memo?.updatedAt || ""}:${memo?.text || ""}`)
    .sort()
    .join("|");
}

function invalidateFacilityCaches() {
  facilityCacheVersion += 1;
  facilitiesCache = null;
  discoveryFacilitiesCache = null;
  discoveryFacilitiesSource = null;
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

function getFacilityDataQuality(facility) {
  const date = facility.addressCheckedAt || facility.sourceCheckedAt;
  if (date) return {
    level: facility.addressCheckedAt ? "address" : "source",
    label: facility.addressCheckedAt ? "住所を参照元で照合済み" : "参照ページ確認済み",
    description: `${date}に参照ページを確認しました。営業状況・料金は訪問前に施設公式で確認してください。`,
  };
  const hasAddress = Boolean(getFacilityAddress(facility));
  const hasOfficial = Boolean(String(facility.officialUrl || "").trim());
  const hasArea = Boolean(String(facility.city || "").trim());
  if (hasAddress && hasOfficial) {
    return {
      level: "official-address",
      label: "住所・公式リンク掲載あり",
      description: "住所と公式ページを掲載しています。営業時間、料金、休館日は訪問前に公式ページで再確認してください。",
    };
  }
  if (hasAddress) {
    return {
      level: "address",
      label: "住所掲載あり",
      description: "参照ページで確認できた住所を掲載しています。最新の営業状況は参照元または施設公式情報で確認してください。",
    };
  }
  if (hasArea) {
    return {
      level: "area",
      label: "市区町村まで掲載",
      description: "番地住所は未確認です。地図検索と参照ページを併用し、正確な場所を確認してから向かってください。",
    };
  }
  return {
    level: "name-only",
    label: "施設名・都道府県のみ",
    description: "詳細情報の補完を待っている候補です。参照ページで最新情報を確認し、誤りは修正窓口から知らせてください。",
  };
}

function getFacilityAreaLabel(facility) {
  return [facility.prefecture, facility.city].filter(Boolean).join(" / ");
}

function getFacilityCoordinate(facility) {
  const lat = Number(facility.lat);
  const lng = Number(facility.lng);
  if (!Number.isFinite(lat) || !Number.isFinite(lng) || lat < 20 || lat > 46 || lng < 122 || lng > 154) return "";
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
  const anchor = getFacilityAddress(facility)
    || [facility.name, getFacilityAreaLabel(facility)].filter(Boolean).join(" ");
  const query = `飲食店 ${anchor} 周辺`;
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
    ["楽天トラベル", buildSearchUrl(`site:travel.rakuten.co.jp ${query} 楽天トラベル`)],
    ["一休", `https://www.ikyu.com/search?kwd=${encodeURIComponent(query)}`],
    ["Agoda", buildSearchUrl(`site:agoda.com ${query} Agoda`)],
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
  if (sourceUrl && sourceUrl !== officialUrl && !(officialUrl && sourceLabel === "公式")) {
    links.push(`<a class="source-badge" href="${escapeAttr(sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(sourceLabel)}</a>`);
  }
  if (!links.length) return `<span class="source-badge">${escapeHtml(sourceLabel)}</span>`;
  return `<span class="source-badge-group">${links.join("")}</span>`;
}

function getDisplayTags(facility) {
  return getFacilityFeatures(facility).slice(0, 8);
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

  const explicit = normalizeFeatures([...(facility.features || []), ...(facility.tags || [])]);
  let features;
  if (!getFacilityEvidence(facility) && ((facility.tags || []).includes("ユーザー指定追加") || (facility.tags || []).includes("みんなの追加"))) {
    features = normalizeFeatures([...explicit, ...(facility.tags || [])]);
    facilityFeatureCache.set(facility.id, { signature, features });
    return features;
  }

  /* Legacy tags have no field-level evidence and must not imply verified equipment. */
  features = normalizeFeatures(getVerifiedFeatures(facility));
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
    return matchesSearchBlob(full, needles) || matchesSearchBlob(short, needles);
  });
  if (prefMatch) return setSelectedPrefecture(prefMatch.name);

  if (term.length < 2) return false;
  const records = getFacilitySearchRecords();
  const matchingFacilities = records.filter(({ haystack }) => matchesSearchBlob(haystack, needles));
  const matchedPrefectures = [...new Set(matchingFacilities.map(({ facility }) => facility.prefecture))];
  if (matchedPrefectures.length === 1) return setSelectedPrefecture(matchedPrefectures[0]);
  return setSelectedPrefecture("全国");
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
  clearInterval(rankingPollTimer);
  rankingPollTimer = window.setInterval(() => {
    if (!document.hidden && activeView === "Stats") loadRanking();
  }, Math.max(RANKING_REFRESH_MS, 30000));
}

async function loadRanking() {
  if (rankingLoading) return;
  rankingLoading = true;
  try {
    const response = await fetch(RANKING_ENDPOINT, { headers: { accept: "application/json" }, signal: AbortSignal.timeout(12000) });
    if (!response.ok) throw new Error("ranking-load-failed");
    const payload = await response.json();
    rankingConfigured = payload.configured !== false;
    leaderboardEntries = normalizeRankingEntries(payload.entries || []);
    rankingUpdatedAt = new Date().toISOString();
    rankingLastError = rankingWriteError || (payload.configured === false ? "現在ランキングを公開できません。時間を置いて再試行してください。" : "");
  } catch {
    rankingConfigured = false;
    rankingLastError = rankingWriteError || "最新ランキングを取得できませんでした。前回の表示を保持しています。「更新」で再試行できます。";
  } finally {
    rankingLoading = false;
    renderLeaderboard();
  }
}

function queueRankingSync() {
  if (!isProfileComplete()) return;
  clearTimeout(rankingSyncTimer);
  rankingSyncTimer = window.setTimeout(() => syncRanking({ announce: false }), 700);
}

async function syncRanking({ announce } = { announce: false }) {
  if (rankingSaving) return;
  if (!isProfileComplete()) {
    if (announce) showToast("ランキング参加登録をしてください");
    return;
  }
  rankingSaving = true;
  rankingWriteError = "";
  rankingLastError = "";
  renderLeaderboard();
  const stamps = Object.keys(state.visited).length;
  const title = getCurrentTitle(stamps).title;
  try {
    const response = await fetch(RANKING_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json", authorization: `Bearer ${profile.authToken}` },
      body: JSON.stringify({
        participantId: profile.id,
        nickname: profile.nickname,
        email: profile.email,
        stamps,
        title,
      }),
      signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) throw new Error(response.status === 429 ? "送信が多いため少し時間を置いて再試行してください。" : response.status === 403 ? "参加情報を照合できませんでした。登録時のメールアドレスと元の端末を確認してください。" : "ランキングへ送信できませんでした。入力は保存されています。再度「ランキングに参加」を押してください。");
    const payload = await response.json();
    rankingConfigured = true;
    leaderboardEntries = normalizeRankingEntries(payload.entries || []);
    rankingUpdatedAt = new Date().toISOString();
    track("ranking_join", { stamps, title, announce: Boolean(announce) });
    if (announce) showToast("ランキングを更新しました");
  } catch (error) {
    rankingConfigured = false;
    rankingLastError = error.name === "TimeoutError" ? "通信が時間切れになりました。登録内容は保存されています。再送信してください。" : error.message;
    rankingWriteError = rankingLastError;
    if (announce) showToast("ランキングへの送信に失敗しました。登録欄で再試行できます");
  } finally {
    rankingSaving = false;
    renderLeaderboard();
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
  anchor.download = `saincho-${getLocalDateInputValue()}.json`;
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
    visitLogs: isPlainObject(value.visitLogs) ? normalizeVisitLogs(value.visitLogs) : fallback.visitLogs,
    customFacilities: Array.isArray(value.customFacilities) ? value.customFacilities.filter(isValidCustomFacility) : [],
    homePrefecture: typeof value.homePrefecture === "string" ? value.homePrefecture.slice(0, 12) : "",
    nearbyNotifications: value.nearbyNotifications === true,
    nearbyNotificationLog: isPlainObject(value.nearbyNotificationLog) ? value.nearbyNotificationLog : {},
    activeCheckin: normalizeActiveCheckin(value.activeCheckin),
    localCommunityEvents: Array.isArray(value.localCommunityEvents) ? value.localCommunityEvents.map(normalizeCommunityEvent).filter(Boolean).slice(0, 30) : [],
    joinedCommunityEvents: isPlainObject(value.joinedCommunityEvents) ? value.joinedCommunityEvents : {},
  };
}

function createState() {
  return {
    visited: {},
    wishlist: {},
    favorites: {},
    facilityMemos: {},
    facilityReviews: {},
    visitLogs: {},
    customFacilities: [],
    homePrefecture: "",
    nearbyNotifications: false,
    nearbyNotificationLog: {},
    activeCheckin: null,
    localCommunityEvents: [],
    joinedCommunityEvents: {},
  };
}

function normalizeActiveCheckin(value) {
  if (!value || typeof value !== "object") return null;
  const facilityId = typeof value.facilityId === "string" ? value.facilityId.slice(0, 120) : "";
  const startedAt = typeof value.startedAt === "string" ? value.startedAt : "";
  if (!facilityId || !startedAt || !Number.isFinite(Date.parse(startedAt))) return null;
  return {
    facilityId,
    startedAt,
    lastVerifiedAt: typeof value.lastVerifiedAt === "string" ? value.lastVerifiedAt : startedAt,
    distanceMeters: Math.max(0, Math.round(Number(value.distanceMeters) || 0)),
  };
}

function normalizeFacilityMemos(value) {
  return Object.fromEntries(Object.entries(value).filter(([, memo]) => (
    memo &&
    typeof memo === "object" &&
    typeof memo.text === "string" &&
    memo.text.trim()
  )).map(([id, memo]) => [id, {
    text: memo.text.trim().slice(0, 280),
    updatedAt: typeof memo.updatedAt === "string" ? memo.updatedAt : new Date().toISOString(),
  }]));
}

function normalizeLocalReviews(value) {
  return Object.fromEntries(Object.entries(value).map(([facilityId, reviews]) => {
    if (!Array.isArray(reviews)) return [facilityId, []];
    return [facilityId, normalizeReviews(reviews)];
  }).filter(([, reviews]) => reviews.length));
}

function normalizeVisitLogs(value) {
  return Object.fromEntries(Object.entries(value).map(([facilityId, logs]) => {
    if (!Array.isArray(logs)) return [facilityId, []];
    return [facilityId, logs.map(normalizeVisitLog).filter(Boolean).slice(0, 24)];
  }).filter(([, logs]) => logs.length));
}

function normalizeVisitLog(value) {
  if (!value || typeof value !== "object") return null;
  const date = typeof value.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value.date) ? value.date : "";
  if (!date) return null;
  return {
    id: typeof value.id === "string" && value.id ? value.id.slice(0, 80) : createClientId(),
    date,
    sets: Math.max(1, Math.min(8, Math.round(Number(value.sets) || 1))),
    saunaMinutes: Math.max(1, Math.min(40, Number(value.saunaMinutes) || 1)),
    waterMinutes: Math.max(0, Math.min(10, Number(value.waterMinutes) || 0)),
    restMinutes: Math.max(0, Math.min(40, Number(value.restMinutes) || 0)),
    feeling: Math.max(1, Math.min(5, Math.round(Number(value.feeling) || 3))),
    note: typeof value.note === "string" ? value.note.trim().slice(0, 280) : "",
    createdAt: typeof value.createdAt === "string" ? value.createdAt : new Date().toISOString(),
  };
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
      owned: review.owned === true,
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
      authToken: typeof value.authToken === "string" && value.authToken.length >= 32 ? value.authToken : createClientId() + createClientId(),
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
    authToken: createClientId() + createClientId(),
  };
}

function saveProfile() {
  try { localStorage.setItem(PROFILE_KEY, JSON.stringify(profile)); }
  catch { showToast("端末の保存容量を確認してください。登録内容を保存できませんでした"); }
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

function isArticleRoute() {
  return /^\/guide\/[^/]+\/$/.test(location.pathname) && Boolean(document.getElementById("ssrContent"));
}

function pushViewUrl(view) {
  if (!location.protocol.startsWith("http")) {
    updateDocumentMetaForView(view);
    return;
  }
  const path = view === "Facility" && activeFacilityId
    ? `/facility/${encodeURIComponent(activeFacilityId)}/`
    : VIEW_META[view]?.path || "/";
  if (location.pathname !== path) history.pushState({ view }, "", path);
  updateDocumentMetaForView(view);
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
  if (isArticleRoute()) return;
  const baseMeta = VIEW_META[view] || VIEW_META.Explore;
  const pref = view === "Explore" && /^\/pref\//.test(location.pathname) ? PREFECTURES.find(item => item.name === selectedPrefecture) : null;
  const meta = facility ? getFacilityMetaTags(facility) : pref ? {title:`${pref.name}のサウナ検索・サ活記録 | サ印帳`, description:`${pref.name}のサウナ候補を検索。住所・参照情報を確認して、訪問した施設をサ印として記録できます。`} : baseMeta;
  const url = facility ? getFacilityDetailUrl(facility) : pref ? new URL(`/pref/${pref.slug}/`, APP_URL).href : new URL(baseMeta.path, APP_URL).href;
  document.title = meta.title;
  updateMeta("name", "description", meta.description);
  updateMeta("property", "og:title", meta.title);
  updateMeta("property", "og:description", meta.description);
  updateMeta("property", "og:url", url);
  updateMeta("name", "twitter:title", meta.title.replace(" | サ印帳", ""));
  updateMeta("name", "twitter:description", meta.description);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = url;
  const indexable = !facility || (!isFitnessFacility(facility) && Boolean(getFacilityAddress(facility) || facility.officialUrl || (facility.source === "Airbnb" && facility.city && facility.note)));
  updateMeta("name", "robots", indexable ? "index, follow, max-image-preview:large" : "noindex, follow");
  updateMeta("name", "googlebot", indexable ? "index, follow, max-image-preview:large" : "noindex, follow");
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
  const termVariants = uniqueStrings([term, ...createSearchCompoundVariants(term), ...expandSearchTextVariants(term)]).slice(0, 32);
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

function createSearchCompoundVariants(term) {
  const variants = new Set([normalizeSearchToken(term)]);
  for (const group of SEARCH_SYNONYM_GROUPS) {
    const aliases = uniqueStrings(group.map(normalizeSearchToken)).filter(alias => alias.length >= 3);
    const current = [...variants];
    for (const value of current) {
      for (const from of aliases) {
        if (!value.includes(from)) continue;
        for (const to of aliases) {
          variants.add(value.split(from).join(to));
          if (variants.size >= 32) return [...variants];
        }
      }
    }
  }
  return [...variants];
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
  const cached = searchTokenCache.get(normalized);
  if (cached) {
    cached.forEach(token => tokens.add(token));
    return;
  }
  const added = new Set();
  const variants = uniqueStrings([
    normalized,
    ...expandSearchTextVariants(normalized).slice(0, 12),
  ]);
  variants.forEach((variant) => {
    // Search tokens already fold kana, width and separators; avoid identical conversions.
    [
      variant,
      normalizeKanaLoose(variant),
      normalizeKanaLongVowels(variant),
      romanizeSearchText(variant),
    ].forEach((token) => {
      const normalizedToken = normalizeSearchToken(token);
      if (normalizedToken) added.add(normalizedToken);
    });
  });
  if (searchTokenCache.size >= 12000) searchTokenCache.clear();
  searchTokenCache.set(normalized, [...added]);
  added.forEach(token => tokens.add(token));
}

function addMatchedSynonymTokens(tokens) {
  const currentTokens = [...tokens];
  searchSynonymTokens ||= SEARCH_SYNONYM_GROUPS.map(group => ({ group, groupTokens: uniqueStrings(group.flatMap((term) => [
      normalizeSearchToken(term),
      normalizeKanaLoose(term),
      normalizeKanaLongVowels(term),
      romanizeSearchText(term),
    ])).filter(Boolean) }));
  searchSynonymTokens.forEach(({group, groupTokens}) => {
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
    // A facility name containing "hotel" must not become a generic lodging query.
    if (normalizedGroup.some((item) => normalizedCandidates.includes(item))) {
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
  const identity = getFacilityEvidence(facility);
  return [...normalizedNames.map((value) => `${pref}:${value}`), ...(identity?.ids.length > 1 ? [`official-identity:${identity.ids[0]}`] : [])];
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
    (state.visitLogs[id] || []).length ||
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
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    checkAppUpdate({ force: true });
  });
  navigator.serviceWorker.register(`./sw.js?v=${encodeURIComponent(APP_BUILD_ID)}`)
    .then((registration) => registration.update())
    .catch(() => {});
}

async function checkAppUpdate({ force = false } = {}) {
  const notice = document.querySelector("#appUpdateNotice");
  const script = document.querySelector('script[type="module"][src*="app."]');
  if (!notice || !script?.src || location.protocol === "file:") return;
  if (updateCheckPending) return updateCheckPending;
  if (!force && Date.now() - lastUpdateCheckAt < 300000) return;
  lastUpdateCheckAt = Date.now();
  updateCheckPending = (async () => {
    try {
      const response = await fetch(`/version.json?check=${Date.now()}`, { cache: "no-store", signal: AbortSignal.timeout(8000) });
      if (!response.ok) return;
      const version = await response.json();
      if (!/^app\.[a-f0-9]+\.js$/.test(version.app || "")) return;
      if (version.styles && !/^styles\.[a-f0-9]+\.css$/.test(version.styles)) return;
      const styles = document.querySelector('link[rel="stylesheet"][href*="styles."]');
      const sameStyles = !version.styles || (styles?.href && new URL(styles.href).pathname.split("/").pop() === version.styles);
      notice.hidden = new URL(script.src).pathname.split("/").pop() === version.app && Boolean(sameStyles);
    } catch {
      // Offline or unavailable version metadata must not interrupt a draft.
    }
  })().finally(() => { updateCheckPending = null; });
  return updateCheckPending;
}
