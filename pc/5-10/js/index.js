$(function(){
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop:true,
        //simulateTouch : false,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        },
        onTouchStart:function(){
            $('.say-inner').hide();
        },
        onTouchEnd:function(){

            var aa=$('.swiper-slide');
            for ( var i = 0; i < aa.length; i++){
                if($(aa).eq(i).is('.swiper-slide-active')){
                    //轮播图
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
                    //内容
                    $('.say-inner').hide();
                    var w=i-17;
                    if(i>=34){
                        w=0;
                    }
                    if(w==8||w==9||w==10||w==14){
                        $('.say-down').hide();
                        $('.say-show').css({height:'134px'});
                    }else if(w==11||w==13){
                        $('.say-down').hide();
                        $('.say-show').css({height:'176px'});
                    }else {
                        $('.say-down').show();
                        $('.say-show').css({height:'270px'});
                    }
                    $('.say-inner').eq(w).fadeIn();
                }
            }
        },
        onTouchMove:function(swiper,even){

            $('.say-inner').hide();
        },
        onSlideChangeEnd:function(swiper){
            var aa=$('.swiper-slide');
            for ( var i = 0; i < aa.length; i++){
                if($(aa).eq(i).is('.swiper-slide-active')){
                    //轮播图
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
                    //内容
                    $('.say-inner').hide();
                    var w=i-17;
                    if(i>=34){
                        w=0;
                    }
                    if(w==8||w==9||w==10||w==14){
                        $('.say-down').hide();
                        $('.say-show').css({height:'134px'});
                    }else if(w==11||w==13){
                        $('.say-down').hide();
                        $('.say-show').css({height:'176px'});
                    }else {
                        $('.say-down').show();
                        $('.say-show').css({height:'270px'});
                    }
                    $('.say-inner').eq(w).fadeIn();
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
    $('.say-down').on('click',function(){
        $('.say-show').animate({height:'100%'},500);
        $('.say-down').hide();
    })
});