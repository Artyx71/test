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
});
