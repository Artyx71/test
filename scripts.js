ymaps.ready(function init() {
  let map = new ymaps.Map("map_canvas", {
    center: [55.769392399057935, 37.598786499800106],
    zoom: 15,
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: "4",
  keyboardControl: true,
  grabCursor: true,
  loop: true,
  spaceBetween: 32,

  navigation: {
    nextEl: ".slider-next-icon",
    prevEl: ".slider-prev-icon",
  },
  on: {
    slideChange: function (swiper) {
      document.querySelector(".cards-start").innerHTML =
        (swiper.realIndex < 10 ? "0" : "") + (+swiper.realIndex + 1);
    },
  },

  breakpoints: {
    // when window width is >= 320px
    250: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});

const repairSwiper = new Swiper(".repair-swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: "4",
  keyboardControl: true,
  grabCursor: true,
  loop: true,
  spaceBetween: 32,

  navigation: {
    nextEl: ".repair-next",
    prevEl: ".repair-prev ",
  },
  on: {
    slideChange: function (swiper) {
      document.querySelector(".repair-start").innerHTML =
        (swiper.realIndex < 10 ? "0" : "") + (+swiper.realIndex + 1);
    },
  },

  breakpoints: {
    // when window width is >= 320px
    250: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    // when window width is >= 640px
    630: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});
