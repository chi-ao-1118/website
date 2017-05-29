$(function() {
  var PARAM = GetQueryString();

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
  
  var forIntParamName = ["item_height","item_width","top","left","margin_top","margin_left"];

  // PARAM = PtoI(PARAM, forIntParamName);
  //     for(var i=0;i<forIntParamName.length;i++){
  // console.log(PARAM[forIntParamName[i]]);
  // }
  
  $("body").css("width",PAPER["width"]+"mm");
  
  var ITEM_NUM = countItemNum(PAPER,PARAM);
  
  // var nameArr;
  var nameArr = getCsvArr("NameTag.csv");

  var insert = mkInsert(nameArr, ITEM_NUM);

  $("#NameTag").html(insert);
  
  WindowFit(PARAM, PAPER);
  // jQueryによる変更は，DOMが読み込まれた後でないと効かない
});




var timer = false;
$(window).resize(function() {
  if (timer !== false) {
    clearTimeout(timer);
  }
  timer = setTimeout(function() {
    console.log('resized');
    WindowFit();
  }, 200);
});

function PtoI(PARAM,Arr){
   for(var i=0;i<Arr.length;i++){
  PARAM[Arr[i]] = parseInt(PARAM[Arr[i]]);
  // この代入処理がうまくいかない．型が違うから当たり前といえば当たり前？
  // どう実装するのがスマートだろうか
  }
}

function countItemNum(PAPER,PARAM){
  var height_num = Math.floor((PAPER["height"] - PARAM["margin_top"]*2) / PARAM["item_height"]);
  var width_num = Math.floor((PAPER["width"] - PARAM["margin_left"]*2 )/ PARAM["item_width"]);
  var ITEM_NUM = {
      "width": width_num,
      "height": height_num,
      "all" : width_num * height_num
    };
  return ITEM_NUM;
}


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

function mkInsert(csvArr, ITEM_NUM) {
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

      if (No != 0 && No < csvArr.length && (No + 1) % ITEM_NUM["width"] == 0) {
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

  for (var i = 0; i < (csvArr.length % ITEM_NUM["all"]); i++) {
    insert += '<article class="nonebox item"></article>';
  }
  return insert;
};


function WindowFit(PARAM, PAPER, ITEM_NUM) {
  
  var padding_top = (PAPER["height"] - PARAM["item_height"] * ITEM_NUM("height")) / 2;
  var padding_left = (PAPER["width"] - PARAM["item_width"] * ITEM_NUM("width")) / 2;
  
  var Name_top =  50 + PARAM["top"];
  var Name_left =  50 + PARAM["left"];

  var re_fz = Math.floor(PARAM["item_width"] / 6.2);
  
  
  $("body").css("padding-top", padding_top);
  
  $("body").css("padding-left",padding_left);
  $("body").css("padding-right",padding_left);
 
  $(".item").width(PARAM["item_width"]+"mm");
  $(".item").height(PARAM["item_height"]+"mm");
  $(".padding1").height(PARAM["padding_top"]+"mm");
  $(".padding2").height(PARAM["padding_top"]+"mm");  
  
  $(".name").css("font-size", re_fz + "mm");
  $(".name").css("top",Name_top + "%");
  $(".name").css("left",Name_left + "%");
  
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
