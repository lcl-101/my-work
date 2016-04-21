$(function(){
    var qh=$('.question-tab li').width();
    var qn=$('.question-tab li').length;
    $('.question-tab ul').css({width:qh*qn});
    var t=setInterval(move,10);
    var num=0;
    //轮播
    function move(){
       num++;
        if(num>qh){
            num=0;
            $(".question-tab li").eq(0).appendTo($(".question-tab ul"));
            $(".question-tab ul").css({marginLeft:0});
        }
        $(".question-tab ul").css({marginLeft:-num});
    }
    $('.question-tab ul').hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,10);
    });
    //选项卡
    $('.question-tab li').hover(function(){
        var index= $('.question-tab li').index(this);
        var n=$('.question-tab li').eq(index).attr('data-num');
        $('.question-tabs').eq(index).addClass('question-show');
        $('.questions').hide();
        $('.questions').eq(n).fadeIn('fast');
    },function(){
        $('.question-tabs').removeClass('question-show');
    });

    //谷东说1
    var saybtn1=$(".say-btn1");
    var sayOnebox=$(".sayOne-box");
    var sayOneboxs=$("#sayOne-box");
    say(saybtn1,sayOnebox,sayOneboxs);

    //谷东说2
    var saybtn2=$('.say-btn2');
    var sayTwobox=$(".sayTwo-box");
    var sayTwoboxs=$("#sayTwo-box");
    say(saybtn2,sayTwobox,sayTwoboxs);

    //谷东说3
    var saybtn3=$('.say-btn3');
    var sayThreebox=$(".sayThree-box");
    var sayThreeboxs=$("#sayThree-box");
    say(saybtn3,sayThreebox,sayThreeboxs);

    //谷东说4
    var saybtn4=$('.say-btn4');
    var sayFourbox=$(".sayFour-box");
    var sayFourboxs=$("#sayFour-box");
    say(saybtn4,sayFourbox,sayFourboxs);

    function say(a,b,c){  //a展开按钮，b股东说，c股东说
        $(a).on('click',function(){
            $('.mask').show();
            $(c).fadeIn();
        });
        $(b).hover(function(){
            $(c).addClass('say-show');
            $(b).addClass('say-show');
        },function(){
            $(b).removeClass('say-show');
        });
        $(c).hover(function(){

        },function(){
            $('.mask').hide();
            $(c).fadeOut();
            $(c).removeClass('say-show');
            $(b).removeClass('say-show');
        })
    }
    //导航
    var tops,tops1,tops2,tops3;
    var wh=$(window).height();
    $(window).load(function() {
        tops = $('.play-box').offset().top;
        tops1 = $('.answer-box').offset().top;
        tops2 = $('.say-box').offset().top;
        tops3 = $('.interview-box').offset().top;
        if ($(window).scrollTop() < tops3+100) {
            $('.bottom-box').fadeIn();
            $('.bottom-inner').fadeIn();
        } else if ($(window).scrollTop() > tops3+100){
            $('.bottom-box').fadeOut();
            $('.bottom-inner').fadeOut();
        }

    });
    $(window).resize(function() {
        tops = $('.play-box').offset().top;
        tops1 = $('.answer-box').offset().top;
        tops2 = $('.say-box').offset().top;
        tops3 = $('.interview-box').offset().top;
    });
    $(".bottom-inner div").eq(0).click(function () {
        $("body,html").animate({scrollTop: tops});
    });
    $(".bottom-inner div").eq(1).click(function () {
        $("body,html").animate({scrollTop: tops1-80});
    });
    $(".bottom-inner div").eq(2).click(function () {
        $("body,html").animate({scrollTop: tops2});
    });
    $(".bottom-inner div").eq(3).click(function () {
        $("body,html").animate({scrollTop: tops3});
    });

    //$(".bottom-inner div").on('click',function(){
    //    var index=$(".bottom-inner div").index(this);
    //    $(".bottom-inner div").css({background:'',color:'#fff'});
    //    $(".bottom-inner div").eq(index).css({background:'#fff',color:'#464e78'});
    //});
    $(window).scroll(function () {
        if ($(window).scrollTop() >= tops-100 && $(window).scrollTop()< tops1-100) {
            $(".bottom-inner div").css({background:'',color:'#fff'});
            $(".bottom-inner div").eq(0).css({background:'#fff',color:'#464e78'});
        }else if ($(window).scrollTop() >= tops1-100 && $(window).scrollTop()< tops2-100) {
            $(".bottom-inner div").css({background:'',color:'#fff'});
            $(".bottom-inner div").eq(1).css({background:'#fff',color:'#464e78'});
        }else if ($(window).scrollTop() >= tops2-100 && $(window).scrollTop()< tops3-100) {
            $(".bottom-inner div").css({background:'',color:'#fff'});
            $(".bottom-inner div").eq(2).css({background:'#fff',color:'#464e78'});
        }else if ($(window).scrollTop() >= tops3-100) {
            $(".bottom-inner div").css({background:'',color:'#fff'});
            $(".bottom-inner div").eq(3).css({background:'#fff',color:'#464e78'});
        }
        if ($(window).scrollTop() < tops3+100) {
            $('.bottom-box').fadeIn();
            $('.bottom-inner').fadeIn();
        } else if ($(window).scrollTop() > tops3+100){
            $('.bottom-box').fadeOut();
            $('.bottom-inner').fadeOut();
        }
    })
})