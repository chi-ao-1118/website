// JavaScript Document

$(window).scroll(function(){
	var windowHeight = $(window).height();
	var windowTop = $(window).scrollTop();
	var windowUnder = windowTop + windowHeight;
 	
	$('.lostFig').each(function(){
  		var targetTop = $(this).offset().top;
  		if(windowTop + 100 < targetTop && targetTop < windowUnder - 200){
   			$(this).addClass("addedFig");
  		}else{
			$(this).removeClass("addedFig");
		}
 	});
});
 