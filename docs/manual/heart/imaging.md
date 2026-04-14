# 心臓MRI 撮像マニュアル

![](assets/images/heart/imaging/p01.jpg)

---

## ステップ1: ●シネ撮像 / １．Survey / 呼気停止。ここで心臓に感度があるか確認する / ２．Reference Scan / 呼気停止。息止め時間が長い為、止められる範囲で止めてもらう / 心拍数は Reference を撮像してから入力する / （息止めにより心拍が変化するため、息止めの状態の心拍数を入力） / ３．CINE TRA 体軸水平断像 / Volume Shim は左室に絞って良い / 僧帽弁と心尖部が撮像範囲に入るようにする / Survey画像 / CINE TRA：体軸水平断像 / 2

![](assets/images/heart/imaging/p02.jpg)

---

## ステップ2: ４．CINE SAG 垂直長軸像 / CINE TRA（体軸水平断像）のみを用いて位置合わせを行う / 僧帽弁の中心と心尖部を結んだラインに角度を合わせる / この撮像から Shim は動かさないようにすること / （動かすと B1 Calibrationやリファレンスが入るため） / CINE TRA：体軸水平断像 / CINE SAG：垂直長軸像 / 3

![](assets/images/heart/imaging/p03.jpg)

---

## ステップ3: ５．CINE LAx 水平長軸像 / CINE SAG（垂直長軸像）のみを用いて位置合わせを行う / 僧帽弁の中心と心尖部を結んだラインに角度を合わせる / CINE SAG：垂直長軸像 / CINE LAx：水平長軸像 / 4

![](assets/images/heart/imaging/p04.jpg)

---

## ステップ4: ６．CINE SAx 左室短軸像 / CINE LAx（水平長軸像）のみを用いて位置合わせを行う / CINE LAx（水平長軸像）で僧帽弁の中心と心尖部を結んだラインに / 垂直に合わせる / EF の解析で使用する為、心尖部から心基部まで撮像する / 位相方向の確認 Slice Orientation・Fold Over directionを確認する / 短軸撮像は息止めが5～6回に分かれて撮像となる / 1回目の息止めで折り返しがないことを確認する / 短軸撮像終了後、全ての息止めができていることも確認する / 折り返しが発生したらまずは Fold Over directionのみ変更する / 次に FOVを広げる。Slice Orientationは変更しない / 短軸から FOVを広げても問題なし / CINE LAx：水平長軸像 / CINE SAx：左室短軸像 / 5

![](assets/images/heart/imaging/p05.jpg)

---

## ステップ5: ７．CINE 4ch 四腔長軸像 / CINE SAx（左室短軸像）のみを用いて位置合わせを行う / 右室角と左室中心を結ぶラインに角度を合わせる / 右室角にスライスラインがあたるように合わせる / CINE SAx：左室短軸像 / CINE 4ch：四腔長軸像 / 6

![](assets/images/heart/imaging/p06.jpg)

---

## ステップ6: ●BB 撮像 / ８．T2W_STIR_BB 左室短軸像 / まず左室短軸で撮像 / CINE SAG（垂直長軸像）のみを用いて位置合わせの微調整を行う / 虚血がある所にスライスをあわせる / Slice のデフォルトは5枚 スライス枚数やGapは目的(虚血や心筋肥大) / Gap のデフォルトは8mm に応じて適宜調整する / 1回の息止めで1スライスとなる / シネを動かし、スライスの位置の確認を行う / CINE SAG：垂直長軸像 / BB左室短軸像 / 7

![](assets/images/heart/imaging/p07.jpg)

---

## ステップ7: ●各種マッピング撮像 / 9．①T1map_native ②T2 map ③T2*map / 左室短軸で撮像 / 心尖部・中央部・心基部の3スライスを撮像する / ①〜③と造影後に撮像する『T1map_enhanced』は全て同じ場所、同じスライ / ス厚、スライスGap で撮像すること / CINE SAG（垂直長軸像）と CINE LAx（水平長軸像）を用いて / 位置合わせを行う / SAG：垂直長軸像 LAx：水平長軸像 / T1map_native / うに撮像できているか確認してください。心尖部の内腔が描出されていなかっ / たり、心基部の心筋が欠けている場合は Gap を調整し、再撮像して下さい。ス / ライス厚は変更しないでください。 / 8

![](assets/images/heart/imaging/p08.jpg)

※心尖部・中央部・心基部の 3 つのスライス全てで内腔と心筋が上の画像のよ

---

## ステップ8: ●遅延造影撮像プランニング / ここから先は造影後のシーケンスになる / 造影を行う前に遅延造影のシーケンスを先にプランニングする / ●Look Locker プランニング / 10．Look Locker_RT / 左室短軸で撮像 / 心臓の中央部を撮像する / CINE SAG（垂直長軸像）と CINE LAx（水平長軸像）を用いて / 位置合わせを行う / SAG：垂直長軸像 LAx：水平長軸像 / LookLocker_RT / 9

![](assets/images/heart/imaging/p09.jpg)

---

## ステップ9: 11.LGE_2D_Ssh_RT SAG / 12.LGE_2D_Ssh_RT LAx / 13.LGE_2D_Ssh_RT SAx / 14.PSIR_Sax 2D Ssh_RT AI / 15.PSIR_SAG 2D Ssh_RT AI / 16.PSIR_LAx 2D Ssh_RT AI / 上記の11〜16を心筋を全て含めてプランニングする。 / プランニングが終了後造影剤注入開始→Look Locker撮像 / 10

