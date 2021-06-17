$(function () {
  showMore();
});

function showMore() {
  $(document).on('click', '[data-type=show-more]', function (e) {
    e.preventDefault();

    let mainContainer = $(this).parents('[data-type=main-container]'),
      itemsContainer = mainContainer.find('[data-type=items-container]'),
      pageNav = mainContainer.find('[data-type=pagenav]');

    pageNav.remove();

    $.ajax({
      type: 'GET',
      url: $(this).attr('data-url'),
      dataType: 'html',
      data: {
        ajax: true,
      },
      success: function (data) {
        let pageNavResponse = $(data).find('[data-type=pagenav]');

        itemsContainer.append($(data));

        if (pageNavResponse.length) {
          itemsContainer.after(pageNavResponse);
        }
      }
    });
  });
}


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
