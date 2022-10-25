$('.menu').on('click', function () {
    $('header .wrp .nav').show();
    $('.prev_menu').hide();
});

$('.close').on('click', function () {
    $('header .wrp .nav').hide();
});

$('.near').on('click', function () {
    $('.sub_menu').show();
    $('.layer').show();
});

$('.layer').on('click', function () {
    $('.sub_menu').hide();
});

$('.fix').on('click', function () {
    $('.trogiup').toggle();
});

$('.item').on('click', '.txt', function () {
    $(this).parent().find('.text').toggleClass('active');
    $(this).toggleClass('active');
});

$('.menu_2').on('click', function () {
    $('.header .wrp .nav_lg').show();
    $('.layer').show();
});

$('.layer').on('click', function () {
    $('.header .wrp .nav_lg').hide();
    $('.layer').hide();
});

$('.sn').on('click', function () {
    $('.sec1_host .form_host').toggle();
});
