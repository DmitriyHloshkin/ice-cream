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

});