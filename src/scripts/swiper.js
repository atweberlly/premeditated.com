import Swiper, { Navigation, Pagination } from 'swiper'

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 32,

  /* navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, */
  pagination: {
    el: '.swiper-pagination',
  },
})

swiper.init()
