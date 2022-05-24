$( () => {
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 80 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 80 ? $('.navbar-nav').css('top','80px') : $('.navbar-nav').css('top','120px');
	});
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	$('#navbarDropdownProfil').on('click', () => {
		$('.a').toggleClass('bxs-chevron-up');
	});
	$('#navbarDropdownPublikasi').on('click', () => {
		$('.b').toggleClass('bxs-chevron-up');
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
		
	});
	
	let swiper = new Swiper(".about-slider", {
	    spaceBetween: 30,
	    effect: "fade",
	    loop: true,
	    mousewheel: {
	      invert: false
	    },
	    pagination: {
	      el: ".about-slider-pagination",
	      clickable: true
	    },
	});
});