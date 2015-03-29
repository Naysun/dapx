var dapxApp = angular.module('redditApp');

dapxApp.controller('mainCtrl', ['$scope','$http','$location','subFactory', function($scope, $http, $location, subFactory) {
    $scope.loading = true;
    $scope.posts = subFactory.getPosts('all').then(function(posts){
    	$scope.loading = false;

    	$scope.posts = posts;
    }, function(msg){
    	alert(msg);
    });
}]);