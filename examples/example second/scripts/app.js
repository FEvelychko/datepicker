/**
 * Created by Maksym on 21.09.2015.
 */
    var day,li,ulList,inputData,btnShowData,liQuantity,year,yearDisplay,newDiv,startCurrentMonthDays,startNextMonthDays,months,btnPrev,btnNext,startDate,endDate,firstMonth,secondMonth,weekdays,monthDays,prevDate,prevMonthDays,showingDate;
    year = 2015;
    day = 86400000;
    firstMonth = 3;
    secondMonth = 4;
    liQuantity = 49;
    startNextMonthDays = 0;
    startCurrentMonthDays = 1;
    prevDate = new Date(year, firstMonth-1, 1);
    startDate = new Date(year, firstMonth, 1);
    endDate = new Date(year, secondMonth, 1);
    monthDays = Math.round((endDate - startDate) / day);
    prevMonthDays = Math.round((startDate - prevDate) / day);
    newDiv = document.createElement("div");
    showingDate = document.getElementById('date');
    weekdays = ["Sun", "Mon", "Tus", "Wen", "Thu", "Fri", "Sat"];
    months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


    function addTemplate(){

        var template =
            '<div class="datepicker">'+
            '<div class="headinput">' +
            '<div class = "input"><input type="text" class = "yearData" id = "yearData" value=""/></div>' +
            '<div class = "submit"><input type="submit" class = "showData" id = "showData" value="show"/></div>' +
            '</div>'+
            '<div class="head">'+
            '<div class="previous"><button class = "btn" id = "prev">prev</button></div>'+
            '<div class="yearview">August 2015</div>'+
            '<div class="next"><button class = "btn" id = "next">next</button></div>'+
            '</div>'+
            '<div class="body">'+
            '<div class="calendarbody">' +
            '<ul id = "ul" class = "ul"></ul>' + '</div>'+ '</div>'+
            '</div>';
        newDiv.innerHTML = template;
        document.body.appendChild(newDiv);
        ulList = document.getElementById('ul');
        for(var x = 0; x < liQuantity; x++){
            li = document.createElement('li');
            ulList.appendChild(li);
            ulList.children[x].className = 'li';
            li.hasAttribute("onclick");
        }
        yearDisplay = newDiv.querySelector('.yearview');
        yearDisplay.innerHTML = months[firstMonth] + " " + year;

    };

    function showChosenDate(value){
        console.log(value + " " + months[firstMonth] + " " + year);
    }

    function fillDays(){

        inputData = document.getElementById('yearData');
        btnShowData = document.getElementById('showData');
        btnNext = document.getElementById('next');
        btnPrev = document.getElementById('prev');
        ulList = document.getElementById('ul').children;

        function incrementCurrentMonthDays(){
            return startCurrentMonthDays += 1;
        };
        function incrementNextMonthDays(){
            return startNextMonthDays += 1;
        };
        function lastDays(value){
            prevMonthDays += 1;
            return prevMonthDays - value;
        };

        for(var x = 0; x < ulList.length; x++){
            var firstDay = 7 + startDate.getDay();
            if(x < 7){
                ulList[x].innerHTML = weekdays[x];
            }
            if(x >= 7 && x < firstDay){
                ulList[x].innerHTML = lastDays(startDate.getDay());
                ulList[x].style.color = '#555';
                ulList[x].addEventListener('click', function(x){var kozel = ulList[x].innerHTML; showChosenDate(kozel)}.bind(fillDays, x), false);

                /*if($(ulList[x]).data('clicked')) {
                    alert('yes');
                }*/
                /*if (ulList[x].hasAttribute("onclick")) {
                    //x.setAttribute("target", "_self");
                    ulList[x].addEventListener('click', function(x){var kozel = ulList[x].innerHTML; showChosenDate(kozel)}.bind(fillDays, x), false);
                }*/
                //ulList[x].addEventListener('click', function(x){var kozel = ulList[x].innerHTML; showChosenDate(kozel)}.bind(fillDays, x), false);
            }
            if(x >= firstDay && x < firstDay+1){
                ulList[x].innerHTML = startCurrentMonthDays;
                ulList[x].addEventListener('click', function(x){var kozel = ulList[x].innerHTML; showChosenDate(kozel)}.bind(fillDays, x), false);
            }
            if(x >= firstDay+1 && x < firstDay+monthDays){
                ulList[x].innerHTML = incrementCurrentMonthDays();
                ulList[x].addEventListener('click', function(x){var kozel = ulList[x].innerHTML; showChosenDate(kozel)}.bind(fillDays, x), false);
            }
            if(x >= firstDay+monthDays && x < ulList.length){
                ulList[x].innerHTML = incrementNextMonthDays();
                ulList[x].style.color = '#555';
                ulList[x].addEventListener('click', function(x){var kozel = ulList[x].innerHTML; showChosenDate(kozel)}.bind(fillDays, x), false);
            }
        }

    };

    function fillColorDifference(){

        for(var x = 0; x < ulList.length; x++){
            var firstDay = 7 + startDate.getDay();
            if(x < 7){
                ulList[x].style.color = 'aliceblue';
            }
            if(x >= 7 && x < firstDay){
                ulList[x].style.color = 'aliceblue';

            }
            if(x >= firstDay && x < firstDay+1){
                ulList[x].style.color = 'aliceblue';

            }
            if(x >= firstDay+1 && x < firstDay+monthDays){
                ulList[x].style.color = 'aliceblue';
            }
            if(x >= firstDay+monthDays && x < ulList.length){
                ulList[x].style.color = 'aliceblue';
            }
        }

    };

    function update(){
        startCurrentMonthDays = 1;
        startNextMonthDays = 0;
    };

    function setEvents(){

        btnNext.addEventListener('click', function(){
            getNextData(update, fillDays, changeYear)
        }, false);
        btnPrev.addEventListener('click', function(){
            getPrevData(update, fillDays, changeYear)
        }, false);
        btnShowData.addEventListener('click', function(){
            getQueryData(update, fillDays, changeYear)
        }, false);

    };

    function changeYear(){

         if(firstMonth === 12){
            secondMonth = 1;
            firstMonth = secondMonth - 1;
            year += 1;
         }

         if(firstMonth === -1){
            secondMonth = 11;
            firstMonth = secondMonth - 1;
            year -= 1;
         }

    };

    function calculateDays(){

        prevDate = new Date(year, firstMonth-1, 1);
        startDate = new Date(year, firstMonth, 1);
        endDate = new Date(year, secondMonth, 1);
        monthDays = Math.round((endDate - startDate) / day);
        prevMonthDays = Math.round((startDate - prevDate) / day);
        yearDisplay.innerHTML = months[firstMonth] + " " + year;

    };

    function getQueryData(callUpdate, callFillDays, callChangeYear){

        if(!isNaN(inputData.value)){
            year = Number(inputData.value);
        }
        callChangeYear();
        calculateDays();
        callUpdate();
        fillColorDifference();
        callFillDays();

    };

    function getNextData(callUpdate, callFillDays, callChangeYear){

        firstMonth += 1;
        secondMonth += 1;
        callChangeYear();
        calculateDays();
        callUpdate();
        fillColorDifference();
        callFillDays();

    };

    function getPrevData(callUpdate, callFillDays, callChangeYear){

        firstMonth -= 1;
        secondMonth -= 1;
        callChangeYear();
        calculateDays();
        callUpdate();
        fillColorDifference();
        callFillDays();

    };

    addTemplate();
    fillDays();
    setEvents();







