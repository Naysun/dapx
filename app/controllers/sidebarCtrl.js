var dapxApp = angular.module('dapxApp');

dapxApp.controller('sidebarCtrl', ['$scope','$location', function($scope,$location) {
    $scope.gotoSub = function(inputSub){
    	$location.path("/"+inputSub);
    };
}]);