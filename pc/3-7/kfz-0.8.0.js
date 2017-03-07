// 弹窗
// @author lizixu <zixulee@163.com>
// @param overTit {boolean|string} 若为false-->不显示标题；若为字符串-->显示该字符作为标题
// @param overCon {string} 弹窗内容
// @param afterOpen {function} 打开窗口后的处理器
// @param afterSubmit {function} 点击确定的处理器，在该处理器中返回false可阻止弹窗自动关闭
// @param afterClose {function} 关闭弹窗后的处理器
// @param autoDisableSubmit {boolean} 在提交时自动禁用提交（也可手动使用实例对象的disableSubmit方法禁用，enableSubmit方法启用）
var root = this,KFZ=root.KFZ;
root.KFZ = {
	ui:{
		PopWin:''
	}
};
KFZ.ui.PopWin = function(args){
	if(!(this instanceof arguments.callee)) return new arguments.callee(args);
	this.showOverlayWin(args);
	this.drag();
};
KFZ.ui.PopWin.prototype = {
	constructor: KFZ.ui.PopWin,
	// 打开实例窗口
	open: function(openArgs){
		openArgs && $.extend(this.args, openArgs);
		this.showOverlayWin(this.args);
	},
	// 显示弹窗
	showOverlayWin: function(args){
		$.extend(this, args);
		this.args = args || {};
		var that = this,
		// 遮罩层
				color = args.color,
				opacity = args.opacity,
		// 弹窗
				box = args.box || 'body',
				overWin = this.overWin = args.overWin || '#zx_overWin',
				overlay = this.overlay = args.overlay || '#zx_overlay',
				overTit = this.overTit = args.overTit === false ? false : args.overTit,
				overCon = args.overCon || '',
				submitBtn = this.submitBtn = overWin + ' ' + (args.submitBtn || '.subBtn'),
				cancelBtn = this.cancelBtn = overWin + ' ' + (args.cancelBtn || '.cancelBtn'),
				closeBtn = args.closeBtn || [overWin + ' .closeBtn a', this.cancelBtn],
				autoDisableSubmit = args.autoDisableSubmit,
				needTemplate = this.needTemplate === false ? false : true,
				hasSubmitBtn = this.hasSubmitBtn === false ? false : true,
				hasCancelBtn = this.hasCancelBtn === false ? false : true,
				hasCloseBtn = this.hasCloseBtn === false ? false : true,
				from = this.from = args.from,
				width = this.width = this.overWinWidth = args.width || args.overWinWidth || 480,
				closeOther = args.closeOther,
				onlyCloseWin = this.onlyCloseWin = args.onlyCloseWin || null,
		// 回调
				afterSubmit = this.afterSubmit = args.afterSubmit, // 点击确定按钮后执行的函数
				afterCancel = this.afterCancel = args.afterCancel,
				afterClose = this.afterClose = args.afterClose,
				afterOpen = this.afterOpen = args.afterOpen,
		// 其他设备
		//otherSet = this.otherSet = window.screen.width < $(window).width();
				userAgent = navigator.userAgent,
				otherSet = this.otherSet = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || (userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1);
		// 遮罩层
		this.setOverlay({box: box, color: color, opacity: opacity, overlay: overlay});
		// 弹窗+样式
		if (needTemplate) {
			this.setOverWin(overWin, overTit);
			//this.setStyle();
		}
		// 相关节点对象
		this.$overWin = $(overWin);
		this.$overTit = overTit === false ? null : this.$overWin.find('.overTit').length ? this.$overWin.find('.overTit') : this.$overWin.find('h3');
		this.$overCon = this.$overWin.find('.overWinText');
		// 初始化函数
		args.init && args.init(args);
		args.initialize && args.initialize(args);
		// 关闭其它overWin
		if (closeOther) $('.overTip').hide().removeClass('open');
		if (overTit && this.$overTit.length) this.$overTit.html(overTit);
		if (overCon && this.$overCon.length) this.$overCon.html(overCon);
		// 窗口来源
		if (from !== undefined || from !== null) this.$overWin.attr('from', from);
		// 操作弹窗
		var overWinHeight = this.$overWin.height();
		// 初始化弹窗宽度
		this.$overWin.width(width);
		// 打开后处理器
		setTimeout(function(){
			KFZ.ui.PopWin.resizeHandler = function(){
				that.resize();
			};
			// 窗口重置
			if(!otherSet) $(window).resize(KFZ.ui.PopWin.resizeHandler);
			// IE6 hack
			if(KFZ.util.isIE() === 6){
				window.PngFix && window.PngFix.fix(that.overWin + ' .closeBtn a');
				KFZ.ui.PopWin.resizeHandler();
				$(window).scroll(KFZ.ui.PopWin.resizeHandler);
			}
			that.resize();
			afterOpen && afterOpen.apply(that, arguments);
		});
		// 点击确定并执行相关操作
		submitBtn && afterSubmit && typeof afterSubmit === 'function' && $('body').undelegate(submitBtn + ':not(.disabled)', 'click').delegate(submitBtn + ':not(.disabled)', 'click', function(){
			if (autoDisableSubmit) that.disableSubmit();
			if (afterSubmit.call(that, this) === false) return;
			that.close();
		});
		// 点击取消
		cancelBtn && afterCancel && typeof afterCancel === 'function' && $('body').undelegate(cancelBtn + ':not(.disabled)', 'click').delegate(cancelBtn + ':not(.disabled)', 'click', function(){
			if (afterCancel.call(that, this) === false) return;
			that.close();
		});
		// 点击关闭并执行相关操作
		closeBtn && KFZ.util.multiObjRun(closeBtn, 'click', function(){
			that.close();
		});
		// ESC取消
		var escHandler = function(event){
			event.which === 27 && that.close();
		};
		$(document).unbind('keyup', escHandler).bind('keyup', escHandler);
	},
	// 生成遮罩层
	setOverlay: function(args){
		var box = args.box || 'body',
				color = args.color || '#000',
				opacity = args.opacity || 0.5,
				overlay = args.overlay || '#zx_overlay';
		if (!$(overlay).length) {
			$(box).append('<div id="' + overlay.replace(/#/, '') +'"></div>');
		}
		var overlayStyle = {
			'position': 'absolute',
			'z-index': '1000000',
			'left': '0',
			'top': '0',
			'background': color,
			'opacity': opacity,
			'-moz-opacity': opacity,
			'filter': 'alpha(opacity=' + opacity*100 + ')'
		};
		KFZ.ui.extendStyle(overlay, overlayStyle);
		$(overlay).width($(document).width()).height($(document).height()).show();
	},
	// 拖拽
	drag: function(){
		var d = document,
				win = d.getElementById(this.overWin.replace(/#/, '')),
				tit = win.getElementsByTagName('h3')[0],
				s = win.style, x, y;
		if(!tit) return;
		tit.onselectstart = function(){
			return false; //阻止选择
		};
		tit.onmousedown = function(e){
			e = e || event;
			x = e.clientX - win.offsetLeft;
			y = e.clientY - win.offsetTop;
			d.onmousemove = function(e){
				e = e || event;
				s.left = e.clientX - x + 'px';
				s.top = e.clientY - y + 'px';
			};
			d.onmouseup = function(){
				d.onmouseup = d.onmousemove = null;
			};
		};
	},
	// 生成弹窗
	setOverWin: function(overWin, overTit){
		if ($(overWin).length) return;
		var html =
				'<div id="' + overWin.replace(/#/, '') + '" class="overTip" style="display:none;">' +
				'<div class="overWin">' +
				(overTit === false ? '' : '<h3 class="overTit">' + (overTit || '') + '</h3>') +
				'<div class="overWinCon">' +
				'<div class="overWinText"></div>' +
				(this.hasSubmitBtn === false && this.hasCancelBtn === false ? '' :
				'<div class="overWinBtn">' +
				'<div class="overWinBtnBox">' +
				(this.hasSubmitBtn === false ? '' : '<a class="subBtn" href="javascript:;">' + KFZ.lang.kfz.confirm + '</a>') +
				(this.hasCancelBtn === false ? '' : '<a class="cancelBtn" href="javascript:;">' + KFZ.lang.kfz.abolish + '</a>') +
				'</div>' +
				'</div>') +
				'</div>' +
				(this.hasCloseBtn === false ? '' : '<div class="closeBtn"><a href="javascript:;" title="' + KFZ.lang.kfz.cancel + '"></a></div>') +
				'</div>' +
				'</div>';
		$('body').append(html);
	},
	// 生成样式
	setStyle: function(){
		if ($('#overWin_style').length) return;
		var styleHtml =
				'<style id="overWin_style">' +
				'.overTip,.overWin h3{padding:0;margin:0;}' +
				'.overWin{position:relative;width:408px;background:#fff;border:5px solid #999;}' +
				'.overWin .closeBtn{position:absolute;z-index:10;right:8px;top:8px;width:25px;height:25px;}' +
				'.overWin .closeBtn a{display:block;width:25px;height:25px;background:url(/images/bg_overWin_closeBtn.gif) -8px -8px no-repeat;}' +
				'.overWin .closeBtn a:hover{background:url(/images/bg_overWin_closeBtn.gif) -8px -48px no-repeat;}' +
				'.overWin h3{height:40px;background:#f9f9f9;border-bottom:1px solid #e5e5e5;line-height:40px;text-align:center;color:#999;font-size:16px;font-family:\5FAE\8F6F\96C5\9ED1;overflow:hidden;}' +
				'.overWin .overWinCon{position:relative;padding:10px 0 20px;background:url(/images/bg_overWin.gif) 0 bottom no-repeat;}' +
				'.overWin .overWinTextCon{min-height:70px;height:auto!important;_height:70px;line-height:50px;text-align:center;}' +
				'.overWin .overWinBtn{position:relative;padding:15px 0 0 90px;overflow:hidden;*zoom:1;}' +
				'.overWin .overWinBtn .one{padding-left:150px;}' +
				'.overWin .overWinBtn a{margin:0 10px;float:left;*display:inline;}' +
				'.overWin .disabled,.overWin .disabled:hover{display:block;background:#a2a2a2 url(/images/waiting.gif) center center no-repeat;line-height:25px;border-radius:3px;text-align:center;color:#fff;cursor:default;}' +
				'</style>';
		$('body').append(styleHtml);
	},
	// 重置窗口
	resize: function(){
		var overlay = this.overlay,
				overWin = this.overWin,
				width = this.width,
				otherSet = this.otherSet,
				overWinHeight;
		// 遮罩层尺寸
		$(overlay).width($(window).width()).height($(window).height())
				.width($(document).width()).height($(document).height());
		// 按窗口真实高度调整窗口高度
		var overWinRealHeight = $(overWin).css('height', 'auto').height();
		if(overWinRealHeight <= 100){
			if ($(window).height() - 30 < 100) {
				overWinHeight = $(window).height() - 30;
			}else{
				overWinHeight = 100;
			}
		}else{
			if($(window).height() - 30 < overWinRealHeight){
				overWinHeight = $(window).height() - 30;
			}else{
				overWinHeight = overWinRealHeight;
			}
		}
		// 定位
		var	newStyle = {
			'position': otherSet ? 'absolute' : 'fixed',
			'_position': 'absolute',
			'_overflow': 'visible',
			'z-index':'1000001',
			// 'left': ($(window).width() - width)/2 + 'px',
			// 'top': (($(window).height() - overWinHeight)/2 - 5) + 'px',
			'left': (otherSet ? document.body.scrollLeft + 10 + ((window.screen.width - width)/2 < 0 ? 0 : (window.screen.width - width)/2) : ($(window).width() - width)/2) + 'px',
			'top': (otherSet ? document.body.scrollTop + 10 : ($(window).height() - overWinHeight)/2 - 5) + 'px',
			'_top': $(window).scrollTop() + (($(window).height() - overWinHeight)/2 - 5) + 'px',
			'visibility': 'visible'
		};
		KFZ.ui.extendStyle(overWin, newStyle);
		// 显示窗口
		if(!$(overWin).hasClass('open')){
			$(overWin).slideDown('fast').addClass('open');
		}else{
			$(overWin).show();
		}
		return this;
	},
	// 禁用提交
	disableSubmit: function(){
		this.submitBtnText = $(this.submitBtn).text();
		$(this.submitBtn).addClass('disabled').empty();
		return this;
	},
	// 启用提交
	enableSubmit: function(){
		$(this.submitBtn).removeClass('disabled');
		!$(this.submitBtn).html() && this.submitBtnText && $(this.submitBtn).html(this.submitBtnText);
		return this;
	},
	// 关闭窗口及遮罩层
	// @param onlyCloseWin boolean 只关闭弹窗不关闭遮罩层
	// @param noDelay boolean 无关闭延迟（隐退）效果
	close: function(onlyCloseWin, noDelay){
		var that = this,
				overlay = this.overlay,
				overWin = this.overWin,
				afterClose = this.afterClose,
				type = 'fadeOut',
				speed = 'fast';
		if(noDelay){
			type = 'hide';
			speed = null;
		}
		if(!this.onlyCloseWin && !onlyCloseWin) $(overlay)[type](speed);
		$(overWin)[type](speed).removeClass('open');
		$(window).unbind('resize', KFZ.ui.PopWin.resizeHandler).unbind('scroll', KFZ.ui.PopWin.resizeHandler);
		afterClose && afterClose.apply(this, arguments);
		setTimeout(function(){
			that.enableSubmit.call(that);
		}, (speed ? 200 : 0));
		return this;
	}
};
