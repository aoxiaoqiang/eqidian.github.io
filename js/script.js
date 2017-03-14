$(function() {
    // index banner
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // vertical 
        loop: true,
        autoplay: 1600,
        speed: 600,
        effect: 'slide', //coverflow flip cube fade slide
        // 分页器
        pagination: '.swiper-pagination',
        // 前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    })

    // partner
    var swiperPartner = new Swiper('.swiper-container-partner', {
        paginationClickable: true,
        autoplay: 1600,
        autoplayDisableOnInteraction: false,
        speed: 800,
        loop: true,
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    // 移动端导航
    var navFlag = false;
    $('header.mobile-nav .right-menu').click(function(event){
    	event.stopPropagation();
    	$(this).parent().next('nav').slideToggle();
    	navFlag = !navFlag;
    })
    $('body').click(function(){
    	if(navFlag){
    		$('header.mobile-nav nav').slideToggle();
    		navFlag = !navFlag;
    	}
    })
})
