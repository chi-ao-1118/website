$(function() {
	$(window).bind("load resize", topHide);
	function topHide(){
		var object = $('#top_topUnder');
		var wHeight = $(window).height();
		var oHeight = object.height();
		if (wHeight > 80 + oHeight) {
			object.show();
		} else {
			object.hide();
		}
	}
});// JavaScript Document