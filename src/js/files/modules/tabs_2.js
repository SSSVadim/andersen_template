let tabs_2 = document.querySelectorAll('[data-tabs-2]');
for (let i = 0; i < tabs_2.length; i++){	
	let tab = tabs_2[i];
	let tabNavs = tab.querySelectorAll('[data-nav-item]');
	let tabContents = tab.querySelectorAll('[data-content-item]');

	//active 
	for (let i = 0; i < tabNavs.length; i++){
		tabNavs[i].addEventListener('click', function(){
			for (let i = 0; i < tabNavs.length; i++){
				tabNavs[i].classList.remove('vs-active');
			}
			for (let i = 0; i < tabContents.length; i++){
				tabContents[i].classList.remove('vs-active');
			}

			this.classList.add('vs-active');
			tabContents[i].classList.add('vs-active');

		})
	}
}