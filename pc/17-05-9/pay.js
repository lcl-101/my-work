/**
 * Created by zhousg on 2015/2/3.
 * 资金通用js
 */
 
$(function(){

	new NavView();
	
});


window.NavView = KFZ.View.extend({
	el: '#navBox',
	initialize: function(){
		var that = this;
		that.$el.length && that.setNav(that.navArr = $.trim($('body').attr('id') || '').replace(/^page_/i, '').split('_'));
		/*菜单显示*/
		if(KFZ.user.isCheckPhone == 1)$('[data-subnav="bindPhone"]').html('修改绑定手机');
		if(KFZ.user.isPayNewUser == 1 || KFZ.user.isSetQuestion != 1 )$('[data-subnav="question"]').remove();
		var $footer = $('#kfz_footer');
		$footer.length && !$footer.find('.foot_box').length && $footer.load('/include/footer.html');
	//	this.accessRight();
	},
	//访问权限
	accessRight: function(){
		if(KFZ.user.isMustCheckPhone === 1 && /\/account\/bindPhone\.html/.test(window.location.href) === false){
			window.location.href="/account/bindPhone.html";
		}
	},
	setNav: function($topnav, navArr){
		if($.isArray($topnav)){
			navArr = $topnav;
			$topnav = null;
		}
		if(!($topnav && $topnav.length) && !(navArr && navArr[0])){
			this.$el.find('.nav_bg').removeClass('p_b').find('li[data-topnav]').removeClass('now');
			return;
		}
		navArr || (navArr = []);
		$topnav || ($topnav = this.$el.find('li[data-topnav="' + navArr[0] + '"]'));
		$topnav.addClass('now').siblings('li').removeClass('now');
		this.$el.find('.nav_bg')[$topnav.find('.money_list').length ? 'addClass' : 'removeClass']('p_b');
		navArr[1] && this.$el.find('a[data-subnav="' + navArr[1] + '"]').addClass('now').siblings('a').removeClass('now');
	},
	events: {
		'mouseenter li': 'showSubNav',
		'mouseleave li': 'hideSubNav'
	},
	showSubNav: function(event){
        clearTimeout(KFZ.page.timer_nav);
		var $this = $(event.currentTarget),
			topnav = $this.attr('data-topnav');
		this.setNav($this);
	},
	hideSubNav: function(event){
       //this.setNav(null, this.navArr);
        var that = this;
        KFZ.page.timer_nav = setTimeout(function(){
            that.setNav(null, that.navArr);
        },300)

	}
	
});


