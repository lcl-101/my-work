$(function(){
    $('.banner-title1').on('click',function(){
        $('.bannerTitle-inner').fadeIn();
    });
    $('.bannerPop-close').on('click',function(){
        $('.bannerTitle-inner').fadeOut();
    });
    $('.contrast-save').hover(function(){
        $('.contrast-save img')[0].src='images/save-hover.png';
        $('.contrast-right-inner p').html('安全');
        $('.contrast-right-inner div').html('对客户合同内容进行保全，为投资者带来安全感');
    },function(){
        $('.contrast-save img')[0].src='images/save.png';
    });
    $('.contrast-secret').hover(function(){
        $('.contrast-secret img')[0].src='images/secret-hover.png';
        $('.contrast-right-inner p').html('保密');
        $('.contrast-right-inner div').html('系统仅在本地生成数据的数 字摘要，绝无泄露隐私、商 业秘密、内容的风险');
    },function(){
        $('.contrast-secret img')[0].src='images/secret.png';
    });
    $('.contrast-authority').hover(function(){
        $('.contrast-authority img')[0].src='images/authority-hover.png';
        $('.contrast-right-inner p').html('权威');
        $('.contrast-right-inner div').html('出具公证处公证及司法鉴定 中心鉴定，提供有效的法律 支持');
    },function(){
        $('.contrast-authority img')[0].src='images/authority.png';
    });
    $('.contrast-legal').hover(function(){
        $('.contrast-legal img')[0].src='images/legal-hover.png';
        $('.contrast-right-inner p').html('合法');
        $('.contrast-right-inner div').html('通过独立的第三方公证，提 高了电子合同的法律效力');
    },function(){
        $('.contrast-legal img')[0].src='images/legal.png';
    });
    $('.advantage-bottom-left').on('click',function(){
       $('.advantage-bottom-inner').fadeIn();
    });
    $('.advantage-close').on('click',function(){
        $('.advantage-bottom-inner').fadeOut();
    });
    $('.provide-left-title img').hover(function(){
        $('.provide-left-tishi').stop(true,false).fadeIn();
    },function(){
        $('.provide-left-tishi').stop(true,false).fadeOut();
    });
    $('.determine-left div').on('click',function(){
        var index=$('.determine-left div').index(this);
        $('.determine-left div').removeClass('determine-blue');
        $('.determine-left div').addClass('determine-gray');
        $('.determine-left div').eq(index).addClass('determine-blue');
        $('.determine-right ul').hide();
        $('.determine-right ul').eq(index).show();
        if(index==0){
            $('.determine-btn').hide();
        }else if(index==1){
            $('.determine-btn').show();
        }
    });

    $('.determine-btn div').hover(function(){
        var index=$('.determine-btn div').index(this);
        $('.determine-btn div').removeClass('determine-blue');
        $('.determine-btn div').eq(index).addClass('determine-blue');
        if(index==0){
            $('.zs1').show();
            $('.zs2').hide();
        }else if(index==1){
            $('.zs2').show();
            $('.zs1').hide();
        }
    })
})