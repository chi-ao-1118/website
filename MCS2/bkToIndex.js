/*//ここからBkToIndex
function backLink() {

// 参照元のページのURLを取得
var referrer = document.referrer;

alert(referrer);
// 記事ページの正規表現
var index = \/new\/index.html;
 if (referrer.match(\/index\/)){
	$(".works_bkBtnA").attr("href", index); 
 }
} 
 
$(document).ready(function() {
	alert(document.referrer);
});*/


/*
$(document).ready(function() {
	 var myRef = document.referrer;
	 var index = "http://mcs-kutc.com/new/index.html" ;
	 var directry = "http://mcs-kutc.com/new/";
	 alert( myRef.indexOf(directry));
   if ((myRef.indexOf(index) != -1 )){  
	$(".works_bkBtnA").attr("href", index);
   }
});*/