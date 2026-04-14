# ISP 心機能解析（EF解析）

:::info シリーズ番号
検像送信時のシリーズ番号：5
:::

---

## 1. 解析開始

1. CINE Sax を選択する
2. 左上の Analysis をプルダウン
3. Cardiac MR Analysis をクリック
4. All series をクリック
5. Start Analysis Application をクリック

---

## 2. 自動セグメンテーション

6. Automatic segmentation をプルダウン
7. Automatic segmentation をクリック
   - ※ Automatic segmentation が選択できない場合は Semi-automatic segmentation でも可
8. Yes をクリック
9. 心筋の内外側が自動トレースされることを確認
10. Navigate to RV segmentation をクリック
11. RV が自動トレースされることを確認

---

## 3. LV解析・結果表示

12. Navigate to LV segmentation をクリック
13. Show RV Contours に ☑ を入れる
14. ⇨ をクリック
15. Yes をクリック
16. 解析結果が表示される

---

## 4. Global LV の数値算出

17. Global LV をクリック
18. 右上の表の上で 右クリック
19. Set BSA Parameters をクリック
20. 身長・体重を入力 → OK
21. Yes をクリック
22. 左の欄の数値が算出されたことを確認

---

## 5. 画像保存（Film）

### LV グラフ・表
23. 文字に重ならないように凡例を少し左にずらす
24. 左上のグラフをクリックしてアクティブにする
25. Film image(s) をプルダウン → Film image(s) をクリック
26. 右上の表をクリックしてアクティブにする
27. Film image(s) をプルダウン → Film image(s) をクリック

### RV グラフ・表
28. Global RV をクリック
29. 左上のグラフをクリックしてアクティブにする
30. Film image(s) をプルダウン → Film image(s) をクリック
31. 右上の表をクリックしてアクティブにする
32. Film image(s) をプルダウン → Film image(s) をクリック

### 画像まとめて保存
33. 右上の Open Film をクリック
34. 保存した4枚が表示されていることを確認し、左側の Select All をクリック
35. プルダウンから Titles On/Off をクリックして患者情報を消す
36. 4枚がアクティブになっていることを再確認し、Save selected image(s) as をクリック
37. File name に 「EF」 と入力して Local に保存

---

## 6. ISP での保存・送信

38. Cardiac MR Analysis をクリック
39. Exit をクリック
40. Save & Exit をクリック
41. File name は自分が分かれば何でも可
42. 保存先は Local → Save
43. Patient Directory をクリック
44. 保存した画像を選択 → 右クリック → Copy to
    - ※ 他に解析を行う場合はまとめて送信すること
45. 送信先は KENZO

---

## 7. 検像端末での操作

:::warning 転送保留を忘れずに
送信したら必ず 転送保留 してください！
既に原画像が送信されているので、「一部転送済」「未転送」「転送済」を選択しないと該当患者が検像端末に表示されない場合があります。
:::

46. 転送保留した後、解析結果上で 右クリック → タグ編集
47. シリーズ番号に 「5」 を入力
48. 保存 をクリック
49. はい をクリック → 送信
    - ※ 他の解析結果をまとめて送信する場合はシリーズNoを変更して一括送信

---

## シリーズ番号一覧

| 解析 | シリーズ番号 |
|------|:-----------:|
| T1マッピング解析 | 1 |
| T2マッピング解析 | 2 |
| T2\*マッピング解析 | 3 |
| ECVマッピング解析 | 4 |
| EF解析 | 5 |
| ストレイン解析 | 6 |
