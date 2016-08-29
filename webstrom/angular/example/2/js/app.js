function MyController($scope){
    $scope.clock = {
        now:new Date()
    };
    var updataClock = function(){
        $scope.clock.now = new Date();
    };
    setInterval(function(){
        $scope.$apply(updataClock);
    },1000);
    updataClock();
}