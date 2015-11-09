$(document).ready(function(){
	
$('a[data-lightbox]').click(function(e) {
    e.preventDefault();
});

$('a#show-menu').click( function(){
	$(this).toggleClass('default');
	$(this).toggleClass('init');
});

$('a#show-menu.init').click( function(){
	$(this).toggleClass('default');
	$(this).toggleClass('init');
});

$('textarea').autosize();

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

$.localScroll(); 


}); 