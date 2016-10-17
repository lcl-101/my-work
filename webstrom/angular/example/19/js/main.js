var app=angular.module('myApp',[]);
var apiKey="MDI3Mzg5NjQxMDE0NzYzMzgzNTYyNmRjZg000",
    nprUrl='http://api.npr.org/query?id=61&output=JSON';
app.controller('PlayController',['$scope','$http',function ($scope,$http) {
    // $scope.playing=false;
    // $scope.audio=document.createElement('audio');
    // $scope.audio.src='music/laojie.mp3';
    // $scope.play = function () {
    //     $scope.audio.play();
    //     $scope.playing=true;
    // }
    // $scope.stop = function () {
    //     $scope.audio.pause();
    //     $scope.playing=false;
    // }
    // $scope.audio.addEventListener('ended',function () {
    //     $scope.$apply(function () {
    //         $scope.stop();
    //     })
    // })
    // Hidden our previous section's content
    // construct our http request
    $http({
        method: 'JSONP',
        url: nprUrl + '&apiKey=' + apiKey + '&callback=JSON_CALLBACK'
    }).success(function(data, status) {
        // Now we have a list of the stories (data.list.story)
        // in the data object that the NPR API
        // returns in JSON that looks like:
        // data: { "list": {
        //   "title": ...
        //   "story": [
        //     { "id": ...
        //       "title": ...
        $scope.programs=data.list.story;
        $scope.play = function (program) {
            // if($scope.playing){
            //     $scope.audio.pause();
            // }else {
            //     var url = program.audio[0].format.mp4.$text;
            //     $scope.audio.src = url;
            //     $scope.audio.play();
            //     // 储存播放器的状态为正在播放
            //     $scope.playing = true;
            // }
        }
    }).error(function(data, status) {
        // Some error occurred
    });
}]);
app.controller('RelatedController',['$scope',function ($scope) {

}])