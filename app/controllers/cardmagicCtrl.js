var dapxApp = angular.module('dapxApp');

dapxApp.controller('cardmagicCtrl', ['$scope','$http','subFactory', function($scope, $http, subFactory) {
    $scope.loading = true;
    $scope.posts = subFactory.getPosts('cardmagic').then(function(posts){
    	$scope.loading = false;
    	$scope.posts = posts;
    }, function(msg){
    	alert(msg);
    });
}]);