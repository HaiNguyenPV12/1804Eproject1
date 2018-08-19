$(document).ready(function () {
    //scroll to top button
    if ($('.ScrollToTop').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.ScrollToTop').addClass('show');
                } else {
                    $('.ScrollToTop').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.ScrollToTop').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({ scrollTop: 0 }, 100); //miliseconds
        });
    }
});

var app = angular.module("ecApp", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'index.html'
        })
        .when('/test2', {
            templateUrl: 'test2.html',
            controller: 'testcontroller'
        })
        .when('/story', {
            templateUrl: 'story.html',
            controller: 'storycontroller'
        })
    //.otherwise({ redirectTo: '/' });
});