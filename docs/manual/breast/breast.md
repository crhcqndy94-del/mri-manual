# 乳房MRI（腹臥位・仰臥位・インプラント）

最終改訂：2025年11月4日

## ■ 乳房（腹臥位）— Breast（Prone）

| # | シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|---|-----------|-----|-----------|------|------|
| ① | Smart Survey | — | — | — | |
| ② | Survey | 450 | 10mm | 11枚 | |
| ③ | DWIBS TRA | 300 | 5mm | 35枚 | |
| ④ | T2 SPAIR COR | 300 | 3mm | 35枚 | |
| ⑤ | T1 COR | 300 | 3mm | 35枚 | |
| ⑥ | AI Dyn mDixon（Pre） | 300 | 1mm | 220枚 | Pre |
| — | AI Dyn mDixon | 300 | 1mm | 220枚 | 1相目 |
| — | AI Dyn mDixon | 300 | 1mm | 220枚 | 2相目 |
| — | T1w mDixon SAG | 220 | 1.6mm | 160枚 | 検側 |
| — | AI Dyn mDixon | 300 | 1mm | 220枚 | 3相目 |

:::danger 造影 Dynamic の重要事項
- 造影剤注入後およそ30秒後からScan Start
- Dynamic撮像時、乳房が大きい場合は枚数を増やさず、スライス厚を調整する（1相の時間が変わらないようにする）
- 3.0TのDynamic： Shimingを乳房から肝臓まで含むようにする
:::

:::info 記録事項
生理開始日から何日目かをRISの実施画面に記載（最終月経の記載は必要なし）
:::

### 【再構成】
1. Pre、Subtra（1相目）をCORで再構成
2. 健側SAG（Dynamic1相目）
3. RADIAL（Dynamic1相目）
4. MIP（Dynamic1相目）
5. ISPでTime-intensity curve作成（ISP TIC作成マニュアル参照）

---

## ■ 乳房（仰臥位）— Breast（Supine）

| # | シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|---|-----------|-----|-----------|------|------|
| ① | Survey | 450 | 10mm | 15枚 | |
| ② | DWIBS TRA | 300 | 5mm | 35枚 | |
| ③ | T2 SPAIR COR | 300 | 3mm | 35枚 | |
| ④ | T1 COR | 300 | 3mm | 35枚 | |
| ⑤ | AI Dyn mDixon（Pre〜3相目） | 300 | 1mm | 220枚 | 同上 |

:::warning
仰臥位で撮像の時は乳房加算が取れないため、必ずオーダーを乳房（仰臥位）に変更する
:::

再構成は腹臥位と同様。

---

## ■ マンモインプラント — Breast（IMPLANT）1.5T限定

| # | シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|---|-----------|-----|-----------|------|------|
| ① | Survey | 450 | 10mm | 15枚 | |
| ② | DWIBS TRA | 350 | 5mm | 30枚 | Free Breath |
| ③ | T1 TRA BH | 350 | 5mm | 30枚 | 息止め |
| ④ | T2 STIR SAG BH | 350 | 5mm | 35枚 | 息止め |

:::warning
- TRAの撮像範囲はインプラントだけでなく両乳房を含めて撮像
- SAGの撮像範囲は乳房インプラントのみ撮像
- 両乳房インプラントの場合は両方含める
:::

<details>
<summary>🔧 オプション</summary>

| シーケンス | FOV | スライス厚 | 枚数 |
|-----------|-----|-----------|------|
| DWI b1000 | 300 | 5mm | 35枚 |
| eTHRIVE TRA | 300 | 1mm | 220枚 |

</details>
