//Jump

$(function () {
    var headerHight = 62;

    $('a[href^="#"]').click(function(){
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top-headerHight;

        $("html, body").animate({scrollTop:position}, 300, "swing");
        return false;
    });
});

//Slideshow

$(function(){
    var page
    var lastPage = parseInt($(".slide img").length-1);
    var random = Math.round( Math.random()*lastPage );
    var nextPage
    
    page=random
    if(page === lastPage){
        nextPage = 0;
    }else{
        nextPage = page+1;
    };
    
    $(".slide img").css("z-index","-3");
    $(".slide img").eq(nextPage).css("z-index","-1");
    
    function changePage(){
        $(".slide img").css("z-index","-3");
        $(".slide img").eq(page).css("z-index","-1");
        $(".slide img").eq(nextPage).css("z-index","-2");
        $(".slide img").css("display","block");
        $(".slide img").eq(page).fadeOut(2500);
    };
    
    function countUp(){
        if(page === lastPage){
            page = 0;
            nextPage = 1;
            changePage();
        }else if(nextPage===lastPage){
            page ++;
            nextPage = 0;
            changePage();
        }else{
             page ++;
             nextPage = page+1;
         changePage();
        } 
    };
    
    var Timer;
    function startTimer(){
        Timer =setInterval(function(){
            countUp();
            },5000);
        };
    
    function stopTimer(){
        clearInterval(Timer);
    };
    
    startTimer();
});

//iFrame2IMG (TEST)

$(function (){
    var movie = [];
    var title = [];
    
    $('iframe').each(function(index, element) {
        var movie_title = $(this).attr('title');
        var movie_src = $(this).attr('src');
        var movie_id = [];
        var title_s　= [];
        var movie_link = [];
        var image = [];
        var limage = [];

        title[index] = movie_title;
        movie[index] = movie_src;
        movie_id[index] = movie_src.substring(movie_src.lastIndexOf("/")+1)
        title_s[index] = movie_title.substring(0, movie_title.lastIndexOf("|")-1)

        movie_link[index] = 'https://freshlive.tv/mcs/' + movie_id[index];
        //Page作成段階では、生放送→fersh+movie_id、再アップした放送→lfresh+movie_id。
        image[index] = 'https://hayabusa.io/movie.amebafresh.tv/thumbnail/fresh' + movie_id[index] + '/archive.jpg';
        limage[index] = 'https://hayabusa.io/movie.amebafresh.tv/thumbnail/lfresh' + movie_id[index] + '/archive.jpg';
        
        $(this).parent().after('<img src="'+image[index]+'"><img src="'+limage[index]+'"><p><a href="'+movie_link[index]+'">'+title_s[index]+'</a></p>').remove();
    });

    $('.video img').each(function(index, element) {
        $(this).click(function (){
            $(this).parent('.video').empty().prepend('<div style="padding-bottom:56.25%"></div><iframe style="position:absolute;top:0;left:0;width:100%;height:100%" title="'+title[index]+'" src="'+movie[index]+'" scrolling="no" frameborder="0" allowfullscreen></iframe>');
        });
    });
});

// IF IMAGE IS NOT FOUND

$(function() {
    $('img').on('error', function() {
      $(this).remove();
    });
});
