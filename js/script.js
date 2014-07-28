$(document).ready(function() {

	$('#home').click(function(e) 
	{

		e.preventDefault();
		$('.destaques').fadeOut(200);
		$('html, body').animate({scrollTop: 0}, 500);

	});

	$('#destaques').click(function(e) 
	{

		e.preventDefault();
		$('.destaques').fadeIn(200);
		$('html, body').animate({scrollTop: 380}, 500);

	});

})