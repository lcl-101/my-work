/*
 * require配置
 * @baseUrl
 * @paths		js文件名：js文件对应目录
 * 				基于项目需求进行配置		ps: 配置 != 加载
 * @shim		依赖关系声明			
 */
require.config({
	baseUrl:'/',
    paths: {
    	//angular [http://neibures2.kongfz.com/]===res目录
        "angular": "http://neibures2.kongfz.com/libs/angular/angular.min",
        "angular-ui-router": "http://neibures2.kongfz.com/libs/angular-ui-router/angular-ui-router.min",
        "angular-amd": "http://neibures2.kongfz.com/libs/angular-amd/angular-amd.min",
        
        //公共组件
        "overlay":"http://neibures2.kongfz.com/mobile/widgets/kfz-ui-mobile/overlay/overlay",
        "jquery": "/kfz-angular-demo/mobile2-0/common/js/jquery-3.1.0.min",
        "hammer":"/kfz-angular-demo/mobile2-0/common/js/hammer",

        //基于项目需求可选择性配置zepto->jquery->$
//      "zepto": "http://neibures2.kongfz.com/libs/zepto/zepto.min",
        
        
//      "angular": "webroot/kfz-angular-demo/mobile2-0/common/libs/angular/angular.min",
//      "angular-ui-router": "webroot/kfz-angular-demo/mobile2-0/common/libs/angular-ui-router/angular-ui-router.min",
//      "angular-amd": "webroot/kfz-angular-demo/mobile2-0/common/libs/angular-amd/angular-amd.min",
        
        //公共组件
        //"overlay":"webroot/kfz-res2/mobile/widgets/kfz-ui-mobile/overlay/overlay",
//      "overlay":"kfz-angular-demo/mobile2-0/common/js/overlay",

        
        
        
        
        //各项目下公共文件 		[/kfz/mobile2-0]===项目启动目录
        "header":"/kfz-angular-demo/mobile2-0/common/header/header-ctrl",
        "footer":"/kfz-angular-demo/mobile2-0/common/header/footer-ctrl",
        "servers":"/kfz-angular-demo/mobile2-0/model/servers",
        "filter":"/kfz-angular-demo/mobile2-0/common/js/filter",
        "error":"/kfz-angular-demo/mobile2-0/common/js/error",
        "helper":"/kfz-angular-demo/mobile2-0/common/js/helper",

        //弹窗组件控制器
        "overlay-controller":"/kfz-angular-demo/mobile2-0/module/demo/js/overlay-ctrl",
        
        //控制器文件
        "demoAboutController":"/kfz-angular-demo/mobile2-0/module/demo/js/about-ctrl",
        "demoAuctionController":"/kfz-angular-demo/mobile2-0/module/demo/js/auction-ctrl",
        "demoContactController":"/kfz-angular-demo/mobile2-0/module/demo/js/contact-ctrl",
        "demoImgController":"/kfz-angular-demo/mobile2-0/module/demo/js/img-ctrl",
        "overlaySelectController":"/kfz-angular-demo/mobile2-0/module/overlay/js/overlay-select-ctrl"
    },
    //依赖关系声明
    shim: {        
		"angular": { exports: "angular" },
        "angular-ui-router": ["angular"],
        "angular-amd": ["angular"],
        "hammer": ["jquery"],
        "overlay": ["angular"],
        "overlay-controller": ["angular"],
        "overlaySelectController": ["angular"],
        "helper": ["angular"],
    },
    //启动文件
    deps: ['kfz-angular-demo/mobile2-0/app']
	
});