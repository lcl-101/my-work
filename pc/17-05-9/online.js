
/**
 * 充值：网上充值
 * @author lizixu <zixulee@163.com>
 * @date 2015.3.3
 */

$(function(){
	if(KFZ.user && KFZ.user.isLogin != 1){
		KFZ.common.turnLogin();
		return false;
	}
	if(KFZ.user && KFZ.user.isActive != 1){
		location.href = KFZ.url.host + 'openAccount.html';
		return false;
	}
	new AppView();
	
});


window.AppView = KFZ.View.extend({
	el: '#recharge_box',
	initialize: function(){
		var that = this;
		this.getFillChannel(null, function(data){
			that.renderStepOne(data);
		});
	},
	// 渲染第一步
	renderStepOne: function(data){
		this.$el.html(KFZ.tmpl('tmpl_step_one', {data: data}));
	},
	// 获取支付渠道
	getFillChannel: function(event, callback){
		var that = this;
		KFZ.ajax.Get({
			url: 'https://neibupay.kongfz.com/Pay/Fundfill/getFillChannel?_=1495163981552',
			success: function(data, res){
				KFZ.page.channels = data.channels;
				callback && callback(KFZ.page.data = data);
			},
			fail: function(msg, data, res){
				that.getFillChannelFail('失败');
			},
			error: function(){
				that.getFillChannelFail('出错');
			}
		});
	},
	// 获取支付渠道失败
	getFillChannelFail: function(errType){
		this.$el.html('<div class="no_record">获取充值渠道'+ errType +'，请 <a id="btn_get_channel_list_retry" href="javascript:;">点击此处</a> 重试！</div>');
	},
	events: {
		'click #btn_get_channel_list_retry': 'getFillChannel',
		'click #btn_other_bank': 'renderAllBank',
		'click #bank_box :radio,#alipay_box :radio': 'setSecStyle',
		'click #btn_step_next': 'stepNext',
		'keyup #payAmount': 'checkPayAmount',
		'click #btn_fill_submit': 'fillSubmit',
		'click #btn_reset_channel': 'resetChannel'
	},
	// 渲染全部银行
	renderAllBank: function(event){
		$('#bank_box').html(KFZ.tmpl('tmpl_switch_all_bank', {data: KFZ.page.data})).parents('.bank_box').removeClass('red_border');
		$('#sec_bank_tit').html('选择网上银行');
	},
	// 选中样式
	setSecStyle: function(event){
		var $item = $(event.currentTarget).parents('li'),
			type = $item.parents('#alipay_box').length ? 'alipay' : 'bank',
			otherType = type === 'bank' ? 'alipay' : 'bank',
			code = $item.attr('data-code'),
			name = $item.attr('data-name'),
			type = $('input[id^=weixin_]:checked').length?'weixin':type,
			channel = KFZ.page.channels && KFZ.util.get(KFZ.page.channels[type], {channelCode: code.toUpperCase()}),
			fillTariff = channel && channel.fillTariff;
		fillTariff && (fillTariff = +fillTariff);
		fillTariff && (fillTariff = fillTariff * 100 + '%');
		$item.addClass('check').siblings('li').removeClass('check');
		$item.parents('.bank_box').addClass('red_border');
		$('#sec_' + type + '_box').show().find('#sec_' + type).html(name + '，' + (type === 'bank' ? (fillTariff || '无') + '手续费' : '费率为' + fillTariff));
		$('#' + otherType + '_box').find('li.check').removeClass('check');
		$('#sec_' + otherType + '_box').hide().parents('.bank_box').removeClass('red_border');
		if(!$('input[id^=weixin_]:checked').length){
			$('#sec_weixin_box').hide();
		}else{
			$('#sec_alipay_box').hide();
		}
	},
	// 下一步
	stepNext: function(event){
		var $checked = $('#bank_box,#alipay_box').find(':radio:checked');
		if($checked.length){
			var type = $checked.parents('#bank_box').length ? 'bank' : 'alipay',
				code = $checked.val();
			if($('input[id^=weixin_]:checked').length) type = 'weixin';
			var	channel = KFZ.page.channels && KFZ.util.get(KFZ.page.channels[type], {channelCode: code.toUpperCase()});
			if(channel){
				this.renderStepTwo(KFZ.page.channel = channel);
			}else{
				KFZ.ui.alertWin({result: 0, text: '充值渠道选择有误，请刷新页面重试！'});
			}
		}else{
			new KFZ.ui.PopWin({
				overWin: '#stepNextErrTipWin',
				overTit: '温馨提示',
				overCon: '请先选择充值渠道后，再点击“下一步”按钮。',
				hasCancelBtn: false,
				afterOpen: function(){
					$(this.submitBtn).addClass('btn_orange_110_25').html('我知道了');
				},
				afterSubmit:function(){}
			});
		}
	},
	// 渲染第二步
	renderStepTwo: function(channel){
		this.$el.html(KFZ.tmpl('tmpl_step_two', {item: channel})).find('#payAmount').focus();
	},
	// 验证金额
	checkPayAmount: function(event){
		var $this = event && $(event.currentTarget) || $('#payAmount');
		$this.removeClass('text_err').parent().siblings('.check_tip').removeClass('check_tip_err');
		var payAmount = $.trim($this.val()),
			checkRes = KFZ.ui.formCheck({
				payAmount: {
					el: '#payAmount',
					checks: [
						{type: 'lenMin', condition: 1, errTip: '请输入充值金额！'},
						{type: 'positiveNumber', errTip: '格式不正确，请正确输入！'},
						{type: 'min', condition: 0.01, errTip: '金额必须大于0.01元，请修改！'},
						{type: 'max', condition: 999999.99, errTip: '金额必须小于1,000,000.00元，请修改！'},
						{type: 'price', errTip: '格式不正确，请正确输入！'}
					]
				}
			});
		this.$payAmountTip = $('#pay_amount_tip');
		if(checkRes){
			this.$payAmountTip.show().html(KFZ.tmpl('tmpl_pay_amount_tip', {payAmount: +checkRes.payAmount, fillTariff: +KFZ.page.channel.fillTariff}));
			return checkRes;
		}else{
			this.$payAmountTip.hide();
		}
	},
	// 提交充值
	fillSubmit: function(){
		var checkRes = this.checkPayAmount();
		if(!checkRes) return;
		var $payForm = $('#payForm');
		$payForm.find('[name="payAmount"]').val(checkRes.payAmount);
		$payForm.trigger('submit');
		new KFZ.ui.PopWin({
			overWin: '#fillSubmitWin',
			overTit: '温馨提示',
			overCon: '请您在新打开的页面上完成充值！<br/>充值完成前请不要关闭此窗口。完成充值后请根据您的情况点击下面的按钮。',
			afterOpen: function(){
				this.$overWin.find('.subBtn').addClass('btn_orange_110_25').html('已完成充值').attr({'href': KFZ.sites.adapter.pays + 'detail/fill.html'});
				this.$overWin.find('.cancelBtn').addClass('btn_gray_112_25').html('充值遇到问题').attr({'target': '_blank', 'href': KFZ.sites.adapter.help + '?act=detail&contentId=605'});
			}
		});
	},
	// 重选方式
	resetChannel: function(event){
		KFZ.page.data && this.renderStepOne(KFZ.page.data);
	}
	
});

