let slickSlider = $('.benefit__wrap');

$(document).ready(function () {

  function toggleBurger(trigerElem) {
    $(trigerElem).on('click', function () {
      $('.promo-panel').toggleClass('promo-panel_active');
      $('.burger__elem').toggleClass('burger__elem_active');
    });
  }

  toggleBurger('.promo-panel__link');
  toggleBurger('.burger');

  //slick-slider
  if (isMobile()) {
    initializedSlider();
  }

  $(window).resize(function () {
    if (isMobile()) {
      if (!slickSlider.hasClass('slick-initialized')) {
        initializedSlider();
      }
    } else {
      if (slickSlider.hasClass('slick-initialized')) {
        slickSlider.slick('unslick');
      }

    }
  });

  function isMobile() {
    return $(window).width() < 576;
  }

  function initializedSlider() {
    slickSlider.slick({
      prevArrow: '<button class="arrows arrows_prev"><img src="icons/next-arrow.svg" alt="arrow"></button>',
      nextArrow: '<button class="arrows arrows_next"><img src="icons/next-arrow.svg" alt="arrow"></button>',
      autoplay: true
    });
  }

  // slider reviews
  $('.review__users').slick({
    variableWidth: true,
    slidesToScroll: 1,
    asNavFor: '.review__wrapper',
    prevArrow: '<img class="review__arrow review__arrow_left" src="icons/angle-left-solid.svg" alt="left-arrow">',
    nextArrow: '<img class="review__arrow review__arrow_right" src="icons/angle-right-solid.svg" alt="left-arrow">',
    centerMode: true,
    autoplay: true
  });

  $('.review__wrapper').slick({
    variableWidth: true,
    arrows: false,
  });

  //tabs
  $('.tabs__manu-item').on('click', function () {
    if ($(this).hasClass('tabs__manu-item_active')) {
      return;
    }
    $(this)
      .addClass('tabs__manu-item_active').siblings().removeClass('tabs__manu-item_active')

    $('.products__catalog').removeClass('products__catalog_active').eq($(this).index()).addClass('products__catalog_active');
  })

  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated'
  });
  wow.init();

  //validation form
  $("form").each(function () {
    $(this).validate({
      messages: {
        question: "*Please enter your question",
        phone: "*Enter the correct phone number",
        email: {
          required: "*Please enter your email",
          email: "*Your mail must match the template name@domain.com"
        }
      }
    });

  });

  //Phone mask
  jQuery(function ($) {
    $("input[name=phone]").mask("+38(099) 999 99 99");
  });

  //modals
  $('.modal__close').on('click', function () {
    $('.modal_finish, .modal-wrap').fadeOut();
  });

  $('[data-button = buy]').on('click', function () {
    $('.modal-wrap, .modal_order').fadeIn();
  });


  function showForm(formElem) {
    $(formElem).submit(function (e) {
      e.preventDefault();
      if (!$(this).valid()) {
        return;
      }

      if (formElem === '#form-order') {
        $('.modal_order').fadeOut();
        $('.modal_finish .modal__tittle').text("Thank you for your order");
        $('.modal_finish .modal__subtittle').text("We'll get back to you");
      } else {
        $('.modal-wrap').fadeIn();

        if (formElem === '#form-subscribe') {
          $('.modal_finish .modal__tittle').text("Thank you for your subscription");
          $('.modal_finish .modal__subtittle').text("");
        } else {
          $('.modal_finish .modal__tittle').text("Thank you your question")
          $('.modal_finish .modal__subtittle').text("We'll be sure to answer you");
        }
      }

      $('.modal_finish').fadeIn();

      $(formElem).trigger('reset');
      return false;
    });
  }

  showForm('#form-order');
  showForm('#form-subscribe');
  showForm('#form-question');

  //arrow up
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $('.arrow-up').fadeIn();
    } else {
      $('.arrow-up').fadeOut();
    }
  });

});

