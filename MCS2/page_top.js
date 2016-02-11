$(function(){
	var pageTop = $('.page_top');
	$(window).on('load resize', function() {
		pageTop.hide();
		$(window).scroll(function () {
			if($(window).width()>640){
				if ($(this).scrollTop() > 200) {
					pageTop.fadeIn();
				} else {
					pageTop.fadeOut();
				}
			}else{
				pageTop.hide();
			}
		});
	});
	pageTop.click(function () {
		$('body, html').animate({scrollTop:0}, 500, 'swing');
		return false;
	});
});