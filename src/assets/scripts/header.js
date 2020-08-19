import {isMobileOnly, isMobileAndTabletOnly} from "./utils";

// menu
$('.menu--js').click(function() {
  $('body').toggleClass('fixed');
  $(this).find('.menu').toggleClass('open');
  $('.navbar').toggleClass('open');
});
$(document).click(function (e) {
  const container = $(".navbar.open");
  const menu = $(".menu");
  const menuJs = $(".menu--js");
  if(!isMobileAndTabletOnly) {
    if (menuJs.has(e.target).length === 0 && container.has(e.target).length === 0) {
      $('body').removeClass('fixed');
      container.removeClass("open");
      menu.removeClass("open");
    }
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
