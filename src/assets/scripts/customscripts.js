import AOS from "aos";

// accordion
$('.accordion li').click(function (e) {
  e.preventDefault();
  $('.accordion li').removeClass('active');
  $(this).addClass('active');
});

$('.acc__title').click(function(e) {
  e.preventDefault();
  const dropDown = $(this).next();

  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).parent().removeClass('active');
  } else {
    $('.acc__panel').slideUp(800);
    $(this).closest('.acc').find('.acc__title.active').removeClass('active').parent().removeClass('active');
    $(this).addClass('active');
    $(this).parent().addClass('active');
  }

  dropDown.slideToggle();

  // setTimeout(() => {
  //   AOS.init({
  //     offset: 50,
  //   });
  // }, 500);
});
// accordion

// show more
export function showMoreFunc(block, counter, button, firstInit, filter) {
  let x = counter;
  const length = $(block).length;
  const items = $(block+':lt('+x+')');
  const itemsGrid =  $(block + '[data-category='+filter+']:lt('+x+')');
  const itemGridLength = $(block + '[data-category='+filter+']').length;
  $(block).hide();

  if(filter) {
    itemsGrid.show();
    if(x < itemGridLength) {
      $(button).show();
    }
  } else {
    items.show();
  }
  if(firstInit) {
    $(button).click(function () {
      const getFilter = $(this)[0].dataset.filter;
      const filterItemGridLength = $(block + '[data-category='+getFilter+']').length;

      if(getFilter) {
        x = (x + 5 <= filterItemGridLength) ? x + 5 : filterItemGridLength;
        const filterItemGrid = $(block + '[data-category='+getFilter+']:lt('+x+')');

        filterItemGrid.slideDown(500);
        if (x >= filterItemGridLength && x !== 0) {
          $(this).hide();
        }
      } else {
        x = (x + 5 <= length) ? x + 5 : length;

        $(block + ':lt(' + x + ')').slideDown(500);
        if (x >= length && x !== 0) {
          $(this).hide();
        }
      }

      setTimeout(() => {
        AOS.init({
          offset: 50,
        });
      }, 500);
    });
  }
}
if($('.acc .acc__card').length) showMoreFunc(".acc .acc__card", 9, '.more--js', true);
if($('.publications-item').length) showMoreFunc(".publications-item", 7, '.moreP--js', true);
if($('.filtr-item').length) showMoreFunc(".filtr-item", 7, '.more--js', true);
// show more

$('.showMoreText-link').click(function () {
  $(this).parent().addClass('active');
  $(this).hide();
});

// filtering
function filterLogic(value, condition, isCharacter, elem) {
  const list = $('.glossary-list .acc__card');
  let counter = 0;

  // filter it
  if(condition) {
    list.hide();
    $(list)
      .filter(function (index, item) {
        const getTitle = $(item)[0].dataset.title;
        const regex = isCharacter
          ? getTitle.startsWith(value)
          : getTitle.toLowerCase().includes(value.toLowerCase());

        if(regex) counter++;
        return regex;
      }).slideDown(500);
    if(isCharacter) {
      elem.addClass('active');
    }
    $(".abc--js li").removeClass('active');
    $('.glossary-results').addClass('active');
    $('.glossary-results-title span').text(counter);
    $('.glossary-results-desc span').text(value);
    $('.more--js').hide();
  } else {
    if(!isCharacter) {
      $('.glossary-results').removeClass('active');
      $('.more--js').show();
      showMoreFunc(".acc .acc__card", 9, '.more--js', false);
    }
  }

  setTimeout(() => {
    AOS.init({
      offset: 50,
    });
  }, 500);
}

$(".abc--js li").click(function () {
  const getCharacter = $(this).data('title');
  filterLogic(getCharacter, !$(this).hasClass('active'), true, $(this));
});

$(".search--js").click(function () {
  const value = $(this).parent().find('input')[0].value;
  if(!value) return;
  filterLogic(value, value, false);
});

$(document).on('keypress',function(e) {
  if($('.glossary-search').length && e.which == 13) {
    const value = $('.glossary-search input')[0].value;
    if(!value) return;
    filterLogic(value, value, false);
  }
});
// filtering


$('.input__file-js').change(function() {
  $('.input__file-js').each(function() {
    const name = this.value;
    const reWin = /.*\\(.*)/;
    let fileTitle = name.replace(reWin, "$1");
    const reUnix = /.*\/(.*)/;
    fileTitle = fileTitle.replace(reUnix, "$1");
    $(this).parent().parent().find('.input__name-js').val(fileTitle);
    $('.input__text-js').text(fileTitle);
  });
});


//test form
$('.form--js').click(function () {
  $(this).closest('.form-inner').css('opacity', 0).next().slideDown(500).css('display', 'flex');
  return false;
});
$('.form-back--js').click(function () {
  $(this).closest('.form-send').hide().prev().css('opacity', 1);
  return false;
});
//test form


// sticky
export function sticky() {
  const $window = $(window);
  const $sidebar = $(".sidebar");
  if ($sidebar.length) {
    const $sidebarHeight = $sidebar.innerHeight();
    const $footerOffsetTop = $(".stopper").offset().top;
    const $sidebarOffset = $sidebar.offset();

    $window.scroll(function () {
      const windScroll = $window.scrollTop();

      $('.template__item--js').each(function (i) {
        if ($(this).position().top <= windScroll + 60) {
          $('.equipmentNav li.active').removeClass('active');
          $('.equipmentNav li').eq(i).addClass('active');
        }
      });

      if (windScroll > $sidebarOffset.top) {
        $sidebar.addClass("fixed");
      } else {
        $sidebar.removeClass("fixed");
      }
      if (windScroll + $sidebarHeight > $footerOffsetTop) {
        $sidebar.css({"top": -(windScroll + $sidebarHeight - $footerOffsetTop)});
      } else {
        $sidebar.css({"top": "10px",});
      }
    });
  }
}
// sticky

