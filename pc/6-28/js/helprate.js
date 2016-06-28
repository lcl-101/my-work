$(function(){
    $('.quan-title').on('click',function(){
        var index=$('.quan-title').index(this);
        var dataImg=$('.quan-click').eq(index).attr('data-img');
        if(dataImg == 'true'){
            $('.quan-click').eq(index).attr('src','images/up.png');
            $('.quan-click').eq(index).attr('data-img','false');
        }else if(dataImg == 'false'){
            $('.quan-click').eq(index).attr('src','images/down.png');
            $('.quan-click').eq(index).attr('data-img','true');
        }
        $('.quan-inner').eq(index).stop(true,false).slideToggle();
    })
})