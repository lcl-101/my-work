/*
 * app主模块
 * define方法	
 * []：启动app所需要加载的js文件
 * fn：依赖文件启动后回调
 * 		1、声明app并注明依赖(依赖路由、头部、尾部)	
 * 		2、app.config方法
 * 			$urlRouterProvider		默认情况下页面
 * 			$stateProvider.state	路由配置
 */
define(["angular-amd", "angular-ui-router","header",'overlay','overlay-controller','overlaySelectController','helper'], function(angularAMD) {



	//创建模块app
	var app = angular.module("app", ["ui.router",'header','ui.overlay','overlay.controller','select.overlay','helper']);
	
	// config配置路由
	app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", function($stateProvider, $urlRouterProvider, $httpProvider) {
		
		//处理请求格式
		$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
		$httpProvider.defaults.transformRequest = [function(data) {
			var param = function(obj) {
				var query = '';
				var name, value, fullSubName, subName, subValue, innerObj, i;
				for (name in obj) {
					value = obj[name];
					if (value instanceof Array) {
						for (i = 0; i < value.length; ++i) {
							subValue = value[i];
							fullSubName = name + '[' + i + ']';
							innerObj = {};
							innerObj[fullSubName] = subValue;
							query += param(innerObj) + '&';
						}
					} else if (value instanceof Object) {
						for (subName in value) {
							subValue = value[subName];
							fullSubName = name + '[' + subName + ']';
							innerObj = {};
							innerObj[fullSubName] = subValue;
							query += param(innerObj) + '&';
						}
					} else if (value !== undefined && value !== null) {
						query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
					}
				}
				return query.length ? query.substr(0, query.length - 1) : query;
			};
			return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
		}];
		
		
		// default默认：demo
		$urlRouterProvider.otherwise("/auction");

		// route路由    [为避免命名冲突,控制器命名规范：module下的子项目名称+控制器名称]
		
		//auction
		$stateProvider.state("auction", angularAMD.route({
			url: "/auction",
			templateUrl: "/kfz-angular-demo/mobile2-0/module/demo/views/auction.html",
			controller: "demoAuctionController"
		}));

		//auction-header页
		$stateProvider.state("auction-header", angularAMD.route({
			url: "/auction-header",
			templateUrl: "/kfz-angular-demo/mobile2-0/module/demo/views/auction-header.html",
			controller: "demoAuctionHeaderController"
		}));

		//contact页
		$stateProvider.state("contact", angularAMD.route({
			url: "/contact",
			templateUrl: "/kfz-angular-demo/mobile2-0/module/demo/views/contact.html",
			controller: "demoContactController"
		}));
		//img页
		$stateProvider.state("img", angularAMD.route({
			url: "/img",
			templateUrl: "/kfz-angular-demo/mobile2-0/module/demo/views/img.html",
			controller: "demoImgController"
		}));

	}]);
	
	// 启动引擎
	return angularAMD.bootstrap(app);
	
});
