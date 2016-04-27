
<div id="wap-body">
<div>
    <nav class="navbar navbar-default no-shadow" style="text-align: center;">
        <a class="goback" href="javascript:window.history.go(-1)">返回</a>
        <span class="navbar-title" style="">我的代金券</span>
    </nav>
</div>
<!--    <div class="daijinquan-huan">-->
<!--        <div class="daijinquan-varify">-->
<!--            <div class="daijinquan-varify-content">-->
<!--                <input type="text" id="daijinquan-varify"  name="daijinquan-varify" maxlength="6">-->
<!--            </div>-->
<!--            <img src="" alt="">-->
<!--        </div>-->
<!--        <img src="" alt="">-->
<!--        <div style="height: 42px">-->
<!--            <div class="daijinquan-duihuan">-->
<!--                <input type="text" >-->
<!--            </div>-->
<!--            <i>兑 换</i>-->
<!--        </div>-->
<!--    </div>-->


    <div class="jiaxiquan-huan">
        <div class="jiaqiquan-varify">
            <div class="jiaqiquan-varify-content">
                <input type="text" id="jiaxi-varify"  name="jiaxi-varify" maxlength="6">
            </div>
            <img src="" alt="">
        </div>
        <div style="height: 42px">
            <div class="jiaxiquan-duihuan">
                <input type="text" id="jiaxi"  name="jiaxi">
            </div>
            <i id="jiaxi-btn">兑 换</i>
        </div>
    </div>
<div class="mycoupons">
<div class="title">
    <div class="menu">
        <ul>
            <li class="selected" data-name = "daijinquan" style="width:33%">我的代金券</li>
            <li data-name = "jiaxiquan" sstyle="width:33%">加息券</li>
            <li data-name="hongbao" style="width:33%">我的红包</li>
        </ul>
    </div>
</div>
<div class="daijinquan list   djqcoupons">
        <div class="use-rule">
            <a href="javascript:void(0)" onclick="showRule()">使用规则</a>
        </div>
        <div id="cmain"></div>
        <div id="nodata">
            <input id="cpage" value="0" type="hidden">
            <a href="javascript:void(0)" class="view-more cmore" onclick="getMoreCoupon()" >查看更多</a>
            <div id="loading" style="display:none;text-align: center;"><img src="/static/default/images/loading.gif">
            </div>
        </div>
    <a class="duihuan-btn">兑换代金券</a>
</div>


<div class="list jiaxiquan">
    <div class="jiaxiquan-rule">
        <a href="javascript:void(0)">使用规则</a>
    </div>
    <div class="nodatas">
        <input id="jpage" value="0" type="hidden">
        <a href="javascript:void(0)" class="jiaxi-more" onclick="getMorejiaxiquan()" >查看更多</a>
        <div id="jiaxi-loading" style="display:none;text-align: center;"><img src="/static/default/images/loading.gif"></div>
    </div>
</div>


    <div class="hongbao  list hbcoupons" style="display: none;">
        <div>
            <div id="nohdata">
                <img class="uphoto" src="<?=  $logo  ?>"/>
                <div class="uname"><?= $username  ?>共收到</div>
                <div class="uvalue"><?=  $hongbaosum  ?><label style="font-size: 12px;">元</label></div>
                <div class="uspan">
                    <div class="uspan-left">
                        <div class="uspan-left-text1"><?=  $userhongbaonums ?></div>
                        <div class="uspan-left-text2">红包总数</div>
                    </div>
                    <div class="uspan-right">
                        <img src="/static/default/images/clickhongbao1.png" />
                    </div>
                </div>
                <div id="hmain"></div>
                <input id="hpage" value="0" type="hidden">
                <a href="javascript:void(0)" class="view-more hmore" onclick="getMoreHongBao()" >查看更多</a>
                <div id="hloading" style="display:none;text-align: center;"><img src="/static/default/images/loading.gif"></div>
            </div>
        </div>
    </div>

