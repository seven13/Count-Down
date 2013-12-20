
var now = new Date();
var current_year = now.getFullYear();
var next_year = current_year + 1;

// Set the date we're counting down to.
var target_date = new Date("Jan 1, " + next_year).getTime();
 
// Functional code stuff ...
var days, hours, minutes, seconds;

var $days = document.getElementById("d");
var $hours = document.getElementById("h");
var $minutes = document.getElementById("m");
var $seconds = document.getElementById("s");

function update() {

    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 

    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     

    $days.innerHTML = pad(days, 2);
    $hours.innerHTML = pad(hours, 2);
    $minutes.innerHTML = pad(minutes, 2);
    $seconds.innerHTML = pad(seconds, 2);
}

// Immediately update the HTML every second ...
update();

setInterval(update, 1000);

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
