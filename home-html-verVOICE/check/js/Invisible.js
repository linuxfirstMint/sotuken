
/*画面の明暗とセンサー情報の取得*/

var window_bright=0;
var interval;
var url=geturl();

//getSenosor&明暗常時ループ
//0.9秒間隔
var interval=setInterval(function(){
    getSenosor();
    setTimeout(function(){
        if(window_bright){
            invisible(window_bright);
        };
    });
},900);

/* jsonの取得 */
function getSenosor(){
            $.ajax({
                type: 'GET',
                url: url,
                dataType : 'jsonp',
		   jsonp : 'exampleCallback',
                cache: false,
            }).done( //成功時
                function( data ) { 
                    window_bright=data[0].ParceState;
			/*jsonデータ確認用
			*/
		    //console.log("ParceState :",data[0].ParceState);

            }).fail(　//失敗時
                function( 　data　 ) {
                    console.log("error");
            });
};

/* 明暗を行う関数 */
function invisible(window_bright){
//console.log("invisivle start")
console,log(window_bright)
 if(window_bright=="false"){
    jQuery("body").fadeTo("slow",0);
  };
 if(window_bright=="true"){
    jQuery("body").fadeTo("slow",1);
  };
}
