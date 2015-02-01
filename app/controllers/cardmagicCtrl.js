var dapxApp = angular.module('dapxApp');
dapxApp.controller('cardmagicCtrl', ['$scope','$http', function($scope, $http) {
    $http.get('http://www.reddit.com/r/cardmagic.json').success(function(data){
        $scope.posts = data.data.children
        $scope.subrd = data.data.children[0].data.subreddit
    });
}]);