$('.page-nav--js > *').each(function (item, index) {
  const title = $(this).data('title');
  const href = $(this).data('href');
  const link = `<li class=${index === 0 ? 'active' : ''}><a href=${href}>${title}</a></li>`;
  if(title && href) {
    $('.equipmentNav').append(link);
  }
});
