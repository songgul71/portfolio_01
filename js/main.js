
$(function () { //문서준비 이벤트 시작 

  //-- HEADER
  $(".depth2,.depth2_bg").hide();

  $(".gnb>li").mouseenter(function () {
    let hover = $(this).find(".depth2");
    $("#header").addClass("active");
    hover.stop().fadeIn();
    $(".depth2_bg").stop().fadeIn();
  });

  $(".gnb>li").mouseleave(function () {
    let hover = $(this).find(".depth2");
    $("#header").removeClass("active");
    hover.stop().fadeOut();
    $(".depth2_bg").stop().fadeOut();
  });

  // M GNB
  $(".mgnb_btn .ham").click(function () {
    $(".mgnb_wrap, .mgnb_btn .close").stop().fadeIn();
    $(".mgnb_btn .ham, .up").hide();
  });
  $(".mgnb_btn .close").click(function () {
    $(".mgnb_wrap, .mgnb_btn .close").stop().fadeOut();
    $(".mgnb_btn .ham, .up").stop().fadeIn();
  });


  //-- BEST MENU --//
  const best_menu = new Swiper(".best_menu", {

    loop: true,
    centeredSlides: true,

    autoplay: {
      delay: 3000,
      disableOnIneraction: false,
    },

    speed: 1000,
    slidesPerView: 1, //모바일 기준
    spaceBetween: 0, //모바일 기준

    pagination: {
      el: ".swiper-pagination",
      type: "fraction", // "bullets", "fraction", "progressbar"
      clickable: true, // false(기본값) 클릭가능여부
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: { //min-width 기준
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: { //min-width 기준
        slidesPerView: 5,
        spaceBetween: 120,
      },
    },
  });

  //--  EVENT  --//
  const event_banner = new Swiper(".event_banner", {

    loop: true,
    autoplay: {
      delay: 3000,
      disableOnIneraction: false,
      centeredSlides: true,
    },

    speed: 1000,
    slidesPerView: 1, //모바일 기준
    spaceBetween: 0, //모바일 기준

  });

  //-- MAIN VISUAL --//
  const mv = new Swiper(".mv", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnIneraction: false,
    },
    speed: 1500,
  });


});
