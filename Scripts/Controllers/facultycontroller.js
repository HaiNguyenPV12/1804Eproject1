app.controller('fcommercecontroller', function ($scope, $location, $anchorScroll, $timeout) {
    document.title = 'Faculties';
    $timeout(function () {
        //$location.hash('commerce');
        $anchorScroll.yOffset = 0;
        $anchorScroll('commerce');
    });
});

app.controller('fmathcontroller', function ($scope, $location, $anchorScroll, $timeout) {
    document.title = 'Faculties';
    $timeout(function () {
        //$location.hash('mathematics');
        $anchorScroll.yOffset = 0;
        $anchorScroll('mathematics');
    });
});

app.controller('flancontroller', function ($scope, $location, $anchorScroll, $timeout) {
    document.title = 'Faculties';
    $timeout(function () {
        //$location.hash('mathematics');
        $anchorScroll.yOffset = 0;
        $anchorScroll('languages');
    });
});