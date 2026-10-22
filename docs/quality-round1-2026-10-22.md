# サ印帳 Web品質評価 第1ラウンド

対象: https://saincho-sauna-stamp-rally.pages.dev/

採点ルールは依頼文に従う。ユーザー提出のLighthouse、PageSpeed Insights、INP、実機確認結果はまだない。開発側のテスト結果や画面寸法を、それらの代替として採点に使用しない。未確認は不合格の確定ではなく、合格の根拠がない状態である。

## 1. 改善前の採点

| 分野 | 第1ラウンド開始時 | 判定 |
| --- | --- | --- |
| A ユーザビリティ | 45点（確認した導線に限る暫定評価） | 100 - 30 - 10 - 3×5。未監査箇所を含む最終点ではない |
| B アクセシビリティ | 未計測 | モバイルLighthouse未提出。設定のフォーカス逸脱があり、改善前は上限90点 |
| C 表示速度 | 未計測 | モバイルPSI 3回・LCP・INP・CLS未提出 |
| D PWA品質 | 未採点 | 5項目の実機・更新・速度の確認証拠が不足。未確認を0点や20点に置き換えない |
| E アプリ固有 | 確定点は未算出 | E3の公開範囲の文言はコードで確認（100/6点分）。E1・E4は検証待ち。E2・E5・E6に下記の問題あり |

深刻度は頻度・影響・持続性に基づく。Aは確認できた問題のみ減点しており、全機能の無欠陥を意味しない。コードで発生経路を確認した問題と、実際に画面で再現した問題を区別する。

| ID | 分野 | 深刻度 | 改善前の根拠 | 改善案 |
| --- | --- | --- | --- | --- |
| U01 | A / E1 | 4 | `importState`は任意のJSONを`normalizeState`に渡して上書き。`{}`等も空記録に正規化され、確認なしで永続化される。コード上の発生経路を確認。利用頻度は低くても記録全体への持続的な影響が大きい | 書式検証、上書き確認、保存成功後に状態を交換 |
| U02 | A / B | 3 | 設定を`.show()`で開く。画面操作でShift+Tabにより`settingsScrim`へ移動し、`insideSettings:false`。背景へフォーカスが逸脱する | ネイティブのモーダルダイアログ化、閉じた後のフォーカス復帰 |
| U03 | A / E1 | 2 | 記録画面の冒頭に書き出し、読み込みは県別一覧より下。手順の説明も離れている | 冒頭にバックアップ・復元と説明をまとめる |
| U04 | A / E2 | 2 | リセットの確認はあるが、口コミ等が全部消えるような文言に対して実装は端末内だけ。公開データは残る。取り消せない旨・バックアップ推奨がない | 削除対象・残存対象・不可逆性を明記 |
| U05 | A / E6 | 2 | `getCurrentPosition`が利用目的のアプリ内説明より先にブラウザ位置情報要求へ進む | 用途・処理先・拒否時の代替手段を先に説明 |
| U06 | A / E5 | 2 | 記録・施設詳細・入門等の推薦カードはAmazon/楽天リンク直近に広告表記がない。Gearページ全体の表記だけでは他画面を覆えない | 各商品カードにPR・広告リンクと明記 |
| U07 | A / B | 2 | 施設カード等の`article role="link" tabindex="0"`が、ボタンやリンクを内包する | 施設名を実際のリンクにし、子操作を独立させる |
| P01 | D | 採点対象外の技術的不備 | SWの事前保存対象に、本番で410を返した`llms.txt`が残る。保存失敗を握りつぶして`skipWaiting`を先行。必須JS/CSSは事前保存されない | 完全なビルド済みアプリを保存できた場合だけ新SWへ進む |

E3で確認した文言: `index.html`の`profileVisibility`は「ニックネーム・サ印数・称号」「メールアドレスは公開されません」。`sharedAddHint`は追加施設が他ユーザーにも表示される旨。サ活ノートの口コミ公開・端末内保存も表示される。E4は静的候補と公開追加候補の違いを含め、ページ間の数値を網羅的には照合していないため保留。

