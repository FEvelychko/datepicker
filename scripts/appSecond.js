/**
 * Created by Maksym on 21.09.2015.
 */

    var day = 86400000;
    var ul = document.getElementById('ul').children;
    var showingDate = document.getElementById('date');
    var btnPrev = document.getElementById('prev');
    var firstMonth = 0;
    var secondMonth = 1;
    var startDate = new Date(2015, firstMonth, 1);
    var endDate = new Date(2015, secondMonth, 1);
    var monthDays = Math.round((endDate - startDate) / day);
    var weekdays = ["Sun", "Mon", "Tus", "Wen", "Thu", "Fri", "Sat"];
    var first = 1;
    var second = 0;
    showingDate.innerHTML = monthDays;

    function fillDays(){
        for(var x = 0; x < ul.length; x++){

            ul[x].className = 'liSecond';
            var firstDay = 7 + startDate.getDay();
            if(x < 7){
                ul[x].innerHTML = weekdays[x];
            }
            if(x >= 7 && x < firstDay){
                ul[x].innerHTML = 31;
            }
            if(x >= firstDay && x < firstDay+1){
                ul[x].innerHTML = 1;
            }
            if(x >= firstDay+1 && x < firstDay+monthDays){
                ul[x].innerHTML = add();
            }
            if(x >= firstDay+monthDays && x < ul.length){
                ul[x].innerHTML = addSec();
            }
        }
    }
    fillDays();

    function update(){
        first = 1;
        second = 0;
    }

    function add(){
        return first += 1;
    }
    function addSec(){
        return second += 1;
    }

    btnPrev.addEventListener('click', function(){getPrevData(update, fillDays)}, false);

    function getPrevData(callUpdate, callFillDays){
        firstMonth += 1;
        secondMonth += 1;
        startDate = new Date(2015, firstMonth, 1);
        endDate = new Date(2015, secondMonth, 1);
        monthDays = Math.round((endDate - startDate) / day);
        callUpdate();
        callFillDays();
    }

    console.log(weekdays[startDate.getDay()]);
    console.log(weekdays[endDate.getDay()]);
    console.log(monthDays);
    console.log(ul.length);




