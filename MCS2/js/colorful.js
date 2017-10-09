//Poster Animetion

    //ここに初回表示時のアニメーション

$(function() {
    $('#poster').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('fadeIn animated');
        }
    });
});

// Slide In

$(function() {
    $('#about_gakunai').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('fadeInUp animated');
        }
    });
    $('#about_colorful').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('fadeInUp animated');
        }
    });
    $('#past_episodes').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('fadeInUp animated');
        }
    });
    $('#mcs').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('fadeIn animated');
        }
    });
});
  
//iFrame2IMG

$(function() {
    var movie = [];

    $('.container iframe').each(function(index, element) {
        var movie_src = $(this).attr('src');
        var thumbnail = [];
        var movie_id = [];

        movie[index] = movie_src;
        movie_id[index] = movie_src.slice(movie_src.lastIndexOf("/")+1, movie_src.lastIndexOf("?"));
        thumbnail[index] = "http://i.ytimg.com/vi/" + movie_id[index] + "/maxresdefault.jpg";

        $(this).after('<div class="video"><div class="video_wrapper"><img class="thumbnail" src="'+thumbnail[index]+'" alt="Thumbnail"><img class="play center" src="./img/colorful/social/youtube.svg"></div></div>').remove();
    });

    $('.video').each(function(index, element) {
        $(this).click(function() {
            $(this).empty().prepend('<div class="ratio"><iframe src="'+movie[index]+'&autoplay=1&color=white" frameborder="0" allowfullscreen></iframe></div>');
        });
    });
});

//SNS Share Link

$(function() {
    var url = location.href;
    // about these -> https://qiita.com/takuhito-h/items/891f3d53ad14a1182963
    var tweet = "https://twitter.com/share?url=" + url + "&text=Colorful - MCS&via=MCS_kutc&related=MCS_kutc"
    var fb_share = "https://www.facebook.com/sharer/sharer.php?u=" + url;
    var line = "http://line.me/R/msg/Colorful - MCS/?" + url;
    $("#tweet").attr("href",tweet);
    $("#fb_share").attr("href",fb_share);
    $("#line").attr("href",line);
});