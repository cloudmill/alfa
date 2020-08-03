import Filterizr from 'filterizr';

let filterizr;
if($('.filter-container').length) {
  const options = {
    filter: 'all',
    gridItemsSelector: '.filtr-item',
    layout: 'sameWidth',
    filterOutCss: {
      opacity: 0,
      transform: 'scale(0.5)'
    },
    filterInCss: {
      opacity: 1,
      transform: 'scale(1)'
    },
  }

  filterizr = new Filterizr('.filter-container', options);
}

export default filterizr;