<div class="wcgoverlays  goabc" >
    <div class="coupons-tishi">
        <div class="coupons-tishi-text"><span>3天</span>后可使用</div>
        <div class="coupons-tishi-group-btn">
            <a class="tishi-btn">确定</a>
            <a class="tishi-go" href="/site/getlists">去理财</a>
        </div>
    </div>
    <div class="coupons-shuoming">
        <ul>
            <li>代金券需要兑换后使用；</li>
            <li>兑换地址：账户中心 > 我的代金券 完成兑换；</li>
            <li>代金券不可直接提现，不可购买新手标/债权/生利宝产品；</li>
            <li>因个人原因取消订单导致代金券无法恢复，不在补发代金券；</li>
            <li>使用时请参考相关规则和约定，本活动解释权归旺财谷所有；</li>
        </ul>
        <div class="shuoming-btn">确定</div>
    </div>

    <div class="coupons-duihuan" id="duihuan">
        <div>
            <input type="text" placeholder="请输入兑换码" id="exchangecode" />
        </div>
        <div class="coupons-duihuan-error1" ></div>
        <div>
            <input type="text" placeholder="验证码" style="width:60%" id="vcode"/>
            <img  src="/user/ucenter/varify" id="flush_yangzhenma"   onclick="getVarifyCode()"/>
        </div>
        <div class="coupons-duihuan-error" ></div>
        <div  class="coupons-duihuan-btn">
            <span class="" style="border-right: 1px solid #DCDDDD;"  onclick="exchangeYouHuiQuan()">确定</span>
            <span class="coupons-duihuan-btn-cancel">取消</span>
        </div>
    </div>
</div>
</div>

</div>
<!--错误信息-->
<div class="error-mark"></div>
<div class="error-ins"></div>
<script type="text/javascript">
    $(function(){
        $(".mycoupons .menu li").on("click",function(){
            var dataname=$(this).data("name");
            $(".mycoupons .menu li").removeClass("selected");
            $(this).addClass("selected");
            $(".mycoupons .list").hide();
            $("."+dataname).show();
            if(dataname=='hongbao'){
                $('.navbar-title').text('我的红包');
                $('.use-rule').html('<a href="javascript:void(0)" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>');
                $('.jiaxiquan-huan').hide();
            }else if(dataname=='daijinquan'){
                $('.navbar-title').text('我的代金券');
                $('.use-rule').html('<a href="javascript:void(0)" onclick="showRule()">使用规则</a>');
                $('.jiaxiquan-huan').hide();
            }else if(dataname=='jiaxiquan'){
                $('.navbar-title').text('我的加息券');
                $('.jiaxiquan-huan').show();
                getjiaxivertfycode();
            }
        });
        $(".tishi-btn").on("click",function(){
            $(".coupons-tishi").hide();
            $(".wcgoverlays").hide();
        })
        $(".duihuan-btn").on("click",function(){
            getVarifyCode();
            $("#duihuan").show()
            $("#dhfrom").show();
            $(".wcgoverlays").show();
        })
        $(".shuoming-btn").on("click",function(){
            $(".coupons-shuoming").hide();
            $(".wcgoverlays").hide();
        })
        $(".coupons-duihuan-btn-cancel").on("click",function(){
            $(".coupons-tishi").hide();
            $(".wcgoverlays").hide();
            $(".coupons-duihuan").hide();
        });
        $('#hpage').val(0);
        $('#cpage').val(0);
        getMoreCoupon();
        getMoreHongBao();
        getMorejiaxiquan();
    })

    function getMoreCoupon(){
        var page=$("#cpage").val();
        page++;
        $("#cpage").val(page);
        $('#loading').show();
        $.ajax({
            type: "get",
            dataType: "json",
            url: '/user/ucenter/coupons-list',
            data: {'num':page},
            success: function (data) {
                $('#loading').hide();
                if(!data.hasnext){
                    $('.cmore').remove();
                }
                if(data.nodata==1){
                    $('.djqcoupons ').css("background","#EFEFEF");
                    $('#nodata').html('<img src="/static/default/images/list-null.png" style="display:block;margin:50px auto 10px;width:40%"><div style="text-align: center;">暂无记录</div>');
                }else{
                    $('.djqcoupons ').css("background","#FFFFFF");
                    for (var i = 0; i < data.da.length; i++) {
                        insertdiv(data.da[i]);
                    };
                }

            }
        })
    }
