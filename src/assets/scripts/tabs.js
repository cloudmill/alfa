import AOS from "aos";

tabControl();

let resizeTimer;
$(window).on('resize', function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    tabControl();
  }, 250);
});

function tabControl() {
  const tabs = $('.tabbed-content').find('.tabs');
  if (tabs.is(':visible')) {
    tabs.find('.tab').on('click', function (event) {
      event.preventDefault();
      const target = $(this).attr('href'),
        tabs = $(this).parents('.tabs'),
        buttons = tabs.find('.tab'),
        item = tabs.parents('.tabbed-content').find('.item');
      buttons.removeClass('active');
      item.removeClass('active');
      $(this).addClass('active');
      $(target).addClass('active');

      // $('html, body').animate({
      //   scrollTop: $(target).offset().top - 50
      // }, 500);

      setTimeout(() => {
        AOS.refresh({
          offset: 50,
        });
      }, 600);
    });
  } else {
    $('.item').on('click', function () {
      const container = $(this).parents('.tabbed-content'),
        currId = $(this).attr('id'),
        items = container.find('.item');
      container.find('.tabs .tab').removeClass('active');
      items.removeClass('active');
      $(this).addClass('active');
      container.find('.tabs a[href$="#' + currId + '"]').addClass('active');
    });
  }
}

$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $('.tabs__content .aos-init').removeClass('aos-animate');
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('.tabsSimple').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');

  AOS.refresh({
    offset: 50,
  });
});
