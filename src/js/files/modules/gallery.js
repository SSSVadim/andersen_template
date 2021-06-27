
let gallery = document.querySelectorAll('.vs-gallery');
if (gallery) {
	gallery_init();
}
function gallery_init() {
	for (let index = 0; index < gallery.length; index++) {
		const el = gallery[index];
		lightGallery(el, {
			counter: true,
			selector: 'a',
			download: true,
			thumbnail: true,		
		});
	}
}

