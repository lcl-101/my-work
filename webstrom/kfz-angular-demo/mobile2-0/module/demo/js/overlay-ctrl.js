/*
 *  弹窗控制器
 *
 * */
var overlayController = angular.module('overlay.controller',[]);
//拍卖竞价控制器
overlayController.controller('overlayBiddingController',function($scope,$modalInstance,overlay,auction,items,handelError,sites){


	$scope.init = function(){
		$scope.itemId = items.itemId,		//获取拍品ID
			$scope.bidInfo = {}; 				//竞价的相关的信息
		$scope.bid_tab = true; 				//true常规竞价			false代理竞价
		$scope.agentType = true; 			//true设置代理竞价			false修改代理竞价
		$scope.bidding = false;				//true正在发送竞价请求		false未发送竞价请求
		$scope.bidTip = false;				//true显示价格弹层			false隐藏价格弹层
		$scope.agentBidTip = false;			//true显示价格弹层			false隐藏价格弹层
		$scope.bidPrice = '';				//常规竞价价格
		$scope.agentBidPrice = '';			//代理竞价价格
		$scope.bidTipList = [];				//常规价格弹层数据
		$scope.agentBidTipList = [];		//代理价格弹层数据
		$scope.sites = sites;				//站点配置
		$scope.bidLoading = true;
	}

	$scope.getItemInfo = function(){
		auction.getItemInfo({
			itemId:$scope.itemId
		},function(bidInfo){
			$scope.bidLoading = false;
			$scope.bidInfo = bidInfo;
			$scope.bidInfo.itemId = $scope.itemId;
			if($scope.bidInfo.agentPrice>0){
				$scope.bid_tab = false;
				$scope.agentType = false;
			}else{
				$scope.bid_tab = true;
			}
			//设置竞价框
			$scope.initPrice();
		})
	}


	$scope.init();
	$scope.getItemInfo();

	//去充值链接
	$scope.goFill = function() {
		$modalInstance.close('close');
		var url = $scope.sites.mpays + '#/fill';
		location.href = url;
	}

	//拍卖相关规则
	$scope.goHelp = function() {
		$modalInstance.close('close');
		var url = $scope.sites.help + '?act=list&catId=6000000';
		location.href = url;
	}

	//打开常规价格快速选择窗口
	$scope.openBidTip = function(){
		$scope.bidTip = !$scope.bidTip;
		$scope.setPrice();
	}
	//选择常规弹层价格
	$scope.setBidPrice = function(price){
		$scope.bidPrice = price;
		$scope.bidTip = false;
	}
	//打开代理价格快速选择窗口
	$scope.openAgentBidTip = function(){
		$scope.agentBidTip = !$scope.agentBidTip;
		$scope.setPrice();
	}
	//选择常规弹层价格
	$scope.setAgentBidPrice = function(price){
		$scope.agentBidPrice = price;
		$scope.agentBidTip = false;
	}



	//TAB切换1
	$scope.tab_1 = function(){
		$scope.bid_tab = true;
		$scope.bidTip = false;
		$scope.initPrice();
	}
	//TAB切换2
	$scope.tab_2 = function(){
		$scope.bid_tab = false;
		$scope.agentBidTip = false;
		$scope.initPrice();
	}
	//常规竞买减价
	$scope.cutBidPrice = function(){
		$scope.cutPrice('bidPrice');
	}
	//常规竞买加价
	$scope.incBidPrice = function(){
		$scope.incPrice('bidPrice');
	}
	//代理竞买减价
	$scope.cutAgentBidPrice = function(){
		$scope.cutPrice('agentBidPrice');
	}
	//代理竞买加价
	$scope.incAgentBidPrice = function(){
		$scope.incPrice('agentBidPrice');
	}
	//减价
	$scope.cutPrice = function(type){
		$scope.dispose(type,'cut');
	}
	//加价
	$scope.incPrice = function(type){
		$scope.dispose(type,'inc');
	}
	//设置价格初始值
	$scope.initPrice = function(){
		if($scope.bidInfo.maxPrice>0){
			if($scope.bid_tab){
				$scope.bidPrice = $scope.bidInfo.maxPrice+$scope.bidInfo.minAddPrice;
			}else{
				//有代理出价
				if($scope.bidInfo.agentPrice>0){
					$scope.agentBidPrice = $scope.bidInfo.agentPrice;
				}else{
					$scope.agentBidPrice = $scope.bidInfo.maxPrice+$scope.bidInfo.minAddPrice*2;
				}
			}
		}else{
			if($scope.bid_tab){
				$scope.bidPrice = $scope.bidInfo.beginPrice;
			}else{
				$scope.agentBidPrice = $scope.bidInfo.beginPrice+$scope.bidInfo.minAddPrice*2;
			}
		}
	}
	//取得最近符合价阶的出价
	$scope.getMinAddBidPrice = function(){
		var price = 0;
		if($scope.bidInfo.maxPrice>0){
			if($scope.bid_tab){
				price = $scope.bidInfo.maxPrice+$scope.bidInfo.minAddPrice;
			}else{
				//有代理出价
				if($scope.bidInfo.agentPrice>0){
					price = $scope.bidInfo.agentPrice;
				}else{
					price = $scope.bidInfo.maxPrice+$scope.bidInfo.minAddPrice*2;
				}
			}
		}else{
			if($scope.bid_tab){
				price = $scope.bidInfo.beginPrice;
			}else{
				price = $scope.bidInfo.beginPrice+$scope.bidInfo.minAddPrice*2;
			}
		}
		return price;
	}
	//设置最近符合价阶的出价
	$scope.setPrice = function(){//设置3个推荐值
		if($scope.bid_tab){
			var price = $scope.bidPrice?$scope.bidPrice:0;
			//不符合价阶，按照最近价阶设置
			if ((price - $scope.bidInfo.beginPrice) % $scope.bidInfo.minAddPrice) {
				price = $scope.getMinAddBidPrice();
			}
			for(var i=0;i<3;i++){
				$scope.bidTipList[i] = price+($scope.bidInfo.minAddPrice*i);
			}
		}else{
			var price = $scope.agentBidPrice?$scope.agentBidPrice:0;
			//不符合价阶，按照最近价阶设置
			if ((price - $scope.bidInfo.beginPrice) % $scope.bidInfo.minAddPrice) {
				price = $scope.getMinAddBidPrice();
			}
			for(var i=0;i<3;i++){
				$scope.agentBidTipList[i] = price+($scope.bidInfo.minAddPrice*(i+1));
			}
		}
	}

	//处理价格
	$scope.dispose = function(item,type){
		var price = $scope[item];
		//不符合价阶，按照最近价阶设置
		if ((price - $scope.bidInfo.beginPrice) % $scope.bidInfo.minAddPrice) {
			price = $scope.getMinAddBidPrice();
		}
		if (type == 'cut') {
			$scope[item] = price - parseInt($scope.bidInfo.minAddPrice);
			if ($scope[item] <= 0) {
				$scope[item] = $scope.bidInfo.beginPrice;
			}
		} else if (type == 'inc') {
			$scope[item] = price + parseInt($scope.bidInfo.minAddPrice);
		}
	}


	/**
	 * 常规出价
	 */
	$scope.bid = function(){
		if($scope.bidding){
			return;
		}
		$scope.bidding = true;
		if($scope.verifyParams('bid')){
			$scope.postBid('normalBid','bidPrice');
		}
	}

	/**
	 * 代理出价
	 */
	$scope.setAgentBid = function(){
		if($scope.bidding){
			return;
		}
		$scope.bidding = true;
		if($scope.verifyParams('agentBid')){
			$scope.postBid('agentBid','agentBidPrice');
		}
	}
	$scope.editAgentBid = function(){
		if($scope.bidding){
			return;
		}
		$scope.bidding = true;
		if($scope.verifyParams('updateAgentBid')){
			$scope.postBid('updateAgentBid','agentBidPrice');
		}
	}


	//出价
	$scope.postBid = function(bidType,bidPrice){
		auction.bid({
			itemId: $scope.bidInfo.itemId,
			price: $scope[bidPrice],
			bidType: bidType
		}, function() {
			switch (bidType) {
				case 'agentBid':
					overlay.overlayAutoTip('代理价设置成功', 1500);
					break;
				case 'noStart':
					overlay.overlayAutoTip('修改代理价成功', 1500);
					break;
				default:
					overlay.overlayAutoTip('出价成功', 1500);
					break;
			}
			$scope.bidding = false;
			//关闭窗口通知出价完成
			$modalInstance.close('bidSucc');
		}, function() {
			$scope.bidding = false;
		})
	};


	//审核出价信息
	$scope.verifyParams = function(type,pass){
		var userConfirm = false;
		switch (type) {
			case 'bid':
				if($scope.verifyParamSteep('bidPrice') || pass){
					if($scope.bidInfo.maxPrice>0 && $scope.bidInfo.maxPrice > $scope.bidPrice-$scope.bidInfo.minAddPrice){
						handelError(0,'竞拍价格必须大于等于'+($scope.bidInfo.maxPrice+$scope.bidInfo.minAddPrice)+'元！');
						$scope.bidding = false;
						userConfirm = false;
					}else{
						//常规出价大于2个价阶
						var basePrice = $scope.bidInfo.maxPrice>0?$scope.bidInfo.maxPrice:$scope.bidInfo.beginPrice;
						if($scope.bidInfo.maxPrice>0){
							if($scope.bidPrice>=basePrice+$scope.bidInfo.minAddPrice*2){
								overlay.overlayConfirmTip({
									title :'您使用的是常规竞买，您的竞拍价：'+$scope.bidPrice+'元。点击确定继续出价',
									confirmFn : function(){
										$scope.postBid('normalBid','bidPrice');
									},
									closeFn : function(){
										$scope.bidding = false;
									}
								});
							}else{
								userConfirm = true;
							}
						}else{
							if($scope.bidPrice>=basePrice+$scope.bidInfo.minAddPrice){
								overlay.overlayConfirmTip({
									title :'您使用的是常规竞买，您的竞拍价：'+$scope.bidPrice+'元。点击确定继续出价',
									confirmFn : function(){
										$scope.postBid('normalBid','bidPrice');
									},
									closeFn : function(){
										$scope.bidding = false;
									}
								});
							}else{
								userConfirm = true;
							}
						}
					}
				}
				break;
			case 'agentBid':
				if($scope.verifyParamSteep('agentBidPrice') || pass){
					if($scope.bidInfo.maxPrice>0 && $scope.bidInfo.maxPrice > $scope.agentBidPrice-2*$scope.bidInfo.minAddPrice){
						handelError(0,'代理价必须大于等于'+($scope.bidInfo.maxPrice+2*$scope.bidInfo.minAddPrice)+'元！');
						$scope.bidding = false;
						userConfirm = false;
					}else{
						userConfirm = true;
					}
				}
				break;
			case 'updateAgentBid':
				if($scope.verifyParamSteep('agentBidPrice') || pass){
					if($scope.bidInfo.agentPrice>0 && $scope.bidInfo.agentPrice >= $scope.agentBidPrice){
						handelError(0,'修改后的代理价必须大于等于'+($scope.bidInfo.agentPrice+$scope.bidInfo.minAddPrice)+'元！');
						$scope.bidding = false;
						userConfirm = false;
					}else{
						userConfirm = true;
					}
				}
				break;
		}
		return userConfirm;
	}

	//审核出价按步骤执行
	$scope.verifyParamSteep = function(type){
		var userConfirm = true;
		if (!/^\d+$/.test($scope[type])) {
			overlay.overlayAutoTip('请正确输入价格', 1500);
			$scope.bidding = false;
			userConfirm = false;
		}
		//判断价阶
		if (($scope[type] - $scope.bidInfo.beginPrice) % $scope.bidInfo.minAddPrice) {
			userConfirm = false;
			//取最近出价
			if(type === 'bidPrice'){//常规出价
				if($scope.bidInfo.maxPrice > 0){//有人出价
					if($scope[type] < $scope.bidInfo.maxPrice){//出价小于当前价
						var confirmPrice = $scope.bidInfo.maxPrice+$scope.bidInfo.minAddPrice;
						overlay.overlayAutoTip('竞拍价格必须大于等于'+confirmPrice+'元！',1500);
						$scope.bidding = false;
						return;
					}else{
						var confirmPrice = $scope[type] - ($scope[type] - $scope.bidInfo.beginPrice) % $scope.bidInfo.minAddPrice + $scope.bidInfo.minAddPrice;
					}
				}else{//无人出价
					if($scope[type] < $scope.bidInfo.beginPrice){
						var confirmPrice = $scope.bidInfo.beginPrice;
						overlay.overlayAutoTip('竞拍价格必须大于等于'+confirmPrice+'元！',1500);
						$scope.bidding = false;
						return;
					}else{
						var confirmPrice = $scope[type] - ($scope[type] - $scope.bidInfo.beginPrice) % $scope.bidInfo.minAddPrice + $scope.bidInfo.minAddPrice;
					}
				}
			}else{//代理出价
				if($scope.bidInfo.maxPrice > 0){//有人出价
					if($scope.bidInfo.agentPrice > 0){//已设置代理价
						if($scope[type] < $scope.bidInfo.agentPrice + $scope.bidInfo.minAddPrice){
							var confirmPrice = $scope.bidInfo.agentPrice + $scope.bidInfo.minAddPrice;
							overlay.overlayAutoTip('修改后的代理价必须大于等于'+confirmPrice+'元！',1500);
							$scope.bidding = false;
							return;
						}else{
							var confirmPrice = $scope[type] - ($scope[type] - $scope.bidInfo.beginPrice) % $scope.bidInfo.minAddPrice + $scope.bidInfo.minAddPrice;
						}
					}else{//未设置代理价
						if($scope[type] < $scope.bidInfo.maxPrice + $scope.bidInfo.minAddPrice*2){
							var confirmPrice = $scope.bidInfo.maxPrice + $scope.bidInfo.minAddPrice*2;
							overlay.overlayAutoTip('代理价必须大于等于'+confirmPrice+'元！',1500);
							$scope.bidding = false;
							return;
						}else{
							var confirmPrice = $scope[type] - ($scope[type] - $scope.bidInfo.beginPrice) % $scope.bidInfo.minAddPrice + $scope.bidInfo.minAddPrice;
						}
					}
				}else{//无人出价
					if($scope[type] < $scope.bidInfo.beginPrice + $scope.bidInfo.minAddPrice*2){
						var confirmPrice = $scope.bidInfo.beginPrice + $scope.bidInfo.minAddPrice*2;
					}else{
						var confirmPrice = $scope[type] - ($scope[type] - $scope.bidInfo.beginPrice) % $scope.bidInfo.minAddPrice + $scope.bidInfo.minAddPrice;
					}
				}
			}
			overlay.overlayConfirmTip({
				title :'您的出价不符合价阶，要使用最接近的价位 ' + confirmPrice + ' 元吗？',
				confirmFn : function(){
					$scope.bidding = false;
					$scope.$apply(function(){
						$scope[type] = confirmPrice;
						if(type === 'bidPrice'){
							$scope.bid();
						}else{
							if($scope.bidInfo.agentPrice > 0){
								$scope.editAgentBid();
							}else{
								$scope.setAgentBid();
							}

						}
					});
				},
				closeFn : function(){
					$scope.bidding = false;
				}
			});
		}
		return userConfirm;
	}
	//竞买说明
	$scope.help = function(){
		overlay.overlayTip({
			title: '竞买说明',
			tpl: 'overlay-help-tpl.html',
			controller: 'overlayHelpController',
			closeFn: function() {

			}
		});
	}
	//关闭弹窗
	$scope.close = function(){
		$modalInstance.close('close');
	}
});
//help控制器
overlayController.controller('overlayHelpController',function($scope,$modalInstance,items){
	$scope.title = items.title;
	$scope.close = function(){
		$modalInstance.close();
	}
});
//配送方式与运费弹窗控制器
overlayController.controller('winNoticeCtrl', ['$scope', '$uibModalInstance', 'items', function ($scope, $uibModalInstance, items) {
	$scope.title = items.title;
	$scope.content = items.content;
	$scope.close = function () {
		$uibModalInstance.close('close');
	}
}]);
//通用弹出窗口
overlayController.controller('alertCtrl', ['$scope', '$uibModalInstance', 'items', function ($scope, $uibModalInstance, items) {
	$scope.title = items.title;
	$scope.content = items.content;
	$scope.contentTip = items.contentTip;
	//可以给模板中传一些参数
	$scope.data = items.data || {};
	//自定义按钮名称
	$scope.btnCancel = items.btnCancel || '取消';
	$scope.btnConfirm = items.btnConfirm || '确认';
	$scope.cancel = function () {
		$uibModalInstance.close('cancel');
		//如果有回调函数，则执行回调，并将当前scope作为参数
		items.cancelFun && items.cancelFun($scope);
	};
	$scope.confirm = function () {
		$uibModalInstance.close('confirm');
		//如果有回调函数，则执行回调，并将当前scope作为参数
		items.confirmFun && items.confirmFun($scope);
	};
}]);
//付款类别
overlayController.controller('overlayPayTypeController', ['$scope', '$uibModalInstance', 'items', function ($scope, $uibModalInstance, items) {
	$scope.title = items.title;
	$scope.items = items.data;
	$scope.select = '';
	$scope.cancel = function(){
		$uibModalInstance.close('cancel');
	}
	$scope.confirm = function(){
		$uibModalInstance.close($scope.select);
	}
	$scope.$on('changeItem',function(event, item){
		$scope.select = item;
	});
}]);
//退货弹窗控制器
overlayController.controller('tradeRefundGoodsCtrl', ['$scope', '$uibModalInstance', 'items', 'overlay', 'buyerTradeDetail', function ($scope, $uibModalInstance, items, overlay, buyerTradeDetail) {
	$scope.title = items.title;
	$scope.receiver = items.tradeInfo.backAddress.backReceiver + ',' + items.tradeInfo.backAddress.backAreaDetail + ',' + items.tradeInfo.backAddress.backAddress;
	//退货的收货人名称
	$scope.receiverName = items.tradeInfo.backAddress.backReceiver;
	//退货的收货人
	$scope.mobile = items.tradeInfo.backAddress.backTel;
	//退货的详细地址加邮编
	if(items.tradeInfo.backAddress.backZipCode) {
		$scope.address = items.tradeInfo.backAddress.backAreaDetail + items.tradeInfo.backAddress.backAddress + ',邮编：' + items.tradeInfo.backAddress.backZipCode;
	} else {
		$scope.address = items.tradeInfo.backAddress.backAreaDetail + items.tradeInfo.backAddress.backAddress;
	}
	$scope.tradeInfo = items.tradeInfo;
	//配送方式id
	$scope.shippingId = '';
	//配送方式名称
	$scope.shippname = '请选择';
	//物流公司id
	$scope.shippingCom = '';
	//物流公司名称
	$scope.shipComName = '请选择';

	//可供选择的所有物流公司
	$scope.shipComs = [];
	//可供选择的所有配送方式
	$scope.allShipping = [];
	//更多发货单号
	$scope.moreShipmentNum = '';
	//发货单号
	$scope.shipmentNum = '';
	//用户自定义物流公司
	$scope.userDefined = '';

	$scope.addLed = false;

	$scope.showDiaLogLoading = false;

	$scope.addMore = function($event) {
		$scope.addLed=true;
	};


	$scope.getAllShipping = function () {
		buyerTradeDetail.getAllShipping({}, function (res) {
			if (res.status) {
				$scope.allShipping = res.data;
			} else {
				if (res.errType == '1') {
					KFZ.common.turnLogin();
					return false;
				} else {
					overlay.overlayAutoTip(res.message || '获取配送方式失败', 1500);
					return false;
				}
			}
		}, function (res) {
			overlay.overlayAutoTip(res || '获取配送方式失败', 1500);
			return false;
		});
	};
	//初始化所有配送方式数据
	$scope.getAllShipping();
	//选择配送方式
	$scope.kuaidi = function () {
		overlay.overlaySelectWin({
			title: '选择配送公司',
			data: $scope.allShipping,
			tpl: 'win-wuliu',
			controller: 'winSelectCtrl',
			submitFn: function (select) {
				$scope.shippingId = select.attrid;
				$scope.shippname = select.name;
				$scope.shipComs = select.list;
				$scope.shipComName = select.list[0].name;
				$scope.shippingCom = select.list[0].attrid;
				angular.forEach($scope.allShipping, function (o) {
					if (o.attrid == select.attrid) {
						o.active = true;
					} else {
						o.active = false;
					}
				});
			}
		});
	};

	$scope.wuliu = function () {
		angular.forEach($scope.shipComs, function (o) {
			if (!!$scope.shippingCom && $scope.shippingCom == o.attrid) {
				o.active = true;
			} else {
				o.active = false;
			}
		});
		overlay.overlaySelectWin({
			title: '选择物流公司',
			data: $scope.shipComs,
			tpl: 'win-wuliu',
			controller: 'winSelectCtrl',
			submitFn: function (select) {
				$scope.shipComName = select.name;
				$scope.shippingCom = select.attrid;
				angular.forEach($scope.shipComs, function (o) {
					if (!!$scope.shippingCom && $scope.shippingCom == o.attrid) {
						o.active = true;
					} else {
						o.active = false;
					}
				});
			}
		});
	}

	$scope.cancel = function () {
		$uibModalInstance.close('cancel');
	}
	$scope.confirm = function () {
		if (!$scope.shippingId) {
			overlay.overlayAutoErrorTip('请选择配送方式', 1500);
			return false;
		}
		if (!$scope.shippingCom) {
			overlay.overlayAutoErrorTip('请选择物流公司', 1500);
			return false;
		}
		if (!$scope.shipmentNum) {
			overlay.overlayAutoErrorTip('请填写发货单号', 1500);
			return false;
		}
		if ($scope.shipmentNum.length < 8) {
			overlay.overlayAutoErrorTip('发货单号不能少于8位', 1500);
			return false;
		}
		if (/[^0-9a-zA-Z]/g.test($scope.shipmentNum)) {
			overlay.overlayAutoErrorTip('请输入正确的发货单号', 1500);
			return false;
		}
		$scope.showDiaLogLoading = true;
		buyerTradeDetail.addBackInfo({
			tradeId: $scope.tradeInfo.tradeId,
			shippingId: $scope.shippingId,
			shippingComCode: $scope.shippingCom,
			shippingCom: $scope.shipComName,
			shipmentNum: $scope.shipmentNum,
			moreShipmentNum: $scope.moreShipmentNum.replace('/，/g', ','),
			agreementId: $scope.tradeInfo.agreementId,
			receiverName:$scope.tradeInfo.backAddress.backReceiver,
			phoneNum:$scope.tradeInfo.backAddress.backTel,
			area:$scope.tradeInfo.backAddress.backArea,
			address:$scope.tradeInfo.backAddress.backAddress,
			zipCode:$scope.tradeInfo.backAddress.backZipCode,
			leaveword:''
		}, function (res) {
			$scope.showDiaLogLoading = false;
			if (res.status) {
				$uibModalInstance.close('confirm');
				overlay.overlayAutoTip(res.message || '操作成功', 1500, function() {
					window.location.reload();
				});
			} else {
				if (res.errType == '1') {
					KFZ.common.turnLogin();
					return false;
				} else {
					overlay.overlayAutoTip(res.message || '操作失败', 1500);
					$uibModalInstance.close('confirm');
					return false;
				}
			}
		}, function (res) {
			$scope.showDiaLogLoading = false;
			overlay.overlayAutoTip(res || '操作失败', 1500);
			$uibModalInstance.close('confirm');
			return false;
		});
	}
}]);

