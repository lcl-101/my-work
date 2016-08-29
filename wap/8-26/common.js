(function(window){
    window.func = {
        //保存两位小数
        //说明:这个方法用来保存小数点后两位小数,并且如果小数点后都是0则保存成整数.
        //调用:func.changeTwoDecimal(num);
        //返回值:非数值型返回false,数值型返回自己.
        changeTwoDecimal:function(x){
            var f_x=parseFloat(x);
            if(isNaN(f_x)){
                return false;
            }
            f_x=Math.round(f_x*100)/100;
            return f_x;
        },
        //获取url连接参数值
        //说明:用来获取地址后面追加变量的值
        //调用:func.getQueryString('name');
        //返回值:如果变量存在返回变量保存的值,不存在返回null;
        getQueryString:function(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r=window.location.search.substr(1).match(reg);
            if(r!=null) return unescape(r[2]); return null;
        },
        //placeholder
        //说明:placeholder兼容到ie8
        //调用:func.lplaceholder();
        lplaceholder:function(){
            if( !('placeholder' in document.createElement('input')) ){
                $('input[placeholder],textarea[placeholder]').each(function(){
                    var that = $(this),
                        text= that.attr('placeholder');
                    if(that.val()===""){
                        that.val(text).addClass('placeholder');
                    }
                    that.focus(function(){
                            if(that.val()===text){
                                that.val("").removeClass('placeholder');
                            }
                        })
                        .blur(function(){
                            if(that.val()===""){
                                that.val(text).addClass('placeholder');
                            }
                        })
                        .closest('form').submit(function(){
                        if(that.val() === text){
                            that.val('');
                        }
                    });
                });
            }
        }
    };
})(window);
