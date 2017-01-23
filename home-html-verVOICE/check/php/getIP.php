<!--ipアドレスを取得する-->

<?php

//クロスドメイン通信の許可
header('Access-Control-Allow-Origin: *')
header('Access-Control-Allow-Headers: Origin, X-Requested-with,
Content-Type,Accept')
//javascriptファイルとして処理させる
header("Content-type: application/x-javascript");
//IPアドレスを変数に代入
$ip_address = $_SERVER['REMOTE_ADDR'];
//jsの変数ipにipアドレスを格納
echo "var ip = '" . $ip_address . "';";

?>