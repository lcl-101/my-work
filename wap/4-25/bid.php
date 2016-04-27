<?php
use wap\assets\AppAsset;
AppAsset::register($this);
$this->registerCssFile('/static/default/css/idangerous.swiper.css');
$this->registerCssFile('/static/default/css/normalize.css');
$this->registerCssFile('/static/default/css/movies-app.css');
$this->registerJsFile('/static/jquery/idangerous.swiper-2.0.min.js', [ 'position' => 2]);
//$this->registerJsFile('/static/jquery/movies-app.js', [ 'position' => 2]);
?>
<div class="wcg-container toubiao">
    <form action="/chinapnr/initiative-tender" method="post" id="bidForm">

        <input id="dealId" name="dealId" type="hidden" value="<?= $deal['deal_id'] ?>">
        <input name="deal_balance" type="hidden" value="<?= $deal['balance'] ?>">
        <input name="account_balance" type="hidden" value="<?= $balance ?>">
        <input name="start_money" type="hidden" value="<?=$deal['start_money']?>">
        <input name="new_user_deal" type="hidden" value="<?=$deal['new_user_deal']?>">
        <input id="couponId" name="couponId" type="hidden" value="0">
        <input id="couponMoney" name="couponMoney" type="hidden" value="0">
        <input id="couponQitou" name="couponQitou" type="hidden" value="0">
        <input id="quan-type" type="hidden" name="couponType" value="normal">
        <div class="toubiao-span">
            <div class="item1">
                <div class="item-span">
                    可投余额
                    <div class="value"><?= number_format($deal['balance'] ? $deal['balance'] : 0, 2) ?> <label>元</label></div>
                </div>
                <div class="item-span" style="clear:both;border-top:1px solid #DCDDDD;">
                    账户余额
                    <div class="value"><?= number_format($balance, 2) ?> <label>元</label></div>
                </div>
            </div>
            <div class="item2">
                <a href="/recharge/default/index">充值</a>
            </div>
            <?php if($deal['start_max_money']>0): ?>
            <div style="line-height: 43px; clear: both;  border-top: 1px solid #DCDDDD;height: 42px" onclick="showRule()">
                <div style="background: #E6E6E6;text-align:center;color: #2fa3d6">
                    
                <div>
                    您还可以投资:<?= $moneysum  ?>元
                      <span style="position: relative;top:-10px;left: 0px;">
                        <img width="13" src="/static/default/images/wen.png"  onclick="showRule()"/>
                      </span>
                </div>
              
                </div>

            </div>
            <div class="wcgoverlays  goabc" style="position:fixed;top:0;left: 0;z-index:100000;background:url(/static/default/images/overlaybg.png);width:100%;height:100%;display:none">
                <div class="coupons-shuoming" style="height:210px">
                    <ul>
                        <li>本项目为限购项目</li>
                        <li>每位股东投资上限为：<?= $deal['start_max_money'] ?>元</li>
                        <li>您还可以投资：<span style="color: #2fa3d6"><?= $moneysum  ?>元</span></li>
                        <li>如有相关问题请联系客服：400-888-6268</li>
                    </ul>
                    <div class="shuoming-btn">确定</div>
                </div>
            </div>
            <?php  endif ;?>
            <div class="item3">
                投资金额
                <div class="item-span">
                    <?php  if(2==$deal['xinshou_status']){ ?>
                         <input type="text" name="tzMoney" data-value="100"  value="100" placeholder="可投<?=round($deal['start_money'])?>～<?=round($deal['new_user_deal_max_money'])?>元，限新用户" readonly="readonly"  style="line-height: 30px;width: 200px;"  />
                    <?php   }elseif((1==$deal['new_user_deal'])){ ?>
                         <input type="text" name="tzMoney" data-value=""  value="" placeholder="可投<?=round($deal['start_money'])?>～<?=round($deal['new_user_deal_max_money'])?>元，限新用户"  style="line-height: 30px;width: 200px;"  />
                    <?php   }else{ ?>
                         <input type="text" name="tzMoney" data-value="" style="line-height: 30px;width: 200px;" placeholder="<?=round($deal['start_money'])?>元起投，<?=round($deal['dizeng_money'])?>元递增" />
                    <?php } ?>
                    <label>.00元</label>
                </div>
                <div class="lixi" id="income" style="display:none;">
                    投资<span>5000元</span>，预计收益<span>5.44元</span>
                </div>
            </div>
            <div class="form-group" style="margin-top:0px;display:none;">
                <div class="alert alert-danger" role="alert" id="warning" ></div>
            </div>
            <?php if(is_array($coupons) && !empty($coupons) &&  $deal['xinshou_status']!=2 ): ?>
