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