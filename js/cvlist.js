$(function () {
    $("input[type=checkbox]").click(function () {
        $('.top-buttons').prop('disabled', $('input[type=checkbox]:checked').length == 0);
    });
    $("input.top-checkbox").click(function () {
        $('.top-buttons').prop('disabled', $('input[type=checkbox]:checked').length == 0);
    });
});