!function(e){function t(t){for(var a,o,l=t[0],r=t[1],c=t[2],d=0,p=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(u&&u(t);p.length;)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,l=1;l<s.length;l++){var r=s[l];0!==n[r]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={0:0},i=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=r;i.push([12,1]),s()}([,,function(e,t,s){"use strict";s.r(t),function(e){s.d(t,"getResults",(function(){return l})),s.d(t,"sticky",(function(){return r}));var a=s(0),n=s.n(a),i=s(8);function o(t,s,a,o){var l=e(".glossary-list .acc__card"),c=0;if(s?(l.velocity({scaleX:0,scaleY:0},{display:"none",duration:300}),e(l).filter((function(s,n){var i=e(n)[0].dataset.title,o=e(n)[0].dataset.subtitle,l=a?i.startsWith(t):i.toLowerCase().includes(t.toLowerCase()),r=a?o.startsWith(t):o.toLowerCase().includes(t.toLowerCase());return(l||r)&&c++,l||r})).velocity({scaleX:1,scaleY:1},{display:"block",duration:300,delay:200}),e(".abc--js li").removeClass("active"),a&&o.addClass("active"),e(".glossary-results").hasClass("active")||e(".glossary-results").addClass("active").velocity("slideDown",{duration:500,delay:400}),e(".glossary-results-title span").text(c),e(".glossary-results-desc span").text(t),e(".more--js").hide()):a||(e(".glossary-results").removeClass("active").velocity("slideUp",{duration:500}),e(".more--js").show(),showMoreFunc(".acc .acc__card",9,".more--js",!1)),i.a){var u=e(".glossary-results").offset().top;e("body,html").animate({scrollTop:u-70},1e3)}setTimeout((function(){var t=e(".glossary-results").offset().top;e("body,html").animate({scrollTop:t-70},1e3),r(),n.a.refresh({offset:50})}),700)}function l(){var t=function(){var t=e(".abc--js li"),s=[];return t.each((function(t,a){s.push(e(a).data("title"))})),s}();e(".glossary-list .acc__card").each((function(s,a){var n=e(a).data("title")[0];t.filter((function(e){return e===n})).map((function(t){e(".abc--js li[data-title="+t+"]").addClass("activated")}))}))}function r(){var t=e(window),s=e(".sidebar");if(s.length){var a=s.innerHeight(),n=e(".stopper").offset().top,i=s.offset();t.scroll((function(){var o=t.scrollTop();e(".template__item--js").each((function(t){e(this).position().top<=o+60&&(e(".equipmentNav li.active").removeClass("active"),e(".equipmentNav li").eq(t).addClass("active"))})),o>i.top?s.addClass("fixed"):s.removeClass("fixed"),o+a>n?s.css({top:-(o+a-n)}):s.css({top:"10px"})}))}}e(".accordion li").click((function(t){t.preventDefault(),e(".accordion li").removeClass("active"),e(this).addClass("active")})),e(".acc__title").click((function(t){t.preventDefault();var s=e(this).next();e(this).toggleClass("active"),e(this).parent().toggleClass("active"),s.slideToggle(),setTimeout((function(){n.a.refresh({offset:50})}),1e3)})),e(".showMoreText-link").click((function(){e(this).parent().addClass("active"),e(this).hide()})),e(".abc--js").on("click","li.activated",(function(){o(e(this).data("title"),!e(this).hasClass("active"),!0,e(this))})),e(".search--js").on("click",(function(){var t=e(this).parent().find("input")[0].value;t&&o(t,t,!1)})),e(document).on("keypress",(function(t){if(e(".glossary-search").length&&13==t.which){var s=e(".glossary-search input")[0].value;if(!s)return;o(s,s,!1)}})),e(".input__file-js").change((function(){e(".input__file-js").each((function(){var t=this.value.replace(/.*\\(.*)/,"$1");t=t.replace(/.*\/(.*)/,"$1"),e(this).parent().parent().find(".input__name-js").val(t),e(".input__text-js").text(t),e(".input__file-close").addClass("show")}))})),e(".input__file-close").on("click",(function(){e(".input__file-js").val(""),e(".input__text-js").html('Прикрепить файл <span><i class="icon-dlink"></i></span>'),e(this).removeClass("show")}))}.call(this,s(1))},,function(e,t,s){"use strict";function a(e){return new Promise((function(t,s){var a=new XMLHttpRequest;a.open("GET",e.url,!0),a.responseType="blob",a.onload=function(){if(200===this.status){var s=URL.createObjectURL(this.response);t({vid:s,id:e.id})}},a.onerror=function(){s(arguments)},a.send()}))}s.r(t),s.d(t,"onloadVideoPromise",(function(){return a}))},,,,function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var a=Math.max(document.documentElement.clientWidth,window.innerWidth||0),n=a<768},function(e,t,s){"use strict";(function(e){s.d(t,"a",(function(){return i}));var a=s(0),n=s.n(a);function i(t,s,a,i,o){var l=s;e(".more--js-fl").hide();var r=e(t).length,c=e(t+":lt("+l+")"),u=e(t+"[data-category="+o+"]:lt("+l+")"),d=e(t+"[data-category="+o+"]").length;e(t).velocity({scaleX:0,scaleY:0},{display:"none",duration:0}),o?(u.velocity({scaleX:1,scaleY:1},{display:"block",duration:300}),l<d&&e(a).show()):c.velocity({scaleX:1,scaleY:1},{display:"block",duration:0}),i&&e(a).click((function(){var s=e(this)[0].dataset.filter,a=e(t+"[data-category="+s+"]").length;s?(e(t+"[data-category="+s+"]:lt("+(l=l+5<=a?l+5:a)+")").velocity({scaleX:1,scaleY:1},{display:"block",duration:300}),l>=a&&0!==l&&e(this).hide()):(e(t+":lt("+(l=l+5<=r?l+5:r)+")").velocity({scaleX:1,scaleY:1},{display:"block",duration:300}),l>=r&&0!==l&&e(this).hide());setTimeout((function(){n.a.refresh({offset:50})}),600)}))}e(".acc .acc__card").length&&i(".acc .acc__card",9,".more--js",!0),e(".more__item").length&&i(".more__item",7,".moreP--js",!0),e(".filtr-item").length&&i(".filtr-item",7,".more--js",!0)}).call(this,s(1))},function(e,t,s){"use strict";(function(e){s.d(t,"a",(function(){return n}));var a=s(11),n=new(s.n(a).a)("Modal",{attach:"#myModal",content:e("#projectsPopup"),animation:{open:"slide:right",close:"slide:right"},delayOpen:300,onOpen:function(){var e=this.content[0].children[0],t=e.getElementsByClassName("popup-tool")[0].getElementsByClassName("text__sm")[0],s=e.getElementsByClassName("popup-title")[0].getElementsByTagName("h5")[0],a=e.getElementsByClassName("popup-desc")[0].getElementsByClassName("text__sm")[0],n=e.getElementsByClassName("popup-cat")[0].getElementsByTagName("b")[0],i=e.getElementsByClassName("popup-image")[0].getElementsByTagName("img")[0],o=e.getElementsByClassName("btn")[0],l=e.dataset.tool,r=e.dataset.title,c=e.dataset.content,u=e.dataset.cat,d=e.dataset.image,p=e.dataset.link;l&&(t.textContent=l),r&&(s.textContent=r),c&&(a.textContent=c),u&&(n.textContent=u),d&&i.setAttribute("src",d),p&&o.setAttribute("href",p)}});e(".popup-close--js").click((function(){n.close()}))}).call(this,s(1))},,function(e,t,s){"use strict";s.r(t),function(e){var t=s(0),a=s.n(t),n=s(6),i=s.n(n),o=s(7),l=(s(15),s(16),s(2)),r=Object(o.a)(),c=Math.max(document.documentElement.clientWidth,window.innerWidth||0);e(document).ready((function(){s(17),s(18),s(2),s(19),s(20),s(4),s(21),c>=1024&&Object(l.sticky)(),e("body").addClass(r.name),e("body").addClass(r.os),s(22),e(".glossary-results").length&&Object(l.getResults)()})),e(window).on("orientationchange",(function(){setTimeout((function(){Object(l.sticky)(),a.a.refresh({offset:50})}),800)})),e(window).on("load",(function(){e("body").css("overflow","hidden"),e(".index-slider").addClass("loading"),e("body").css("overflow","visible"),setTimeout((function(){e(".loader, .loader-inner").addClass("hidden"),a.a.init({offset:50}),window.scrollTo(0,0)}),800),c>767&&e(".rellax").length&&new i.a(".rellax",{speed:-2,center:!0,vertical:!0,horizontal:!1}),setTimeout((function(){e(".index-slider").removeClass("loading")}),1200)})),s(23)}.call(this,s(1))},,,,function(e,t,s){},function(e,t,s){(function(e){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0);e(".menu--js").click((function(){e("body").toggleClass("fixed"),e(this).find(".menu").toggleClass("open"),e(".navbar").toggleClass("open")})),e(document).click((function(s){if(t>=1024){var a=e(".navbar.open"),n=e(".menu");0===e(".menu--js").has(s.target).length&&0===a.has(s.target).length&&(e("body").removeClass("fixed"),a.removeClass("open"),n.removeClass("open"))}})),e(".page-menu__logo .card").bind("webkitAnimationEnd mozAnimationEnd animationend",(function(){e(this).removeClass("animated")})),e(".page-menu__logo .card").hover((function(){e(this).css({"animation-iteration-count":"infinite"}),e(this).addClass("animated")})),e(".page-menu__logo .card").mouseleave((function(){e(this).css({"animation-iteration-count":"1"})})),e(".anchor").on("click","a",(function(t){t.preventDefault(),e(".anchor a").removeClass("active");var s=e(this).attr("href"),a=e(s).offset().top;e(this).addClass("active"),e("body,html").animate({scrollTop:a-30},1e3)})),e(".page-footer-smallTitle--js").on("click","a",(function(s){t<768&&(s.preventDefault(),e(this).parent().next().slideToggle(500))})),e(window).scroll((function(){var t=e("header, .page-menu");e(window).scrollTop()>=1?t.addClass("scrolled"):t.removeClass("scrolled")}))}).call(this,s(1))},function(e,t,s){"use strict";s.r(t),function(e){var t,a=s(0),n=s.n(a);function i(){var t=e(".tabbed-content").find(".tabs");t.is(":visible")?t.find(".tab").on("click",(function(){var t=e(this).attr("href"),s=e(this).parents(".tabs"),a=s.find(".tab"),i=s.parents(".tabbed-content").find(".item");return a.removeClass("active"),i.removeClass("active"),e(this).addClass("active"),e(t).addClass("active"),setTimeout((function(){n.a.refresh({offset:50})}),600),!1})):e(".item").on("click",(function(){var t=e(this).parents(".tabbed-content"),s=e(this).attr("id"),a=t.find(".item");t.find(".tabs .tab").removeClass("active"),a.removeClass("active"),e(this).addClass("active"),t.find('.tabs a[href$="#'+s+'"]').addClass("active"),setTimeout((function(){n.a.refresh({offset:50})}),600)}))}i(),e(window).on("resize",(function(){clearTimeout(t),t=setTimeout((function(){i()}),250)})),e("ul.tabs__caption").on("click","li:not(.active)",(function(){e(".tabs__content .aos-init").removeClass("aos-animate"),e(this).addClass("active").siblings().removeClass("active").closest(".tabsSimple").find(".tabs__content").removeClass("active").eq(e(this).index()).addClass("active"),n.a.refresh({offset:50})}))}.call(this,s(1))},function(e,t,s){"use strict";s.r(t),function(e){var t=s(3),a=s(4);if(e(".indexSlider").length>0){var n=[];e(".indexSlider").each((function(s){var a,i=e(this),o=e(this)[0],l=i.parent().find(".swiper-pagination")[0],r=i.parent().find(".swiper-prev")[0]||e(".swiper-prev-lab")[0],c=i.parent().find(".swiper-next")[0]||e(".swiper-next-lab")[0],u=i.data("effect"),d=i.data("duration"),p=i.data("adaptive"),f=i.data("autoheight"),m=i.data("column"),h={slidesPerView:p?"auto":1,spaceBetween:p?15:0,effect:u||"slide",simulateTouch:!1,loop:i.data("loop"),autoplay:{delay:6e3,disableOnInteraction:!0},autoHeight:!!f,pagination:{el:l,clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">0'+(e+1)+"</span>"}},slidesPerColumn:1,navigation:{prevEl:r,nextEl:c},breakpoints:{768:{spaceBetween:0,slidesPerView:1,slidesPerColumn:m||1}}};n[s]=new t.a(o,h),n[s].on("slideChange",(function(){a=this.previousIndex;var t=this.slides[a];e(t).addClass("swiper-slide-last"),setTimeout((function(){e(t).removeClass("swiper-slide-last")}),d||2e3)})),e(window).on("orientationchange",(function(){setTimeout((function(){n[s].update()}),800)}))}))}if(e(".main-slider").length>0){var i=Math.max(document.documentElement.clientWidth,window.innerWidth||0)>=768,o=[],l=[];e(".main-slider").each((function(s){var n=e(this),r=e(this)[0],c=n.parent().find(".swiper-prev")[0]||e(".swiper-prev-lab")[0],u=n.parent().find(".swiper-next")[0]||e(".swiper-next-lab")[0],d=n.parent().find(".swiper-pagination")[0],p=n.data("column"),f=n.data("autoheight"),m=n.data("adaptive"),h={slidesPerView:m?"auto":1,spaceBetween:m?15:0,loop:!0,speed:1200,autoplay:{delay:1e4},autoHeight:!!f,slidesPerColumn:1,navigation:{prevEl:c,nextEl:u},breakpoints:{768:{spaceBetween:0,slidesPerView:1,slidesPerColumn:p||1}},simulateTouch:!1,loopAdditionalSlides:10,grabCursor:!0,watchSlidesProgress:!0,pagination:{el:d,clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">0'+(e+1)+"</span>"}},on:{init:function(){this.autoplay.stop();var t=this.el.dataset.videoUrl;t&&function(){var s=JSON.parse(t),n=e(".swiper-slide-active video")[0];if(i)for(var l=0;l<s.length;l++)Object(a.onloadVideoPromise)(s[l]).then((function(t){if(o.push(t),o.length===s.length&&n){var a=o.find((function(e){return 0===e.id}));n.src=a.vid,e(".swiper-slide-active").addClass("playing"),e(".swiper-slide-next").addClass("playing"),n.play()}}))}()},imagesReady:function(){this.el.classList.remove("loading"),this.autoplay.start()},slideChange:function(){var e=this.slides[this.activeIndex],t=e.querySelector("video"),s=e.dataset.swiperSlideIndex,a=o.find((function(e){return e.id===parseFloat(s)}));t&&i&&(t.src=a&&a.vid,e.classList.add("playing"),setTimeout((function(){t.play()}),1500))},slideChangeTransitionStart:function(){e(".caption").addClass("hideIt"),setTimeout((function(){e(".caption").removeClass("hideIt")}),500)},slideChangeTransitionEnd:function(){for(var t=this.slides[this.previousIndex],s=t.querySelector("video"),a=this.el.querySelectorAll(".caption"),n=0;n<a.length;++n)a[n].classList.remove("show");s&&(s.src="",t.classList.remove("playing")),e(".swiper-slide-active .caption").addClass("show")},progress:function(){for(var e=0;e<this.slides.length;e++)for(var t=this.slides[e].progress*(.5*this.width),s=this.slides[e].querySelectorAll(".slide-bgimg--js"),a=0;a<s.length;a++)s[a].style.transform="translateX("+t+"px)"},touchStart:function(){for(var e=0;e<this.slides.length;e++)this.slides[e].style.transition=""},setTransition:function(e){for(var t=0;t<this.slides.length;t++){this.slides[t].style.transition=e+"ms";for(var s=this.slides[t].querySelectorAll(".slide-bgimg--js"),a=0;a<s.length;a++)s[a].style.transition="all "+e+"ms ease 0s"}}}};l[s]=new t.a(r,h),e(window).on("orientationchange",(function(){setTimeout((function(){l[s].update()}),800)}))}))}if(e(".aboutSlider").length>0){for(var r=[],c=0;c<e(".aboutSlider .swiper-slide").length;c++){var u=e(".aboutSlider .swiper-slide").eq(c).data("nav");r.push(u)}new t.a(".aboutSlider",{slidesPerView:1,loop:!0,pagination:{el:".swiper-pagination-about",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+r[e]+"</span>"}},navigation:{nextEl:".swiper-next-about",prevEl:".swiper-prev-about"}})}}.call(this,s(1))},function(e,t,s){"use strict";s.r(t),function(e){function a(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function n(e){return/^(\+7)[\s\-]\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(e)}function i(e,t){var s,i=e.attr("required"),o="checkbox"===e.attr("type"),l=t;return""==e.val()?(e.closest(".input").removeClass("input--filled"),s=!1):(e.closest(".input").addClass("input--filled"),s=!0),l&&("email"===e.prop("type")?a(l)?(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text(""),s=!0):(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Поле заполнено некорректно"),s=!1):"phone"===e.prop("name")?n(l)?(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text(""),s=!0):(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Поле заполнено некорректно"),s=!1):(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text(""),s=!0)),o&&i&&(e.prop("checked")?(e.closest(".checkbox").removeClass("error"),s=!0):(e.closest(".checkbox").addClass("error"),s=!1)),!l&&i&&(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Пожалуйста, заполните поле"),s=!1),"file"===e.prop("type")&&(s=!0),s}s.d(t,"validateEmail",(function(){return a})),s.d(t,"validatePhone",(function(){return n})),s.d(t,"validateField",(function(){return i})),e(document).on("blur",".input input, .input textarea",(function(t){i(e(this),t.target.value)})),e(document).on("change",".checkbox input",(function(t){i(e(this),t.target.value)})),e(".form--js--news").click((function(t){t.preventDefault();var s=[];if(e(this).closest("form").find("input").each((function(){var t=e(this)[0];s.push(i(e(this),t.value))})),s.includes(!1))return!1;var a=e(this).closest("form"),n=a.find("input[name=name]"),o=a.find("input[name=email]"),l=a.find("textarea[name=content]"),r=e(this);e.ajax({type:"POST",url:"/local/templates/main/include/ajax/forms/subscribe_to_news.php",dataType:"json",data:{name:n.val(),email:o.val(),message:l.val()},success:function(e){console.log(e.success),"true"==e.success&&r.closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form--js--projects").click((function(t){t.preventDefault();var s=[];if(e(this).closest("form").find("input").each((function(){var t=e(this)[0];s.push(i(e(this),t.value))})),s.includes(!1))return!1;var a=e(this).closest("form"),n=a.find("input[name=name]"),o=a.find("input[name=email]"),l=a.find("textarea[name=content]"),r=e(this);e.ajax({type:"POST",url:"/local/templates/main/include/ajax/forms/ask_question_projects.php",dataType:"json",data:{name:n.val(),email:o.val(),message:l.val()},success:function(e){console.log(e.success),"true"==e.success&&r.closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form--js--publications").click((function(t){t.preventDefault();var s=[];if(e(this).closest("form").find("input").each((function(){var t=e(this)[0];s.push(i(e(this),t.value))})),s.includes(!1))return!1;var a=e(this).closest("form"),n=a.find("input[name=name]"),o=a.find("input[name=email]"),l=e(this);e.ajax({type:"POST",url:"/local/templates/main/include/ajax/forms/subscribe_to_publications.php",dataType:"json",data:{name:n.val(),email:o.val()},success:function(e){console.log(e.success),"true"==e.success&&l.closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form--js--ask--question").click((function(t){t.preventDefault();var s=[];if(e(this).closest("form").find("input").each((function(){var t=e(this)[0];s.push(i(e(this),t.value))})),s.includes(!1))return!1;var a=e(this).closest("form"),n=a.find("input[name=name]"),o=a.find("input[name=email]"),l=a.find("textarea[name=content]"),r=e(this);e.ajax({type:"POST",url:"/local/templates/main/include/ajax/forms/ask_question.php",dataType:"json",data:{name:n.val(),email:o.val(),message:l.val()},success:function(e){console.log(e.success),"true"==e.success&&r.closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form--js-services").click((function(t){t.preventDefault();var s=[];if(e(this).closest("form").find("input").each((function(){var t=e(this)[0];s.push(i(e(this),t.value))})),s.includes(!1))return!1;var a=e(this).closest("form"),n=a.find("input[name=name]"),o=a.find("input[name=email]"),l=a.find("textarea[name=content]"),r=e(this);e.ajax({type:"POST",url:"/local/templates/main/include/ajax/forms/ask_question_services.php",dataType:"json",data:{name:n.val(),email:o.val(),message:l.val()},success:function(e){console.log(e.success),"true"==e.success&&r.closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form--js-vacancy").click((function(t){t.preventDefault();var s=[];if(e(this).closest("form").find("input").each((function(){var t=e(this)[0];s.push(i(e(this),t.value))})),s.includes(!1))return!1;var a=new FormData,n=e(this).closest("form"),o=n.find("input[name=name]").val(),l=n.find("input[name=email]").val(),r=n.find("textarea[name=content]").val(),c=n.find("input[name=file]")[0].files[0],u=e(this);a.set("name",o),a.append("email",l),a.append("message",r),a.append("file",c),e.ajax({type:"POST",url:"/local/templates/main/include/ajax/forms/send_resume.php",data:a,contentType:!1,processData:!1,success:function(e){console.log(e),u.closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form-back--js").click((function(){var t=e(this).closest("form");return t.trigger("reset"),t.find("input").parent().removeClass("input--filled"),e(this).closest(".form-send").hide().prev().css("opacity",1),!1}))}.call(this,s(1))},function(e,t,s){(function(e){e(".page-nav--js > *").each((function(t,s){var a=e(this).data("title"),n=e(this).data("href"),i="<li class=".concat(0===s?"active":"","><a href=").concat(n,">").concat(a,"</a></li>");a&&n&&e(".equipmentNav").append(i)}))}).call(this,s(1))},function(e,t){},function(e,t,s){"use strict";s.r(t),function(e){var t=s(9),a=s(10);var n,i,o=[],l=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],r={styles:[{url:"assets/images/icons/markerd.svg",width:53,height:63,lineHeight:40,fontFamily:"Montserrat",textSize:14,textColor:"white"}]},c=new google.maps.InfoWindow;function u(e,t,s){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=new google.maps.Marker({position:new google.maps.LatLng(parseFloat(e[0]),parseFloat(e[1])),icon:t||e[2],map:n}),r=s&&s[3]||e&&e[6];r&&l.addListener("click",(function(){var t=document.getElementById("projectsPopup");t.setAttribute("data-tool",s?s[0]:e[3]),t.setAttribute("data-title",s?s[1]:e[4]),t.setAttribute("data-content",s?s[2]:e[5]),t.setAttribute("data-cat",s?s[3]:e[6]),t.setAttribute("data-image",s?s[4]:e[7]),t.setAttribute("data-link",s?s[5]:e[8]),a.a.open()}));var u=s?s[0]:e[3],d=s?s[1]:e[4],p=s?s[2]:e[5];i?(c.setContent('<p><b class="text__xs">'.concat(u,"</b></p><p>").concat(d,'</p><a href="#" class="text--gray">').concat(p,"</a>")),l.addListener("click",(function(){c.open(n,l)})),google.maps.event.addListener(n,"click",(function(){c.close()}))):(c.setContent('<p><b class="text__xs">'.concat(u,"</b></p>").concat(d)),l.addListener("mouseover",(function(){c.open(n,l)})),l.addListener("mouseout",(function(){c.close()}))),o.push(l)}function d(){!function(e){for(var t=0;t<o.length;t++)o[t].setMap(e)}(null)}e((function(){var t,s,a;e("#googleMaps").length&&(t=document.getElementById("googleMaps"),s=t.dataset.locations,a={center:new google.maps.LatLng(59.91916157,30.3251195),zoom:2,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,zoomControl:!1,scrollwheel:!1,disableDefaultUI:!0,styles:l},n=new google.maps.Map(t,a),JSON.parse(s).forEach((function(e){u(e)})),i=new MarkerClusterer(n,o,r)),e("#google").length&&function(){var e=document.getElementById("google"),t=e.dataset.locations,s={center:new google.maps.LatLng(59.91916157,30.3251195),zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,zoomControl:!0,scrollwheel:!1,styles:l};n=new google.maps.Map(e,s),JSON.parse(t).forEach((function(e){u(e,null,null,!0)})),i=new MarkerClusterer(n,o,r)}()})),e(".anchorMap").on("click","a",(function(t){t.preventDefault();var s=e(this).attr("href"),a=e(s).offset().top;!function(e){google.maps.event.trigger(o[e],"click")}(e(this).data("id")),e("body,html").animate({scrollTop:a},1e3)}));e(".filters--js li").click((function(){var s=e(this).data("icon"),a=e(this).data("group"),l=e(this).data("coordinates"),c=e(this).data("filter"),p=e(this).data("popup"),f=e(this).data("zoom"),m=e(".filtr-item");e(this).hasClass("active")||(e(".filters--js li").removeClass("active"),e(this).addClass("active"),d(),i.clearMarkers(),o=[],l.forEach((function(e,t){u(e.split(", "),s,p[t]),n.setZoom(f)})),e(".more--js").attr("data-filter",c),m.velocity({scaleX:0,scaleY:0},{display:"none",duration:300}),setTimeout((function(){Object(t.a)(".filtr-item",7,".more--js",!1,c)}),200),r.styles[0].url=a,i=new MarkerClusterer(n,o,r))}))}.call(this,s(1))}]);