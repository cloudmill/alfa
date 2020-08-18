import {isMobileOnly} from "./utils";

// menu
$('.menu--js').click(function() {
	$(this).find('.menu').toggleClass('open');
	$('.navbar').toggleClass('open');
});
$(document).mouseup(function (e) {
  const container = $(".navbar.open");
  const menu = $(".menu");
  if (container.has(e.target).length === 0){
    container.removeClass("open");
    menu.removeClass("open");
  }
});
//  menu

// anchor
$('.anchor').on('click', 'a', function(event) {
  event.preventDefault();
  $('.anchor a').removeClass('active');
  const id = $(this).attr('href');
  const top = $(id).offset().top;
  $(this).addClass('active');
  $('body,html').animate({scrollTop: top - 30}, 1000);
});
// anchor

// footer
$('.page-footer-smallTitle--js').on('click', 'a', function(event) {
  if(isMobileOnly) {
    event.preventDefault();
    $(this).parent().next().slideToggle(500);
  }
});
// footer

// scroll
$(window).scroll(() => {
  const sticky = $('header, .page-menu');
  const scroll = $(window).scrollTop();

  if (scroll >= 1) sticky.addClass('scrolled');
  else sticky.removeClass('scrolled');
});
// scroll
