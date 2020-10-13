$( document ).ready(function() {
    $( ".ajax_accept_set_cookie" ).click(function() {
        $.ajax({
            type: "GET",
            url: window.location.href,
            data: 'accept_set_cookie=Y',
            success: function(){
                
            }
          });
    });
});