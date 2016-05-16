$(function(){
    var imgbox=$(".inner");
    var imgs=$(".inner li");
    var imgw=$(imgs).width();
    $(".inner").css({width:"imgw*imgs.length"});
    var flag=true;
    //var t=setInterval(move,3000);
    function move(){
        $('.center-mask').hide();
        $('.center-what').css({marginTop:'-200px'});
        $('.center-bottom').css({bottom:'-100px'});
        $('.center-bottoms').css({bottom:'-100px'});
        $(imgbox).animate({marginLeft:-imgw},function(){
            $(".inner li").eq(0).appendTo(imgbox);
            $(imgbox).animate({marginLeft:0},0,function(){
                innerShow();
            });
        });
    }
    function move2(){
        $('.center-mask').hide();
        $('.center-what').css({marginTop:'-200px'});
        $('.center-bottom').css({bottom:'-100px'});
        $('.center-bottoms').css({bottom:'-100px'});
        $(".inner li:last").prependTo(imgbox);
        $(imgbox).css({marginLeft:-imgw});
        $(imgbox).animate({marginLeft:0},function(){
            innerShow();
        });
    }
    var num=0;
    $(".lefts").click(function(){
        if(!flag){
            return;
        }
        flag=false;
        num++;
        if(num>=17){
            num=0;
        }
        $('.say-inner').hide();
        if(num==8||num==9||num==10||num==14){
            $('.say-down').hide();
            $('.say-show').css({height:'134px'});
        }else if(num==11||num==13){
            $('.say-down').hide();
            $('.say-show').css({height:'176px'});
        }else {
            $('.say-down').show();
            $('.say-show').css({height:'270px'});
        }
        $('.say-inner').eq(num).fadeIn();
        move2();
    });
    $(".rights").click(function(){
        if(!flag){
            return;
        }
        flag=false;
        num--;
        if(num<=-1){
            num=16;
        }
        $('.say-inner').hide();
        if(num==8||num==9||num==10||num==14){
            $('.say-down').hide();
            $('.say-show').css({height:'134px'});
        }else if(num==11||num==13){
            $('.say-down').hide();
            $('.say-show').css({height:'176px'});
        }else {
            $('.say-down').show();
            $('.say-show').css({height:'270px'});
        }
        $('.say-inner').eq(num).fadeIn();
        move();
    });

    $('.center-mask').eq(2).fadeIn();
    $('.center-what').eq(2).animate({marginTop:'-27px'},{
        easing: 'easeOutBounce',
        duration: 800
    });
    $('.center-bottom').eq(2).animate({bottom:'0'},{
        easing: 'easeOutBounce',
        duration: 800
    });
    $('.center-bottoms').eq(2).animate({bottom:'0'},{
        easing: 'easeOutBounce',
        duration: 800,
    });
    function innerShow(){
        $('.center-mask').eq(2).fadeIn();
        $('.center-what').eq(2).animate({marginTop:'-27px'},{
            easing: 'easeOutBounce',
            duration: 800,
            complete:function(){
                $('.center-mask').not( $('.center-mask').eq(2) ).hide();
                $('.center-what').not( $('.center-what').eq(2) ).css({marginTop:'-200px'});
                $('.center-bottom').not( $('.center-bottom').eq(2) ).css({bottom:'-100px'});
                $('.center-bottoms').not( $('.center-bottoms').eq(2) ).css({bottom:'-100px'});
            }
        });
        $('.center-bottom').eq(2).animate({bottom:'0'},{
            easing: 'easeOutBounce',
            duration: 800,
            complete:function(){
                $('.center-mask').not( $('.center-mask').eq(2) ).hide();
                $('.center-what').not( $('.center-what').eq(2) ).css({marginTop:'-200px'});
                $('.center-bottom').not( $('.center-bottom').eq(2) ).css({bottom:'-100px'});
                $('.center-bottoms').not( $('.center-bottoms').eq(2) ).css({bottom:'-100px'});
            }
        });
        $('.center-bottoms').eq(2).animate({bottom:'0'},{
            easing: 'easeOutBounce',
            duration: 800,
            complete:function(){
                $('.center-mask').not( $('.center-mask').eq(2) ).hide();
                $('.center-what').not( $('.center-what').eq(2) ).css({marginTop:'-200px'});
                $('.center-bottom').not( $('.center-bottom').eq(2) ).css({bottom:'-100px'});
                $('.center-bottoms').not( $('.center-bottoms').eq(2) ).css({bottom:'-100px'});
                flag=true;
            }
        });
    }
    $('.say-down').on('click',function(){
        $('.say-show').animate({height:'100%'},500);
        $('.say-down').hide();
    })
});