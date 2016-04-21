$(function(){
    $('#box').fullpage({
        'verticalCentered': false,
        'anchors': ['page1', 'page2', 'page3', 'page4', 'page5'],
        'css3': true,
        'navigation': true,
        slideSelector: '.horizontal-scrolling',
        'navigationPosition': 'right',
        afterRender:function(){
            $('<div id="top-box"></div>').insertBefore($('.right'));
            $('<div class="top-box"></div>').appendTo($('#top-box'));
            $('<a href="/"><img class="logo" src="images/logo.png"/></a>').appendTo($('.top-box'));
            $('<div class="top-right"></div>').appendTo($('.top-box'));
            $('<div class="top-resign"><a href="">注册</a></div>').appendTo($('.top-right'));
            $('<div class="top-login"><a href="">登录</a><span>大额充值通道</span></div>').appendTo($('.top-right'));
        },
        afterLoad:function(anchorLink, index){
            if(index==5){
                $('.four-title').addClass('four-title1');
                $('.four-content').addClass('four-content1');
                $('.four-left').addClass('four-left1');
                $('.four-right').addClass('four-right1');
                $('.four-bottom').addClass('four-bottom1');
            }else {
                $('.four-left').removeClass('four-left1');
                $('.four-right').removeClass('four-right1');
                $('.four-bottom').removeClass('four-bottom1');
                $('.four-title').removeClass('four-title1');
                $('.four-content').removeClass('four-content1');
            }
        },
        onLeave: function(index, nextIndex,direction) {
            if(index == 4) {
                if(direction=='down'){
                    $('.four-title').addClass('four-title1');
                    $('.four-content').addClass('four-content1');
                    $('.four-left').addClass('four-left1');
                    $('.four-right').addClass('four-right1');
                    $('.four-bottom').addClass('four-bottom1');
                }else if(direction=='up'){
                    $('.four-left').removeClass('four-left1');
                    $('.four-right').removeClass('four-right1');
                    $('.four-bottom').removeClass('four-bottom1');
                    $('.four-title').removeClass('four-title1');
                    $('.four-content').removeClass('four-content1');
                }
            }
        }
    })

})