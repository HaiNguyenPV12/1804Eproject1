app.controller('privacycontroller', function ($scope, $location, $anchorScroll, $timeout) {
    document.title = 'Privacy Policy';
    //scroll to top on load
    $('html,body').animate({ scrollTop: 0 }, 100); //miliseconds
});

app.controller('sitemapcontroller', function ($scope, $location, $anchorScroll, $timeout) {
    document.title = 'Site Map';
    //scroll to top on load
    $('html,body').animate({ scrollTop: 0 }, 100); //miliseconds
});
