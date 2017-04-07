$(function() {
    $.ajax({
        url: 'pressrelease.xml',
        dataType: 'xml',
        success: function(data) {

            var insertContents = '';
            $('item', data).each(function() {
                var thisItem = $(this);
                var link = thisItem.children('link').text();
                var time = thisItem.children('time').text();
                var img = thisItem.children('img').text();
                var title = thisItem.children('title').text();
                var article = thisItem.children('article').text();
                insertContents += `
                <a href="${link}">
                <article>
                  <time class="PC">${time}</time>
                  <div>
                    <div class="pre_conImg"><img src="${img}" alt=""></div>
                    <div class="pre_conData">
                      <time class="SP">${time}</time>
                      <h1>${title}</h1>
                      <p>${article}</p>
                    </div>
                  </div>
                </article>
                </a>`;
              });
            insertContents +=`
            <article></article>
            <article></article>`;
            $('#press').append(insertContents);
        }
    });
});
