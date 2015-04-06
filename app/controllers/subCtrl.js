var dapxApp = angular.module('redditApp');

dapxApp.controller('subCtrl', ['$scope','$http','$location','$sce','subFactory', function($scope, $http, $location, $sce, subFactory) {
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

    $scope.sortThread = function(permalk){
        $scope.thread = subFactory.getThread(permalk).then(function(comments){

        $scope.comments = comments;

        }, function(msg){
            alert(msg);
        });
    }
}]);