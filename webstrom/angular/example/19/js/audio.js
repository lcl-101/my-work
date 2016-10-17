var app=angular.module('myApp',[]);
app.controller('ServiceController',['$scope','githubService',function ($scope,githubService0) {

}])
app.factory('githubService',['$http',function ($http) {
    var doRequst=function (username,path) {
        return $http({
            method:'JSONP',
            url:'https://api.github.com/users/' + username + '/' + path + '?callback=JSON_CALLBACK',
        })
    }
    return{
        event:function (username) {
            return doRequst(username,'events');
        }
    }
}])
