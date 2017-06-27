$(document).ready(function(){

	$('.observations').click(function(){
		$('.pg-options').animate({left: '-100%'},300);
		$('.pg-main').animate({left: '0%'},300);

		settings=0;
		$('.close-button').removeClass('settings-active');
		$('.settings-tab').css('visibility','hidden');
		$('.add-section').css('visibility','hidden');
		$('.settings').css('display','block');
		$('.close-button').css('display','none');
	});

	$('.back-button').click(function(){
		$('.pg-options').animate({left: '0%'},300);
		$('.pg-main').animate({left: '100%'},300);
	});

	var state=0,settings=0;

	$('.button-body').click(function(){
		if(state==0){
			state=1;
			$('.button-body').addClass('active');
		}
		else{
			state=0;
			$('.button-body').removeClass('active');
		}
	});

	$('.settings').click(function(){
			settings=1;
			$('.close-button').addClass('settings-active');
			$('.settings-tab').css('visibility','visible');
			$('.add-section').css('visibility','visible');
			$('.settings').css('display','none');
			$('.close-button').css('display','block');
	});

	$('.close-button').click(function(){
			settings=0;
			$('.close-button').removeClass('settings-active');
			$('.settings-tab').css('visibility','hidden');
			$('.add-section').css('visibility','hidden');
			$('.settings').css('display','block');
			$('.close-button').css('display','none');
	});

});