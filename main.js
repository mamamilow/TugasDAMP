document.addEventListener("DOMContentLoaded", function () {
    // Menu toggle logic
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
  
    if (menu && navbar) {
      menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
      };
  
      window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
      };
    }
  
    // Accordion FAQ logic
    const buttons = document.querySelectorAll(".accordion-button");
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const content = button.nextElementSibling;
  
        document.querySelectorAll(".accordion-button").forEach((btn) => {
          if (btn !== button) {
            btn.classList.remove("active");
            btn.nextElementSibling.style.maxHeight = null;
          }
        });
  
        button.classList.toggle("active");
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  
    // Swiper - projectSwiper
    if (typeof Swiper !== 'undefined') {
      new Swiper(".projectSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }
      });
  
      // Swiper - categorySwiper
      new Swiper(".categorySwiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          280: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          510: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          750: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      });
    }
  
    // Countdown logic
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 4);
  
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;
  
      if (distance <= 0) {
        const countdown = document.querySelector(".countdown");
        if (countdown) {
          countdown.innerHTML = "<strong>Sale Ended!</strong>";
        }
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("days").textContent = String(days).padStart(2, '0');
      document.getElementById("hours").textContent = String(hours).padStart(2, '0');
      document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
      document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }
  
    setInterval(updateCountdown, 1000);
    updateCountdown();
  });
  