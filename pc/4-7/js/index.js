$(function(){
    //手机号
    var inputClick=$('.inputClick').eq(0);
    var placeholderTxt=$('.placeholder-txt').eq(0);
    var insBox=$('.ins-box p').eq(0);
    var insBoxd=$('.ins-box div').eq(0);
    placeHolder(inputClick,placeholderTxt,insBox,insBoxd);
    //图形验证码
    var inputClick1=$('.inputClick').eq(1);
    var placeholderTxt1=$('.placeholder-txt').eq(1);
    var insBox1=$('.ins-box p').eq(1);
    var insBoxd1=$('.ins-box div').eq(1);
    placeHolder(inputClick1,placeholderTxt1,insBox1,insBoxd1);
    //短息验证码
    var inputClick2=$('.inputClick').eq(2);
    var placeholderTxt2=$('.placeholder-txt').eq(2);
    var insBox2=$('.ins-box p').eq(2);
    var insBoxd2=$('.ins-box div').eq(2);
    placeHolder(inputClick2,placeholderTxt2,insBox2,insBoxd2);
    //登陆密码
    var inputClick3=$('.inputClick').eq(3);
    var placeholderTxt3=$('.placeholder-txt').eq(3);
    var insBox3=$('.ins-box p').eq(3);
    var insBoxd3=$('.ins-box div').eq(3);
    placeHolder(inputClick3,placeholderTxt3,insBox3,insBoxd3);
    //邀请码
    var inputClick4=$('.inputClick').eq(4);
    var placeholderTxt4=$('.placeholder-txt').eq(4);
    var insBox4=$('.ins-box p').eq(4);
    var insBoxd4=$('.ins-box div').eq(4);
    placeHolder(inputClick4,placeholderTxt4,insBox4,insBoxd4);
    function placeHolder(a,b,c,d){ //a input标签  b placeholder c 正确提示 d错误提示
        $(a).on('click',function(){
            $(b).hide();
            var valuesIns=$(d).html();
            if(valuesIns){
                $(c).hide();
            }else {
                $(c).show();
            }
            $(a).on('keydown',function(){
                $(d).html('').css({color:'#6e6e72'});
                $(a).css({border:'1px solid #d5d5d8'});
                $(c).show();
            });
        });
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
    //邀请码
    var flag=false;
    $('.invite-title').on('click',function(){
        if(!flag){
            $('.invite-title img')[0].src='images/jian-bottom.png';
            $('.yaoqingma').val('no');
            $('.invite-inner').stop(true,false).slideDown();
            flag=true;
        }else if(flag){
            $('.invite-title img')[0].src='images/jian-right.png';
            $('.yaoqingma').val('yes');
            $('.invite-inner').stop(true,false).slideUp();
            flag=false;
        }
    });
    //协议
    var flags=false;
    $('.agree-box').on("click",function(){
        if(!flags){
            $('.agree-box img')[0].src='images/agree-false.png';
            $('.agree').val('no');
            flags=true;
        }else if(flags){
            $('.agree-box img')[0].src='images/agree-true.png';
            $('.agree').val('yes');
            flags=false;
        }
    });

    //*************注册第一步*****************************************
    //检查手机号是否存在
    $("#phone").on('blur', function () {
        var isOk = checkphone();//验证手机号
        if(isOk) {
            getphonecode();//是否显示验证码
        }
    });
    //刷新验证码
    $('.varifyImg').on('click', function () {
        $(".varifyImg")[0].src="/apireg/verifyimg?" + Math.random();
    });
    //发送短信(验证手机号+验证图形验证码)
    $("#varify-phone").on('click', function () {
        var isOk = checkphone();//验证手机号
        var isOks= true;
        if(isOk) {
            isOks= getphonecode();//是否显示验证码
        }
        //显示图形验证码
        if (isOks==false){
            var isOkma=checkverify();
            if(isOk==true && isOkma==true){
                $("#varify-phone").val('发送中').css({background:'#EBEBEB',color:'#808080'});
                sendphonecode();
            }else{
                $('#varify').val('');
                $('.varifyImg').trigger('click');
            }
        }else if (isOk==true && isOks==true) {
            $("#varify-phone").val('发送中').css({background:'#EBEBEB',color:'#808080'});
            sendphonecode();
        }

    });
    //验证密码强弱
    function checkpassword(){
        var passwordOk = false;
        $('#password').on('blur',function(){
            var passwords=$('#password').val();
            var num=$.password(passwords);
            if(num==-1){
                $('.ins-box div').eq(3).show();
                $('.ins-box div').eq(3).html('存在不允许注册的字符').css({color:'#f44336'});;
                $('.inputClick').eq(3).css({border:'1px solid #f44336'});
                passwordOk = false;
            }else if(num==0){
                $('.ins-box div').eq(3).show();
                $('.ins-box div').eq(3).html('建议6-20位字母，数字和符号两种及以上组合').css({color:'#f44336'});;
                $('.inputClick').eq(3).css({border:'1px solid #f44336'});
                passwordOk = false;
            }else if(num==1){
                $('.ins-box div').eq(3).show();
                $('.ins-box div').eq(3).html('<span style="color: #fff;margin-right: 4px;padding-left: 5px;padding-right: 6px;background:url(images/height.png) no-repeat 1px 2px;">弱</span>'+'  建议使用6-20位字母、数字或符号两种及以上组合').css({color:'#f44336'});
                $('.inputClick').eq(3).css({border:'1px solid #f44336'});
                passwordOk = false;
            }else if(num==2){
                $('.ins-box div').eq(3).show();
                $('.ins-box div').eq(3).html('<span style="color: #fff;margin-right: 4px;padding-left: 5px;padding-right: 6px;background:url(images/middle.png) no-repeat 1px 2px">中</span>'+'  安全强度适中，使用三种及以上更安全').css({color:'#6e6e72'});
                passwordOk = true;
            }else if(num==3){
                $('.ins-box div').eq(3).show();
                $('.ins-box div').eq(3).html('<span style="color: #fff;margin-right: 4px;padding-left: 5px;padding-right: 6px;background:url(images/height.png) no-repeat 1px 2px">强</span>'+'  您的密码很安全').css({color:'#6e6e72'});
                passwordOk = true;
            }
        });
    }
    checkpassword();
    //验证手机号
    function checkphone() {
        var isok = false;
        var phone_value = $.trim($("#phone").val());
        var phonereg = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|17[0-9]{9}|18[0-9]{9}$/g;
        if (phone_value == '') {
            $('.ins-box div').eq(0).show();
            $('.ins-box div').eq(0).html('*手机号不能为空');
            $('.inputClick').eq(0).css({border:'1px solid #f44336'});
            return isok;
        }

        if (!phonereg.test(phone_value)) {
            $('.ins-box div').eq(0).show();
            $('.ins-box div').eq(0).html('*手机号格式错误');
            $('.inputClick').eq(0).css({border:'1px solid #f44336'});
            return isok;
        }

        $.ajax({
            type: "post",
            url: "/apiv02/checkphoneexist",
            async: false,
            dataType: "json",
            success: function (response) {
                if(response.code==0){
                    getphonecode();
                }else  if(response.code==1){
                    $('.ins-box div').eq(0).show();
                    $('.ins-box div').eq(0).html('*' + response.msg);
                    $('.inputClick').eq(0).css({border:'1px solid #f44336'});
                }else if(response.code==2){
                    $('.ins-box div').eq(0).show();
                    $('.ins-box div').eq(0).html('*' + response.msg);
                    $('.inputClick').eq(0).css({border:'1px solid #f44336'});
                }
            }
        });
        return isok;
    }
    //是否显示验证码
    function getphonecode() {
        var maOks=false;
        var phone_value = $.trim($("#phone").val());
        $.ajax({
            type: "post",
            url: "/apiv02/showverifyimg",
            async: false,
            dataType: "json",
            data: {
                phone: phone_value,
            },
            success: function (response) {
                if (response.code == 1) {
                    $('.varifyImg-box').show();
                    maOks=false;
                } else {
                    $('.varifyImg-box').hide();
                    maOks=true;
                }
            }
        });
        return maOks;
    }
    //验证图形验证码
    function checkverify() {
        var maOk=false;
        var checkverifycode = $.trim($(".varifyImg").val());
        if (checkverifycode == undefined || checkverifycode == "") {
            $('.ins-box div').eq(1).show();
            $('.ins-box div').eq(1).text('*请输入正确的验证码');
            $('.inputClick').eq(1).css({border:'1px solid #f44336'});
            return maOk;
        }
        $.ajax({
            type: "post",
            url: "/apireg/verifycode",
            data: {
                verify: checkverifycode
            },
            async: false,
            dataType: "json",
            success: function (response) {
                if (response.code == 1) {
                    $('.ins-box div').eq(1).show();
                    $('.ins-box div').eq(1).html('*' + response.msg);
                    $('.inputClick').eq(1).css({border:'1px solid #f44336'});
                    $('#varify').val('');
                    $('.varifyImg').trigger('click');
                    maOk=false;
                } else if (response.code == 0){
                    $('.ins-box div').eq(1).html('');
                    maOk=true;
                }
            }

        });
        return maOk;
    }
    //发送短信验证码
    function sendphonecode() {
        var xinOk=false;
        var phonereg = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|17[0-9]{9}|18[0-9]{9}$/g;
        var phone_value = $.trim($("#phone").val());
        var checkverifycode = $.trim($("#varify").val());
        if (!phone_value) {
            $('.ins-box div').eq(0).show();
            $('.ins-box div').eq(0).text('*手机号不能为空');
            $('.inputClick').eq(0).css({border:'1px solid #f44336'});
            return xinOk;
        }

        if (!phonereg.test(phone_value)) {
            $('.ins-box div').eq(0).show();
            $('.ins-box div').eq(0).text('*手机号格式错误');
            $('.inputClick').eq(0).css({border:'1px solid #f44336'});
            return xinOk;
        }
        $.ajax({
            type: "post",
            url: "/apiv02/sendphonesms",
            async: false,
            data: {
                phone: phone_value,
                verify: checkverifycode
            },
            dataType: "json",
            success: function (response) {
                if (response.code == 1) {
                    $('.ins-box div').eq(2).show();
                    $('.ins-box div').eq(2).html('*' + response.msg);
                    $('.inputClick').eq(2).css({border:'1px solid #f44336'});
                    xinOk=false;
                } else if (response.code == 0) {
                    $('.ins-box div').eq(2).html('');
                    downTime();
                    $("#varifyPhone").on('blur',function(){
                        var checkverifycodes = $.trim($("#varifyPhone").val());
                        if (checkverifycodes == undefined || checkverifycodes == "") {
                            $('.ins-box div').eq(2).show();
                            $('.ins-box div').eq(2).text('*请输入正确的验证码');
                            $('.inputClick').eq(2).css({border:'1px solid #f44336'});
                            return maOk;
                        }
                    });
                    xinOk=true;
                }
            }
        });
        return xinOk;
    }
    function downTime(){
        var time=60;
        var t=setInterval(function(){
            $('#varify-phone').val(time).attr("disabled", true);
            time--;
            if (time < 0) {
                $("#varify-phone").val('发送验证码').removeAttr('disabled').css({background:'#eaa427',color:'#fff'});
                clearInterval(t);
                time = 60;
            }
        },1000)
    }
    //检测邀请码
    function yaoqingma(){
        var inviteOk=fales;
        var invite = $.trim($("#invite").val());
        $.ajax({
            type: "post",
            url: "/apiv02/invitecode",
            async: false,
            dataType: "json",
            data: {
                inviteCode: invite
            },
            success:function(data){
                if (data.code == 1) {
                    $('.ins-box div').eq(4).show();
                    $('.ins-box div').eq(4).text('*请输入正确的邀请码');
                    $('.inputClick').eq(4).css({border:'1px solid #f44336'});
                    inviteOk=fales;
                }else if (data.code == 0){
                    inviteOk=true;
                }
            }
        })
        return inviteOk;
    }
    //验证协议是否同意
    function idAgree(){
        var isagree=$('.agree').val();
        if(isagree=='no'){
            return false;
        }else if(isagree=='yes'){
            $('.error-agreement').html('');
            return true;
        }
    }
    //注册
    $('.register_input').on('click',function(){
        registersubmit()
    });
    function registersubmit() {
        var isOk = checkphone();//验证手机号
        if(isOk){
            var passOk=checkpassword();
            if(!passOk){
                return;
            }
            //邀请码验证
            var inviteInner=$('#invite').val();
            if(inviteInner){
                yaoqingma();
            }else {

            }
            //验证协议是否同意
            var isagree=idAgree();
            if(isagree==false){
                $('.error-agreement').html('您未同意协议');
                return;
            }
            var phone_value = $.trim($("#phone").val());
            var phonecode_value = $.trim($("#varifyPhone").val());
            var password_value = $.trim($("#password").val());
            var yaoqingma = $.trim($(".inputClick").val());
            $.ajax({
                type: "post",
                url: "/apiv02/userreg",
                data: {
                    phone: phone_value,
                    phoneCode: phonecode_value,
                    inviteCode: yaoqingma,
                    passWord: password_value
                },
                dataType: "json",
                success: function (response) {
                    if (response.code == 1) {
                        return false;
                    } else {
                        registerjump();
                        $('.register_input').unbind().on('click', function () {});
                    }
                }
            })
        }

    }
    function registerjump() {
        window.location.href = "/";
    }
});