# 心臓MRI 撮像マニュアル

![](assets/images/heart/imaging/p01.jpg)

---

## ステップ1: ●シネ撮像１．Survey呼気停止。ここで心臓に感度があるか確認する２．Reference Scan呼気停止。息止め時間が長い為、止められる範囲で止めてもらう心拍数は Reference を撮像してから入力する（息止めにより心拍が変化するため、息止めの状態の心拍数を入力）３．CINE TRA 体軸水平断像Volume Shim は左室に絞って良い僧帽弁と心尖部が撮像範囲に入るようにするSurvey画像CINE TRA：体軸水平断像2

![](assets/images/heart/imaging/p02.jpg)

---

## ステップ2: ４．CINE SAG 垂直長軸像CINE TRA（体軸水平断像）のみを用いて位置合わせを行う僧帽弁の中心と心尖部を結んだラインに角度を合わせるこの撮像から Shim は動かさないようにすること（動かすと B1 Calibrationやリファレンスが入るため）CINE TRA：体軸水平断像CINE SAG：垂直長軸像3

![](assets/images/heart/imaging/p03.jpg)

---

## ステップ3: ５．CINE LAx 水平長軸像CINE SAG（垂直長軸像）のみを用いて位置合わせを行う僧帽弁の中心と心尖部を結んだラインに角度を合わせるCINE SAG：垂直長軸像CINE LAx：水平長軸像4

![](assets/images/heart/imaging/p04.jpg)

---

## ステップ4: ６．CINE SAx 左室短軸像CINE LAx（水平長軸像）のみを用いて位置合わせを行うCINE LAx（水平長軸像）で僧帽弁の中心と心尖部を結んだラインに垂直に合わせるEF の解析で使用する為、心尖部から心基部まで撮像する位相方向の確認 Slice Orientation・Fold Over directionを確認する短軸撮像は息止めが5～6回に分かれて撮像となる1回目の息止めで折り返しがないことを確認する短軸撮像終了後、全ての息止めができていることも確認する折り返しが発生したらまずは Fold Over directionのみ変更する次に FOVを広げる。Slice Orientationは変更しない短軸から FOVを広げても問題なしCINE LAx：水平長軸像CINE SAx：左室短軸像5

![](assets/images/heart/imaging/p05.jpg)

---

## ステップ5: ７．CINE 4ch 四腔長軸像CINE SAx（左室短軸像）のみを用いて位置合わせを行う右室角と左室中心を結ぶラインに角度を合わせる右室角にスライスラインがあたるように合わせるCINE SAx：左室短軸像CINE 4ch：四腔長軸像6

![](assets/images/heart/imaging/p06.jpg)

---

## ステップ6: ●BB 撮像８．T2W_STIR_BB 左室短軸像まず左室短軸で撮像CINE SAG（垂直長軸像）のみを用いて位置合わせの微調整を行う虚血がある所にスライスをあわせるSlice のデフォルトは5枚 スライス枚数やGapは目的(虚血や心筋肥大)Gap のデフォルトは8mm に応じて適宜調整する1回の息止めで1スライスとなるシネを動かし、スライスの位置の確認を行うCINE SAG：垂直長軸像BB左室短軸像7

![](assets/images/heart/imaging/p07.jpg)

---

## ステップ7: ●各種マッピング撮像9．①T1map_native ②T2 map ③T2*map左室短軸で撮像心尖部・中央部・心基部の3スライスを撮像する①〜③と造影後に撮像する『T1map_enhanced』は全て同じ場所、同じスライス厚、スライスGap で撮像することCINE SAG（垂直長軸像）と CINE LAx（水平長軸像）を用いて位置合わせを行うSAG：垂直長軸像 LAx：水平長軸像T1map_nativeうに撮像できているか確認してください。心尖部の内腔が描出されていなかったり、心基部の心筋が欠けている場合は Gap を調整し、再撮像して下さい。スライス厚は変更しないでください。8

![](assets/images/heart/imaging/p08.jpg)

※心尖部・中央部・心基部の 3 つのスライス全てで内腔と心筋が上の画像のよ

---

## ステップ8: ●遅延造影撮像プランニングここから先は造影後のシーケンスになる造影を行う前に遅延造影のシーケンスを先にプランニングする●Look Locker プランニング10．Look Locker_RT左室短軸で撮像心臓の中央部を撮像するCINE SAG（垂直長軸像）と CINE LAx（水平長軸像）を用いて位置合わせを行うSAG：垂直長軸像 LAx：水平長軸像LookLocker_RT9

![](assets/images/heart/imaging/p09.jpg)

---

## ステップ9: 11.LGE_2D_Ssh_RT SAG12.LGE_2D_Ssh_RT LAx13.LGE_2D_Ssh_RT SAx14.PSIR_Sax 2D Ssh_RT AI15.PSIR_SAG 2D Ssh_RT AI16.PSIR_LAx 2D Ssh_RT AI上記の11〜16を心筋を全て含めてプランニングする。プランニングが終了後造影剤注入開始→Look Locker撮像10

