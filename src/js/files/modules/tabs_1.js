let tabs = document.querySelectorAll('[data-tabs-1]');
for (let i = 0; i < tabs.length; i++){	
	let tab = tabs[i];
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

//mobile
for (let i = 0; i < tabs.length; i++){
	let currentNavMobile = tabs[i].querySelector('[data-current-nav-mobile]');
	let navWrapper = tabs[i].querySelector('[data-nav-wrapper]');
	let tabNavs = tabs[i].querySelectorAll('[data-nav-item]');
	let tabNavTitles = tabs[i].querySelectorAll('[data-nav-title]');

	currentNavMobile.addEventListener('click', function(){
		if (navWrapper.classList.contains('vs-show')){
			navWrapper.classList.remove('vs-show');
		}
		else {
			navWrapper.classList.add('vs-show');
		}
	})

	for (let i = 0; i < tabNavs.length; i++){
		tabNavs[i].addEventListener('click', function(){
			let tabNavTitle = tabNavTitles[i].textContent;
			currentNavMobile.textContent = tabNavTitle;
			navWrapper.classList.remove('vs-show');	
		})
	}

	document.addEventListener('mouseup', (e) =>{
		if (!navWrapper.contains(e.target) && !currentNavMobile.contains(e.target) ){
			navWrapper.classList.remove('vs-show');	
		}			
	});

}

