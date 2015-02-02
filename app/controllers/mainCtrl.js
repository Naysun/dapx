var dapxApp = angular.module('dapxApp');

dapxApp.controller('mainCtrl', ['$scope','$http', function($scope, $http) {
    $scope.user = "Nathan";
}]);