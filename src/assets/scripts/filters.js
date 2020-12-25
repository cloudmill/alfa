// show more
import AOS from "aos";

const multiGrid = {
  service: [],
  conference: [],
  projects: [],
};

export function FuncMulti(block, counter, button, filter, isActive) {
  let x = counter;
  let getLength;
  $(block).velocity({ scaleX: 0, scaleY: 0 }, { display: "none", duration: 0 });
  $('.showMore').hide();
  const items = $(block+':lt('+x+')');

  if(isActive) {
    multiGrid[filter] = $(block + '[data-category='+filter+']');
  } else {
    multiGrid[filter] = [];
  }

  const { service, conference, projects } = multiGrid;
  const mergedArrays = [...service, ...conference, ...projects];

  mergedArrays.sort(function(a, b) {
    const c = $(a).data('index');
    const d = $(b).data('index');
    return c - d;
  });

  const item = mergedArrays.slice(0, x);
  const itemsGrid = $(item);
  // const itemGridLength = mergedArrays.length;


  if(filter) {
    itemsGrid.velocity({scaleX: 1, scaleY: 1}, {display: "block", duration: 300});
    getLength = mergedArrays.length;
  } else {
    items.velocity({ scaleX: 1, scaleY: 1 }, { display: "block", duration: 0 });
    getLength = $(block).length;
  }

  setTimeout(() => {
    AOS.refresh({
      offset: 50,
    });
  }, 600);

  if(x < getLength) {
    $(button).show();
  }

  $(button).click(function () {
    x = (x + 5 <= getLength) ? x + 5 : getLength;
    if(filter) {
      const filterItemGrid = mergedArrays.slice(x, x + 5);
      $(filterItemGrid).velocity({ scaleX: 1, scaleY: 1 }, { display: "block", duration: 300 });
      console.log(x, getLength, filterItemGrid);
    } else {
      $(block + ':lt(' + x + ')').velocity({ scaleX: 1, scaleY: 1 }, { display: "block", duration: 300 });
    }

    if (x >= getLength && x !== 0) {
      $(this).hide();
    }

    setTimeout(() => {
      AOS.refresh({
        offset: 50,
      });
    }, 600);
  });
}

export function showMoreFunc(block, counter, button, firstInit, filter) {
  let x = counter;
  $('.more--js-fl').hide();
  const length = $(block).length;
  const items = $(block+':lt('+x+')');
  const itemsGrid =  $(block + '[data-category='+filter+']:lt('+x+')');
  const itemGridLength = $(block + '[data-category='+filter+']').length;
  $(block).velocity({ scaleX: 0, scaleY: 0 }, { display: "none", duration: 0 });

  if(filter) {
    itemsGrid.velocity({ scaleX: 1, scaleY: 1 }, { display: "block", duration: 300 });
    if(x < itemGridLength) {
      $(button).show();
    }
  } else {
    items.velocity({ scaleX: 1, scaleY: 1 }, { display: "block", duration: 0 });
  }
  if(firstInit) {
    $(button).click(function () {
      const getFilter = $(this)[0].dataset.filter;
      const filterItemGridLength = $(block + '[data-category='+getFilter+']').length;

      if(getFilter) {
        x = (x + 5 <= filterItemGridLength) ? x + 5 : filterItemGridLength;
        const filterItemGrid = $(block + '[data-category='+getFilter+']:lt('+x+')');

        filterItemGrid.velocity({ scaleX: 1, scaleY: 1 }, { display: "block", duration: 300 });
        if (x >= filterItemGridLength && x !== 0) {
          $(this).hide();
        }
      } else {
        x = (x + 5 <= length) ? x + 5 : length;

        $(block + ':lt(' + x + ')').velocity({ scaleX: 1, scaleY: 1 }, { display: "block", duration: 300 });
        if (x >= length && x !== 0) {
          $(this).hide();
        }
      }

      setTimeout(() => {
        AOS.refresh({
          offset: 50,
        });
      }, 600);
    });
  }
}
if($('.acc .acc__card').length) showMoreFunc(".acc .acc__card", 9, '.more--js', true);
if($('.more__item').length) showMoreFunc(".more__item", 7, '.moreP--js', true);
if($('.more-search').length) showMoreFunc(".more-search", 4, '.morePP--js', true);
if(process.env.NODE_ENV === 'development') {
  if($('.filtr-item').length) showMoreFuncMulti(".filtr-item", 7, '.more--js', false);
} else {
  if($('.filtr-item').length) showMoreFunc(".filtr-item", 7, '.more--js', true);
}
// show more
