$(function(){
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
        loop:true,
        pagination:'.swiper-pagination',
        preloadImages:false,  //强制加载所有图片
        updateOnImagesReady : true, //当所有的内嵌图像（img标签）加载完成后Swiper会重新初始化
    })
})