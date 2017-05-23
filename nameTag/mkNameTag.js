$(function() {
  var PARAM = GetQueryString();
  PARAM["item_height"]=parseInt(PARAM["item_height"]);
  PARAM["item_width"]=parseInt(PARAM["item_width"]);
  PARAM["top"]=parseInt(PARAM["top"]);
  PARAM["left"]=parseInt(PARAM["left"]);
  PARAM["margin_top"]=parseInt(PARAM["margin_top"]);
  PARAM["margin_left"]=parseInt(PARAM["margin_left"]);
  

  if (PARAM["size"] == "A3") {
    var PAPER = {
      "width": 420,
      "height": 297
    };
  } else if (PARAM["size"] == "A4") {
    var PAPER = {
      "width": 297,
      "height": 210
    };
  }

  // var nameArr;
  var nameArr = getCsvArr("NameTag.csv");

  var inPage_num = fitWindow(PARAM, PAPER);
  var insert = mkInsert(nameArr, inPage_num, PARAM["extension"]);
  $("#NameTag").html(insert);
  fitWindow(PARAM, PAPER);
  // jQueryによる変更は，DOMが読み込まれた後でないと効かない
});

var timer = false;
$(window).resize(function() {
  if (timer !== false) {
    clearTimeout(timer);
  }
  timer = setTimeout(function() {
    console.log('resized');
    fitWindow();
  }, 200);
});



function getCsvArr(filename) {

  var arr;
  var csvArr = [];
  $.ajax({
    type: 'POST',
    url: filename,
    async: false,
    //非同期通信だと永遠にコールバックし続けなくてはならない．一度取得すれば十分なので同期通信にしてしまう．

    success: function(data) {
      data = data.replace(/^(\n+)|(\n+)$/g, ""); //データ前後の余計な改行を削除
      arr = data.split(/\r\n|\r|\n/); //行ごとに分解
      for (var i = 0; i < arr.length; i++) { //各行の内部を分解
        csvArr[i] = arr[i].split(","); //,で分解
      }
    }
  })
  return csvArr;
};

function mkInsert(csvArr, inPage_num, EXTENSION) {
  var insert = '';
  var No = 0;
  while (No < csvArr.length) {
    var GROUP = csvArr[No][1]
    for (No; csvArr[No][1] == GROUP; No++) {
      var NAME = csvArr[No][0];
      insert += `
      <article class="item">
        <img src="img/${GROUP}">
        <div class="name">${NAME}</div>
      </article>`;

      if (No != 0 && No != csvArr.length - 1 && (No + 1) % inPage_num == 0) {
        insert += `

      <article class="padding1"></article>
      <article class="padding2"></article>
      `;
      }
      if (No == csvArr.length - 1) {
        break;
      }
    }
    if (No == csvArr.length - 1) {
      break;
    }
  }

  for (var i = 0; i < 3; i++) {
    insert += '<article class="nonebox item"></article>';
  }

  return insert;
};


function fitWindow(PARAM, PAPER) {
  var win_width = $(window).width();
  
  var resize_param = win_width / PAPER["width"];

  // var paper_width = PAPER["width"] - PARAM["margin_left"] * 2;
  // var paper_height = PAPER["height"] - PARAM["margin_top"] * 2;
  
  var paper_width = PAPER["width"] - (PARAM["margin_left"]);
  var paper_height = PAPER["height"] - PARAM["margin_top"]*2;

  var width_num = Math.floor(paper_width / PARAM["item_width"]);
  var height_num = Math.floor(paper_height / PARAM["item_height"]);
  var padding_top = (paper_height - PARAM["item_height"] * height_num) / 2 + PARAM["margin_top"];
  var padding_left = (paper_width - PARAM["item_width"] * width_num) / 2;
  var item_width = PARAM["item_width"] - ((padding_left * 2) / width_num);
  

  var top =  50 + PARAM["top"];
  var left =  50 + PARAM["left"];
  
  var re_padding_top = padding_top * resize_param;
  var re_padding_left = padding_left * resize_param;
  var re_item_width = item_width * resize_param;
  var re_item_height = PARAM["item_height"] * resize_param;
  var re_fz = Math.floor(PARAM["item_width"] / 6.2) * resize_param;
  
  
  $("body").css("padding-top", re_padding_top);
  
  $("body").css("padding-left",re_padding_left);
  $("body").css("padding-right",re_padding_left);
 
  $(".item").width(re_item_width);
  $(".item").height(re_item_height);
  $(".padding1").height(re_padding_top);
  $(".padding2").height(re_padding_top);
  
  
  $(".name").css("font-size", re_fz);
  $(".name").css("top",top + "%");
  $(".name").css("left",left + "%");
  
  return width_num * height_num;
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
