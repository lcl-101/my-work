/*
 * services数据层
 * 目的：为提高代码的维护性而独立出来的模块
 * 作用：处理请求	与后台进行数据交互
 */
var services = angular.module('services',[]);

//配置接口
services.constant('api',{
	"commodityList":"/kfz-angular-demo/mobile2-0/module/demo/data-json/commodity.json"
});


//获取商品信息
services.factory('commodityList',["$http","api",function($http,api){
	return {
		getCommodityList:function(params,succFn){
			$http({
               url:api.commodityList,
               method:'get',
               headers:{"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},
               data:params
            }).success(function(res){
            	succFn(res);
            }).error(function(){
            	
            });
		}
	}
}]);