//    加息券
    function getMorejiaxiquan(){
        var jpage=$("#jpage").val();
        jpage++;
        $("#jpage").val(jpage);
        $('#jiaxi-loading').show();
        $.ajax({
            type: "get",
            dataType: "json",
            url: '/user/ucenter/rate-list',
            data: {'num': jpage},
            success:function(data){
                var html='';
                $('#jiaxi-loading').hide();
                if(!data.hasnext){
                    $('.jiaxi-more').remove();
                }
                if(!data.rateCoupon){
                    $('.jiaxiquan ').css("background","#EFEFEF");
                    $('.nodatas').html('<img src="/static/default/images/list-null.png" style="display:block;margin:50px auto 10px;width:40%"><div style="text-align: center;">暂无记录</div>');
                }else{
                    $('.jiaxiquan ').css("background","#FFFFFF");
                    $.each(data.rateCoupon, function (i, item) {
                        var id = item.id;
                        var coupon_rate=item.coupon_rate;
                        var date_begin=item.date_begin;
                        var date_end=item.date_end;
                        var add_rate_days=item.add_rate_days;
                        var status=item.status;
                        var group_name=item.group_name;
                        var qitou=item.qitou;
                        var status_name=item.status_name;
                        html+='<div class="jaxiquan-box"><div class="jiaxiquan-left" data-number="'+id+'">'+
                            '<div class="jiaxiquan-left-content">'+coupon_rate+'<span>%</span></div>'+
                            '<i>享'+add_rate_days+'日加息</i></div>'+
                            '<div class="jiaxiquan-right"><div>'+group_name+'</div>'+
                            '<i>有效期至：'+date_end+'</i>'+
                            '<span>投资满'+qitou+'元可用</span></div></div>'
                    })
                    $('.jiaxiquan-rule').append(html);
                }
            }
        })
    }

    function insertdiv(data){
        var sss='';
        var lineheight = (data.xmxq ==0) ? '62px' : '38px';
        var height = (data.xmxq ==0) ? '40px' : '35px';
        var qtmargin = (data.xmxq ==0) ? '0px' : '-5px';
        var yxmargin = (data.xmxq ==0) ? '0px' : '-5px';
        var xmqx = '';
        if(data.xmxq !=0){
            xmqx =' <div style="overflow: hidden;"><div class="cont" style="color: #9b9b9b;margin-top: -5px">项目期限为：' +data.xmxq+'天以上</div> </div>';
        }
        var htmls=$('<div class="item'+data.key+'">' +
            '<a href="javascript:void(0)"  onclick=\'goabc(this,"'+data.popup+'",'+data.key+' )\'  ><div class="item'+data.key+'-left">' +
                '<div class="text2">￥<label style="font-size: 28px;">' +data.coupon_value+'</label></div>'+
            '</div></a>' +
            '<div class="item'+data.key+'-middle">' +
                 '<div style="overflow: hidden;">' +
                     '<div class="cont" style="height:'+height+';line-height:'+lineheight+';color: #4C4C4C;font-size: 16px;">' +data.group_name+
                  '</div>' +
            '</div>' +
            '<div style="overflow: hidden;">' +
                 '<div class="cont" style="color: #ff9204;margin-top:'+yxmargin+'">有效期至：<span class="date_desc">' +data.date_desc+'</span></div>'+
            '</div>' +

            ' <div style="overflow: hidden;">' +
                   '<div class="cont" style="color: #9b9b9b;margin-top:'+qtmargin+'">投资满' +data.group_qitou+'元可用。</div>'+
            ' </div>' +

             xmqx+

            '</div>' +
            '');
        htmls.appendTo($("#cmain"));
    }

    function getMoreHongBao(){
        var page=$("#hpage").val();
        page++;
        $("#hpage").val(page);
        $('#hloading').show();
        $.ajax({
            type: "get",
            dataType: "json",
            url: '/user/ucenter/hongbao-list',
            data: {'num':page},
            success: function (data) {
                $('#hloading').hide();
                if(!data.hasnext){
                    $('.hmore').remove();
                }
                if(data.nodata==1){
                    $('.hbcoupons ').css("backgroundColor","#EFEFEF");
                    $('#nohdata').html(' <img src="/static/default/images/list-null.png" style="display:block;margin:50px auto 10px;width:40%"><div style="text-align: center;">暂无记录</div>');
                }else{
                    $('.hbcoupons ').css("backgroundColor","#FFFFFF");
                    for (var i = 0; i < data.da.length; i++) {
                        hongbaodiv(data.da[i]);
                    };
                }
            }
        })
    }

    function hongbaodiv(data){
        var sss='';
        var htmls=$('<div class="hongbao-span">' +
            ' <div class="hongbao-span-left">' +
                  '<div class="hongbao-span-left-bg">' +data.send_money+
                        '<span style="font-size: 12px;">元</span>' +
                  '</div>' +
            '</div>' +
            ' <div class="hongbao-span-right">' +
                 '<div class="box-left">' +
                 '<div class="cont" style="margin-top:6px">' +
                          '<label>来&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;源：</label>' +data.act_name+
                 '</div>' +
                '<div class="cont">' +
                      ' <label>获得时间：</label>' +data.send_time+
                 '</div>' +
            '</div>' +
            '<div class="box-right"></div>' +
            '</div>' +
            ' </div>' +
            '');
        htmls.appendTo($("#hmain"));
    }


    function goabc(obj,pop,key){

        if(key == 1 && pop==''){
            window.location.href='/site/getlists';
        }else if(key == 1 && pop=='popup'){
            var content = $(obj).parent().find('.date_desc').text();
            $('.coupons-tishi-text').html(content)
            $(".goabc").show();
            $(".coupons-tishi").show();
        }
    }
    function showRule(){
        $(".wcgoverlays").show();
        $(".coupons-shuoming").show();
    }
    function exchangeYouHuiQuan(){
        var vcode = $('#vcode').val();
        var exchangecode = $('#exchangecode').val();
        $.ajax({
            type: "GET",
            dataType: "json",
            url: '/user/ucenter/exchange_coupon_do',
            data: {'vcode':vcode,'exchangecode':exchangecode},
            success: function (data) {
                if(data.code==0){
                    $('.coupons-duihuan-error').show();
                    $('.coupons-duihuan-error').html(data.message);
                   setTimeout(function(){ window.location.reload() }, 2000);
                }else{
                    $('.coupons-duihuan-error').show();
                    $('.coupons-duihuan-error').html(data.message);
                }
                getVarifyCode();
            }
        });
    }

    function getVarifyCode(){
        var rr= Math.random();
        $("#flush_yangzhenma").attr("src","/user/ucenter/varify?t="+rr);
    }

    function jiaxiduihuantishi(a){
        $('.error-ins').html(a);
        var ew=$('.error-ins').width()/2;
        var eh=$('.error-ins').height()/2;
        $('.error-ins').css({marginLeft:-ew,marginTop:-eh});
        $('.error-mark').fadeIn();
        $('.error-ins').fadeIn();
        var t=setTimeout(function(){
            $('.error-mark').fadeOut();
            $('.error-ins').fadeOut();
            clearTimeout(t);
        },1000);
    }
