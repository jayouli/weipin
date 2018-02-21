$(function(){

	$('nav .navleft').mouseover(function(event) {
		$(this).css({
			'border': '1px solid #aaaaaa','background':'white','border-bottom':'none'
		});
		$('nav .navleft .jiantou').css({'transform':'rotate(180deg)'});
		$('.nav .navleft .xiala').show().css('background', 'white');
	});
	$('nav .navleft').mouseout(function(event) {
		$(this).css({
			'border': 'none','background':'none'
		});
		$('nav .navleft .jiantou').css({'transform':'rotate(360deg)'});
		$('.nav .navleft .xiala').hide().css('background', 'white');
	});

	$('nav .navright ul li').mouseout(function(event) {
		$(this).css({
			'border': 'none','background':'none'
		});
		$('nav .navright ul li img').css({'transform':'rotate(360deg)'});
		
	});


	$('nav .navright ul .lifirst').mouseover(function(event) {
		$(this).css({
			'border': '1px solid #aaaaaa','background':'white','border-bottom':'none'
		});
		$('nav .navright .lifirst img').css({'transform':'rotate(180deg)'});
		$('.nav .navright .lifirst .denglu').show().css('background', 'white');
	});


	


	$('nav .navright ul .lifirst').mouseout(function(event) {
		$('.nav .navright .lifirst .denglu').hide();
	});


	$('nav .navright ul .litwo').mouseover(function(event) {
		$(this).css({
			'border': '1px solid #aaaaaa','background':'white','border-bottom':'none'
		});
		$('nav .navright .litwo img').css({'transform':'rotate(180deg)'});
		$('.nav .navright .litwo .temai').show().css('background', 'white');
	});

	$('nav .navright ul .litwo').mouseout(function(event) {
		$('.nav .navright .litwo .temai').hide();
	});



	$('nav .navright ul .lisun').mouseover(function(event) {
		$(this).css({
			'border': '1px solid #aaaaaa','background':'white','border-bottom':'none'
		});
		$('nav .navright .lisun img').css({'transform':'rotate(180deg)'});
		$('.nav .navright .lisun .temai').show().css('background', 'white');;
	});

	$('nav .navright ul .lisun').mouseout(function(event) {
		$('.nav .navright .lisun .temai').hide().css('background', 'white');
	});



	$('nav .navright ul .lisuns').mouseover(function(event) {
		$(this).css({
			'border': '1px solid #aaaaaa','background':'white','border-bottom':'none'
		});
		$('nav .navright .lisuns img').css({'transform':'rotate(180deg)'});
		$('.nav .navright .lisuns .temai').show().css('background', 'white');
	});

	$('nav .navright ul .lisuns').mouseout(function(event) {
		$('.nav .navright .lisuns .temai').hide();
	});



	$('nav .navright ul .lifive').mouseover(function(event) {
		$(this).css({
			'border': '1px solid #aaaaaa','background':'white','border-bottom':'none'
		});
		
		$('.nav .navright .lifive .shoujiban').show().css('background', 'white');
	});

	$('nav .navright ul .lifive').mouseout(function(event) {
		$('.nav .navright .lifive .shoujiban').hide();
	});


	$('nav .navright ul .lisix').mouseover(function(event) {
		$(this).css({
			'border': '1px solid #aaaaaa','background':'white','border-bottom':'none'
		});
		$('.nav .navright .more').show().css('background', 'white');
	});

	$('nav .navright ul .lisix').mouseout(function(event) {
		$('.nav .navright .more').hide();
	});





   $('.navbub .bubcon ul .lilast').mouseover(function(event) {
   		$(this).css({
   			'border': '1px solid #aaaaaa',
   			'border-bottom': 'none'
   		});
   		$('.navbub .bubcon ul .lilast .gouwu .danchu').show().css('background', 'white');
   		$('.navbub .bubcon ul .lilast .gouwu  .danchu-p').show().css('background', 'white');
   });
   $('.navbub .bubcon ul .lilast').mouseout(function(event) {
   		$(this).css('border', 'none');
   		$('.navbub .bubcon ul .lilast .gouwu .danchu').hide();
   		$('.navbub .bubcon ul .lilast .gouwu  .danchu-p').hide();
   });





   $('.navbar .barcon ul .for').mouseover(function(event) {
   		$('.navbar .barimgs').show();
   });
   $('.navbar .barimgs').mouseleave(function(event) {
   		$('.navbar .barimgs ').hide();
   });



   $('.navbar .barimgs ul li').eq(0).mouseover(function(event) {
   		$('.navbar .barimgs ul li p').eq(0).stop().animate({
   			'height': '96px',
   			'line-height': '96px',
   			
   		}).css('background', 'rgba(0,0,0,0.4)');

   });

   $('.navbar .barimgs ul li').eq(0).mouseover(function(event) {
   		$('.navbar .barimgs ul li p').eq(0).stop().animate({
   			'height': '96px',
   			'line-height': '96px',
   			
   		}).css('background', 'rgba(0,0,0,0.4)');

   });

   $('.navbar .barimgs ul li').eq(0).mouseover(function(event) {
   		$('.navbar .barimgs ul li p').eq(0).stop().animate({
   			'height': '96px',
   			'line-height': '96px',
   			
   		}).css('background', 'rgba(0,0,0,0.4)');

   });

   $('.navbar .barimgs ul li').eq(1).mouseover(function(event) {
   		$('.navbar .barimgs ul li p').eq(1).stop().animate({
   			'height': '96px',
   			'line-height': '96px',
   			
   		}).css('background', 'rgba(0,0,0,0.4)');

   });

   $('.navbar .barimgs ul li').eq(2).mouseover(function(event) {
   		$('.navbar .barimgs ul li p').eq(2).stop().animate({
   			'height': '96px',
   			'line-height': '96px',
   			
   		}).css('background', 'rgba(0,0,0,0.4)');

   });

   $('.navbar .barimgs ul li').eq(3).mouseover(function(event) {
   		$('.navbar .barimgs ul li p').eq(3).stop().animate({
   			'height': '96px',
   			'line-height': '96px',
   			
   		}).css('background', 'rgba(0,0,0,0.4)');

   });


   $('.navbar .barimgs ul li').eq(4).mouseover(function(event) {
   		$('.navbar .barimgs ul li p').eq(4).stop().animate({
   			'height': '96px',
   			'line-height': '96px',
   			
   		}).css('background', 'rgba(0,0,0,0.4)');

   });

   $('.navbar .barimgs ul li').mouseout(function(event) {
   		$('.navbar .barimgs ul li p').stop().animate({
   			'height': '40px',
   			'line-height': '40px',
   			
   		}).css('background', 'none');

   });


// 右侧边栏
   $('.rightaside ul .aside1').mouseover(function(event) {
   	$('.rightaside ul .aside1 .zhanghao').show();
   });

   $('.rightaside ul .aside1').mouseout(function(event) {
   		$('.rightaside ul .aside1 .zhanghao').hide();
   });

   $('.rightaside ul .aside3').hover(function() {
   	   $('.rightaside ul .aside3 p').show().siblings().children(1).hide();
   }, function() {
  	   $('.rightaside ul .aside3 p').hide();
   });


    $('.rightaside ul .asidefuyi').hover(function() {
   	   $('.rightaside ul .asidefuyi p').show().siblings().children(1).hide();
   }, function() {
  	   $('.rightaside ul .asidefuyi p').hide();
   });


     $('.rightaside ul .asidefuer').hover(function() {
   	   $('.rightaside ul .asidefuer p').show().siblings().children(1).hide();
   }, function() {
  	   $('.rightaside ul .asidefuer p').hide();
   });
   

    $('.rightaside ul .asidefusan').hover(function() {
   	   $('.rightaside ul .asidefusan p').show().siblings().children(1).hide();
   }, function() {
  	   $('.rightaside ul .asidefusan p').hide();
   });



     $('.rightaside ul .aside4').hover(function() {
   	   $('.rightaside ul .aside4 p').show().siblings().children(1).hide();
   }, function() {
  	   $('.rightaside ul .aside4 p').hide();
   });


      $('.rightaside ul .aside5').hover(function() {
   	   $('.rightaside ul .aside5 p').show().siblings().children(1).hide();
   }, function() {
  	   $('.rightaside ul .aside5 p').hide();
	});


  	   $('.rightaside ul .aside2').click(function(event) {
  	   		$('.rightaside ul .aside2 .gouwudai').show();
  	   });

  	   $('.rightaside ul .aside2 .gouwudai').mouseleave(function(event) {
  	   		$('.rightaside ul .aside2 .gouwudai').hide();
  	   });


  	   $('.rightaside ul .aside5').click(function(event) {
        	$('html,body').animate({'scrollTop':'0px'}, 100)
        });
 // 轮播图
		var timer;
  	  	var num=0;
  	  function gogo(){
  	  	timer=setInterval(function(){
  	  		num=num+1;
  	  		if(num>2){
  	  			num=0;
  	  		}
  	  		
  	  		$('.contain .conzhong ul li ').eq(num).fadeIn().siblings().fadeOut();
  	  		$('.contain .border .navul li').eq(num).addClass('xiahuaxian').siblings().removeClass('xiahuaxian');
  	  	},5000)
  	  }
  	  gogo();
  	 

  	 $('.contain .border .conzhong').hover(function() {
  	 	$('.contain .conzhong span').show();
  	 }, function() {
  	 	$('.contain .conzhong span').hide();
  	 });
  	   
  	  $('.contain .conzhong span').hover(function() {
  	  	$(this).css('background', 'rgba(0,0,0,1)');
  	  }, function() {
  	  	$(this).css('background', 'rgba(0,0,0,0.3)');
  	  });

  	  $('.contain .conzhong .left').click(function(event) {
  	  	num=num-1;
  	  	if(num<0){
  	  		num=2;

  	  	}
  	  	$('.contain .conzhong ul li ').eq(num).fadeIn().siblings('').fadeOut();

  	  });


  	  $('.contain .conzhong .right').click(function(event) {
  	  	num=num+1;
  	  	if(num>2){
  	  		num=0;

  	  	}
  	  	$('.contain .conzhong ul li ').eq(num).fadeIn().siblings('').fadeOut();
  	  });



  	  $('.shopbox .shopdiv1 .divbox').hover(function() {
  	  	$(this).fadeTo(600,0.8);
  	  	$('.shopbox .shopdiv1 .divbox .pricemai').show();
  	  }, function() {
  	  	$('.shopbox .shopdiv1 .divbox .pricemai').hide();
  	  	$(this).fadeTo(600,1);
  	  });


  	  $('.shopbox .shopdiv1 .divbox1').hover(function() {
  	  	$(this).fadeTo(600,0.8);
  	  	$('.shopbox .shopdiv1 .divbox1 .pricemai').show();
  	  }, function() {
  	  	$('.shopbox .shopdiv1 .divbox1 .pricemai').hide();
  	  	$(this).fadeTo(600,1);
  	  });




  	  $('.shopbox .shopdiv2 .divbox').hover(function() {
  	  	$(this).fadeTo(600,0.8);
  	  	$('.shopbox .shopdiv2 .divbox .pricemai').show();
  	  }, function() {
  	  	$('.shopbox .shopdiv2 .divbox .pricemai').hide();
  	  	$(this).fadeTo(600,1);
  	  });

  	  $('.shopbox .shopdiv2 .divbox1').hover(function() {
  	  	$(this).fadeTo(600,0.8);
  	  	$('.shopbox .shopdiv2 .divbox1 .pricemai').show();
  	  }, function() {
  	  	$('.shopbox .shopdiv2 .divbox1 .pricemai').hide();
  	  	$(this).fadeTo(600,1);
  	  });
   
    $('.shopbox .shopdiv3 .divbox').hover(function() {
    	$(this).fadeTo(600,0.8);
  	  	$('.shopbox .shopdiv3 .divbox .pricemai').show();
  	  }, function() {
  	  	$('.shopbox .shopdiv3 .divbox .pricemai').hide();
  	  		$(this).fadeTo(600,1);
  	  });

  	  $('.shopbox .shopdiv3 .divbox1').hover(function() {
  	  	$(this).fadeTo(600,0.8);
  	  	$('.shopbox .shopdiv3 .divbox1 .pricemai').show();
  	  }, function() {
  	  	$('.shopbox .shopdiv3 .divbox1 .pricemai').hide();
  	  		$(this).fadeTo(600,1);
  	  });


  	 $('.shopbox .botomleft .p-text span').hover(function() {
  	 	$(this).css('background', '#f10180');
  	 	$('.shopbox .botomleft .p-text span a').css('color', 'white');
  	 }, function() {
  	 	$(this).css('background', 'none');
  	 	$('.shopbox .botomleft .p-text span a').css('color', '#aaaaaa');
  	 });

     $('.sreiao ul li img').hover(function() {
       $(this).fadeTo(300,0.7);
     }, function() {
       $(this).fadeTo(300,1);
     });

// 精选
     $('.shopbox .shopdiv1 .divbox .pricemai .topul ul li img').hover(function() {
       $(this).fadeTo(0.5);
     }, function() {
        $(this).fadeTo(1);
     });

// 导航条
  	 $(window).scroll(function(event) {
  	 	var a=$(window).scrollTop();
  	 	var b=$(window).height();
  	 	// if(a>200){
  	 	// 	$('.navbar').css({
  	 	// 		'position': 'fixed',
  	 	// 		'top': '0px',
  	 	// 		'right':'0px',
  	 	// 		'left':'0px',
  	 	// 		'z-index':'1'
  	 	// 	});
  	 	// }

  	 	if(a>680){
			$('.leftaside').stop().css({
				'position': 'fixed',
				'top': '120px'
			});
		}else{
			$('.leftaside').stop().css({
				'position': 'absolute',
				'top': '1410px'
			});
		}
		// $('.side-two div:nth-of-type(2) span').click(function(event) {
		// 	$('html,body').animate({'scrollTop': '0px'}, 500);
		// });
  	 });

  	 // 左侧边栏
  	 $('.leftaside .uli a').click(function(event) {
  	 	$(this).addClass('colored').siblings().removeClass('colored');
  	 	$(this).addClass('whicol').siblings().removeClass('whicol');
  	 });

  	 $('.leftaside .uli a').click(function(event) {
  	 	
  	 	$(this).addClass('whicol').parent().siblings().children().removeClass('whicol');
  	 });

// 滚滚屏
      var num=0;
    $('.shopbox div').mousewheel(function(e,d){
      
      num=num-(d);
      if(num>11){
        num=11;
      }
      if(num<0){
        num=0;
      }

      $('.leftaside .uli a').stop().eq(num).addClass('colored').siblings().removeClass('colored').css('color', 'black');
      
    })
    

     // 女装品牌
     $('#box2 ul li img').hover(function() {
       $(this).stop().fadeTo(300,0.8);


     }, function() {
       $(this).stop().fadeTo(300,1);

     });

     // 收藏品牌弹出
     $('#box2 ul li').hover(function() {
       $(this).children('p').children('span:nth-of-type(2)').show();
     }, function() {
        $(this).children('p').children('span:nth-of-type(2)').hide();
     });



     // 鞋包品牌
     $('#box3 ul li img').hover(function() {
       $(this).stop().fadeTo(300,0.8);


     }, function() {
       $(this).stop().fadeTo(300,1);

     });

     $('#box3 ul li').hover(function() {
       $(this).children('p').children('span:nth-of-type(2)').show();
      
     }, function() {
        $(this).children('p').children('span:nth-of-type(2)').hide();
     });


     $('#box3 ul li').hover(function() {
       $(this).children('span').show();
      
     }, function() {
         $(this).children('span').hide();
     });

     // 男士
     $('#box4 ul li img').hover(function() {
       $(this).stop().fadeTo(300,0.8);


     }, function() {
       $(this).stop().fadeTo(300,1);

     });

     $('#box4 ul li').hover(function() {
       $(this).children('p').children('span:nth-of-type(2)').show();
      
     }, function() {
        $(this).children('p').children('span:nth-of-type(2)').hide();
     });


     $('#box4 ul li').hover(function() {
       $(this).children('span').show();
      
     }, function() {
         $(this).children('span').hide();
     });


     // 运动

     $('#box5 ul li img').hover(function() {
       $(this).stop().fadeTo(300,0.8);


     }, function() {
       $(this).stop().fadeTo(300,1);

     });

     $('#box5 ul li').hover(function() {
       $(this).children('p').children('span:nth-of-type(2)').show();
      
     }, function() {
        $(this).children('p').children('span:nth-of-type(2)').hide();
     });


     $('#box5 ul li').hover(function() {
       $(this).children('span').show();
      
     }, function() {
         $(this).children('span').hide();
     });

     // 饰品
     $('#box6 ul li img').hover(function() {
       $(this).stop().fadeTo(300,0.8);


     }, function() {
       $(this).stop().fadeTo(300,1);

     });

     $('#box6 ul li').hover(function() {
       $(this).children('p').children('span:nth-of-type(2)').show();
      
     }, function() {
        $(this).children('p').children('span:nth-of-type(2)').hide();
     });


     $('#box6 ul li').hover(function() {
       $(this).children('span').show();
      
     }, function() {
         $(this).children('span').hide();
     });


     // 美妆
     $('#box7 ul li img').hover(function() {
       $(this).stop().fadeTo(300,0.8);


     }, function() {
       $(this).stop().fadeTo(300,1);

     });

     $('#box7 ul li').hover(function() {
       $(this).children('p').children('span:nth-of-type(2)').show();
      
     }, function() {
        $(this).children('p').children('span:nth-of-type(2)').hide();
     });


     $('#box7 ul li').hover(function() {
       $(this).children('span').show();
      
     }, function() {
         $(this).children('span').hide();
     });

     // 母婴

     $('#box8 ul li img').hover(function() {
       $(this).stop().fadeTo(300,0.8);


     }, function() {
       $(this).stop().fadeTo(300,1);

     });

     $('#box8 ul li').hover(function() {
       $(this).children('p').children('span:nth-of-type(2)').show();
      
     }, function() {
        $(this).children('p').children('span:nth-of-type(2)').hide();
     });

// 居家
    $('#box9 ul li img').hover(function() {
       $(this).stop().fadeTo(300,0.8);


     }, function() {
       $(this).stop().fadeTo(300,1);

     });

     $('#box9 ul li').hover(function() {
       $(this).children('p').children('span:nth-of-type(2)').show();
      
     }, function() {
        $(this).children('p').children('span:nth-of-type(2)').hide();
     });


     $('#box9 ul li').hover(function() {
       $(this).children('span').show();
      
     }, function() {
         $(this).children('span').hide();
     });

    // 国际

    $('#box10 ul li img').hover(function() {
       $(this).stop().fadeTo(300,0.8);


     }, function() {
       $(this).stop().fadeTo(300,1);

     });

     $('#box10 ul li').hover(function() {
       $(this).children('p').children('span:nth-of-type(2)').show();
      
     }, function() {
        $(this).children('p').children('span:nth-of-type(2)').hide();
     });

     // 生活

     $('#box11 ul li img').hover(function() {
       $(this).stop().fadeTo(300,0.8);


     }, function() {
       $(this).stop().fadeTo(300,1);

     });

     $('#box11 ul li').hover(function() {
       $(this).children('p').children('span:nth-of-type(2)').show();
      
     }, function() {
        $(this).children('p').children('span:nth-of-type(2)').hide();
     });


     $('#box11 ul li').hover(function() {
       $(this).children('span').show();
      
     }, function() {
         $(this).children('span').hide();
     });



     // 预告

     $('#box12 ul li').hover(function() {
       $(this).children('.shoucang,div').show();
       
     }, function() {
       $(this).children('.shoucang,div').hide();

     });

     $('#box12 ul li .shoucang').hover(function() {
       $(this).children('a').css('color', 'white');
     }, function() {
       $(this).children('a').css('color', 'black');
     });

})