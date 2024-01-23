// Defining variables
var present = moment().format("dddd, MMMM Do YYYY ");
var now = moment().format("H A");

// Displays current date in header
$("#currentDay").text(present);

// defining an array of objects
var timeSchedule = [
    {
        time: "9 AM",
        event: ""
    },
    {
        time: "10 AM",
        event: ""
    },
    {
        time: "11 AM",
        event: ""
    },
    {
        time: "12 PM",
        event: ""
    },
    {
        time: "1 PM",
        event: ""
    },
    {
        time: "2 PM",
        event: ""
    },
    {
        time: "3 PM",
        event: ""
    },
    {
        time: "4 PM",
        event: ""
    },
    {
        time: "5 PM",
        event: ""
    },
];

// Creating and Defining Rows 
timeSchedule.forEach(function (timeBlock, index) {
    var timeStamp = timeBlock.time;
    var blockColor = rowColors(timeStamp);
    var rows =
        '<div class="time-block" id="' + index + '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' + timeStamp +
        '</div><textarea id="hours' + index + '" placeholder="Add events here" class="form-control ' + blockColor + '">' + timeBlock.event + '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>'

    // To attach rows to container div
    $(".container").append(rows);
});

// For row coloring
function rowColors(time) {
    var scheduleStat = moment(now, "H A");
    var scheduleTime = moment(time, "H A");
    if (scheduleStat.isBefore(scheduleTime) === true) {
        return "future";
    } else if (scheduleStat.isAfter(scheduleTime) === true) {
        return "past";
    } else {
        return "present";
    }
}

