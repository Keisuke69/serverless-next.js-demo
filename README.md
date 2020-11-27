# serverless-newworld-20201127
2020年11月27日開催のイベントでの説明用に利用するサンプルアプリです。

サーバーレスアンチパターン今昔物語 第七夜<br>
https://serverless-newworld.connpass.com/event/194966/ <br>

Next.jsで作った簡単なブログ・サイトをServerless Next.js Componentを利用してAWSのサーバーレス環境へとデプロイします<br>


# 簡単なセットアップ方法
まず、`.devcontainer`というフォルダとDockerfileはVS CodeのRemote Containers用のファイル群です。この環境で実行しない方は削除しても大丈夫です。もし、このRemote Containersを使う場合はVS Codeをインストールした上で、Remote Containersという拡張をインストールしてください。また、Docker Desktopも必要となるのでこちらもインストールしてください。

Dockerを使わない場合はNode.jsをインストールしておく必要があります。

リポジトリをクローンした後、`yarn install`もしくは`npm install`を実行しておいてください。Next.jsとNext.jsが依存するライブラリがインストールされます。

また、今回はデプロイにServerless Frameworkを利用していますので、こちらもインストールしておいてください。

インストールは以下のどちらかで。

`yarn global add serverless`
`npm install -g serverless`

また、AWSのクレデンシャルのセットアップも事前に必要です。これはServerless Frameworkのドキュメントを参照ください。

##開発環境の実行
```
yarn dev
```

## ビルド
```
yarn build
```

## デプロイ
通常の`serverless deploy`や`sls deploy`ではなく`serverless`とだけ実行してください。

```
serverless
```



