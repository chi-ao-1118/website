$(function() {

    //csvファイルを二項配列に読み込み
    var arr;
    var csvArr = [];


    $.get("NameTag.csv", function(data) {
        data = data.replace(/^(\n+)|(\n+)$/g, ""); //データ前後の余計な改行を削除
        arr = data.split(/\r\n|\r|\n/); //行ごとに分解
        console.log(arr[0]);
        for (var i = 0; i < arr.length; i++) { //各行の内部を分解
            csvArr[i] = arr[i].split(","); //,で分解
        }
        //ここまでcsv読み込み・分解

        var group = ["event","live","studio"];

        console.log(csvArr);

        insert = mkInsert(group);
        $("#NameTag").html(insert);


        function mkInsert(group) {
            var insert = '';
            var No = 0;
            
            for (var group_num = 0; group_num < group.length;  group_num++){
              for (No; No < csvArr.length && csvArr[No][1] == group[group_num]; No++) {
                var NAME = csvArr[No][0];
                var GROUP = group[group_num];
                  insert += `<article class="item">
                    <img src="img/${GROUP}.png">
                    <h1>${NAME}</h1>
                  </article>`;
                  if(No != 0 && (No + 1) % 16 == 0){
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
        }

    });
});
