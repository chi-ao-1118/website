// JavaScript Document

$(function(){
	var toTop = $('#toTop');

	
	toTop.click(function () {
		$('body, html').animate({scrollTop:0}, 500, 'swing');
		return false;
	});
});
