var dapxApp = angular.module('dapxApp');
dapxApp.controller('soccerCtrl', ['$scope','$http', function($scope, $http) {
    $scope.test - "test soccer"
    $http.get('http://www.reddit.com/r/soccer.json').success(function(data){
        $scope.posts = data.data.children
        $scope.subrd = data.data.children[0].data.subreddit
    });
}]);