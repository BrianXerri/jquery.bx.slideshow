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
 
(function(e){jQuery.fn.bxSlideshow=function(t){function a(){if(t.autoSlide==true){if(u!==undefined)clearTimeout(u);u=setTimeout(function(){var t=o>=s-1?0:o+1;e.fn.bxSlideshow.goToSlide(t)},t.autoSlideDelay)}}settings=jQuery.extend({slideSelector:".bxSlideshow li",autoSlide:false,autoSlideDelay:5e3,animateDuration:200},t);var n;var r;var i;var s;var o;var u;this.each(function(){n=e(this);r=e(t.slideSelector);i=e("li",n);s=parseInt(i.size());o=0;r.hide().eq(0).show();i.eq(0).addClass("active");a()});i.click(function(t){e.fn.bxSlideshow.goToSlide(i.index(this))});e.fn.bxSlideshow.goToSlide=function(e){if(e!=o){i.filter(".active").removeClass("active");i.eq(e).addClass("active");r.eq(o).stop(true,true).fadeOut(t.animateDuration);r.eq(e).stop(true,true).css("opacity","").delay(t.animateDuration).fadeIn(t.animateDuration);o=e;a()}return false}}})(jQuery)