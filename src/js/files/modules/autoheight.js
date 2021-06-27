window.onload = function() {	
	let autoheight_wrappers = document.querySelectorAll('.ah-wrapper');	
	
	for (let i = 0; i < autoheight_wrappers.length; i++){			
		let autoheight_wrapper = autoheight_wrappers[i];		
		let max_height = 0;
		let max_height2 = 0;
		let max_height3 = 0;

		let autoheight_items = autoheight_wrapper.querySelectorAll('.ah');	
		let autoheight_items2 = autoheight_wrapper.querySelectorAll('.ah2');
		let autoheight_items3 = autoheight_wrapper.querySelectorAll('.ah3');
		
		function auto_height(){			
			if ( window.innerWidth > 767.8) {			
				
				for (let i = 0; i < autoheight_items.length; i++){
					let autoheight_item = autoheight_items[i];
					autoheight_item.style.height = 'auto';					
				}

				for (let i = 0; i < autoheight_items.length; i++){
					let autoheight_item = autoheight_items[i];
					let autoheight_item_height =  autoheight_item.clientHeight;
					if (autoheight_item_height > max_height){
						max_height = autoheight_item_height;
					}					
				}
				
				for (let i = 0; i < autoheight_items.length; i++){
					let autoheight_item = autoheight_items[i];
					autoheight_item.style.height = max_height + 'px';		
				}

				
				

				for (let i = 0; i < autoheight_items2.length; i++){
					let autoheight_item = autoheight_items2[i];
					autoheight_item.style.height = 'auto';					
				}
				
				for (let i = 0; i < autoheight_items2.length; i++){
					let autoheight_item = autoheight_items2[i];
					let autoheight_item_height =  autoheight_item.clientHeight;
					if (autoheight_item_height > max_height2){
						max_height2 = autoheight_item_height;
					}	
				}
				for (let i = 0; i < autoheight_items2.length; i++){
					let autoheight_item = autoheight_items2[i];
					autoheight_item.style.height = max_height2 + 'px';		
				}

		

				for (let i = 0; i < autoheight_items3.length; i++){
					let autoheight_item = autoheight_items3[i];
					autoheight_item.style.height = 'auto';					
				}

				for (let i = 0; i < autoheight_items3.length; i++){
					let autoheight_item = autoheight_items3[i];
					let autoheight_item_height =  autoheight_item.clientHeight;
					if (autoheight_item_height > max_height3){
						max_height3 = autoheight_item_height;
					}	
				}
				for (let i = 0; i < autoheight_items3.length; i++){
					let autoheight_item = autoheight_items3[i];
					autoheight_item.style.height = max_height3 + 'px';		
				}				
				max_height = 0;
				max_height2 = 0;
				max_height3 = 0;
			
			} else {
				max_height = 0;
				max_height2 = 0;
				max_height3 = 0;

				for (let i = 0; i < autoheight_items.length; i++){
					let autoheight_item = autoheight_items[i];
					autoheight_item.style.height = 'auto';					
				}
				for (let i = 0; i < autoheight_items2.length; i++){
					let autoheight_item = autoheight_items2[i];
					autoheight_item.style.height = 'auto';					
				}
				for (let i = 0; i < autoheight_items3.length; i++){
					let autoheight_item = autoheight_items3[i];
					autoheight_item.style.height = 'auto';					
				}				
			} 
		} /* end function auto_height */

		auto_height();		
		window.addEventListener('resize', auto_height); 
	};	
};

