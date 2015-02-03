var dapxApp = angular.module('dapxApp');

dapxApp.controller('subCtrl', ['$scope','$http','$location','subFactory', function($scope, $http, $location, subFactory) {
    var u = $location.path().substr(1);
    $scope.loading = true;
    $scope.posts = subFactory.getPosts(u).then(function(posts){
    	$scope.loading = false;

    	$scope.subName = posts[0].data.subreddit;
    	$scope.posts = posts;

    	$scope.sortPosts = function(sort){
    		if (sort == 'popular') {
    			$location.path($scope.subName);
    		}
    		else{
    			$location.path($scope.subName+"/"+sort);
    		};
	    };
    }, function(msg){
    	alert(msg);
    });
}]);