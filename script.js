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

	$('a[href^=#]').click(function(){ 
        var speed = 500; //移動完了までの時間(sec)を指定
        var href= $(this).attr("href"); 
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    $(".carousel").carousel();

    $('.column-list').click(function(){
     var index = $(this).index();
     $('.column-list').removeClass('active-active');
     $(this).addClass('active-active');
    });

    $('.column-column-list').click(function(){
    	$('.program').hide();
    	$('.player').css('margin-left','430px');
    	$('.column').css('height','1100px');
    	$('.column-column').show();
    });

    $('.program-program').click(function(){
        $('.column-column').hide();
        $('.program').show();
        $('.program-adjast').css('margin-left','180px');
        $('.program-adjast-adjast').css('margin-left','30px')
        $('.program-adjast-third').css('margin-left','430px');
        $('.column').css('height','1100px');
    });

    $('.show-all').click(function(){
    	$('.column-contents').show().css('margin-left','180px');
    	$('.column-contents-right').show().css('margin-left','30px');
    	$('.column').css('height','1500px');

    });

     $('.image-wrapper').hover(
     	function(){
        $('#column1').css('transform','scale(1.15,1.15)');
        $('.column-background').fadeIn();
        },
         function(){
          $('#column1').css('transform','scale(1,1)');
          $('.column-background').fadeOut();
     });
        
  

	}); 

