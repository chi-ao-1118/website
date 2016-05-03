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
		if ((documentHeight - scrollPosition) < 100) {
   			$(this).addClass("slideInLeft");
  		}else{
			$(this).removeClass("slideInLeft").css('visibility','hidden');
		}
 	});
	 
});