// JavaScript Document

$(function() {
  var h = $(window).height();

  $('.wrap').css('display','none');
  $('.loader_bg ,.loader').height(h).css('display','block');
});

$(window).load(function () { 
  $('.loader_bg').delay(900).fadeOut(800);
  $('.loader').delay(600).fadeOut(300);
  $('.mainContents').css('display', 'block');
});


$(function(){
  setTimeout('stopload()',10000);
});

function stopload(){
  $('.mainContents').css('display','block');
  $('.loader_bg').delay(900).fadeOut(800);
  $('.loader').delay(600).fadeOut(300);
}
