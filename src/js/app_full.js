document.addEventListener("DOMContentLoaded", function(event) { 
 
	// Polyfills	
	@@include('files/modules/polyfills.js', {});
	@@include('files/modules/promise.js', {});
	@@include('files/modules/runtime.js', {});

	// Main workflow	
	@@include('files/script.js', {});	
	
	
	// Moduless.js', {});	
	@@include('files/modules/user_agent.js', {});
	@@include('files/modules/regulars.js', {});
	@@include('files/modules/scroll.js', {});
	@@include('files/modules/gallery.js', {});
	@@include('files/modules/menu.js', {});
	@@include('files/modules/bodylock.js', {});
	@@include('files/modules/tabs_1.js', {});
	@@include('files/modules/tabs_2.js', {});
	@@include('files/modules/spoller.js', {});
	@@include('files/modules/popup.js', {});
	@@include('files/modules/autoheight.js', {});
	@@include('files/modules/hash.js', {});
	
	
	
	
	//Forms
	@@include('files/forms.js', {});
	@@include('plugins/inputmask.min.js', {});

	//For dynamic_adapt
	@@include('files/dynamic_adapt.js', {});
	//scroll
	@@include('files/scroll.js', {});
	
	});