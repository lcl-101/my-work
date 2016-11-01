define(['kfz-angular-demo/mobile2-0/app'], function (app) {
	
	//控制器
	app.controller("demoContactController",["$scope","overlay","$uibModal",function($scope,overlay,$uibModal){
		$scope.title = "联系我";
		$scope.testInput1 = "联系我";
//		$scope.testInput2 = "联系我";
		var num = 0;
		$scope.autoErrorTip = function(){
			overlay.overlayAutoErrorTip('密码错误！',1500);
			num++;
		}
		$scope.autoTip = function(){
			overlay.overlayAutoTip('收藏成功！',1500,function(){
				console.log('12321');
			});
			num++;
		}
		$scope.confirmTip = function(){
//			overlay.overlayConfirmTip("您要取消当前商品吗？",function(){
//				console.log('confirm');
//			},function(){
//				console.log('cancle');
//			});
			overlay.overlayConfirmTip({
				title :'确认删除该好友？',
				confirmBtn : '',
				closeBtn : '',
				confirmFn : function(){
					console.log('confirm');
				},
				closeFn : function(){
					console.log('cancle');
				}
			});
		}
		$scope.tip = function(){
			overlay.overlayTip({
				title : '操作提醒：买家正在付款',
				content : '请稍后...',
				tpl : 'overlay-tip-tpl.html',
				controller : 'overlayTipController',
				closeFn : function(){
					console.log('TipClose');
				}
			});
		}
		$scope.modal = function(){
			var modaConfig = {
				title : '操作提醒：买家正在付款',
				content : '请稍后...',
				tpl : 'overlay-demo.html',
				controller : 'overlayDemoController'
			}
			var modaldemo = $uibModal.open({
	            templateUrl: modaConfig.tpl,
	            controller: modaConfig.controller,
	            resolve: {
	                items: function () {
	                    return modaConfig;
	                }
	            }
	        });
	        modaldemo.result.then(function (type) {
				console.log(type);
	        },function () {
	                
	        });
		}
		$scope.selectWin = function(){
			var arr = [{'kd':'圆通速递1'},{'kd':'圆通速递2'},{'kd':'圆通速递3'},{'kd':'圆通速递4'},{'kd':'圆通速递5'},{'kd':'圆通速递6'},{'kd':'圆通速递7'},{'kd':'圆通速递8'},{'kd':'圆通速递9'},{'kd':'圆通速递10'}];
			var arrActive = '圆通速递2';
			angular.forEach(arr,function(data,index,array){
				if(data.kd == arrActive){
					data.active = true;
				}else{
					data.active = false;
				}
			});
			overlay.overlaySelectWin({
				title : '选择物流公司',
				data : arr,
				tpl : 'overlay-select.html',
				controller : 'overlaySelectController',
				cancleFn : function(){
					console.log(1);
				},
				submitFn : function(type){
					console.log(type);
				}
			});
		}
		
		$scope.select2 = function(){
			var arr = [{'kd':'圆通速递1'},{'kd':'圆通速递2'},{'kd':'圆通速递3'},{'kd':'圆通速递4'},{'kd':'圆通速递5'},{'kd':'圆通速递6'},{'kd':'圆通速递7'},{'kd':'圆通速递8'},{'kd':'圆通速递9'},{'kd':'圆通速递10'}];
			var arrActive = '圆通速递4';
			angular.forEach(arr,function(data,index,array){
				if(data.kd == arrActive){
					data.active = true;
				}else{
					data.active = false;
				}
			});
			overlay.overlaySelectWin({
				title : '选择物流公司',
				data : arr,
				tpl : 'overlay-select2.html',
				controller : 'overlaySelectController',
				cancleFn : function(){
					console.log(1);
				},
				submitFn : function(type){
					console.log(type);
				}
			});
		}
		
		
		
		
		
		
		
		
		
		//非公共模板
		$scope.biaoji = function(){
			var modaConfig = {
				title : '标记的内容仅自己可见',
				content : '1',
				tpl : 'overlay-biao-ji-demo.html',
				controller : 'overlayBiaoJiDemoController'
			}
			var modaldemo = $uibModal.open({
	            templateUrl: modaConfig.tpl,
	            controller: modaConfig.controller,
	            resolve: {
	                items: function () {
	                    return modaConfig;
	                }
	            }
	        });
	        modaldemo.result.then(function (type) {
				console.log(type);
	        },function () {
	                
	        });
		}
		$scope.chakanbiaoji = function(){
			var modaConfig = {
				title : '标记的内容仅自己可见',
				content : '1',
				tpl : 'overlay-read-biao-ji-demo.html',
				controller : 'overlayBiaoJiDemoController'
			}
			var modaldemo = $uibModal.open({
	            templateUrl: modaConfig.tpl,
	            controller: modaConfig.controller,
	            resolve: {
	                items: function () {
	                    return modaConfig;
	                }
	            }
	        });
	        modaldemo.result.then(function (type) {
				console.log(type);
	        },function () {
	                
	        });
		}
		$scope.fahuo = function(){
			var modaConfig = {
				title : '请在实际发货后，再填写以下信息',
				shipInfo : '张三，13049584930，北京市朝阳区崔 各庄乡何各庄328红厂设计创意产业园A栋（邮编：35 848）',
				shipType : '快递',
				ships : '圆通速递',
				shipNum : '',
				tpl : 'overlay-fa-huo-demo.html',
				controller : 'overlayFaHuoDemoController'
			}
			var modaldemo = $uibModal.open({
	            templateUrl: modaConfig.tpl,
	            controller: modaConfig.controller,
	            resolve: {
	                items: function () {
	                    return modaConfig;
	                }
	            }
	        });
	        modaldemo.result.then(function (type) {
				console.log(type);
	        },function () {
	                
	        });
		}
		
		$scope.wuliuyunfei = function(){
			var modaConfig = {
				title : '设置物流与运费',
				shipType : '快递',
				ships : '圆通速递',
				shipNum : '',
				tpl : 'overlay-wu-liu-yun-fei-demo.html',
				controller : 'overlaywuLiuYunFeiDemoController'
			}
			var modaldemo = $uibModal.open({
	            templateUrl: modaConfig.tpl,
	            controller: modaConfig.controller,
	            resolve: {
	                items: function () {
	                    return modaConfig;
	                }
	            }
	        });
	        modaldemo.result.then(function (type) {
				console.log(type);
	        },function () {
	                
	        });
		}
		
		$scope.opTip = function(){
			overlay.overlayTip({
				title : '操作提醒：买家正在付款',
				content_1 : '请确认订单内商品均有库存且可以出售。',
				content_2 : '如有无法出售的商品，请在订单中取消该商品。',
				content_3 : '快速确认订单可提高您的成交率。',
				tpl : 'overlay-op-tip-tpl.html',
				controller : 'overlayTipController',
				closeFn : function(){
					console.log('TipClose');
				}
			});
		}
		$scope.querendingdan = function(){
			var modaConfig = {
				title : '确认后，系统即可通知买家付款',
				content : '',
				tpl : 'overlay-confirm-order-tpl.html',
				controller : 'overlayDemoController'
			}
			var modaldemo = $uibModal.open({
	            templateUrl: modaConfig.tpl,
	            controller: modaConfig.controller,
	            resolve: {
	                items: function () {
	                    return modaConfig;
	                }
	            }
	        });
	        modaldemo.result.then(function (type) {
				console.log(type);
	        },function () {
	                
	        });
		}
		$scope.xianxiafukuan = function(){
			var modaConfig = {
				title : '买家线下付款，请核实银行帐号',
				content : '',
				tpl : 'overlay-xian-xia-fu-kuan-tpl.html',
				controller : 'overlayDemoController'
			}
			var modaldemo = $uibModal.open({
	            templateUrl: modaConfig.tpl,
	            controller: modaConfig.controller,
	            resolve: {
	                items: function () {
	                    return modaConfig;
	                }
	            }
	        });
	        modaldemo.result.then(function (type) {
				console.log(type);
	        },function () {
	                
	        });
		}
		$scope.shezhiyouhui = function(){
			var modaConfig = {
				title : '设置优惠',
				content : '',
				tpl : 'overlay-she-zhi-you-hui-tpl.html',
				controller : 'overlayDemoController'
			}
			var modaldemo = $uibModal.open({
	            templateUrl: modaConfig.tpl,
	            controller: modaConfig.controller,
	            resolve: {
	                items: function () {
	                    return modaConfig;
	                }
	            }
	        });
	        modaldemo.result.then(function (type) {
				console.log(type);
	        },function () {
	                
	        });
		}
		$scope.querenshouhuo = function(){
			var modaConfig = {
				title : '设置优惠',
				content : '',
				tpl : 'overlay-que-ren-shou-huo-tpl.html',
				controller : 'overlayDemoController'
			}
			var modaldemo = $uibModal.open({
	            templateUrl: modaConfig.tpl,
	            controller: modaConfig.controller,
	            resolve: {
	                items: function () {
	                    return modaConfig;
	                }
	            }
	        });
	        modaldemo.result.then(function (type) {
				console.log(type);
	        },function () {
	                
	        });
		}
		$scope.edit = function(){
			var modaConfig = {
				title : '拍卖留言',
				content : '',
				tpl : 'overlay-bian-ji-tpl.html',
				controller : 'overlayDemoController'
			}
			var modaldemo = $uibModal.open({
	            templateUrl: modaConfig.tpl,
	            controller: modaConfig.controller,
	            resolve: {
	                items: function () {
	                    return modaConfig;
	                }
	            }
	        });
	        modaldemo.result.then(function (type) {
				console.log(type);
	        },function () {
	                
	        });
		}
		
		
		$scope.notice = function(){
			overlay.overlayTip({
				title : '店铺满包邮活动说明',
				content : '',
				tpl : 'overlay-huo-dong-tpl.html',
				controller : 'overlayTip1Controller',
				closeFn : function(){
					console.log('TipClose');
				}
			});
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//拍卖竞价弹窗
		$scope.bidding = function() {
			var modaConfig = {
				tpl: 'overlay-bidding-tpl.html',
				controller: 'overlayBiddingController'
			}
			var modaldemo = $uibModal.open({
				templateUrl: modaConfig.tpl,
				controller: modaConfig.controller,
				resolve: {
					items: function() {
						return modaConfig;
					}
				}
			});
			modaldemo.result.then(function(type) {
				console.log(type);
			}, function() {
		
			});
		}
	}]);		
});