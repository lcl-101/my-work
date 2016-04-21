<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>我在旺财谷赚钱啦，送你一个红包！</title>
	<meta name="keywords" content="">
	<meta name="description" content="">
	<!--<script src="/static/jquery/jquery-1.11.1.min.js"></script>-->
	<script src="/active/js/jquery-1.11.1.min.js"></script>
</head>
<body>
	<div id="mcover" style="position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(255, 254, 189, 0.8);z-index: 20000;">
		<img src="/active/fenliehongbao/images/mcover_qie.png" width="100%" style="position: fixed;right: 18px;top: 5px;z-index: 20001;" />
	</div>
</body>
</html>
<script>
$(document).ready(function(){
	setTimeout(jumpurl,5000);
	function jumpurl(){
		// var thisurl = window.location.search; 
		var sourceurl = "<?=$sourceurl?>";
		// var newurl = sourceurl + thisurl;
		var newurl = "<?=$newurl?>";
		window.location.href = newurl;
	}
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