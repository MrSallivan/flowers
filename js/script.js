$(document).ready(function(){
    
    $('.header__toggle').click(function (event) {
        $('.header__toggle, .header__menu, .body').toggleClass('active');
    });
    $('#1, #2, #3, #4').click(function (event) {
        $('.header__toggle, .header__menu, .body').toggleClass('active');
    });
    /* отзывы */
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
    $('.slider').slick({
        dots: true
    });

    /* Модальные окна */
    $('.card__img').click(function (event) {
        $('.overlay').show();
    }); 
    $('.overlay__close').click(function (event) {
        $('.overlay').hide();
    }); 
    /*basket*/
    $('.header__basket').click(function (event) {
        $('.overlay2').show();
    }); 
    $('.basket__close').click(function (event) {
        $('.overlay2').hide();
    }); 
    /*persdata*/
    $('.paytotal__next').click(function (event) {
        $('.overlay3').show();
    }); 
    $('.overlaydata__close').click(function (event) {
        $('.overlay3').hide();
    }); 

	var countClicks = 0
	document.querySelector('.catalog__button-all').addEventListener('click', function () {
		countClicks++
		// let catalogWrap = document.querySelector('.catalog__wrap')
		let divCount = $('.catalog__wrap').children('div').length;
		let numberWrap = countClicks + 2
		let div
		if (numberWrap < divCount) {
		 	document.querySelector(`.catalog__wrap${numberWrap}`).classList.add('active')
		} else if (numberWrap == divCount) {
			document.querySelector(`.catalog__wrap${numberWrap}`).classList.add('active')
			document.querySelector(`.catalog__button-all`).style.display = 'none'
		}
	})

});