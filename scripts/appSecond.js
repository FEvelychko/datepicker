/**
 * Created by Maksym on 21.09.2015.
 */
    var day = 86400000;
    var ul = document.getElementById('ul').children;
    var showingDate = document.getElementById('date');
    var startDate = new Date(2015, 5, 1);
    var endDate = new Date(2015, 6, 1);
    var monthDays = Math.round((endDate - startDate) / day);
    var weekdays = ["Sun", "Mon", "Tus", "Wen", "Thu", "Fri", "Sat"];
    showingDate.innerHTML = monthDays;

    for(var x = 0; x < ul.length; x++){

        ul[x].className = 'liSecond';
        var firstDay = 7 + startDate.getDay();
        if(x < 7){
            ul[x].innerHTML = weekdays[x];
        }
        if(x >= 7 && x < firstDay){
            ul[x].innerHTML = '31';
        }
        if(x >= firstDay && x < firstDay+1){
            ul[x].innerHTML = '1';
        }
        if(x >= firstDay+1 && x < firstDay+monthDays){
            ul[x].innerHTML = '2';
        }
        if(x >= firstDay+monthDays && x < ul.length){
            ul[x].innerHTML = '0';
        }
    }

    console.log(weekdays[startDate.getDay()]);
    console.log(weekdays[endDate.getDay()]);
    console.log(monthDays);
    console.log(ul.length);




