
//  menu
$('.menu--js').click(function() {
	$(this).find('.menu').toggleClass('open');
	$('.navbar').toggleClass('open');
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


$('.page-footer-smallTitle--js').on('click', 'a', function(event) {
  event.preventDefault();
  $(this).parent().next().slideToggle(500);
});

// scroll
$(window).scroll(() => {
  const sticky = $('header, .page-menu');
  const scroll = $(window).scrollTop();

  if (scroll >= 1) sticky.addClass('scrolled');
  else sticky.removeClass('scrolled');
});
// scroll
