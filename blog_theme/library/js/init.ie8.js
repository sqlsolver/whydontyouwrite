$(document).ready(function(){

$("label").click(function(){
    if ($(this).attr("for") != "")
        $("#" + $(this).attr("for")).click();
});

$('a[data-lightbox], a.lb-close div.backtobody').click( function() {
	$('body').toggleClass('noOverflow');
});

$('textarea').autosize();

$.localScroll();

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

});