window.onload = function () {
	// body...
	var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 横向切换选项
    loop: true, // 循环模式选项
    autoplay:true,
 	effect : 'coverflow',
 	centeredSlides: true,

    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })     
}

function lan(){
	 // document.getElementsByClassName('conter-list-top')[0].style.background = "url(lan.png) no-repeat center center"  ;

	 var lan = document.getElementsByClassName('conter-list-top')[0];
	 lan.style.background = "url(lan.png) no-repeat center center";

	 var border1 = document.getElementsByClassName('quan-right')[0];
	 var border2 = document.getElementsByClassName('quan-left')[0];
	 border1.style.border = "1px solid #fff";
	 border2.style.border = "1px solid #666";
}

function cheng(){
	// document.getElementsByClassName('conter-list-top')[0].style.background = "url(cheng.png) no-repeat center center"  ;

	var cheng = document.getElementsByClassName('conter-list-top')[0];
	cheng.style.background = "url(cheng.png) no-repeat center center";

	var border1 = document.getElementsByClassName('quan-left')[0];
	 var border2 = document.getElementsByClassName('quan-right')[0];
	 border1.style.border = "1px solid #fff";
	 border2.style.border = "1px solid #666";

	
}