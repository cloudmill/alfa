/* src/app.js */

import AOS from 'aos';
import browser from 'browser-detect';
import 'Scripts/isotope.pkgd.min';
import "velocity-animate";

// Styles
import 'Styles/_app.scss';
import { sticky } from 'Scripts/customscripts';
import { isMobileAndTabletOnly } from "./assets/scripts/utils";

const browserDetect = browser();

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

	// anima
	require('Scripts/parallax');
  require('Scripts/video');

  if(!isMobileAndTabletOnly) {
    sticky();
  }


  $('body').addClass(browserDetect.name);
  $('body').addClass(browserDetect.os);

	// backend
	require('Scripts/backend');
});


$(window).on("orientationchange", function() {
  setTimeout(() => {
    sticky();
    AOS.refresh({
      offset: 50,
    });
  }, 800);
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

    if(process.env.NODE_ENV === 'production') {
      window.scrollTo(0, 0);
    }
  } else {
    $('.loader-hide').addClass('showIt');
    $('.index-slider').addClass('loading');
    setTimeout(function () {
      $('body').css('overflow', 'visible');
      $('.loader').addClass('hidden');

      setTimeout(function () {
        AOS.init({
          offset: 50,
        });
      }, 500);

      setTimeout(function () {
        $('.index-slider').removeClass('loading');
      }, 1500);

      if(process.env.NODE_ENV === 'production') {
        window.scrollTo(0, 0);
      }
    }, 1700);
  }
});


// header
require('Scripts/maps');

