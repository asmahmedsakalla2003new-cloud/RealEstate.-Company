var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  /* تفعيل خاصية السحب بالماوس واللمس من الجهتين */
  grabCursor: true, 
  coverflowEffect: {
    rotate: 0,
    /* القيمة السالبة تضمن بقاء الكروت داخل حدود الكونتينر الزرقاء */
    stretch: -10, 
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
});


