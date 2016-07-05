$(function(){
    FastClick.attach(document.body);
    var lH=$('.list-prize ul li').height();
    //获奖名单
    setInterval(function(){
        $('.list-prize ul li').eq(0).animate({marginTop:-lH},1000,function(){
            $('.list-prize ul li').eq(0).css({marginTop:0});
            $('.list-prize ul li').eq(0).appendTo($('.list-prize ul'));
        })
    },3000);
    var n=1;
    //灯
    setInterval(function(){
        n++;
        if(n>=3){
            n=1;
        }
        $('.prize-light').attr({src:'images/light'+n+'.png'});
    },300);
    $('.frame-btn span').on('click',function(){
        $('.mark-box').fadeOut();
        $('.frame-box').fadeOut();
    });
    $('.norecord-close').on('click',function(){
        $('.mark-box').fadeOut();
        $('.norecord-box').fadeOut();
    });
    $('.record-close').on('click',function(){
        $('.mark-box').fadeOut();
        $('.record-box').fadeOut();
    });
    $('.calendar-close').on('click',function(){
        $('.mark-box').fadeOut();
        $('.calendar-box').fadeOut();
    });
    myScroll = new IScroll('#wrapper',{ mouseWheel: true, tap: true });
    var cW=$('.calendar-contents li div').width();
    $('.calendar-contents li div').css({height:cW});
    $('.prize-btn img').on('touchstart',function(){
        $('.prize-btn img').attr('src','images/btnd.png');
        $('.prize-point').addClass('jiasiqip');

    });
    $('.prize-btn img').on('touchend',function(){
        $('.prize-btn img').attr('src','images/btnc.png');
    })
})