## 2. 実施した修正（最大5件）

### 修正1: バックアップ・復元・リセット

対象: `app.js`、`index.html`、`styles.css`。

実際の変更から抜粋:

```diff
-    const payload = JSON.parse(await file.text());
-    const imported = payload.state || payload;
-    state = normalizeState(imported);
-    invalidateFacilityCaches();
-    saveState();
+    if (file.size > 10 * 1024 * 1024) throw new Error("10MB以下のバックアップを選んでください");
+    const nextState = parseRecordBackup(await file.text());
+    const confirmed = await confirmRecordAction("バックアップで記録を置き換えますか？", /* 対象件数・上書き警告 */, "記録を置き換える", true);
+    if (!confirmed) { setBackupStatus("読み込みをキャンセルしました。現在の記録は変更していません。"); return; }
+    commitRecordReplacement(nextState);
```

抜粋の説明部分は省略している。省略のない差分は別添`round1.patch`。

```js
function commitRecordReplacement(nextState) {
  // Persist first: quota/security failures must not replace the live records.
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
  state = nextState;
  activityDrafts.clear();
  invalidateFacilityCaches();
}
```

変更前: 「すべての押印・行きたい・お気に入り・メモ・口コミ・追加データを削除します。」

変更後: 「この操作は取り消せません。必要な記録は先にバックアップしてください。公開済みの口コミ・募集・ランキングと、ランキングの登録情報は削除されません。」

書き出し・読み込みを「記録のバックアップ・復元」に集約し、設定にも入口を追加。JSON識別・バージョン・主要データ形・不正キー・サイズを検証する。インポートで位置情報の同意・近隣通知・進行中チェックインは引き継がない。確認の初期フォーカスはキャンセル。

### 修正2: 位置情報の事前説明

対象: `app.js`、`index.html`。

```diff
-function getCurrentPosition(options = {}) {
+async function getCurrentPosition(options = {}) {
+  if (!navigator.geolocation) throw new Error("この端末では位置情報を利用できません");
+  if (!await requestLocationConsent()) throw Object.assign(new Error("位置情報の利用をキャンセルしました"), { code: "consent-cancelled" });
   return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, {
```

変更前: アプリ内の用途説明なしで位置情報要求。

変更後: 「2km以内の候補検索と滞在チェックインの距離判定」「端末内で処理」「サ印帳のサーバーには送信しません」「許可しなくても県・施設名で検索できます」を確認してから進む。通知の有効化・次回起動時の取得も同じ同意を条件とする。キャンセルはエラー表示ではなく代替検索を案内する。

### 修正3: 商品カードの広告表記

対象: `app.js`、`styles.css`。

```diff
       <div class="gear-card-copy">
+        <p class="affiliate-disclosure">PR・広告リンク。購入により運営に報酬が入る場合があります。</p>
         <h4>${escapeHtml(item.title)}</h4>
```

施設詳細・入門・記事のコンパクト推薦にも「PR・広告リンク」を追加。リンク先や商品内容は今回変更しない。

### 修正4: 設定と施設カードのアクセシビリティ

対象: `app.js`、`styles.css`。

```diff
-  if (typeof el.settingsDialog.show === "function") el.settingsDialog.show();
+  if (typeof el.settingsDialog.showModal === "function") el.settingsDialog.showModal();
```

```diff
-    <article class="facility-card" data-detail-card="${escapeAttr(facility.id)}" role="link" tabindex="0" aria-label="${escapeAttr(facility.name)}の詳細を見る">
+    <article class="facility-card" data-detail-card="${escapeAttr(facility.id)}">
```

