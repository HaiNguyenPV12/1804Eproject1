var app = angular.module("ecApp", ["ngRoute"]);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'homecontroller'
        })
        .when('/story', {
            templateUrl: 'story.html',
            controller: 'storycontroller'
        })
        .when('/commerce', {
            templateUrl: 'commerce.html',
            controller: 'commercecontroller'
        })
        .when('/mathematic', {
            templateUrl: 'mathematic.html',
            controller: 'mathematiccontroller'
        })
        .when('/language', {
            templateUrl: 'language.html',
            controller: 'languagescontroller'
        })
        .when('/faculty', {
            templateUrl: 'faculty.html'
        })
        .when('/facultycommerce', {
            templateUrl: 'faculty.html',
            controller: 'fcommercecontroller'
        })
        .when('/facultymathematic', {
            templateUrl: 'faculty.html',
            controller:'fmathcontroller'
        })
        .when('/facultylanguages', {
            templateUrl: 'faculty.html',
            controller: 'flancontroller'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'contactcontroller'
        })
        .when('/privacy', {
            templateUrl: 'privacy.html',
            controller: 'privacycontroller'
        })
        .when('/sitemap', {
            templateUrl: 'sitemap.html',
            controller: 'sitemapcontroller'
        });
    //.otherwise({ redirectTo: '/' })
    //faculty.html#commerce
    //faculty.html#mathematics
    //faculty.html#languages
}]);

//app.controller('testcontroller', function ($scope) {
//    document.title = 'test title';
//    $scope.testvar = 'test test';
//});