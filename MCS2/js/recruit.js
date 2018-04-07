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
    const speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href).children();
    let position = ($(window).width() < 700 ? target.offset().top : target.offset().top - target.position().top );
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

// Parallax

$(function() {
  if ($(window).width() >= 700) {
    $(window).scroll(function() {
      const displayed_area = $(window).scrollTop() + $(window).height();
      $('.parallax img').each(function(index, target) {
        const top = $(target).offset().top;
        const end = top + $(target).outerHeight(true) + $(window).height();
        let move = (top - displayed_area) / 15;
        if (top <= displayed_area && displayed_area <= end) {
          $(target).css('transform', 'translateY(' + move + 'px)')
        }
      });
    });
  }
});

// iFrame2IMG4YouTube

$(function() {
  const movie = [];

  $('.video iframe').each(function(index, element) {
      let movie_src = $(this).attr('src');
      let thumbnail = [];
      let movie_id = [];

      movie[index] = movie_src;
      movie_id[index] = movie_src.slice(movie_src.lastIndexOf("/")+1);
      thumbnail[index] = "https://i.ytimg.com/vi/" + movie_id[index] + "/hqdefault.jpg";

      $(this).after('<div class="ratio"><img class="thumbnail" src="'+thumbnail[index]+'" alt="サムネイル"><img class="play" src="./img/youtube.svg" alt="再生ボタン"></div>').remove();
  });

  $('.ratio').each(function(index, element) {
      $(this).click(function() {
          $(this).empty().prepend('<iframe src="'+movie[index]+'?autoplay=1" frameborder="0" allowfullscreen></iframe>');
      });
  });
});