![](assets/images/heart/imaging/p10.jpg)

---

## ステップ10: ●造影剤注入開始ここまでの遅延造影のシーケンスが組めたら造影剤を注入するストップウォッチで時間を計るPre は撮像しない●LookLocker 測定開始造影剤注入 4分後からLookLocker_RT の撮像を開始する体格の大きな患者は造影剤の Wash out も早い傾向にあるため、造影剤投与後3分後からLookLocker_RT を撮像する造影剤のWash out は15分くらいが目安となる撮像後速やかに正常心筋に ROI を設定し、Time Intensity Curve（TIC）よりNull point を決定する。TICにおいて信号が最も低下したタイミングがNull point になる11

![](assets/images/heart/imaging/p11.jpg)

---

## ステップ11: １．Review 画面上部のTime Intensity Diagram をクリック２.Draw ROIをクリックし、心筋に ROI を数箇所取る●注意点ROI を描く時はROI 設定後に必ずLookLockerの画像を動かし、全時相で心筋以外が含まれていないかを確認すること✕悪い例12

![](assets/images/heart/imaging/p12.jpg)

★Null point 決定方法★
※左の時相では心筋のみだが、右の時相で心筋以外が囲まれている

---

## ステップ12: ３.X-axis がPhases になっていることを確認し、Show Graph をクリック4.結果が表示される右のグラフを見て、左側の表に出てくるROI の数値が一番低いTime がNullpointになる（上の画像では325.9がNull point）5．確認したNull point の＋50ms の値を次の遅延造影の撮像（LGE_2D_Ssh_RT SAG）のContrast の中のTFE prepulse delay に入力する1～5までの作業を造影剤注入後 1分以内に行うこと13

![](assets/images/heart/imaging/p13.jpg)

---

## ステップ13: ●遅延造影撮像開始TFE prepulse delay 算出後にLGE_2D_Ssh_RT から順に撮像していく11.LGE_2D_Ssh_RT SAG遅延造影シングルショットの呼吸同期シーケンス心筋全体を含めて撮像TFE prepulse delay にはnull+50msecを入力12.LGE_2D_Ssh_RT LAx遅延造影シングルショットの呼吸同期シーケンス心筋全体を含めて撮像TFE prepulse delay にはnull+55msecを入力13.LGE_2D_Ssh_RT SAx遅延造影シングルショットの呼吸同期シーケンス心筋全体を含めて撮像TFE prepulse delay にはnull+60msecを入力14.PSIR_Sax 2D Ssh_RT AILGEと同様に心筋全体を含めて撮像ここでは TFE prepulse delay の入力は不要CR 画像が自動で作成されるので、CR 画像のみ送信して下さい。15.PSIR_SAG 2D Ssh_RT AILGEと同様に心筋全体を含めて撮像ここでは TFE prepulse delay の入力は不要CR 画像が自動で作成されるので、CR 画像のみ送信して下さい。16.PSIR_LAx 2D Ssh_RT AILGEと同様に心筋全体を含めて撮像ここでは TFE prepulse delay の入力は不要CR 画像が自動で作成されるので、CR 画像のみ送信して下さい。14

![](assets/images/heart/imaging/p14.jpg)

※動画マニュアルではnull+60msecですが、null+55msecに変更しました。
※動画マニュアルではnull+70msecですが、null+60msec に変更しました。

---

## ステップ14: ここで心筋の黒さに注目心筋の Null Point が合っていない場合は、もう一度LookLockerを撮像し、Null point を測定し、もう一度 3D LGE SAG（遅延造影垂直長軸像）を撮像後、心筋の Null Point が合っているかを確認するTI時間が長い場合 適切なTI時間 TI時間が長い場合TI：200ms TI:400msNull Point が合っていれば撮像を続けていく。15

![](assets/images/heart/imaging/p15.jpg)

★チェックポイント★

---

## ステップ15: ●T1 マッピング造影後撮像17．T1map_enhancedT1map_nativeと全く同じ場所、厚み、Gap で撮像する造影剤注入 10〜15分後に撮像すべて撮像できれば検査終了●画像送信SurveyCINE TRACINE SAGCINE LAxCINE SAxCINE 4chT2W_STIR_BBLGE_2D_Ssh_RT SAGLGE_2D_Ssh_RT LaxLGE_2D_Ssh_RT SAxPSIR_Sax 2D Ssh_RT AI：CR 画像のみPSIR_SAG 2D Ssh_RT AI：CR 画像のみPSIR_LAx 2D Ssh_RT AI：CR 画像のみ16

![](assets/images/heart/imaging/p16.jpg)

★検像に送信するもの
※各種マッピングと LookLockerは検像には送信不要です。

---
