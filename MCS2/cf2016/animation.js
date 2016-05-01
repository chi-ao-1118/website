// JavaScript Document

$('.animation').css('visibility','hidden');
$('.animation2').css('visibility','hidden');
$('.animation3').css('visibility','hidden');
$('.animation4').css('visibility','hidden');
$('.animation5').css('visibility','hidden');
$(window).scroll(function(){
	var windowHeight = $(window).height(),
	topWindow = $(window).scrollTop();
 	
	$('.animation').each(function(){
  		var targetPosition = $(this).offset().top;
  		if(topWindow > targetPosition - windowHeight + 300){
   			$(this).addClass("fadeInDown");
  		}
 	});
 
 	$('.animation2').each(function(){
		var mad = $(this);
  		var targetPosition = $(this).offset().top;
  		if(topWindow > targetPosition - windowHeight + 300){
	  		setTimeout(function(){
         		mad.addClass("splat");
    		},1000);
  		}
 	});
 
   $('.animation3').each(function(){
	   var mad = $(this);
	   var targetPosition = $(this).offset().top;
	   if(topWindow > targetPosition - windowHeight + 600){
		   setTimeout(function(){
			   mad.addClass("splat");
			},100);
		}
   });
 
   $('.animation4').each(function(){
	   var mad = $(this);
	   var targetPosition = $(this).offset().top;
	   if(topWindow > targetPosition - windowHeight + 300){
		   setTimeout(function(){
			   mad.addClass("fadeBlur");
			},500);
		}
   });
   
   
  	var documentHeight = $(document).height();
	var scrollPosition = windowHeight + topWindow;
		
   $('.animation5').each(function(){
		if ((documentHeight - scrollPosition) < 10) {
   			$(this).addClass("slideInLeft");
  		}
 	});
 
});