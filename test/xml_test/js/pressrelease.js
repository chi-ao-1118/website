$(function() {
    $.ajax({
        url: 'pressrelease.xml',
        dataType: 'xml',
        success: function(data) {

            var insertContents = '';
            $('item', data).each(function() {
                var thisItem = $(this);
                insertContents += '<a href="' + thisItem.children('link').text() + '">';
                insertContents += '<article>';
                insertContents += '<time class="PC">' + thisItem.children('time').text() + '</time>';
                insertContents += '<div>';
                insertContents += '<div class="pre_conImg">' + '<img src="' + thisItem.children('img').text() + '">' + '</div>';
                insertContents += '<div class="pre_conData">';
                insertContents += '<time class="SP">' + thisItem.children('time').text() + '</time>';
                insertContents += '<h1>' + thisItem.children('title').text() + '</h1>';
                insertContents += '<p>' + thisItem.children('article').text() + '</p>';
                insertContents += '</div></div></article></a>';
            });
            $('#press').append(insertContents);
        }
    });
});


          // <a href="pressrelease/index10.html">
          // <article>
          //   <time class="PC">2016.12.5</time>
          //   <div>
          //     <div class="pre_conImg"><img src="img/pressIndex10.png" alt=""></div>
          //     <div class="pre_conData">
          //       <time class="SP">2016.12.5</time>
          //       <h1>Sojo Out Stage (SOS) 出場団体紹介動画　公開</h1>
          //       <p>12月8日のSOS出場団体を紹介する動画が公開。</p>
          //     </div>
          //   </div>
          // </article>
          // </a>
