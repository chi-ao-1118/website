$(window).load(function () {

    var studio = $('#studio'), studio_offset = studio.offset();
    var  live = $('#live'), live_offset = live.offset();
    var  shop = $('#shop'), shop_offset = shop.offset();
    var d_studio = $("#d_studio"), d_studio_offset = d_studio.offset();
    var d_live = $("#d_live"), d_live_offset = d_live.offset();;

    $(window).scroll(function() {
        if ($(window).scrollTop() > studio_offset.top) {
            add(studio);
        } else {
            remove(studio);
        }
        if ($(window).scrollTop() > d_studio_offset.top) {
            remove(studio);
            add(live);
        } else {
            remove(live);
        }
        if ($(window).scrollTop() > live_offset.top) {
            remove(live);
            add(shop);
        } else {
            remove(shop);
        }
    });
});

function add(obj){
  obj.css("position","fixed");
  obj.css("overflow","scroll");
  obj.css("top","0");
  obj.css("left","0");
};

function remove(obj){
    obj.css("position","relative");
    obj.css("overflow","hidden");
};
