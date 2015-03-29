var dapxApp = angular.module('redditApp');

dapxApp.controller('sidebarCtrl', ['$scope','$location', function($scope,$location) {
    $scope.gotoSub = function(inputSub){
    	$location.path("/"+inputSub);
    };
}]);