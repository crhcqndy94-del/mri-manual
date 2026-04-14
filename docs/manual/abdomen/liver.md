# 腹部MRI 肝臓・SPIO・EOB Primovist

最終改訂：2025年11月4日

## ■ 肝臓単純 — Liver

| # | シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|---|-----------|-----|-----------|------|------|
| ① | Survey | 450 | 15mm | 11枚 | |
| ② | T2 TRA | 350 | 5mm | 40枚 | 肝臓含める |
| ③ | T1W dual TRA | 350 | 5mm | 40枚 | 肝臓含める |
| ④ | eTHRIVE TRA | 350 | 5mm | 80枚 | 肝臓含める |
| ⑤ | DWI TRA navigator | 350 | 5mm | 45枚 | 横隔膜同期 |
| ⑥ | T2 COR | 350 | 5mm | 40枚 | 肝臓含める |

:::info
- 肝臓の撮像ではgapは0に設定している
- DWI横隔膜同期が上手く撮れない場合は呼吸同期シーケンスを使用しても可
:::

<details>
<summary>🔧 オプション</summary>

| シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|-----------|-----|-----------|------|------|
| T1 mDixon TFE | 350 | 5mm | 40枚 | |
| BFE COR/BH | 300 | 4mm | 20枚 | |
| DWI b1000 FB | 350 | 5mm | 45枚 | 脂肪抑制不良に対応 |
| DWI b1000 BH TRA | 350 | 5mm | 40枚 | 息止め |
| DWI b1000 RT | 350 | 5mm | 45枚 | 呼吸同期 |
| DWIBS b1000 TRA | 350 | 5mm | 45枚 | |

</details>

---

## ■ SPIO Resovist — 1.5T限定

| # | シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|---|-----------|-----|-----------|------|------|
| ① | Survey | 450 | 15mm | 11枚 | |
| ② | T2W TRA BH | 350 | 5mm | 40枚 | 肝臓含める |
| ③ | T1W dual TRA BH | 350 | 5mm | 40枚 | 2〜3回息止め |
| ④ | Pre long TE TRA BH | 350 | 5mm | 80枚 | 3〜4回息止め |
| ⑤ | Dynamic TRA | 350 | 5mm | 40枚 | 4相手押しDynamic |
| ⑥ | DWI TRA Navigator | 350 | 5mm | 45枚 | 横隔膜同期 |
| ⑦ | CE T2W TRA BH | 350 | 5mm | 40枚 | 2〜3回息止め |
| ⑧ | CE long TE TRA BH | 350 | 5mm | 40枚 | |
| ⑨ | CE T1W dual TRA BH | 350 | 5mm | 40枚 | 3〜4回息止め |

:::warning SPIO 注意事項
- Dynamicは手押しで行う
- T2、long TE、T1W dualの順にPre Post撮像する（同じ位置で撮像）
- Post T2・long TEなどで信号低下が見られた場合は20分待たずに検査終了してもよい
- 副脾の撮像はT2とT1とlong TEのPre Postを撮像（撮像範囲は絞ってもよい）
- CE後の long TE が磁化率の影響で綺麗に撮像できず、1.5Tで撮像する
:::

---

## ■ EOB Primovist

| # | シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|---|-----------|-----|-----------|------|------|
| ① | Survey | 450 | 15mm | 11枚 | |
| ② | T2W TRA BH | 350 | 5mm | 40枚 | 肝臓含める |
| ③ | T1W dual TRA BH | 350 | 5mm | 40枚 | 肝臓含める |
| ④ | Dynamic TRA | 350 | 5mm | 80枚 | ボーラス撮像（1.5ml/s） |
| ⑤ | DWI TRA Navigator | 350 | 5mm | 45枚 | 横隔膜同期 |
| ⑥ | DELAY COR | 350 | 5mm | 90枚 | 肝細胞相（総胆管に排出されればOK） |
| ⑦ | DELAY TRA | 350 | 5mm | 80枚 | 肝細胞相 |
| ⑧ | DELAY SAG | 350 | 5mm | 100枚 | 肝細胞相 |

:::danger EOB Dynamic 撮像手順
- インジェクターを使用。1.5ml/s
- DynamicはBolus撮像：1相目が腹部大動脈に流入したら1相目の撮像スタート
- 2相目：1相目終了から30秒後に撮像
- 3相目：造影注入後180秒後に撮像
- 肝細胞相：造影剤が総胆管に排泄されていれば撮像
:::

:::warning
- Dynamicは息止め時間を短く設定しているが、息止めができない場合は撮像時間を短くする
- DELAY CORが上手く撮像できない場合はENCAGEを使用。ただし撮像範囲は躯幹部を必ず含める
- EobでMRCPがある時：Dynamic前に3D Grase MRCP、Dynamic後に2D MRCPを撮像
  - 順番：3D Grase MRCP → Dynamic → 2D MRCP → Diffusion
:::
