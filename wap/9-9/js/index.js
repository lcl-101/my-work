$(function(){
    FastClick.attach(document.body);
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect:"coverflow",
        direction: 'vertical',
        mousewheelControl : false,
    });
    mySwiper.lockSwipes();
    $('.swiper-slide1 .next-btn div').on('click',function(){
        mySwiper.unlockSwipes();
        mySwiper.slideNext();
        mySwiper.lockSwipes();
    });
    function center(){
        var eW=$('.error-ins').width()/2;
        var eH=$('.error-ins').height()/2;
        $('.error-ins').css({marginTop:-eH,marginLeft:-eW});
    }
    center();
    var num=0;
    setInterval(function(){
        num+=1;
        if(num>=100){
            return
        }
        $('.loading-content span').html(num+'%');
    },20);
    $(window).load(function(){
        center();
        $('.loading-content span').html('100%');
        $('.loading-box').hide();
    });
    $(window).resize(function(){
        center();
    });
    var errorIns0=['images/1-1.png','images/1-2.png','images/popup_text_01.png',''];
    var errorIns1=['','images/popup_text_02.png','images/2-3.png','images/2-4.png'];
    var errorIns2=['images/3-1.png','images/popup_text_03.png','images/popup_text_03.png',''];
    var errorIns3=['','images/4-2.png','images/popup_text_04.png','images/popup_text_04.png'];
    var errorIns4=['images/5-1.png','','images/5_3.png','images/popup_text_05.png'];
    function tanchuang(a,b,c){ //a:标签名 b:errorIns c:正确项
        if(c==a){
            mySwiper.unlockSwipes();
            mySwiper.slideNext();
            mySwiper.lockSwipes();
            return;
        }
        $('.error-box').fadeIn();
        center();
        $('.top-ins img').attr({src:b[a]});
    }
    $('.question-box1 ul li div').on('click',function(){
        var index=$('.question-box1 ul li div').index(this);
        $(".question-box1 ul li span").hide();
        $(".question-box1 ul li span").eq(index).show();
        tanchuang(index,errorIns0,3);
    });
    $('.question-box2 ul li div').on('click',function(){
        var index=$('.question-box2 ul li div').index(this);
        $(".question-box2 ul li span").hide();
        $(".question-box2 ul li span").eq(index).show();
        tanchuang(index,errorIns1,0);
    });
    $('.question-box3 ul li div').on('click',function(){
        var index=$('.question-box3 ul li div').index(this);
        $(".question-box3 ul li span").hide();
        $(".question-box3 ul li span").eq(index).show();
        tanchuang(index,errorIns2,3);
    });
    $('.question-box4 ul li div').on('click',function(){
        var index=$('.question-box4 ul li div').index(this);
        $(".question-box4 ul li span").hide();
        $(".question-box4 ul li span").eq(index).show();
        tanchuang(index,errorIns3,0);
    });
    $('.question-box5 ul li div').on('click',function(){
        var index=$('.question-box5 ul li div').index(this);
        $(".question-box5 ul li span").hide();
        $(".question-box5 ul li span").eq(index).show();
        tanchuang(index,errorIns4,1);
    });
    $('.question-box6 ul li div').on('click',function(){
        var index=$('.question-box6 ul li div').index(this);
        $(".question-box6 ul li span").hide();
        $(".question-box6 ul li span").eq(index).show();
        tanchuang(index,errorIns5,index);
    });
    $('.error-try').on('click',function(){
        $('.error-box').hide();
    });
    $('.btn-ti').on('click',function(){
        mySwiper.unlockSwipes();
        mySwiper.slideNext();
        mySwiper.lockSwipes();
    });

    var media = $('#media')[0];
    var audioTimer = null;
    $('.audio-box').on('click',function(){
        playAudio();
    });
    function playAudio() {
        if(media.paused) {
            play();
        } else {
            pause();
        }
    }
    function play() {
        media.play();
        $('.audio-box').addClass('play');
    }
    function pause() {
        media.pause();
        $('.audio-box').removeClass('play');
    }
})