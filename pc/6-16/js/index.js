$(function(){
    $('.banner-title1').on('click',function(){
        $('.bannerTitle-inner').fadeIn();
    });
    $('.bannerPop-close').on('click',function(){
        $('.bannerTitle-inner').fadeOut();
    });
    $('.contrast-save').hover(function(){
        $('.contrast-save img')[0].src='images/save-hover.png';
    },function(){
        $('.contrast-save img')[0].src='images/save.png';
    });
    $('.contrast-secret').hover(function(){
        $('.contrast-secret img')[0].src='images/secret-hover.png';
    },function(){
        $('.contrast-secret img')[0].src='images/secret.png';
    });
    $('.contrast-authority').hover(function(){
        $('.contrast-authority img')[0].src='images/authority-hover.png';
    },function(){
        $('.contrast-authority img')[0].src='images/authority.png';
    });
    $('.contrast-legal').hover(function(){
        $('.contrast-legal img')[0].src='images/legal-hover.png';
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
    })
})