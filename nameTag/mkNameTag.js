$(function() {
var PARAM = GetQueryString();

if (PARAM["size"] == "A3") {
  var paper["width"] = 420;
  paper["height"] = 297;
} else if (PARAM["size"] == "A4") {
  var paper["width"] = 210;
  var paper["height"] = 297;
}

var nameArr = getCsvArr("NameTag.csv");
var inPage_num = fitWindow(PARAM,PAPER);
var insert = mkInsert(nameArr, inPage_num);
$("#NameTag").html(insert);

});

$(window).resize(function() {
  fitWindow();
});

function getCsvArr(fileName) {
  var arr;
  var csvArr = [];

  $.get(fileName, function(data) {
      data = data.replace(/^(\n+)|(\n+)$/g, ""); //データ前後の余計な改行を削除
      arr = data.split(/\r\n|\r|\n/); //行ごとに分解
      console.log(arr[0]);
      for (var i = 0; i < arr.length; i++) { //各行の内部を分解
        csvArr[i] = arr[i].split(","); //,で分解
      }
      console.log(csvArr);
      return csvArr;
    });
  };

  function mkInsert(csvArr, inPage_num) {
    var insert = '';
    var No = 0;

    while (No < csvArr.length) {
      var GROUP = csvArr[No][1].sprit(".")[0];
      for (No; csvArr[No][1] == GROUP];
      No++) {
      var NAME = csvArr[No][0];
      insert += `<article class="item">
              <img src="img/${GROUP}.png">
              <h1>${NAME}</h1>
            </article>`;
      if (No != 0 && (No + 1) % inPage_num == 0) {
        insert += `<article class="padding"></article>
              <article class="padding"></article>`;
      }
    }
    console.log(insert);
  }
  for (var i = 0; i < 3; i++) {
    insert += '<article class="nonebox databox"></article>';
  }
  return insert;
};


function fitWindow(PARAM,PAPER) {

  var resize_param = $("body").width() / PAPER["width"];

  var paper_width = PAPER["width"] - PARAM["margin_left"] * 2;
  var paper_height = PAPER["height"] - PARAM["margin_top"] * 2;

  var width_num = Math.floor(paper_width / PARAM["item_width"]);
  var height_num = Math.floor(paper_height / PARAM["item_height"]);
  // var padding_left = (paper_width % PARAM["item_width"]) / 2; //margi:0 auto; で十分
  var padding_top = (paper_height % PARAM["item_height"]) / 2 + PARAM["margin_top"];

  $("body").css("padding-top", padding_top * resize_param);
  // $("body").css("padding-left",(padding_left + margin_left) * resize_param); //margi:0 auto; で十分
  $(".item").width(item_width * resize_param);
  $(".item").height(item_height * resize_param);
  $(".padding").height(padding_top * resize_param);
  $(".name").css("font-size",Math.floor(item_width / 7));

  return wodth_num * height_num;
};

function GetQueryString() {
  var result = {};
  if (1 < window.location.search.length) {
    // 最初の1文字 (?記号) を除いた文字列を取得する
    var query = window.location.search.substring(1);

    // クエリの区切り記号 (&) で文字列を配列に分割する
    var parameters = query.split('&');

    for (var i = 0; i < parameters.length; i++) {
      // パラメータ名とパラメータ値に分割する
      var element = parameters[i].split('=');

      var paramName = decodeURIComponent(element[0]);
      var paramValue = decodeURIComponent(element[1]);

      // パラメータ名をキーとして連想配列に追加する
      result[paramName] = paramValue;
    }
  }
  return result;
};
