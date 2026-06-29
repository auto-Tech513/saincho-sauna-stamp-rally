# サ印帳 | サウナスタンプラリー

作成日: 2026-06-29

## 使い方

`index.html` をブラウザで開くか、ローカルサーバーで配信してください。記録はブラウザの `localStorage` に保存され、記録タブから JSON で書き出し・読み込みできます。

スマホでは画面上部の案内、または設定の「ホーム画面に追加」からPWAとして追加できます。iPhone/iPadでは共有メニューの「ホーム画面に追加」、Android/Chromeでは対応環境でネイティブの追加プロンプトを使います。

## PWA / アイコン

- `manifest.webmanifest` は `サ印帳` のアプリ名、standalone表示、192px/512px/1024px PNGアイコンを含みます。
- iOS向けに `apple-touch-icon.png` と `apple-mobile-web-app-*` メタタグを追加しました。
- ホーム画面用アイコンは添付PNGを `icon-source.png` として保持し、縦横比を歪ませない中央配置の正方形化を行ったうえで各サイズへ展開しています。
- URL共有時の表示画像は Open Graph / X Card ともに `saincho-icon-1024.png` を指定し、ホーム画面アイコンと同じ画像が使われるようにしています。
- `sw.js` は `saincho-v11` として、HTML/CSS/JS/データ/manifest/主要アイコン/ヒーロー画像をキャッシュします。

## 参照サイト分析

