function InlineEditorController($scope){
    $scope.showtooltip = false;
    $scope.value = 'Edit me.';
    $scope.hideTooltip = function(){
        $scope.showtooltip = false;
    }

    $scope.toggleTooltip = function(e){
        e.stopPropagation();
        $scope.showtooltip = !$scope.showtooltip;
    }
}