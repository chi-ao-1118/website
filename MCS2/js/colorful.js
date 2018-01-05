//Poster Animetion
$(function() {
    // スクロールを無効にする
    $(window).on('touchmove.noScroll', function(e) {
        e.preventDefault();
    });
    
    setTimeout(function() {
        $('#gakunai').addClass('fadeIn animated');
        $('#gakunai2').addClass('fadeIn animated');
        $('#share').addClass('fadeIn animated');
        setTimeout(function() {
            $('#m0').addClass('fadeIn animated');
             setTimeout(function() {
                $('#m1').addClass('fadeIn animated');
                setTimeout(function(){
                    $('#m2').addClass('flash animated');
                    setTimeout(function() {
                        $('#m3').addClass('fadeInUp animated');
                        setTimeout(function() {
                            $('#m4').addClass('lightSpeedIn animated');
                            setTimeout(function() {
                               $('#m5').addClass('lightSpeedIn animated'); 
                               $('#m6').addClass('fadeInDown animated');
                            },1000);//料理ショー
                        },1000,);//協力
                    },1000);//煙
                },2000);//炎
            }, 1000);//フライパン
        },0);//背景
    });
});

$(function(){
        setTimeout(function(){
            $('.scroll').css('display','inline-block');
            $('.scroll').addClass('fadeIn animated');
            // スクロール無効を解除する
            $(window).off('.noScroll');
            $('html').css('overflow','visible')
        },8000);
});
//Scroll
$(function(){
    var headHight = 60;
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^="#"]').click(function() {
	  // スクロールの速度
	  var speed = 300; // ミリ秒
	  // アンカーの値取得
	  var href= $(this).attr("href");
	  // 移動先を取得
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  // 移動先を数値で取得
	  var position = target.offset().top+headHight;
	  // スムーススクロール
	  $('body,html').animate({scrollTop:position}, speed, 'swing');
	  return false;
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

//iFrame2IMG4YouTube

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

//UTF8/16 ライブラリ powered by kerry http://202.248.69.143/~goma/

utf = new function()
{
    this.unpackUTF16 = function(_str)
    {
        var i, utf16=[];
        for (i=0; i<_str.length; i++) utf16[i] = _str.charCodeAt(i);
        return utf16;
    }
    
    this.unpackChar = function(_str) 
    {
    	var utf16 = this.unpackUTF16(_str);
    	var i,n, tmp = [];
    	for (n=i=0; i<utf16.length; i++) {
    		if (utf16[i]<=0xff) tmp[n++] = utf16[i];
    		else {
    			tmp[n++] = utf16[i] >> 8;
    			tmp[n++] = utf16[i] &  0xff;
    		}	
    	}
    	return tmp;
    }
    
    this.packChar  =
    this.packUTF16 = function(_utf16)
    {
        var i, str = "";
        for (i in _utf16) str += String.fromCharCode(_utf16[i]);
        return str;
    }

    this.unpackUTF8 = function(_str)
    {
       return this.toUTF8( this.unpackUTF16(_str) );
    }

    this.packUTF8 = function(_utf8)
    {
        return this.packUTF16( this.toUTF16(_utf8) );
    }
    
    this.toUTF8 = function(_utf16)
    {
        var utf8 = [];
        var idx = 0;
        var i, j, c;
        for (i=0; i<_utf16.length; i++)
        {
            c = _utf16[i];
            if (c <= 0x7f) utf8[idx++] = c;
            else if (c <= 0x7ff)
            {
                utf8[idx++] = 0xc0 | (c >>> 6 );
                utf8[idx++] = 0x80 | (c & 0x3f);
            }
            else if (c <= 0xffff)
            {
                utf8[idx++] = 0xe0 | (c >>> 12 );
                utf8[idx++] = 0x80 | ((c >>> 6 ) & 0x3f);
                utf8[idx++] = 0x80 | (c & 0x3f);
            }
            else
            {
                j = 4;
                while (c >> (6*j)) j++;
                utf8[idx++] = ((0xff00 >>> j) & 0xff) | (c >>> (6*--j) );
                while (j--) 
                utf8[idx++] = 0x80 | ((c >>> (6*j)) & 0x3f);
            }
        }
        return utf8;
    }
    
    this.toUTF16 = function(_utf8)
    {
        var utf16 = [];
        var idx = 0;
        var i,s;
        for (i=0; i<_utf8.length; i++, idx++)
        {
            if (_utf8[i] <= 0x7f) utf16[idx] = _utf8[i];
            else 
            {
                if ( (_utf8[i]>>5) == 0x6)
                {
                    utf16[idx] = ( (_utf8[i] & 0x1f) << 6 )
                                 | ( _utf8[++i] & 0x3f );
                }
                else if ( (_utf8[i]>>4) == 0xe)
                {
                    utf16[idx] = ( (_utf8[i] & 0xf) << 12 )
                                 | ( (_utf8[++i] & 0x3f) << 6 )
                                 | ( _utf8[++i] & 0x3f );
                }
                else
                {
                    s = 1;
                    while (_utf8[i] & (0x20 >>> s) ) s++;
                    utf16[idx] = _utf8[i] & (0x1f >>> s);
                    while (s-->=0) utf16[idx] = (utf16[idx] << 6) ^ (_utf8[++i] & 0x3f);
                }
            }
        }
        return utf16;
    }
    
    this.URLencode = function(_str)
    {
        return _str.replace(/([^a-zA-Z0-9_\-\.])/g, function(_tmp, _c)
            { 
                if (_c == "\x20") return "+";
                var tmp = utf.toUTF8( [_c.charCodeAt(0)] );
                var c = "";
                for (var i in tmp)
                {
                    i = tmp[i].toString(16);
                    if (i.length == 1) i = "0"+ i;
                    c += "%"+ i;
                }
                return c;
            } );
    }

    this.URLdecode = function(_dat)
    {
        _dat = _dat.replace(/\+/g, "\x20");
        _dat = _dat.replace( /%([a-fA-F0-9][a-fA-F0-9])/g, 
                function(_tmp, _hex){ return String.fromCharCode( parseInt(_hex, 16) ) } );
        return this.packChar( this.toUTF16( this.unpackUTF16(_dat) ) );
    }
}

//SNS Share Link

$(function() {
    //パラメータの削除
    if (location.href.indexOf('?') != -1) {
        var url = location.href.replace(/\?.*$/,"");
    } else {
        var url = location.href;
    }

    //メッセージを追加 (TwitterとLINEのみ)
    var message = "【学内放送】『協力料理ショー』1月16日(火)A棟りそな横モニター・E棟コミュニティルームで12時20分から放送！"
    var utf8url = utf.URLencode(message) + "%0D%0A" + utf.URLencode(url+'?line');

    // URLの生成   詳細: https://qiita.com/takuhito-h/items/891f3d53ad14a1182963
    var tweet = "https://twitter.com/share?url=" + url + "?twitter" + "&text=" + message + "&via=MCS_kutc&related=MCS_kutc"
    var fb_share = "https://www.facebook.com/sharer/sharer.php?u=" + url + "?facebook";
    var line = "http://line.me/R/msg/text/?" + utf8url;

    //リンク付
    $("#tweet").attr("href",tweet);
    $("#fb_share").attr("href",fb_share);
    $("#line").attr("href",line);
});
