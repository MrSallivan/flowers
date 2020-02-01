$(document).ready(function(){
    $('.header__toggle').click(function (event) {
        $('.header__toggle, .header__menu, .body').toggleClass('active');
    });
});