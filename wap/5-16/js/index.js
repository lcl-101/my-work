$(function(){
    FastClick.attach(document.body);
    var slider='';
    var swiper = new Swiper('.swiper-container1', {
        initialSlide:4,
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
    console.log(bL);
});