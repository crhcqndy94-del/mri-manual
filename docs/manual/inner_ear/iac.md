# 内耳・IAC（難聴・聴神経腫瘍・顔面神経・真珠腫）

最終改訂：2025年11月4日

## ■ 検査概要

内耳領域の評価。難聴・聴神経腫瘍・顔面神経麻痺・耳鳴り・真珠腫などに対応。
3D T2 DRIVE（CISS）で内耳・神経の精細描出が中心。

---

## ■ 難聴・聴神経腫瘍（単純）— IAC（CP angle Plain）

> 難聴は IAC（CP angle）、突発性難聴は IAC（SD） の Exam Card を使用

| # | シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|---|-----------|-----|-----------|------|------|
| ① | Survey | 250 | 10mm | 4枚 | |
| ② | T2W Survey | 250 | 5mm | 9枚 | |
| ③ | DWI b1000 TRA | 230 | 5mm | 24枚 | 全脳 |
| ④ | 3D T2 DRIVE | 130 | 1mm | 70枚 | 内耳中心 |
| ⑤ | T2W TRA | 230 | 5mm | 24枚 | 全脳 |
| ⑥ | T1 SE COR | 180 | 2mm | 18枚 | 内耳中心・脳幹に平行 |

---

## ■ 聴神経腫瘍（造影）— IAC（CP angle CE）

| # | シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|---|-----------|-----|-----------|------|------|
| ① | CE 3D TRA | 130 | 1mm | 70枚 | 内耳中心・CISSと同期 |
| ② | CE SE COR | 180 | 2mm | 18枚 | 内耳中心・脳幹平行・T1CORに同期 |

:::info
症例によっては追加で頭部全脳 3D を撮像する場合あり
:::

---

## ■ 顔面神経麻痺・顔面けいれん・耳鳴り — IAC（neuro7）

| # | シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|---|-----------|-----|-----------|------|------|
| ① | Survey | 250 | 10mm | 4枚 | |
| ② | T2W Survey | 250 | 5mm | 9枚 | |
| ③ | Surv_PCA | 300 | 40mm | 2枚 | |
| ④ | DWI b1000 TRA | 230 | 5mm | 24枚 | 全脳 |
| ⑤ | 3D T2 DRIVE | 130 | 1mm | 65枚 | 内耳中心 |
| ⑥ | Head MRA | 150 | 1.1mm | 150枚 | |
| ⑦ | T2W TRA | 230 | 5mm | 24枚 | 全脳 |
| ⑧ | T1 SE COR | 180 | 2mm | 18枚 | 内耳中心・脳幹に平行 |

:::info
耳鳴りが主訴の時：頭部MRAはAVF（動静脈瘻）がないかを確認している
:::

---

## ■ 突発性難聴 — IAC（SD）

| # | シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|---|-----------|-----|-----------|------|------|
| ① | Survey | 250 | 10mm | 4枚 | |
| ② | T2W Survey | 250 | 5mm | 9枚 | |
| ③ | DWI b1000 TRA | 230 | 5mm | 24枚 | 全脳 |
| ④ | 3D T2 DRIVE | 160 | 1mm | 60枚 | 内耳中心・FLAIR 3D TRAと同期 |
| ⑤ | FLAIR 3D TRA | 160 | 1mm | 60枚 | 内耳中心・CISSと同期 |
| ⑥ | T2W TRA | 230 | 5mm | 24枚 | 全脳 |
| ⑦ | T1 SE COR | 180 | 2mm | 18枚 | 内耳中心・脳幹に平行 |

:::warning 突発性難聴
- CISSとFLAIR 3D TRAは同期（FOV・スライス厚・スライス位置が同じ）させる
- CISSとFLAIR 3D TRAはFOV160（外耳まで含めるためFOVが広い）
:::

---

## ■ 真珠腫 — IAC（Cholesteatoma）

| # | シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|---|-----------|-----|-----------|------|------|
| ① | Survey | 250 | 10mm | 4枚 | |
| ② | T2W Survey | 250 | 5mm | 9枚 | |
| ③ | TSE DWI | 200 | 2.2mm | 20枚 | 内耳中心 |
| ④ | 3D T2 DRIVE | 180 | 10mm | 80枚 | 内耳中心 |
| ⑤ | T2W COR | 180 | 2mm | 20枚 | 内耳中心 |
| ⑥ | T2W TRA | 180 | 2mm | 20枚 | 内耳中心 |
| ⑦ | T1 SE COR | 180 | 2mm | 18枚 | 内耳中心・脳幹に平行 |

:::info
真珠腫は TSE DWI で高信号になる
:::

<details>
<summary>🔧 オプション — IAC（Option）</summary>

| シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|-----------|-----|-----------|------|------|
| T2W TRA | 130 | 2mm | 18枚 | 内耳中心 |
| T1_SE_TRA | 130 | 2mm | 18枚 | 内耳中心 |
| B_FFE | 130 | 1mm | 75枚 | 内耳中心 |
| 3D T2 FS COR | 180 | 1mm | 180枚 | |
| 3D T1 COR | 180 | 1mm | 180枚 | |

</details>

---

## ■ 注意点

:::warning
- 内耳系は全て 内耳中心 で位置を合わせる
- T1 SE COR は脳幹に平行
- 突発性難聴：CISSとFLAIR 3D TRAを同期させること
:::

---

## ■ 知っておくべき解剖

<div style="display:flex;gap:8px;margin-bottom:8px;">
<img src="assets/images/head/vertigo/anatomy_1.png" style="width:50%;">
<img src="assets/images/head/vertigo/anatomy_2.png" style="width:50%;">
</div>
<div style="display:flex;gap:8px;margin-bottom:8px;">
<img src="assets/images/head/vertigo/anatomy_3.png" style="width:50%;">
<img src="assets/images/head/vertigo/anatomy_4.png" style="width:50%;">
</div>
<div style="display:flex;gap:8px;margin-bottom:8px;">
<img src="assets/images/head/vertigo/anatomy_5.png" style="width:50%;">
<img src="assets/images/head/vertigo/anatomy_6.png" style="width:50%;">
</div>
