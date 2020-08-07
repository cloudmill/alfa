/* src/app.js */

import AOS from 'aos';

// Styles
import 'Styles/_app.scss';
import { sticky } from 'Scripts/customscripts';
import { isMobileAndTabletOnly } from "./assets/scripts/utils";

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

	if(!isMobileAndTabletOnly) {
    sticky();
  }

	// backend
	require('Scripts/backend');
});


$(window).on("orientationchange", function() {
  setTimeout(() => {
    sticky();
  }, 500);
});


$(window).on("load", function() {
  $('body').css('overflow', 'hidden');
  if($(".loaderInner").length) {
    $('body').css('overflow', 'visible');
    $('.loader').addClass('hideIt');

    setTimeout(function () {
      AOS.init({
        offset: 50,
      });
    }, 500);

  } else {
    $('.loader-hide').addClass('showIt');
    setTimeout(function () {
      $('body').css('overflow', 'visible');
      $('.loader').addClass('hidden');

      AOS.init({
        offset: 50,
      });

      if(process.env.NODE_ENV === 'production') {
        window.scrollTo(0, 0);
      }
    }, 1600);
  }
});


// header
require('Scripts/maps');

