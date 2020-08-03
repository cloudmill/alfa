/* src/app.js */

import AOS from 'aos';

// Styles
import 'Styles/_app.scss';

$(document).ready(() => {
	// header
	require('Scripts/header');

	// scripts
	require('Scripts/tabs');
	require('Scripts/customscripts');

	// sliders
	require('Scripts/sliders');

  // form
	require('Scripts/input');
	require('Scripts/parallax');

	// backend
	require('Scripts/backend');
});


// mobile sctipts
const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if (screenWidth <= 767) {
	console.log(screenWidth);
}
// mobile sctipts


$(window).on("load", function() {
  $('body').css('overflow', 'hidden');
  if($(".loaderInner").length) {
    $('body').css('overflow', 'visible');
    $('.loader').addClass('hideIt');
  } else {
    $('.loader-hide').addClass('showIt');
    setTimeout(function () {
      $('body').css('overflow', 'visible');
      $('.loader').addClass('hidden');

      AOS.init({
        offset: 50,
      });

    }, 1600);
  }
});


// header
require('Scripts/maps');

