!function(e){function t(t){for(var a,o,r=t[0],l=t[1],c=t[2],d=0,f=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(u&&u(t);f.length;)f.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,r=1;r<s.length;r++){var l=s[r];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={0:0},i=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;i.push([7,1]),s()}([,,function(e,t,s){"use strict";s.d(t,"b",(function(){return n})),s.d(t,"a",(function(){return i}));var a=Math.max(document.documentElement.clientWidth,window.innerWidth||0),n=a<768,i=a<1024},function(e,t,s){"use strict";s.r(t),function(e){s.d(t,"showMoreFunc",(function(){return o})),s.d(t,"sticky",(function(){return l}));var a=s(1),n=s.n(a),i=s(2);function o(t,s,a,i,o){var r=s,l=e(t).length,c=e(t+":lt("+r+")"),u=e(t+"[data-category="+o+"]:lt("+r+")"),d=e(t+"[data-category="+o+"]").length;e(t).hide(),o?(u.show(),r<d&&e(a).show()):c.show(),i&&e(a).click((function(){var s=e(this)[0].dataset.filter,a=e(t+"[data-category="+s+"]").length;s?(e(t+"[data-category="+s+"]:lt("+(r=r+5<=a?r+5:a)+")").slideDown(500),r>=a&&0!==r&&e(this).hide()):(e(t+":lt("+(r=r+5<=l?r+5:l)+")").slideDown(500),r>=l&&0!==r&&e(this).hide());setTimeout((function(){n.a.init({offset:50})}),500)}))}function r(t,s,a,r){var l=e(".glossary-list .acc__card"),c=0;if(s?(l.hide(),e(l).filter((function(s,n){var i=e(n)[0].dataset.title,o=a?i.startsWith(t):i.toLowerCase().includes(t.toLowerCase());return o&&c++,o})).slideDown(500),a&&r.addClass("active"),e(".abc--js li").removeClass("active"),e(".glossary-results").addClass("active"),e(".glossary-results-title span").text(c),e(".glossary-results-desc span").text(t),e(".more--js").hide()):a||(e(".glossary-results").removeClass("active"),e(".more--js").show(),o(".acc .acc__card",9,".more--js",!1)),i.b){var u=e(".glossary-results").offset().top;e("body,html").animate({scrollTop:u-70},1e3)}setTimeout((function(){n.a.init({offset:50})}),500)}function l(){var t=e(window),s=e(".sidebar");if(s.length){var a=s.innerHeight(),n=e(".stopper").offset().top,i=s.offset();t.scroll((function(){var o=t.scrollTop();e(".template__item--js").each((function(t){e(this).position().top<=o+60&&(e(".equipmentNav li.active").removeClass("active"),e(".equipmentNav li").eq(t).addClass("active"))})),o>i.top?s.addClass("fixed"):s.removeClass("fixed"),o+a>n?s.css({top:-(o+a-n)}):s.css({top:"10px"})}))}}e(".accordion li").click((function(t){t.preventDefault(),e(".accordion li").removeClass("active"),e(this).addClass("active")})),e(".acc__title").click((function(t){t.preventDefault();var s=e(this).next();e(this).hasClass("active")?(e(this).removeClass("active"),e(this).parent().removeClass("active")):(e(".acc__panel").slideUp(800),e(this).closest(".acc").find(".acc__title.active").removeClass("active").parent().removeClass("active"),e(this).addClass("active"),e(this).parent().addClass("active")),s.slideToggle(),setTimeout((function(){n.a.init({offset:50})}),1e3)})),e(".acc .acc__card").length&&o(".acc .acc__card",9,".more--js",!0),e(".publications-item").length&&o(".publications-item",7,".moreP--js",!0),e(".filtr-item").length&&o(".filtr-item",7,".more--js",!0),e(".showMoreText-link").click((function(){e(this).parent().addClass("active"),e(this).hide()})),e(".abc--js li").click((function(){r(e(this).data("title"),!e(this).hasClass("active"),!0,e(this))})),e(".search--js").click((function(){var t=e(this).parent().find("input")[0].value;t&&r(t,t,!1)})),e(document).on("keypress",(function(t){if(e(".glossary-search").length&&13==t.which){var s=e(".glossary-search input")[0].value;if(!s)return;r(s,s,!1)}})),e(".input__file-js").change((function(){e(".input__file-js").each((function(){var t=this.value.replace(/.*\\(.*)/,"$1");t=t.replace(/.*\/(.*)/,"$1"),e(this).parent().parent().find(".input__name-js").val(t),e(".input__text-js").text(t)}))}))}.call(this,s(0))},,function(e,t,s){"use strict";(function(e){s.d(t,"a",(function(){return n}));var a=s(6),n=new(s.n(a).a)("Modal",{attach:"#myModal",content:e("#projectsPopup"),animation:{open:"slide:right",close:"slide:right"},onOpen:function(){var e=this.content[0].children[0],t=e.getElementsByClassName("popup-tool")[0].getElementsByClassName("text__sm")[0],s=e.getElementsByClassName("popup-title")[0].getElementsByTagName("h5")[0],a=e.getElementsByClassName("popup-desc")[0].getElementsByClassName("text__sm")[0],n=e.getElementsByClassName("popup-cat")[0].getElementsByTagName("b")[0],i=e.getElementsByClassName("popup-image")[0].getElementsByTagName("img")[0],o=e.getElementsByClassName("btn--primary")[0],r=e.dataset.tool,l=e.dataset.title,c=e.dataset.content,u=e.dataset.cat,d=e.dataset.image,f=e.dataset.link;r&&(t.textContent=r),l&&(s.textContent=l),c&&(a.textContent=c),u&&(n.textContent=u),d&&i.setAttribute("src",d),f&&o.setAttribute("href",f)}})}).call(this,s(0))},,function(e,t,s){"use strict";s.r(t),function(e){var t=s(1),a=s.n(t),n=(s(8),s(3)),i=s(2);e(document).ready((function(){s(9),s(10),s(3),s(11),s(12),s(13),s(14),i.a||Object(n.sticky)(),s(15)})),e(window).on("orientationchange",(function(){setTimeout((function(){Object(n.sticky)(),a.a.init({offset:50})}),800)})),e(window).on("load",(function(){e("body").css("overflow","hidden"),e(".loaderInner").length?(e("body").css("overflow","visible"),e(".loader").addClass("hideIt"),setTimeout((function(){a.a.init({offset:50})}),500),window.scrollTo(0,0)):(e(".loader-hide").addClass("showIt"),e(".index-slider").addClass("loading"),setTimeout((function(){e("body").css("overflow","visible"),e(".loader").addClass("hidden"),setTimeout((function(){a.a.init({offset:50})}),500),setTimeout((function(){e(".index-slider").removeClass("loading")}),1500),window.scrollTo(0,0)}),1600))})),s(16)}.call(this,s(0))},function(e,t,s){},function(e,t,s){"use strict";s.r(t),function(e){var t=s(2);e(".menu--js").click((function(){e("body").toggleClass("fixed"),e(this).find(".menu").toggleClass("open"),e(".navbar").toggleClass("open")})),e(document).click((function(s){var a=e(".navbar.open"),n=e(".menu"),i=e(".menu--js");t.a||0===i.has(s.target).length&&0===a.has(s.target).length&&(e("body").removeClass("fixed"),a.removeClass("open"),n.removeClass("open"))})),e(".anchor").on("click","a",(function(t){t.preventDefault(),e(".anchor a").removeClass("active");var s=e(this).attr("href"),a=e(s).offset().top;e(this).addClass("active"),e("body,html").animate({scrollTop:a-30},1e3)})),e(".page-footer-smallTitle--js").on("click","a",(function(s){t.b&&(s.preventDefault(),e(this).parent().next().slideToggle(500))})),e(window).scroll((function(){var t=e("header, .page-menu");e(window).scrollTop()>=1?t.addClass("scrolled"):t.removeClass("scrolled")}))}.call(this,s(0))},function(e,t,s){"use strict";s.r(t),function(e){var t,a=s(1),n=s.n(a);function i(){var t=e(".tabbed-content").find(".tabs");t.is(":visible")?t.find(".tab").on("click",(function(t){t.preventDefault();var s=e(this).attr("href"),a=e(this).parents(".tabs"),i=a.find(".tab"),o=a.parents(".tabbed-content").find(".item");i.removeClass("active"),o.removeClass("active"),e(this).addClass("active"),e(s).addClass("active"),n.a.init({offset:50})})):e(".item").on("click",(function(){var t=e(this).parents(".tabbed-content"),s=e(this).attr("id"),a=t.find(".item");t.find(".tabs .tab").removeClass("active"),a.removeClass("active"),e(this).addClass("active"),t.find('.tabs a[href$="#'+s+'"]').addClass("active")}))}i(),e(window).on("resize",(function(){clearTimeout(t),t=setTimeout((function(){i()}),250)})),e("ul.tabs__caption").on("click","li:not(.active)",(function(){e(this).addClass("active").siblings().removeClass("active").closest(".tabsSimple").find(".tabs__content").removeClass("active").eq(e(this).index()).addClass("active"),n.a.init({offset:50})}))}.call(this,s(0))},function(e,t,s){"use strict";s.r(t),function(e){var t=s(4);if(e(".indexSlider").length>0){var a=[];e(".indexSlider").each((function(s){var n,i=e(this),o=e(this)[0],r=i.parent().find(".swiper-pagination")[0],l=i.parent().find(".swiper-prev")[0]||e(".swiper-prev-lab")[0],c=i.parent().find(".swiper-next")[0]||e(".swiper-next-lab")[0],u=i.data("effect"),d=i.data("adaptive"),f={slidesPerView:d?"auto":1,spaceBetween:d?15:0,effect:u||"slide",simulateTouch:!1,autoplay:{delay:1e4},autoHeight:!!i.data("autoheight"),pagination:{el:r,clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">0'+(e+1)+"</span>"}},navigation:{prevEl:l,nextEl:c},breakpoints:{768:{spaceBetween:0,slidesPerView:1}}};a[s]=new t.a(o,f),a[s].on("slideChange",(function(){n=this.previousIndex;var t=this.slides[n];e(t).addClass("swiper-slide-last"),setTimeout((function(){e(t).removeClass("swiper-slide-last")}),2e3)})),e(window).on("orientationchange",(function(){setTimeout((function(){a[s].update()}),800)}))}))}if(e(".aboutSlider").length>0){for(var n=[],i=0;i<e(".aboutSlider .swiper-slide").length;i++){var o=e(".aboutSlider .swiper-slide").eq(i).data("nav");n.push(o)}new t.a(".aboutSlider",{slidesPerView:1,loop:!0,pagination:{el:".swiper-pagination-about",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+n[e]+"</span>"}},navigation:{nextEl:".swiper-next-about",prevEl:".swiper-prev-about"}})}}.call(this,s(0))},function(e,t,s){"use strict";s.r(t),function(e){function a(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function n(e){return/^(\+7)[\s\-]\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(e)}function i(e,t){var s,i=e.attr("required"),o="checkbox"===e.attr("type"),r=t;return""==e.val()?(e.closest(".input").removeClass("input--filled"),s=!1):(e.closest(".input").addClass("input--filled"),s=!0),r&&("email"===e.prop("type")?a(r)?(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text(""),s=!0):(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Поле заполнено некорректно"),s=!1):"phone"===e.prop("name")?n(r)?(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text(""),s=!0):(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Поле заполнено некорректно"),s=!1):(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text(""),s=!0)),o&&i&&(e.prop("checked")?(e.closest(".checkbox").removeClass("error"),s=!0):(e.closest(".checkbox").addClass("error"),s=!1)),!r&&i&&(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Пожалуйста, заполните поле"),s=!1),s}s.d(t,"validateEmail",(function(){return a})),s.d(t,"validatePhone",(function(){return n})),e(document).on("blur",".input input, .textarea textarea",(function(t){i(e(this),t.target.value)})),e(document).on("change",".checkbox input",(function(t){i(e(this),t.target.value)})),e(".form--js").click((function(t){t.preventDefault();var s=[];if(e(this).closest("form").find("input").each((function(){var t=e(this)[0];s.push(i(e(this),t.value))})),s.includes(!1))return!1;e(this).closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")})),e(".form-back--js").click((function(){var t=e(this).closest("form");return t.trigger("reset"),t.find("input").parent().removeClass("input--filled"),e(this).closest(".form-send").hide().prev().css("opacity",1),!1}))}.call(this,s(0))},function(e,t,s){(function(e){function t(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t.parent,this.child=t.child,this.duration=.9,this.way=90,this.hook=t.hook||.9,this.offset=this.parent.hasClass("size-box")?"-50%":"0"}var s,a,n;return s=e,(a=[{key:"update",value:function(e){this.startPos=this.parent.offset().top*this.hook,this.endPos=this.startPos+window.innerHeight*this.duration,e-this.startPos>=0&&this.endPos-e>=0?(this.currentOffset=this.way/(this.endPos-this.startPos)*(e-this.startPos),this.child.css("transform","translate3d("+this.offset+","+this.currentOffset+"px,0)")):e-this.startPos<0?this.child.css("transform","translate3d("+this.offset+",0,0)"):this.endPos-e<0&&this.child.css("transform","translate3d("+this.offset+","+this.way+"px,0)")}}])&&t(s.prototype,a),n&&t(s,n),e}(),a=[];e(".parallax-box").each((function(){a.push(new s({parent:e(this),child:e(this).find(".parallax-item"),hook:e(this).attr("data-hook")}))})),e(window).scroll((function(){var t=e(document).scrollTop();a.forEach((function(e){e.update(t)}))}))}).call(this,s(0))},function(e,t,s){var a,n,i,o=document.getElementById("video");o&&(a=o,n="assets/images/video/video.mp4",(i=new XMLHttpRequest).open("GET",n,!0),i.responseType="blob",i.onload=function(){if(200===this.status){var e=URL.createObjectURL(this.response);a.src=e}},i.onerror=function(){console.log("err",arguments)},i.onprogress=function(e){if(e.lengthComputable){var t=(e.loaded/e.total*100|0)+"%";console.log("progress: ",t)}},i.send(),o.play())},function(e,t){},function(e,t,s){"use strict";s.r(t),function(e){var t,a,n=s(3),i=s(5),o=[],r=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],l={styles:[{url:"assets/images/icons/marker.svg",width:53,height:63,lineHeight:40,fontFamily:"Montserrat",textSize:14,textColor:"white"}]};function c(e,s,a){var n=new google.maps.Marker({position:new google.maps.LatLng(parseFloat(e[0]),parseFloat(e[1])),icon:s||e[2],map:t});n.addListener("click",(function(){var t=document.getElementById("projectsPopup");t.setAttribute("data-tool",a?a[0]:e[3]),t.setAttribute("data-title",a?a[1]:e[4]),t.setAttribute("data-content",a?a[2]:e[5]),t.setAttribute("data-cat",a?a[3]:e[6]),t.setAttribute("data-image",a?a[4]:e[7]),t.setAttribute("data-link",a?a[5]:e[8]),i.a.open()})),o.push(n)}function u(){!function(e){for(var t=0;t<o.length;t++)o[t].setMap(e)}(null)}e((function(){var s,n,i;e("#googleMaps").length&&(s=document.getElementById("googleMaps"),n=s.dataset.locations,i={center:new google.maps.LatLng(59.91916157,30.3251195),zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,zoomControl:!0,scrollwheel:!1,styles:r},t=new google.maps.Map(s,i),JSON.parse(n).forEach((function(e){c(e)})),a=new MarkerClusterer(t,o,l))})),e(document).ready((function(){e(".filters--js li").click((function(){var s=e(this).data("icon"),i=e(this).data("group"),r=e(this).data("coordinates"),d=e(this).data("filter"),f=e(this).data("popup"),p=e(".filtr-item"),h=e(".filtr-item[data-category=".concat(d,"]"));e(this).hasClass("active")||(e(".filters--js li").removeClass("active"),e(this).addClass("active"),u(),a.clearMarkers(),o=[],r.forEach((function(e,t){c(e.split(", "),s,f[t])})),e(".more--js").attr("data-filter",d),p.slideUp(500),h.slideDown(500),setTimeout((function(){Object(n.showMoreFunc)(".filtr-item",7,".more--js",!1,d)}),600),l.styles[0].url=i,a=new MarkerClusterer(t,o,l))}))}))}.call(this,s(0))}]);