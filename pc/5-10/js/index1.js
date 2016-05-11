$(function(){
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        touchMove:false,
        swipe:false,
        onAfterChange:function(name,index){
            console.log(name);
            console.log(index);
            $('.center-mask').hide();
            $('.center-mask').eq(index).fadeIn();
            $('.center-inner').hide();
            $('.center-inner').eq(index).fadeIn();
            $('.center-what').css({marginTop:'-200px'});
            $('.center-what').eq(index).animate({marginTop:'-27px'},500);
            $('.center-bottom').css({bottom:'-100px'});
            $('.center-bottoms').css({bottom:'-100px'});
            $('.center-bottom').eq(index).animate({bottom:'0'},500);
            $('.center-bottoms').eq(index).animate({bottom:'0'},500);
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});