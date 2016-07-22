$(function(){
    $(window).load(function(){
        var hL=$('.help-box ul li').eq(0).height();
        $('.help-box ul li').css({height:hL});
        var aH=$('.award-box').height()/2;
        $('.award-box').css({marginTop:-aH});
        var adH=$('.address-box').height()/2;
        $('.address-box').css({marginTop:-adH});
        var iH=$('.invite-box').height()/2;
        $('.invite-box').css({marginTop:-iH});
        var lH=$('.login-box').height()/2;
        $('.login-box').css({marginTop:-lH});
    });
    $('.close-box').on('click',function(){
        $('.award-box').fadeOut();
        $('.mark-box').fadeOut();
    });
    $('.mark-box').on('click',function(){
        $('.award-box').fadeOut();
        $('.mark-box').fadeOut();
    });
    $('.close-address').on('click',function(){
        $('.address-box').fadeOut();
        $('.mark-box').fadeOut();
    });
    $('.close-invite').on('click',function(){
        $('.invite-box').fadeOut();
        $('.mark-box').fadeOut();
    });
    $('.close-login').on('click',function(){
        $('.login-box').fadeOut();
        $('.mark-box').fadeOut();
    });
    var award=['images/pingpangqiupai.jpg','images/yongjing.jpg','images/shoutao.jpg','images/paiqiu.jpg','images/lanqiu.jpg','images/shouhuan.jpg','images/zhuqiu.jpg','images/paiqiu.jpg'];
    $('.help-box ul li p').on('click',function(){
        var index=$('.help-box ul li p').index(this);
        $('.award-inner img').attr({src:award[index]});
        $('.award-box').fadeIn();
        $('.mark-box').fadeIn();
    })
})