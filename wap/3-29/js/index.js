$(function(){
    var swipercontainer1=$('.swiper-container1');
    var mySwiper1='mySwiper';
    swipers(mySwiper1,swipercontainer1,3,16,function(){
        var qh=$('.swiper-slide3').height();
        $('.swiper-slidea').css({height:40+qh});
    });

    var swipercontainer2='.swiper-containers';
    var mySwiper2='mySwiper2';
    swipers(mySwiper2,swipercontainer2,2,20,function(){
        $(window).load(function() { // makes sure the whole site is loaded
            var sh=$('#swiper-slides1').height();
            $('.swiper-slides').css({height:40+sh});
        });
        //setTimeout(function(){
        //    var sh=$('#swiper-slides1').height();
        //    $('.swiper-slides').css({height:40+sh});
        //},500)
    });
    function swipers(n,a,b,c,callback){
            var n = new Swiper(a, {
                loop:true,
                direction: "horizontal",
                slidesPerView: b,
                spaceBetween: c,
                breakpoints: {
                    1024: {
                        slidesPerView: b,
                        spaceBetween: c
                    },
                    768: {
                        slidesPerView: b,
                        spaceBetween: c
                    },
                    640: {
                        slidesPerView: b,
                        spaceBetween: c
                    },
                    320: {
                        slidesPerView: b,
                        spaceBetween: c
                    }
                },
            });
            callback();
    }



    //queation1
    var swiperslide1=$('.swiper-slide1');
    var questionbox1=$('.question-box').eq(0);
    var closeImg=$('.close-img');
    queationShow(swiperslide1,questionbox1,closeImg);

    //queation2
    var swiperslide2=$('.swiper-slide2');
    var questionbox2=$('.question-box').eq(1);
    queationShow(swiperslide2,questionbox2,closeImg);
    //queation2
    var swiperslide3=$('.swiper-slide3');
    var questionbox3=$('.question-box').eq(2);
    queationShow(swiperslide3,questionbox3,closeImg);

    //queation2
    var swiperslide4=$('.swiper-slide4');
    var questionbox4=$('.question-box').eq(3);
    queationShow(swiperslide4,questionbox4,closeImg);

    function queationShow(a,b,c){ //a事件点击对象
        $(a).on('click',function(){
            var bh=$(b).height();
            $(b).css({top:'50%',marginTop:-bh/2});
            $('.mask').fadeIn();
            $(b).fadeIn();
            $(a).css({background:'#e9ebf4'});
        });
        $(c).on('click',function(){
            $('.mask').fadeOut();
            $(b).fadeOut();
            $(a).css({background:'#fff'});
        })
    }

    //股东说1
    var  swiperslides1=$('.swiper-slides1');
    var saidbox1=$('.said-box').eq(0);
    var wrapper1='.wrapper1';
    var sayClose=$('.say-close');
    fudongShow(swiperslides1,saidbox1,sayClose,wrapper1);

    var  swiperslides2=$('.swiper-slides2');
    var saidbox2=$('.said-box').eq(1);
    var wrapper2='.wrapper2';
    fudongShow(swiperslides2,saidbox2,sayClose,wrapper2);

    var  swiperslides3=$('.swiper-slides3');
    var saidbox3=$('.said-box').eq(2);
    var wrapper3='.wrapper3';
    fudongShow(swiperslides3,saidbox3,sayClose,wrapper3);

    var  swiperslides4=$('.swiper-slides4');
    var saidbox4=$('.said-box').eq(3);
    var wrapper4='.wrapper4';
    fudongShow(swiperslides4,saidbox4,sayClose,wrapper4);

    function fudongShow(a,b,c,d){
        $(a).on('click',function(){
            $(a).css({background:'#e9ebf4'});
            $(b).fadeIn();
            myScroll = new IScroll(d,{ mouseWheel: true, tap: true });
            $('.mask').fadeIn();
            $(c).fadeIn();
        });
        c.on('click', function () {
            $('.mask').fadeOut();
            $(b).fadeOut();
            $(a).css({background:'#fff'});
            $(c).fadeOut();
        });
    }
})
