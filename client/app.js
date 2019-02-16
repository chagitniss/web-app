
var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function($routeProvider){
    $routeProvider
        .when('/Insert', {
            templateUrl: "views/Insert.html",
            controller: "InsertController"
        })
        .when('/Display', {
            templateUrl: "views/Display.html",
            controller: "DisplayController"
        })
});
myApp.controller("InsertController", ["$scope", "$http", InsertController]);
// myApp.controller("artistShowController", ["$scope",  "$routeParams", "$http", artistShowController]);
myApp.controller("DisplayController", ["$scope", "$http", DisplayController]);
