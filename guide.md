## Ganacheへのデプロイ方法
#### 前提：カレントディレクトリがプロジェクトルートであること
1. truffle-config.jsのnetworks→developmentのhost、port、network_idにGanacheの値を設定する 
2. truffle compile コマンドでコンパイルを実行する
3. truffle migrate --network development コマンドでデプロイを実行する
   <br>※デプロイが上手くいかない場合は履歴をリセットしてデプロイする
   <br>　truffle migrate --network development --reset --verbose-rpc
