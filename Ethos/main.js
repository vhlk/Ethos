$(document).ready(function(){
  	$('.carousel').slick({	
  		autoplay: true,
  		autoplaySpeed: 3000,
  		arrows: true
  	});
});

$(function(){
	$('#burger-header').on('click', function(){
		$('#burger-menu').slideToggle(300);
		$('#burger-menu').css('display', 'flex');
		console.log('working');
	});
});