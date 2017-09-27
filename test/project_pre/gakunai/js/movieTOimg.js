$(function (){
  $(".youtubeImg").click(function (e) {
    // 画像のsrcを取得
    var y_img = $(this).attr("src");
    // 動画IDを抽出
    var id = y_img.slice(23, y_img.lastIndexOf("/") + 0);
    // 画像をiframeに置き換え
    $(this).hide().parent().html('<iframe width="547" height="308" src="https://www.youtube.com/embed/'+ id +'?rel=0" frameborder="0" allowfullscreen></iframe>');
  });
});