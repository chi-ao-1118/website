//モーダルウィンドウを出現させるクリックイベント

var idList = {defo : 'topImg_events',project_KAISERS : 'topImg_KAISERS',project_KAWAZOE : 'topImg_KAWAZOE',project_HANICOTTO : 'topImg_HANICOTTO',project_FREEPAPER : 'topImg_FREEPAPER'};

$(".project_btnObj").hover(
function(){
	var idName = $(this).attr("id");
	$(".topImg").attr("id",idList[idName]);
},
function(){
	$(".topImg").attr("id",idList["defo"]);
});

// JavaScript Document