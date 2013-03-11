 /**
 * jQuery.bxSlideshow - Creates a slide show with a hero image
 *
 * @author Brian Xerri
 * @website http://www.brianxerri.com
 * @jQuery Version: 1.4+
 * 
 ***************************
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 *
 ***************************
 *
 *
 **/
 
 
(function($) {
	jQuery.fn.bxSlideshow = function(options) {
		/*--------------------------------
		/ Defualt Settings
		--------------------------------*/
		settings = jQuery.extend({
					slideSelector: '.bxSlideshow li',
					autoSlide: false,
					autoSlideDelay: 5000,
					animateDuration: 200 }
					, options);
		
		/*--------------------------------
		/ Private Properties
		--------------------------------*/
		var wrapper;
		var slides;
		var slideThumbs;
		var slideCount;
		var activeSlideIndex;
		var timerDelay;
		
		
		/*--------------------------------
		/ Initialize
		--------------------------------*/
		this.each(function() {
			
			wrapper				= $(this);
			slides				= $(options.slideSelector);
			slideThumbs			= $('li', wrapper);
			slideCount			= parseInt(slideThumbs.size());
			activeSlideIndex	= 0;

			slides.hide().eq(0).show();
			slideThumbs.eq(0).addClass('active');

			autoSlider();

		});

		
		/*--------------------------------
		/ Control Buttons
		--------------------------------*/
		slideThumbs.click(function(index) {
			$.fn.bxSlideshow.goToSlide(slideThumbs.index(this));
		});

		
		/*--------------------------------
		/ Private Functions
		--------------------------------*/
		function autoSlider() {
			if ( options.autoSlide == true ) {
				if (timerDelay !== undefined)
					clearTimeout(timerDelay);
				
				timerDelay = setTimeout(function() {
					var nextIndex = activeSlideIndex >= (slideCount-1) ? 0 : (activeSlideIndex + 1);
					$.fn.bxSlideshow.goToSlide(nextIndex);
				}, options.autoSlideDelay);
			}			
		}
	
		/*--------------------------------
		/ Public Functions
		--------------------------------*/
		$.fn.bxSlideshow.goToSlide = function(slideIndex) {
			if (slideIndex != activeSlideIndex) {
			
				slideThumbs.filter('.active').removeClass('active');
				slideThumbs.eq(slideIndex).addClass('active');

				slides.eq(activeSlideIndex).stop(true, true).fadeOut(options.animateDuration);
				slides.eq(slideIndex).stop(true, true).css('opacity','').delay(options.animateDuration).fadeIn(options.animateDuration);
				activeSlideIndex = slideIndex;

				autoSlider();
			}
			return false;
		}

	}
})(jQuery);
