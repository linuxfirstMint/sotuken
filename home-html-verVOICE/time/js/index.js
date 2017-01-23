
var clock_inter;

var clock = {
  start: function() {
    clock_inter = setInterval(function() {
      var time = new Date();
      var time_hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours();
      var time_minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes();
      var time_seconds = (time.getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds();
      document.getElementById('clock').innerHTML = time_hours + ':' + time_minutes;
    }, 0);
  },
  
};

clock.start();