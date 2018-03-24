// Mouseover

$(function(){
  $('nav ul li a').hover(function(){
    $(this).find('.nav-normal').hide();
    $(this).find('.nav-hover').show();
  }, function(){
    $(this).find('.nav-normal').show();
    $(this).find('.nav-hover').hide();
  });
});

// Page Scroller

$(function(){
  $('a[href^="#"]').click(function() {
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href).children();
    var position = ($(window).width() < 700 ? target.offset().top : target.offset().top - target.position().top );
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

// iFrame2IMG4YouTube

$(function() {
  var movie = [];

  $('.video iframe').each(function(index, element) {
      var movie_src = $(this).attr('src');
      var thumbnail = [];
      var movie_id = [];

      movie[index] = movie_src;
      movie_id[index] = movie_src.slice(movie_src.lastIndexOf("/")+1);
      thumbnail[index] = "http://i.ytimg.com/vi/" + movie_id[index] + "/mqdefault.jpg";

      $(this).after('<div class="video_wrapper"><img class="thumbnail" src="'+thumbnail[index]+'" alt="サムネイル"><img class="play" src="./img/youtube.svg" alt="再生ボタン"></div>').remove();
  });

  $('.video_wrapper').each(function(index, element) {
      $(this).click(function() {
          $(this).empty().prepend('<div class="ratio"><iframe src="'+movie[index]+'?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
      });
  });
});