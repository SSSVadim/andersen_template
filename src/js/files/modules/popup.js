//Открытие попапа при клике на ссылку
let popup_links = document.querySelectorAll('.vs-popup-link');
let popups = document.querySelectorAll('.vs-popup');
for (let i = 0; i < popup_links.length; i++) {
	const popup_link = popup_links[i];	
	popup_link.addEventListener('click', function (e) {	
		if (unlock) {			
			let item = popup_link.getAttribute('href').replace('#', '');
			let video = popup_link.getAttribute('data-video');		
			popup_open(item, video);
		}
		e.preventDefault();
	})
}
//Клик вне области
for (let i = 0; i < popups.length; i++) {
	const popup = popups[i];
	popup.addEventListener("mousedown", function (e) {
		if (!e.target.closest('.vs-popup__body')) {
			popup_close(e.target.closest('.vs-popup'));
		}
	});
}
//Функция открытия попапа
function popup_open(item, video = '') {	
	let active_popups = document.querySelectorAll('.vs-popup.vs-active');	
	if (active_popups.length > 0) {
		popup_close('', false);
	}
	let current_popup = document.querySelector('.vs-popup_' + item);	
	if (current_popup && unlock) {
		if (video != '' && video != null) {
			let popup_video = document.querySelector('.vs-popup_video');
			console.log(popup_video);
			console.log(popup_video.querySelector('.vs-popup__video'));
			popup_video.querySelector('.vs-popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
		}
		if (!document.querySelector('.header-menu.vs-active')) {
			body_lock_add(500);
		}
		current_popup.classList.add('vs-active');
		history.pushState('', '', '#' + item);
	}
}
//Функция закрытия попапа
function popup_close(item, bodyUnlock = true) {
	if (unlock) {
		if (!item) {
			for (let i = 0; i < popups.length; i++) {
				const popup = popups[i];
				let video = popup.querySelector('.vs-popup__video');
				if (video) {
					video.innerHTML = '';
				}
				popup.classList.remove('vs-active');
			}
		} else {
			let video = item.querySelector('.vs-popup__video');
			if (video) {
				video.innerHTML = '';
			}
			item.classList.remove('vs-active');
		}
		if (!document.querySelector('.header-menu.vs-active') && bodyUnlock) {
			body_lock_remove(500);
		}
		history.pushState('', '', window.location.href.split('#')[0]);
	}
}

//Функция закрытия по иконке
let popup_close_icons = document.querySelectorAll('.vs-popup__close,._popup-close');
if (popup_close_icons) {
	for (let i = 0; i < popup_close_icons.length; i++) {
		const popup_close_icon = popup_close_icons[i];
		popup_close_icon.addEventListener('click', function () {
			popup_close(popup_close_icon.closest('.vs-popup'));
		})
	}
}
//Функция закрытия по ESC
document.addEventListener('keydown', function (e) {
	if (e.code === 'Escape') {
		popup_close();
	}
});


