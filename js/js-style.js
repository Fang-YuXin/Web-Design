$(document).ready(function() {

	$('#backtotop').click(function(event) {
		event.preventDefault();
		$('html , body').animate({scrollTop:0}, 100);		
	});


	$(window).scroll(function() {
        if ( $(this).scrollTop() > 2){
            $('#backtotop').fadeIn();
        } else {
            $('#backtotop').fadeOut();
        }
    });

});





 