//    加息-兑换码
    $('#jiaxi-btn').on('click',function(){
        var isOks= true;
        isOks= getjiaxivertfycode();//是否显示验证码
        if(isOks==false){ //显示
            var isOkma=checkjiaxiverify();
            if(isOkma==true){
                var jiaok=jiaxiyanzheng();
                if(jiaok==true){
                    jiaxiquanhuan();
                }
            }else {
                $('.jiaqiquan-varify-content input').val('');
                $('.jiaqiquan-varify img').trigger('click');
            }
        }else if(isOks==true){
            var jiaok=jiaxiyanzheng();
            if(jiaok==true){
                jiaxiquanhuan();
            }
        }
    });
    $('.jiaqiquan-varify img')[0].src='/user/ucenter/get-verify-code';
    //刷新验证码
    $('.jiaqiquan-varify img').on('click', function () {
        $(".jiaqiquan-varify img")[0].src="/user/ucenter/get-verify-code?" + Math.random();
    });
    //是否显示验证码
    function getjiaxivertfycode() {
        var maOks=false;
        var jiaxiVarify = $.trim($("#jiaxi-varify").val());
        $.ajax({
            type: "get",
            url: "/user/ucenter/need-verify",
            async: false,
            dataType: "json",
            success: function (response) {
                if (response.code == 0) {
                    if(response.need==1){
                        $('.jiaqiquan-varify').show();
                        maOks=false;
                    }else  if(response.need==0){
                        $('.jiaqiquan-varify').hide();
                        maOks=true;
                    }
                }
            }
        });
        return maOks;
    }
//    验证图形验证码
    function checkjiaxiverify() {
        var maOk=false;
        var checkverifycode = $.trim($("#jiaxi-varify").val());
        if (checkverifycode == undefined || checkverifycode == "") {
            jiaxiduihuantishi('验证码不能为空');
            return maOk;
        }else {
            maOk=true;
        }
        return maOk;
    }
    // 加息券验证
    function jiaxiyanzheng(){
        var maOk=false;
        var jiaxi = $.trim($("#jiaxi").val());
        if (jiaxi == undefined || jiaxi == "") {
            jiaxiduihuantishi('兑换码不能为空');
            return maOk;
        }else {
            maOk=true;
        }
        return maOk;
    }
//    加息券兑换
    function jiaxiquanhuan(){
        var checkverifycode = $.trim($("#jiaxi-varify").val());
        var jiaxi = $.trim($("#jiaxi").val());
        $.ajax({
            type: "post",
            url: "/user/ucenter/exchange-rate-coupon",
            async: false,
            dataType: "json",
            data: {
                exVerifyCode: checkverifycode,
                exCode:jiaxi,
            },
            success:function(data){
                if(data.error==0){
                    jiaxiduihuantishi(data.msg);
                }else if(data.error==1){
                    jiaxiduihuantishi(data.msg);
                }
            }
        })
    }
</script>


