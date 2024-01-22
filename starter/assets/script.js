// To display current date in header
$(function () {
    var currentDay = $("#currentDay");
    var now = dayjs().format("dddd, MMMM D YYYY");
    currentDay.text(now);
});
