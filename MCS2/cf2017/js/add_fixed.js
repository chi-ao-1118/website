$(window).load(function() {

  var studio = $('#studio'),
    studio_offset = studio.offset();
  var live = $('#live'),
    live_offset = live.offset();
  var shop = $('#shop'),
    shop_offset = shop.offset();
  var top = $("#Top");

  $(window).scroll(function() {
    if ($(window).scrollTop() > studio_offset.top) {
      remove(top);
      add(studio);
    } else {
      remove(studio);
      top.css("position","fixed");
    }
    if ($(window).scrollTop() > live_offset.top) {
      remove(studio);
      add(live);
    } else {
      remove(live);
    }
    if ($(window).scrollTop() > shop_offset.top) {
      remove(live);
      add(shop);
    } else {
      remove(shop);
    }
  });
});

function add(obj) {
  obj.css("position", "fixed");
  obj.css("overflow", "scroll");
  obj.css("top", "0");
  obj.css("left", "0");
};

function remove(obj) {
  obj.css("position", "relative");
  obj.css("overflow", "hidden");
};
