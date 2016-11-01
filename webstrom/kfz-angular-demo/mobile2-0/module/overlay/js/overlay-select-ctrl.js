var overlayController = angular.module('select.overlay',[]);

//地址三级联动
overlayController.controller('overlaySelectController',function($scope, $modalInstance, $q,$timeout,$window, personal, items){
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
    widget.getTop = function(){
        var defer = $q.defer();
        if(!widget.localJson['province']) {
            personal.getTopArea({},function(res){
                if(res.status == true) {
                    widget.localJson['province'] = res.data;
                    defer.resolve(widget.localJson['province']);
                }
            });
        }
        else {
            defer.resolve(widget.localJson['province']);
        }
        return defer.promise;
    };
    widget.getChildren = function(level, areaId){
        var defer = $q.defer();
        var type = level == 1? 'city' : 'area';
        var name = type + '_' + areaId;
        if(!widget.localJson[name]) {
            personal.getChildrenArea({level:level, areaId: areaId},function(res){
                if(res.status == true) {
                    widget.localJson[name] = res.data;
                    defer.resolve(widget.localJson[name]);
                }
            });
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
        if(items.data.isDefault) {
            widget.selected = items.data.selected;
        }

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


//日期三级联动
overlayController.controller('overlaySelectDateController',function($scope, $modalInstance, $q,$timeout, helper, items){
    //declaration
    $scope.title = items.title;
    $scope.year = [];
    $scope.month = [];
    $scope.day = [];
    var widget = {
        selected: {
            year: {},
            month: {},
            day: {},
        }
    };
    var itemName = items.data.name;

    //日历
    var sYear = new Date().getFullYear();
    if(itemName == 'identity') {
        var eYear = sYear + 20;
    }
    else {
        var eYear = sYear + 30;
    }
    var calendar = helper.calendar(sYear,eYear,true);

    //widget
    widget.getDay = function(year, month) {
        var day = helper.calendarDay(year, month, calendar.day);
        if(!widget.selected.day || (widget.selected.day && day.length < widget.selected.day.value)) {
            widget.selected.day = day[day.length-1];
        }
        return day;
    };
    widget.formatItem = function(dateList, defaultValue, name){
        $scope[name] = [];
        if(dateList.length < 1) return dateList;
        angular.forEach(dateList, function(item, key) {
            if(defaultValue === false) {
                if(key == 0) {
                    item.active = true;
                    widget.selected[name] = item;
                }
                else{
                    item.active = false;
                }
            }
            else {
                if(item.value === defaultValue) {
                    item.active = true;
                    widget.selected[name] = item;
                }
                else {
                    item.active = false;
                }
            }
        });

        $timeout(function(){
            $scope[name] = dateList;
        });
    }

    //init
    widget.init = function() {
        if(items.data.isDefault) {
            widget.selected = items.data.selected;
            if(widget.selected.year.value != 9999 && widget.selected.year.value > eYear) widget.selected.year.value = eYear;
            widget.formatItem(calendar.year, widget.selected.year.value, 'year');
            if(widget.selected.year.value != 9999) {
                widget.formatItem(calendar.month, widget.selected.month.value, 'month');
                widget.formatItem(widget.getDay(widget.selected.year.value, widget.selected.month.value), widget.selected.day.value, 'day');
            }
            else {
                $scope.month = [];
                $scope.day = [];
            }

        }
        else {
            widget.formatItem(calendar.year, eYear, 'year');
            widget.formatItem(calendar.month, false, 'month');
            widget.formatItem(widget.getDay(widget.selected.year.value, widget.selected.month.value), false, 'day');
        }
    };
    widget.init();

    //scope
    $scope.$on('changeYear',function(event, year){
        widget.selected.year = year;
        if(year.value == 9999) {
            $timeout(function(){
                $scope.month = [];
                $scope.day = [];
            });

        }
        else {
            widget.formatItem(calendar.month, false, 'month');
            widget.formatItem(widget.getDay(widget.selected.year.value, calendar.month[0].value), false, 'day');
        }
    });
    $scope.$on('changeMonth',function(event, month){
        widget.selected.month = month;
        widget.formatItem(widget.getDay(widget.selected.year.value, widget.selected.month.value), false, 'day');
    });
    $scope.$on('changeDay',function(event, day){
        widget.selected.day = day;
    });

    //submit
    $scope.cancel = function(){
        $modalInstance.close('cancel');
    };

    $scope.confirm = function(){
        if(widget.selected.year.value == 9999) {
            widget.selected.month = {};
            widget.selected.day = {};
        }
        $modalInstance.close(widget.selected);
    };
});

//提醒通用弹窗
overlayController.controller('overlayTipController',function($scope,$modalInstance,$interval,overlay,handelError,account,items){
    $scope.title = items.title;
    $scope.content = items.content;
    $scope.cancel = function(){
        $modalInstance.close('cancel');
    };

    $scope.confirm = function(){
        $modalInstance.close('confirm');
    };
});

//时间类别
overlayController.controller('overlayTimeTypeController', ['$scope', '$uibModalInstance', 'items', function ($scope, $uibModalInstance, items) {
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

//回复框控制器
overlayController.controller('overlayReplyController',function($scope,$modalInstance,overlay,items,msgList){
    //初始化
    $scope.init = function(){
        $scope.replyState = false;				//TAB切换	true常用消息		false撰写消息
        $scope.noCommon = false;				//无数据
        $scope.commonList = items.data;			//常用消息数据
        $scope.item = items.item;				//回复对象的信息
        $scope.editNote = '';					//用户编辑的内容
        if(!$scope.commonList.length){
            $scope.noCommon = true;
        }
    };

    $scope.init();

    //TAB切换-撰写消息
    $scope.replyEdit = function(){
        $scope.replyState = false;
    }
    //TAB切换-常用消息
    $scope.replyCommon = function(){
        $scope.replyState = true;
    }
    //选择常用消息
    $scope.selectCommon = function($index,text){
        angular.forEach($scope.commonList,function(data,index){
            if($index == index){
                data.selectStates = !data.selectStates;
                if(data.selectStates){
                    $scope.editNote = text;
                }else{
                    $scope.editNote = '';
                }
            }else{
                data.selectStates = false;
            }
        })
    }
    //操作-取消
    $scope.cancel = function(){
        $modalInstance.close();
    }
    //操作-确认
    $scope.confirm = function(){
        msgList.replyMsg({
            receiver:$scope.item.sender,
            receiverNickname:$scope.item.senderNickname,
            msgContent:$scope.editNote,
            replyedId:$scope.item.messageId,
            token:''
        },function(res){
            overlay.overlayAutoTip('回复成功',1500);
            $modalInstance.close('replySuc');
        })

    }
});
