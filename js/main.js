jQuery(document).ready(function($){
	//slicknav
	$('#nav').slicknav();
	//sticky
	 $("header").sticky({topSpacing:0});
	//scrollspy
	$('body').scrollspy({
		target: '#navbar-example',
		offset: 95
	});
	//Smooth Scroll
	var $root = $('html, body');
	$('#nav li a').click(function() {
		var href = $.attr(this, 'href');
		$root.animate({
			scrollTop: $(href).offset().top
		}, 2000, function () {
			window.location.hash = href;
		});
		return false;
	});
	//ScrollUp
	$.scrollUp({
		animation: 'slide', // Fade, slide, none
		scrollSpeed: 2000,
		scrollText: [
		  "<i class='fa fa-chevron-up'></i>"
		]
	});
	//counter
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	//WOW
	wow = new WOW(
		{
		  boxClass:     'wow',      // default
		  animateClass: 'animated', // default
		  offset:       0,          // default
		  mobile:       true,       // default
		  live:         true        // default
		}
	  )
	wow.init();
	//isotope
	$('.menu_item li').click(function(){
	  $(".menu_item li").removeClass("active");
	  $(this).addClass("active");        
		var selector = $(this).attr('data-filter'); 
		$(".gallery_item").isotope({ 
			filter: selector, 
			animationOptions: { 
				duration: 750, 
				easing: 'linear', 
				queue: false, 
			}
		});
	});
	//owlCarousel
	$("#brand_logo").owlCarousel({
		items:6,
		itemsDesktop : [1199,6],
		itemsDesktopSmall : [980,6],
		itemsTablet: [768,4],
		itemsTabletSmall: true,
		itemsMobile : [479,2],
		singleItem : false,
		autoPlay:true,
		stopOnHover:true,
		slideSpeed : 300,
	});
	$('a.page-scroll').bind('click', function(event) {
        event.preventDefault();
         $('html, body').animate({
           'scrollTop':   $('#about').offset().top
         }, 1500);
    });
});
jQuery(window).load(function(){
	//Isotope 
	$(".gallery_item").isotope({
		itemSelector: '.single_items',
		layoutMode: 'fitRows',
	});
});