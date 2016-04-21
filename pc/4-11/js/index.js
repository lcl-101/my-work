$(function(){
    //旧密码
    var inputClick=$('.inputClick').eq(0);
    var placeholderTxt=$('.placeholder-txt').eq(0);
    var pointIns=$('.point-ins').eq(0);
    var errorIns=$('.error-ins').eq(0);
    placeHolder(inputClick,placeholderTxt,pointIns,errorIns);
    //新密码
    var inputClick1=$('.inputClick').eq(1);
    var placeholderTxt1=$('.placeholder-txt').eq(1);
    var pointIns1=$('.point-ins').eq(1);
    var errorIns1=$('.error-ins').eq(1);
    var pointbox1=$('.point-box').eq(0);
    placeHolder(inputClick1,placeholderTxt1,pointIns1,errorIns1,pointbox1);
    //确认新密码
    var inputClick2=$('.inputClick').eq(2);
    var placeholderTxt2=$('.placeholder-txt').eq(2);
    var pointIns2=$('.point-ins').eq(2);
    var errorIns2=$('.error-ins').eq(2);
    var pointbox2=$('.point-box').eq(1);
    placeHolder(inputClick2,placeholderTxt2,pointIns2,errorIns2,pointbox2);
    function placeHolder(a,b,c,d,e){ //a input标签  b placeholder c 正确提示 d错误提示
        window.setTimeout( function(){
            $(a).on('focus',function(){
                $(b).hide();
                var n=$(e).html();
                if(n){
                    $(c).hide();
                }else {
                    $(c).show();
                }
            });
            setTimeout(function(){
                    $(a).on('keydown',function(){
                        $(d).hide();
                        $(a).css({border:'1px solid #d5d5d8'});
                        $(c).show();
                        $(e).html('');
                    });
                },0)
                
        }, 100);
        $(a).on('blur',function(){
            var values=$(this).val();
            $(c).hide();
            if(values){
                $(b).hide();
            }else{
                $(b).show();
            }
        });
    }
    var newPassword1=$('#new-password');
    var pointBox1=$('.point-box').eq(0);
    var inputC1=$('.inputClick').eq(1);
    passWord(newPassword1,pointBox1,inputC1);

    function passWord(a,b,c){
        $(a).on('blur',function(){
            var passwords=$('#new-password').val();
            // var num=$.password(passwords);
            var num;
            if(num==-1){
                $(b).show();
                $(b).html('存在不允许注册的字符').css({color:'#f44336'});
                $(c).css({border:'1px solid #f44336'});
            }else if(num==0){
                $(b).show();
                $(b).html('建议6-20位字母，数字和符号两种及以上组合').css({color:'#f44336'});
                $(c).css({border:'1px solid #f44336'});
            }else if(num==1){
                $(b).show();
                $(b).html('<span style="color: #fff;margin-right: 4px;padding-left: 5px;padding-right: 6px;background:url(images/height.png) no-repeat 1px 2px;">弱</span>'+' 建议6-20位字母，数字和符号两种及以上组合').css({color:'#f44336'});
                $(c).css({border:'1px solid #f44336'});
            }else if(num==2){
                $(b).show();
                $(b).html('<span style="color: #fff;margin-right: 4px;padding-left: 5px;padding-right: 6px;background:url(images/middle.png) no-repeat 1px 2px;">中</span>'+' 安全强度适中，使用三种及以上更安全').css({color:'#6e6e72'});
                $(c).css({border:'1px solid #f44336'});
            }else if(num==3){
                $(b).show();
                $(b).html('<span style="color: #fff;margin-right: 4px;padding-left: 5px;padding-right: 6px;background:url(images/height.png) no-repeat 1px 2px;">强</span>'+' 您的密码很安全').css({color:'#6e6e72'});
                $(c).css({border:'1px solid #f44336'});
            }
        });
    }
    $('#old-password').on('blur',function(){
        var oldpassword = $.trim($('#old-password').val());
        if (oldpassword == undefined || oldpassword == "") {
            $('.error-ins').eq(0).show();
            $('.inputClick').eq(0).css({border:'1px solid #f44336'});
        }
    });


    $(".password-btn").click(function() {
        if ($("#old-password").val() == "") {
            $(".error-ins").eq(0).show();
            $('.inputClick').eq(0).css({border:'1px solid #f44336'});
        }
        if ($("#new-password").val() == "") {
            $(".error-ins").eq(1).show();
            $('.inputClick').eq(1).css({border:'1px solid #f44336'});
        }else {
            $(".error-ins").eq(1).hide();
        }
        if ($("#new-passwords").val() == "") {
            $(".error-ins").eq(2).show();
            $('.inputClick').eq(2).css({border:'1px solid #f44336'});
        } else {
            $(".error-ins").eq(2).hide();
        }
        if ($("#old-password").val() != "" && $("#new-password").val() != "" && $("#new-passwords").val() != "") {
            var oldPass = $.trim($("#old-password").val());
            var newPass = $.trim($("#new-password").val());
            var repPass = $.trim($("#new-passwords").val());
            // $.ajax({
            //     type: "post",
            //     url: "/user/modifypassword",
            //     dataType: "json",
            //     data: {
            //         oldPass: oldPass,
            //         newPass:newPass,
            //         repPass:repPass
            //     },
            //     success:function(data){
            //         if(data.code==0){

            //         }else if(data.code==1){
            //             $('.point-box').eq(1).show();
            //             $('.point-box').eq(1).html('*'+data.msg);
            //         }
            //     }
            // })
        }
    });
});