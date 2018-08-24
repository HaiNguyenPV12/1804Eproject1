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