//卖家同意退货弹窗
overlayController.controller('agreeRefundGoodsCtrl', ['$scope', '$uibModalInstance', 'items', 'overlay', 'sites', 'sellerAgreement', function($scope,$uibModalInstance,items,overlay,sites,sellerAgreement) {
	$scope.title = items.title;
	$scope.tradeId = items.tradeId;
	//退货地址加邮编
	if(items.addrInfo.backZipCode) {
		$scope.address = items.addrInfo.areaDetail + items.addrInfo.backAddress + '，邮编：' + items.addrInfo.backZipCode;
	} else {
		$scope.address = items.addrInfo.areaDetail + items.addrInfo.backAddress;
	}
	//收货人姓名
	$scope.receiverName = items.addrInfo.backReceiver;
	//收件人电话
	$scope.mobile = items.addrInfo.backTel;

	$scope.showDiaLogLoading = false;

	$scope.cancel = function() {
		$uibModalInstance.close('cancel');
	}

	$scope.confirm = function() {
		if($scope.address == '') {
			overlay.overlayAutoTip('操作失败', 1500);
			return false;
		}
		$scope.showDiaLogLoading = true;
		sellerAgreement.backGoods({tradeId:items.tradeId}, function(res) {
			$scope.showDiaLogLoading = false;
			if (res.status) {
				$uibModalInstance.close('confirm');
				overlay.overlayAutoTip(res.message || '操作成功', 1500, function() {
					window.location.reload();
				});
			} else {
				if (res.errType == '1') {
					KFZ.common.turnLogin();
					return false;
				} else {
					overlay.overlayAutoTip(res.message || '操作失败', 1500);
					$uibModalInstance.close('confirm');
					return false;
				}
			}
		})
	}
	//编辑退货地址
	$scope.editBackAddr = function() {
		$uibModalInstance.close('cancel');
		var url = sites.mpm + 'Index/mobile#/seller/backAddress/' + $scope.tradeId;
		location.href = url;
	}
}]);

