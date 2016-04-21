$(function(){
    $(window).load(function() {
        $('.placeholder-txt').show();
        $('.inputClick').eq(0).val('');
        $('.inputClick').eq(1).val('');
        $('.inputClick').eq(2).val('');
        $('.inputClick').eq(3).val('');
        $('.inputClick').blur();
        $('.inputClick').css({border:'1px solid #d5d5d8'});
        $('.ins-box div').html('');
        $('.ins-box p').hide();
        $('.ins-box div').hide();
        $('.ins-box i').hide();
    });
    var uuid='';//验证码标识，提交验证码时需要同时提交
    var yanzhengmaShow='';//验证码显示
    var codeImg='';//验证码图片
    var voiceNum='';//语音
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
        $(a).on('focus',function(){
            $(b).hide();
            var valuesIns=$(d).html();
            if(valuesIns){
                $(c).hide();
            }else {
                $(c).show();
            }
            $(a).on('keydown',function(){
                $(d).html('').css({color:'#f44336'});
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
    var invitess=$('#invite').val();
    var flag='';
    if(invitess){
        flag=true;
    }else if(!invitess){
        flag=false;
    }
    $('.invite-title').on('click',function(){
        if(!flag){
            $('.invite-title img')[0].src='/template/default/Public/images/tendertransfer/jian-bottom.png';
            $('.yaoqingma').val('no');
            $('.invite-inner').stop(true,false).slideDown();
            //$('.agree-box').css({marginTop:'10px'});
            flag=true;
        }else if(flag){
            $('.invite-title img')[0].src='/template/default/Public/images/tendertransfer/jian-right.png';
            $('.yaoqingma').val('yes');
            $('.invite-inner').stop(true,false).slideUp();
            //$('.agree-box').css({marginTop:'24px'});
            flag=false;
        }
    });
    //协议
    var flags=false;
    $('.agree-box img').on("click",function(){
        if(!flags){
            $('.agree-box img')[0].src='/template/default/Public/images/tendertransfer/agree-false.png';
            $('.agree').val('no');
            flags=true;
        }else if(flags){
            $('.agree-box img')[0].src='/template/default/Public/images/tendertransfer/agree-true.png';
            $('.agree').val('yes');
            flags=false;
        }
    });

    //*************注册第一步*****************************************
    //检查手机号是否存在
    $("#phone").on('blur', function () {
        var isOk = checkphoneOne();//验证手机号
        if(isOk) {
            yanzhengmaShow=getphonecode();//是否显示验证码
        }
    });
    //短信验证码
    $("#varifyPhone").on('blur',function(){
        var checkverifycodes = $.trim($("#varifyPhone").val());
        if (checkverifycodes == undefined || checkverifycodes == "") {
            $('.ins-box div').eq(2).show();
            $('.ins-box div').eq(2).text('*请输入手机验证码');
            $('.inputClick').eq(2).css({border:'1px solid #f44336'});
        }
    });
    //$('#varify').on('blur',function(){
    //    checkverify();
    //});
    var flagins=true;
    //发送短信(验证手机号+验证图形验证码)
    $("#varify-phone").on('click', function () {
        if(!flagins){
            return;
        }
        flagins=false;
        sendInformation();
    });
    //发送短信(验证手机号+验证图形验证码)
    function sendInformation(){
        var isOk = checkphoneOne();//验证手机号
        var isOks= true;
        if(isOk) {
            isOks= getphonecode();//是否显示验证码
        }
        //显示图形验证码
        if (isOks==false){
            var isOkma=checkverify();
            if(isOk==true && isOkma==true){
                $("#varify-phone").html('发送中').css({background:'#EBEBEB',color:'#808080'});
                $('.voice-box').show();
                sendphonecode();
            }else{
                //$('#varify').val('');
                $('.varifyImg').trigger('click');
            }
        }else if (isOk==true && isOks==true) {
            //$("#varify-phone").off('click');
            $("#varify-phone").html('发送中').css({background:'#EBEBEB',color:'#808080'});
            $('.voice-box').show();
            sendphonecode();
        }
    }
    //验证密码强弱
    function checkpassword(){
        $('#password').on('blur',function(){
                var passwords=$('#password').val();
                var num=$.password(passwords);
                if(num==-1){
                    $('.ins-box div').eq(3).show();
                    $('.ins-box div').eq(3).html('存在不允许注册的字符').css({color:'#f44336'});
                    $('.inputClick').eq(3).css({border:'1px solid #f44336'});
                }else if(num==0){
                    $('.ins-box div').eq(3).show();
                    $('.ins-box div').eq(3).html('建议6-20位字母，数字和符号两种及以上组合').css({color:'#f44336'});
                    $('.inputClick').eq(3).css({border:'1px solid #f44336'});
                    if(passwords==''){
                        $('.ins-box div').eq(3).show();
                        $('.ins-box div').eq(3).html('*请输入密码').css({color:'#f44336'});
                        $('.inputClick').eq(3).css({border:'1px solid #f44336'});
                    }
                }else if(num==1){
                    $('.ins-box div').eq(3).show();
                    $('.ins-box div').eq(3).html('<span style="color: #fff;padding-top: 1px;margin-right: 4px;padding-left: 5px;padding-right: 6px;background:url(/template/default/Public/images/tendertransfer/low.png) no-repeat 1px 2px">弱</span>'+'  建议使用6-20位字母、数字或符号两种及以上组合').css({color:'#f44336'});
                    $('.inputClick').eq(3).css({border:'1px solid #f44336'});
                }else if(num==2){
                    $('.ins-box div').eq(3).show();
                    $('.ins-box div').eq(3).html('<span style="color: #fff;padding-top: 1px;margin-right: 4px;padding-left: 5px;padding-right: 6px;background:url(/template/default/Public/images/tendertransfer/middle.png) no-repeat 1px 2px">中</span>'+'  安全强度适中，建议使用三种以上组合更安全').css({color:'#6e6e72'});
                }else if(num==3){
                    $('.ins-box div').eq(3).show();
                    $('.ins-box div').eq(3).html('<span style="color: #fff;padding-top: 1px;margin-right: 4px;padding-left: 5px;padding-right: 6px;background:url(/template/default/Public/images/tendertransfer/height.png) no-repeat 1px 2px">强</span>'+'  您的密码很安全').css({color:'#6e6e72'});
                }
        });
    }
    checkpassword();
    //验证手机号
    function checkphoneOne(){
        var isok = false;
        var phone_value = $.trim($("#phone").val());
        var phonereg =  /^(13[0-9]|14[0-9]|15[012356789]|17[0-9]|18[0-9])\d{8}$/;
        if (phone_value == '') {
            $('.ins-box div').eq(0).show();
            $('.ins-box div').eq(0).html('*请输入手机号');
            $('.inputClick').eq(0).css({border:'1px solid #f44336'});
            return isok;
        }

        if (!phonereg.test(phone_value)) {
            $('.ins-box div').eq(0).show();
            $('.ins-box div').eq(0).html('*手机号格式错误');
            $('.inputClick').eq(0).css({border:'1px solid #f44336'});
            return isok;
        }
        return isok = true;
    }
    function checkphone() {
        var isok = false;
        var phonecode_value = $.trim($("#varifyPhone").val());
        var phone_value = $.trim($("#phone").val());
        var phonereg = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|17[0-9]{9}|18[0-9]{9}$/g;
        if (phone_value == '') {
            $('.ins-box div').eq(0).show();
            $('.ins-box div').eq(0).html('*请输入手机号');
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
            data:{phone:phone_value,phoneCode:phonecode_value},
            dataType: "json",
            success: function (response) {
                if(response.code==0){
                    isok = true;
                }else  if(response.code==1){
                    $('.ins-box div').eq(0).show();
                    $('.ins-box div').eq(0).html('*' + response.msg);
                    $('.inputClick').eq(0).css({border:'1px solid #f44336'});
                    isok = false;
                }else if(response.code==2){
                    $('.ins-box div').eq(0).show();
                    $('.ins-box div').eq(0).html('*' + response.msg);
                    $('.inputClick').eq(0).css({border:'1px solid #f44336'});
                    isok = false;
                }else if(response.code==3){
                    $('.ins-box div').eq(2).show();
                    $('.ins-box div').eq(2).html('*' + response.msg);
                    $('.inputClick').eq(2).css({border:'1px solid #f44336'});
                    $('.voice-box').hide();
                    isok = false;
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
                    huoquyanzhengma();
                    //验证码
                    maOks=false;
                } else {
                    $('.varifyImg-box').hide();
                    maOks=true;
                }
            }
        });
        return maOks;
    }
    //获取验证码
    function huoquyanzhengma(){
        $.ajax({
            type: "get",
            url: "/apiv02/getverifyimg",
            dataType: "json",
            success:function(response){
                $(".varifyImg")[0].src=response.src;
                codeImg=response.src;
                uuid=response.uuid;
            }
        })
    }
    //刷新验证码
    $('.varifyImg').on('click', function () {
        $(".varifyImg")[0].src=codeImg+ Math.random();
    });
    //验证图形验证码
    function checkverify() {
        var maOk=false;
        var checkverifycode = $.trim($("#varify").val());
        if (checkverifycode == undefined || checkverifycode == "") {
            $('.ins-box div').eq(1).show();
            $('.ins-box div').eq(1).text('*请输入图形验证码');
            $('.inputClick').eq(1).css({border:'1px solid #f44336'});
            flagins=true;
            return maOk;
        }
        $.ajax({
            type: "post",
            url: "/apiv02/verifyimgcode",
            data: {
                verify: checkverifycode,
                uuid:uuid
            },
            async: false,
            dataType: "json",
            success: function (response) {
                if (response.code == 1) {
                    $('.ins-box div').eq(1).show();
                    $('.ins-box div').eq(1).html('*' + response.msg);
                    $('.inputClick').eq(1).css({border:'1px solid #f44336'});
                    //$('#varify').val('');
                    flagins=true;
                    $('.varifyImg').trigger('click');
                    maOk=false;
                } else {
                    $('.ins-box div').eq(1).html('');
                    flagins=true;
                    maOk=true;
                }
            },
            error:function(){
                flagins=true;
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
            $('.ins-box div').eq(0).text('*请输入手机号');
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
            url: "/apiv02/sendregphonesms",
            async: false,
            data: {
                phone: phone_value,
                isVoice:voiceNum,
                verify: checkverifycode,
                uuid:uuid
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
                    $('#varifyPhone').on('blur',function(){
                        var isOk = checkphone();//验证手机号
                        if(isOk){
                            xinOk=true;
                        }else {
                            xinOk=false;
                        }
                    });

                } else if(response.code == 3){
                    var t=setTimeout(function(){
                        $("#varify-phone").html('获取验证码');
                        $("#varify-phone").css({backgroundColor:'#ff9800',color:'#fff'});
                        $('.ins-box div').eq(2).show().html('*获取验证码失败，请稍后再试');
                        flagins=true;
                        clearTimeout(t);
                    },500);
                }
            },
            error:function(){
                flagins=true;
            }
        });
        return xinOk;
    }
    function downTime(){
        var time=60;
        var t=setInterval(function(){
            //$('#varify-phone').val(time).attr("disabled", true);
            $('#varify-phone').html(time);
            time--;
            if (time < 0) {
                flagins=true;
                $("#varify-phone").html('获取验证码').removeAttr('disabled').css({background:'#eaa427',color:'#fff'});
                //语音验证
                $('.voice-box').bind('click',function(){
                    voiceNum=1;
                    var isOk = checkphoneOne();//验证手机号
                    var isOkma=checkverify();
                    if(isOk&&isOkma){
                        $("#varify-phone").html('发送中').css({background:'#EBEBEB',color:'#808080'});
                        $('.voice-box').show();
                        flagins=false;
                        sendphonecode();
                    }else {
                        //$('#varify').val('');
                        flagins=true;
                        $('.varifyImg').trigger('click');
                    }
                });
                clearInterval(t);
                time = 60;
            }else if(time<60&&time>=0){
                flagins=false;
                $('.voice-box').unbind('click');
            }
        },1000)
    }
    //检测邀请码
    function yaoqingma(){
        var inviteOk=false;
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
                    inviteOk=false;
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
        var inviteCodes='';
        //var imgOk=yanzhengmaShow;//是否显示图形验证码
        //if(!imgOk){
        //    var verOk=checkverify();//验证图形验证码
        //    if(!verOk){
        //        return;
        //    }
        //}
        var isOk = checkphone();//验证手机号
        if(isOk){
            //邀请码验证
            var inviteInner=$('#invite').val();
            if(inviteInner){
                var yaoOk=yaoqingma();
                if(!yaoOk){
                    return;
                }else {
                    inviteCodes=$.trim($("#invite").val());
                }
            }
            //验证协议是否同意
            var isagree=idAgree();
            if(isagree==false){
                $('.error-agreement').show();
                $('.error-agreement').html('*您未同意协议');
                return;
            }
            var phone_value = $.trim($("#phone").val());
            var phonecode_value = $.trim($("#varifyPhone").val());
            var password_value = $.trim($("#password").val());
            //var yaoqingma = $.trim($(".inputClick").val());
            $.ajax({
                type: "post",
                url: "/apiv02/userreg",
                data: {
                    phone: phone_value,
                    phoneCode: phonecode_value,
                    passWord: password_value,
                    inviteCode:inviteCodes,
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
        window.location.href = "/user/OpenHuifuPay.html";
    }
});