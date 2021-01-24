
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