$(function(){
    FastClick.attach(document.body);
    var ei=0;
    var et=setInterval(function(){
        $('.banner-egg').attr({src:'images/egg.png'});
        $('.banner-egg').eq(ei)[0].src='images/eggs.png';
        ei++;
        if(ei>2){
            ei=0;
        }
    },1000);
    var bW=$('.banner-opportunity').width()/2+16;
    $('.banner-opportunity').css({marginLeft:-bW});
    $('.banner-egg').on('click',function(){
        clearInterval(et);
        $('.banner-egg').attr({src:'images/egg.png'});
        for(var i=0;i<=$('.banner-egg').length;i++){
            var bE=$('.banner-egg').eq(i).attr('data-n');
            if(bE=='true'){
                $('.banner-egg').eq(i).attr({src:'images/egg1.png'});
            }
        }
        var index=$('.banner-egg').index(this);
        $('.banner-chui').eq(index).show();
        $('.banner-chui').eq(index).css({'-webkit-animation':'yumove 0.5s cubic-bezier(0.42, 0, 0.59, 0.97)','-o-animation':'yumove 0.5s cubic-bezier(0.42, 0, 0.59, 0.97)','-moz-animation':'yumove 0.5s cubic-bezier(0.42, 0, 0.59, 0.97)',});
        setTimeout(function(){
            $('.banner-lie0').eq(index).fadeIn();
            eggClick(index);
        },600);
    });
    function eggClick(index){
        var s=1;
        var t = window.setInterval(function () {
            $('.banner-lie0').eq(index).attr('src','images/liewen'+s+'.png');
            s++;
            if(s==5) {
                $('.banner-chui').eq(index).hide();
                window.clearInterval(t);
                $('.banner-lie0').hide();
                $('.banner-egg').eq(index)[0].src='images/egg1.png';
                $('.banner-egg').eq(index).attr({'data-n':'true'});
                $('.banner-hua').eq(index).fadeIn();
                $('.mark-box').fadeIn();
                //$('.login-box').show();
                //setTimeout(function(){
                //    $('.login-box').addClass('login-box1');
                //},100);
                $('.card-box').show();
                setTimeout(function(){
                    $('.card-box').addClass('card-box1');
                },1000);
            }
        },200);
    }
    $(window).load(function(){
        var lH=$('.login-box').height()/2;
        $('.login-box').css({marginTop:-lH});
        $('.close-img').on('click',function(){
            $('.login-box').removeClass('login-box1');
            setTimeout(function(){
                $('.login-box').hide();
            },500);
            $('.mark-box').fadeOut();
        });
        $('.close-card').on('click',function(){
            $('.card-box').removeClass('card-box1');
            setTimeout(function(){
                $('.card-box').hide();
            },500);
            $('.mark-box').fadeOut();
        });

    });

});