$(function(){
    $('.banner-title1').on('click',function(){
        $('.bannerTitle-inner').fadeIn();
    });
    $('.bannerPop-close').on('click',function(){
        $('.bannerTitle-inner').fadeOut();
    });

})