$(document).ready(function(){

// burger menu
$('.burger').on('click', function () {
    $('.promo-panel').toggleClass('promo-panel_active');
    $('.burger__elem').toggleClass('burger__elem_active');
});

});