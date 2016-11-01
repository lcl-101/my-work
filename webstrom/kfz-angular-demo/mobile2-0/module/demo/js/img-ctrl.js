define(["kfz-angular-demo/mobile2-0/app","hammer"], function (app) {
	app.directive('imgToolBox',['$document','$timeout',function($document,$timeout){
		return{
			link: function(scope,elemt,attr) {
				var tool = new Hammer.Manager(elemt[0]),
				Swipe = new Hammer.Swipe();
				tool.add(Swipe);
				tool.on('swiperight', function (e) {
					if(scope.curImg > 0){
						$timeout(function(){
							scope.curImg = (+scope.curImg) - 1;
						})
					}
				});
				tool.on('swipeleft', function (e) {
					if(scope.curImg < scope.imgList.length-1){
						$timeout(function(){
							scope.curImg = (+scope.curImg) + 1;
						})
					}
				});
	        }
		}
	}]);

	app.directive('imgToolPinch',['$document','$timeout',function($document,$timeout){
		return{
			link: function(scope,elemt,attr) {
				var tool = new Hammer.Manager(elemt[0]),
				Pinch = new Hammer.Pinch();
				tool.add(Pinch);
				// var width = 1900;
				// var height = 400;
				// var left = 950;
				// var top = 220;
				tool.on('pinchin', function (e) {
					// alert(1);
					// document.write(e.scale);
					$(elemt[0]).css("transformOrigin","scale(1,1)");
					$(elemt[0]).css("transform","scale(1,1) translate(0px,0px)");
				});
				tool.on('pinchout', function (e) {
					var W = $(elemt[0]).width();
					var H = $(elemt[0]).height();
					var Top = $(elemt[0]).offset().top;
					var Left = $(elemt[0]).offset().left;
					// alert(1);
					// document.write(e);
					// document.write(e.scale);
					// var W = $(elemt[0]).width();
					// var H = $(elemt[0]).height();
					// var Top = $(elemt[0]).marginTop();
					// var Left = $(elemt[0]).marginLeft();
					// var scale = 2;
					// var mouseX=e.center.x;//捏开点
					// var mouseY=e.center.y;
					// var translateX = 0;
					// var translateY = 0;
					// //计算当前点击点相对于图片的偏移比例
					// var posX = mouseX / W;
					// var posY = mouseY / H;
					// translateX = (W * posX / scale) * -1;
					// translateY = ((H * posY / scale) * -1)/2;
					// $(elemt[0]).css("-webkit-transformOrigin", "0% 0%","-moz-transformOrigin", "0% 0%","-o-transformOrigin", "0% 0%","transformOrigin", "0% 0%");
					// $(elemt[0]).css("-webkit-transform", "scale(2,2) translate(" + translateX + "px, " + translateY + "px)","transform", "scale(2,2) translate(" + translateX + "px, " + translateY + "px)");
					$(elemt[0]).css({
						width:W*e.scale,
						height:H*e.scale,
						"margin-top":-Top*e.scale,
						"margin-left":-Left*e.scale
					})
				});
	        }
		}
	}]);

	//控制器
	app.controller("demoImgController",["$scope","$uibModal",function($scope,$uibModal) {
		
		$scope.status = false;
		$scope.openImgWin = function($event,index){
			$scope.status = true;
			var modaConfig = {
				imgList : $event.target.parentNode.children,
				curImg : index,
				tpl : 'img-win',
				controller : 'imgToolController'
			}
			$uibModal.open({
	            templateUrl: modaConfig.tpl,
	            controller: modaConfig.controller,
	            resolve: {
	                items: function () {
	                    return modaConfig;
	                }
	            }
	        });
		}
	}]);
	
	app.controller('imgToolController',function($scope,$modalInstance,items){
		$scope.imgList = items.imgList;
		$scope.curImg = items.curImg;
		var w = document.documentElement.clientWidth;
		$scope.imgW = {
			"width" : w + 'px'
		};
	    $scope.close = function(){
	        $modalInstance.close('close'); 
	    }
	});
});