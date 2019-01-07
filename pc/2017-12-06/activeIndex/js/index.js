$(function(){
    var active = {
        dom: {
            welfareData: welfareData,
            sevenData:sevenData,
            fiveData:fiveData,
            welfareCon:$('#welfare-con'),
            welfareDot:$('#welfare-box-dot'),
            sevenBox:$('.seven-box'),
            fiveBox:$('.five-box'),
            goTop:$('.goTop')
        },
        init: function(){
            // welfareList列表渲染
            this.welfareList();
            this.sevenList();
            this.fiveList();
            this.dom.welfareCon.delegate('li','mouseover',function(){
                $(this).find('.imgbox').removeClass('gray')
            });
            this.dom.welfareCon.delegate('li','mouseout',function(){
                $(this).find('.imgbox').addClass('gray')
            });
            this.dom.sevenBox.delegate('.list','mouseover',function(){
                $(this).addClass('floatShadow');
            });
            this.dom.sevenBox.delegate('.list','mouseout',function(){
                $(this).removeClass('floatShadow');
            });
            this.dom.sevenBox.find('.more').delegate('a','mouseover',function(){
                $(this).parent().find('span').addClass('show animated bounceInLeft');
            });
            this.dom.fiveBox.delegate('.list','mouseover',function(){
                $(this).addClass('floatShadowF');
            });
            this.dom.fiveBox.delegate('.list','mouseout',function(){
                $(this).removeClass('floatShadowF');
            });
            this.dom.fiveBox.find('.more').delegate('a','mouseover',function(){
                $(this).parent().find('span').addClass('show animated bounceInLeft');
            });
            this.dom.goTop.on('click',function(){
                $("body,html").animate({scrollTop: 0});
            });
        },
        welfareList: function(){
            var dom = doT.template(this.dom.welfareDot.html());
            this.dom.welfareCon.html(dom(this.dom.welfareData));
        },
        sevenList: function (){
            var dom = doT.template($('#seven-box-dot').html());
            $('#seven-con').html(dom(this.dom.sevenData));
        },
        fiveList: function(){
            var dom = doT.template($('#five-box-dot').html());
            $('#five-con').html(dom(this.dom.fiveData));
        }
    };
    active.init();
});