施設名を`a.facility-title-link`に変更し、Tabでリンクと各ボタンを個別に扱う。通常クリックはアプリ内遷移、修飾キー付きクリックはリンク本来の挙動を保つ。設定を閉じると設定ボタンへ戻す。ネイティブの背景と確認ダイアログも明示する。

### 修正5: PWAの事前キャッシュ

対象: `sw.js`、`scripts/build-seo.mjs`。

```diff
-  "./llms.txt",
```

```diff
-  self.skipWaiting();
   event.waitUntil(
     caches.open(APP_SHELL_CACHE)
       .then((cache) => cache.addAll(APP_SHELL_ASSETS))
-      .catch(() => null)
+      .then(() => self.skipWaiting())
   );
```

```diff
-await write("sw.js", sourceSw);
+await write("sw.js", builtSw);
```

`builtSw`は実際のハッシュ付きJS/CSSを列挙し、その一覧とSW本体からキャッシュ名を作る。必須データ・画面画像・地図も保存。ハッシュ付きモジュールのバージョンクエリは保存済みファイルに一致させる。APIはオフライン時の成功扱いにしない。更新時にlocalStorageを消す処理は追加していない。ただし、これはiOS/Android実機や更新テストを代替しない。

## 3. 再採点

### 開発側の実行結果（採点用の計測値には使用しない）

```text
node --test tests/quality-round1.test.mjs tests/service-worker-quality.test.mjs
tests 10 / pass 10 / fail 0

node --test --test-reporter=spec tests/*.test.mjs
tests 64 / pass 64 / fail 0

npm run check
exit 0

npm run build
Built 5061 pages (1107 indexable) into public/
Canonical facilities: 4971; aliases: 29
Assets: app.263cf185.js, nearby.590a3f2f.js, data.594f3f5d.js, content.e87abd05.js, styles.a38bd678.css

npm run audit:nearby
ok: true / radiusKm: 2

npm run audit:seo
ok: true / pageUrls: 90 / facilityUrls: 1017 / aliasRedirects: 29

生成済みSWの事前キャッシュURLをローカルHTTPで確認
cacheName: saincho-75244ce4 / total: 23 / failed: []

git diff --check
exit 0
```

64件には作業開始時から存在した別作業の未コミットテスト8件が含まれる。今回追加したテストは10件で、その別作業のコードは今回の公開対象に含めない。

画面操作で確認したこと: バックアップ2操作が記録の冒頭に表示される。設定は`:modal`で開き、Escapeで`settingsButton`に戻る。位置情報の説明が先に表示され、キャンセルすると「位置情報は使用していません」「施設名・都道府県から検索できます。」と出る。リセット確認はキャンセルに初期フォーカスがある。施設名リンクから施設詳細へ進む。

Tab境界では`BODY`にフォーカスがある状態も観察したため、すべての逆順・順方向キーボード操作に合格したとは報告しない。モバイル実機・支援技術での確認は未実施。記録の削除・公開投稿・位置情報許可は実行していない。

画面証拠はリポジトリの`output/quality-round1-2026-10-22/`に保存:

- `01-search-before.png`: 改善前の検索
- `02-records-before.png`: 改善前の記録冒頭
- `03-settings-before.png`: 改善前の設定
- `04-focus-before.png`: 改善前の設定外フォーカス
- `05-records-after.png`: 改善後の記録（デスクトップ）
- `06-settings-after.png`: 改善後の設定（スマホ幅）
- `07-records-mobile-after.png`: 改善後の記録（スマホ幅）
- `08-location-consent-after.png`: 位置情報の説明
- `09-reset-warning-after.png`: リセット確認
- `round1.patch`: アプリの省略なしのコード差分
- `precache-check.json`: 事前キャッシュURLのHTTP結果

今回は開発側の修正・回帰テストと画面確認まで。ユーザーが結果を貼る前に、Lighthouse・PSI・INP・実機項目の点数を上げない。Aの改善前45点を全サイトの最終評価へ昇格させず、残る導線とユーザーの再確認を待つ。Eも未確認項目を自動的に合格扱いにしない。

