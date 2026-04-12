# MRI業務マニュアルサイト — セットアップ・運用ガイド

---

## ① 完成したファイル構成

```
mri-manual/
├── index.html              ← メインページ（触らない）
├── style.css               ← デザイン（触らない）
├── script.js               ← 動作（触らない）
├── manifest.json           ← PWA設定（触らない）
├── sw.js                   ← オフライン対応（触らない）
├── search-index.json       ← 検索データ（ページ追加時に更新）
├── docs/
│   ├── manual/
│   │   ├── head/           ← 頭部マニュアル（.md ファイル）
│   │   ├── inner_ear/      ← 内耳マニュアル
│   │   ├── sinus/          ← 副鼻腔マニュアル
│   │   ├── pituitary/      ← 下垂体マニュアル
│   │   ├── orbit/          ← 眼窩マニュアル
│   │   ├── neck/           ← 頸部マニュアル
│   │   ├── chest/          ← 胸部マニュアル
│   │   ├── heart/          ← 心臓マニュアル
│   │   ├── breast/         ← 乳房マニュアル
│   │   ├── abdomen/        ← 腹部マニュアル
│   │   ├── pelvis/         ← 骨盤マニュアル
│   │   ├── spine/          ← 脊椎マニュアル
│   │   ├── checkin.md      ← 着替え・問診手順
│   │   └── contrast.md     ← 造影剤換算表
│   ├── minutes/            ← 議事録（.md）
│   └── updates/            ← 変更履歴（.md）
└── assets/
    ├── images/             ← 画像ファイルを置く
    └── videos/             ← 動画ファイルを置く
```

---

## ② GitHub Pages 公開手順（初回のみ）

### 必要なもの
- GitHubアカウント（無料）
- Git（Macは標準インストール済み）

### 手順

**1. GitHubでリポジトリを作成**

1. https://github.com にアクセス・ログイン
2. 右上の「+」→「New repository」
3. Repository name: `mri-manual`
4. **Private**（非公開）を選択
5. 「Create repository」をクリック

**2. ターミナルでアップロード**

```bash
# mri-manualフォルダに移動
cd "/Users/kinoshitaeiichi/Library/Mobile Documents/com~apple~CloudDocs/mri-manual"

# Gitの初期化
git init
git add .
git commit -m "MRI業務マニュアル 初回公開"

# GitHubに接続（URLは自分のものに変更）
git remote add origin https://github.com/【あなたのGitHubユーザー名】/mri-manual.git
git branch -M main
git push -u origin main
```

**3. GitHub Pagesを有効化**

1. GitHubのリポジトリページを開く
2. 「Settings」タブ → 「Pages」
3. Source: 「Deploy from a branch」
4. Branch: `main` / `/ (root)` → 「Save」
5. 数分後にURLが表示される（例：`https://ユーザー名.github.io/mri-manual/`）

> **注意：** Privateリポジトリは GitHub Free プランでは Pages 公開不可の場合あり。
> その場合は Public にするか、GitHub Pro（月額）または後述の Cloudflare Access を利用。

---

## ③ Cloudflare Access 設定手順（認証追加・推奨）

GitHub Pages は URL を知っていればアクセスできるため、
**Cloudflare Access** でID/PW認証を追加します（無料）。

### 手順

**1. Cloudflare アカウント作成**
- https://dash.cloudflare.com にアクセス・アカウント作成（無料）

**2. カスタムドメインを設定（任意）**
- 独自ドメインがある場合はCloudflareのDNSに追加
- ない場合はGitHub PagesのURLをそのまま使用可能

**3. Zero Trust を設定**
1. Cloudflareダッシュボード → 「Zero Trust」
2. 「Access」→「Applications」→「Add an application」
3. 「Self-hosted」を選択
4. Application URL: `https://ユーザー名.github.io/mri-manual/`
5. 「Next」→ Policy を設定

**4. Policyでメールアドレス認証を設定**
```
Policy name: MRIスタッフのみ
Action: Allow
Rule: Emails → 許可するメールアドレスを入力
（例：staff@hospital.jp）
```

5. 保存 → アクセスするとメールOTPで認証が求められる

> **代替手段（Basic認証）**
> GitHub Pages は `.htaccess` が使えないため、
> Netlify + Basic認証 または Cloudflare Access が推奨です。

---

## ④ マニュアル更新手順（月1回・カンファレンス後）

### 基本ルール
- Markdown（`.md`）ファイルを編集するだけ
- テキストエディタ（VS Code 推奨、メモ帳でも可）を使用

### 撮像条件の変更手順

1. 対象の `.md` ファイルを開く
   - 例：頭部脳卒中 → `docs/manual/head/stroke.md`
