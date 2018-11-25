$(document).ready(function(){
    if($(window).width()>1200){
    $('.carousel-services').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
    }
    if($(window).width() <= 1200 && $(window).width() > 900){
        $('.carousel-services').slick({
            slidesToShow: 2,
            slidesToScroll: 2
        });
    }
    if($(window).width() <= 900){
        $('.carousel-services').slick({
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }
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

$(window).click(function(e){
    if(e.target.id !== 'burger-menu' && e.target.id !== 'burger-header'){
        $('#burger-menu').slideUp(300);
    }
});