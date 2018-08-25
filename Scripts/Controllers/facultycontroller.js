app.controller('fcommercecontroller', function ($scope, $location, $anchorScroll, $timeout) {
    document.title = 'Faculties';
    $timeout(function () {
        $location.hash('commerce');
        $anchorScroll.yOffset = 0;
        $anchorScroll('commerce');
    });
    //scroll to contents
    $scope.scrollTo = function (scrollLocation) {
        $location.hash(scrollLocation);
        $anchorScroll.yOffset = 0;
        $anchorScroll();
    };
});

app.controller('fmathcontroller', function ($scope, $location, $anchorScroll, $timeout) {
    document.title = 'Faculties';
    $timeout(function () {
        $location.hash('mathematics');
        $anchorScroll.yOffset = 0;
        $anchorScroll('mathematics');
    });
    //scroll to contents
    $scope.scrollTo = function (scrollLocation) {
        $location.hash(scrollLocation);
        $anchorScroll.yOffset = 0;
        $anchorScroll();
    };
});

app.controller('flancontroller', function ($scope, $location, $anchorScroll, $timeout) {
    document.title = 'Faculties';
    $timeout(function () {
        $location.hash('languages');
        $anchorScroll.yOffset = 0;
        $anchorScroll('languages');
    });
    //scroll to contents
    $scope.scrollTo = function (scrollLocation) {
        $location.hash(scrollLocation);
        $anchorScroll.yOffset = 0;
        $anchorScroll();
    };
});
