$(document).ready(function() {  
  getWeather(); 
  setInterval(getWeather, 60000); //1分間隔で更新
});

function getWeather() {
  $.simpleWeather({
    //場所
    location: 'Isahaya-shi, JP',
    //摂氏
    unit: 'c',
    
    success: function(weather) {
      
      //気象コードの変数
      var code;
      
      //タイトル
      html = '<h1>Now the weather</h1>';
      //最終更新時間
      html += '<p3>'+weather.updated+'<BR/></p3>';
      //今の温度
      html += '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      
      //最高・最低
      html += '<p>max　min</p>';
      
      //気象コード取得
      code = weather.code
      
      //今日の曜日：最高気温,最低気温
      html += '<p0>TODAY '+weather.forecast[0].high+' : '+weather.forecast[0].low+'<BR/></p1>';
      //明日の曜日：最高気温,最低気温
      html += '<p1>'+weather.forecast[1].day+　'   '+weather.forecast[1].high+'  : '+weather.forecast[1].low+'<BR/></p1>';
      //明後日の曜日：最高気温,最低気温
      html += '<p2>'+weather.forecast[2].day+　'   '+weather.forecast[2].high+'  : '+weather.forecast[2].low+'<BR/></p2>';
      
      $("#weather").html(html);
    },
    
    //エラー処理
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}