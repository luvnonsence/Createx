$(function () {

  // Фэнси-бокс
  Fancybox.bind()

  // MixitUP 
  var mixer = mixitup('.directions__list');

  // Обращение к кнопкам по фильтру
  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })

  // Smooth Scroll
  new SmoothScroll('a[href*="#"]');

  // Slick Slider
  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    draggable: false,
    waitForAnimate: false,
  })
  $('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })
  $('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })













});