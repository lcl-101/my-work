$(function(){
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop:true,
        simulateTouch : false,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        },
        onSlideChangeEnd:function(swiper){
            var aa=$('.swiper-slide');
            for ( var i = 0; i < aa.length; i++){
                if($(aa).eq(i).is('.swiper-slide-active')){
                    $('.swiper-mask').hide();
                    $('.swiper-mask').eq(i).fadeIn();
                    $('.swiper-inner').hide();
                    $('.swiper-inner').eq(i).fadeIn();
                    $('.swiper-what').css({marginTop:'-200px'});
                    $('.swiper-what').eq(i).animate({marginTop:'-27px'},{
                        easing: 'easeOutBounce',
                        duration: 800,
                        complete:function(){
                        }
                    });
                    $('.swiper-bottom').css({bottom:'-100px'});
                    $('.swiper-bottoms').css({bottom:'-100px'});
                    $('.swiper-bottom').eq(i).animate({bottom:'0'},{
                        easing: 'easeOutBounce',
                        duration: 800,
                        complete:function(){
                        }
                    });
                    $('.swiper-bottoms').eq(i).animate({bottom:'0'},{
                        easing: 'easeOutBounce',
                        duration: 800,
                        complete:function(){
                        }
                    });
                }
            }
        },
        onSlideChangeStart:function(){
            $('.swiper-bottom').css({bottom:'-100px'});
            $('.swiper-bottoms').css({bottom:'-100px'});
            $('.swiper-what').css({marginTop:'-200px'});
            $('.swiper-what').removeClass('swiperEnd');
            $('.swiper-mask').hide();
            $('.swiper-inner').hide();
        }
    });
    $('.say-pre').click(function(){
        swiper.slidePrev();
    });
    $('.say-next').click(function(){
        swiper.slideNext();
    });
});