//卖家同意退款弹窗
overlayController.controller('overlayBackPayController', ['$scope', '$modalInstance', '$uibModalInstance', 'items', 'overlay', 'sites', 'sellerAgreement', function($scope,$modalInstance,$uibModalInstance,items,overlay,sites,sellerAgreement) {
	//退款金额
	$scope.backAmount = items.backAmount;

	$scope.showDiaLogLoading = false;

	//关闭弹窗
	$scope.close = function(){
		$modalInstance.close('close');
	}

	//忘记密码
	$scope.findPass = function() {
		//跳转到忘记密码页面
		$modalInstance.close('close');
		$scope.close();
		//资金账户绑定手机的跳转到手机找回
		var forgetUrl = sites.mpays + '#/account-retrieve-mobile';
		location.href = forgetUrl;
		//资金账户绑定手机的跳转到客服找回
//		var forgetUrl = sites.mpays + '#/account-retrieve-customer';
//		location.href = forgetUrl;
	}

	//点击提交
	$scope.backMoney = function() {
		if($scope.payPass == undefined || $scope.payPass == '') {
			$scope.showDiaLogLoading = false;
			overlay.overlayAutoTip('请输入支付密码', 2000);
			return false;
		}
		$scope.showDiaLogLoading = true;
		if(items.action == 'backAmout') {
			sellerAgreement.backAmout({payPwd:$scope.payPass,tradeId:items.tradeId,action:items.action}, function(res) {
				$scope.showDiaLogLoading = false;
				if (res.status) {
					$uibModalInstance.close('confirm');
					overlay.overlayAutoTip('操作成功', 1500, function() {
						window.location.reload();
					});
				} else {
					if (res.errType == '1') {
						KFZ.common.turnLogin();
						return false;
					} else {
						if(res.data.count > 2 && res.data.count < 5) {
							var num = 5-res.data.count;
							overlay.overlayConfirmTip({
								title :'<p class="font_b1" style="margin-bottom: 20px;">密码错误</p><p>支付密码不正确，您还可以输入' + num + '次。</p>',
								confirmBtn : '忘记密码',
								closeBtn : '<span class="c_blue">重新输入</span>',
								confirmFn : function(){
									$modalInstance.close('close');
									$scope.close();
									//跳转到忘记密码页面
									//资金账户绑定手机的跳转到手机找回
									var forgetUrl = sites.mpays + '#/account-retrieve-mobile';
									location.href = forgetUrl;
									//资金账户绑定手机的跳转到客服找回
//		                        	var forgetUrl = sites.mpays + '#/account-retrieve-customer';
//		                        	location.href = forgetUrl;
								},
								closeFn : function(){

								}
							});
						} else if(res.data.errType == 'pwd_frozen') {
							var leftTime = res.data.lockTime || 24*60*60;
							overlay.overlayTip({
								title: '您已连续5次输错密码！',
								timer: leftTime,
								tpl: 'overlay-five-tpl.html',
								controller: 'overlayFiveController',
								closeFn: function () {
								}
							});
						} else {
							if(res.data.errType == 'pwd_error') {
								overlay.overlayAutoTip('支付密码错误', 2000);
							} else if(res.data.errType == 'please_do_not_repeat_submit') {
								overlay.overlayAutoTip('请勿连续提交', 2000);
							} else {
								overlay.overlayAutoTip(res.data.msg || '操作失败', 2000);
							}
						}
						//$uibModalInstance.close('confirm');
						return false;
					}
				}
			})
		} else {
			sellerAgreement.backAll({payPwd:$scope.payPass,tradeId:items.tradeId,action:items.action}, function(res) {
				$scope.showDiaLogLoading = false;
				if (res.status) {
					$uibModalInstance.close('confirm');
					overlay.overlayAutoTip('操作成功', 1500, function() {
						window.location.reload();
					});
				} else {
					if (res.errType == '1') {
						KFZ.common.turnLogin();
						return false;
					} else {
						if(res.data.count > 2 && res.data.count < 5) {
							var num = 5-res.data.count;
							overlay.overlayConfirmTip({
								title :'<p class="font_b1" style="margin-bottom: 20px;">密码错误</p><p>支付密码不正确，您还可以输入' + num + '次。</p>',
								confirmBtn : '忘记密码',
								closeBtn : '<span class="c_blue">重新输入</span>',
								confirmFn : function(){
									$modalInstance.close('close');
									$scope.close();
									//跳转到忘记密码页面
									//资金账户绑定手机的跳转到手机找回
									var forgetUrl = sites.mpays + '#/account-retrieve-mobile';
									location.href = forgetUrl;
									//资金账户绑定手机的跳转到客服找回
//		                        	var forgetUrl = sites.mpays + '#/account-retrieve-customer';
//		                        	location.href = forgetUrl;
								},
								closeFn : function(){

								}
							});
						} else if(res.data.errType == 'pwd_frozen') {
							var leftTime = res.data.lockTime || 24*60*60;
							overlay.overlayTip({
								title: '您已连续5次输错密码！',
								timer: leftTime,
								tpl: 'overlay-five-tpl.html',
								controller: 'overlayFiveController',
								closeFn: function () {
								}
							});
						} else {
							if(res.data.errType == 'pwd_error') {
								overlay.overlayAutoTip('支付密码错误', 2000);
							} else if(res.data.errType == 'please_do_not_repeat_submit') {
								overlay.overlayAutoTip('请勿连续提交', 2000);
							} else {
								overlay.overlayAutoTip(res.data.msg || '操作失败', 2000);
							}
						}
						//$uibModalInstance.close('confirm');
						return false;
					}
				}
			})
		}

	}
}]);

