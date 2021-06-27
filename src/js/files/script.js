let a = 'Vanilla JS is loaded';
console.log(a);


// SWIPER INIT
var swiper = new Swiper('.first-screen-slider', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	autoHeight: false,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 1,
			spaceBetween: 50,
		},
	},

	
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	threshold: 10,

});

let unlock = true;


//LazyLoad init
var lazyLoadInstance = new LazyLoad({
	// Your custom settings go here
  });



// TEST JQUERY
// let b = $('.header__body');
// console.log(b);