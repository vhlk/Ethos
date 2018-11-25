var darTudoCerto;
$(document).ready(function(){ //carrossel de valores
  	$('.carousel-values').slick({
  	});
});

$(document).ready(function(){ //carrossel de serviços
    if($(window).width()>1200){
    $('.carousel-services').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
    }

    if($(window).width() <= 1200 && $(window).width() > 900){ //responsividade do carrossel deserviços
        $('.carousel-services').slick({
            slidesToShow: 2,
            slidesToScroll: 2
        });
    }
    if($(window).width() <= 900){ //responsividade do carrossel de serviços
        $('.carousel-services').slick({
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }
});

$(function(){ //animação menu hambúrguer
	$('#burger-header').on('click', function(){
		$('#burger-menu').slideToggle(300);
		$('#burger-menu').css('display', 'flex');
	});
});

$(function(){ //recolher hambúrguer
	$('.smoothscroll').on('click', function(){
		$('#burger-menu').slideUp(300);
	});
});

$(window).scroll(function() { //menu dinâmico
    var height = $(window).scrollTop();
    var servH;
    var aboutH;
    var netH;
    var contH;
    if($(window).width()>900){
        servH = 578;
        aboutH = 1379;
        netH = 2506;
        contH = 3289;
    }
    if($(window).width()<=900){
        servH = 458;
        aboutH = 1260;
        netH = 2388;
        contH = 3170;
    }

    if(height < servH){
        $('[data-secname="banner"]').css('fontWeight', 'bolder');
        $('[data-secname="services-section"]').css('fontWeight', 'regular');
        $('[data-secname="about-us-section"]').css('fontWeight', 'regular');
        $('[data-secname="network-section"]').css('fontWeight', 'regular');
        $('[data-secname="contact-section"]').css('fontWeight', 'regular');
    }

    if(height > servH){
        $('[data-secname="banner"]').css('fontWeight', 'regular');
        $('[data-secname="services-section"]').css('fontWeight', 'bolder');
        $('[data-secname="about-us-section"]').css('fontWeight', 'regular');
        $('[data-secname="network-section"]').css('fontWeight', 'regular');
        $('[data-secname="contact-section"]').css('fontWeight', 'regular');
    }

    if(height > aboutH){
        $('[data-secname="banner"]').css('fontWeight', 'regular');
        $('[data-secname="services-section"]').css('fontWeight', 'regular');
    	$('[data-secname="about-us-section"]').css('fontWeight', 'bolder');
    	$('[data-secname="network-section"]').css('fontWeight', 'regular');
    	$('[data-secname="contact-section"]').css('fontWeight', 'regular');
    }
    if(height > netH){
        $('[data-secname="banner"]').css('fontWeight', 'regular');
        $('[data-secname="services-section"]').css('fontWeight', 'regular');
    	$('[data-secname="about-us-section"]').css('fontWeight', 'regular');
    	$('[data-secname="network-section"]').css('fontWeight', 'bolder');
    	$('[data-secname="contact-section"]').css('fontWeight', 'regular');
    }
    if(height > contH){
        $('[data-secname="banner"]').css('fontWeight', 'regular');
        $('[data-secname="services-section"]').css('fontWeight', 'regular');
    	$('[data-secname="about-us-section"]').css('fontWeight', 'regular');
    	$('[data-secname="network-section"]').css('fontWeight', 'regular');
    	$('[data-secname="contact-section"]').css('fontWeight', 'bolder');
    }
    console.log(height);
});

$(document).ready(function(){ //animação scroll
	$('.smoothscroll').on('click', function(e){
		e.preventDefault();
		var sec = $(this).attr('data-secname');
        var heightFix;
        if($(window).width()>900){
            heightFix = 70;
        }
        if($(window).width()<=900){
            heightFix = 60;
        }
		$('body, html').animate({
			scrollTop: ($('#' + sec).offset().top - Number(heightFix))
		}, 500);
	});
});

$(window).click(function(e){ // recolher hambúrguer 2
    if(e.target.id !== 'burger-menu' && e.target.id !== 'burger-header'){
        $('#burger-menu').slideUp(300);
    }
});

$(window).scroll(function(){ //header aparecendo
    var headerHeight;
    if($(window).width() > 900){
        headerHeight = 575;
    }
    if($(window).width() <= 900 && $(window).width() > 600){
        headerHeight = 460;
    }
     if($(window).width() <= 600 && $(window).width() > 450){
        headerHeight = 390;
    }
     if($(window).width() <= 450 && $(window).width() > 400){
        headerHeight = 360;
    }
    if($(window).width() <= 400){
        headerHeight = 315;
    }
    if($(window).scrollTop()>40){
        $('header').fadeIn(700);
    }
    if($(window).scrollTop()<40){
        $('header').fadeOut(200);
    }
});

var logoLeft = $('#logo-simples').css('left');
var logoWidth;
var leftDistance;
var smallLogoWidth;
var smallLogoTop;

$(function(){
    if($(window).width() > 900){
        logoWidth = 700;
        leftDistance = '10.17%';
        smallLogoWidth = 215;
        smallLogoTop = -95;
    }
    if($(window).width() <= 900 && $(window).width() > 600){
        logoWidth = 500;
    }
    if($(window).width() <= 600 && $(window).width() > 450){
        logoWidth = 400;
    }
    if($(window).width() <= 450 && $(window).width() > 400){
        logoWidth = 350;
    }
    if($(window).width() <= 400){
        logoWidth = 310;
    }

    if($(window).width() <= 900){
        leftDistance = '5%';
        smallLogoWidth = 180;
        smallLogoTop = -93;
    }
});


$(window).scroll(function(){
    if($(window).scrollTop === 1){
        $('#banner-logo').fadeToggle(200);
    }

    if($(window).scrollTop() > 1 && $('#logo-simples').width() === logoWidth){ //diminuir logo simples
        $('#logo-simples').animate({
            width: smallLogoWidth,
            top: smallLogoTop,
            left: leftDistance,
        }, 300);
    }

    if($(window).scrollTop() < 1 && $('#logo-simples').width() === smallLogoWidth){ //aumentar logo simples
        $('#logo-simples').animate({
            width: logoWidth,
            top: 0,
            left: logoLeft,
        }, 300);
    }

    if($(window).scrollTop()>1){ //texto sumindo
        $('#banner-logo').fadeOut(200);
        $('#banner-text').fadeOut(200);
    }
    if($(window).scrollTop()<1){ //texto voltando
        $('#banner-logo').fadeIn(200);
        $('#banner-text').fadeIn(200);
    }

    
});