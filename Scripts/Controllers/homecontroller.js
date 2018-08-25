app.controller('homecontroller', function ($scope) {
    document.title = 'Excellent Coaching';
    //scroll to top on load
    $('html,body').animate({ scrollTop: 0 }, 100); //miliseconds
});