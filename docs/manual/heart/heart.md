# 心臓MRI・冠動脈MRI

最終改訂：2025年11月4日

## ■ 検査概要

心臓MRI・冠動脈MRIは専用マニュアル（iPad内）と動画を参照。

:::warning
iPad内のマニュアル・動画参照
:::

---

## ■ 心臓 — Heart

| # | シーケンス | 部位 | 備考 |
|---|-----------|------|------|
| ① | Survey | — | 呼気停止 |
| ② | Reference Scan | — | 呼気停止・息止め後に心拍数入力 |
| ③ | CINE TRA | 体軸水平断像 | Volume Shimは左室に絞る |
| ④ | CINE SAG | 垂直長軸像 | ③のみで位置合わせ |
| ⑤ | CINE LAx | 水平長軸像 | ④のみで位置合わせ |
| ⑥ | CINE SAx | 左室短軸像 | ⑤のみで位置合わせ・心尖部〜心基部 |
| ⑦ | CINE 4ch | 四腔長軸像 | ⑥のみで位置合わせ |
| ⑧ | T2W_STIR_BB | 左室短軸像 | 1息止め1スライス |
| ⑨ | T1map_native | 左室短軸像 | 心尖部・中央部・心基部 3枚 |
| ⑩ | T2 map | 左室短軸像 | ⑨と同じ位置・厚み・Gap |
| ⑪ | T2*map | 左室短軸像 | ⑨と同じ位置・厚み・Gap |
| — | 造影剤注入 | — | ストップウォッチ計時開始 |
| ⑫ | Look Locker_RT | 左室短軸中央部 | 造影後4分（大柄な患者は3分）から開始 |
| ⑬ | LGE_2D_Ssh_RT SAG | 垂直長軸像 | TFE prepulse delay：null+50ms |
| ⑭ | LGE_2D_Ssh_RT LAx | 水平長軸像 | TFE prepulse delay：null+55ms |
| ⑮ | LGE_2D_Ssh_RT SAx | 左室短軸像 | TFE prepulse delay：null+60ms |
| ⑯ | PSIR_Sax 2D Ssh_RT AI | 左室短軸像 | CR画像のみ送信 |
| ⑰ | PSIR_SAG 2D Ssh_RT AI | 垂直長軸像 | CR画像のみ送信 |
| ⑱ | PSIR_LAx 2D Ssh_RT AI | 水平長軸像 | CR画像のみ送信 |
| ⑲ | T1map_enhanced | 左室短軸像 | 造影後10〜15分・⑨と同じ位置 |

:::info 検像送信シーケンス
Survey / CINE TRA / CINE SAG / CINE LAx / CINE SAx / CINE 4ch / T2W_STIR_BB / LGE_2D_Ssh_RT SAG・LAx・SAx / PSIR CR画像のみ

※ 各種マッピング・LookLockerは送信不要
:::

:::warning Null point 決定
LookLocker撮像後、速やかに正常心筋にROIを設定しTICよりNull pointを決定すること（造影後1分以内に完了）
:::

[VIDEO:心臓MRI 撮像手順（iPad内動画参照）]

---

## ■ 冠動脈 — Coronary

| # | シーケンス | FOV | スライス厚 | 枚数 | 備考 |
|---|-----------|-----|-----------|------|------|
| ① | Coronary BH | 300 | 3mm | 80枚 | |
| ② | CINE 100Phase | 350 | 7mm | 1枚 | |
| ③ | Coronary | 300 | 1.6mm | 150枚 | |

[VIDEO:冠動脈MRI 撮像手順（iPad内動画参照）]
