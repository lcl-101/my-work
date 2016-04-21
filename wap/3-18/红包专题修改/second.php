<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 设置IE浏览器的解析模式-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="renderer" content="webkit">
    <!--视窗设置 -->
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>我在旺财谷赚钱啦，送你一个红包！</title>
    <link href="/active/fenliehongbao/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/active/fenliehongbao/css/second.css">
    <script src="/active/fenliehongbao/js/jquery.js"></script>
</head>
<body>
<div class="container">
    <!--banner-->
    <div class="row">
        <div class="col-xs-12 banner">
            <img src="/active/fenliehongbao/images/banner1.png" alt="">
        </div>
    </div>
    <!--优惠券-->
    
    <div class="row juan">
        <div class="col-xs-12">
            <img src="/active/fenliehongbao/images/juan1.png" alt="">
            <!--<img src="/active/fenliehongbao/images/juan2.png" alt="">-->
            <div class="juan-left">红<br/>包</div>
            <?php if($message['code']==0 || $message['code'] == 204) {?>
            <div class="juan-right" style='display:block;'>
                <span>￥</span><?=$message['content']['coupon_num']?>
                <div class="juan-right-content">
                <?php if($message['content']['coupon_num'] == 88) {?>
                    投资满50000元可用
                <?php } elseif($message['content']['coupon_num'] == 58) {?>
                    投资满20000元可用
                <?php } elseif($message['content']['coupon_num'] == 38) {?>
                    投资满12000元可用
                <?php } elseif($message['content']['coupon_num'] == 28) {?>
                    投资满6000元可用
                <?php } elseif($message['content']['coupon_num'] == 18) {?>
                <?php if(isset($message['content']['new'])){?>
                    投资满2000元可用
                    <?php }else{?>
                    投资满3000元可用
                    <?php }?>
                <?php } elseif($message['content']['coupon_num'] == 8) {?>
                    投资满2000元可用
                <?php }?>
                </div>
            </div>
            <?php }elseif($message['code']==202 ){?>
            <div class="juan-right-false">抱歉~
                <div>活动已结束，请您以后及时关注</div>
            </div>
            <?php }elseif($message['code']==207 ){?>
            <div class="juan-right-false">抱歉~
                <div>一天最多领取三个红包哦，请您明天再来</div>
            </div>
            <?php }elseif($message['code']==203 ){?>
            <div class="juan-right-false">抱歉~
                <div>红包已经被抢完了，下次早点来哦！</div>
            </div>
            <?php }else{?>
            <div class="juan-right-false">抱歉~
                <div>红包领取失败！</div>
            </div>
            <?php }?>
        </div>
    </div>
    <!--content-->
    <div class="row content-top">
        <div class="col-xs-12">
            <img src="/active/fenliehongbao/images/content-top.png" alt="">
        </div>
    </div>
    <div class="row content">
        <div class="container">
        
            <?php if($message['code']==0|| $message['code']==204){?>
                <div class="row inner">
                    <div class="col-xs-12">红包已放账户！快去理财吧，不要过期哦~</div>
                </div>
                <div class="number-box">
                    <div class="col-xs-12 number"><?=$message['content']['mobile']?><a class="number1" href="/active/coupon/index?dealOrderNum=<?=$message['content']['dealNumber']?>">换个号码，再领一个></a></div>
                </div>
            
            <?php }else{?>
                <div class="row inner1">
                    <div class="col-xs-12">别灰心，快去旺财谷理财，更多收益等你来！</div>
                </div>
                <div class="number-box1">
                    <div class="col-xs-12 number"><?=$message['content']['mobile']?></div>
                </div>
            <?php }?>
            
            <!--btn-->
            <div class="row">
                <div class="col-xs-12">
                <?php //if(!empty($message['login'])&&$message['login']=='yes'){?>
                    <a href="/site/getlists" class="btn">去 理 财</a>
                <?php //}else{?>
                    <!--<a href="/user/signup/index" class="btn">去 理 财</a>-->
                <?php //}?>
                </div>
            </div>
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

            <!--比手气-->
            <div class="row guizhe">
                <div class="col-xs-12 active">
                    <img src="/active/fenliehongbao/images/xian.png" alt="">
                    <div class="rule">比比手气</div>
                </div>
            </div>
            
            <?php foreach($hongbaolist as $k=>$v):?>
            <div class="row">
                <div class="col-xs-1"></div>
                <div class="col-xs-2"><div class="touxian"><img src="<?=$v['user_icon']?>" /></div></div>
                <div class="col-xs-6 yunqi">
                    <div><span class="yunqi-name"><?=$v['user_nickname']?></span><?=date("y-m-d  H:i",$v['created_at'])?></div>
                    <div><?=$v['user_sign']?></div>
                </div>
                <div class="col-xs-2 ">
                    <div class='redbag1'>
                        <img src="/active/fenliehongbao/images/redbag1.png" alt="">
                        <div class="money">￥<?=$v['coupon_value']?></div>
                    </div>  
                </div>
                <div class="col-xs-1"></div>
            </div>
            <div class="row xian1">
                <div class="col-xs-1"></div>
                <div class="col-xs-10">
                    <div></div>
                </div>
                <div class="col-xs-1"></div>
            </div>
            <?php endforeach;?>
<!--            <div class="row">
                <div class="col-xs-1"></div>
                <div class="col-xs-2"><div class="touxian"></div></div>
                <div class="col-xs-6 yunqi">
                    <div>微信名    2015-11-23  18:30:52</div>
                    <div>手气爆表，更多财富在招手哦</div>
                </div>
                <div class="col-xs-2 redbag1">
                    <img src="/active/fenliehongbao/images/redbag1.png" alt="">
                    <div class="money">￥15</div>
                </div>
                <div class="col-xs-1"></div>
            </div>
            <div class="row xian1">
                <div class="col-xs-1"></div>
                <div class="col-xs-10">
                    <div></div>
                </div>
                <div class="col-xs-1"></div>
            </div>

            <div class="row">
                <div class="col-xs-1"></div>
                <div class="col-xs-2"><div class="touxian"></div></div>
                <div class="col-xs-6 yunqi">
                    <div>微信名    2015-11-23  18:30:52</div>
                    <div>手气爆表，更多财富在招手哦</div>
                </div>
                <div class="col-xs-2 redbag1">
                    <img src="/active/fenliehongbao/images/redbag1.png" alt="">
                    <div class="money">￥15</div>
                </div>
                <div class="col-xs-1"></div>
            </div>
            <div class="row xian1">
                <div class="col-xs-1"></div>
                <div class="col-xs-10">
                    <div></div>
                </div>
                <div class="col-xs-1"></div>
            </div>

            <div class="row">
                <div class="col-xs-1"></div>
                <div class="col-xs-2"><div class="touxian"></div></div>
                <div class="col-xs-6 yunqi">
                    <div>微信名    2015-11-23  18:30:52</div>
                    <div>手气爆表，更多财富在招手哦</div>
                </div>
                <div class="col-xs-2 redbag1">
                    <img src="/active/fenliehongbao/images/redbag1.png" alt="">
                    <div class="money">￥15</div>
                </div>
                <div class="col-xs-1"></div>
            </div>
            <div class="row xian1">
                <div class="col-xs-1"></div>
                <div class="col-xs-10">
                    <div></div>
                </div>
                <div class="col-xs-1"></div>
            </div>-->
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
</div>
</body>
</html>