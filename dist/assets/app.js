!function(e){function t(t){for(var s,o,r=t[0],l=t[1],c=t[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},i={0:0},a=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;a.push([13,1,2]),n()}([,,function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"getResults",(function(){return l})),n.d(t,"sticky",(function(){return c}));var s=n(1),i=n.n(s),a=n(8),o=n(12);function r(t,n,s,o){var r=e(".glossary-list .acc__card"),l=0;if(n?(r.velocity({scaleX:0,scaleY:0},{display:"none",duration:300}),e(r).filter((function(n,i){var a=e(i)[0].dataset.title,o=e(i)[0].dataset.subtitle,r=s?a.startsWith(t):a.toLowerCase().includes(t.toLowerCase()),c=s?o.startsWith(t):o.toLowerCase().includes(t.toLowerCase());return(r||c)&&l++,r||c})).velocity({scaleX:1,scaleY:1},{display:"block",duration:300,delay:200}),e(".abc--js li").removeClass("active"),s&&o.addClass("active"),e(".glossary-results").hasClass("active")||e(".glossary-results").addClass("active").velocity("slideDown",{duration:500,delay:400}),e(".glossary-results-title span").text(l),e(".glossary-results-desc span").text(t),e(".more--js").hide()):s||(e(".glossary-results").removeClass("active").velocity("slideUp",{duration:500}),e(".more--js").show(),showMoreFunc(".acc .acc__card",9,".more--js",!1)),a.a){var u=e(".glossary-results").offset().top;e("body,html").animate({scrollTop:u-70},1e3)}setTimeout((function(){var t=e(".glossary-results").offset().top;e("body,html").animate({scrollTop:t-70},1e3),c(),i.a.refresh({offset:50})}),700)}function l(){var t=function(){var t=e(".abc--js li"),n=[];return t.each((function(t,s){n.push(e(s).data("title"))})),n}();e(".glossary-list .acc__card").each((function(n,s){var i=e(s).data("title")[0];t.filter((function(e){return e===i})).map((function(t){e(".abc--js li[data-title="+t+"]").addClass("activated")}))}))}function c(){var t=e(window),n=e(".sidebar");if(n.length){var s=n.innerHeight(),i=e(".stopper").offset().top,a=n.offset();t.scroll((function(){var o=t.scrollTop();e(".template__item--js").each((function(t){e(this).position().top<=o+60&&(e(".equipmentNav li.active").removeClass("active"),e(".equipmentNav li").eq(t).addClass("active"))})),o>a.top?n.addClass("fixed"):n.removeClass("fixed"),o+s>i?n.css({top:-(o+s-i)}):n.css({top:"10px"})}))}}Object(o.a)(),e(".accordion li").click((function(t){t.preventDefault(),e(".accordion li").removeClass("active"),e(this).addClass("active")})),e(".accordion li a").click((function(){window.location.href=e(this).attr("href")})),e(".acc__title").click((function(t){t.preventDefault();var n=e(this).next();e(this).toggleClass("active"),e(this).parent().toggleClass("active"),n.slideToggle(),setTimeout((function(){i.a.refresh({offset:50})}),1e3)})),e(".showMoreText-link").click((function(){e(this).parent().addClass("active"),e(this).hide()})),e(".abc--js").on("click","li.activated",(function(){r(e(this).data("title"),!e(this).hasClass("active"),!0,e(this))})),e(".search--js").on("click",(function(){var t=e(this).parent().find("input")[0].value;t&&r(t,t,!1)})),e(document).on("keypress",(function(t){if(e(".glossary-search").length&&13==t.which){var n=e(".glossary-search input")[0].value;if(!n)return;r(n,n,!1)}})),e(".input__file-js").change((function(){e(".input__file-js").each((function(){var t=this.value.replace(/.*\\(.*)/,"$1");t=t.replace(/.*\/(.*)/,"$1"),e(this).parent().parent().find(".input__name-js").val(t),e(".input__text-js").text(t),e(".input__file-close").addClass("show")}))})),e(".input__file-close").on("click",(function(){e(".input__file-js").val(""),e(".input__text-js").html('Прикрепить файл <span><i class="icon-dlink"></i></span>'),e(this).removeClass("show")}));e(window).on("scroll",(function(){e(".production_blue-area").length&&(e(".production_blue-area").offset().top+e(".production_blue-area").height()<e(window).scrollTop()+e(window).height()&&(e(".arrow").addClass("arrow--active"),e(".arrow-side").addClass("arrow-side--active"),e(".arrow-sider").addClass("arrow-sider--active")))}));var u=e("#iso");u.wrapInner("<span>"),u.find("span").css({display:"inline-flex"}),u.append(u.find("span").clone()),u.wrapInner("<div>"),u.children("div").css({width:"200%",display:"flex"}),function e(){u.children("div").css("margin-left","0%"),u.children("div").animate({"margin-left":"-200%"},12e4,"linear",e),console.log(12e4)}()}.call(this,n(0))},,function(e,t,n){"use strict";function s(e){return new Promise((function(t,n){var s=new XMLHttpRequest;s.open("GET",e.url,!0),s.responseType="blob",s.onload=function(){if(200===this.status){var n=URL.createObjectURL(this.response);t({vid:n,id:e.id})}},s.onerror=function(){n(arguments)},s.send()}))}n.r(t),n.d(t,"onloadVideoPromise",(function(){return s}))},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var s=Math.max(document.documentElement.clientWidth,window.innerWidth||0),i=s<768},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));var s=n(1),i=n.n(s);function a(t,n,s,a,o){var r=n;e(".more--js-fl").hide();var l=e(t).length,c=e(t+":lt("+r+")"),u=e(t+"[data-category="+o+"]:lt("+r+")"),d=e(t+"[data-category="+o+"]").length;e(t).velocity({scaleX:0,scaleY:0},{display:"none",duration:0}),o?(u.velocity({scaleX:1,scaleY:1},{display:"block",duration:300}),r<d&&e(s).show()):c.velocity({scaleX:1,scaleY:1},{display:"block",duration:0}),a&&e(s).click((function(){var n=e(this)[0].dataset.filter,s=e(t+"[data-category="+n+"]").length;n?(e(t+"[data-category="+n+"]:lt("+(r=r+5<=s?r+5:s)+")").velocity({scaleX:1,scaleY:1},{display:"block",duration:300}),r>=s&&0!==r&&e(this).hide()):(e(t+":lt("+(r=r+5<=l?r+5:l)+")").velocity({scaleX:1,scaleY:1},{display:"block",duration:300}),r>=l&&0!==r&&e(this).hide());setTimeout((function(){i.a.refresh({offset:50})}),600)}))}e(".acc .acc__card").length&&a(".acc .acc__card",9,".more--js",!0),e(".more__item").length&&a(".more__item",7,".moreP--js",!0),e(".more-search").length&&a(".more-search",6,".morePP--js",!0),e(".filtr-item").length&&a(".filtr-item",7,".more--js",!0)}).call(this,n(0))},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var s=n(11),i=new(n.n(s).a)("Modal",{attach:"#myModal",content:e("#projectsPopup"),animation:{open:"slide:right",close:"slide:right"},delayOpen:300,onOpen:function(){var e=this.content[0].children[0],t=e.getElementsByClassName("popup-tool")[0].getElementsByClassName("text__sm")[0],n=e.getElementsByClassName("popup-title")[0].getElementsByTagName("h5")[0],s=e.getElementsByClassName("popup-desc")[0].getElementsByClassName("text__sm")[0],i=e.getElementsByClassName("popup-cat")[0].getElementsByTagName("b")[0],a=e.getElementsByClassName("popup-image")[0].getElementsByTagName("img")[0],o=e.getElementsByClassName("btn")[0],r=e.dataset.tool,l=e.dataset.title,c=e.dataset.content,u=e.dataset.cat,d=e.dataset.image,p=e.dataset.link;r&&(t.textContent=r),l&&(n.textContent=l),c&&(s.textContent=c),u&&(i.textContent=u),d&&a.setAttribute("src",d),p&&o.setAttribute("href",p)}});e(".popup-close--js").click((function(){i.close()}))}).call(this,n(0))},,function(e,t,n){"use strict";function s(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var i={onScroll:null,target:null,backgroundColor:"#000000",images:[],onCompleteInit:null,preloadCount:10,step:5,touchStep:1,changePerMS:5,onExist:null,setScreenMaxHeight:!1,correctConditionElement:!1},a=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=Object.assign({},i,t),this.workOptions={target:null,ctx:null,wrapper:null,position:0,minPosition:0,maxPosition:10,width:0,height:0,downloaded:!1,startOn:0},this.currentStep=this.options.step,this.images=[],this.current=0,this.prev=0,this.loadAll(0,this.options.preloadCount,(function(){n.init(),n.options.onCompleteInit&&n.options.onCompleteInit()})),this.renderQueue=[],this.rendererTimeout=null}var t,n,a;return t=e,(n=[{key:"renderer",value:function(){if(this.renderQueue.length){var e=this.renderQueue.shift(),t=this.renderQueue[0]||e;this.drawImage(e,t)}else this.stopRenderer()}},{key:"stopRenderer",value:function(){clearInterval(this.rendererTimeout),this.rendererTimeout=null}},{key:"clearRenderer",value:function(){this.renderQueue=[]}},{key:"startRenderer",value:function(){this.rendererTimeout||(this.rendererTimeout=setInterval(this.renderer.bind(this),this.options.changePerMS))}},{key:"addToRenderer",value:function(e){this.renderQueue.push(e),this.startRenderer()}},{key:"init",value:function(){if(this.options.target){this.workOptions.maxPosition=this.options.images.length-1,this.loadAll(this.options.preloadCount,this.options.images.length);var e=document.querySelector(this.options.target),t=e;if(this.options.onExist&&(t=document.querySelector(this.options.onExist)),t){this.workOptions.wrapper=e;var n=document.createElement("canvas");this.workOptions.target=n,n.style.position="absolute",n.style.top=0,n.style.left=0;var s=n.getBoundingClientRect();this.workOptions.startOn=parseInt(s.top,10),e.append(n),this.workOptions.ctx=n.getContext("2d"),this.applyStyles(),this.applyListeners(),this.render(1)}}}},{key:"loadAll",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=n-t,a=0;this.options.images.forEach((function(o,r){if(!(t>0&&r<t||n>0&&r>n||e.images[r])){var l=new Image;l.onload=function(){a++,e.images[r]=l,a===i&&0!==n&&s&&setTimeout(s,100),e.images.length===e.options.images.length&&(e.workOptions.downloaded=!0)},l.src=o}}))}},{key:"applyListeners",value:function(){var e=this;document.addEventListener("wheel",(function(t){return e.currentStep=e.options.step,e.onScroll(Math.sign(t.deltaY),e.getScroll()[1],t)}),{passive:!1}),window.addEventListener("keydown",(function(t){return"ArrowDown"===t.key?(e.currentStep=e.options.step,e.onScroll(1,e.getScroll()[1],t)):"ArrowUp"===t.key&&(e.currentStep=e.options.step,e.onScroll(-1,e.getScroll()[1],t))}),{passive:!1}),window.addEventListener("touchstart",(function(t){e.touchStartFrom=parseInt(t.changedTouches[0].pageY,10)})),window.addEventListener("touchmove",(function(t){var n=t.changedTouches[0].pageY;return e.currentStep=e.options.touchStep,e.touchStartFrom>n?e.onScroll(1,e.getScroll()[1],t):e.touchStartFrom<n&&e.onScroll(-1,e.getScroll()[1],t)}),{passive:!1}),window.addEventListener("resize",(function(){e.applyStyles(),e.render(1)}))}},{key:"getScroll",value:function(){if(void 0!==window.pageYOffset)return[pageXOffset,pageYOffset];var e=document.documentElement,t=document.body;return[e.scrollLeft||t.scrollLeft||0,e.scrollTop||t.scrollTop||0]}},{key:"getHeightDocument",value:function(){return parseInt(window.innerHeight,10)}},{key:"getWidthDocument",value:function(){return parseInt(window.innerWidth,10)}},{key:"applyStyles",value:function(){var e=this.getWidthDocument(),t=parseInt(this.workOptions.wrapper.offsetHeight,10);if(this.options.setScreenMaxHeight&&(t=this.getHeightDocument()),this.options.correctConditionElement){var n=document.querySelector(this.options.onExist),s=n.offsetTop,i=parseInt(s,10);n.style.height=t-i+"px"}this.workOptions.width=e,this.workOptions.height=t,this.workOptions.target.setAttribute("width",e),this.workOptions.target.setAttribute("height",t)}},{key:"slideNext",value:function(){this.images[this.current+1]&&(this.prev=this.current,this.current+=this.currentStep,this.current>this.images.length-1&&(this.current=this.images.length-1))}},{key:"slidePrev",value:function(){this.images[this.current-1]&&(this.prev=this.current,this.current-=this.currentStep,this.current<0&&(this.current=0))}},{key:"drawImage",value:function(e,t){this.workOptions.ctx.fillStyle=this.options.backgroundColor,this.workOptions.ctx.clearRect(0,0,this.workOptions.width,this.workOptions.height),this.workOptions.ctx.fillRect(0,0,this.workOptions.width,this.workOptions.height);var n=this.images[e],s=n.naturalWidth,i=n.naturalHeight,a=this.workOptions.width*i/s,o=parseInt((this.workOptions.height-a)/2,10);console.log(e),this.options.onScroll&&this.options.onScroll(e,t-e),this.workOptions.ctx.drawImage(n,0,0,s,i,0,o,this.workOptions.width,a)}},{key:"render",value:function(e){if(e>0)for(var t=this.prev;t<=this.current;t++)this.addToRenderer(t);else for(var n=this.prev;n>=this.current;n--)this.addToRenderer(n)}},{key:"onScroll",value:function(e,t,n){if(t<this.workOptions.startOn||t>this.workOptions.startOn)return this.renderQueue.length&&!1!==n.cancelable&&(n.preventDefault(),n.stopPropagation&&n.stopPropagation(),n.stopImmediatePropagation&&n.stopImmediatePropagation()),!1;if(this.current>=this.workOptions.minPosition&&this.current<=this.workOptions.maxPosition){if(e<0&&this.current>this.workOptions.minPosition)return this.slidePrev(),this.render(-1),!1!==n.cancelable&&(n.preventDefault(),n.stopPropagation&&n.stopPropagation(),n.stopImmediatePropagation&&n.stopImmediatePropagation()),!0;if(e>0&&this.current<this.workOptions.maxPosition)return this.slideNext(),this.render(1),!1!==n.cancelable&&(n.preventDefault(),n.stopPropagation&&n.stopPropagation(),n.stopImmediatePropagation&&n.stopImmediatePropagation()),!0}return!1}}])&&s(t.prototype,n),a&&s(t,a),e}();function o(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=e.toString();n.length<t;)n="0"+n;return n}var r=document.querySelector("header"),l=document.querySelector(".seqvencii > .nav-title"),c=document.querySelector(".container.seqvencii-container > .description"),u=document.querySelector(".container.seqvencii-container > .stage1"),d=document.querySelector(".container.seqvencii-container > .stage2"),p=document.querySelector(".container.seqvencii-container > .stage3"),f=[{step:52,directionUp:function(){r.classList.add("a-showIn"),r.classList.remove("a-showOut"),l.classList.add("a-showIn"),l.classList.remove("a-showOut"),c.classList.add("a-showIn"),c.classList.remove("a-showOut")},directionDown:function(){r.classList.add("a-showOut"),r.classList.remove("a-showIn"),l.classList.add("a-showOut"),l.classList.remove("a-showIn"),c.classList.add("a-showOut"),c.classList.remove("a-showIn")}},{step:53,directionUp:function(){u.classList.add("a-showOut"),u.classList.remove("a-showIn")},directionDown:function(){u.classList.add("a-showIn"),u.classList.remove("a-showOut")}},{step:118,directionUp:function(){u.classList.add("a-showIn"),u.classList.remove("a-showOut")},directionDown:function(){u.classList.add("a-showOut"),u.classList.remove("a-showIn")}},{step:122,directionUp:function(){d.classList.add("a-showOut"),d.classList.remove("a-showIn")},directionDown:function(){d.classList.add("a-showIn"),d.classList.remove("a-showOut")}},{step:168,directionUp:function(){d.classList.add("a-showIn"),d.classList.remove("a-showOut")},directionDown:function(){d.classList.add("a-showOut"),d.classList.remove("a-showIn")}},{step:172,directionUp:function(){p.classList.add("a-showOut"),p.classList.remove("a-showIn")},directionDown:function(){p.classList.add("a-showIn"),p.classList.remove("a-showOut")}}];function h(e,t){f.forEach((function(n){parseInt(e,10)===parseInt(n.step,10)&&(t>0?n.directionDown():n.directionUp())}))}t.a=function(){if(document.querySelector(".main__section")){for(var e=[],t=0;t<201;t++)e.push("assets/images/animation/AlfaPolimer_render_"+o(t)+".jpg");new a({images:e,target:".main__section",onExist:"main.seqvencii",preloadCount:10,step:5,touchStep:5,changePerMS:5,setScreenMaxHeight:!0,correctConditionElement:!0,onScroll:h})}}},function(e,t,n){"use strict";n.r(t),function(e){var t=n(1),s=n.n(t),i=n(6),a=n.n(i),o=n(7),r=(n(16),n(17),n(2)),l=Object(o.a)(),c=Math.max(document.documentElement.clientWidth,window.innerWidth||0);e(document).ready((function(){n(18),n(19),n(20),n(2),n(21),n(22),n(4),n(23),c>=1024&&Object(r.sticky)(),e("body").addClass(l.name),e("body").addClass(l.os),e(".cookies--js").click((function(){return e(this).closest(".cookies").fadeOut(500),!1})),n(24),e(".glossary-results").length&&Object(r.getResults)()})),e(window).on("orientationchange",(function(){setTimeout((function(){Object(r.sticky)(),s.a.refresh({offset:50})}),800)})),e(window).on("load",(function(){e("body").css("overflow","hidden"),e(".index-slider").addClass("loading"),e("body").css("overflow","visible"),setTimeout((function(){e(".loader, .loader-inner").addClass("hidden"),s.a.init({offset:50}),window.scrollTo(0,0)}),800),c>767&&e(".rellax").length&&new a.a(".rellax",{speed:-2,center:!0,vertical:!0,horizontal:!1}),setTimeout((function(){e(".index-slider").removeClass("loading")}),1200)})),n(25)}.call(this,n(0))},,,,function(e,t,n){},function(e,t,n){(function(e){e(document).ready((function(){e(".search").on("click",(function(){e(".search__box").addClass("search__box--active")})),e(".search__close").on("click",(function(){e(".search__box").removeClass("search__box--active")}))}))}).call(this,n(0))},function(e,t,n){(function(e){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0);e(".menu--js").click((function(){e("body").toggleClass("fixed"),e(this).find(".menu").toggleClass("open"),e(".navbar").toggleClass("open")})),e(document).click((function(n){if(t>=1024){var s=e(".navbar.open"),i=e(".menu");0===e(".menu--js").has(n.target).length&&0===s.has(n.target).length&&(e("body").removeClass("fixed"),s.removeClass("open"),i.removeClass("open"))}})),e(".page-menu__logo .card").bind("webkitAnimationEnd mozAnimationEnd animationend",(function(){e(this).removeClass("animated")})),e(".page-menu__logo .card").hover((function(){e(this).css({"animation-iteration-count":"infinite"}),e(this).addClass("animated")})),e(".page-menu__logo .card").mouseleave((function(){e(this).css({"animation-iteration-count":"1"})})),e(".anchor").on("click","a",(function(t){t.preventDefault(),e(".anchor a").removeClass("active");var n=e(this).attr("href"),s=e(n).offset().top;e(this).addClass("active"),e("body,html").animate({scrollTop:s-30},1e3)})),e(".page-footer-smallTitle--js").on("click","a",(function(n){t<768&&(n.preventDefault(),e(this).parent().next().slideToggle(500))})),e(window).scroll((function(){var t=e("header, .page-menu"),n=e(window).scrollTop(),s=e(".search--lilac");n>=1?(t.addClass("scrolled"),s.addClass("search--scrolled")):(t.removeClass("scrolled"),s.removeClass("search--scrolled"))}))}).call(this,n(0))},function(e,t,n){"use strict";n.r(t),function(e){var t,s=n(1),i=n.n(s);function a(){var t=e(".tabbed-content").find(".tabs");t.is(":visible")?t.find(".tab").on("click",(function(){var t=e(this).attr("href"),n=e(this).parents(".tabs"),s=n.find(".tab"),a=n.parents(".tabbed-content").find(".item");return s.removeClass("active"),a.removeClass("active"),e(this).addClass("active"),e(t).addClass("active"),setTimeout((function(){i.a.refresh({offset:50})}),600),!1})):e(".item").on("click",(function(){var t=e(this).parents(".tabbed-content"),n=e(this).attr("id"),s=t.find(".item");t.find(".tabs .tab").removeClass("active"),s.removeClass("active"),e(this).addClass("active"),t.find('.tabs a[href$="#'+n+'"]').addClass("active"),setTimeout((function(){i.a.refresh({offset:50})}),600)}))}a(),e(window).on("resize",(function(){clearTimeout(t),t=setTimeout((function(){a()}),250)})),e("ul.tabs__caption").on("click","li:not(.active)",(function(){e(".tabs__content .aos-init").removeClass("aos-animate"),e(this).addClass("active").siblings().removeClass("active").closest(".tabsSimple").find(".tabs__content").removeClass("active").eq(e(this).index()).addClass("active"),i.a.refresh({offset:50})}))}.call(this,n(0))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(3),s=n(4);if(e(".main-slider").length>0){var i=Math.max(document.documentElement.clientWidth,window.innerWidth||0)>=768,a=[],o=[];e(".main-slider").each((function(n){var r=e(this),l=e(this)[0],c=r.parent().find(".swiper-prev")[0]||e(".swiper-prev-lab")[0],u=r.parent().find(".swiper-next")[0]||e(".swiper-next-lab")[0],d=r.parent().find(".swiper-pagination")[0],p=r.data("column"),f=r.data("autoheight"),h=r.data("adaptive"),m={slidesPerView:h?"auto":1,spaceBetween:h?15:0,loop:!0,speed:1200,autoplay:{delay:1e4,disableOnInteraction:!1},autoHeight:!!f,slidesPerColumn:1,navigation:{prevEl:c,nextEl:u},breakpoints:{768:{spaceBetween:0,slidesPerView:1,slidesPerColumn:p||1}},simulateTouch:!1,grabCursor:!0,watchSlidesProgress:!0,pagination:{el:d,clickable:!0,renderBullet:function(e,t){return'<span class="'+t+" dur-"+r.find('[data-swiper-slide-index="'.concat(e,'"]')).data("swiper-autoplay")+'">0'+(e+1)+"</span>"}},on:{init:function(){this.autoplay.stop();var t=this.el.dataset.videoUrl;t&&function(){var n=JSON.parse(t),o=e(".swiper-slide-active video")[0];if(i)for(var r=0;r<n.length;r++)Object(s.onloadVideoPromise)(n[r]).then((function(t){if(a.push(t),a.length===n.length&&o){var s=a.find((function(e){return 0===e.id}));o.src=s.vid,e(".swiper-slide-active").addClass("playing"),e(".swiper-slide-next").addClass("playing"),o.play()}}))}()},imagesReady:function(){this.el.classList.remove("loading"),this.autoplay.start()},slideChange:function(){var e=this.slides[this.activeIndex],t=e.querySelector("video"),n=e.dataset.swiperSlideIndex,s=a.find((function(e){return e.id===parseFloat(n)}));t&&i&&(t.src=s&&s.vid,e.classList.add("playing"),setTimeout((function(){t.play()}),1500))},slideChangeTransitionStart:function(){e(".caption").addClass("hideIt"),setTimeout((function(){e(".caption").removeClass("hideIt")}),500)},slideChangeTransitionEnd:function(){for(var t=this.slides[this.previousIndex],n=t.querySelector("video"),s=this.el.querySelectorAll(".caption"),i=0;i<s.length;++i)s[i].classList.remove("show");n&&(n.src="",t.classList.remove("playing")),e(".swiper-slide-active .caption").addClass("show")},progress:function(){for(var e=0;e<this.slides.length;e++)for(var t=this.slides[e].progress*(.5*this.width),n=this.slides[e].querySelectorAll(".slide-bgimg--js"),s=0;s<n.length;s++)n[s].style.transform="translateX("+t+"px)"},touchStart:function(){for(var e=0;e<this.slides.length;e++)this.slides[e].style.transition=""},setTransition:function(e){for(var t=0;t<this.slides.length;t++){this.slides[t].style.transition=e+"ms";for(var n=this.slides[t].querySelectorAll(".slide-bgimg--js"),s=0;s<n.length;s++)n[s].style.transition="all "+e+"ms ease 0s"}}}};o[n]=new t.a(l,m),e(window).on("orientationchange",(function(){setTimeout((function(){o[n].update()}),800)}))}))}if(e(".aboutSlider").length>0){for(var r=[],l=0;l<e(".aboutSlider .swiper-slide").length;l++){var c=e(".aboutSlider .swiper-slide").eq(l).data("nav");r.push(c)}new t.a(".aboutSlider",{slidesPerView:1,loop:!0,pagination:{el:".swiper-pagination-about",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+r[e]+"</span>"}},navigation:{nextEl:".swiper-next-about",prevEl:".swiper-prev-about"}})}var u=e(".navig-pagination-item"),d=new t.a(".slide-prod__slider-top",{spaceBetween:0,pagination:{el:".navig-pagination",type:"custom",renderCustom:function(e,t,n){u.removeClass("pagination--active"),u.eq(t-1).addClass("pagination--active")}}});u.on("click",(function(){var t=e(this).index();d.slideTo(t)}))}.call(this,n(0))},function(e,t,n){"use strict";n.r(t),function(e){function s(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function i(e){return/^(\+7)[\s\-]\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(e)}function a(e,t){var n,a=e.attr("required"),o="checkbox"===e.attr("type"),r=t;return""==e.val()?(e.closest(".input").removeClass("input--filled"),n=!1):(e.closest(".input").addClass("input--filled"),n=!0),r&&("email"===e.prop("type")?s(r)?(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text(""),n=!0):(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Поле заполнено некорректно"),n=!1):"phone"===e.prop("name")?i(r)?(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text(""),n=!0):(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Поле заполнено некорректно"),n=!1):(e.closest(".input").removeClass("error"),e.closest(".input").find(".error-content").text(""),n=!0)),o&&a&&(e.prop("checked")?(e.closest(".checkbox").removeClass("error"),n=!0):(e.closest(".checkbox").addClass("error"),n=!1)),!r&&a&&(e.closest(".input").addClass("error"),e.closest(".input").find(".error-content").text("Пожалуйста, заполните поле"),n=!1),"file"===e.prop("type")&&(n=!0),n}n.d(t,"validateEmail",(function(){return s})),n.d(t,"validatePhone",(function(){return i})),n.d(t,"validateField",(function(){return a})),e(document).on("blur",".input input, .input textarea",(function(t){a(e(this),t.target.value)})),e(document).on("change",".checkbox input",(function(t){a(e(this),t.target.value)})),e(".form--js--news").click((function(t){t.preventDefault();var n=[];if(e(this).closest("form").find("input, textarea").each((function(){var t=e(this)[0];n.push(a(e(this),t.value))})),n.includes(!1))return!1;var s=e(this).closest("form"),i=s.find("input[name=name]"),o=s.find("input[name=email]"),r=s.find("textarea[name=content]"),l=e(this);e.ajax({type:"POST",url:"/local/templates/main/include/ajax/forms/subscribe_to_news.php",dataType:"json",data:{name:i.val(),email:o.val(),message:r.val()},success:function(e){console.log(e.success),"true"==e.success&&l.closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form--js--projects").click((function(t){t.preventDefault();var n=[];if(e(this).closest("form").find("input, textarea").each((function(){var t=e(this)[0];n.push(a(e(this),t.value))})),n.includes(!1))return!1;var s=e(this).closest("form"),i=s.find("input[name=name]"),o=s.find("input[name=email]"),r=s.find("textarea[name=content]"),l=e(this);e.ajax({type:"POST",url:"/local/templates/main/include/ajax/forms/ask_question_projects.php",dataType:"json",data:{name:i.val(),email:o.val(),message:r.val()},success:function(e){console.log(e.success),"true"==e.success&&l.closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form--js--publications").click((function(t){t.preventDefault();var n=[];if(e(this).closest("form").find("input, textarea").each((function(){var t=e(this)[0];n.push(a(e(this),t.value))})),n.includes(!1))return!1;var s=e(this).closest("form"),i=s.find("input[name=name]"),o=s.find("input[name=email]"),r=e(this);e.ajax({type:"POST",url:"/local/templates/main/include/ajax/forms/subscribe_to_publications.php",dataType:"json",data:{name:i.val(),email:o.val()},success:function(e){console.log(e.success),"true"==e.success&&r.closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form--js--ask--question").click((function(t){t.preventDefault();var n=[];if(e(this).closest("form").find("input, textarea").each((function(){var t=e(this)[0];n.push(a(e(this),t.value))})),n.includes(!1))return!1;var s=e(this).closest("form"),i=s.find("input[name=name]"),o=s.find("input[name=email]"),r=s.find("textarea[name=content]"),l=e(this);e.ajax({type:"POST",url:"/local/templates/main/include/ajax/forms/ask_question.php",dataType:"json",data:{name:i.val(),email:o.val(),message:r.val()},success:function(e){console.log(e.success),"true"==e.success&&l.closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form--js-services").click((function(t){t.preventDefault();var n=[];if(e(this).closest("form").find("input, textarea").each((function(){var t=e(this)[0];n.push(a(e(this),t.value))})),n.includes(!1))return!1;var s=e(this).closest("form"),i=s.find("input[name=name]"),o=s.find("input[name=email]"),r=s.find("textarea[name=content]"),l=e(this);e.ajax({type:"POST",url:"/local/templates/main/include/ajax/forms/ask_question_services.php",dataType:"json",data:{name:i.val(),email:o.val(),message:r.val()},success:function(e){console.log(e.success),"true"==e.success&&l.closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form--js--contacts").click((function(t){t.preventDefault();var n=[];if(e(this).closest("form").find("input, textarea").each((function(){var t=e(this)[0];n.push(a(e(this),t.value))})),n.includes(!1))return!1;var s=e(this).closest("form"),i=s.find("input[name=name]"),o=s.find("input[name=email]"),r=s.find("textarea[name=content]"),l=e(this);e.ajax({type:"POST",url:"/local/templates/main/include/ajax/forms/write_us.php",dataType:"json",data:{name:i.val(),email:o.val(),message:r.val()},success:function(e){console.log(e.success),"true"==e.success&&l.closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form--js-vacancy").click((function(t){t.preventDefault();var n=[];if(e(this).closest("form").find("input, textarea").each((function(){var t=e(this)[0];n.push(a(e(this),t.value))})),n.includes(!1))return!1;var s=new FormData,i=e(this).closest("form"),o=i.find("input[name=name]").val(),r=i.find("input[name=email]").val(),l=i.find("textarea[name=content]").val(),c=i.find("input[name=file]")[0].files[0],u=e(this);s.set("name",o),s.append("email",r),s.append("message",l),s.append("file",c),e.ajax({type:"POST",url:"/local/templates/main/include/ajax/forms/send_resume.php",data:s,contentType:!1,processData:!1,success:function(e){console.log(e),u.closest(".form-inner").css("opacity",0).next().slideDown(500).css("display","flex")}})})),e(".form-back--js").click((function(){var t=e(this).closest("form");return t.trigger("reset"),t.find("input").parent().removeClass("input--filled"),e(this).closest(".form-send").hide().prev().css("opacity",1),!1}))}.call(this,n(0))},function(e,t,n){(function(e){e(".page-nav--js > *").each((function(t,n){var s=e(this).data("title"),i=e(this).data("href"),a="<li class=".concat(0===n?"active":"","><a href=").concat(i,">").concat(s,"</a></li>");s&&i&&e(".equipmentNav").append(a)}))}).call(this,n(0))},function(e,t,n){(function(e){e(document).ready((function(){e(".ajax_accept_set_cookie").click((function(){e.ajax({type:"GET",url:window.location.href,data:"accept_set_cookie=Y",success:function(){}})}))}))}).call(this,n(0))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(9),s=n(10);var i,a,o,r=[],l=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],c={styles:[{url:"/local/templates/main/assets/images/icons/markerd.svg",width:53,height:63,lineHeight:40,fontFamily:"Montserrat",textSize:14,textColor:"white"}]};function u(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=new google.maps.Marker({position:new google.maps.LatLng(parseFloat(e[0]),parseFloat(e[1])),icon:t||e[2],map:i}),c=n&&n[3]||e&&e[6];!a&&c&&l.addListener("click",(function(){var t=document.getElementById("projectsPopup");t.setAttribute("data-tool",n?n[0]:e[3]),t.setAttribute("data-title",n?n[1]:e[4]),t.setAttribute("data-content",n?n[2]:e[5]),t.setAttribute("data-cat",n?n[3]:e[6]),t.setAttribute("data-image",n?n[4]:e[7]),t.setAttribute("data-link",n?n[5]:e[8]),s.a.open()})),o=new google.maps.InfoWindow,a?(l.addListener("click",(function(){o.setContent('<p><b class="text__xs">'.concat(n?n[0]:e[3],"</b></p><p>").concat(n?n[1]:e[4],"</p><a href=").concat(e[6],' class="text--gray">').concat(n?n[2]:e[5],"</a>")),o.open(i,l)})),google.maps.event.addListener(i,"click",(function(){o.close()}))):(l.addListener("mouseover",(function(){o.setContent('<p><b class="text__xs">'.concat(n?n[0]:e[3],"</b></p>").concat(n?n[1]:e[4])),o.open(i,l)})),l.addListener("mouseout",(function(){o.close()}))),r.push(l)}function d(){!function(e){for(var t=0;t<r.length;t++)r[t].setMap(e)}(null)}e((function(){var t,n,s;e("#googleMaps").length&&(t=document.getElementById("googleMaps"),n=t.dataset.locations,s={center:new google.maps.LatLng(59.91916157,30.3251195),zoom:2,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,zoomControl:!0,scrollwheel:!1,disableDefaultUI:!0,styles:l},i=new google.maps.Map(t,s),JSON.parse(n).forEach((function(e){u(e)})),a=new MarkerClusterer(i,r,c)),e("#google").length&&function(){var e=document.getElementById("google"),t=e.dataset.locations,n={center:new google.maps.LatLng(59.91916157,30.3251195),zoom:11,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!1,zoomControl:!0,scrollwheel:!1,styles:l};i=new google.maps.Map(e,n),JSON.parse(t).forEach((function(e){u(e,null,null,!0)})),a=new MarkerClusterer(i,r,c)}()})),e(".anchorMap").on("click","a",(function(t){t.preventDefault();var n=e(this).attr("href"),s=e(n).offset().top;!function(e){google.maps.event.trigger(r[e],"click")}(e(this).data("id")),e("body,html").animate({scrollTop:s},1e3)}));e(".filters--js li").click((function(){var n=e(this).data("icon"),s=e(this).data("group"),o=e(this).data("coordinates"),l=e(this).data("filter"),p=e(this).data("popup"),f=e(this).data("zoom"),h=e(".filtr-item");e(this).hasClass("active")||(e(".filters--js li").removeClass("active"),e(this).addClass("active"),d(),a.clearMarkers(),r=[],o.forEach((function(e,t){u(e.split(", "),n,p[t]),i.setZoom(f)})),e(".more--js").attr("data-filter",l),h.velocity({scaleX:0,scaleY:0},{display:"none",duration:300}),setTimeout((function(){Object(t.a)(".filtr-item",7,".more--js",!1,l)}),200),c.styles[0].url=s,a=new MarkerClusterer(i,r,c))}))}.call(this,n(0))}]);