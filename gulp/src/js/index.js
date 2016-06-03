$(function(){
    //轮播图
    $('.banner-btn1 li div').eq(0).css({opacity:1});
    $(".banner-box div").hide();
    $(".banner-box div").eq(0).stop(true,false).show();
    var lengths=$('.banner-btn li').length;
    var t=setInterval(move,5000);
    var index=0;
    var next=0;
    var flag=true;
    function move(){
        //if(!flag){
        //    return;
        //}
        next++;
        if(next==lengths){
            next=0;
        }
        //flag=false;
        $(".banner-box div").eq(index).fadeOut();
        $(".banner-box div").eq(next).fadeIn();
        $('.banner-btn1 li div').css({opacity:0.6});
        $('.banner-btn1 li div').eq(next).css({opacity:1});
        index=next;
    }

    $(".banner-box").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,5000);
    });
    $(".banner-content").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,5000);
    });
    $('.banner-btn1 li').hover(function(){
        clearInterval(t);
        var that=$('.banner-btn1 li').index(this);
        if(index==that){
            return;
        }
        $(".banner-box div").eq(index).stop(true,false).fadeOut();
        $(".banner-box div").eq(that).stop(true,false).fadeIn();
        $('.banner-btn1 li div').css({opacity:0.6});
        $('.banner-btn1 li div').eq(that).css({opacity:1});

        index=next=that;

    },function(){
        t=setInterval(move,5000);
    });
    //理财公告轮播图
    var ts=setInterval(move1,2000);
    function move1(){
        if(!flag){
            return;
        }
        flag=false;
        $('.licai-lunbo div').eq(0).animate({marginTop:'-20px'},1000,function(){
            $('.licai-lunbo div').eq(0).css({marginTop:0});
            $('.licai-lunbo div').eq(0).appendTo($('.licai-lunbo'));
            flag=true;
        })
    }
    $('.licai-lunbo div').hover(function(){
        clearInterval(ts);
    },function(){
        ts=setInterval(move1,2000);
    });

    //进度条
    var tops,tops1,tops2;
    //tops = $('#new-box .new-jindutiao1').offset().top;
    //tops1 = $('#tuijian .new-jindutiao1').offset().top;
    tops2 = $('.yingshou-jindutiao1').offset().top;
    var ch=$(window).height();
    var num1=0;
    var num2=0;
    var num3=0;
    var num4=0;
    var num5=0;
    var Top=$(window).scrollTop();
    Top+=ch;

    $(window).bind('scroll',function(){
        if($(window).scrollTop()>(tops2-ch)){
            var bars1=$('.yingshou-jindutiao1').eq(0).attr('progressbar');
            var bars2=$('.yingshou-jindutiao1').eq(1).attr('progressbar');
            var bars3=$('.yingshou-jindutiao1').eq(2).attr('progressbar');
            scrollbar3(bars1);
            scrollbar4(bars2);
            scrollbar5(bars3);

            for(var i=3;i<$('.yingshou-jindutiao1').length;i++){
                var bars=$('.yingshou-jindutiao1').eq(i).attr('progressbar');
                var nums1=Math.round(bars);
                $('.yingshou-jindu span').eq(i).html(nums1+'%');
                $('.yingshou-jindutiao1').eq(i).css('width',nums1+'%');
                $(window).unbind('scroll');
            }

        }
    });

    if(Top>tops||Top>tops1||Top>tops2+ch){

        var bars1=$('.yingshou-jindutiao1').eq(0).attr('progressbar');
        var bars2=$('.yingshou-jindutiao1').eq(1).attr('progressbar');
        var bars3=$('.yingshou-jindutiao1').eq(2).attr('progressbar');
        scrollbar3(bars1);
        scrollbar4(bars2);
        scrollbar5(bars3);

        for(var i=3;i<$('.yingshou-jindutiao1').length;i++){
            var bars=$('.yingshou-jindutiao1').eq(i).attr('progressbar');
            var nums1=Math.round(bars);
            $('.yingshou-jindu span').eq(i).html(nums1+'%');
            $('.yingshou-jindutiao1').eq(i).css('width',nums1+'%');
        }
    }
    function scrollbar1(bar1){
        if(bar1!=undefined&&bar1!=0&&bar1!=''){
            var t2=setInterval(function(){
                num1++;
                if(num1>bar1){
                    clearInterval(t2);
                    return;
                }
                $('.new-left-jindu span').eq(0).html(num1+'%');
                $('.new-jindutiao1').eq(0).css('width',num1+'%');
            },5)
        }
    }
    function scrollbar2(bar2){
        if(bar2!=undefined&&bar2!=0&&bar2!=''){
            var t1=setInterval(function(){
                num2++;
                if(num2>bar2){
                    clearInterval(t1);
                    return;
                }
                $('.new-left-jindu span').eq(1).html(num2+'%');
                $('.new-jindutiao1').eq(1).css('width',num2+'%');
            },5)
        }
    }
    function scrollbar3(progressbars){
        if(progressbars!=undefined&&progressbars!=0&&progressbars!=''){
            var nums=Math.round(progressbars);
            var t3=setInterval(function(){
                num3++;
                if(num3>nums){
                    clearInterval(t3);
                    return;
                }
                $('.yingshou-jindu span').eq(0).html(num3+'%');
                $('.yingshou-jindutiao1').eq(0).css('width',num3+'%');
            },5)
        }
    }
    function scrollbar4(progressbars){
        if(progressbars!=undefined&&progressbars!=0&&progressbars!=''){
            var nums=Math.round(progressbars);
            var t4=setInterval(function(){
                num4++;
                if(num4>nums){
                    clearInterval(t4);
                    return;
                }
                $('.yingshou-jindu span').eq(1).html(num4+'%');
                $('.yingshou-jindutiao1').eq(1).css('width',num4+'%');
            },5)
        }
    }
    function scrollbar5(progressbars){
        if(progressbars!=undefined&&progressbars!=0&&progressbars!=''){
            var nums=Math.round(progressbars);
            var t5=setInterval(function(){
                num5++;
                if(num5>nums){
                    clearInterval(t5);
                    return;
                }
                $('.yingshou-jindu span').eq(2).html(num5+'%');
                $('.yingshou-jindutiao1').eq(2).css('width',num5+'%');
            },5)
        }
    }

});