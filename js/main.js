$(function () {

  // 전체 메뉴 보기
  $(".mgnb_wrap").hide();

  $(".ham").click(function () {
    $(".mgnb_wrap").fadeIn();
  });

  $(".mgnb_close").click(function () {
    $(".mgnb_wrap").fadeOut();
  });


  $(".m_gnb > li").click(function () {
    $(this).find(".m_depth2").slideDown();
  });

  // 메인 비주얼
  const main_banner = new Swiper('.main_banner', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true, // false(기본값) 클릭가능여부
    },
  });

  // 메뉴 탭
  $(".tab_con .cont").not(":first").hide();

  $(".tab_btn li").click(function () {
    let num = $(this).index();
    $(".tab_con>li").eq(num).show().siblings().hide();
    $(".menu_type").eq(num).addClass('active').siblings().removeClass('active');
  });

  // 메뉴 탭 슬라이드
  const tab_con = new Swiper('.cont', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 80,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "bullets",
    //   clickable: true,
    // },

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    }

  });

  // 할리스 매장 슬라이드
  const swiperNewsletter = new Swiper(".store_list", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 21,
      }
    }
  });

  // 할리스 경쟁력 슬라이드
  const left_box = new Swiper('.swiper_about', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true, // false(기본값) 클릭가능여부
    },
  });

  const right_box = new Swiper('.right_box', {
  }); //두개 연결할 거니까 그냥 기본 값으로만 두면 됨.

  left_box.controller.control = right_box;
  right_box.controller.control = left_box;
  //각각의 슬라이드 작성한 후 가장 아래에 작성해야 두개가 연결 됨!


});