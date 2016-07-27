$(document).ready(function(){

	$('.observations').click(function(){
		$('.pg-options').animate({left: '-100%'},300);
		$('.pg-main').animate({left: '0%'},300);
	});

	$('.back-button').click(function(){
		$('.pg-options').animate({left: '0%'},300);
		$('.pg-main').animate({left: '100%'},300);
	});

});