import Swiper, { Navigation, Pagination, EffectCoverflow } from 'swiper'

const mainSwiper = new Swiper('.main-swiper', {
  modules: [Navigation],
  navigation: {
    prevEl: '.swiper-prev-button',
    nextEl: '.swiper-next-button',
  },
  loop: true,
  spaceBetween: 32,
})

const collectionSwiper = new Swiper('.collection-swiper', {
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
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
  centeredSlides: true,
  loop: true,
  spaceBetween: 32,
})

const ourCollection = new Swiper('.our-collection', {
  modules: [Navigation, EffectCoverflow],
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
  },
  coverflowEffect: {
    rotate: -25,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    prevEl: '.swiper-prev-button',
    nextEl: '.swiper-next-button',
  },
  centeredSlides: true,
  effect: 'coverflow',
  grabCursor: true,
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 32,
})

mainSwiper.init()
ourCollection.init()
collectionSwiper.init()
