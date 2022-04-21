(function() {
  "use strict";

  let swiper = new Swiper(".about-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false
    },
    // autoHeight: true,
    pagination: {
      el: ".about-slider-pagination",
      clickable: true
    }
  });

  let navbar = document.getElementsByTagName('nav')[0];
  window.addEventListener('scroll', function(){
    if (window.scrollY > 1) {
      navbar.classList.replace('bg-transparent', 'nav-color');
    } else if (window.scrollY <= 0) {
      navbar.classList.replace('nav-color', 'bg-transparent');
    }
  })

  $('#carousel1').owlCarousel({
    autoplay: true,
    loop: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1,
        margin:10
      },

      415: {
        items: 1.2,
        margin:10
      },

      768: {
        items: 2.2,
        margin:10
      },

      1024: {
        items: 2.5,
        margin:10
      },

      1164: {
        items: 3.2,
        margin:10
      }
    }
  })

  $('#carousel2').owlCarousel({
    autoplay: true,
    loop: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1,
        margin:10
      },

      415: {
        items: 1.2,
        margin:10
      },

      768: {
        items: 2.2,
        margin:10
      },

      1024: {
        items: 2.5,
        margin:10
      },

      1164: {
        items: 3.2,
        margin:10
      }
    }
  })
  
})()

    
