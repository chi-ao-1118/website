$( window ).resize(function() {
    var Wrap_width = $('#top_facebookWrap').width();    
    $('#top_facebookWrap').html('<div class="fb-page" data-href="https://www.facebook.com/mcs.kutc/" data-tabs="timeline" data-width="' + Wrap_width + '" data-height="400" data-small-header="false" data-adapt-Wrap-width="true" data-hide-cover="false" data-show-facepile="false"></div>');
    FB.XFBML.parse();    
});