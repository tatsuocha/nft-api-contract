## Ganacheへのデプロイ方法
#### 前提：カレントディレクトリがプロジェクトルートであること
1. truffle-config.jsのnetworks→developmentのhost、port、network_idにGanacheの値を設定する 
2. truffle compile コマンドでコンパイルを実行する
3. truffle migrate --network development コマンドでデプロイを実行する
   <br>※デプロイが上手くいかない場合は履歴をリセットしてデプロイする
   <br>　truffle migrate --network development --reset --verbose-rpc

## goファイルへの変換方法
#### 前提：カレントディレクトリが/contractsであること
1. solc --abi < contract名 >.sol -o build コマンドでabiファイルをビルドする
2. abigen --abi ./build/< contract名 >.abi --pkg < contract名 > --out ../go/< contract名 >.go コマンドでgoファイルに変換する
