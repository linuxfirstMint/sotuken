
$(document).ready(function(){
  var time = 7;
  var $bar,
      $slick,
      isPause,
      tick,
      percentTime;
  
  $slick = $('.slider');
  $slick.slick({
    draggable: true, //ドラッグの可否
    adaptiveHeight: false, //falseで可
    dots: true, //要素数を示すドットの有無
    mobileFirst: true, //trueで可
    pauseOnDotsHover: true, //trueで可
  });
  
  $bar = $('.slider-progress .progress');
  
  //一時停止の処理
  $('.slider-wrapper').on({
    mouseenter: function() {
      isPause = true;
    },
    mouseleave: function() {
      isPause = false;
    }
  })
  
  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }
  
  function interval() {
    if(isPause === false) {
      percentTime += 1 / (time+0.1);
      $bar.css({
        width: percentTime+"%"
      });
      if(percentTime >= 100)
        {
          $slick.slick('slickNext');
          startProgressbar();
        }
    }
  }
  
  
  function resetProgressbar() {
    $bar.css({
     width: 0+'%' 
    });
    clearTimeout(tick);
  }
  
  startProgressbar();
  
});