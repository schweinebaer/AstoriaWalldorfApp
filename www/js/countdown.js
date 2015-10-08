/**
 * Created by Benedikt on 07.10.2015.
 */

function cdtd() {
    var xmas = new Date("October 10, 2015 14:00:00");
    var now = new Date();
    var timeDiff = xmas.getTime() - now.getTime();
    if (timeDiff <= 0) {
        clearTimeout(timer);
        document.write("LIVE");
        // Run any code needed for countdown completion here
    }
    var seconds = Math.floor(timeDiff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
    document.getElementById("daysBox").innerHTML = days;
    document.getElementById("hoursBox").innerHTML = hours;
    document.getElementById("minsBox").innerHTML = minutes;
    document.getElementById("secsBox").innerHTML = seconds;
    var timer = setTimeout('cdtd()',1000);
}