<!--                <div class="item4">-->
<!--                    <div class="item-span">-->
<!--                        代金券-->
<!--                        <div class="select-djq" style="cursor:pointer;">-->
<!--                            <span>选择一张代金券</span>-->
<!--                            <label></label>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="daijinquan-hongbao">-->
<!--                        <div class="swiper-container swiper-nav">-->
<!--                            <div class="swiper-wrapper">-->
<!---->
<!--                                --><?php //foreach ($coupons as $coupon): ?>
<!--                                    <div class="swiper-slide active-nav coupon" data-id="--><?//= $coupon['id'] ?><!--" data-qitou="--><?//= $coupon['group_qitou'] ?><!--" data-value="--><?//= intval($coupon['coupon_value']) ?><!--" style="cursor:pointer;">-->
<!--                                        <div class="text">--><?//= round($coupon['coupon_value']) ?><!--</div>-->
<!--                                        <img src="/static/default/images/daijinquan.png" alt="--><?//= intval($coupon['coupon_value']) ?><!--">-->
<!--                                        <div class="selected"></div>-->
<!--                                    </div>-->
<!--                                --><?php //endforeach; ?>
<!---->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
            <?php endif; ?>
            <div class="item5">
                <div class="item5-content">使用优惠券<span><?=count($coupons)?></span></div>
                <div class="item5-inner">
                    <span class="dai-orangeSpan">代金券</span>
<!--                    投资满10000元可用-->
                    <div></div>
<!--                    100元-->
                    <i class="dai-orangesI"></i>
                    <ul class="dai-redI">
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <img class="item5-jiatou" src="/static/default/images/jiaxi-jiantou.png" alt="">
            </div>
        </div>
        <button type="submit" id="sub" class="btn btn-block toubiao-btn" style="line-height:31px;">立即投资</button>
    </form>
    <div class="chakanxieyi" style="margin-bottom:50px;">
        <a href="/deal/dealbid/show-contract?deal_id=<?=$deal['deal_id']?>">点击查看<协议模版></a>
        <div><span style="vertical-align: middle;">*</span> 旺财谷提示您：理财非存款，投资需谨慎</div>
    </div>
</div>
<script src="/static/default/zhuanti/1/js/iscroll.js"></script>
<script src="/static/default/zhuanti/1/js/fastclick.js"></script>
<!--加息券-->
<div class="coupon-box">
    <div class="scroller">
        <div class="coupon-nav">
            <div class="goback">返回</div>
            <div class="coupon-nav-title">优惠券</div>
            <div class="coupon-nav-dis">不使用</div>
        </div>
        <?php foreach($coupons as $key => $val):?>
        <?php if($val['coupon_type']=='rate'): ?>
                <div class="jiaxiquans" data-number="<?php echo intval($val['id'])?>" data-type="rate">
                    <div class="jaxiquans-box">
                        <div class="jiaxiquans-left">
                            <div class="jiaxiquans-left-content"><em><?php echo ($val['coupon_rate'])?></em><span>%</span>
                            </div> <i>享<?php echo intval($val['add_rate_days'])?>日加息</i>
                        </div>
                        <div class="jiaxiquans-right" data-qitou="<?php echo intval($val['qitou'])?>"><div><?php echo ($val['group_name'])?></div>
                            <i>有效期至：<?php echo ($val['date_end'])?></i>
                            <span>投资满<?php echo intval($val['qitou'])?>元可用</span></div>
                        <div class="jiaxiquans-list">加<br/>息<br/>券</div>
                    </div>
                </div>
        <?php elseif($val['coupon_type']=='normal'): ?>
                <div class="jiaxiquans" data-number="<?php echo intval($val['id'])?>" data-type="normal">
                    <div class="jaxiquans-box">
                        <div class="jiaxiquans-left" style="background: url(/static/default/images/coupons-bg7.png) right no-repeat #ff9204">
                            <div class="jiaxiquans-left-content" style="margin-top:31px;"><span>￥</span><em><?php echo intval($val['coupon_value'])?></em></div>
                            <i></i>
                        </div>
                        <div class="jiaxiquans-right" data-qitou="<?php echo intval($val['group_qitou'])?>">
                            <div><?php echo ($val['group_name'])?></div>
                            <i>有效期至：<?php echo ($val['date_end'])?></i>
                            <span>投资满<?php echo intval($val['group_qitou'])?>元可用</span>
                        </div>
                        <div class="jiaxiquans-list">代<br/>金<br/>券</div>
                    </div>
                </div>
        <?php endif; ?>
        <?php endforeach;?>
    </div>
