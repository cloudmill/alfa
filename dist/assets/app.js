!function(e){function t(t){for(var a,o,r=t[0],l=t[1],c=t[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(u&&u(t);p.length;)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={0:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;i.push([11,1]),n()}([,,function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"showMoreFunc",(function(){return o})),n.d(t,"getResults",(function(){return l})),n.d(t,"sticky",(function(){return c}));var a=n(0),s=n.n(a),i=n(8);function o(t,n,a,i,o){var r=n,l=e(t).length,c=e(t+":lt("+r+")"),u=e(t+"[data-category="+o+"]:lt("+r+")"),d=e(t+"[data-category="+o+"]").length;e(t).velocity({scaleX:0,scaleY:0},{display:"none",duration:0}),o?(u.velocity({scaleX:1,scaleY:1},{display:"block",duration:300}),r<d&&e(a).show()):c.velocity({scaleX:1,scaleY:1},{display:"block",duration:0}),i&&e(a).click((function(){var n=e(this)[0].dataset.filter,a=e(t+"[data-category="+n+"]").length;n?(e(t+"[data-category="+n+"]:lt("+(r=r+5<=a?r+5:a)+")").velocity({scaleX:1,scaleY:1},{display:"block",duration:300}),r>=a&&0!==r&&e(this).hide()):(e(t+":lt("+(r=r+5<=l?r+5:l)+")").velocity({scaleX:1,scaleY:1},{display:"block",duration:300}),r>=l&&0!==r&&e(this).hide());setTimeout((function(){s.a.refresh({offset:50})}),600)}))}function r(t,n,a,r){var l=e(".glossary-list .acc__card"),u=0;if(n?(l.velocity({scaleX:0,scaleY:0},{display:"none",duration:300}),e(l).filter((function(n,s){var i=e(s)[0].dataset.title,o=e(s)[0].dataset.subtitle,r=a?i.startsWith(t):i.toLowerCase().includes(t.toLowerCase()),l=a?o.startsWith(t):o.toLowerCase().includes(t.toLowerCase());return(r||l)&&u++,r||l})).velocity({scaleX:1,scaleY:1},{display:"block",duration:300,delay:200}),e(".abc--js li").removeClass("active"),a&&r.addClass("active"),e(".glossary-results").hasClass("active")||e(".glossary-results").addClass("active").velocity("slideDown",{duration:500,delay:400}),e(".glossary-results-title span").text(u),e(".glossary-results-desc span").text(t),e(".more--js").hide()):a||(e(".glossary-results").removeClass("active").velocity("slideUp",{duration:500}),e(".more--js").show(),o(".acc .acc__card",9,".more--js",!1)),i.a){var d=e(".glossary-results").offset().top;e("body,html").animate({scrollTop:d-70},1e3)}setTimeout((function(){var t=e(".glossary-results").offset().top;e("body,html").animate({scrollTop:t-70},1e3),c(),s.a.refresh({offset:50})}),700)}function l(){var t=function(){var t=e(".abc--js li"),n=[];return t.each((function(t,a){n.push(e(a).data("title"))})),n}();e(".glossary-list .acc__card").each((function(n,a){var s=e(a).data("title")[0];t.filter((function(e){return e===s})).map((function(t){e(".abc--js li[data-title="+t+"]").addClass("activated")}))}))}function c(){var t=e(window),n=e(".sidebar");if(n.length){var a=n.innerHeight(),s=e(".stopper").offset().top,i=n.offset();t.scroll((function(){var o=t.scrollTop();e(".template__item--js").each((function(t){e(this).position().top<=o+60&&(e(".equipmentNav li.active").removeClass("active"),e(".equipmentNav li").eq(t).addClass("active"))})),o>i.top?n.addClass("fixed"):n.removeClass("fixed"),o+a>s?n.css({top:-(o+a-s)}):n.css({top:"10px"})}))}}e(".accordion li").click((function(t){t.preventDefault(),e(".accordion li").removeClass("active"),e(this).addClass("active")})),e(".acc__title").click((function(t){t.preventDefault();var n=e(this).next();e(this).toggleClass("active"),e(this).parent().toggleClass("active"),n.slideToggle(),setTimeout((function(){s.a.refresh({offset:50})}),1e3)})),e(".acc .acc__card").length&&o(".acc .acc__card",9,".more--js",!0),e(".more__item").length&&o(".more__item",7,".moreP--js",!0),e(".filtr-item").length&&o(".filtr-item",7,".more--js",!0),e(".showMoreText-link").click((function(){e(this).parent().addClass("active"),e(this).hide()})),e(".abc--js").on("click","li.activated",(function(){r(e(this).data("title"),!e(this).hasClass("active"),!0,e(this))})),e(".search--js").on("click",(function(){var t=e(this).parent().find("input")[0].value;t&&r(t,t,!1)})),e(document).on("keypress",(function(t){if(e(".glossary-search").length&&13==t.which){var n=e(".glossary-search input")[0].value;if(!n)return;r(n,n,!1)}})),e(".input__file-js").change((function(){e(".input__file-js").each((function(){var t=this.value.replace(/.*\\(.*)/,"$1");t=t.replace(/.*\/(.*)/,"$1"),e(this).parent().parent().find(".input__name-js").val(t),e(".input__text-js").text(t),e(".input__file-close").addClass("show")}))})),e(".input__file-close").on("click",(function(){e(".input__file-js").val(""),e(".input__text-js").html('Прикрепить файл <span><i class="icon-dlink"></i></span>'),e(this).removeClass("show")}))}.call(this,n(1))},,function(e,t,n){"use strict";function a(e){return new Promise((function(t,n){var a=new XMLHttpRequest;a.open("GET",e.url,!0),a.responseType="blob",a.onload=function(){if(200===this.status){var n=URL.createObjectURL(this.response);t({vid:n,id:e.id})}},a.onerror=function(){n(arguments)},a.send()}))}n.r(t),n.d(t,"onloadVideoPromise",(function(){return a}))},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=Math.max(document.documentElement.clientWidth,window.innerWidth||0),s=a<768},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var a=n(10),s=new(n.n(a).a)("Modal",{attach:"#myModal",content:e("#projectsPopup"),animation:{open:"slide:right",close:"slide:right"},delayOpen:300,onOpen:function(){var e=this.content[0].children[0],t=e.getElementsByClassName("popup-tool")[0].getElementsByClassName("text__sm")[0],n=e.getElementsByClassName("popup-title")[0].getElementsByTagName("h5")[0],a=e.getElementsByClassName("popup-desc")[0].getElementsByClassName("text__sm")[0],s=e.getElementsByClassName("popup-cat")[0].getElementsByTagName("b")[0],i=e.getElementsByClassName("popup-image")[0].getElementsByTagName("img")[0],o=e.getElementsByClassName("btn")[0],r=e.dataset.tool,l=e.dataset.title,c=e.dataset.content,u=e.dataset.cat,d=e.dataset.image,p=e.dataset.link;r&&(t.textContent=r),l&&(n.textContent=l),c&&(a.textContent=c),u&&(s.textContent=u),d&&i.setAttribute("src",d),p&&o.setAttribute("href",p)}});e(".popup-close--js").click((function(){s.close()}))}).call(this,n(1))},,function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),a=n.n(t),s=n(6),i=n.n(s),o=n(7),r=(n(14),n(15),n(2)),l=Object(o.a)(),c=Math.max(document.documentElement.clientWidth,window.innerWidth||0);e(document).ready((function(){n(16),n(17),n(2),n(18),n(19),n(4),c>=1024&&Object(r.sticky)(),e("body").addClass(l.name),e("body").addClass(l.os),n(20),e(".glossary-results").length&&Object(r.getResults)()})),e(window).on("orientationchange",(function(){setTimeout((function(){Object(r.sticky)(),a.a.refresh({offset:50})}),800)})),e(window).on("load",(function(){e("body").css("overflow","hidden"),e(".index-slider").addClass("loading"),e("body").css("overflow","visible"),setTimeout((function(){e(".loader, .loader-inner").addClass("hidden"),a.a.init({offset:50}),window.scrollTo(0,0)}),800),c>767&&e(".rellax").length&&new i.a(".rellax",{speed:-2,center:!0,vertical:!0,horizontal:!1}),setTimeout((function(){e(".index-slider").removeClass("loading")}),1200)})),n(21)}.call(this,n(1))},,,,function(e,t,n){},function(e,t,n){(function(e){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0);e(".menu--js").click((function(){e("body").toggleClass("fixed"),e(this).find(".menu").toggleClass("open"),e(".navbar").toggleClass("open")})),e(document).click((function(n){if(t>=1024){var a=e(".navbar.open"),s=e(".menu");0===e(".menu--js").has(n.target).length&&0===a.has(n.target).length&&(e("body").removeClass("fixed"),a.removeClass("open"),s.removeClass("open"))}})),e(".page-menu__logo .card").bind("webkitAnimationEnd mozAnimationEnd animationend",(function(){e(this).removeClass("animated")})),e(".page-menu__logo .card").hover((function(){e(this).css({"animation-iteration-count":"infinite"}),e(this).addClass("animated")})),e(".page-menu__logo .card").mouseleave((function(){e(this).css({"animation-iteration-count":"1"})})),e(".anchor").on("click","a",(function(t){t.preventDefault(),e(".anchor a").removeClass("active");var n=e(this).attr("href"),a=e(n).offset().top;e(this).addClass("active"),e("body,html").animate({scrollTop:a-30},1e3)})),e(".page-footer-smallTitle--js").on("click","a",(function(n){t<768&&(n.preventDefault(),e(this).parent().next().slideToggle(500))})),e(window).scroll((function(){var t=e("header, .page-menu");e(window).scrollTop()>=1?t.addClass("scrolled"):t.removeClass("scrolled")}))}).call(this,n(1))},function(e,t,n){"use strict";n.r(t),function(e){var t,a=n(0),s=n.n(a);function i(){var t=e(".tabbed-content").find(".tabs");t.is(":visible")?t.find(".tab").on("click",(function(){var t=e(this).attr("href"),n=e(this).parents(".tabs"),a=n.find(".tab"),i=n.parents(".tabbed-content").find(".item");return a.removeClass("active"),i.removeClass("active"),e(this).addClass("active"),e(t).addClass("active"),setTimeout((function(){s.a.refresh({offset:50})}),600),!1})):e(".item").on("click",(function(){var t=e(this).parents(".tabbed-content"),n=e(this).attr("id"),a=t.find(".item");t.find(".tabs .tab").removeClass("active"),a.removeClass("active"),e(this).addClass("active"),t.find('.tabs a[href$="#'+n+'"]').addClass("active"),setTimeout((function(){s.a.refresh({offset:50})}),600)}))}i(),e(window).on("resize",(function(){clearTimeout(t),t=setTimeout((function(){i()}),250)})),e("ul.tabs__caption").on("click","li:not(.active)",(function(){e(".tabs__content .aos-init").removeClass("aos-animate"),e(this).addClass("active").siblings().removeClass("active").closest(".tabsSimple").find(".tabs__content").removeClass("active").eq(e(this).index()).addClass("active"),s.a.refresh({offset:50})}))}.call(this,n(1))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(3),a=n(4);if(e(".indexSlider").length>0){var s=[];e(".indexSlider").each((function(n){var a,i=e(this),o=e(this)[0],r=i.parent().find(".swiper-pagination")[0],l=i.parent().find(".swiper-prev")[0]||e(".swiper-prev-lab")[0],c=i.parent().find(".swiper-next")[0]||e(".swiper-next-lab")[0],u=i.data("effect"),d=i.data("duration"),p=i.data("adaptive"),f=i.data("autoheight"),m=i.data("column"),h={slidesPerView:p?"auto":1,spaceBetween:p?15:0,effect:u||"slide",simulateTouch:!1,loop:i.data("loop"),autoplay:{delay:6e3,disableOnInteraction:!0},autoHeight:!!f,pagination:{el:r,clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">0'+(e+1)+"</span>"}},slidesPerColumn:1,navigation:{prevEl:l,nextEl:c},breakpoints:{768:{spaceBetween:0,slidesPerView:1,slidesPerColumn:m||1}}};s[n]=new t.a(o,h),s[n].on("slideChange",(function(){a=this.previousIndex;var t=this.slides[a];e(t).addClass("swiper-slide-last"),setTimeout((function(){e(t).removeClass("swiper-slide-last")}),d||2e3)})),e(window).on("orientationchange",(function(){setTimeout((function(){s[n].update()}),800)}))}))}if(e(".main-slider").length>0){var i=Math.max(document.documentElement.clientWidth,window.innerWidth||0)>=768,o=[],r={loop:!0,speed:1200,autoplay:{delay:7e3},simulateTouch:!1,loopAdditionalSlides:10,grabCursor:!0,watchSlidesProgress:!0,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">0'+(e+1)+"</span>"}},on:{init:function(){this.autoplay.stop();var t=this.el.dataset.videoUrl,n=JSON.parse(t),s=e(".swiper-slide-active video")[0];if(i)for(var r=0;r<n.length;r++)Object(a.onloadVideoPromise)(n[r]).then((function(t){if(o.push(t),o.length===n.length&&s){var a=o.find((function(e){return 0===e.id}));s.src=a.vid,e(".swiper-slide-active").addClass("playing"),e(".swiper-slide-next").addClass("playing"),s.play()}}))},imagesReady:function(){this.el.classList.remove("loading"),this.autoplay.start()},slideChange:function(){var e=this.slides[this.activeIndex],t=e.querySelector("video"),n=e.dataset.swiperSlideIndex,a=o.find((function(e){return e.id===parseFloat(n)}));t&&i&&(t.src=a&&a.vid,e.classList.add("playing"),t.play())},slideChangeTransitionStart:function(){e(".caption").addClass("hide"),setTimeout((function(){e(".caption").removeClass("hide")}),1e3)},slideChangeTransitionEnd:function(){for(var t=this.slides[this.previousIndex],n=t.querySelector("video"),a=this.el.querySelectorAll(".caption"),s=0;s<a.length;++s)a[s].classList.remove("show");n&&(n.src="",t.classList.remove("playing")),e(".swiper-slide-active .caption").addClass("show")},progress:function(){for(var e=0;e<this.slides.length;e++){var t=this.slides[e].progress*(.5*this.width);this.slides[e].querySelector(".slide-bgimg").style.transform="translateX("+t+"px)"}},touchStart:function(){for(var e=0;e<this.slides.length;e++)this.slides[e].style.transition=""},setTransition:function(e){for(var t=0;t<this.slides.length;t++)this.slides[t].style.transition=e+"ms",this.slides[t].querySelector(".slide-bgimg").style.transition="all "+e+"ms ease 0s"}}};new t.a(".main-slider",r)}if(e(".aboutSlider").length>0){for(var l=[],c=0;c<e(".aboutSlider .swiper-slide").length;c++){var u=e(".aboutSlider .swiper-slide").eq(c).data("nav");l.push(u)}new t.a(".aboutSlider",{slidesPerView:1,loop:!0,pagination:{el:".swiper-pagination-about",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+l[e]+"</span>"}},navigation:{nextEl:".swiper-next-about",prevEl:".swiper-prev-about"}})}}.call(this,n(1))},function(e,t,n){"use strict";n.r(t),function(e){function a(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function s(e){return/^(\+7)[\s\-]\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(e)}function i(e,t){var n,i=e.attr("required"),o="checkbox"===e.attr("type"),r=t;return""==e.val()?(e.closest(".input").removeClass("input--filled"),n=!1):(e.closest(".input").addClass("input--filled"),n=!0),r&&("email"===e.prop("type")?a(r)?(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text(""),n=!0):(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Поле заполнено некорректно"),n=!1):"phone"===e.prop("name")?s(r)?(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text(""),n=!0):(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Поле заполнено некорректно"),n=!1):(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text(""),n=!0)),o&&i&&(e.prop("checked")?(e.closest(".checkbox").removeClass("error"),n=!0):(e.closest(".checkbox").addClass("error"),n=!1)),!r&&i&&(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Пожалуйста, заполните поле"),n=!1),"file"===e.prop("type")&&(n=!0),n}n.d(t,"validateEmail",(function(){return a})),n.d(t,"validatePhone",(function(){return s})),n.d(t,"validateField",(function(){return i})),e(document).on("blur",".input input, .input textarea",(function(t){i(e(this),t.target.value)})),e(document).on("change",".checkbox input",(function(t){i(e(this),t.target.value)})),e(".form--js").click((function(t){t.preventDefault();var n=[];if(e(this).closest("form").find("input").each((function(){var t=e(this)[0];n.push(i(e(this),t.value))})),n.includes(!1))return!1;var a=e(this).closest("form"),s=a.find("input[name=name]"),o=a.find("input[name=email]"),r=a.find("textarea[name=content]");e.ajax({type:"POST",url:"/local/templates/main/include/ajax/form/form.php",data:{name:s.val(),email:o.val(),message:r.val()},success:function(t){console.log(t),e(this).closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form--js-sign").click((function(t){t.preventDefault();var n=[];if(e(this).closest("form").find("input").each((function(){var t=e(this)[0];n.push(i(e(this),t.value))})),n.includes(!1))return!1;var a=e(this).closest("form"),s=a.find("input[name=name]"),o=a.find("input[name=email]");e.ajax({type:"POST",url:"/local/templates/main/include/ajax/form/sign.php",data:{name:s.val(),email:o.val()},success:function(t){console.log(t),e(this).closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form--js-vacancy").click((function(t){t.preventDefault();var n=[];if(e(this).closest("form").find("input").each((function(){var t=e(this)[0];n.push(i(e(this),t.value))})),n.includes(!1))return!1;var a=new FormData,s=e(this).closest("form"),o=s.find("input[name=name]").val(),r=s.find("input[name=email]").val(),l=s.find("textarea[name=content]").val(),c=s.find("input[name=file]")[0].files[0];a.set("name",o),a.append("email",r),a.append("message",l),a.append("file",c),e.ajax({type:"POST",url:"/local/templates/main/include/ajax/form/file.php",data:a,contentType:!1,processData:!1,success:function(t){console.log(t),e(this).closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form-back--js").click((function(){var t=e(this).closest("form");return t.trigger("reset"),t.find("input").parent().removeClass("input--filled"),e(this).closest(".form-send").hide().prev().css("opacity",1),!1}))}.call(this,n(1))},function(e,t){},function(e,t,n){"use strict";n.r(t),function(e){var t=n(2),a=n(9);function s(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var o,r,l=[],c=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],u={styles:[{url:"assets/images/icons/markerd.svg",width:53,height:63,lineHeight:40,fontFamily:"Montserrat",textSize:14,textColor:"white"}]},d=new google.maps.InfoWindow;function p(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=new google.maps.Marker({position:new google.maps.LatLng(parseFloat(e[0]),parseFloat(e[1])),icon:t||e[2],map:o}),r=n&&n[3]||e&&e[6];r&&i.addListener("click",(function(){var t=document.getElementById("projectsPopup");t.setAttribute("data-tool",n?n[0]:e[3]),t.setAttribute("data-title",n?n[1]:e[4]),t.setAttribute("data-content",n?n[2]:e[5]),t.setAttribute("data-cat",n?n[3]:e[6]),t.setAttribute("data-image",n?n[4]:e[7]),t.setAttribute("data-link",n?n[5]:e[8]),a.a.open()}));var c=n?n[0]:e[3],u=n?n[1]:e[4],p=n?n[2]:e[5];s?(d.setContent('<p><b class="text__xs">'.concat(c,"</b></p><p>").concat(u,'</p><a href="#" class="text--gray">').concat(p,"</a>")),i.addListener("click",(function(){d.open(o,i)})),google.maps.event.addListener(o,"click",(function(){d.close()}))):(d.setContent('<p><b class="text__xs">'.concat(c,"</b></p>").concat(u)),i.addListener("mouseover",(function(){d.open(o,i)})),i.addListener("mouseout",(function(){d.close()}))),l.push(i)}function f(){!function(e){for(var t=0;t<l.length;t++)l[t].setMap(e)}(null)}e((function(){var t,n,a;e("#googleMaps").length&&(t=document.getElementById("googleMaps"),n=t.dataset.locations,a={center:new google.maps.LatLng(59.91916157,30.3251195),zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,zoomControl:!0,scrollwheel:!1,styles:c},o=new google.maps.Map(t,a),JSON.parse(n).forEach((function(e){p(e)})),r=new MarkerClusterer(o,l,u)),e("#google").length&&function(){var e=document.getElementById("google"),t=e.dataset.locations,n={center:new google.maps.LatLng(59.91916157,30.3251195),zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,zoomControl:!0,scrollwheel:!1,styles:c};o=new google.maps.Map(e,n),JSON.parse(t).forEach((function(e){p(e,null,null,!0)})),r=new MarkerClusterer(o,l,u)}()})),e(".anchorMap").on("click","a",(function(t){t.preventDefault();var n=e(this).attr("href"),a=e(n).offset().top;!function(e){google.maps.event.trigger(l[e],"click")}(e(this).data("id")),e("body,html").animate({scrollTop:a},1e3)}));var m={service:{coordinates:null,icon:"",iconGroup:""},conference:{coordinates:null,icon:"",iconGroup:""},projects:{coordinates:null,icon:"",iconGroup:""}};e(".filters--js li").click((function(){var n,a=e(this).data("icon"),i=e(this).data("group"),c=e(this).data("coordinates"),d=e(this).data("filter"),h=e(this).data("popup"),v=e(".filtr-item");e(this).toggleClass("active"),f(),r.clearMarkers(),l=[],e(this).hasClass("active")?(m[d].coordinates=c,m[d].iconGroup=i,m[d].icon=a):(m[d].coordinates=null,m[d].iconGroup="",m[d].icon=""),(n=[]).concat.apply(n,s(Object.values(m))).forEach((function(e,t){e.coordinates&&e.coordinates.forEach((function(n){var a=!!n&&n.split(", ");a&&p(a,e.icon,h[t])}))})),e(".more--js").attr("data-filter",d),v.velocity({scaleX:0,scaleY:0},{display:"none",duration:300}),setTimeout((function(){Object(t.showMoreFunc)(".filtr-item",7,".more--js",!1,d)}),200),u.styles[0].url=i,r=new MarkerClusterer(o,l,u)}))}.call(this,n(1))}]);