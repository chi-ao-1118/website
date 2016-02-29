// JavaScript Document$(function(){

//	ハンバーガーメニューを出現させるクリックイベント
var num = 0;
$(".menu").click(function(){
	$(this).data("click", ++num);
    var click = $(this).data("click");
    if(click%2===1){
		$(".hamMenu").fadeIn("slow");
		$(".menu_overlay").fadeIn("slow");
	}else{
		$(".hamMenu").fadeOut("slow");
		$(".menu_overlay").fadeOut("slow");
	}
});
$(".menu_overlay").click(function(){
	$(".menu").data("click", ++num);
    var click = $(this).data("click");
	$(".hamMenu").fadeOut("slow");
	$(".menu_overlay").fadeOut("slow");
});