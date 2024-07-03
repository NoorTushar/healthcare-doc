var swiper = new Swiper(".swiper-container.swiper-testimonial", {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next-test",
      prevEl: ".swiper-button-prev-test",
   },
   breakpoints: {
      //
      0: {
         slidesPerView: 1,
         centeredSlides: false,
         spaceBetween: 20,
      },
      //
      768: {
         slidesPerView: 2,
         centeredSlides: false,
         spaceBetween: 30,
      },
      //
      992: {
         slidesPerView: 3,
         centeredSlides: false,
         spaceBetween: 30,
      },
   },
});

// faq

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
   faq.addEventListener("click", () => {
      faq.classList.toggle("active");
   });
});
