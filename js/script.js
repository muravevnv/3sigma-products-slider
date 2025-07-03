document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".js-productions-other-slider")) {
    const productionsOtherSliderCounterCurr = document.querySelector(
      ".js-productions-other-slider-counter-current"
    );
    const productionsOtherSliderCounterAll = document.querySelector(
      ".js-productions-other-slider-counter-all"
    );

    const productionsInfoSlider = new Swiper(".js-productions-info-slider", {
      slidesPerView: 1,
      spaceBetween: 16,
      allowTouchMove: false,
    });

    const productionsOtherSlider = new Swiper(".js-productions-other-slider", {
      slidesPerView: "auto",
      spaceBetween: 10,
      centeredSlides: true,
      navigation: {
        nextEl: ".js-productions-other-slider-next",
        prevEl: ".js-productions-other-slider-prev",
      },
      slideToClickedSlide: true,
      breakpoints: {
        1024: {
          direction: "vertical",
          spaceBetween: 0,
          centeredSlides: false,
        },
      },
    });

    const productionsMainSlider = new Swiper(".js-productions-main-slider", {
      slidesPerView: 1,
      spaceBetween: 16,
      allowTouchMove: false,
      navigation: {
        nextEl: ".js-productions-main-slider-next",
        prevEl: ".js-productions-main-slider-prev",
      },
      thumbs: {
        swiper: productionsOtherSlider,
      },
      on: {
        slideChange: function () {
          productionsInfoSlider.slideTo(this.activeIndex);
        },
      },
    });

    productionsOtherSlider.on("init", function () {
      productionsOtherSliderCounterCurr.innerHTML = this.realIndex + 1;
      productionsOtherSliderCounterAll.innerHTML = this.slides.length;
    });

    productionsOtherSlider.on("slideChange", function () {
      productionsOtherSliderCounterCurr.innerHTML = this.realIndex + 1;
      productionsOtherSliderCounterAll.innerHTML = this.slides.length;
      productionsMainSlider.slideTo(this.realIndex);
      productionsInfoSlider.slideTo(this.activeIndex);
    });

    const productionsGallerySlider = document.querySelectorAll(
      ".js-productions-gallery-slider"
    );

    const productionsThumbsSlider = document.querySelectorAll(
      ".js-productions-thumbs-slider"
    );

    const productionsThumbsSliderPrev = document.querySelectorAll(
      ".js-productions-thumbs-slider-prev"
    );

    const productionsThumbsSliderNext = document.querySelectorAll(
      ".js-productions-thumbs-slider-next"
    );

    for (i = 0; i < productionsGallerySlider.length; i++) {
      const productionsThumbsSwiper = new Swiper(productionsThumbsSlider[i], {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: productionsThumbsSliderNext[i],
          prevEl: productionsThumbsSliderPrev[i],
        },

        breakpoints: {
          1024: {
            spaceBetween: 30,
          },
        },
      });
      
      const productionsGallerySwiper = new Swiper(productionsGallerySlider[i], {
        slidesPerView: 1,
        spaceBetween: 16,

        thumbs: {
          swiper: productionsThumbsSlider[i],
        },
      });
    }
  }
});
