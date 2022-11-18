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
      document.querySelector(".slider-start").innerHTML =
        (swiper.realIndex < 10 ? "0" : "") + (+swiper.realIndex + 1);
    },
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});
