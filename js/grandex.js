/*
  [JS Index]
*/

/*
  1. preloader
  2. slick slider
    2.1. slick about slider
    2.2. slick contact slider
    2.3. slick ZOOM/FADE slideshow
  3. owl carousel
    3.1. owl works carousel
    3.2. owl news carousel
  4. skills bar
  5. facts counter
  6. navigation
    6.1. navigation icon
    6.2. navigation panels
    6.3. navigation links
    6.4. navigation hover state
  7. fullPage
  8. YouTube player
  9. toggle news content
  10. swiper slider
  11. magnificPopup
  12. contact form
  13. news position reset
*/

$(function () {
  "use strict";

    //GENERO HTML PORTFOLIO
    for (let index = 27; index > 0; index--) {
        let num = index < 10 ? "0" + index : "" + index;
        $(`
            <div class="section dark-mode" id="section${index}">
                <div class="section-title-wrapper">
                <h3 class="section-heading section-heading-dark">
                    <span>${num}.</span>
                </h3>
                </div>
                <div class="hero-fullscreen">
                <div class="borders-l"></div>
                <div class="borders-r"></div>
                <img src="portfolio/Portfolio_cattaneo.0${num}.jpeg" class="portfolio">
                </div>
            </div>
        `).insertAfter("#section0");
        
    }

  // 1. preloader
  $("#preloader").fadeOut(1000);
  $(".preloader-bg").delay(800).fadeOut(1000);

  // 5. facts counter
  $(".facts-counter-number").appear(function () {
    var count = $(this);
    count.countTo({
      from: 0,
      to: count.html(),
      speed: 1200,
      refreshInterval: 60,
    });
  });

  // 6. navigation
  // 6.1. navigation icon
  $(".navigation-icon").on("click", function () {
    $(this).toggleClass("active");
  });
  // 6.2. navigation panels
  $(".navigation-fire").on("click", function (e) {
    if (
      $(
        ".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right"
      ).hasClass("open")
    ) {
      $(
        ".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right"
      ).removeClass("open");
    } else {
      $(
        ".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right"
      ).addClass("open");
    }
  });
  // 6.3. navigation links
  $("nav.navigation-menu a").on("click", function (e) {
    $(".navigation-icon").removeClass("active");
    $(
      ".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right"
    ).removeClass("open");
  });
  // 6.4. navigation hover state
  hoverMenu();
  imgMenu();
  function hoverMenu() {
    $(".menu li a").on("mouseenter", function () {
      var ref = $(this).data("ref"),
        menuImg = $('.menu-img[data-ref="' + ref + '"]');
      $(".menu li a").removeClass("active");
      $(this).addClass("active");
      $(".menu-img").removeClass("active");
      menuImg.addClass("active");
    });
  }
  function imgMenu() {
    $("[data-bg]").each(function () {
      var bg = $(this).data("bg");
      $(this).css({
        "background-image": "url(" + bg + ")",
        "background-position": "center center",
        "background-size": "cover",
      });
    });
  }

  // 7. fullPage
  $("#fullpage").fullpage({
    anchors: ["home", "about", "services", "works", "news", "contact"],
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: [
      "Home",
      "About",
      "Services",
      "Works",
      "News",
      "Contact",
    ],
    responsiveWidth: 995,
    autoScrolling: true,
    scrollBar: false,
    afterResponsive: function (isResponsive) {},
  });

  // 8. YouTube player
  // $("#bgndVideo").YTPlayer();

  // 9. toggle news content
  $(".the-button-details-news").on("click", function () {
    $(".logo, .navigation-icon-wrapper").addClass("off").removeClass("on");
    var divClass = $(this).attr("data-id");
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $("." + divClass).addClass("open");
    } else {
      $(this).addClass("open");
      $("." + divClass).addClass("open");
    }
  });
  $(".the-button-details-news-closer").on("click", function () {
    $(".panel-left, .panel-right").removeClass("open");
    $(".logo, .navigation-icon-wrapper").removeClass("off").addClass("on");
  });

  // 10. swiper slider
  // var swiper = new Swiper(".parallax .swiper-container", {
  //     autoplay: false,
  //     loop: false,
  //     speed: 1600,
  //     grabCursor: true,
  //     mousewheel: false,
  //     keyboard: true,
  //     simulateTouch: true,
  //     parallax: true,
  //     effect: "slide",
  //     pagination: false,
  //     scrollbar: false,
  //     navigation: {
  //         nextEl: ".slide-next",
  //         prevEl: ".slide-prev"
  //     }
  // });
  // var swiper = new Swiper(".swiper-container-wrapper .swiper-container-2", {
  //     preloadImages: false,
  //     autoplay: {
  //         delay: 4000,
  //         disableOnInteraction: false
  //     },
  //     init: true,
  //     loop: false,
  //     speed: 1200,
  //     grabCursor: true,
  //     mousewheel: false,
  //     keyboard: true,
  //     simulateTouch: true,
  //     parallax: true,
  //     effect: "slide",
  //     pagination: false,
  //     navigation: {
  //         nextEl: ".slide-next-2",
  //         prevEl: ".slide-prev-2"
  //     },
  // 	scrollbar: {
  //         el: ".swiper-scrollbar",
  //         draggable: true
  //     }
  // });
  // swiper.on("slideChangeTransitionStart", function() {
  //     $(".slider-progress-bar").removeClass("slider-active");
  //     $(".hero-bg").find("video").each(function() {
  //         this.pause();
  //     });
  // });
  // swiper.on("slideChangeTransitionEnd", function() {
  //     $(".slider-progress-bar").addClass("slider-active");
  //     $(".hero-bg").find("video").each(function() {
  //         this.play();
  //     });
  // });
  // swiper.on("slideChangeTransitionStart", function() {
  //     $(".slider-progress-bar").removeClass("slider-active");
  // });
  // swiper.on("slideChangeTransitionEnd", function() {
  //     $(".slider-progress-bar").addClass("slider-active");
  // });
  // var playButton = $(".swiper-slide-controls-play-pause-wrapper");
  // function autoEnd() {
  //     playButton.removeClass("slider-on-off");
  //     swiper.autoplay.stop();
  // }
  // function autoStart() {
  //     playButton.addClass("slider-on-off");
  //     swiper.autoplay.start();
  // }
  // playButton.on("click", function() {
  //     if (playButton.hasClass("slider-on-off")) autoEnd();
  //     else autoStart();
  //     return false;
  // });

  // 11. magnificPopup
  // $(".popup-photo").magnificPopup({
  //     type: "image",
  //     gallery: {
  //         enabled: false,
  //         tPrev: "",
  //         tNext: "",
  //         tCounter: "%curr% / %total%"
  //     },
  //     removalDelay: 100,
  //     mainClass: "mfp-fade",
  //     fixedContentPos: false
  // });
  // $(".popup-photo-gallery").each(function() {
  //     $(this).magnificPopup({
  //         delegate: "a",
  //         type: "image",
  //         gallery: {
  //             enabled: true
  //         },
  //         removalDelay: 100,
  //         mainClass: "mfp-fade",
  //         fixedContentPos: false
  //     });
  // });

  // 12. contact form
  $("form#form").on("submit", function () {
    $("form#form .error").remove();
    var s = !1;
    if (
      ($(".requiredField").each(function () {
        if ("" === jQuery.trim($(this).val()))
          $(this).prev("label").text(),
            $(this)
              .parent()
              .append('<span class="error">This field is required</span>'),
            $(this).addClass("inputError"),
            (s = !0);
        else if ($(this).hasClass("email")) {
          var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          r.test(jQuery.trim($(this).val())) ||
            ($(this).prev("label").text(),
            $(this)
              .parent()
              .append('<span class="error">Invalid email address</span>'),
            $(this).addClass("inputError"),
            (s = !0));
        }
      }),
      !s)
    ) {
      $("form#form input.submit").fadeOut("normal", function () {
        $(this).parent().append("");
      });
      var r = $(this).serialize();
      $.post($(this).attr("action"), r, function () {
        $("form#form").slideUp("fast", function () {
          $(this).before(
            '<div class="success">Your email was sent successfully.</div>'
          );
        });
      });
    }
    return !1;
  });
});

// 13. news position reset
$(".the-button-details-news").on("click", function () {
  target = $(".news-page-img-wrapper");
  $("html, body").animate(
    {
      scrollTop: target.offset().top,
    },
    500
  );
});
