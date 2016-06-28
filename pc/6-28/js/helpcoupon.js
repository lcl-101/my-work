$(function(){
    $('.chongzhi-title').on('click',function(){
        var index=$('.chongzhi-title').index(this);
        var dataImg=$('.chongzhi-click').eq(index).attr('data-img');
        if(dataImg == 'true'){
            $('.chongzhi-click').eq(index).attr('src','images/up.png');
            $('.chongzhi-click').eq(index).attr('data-img','false');
        }else if(dataImg == 'false'){
            $('.chongzhi-click').eq(index).attr('src','images/down.png');
            $('.chongzhi-click').eq(index).attr('data-img','true');
        }
        $('.chongzhi-inner').eq(index).stop(true,false).slideToggle();
    })
})