</div>
<script type="text/javascript">
    function showRule(){
        $(".wcgoverlays").show();
        $(".coupons-shuoming").show();
    }
    $(function () {
        $(".shuoming-btn").on("click",function(){
            $(".coupons-shuoming").hide();
            $(".wcgoverlays").hide();
        })
        $(".select-djq").on("click", function () {
            if ($(".toubiao .item4").height() <= 55) {
                $(".toubiao .item4").css({"height": "155px"});
            } else {
                $(".toubiao .item4").css({"height": "55px"});
            }
        });
        function warning(text){
            $('#warning').html(text).parent().show();
            setTimeout(function(){
                $('#warning').parent().hide('slow');
            },2500);
        }
        
        $('input[name=tzMoney]').bind('keyup', function (e) {
            var value = $(this).val();
            $(this).val(value.replace(/\D/g,''));
            //限制投资金额只能小于等于可投余额
            var deal_balance = $('input[name=deal_balance]').val();
            if (parseFloat(value) > parseFloat(deal_balance)) {
                warning('投资金额不能大于项目可投余额');
                $(this).val($(this).data('value'));
                return;
            }

            //限制投资金额只能小于等于账户可用余额
            var account_balance = $('input[name=account_balance]').val();
            if (parseFloat(value) > parseFloat(account_balance)) {
                warning('投资金额不能大于账户可用余额');
                $(this).val($(this).data('value'));
                return;
            }
            //投资金额加代金券不大于标的可投余额
            var couponMoney = $('input[name=couponMoney]').val();
            if (couponMoney != 0 && (parseInt(couponMoney) + parseFloat(value)) > parseFloat(deal_balance)) {
                warning('投资金额加代金券金额不能大于项目可投余额');
                $(this).val($(this).data('value'));
                return;
            }
            $(this).data('value', value.replace(/\D/g,''));

            /*
            var xinshou_status = $('input[name=new_user_deal]').val();
            if(xinshou_status == 1){

                if(parseFloat(value)>5000){
                    warning('新手标只能投资100元');
                    $(this).val($(this).data('value'));
                    return;
                }
                if(couponMoney!=0){
                    warning('新手标不能使用优惠券');
                    $(this).val($(this).data('value'));
                    return;
                }

            }*/


            var dealId = $('input[name=dealId]').val();
            $.get('/deal/deal/get-expect-income', {id: dealId, order_money: value.replace(/\D/g,'')}, function (data) {
                if (data.order_money != 0) {
                    $('#income').html('投资<span>' + data.order_money + '元</span>，预计收益<span>' + data.income + '元</span>').show();
                } else {
                    $('#income').hide();
                }
            }, 'json');
        });
        $('#sub').click(function (e) {
            var deal_id = $('input[name=dealId]').val();
            var order_money = $('input[name=tzMoney]').val();
            var coupon_id = $('input[name=couponId]').val();
            var coupon_type=$('#quan-type').val();
            $.post('/deal/dealbid/bid-ajax-check',{deal_id:deal_id,order_money:order_money,coupon_id:coupon_id,coupon_type:coupon_type},function(data){
                if(data.error == '1'){
                    warning(data.msg);
                    return false;
                }else{
                    $('#bidForm').submit();
                }
            },'json');
            e.preventDefault();
        });
    });

    var couponBox='.coupon-box';
    myScroll = new IScroll(couponBox,{ mouseWheel: true, tap: true,click:true });
//    右侧加息页面
    $('.item5').on('click',function(){
        $('.coupon-box ').addClass('coupon-show');
    });
    $('.goback ').on('click',function(){
        $('.coupon-box ').removeClass('coupon-show');
    });
    //    加息
    $('.jiaxiquans').on('click',function(){
        var index=$('.jiaxiquans').index(this);
        var dataType=$('.jiaxiquans').eq(index).attr('data-type');
        $('#couponId').val($('.jiaxiquans').eq(index).attr('data-number'));
        $('#couponMoney').val($('.jiaxiquans-left-content em').eq(index).html());
        $('#couponQitou').val($('.jiaxiquans-right').eq(index).attr('data-qitou'));
        $('#quan-type').val(dataType);
        if(dataType=='rate'){
            $('.item5-content').hide();
            $('.item5-inner').show();
            $('.item5-inner span').show().addClass('dai-redSpan').removeClass('dai-orangeSpan').html('加息券');
            $('.item5-inner div').show().html($('.jiaxiquans-right span').eq(index).html());
            $('.item5-inner ul').show();
            $('.item5-inner li').eq(0).html($('.jiaxiquans-left-content em').eq(index).html()+'%');
            $('.item5-inner li').eq(1).html($('.jiaxiquans-left i').eq(index).html());
            $('.item5-inner i').hide();
            $('.coupon-box ').removeClass('coupon-show');
            jixiclose();
        }else if(dataType=='normal'){
            $('.item5-content').hide();
            $('.item5-inner').show();
            $('.item5-inner span').show().removeClass('dai-redSpan').addClass('dai-orangeSpan').html('代金券');
            $('.item5-inner div').show().html($('.jiaxiquans-right span').eq(index).html());
            $('.item5-inner i').show().html($('.jiaxiquans-left-content em').eq(index).html()+'元');
            $('.item5-inner ul').hide();
            $('.coupon-box ').removeClass('coupon-show');
        }
    });
    function jixiclose(){
        $('.coupon-nav-dis').on('click',function(){
            $('.item5-content').show();
            $('.item5-inner').hide();
            $('.item5-inner span').hide();
            $('.item5-inner div').hide().html('');
            $('.item5-inner ul').hide();
            $('.item5-inner li').html('');
            $('.item5-inner i').hide().html('');
            $('.coupon-box ').removeClass('coupon-show');
        })
    }

</script>
