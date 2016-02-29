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
		$(".mainWrapper").hide();
		$(".topLost").hide();
	}else{
		$(".hamMenu").hide();
		$(".menu_overlay").hide();
		$(".topImg").show();
		$(".mainWrapper").show();
		$(".topLost").show();
	}
});

$(".menu_overlay").click(function(){
	$(".menu").data("click", ++num);
    var click = $(this).data("click");
		$(".hamMenu").hide();
		$(".menu_overlay").hide();
		$(".topImg").show();
		$(".mainWrapper").show();
		$(".topLost").show();
});

$(window).on('load resize', function() {
	if ( !window.innerWidth ){
		return;
	}
	if ( window.innerWidth >640 ){
		$(".hamMenu").hide();
		$(".menu_overlay").hide();
		$(".topImg").show();
		$(".mainWrapper").show();
		$(".topLost").show();
	}
});
