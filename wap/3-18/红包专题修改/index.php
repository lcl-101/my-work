<?php

use yii\widgets\ActiveForm;

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 设置IE浏览器的解析模式-->
    <meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="renderer" content="webkit">
    <!--视窗设置 -->
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>旺财谷 wangcaigu.com-上市公司投资的安全理财平台</title>
    <link href="/active/fenliehongbao/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/active/fenliehongbao/css/index.css">
    <script src="/active/fenliehongbao/js/jquery.js"></script>
</head>
<body>
<div class="container">
    <!--banner-->
    <div class="row">
        <div class="col-xs-12 banner">
            <img src="/active/fenliehongbao/images/banner.png" alt="">
        </div>
    </div>
    <!--content-->
    <div class="row content-top">
        <div class="col-xs-12">
            <img src="/active/fenliehongbao/images/content-top.png" alt="">
        </div>
    </div>
    <div class="row content">
        <div class="error-information"></div>
        <div class="container">
            <?php $form = ActiveForm::begin(['action' => "/active/coupon/wx-auth",'method'=>'get','id'=>'share-form']) ?>
            <!--pnone-->
            <div class="row">
                <div class="phone">
                    <input type="text" name="mobile" placeholder="请输入手机号">
                    <input type="hidden" name="dealOrderNum" value="<?=$dealOrderNum?>">
                </div>
            </div>
            <!--btn-->
            <div class="row">
                <div class="col-xs-12">
                    <div class="btn">
                        <input type="submit" value="点击领取红包">
                    </div>
                </div>
            </div>
            <?php ActiveForm::end(); ?>
            <!--活动规则-->
            <div class="row guizhe">
                <div class="col-xs-12 active">
                    <img src="/active/fenliehongbao/images/xian.png" alt="">
                    <div class="rule">活动规则</div>
                </div>
            </div>

            <div class="row rule-box">
                <div class="col-xs-1"></div>
                <div class="col-xs-10">1.红包新老用户同享;</div>
                <div class="col-xs-1"></div>
            </div>
            <div class="row rule-box">
                <div class="col-xs-1"></div>
                <div class="col-xs-10">2.投资1万元可分享出红包;</div>
                <div class="col-xs-1"></div>
            </div>
            <div class="row rule-box">
                <div class="col-xs-1"></div>
                <div class="col-xs-10">3.红包每人每天限发1次，限抢3次。</div>
                <div class="col-xs-1"></div>
            </div>
            <div class="row rule-box">
                <div class="col-xs-1"></div>
                <div class="col-xs-10">4.活动时间：2016年4月1日~2016年4月15日;</div>
                <div class="col-xs-1"></div>
            </div>
            <div class="row rule-box">
                <div class="col-xs-1"></div>
                <div class="col-xs-10" style="color:#f0ff00;">5.新用户领取红包30天内注册投资正式标，分享者将额外获得58元红包一个！</div>
                <div class="col-xs-1"></div>
            </div>
            <div class="row rule-box">
                <div class="col-xs-1"></div>
                <div class="col-xs-10">6.投标时可勾选红包，使用红包时，账户绑定的手机号码必须为抢红包时手机号码;</div>
                <div class="col-xs-1"></div>
            </div>
            <div class="row rule-box">
                <div class="col-xs-1"></div>
                <div class="col-xs-10">7.新用户领取红包后5天内未注册，红包自动消失;</div>
                <div class="col-xs-1"></div>
            </div>
            <div class="row rule-box">
                <div class="col-xs-1"></div>
                <div class="col-xs-10">8.本活动最终解释权归旺财谷所有。</div>
                <div class="col-xs-1"></div>
            </div>

        </div>
    </div>
    <div class="row content-footer">
        <div class="col-xs-12">
            <img src="/active/fenliehongbao/images/content-footer.png" alt="">
        </div>
    </div>
	<div class="row content-footer red">
            <div class="col-xs-12">
                <img src="/active/fenliehongbao/images/red.png" alt="">
            </div>
        </div>
        <!--旺财谷app-->
        <div class="wang-app">
            <div class="wang-app-bj"><img src="/active/fenliehongbao/images/white.png" alt=""></div>
            <!--<div class="wang-app-content">下载旺财谷App，体验更多精彩！</div>-->
            <div class="wang-app-down"><a href="https://m.wangcaigu.com/download/down-load-app"><img src="/active/fenliehongbao/images/down.png" alt=""></a></div>
            <div class="wang-app-close"><img src="/active/fenliehongbao/images/close.png" alt=""></div>
        </div>
        <script>
            $(function(){
                $('.wang-app-close').on('click',function(){
                    $('.red').css({display:'none'});
                    $('.wang-app').css({display:'none'});
                })
            })
        </script>
</div>
<script>
    $(function(){
        $('#share-form').submit(function(){
            var mobile = $('input[name=mobile]').val();
            var parrten = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
            if(!parrten.test(mobile)){
                $('.error-information').html('请输入正确的手机号');
                return false;
            }
        });
        $('input[name=mobile]').click(function(){
            $('.error-information').html('');
        });
    });
</script>
<script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script language="javascript" type="text/javascript">

    wx.config({
        debug: false,
        appId: '<?php echo $signPackage["appid"];?>',
        timestamp: <?php echo $signPackage["timestamp"];?>,
        nonceStr: '<?php echo $signPackage["noncestr"];?>',
        signature: '<?php echo $signPackage["signature"];?>',
        jsApiList: [
            // 所有要调用的 API 都要加到这个列表中
            'onMenuShareTimeline',
            'onMenuShareAppMessage'
        ]
    });

    wx.ready(function () {
        wx.onMenuShareTimeline({
            title: "我在旺财谷赚钱啦，送你一个红包！", // 分享标题
            link: '<?=$hongbaoUrl?>', // 分享链接
            imgUrl: '<?=$iconUrl?>', // 分享图标
            desc: "有坚持，才有收获！躺着也赚钱，最高加送240元~", // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareAppMessage({
            title: "我在旺财谷赚钱啦，送你一个红包！", // 分享标题
            link: '<?=$hongbaoUrl?>', // 分享链接
            imgUrl: '<?=$iconUrl?>', // 分享图标
            desc: "有坚持，才有收获！躺着也赚钱，最高加送240元~", // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
    });
</script>

</body>
</html>




