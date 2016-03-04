$( window ).resize(function() {
    var container_width = $('#top_facebookWrapper').width();    
    $('#top_facebookWrapper').html('<div class="fb-page" data-href="https://www.facebook.com/mcs.kutc/" data-tabs="timeline" data-width="' + container_width + '" data-height="400" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"></div>');
    FB.XFBML.parse();    
});