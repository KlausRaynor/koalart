$(document).ready(function() {

	$('li').hover(function(){
		$(this).toggleClass('active');
	});

	$('li').click(function() {
		$('<ul><li><a href=\'#\'>2015</a></li><li><a href=\'#\'>2014</a></li><li><a href=\'#\'>earlier</a></li></ul>').appendTo('.active');

	});
});