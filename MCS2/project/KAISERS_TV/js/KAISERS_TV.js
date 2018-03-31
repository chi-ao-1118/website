
$(function(){
    $("#toggle").click(function(){
        $("#menu").slideToggle();
        return false;
    });
    $(window).resize(function(){
        var win = $(window).width();
        var p = 640;
        if(win > p){
            $("#menu").show();
        }
    })
})