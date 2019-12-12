// swiper轮播图
 var mySwiper = new Swiper ('.swiper-container', {
				//direction: 'vertical', // 垂直切换选项
				loop: true, // 循环模式选项
				 autoplay: {
					disableOnInteraction: false,
				},
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
					 clickable :true,
				},
				
				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
            })  
// 特效动画
$(function(){
	$('.box1').on('mouseenter',function(){
		$(this).children().animate({left:"30px"},700)
	})
})
$(function(){
	$('.box1').on('mouseleave',function(){
		$(this).children().animate({left:"-30px"},700)
	})
})
/* $(function(){
			//先把所有的二级菜单都隐藏
	// $('.bag>div').hide(200); 
	$('bag').has('div').mouseenter(function(){
		//has:保留包含特定后代的元素，去掉那些不含有指定后代的元素。
		$(this).children().show(500)
	})
	$('.bag').has('div').mouseleave(function(){
		$(this).children().hide(200)
	})
}) */ 
$(function(){
	$('.bag').on('mouseenter',function(){
		$(this).children().animate({top:"-2px"},800)
	})
})
$(function(){
	$('.bag').on('mouseleave',function(){
		$(this).children().animate({top:"50px"},100)
	})
})
$(function(){
	$('.tu>a').on('mouseenter',function(){
		$(this).children().animate({top:"185px"},800)
	})
})
$(function(){
	$('.tu>a').on('mouseleave',function(){
		$(this).children().animate({top:"280px"},100)
	})
})
$(function(){
	$('.left').on('mouseenter',function(){
		$(this).children('img').animate({width:'380px',height:'530px'},800)
	})
})
$(function(){
	$('.left').on('mouseleave',function(){
		$(this).children('img').animate({width:'364px',height:'512px'},800)
	})
})
$(function(){
	$('.box_center').on('mouseenter',function(){
		$(this).children('img').animate({width:'390px',height:'390px'},800)
	})
})
$(function(){
	$('.box_center').on('mouseleave',function(){
		$(this).children('img').animate({width:'370px',height:'370px'},800)
	})
})