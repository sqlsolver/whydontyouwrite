$(document).ready(function(){

$('a[data-lightbox], a.lb-close div.backtobody').click( function() {
	$('body').toggleClass('noOverflow');
});

$('textarea').autosize();

$.localScroll();

$('a#show-menu').click( function(){
	$(this).toggleClass('default');
	$(this).toggleClass('init');
});

$('a#show-menu.init').click( function(){
	$(this).toggleClass('default');
	$(this).toggleClass('init');
});


$("#comments-form").validate({
		rules: {
			commentername: "required",
			commenteremail: {
				required: true,
				email: true
			},
			commentercomment: {
				required: true,
				minlength: 10
			}
		},
		messages: {
			commentername: "Please enter your name",
			commenteremail: "Please enter a valid email address",
			commentercomment: "Please enter a minimum of 10 characters!"
		}
	});
	

	$(window).scroll(function() {
		if($(this).scrollTop() >= 800) {
			$('#toTop').addClass("in");	
		} else {
			$('#toTop').removeClass("in");
		}


});
	
});