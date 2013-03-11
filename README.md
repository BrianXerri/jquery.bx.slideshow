jquery.bx.slideshow
==============

A simple light weight jquery slideshow plugin.



Example:

$(function() {

	// Initialising the slideshow
	
	$('.bxSlideshow .bxThumbs').bxSlideshow({	slideSelector: '.bxSlides li',
	
												autoSlide: true,
												
												autoSlideDelay: 7000,
												
												animateDuration: 500 });
												
});

I have also added an accessible function to jump between slides. You will need to specify the index of the slide you would like displayed.
Note: index starts at '0'

Example:

$('.bxSlideshow .bxThumbs').bxSlideshow.goToSlide(2);