![](assets/images/heart/imaging/p10.jpg)

---

## ステップ10: ●造影剤注入開始 / ここまでの遅延造影のシーケンスが組めたら造影剤を注入する / ストップウォッチで時間を計る / Pre は撮像しない / ●LookLocker 測定開始 / 造影剤注入 4分後からLookLocker_RT の撮像を開始する / 体格の大きな患者は造影剤の Wash out も早い傾向にあるため、造影剤投与 / 後3分後からLookLocker_RT を撮像する / 造影剤のWash out は15分くらいが目安となる / 撮像後速やかに正常心筋に ROI を設定し、Time Intensity Curve（TIC）より / Null point を決定する。 / TICにおいて信号が最も低下したタイミングがNull point になる / 11

![](assets/images/heart/imaging/p11.jpg)

---

## ステップ11: １．Review 画面上部のTime Intensity Diagram をクリック / ２.Draw ROIをクリックし、心筋に ROI を数箇所取る / ●注意点 / ROI を描く時はROI 設定後に必ずLookLockerの画像を動かし、全時相で / 心筋以外が含まれていないかを確認すること / ✕悪い例 / 12

![](assets/images/heart/imaging/p12.jpg)

★Null point 決定方法★
※左の時相では心筋のみだが、右の時相で心筋以外が囲まれている

---

## ステップ12: ３.X-axis がPhases になっていることを確認し、Show Graph をクリック / 4.結果が表示される / 右のグラフを見て、左側の表に出てくるROI の数値が一番低いTime がNull / pointになる（上の画像では325.9がNull point） / 5．確認したNull point の＋50ms の値を次の遅延造影の撮像 / （LGE_2D_Ssh_RT SAG）のContrast の中のTFE prepulse delay に入力す / る / 1～5までの作業を造影剤注入後 1分以内に行うこと / 13

![](assets/images/heart/imaging/p13.jpg)

---

## ステップ13: ●遅延造影撮像開始 / TFE prepulse delay 算出後にLGE_2D_Ssh_RT から順に撮像していく / 11.LGE_2D_Ssh_RT SAG / 遅延造影シングルショットの呼吸同期シーケンス / 心筋全体を含めて撮像 / TFE prepulse delay にはnull+50msecを入力 / 12.LGE_2D_Ssh_RT LAx / 遅延造影シングルショットの呼吸同期シーケンス / 心筋全体を含めて撮像 / TFE prepulse delay にはnull+55msecを入力 / 13.LGE_2D_Ssh_RT SAx / 遅延造影シングルショットの呼吸同期シーケンス / 心筋全体を含めて撮像 / TFE prepulse delay にはnull+60msecを入力 / 14.PSIR_Sax 2D Ssh_RT AI / LGEと同様に心筋全体を含めて撮像 / ここでは TFE prepulse delay の入力は不要 / CR 画像が自動で作成されるので、CR 画像のみ送信して下さい。 / 15.PSIR_SAG 2D Ssh_RT AI / LGEと同様に心筋全体を含めて撮像 / ここでは TFE prepulse delay の入力は不要 / CR 画像が自動で作成されるので、CR 画像のみ送信して下さい。 / 16.PSIR_LAx 2D Ssh_RT AI / LGEと同様に心筋全体を含めて撮像 / ここでは TFE prepulse delay の入力は不要 / CR 画像が自動で作成されるので、CR 画像のみ送信して下さい。 / 14

![](assets/images/heart/imaging/p14.jpg)

※動画マニュアルではnull+60msecですが、null+55msecに変更しました。
※動画マニュアルではnull+70msecですが、null+60msec に変更しました。

---

## ステップ14: ここで心筋の黒さに注目 / 心筋の Null Point が合っていない場合は、もう一度LookLockerを撮像し、 / Null point を測定し、もう一度 3D LGE SAG（遅延造影垂直長軸像）を撮像 / 後、心筋の Null Point が合っているかを確認する / TI時間が長い場合 適切なTI時間 TI時間が長い場合 / TI：200ms TI:400ms / Null Point が合っていれば撮像を続けていく。 / 15

![](assets/images/heart/imaging/p15.jpg)

★チェックポイント★

---

## ステップ15: ●T1 マッピング造影後撮像 / 17．T1map_enhanced / T1map_nativeと全く同じ場所、厚み、Gap で撮像する / 造影剤注入 10〜15分後に撮像 / すべて撮像できれば検査終了 / ●画像送信 / Survey / CINE TRA / CINE SAG / CINE LAx / CINE SAx / CINE 4ch / T2W_STIR_BB / LGE_2D_Ssh_RT SAG / LGE_2D_Ssh_RT Lax / LGE_2D_Ssh_RT SAx / PSIR_Sax 2D Ssh_RT AI：CR 画像のみ / PSIR_SAG 2D Ssh_RT AI：CR 画像のみ / PSIR_LAx 2D Ssh_RT AI：CR 画像のみ / 16

![](assets/images/heart/imaging/p16.jpg)

★検像に送信するもの
※各種マッピングと LookLockerは検像には送信不要です。

---
