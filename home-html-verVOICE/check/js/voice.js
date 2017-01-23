/*音声操作*/
    //コンテンツのオブジェクト生成
var conts = new contents();
//インスタンス作成確認
conts.hyouji("Lets start!!");
voice_recognition(conts);

function voice_recognition(conts){

    //標準プロパティの設定
    var hear = new webkitSpeechRecognition();
    hear.lang = "ja"; //言語
    hear.interimResults = true ; //認識処理の途中でも、結果を返す
    hear.continuous = true ;　//複数の単語を認識する
    hear.maxAleternatives = 1 ; //認識結果の最大数候補数

    //認識可能な言葉を検出した際のイベント
    hear.onsoundstart = function(){
        console.log( "認識開始");
    };

    hear.onsoundend = function(){
        console.log( "認識終了");
        console.log("再スタート");
        voice_recognition(conts);
    };

    /*
    hear.onerror= function(e){
        console.log( "error :" + e.error);
    };
    */


    //認識されたテキストを使って処理を分岐
     hear.onresult = function (e) {
        var result=e.results;
        for(var i = e.resultIndex ; i < result.length ; i++){
            if(result[i].isFinal){　//単語の認識が終わった場合
                console.log(result[i][0].transcript,result[i][0].confidence);
                switch(result[i][0].transcript) {
                    case "カレンダー":
                        if( $('body').css.opacity == 1 ){
                            conts.calenderOPEN();
                        }else{
                            conts.calenderCLOSE();
                        };
                        break;
                    case "天気":
                        if( $('body').css.opacity == 1 ){
                            conts.weatherOPEN();
                        }else{
                            conts.weatherCLOSE();
                        };
                        break;
                    case "ニュース":
                        if( $('body').css.opacity == 1 ){
                            conts.newsOPEN();
                        }else{
                            conts.newsCLOSE();
                        };
                        break;
                    case "クリア"://各コンテンツが表示されていた場合
                        if( $('body').css.opacity == 1 ){
                            if( conts.calenderFLG == 1 ){
                                conts.calenderCLOSE();
                            };
                            if( conts.newsFLG == 1 ){
                                conts.newsCLOSE();
                            };
                            if( conts.weatherFLG == 1 ){
                                conts.weatherCLOSE();
                            };
                        };
                        break;
		   case "拡大":
			conts.Fullscreen();
			break;
		   case "縮小":
			conts.ReduceScreen();
		  	break;
                   default:
                        break;
                };
            }else{
                console.log("[途中結果] %s",result[i][0].transcript);
            };
        };
    };
    //console.log("voice_recognition start");
    hear.start();
};