// 适配url-非线上环境
// 登录url
KFZ.common.turnLogin = function(){
    var location = window.location,
        hash = KFZ.url.getHash(),
        href = location.href.replace(/#[\w-\/]*/gi, '').replace(/\?returnUrl=.*$/, '');
    href = '?' + 'mustLogin=1&returnUrl=' + encodeURIComponent(href + (hash ? (/\?/.test(href) ? '&' : '?' ) + 'hash=' + hash : ''));
    KFZ.sites.adapter && (location.href = KFZ.common.loginHref = KFZ.sites.adapter.login + href);
};

// 页面url适配处理器
KFZ.common.adaptUrl = function(box){
    if(KFZ.url.rootType !== 'online' && KFZ.sites.adapter){
        var $box = typeof (box || (box = 'body')) === 'object' ? box : $(box),
            onlineSites = KFZ.sites.online,
            adapterSites = KFZ.sites.adapter,
            $links = $box.find('[href^="http"],img[src^="http"]');
        $links.length && $.each($links, function(){
            var $this = $(this),
                attr = $this.attr('href') ? 'href' : 'src',
                link = $this.attr(attr),
                matches = /(https*:\/\/\w+(\.\w+)+\/)(.*)/gi.exec(link);
            if(!matches) return;
            var len = matches.length,
                root = matches[1],
                url = matches[3] || '';
            root && $.each(onlineSites, function(site, val){
                if(root === val){
                    $this.attr(attr, adapterSites[site] + url);
                    return false;
                }
            });
        });
    }
};

// 加载WebIM
KFZ.common.loadWebIM = function(delay, ver){
    if(!KFZ.sites || !KFZ.sites.adapter) return;
    delay || (delay = 5000);
    ver || (ver = '2');
    setTimeout(function(){
        KFZ.$ || (KFZ.$ = jQuery);
        var urlWebimCss = KFZ.sites.adapter.xiaoxi + 'css/im/main.css?_=' + ver,
            urlWebimJs = KFZ.sites.adapter.xiaoxi + 'js/webim_core.js?_=' + ver;
        var document = window.document,
            body = document.body,
            css = document.createElement('link'),
            script = document.createElement('script');
        css.rel = 'stylesheet';
        css.type = 'text/css';
        css.href = urlWebimCss;
        body.appendChild(css);
        script.type = 'text/javascript';
        script.src = urlWebimJs;
        body.appendChild(script);
    }, delay);
};

// 视图渲染后主动触发WebIM
KFZ.common.updateWebIM = function(len, index){
    if(typeof len === 'undefined' || (len && typeof index !== 'undefined' && index === len - 1)){
        window.$Webim && new $Webim.contact().updateOnlineState();
    }
};

// 设置验证正确/错误提示
KFZ.common.setCheckTip = function(el, type, tip, callback){
    var $el = typeof el === 'object' ? el : $(el);
    $el = $el.hasClass('check_tip') ? $el : $el.find('.check_tip');
    type || (type = '2');
    if($el.length){
        if(type === '0'){
            var $tipErr = $el.removeClass('check_tip_suc').removeClass('check_tip_info').addClass('check_tip_err').find('.tip_err');
            tip && $tipErr.text(tip);
        }else if(type === '1'){
            var $tipSuc = $el.removeClass('check_tip_err').removeClass('check_tip_info').addClass('check_tip_suc').find('.tip_suc');
            tip && $tipSuc.text(tip);
        }else if(type === '2'){
            var $tipBox = $el.removeClass('check_tip_suc').removeClass('check_tip_err'),
				$tipInfo = $tipBox.find('.tip_info'),
				hasTip = tip || $tipInfo.text();
			tip && $tipInfo.text(tip);
			hasTip && $tipBox.addClass('check_tip_info');
        }
        callback && callback($el);
    }
};

// 清理验证提示
KFZ.common.clearCheckTip = function(el, callback){
    KFZ.common.setCheckTip(el, '2', '', callback);
};

// 验证时间格式
KFZ.common.checkTime = function(val, condition, errTip, setErr, setSuc){
    if((condition !== 'ifAny' || val) && (val !== '不详' && !/^\d{4}([-\.\/](0*[1-9]|1[0-2])){0,1}$/.test(val))) return setErr ? (!setErr(errTip)) : false;
    setSuc && setSuc();
};

// 格式化时间
// @param numTime {int} 数字（秒）时间
KFZ.common.getFullTime = function(numTime, connector){
    if(!numTime || isNaN(numTime) || +numTime <= 0) return '';
    numTime = new Date((+numTime)*1000 + 28800000);
    connector || (connector = '-');
    var Y = numTime.getUTCFullYear(),
        M = (numTime.getUTCMonth()+1)+'',
        D = numTime.getUTCDate()+'',
        h = numTime.getUTCHours()+'',
        m = numTime.getUTCMinutes()+'',
        s = numTime.getUTCSeconds()+'';
    return Y + connector + (M.length == 2 ? M : '0' + M) + connector + (D.length == 2 ? D : '0' + D) + ' ' + (h.length == 2 ? h : '0' + h) + ':' + (m.length == 2 ? m : '0' + m) + ':' + (s.length == 2 ? s : '0' + s);
};

// 地区三级下拉框
// @param boxs object 省/市/县三级下拉框选择器组成的对象，缺省使用{province: '#province', city: '#city', county: '#county', posParents: []}
// @param currents object {province: {attrid: 123, name: '省'}, city: {attrid: 1230, name: '市'}, county: {attrid: 12300, name: '县'}, width: 140, noCity: false, noCounty: false}
// @param afterItemClick function 点击选项以后的处理器
KFZ.common.AreaSelect = function(boxs, currents, afterItemClick){
    // 实例化
    if (!(this instanceof arguments.callee)) return new arguments.callee(boxs, currents, afterItemClick);
    // 参数-下拉框容器
    boxs || (boxs = {});
    this.provinceBox = boxs.province || '#province';
    this.cityBox = boxs.city || '#city';
    this.countyBox = boxs.county || '#county';
    this.posParents = boxs.posParents || [];
    // 参数-初始赋值
    currents || (currents = {});
    this.province = currents.province || null;
    this.city = currents.city || null;
    this.county = currents.county || null;
    this.provinceWidth = currents.provinceWidth;
    this.cityWidth = currents.cityWidth;
    this.countyWidth = currents.countyWidth;
    this.width = currents.width;
    this.noCity = currents.noCity;
    this.noCounty = currents.noCounty;
    // 参数-点选回调
    this.afterItemClick = afterItemClick;
    // 初始化
    this.init();
};
KFZ.common.AreaSelect.prototype = {
    constructor: KFZ.common.AreaSelect,
    // 初始化
    init: function(){
        $(this.cityBox + ',' + this.countyBox).hide();
        this.setProvince();
        this.setCity();
        this.setCounty();
    },
    // 省份下拉框
    setProvince: function(){
        var that = this;
        this.provinceSelect ? this.provinceSelect.reload() : this.provinceSelect = new KFZ.ui.SelectBox({
            box: that.provinceBox,
            width: that.provinceWidth || that.width,
            posParents: that.posParents,
            getItems: function($selectCon, callback){
                var area = this;
                // 获取省份选项
                that.getSelectItems(area, {
                    c: 'ajax',
                    a: 'getArea'
                }, {
                    beforeGet: function(){
                        area.items = area.items || [];
                        // 取内存数据
                        if(area.items.length > 1){
                            area.renderItems($selectCon, area.items);
                            return true;
                        }else{
                            return false;
                        }
                    },
                    beforeRender: function(items){
                        area.items = items;
                    }
                }, callback);
            },
            autoGetItems: true,
            itemClick: function($selectItem, $thisBox){
                if(that.noCity) return;
                KFZ.common.areaItemClick = true;
                var attrid = $selectItem.attr('attrid');
                if(!attrid){
                    that.citySelect.hide().reset();
                    that.countySelect.hide().reset();
                    return;
                }
                !$(that.cityBox + ' .selectTit').length && that.citySelect.reload();
                if(that.citySelect.provinceId != attrid){
                    $(that.cityBox + ' .selectTit').siblings('.selectCon').empty();
                    that.citySelect.reset();
                    that.citySelect.provinceId = attrid;
                    that.citySelect.getItems($(that.cityBox + ' .selectCon'), null);
                    that.countySelect.hide().reset();
                }else{
                    that.citySelect.getItems($(that.cityBox + ' .selectCon'), null);
                    that.citySelect.show();
                }
            },
            afterItemClick: function($selectItem, $thisBox){
                that.afterItemClick && that.afterItemClick.call(that, $selectItem, $thisBox);
            },
            currentItemClass: 'curr',
            defaultItem: this.province
        });
    },
    // 城市下拉框
    setCity: function(){
        var that = this;
        this.citySelect ? this.citySelect.reload() : this.citySelect = new KFZ.ui.SelectBox({
            box: that.cityBox,
            width: that.cityWidth || that.width,
            posParents: that.posParents,
            getItems: function($selectCon, callback){
                var area = this;
                // 获取城市选项
                that.getSelectItems(area, {
                    c: 'ajax',
                    a: 'getArea',
                    type: 1,
                    provinceId: area.provinceId
                }, {
                    errTip: KFZ.lang.pm.selectProvince,
                    beforeGet: function(){
                        area.items = area.items || {};
                        var provinceId = area.provinceId;
                        if(!provinceId){
                            KFZ.ui.alertWin({result: 0, text: (this.errTip || KFZ.lang.pm.selectSuperArea)});
                            return true;
                        }
                        // 取内存数据
                        if(area.items[provinceId] && area.items[provinceId].length){
                            if(area.items[provinceId].length > 1){
                                area.renderItems($selectCon, area.items[provinceId]);
                                area.show();
                            }else{
                                area.hide().reset();
                                that.countySelect.hide().reset();
                            }
                            return true;
                        }else{
                            return false;
                        }
                    },
                    beforeRender: function(items){
                        var provinceId = area.provinceId;
                        area.items[provinceId] = items;
                        if(items.length > 1){
                            area.show();
                        }else{
                            that.countySelect.hide().reset();
                        }
                    }
                }, callback);
            },
            itemClick: function($selectItem, $thisBox){
                if(that.noCounty) return;
                KFZ.common.areaItemClick = true;
                var attrid = $selectItem.attr('attrid');
                if(!attrid){
                    that.countySelect.hide().reset();
                    return;
                }
                !$(that.countyBox + ' .selectTit').length && that.countySelect.reload();
                if(that.countySelect.cityId != attrid){
                    $(that.countyBox + ' .selectTit').siblings('.selectCon').empty();
                    that.countySelect.reset();
                    that.countySelect.cityId = attrid;
                }
                that.countySelect.getItems($(that.countyBox + ' .selectCon'), null);
            },
            afterItemClick: function($selectItem, $thisBox){
                that.afterItemClick && that.afterItemClick.call(that, $selectItem, $thisBox);
            },
            currentItemClass: 'curr',
            defaultItem: this.city,
            afterInit: function(){
                // 设置上级地区
                if(that.province && that.province.attrid){
                    this.provinceId = that.province.attrid;
                }
                // 显示
                that.city && this.show();
            }
        });
    },
    // 县区下拉框
    setCounty: function(){
        var that = this;
        this.countySelect ? this.countySelect.reload() : this.countySelect = new KFZ.ui.SelectBox({
            box: that.countyBox,
            width: that.countyWidth || that.width || 222,
            posParents: that.posParents,
            getItems: function($selectCon, callback){
                var area = this;
                // 获取城市选项
                that.getSelectItems(area, {
                    c: 'ajax',
                    a: 'getArea',
                    type: 2,
                    cityId: area.cityId
                }, {
                    errTip: KFZ.lang.pm.selectCity,
                    beforeGet: function(){
                        area.items = area.items || {};
                        area.callback = callback;
                        var cityId = area.cityId;
                        if(!cityId){
                            KFZ.ui.alertWin({result: 0, text: (this.errTip || KFZ.lang.pm.selectSuperArea)});
                            return true;
                        }
                        // 取内存数据
                        if(area.items[cityId] && area.items[cityId].length){
                            if(area.items[cityId].length > 1){
                                area.renderItems($selectCon, area.items[cityId]);
                                area.show();
                            }else{
                                area.hide().reset();
                            }
                            return true;
                        }else{
                            return false;
                        }
                    },
                    beforeRender: function(items){
                        var cityId = area.cityId;
                        area.items[cityId] = items;
                        if(items.length > 1){
                            area.show();
                        }else{
                            area.hide().reset();
                        }
                    }
                }, callback);
            },
            itemClick: function($selectItem, $thisBox){
                KFZ.common.areaItemClick = true;
            },
            afterItemClick: function($selectItem, $thisBox){
                that.afterItemClick && that.afterItemClick.call(that, $selectItem, $thisBox);
            },
            currentItemClass: 'curr',
            defaultItem: this.county,
            afterInit: function(){
                // 设置上级地区
                if(that.city && that.city.attrid){
                    this.cityId = that.city.attrid;
                }
                // 显示
                that.county && this.show();
            }
        });
    },
    // 获取地区下拉框选项
    getSelectItems: function(select, params, options, callback){
        var stop;
        options && options.beforeGet && (stop = options.beforeGet());
        if(stop){
            callback && callback();
            return;
        }
        KFZ.common.areaRequest && KFZ.common.areaItemClick && KFZ.common.areaRequest.abort();
        KFZ.common.areaRequest = KFZ.ajax.Get({
            url: KFZ.url.host + 'ajax/getArea/',
            data: params,
            success: function(data){
                KFZ.common.areaRequest = null;
                KFZ.common.areaItemClick = false;
                var items = data;
                if(items.length){
                    $.each(items, function(){
                        this.attrid = this.id;
                        this.name = this.simple || this.name;
                    });
                    items.unshift({id: '', name: KFZ.lang.pm.select});
                }else{
                    items.unshift({id: '', name: KFZ.lang.pm.noRecord});
                }
                options && options.beforeRender && options.beforeRender(items);
                select.renderItems(items);
                callback && callback();
            },
            fail: function(errMsg){
                KFZ.common.areaRequest = null;
                KFZ.common.areaItemClick = false;
                $(select.box).html('<div class="selectItem errItem">' + KFZ.lang.pm.getItemsFail + '</div>');
                callback && callback();
            },
            error: function(errMsg){
                KFZ.common.areaRequest = null;
                KFZ.common.areaItemClick = false;
                $(select.box).html('<div class="selectItem errItem">' + KFZ.lang.pm.getItemsErr + '</div>');
                callback && callback();
            }
        });
    }
};

// 获取资金类别
KFZ.common.getBizType = function(code){
	var bizType = {
		'0': '批量付款',
		'1': '店铺订单',
		'2': '拍卖交易',
		'3': '店铺订单退款',
		'4': '拍卖交易退款',
		'5': '店铺交易费',
		'6': '店铺违约赔付',
		'7': '拍卖买方佣金扣除',
		'8': '拍卖卖方佣金扣除',
		'9': '投诉赔付',
		'91': '投诉赔付',
		'92': '投诉赔付',
		'10': '申赔赔付',
		'11': '店铺违规罚金扣除',
		'12': '店铺技术服务费',
		'13': '担保金',
		'14': '拍卖流拍费',
		'15': '拍卖预展费',
		'16': '充值',
		'17': '转账',
		'18': '提现',
		'19': '其他',
		'20': '充值回退'
	};
	return code && bizType[code] || '';
};

// 根据资金类别获取业务类型
KFZ.common.getCodeType = function(bizType){
	var codeType = {
		'0': {name: '其他', detail: '', url: ''},
		'1': {name: '订单', detail: '订单', url: KFZ.sites.adapter.shop + 'interface/order/detail/?orderId='},
		'2': {name: '交易', detail: '交易', url: KFZ.sites.adapter.pm + 'interface/trade/detail/?tradeId='},
		'3': {name: '订单', detail: '订单', url: KFZ.sites.adapter.shop + 'interface/order/detail/?orderId='},
		'4': {name: '交易', detail: '交易', url: KFZ.sites.adapter.pm + 'interface/trade/detail/?tradeId='},
		'5': {name: '订单', detail: '订单', url: KFZ.sites.adapter.shop + 'interface/order/detail/?orderId='},
		'6': {name: '订单', detail: '订单', url: KFZ.sites.adapter.shop + 'interface/order/detail/?orderId='},
		'7': {name: '拍品', detail: '拍品', url: KFZ.sites.adapter.pm},
		'8': {name: '拍品', detail: '拍品', url: KFZ.sites.adapter.pm},
		
		'91': {name: '订单', detail: '订单', url: KFZ.sites.adapter.shop + 'interface/order/detail/?orderId='},
		'92': {name: '拍品', detail: '拍品', url: KFZ.sites.adapter.pm},
		'10': {name: '', detail: '申赔', url: KFZ.sites.adapter.tousu + 'member/complaints_admin/manage_complaint.php?act=viewPubPayInfo&id='},
		'11': {name: '', detail: '违规', url: KFZ.sites.adapter.user + 'info/illegal_info.html?'},
		'12': '',
		'13': '',
		'14': {name: '拍品', detail: '拍品', url: KFZ.sites.adapter.pm},
		'15': {name: '预展', detail: '预展', url: KFZ.sites.adapter.pm + 'pre_show/'},
		'16': '',
		'17': {name: '', detail: '转账', url: 'javascript:;'},
		'18': '',
		'19': {name: '相关', detail: '', url: ''},
		'20': ''
	};
	return bizType && codeType[bizType] || '';
};

// 获取支付渠道
KFZ.common.getPayChannel = function(code){
    var payChannel = {
        "0": "资金账户",
        "1": "中国银行",
        "2": "交通银行",
        "3": "支付宝",
        "4": "工商银行",
        "5": "建设银行",
        "6": "招商银行",
        "7": "农业银行",
        "8": "邮储银行",
        "9": "中信银行",
        "10": "浦发银行",
        "11": "广发银行",
        "12": "光大银行",
        "13": "兴业银行",
        "14": "平安银行",
        "15": "民生银行",
        "16": "杭州银行",
        "17": "移动充值卡",
        "18": "邮政商务汇款",
        "21": "农业银行",
        "22": "工商银行",
        "23": "建设银行",
        "24": "中国银行",
        "25": "光大银行",
        "26": "平安银行",
        "27": "平安银行",
        "28": "支付宝",
        "29": "联通充值卡",
        "30": "电信充值卡",
        "31": "北京银行",
        "32": "富滇银行",
        "33": "上海银行",
        "34": "宁波银行",
        "35": "微信支付",
        "36": "支付宝",
        "37": "中国银行",
        "38": "工商银行",
        "39": "建设银行",
        "40": "招商银行",
        "41": "邮政储蓄银行",
        "42": "浦发银行",
        "43": "广发银行",
        "44": "平安银行",
        "46": "上海农商银行",
        "47": "温州银行",
        "48": "北京农商银行",
        "49": "微信网页扫码支付",
        "50": "微信公众号网页支付",
        "51": "支付宝WAP",
        "52": "京东支付"
    };
    return code && payChannel[code] || '';
};

// 获取冻结处理状态
KFZ.common.getDrawHhandleStatus = function(code){
    var drawHhandleStatus = {
        "notVerified": "待处理",
        "waitToHandle": "待处理",
        "handling": "银行处理中",
        "invalid": "提现失败",
        "handledSuccess": "提现成功"
    };
    return code && drawHhandleStatus[code] || '';
};
// 获取转账处理状态
KFZ.common.getTransHandleStatus = function(code){
	var transHandleStatus = {
		"notVerified": "待审核",
        "cancelled": "用户取消",
        "invalid": "无效申请",
        "handledSuccess": "处理成功"
	};
	return code && transHandleStatus[code] || '';
};

// 获取付款方式
KFZ.common.getPaymentType = function(code){
	var paymentType = {
		'midpay': '中介保护',
		'quickpay': '即时到账'
	};
	return code && paymentType[code] || '';
};

// 获取银行
KFZ.common.getDrawAcctType = function(code){
	var drawAcctType = {
		'101': '中国工商银行',
		'103': '中国农业银行',
		'102': '中国建设银行',
		'104': '交通银行',
		'106': '招商银行',
		'100': '中国银行',
		'108': '中国邮政储蓄银行',
		'105': '中信银行',
		'110': '上海浦东发展银行',
		'111': '广东发展银行',
		'112': '深圳发展银行',
		'113': '兴业银行',
		'114': '中国民生银行',
        '117': '上海银行',
        '118': '宁波银行',
        '119': '杭州银行',
		'1': '支付宝'
	};
	return code && drawAcctType[code] || '';
};

// 获取付款状态
KFZ.common.getMidpayStatus = function(code){
	var midpayStatus = {
		'notPayToSite': '未付款',
		'payedToSite': '中介保护账户中',
		'payToSeller': '已到账',
		'returnToBuyer': '已全额退款',
		'returnPartToBuyer': '已部分退款'
	};
	return code && midpayStatus[code] || '';
};

// 获取转账类别
KFZ.common.getTransferType = function(code){
	var transferType = {
		'usersTransfer': '用户间转账',
		'bgFundsAdjust': '后台资金调整',
		'applyTransToSite': '向网站申请转账'
	};
	return code && transferType[code] || '';
};

KFZ.common.getCost = function(n,amount){
    var price = KFZ.util.setPrice(n);
    var priceFloat = parseFloat(price);
    if(priceFloat === 0){
        return '0.01';
    }else if(priceFloat > 0){
        if(!isNaN(amount) && priceFloat === amount){
            return KFZ.util.setPrice(amount + 0.01);
        }else{
            return price;
        }
    }else{
       return price;
    }
}

