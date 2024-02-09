var swiper = new Swiper(".abc", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      520:{
        slidesPerView:2,
      },
      950:{
        slidesPerView:3,
      },
    },
  });

  