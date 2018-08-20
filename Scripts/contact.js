var app = angular.module('contact', []);
app.controller('contactcontroller', function ($scope) {
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
