/**
 * Created by Maksym on 10.09.2015.
 */

    function hub(){

        var hub = new Date(2010, 1, 1);
        var hubSec = new Date(2010, 2, 1);
        var difference = hubSec - hub;
        var result = difference/86400000;
        console.log(result);
    };


    function DatePicker(){

        var years  = [2010, 2011];
        var months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        var day = 86400000;
        object = {
            year:'numeric',
            month:'long'
        };
        for(var i = 0; i < months.length; i++) {
            var date = new Date(2010, i, 1);
            var days = i/day;
            console.log(date.toLocaleString("en-US", object) + " this month have " + days);
        }
    };

    option = {
        //year: "numeric",
        month: "long",
        day: 'numeric'
        //weekday:'long'
    };

    for(var i = 2010; i <= 2011; i++){
        for(var j = 0; j <= 1; j++){
            for(var k = 0; k <= 31; k++){
                var date = new Date(2010, j, k);
                console.log(date.toLocaleString("en-US", option));
            }
        }
    }

    var result;
    var currentDate = new Date();
    var startDate = new Date(2015, 0, 1, 0, 0, 0, 0);
    var difference = currentDate - startDate;
    var dayMiliseconds = 86400000;
    var days = difference / dayMiliseconds;
    console.log(days);

    //debugger;
    var arr = [];
    for(var i = 0; i<=50; i++){
        arr[i] = [i];
        if(i <= 10){
            arr.splice(0, 10);
        }
    }

    console.log(arr.length);

    for(var a = 0; a<arr.length; a++){
        if(!arr[a]){
            console.log(a);
        }
    }