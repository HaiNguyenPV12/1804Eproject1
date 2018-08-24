var app = angular.module("ecApp", ["ngRoute"]);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller:'homecontroller'
        })
        .when('/test2', {
            templateUrl: 'test2.html',
            controller: 'testcontroller'
        })
        .when('/story', {
            templateUrl: 'story.html',
            controller: 'storycontroller'
        })
        .when('/commerce', {
            templateUrl: 'commerce.html',
            controller: 'coursescontroller'
        });
        //.otherwise({ redirectTo: '/' })
}]);

//app.controller('testcontroller', function ($scope) {
//    document.title = 'test title';
//    $scope.testvar = 'test test';
//});