/**
 * Created by Maksym on 21.09.2015.
 */
    var day,ul,year,startCurrentMonthDays,startNextMonthDays,months,btnPrev,startDate,endDate,firstMonth,secondMonth,weekdays,monthDays,prevDate,prevMonthDays,showingDate;
    year = 2015;
    day = 86400000;
    firstMonth = 3;
    secondMonth = 4;
    startNextMonthDays = 0;
    startCurrentMonthDays = 1;
    prevDate = new Date(year, firstMonth-1, 1);
    startDate = new Date(year, firstMonth, 1);
    endDate = new Date(year, secondMonth, 1);
    monthDays = Math.round((endDate - startDate) / day);
    prevMonthDays = Math.round((startDate - prevDate) / day);
    btnPrev = document.getElementById('prev');
    ul = document.getElementById('ul').children;
    showingDate = document.getElementById('date');
    weekdays = ["Sun", "Mon", "Tus", "Wen", "Thu", "Fri", "Sat"];
    months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    showingDate.innerHTML = monthDays + " " + months[firstMonth] + " " + year;

    function fillDays(){
        for(var x = 0; x < ul.length; x++){
            ul[x].className = 'liSecond';
            var firstDay = 7 + startDate.getDay();
            if(x < 7){
                ul[x].innerHTML = weekdays[x];
            }
            if(x >= 7 && x < firstDay){
                ul[x].innerHTML = lastDays(startDate.getDay());
            }
            if(x >= firstDay && x < firstDay+1){
                ul[x].innerHTML = startCurrentMonthDays;
            }
            if(x >= firstDay+1 && x < firstDay+monthDays){
                ul[x].innerHTML = incrementCurrentMonthDays();
            }
            if(x >= firstDay+monthDays && x < ul.length){
                ul[x].innerHTML = incrementNextMonthDays();
            }
        }
    }

    function update(){
        startCurrentMonthDays = 1;
        startNextMonthDays = 0;
    }

    function lastDays(value){
        prevMonthDays += 1;
        return prevMonthDays - value;
    }

    function incrementCurrentMonthDays(){
        return startCurrentMonthDays += 1;
    }

    function incrementNextMonthDays(){
        return startNextMonthDays += 1;
    }

    function setEvents(){
        btnPrev.addEventListener('click', function(){
            getNextData(update, fillDays)
        }, false);
    }

    function getNextData(callUpdate, callFillDays){
        firstMonth += 1;
        secondMonth += 1;
        prevDate = new Date(year, firstMonth-1, 1);
        startDate = new Date(year, firstMonth, 1);
        endDate = new Date(year, secondMonth, 1);
        monthDays = Math.round((endDate - startDate) / day);
        prevMonthDays = Math.round((startDate - prevDate) / day);
        showingDate.innerHTML = monthDays + " " + months[firstMonth] + " " + year;
        callUpdate();
        callFillDays();
    }

    fillDays();
    setEvents();

    console.log(weekdays[startDate.getDay()]);
    console.log(weekdays[endDate.getDay()]);
    console.log(monthDays);
    console.log(ul.length);





