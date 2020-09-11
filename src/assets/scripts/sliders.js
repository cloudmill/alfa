import Swiper from 'swiper';
import { onloadVideoPromise } from "./video";

if ($('.indexSlider').length > 0) {
  let swiperInstances = [];
  $('.indexSlider').each(function (index) {
    const $this = $(this);
    const $slider = $(this)[0];
    const pagination = $this.parent().find(".swiper-pagination")[0];
    const prev = $this.parent().find(".swiper-prev")[0] || $('.swiper-prev-lab')[0];
    const next = $this.parent().find(".swiper-next")[0] || $('.swiper-next-lab')[0];
    const effect = $this.data('effect');
    const duration = $this.data('duration');
    const adaptive = $this.data('adaptive');
    const autoHeight = $this.data('autoheight');
    const column = $this.data('column');
    const loop = $this.data('loop');
    const options = {
      slidesPerView: adaptive ? 'auto' : 1,
      spaceBetween: adaptive ? 15 : 0,
      effect: effect || 'slide',
      simulateTouch: false,
      loop: loop,
      autoplay: {
        delay: 6000,
        disableOnInteraction: true,
      },
      autoHeight: !!autoHeight,
      pagination: {
        el: pagination,
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">0' + (index + 1) + '</span>';
        },
      },
      slidesPerColumn: 1,
      navigation: {
        prevEl: prev,
        nextEl: next,
      },
      breakpoints: {
        768: {
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: column || 1,
        }
      },
    }

    swiperInstances[index] = new Swiper($slider, options);

    let previousIndex;
    swiperInstances[index].on('slideChange', function () {
      const swiper = this;
      previousIndex = swiper.previousIndex;
      const previousSlide = swiper.slides[previousIndex];
      $(previousSlide).addClass('swiper-slide-last');
      setTimeout(() => {
        $(previousSlide).removeClass('swiper-slide-last');
      }, duration || 2000);
    });

    $(window).on("orientationchange", function () {
      setTimeout(() => {
        swiperInstances[index].update();
      }, 800);
    });
  });
}

// index page slider
if ($('.main-slider').length > 0) {
  const interleaveOffset = 0.5;
  const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const isNotMobile = screenWidth >= 768;
  const blobs = [];

  const mainSliderOptions = {
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 7000
    },
    simulateTouch: false,
    loopAdditionalSlides: 10,
    grabCursor: true,
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">0' + (index + 1) + '</span>';
      },
    },
    on: {
      init: function () {
        this.autoplay.stop();
        const videoData = this.el.dataset.videoUrl;
        const jsonData = JSON.parse(videoData);
        const videoModel = $('.swiper-slide-active video')[0];
        if(isNotMobile) {
          for(let i =0; i < jsonData.length; i++) {
            onloadVideoPromise(jsonData[i]).then((e) => {
              blobs.push(e);
              if(blobs.length === jsonData.length) {
                if(videoModel) {
                  const getFirstVideo = blobs.find(x => x.id === 0);
                  videoModel.src = getFirstVideo.vid;
                  $('.swiper-slide-active').addClass('playing');
                  $('.swiper-slide-next').addClass('playing');
                  videoModel.play();
                }
              }
            });
          }
        }
      },
      imagesReady: function () {
        this.el.classList.remove('loading');
        this.autoplay.start();
      },
      slideChange: function () {
        const activeSlide = this.slides[this.activeIndex];
        const videoFromActiveIndex = activeSlide.querySelector('video');
        const swiperSlideIndex = activeSlide.dataset.swiperSlideIndex;
        const getVideo = blobs.find(x => x.id === parseFloat(swiperSlideIndex));

        if(videoFromActiveIndex && isNotMobile) {
          videoFromActiveIndex.src = getVideo && getVideo.vid;
          activeSlide.classList.add('playing');
          videoFromActiveIndex.play();
        }
      },
      slideChangeTransitionStart: function () {
        $('.caption').addClass('hide');
        setTimeout(() => {
          $('.caption').removeClass('hide');
        }, 1000);
      },
      slideChangeTransitionEnd: function () {
        const previousSlide = this.slides[this.previousIndex];
        const videoFromPreviousIndex = previousSlide.querySelector('video');
        let swiper = this,
          captions = swiper.el.querySelectorAll('.caption');
        for (let i = 0; i < captions.length; ++i) {
          captions[i].classList.remove('show');
        }
        if(videoFromPreviousIndex) {
          videoFromPreviousIndex.src = '';
          previousSlide.classList.remove('playing');
        }
        $('.swiper-slide-active .caption').addClass('show');
      },
      progress: function () {
        let swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          let slideProgress = swiper.slides[i].progress,
            innerOffset = swiper.width * interleaveOffset,
            innerTranslate = slideProgress * innerOffset;

          swiper.slides[i].querySelector(".slide-bgimg").style.transform =
            "translateX(" + innerTranslate + "px)";
        }
      },
      touchStart: function () {
        let swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function (speed) {
        let swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".slide-bgimg").style.transition =
            "all " + speed + "ms ease 0s";
        }
      }
    }
  };
  new Swiper('.main-slider', mainSliderOptions);
}


if ($('.aboutSlider').length > 0) {
  const menu = [];
  for (let x = 0; x < $(".aboutSlider .swiper-slide").length; x++) {
    const item = $(".aboutSlider .swiper-slide").eq(x).data("nav");
    menu.push(item);
  }
  new Swiper('.aboutSlider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination-about',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
    },
    navigation: {
      nextEl: '.swiper-next-about',
      prevEl: '.swiper-prev-about',
    },
  });
}

