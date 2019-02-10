$(document).ready(function () {

	//jQuery IMAGES FILTER 
	$(".filter-links li").click(function () {
		var value = $(this).attr('data-filter');

		if (value == "all") {
			$('.filtr-item').show('1000');
		} else {
			$(".filtr-item").not('.' + value).hide('3000');
			$('.filtr-item').filter('.' + value).show('3000');
		}
	});

	if ($(".filter-links li").removeClass("active")) {
		$(this).removeClass("active");
	}
	$(this).addClass("active");

});


//LAZY LOAD IMAGES
window.onscroll = function(ev) {
	lazyload();
};

function lazyload() {
	
	var lazyImage = document.querySelectorAll('.lazy')
	
	for(var i=0;i<lazyImage.length;i++) {
		
		if(elementInViewport(lazyImage[i])) {
			
			lazyImage[i].setAttribute('src', lazyImage[i].getAttribute('data-src'));
			
		}
	}
}

function elementInViewport(el) {
	
	var rect = el.getBoundingClientRect();
	
	return (
		rect.top >= 0 &&
		rect.left >=0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clinetWidth)
	)
}