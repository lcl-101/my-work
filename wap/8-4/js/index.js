$(function(){
    FastClick.attach(document.body);
    $(window).load(function(){
        function centers(){
            //records-box
            var rH=$('.records-box').height()/2+50;
            var rW=$('.records-box').width()/2;
            $('.records-box').css({marginTop:-rH,marginLeft:-rW});
            //login-box
            var lH=$('.login-box').height()/2+50;
            var lW=$('.login-box').width()/2;
            $('.login-box').css({marginTop:-lH,marginLeft:-lW});
            //try-box
            var tH=$('.try-box').height()/2+50;
            var tW=$('.try-box').width()/2;
            $('.try-box').css({marginTop:-rH,marginLeft:-tW});
            //regret-box
            var rHs=$('.regret-box').height()/2+50;
            var rWs=$('.regret-box').width()/2;
            $('.regret-box').css({marginTop:-rHs,marginLeft:-rWs});
            //regret-box
            var aH=$('.award-box').height()/2+50;
            var aW=$('.award-box').width()/2;
            $('.award-box').css({marginTop:-aH,marginLeft:-aW});
            //address-box
            var adH=$('.address-box').height()/2+50;
            var adW=$('.address-box').width()/2;
            $('.address-box').css({marginTop:-adH,marginLeft:-adW});
            //award-baoxiang
            var awH=$('.award-baoxiang').height()/2+50;
            var awW=$('.award-baoxiang').width()/2;
            $('.award-baoxiang').css({marginTop:-awH,marginLeft:-awW});
        }
        centers();
        $(window).resize(function(){
            centers();
        })
    });
    //records-box
    $('.records-btn span').on('click',function(){
       $('.records-box').hide();
       $('.mark-box').hide();
    });
    //try-btn
    $('.try-btn span').on('click',function(){
        $('.try-box').hide();
        $('.mark-box').hide();
    });
    //regret-box
    $('.regret-btn span').on('click',function(){
        $('.regret-box').hide();
        $('.mark-box').hide();
    });
    //查看奖品
    var prizetitle=['8元现金红包','10元代金券','无线充电器','10元现金红包','28元代金券','多功能电烤箱','15元现金红包','38元代金券','扫地机器人'];
    $('.prize-inner li img').on('click',function(){
        var index=$('.prize-inner li img').index(this);
        if(index==0){
            for(var i=0;i<=2;i++){
                $('.prize-content li p').eq(i).html(prizetitle[i]);
                $('.prize-content li img').eq(i).attr({src:'images/prize'+(i+1)+'.png'});
            }
            $('.prize-content ul').removeClass('bg2');
            $('.prize-content ul').removeClass('bg3');
            $('.prize-content ul').addClass('bg1');

            $('.prize-inner li img').eq(1).attr('src','images/bao2.png');
            $('.prize-inner li img').eq(2).attr('src','images/bao3.png');
            $('.prize-inner li img').eq(0).attr('src','images/bao1s.png');
        }
        if(index==1){
            for(var i=3;i<=5;i++){
                $('.prize-content li p').eq(i-3).html(prizetitle[i]);
                $('.prize-content li img').eq(i-3).attr({src:'images/prize'+(i+1)+'.png'});
            }
            $('.prize-content ul').removeClass('bg1');
            $('.prize-content ul').removeClass('bg3');
            $('.prize-content ul').addClass('bg2');

            $('.prize-inner li img').eq(0).attr('src','images/bao1.png');
            $('.prize-inner li img').eq(2).attr('src','images/bao3.png');
            $('.prize-inner li img').eq(1).attr('src','images/bao2s.png');
        }
        if(index==2){
            for(var i=6;i<=8;i++){
                $('.prize-content li p').eq(i-6).html(prizetitle[i]);
                $('.prize-content li img').eq(i-6).attr({src:'images/prize'+(i+1)+'.png'});
            }
            $('.prize-content ul').removeClass('bg1');
            $('.prize-content ul').removeClass('bg2');
            $('.prize-content ul').addClass('bg3');

            $('.prize-inner li img').eq(0).attr('src','images/bao1.png');
            $('.prize-inner li img').eq(1).attr('src','images/bao2.png');
            $('.prize-inner li img').eq(2).attr('src','images/bao3s.png');
        }
    })
    //获奖名单
    setInterval(function(){
        var lH=$('.list-inner ul li').height();
        $('.list-inner ul li').eq(0).animate({marginTop:-lH},1000,function(){
            $('.list-inner ul li').eq(0).css({marginTop:0});
            $('.list-inner ul li').eq(0).appendTo($('.list-inner ul'));
        })
    },3000);
    //baoxiang
    $('.baoxiang').on('click',function(){
        $('.mark-box').show();
        var index=$('.baoxiang').index(this);
        $('.award-baoxiang').show().animate({top:'50%'},500,function(){
            $('.award-baoxiang').addClass('round-big');
            setTimeout(function(){
                $('.award-baoxiang').removeClass('round-big');
                $('.award-baoxiang').fadeOut();
                $('.award-box').fadeIn();
            },600);
        });
    });
    //award-btn
    $('.award-btn span').on('click',function(){
        $('.award-box').fadeOut();
        $('.address-box').fadeIn();
    })
})