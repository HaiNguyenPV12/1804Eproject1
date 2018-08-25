app.controller('commercecontroller', function ($scope, $location, $anchorScroll) {
    document.title = 'EC > Commerce';
    //scroll to top on load
    $anchorScroll();
    //scroll to contents
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

app.controller('mathematiccontroller', function ($scope, $location, $anchorScroll) {
    document.title = 'EC > Mathematic';
    //scroll to top on load
    $anchorScroll();
    //scroll to contents
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

app.controller('languagescontroller', function ($scope, $location, $anchorScroll) {
    document.title = 'EC > Languages';
    //scroll to top on load
    $anchorScroll();
    //scroll to contents
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