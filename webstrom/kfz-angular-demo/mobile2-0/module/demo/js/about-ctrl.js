define(["kfz-angular-demo/mobile2-0/app","servers"], function (app) {
	
	//控制器
	app.controller("demoAboutController",["$scope","commodityList",function($scope,commodityList) {
		$scope.title = "关于我";
		document.title = "账户管理";
		commodityList.getCommodityList('',function(res){
			console.log(res);
		});
	}]);
	
	//子控制器
	app.controller("aboutSonCtrl",["$scope",function($scope) {
		$scope.demoTitle = "sonCtrl"+new Date();
	}]);
	
});