app.controller('storycontroller', function ($scope, $location, $anchorScroll, $timeout) {
    document.title = 'Stories';
    //scroll to top on load
    $('html,body').animate({ scrollTop: 0 }, 100); //miliseconds
});
