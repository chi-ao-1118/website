// JavaScript Document

$('.animation,.animation2,.animation3,.animation4,#toTop').css('visibility','hidden');

$(window).scroll(function(){
	var windowHeight = $(window).height(),
	topWindow = $(window).scrollTop();
 	
	$('.animation').each(function(){
  		var targetPosition = $(this).offset().top;
  		if(topWindow > targetPosition - windowHeight + 200){
   			$(this).addClass("fadeInDown");
  		}else{
			$(this).removeClass("fadeInDown").css('visibility','hidden');
		}
 	});
 
 	$('.animation2').each(function(){
		var mad = $(this);
  		var targetPosition = $(this).offset().top;
  		if(topWindow > targetPosition - windowHeight + 300){
	  		setTimeout(function(){
         		mad.addClass("splat");
    		},1200);
  		}else{
			$(this).removeClass("splat").css('visibility','hidden');
		}
 	});
 
   $('.animation3').each(function(){
	   var mad = $(this);
	   var targetPosition = $(this).offset().top;
	   if(topWindow > targetPosition - windowHeight + 200){
		   setTimeout(function(){
			   mad.addClass("splat");
			},100);
		}else{
			$(this).removeClass("splat").css('visibility','hidden');
		}
   });
 
   $('.animation4').each(function(){
	   var mad = $(this);
	   var targetPosition = $(this).offset().top;
	   if(topWindow > targetPosition - windowHeight + 300){
		   setTimeout(function(){
			   mad.addClass("fadeBlur");
			},500);
		}else{
			$(this).removeClass("fadeBlur").css('visibility','hidden');
		}
   });
   
   
  	var documentHeight = $(document).height();
	var scrollPosition = windowHeight + topWindow;
		
   $('#toTop').each(function(){
	   var toTop = $(this);
		if ((documentHeight - scrollPosition) < 100) {
			 setTimeout(function(){
				 toTop.addClass("toTopAnime");
			},1000);
  		}else{
			toTop.removeClass("toTopAnime").css('visibility','hidden');
		}
 	});
	
	$('#toTop').click(function () {
		setTimeout(function(){
			$(this).removeClass("toTopAnime").css('visibility','hidden');
		},1100);
	});
	 
});