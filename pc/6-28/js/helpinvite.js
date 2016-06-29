$(function(){
    $('.quan-click').eq(0).attr('src','images/down.png');
    $('.quan-click').eq(0).attr('data-img','false');
    $('.quan-inner').eq(0).stop(true,false).slideDown();
    $('.quan-title').on('click',function(){
        var index=$('.quan-title').index(this);
        for(var i=0;i<=$('.quan-click').length;i++){
            if(i!=index){
                $('.quan-click').eq(i).attr('src','images/up.png');
                $('.quan-click').eq(i).attr('data-img','true');
                $('.quan-inner').eq(i).stop(true,false).slideUp();
            }

        }
        var dataImg=$('.quan-click').eq(index).attr('data-img');
        if(dataImg == 'true'){
            $('.quan-click').eq(index).attr('src','images/down.png');
            $('.quan-click').eq(index).attr('data-img','false');
        }else if(dataImg == 'false'){
            $('.quan-click').eq(index).attr('src','images/up.png');
            $('.quan-click').eq(index).attr('data-img','true');
        }
        $('.quan-inner').eq(index).stop(true,false).slideToggle();
    })
})