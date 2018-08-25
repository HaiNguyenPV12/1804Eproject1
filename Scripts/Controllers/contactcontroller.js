
app.controller('contactcontroller', function ($scope) {
    //scroll to top on load
    $('html,body').animate({ scrollTop: 0 }, 100); //miliseconds
    //document.title = 'Contact Us';
    $('form').on('submit', function () {
        $('#ctModal').modal('show');
        return false;
    });
    $scope.emFunc = function () {
        $scope.contactname = $scope.ctName;
        $scope.contactemail = $scope.ctEmail;
    };
});
