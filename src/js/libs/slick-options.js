$('.slider').slick({
	arrows:true, //стрелки для пролистывания  - true
	dots:true,   //точки(булеты)  - false
	adaptiveHeight: true,   //автоподстраивание высоты - false
	slidesToShow: 3, //кол-во слайдов, отображаемых в ленте - 1 
	slidesToScroll: 3, //кол-во слайдов, которые пролистываются - 1
	speed: 500,  //скорость пролистывания - 300
	easing:'linear',  //тип анимации при проилстывнии - linear
	infinite: true, //бесконечная прокрутка - true
	initialSlide: 0, //с какого слайда стартовать, по умолчанию - 0
	autoplay: false, //автоматическое пролистывание - false
	autoplaySpeed: 3000, //скорость автопролистывания - 3000
	pauseOnFocus: true, //Пауза при клике на область слайдера - true 
	pauseOnHover: true, // Пауза при наведении - true 
	pauseOnDotsHover: true, // Пауза при наведении на точки - true
	dragable: true, //возможность перетаскивать слайды мышкой - true
	swipe: true, //возможность свайпать на мобилах - true 
	touchThreshold: 8, // сколько нужно протащить, чтоб перелестнуть - 5
	touchMove: true, //нередвигать слайд, зажав уже нельзя - true
	waitForAnimate: true, //ждать пока завершится анимация прокрутки - true
	centerMode: false, //активный слайд по центру(можно затемнить остальные) - false
	variableWidth: false, //убрать отступы (хорошо с centerMode) - false
	rows: 1, //колво рядов - 1
	slidesPerRow: 1,	 //кол-во слайдов в ряду - 1
	vertical: false,  //вертикальный скролл - false
	verticalSwipe: false, //свайп по вертикали - false
	fade: false, //если нужно показать слайд шоу - false
	//asNavFor: //связать 2 слайдера, в каждом указать класс обертки ".class" 
	responsive:[
		{
			breakpoint: 1065,
			settings: {
				slidesToShow: 2, //кол-во слайдов, отображаемых в ленте - 1 
				slidesToScroll: 2,
			}
		}

	],
	mobileFirst: false, //чтобы идти снизу вверх при адаптации- false
	//appendArrow: $('.classname'), //переместить стрелки в элемент 
	//appendDots: $('.classname'), //переместить точки в другой элемент

}

