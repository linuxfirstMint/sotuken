/* コンテンツの情報と関数を操作する */
function contents(){

    //各コンテンツは非表示の状態
    var calenderFLG = 0 ;
    var weatherFLG = 0 ;
    var newsFLG = 0 ;
    //
    var win_opacity = $("body").css("opacity");

    this.calenderFLG = calenderFLG ;
    this.weatherFLG = weatherFLG ;
    this.newsFLG = newsFLG ;
    this.win_opacity = win_opacity ;

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

    contents.prototype.getwin_opacity = function() {
        return this.win_opacity;
    }

    contents.prototype.calenderOPEN = function() {
        $("#panel-calendar").animate({
            width: 'toggle'
        }, 300);
        $('#calendar').animate({
            height: 'toggle'
        }, 1);
    };

    contents.prototype.newsOPEN = function() {
        $("#panel-news").animate({
            height: 'toggle'
        }, 300);
        $('#news').animate({
            height: 'toggle'
        }, 1);
    };

    contents.prototype.weatherOPEN = function(){
        $("#panel-weather").animate({
            width: 'toggle'
        }, 300);
        $('#weather').animate({
            height: 'toggle'
        }, 1);
    };
    
    contents.prototype.calenderCLOSE = function() {
        $("#panel-calendar").animate({
            width: 'toggle'
        }, 300);
        $('#calendar').animate({
            height: 'toggle'
        }, 1);
    };

    contents.prototype.newsCLOSE = function() {
        $("#panel-news").animate({
            height: 'toggle'
        }, 300);
        $('#news').animate({
            height: 'toggle'
        }, 1);
    };

    contents.prototype.weatherCLOSE = function(){
        $("#panel-weather").animate({
            width: 'toggle'
        }, 300);
        $('#weather').animate({
            height: 'toggle'
        }, 1);
    };

};