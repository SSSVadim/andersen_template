let spollerWrappers = document.querySelectorAll('[data-spoller]');
if	(spollerWrappers.length > 0) {

	for (let i = 0; i < spollerWrappers.length; i++){	
		let spollerWrapper = spollerWrappers[i];

		let spollerBtns = spollerWrapper.querySelectorAll('[data-spoller-btn]');
		let spollerContents = spollerWrapper.querySelectorAll('[data-spoller-content]');	
		initSpoller(spollerContents);

		for (let i = 0; i < spollerBtns.length; i++){
			let spollerBtn = spollerBtns[i];
			spollerBtn.addEventListener('click', function(){

				if (spollerWrapper.hasAttribute('data-accordion')){

					//removeActiveBtn
					function removeActiveBtn(){
						for (let i = 0; i < spollerBtns.length; i++){
							spollerBtns[i].classList.remove('active');
						}
					}											

					if (this.classList.contains("active")){
						removeActiveBtn()
						spollerContents[i].classList.remove('active');
						spollerContents[i].style.maxHeight = "0px";
					}
					else{
						removeActiveBtn()
						this.classList.toggle('active');
						for (let i = 0; i < spollerContents.length; i++){
							spollerContents[i].classList.remove('active');	
							spollerContents[i].style.maxHeight = "0px";						
						}
						spollerContents[i].classList.add('active');
						spollerContents[i].style.maxHeight = spollerContents[i].scrollHeight + "px";
					}						
				}
				
				else{
					this.classList.toggle('active');
					if (spollerContents[i].classList.contains('active')){
						spollerContents[i].classList.remove('active');
						spollerContents[i].style.maxHeight = "0px";
					}
					else{
						spollerContents[i].classList.add('active');
						spollerContents[i].style.maxHeight = spollerContents[i].scrollHeight + "px";
					}	
					
				}
			})
		}		
		
		//Timeout resize
		let spollerTimeout;
		window.addEventListener('resize', function(){
			clearTimeout(spollerTimeout);
			spollerTimeout = setTimeout(function(){
				initSpoller(spollerContents);
			}, 50);
		});	
	}
}




//Init spoller-item height
function initSpoller(nodeList){
	for (let i = 0; i < nodeList.length; i++){
		if (nodeList[i].classList.contains('active')){
			nodeList[i].style.maxHeight = nodeList[i].scrollHeight + "px";
		}
		else{
			nodeList[i].style.maxHeight = "0px";
		}
	}
}


