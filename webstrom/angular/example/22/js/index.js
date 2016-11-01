
var app=angular.module('myApp',['ng-sortable']);
app.constant('ngSortableConfig', {
    onEnd: function() {

    },
    onStart:function () {

    }
});

app.controller('TodoController',['$scope','$timeout',function ($scope,$timeout) {
    $scope.todos = [];
    $scope.upload = function (name, file,i) {
        $timeout(function(){
            if(!file.name == '' || !file.name == null || !file.name == undefined){
                $scope.todos.push({text: 'images/'+file.name, done: i});
                var obj = document.getElementsByTagName('ul')[0];
                obj.addEventListener('touchstart', function(event) {
                    // 如果这个元素的位置内只有一个手指的话
                    console.log(event)
                    if (event.targetTouches.length == 1) {
                        event.preventDefault();// 阻止浏览器默认事件，重要
                    }
                }, false);
            }
        },10);
    }
}]);

app.directive('uploadFile',function(){
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            element.bind('change',function(event){
                console.log(this);
                console.log(arguments);
                var file = this.files;
                var name = this.name;
                console.log(file);
                console.log(name);
                for(var i=0;i<file.length;i++){
                    scope.upload(name, file[i],i);
                }
            });
        }
    };
});

