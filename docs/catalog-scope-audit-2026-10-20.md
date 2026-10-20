# 施設の重複・ジム併設区分・公式情報の監査

確認日: 2026-10-20（日本時間）。全国の全項目を同日に照合したという意味ではありません。

## 調査結果と修正

- KIWAMI本店の公式ページは、サウナイキタイ60076へリンクしている。汎用名の`si-60076`と`manual-aichi-kiwami-honten`は同一店舗として統合。大須店は別店舗として保持する。
- 本店の住所は名古屋市西区浅間2丁目14-24、大須は中区橘1丁目4-12。店舗別の料金、営業時間、設備、水風呂、利用条件、レンタル、飲食、アクセス計17項目を公式出典・確認日付きで追加した。
- 本店の旧「薪」分類を修正。公式本文で利用者によるセルフロウリュを明記できない本店では、その検索タグも追加しない。大須の本文は利用者によるロウリュを説明している。
- サウナ室温の数値やタオル込みの条件は確認できず、創作していない。本店の水温16.5℃は公式掲載値であり当日の実測ではない。レンタル料金の確認を「持ち物全体の確認済み」に置き換えていない。
- 明示的なクラブ名・運営元URL・個別照合IDに基づき134候補をジム併設として分類。通常検索、近隣候補、県別SEO一覧、サイトマップから除外した。記録用の個別ページと保存済みデータは削除しない。
- 「スポーツ」「オアシス」「セントラル」などの語だけでは除外しない。FIT-EASY岐阜正木店は運営会社がサウナ専門店と説明しているので残す。徳島出来島店とZeroスポーツはジム併設として分ける。会員限定・日帰り不可といった利用条件は一律には断定しない。
- 未確認事項は開閉できる掲載範囲に集約し、確認済み情報を先に表示する。注意文を減らしたことをデータ確認率の改善と数えない。
- 古いアプリを開き続けた場合に、新版を実行していないのに「次の画面移動で反映」と案内していた。公開アセットの版を確認し、明示的な再読み込みへ案内する。標準の`confirm`ではなくページ内確認画面を使い、キャンセルで下書きを保持する。
- 初回索引作成を短いタスクに分割する点は維持し、継続処理を`scheduler.yield`、未対応環境では`MessageChannel`へ変更。検索トークンを変えずに重複する正規化処理を除去した。
- データ読み込み前の入力で空の索引を作る競合を防止。入力を保持し、データ到着後に検索する。初回待機を除外して短く報告しないよう入力時刻を引き継ぐ。
- ジムの静的HTMLとJavaScript表示後のrobots指定をともにnoindexへ統一した。

## 一次情報

1. [KIWAMI本店](https://kiwamisauna.com/store/honten)
2. [KIWAMI大須](https://kiwamisauna.com/store/osu)
3. [KIWAMI料金](https://kiwamisauna.com/system/price)
4. [ルネサンス仙台卸町24](https://www.s-re.jp/sendai-oroshimachi/)
5. [FIT-EASY徳島出来島店](https://shops.fiteasy.jp/shop184)
6. [Zeroスポーツ施設案内](https://zero-sp.com/facilities/)
7. [FIT-EASY岐阜正木店の運営会社発表](https://prtimes.jp/main/html/rd/p/000000701.000099487.html)（区分の根拠。2025年の発表であり現在の料金の根拠には使わない）
8. [Chromeのタスク分割解説](https://developer.chrome.com/blog/use-scheduler-yield)
9. [MessageChannel](https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel)

KIWAMIの本文はブラウザ描画後に照合した。公式画面・DOMテキストのローカル証跡は`output/playwright/catalog-scope-2026-10-20/`に保存している。ブラウザのエラー画面、検索断片、他店の情報を施設の料金・設備へ流用していない。

## 検証

- 回帰テスト対象: 重複と保存済みID、ジムの除外と記録保持、専門店の誤除外防止、更新検出（CSSのみの変更も含む）、タイマーを使わない継続、検索トークンの同一性、読み込み中入力、動的noindex。
- `node --test --test-reporter=dot tests/*.test.mjs`: 46件すべて成功（終了コード0）。
- `npm run check`: 成功。
- `npm run audit:nearby`: 成功。2km境界と必須2施設の座標テストを維持。
- `npm run audit:evidence`: 構造検査成功。ただし全国網羅性の合格ではない。
- 320px・390px・1440px幅で検索・施設詳細・更新確認画面を確認。更新キャンセル後の下書き保持、保存後の再読み込みと保存済みノート保持も実画面で確認した。
- 旧分割処理では検索操作の計測値25,062.4msのケースがあった。変更中の索引構築計測は作業2,604.4ms＋継続待機197.7ms。索引完成後の検索時間と初回索引作成時間は別物であり、INPや実機iPhoneの数値ではない。
- 最終アセットでの検索操作はKIWAMI175.6ms、同じ検証中のルネサンス247.5ms・FIT-EASY303.3msを記録。初回索引準備は別計測で約0.79〜4.17秒と変動した。初回待機がなくなった、実機でも同じ速さ、といった断定はしない。`local-search-metrics.json`へ操作計測を保存した。
- アプリ内ブラウザでは標準確認ダイアログで検証操作が停止したため、更新処理から標準確認を廃止した。変更後の確認・キャンセル・再読み込みはChromeで再検証した。

最終ビルド・SEO監査の出力は以下の通り。公開後のHTTP・画面検証証跡は、ローカルの`output/playwright/catalog-scope-2026-10-20/`に記録する。

最終ビルド出力:

```text
Built 5061 pages (1107 indexable) into public/
Canonical facilities: 4971; aliases: 29
Assets: app.d05710b0.js, nearby.590a3f2f.js, data.594f3f5d.js, content.e87abd05.js, styles.21a39d34.css
```

通常のアプリ候補は別名統合後4,837件。134件のジム併設ページは記録用に保持するが、インデックス対象には数えない。生成HTML数とサイトマップのURL数は一致しない。

`npm run audit:seo`の最終出力（抜粋、終了コード0）:

```json
{
  "ok": true,
  "feedItems": 32,
  "pageUrls": 90,
  "facilityUrls": 1017,
  "aliasRedirects": 29,
  "geolocationPolicy": "self"
}
```

公開アセットのapp/CSSハッシュ一致、134候補のサイトマップ除外と個別ページのnoindex、KIWAMI2店舗の掲載と汎用名から本店への301も監査対象に含む。公開物・ビルド残骸はGit管理対象外であることを確認し、無関係な未追跡ファイルは変更・ステージしていない。

## 残るデータ品質の問題

`npm run audit:evidence`の出力:

```json
{
  "rawCandidates": 5000,
  "excludedFitnessCandidates": 134,
  "discoveryRawCandidates": 4866,
  "discoveryWithOfficialFacts": 50,
  "discoveryOfficialFieldCoveragePercent": 1.03,
  "officialProfiles": 136,
  "sourceDatedFacts": 342,
  "withOfficialFacts": 141,
  "officialFieldCoveragePercent": 2.82,
  "meets95PercentOfficialFieldCoverage": false
}
```

件数は別名統合前。136プロフィールには検索対象外のジムも含む。公式項目が一つあることと、料金・営業時間・設備・温度・条件・持ち物すべての確認は異なる。

`npm run audit:evidence -- --strict`は95%未達で失敗する。`npm run audit`もカタログの一括確認日2026-07-11から60日超過で失敗する。この日付を今日へ書き換えて合格扱いにはしない。全国の大半を最新情報へ更新できた、設備を網羅した、95点以上になったとは報告できない。全施設の再照合と欠落項目の補完は残作業である。
