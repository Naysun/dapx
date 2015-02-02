var dapxApp = angular.module('dapxApp', ['ngRoute','ui.bootstrap']);

dapxApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '../../../views/home.html',
            controller : 'mainCtrl'
        })
        .otherwise({
        	templateUrl : '../../../views/sub.html',
            controller : 'subCtrl'
        });
});