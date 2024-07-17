$(document).ready(function () {
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
    callback: function (box) { },
    scrollContainer: null,
    resetAnimation: true,
  });

  wow.init();


  // image-slider-inited
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // header-sticky
  window.onscroll = function () {
    headerFunction();
  };
  var body = document.body;
  var sticky = body.offsetTop;

  function headerFunction() {
    if (window.pageYOffset > 100) {
      body.classList.add("sticky");
    } else {
      body.classList.remove("sticky");
    }
  }
});

// hamburger-menu
function showMenu() {
  $("body").toggleClass("active");
}

function hideMenu() {
  $("body").removeClass("active");
}
