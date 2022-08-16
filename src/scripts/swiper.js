import Swiper, { Navigation, Pagination } from 'swiper'

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  breakpoints: {
    320: {
      slidesPerView: 1.25,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3.25,
    },
    1280: {
      slidesPerView: 4,
    },
  },

  centeredSlides: true,
  loop: true,
  spaceBetween: 32,

  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
})

swiper.init()
