$(document).ready(function() {

	$('#home').click(function(e) 
	{

		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 500);

	});

	$('#destaques').click(function(e) 
	{

		e.preventDefault();
		$('html, body').animate({scrollTop: 340}, 500);

	});

})