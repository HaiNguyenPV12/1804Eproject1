app.controller('coursescontroller', function ($scope, $location, $anchorScroll) {
    if ($('#coursename').html('Commerce')) {
        document.title = 'EC > Commerce';
    }
    //document.title = 'EC > Commerce';
    //$scope.testvar = 'test test';
    $scope.scrollTo = function (scrollLocation) {
        $location.hash(scrollLocation);
        $anchorScroll.yOffset = 20;
        $anchorScroll();
    };
    $(document).ready(function () {
        if ($('#toccontents').is(":visible")) {
            $('#toctoggle').html('[hide]');
        }
        $('#toctoggle').click(function () {
            $('#toccontents').toggle(75, function () {
                var isHidden = $('#toccontents').is(":hidden");
                var isVisible = $('#toccontents').is(":visible");
                if (isHidden) {
                    $('#toctoggle').html('[show]');
                }
                if (isVisible) {
                    $('#toctoggle').html('[hide]');
                }
            });
        });
    });
});