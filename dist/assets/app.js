!function(e){function t(t){for(var i,o,r=t[0],l=t[1],c=t[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(f&&f(t);d.length;)d.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],i=!0,r=1;r<s.length;r++){var l=s[r];0!==n[l]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var i={},n={0:0},a=[];function o(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=i,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(s,i,function(t){return e[t]}.bind(null,i));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var f=l;a.push([5,1]),s()}([,,function(e,t,s){"use strict";s.r(t),function(e){s.d(t,"showMoreFunc",(function(){return a})),s.d(t,"sticky",(function(){return r}));var i=s(0),n=s.n(i);function a(t,s,i,a,o){var r=s,l=e(t).length,c=e(t+":lt("+r+")"),f=e(t+"[data-category="+o+"]:lt("+r+")"),u=e(t+"[data-category="+o+"]").length;e(t).hide(),o?(f.show(),r<u&&e(i).show()):c.show(),a&&e(i).click((function(){var s=e(this)[0].dataset.filter,i=e(t+"[data-category="+s+"]").length;s?(e(t+"[data-category="+s+"]:lt("+(r=r+5<=i?r+5:i)+")").slideDown(500),r>=i&&0!==r&&e(this).hide()):(e(t+":lt("+(r=r+5<=l?r+5:l)+")").slideDown(500),r>=l&&0!==r&&e(this).hide());setTimeout((function(){n.a.init({offset:50})}),500)}))}function o(t,s,i,o){var r=e(".glossary-list .acc__card"),l=0;s?(r.hide(),e(r).filter((function(s,n){var a=e(n)[0].dataset.title,o=i?a.startsWith(t):a.toLowerCase().includes(t.toLowerCase());return o&&l++,o})).slideDown(500),e(".abc--js li").removeClass("active"),i&&o.addClass("active"),e(".glossary-results").addClass("active"),e(".glossary-results-title span").text(l),e(".glossary-results-desc span").text(t),e(".more--js").hide()):i||(e(".glossary-results").removeClass("active"),e(".more--js").show(),a(".acc .acc__card",9,".more--js",!1)),setTimeout((function(){n.a.init({offset:50})}),500)}function r(){var t=e(window),s=e(".sidebar");if(s.length){var i=s.innerHeight(),n=e(".stopper").offset().top,a=s.offset();t.scroll((function(){var o=t.scrollTop();e(".template__item--js").each((function(t){e(this).position().top<=o+60&&(e(".equipmentNav li.active").removeClass("active"),e(".equipmentNav li").eq(t).addClass("active"))})),o>a.top?s.addClass("fixed"):s.removeClass("fixed"),o+i>n?s.css({top:-(o+i-n)}):s.css({top:"10px"})}))}}e(".accordion li").click((function(t){t.preventDefault(),e(".accordion li").removeClass("active"),e(this).addClass("active")})),e((function(){e(".acc__title").click((function(t){var s=e(this).closest(".acc__card").find(".acc__panel");e(this).closest(".acc").find(".acc__panel").not(s).slideUp(),e(this).hasClass("active")?(e(this).removeClass("active"),e(this).parent().removeClass("active")):(e(this).closest(".acc").find(".acc__title.active").removeClass("active").parent().removeClass("active"),e(this).addClass("active"),e(this).parent().addClass("active")),s.stop(!1,!0).slideToggle(),setTimeout((function(){n.a.init({offset:50})}),500),t.preventDefault()}))})),e(".acc .acc__card").length&&a(".acc .acc__card",9,".more--js",!0),e(".publications-item").length&&a(".publications-item",7,".moreP--js",!0),e(".filtr-item").length&&a(".filtr-item",7,".more--js",!0),e(".showMoreText-link").click((function(){e(this).parent().addClass("active"),e(this).hide()})),e(".abc--js li").click((function(){o(e(this).data("title"),!e(this).hasClass("active"),!0,e(this))})),e(".search--js").click((function(){var t=e(this).parent().find("input")[0].value;o(t,t,!1)})),e(document).on("keypress",(function(t){if(e(".glossary-search").length&&13==t.which){var s=e(".glossary-search input")[0].value;o(s,s,!1)}})),e(".input__file-js").change((function(){e(".input__file-js").each((function(){var t=this.value.replace(/.*\\(.*)/,"$1");t=t.replace(/.*\/(.*)/,"$1"),e(this).parent().parent().find(".input__name-js").val(t),e(".input__text-js").text(t)}))})),e(".form--js").click((function(){return e(this).closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex"),!1})),e(".form-back--js").click((function(){return e(this).closest(".form-send").hide().prev().css("opacity",1),!1}))}.call(this,s(1))},function(e,t,s){"use strict";s.d(t,"b",(function(){return n})),s.d(t,"a",(function(){return a}));var i=Math.max(document.documentElement.clientWidth,window.innerWidth||0),n=i<768,a=i<1024},,function(e,t,s){"use strict";s.r(t),function(e){var t=s(0),i=s.n(t),n=(s(6),s(2)),a=s(3);e(document).ready((function(){s(7),s(8),s(2),s(9),s(10),s(11),s(12),a.a||Object(n.sticky)(),s(13)})),e(window).on("orientationchange",(function(){setTimeout((function(){Object(n.sticky)()}),500)})),e(window).on("load",(function(){e("body").css("overflow","hidden"),e(".loaderInner").length?(e("body").css("overflow","visible"),e(".loader").addClass("hideIt"),setTimeout((function(){i.a.init({offset:50})}),500),window.scrollTo(0,0)):(e(".loader-hide").addClass("showIt"),e(".index-slider").addClass("loading"),setTimeout((function(){e("body").css("overflow","visible"),e(".loader").addClass("hidden"),setTimeout((function(){i.a.init({offset:50})}),500),setTimeout((function(){e(".index-slider").removeClass("loading")}),1500),window.scrollTo(0,0)}),1600))})),s(14)}.call(this,s(1))},function(e,t,s){},function(e,t,s){"use strict";s.r(t),function(e){var t=s(3);e(".menu--js").click((function(){e(this).find(".menu").toggleClass("open"),e(".navbar").toggleClass("open")})),e(".anchor").on("click","a",(function(t){t.preventDefault(),e(".anchor a").removeClass("active");var s=e(this).attr("href"),i=e(s).offset().top;e(this).addClass("active"),e("body,html").animate({scrollTop:i-30},1e3)})),e(".page-footer-smallTitle--js").on("click","a",(function(s){t.b&&(s.preventDefault(),e(this).parent().next().slideToggle(500))})),e(window).scroll((function(){var t=e("header, .page-menu");e(window).scrollTop()>=1?t.addClass("scrolled"):t.removeClass("scrolled")}))}.call(this,s(1))},function(e,t,s){"use strict";s.r(t),function(e){var t,i=s(0),n=s.n(i);function a(){var t=e(".tabbed-content").find(".tabs");t.is(":visible")?t.find(".tab").on("click",(function(t){t.preventDefault();var s=e(this).attr("href"),i=e(this).parents(".tabs"),a=i.find(".tab"),o=i.parents(".tabbed-content").find(".item");a.removeClass("active"),o.removeClass("active"),e(this).addClass("active"),e(s).addClass("active"),e("html, body").animate({scrollTop:e(href).offset().top-50},500),n.a.init({offset:50})})):e(".item").on("click",(function(){var t=e(this).parents(".tabbed-content"),s=e(this).attr("id"),i=t.find(".item");t.find(".tabs .tab").removeClass("active"),i.removeClass("active"),e(this).addClass("active"),t.find('.tabs a[href$="#'+s+'"]').addClass("active")}))}a(),e(window).on("resize",(function(){clearTimeout(t),t=setTimeout((function(){a()}),250)})),e("ul.tabs__caption").on("click","li:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest(".tabsSimple").find(".tabs__content").removeClass("active").eq(e(this).index()).addClass("active"),n.a.init({offset:50})}))}.call(this,s(1))},function(e,t,s){"use strict";s.r(t),function(e){var t=s(4);if(e(".indexSlider").length>0){var i=[];e(".indexSlider").each((function(s){var n,a=e(this),o=a.parent().find(".swiper-pagination")[0],r=a.parent().find(".swiper-prev")[0]||e(".swiper-prev-lab")[0],l=a.parent().find(".swiper-next")[0]||e(".swiper-next-lab")[0],c=a.data("effect"),f=a.data("adaptive"),u=a.data("autoheight");i[s]=new t.a(e(this)[0],{slidesPerView:f?"auto":1,spaceBetween:f?15:0,effect:c||"slide",autoHeight:!!u,pagination:{el:o,clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">0'+(e+1)+"</span>"}},navigation:{prevEl:r,nextEl:l},breakpoints:{768:{spaceBetween:0,slidesPerView:1}}}),i[s].on("slideChange",(function(){n=this.previousIndex;var t=this.slides[n];e(t).addClass("swiper-slide-last"),setTimeout((function(){e(t).removeClass("swiper-slide-last")}),2e3)}))}))}if(e(".aboutSlider").length>0){for(var n=[],a=0;a<e(".aboutSlider .swiper-slide").length;a++){var o=e(".aboutSlider .swiper-slide").eq(a).data("nav");n.push(o)}new t.a(".aboutSlider",{slidesPerView:1,pagination:{el:".swiper-pagination-about",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+n[e]+"</span>"}},navigation:{nextEl:".swiper-next-about",prevEl:".swiper-prev-about"}})}}.call(this,s(1))},function(e,t,s){"use strict";s.r(t),function(e){function i(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function n(e){return/^(\+7)[\s\-]\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(e)}s.d(t,"validateEmail",(function(){return i})),s.d(t,"validatePhone",(function(){return n})),e(document).on("blur",".input input, .textarea textarea",(function(t){!function(e,t){var s=e.attr("required"),a=t.target.value;""==e.val()?e.closest(".input").removeClass("input--filled"):e.closest(".input").addClass("input--filled"),a&&("email"===e.prop("type")?i(a)?(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text("")):(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Поле заполнено некорректно")):"phone"===e.prop("name")?n(a)?(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text("")):(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Поле заполнено некорректно")):(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text(""))),!a&&s&&(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Пожалуйста, заполните поле"))}(e(this),t)}))}.call(this,s(1))},function(e,t,s){(function(e){function t(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t.parent,this.child=t.child,this.duration=.9,this.way=90,this.hook=t.hook||.9,this.offset=this.parent.hasClass("size-box")?"-50%":"0"}var s,i,n;return s=e,(i=[{key:"update",value:function(e){this.startPos=this.parent.offset().top*this.hook,this.endPos=this.startPos+window.innerHeight*this.duration,e-this.startPos>=0&&this.endPos-e>=0?(this.currentOffset=this.way/(this.endPos-this.startPos)*(e-this.startPos),this.child.css("transform","translate3d("+this.offset+","+this.currentOffset+"px,0)")):e-this.startPos<0?this.child.css("transform","translate3d("+this.offset+",0,0)"):this.endPos-e<0&&this.child.css("transform","translate3d("+this.offset+","+this.way+"px,0)")}}])&&t(s.prototype,i),n&&t(s,n),e}(),i=[];e(".parallax-box").each((function(){i.push(new s({parent:e(this),child:e(this).find(".parallax-item"),hook:e(this).attr("data-hook")}))})),e(window).scroll((function(){var t=e(document).scrollTop();i.forEach((function(e){e.update(t)}))}))}).call(this,s(1))},function(e,t,s){var i,n,a,o=document.getElementById("video");o&&(i=o,n="assets/images/video/video.mp4",(a=new XMLHttpRequest).open("GET",n,!0),a.responseType="blob",a.onload=function(){if(200===this.status){var e=URL.createObjectURL(this.response);i.src=e}},a.onerror=function(){console.log("err",arguments)},a.onprogress=function(e){if(e.lengthComputable){var t=(e.loaded/e.total*100|0)+"%";console.log("progress: ",t)}},a.send())},function(e,t){},function(e,t,s){"use strict";s.r(t),function(e){var t,i,n=s(2),a=[],o=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],r="assets/images/icons/bubble.svg",l="assets/images/icons/bubbleb.svg",c="assets/images/icons/bubblel.svg",f=[[59.91701049,30.31812429,l],[59.91916157,30.3251195,l],[59.91756978,30.31812429,c],[59.92049517,30.33250093,c],[59.91701049,30.3276515,c],[59.92256978,30.31812429,r],[59.92349517,30.33250093,r],[59.92401049,30.3276515,r]],u={styles:[{url:"assets/images/icons/marker.svg",width:53,height:63,lineHeight:40,fontFamily:"Montserrat",textSize:14,textColor:"white"}]};function d(e,s){var i=new google.maps.Marker({position:new google.maps.LatLng(parseFloat(e[0]),parseFloat(e[1])),icon:s||e[2],map:t});a.push(i)}function p(){!function(e){for(var t=0;t<a.length;t++)a[t].setMap(e)}(null)}e((function(){var s;e("#googleMaps").length&&(s={center:new google.maps.LatLng(59.91916157,30.3251195),zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,zoomControl:!0,scrollwheel:!1,styles:o},t=new google.maps.Map(document.getElementById("googleMaps"),s),f.forEach((function(e){d(e)})),i=new MarkerClusterer(t,a,u))})),e(document).ready((function(){e(".filters--js li").click((function(){var s=e(this).data("icon"),o=e(this).data("group"),r=e(this).data("coordinates"),l=e(this).data("filter"),c=e(".filtr-item"),f=e(".filtr-item[data-category=".concat(l,"]"));e(this).hasClass("active")||(e(".filters--js li").removeClass("active"),e(this).addClass("active"),p(),i.clearMarkers(),a=[],r.forEach((function(e){d(e.split(", "),s)})),e(".more--js").attr("data-filter",l),c.slideUp(500),f.slideDown(500),setTimeout((function(){Object(n.showMoreFunc)(".filtr-item",7,".more--js",!1,l)}),600),u.styles[0].url=o,i=new MarkerClusterer(t,a,u))}))}))}.call(this,s(1))}]);