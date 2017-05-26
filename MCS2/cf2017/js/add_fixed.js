$(window).load(function() {

  var studio = $('#studio'),
    studio_offset = studio.offset();
  var live = $('#live'),
    live_offset = live.offset();
  var shop = $('#shop'),
    shop_offset = shop.offset();
  var top = $("#Top");
  var w_height = $(window).height();


  $(window).scroll(function() {

    if ($(window).scrollTop() + w_height < studio_offset.top) {
      add(top);
      remove(studio);
      remove(live);
      remove(shop);
    } else if ($(window).scrollTop() < studio_offset.top) {
      stay(top);
      remove(studio);
      remove(live);
      remove(shop);
    } else if ($(window).scrollTop() + w_height < live_offset.top) {
      remove(top);
      add(studio);
      remove(live);
      remove(shop);
    } else if ($(window).scrollTop() < live_offset.top) {
      remove(top);
      stay(studio);
      remove(live);
      remove(shop);
    } else if ($(window).scrollTop() + w_height < shop_offset.top) {
      remove(top);
      remove(studio);
      add(live);
      remove(shop);
    } else if ($(window).scrollTop() < shop_offset.top) {
      remove(top);
      remove(studio);
      stay(live);
      remove(shop);
    } else {
      remove(top);
      remove(studio);
      remove(live);
      add(shop);
    }
  });
});

function add(obj) {
  obj.css("position", "fixed");
  obj.css("overflow", "scroll");
};

function stay(obj) {
  obj.css("position", "fixed");
  obj.css("overflow", "hidden");
};

function remove(obj) {
  obj.css("position", "relative");
  obj.css("overflow", "hidden");

};
