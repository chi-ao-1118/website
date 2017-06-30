$( function() {
	var target = '#press';
	var insert = '';
	
	//csvファイルを二項配列に読み込み
	var arr;
	var csvArr=[];
	$.get("list.csv", function(data){
		data = data.replace( /^(\n+)|(\n+)$/g , "" );//データ前後の余計な改行を削除
		arr = data.split("\r\n");//行ごとに分解
		for( var i = 0 ; i < arr.length ; i++ ){//各行の内部を分解
			csvArr[i] = arr[i].split( "," );//,で分解
		}
		//ここまでcsv読み込み・分解
		
		var count = 0;
		// 挿入するHTMLを作成
		insert += '<article class="pressrelease_mainWrap">';
		for (i = csvArr.length-1; i >= 1 ; i--) {
			count++;
			if(count % 3 == 1){
				insert += '<article class="pre_conSet">'
			}
			insert += '<a class="pre_conA" href="pressrelease/'+ csvArr[i][0]+'.html">';
			if (count % 3 == 0 || i == 1){
				insert += ' <article class=" pre_conNoneLine pre_continerBox">';
			}else{
				insert += ' <article class="pre_continerBox">';
			}
			insert += '<div class="pre_continerDate date">' + csvArr[i][1] + '</div> <div class="pre_continerMain">';
			insert += '<div class="pre_continerImg" style="background-image: url(img/'+csvArr[i][2]+'.jpg)"></div>';
			insert += '<div class="pre_continerData"><div class="pre_continerSPDate date">'+csvArr[i][1]+'</div>';
			insert += '<div class="pre_continerTitle">'+csvArr[i][3]+'</div>';
			insert += '<div class="pre_continerText">' + csvArr[i][4] + '</div></div>';
			insert += '</div> </article></a>';
			if(count % 3 == 0){
				insert += ' </article><!--.pre_conSetここまで-->';
			}
		}
		if(count%3!==0){
			for(i=count%3;i>=0;i--){
				insert+= '<article class=" pre_conNone pre_conNoneLine pre_continerBox"><div class="pre_continerDate date"></div><div class="pre_continerMain"><div class="pre_continerImg"></div><div class="pre_continerTitle"></div><div class="pre_continerText"></div></div></article>';
			}
			insert+='</article><!--.pre_conSetここまで-->';
		}
		$( target ).html( insert );		
	});
} );