function getURL(id,content){
//ipはgetIP.phpで取得
//var url = "https://"　+ ip　+ "/sotuken/HTML/home-html-verVOICE/" + content + "/index.html";
var url = "https://"　+ ip　+ "/home-html-verVOICE/" + content + "/index.html";

var path='<iframe src="' + url + '" ' + "style='width:100%; height:100%;' scrolling='no' frameborder='no'></iframe>";
//console.log(url);
$('#' + id).html(path);

};

function geturl(){
//ipはgetIP.phpで取得
//var url = "https://"　+ ip　+ "/sotuken/HTML/home-html-verVOICE/check/json/value.json";
var url = "https://"　+ ip　+ "/home-html-verVOICE/check/json/value.json";

return url;

};