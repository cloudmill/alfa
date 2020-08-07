import Swiper from 'swiper/bundle';

if ($('.indexSlider').length > 0) {
  let swiperInstances = [];
  $('.indexSlider').each(function(index) {
    const $this = $(this);
    const pagination = $this.parent().find(".swiper-pagination")[0];
    const prev = $this.parent().find(".swiper-prev")[0] || $('.swiper-prev-lab')[0];
    const next = $this.parent().find(".swiper-next")[0] || $('.swiper-next-lab')[0];
    const effect = $this.data('effect');
    const adaptive = $this.data('adaptive');
    const autoHeight = $this.data('autoheight');

    swiperInstances[index] = new Swiper($(this)[0], {
      slidesPerView: adaptive ? 'auto' : 1,
      spaceBetween: adaptive ? 15 : 0,
      effect: effect || 'slide',
      // autoplay: {
      //   delay: 10000,
      // },
      autoHeight: !!autoHeight,
      pagination: {
        el: pagination,
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">0' + (index + 1) + '</span>';
        },
      },
      navigation: {
        prevEl: prev,
        nextEl: next,
      },
      breakpoints: {
        768: {
          spaceBetween: 0,
          slidesPerView: 1,
        }
      }
    });

    let previousIndex;
    swiperInstances[index].on('slideChange', function () {
      const swiper = this;
      previousIndex = swiper.previousIndex;
      const previousSlide = swiper.slides[previousIndex];
      $(previousSlide).addClass('swiper-slide-last');
      setTimeout(() => {
        $(previousSlide).removeClass('swiper-slide-last');
      }, 2000);
    });
  });

}

if ($('.aboutSlider').length > 0) {
  const menu = [];
  for (let x = 0; x < $(".aboutSlider .swiper-slide").length; x++) {
    const item = $(".aboutSlider .swiper-slide").eq(x).data("nav");
    menu.push(item);
  }
  new Swiper('.aboutSlider', {
    slidesPerView: 1,
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
