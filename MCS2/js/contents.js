$(function() {
    $.ajax({
        url: 'contents.xml',
        dataType: 'xml',
        success: function(data) {

            var insertContents = '';
            $('originalContents item', data).each(function() {
                var thisItem = $(this);
                var link = thisItem.children('link').text();
                var img = thisItem.children('img').text();
                var title = thisItem.children('title').text();
                var article = thisItem.children('article').text();

                insertContents += `
                <article class="original">
                  <a href="${link}" target="_blank">
                    <figure class="lostFig">
                      <img src="img/contents/PC/${img}">
                      <figcaption>
                        <h1>${title}</h3>
                      <p>${article}</p>
                    </figcaption>
                  </figure>
                </a>
                </article>`;
              });
            $('#originalItem').append(insertContents);
        }
    });
});
