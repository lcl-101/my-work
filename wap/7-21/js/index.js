$(function(){
    var add=$('#address').val();
    $('#add').val(add);
    $(window).load(function(){
        //初始化
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
        var tH=$('.touzi-box').height()/2;
        $('.touzi-box').css({marginTop:-tH});
    });
    $('.close-box').on('click',function(){
        $('.award-box').fadeOut('fast');
        $('.mark-box').hide();
    });
    $('.close-address').on('click',function(){
        $('.address-box').fadeOut('fast');
        $('.mark-box').hide();
    });
    $('.close-invite').on('click',function(){
        $('.invite-box').fadeOut('fast');
        $('.mark-box').hide();
    });
    $('.close-login').on('click',function(){
        $('.login-box').fadeOut('fast');
        $('.mark-box').hide();
    });
    $('.close-touzi').on('click',function(){
        $('.touzi-box').fadeOut('fast');
        $('.mark-box').hide();
    });
    //点击助力显示对应奖品
    var award=['images/pingpangqiupai.jpg','images/yongjing.jpg','images/shoutao.jpg','images/paiqiu.jpg','images/lanqiu.jpg','images/shouhuan.jpg','images/zhuqiu.jpg','images/wangqiupai.jpg'];
    $('.help-btn').on('click',function(){
        var index=$('.help-btn').index(this);
        $('.award-inner img').attr({src:award[index]});
        <!--获取领取的奖品类型-->
        var type=$('#type').val()-1;
        if(index!=type){
            $('.award-box').fadeIn('fast');
            $('.mark-box').show();
            lingqu(index);
        }
    });
    function lingqu(a){
        $('.award-inner div').on('click',function(){
            $('.award-box').fadeOut('fast');
            var status=$('#status').val();
            if(status==1){
                $('.login-box').fadeIn('fast');
                $('.mark-box').show();
            }else if(status==2){
                $('.invite-box').fadeIn('fast');
                $('.mark-box').show();
                $('.invite-inner span').html('本活动仅限新用户，<br/>邀请新人参与得118元<br/>现金奖励！');
            }else if(status==3){
                $('.touzi-box').fadeIn('fast');
                $('.mark-box').show();
            }else if(status==4){
                $('#type').val(a);
                $('.address-box').fadeIn('fast');
                $('.mark-box').fadeIn('fast');
            }else if(status==5){
                $('.invite-box').fadeIn('fast');
                $('.mark-box').show();
                $('.invite-inner span').html('您已经领取过奖品了，<br/>去邀请好友吧！');
            }
        })
    }
    //保存地址
    $('.save-address').on('click',function(){
        var type=$('#type').val();
        var uid=$('#uid').val();
        var address=$('.address-inner textarea').val();
        $.ajax({
            type: 'get',
            url:'/active/olympic/recieve',
            data:{type:type,uid:uid,address:address},
            dataType:'json',
            success:function(data){
                if(data.code==0){
                    $('.address-box').fadeOut('fast');
                    $('.invite-box').fadeIn('fast');
                    $('.mark-box').show();
                    $('.invite-inner span').html('恭喜您！领取成功！<br/>我们将在10个工作日内<br/>发货！<br/>你也可以邀请好友参加<br/>活动！领取118元<br/>现金奖励吧！');
                }else {
                    alert(data.msg);
                }
            }
        })
    });
    $('.invite-btn').on('click',function(){
        $('.share-box').fadeIn('fast');
        $('.mark-box').show();
        $('.invite-box').fadeOut('fast');
    });

    $('.mark-box').on('click',function(){
        $('.award-box').fadeOut('fast');
        $('.mark-box').hide();
        $('.share-box').fadeOut('fast');
        $('.invite-box').fadeOut('fast');
        $('.address-box').fadeOut('fast');
        $('.login-box').fadeOut('fast');
        $('.touzi-box').fadeOut('fast');
    });
});
