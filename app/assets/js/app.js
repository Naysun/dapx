var dapxApp = angular.module('dapxApp', ['ngRoute','ui.bootstrap']);

dapxApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '../../../views/home.html',
            controller : 'homeCtrl'
        })
        .when('/soccer', {
            templateUrl : '../../../views/soccer.html',
            controller  : 'soccerCtrl'
        })
        .when('/cardmagic', {
            templateUrl : '../../../views/cardmagic.html',
            controller  : 'cardmagicCtrl'
        })
        .when('/webdev', {
            templateUrl : '../../../views/webdev.html',
            controller  : 'webdevCtrl'
        })
        .otherwise({
        	redirectTo: '/'
        });
});