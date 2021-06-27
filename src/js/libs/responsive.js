//Adaptive functions
$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
	/*Вводим пременные для объектов, которые нужно перекидывать*/ 
		var mobileMenu=$('.adaptive-header-menu');
		var menu=$('.header-menu');
		var tel=$('.header-top__tel-item');
		var mail=$('.header-top__mail-item');
		var schedule=$('.header-top__schedule-item');
		var social=$('.header-top__social-wrapper');

		var adress = $('.footer__location-wrapper');
		var social = $('.footer__share-wrapper');

	/*На определенной ширине, перекидывает элементы appendTo prependTo insertAfter insertBefore*/
	/*По порядку*/
	if(w<768){
		if(!menu.hasClass('done')){
			menu.addClass('done').appendTo(mobileMenu);
		}
		if(!tel.hasClass('done')){
			tel.addClass('done').appendTo(mobileMenu);
		}	
		if(!mail.hasClass('done')){
			mail.addClass('done').appendTo(mobileMenu);
		}		
		if(!schedule.hasClass('done')){
			schedule.addClass('done').appendTo(mobileMenu);
		}

		adress.clone().css('marginTop', '40px').appendTo(mobileMenu);//из футера клонируется адрес
		social.clone().css('marginTop', '20px').appendTo(mobileMenu);//из футера клонируется соц блок

	

	/*Если экран шире, то кидаем обратно appendTo prependTo insertAfter insertBefore*/ 	
	}else{
		if(menu.hasClass('done')){
			menu.removeClass('done').appendTo($('.header-bottom .container .header-bottom__body'));
		}
		if(mail.hasClass('done')){
			mail.removeClass('done').insertAfter($('.header-top__logo'));
		}
		if(schedule.hasClass('done')){
			schedule.removeClass('done').insertAfter($('.header-top__logo'));
		}
		if(tel.hasClass('done')){
			tel.removeClass('done').insertAfter($('.header-top__logo'));
		}
		

		$('.adaptive-header-menu .footer__location-wrapper').remove();//удаляется адрес который из футера клонировался
		$('.adaptive-header-menu .footer__share-wrapper').remove(); //удаляются соц иконки которые из футера клонировались
	}
}




function adaptive_function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
	adaptive_header(w,h);
}
	adaptive_function();