| 分野 | 第1ラウンド後 | 次に必要な証拠 |
| --- | --- | --- |
| A | 再採点保留（改善前暫定45） | 修正した導線・誤操作防止の確認と、検索・記録・口コミ・ランキング等の残りの問題一覧 |
| B | 未計測・未合格 | モバイルLighthouseアクセシビリティと手動5項目 |
| C | 未計測・未合格 | PSIモバイル3回、LCP・INP・CLS |
| D | 未採点・未合格 | インストール・オフライン・両OS・更新で記録維持・Cの速度 |
| E | 再採点保留・未合格 | バックアップ往復、確認キャンセル、公開範囲、件数、広告表記、位置情報説明 |

これは第1ラウンドであり、「3ラウンド改善なし」の停止条件はまだ適用しない。

## 4. ユーザーにお願いする再計測

### B: Lighthouse

ChromeのLighthouseでモバイル・Accessibilityを実行。対象URL、実行日時、スコア、失敗監査名（できればHTMLレポート）を貼る。トップだけでなく、施設詳細・記録画面も確認する。

手動チェック: 通常文字4.5:1以上／大きい文字3:1以上、UI・フォーカス3:1以上、タップ24×24 CSS px以上、Tab・Shift+Tab・Enter・Escapeで可視フォーカスが隠れない、フォーム名と画像alt。比率は使用した計測ツールと結果を添える。Lighthouseだけでは手動合格を代替しない。

### C: PageSpeed Insights

https://pagespeed.web.dev/ で本番トップをモバイルで3回実行し、それぞれの共有URL、性能スコア、LCP、CLSを貼る。INPは実ユーザーデータの値と対象範囲（URL／オリジン）を貼る。INPが表示されない場合は「未計測」と記載する。TBTをINPとして扱わない。

```text
PSI 1: 共有URL / Mobile性能 / LCP / CLS
PSI 2: 共有URL / Mobile性能 / LCP / CLS
PSI 3: 共有URL / Mobile性能 / LCP / CLS
INP: 値 / URLまたはオリジン / 取得日（または未計測）
```

### A・D・E: 実機と操作確認

1. iOS SafariとAndroid ChromeでOS・ブラウザのバージョンを記載。インストールできるか、検索・押印・サ活ノートが動くか確認。
2. **先にバックアップを保管**。オンラインで起動・記録保存・一度閉じる。機内モードで再起動して、主要画面と保存済み記録が表示されるか確認。公開ランキング・新規口コミの通信が必要なのは別扱い。
3. 記録を残したまま次回アプリ更新を実施し、押印・メモ・ログが維持されるか確認。今すぐ更新前後を比較できない場合は未確認と記載。
4. 「記録」冒頭からJSONを書き出す。**別のテスト用ブラウザ環境**で読み込んで内容一致を確認。元の端末を上書きしない。別JSON・壊れたJSONの拒否、上書きのキャンセルで記録が変わらないことも確認。
5. リセットは確認画面の警告を読むところまででよい。大切な記録を実際に削除しない。確認のキャンセルと元の記録維持を確認。
6. 設定内でTab/Shift+Tabを巡回し背景に移動しないこと、Escapeで閉じて設定ボタンへ戻ることを確認。
7. ランキング・追加施設・口コミの公開範囲、トップ・検索結果・記録の候補件数（条件と公開追加の扱いも記載）、推薦カードのPR表示を確認。公開投稿はテストのために行う必要はない。
8. 「現在地から探す」を押すと理由の説明が先に出るか、キャンセルで位置情報要求が出ないか確認。実際の位置情報の許可は任意。

未確認は「未確認」、問題は操作手順・実際の結果・期待結果・スクリーンショットを添えて報告する。提出結果を使って第2ラウンドの採点と、必要なら最大5件の追加修正を行う。
