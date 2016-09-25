// JavaScript Document$(function(){

//	ハンバーガーメニューを出現させるクリックイベント
var num = 0;
$(".menu").click(function(){
	$(this).data("click", ++num);
    var click = $(this).data("click");
    if(click%2===1){
		$(".hamMenu").show();
		$(".menu_overlay").show();
		$(".topImg").hide();
		$(".mainWrap").hide();
		$(".topLost").hide();
		$("#top_firstView").attr('id', "none");
	}else{
		$(".hamMenu").hide();
		$(".menu_overlay").hide();
		$(".topImg").show();
		$(".mainWrap").show();
		$(".topLost").show();
		$("#none").attr('id',"top_firstView");
	}
});
/*
$(".menu_overlay").click(function(){
	$(".menu").data("click", ++num);
    var click = $(this).data("click");
		$(".hamMenu").hide();
		$(".menu_overlay").hide();
		$(".topImg").show();
		$(".mainWrap").show();
		$(".topLost").show();
});*/

$(window).on('load resize', function() {
	if ( !window.innerWidth ){
		return;
	}
	if ( window.innerWidth >640 ){
		$(".hamMenu").hide();
		$(".menu_overlay").hide();
		$(".topImg").show();
		$(".mainWrap").show();
		$(".topLost").show();
	}
});
