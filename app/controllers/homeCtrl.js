var dapxApp = angular.module('dapxApp');
dapxApp.controller('homeCtrl', ['$scope','$http', function($scope, $http) {
    $scope.test = "Welcome :-)"
}]);