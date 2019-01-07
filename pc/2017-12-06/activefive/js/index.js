$(function(){
    var active = {
        dom: {
            fiveData:fiveData,
            sevenBox:$('.seven-box'),
            goTop:$('.goTop')
        },
        init: function(){
            this.sevenList();
            this.dom.sevenBox.delegate('.list','mouseover',function(){
                $(this).addClass('floatShadow');
            });
            this.dom.sevenBox.delegate('.list','mouseout',function(){
                $(this).removeClass('floatShadow');
            });
            this.dom.sevenBox.find('.more').delegate('a','mouseover',function(){
                $(this).parent().find('span').addClass('show animated bounceInLeft');
            });
            this.dom.goTop.on('click',function(){
                $("body,html").animate({scrollTop: 0});
            });
        },
        sevenList: function(){
            var dom = doT.template($('#seven-box-dot').html());
            $('#seven-con').html(dom(this.dom.fiveData));
        }
    };
    active.init();
});