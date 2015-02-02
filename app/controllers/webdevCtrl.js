var dapxApp = angular.module('dapxApp');

dapxApp.controller('webdevCtrl', ['$scope','$http','subFactory', function($scope, $http, subFactory) {
    $scope.loading = true;
    $scope.posts = subFactory.getPosts('webdev').then(function(posts){
    	$scope.loading = false;
    	$scope.posts = posts;
    }, function(msg){
    	alert(msg);
    });
}]);