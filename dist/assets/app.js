!function(e){function t(t){for(var a,i,l=t[0],r=t[1],c=t[2],d=0,f=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,l=1;l<s.length;l++){var r=s[l];0!==n[r]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},n={0:0},o=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=r;o.push([10,1]),s()}([,,function(e,t,s){"use strict";s.r(t),function(e){s.d(t,"showMoreFunc",(function(){return i})),s.d(t,"sticky",(function(){return r}));var a=s(0),n=s.n(a),o=s(7);function i(t,s,a,o,i){var l=s,r=e(t).length,c=e(t+":lt("+l+")"),u=e(t+"[data-category="+i+"]:lt("+l+")"),d=e(t+"[data-category="+i+"]").length;e(t).velocity({scaleX:0,scaleY:0},{display:"none",duration:0}),i?(u.velocity({scaleX:1,scaleY:1},{display:"block",duration:300}),l<d&&e(a).show()):c.velocity({scaleX:1,scaleY:1},{display:"block",duration:0}),o&&e(a).click((function(){var s=e(this)[0].dataset.filter,a=e(t+"[data-category="+s+"]").length;s?(e(t+"[data-category="+s+"]:lt("+(l=l+5<=a?l+5:a)+")").velocity({scaleX:1,scaleY:1},{display:"block",duration:300}),l>=a&&0!==l&&e(this).hide()):(e(t+":lt("+(l=l+5<=r?l+5:r)+")").velocity({scaleX:1,scaleY:1},{display:"block",duration:300}),l>=r&&0!==l&&e(this).hide());setTimeout((function(){n.a.refresh({offset:50})}),600)}))}function l(t,s,a,l){var c=e(".glossary-list .acc__card"),u=0;if(s?(c.velocity({scaleX:0,scaleY:0},{display:"none",duration:300}),e(c).filter((function(s,n){var o=e(n)[0].dataset.title,i=a?o.startsWith(t):o.toLowerCase().includes(t.toLowerCase());return i&&u++,i})).velocity({scaleX:1,scaleY:1},{display:"block",duration:300,delay:200}),e(".abc--js li").removeClass("active"),a&&l.addClass("active"),e(".glossary-results").hasClass("active")||e(".glossary-results").addClass("active").velocity("slideDown",{duration:500,delay:400}),e(".glossary-results-title span").text(u),e(".glossary-results-desc span").text(t),e(".more--js").hide()):a||(e(".glossary-results").removeClass("active").velocity("slideUp",{duration:500}),e(".more--js").show(),i(".acc .acc__card",9,".more--js",!1)),o.a){var d=e(".glossary-results").offset().top;e("body,html").animate({scrollTop:d-70},1e3)}setTimeout((function(){var t=e(".glossary-results").offset().top;e("body,html").animate({scrollTop:t-70},1e3),r(),n.a.refresh({offset:50})}),700)}function r(){var t=e(window),s=e(".sidebar");if(s.length){var a=s.innerHeight(),n=e(".stopper").offset().top,o=s.offset();t.scroll((function(){var i=t.scrollTop();e(".template__item--js").each((function(t){e(this).position().top<=i+60&&(e(".equipmentNav li.active").removeClass("active"),e(".equipmentNav li").eq(t).addClass("active"))})),i>o.top?s.addClass("fixed"):s.removeClass("fixed"),i+a>n?s.css({top:-(i+a-n)}):s.css({top:"10px"})}))}}e(".accordion li").click((function(t){t.preventDefault(),e(".accordion li").removeClass("active"),e(this).addClass("active")})),e(".acc__title").click((function(t){t.preventDefault();var s=e(this).next();e(this).toggleClass("active"),e(this).parent().toggleClass("active"),s.slideToggle(),setTimeout((function(){n.a.refresh({offset:50})}),1e3)})),e(".acc .acc__card").length&&i(".acc .acc__card",9,".more--js",!0),e(".more__item").length&&i(".more__item",7,".moreP--js",!0),e(".filtr-item").length&&i(".filtr-item",7,".more--js",!0),e(".showMoreText-link").click((function(){e(this).parent().addClass("active"),e(this).hide()})),e(".abc--js li").click((function(){l(e(this).data("title"),!e(this).hasClass("active"),!0,e(this))})),e(".search--js").click((function(){var t=e(this).parent().find("input")[0].value;t&&l(t,t,!1)})),e(document).on("keypress",(function(t){if(e(".glossary-search").length&&13==t.which){var s=e(".glossary-search input")[0].value;if(!s)return;l(s,s,!1)}})),e(".input__file-js").change((function(){e(".input__file-js").each((function(){var t=this.value.replace(/.*\\(.*)/,"$1");t=t.replace(/.*\/(.*)/,"$1"),e(this).parent().parent().find(".input__name-js").val(t),e(".input__text-js").text(t)}))}))}.call(this,s(1))},,,,,function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var a=Math.max(document.documentElement.clientWidth,window.innerWidth||0),n=a<768},function(e,t,s){"use strict";(function(e){s.d(t,"a",(function(){return n}));var a=s(9),n=new(s.n(a).a)("Modal",{attach:"#myModal",content:e("#projectsPopup"),animation:{open:"slide:right",close:"slide:right"},delayOpen:300,onOpen:function(){var e=this.content[0].children[0],t=e.getElementsByClassName("popup-tool")[0].getElementsByClassName("text__sm")[0],s=e.getElementsByClassName("popup-title")[0].getElementsByTagName("h5")[0],a=e.getElementsByClassName("popup-desc")[0].getElementsByClassName("text__sm")[0],n=e.getElementsByClassName("popup-cat")[0].getElementsByTagName("b")[0],o=e.getElementsByClassName("popup-image")[0].getElementsByTagName("img")[0],i=e.getElementsByClassName("btn")[0],l=e.dataset.tool,r=e.dataset.title,c=e.dataset.content,u=e.dataset.cat,d=e.dataset.image,f=e.dataset.link;l&&(t.textContent=l),r&&(s.textContent=r),c&&(a.textContent=c),u&&(n.textContent=u),d&&o.setAttribute("src",d),f&&i.setAttribute("href",f)}});e(".popup-close--js").click((function(){n.close()}))}).call(this,s(1))},,function(e,t,s){"use strict";s.r(t),function(e){var t=s(0),a=s.n(t),n=s(3),o=s.n(n),i=s(6),l=(s(13),s(14),s(2)),r=Object(i.a)(),c=Math.max(document.documentElement.clientWidth,window.innerWidth||0);e(document).ready((function(){s(15),s(16),s(2),s(17),s(18),s(19),c>=1024&&Object(l.sticky)(),e("body").addClass(r.name),e("body").addClass(r.os),s(20)})),e(window).on("orientationchange",(function(){setTimeout((function(){Object(l.sticky)(),a.a.refresh({offset:50})}),800)})),e(window).on("load",(function(){e("body").css("overflow","hidden"),e(".loaderInner").length?(e("body").css("overflow","visible"),e(".loader").addClass("hideIt"),setTimeout((function(){a.a.init({offset:50}),window.scrollTo(0,0)}),500),c>767&&e(".rellax").length&&new o.a(".rellax",{speed:-2,center:!0,vertical:!0,horizontal:!1})):(e(".loader-hide").addClass("showIt"),e(".index-slider").addClass("loading"),setTimeout((function(){e("body").css("overflow","visible"),e(".loader, .loader-inner").addClass("hidden"),setTimeout((function(){a.a.init({offset:50})}),500),c>767&&e(".rellax").length&&new o.a(".rellax",{speed:-2,center:!0,vertical:!0,horizontal:!1}),setTimeout((function(){e(".index-slider").removeClass("loading")}),1500),window.scrollTo(0,0)}),1700))})),s(21)}.call(this,s(1))},,,,function(e,t,s){},function(e,t,s){(function(e){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0);e(".menu--js").click((function(){e("body").toggleClass("fixed"),e(this).find(".menu").toggleClass("open"),e(".navbar").toggleClass("open")})),e(document).click((function(s){if(t>=1024){var a=e(".navbar.open"),n=e(".menu");0===e(".menu--js").has(s.target).length&&0===a.has(s.target).length&&(e("body").removeClass("fixed"),a.removeClass("open"),n.removeClass("open"))}})),e(".anchor").on("click","a",(function(t){t.preventDefault(),e(".anchor a").removeClass("active");var s=e(this).attr("href"),a=e(s).offset().top;e(this).addClass("active"),e("body,html").animate({scrollTop:a-30},1e3)})),e(".page-footer-smallTitle--js").on("click","a",(function(s){t<768&&(s.preventDefault(),e(this).parent().next().slideToggle(500))})),e(window).scroll((function(){var t=e("header, .page-menu");e(window).scrollTop()>=1?t.addClass("scrolled"):t.removeClass("scrolled")}))}).call(this,s(1))},function(e,t,s){"use strict";s.r(t),function(e){var t,a=s(0),n=s.n(a);function o(){var t=e(".tabbed-content").find(".tabs");t.is(":visible")?t.find(".tab").on("click",(function(){var t=e(this).attr("href"),s=e(this).parents(".tabs"),a=s.find(".tab"),o=s.parents(".tabbed-content").find(".item");return a.removeClass("active"),o.removeClass("active"),e(this).addClass("active"),e(t).addClass("active"),setTimeout((function(){n.a.refresh({offset:50})}),600),!1})):e(".item").on("click",(function(){var t=e(this).parents(".tabbed-content"),s=e(this).attr("id"),a=t.find(".item");t.find(".tabs .tab").removeClass("active"),a.removeClass("active"),e(this).addClass("active"),t.find('.tabs a[href$="#'+s+'"]').addClass("active"),setTimeout((function(){n.a.refresh({offset:50})}),600)}))}o(),e(window).on("resize",(function(){clearTimeout(t),t=setTimeout((function(){o()}),250)})),e("ul.tabs__caption").on("click","li:not(.active)",(function(){e(".tabs__content .aos-init").removeClass("aos-animate"),e(this).addClass("active").siblings().removeClass("active").closest(".tabsSimple").find(".tabs__content").removeClass("active").eq(e(this).index()).addClass("active"),n.a.refresh({offset:50})}))}.call(this,s(1))},function(e,t,s){"use strict";s.r(t),function(e){var t=s(4);if(e(".indexSlider").length>0){var a=[];e(".indexSlider").each((function(s){var n,o=e(this),i=e(this)[0],l=o.parent().find(".swiper-pagination")[0],r=o.parent().find(".swiper-prev")[0]||e(".swiper-prev-lab")[0],c=o.parent().find(".swiper-next")[0]||e(".swiper-next-lab")[0],u=o.data("effect"),d=o.data("duration"),f=o.data("adaptive"),p=o.data("autoheight"),m=o.data("column"),h={slidesPerView:f?"auto":1,spaceBetween:f?15:0,effect:u||"slide",simulateTouch:!1,loop:o.data("loop")||!0,autoplay:{delay:1e4},autoHeight:!!p,pagination:{el:l,clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">0'+(e+1)+"</span>"}},slidesPerColumn:1,navigation:{prevEl:r,nextEl:c},breakpoints:{768:{spaceBetween:0,slidesPerView:1,slidesPerColumn:m||1}}};a[s]=new t.a(i,h),a[s].on("slideChange",(function(){n=this.previousIndex;var t=this.slides[n];e(t).addClass("swiper-slide-last"),setTimeout((function(){e(t).removeClass("swiper-slide-last")}),d||2e3)})),e(window).on("orientationchange",(function(){setTimeout((function(){a[s].update()}),800)}))}))}if(e(".aboutSlider").length>0){for(var n=[],o=0;o<e(".aboutSlider .swiper-slide").length;o++){var i=e(".aboutSlider .swiper-slide").eq(o).data("nav");n.push(i)}new t.a(".aboutSlider",{slidesPerView:1,loop:!0,pagination:{el:".swiper-pagination-about",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+n[e]+"</span>"}},navigation:{nextEl:".swiper-next-about",prevEl:".swiper-prev-about"}})}}.call(this,s(1))},function(e,t,s){"use strict";s.r(t),function(e){function a(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function n(e){return/^(\+7)[\s\-]\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(e)}function o(e,t){var s,o=e.attr("required"),i="checkbox"===e.attr("type"),l=t;return""==e.val()?(e.closest(".input").removeClass("input--filled"),s=!1):(e.closest(".input").addClass("input--filled"),s=!0),l&&("email"===e.prop("type")?a(l)?(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text(""),s=!0):(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Поле заполнено некорректно"),s=!1):"phone"===e.prop("name")?n(l)?(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text(""),s=!0):(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Поле заполнено некорректно"),s=!1):(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text(""),s=!0)),i&&o&&(e.prop("checked")?(e.closest(".checkbox").removeClass("error"),s=!0):(e.closest(".checkbox").addClass("error"),s=!1)),!l&&o&&(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Пожалуйста, заполните поле"),s=!1),s}s.d(t,"validateEmail",(function(){return a})),s.d(t,"validatePhone",(function(){return n})),e(document).on("blur",".input input, .input textarea",(function(t){o(e(this),t.target.value)})),e(document).on("change",".checkbox input",(function(t){o(e(this),t.target.value)})),e(".form--js").click((function(t){t.preventDefault();var s=[];if(e(this).closest("form").find("input").each((function(){var t=e(this)[0];s.push(o(e(this),t.value))})),s.includes(!1))return!1;e(this).closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")})),e(".form-back--js").click((function(){var t=e(this).closest("form");return t.trigger("reset"),t.find("input").parent().removeClass("input--filled"),e(this).closest(".form-send").hide().prev().css("opacity",1),!1}))}.call(this,s(1))},function(e,t,s){var a,n,o,i=document.getElementById("video");i&&(a=i,n="assets/images/video/video.mp4",(o=new XMLHttpRequest).open("GET",n,!0),o.responseType="blob",o.onload=function(){if(200===this.status){var e=URL.createObjectURL(this.response);a.src=e}},o.onerror=function(){console.log("err",arguments)},o.onprogress=function(e){if(e.lengthComputable){var t=(e.loaded/e.total*100|0)+"%";console.log("progress: ",t)}},o.send(),i.play())},function(e,t){},function(e,t,s){"use strict";s.r(t),function(e){var t,a,n=s(2),o=s(8),i=[],l=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],r={styles:[{url:"assets/images/icons/marker.svg",width:53,height:63,lineHeight:40,fontFamily:"Montserrat",textSize:14,textColor:"white"}]};function c(e,s,a){var n=new google.maps.Marker({position:new google.maps.LatLng(parseFloat(e[0]),parseFloat(e[1])),icon:s||e[2],map:t});n.addListener("click",(function(){var t=document.getElementById("projectsPopup");t.setAttribute("data-tool",a?a[0]:e[3]),t.setAttribute("data-title",a?a[1]:e[4]),t.setAttribute("data-content",a?a[2]:e[5]),t.setAttribute("data-cat",a?a[3]:e[6]),t.setAttribute("data-image",a?a[4]:e[7]),t.setAttribute("data-link",a?a[5]:e[8]),o.a.open()})),i.push(n)}function u(){!function(e){for(var t=0;t<i.length;t++)i[t].setMap(e)}(null)}e((function(){var s,n,o;e("#googleMaps").length&&(s=document.getElementById("googleMaps"),n=s.dataset.locations,o={center:new google.maps.LatLng(59.91916157,30.3251195),zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,zoomControl:!0,scrollwheel:!1,styles:l},t=new google.maps.Map(s,o),JSON.parse(n).forEach((function(e){c(e)})),a=new MarkerClusterer(t,i,r))})),e(".filters--js li").click((function(){var s=e(this).data("icon"),o=e(this).data("group"),l=e(this).data("coordinates"),d=e(this).data("filter"),f=e(this).data("popup"),p=e(".filtr-item");e(".filtr-item[data-category=".concat(d,"]"));e(this).hasClass("active")||(e(".filters--js li").removeClass("active"),e(this).addClass("active"),u(),a.clearMarkers(),i=[],l.forEach((function(e,t){c(e.split(", "),s,f[t])})),e(".more--js").attr("data-filter",d),p.velocity({scaleX:0,scaleY:0},{display:"none",duration:300}),setTimeout((function(){Object(n.showMoreFunc)(".filtr-item",7,".more--js",!1,d)}),200),r.styles[0].url=o,a=new MarkerClusterer(t,i,r))}))}.call(this,s(1))}]);