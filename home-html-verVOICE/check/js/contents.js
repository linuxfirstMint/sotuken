/* コンテンツの情報と関数を操作する */
function contents(){

    //各コンテンツは非表示の状態
    var calenderFLG = 0 ;
    var weatherFLG = 0 ;
    var newsFLG = 0 ;

    this.calenderFLG = calenderFLG ;
    this.weatherFLG = weatherFLG ;
    this.newsFLG = newsFLG ;

    contents.prototype.hyouji = function(str) {
        console.log(str);
    }

    contents.prototype.setcalenderFLG = function(value){
        this.calenderFLG = value;
    }

    contents.prototype.getcalenderFLG = function() {
        return this.calenderFLG;
    }

    contents.prototype.setweatherFLG = function(value){
        this.weatherFLG = value;
    }

    contents.prototype.getweather = function() {
        return this.weatherFLG;
    }

    contents.prototype.setnewsFLG = function(value){
        this.newsFLG = value;
    }

    contents.prototype.getnewsFLG = function() {
        return this.newsFLG;
    }

    contents.prototype.calenderOPEN = function() {
        $("#panel-calendar").animate({
            width: 'toggle'
        }, 300);
        $('#calendar').animate({
            height: 'toggle'
        }, 1);
        this.calenderFLG = 1 ;
    };

    contents.prototype.newsOPEN = function() {
        $("#panel-news").animate({
            height: 'toggle'
        }, 300);
        $('#news').animate({
            height: 'toggle'
        }, 1);
        this.neweFLG = 1 ;
    };

    contents.prototype.weatherOPEN = function(){
        $("#panel-weather").animate({
            width: 'toggle'
        }, 300);
        $('#weather').animate({
            height: 'toggle'
        }, 1);
        this.weatherFLG = 1 ;
    };
    
    contents.prototype.calenderCLOSE = function() {
        $("#panel-calendar").animate({
            width: 'toggle'
        }, 300);
        $('#calendar').animate({
            height: 'toggle'
        }, 1);
        this.calenderFLG = 0 ;
    };

    contents.prototype.newsCLOSE = function() {
        $("#panel-news").animate({
            height: 'toggle'
        }, 300);
        $('#news').animate({
            height: 'toggle'
        }, 1);
        this.newsFLG = 0 ;
    };

    contents.prototype.weatherCLOSE = function(){
        $("#panel-weather").animate({
            width: 'toggle'
        }, 300);
        $('#weather').animate({
            height: 'toggle'
        }, 1);
        this.weatherFLG = 0 ;
    };

    contents.prototype.Fullscreen = function(){
	$("body").css({
	   'width': '100%' ,
	   'height': '100%'
	});
    };

    contents.prototype.ReduceScreen = function(){
   	$("body").webkitCancelFullScreen()
    };


};