//密码输错5次锁定后弹窗
overlayController.controller('overlayFiveController', ['$scope','$uibModalInstance','$interval','items',function ($scope,$uibModalInstance,$interval,items) {
	console.log(items);
	$scope.title = items.title;
	$scope.timer = items.timer;
	$scope.close = function () {
		$uibModalInstance.close('close');
	}
	//倒计时
	$scope.countDown = function (time) {
		if(time > 0) {
			var timer = $interval(function () {
				d = parseInt(time / (24 * 3600));
				h = parseInt((time - d * 24 * 3600) / 3600);
				m = parseInt((time - d * 24 * 3600 - h * 3600) / 60);
				s = time - d * 24 * 3600 - h * 3600 - m * 60;
				if(d > 0) {
					$scope.leftTime = d + '天' + h + '小时' + m + '分' + s + '秒';
				} else if(d == 0 && h > 0) {
					$scope.leftTime = h + '小时' + m + '分' + s + '秒';
				} else if(d == 0 && h == 0 && m > 0) {
					$scope.leftTime = m + '分' + s + '秒';
				} else {
					$scope.leftTime = s + '秒';
				}
				if (time-- <= 0) {
					$interval.cancel(timer);
					//倒计时结束要关闭弹窗
					$uibModalInstance.close('close');
				}
			}, 1000);
		}
	}

	$scope.countDown($scope.timer);

}]);

