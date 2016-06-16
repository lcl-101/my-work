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
})