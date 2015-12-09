$(function(){
    var $btn= $('.btn-more')

	$btn.toggle(function(){
		$('#btn-more-message').show();},
		function(){
		$('#btn-more-message').hide();
		});

	$btn.toggle(function(){
		$('.top-wrapper').height(650);},
		function(){
		$('.top-wrapper').height(550);
		});

	$btn.toggle(function(){
		$('#btn-more').text('閉じる');},
		function(){
		$('#btn-more').text('もっと詳しく');
		});	
	}); 

