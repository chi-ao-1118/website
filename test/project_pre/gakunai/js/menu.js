// JavaScript Document$(function(){


// メニューの読み込み
$(function() {
    $("#header").load("header.html", add_this);
    $("#hamMenu").load("hamMenu.html", menu_on);
    $("#footer").load("footer.html");
    $("#bkBtn").load("bkBtn.html", add_bk_id);
});

// loadは非同期に実行されるため，普通に実行すると思い通りの結果にならない
// 確実にload後に実行されるようにcallback関数として定義する
var add_this = function() {
    $(header_id).addClass("this");
};
var add_bk_id = function() {
    $(".bkAnime").attr('id', bk_id);
};
//	ハンバーガーメニューを出現させるクリックイベント
// これもcallback関数とする必要がある
var num = 0;
var menu_on = function() {
    $(".menu").click(function() {
        $(this).data("click", ++num);
        var click = $(this).data("click");
        if (click % 2 === 1) {
            $("#hamMenu").show();
            $(".menu_overlay").show();
            $(".topImg").hide();
            $(".mainWrap").hide();
            $(".hamLost").hide();
            $("#top_firstView").attr('id', "none");
        } else {
            $("#hamMenu").hide();
            $(".menu_overlay").hide();
            $(".topImg").show();
            $(".mainWrap").show();
            $(".hamLost").show();
            $("#none").attr('id', "top_firstView");
        }
    });
};

$(window).on('load resize', function() {
    if (!window.innerWidth) {
        return;
    }
    if (window.innerWidth > 640) {
        $("#hamMenu").hide();
        $(".menu_overlay").hide();
        $(".topImg").show();
        $(".mainWrap").show();
        $(".hamLost").show();
    }
});
