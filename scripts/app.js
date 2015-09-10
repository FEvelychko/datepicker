/**
 * Created by Maksym on 10.09.2015.
 */

(function hub(){

    var days = [];
    var weekday = [];
    var day = 86400000;
    var years = [2015];
    var months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for(var i = 0; i < months.length; i++){
        var hub = new Date(years[0], i, 1);
        var hubSec = new Date(years[0], i+1, 1);
        var difference = hubSec - hub;
        var result = difference/day;
        var monthName = months[i].toString();
        var j = result;
        for(j = 1; j <= result; j++ ){
            days[j] = j;
            var monthDays = days[j];
            console.log(Math.round(result) + " " + monthName + " " + monthDays);
        }
    }
}());