- [サウナイキタイ](https://sauna-ikitai.com/)  
  全国サウナの検索、県別ページ、ユーザー投稿、施設導線が強い。規約上、クローラーによるリクエスト間隔や商用利用の制約があるため、本アプリには施設データベースを丸ごと転載していません。
- [SAUNACHELIN](https://www.saunachelin.com/)  
  年次ランキングによるキュレーション性が強い。収集欲を刺激する「正直な希少性」として、2025年受賞施設を初期候補にしました。
- [サウナマップ](https://sauna-map.com/)  
  地図起点で近隣・旅先候補を見つけやすい。スマホ導線では、現在地や地図探索と相性が良い参照元です。
- [スーパー銭湯全国検索](https://www.supersento.com/)  
  スーパー銭湯・温浴施設の地域別カタログと新店情報が強い。サウナ単体だけでなく温浴施設文脈の発見に向いています。
- [SaunaTime](https://saunatime.jp/)  
  都道府県別ページと施設詳細URLが明確で、県別の初期候補作成に向いています。今回は各都道府県6件ずつをスターター候補として取り込みました。
- [Instabase サウナ](https://www.instabase.jp/sauna)  
  個室・レンタルスペース型の貸切サウナ導線が強い。スタンプラリーでは通常の温浴施設だけでなく、貸切・予約型サウナを探す補助導線として扱います。

## データ方針

- 47都道府県の整理軸と参照リンクをアプリ内に実装済みです。
- 初期候補は `data.js` に分離し、SAUNACHELIN公表ランキング由来の候補、SaunaTime都道府県ページから取得した県別スターター候補、愛知・岐阜・三重・静岡・滋賀・大阪の指定候補を合わせて563件に拡張しました。
- 各都道府県に6件以上の候補が入るため、候補が空の県はありません。
- 愛知県は54件、岐阜県は43件、三重県は52件、静岡県は53件、滋賀県は52件、大阪府は54件です。ID重複と県内名称重複は検証で0件にしています。
- 県名・サウナ名・特徴を検索欄へ入れると、該当県が明確な場合は自動でその県へ移動します。
- 特徴は「名店」のような主観語を避け、温泉付き、個室、ドライサウナ、薪サウナ、スチーム(ミスト)サウナ、塩サウナ、テントサウナ、バレルサウナ、遠赤外線サウナ、熱波師あり、セルフロウリュ、外気浴、サ飯、タオルレンタルなど、設備・ルール・体験として確認しやすいタグに整理しています。
- 追加フォームでは特徴を複数選択できます。探す画面でも特徴チップで複数条件の絞り込みができます。
- 候補にない施設は追加タブから自分で登録できます。検索で見つからない場合も、その検索語を引き継いで追加できます。
- 施設ごとのメモは保存・取り消し・X共有ができます。各施設自体も、メモの有無に関係なくXへおすすめ共有できます。メモは `facilityMemos` として施設IDに紐づけて保存します。
- 指定リスト内の「なごのサウナ（岐阜市西区那古野）」は、那古野が名古屋市西区の地名であるため、愛知県の `NAGONO WORK BAR&SAUNA（なごのサウナ）` として扱い、岐阜県には二重登録していません。
- 2026年6月29日時点で開業前・営業要確認のものは `開業予定` / `要確認` バッジを付け、誤って押印できないようにしています。
- 実在施設の全件網羅は、第三者サイトのデータベースを無断複製せず、ユーザー追加・許諾済みデータ・公式API/CSV差し替えで拡張する設計です。
- 施設追加フォームで、行ったサウナ・行きたいサウナを都道府県別に蓄積できます。

## 都道府県別参照リンク

| 地域 | 都道府県 | サウナイキタイ県別ページ |
| --- | --- | --- |
| 北海道・東北 | 北海道 | https://sauna-ikitai.com/hokkaido |
| 北海道・東北 | 青森県 | https://sauna-ikitai.com/aomori |
| 北海道・東北 | 岩手県 | https://sauna-ikitai.com/iwate |
| 北海道・東北 | 宮城県 | https://sauna-ikitai.com/miyagi |
| 北海道・東北 | 秋田県 | https://sauna-ikitai.com/akita |
| 北海道・東北 | 山形県 | https://sauna-ikitai.com/yamagata |
| 北海道・東北 | 福島県 | https://sauna-ikitai.com/fukushima |
| 関東 | 茨城県 | https://sauna-ikitai.com/ibaraki |
| 関東 | 栃木県 | https://sauna-ikitai.com/tochigi |
| 関東 | 群馬県 | https://sauna-ikitai.com/gunma |
| 関東 | 埼玉県 | https://sauna-ikitai.com/saitama |
| 関東 | 千葉県 | https://sauna-ikitai.com/chiba |
| 関東 | 東京都 | https://sauna-ikitai.com/tokyo |
| 関東 | 神奈川県 | https://sauna-ikitai.com/kanagawa |
| 中部 | 新潟県 | https://sauna-ikitai.com/niigata |
| 中部 | 富山県 | https://sauna-ikitai.com/toyama |
| 中部 | 石川県 | https://sauna-ikitai.com/ishikawa |
| 中部 | 福井県 | https://sauna-ikitai.com/fukui |
| 中部 | 山梨県 | https://sauna-ikitai.com/yamanashi |
| 中部 | 長野県 | https://sauna-ikitai.com/nagano |
| 中部 | 岐阜県 | https://sauna-ikitai.com/gifu |
| 中部 | 静岡県 | https://sauna-ikitai.com/shizuoka |
| 中部 | 愛知県 | https://sauna-ikitai.com/aichi |
| 中部 | 三重県 | https://sauna-ikitai.com/mie |
| 関西 | 滋賀県 | https://sauna-ikitai.com/shiga |
| 関西 | 京都府 | https://sauna-ikitai.com/kyoto |
| 関西 | 大阪府 | https://sauna-ikitai.com/osaka |
| 関西 | 兵庫県 | https://sauna-ikitai.com/hyogo |
| 関西 | 奈良県 | https://sauna-ikitai.com/nara |
| 関西 | 和歌山県 | https://sauna-ikitai.com/wakayama |
| 中国 | 鳥取県 | https://sauna-ikitai.com/tottori |
| 中国 | 島根県 | https://sauna-ikitai.com/shimane |
| 中国 | 岡山県 | https://sauna-ikitai.com/okayama |
| 中国 | 広島県 | https://sauna-ikitai.com/hiroshima |
| 中国 | 山口県 | https://sauna-ikitai.com/yamaguchi |
| 四国 | 徳島県 | https://sauna-ikitai.com/tokushima |
| 四国 | 香川県 | https://sauna-ikitai.com/kagawa |
| 四国 | 愛媛県 | https://sauna-ikitai.com/ehime |
| 四国 | 高知県 | https://sauna-ikitai.com/kochi |
| 九州・沖縄 | 福岡県 | https://sauna-ikitai.com/fukuoka |
| 九州・沖縄 | 佐賀県 | https://sauna-ikitai.com/saga |
| 九州・沖縄 | 長崎県 | https://sauna-ikitai.com/nagasaki |
| 九州・沖縄 | 熊本県 | https://sauna-ikitai.com/kumamoto |
| 九州・沖縄 | 大分県 | https://sauna-ikitai.com/oita |
| 九州・沖縄 | 宮崎県 | https://sauna-ikitai.com/miyazaki |
| 九州・沖縄 | 鹿児島県 | https://sauna-ikitai.com/kagoshima |
| 九州・沖縄 | 沖縄県 | https://sauna-ikitai.com/okinawa |

## 収集体験の設計

- 押印直後にスタンプがアンロックされ、進捗が即時更新されます。誤押印はカードとサ印一覧から取り消せます。
- 県ごとに5湯で県章がつくため、ニアミス効果を「あと何湯」という健全な目標に変換しています。
- 生成画像 `assets/sauna-hero.png` をトップに使用し、サウナ旅・木・水・湯けむりの没入感を持たせています。
- ランダムな余韻ラベルは非金銭・非課金の小さなサプライズに限定し、射幸性を煽る設計にはしていません。
- SAUNACHELIN由来の初期候補は、実際の受賞という根拠がある「正直な希少性」として扱っています。
- 追加・書き出し・読み込みにより、サンクコストを囲い込みではなく自分の旅記録として残せるようにしています。