//选择框
overlayController.controller('winSelectCtrl', ['$scope', '$uibModalInstance', 'items', function ($scope, $uibModalInstance, items) {
	$scope.title = items.title;
	$scope.items = items.data;
	$scope.selected = items.data[0];
	$scope.$on('changeItem',function(event, item){
		$scope.selected = item;
	});

	$scope.cancel = function () {
		$uibModalInstance.close('cancel');
	};
	$scope.confirm = function () {
		$uibModalInstance.close($scope.selected);
	};
}]);

//地址三级联动
overlayController.controller('overlayAddrSelectController',function($scope, $modalInstance, $q,$timeout,$window, sellerAgreement, items){
	//declaration
	var widget = {
		localJson: {},//将数据存入变量减少请求
		selected:{
			province: {},
			city: {},
			area: {},
		},
	};
	$scope.title = items.title;
	$scope.province = [];
	$scope.city = [];
	$scope.area = [];

	//widget
	widget.getTop = function() {
		var defer = $q.defer();
		if(!widget.localJson['province']) {
			sellerAgreement.getTopArea({c:'ajax', a:'getArea'}, function(res) {
				widget.localJson['province'] = res.data;
				defer.resolve(widget.localJson['province']);
			});
		} else {
			defer.resolve(widget.localJson['province']);
		}
		return defer.promise;
	};
	widget.getChildren = function(level, areaId){
		var defer = $q.defer();
		var type = level == 1? 'city' : 'area';
		var name = type + '_' + areaId;
		if(!widget.localJson[name]) {
			if(level == 1) {
				sellerAgreement.getChildrenArea({c:'ajax', a:'getArea', type:level, provinceId: areaId},function(res){
					if(res.status == true) {
						widget.localJson[name] = res.data;
						defer.resolve(widget.localJson[name]);
					}
				});
			} else {
				sellerAgreement.getChildrenArea({c:'ajax', a:'getArea', type:level, cityId: areaId},function(res){
					if(res.status == true) {
						widget.localJson[name] = res.data;
						defer.resolve(widget.localJson[name]);
					}
				});
			}
		}
		else {
			defer.resolve(widget.localJson[name]);
		}
		return defer.promise;
	};

	widget.formatItem = function(data, defaultId, name) {
		$scope[name] = [];
		if(!angular.isArray(data)) data = [];
		angular.forEach(data, function(item, key) {
			if(defaultId == 0) {
				if(key == 0) {
					item.active = true;
					widget.selected[name] = item;
				}
				else{
					item.active = false;
				}
			}
			else {
				if(item.id === defaultId) {
					item.active = true;
					widget.selected[name] = item;
				}
				else {
					item.active = false;
				}
			}
		});
		$scope[name] = data;
	};
	widget.invalidItem = function(item, itemList) {
		if(!item) return false;//
		angular.forEach(itemList, function(value, key) {
			if(value.id == item.id) {
				return true;
			}
		});
		return false;
	};

	//init
	widget.init = function() {
		widget.selected = items.data.selected;

		widget.getTop().then(
			function(province) {
				var provinceId = widget.selected.province.id? widget.selected.province.id : province[0].id;
				widget.formatItem(province, provinceId, 'province');
				return widget.getChildren(1, provinceId);
			}
		).then(
			function(city){
				var cityId = widget.selected.city.id? widget.selected.city.id : city[0].id;
				widget.formatItem(city, cityId, 'city');
				return widget.getChildren(2, cityId);
			}
		).then(
			function(area){
				if(area.length > 0) {//三级地区可能不存在
					var areaId = widget.selected.area.id? widget.selected.area.id : area[0].id;
					widget.formatItem(area, areaId, 'area');
				}
			}
		);
	};
	widget.init();


	//scope
	$scope.$on('changeProvince',function(event, province){
		widget.selected.province = province;
		widget.getChildren(1, province.id).then(
			function(cityList) {
				widget.formatItem(cityList, cityList[0].id, 'city');
				return widget.getChildren(2, cityList[0].id, 'city');
			}
		).then(
			function(areaList){
				if(areaList.length > 0) {
					widget.formatItem(areaList, areaList[0].id, 'area');
				}
				else {
					widget.selected.area = {};
					$scope.area = [];
				}
			}
		);
	});
	$scope.$on('changeCity',function(event, city){
		widget.selected.city = city;
		widget.getChildren(2,city.id).then(
			function(areaList) {
				if(areaList.length > 0) {
					widget.formatItem(areaList, areaList[0].id, 'area');
				}
				else {
					widget.selected.area = {};
					$scope.area = [];
				}
			}
		);
	});
	$scope.$on('changeArea',function(event, area){
		widget.selected.area = area;
	});

	//submit
	$scope.cancel = function(){
		$modalInstance.close('cancel');
	};
	$scope.confirm = function(){
		//检查省市地区是否正确,不正确给默认值
		//console.log(widget.selected);
		//widget.getChildren(1, widget.selected.province.id).then(
		//    function(cityList) {
		//        if(!widget.invalidItem(widget.selected.city, cityList)) {
		//            widget.selected.city = cityList[0];
		//            return widget.getChildren(2, cityList[0].id);
		//        }
		//        else {
		//            return widget.getChildren(2, widget.selected.city.id);
		//        }
		//    }
		//).then(
		//    function(areaList){
		//        if(areaList.length > 0 && !widget.invalidItem(widget.selected.area, areaList)) {
		//            widget.selected.area = areaList[0];
		//        }
		//        $modalInstance.close(widget.selected);
		//    }
		//);
		$modalInstance.close(widget.selected);
	};

});





