$(function(){
    FastClick.attach(document.body);
    var bW=$('.banner-opportunity').width()/2+16;
    $('.banner-opportunity').css({marginLeft:-bW});
    $('.banner-egg').on('click',function(){
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
                $('.banner-hua').eq(index).fadeIn();
            }
        },200);
    }
});