/* src/app.js */

import AOS from 'aos';
import Rellax from "rellax";
import browser from 'browser-detect';
import "velocity-animate";

// Styles
import 'Styles/_app.scss';
import { sticky } from 'Scripts/customscripts';
import {getResults} from "./assets/scripts/customscripts";

const browserDetect = browser();
const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

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
  require('Scripts/video');

  require('Scripts/nav');

  if(screenWidth >= 1024) {
    sticky();
  }

  $('body').addClass(browserDetect.name);
  $('body').addClass(browserDetect.os);

	// backend
	require('Scripts/backend');

	if($('.glossary-results').length) {
    getResults();
  }
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
  // if($(".loaderInner").length) {
  //   $('body').css('overflow', 'visible');
  //   $('.loader').addClass('hideIt');
  //
  //   setTimeout(function () {
  //     AOS.init({
  //       offset: 50,
  //     });
  //
  //     window.scrollTo(0, 0);
  //   }, 500);
  //
  //   if (screenWidth > 767 && $('.rellax').length) {
  //     new Rellax('.rellax', {
  //       speed: -2,
  //       center: true,
  //       vertical: true,
  //       horizontal: false
  //     });
  //   }
  //
  // } else {
  //   $('.loader-hide').addClass('showIt');
    $('.index-slider').addClass('loading');
    // setTimeout(function () {
      $('body').css('overflow', 'visible');


      setTimeout(function () {
        $('.loader, .loader-inner').addClass('hidden');
        AOS.init({
          offset: 50,
        });
        window.scrollTo(0, 0);
      }, 800);

      if (screenWidth > 767 && $('.rellax').length) {
        new Rellax('.rellax', {
          speed: -2,
          center: true,
          vertical: true,
          horizontal: false
        });
      }

      setTimeout(function () {
        $('.index-slider').removeClass('loading');
      }, 1200);

    // }, 1700);
  // }
});


// header
require('Scripts/maps');

