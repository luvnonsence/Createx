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

  // Slick Slider 1
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

  // Slick Slider 2
  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    waitForAnimate: false,
    appendDots: $('.testimonials__dots'),
  })
  $('.testimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

  // Аккордеон 1
  // $('.program__acc-link').on('click', function (e) {
  //   e.preventDefault()
  //   $(this).toggleClass('program__acc-link--active')
  //   $(this).children('.program__acc-text').slideToggle()
  // })

  // Аккордеон 2
  $('.program__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('program__acc-link--active')) {
      $(this).removeClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideUp()
    } else {
    $('.program__acc-link').removeClass('program__acc-link--active')
    $('.program__acc-text').slideUp()
    $(this).addClass('program__acc-link--active')
    $(this).children('.program__acc-text').slideDown()
    }
  })








});