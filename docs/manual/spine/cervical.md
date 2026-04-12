# 脊椎MRI 頸椎（C-SPINE）

最終改訂：2025年11月4日

## ■ 頸椎単純 — C-SPINE（Plain）

| # | シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|---|-----------|-----|-----------|------|------|
| ① | Survey T2 | 300 | 7mm | 10枚 | |
| ② | SURVEY Myelo | 250 | 50mm | 1枚 | **頸髄に合わせる** |
| ③ | T2 SAG | 250 | 3mm | 13枚 | 椎体をしっかり含める |
| ④ | T1 SAG | 250 | 3mm | 13枚 | 椎体をしっかり含める |
| ⑤ | STIR SAG | 250 | 3mm | 13枚 | 椎体をしっかり含める |
| ⑥ | T2* TRA | 160 | 3mm | 18枚（6Stack） | **頸椎の椎間に平行に合わせる** |
| ⑦ | T1 TRA | 160 | 3mm | 18枚（6Stack） | 頸椎の椎間に平行に合わせる |

:::warning
- ヘルニアの撮像時：SAGは**神経根まで含める**ように枚数を適宜調整
- **頸椎術後（金属あり）：** T2*ではなく **T2 TRAを撮像**
- **圧迫骨折・メタ疑い：** TRAは椎間板ではなく**椎体を連続撮像**。T2*ではなくT2 TRAを撮像
- **メタ疑い：DWIBSを撮像**
- 頸髄損傷など：T2 3D SAGを撮像
- OPLLはFRACTURE撮像
:::

### 頸椎造影 — C-SPINE（CE）

| シーケンス | FOV | スライス厚 | 枚数 |
|-----------|-----|-----------|------|
| CE mDixon SAG | 250 | 3mm | 17枚 |
| CE mDixon TRA | 160 | 3mm | 25枚 |

:::warning
- 造影は必ず**脂肪抑制で撮像**（3Dも脂肪抑制）
- 造影依頼時はメタ疑いが多い → T2*ではなくT2を撮像、必要であればDWIBSを撮像
- CE mDixonが上手く撮像できない場合は**T1 SE脂肪抑制**で撮像
:::

<details>
<summary>🔧 オプション — C-SPINE（Option）</summary>

| シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|-----------|-----|-----------|------|------|
| T2 TRA | 160 | 3mm | 18枚 | 頸椎の椎間に平行 |
| T1 FS TRA | 160 | 3mm | 25枚 | |
| Nerve T2mDixon COR | 250 | 3.5mm | 40枚 | 1.5Tのみ |
| 3D Nerve VIEW STIR | 270 | 2.4mm | 65枚 | COR再構成（8mm -2mmgap） |
| 3D TFE WATS | 300 | 2mm | 80枚 | |
| DWI Neurography | 300 | 4mm | 60枚 | TRAで撮像後CORに再構成 |
| DWI IRIS | 250 | 3mm | 13枚 | 1.5Tのみ |
| DWIBS COR1/2 | 290 | 4.5mm | 45枚 | メタ疑い |
| mDixon all1/2 | 290 | 5mm | 50枚 | 骨髄腫の時 |
| T1 FRACTURE | 250 | 1.2mm | 80枚 | 適宜必要時 |
| B PAS COR | 300 | 45mm | 1枚 | 動静脈奇形（3.0Tのみ） |

</details>

---

## ■ 引き抜き損傷（腕神経叢）— C-SPINE（brachial plexus）3.0T限定

| # | シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|---|-----------|-----|-----------|------|------|
| ① | Survey | 350 | 8mm | 9枚 | |
| ② | Survey Myelo | 250 | 50mm | 1枚 | 頸髄に合わせる |
| ③ | T2 SAG | 250 | 3mm | 13枚 | 頸椎に合わせる |
| ④ | 3D Nerve View STIR | 300 | 2mm | 80枚 | MIP 8mm/-2mmgap |
| ⑤ | T2 mDixon TRA | 300 | 3.5mm | 30枚 | **腕神経中心** |
| ⑥ | T1 mDixon TRA | 300 | 3.5mm | 30枚 | 腕神経中心 |
| ⑦ | T2 mDixon COR | 350 | 2mm | 32枚 | **腕神経に合わせる** |

:::warning
- 腕神経叢は**C5〜T1神経根**が範囲（C4椎体からT1椎体まで必ず含める）
- Nerveで神経根を描出。Parallel MIPで8mm gap-2mmでCOR再構成
- 首の辺りは脂肪抑制がかかりにくいため**mDixonを撮像**
- DWI neurographyは3Tでは上手く描出できない
:::
