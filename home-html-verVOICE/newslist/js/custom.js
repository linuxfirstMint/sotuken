
$(document).ready(function(){
  var time = 7;
  var $bar,
      $slick,
      isPause,
      tick,
      percentTime;
  
  $slick = $('.slider');
  $slick.slick({
    draggable: true, //�h���b�O�̉�
    adaptiveHeight: false, //false�ŉ�
    dots: true, //�v�f���������h�b�g�̗L��
    mobileFirst: true, //true�ŉ�
    pauseOnDotsHover: true, //true�ŉ�
  });
  
  $bar = $('.slider-progress .progress');
  
  //�ꎞ��~�̏���
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