$(function(){
    FastClick.attach(document.body);
    var slider='';
    var swiper = new Swiper('.swiper-container1', {
        initialSlide:0,
        slidesPerView: 4,
        spaceBetween: 30
    });
    var sw=$('.swiper-container1 .swiper-slide').eq(0).width()+30;
    $('.swiper-container1 .swiper-slide').on('click',function(){
        var index=$('.swiper-container1 .swiper-slide').index(this);
        $('.top-jiao').css({transform:'translateX('+sw*index+'px)'});
        setTimeout(function(){
            showVip(index,'light');
        },500);
    });
    function showVip(a,b){
        var html='';
        var index='';
        var j=['生日红包','会员等级红包','债权优惠','专属客服','加息券','会员答谢','活动提前知道','活动兑奖延后','会员考察优惠','运营月度推送','产品定向购买','理财产品专享'];
        var k=['谷东生日当天及之后10天内可以在当前所在等级往下的所有红包中任选其一，10天内未领取，系统自动发送红包到达账户，有效期15天','会员等级变更当日系统发送对应等级红包到达账户，有效期30天，每一等级的红包仅可领取一次','债权转让收取3‰手续费，铜牌以上等级的会员可享受不同的折扣','银牌等级以上的会员会有对应的客服旺仔进行一对一定制服务，可提供专业的咨询和专享的产品定制等','银牌以上等级会员每月可获取对应的加息券福利，按月领取，过期作废','金牌以上等级的会员在平台周年庆以及年终回馈中收到旺仔们准备的惊喜礼物','金牌以上等级的会员在平台活动前3-5天收到专属客服的活动提醒','金牌以上等级的会员在平台活动结束后1个月内继续享受领取奖品的特权','铂金以上等级的会员在平台考察中可享受专车市内接送等服务','铂金以上等级的会员可每月收到平台详尽数据的运营余月报','铂金以上等级的会员可购买平台的所指定的理财产品','钻石以上等级的会员可根据自己的资金量沟通专属客服进行产品定制，专项购买'];
        if (a==0){
            index=1;
        }else if (a==1){
            index=3;
        }if (a==2){
            index=5;

        }if (a==3){
            index=8;

        }if (a==4){
            index=11;

        }if (a==5){
            index=12;

        }if (a==6){
            index=12;

        }
        html='<ul id="slider1" class="clearfix">';
        for (var i=0;i<index;i++){
            if(b=='light'){
                //$('#slider1 li').eq(i).show();
                var s=i+1;
                html+='<li>'+
                    '<img class="gift-img" src="images/liwu'+s+'.png" alt="">'+
                    '<p>'+j[i]+'</p></li>';
            }else if(b=='gray'){
                var s=i+1;
                html+='<li>'+
                    '<img class="gift-img" src="images/liwus'+s+'.png" alt="">'+
                    '<p>'+j[i]+'</p></li>';
            }
        }
        html+='</ul>';
        $('#Swiper').html(html);
        $('#slider1 li').on('click',function(){
            var index=$('#slider1 li').index(this);
            $('.vip-mark').fadeIn('fast');
            $('.giift-ttle').html(j[index]);
            $('.gift-content').html(k[index]);
            $('.gift-box').fadeIn('fast').removeClass('vip-show');
            $('body').attr('ontouchmove','event.preventDefault()');
        });
        if (a==0 || a==1){
            return;
        }
        slider = new NiceSlider('#slider1',{
            indexBtn:false,
            unlimit:false,
            animation:'ease-out-back'
        })
    }

    var swiper3 = new Swiper('.swiper-container3', {
        pagination: '.bottom-btn',
        paginationClickable: true,
        autoHeight:true,
        paginationBulletRender: function (index, className) {
            if(index==0){
                index='加息券';
            }else if(index==1){
                index='会员升级红包'
            }else if(index==2){
                index='生日红包'
            }
            return '<li class="bottom-menu ' + className + '">' + index + '</li>';
        }
    });
    var bL=$('.bottom-btn li').length;
    if(bL==1){
        $('.bottom-btn li').css({width:'100%'});
    }else if(bL==2){
        $('.bottom-btn li').css({width:'50%'});
    }else if(bL==3){
        $('.bottom-btn li').css({width:'33.3333%'});
    }
    var vH=$('.vip-tishi').height()/2;
    $('.vip-tishi').css({marginTop:-vH});
    var gH=$('.gift-box').height()/2;
    $('.gift-box').css({marginTop:-gH});
    $('.top-right').on('click',function(){
        $('.vip-mark').fadeIn('fast');
        $('.vip-tishi').fadeIn('fast').removeClass('vip-show');
        $('body').attr('ontouchmove','event.preventDefault()');
    });
    $('.vip-btn').on('click',function(){
        $('.vip-mark').hide();
        $('.vip-tishi').hide().addClass('vip-show');
    });
    $('#slider1 li').on('click',function(){
        var index=$('#slider1 li').index(this);
        $('.vip-mark').fadeIn('fast');
        $('.gift-box').fadeIn('fast').removeClass('vip-show');
        $('body').attr('ontouchmove','event.preventDefault()');
    });
    $('.gift-btn').on('click',function(){
        $('.vip-mark').hide();
        $('.gift-box').hide().addClass('vip-show');
    })
});