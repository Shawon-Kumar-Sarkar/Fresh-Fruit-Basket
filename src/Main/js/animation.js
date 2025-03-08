const slide1 = document.getElementById("slide-title-1");
const slide2 = document.getElementById("slide-title-2");
const slide3 = document.getElementById("slide-title-3");
const slide4 = document.getElementById("slide-title-4");
const slide5 = document.getElementById("slide-title-5");

const swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  on: {
    init: function () {
      const currentSlide = this.realIndex + 1;

      if (currentSlide) {
        slide1.classList.add("slider-animation");
      }
    },
    slideChangeTransitionEnd: function () {
      const currentSlide = this.realIndex + 1;

      switch (currentSlide) {
        case 1:
          slide1.classList.add("slider-animation");
          slide2.classList.remove("slider-animation");
          slide5.classList.remove("slider-animation");
          break;
        case 2:
          slide2.classList.add("slider-animation");
          slide1.classList.remove("slider-animation");
          slide3.classList.remove("slider-animation");
          break;
        case 3:
          slide3.classList.add("slider-animation");
          slide2.classList.remove("slider-animation");
          slide4.classList.remove("slider-animation");
          break;
        case 4:
          slide4.classList.add("slider-animation");
          slide3.classList.remove("slider-animation");
          slide5.classList.remove("slider-animation");
          break;
        case 5:
          slide5.classList.add("slider-animation");
          slide4.classList.remove("slider-animation");
          slide1.classList.remove("slider-animation");
          break;

        default:
          break;
      }
    },
  },
});