2. テーブルの数値を変更する
   ```markdown
   | ③ | DWI b1000 TRA | 230 | 5mm | 24枚 | 鼻根部と橋下縁のラインに合わせる |
   ```
3. ファイル冒頭の `最終改訂：` 日付を更新する
4. 変更履歴（`docs/updates/index.md`）に記録する

### GitHubにアップロード（更新を反映）

```bash
cd "/Users/kinoshitaeiichi/Library/Mobile Documents/com~apple~CloudDocs/mri-manual"

git add .
git commit -m "2026-01 頸椎プロトコル更新"
git push
```

→ 数分後にサイトに反映されます。

---

## ⑤ 画像・動画の追加方法

### 画像を追加

1. 画像ファイルを `assets/images/` に置く
   - 例：`assets/images/head_stroke_positioning.jpg`
2. Markdownファイルの `[IMG:説明]` 部分を以下に変更：
   ```markdown
   ![ポジショニング](../../assets/images/head_stroke_positioning.jpg)
   ```

### 動画を追加

1. **MP4の場合：** `assets/videos/` に置く
   ```html
   <div class="video-wrapper">
   <video controls>
   <source src="../../assets/videos/brain_ci_procedure.mp4" type="video/mp4">
   </video>
   </div>
   ```

2. **YouTubeの場合：** 限定公開URLのIDを使う
   ```html
   <div class="video-wrapper">
   <iframe src="https://www.youtube.com/embed/【動画ID】" allowfullscreen></iframe>
   </div>
   ```

---

## ⑥ 運用ルール

| 作業 | タイミング | 担当 |
|------|----------|------|
| マニュアル内容更新 | カンファレンス後（月1回） | 管理者 |
| 変更履歴の記録 | 更新のたびに | 管理者 |
| 議事録の追加 | カンファレンス後 | 管理者 |
| 画像・動画の追加 | 随時 | 管理者 |

### 更新後の確認チェックリスト

- [ ] Markdownファイルの内容が正しく反映されているか
- [ ] 表の列がずれていないか
- [ ] 最終改訂日が更新されているか
- [ ] 変更履歴に記録したか
- [ ] スマホで見て崩れていないか

---

## ⑦ Markdownテンプレート（新しいページを作るとき）

新しいマニュアルページを追加する場合は、以下をコピーして使用してください。

```markdown
# 検査名（例：〇〇MRI）

最終改訂：YYYY年MM月DD日

## ■ 検査概要

（適応・目的を記載）

---

## ■ 撮像条件 — 検査名（分類）

> **基準線：** （基準線の説明）

| # | シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|---|-----------|-----|-----------|------|------|
| ① |  |  |  |  |  |

<details>
<summary>🔧 オプションシーケンス</summary>

| シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|-----------|-----|-----------|------|------|

</details>

---

## ■ ポジショニング

（説明）

[IMG:ポジショニング画像]

---

## ■ 断面設定

（説明）

[IMG:断面設定画像]

---

## ■ 良い例 / 悪い例

<div class="image-compare">
<figure class="img-good">
[IMG:良い例画像]
<figcaption>✅ 良い例：説明</figcaption>
</figure>
<figure class="img-bad">
[IMG:悪い例画像]
<figcaption>❌ 悪い例：説明</figcaption>
</figure>
</div>

---

## ■ 動画マニュアル

[VIDEO:動画タイトル]

---

## ■ 注意点

:::warning 重要
- 注意事項1
- 注意事項2
:::
```

### 注意ボックスの種類

```markdown
:::warning 注意（黄）
テキスト
:::

:::danger 重要・禁止（赤）
テキスト
:::

:::info 補足情報（青）
テキスト
:::

:::success チェック完了（緑）
テキスト
:::
```

---

## ⑧ セキュリティ（Basic認証 — 参考）

GitHub Pagesでは使えませんが、Netlify等で運用する場合：

### _headers ファイルを作成

```
/*
  Basic-Auth: staff:mri-staff-2025
```

> 推奨は **Cloudflare Access**（メール認証、無料）

---

## よくある質問

**Q: スマホで見るとレイアウトが崩れる**
→ テーブルは横スクロール対応済みです。FOV・枚数列は横スワイプで確認できます。

**Q: Markdownファイルを保存したのに反映されない**
→ `git push` を実行してください。Gitなしで使う場合は GitHub のWebエディタで直接編集もできます。

**Q: 画像が表示されない**
→ ファイルパスとファイル名を確認してください。スペースや日本語は避けてください。

**Q: オフラインで使えますか？**
→ 一度アクセスしたページはService Workerがキャッシュするため、オフライン閲覧できます。スマホのホーム画面に追加するとアプリ感覚で使えます。
