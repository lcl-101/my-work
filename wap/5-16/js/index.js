$(function(){
    FastClick.attach(document.body);
    var swiper = new Swiper('.swiper-container1', {
        initialSlide:0,
        slidesPerView: 4,
        spaceBetween: 30
    });
    var sw=$('.swiper-container1 .swiper-slide').eq(0).width()+30;
    $('.swiper-container1 .swiper-slide').on('click',function(){
        var index=$('.swiper-container1 .swiper-slide').index(this);
        $('.top-jiao').css({transform:'translateX('+sw*index+'px)'});
    });
    $('.swiper-container1 .swiper-slide img').on('click',function(){
        var index=$('.swiper-container1 .swiper-slide').index(this);
        $('.top-jiao').css({transform:'translateX('+sw*index+'px)'});
    });

    var swipers = new Swiper('.swiper-container2', {
        initialSlide:0,
        slidesPerView: 3,
        spaceBetween: 30
    });
});