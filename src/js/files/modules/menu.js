
//=================
// MENU

let iconMenu = document.querySelector('.header-menu__icon');
let menuBody = document.querySelector(".header-menu");
let header = document.querySelector('.header');

if (iconMenu != null) {	
	iconMenu.addEventListener("click", function (e) {
		menu_toggle();
	});
};

function menu_toggle() {	
	if (unlock) {
		body_lock(100);	
		iconMenu.classList.toggle("vs-active");
		menuBody.classList.toggle("vs-active");
	}		
}

function menu_open() {	
	if (unlock){
		body_lock(100);
		iconMenu.classList.add("vs-active");
		menuBody.classList.add("vs-active");
	}		
}


function menu_close() {
	if (unlock){
		iconMenu.classList.remove("vs-active");
		menuBody.classList.remove("vs-active");
	}		
}

//=================
//Menu adaptive versions


// Кладем в переменную возвращенный объект
let mql = window.matchMedia('screen and (max-width:768px)');

// Управление поведением меню на различных разрешениях
function headerMenuControler(mql){
	if (mql.matches){
		//Убираем ПК-прослушку на скролл и инлайн стили 
		window.removeEventListener('scroll', headerMenuDelaySticky);
		header.removeAttribute('style');
		window.addEventListener('scroll',  headerMenuUpSticky);
		
		headerMenuUpSticky();	
		console.log('SctollTop = ', scrollTop);
		console.log('prevScroll = ', prevScroll);	
	} else {	
		window.removeEventListener('scroll', headerMenuUpSticky);
		header.removeAttribute('style');
		window.addEventListener('scroll', headerMenuDelaySticky);
	}
	
}

//Вешаем прослушку, на пересечени 768px
mql.addListener(headerMenuControler);
//Вызваем функцию при загрузке 
headerMenuControler(mql);


// let iconMenu = document.querySelector('.header-menu__icon');
// let menuBody = document.querySelector(".header-menu");
// let header = document.querySelector('.header');



//Исчезновение меню при скролле вниз и появление при скролле вверх
function headerMenuUpSticky(){
	header.style.position = 'fixed';
	initScrollProp();
	if (scrollTop > prevScroll && !menuBody.classList.contains('vs-active') ){
		header.style.top = '-100%';
	} else {
		header.style.top = '0';		
	}
	prevScroll = scrollTop;
}

//Появление sticky меню с задержкой при прокрутки
function headerMenuDelaySticky(){
	initScrollProp();
	//checkScrollProp();

	if (scrollTop < 600){
		header.style.position = 'absolute';
		header.style.top = '0px';
	}
	
	
	if (scrollTop > 600) {	
		header.style.position = 'absolute';	
		header.style.top = '-100%';
	}

	if (scrollTop > 900) {
		header.style.position = 'fixed';	
		
	}
	
	if (scrollTop > 1100) {
		header.style.position = 'fixed';	
		header.style.top = '0px';
	}		
}


//Вывод в консоль значений при ресайзе
function checkResizeProperties(){
	console.log('innerWidth = ',innerWidth);
	console.log('outerWidth = ',outerWidth);
	console.log('document.body.clientWidth = ',document.body.clientWidth);
	console.log('ширина прокрутки = ',outerWidth - innerWidth);
	console.log('window.innerWidth = ',window.innerWidth);
	console.log('window.outerWidth = ',window.outerWidth);
	console.log('===========');
}
//====================================================================

document.documentElement.addEventListener('mousedown', function(e){
	if (menuBody.classList.contains('vs-active') && !e.target.closest('.header-menu__icon') && !e.target.closest('.header-menu') ){
		menu_close();
	}
})




//Стрелочка в многоуровневом меню
function headerArrow(){
	if(isMobile.any()){
		let arrows = document.querySelectorAll('.header-menu-arrow');	
		for (let i = 0; i < arrows.length; i++){				
			let arrow = arrows[i];
			let subMenu = arrow.nextElementSibling;
			let link = arrow.previousElementSibling;
			link.classList.add('vs-arrow-link');
			arrow.addEventListener('click', function(){
				subMenu.classList.toggle('vs-visible');
				arrow.classList.toggle('vs-open');
			})
		}
	}	
}
headerArrow();



