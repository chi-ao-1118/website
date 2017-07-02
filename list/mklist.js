$(function() {

  //csvファイルを二項配列に読み込み
  var arr;
  var csvArr = [];
  var No = 0;
  var insert = '';

  // var $secID = {
  //     '制作局': $("#seisaku"),
  //     '技術局': $("#gijutsu"),
  //     '広報局': $("#koho")
  // };
  var DATE = new Date();
  var year = DATE.getFullYear();
  var month = DATE.getMonth();
  month++;
  // monthは実際の月より1少ない数となる
  if (month <= 3) {
    year--;
  }
  var thisYear = year - 2000;
  $(".Department h1").attr("data-year", year);

  $.get("memberlist.csv", function(data) {
    data = data.replace(/^(\n+)|(\n+)$/g, ""); //データ前後の余計な改行を削除
    arr = data.split(/\r\n|\r|\n/); //行ごとに分解
    console.log(arr[0]);
    for (var i = 0; i < arr.length; i++) { //各行の内部を分解
      csvArr[i] = arr[i].split(","); //,で分解
    }
    //ここまでcsv読み込み・分解


    console.log(csvArr);


    // No = mkInsert('制作局', No, 4);
    // $("#seisaku4").html(insert);
    // No = mkInsert('制作局', No, 3);
    // $("#seisaku3").html(insert);
    // No = mkInsert('制作局', No, 2);
    // $("#seisaku2").html(insert);
    No = mkInsert('制作局', No, 1);
    $("#seisaku1").html(insert);
    console.log(No);

    // No = mkInsert('広報局', No, 4);
    // $("#koho4").html(insert);
    // No = mkInsert('広報局', No, 3);
    // $("#koho3").html(insert);
    // No = mkInsert('広報局', No, 2);
    // $("#koho2").html(insert);
    No = mkInsert('広報局', No, 1);
    $("#koho1").html(insert);
    console.log(No);


    // No = mkInsert('技術局', No, 4);
    // $("#gijutsu4").html(insert);
    // No = mkInsert('技術局', No, 3);
    // $("#gijutsu3").html(insert);
    // No = mkInsert('技術局', No, 2);
    // $("#gijutsu2").html(insert);
    No = mkInsert('技術局', No, 1);
    $("#gijutsu1").html(insert);
    console.log(No);



    function mkInsert(sec, No, grade) {
      insert = '';
      for (No; No <= csvArr.length - 1 && csvArr[No][3] == sec; No++) {
        var IdArry = csvArr[No][0].split("-");
        if (thisYear + 1 - IdArry[0] != grade) {
          break;
        }
        var ID = csvArr[No][0];
        var NAME = csvArr[No][1];
        var FURIGANA = csvArr[No][2];
        insert += `<article class="databox">
                  <img src="img/${ID}.jpg" alt="person">
                  <div class="id">情${ID}</div>
                  <div class="furigana">${FURIGANA}</div>
                  <div class="name">${NAME}</div>
                </article>`;
      }
      for (j = 0; j < 4; j++) {
        insert += '<article class="nonebox databox"></article>';
      }
      // $secID[sec].html(insert);
      return No;
    }

  });
});
