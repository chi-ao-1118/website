$(function(){

//モーダルウィンドウを出現させるクリックイベント
$(".modal-open").click(function(){
	var modalOpen =$(this);
	$(".page_top").fadeOut("slow");
	
	//キーボード操作などにより、オーバーレイが多重起動を防止
	modalOpen.blur() ;	//ボタンからフォーカスを外す
	if($("#modal-overlay")[0] ) return false ;		//新しくモーダルウィンドウを起動しない機能
	if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動

	$(".about_office").append('<div id="modal-overlay"></div>');
	$("#modal-overlay").fadeIn("slow");			//オーバーレイを出現させる
	centeringModalSyncer();　　//コンテンツをセンタリングする

	$(".modal-content",modalOpen).fadeIn("slow") ;		//コンテンツをフェードインする
	$("#modal-overlay,#modal-close").unbind().click( function(){　//[#modal-overlay]、または[#modal-close]をクリックした時
		$( ".modal-content,#modal-overlay" , modalOpen).fadeOut( "slow" , function(){		//[#modal-content]と[#modal-overlay]をフェードアウトした後
			$('#modal-overlay').remove() ;		//[#modal-overlay]を削除する
		});
	});
});


$(window).resize(centeringModalSyncer);		//リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
	function centeringModalSyncer() {		//センタリングを実行する関数
		var w = $(window).width() ;
		var h = $(window).height() ;		//画面(ウィンドウ)の幅、高さを取得

		// コンテンツ(#modal-content)の幅、高さを取得
		// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こす
		//var cw = $(".modal-content").outerWidth( {margin:true} );
		//var ch = $(".modal-content").outerHeight( {margin:true} );
		var cw = $(".modal-content").outerWidth();
		var ch = $(".modal-content").outerHeight();
		$(".modal-content").css( {"left":((w-cw)/8)+"px","top":((h-ch)/8)+"px"});		//センタリングを実行する
	}
} ) ;