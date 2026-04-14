# ISP ストレイン解析 クイックリファレンス（フィリップス公式版）

> IntelliSpace Portal v12.1.4 クイックリファレンス

---

## Strain とは

Strain は心筋緊張による拡張期心筋機能の総合的な評価を行うためのものです。

| Strain の種類 | 必要データ |
|-------------|----------|
| Radial Strain | Cine SA（短軸 Cine） |
| Circumferential Strain | Cine SA（短軸 Cine） |
| Longitudinal Strain | Cine LA（長軸 Cine） |

---

## 1. Strain の開始

1. 解析に使用する Cine データを選択し、画面左上の Analysis の中から 「Strain」 をクリック
2. Caas 起動後、再度 「Strain」 をクリック

---

## 2. 画像レイアウト・アイコンの説明

| アイコン | 機能 |
|---------|------|
| a | 画像リボン |
| b | モジュール |
| c | ワークフローステップ |
| d | 設定 |
| e-i | ビューポート |
| — | LV心外膜のトレース |
| — | LV心内膜のトレース |
| — | 心内膜・外膜のトレース 表示/非表示 |
| — | トレーシングパス 表示/非表示 |
| — | LRV接合点の位置の編集と（ユーザー）セグメントの可視化 |
| — | 短軸像と長軸像の交線を表示 |

---

## 3. Mark Images

3. 解析に使用する Cine データを画像リボンから選択し、SA・2CH・4CH のビューポートへドラッグ&ドロップ
4. 「Automatically segment」 にチェックがついている状態で 「Next」 をクリック

---

## 4. Define & Review

5. SA を解析画像に含めると、拡張期（ED）・収縮期（ES）が自動決定される
   - 拡張期（ED）：青色
   - 収縮期（ES）：赤色
6. Slider を左右に動かして Phase を切り替え、上下でスライスを切り替えて ED・ES が正しいか確認する

### 拡張期・収縮期を変更する場合
- 変更先の Phase 上で 右クリック → Mark as LV ED をクリック
- または変更先の phase を選択し、LV ED に該当するアイコンをクリック

### 心膜のトレース確認
7. SA を含めた場合、各断面の拡張期で内膜・外膜が自動トレースされる
8. アイコンをクリックしスライス断面を切り替え、トレースが適切か確認する
   - トレースが行われていないスライス
   - トレースが行われたスライス（心基部・心尖部）

### マニュアルトレースが必要な場合
9. 削除したいスライスの上で右クリック → 心膜のトレースを削除
10. Draw LV心外膜 または Draw LV心内膜 のアイコンでトレース
    - Spline（短軸）：クリックした2点を直径とする円を描画 → 蛇行箇所をクリックして外膜に合わせる
    - Spline（長軸）：心基部2点をクリック → 心尖部をクリック → 蛇行箇所を外膜に合わせる
    - ダブルクリックで既存の点を削除

11. 「Process」 をクリック → トレーシングパスが作成される
12. 「Next」 をクリック

---

## 5. Result

13. 結果が表示される
14. 「Segments Mode」 から選択：
    - Global
    - AHA-17 Segments Model
    - User Segments

---

## 6. Global

- 各 Peak Strain のグラフが表示される
  - Global Radial strain
  - Global Circumferential strain
  - Global Longitudinal strain

---

## 7. User Segments

- Segments：セグメント数を変更
- Strain Type：Radial / Circumferential / Longitudinal strain を選択
- Show in Bull's Eye：Peak Strain / Time to Peak Strain を選択
- カラーマップの表示/非表示を切り替え可能

---

## 8. AHA-17 Segments Model

- AHA-17 に準じた Peak Strain グラフとブルズアイマップが表示される
- ※ セグメント2・5・8・11 に対する結果はない
- Slice Selection：Basal(#1-6) / Mid(#7-12) / Apical(#13-17) / All(#1-17)
- Strain Type：Radial / Circumferential / Longitudinal

---

## 9. 結果の保存

15. 対象のシネ画像の上で 右クリック
16. 「Save Snapshot」 → 対象画像のキャプチャーを保存
17. 「Export Video」 → シネ画像を保存
18. 「Save Report」 → レポートを保存

---

> 販売名：フィリップス画像診断用ワークステーション
> 医療機器認証番号：22000BZX00781000
