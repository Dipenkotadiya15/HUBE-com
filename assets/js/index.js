// Slider in JS

$('.owl-carousel').owlCarousel({
  // slideSpeed: 200,
  // paginationSpeed: 300,
  singleItem: true,
  animateIn: 'fadeIn', // add this
  animateOut: 'fadeOut', // and
  loop: true,
  margin: 10,
  dots: false,
  nav: true,
  mouseDrag: false,
  autoplay: true,
  autoplayTimeout: 7000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
})
