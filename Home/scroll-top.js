$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#myBtn').fadeIn();
        } else {
            $('#myBtn').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#myBtn').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    $('#myBtn').tooltip('show');

});