define(["kfz-angular-demo/mobile2-0/app"],function (app) {
    app.controller('demoAuctionController',[
        '$scope',
        "$q",
        "$timeout",
        "$uibModal",
        "helper",
        'overlay',
        function (
            $scope,
            $q,
            $timeout,
            $uibModal,
            helper,
            overlay
        ) {
            console.log(overlay);
            $scope.title='添加拍品';
            document.title='添加拍品';
            $scope.view = {
                license: '请选择'
            };
            var widget = {};
            widget.overlayDate = {
                license: {
                    isDefault: false,
                    selected: {}
                }
            };
            widget.initDate = function(data, name) {
                var date = {
                    year: {
                        name: data[0] + '年',
                        value: parseInt(data[0])
                    },
                    month: {
                        name: data[1] + '月',
                        value: parseInt(data[1])
                    },
                    day: {
                        name: data[2] + '日',
                        value: parseInt(data[2])
                    },
                };
                widget.overlayDate[name].isDefault = true;
                widget.overlayDate[name].selected = date;
                $scope.view[name] = date.year.name + date.month.name + date.day.name;
            };
            var datas=[2016,01,01];
            widget.initDate(datas,'license');
            widget.overlaySelectDate = function(name) {
                overlay.overlaySelectWin({
                    title : '选择时间',
                    data : widget.overlayDate[name],
                    tpl : 'overlay-select-date.html',
                    controller : 'overlaySelectDateController',
                    cancleFn : function(){
                        console.log('cancle');
                    },
                    submitFn : function(selected){
                        widget.overlayDate[name].isDefault = true;
                        widget.overlayDate[name].selected = selected;
                        $scope.view[name] = (selected.year.name || '') + ' ' + (selected.month.name || '') + ' ' + (selected.day.name || '');
                    }
                });
            };
            $scope.dateChoose = function(name) {
                widget.overlaySelectDate(name);
            };

            $scope.timeChoose = function () {
                // var data=['建国后（1949 - 至今）','民国 （1911 - 1949）','清代 （1644 - 1911）','明代 （1368 - 1644）','宋元及以前','不祥'];
                var data = [{
                    title:'建国后（1949 - 至今）'
                },{
                    title:'民国 （1911 - 1949）'
                },{
                    title:'清代 （1644 - 1911）'
                },{
                    title:'明代 （1368 - 1644）'
                },{
                    title:'宋元及以前'
                },{
                    title:'不祥'
                }];
                overlay.overlaySelectWin({
                    title : '选择年代',
                    data : data,
                    tpl : 'overlay-select-year.html',
                    controller : 'overlayTimeTypeController',
                    cancleFn : function(){

                    },
                    submitFn : function(type){
                        $scope.timeType=type.title;
                        console.log(type);
                    }
                })
            };

            $scope.$parent.commonList=[{content:'AA'},{content:'BB'}];
            $scope.yunfei = function (item) {
                var modaConfig = {
                    item:item,
                    data:$scope.$parent.commonList,
                    tpl : 'overlay-reply-tpl.html',
                    controller : 'overlayReplyController'
                }
                var replyModal = $uibModal.open({
                    templateUrl: modaConfig.tpl,
                    controller: modaConfig.controller,
                    resolve: {
                        items: function () {
                            return modaConfig;
                        }
                    }
                });
                replyModal.result.then(function (type) {
                    if(type == "replySuc"){

                    }
                },function () {

                });
            }
    }])
})