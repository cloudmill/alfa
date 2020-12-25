$( document ).ready(function(){
  clickSearch();
});


function clickSearch() {

  $('.search').on('click', function(){
    $('.search__box').addClass('search__box--active');
  });

  $('.search__close').on('click', function(){
    $('.search__box').removeClass('search__box--active');
  });

}
