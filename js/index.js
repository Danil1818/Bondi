$(document).ready(() => {

  // Search
  $('.search__block').hide();
  $('.search').on('click', function () {
    $('.search__block').slideToggle();
  });
  $('.search__block span').click(function () {
    if ($('.input__search').val() != '') {
      $('.input__search').val('');
    }
  });
  // Header MobileMenu
  $('.header__nav-mobile').hide();
  $('.menu__btn').on('click', () => {
    $('.header__nav-mobile').slideToggle();
  });

  // Portfolio MobileMenu
  $('.portfolio__nav-mobile').hide();
  $('.portfolio__menu-btn').on('click', () => {
    $('.portfolio__nav-mobile').slideToggle();
  });
  // Footer Menu
  $('.link__title-1').on('click', () => {
    $('.footer__item-2 li').css('display', 'block');
  });

  $('.link__title-2').on('click', () => {
    $('.footer__item-3 li').css('display', 'block');
  });
});
