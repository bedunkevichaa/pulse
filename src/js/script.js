
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        //adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.png"></button>',
        responsive: [
		 	{
		 		breakpoint: 992,
		 		settings: {
					dots: true,
		 			arrows: false
		 		}
		 	}
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

	// $('.catalog-item__link').each(function(i) {
	// 	$(this).on('click', function(e) {
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 	})
	// });

	// $('.catalog-item__back').each(function(i) {
	// 	$(this).on('click', function(e) {
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 	})
	// });

	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	// Modal

	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	});


	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		})
	});
});

//number
//string
//true/false
// null
// undefined

// let obj = {
//     name: 'apple',
//     color: 'green',
//     width: 200
// }

// symbol

// let answer = prompt("Вам есть 18?", "");
// console.log(answer);

// console.log(4 + 'sddd');

// let isChecked = true,
//     isClose = true;

// console.log(isChecked && isClose);   
// console.log(isChecked || isClose);  

// if (2*4 == 3*1) {
//     console.log('Верно')
// } else {
//     console.log('Ошибка')
// }

// let answer = confirm("Вам есть 18?");
// if (answer) {
//     console.log('Проходите')
// } else {
//     console.log('Нельзя')
// }

// const num = 50;

// if (num < 49) {
//     console.log('Неправильно')
// } else if (num > 100) {
//     console.log('Много')
// } else {
//     console.log('Good!')
// }

// for(let i = 1; i < 8; i++) {
//     console.log(i)
// }

// function logging(a, b) {
//     console.log(a + b)
// }

// logging(3, 5);