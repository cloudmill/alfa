const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

// menu
$('.menu--js').click(function() {
  $('body').toggleClass('fixed');
  $(this).find('.menu').toggleClass('open');
  $('.navbar').toggleClass('open');
});
$(document).click(function (e) {
  if(screenWidth >= 1024) {
    const container = $(".navbar.open");
    const menu = $(".menu");
    const menuJs = $(".menu--js");
    if (menuJs.has(e.target).length === 0 && container.has(e.target).length === 0) {
      $('body').removeClass('fixed');
      container.removeClass("open");
      menu.removeClass("open");
    }
  }
});
//  menu


$(".page-menu__logo .card").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
  $(this).removeClass("animated")
});
$(".page-menu__logo .card").hover(function(){
  $(this).css({'animation-iteration-count': 'infinite'});
  $(this).addClass("animated");
});
$(".page-menu__logo .card").mouseleave(function(){
  $(this).css({'animation-iteration-count': '1'});
});


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
  if(screenWidth < 768) {
    event.preventDefault();
    $(this).parent().next().slideToggle(500);
  }
});
// footer

// scroll
$(window).scroll(() => {
  const sticky = $('header, .page-menu');
  const scroll = $(window).scrollTop();
  const search = $('.search--lilac')

  if (scroll >= 1){
    sticky.addClass('scrolled');
    search.addClass('search--scrolled');
  }else{
    sticky.removeClass('scrolled');
    search.removeClass('search--scrolled');
  }
});
// scroll
