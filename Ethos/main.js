$(document).ready(function(){
  	$('.carousel-values').slick({
  	});
});

$(function(){
	$('#burger-header').on('click', function(){
		$('#burger-menu').slideToggle(300);
		$('#burger-menu').css('display', 'flex');
	});
});

$(function(){
	$('.smoothscroll').on('click', function(){
		$('#burger-menu').slideUp(300);
	});
});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height > 600){
    	$('[data-secname="about-us-section"]').css('fontWeight', 'bolder');
    	$('[data-secname="network-section"]').css('fontWeight', 'regular');
    	$('[data-secname="contact-section"]').css('fontWeight', 'regular');
    }
    if(height > 1800){
    	$('[data-secname="about-us-section"]').css('fontWeight', 'regular');
    	$('[data-secname="network-section"]').css('fontWeight', 'bolder');
    	$('[data-secname="contact-section"]').css('fontWeight', 'regular');
    }
    if(height > 2600){
    	$('[data-secname="about-us-section"]').css('fontWeight', 'regular');
    	$('[data-secname="network-section"]').css('fontWeight', 'regular');
    	$('[data-secname="contact-section"]').css('fontWeight', 'bolder');
    }
});

$(document).ready(function(){
	$('.smoothscroll').on('click', function(e){
		e.preventDefault();
		var sec = $(this).attr('data-secname');
		$('body, html').animate({
			scrollTop: ($('#' + sec).offset().top - Number(70))
		}, 500);
	});
});
