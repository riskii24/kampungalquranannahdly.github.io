$( () => {
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 80 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 80 ? $('ul').css('top','80px') : $('ul').css('top','120px');
	});
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 80
		},500);
		e.preventDefault();
	});
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('ul').toggleClass('showMenu');
		
		$('li').on('click', () => {
			$('ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});
	
	let swiper = new Swiper(".about-slider", {
	    spaceBetween: 30,
	    effect: "fade",
	    loop: true,
	    mousewheel: {
	      invert: false
	    },
	    // autoHeight: true,
	    pagination: {
	      el: ".about-slider-pagination",
	      clickable: true
	    }
	  });
});