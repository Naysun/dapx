var dapxApp = angular.module('dapxApp');

dapxApp.controller('soccerCtrl', ['$scope','$http','subFactory', function($scope, $http, subFactory) {
    $scope.loading = true;
    $scope.posts = subFactory.getPosts('soccer').then(function(posts){
    	$scope.loading = false;
    	$scope.posts = posts;
    }, function(msg){
    	alert(msg);
    });
}]);