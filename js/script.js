$(document).ready(function(){
    /* отзывы */
    $('.header__toggle').click(function (event) {
        $('.header__toggle, .header__menu, .body').toggleClass('active');
    });
    $('.qa__one').click(function (event) {
        $('.qa__1, .qa__strelka1').toggleClass('active');
    });
    $('.qa__two').click(function (event) {
        $('.qa__2, .qa__strelka2').toggleClass('active2');
    });
    $('.qa__three').click(function (event) {
        $('.qa__3, .qa__strelka3').toggleClass('active3');
    });
    /* слайдер */
    $('.slider').slick();

    /* Модальные окна */
    $('.card__img').click(function (event) {
        $('.overlay').show();
    }); 
    $('.overlay__close').click(function (event) {
        $('.overlay').hide();
    }); 
    
});