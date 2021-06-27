let scrollTop;
let documentHeight;
let scrollBottom;
let isEndDocument;
let prevScroll = Math.round(window.pageYOffset || document.documentElement.scrollTop);

//Init and get value
function initScrollProp(){
	scrollTop = Math.round(window.pageYOffset || document.documentElement.scrollTop);
	documentHeight = Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);
	scrollBottom = documentHeight - scrollTop - document.documentElement.clientHeight;
	if (scrollBottom === 0){
		isEndDocument = true;
	} else {
		isEndDocument = false;
	}
}

//Check into console
function checkScrollProp(){
	console.log( "Прокручено сверху: " + scrollTop );
	console.log( "Высота документа: " + documentHeight );
	console.log( "Прокручено снизу: " + scrollBottom );
	console.log( "Документ долистан до конца: " + isEndDocument );
}


initScrollProp();
checkScrollProp();

window.addEventListener('scroll', function(){
	initScrollProp();
	checkScrollProp();	
})
