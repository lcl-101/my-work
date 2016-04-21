$(function(){
    $(function() {
        FastClick.attach(document.body);
    });
    function down(obj,cobj,downObj,dh,callback){
        var flag=true;
        var num=0;
        $(obj).on('click',function(){
            if(!flag){
                return
            }
            flag=false;
            num++;
            if(num%2==0){
                $(downObj).animate({height:dh},500,function(){
                    $(cobj).addClass('arrowRotateLeft');
                    $(cobj).removeClass('arrowRotateRight');
                    flag=true;
                });
            }else {
                $(downObj).animate({height:0},500,function(){
                    $(cobj).addClass('arrowRotateRight');
                    $(cobj).removeClass('arrowRotateLeft');
                    if(callback){
                        callback();
                    }
                    flag=true;
                });
            }
        });
    }
    //投资信息-下拉
    var information=$('#information-box');
    var informationDown=$('.information-right img');
    var informationContent=$('#information-content');
    var informationH=$('.information-content li').length;
    var ih=40*informationH;
    down(information,informationDown,informationContent,ih);
    //还款计划-下拉
    var repayment=$('#repayment-box');
    var repaymentDown=$('.repayment-right img');
    var repaymentContent=$('.repayment-content');
    var repaymentN=$('.repayment-content li').length;
    var h=40*repaymentN;
    if(repaymentN>5){
        $('.repayment-down').show();
        down(repayment,repaymentDown,repaymentContent,'224px',function(){
            $('.repayment-down').show();
        });
    }else {
        $('.repayment-down').hide();
        down(repayment,repaymentDown,repaymentContent,h);
    }
    $('.repayment-down').on('click',function(){
        $('.repayment-content').animate({height:h},500);
        $('.repayment-down').hide();
    })
});