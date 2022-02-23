$(document).ready(function () {
    //_________
    $('.intro__burger').on('click', function () {
        $('.menu__block').addClass('menu__block_active');
        $('.menu__overlay').addClass('menu__overlay_active');
        $('.menu').addClass('menu_active');

    });

    $('[data-a=link]').on('click', function () {
        $('.menu__block_active').removeClass('menu__block_active');
        $('.menu__overlay_active').removeClass('menu__overlay_active');
        $('.menu_active').removeClass('menu_active');
    })

});