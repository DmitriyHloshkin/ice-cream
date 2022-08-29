let slickSlider = $('.benefit__wrap');

$(document).ready(function () {

    // burger menu
    $('.burger').on('click', function () {
        $('.promo-panel').toggleClass('promo-panel_active');
        $('.burger__elem').toggleClass('burger__elem_active');
    });

    //slick-slider
    if (isMobile()) {
        initializedSlider();
    }

    $(window).resize(function () {
        if (isMobile()) {
            initializedSlider();
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
            prevArrow: '<button class="arrows arrows_prev"><img src="icons/prev-arrow.svg" alt="arrow"></button>',
            nextArrow: '<button class="arrows arrows_next"><img src="icons/next-arrow.svg" alt="arrow"></button>',
            autoplay: true
        });
    }

    //tabs
    $('.tabs__manu-item').on('click', function () {
        if ($(this).hasClass('tabs__manu-item_active')) {
            return;
        }
        $(this)
        .addClass('tabs__manu-item_active').siblings().removeClass('tabs__manu-item_active')

        $('.products__catalog').removeClass('products__catalog_active').eq($(this).index()).addClass('products__catalog_active');
    })

});