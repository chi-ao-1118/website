$(function() {
    var target = '#press';
    var csvList;
    var insert = '';
   	$.ajax({
		url:'list.csv',
		success: function(data){
            // csvを配列に格納
            csvList = $.csv()(data);
 			
			var count = 0;
            // 挿入するHTMLを作成
            for (var i = csvList.length; i >= 1 ; i--) {
				count++;
				if(count % 3 == 1){
					insert += '<article class="pressrelease_mainWrapper">';
				}
				insert += ' <article class="pre_conSet"> <a class="pre_conA" href="pressrelease/'+ csvList[i][0]+'.html">';
				if (count % 3 == 0){
					insert += ' <article class=" pre_conNoneLine pre_continerBox">';
				}else{
					insert += ' <article class="pre_continerBox">';
				}
                insert += '<div class="pre_continerDate date">' + csvList[i][1] + '</div> <div class="pre_continerMain">';
				insert += '<div class="pre_continerImg" id="'+csvList[i][2]+'"></div>';	
				insert += '<div class="pre_continerTitle">'+csvList[i][3]+'</div>';
                insert += '<div class="pre_continerText">' + csvList[i][4] + '</div>';
                insert += '</div> </article></a>';
				if(count % 3 == 0){
					insert += ' </article><!--.pre_conSetここまで-->';
				}
            };
            $(target).append(insert);
        }
    });
	
});































<article class="pressrelease_mainWrapper">
  <article class="pre_conSet">
  <a class="pre_conA" href="pressrelease/index7.html">
    <article class="pre_continerBox">
      <div class="pre_continerDate date">2016.1.1</div>
      <div class="pre_continerMain">
        <div class="pre_continerImg" id="pre_icon1"></div>
        <div class="pre_continerTitle">あああああああああ</div>
        <div class="pre_continerText">あああああああああああああああああああああああああああああああああああああ</div>
      </div>
    </article></a>
    <a class="pre_conA" href="pressrelease/index6.html">
    <article class="pre_continerBox">
      <div class="pre_continerDate date">2016.1.1</div>
      <div class="pre_continerMain">
        <div class="pre_continerImg" id="pre_icon1"></div>
        <div class="pre_continerTitle">あああああああああ</div>
        <div class="pre_continerText">あああああああああああああああああああああああああああああああああああああ</div>
      </div>
    </article></a>
    <a class="pre_conA" href="pressrelease/index5.html">
    <article class=" pre_conNoneLine pre_continerBox">
      <div class="pre_continerDate date">2016.1.1</div>
      <div class="pre_continerMain">
        <div class="pre_continerImg" id="pre_icon1"></div>
        <div class="pre_continerTitle">あああああああああ</div>
        <div class="pre_continerText">あああああああああああああああああああああああああああああああああああああ</div>
      </div>
    </article></a>
  </article><!--.pre_conSetここまで-->
  // JavaScript Document