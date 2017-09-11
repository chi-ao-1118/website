// JavaScript Document

$(function() {
  $('#content_select li').click(function() {
    console.log('clecked');
    var thisID = $(this).attr("id");
    console.log(thisID);
    var thisClass = thisID.substr(0, thisID.length - 4);
    console.log(thisClass);


    $('#content_select li').removeClass(); //全てのクラスを削除
    $(this).addClass(thisClass + '_aft');

    if (thisClass == 'all') {
      $('.original').removeClass('none');
    } else {
      $('.original').addClass('none');
      $('.' + thisClass).removeClass('none');
    }
  });
});
