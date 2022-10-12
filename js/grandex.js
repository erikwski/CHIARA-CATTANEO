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

  $("html").on("click", () => {
    $("html").off("click");
    var audio = new Audio("../musica_bg.mp3");
    audio.play();
  });

  //GENERO HTML PORTFOLIO
  for (let index = 28; index > 0; index--) {
    let num = index < 10 ? "0" + index : "" + index;
    $(`
      <div class="section dark-mode" id="section${index}">
        <div class="hero-fullscreen">
          <div class="borders-l"></div>
          <div class="borders-r"></div>
          <img src="portfolio/page_0${num}.jpeg" class="portfolio">
        </div>
      </div>
  `).insertAfter("#section0");
  }
  loadYoutubeVideo();
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
      if (ref === "menu-1") {
        $(".panel-from-right, .panel-overlay-from-left").addClass(
          "fast-transaction"
        );
        $(".panel-from-right").removeClass("opacity-on-open");
        $(".panel-overlay-from-left").removeClass("extend-on-open");
        $(".panel-from-right, .panel-overlay-from-left").removeClass(
          "fast-transaction"
        );
      } else {
        $(".panel-from-right").addClass("opacity-on-open");
        $(".panel-overlay-from-left").addClass("extend-on-open");
      }
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

  window.addEventListener("resize", function () {
    resizeEvent();
  });

  function resizeEvent() {
    if (window.innerWidth <= 996) {
      window.scrollTo(0, 0);
      $("body").addClass("hide_overflow");
      $(".navigation-fire").hide();
    } else {
      $("body").removeClass("hide_overflow");
      $(".navigation-fire").show();
    }
  }
  function loadYoutubeVideo() {
    // VIAGGIO SPAZIALE
    $("#section23").append(`
      <div id="video_yt_1" class="youtube_video" style="position: absolute;left: 11.5%;width: 20%;top: 21%;height: 57%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
        </svg>
      </div>
    `);
    $("#video_yt_1").click(() => {
      BigPicture({
        el: document.getElementById("video_yt_1"),
        ytSrc: "Asde-NfNPe8",
      });
    });
    $("#section23").append(`
      <div id="video_yt_2" class="youtube_video" style="position: absolute;right: 12%;width: 20%;top: 21%;height: 42%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
        </svg>
      </div>
    `);
    $("#video_yt_2").click(() => {
      BigPicture({
        el: document.getElementById("video_yt_2"),
        ytSrc: "FFpryYgbjx4",
      });
    });
    $("#section23").append(`
      <div id="video_yt_3" class="youtube_video" style="position: absolute;left: 40.5%;width: 19%;top: 27%;height: 37%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
        </svg>
      </div>  
    `);
    $("#video_yt_3").click(() => {
      BigPicture({
        el: document.getElementById("video_yt_3"),
        ytSrc: "NR-KEwV4FUw",
      });
    });

    // VIDEO PROMOZIONALE MOONBEAN
    $("#section27").append(`
      <div id="video_yt_4" class="youtube_video" style="position: absolute;left: 9.5%;width: 81%;top: 12%;height: 81%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
        </svg>
      </div>
    `);
    $("#video_yt_4").click(() => {
      BigPicture({
        el: document.getElementById("video_yt_4"),
        ytSrc: "wfioSULDUX8",
      });
    });

    // POSTER
    $("#section19").append(`
      <div id="video_yt_5" class="youtube_video" style="position: absolute;left: 52.3%;width: 36%;top: 57%;height: 36%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
        </svg>
      </div>
    `);
    $("#video_yt_5").click(() => {
      BigPicture({
        el: document.getElementById("video_yt_5"),
        ytSrc: "WmgMn9nvcug",
      });
    });

    //timeline
    $("#section20").append(`
      <div id="video_yt_6" class="youtube_video" style="position: absolute;left: 68%;width: 28.4%;top: 23%;height: 28.5%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
        </svg>
      </div>
    `);
    $("#video_yt_6").click(() => {
      BigPicture({
        el: document.getElementById("video_yt_6"),
        ytSrc: "cRwZl3qh_H0",
      });
    });

    //comunicazione
    $("#section13").append(`
      <div id="video_yt_7" class="youtube_video" data-property="{videoURL:'https://youtu.be/hfN6Ogc5hDM',containment:'body',autoPlay:true, mute:true, startAt:0, opacity:1}" style="position: absolute;left: 46.8%;width: 28.5%;top: 64.4%;height: 28.5%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
        </svg>
      </div>
    `);
    $("#video_yt_7").click(() => {
      BigPicture({
        el: document.getElementById("video_yt_7"),
        ytSrc: "hfN6Ogc5hDM",
      });
    });
    //INTIMAMENTE DISTRATTA 1
    $("#section4").append(`
      <div id="video_yt_8" class="youtube_video" style="position: absolute;left: 49.9%;width: 37.4%;top: 59%;height: 36.45%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
        </svg>
      </div>
    `);
    $("#video_yt_8").click(() => {
      BigPicture({
        el: document.getElementById("video_yt_1"),
        ytSrc: "g3ixSA2ZJM0",
      });
    });
    //INTIMAMENTE DISTRATTA 2
    $("#section6").append(`
      <div id="video_yt_9" class="youtube_video" style="position: absolute;left: 9.3%;width: 81.4%;top: 7.75%;height: 81.5%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
        </svg>
      </div>
    `);
    $("#video_yt_9").click(() => {
      BigPicture({
        el: document.getElementById("video_yt_1"),
        ytSrc: "4y7wWcGQh30",
      });
    });
    //INTIMAMENTE DISTRATTA 3
    $("#section8").append(`
      <div id="video_yt_10" class="youtube_video" style="position: absolute;left: 64.1%;width: 23.3%;top: 13.4%;height: 73.2%;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
        </svg>
      </div>
    `);
    $("#video_yt_10").click(() => {
      BigPicture({
        el: document.getElementById("video_yt_1"),
        ytSrc: "p3k8fZNgk0Q",
      });
    });
  }
  resizeEvent();

  // 7. fullPage
  $("#fullpage").fullpage({
    anchors: [
      "home", // pag. 1
      "about_me", // pag. 2
      "", // pag. 3
      "exhibit_design", // pag. 4
      "", // pag. 5
      "", // pag. 6
      "", // pag. 7
      "", // pag. 8
      "", // pag. 9
      "", // pag. 10
      "", // pag. 11
      "", // pag. 12
      "", // pag. 13
      "", // pag. 14
      "grafica_editoriale", // pag. 15
      "", // pag. 16
      "", // pag. 17
      "data_visualization", // pag. 18
      "", // pag. 19
      "", // pag. 20
      "", // pag. 21
      "", // pag. 22
      "grafica_pubblicitaria", // pag. 23
      "", // pag. 24
      "branding", // pag. 25
      "", // pag. 26
      "", // pag. 27
      "", // pag. 28
      "contatti", // pag. 29
    ],
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: [
      "intro", // pag. 1
      "inizio_portfolio", // pag. 2
      "", // pag. 3
      "Exhibit design e comunicazione", // pag. 4
      "", // pag. 5
      "", // pag. 6
      "", // pag. 7
      "", // pag. 8
      "", // pag. 9
      "", // pag. 10
      "", // pag. 11
      "", // pag. 12
      "", // pag. 13
      "", // pag. 14
      "Grafica da stregoneria e satanismo", // pag. 15
      "", // pag. 16
      "", // pag. 17
      "Data da Baudelaire", // pag. 18
      "", // pag. 19
      "", // pag. 20
      "", // pag. 21
      "", // pag. 22
      "Grafica pubblicitaria da fornasetti", // pag. 23
      "", // pag. 23
      "Brand da moonbeam", // pag. 24
      "", // pag. 25
      "", // pag. 26
      "", // pag. 27
      "I miei contatti", // pag. 28
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
