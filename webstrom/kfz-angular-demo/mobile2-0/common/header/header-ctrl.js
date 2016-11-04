define(["angular"],function(){
	
	angular.module('header',[]).controller('headerCtrl',function ($scope) {

	});
	angular.module('header',[]).directive('kfzHeader', function($document,$http) {
		return {
			restrict: 'A',
			scope:{
				title:'@',
				bigTitle:'@',
				name:'@',
				url:'@',
				backUrl:'@',
				inputVal:'@',
				searchWord:'@',
				searchUrl:'@',
				logoUrl:'@',
				shareImg:'@',
				shareTitle:'@',
				shareText:'@',
				shareUrl:'@'
			},
			transclude: true,
			link : function(scope, element, attrs) {
				/*判断打开头部文件的是app还是m站*/
				scope.showHeaderApp = false;
				var userAgent = window.navigator.userAgent;
				var isApp = userAgent.indexOf('KFZ_COM') > -1;
				if(isApp) {
					scope.showHeaderApp = true;
					scope.showNavApp = false;
					scope.showNavAppFun = function() {
						scope.showNavApp = !scope.showNavApp;
					}
					scope.shareFun = function() {
						location.href= 'kongfz://app.kongfz.com/share?param={"image":"' + scope.shareImg +'","title":"' +scope.shareTitle+ '","text":"'+scope.shareText+'","url":"'+scope.shareUrl+'"}'
					}
				}

				document.body.style.overflow='';
				document.body.style.height='auto';
				scope.showHeight=  true;
				scope.showHeaderNav = false;
				scope.messageNumShow = false;
				scope.cartNumShow = false;
				// scope.logoUrl = KFZ.url.host+"/mobile2-0/common/images/logo.png";
				/*url配置*/
				var urlConfig = {
					// "indexUrl": KFZ.sites.adapter.m,
					// "searchIndexUrl": KFZ.sites.adapter.msearch,
					// "cartUrl": KFZ.sites.adapter.mshop+"index/mobile/#/cart/list",
					// "messageUrl": KFZ.sites.adapter.mmessage,
					// "personUrl":   KFZ.sites.adapter.muser+"#/personal",
					// // "sellerUrl":  KFZ.sites.adapter.mshop+"index/mobile/#/seller/orderlist/1?status=Trading",
					// "sellerUrl":  KFZ.sites.adapter.mshop+"index/mobile/#/seller/sellerpersonal",
					// "orderUrl":  KFZ.sites.adapter.mshop+"index/mobile/#/buyer/orderlist/1?status=Trading",
					// "tradeUrl":  KFZ.sites.adapter.mpm+"Index/mobile#/tradelist/",
					// "bidUrl":  KFZ.sites.adapter.mpm+"Index/mobile#/bidding/",
					// "payUrl":  KFZ.sites.adapter.mpays,
					// "zujiUrl":  KFZ.sites.adapter.muser+"#/personal-myfoot-goods/",
					// "shopUrl":  KFZ.sites.adapter.mshop,
					// "pmUrl": KFZ.sites.adapter.mpm,
					// "zixunUrl":  KFZ.sites.adapter.mzixun,
					// "shequUrl":  KFZ.sites.adapter.shequ
				};
				for(var k in urlConfig) {
					scope[k] = urlConfig[k];
				}
				scope.getCookie = function(c_name){
					if (document.cookie.length>0){
						c_start=document.cookie.indexOf(c_name + "=")
						if (c_start!=-1){
							c_start=c_start + c_name.length+1
							c_end=document.cookie.indexOf(";",c_start)
							if (c_end==-1) c_end=document.cookie.length
							return unescape(document.cookie.substring(c_start,c_end))
						}
					}
					return ""
				}
				/*获取购物车数量*/
				scope.getCartNum = function(){
					var userAgent = window.navigator.userAgent;
					var isApp = userAgent.indexOf('KFZ_COM') > -1;
					if(isApp){
						var id = scope.getCookie("PHPSESSID");
						var url = KFZ.sites.adapter.mbook+"book/shopcart/listCart?app="+ id +"&callback=JSON_CALLBACK";
					}else{
						var url = KFZ.sites.adapter.mbook+"book/shopcart/listCart?callback=JSON_CALLBACK";
					}
					$http.jsonp(url).success(function(res){
						if(res && res.data){
							scope.cartNum = res.data.length;
							if(res.data.length){
								scope.cartNumShow = true;
							}
						}
					}).error(function(){
					});
				}
				/*获取未读消息数*/
				scope.getUnReadMessage = function(){
					var userAgent = window.navigator.userAgent;
					var isApp = userAgent.indexOf('KFZ_COM') > -1;
					if(isApp){
						var id = scope.getCookie("PHPSESSID");
						var url = KFZ.sites.adapter.mmessage+"Interface/User/getUnreadNum?app="+ id +"&callback=JSON_CALLBACK";
					}else{
						var url = KFZ.sites.adapter.mmessage+"Interface/User/getUnreadNum?callback=JSON_CALLBACK";
					}
					$http.jsonp(url).success(function(data){
						if(data){
							scope.messageNumShow = true;
							scope.messageNum = data;
						}
					}).error(function(){
					});
				}
				/*每隔120秒轮回*/
				// if(!KFZ.user){
				// 	KFZ.user = {};
				// }
				// if(KFZ.user.isLogin){
				// 	if(location.protocol != "https:"){
				// 		scope.getUnReadMessage();
				// 		setInterval(function(){
				// 			scope.getUnReadMessage();
				// 		},120000);
				// 		if(KFZ.header && KFZ.header.cartNum){
				// 			scope.cartNum = KFZ.header.cartNum;
				// 			scope.cartNumShow = true;
				// 		}else{
				// 			scope.getCartNum();
				// 		}
				// 	}
				// }
				//如果尺寸变化，自适应
// 				$(window).resize(function(){
// 					element.find("section").css("height",$(window).height() + "px");
// 					$('.nav_content').css("height",($(window).height()-45)+"px");
// 				});
// 				var navOffset = {hiddenHeight:0,translateY:0,touchStartY:0,touchY:0};
// 				$('body').on('touchmove','.kfz-overlay',function(e){
// 					e.preventDefault();
// 				}).on('touchstart','.kfz-header .nav_header',function(e){
// 					navOffset.hiddenHeight = $('.kfz-header .nav_content > .nav_content_scroll').height()-$('.kfz-header .nav_content').height();
// 					navOffset.touchStartY = e.touches[0].clientY;
// 				}).on('touchmove','.kfz-header .nav_header',function(e){
// 					e.preventDefault();
// 					navOffset.touchY = e.touches[0].clientY;
// 					navOffset.translateY += navOffset.touchY - navOffset.touchStartY;
// 					if (navOffset.translateY + navOffset.hiddenHeight < 0) {
// 						navOffset.translateY = -navOffset.hiddenHeight;
// 					}
// 					if (navOffset.translateY > 0) {
// 						navOffset.translateY = 0;
// 						$('.kfz-header .nav_content > .nav_content_scroll').css('transform', 'translateY(0px)');
// 						$('.kfz-header .nav_content > .nav_content_scroll').css('-ms-transform', 'translateY(0px)');
// 						$('.kfz-header .nav_content > .nav_content_scroll').css('-moz-transform', 'translateY(0px)');
// 						$('.kfz-header .nav_content > .nav_content_scroll').css('-webkit-transform', 'translateY(0px)');
// 						$('.kfz-header .nav_content > .nav_content_scroll').css('-o-transform', 'translateY(0px)');
// 					} else {
// 						$('.kfz-header .nav_content > .nav_content_scroll').css('transform', 'translateY(' + navOffset.translateY + 'px)');
// 						$('.kfz-header .nav_content > .nav_content_scroll').css('-ms-transform', 'translateY(' + navOffset.translateY + 'px)');
// 						$('.kfz-header .nav_content > .nav_content_scroll').css('-moz-transform', 'translateY(' + navOffset.translateY + 'px)');
// 						$('.kfz-header .nav_content > .nav_content_scroll').css('-webkit-transform', 'translateY(' + navOffset.translateY + 'px)');
// 						$('.kfz-header .nav_content > .nav_content_scroll').css('-o-transform', 'translateY(' + navOffset.translateY + 'px)');
// 					}
// //                $('.kfz-overlay').html('调试信息,请忽略！<br>startY:'
// //                        +navOffset.touchStartY+'<br>translateY:'
// //                        +navOffset.translateY+'<br>hiddenHeight:'
// //                        +navOffset.hiddenHeight+'<br>moveY:'
// //                        +(navOffset.touchY-navOffset.touchStartY));
// 					navOffset.touchStartY = navOffset.touchY;
// 				});
				/*点击滑动展开*/
				scope.showHeaderDia = function(){
					element.find("header").removeClass("positionRe").addClass("positionSta");
					element.find("section").addClass("slide-right");
					var scrollTop =  document.documentElement.scrollTop || document.body.scrollTop;
					if (scrollTop > 100) {
						window.scrollTo(0,0);
					}
					scope.showHeaderNav = true;
					scope.showHeight=  false;
					element.find("section").css("height",$(window).height() + "px");
					$('.nav_content').css("height",($(window).height()-45)+"px");
					/*初始化侧边栏滚动位置*/
					navOffset.translateY = 0;
					$('.kfz-header .nav_content > .nav_content_scroll').css('transform', 'translateY(0px)');
					/*禁止页面滚动*/
					$('body').css('height',$(window).height()+"px");
					$('body').css('overflow','hidden');
					$('.kfz-layout').css('height',$(window).height()+"px");
					$('.kfz-layout').css('overflow','hidden');
					$('.kfz-overlay').css('height',$(window).height()+"px");
					$('.kfz-overlay').css('overflow','hidden');

					//调试
//                $('.kfz-overlay').html('调试信息,请忽略！<br>screen.height:'
//                        +window.screen.height+'<br>screen.availHeight:'
//                        +window.screen.availHeight+'<br>window.height:'
//                        +$(window).height()+'<br>body.height:'
//                        +$('body').height()+'<br>html.height:'
//                        +$('html').height()+'<br>overlay.height:'
//                        +$('.kfz-overlay').height());
				}
				/*点击关闭*/
				scope.hideHeaderDia = function(){
					element.find("header").removeClass("positionSta");
					if(attrs.title){
						element.find("header").css("width","100%");
					}
					scope.showHeaderNav = false;
					scope.showHeight=  true;
					/*页面滚动*/
					$('body').css('height','auto');
					$('body').css('overflow','');
					$('.kfz-layout').css('height','auto');
					$('.kfz-layout').css('overflow','');
				}
				/*页面模板渲染*/
				scope.getContentUrl = function() {
					return attrs.url;
				}
				/*回到首页*/
				scope.goBack = function(){
					location.href = scope.indexUrl;
				}
				/*隐藏遮罩*/
				scope.hideOverlay = function(){
					element.find("header").removeClass("positionSta");
					if(attrs.title){
						element.find("header").css("width","100%");
					}
					scope.showHeaderNav = false;
					scope.showHeight=  true;
					/*页面滚动*/
					$('body').css('height','auto');
					$('body').css('overflow','');
					$('.kfz-layout').css('height','auto');
					$('.kfz-layout').css('overflow','');
				}
				/*返回*/
				scope.back = function(){
					if(attrs.backUrl){
						location.href = attrs.backUrl;
					}
					else if(attrs.back && Math.abs(parseInt(attrs.back))>0){
						window.history.go(-Math.abs(parseInt(attrs.back)));
					}
					else{
						var u = navigator.userAgent;
						var isApp = u.indexOf('KFZ_COM') > -1;
						if(isApp){
							location.href = "kongfz://app.kongfz.com/back";
						}else{
							window.history.go(-1);
						}
					}
				}
			},
			template: '<div ng-include="getContentUrl()"></div>'
		};
	});
})
