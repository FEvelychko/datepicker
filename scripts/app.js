/**
 * Created by Maksym on 10.09.2015.
 */

    //debugger;

    function DatePicker(){

        this.day = 86400000;
        this.currentDate = new Date();
        this.months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        this.weekdays = ["Sun", "Mon", "Tus", "Wen", "Thu", "Fri", "Sat"];
        this.currentMonth = 6;
        this.currentYear = 2015;
        return this;

    }

    DatePicker.prototype.addTemplate = function(){

        var template =
            '<div class="datepicker">'+
            '<div class="headinput"></div>'+
            '<div class="head">'+
            '<div class="previous"><button class = "btn" id = "prev">prev</button></div>'+
            '<div class="yearview">August 2015</div>'+
            '<div class="next"><button class = "btn" id = "next">next</button></div>'+
            '</div>'+
            '<div class="body">'+
            '<div class="calendarhead"></div>'+
            '<div class="calendarbody"></div>'+
            '</div>'+
            '</div>';
        this.newDiv = document.createElement("div");
        this.newDiv.innerHTML = template;
        document.body.appendChild(this.newDiv);
        return this;

    };

    DatePicker.prototype.setFields = function(){

        this.yearDisplay = this.newDiv.querySelector('.yearview');                 /* setting year dating */
        this.weekdaysDisplay = this.newDiv.querySelector('.calendarhead');         /* setting week days dating */
        this.daysDisplay = this.newDiv.querySelector('.calendarbody');
        this.ul = document.createElement('ul');
        this.ul.className = "ul";
        this.weekdaysDisplay.appendChild(this.ul);

        for(var i=0; i<this.weekdays.length;i++){
            this.li = document.createElement('li');
            this.li.className = "li";
            this.li.innerHTML = this.weekdays[i];
            this.ul.appendChild(this.li);
        }

        this.setViewLists();
        this.getMonthDays();
        this.showMonthYear();
        this.setAllDays();
        return this;

    };

    DatePicker.prototype.setViewLists = function() {

        this.ulDays = document.createElement('ul');
        this.ulDaysSecond = document.createElement('ul');
        this.ulDaysThird = document.createElement('ul');
        this.ulDaysForth = document.createElement('ul');
        this.ulDaysFifth = document.createElement('ul');

        this.ulDays.className = "ulDays";
        this.ulDaysSecond.className = "ulDays";
        this.ulDaysThird.className = "ulDays";
        this.ulDaysForth.className = "ulDays";
        this.ulDaysFifth.className = "ulDays";

        this.daysDisplay.appendChild(this.ulDays);
        this.daysDisplay.appendChild(this.ulDaysSecond);
        this.daysDisplay.appendChild(this.ulDaysThird);
        this.daysDisplay.appendChild(this.ulDaysForth);
        this.daysDisplay.appendChild(this.ulDaysFifth);
        return this;

    };

    DatePicker.prototype.setAllDays = function() {

        for(var j=1; j<=this.monthDays; j++){
            if(j<=7){
                this.li = document.createElement('li');
                this.li.className = "li";
                this.li.innerHTML = j;
                this.ulDays.appendChild(this.li);
                this.showCurrentDay(j);
                this.addEvent(j);
            }
            if(j>7 && j<=14){
                this.li = document.createElement('li');
                this.li.className = "li";
                this.li.innerHTML = j;
                this.ulDaysSecond.appendChild(this.li);
                this.showCurrentDay(j);
                this.addEvent(j);
            }
            if(j>14 && j<=21){
                this.li = document.createElement('li');
                this.li.className = "li";
                this.li.innerHTML = j;
                this.ulDaysThird.appendChild(this.li);
                this.showCurrentDay(j);
                this.addEvent(j);
            }
            if(j>21 && j<=28){
                this.li = document.createElement('li');
                this.li.className = "li";
                this.li.innerHTML = j;
                this.ulDaysForth.appendChild(this.li);
                this.showCurrentDay(j);
                this.addEvent(j);
            }
            if(j>28 && j <=this.monthDays){
                this.li = document.createElement('li');
                this.li.className = "li";
                this.li.innerHTML = j;
                this.ulDaysFifth.appendChild(this.li);
                this.showCurrentDay(j);
                this.addEvent(j);
            }
        }
        return this;

    };

    DatePicker.prototype.showCurrentDay = function(number){

        var currentDay = number;
        var today = this.currentDate.getDate();
        if(currentDay == today){
            this.li.style.backgroundColor = 'red';
        }
        return this;

    };

    DatePicker.prototype.addEvent = function(number){

        var chosenDay = number;
        var input = this.newDiv.querySelector('.headinput');
        var showCurrentDay = function(){
            console.log(chosenDay + " " + this.months[this.currentMonth] + " " + this.currentYear);
            input.innerHTML = chosenDay + " " + this.months[this.currentMonth] + " " + this.currentYear;
        };
        this.li.addEventListener('click', showCurrentDay.bind(this));
        return this;

    };

    DatePicker.prototype.showMonthYear = function() {

        this.yearDisplay.innerHTML = this.months[this.currentMonth] + " " + this.currentYear;
        return this;

    };

    DatePicker.prototype.getMonthDays = function() {

        var startDate = new Date(this.currentYear, this.currentMonth, 1);
        var endDate = new Date(this.currentYear, this.currentMonth + 1, 1);
        this.monthDays = Math.round((endDate - startDate) / this.day);
        return this;

    };

    DatePicker.prototype.setPossibleDays = function(days) {

        if(days === 28){
            for(var x = 0; x<=this.ulDaysFifth.children.length; x++){
                this.ulDaysFifth.children[x].innerHTML = "";
            }
        }
        if(days === 29){
            this.ulDaysFifth.children[0].innerHTML = "29";
            this.ulDaysFifth.children[1].innerHTML = "";
            this.ulDaysFifth.children[2].innerHTML = "";
        }
        if(days === 30){
            this.ulDaysFifth.children[0].innerHTML = "29";
            this.ulDaysFifth.children[1].innerHTML = "30";
            this.ulDaysFifth.children[2].innerHTML = "";
        }
        if(days === 31){
            this.ulDaysFifth.children[0].innerHTML = "29";
            this.ulDaysFifth.children[1].innerHTML = "30";
            this.ulDaysFifth.children[2].innerHTML = "31";
        }
        return this;

    };

    DatePicker.prototype.setPossibleYears = function(month) {

        if(month == 12){
            this.currentMonth = 0;
            this.currentYear += 1;

        }
        else if(month == -1){
            this.currentMonth = 11;
            this.currentYear -= 1;
        }
        return this;

    };


    DatePicker.prototype.getPrevious = function() {

        this.currentMonth = this.currentMonth - 1;
        this.setPossibleYears(this.currentMonth);
        this.showMonthYear();                                                   /* on changing month, show current month/year */
        this.getMonthDays();                                                    /* getting days from each month using difference between 2 months  */
        this.setPossibleDays(this.monthDays);                                   /* depending on how many days in months, set this quantity */
        //console.log(this.months[this.currentMonth] + " " + this.monthDays + " " + this.currentYear);
        return this;

    };

    DatePicker.prototype.getNext = function() {

        this.currentMonth = this.currentMonth + 1;
        this.setPossibleYears(this.currentMonth);
        this.showMonthYear();
        this.getMonthDays();
        this.setPossibleDays(this.monthDays);
        //console.log(this.months[this.currentMonth] + " " + this.monthDays + " " + this.currentYear);
        return this;

    };

    DatePicker.prototype.changeDate = function(){

        var btnPrev = document.getElementById('prev');
        var btnNext = document.getElementById('next');
        btnPrev.addEventListener('click', this.getPrevious.bind(this), false);
        btnNext.addEventListener('click', this.getNext.bind(this), false);
        return this;

    };

    var datePicker = new DatePicker();
    datePicker.addTemplate();
    datePicker.setFields();
    datePicker.changeDate();


    /*DatePicker.prototype.getMonthDays = function(){
     this.year = this.currentDate.getFullYear();
     this.month = this.currentDate.getMonth();
     for(var index = 0; index < this.months.length; index++){
     this.startDate = new Date(this.year, index, 1);
     this.endDate = new Date(this.year, index+1, 1);
     this.monthDays = Math.round((this.endDate - this.startDate)/this.day);
     this.data[index] = {year: this.year, month: this.months[index], days: this.monthDays};
     }
     return this;
     };*/

    /*this.currentMonthIndex = this.months.indexOf(this.currentMonth);
     console.log(this.currentMonthIndex);
     this.currentMonth = this.months[this.currentMonthIndex - 1];
     this.yearDisplay.innerHTML = this.currentMonth + " " + this.year;
     this.startDate = new Date(this.year, this.currentMonthIndex, 1);
     this.endDate = new Date(this.year, this.currentMonthIndex+1, 1);
     this.monthDays = Math.round((this.endDate - this.startDate)/this.day);
     console.log(this.monthDays);
     for(var j=1; j<=this.monthDays; j++){
     if(j<=7){
     this.li = document.createElement('li');
     this.li.className = "li";
     this.li.innerHTML = j;
     this.ulDays.appendChild(this.li);
     }
     if(j>7 && j<=14){
     this.li = document.createElement('li');
     this.li.className = "li";
     this.li.innerHTML = j;
     this.ulDaysSecond.appendChild(this.li);
     }
     if(j>14 && j<=21){
     this.li = document.createElement('li');
     this.li.className = "li";
     this.li.innerHTML = j;
     this.ulDaysThird.appendChild(this.li);
     }
     if(j>21 && j<=28){
     this.li = document.createElement('li');
     this.li.className = "li";
     this.li.innerHTML = j;
     this.ulDaysForth.appendChild(this.li);
     }
     if(j>28 && j <=this.monthDays){
     this.li = document.createElement('li');
     this.li.className = "li";
     this.li.innerHTML = j;
     this.ulDaysFifth.appendChild(this.li);
     }
     }
     this.yearDisplay.innerHTML = this.months[this.currentDate.getMonth()];
     this.currentDate.getMonth();
     this.newMonths = [];
     for(var i = this.currentDate.getMonth(); i>=0; i--){
     this.newMonths.push(this.months[i]);
     //delete this.newMonths[0];
     }
     delete this.newMonths[0];
     this.yearDisplay.innerHTML = this.newMonths[1];
     return this.newMonths;
     this.months.splice(this.months[this.currentDate.getMonth()], 1);
     console.log(this.newMonths);*/

    /*DatePicker.prototype.getNext = function(){
     console.log(this.currentDate.getMonth());
     };*/


    /*DatePicker.prototype.showDatePicker = function(){
     //this.datePicker = document.getElementById('datePicker');
     this.newDiv = document.createElement("div");
     this.yearBlock = document.createElement("div");
     //this.leftButton = document.createElement("div");
     //this.rightButton = document.createElement("div");
     //this.daysBlock = document.createElement("div");
     this.btn = document.getElementById('btn');
     this.btn.addEventListener("click", this.setDate.bind(this), false);
     return this;
     };*/
    /*DatePicker.prototype.setDate = function(){
     this.yearBlock.innerHTML = this.year;
     this.newDiv.className = "newDiv";
     this.leftButton.className = "leftBtn";
     this.yearBlock.className = "yearBlock";
     this.rightButton.className = "rightBtn";
     this.daysBlock.className = "daysBlock";
     this.newDiv.appendChild(this.yearBlock);
     this.datePicker.appendChild(this.newDiv);
     this.newDiv.appendChild(this.leftButton);
     this.newDiv.appendChild(this.yearBlock);
     this.newDiv.appendChild(this.rightButton);
     this.newDiv.appendChild(this.daysBlock);
     //this.newDiv.appendChild(this.yearBlock);
     //console.log(this.newDiv);
     return this;
     };*/
    /*DatePicker.prototype.buildPicker = function(){
     var datepicker = document.getElementById('datePicker');
     var newDiv = document.createElement("div");
     newDiv.className = "newDiv";
     var leftButton = document.createElement("div");
     leftButton.className = "leftBtn";
     leftButton.innerHTML = "left";
     var yearBlock = document.createElement("div");
     yearBlock.className = "yearBlock";
     //yearBlock.innerHTML = this.year;
     var rightButton = document.createElement("div");
     rightButton.className = "rightBtn";
     rightButton.innerHTML = "right";
     var daysBlock = document.createElement("div");
     daysBlock.className = "daysBlock";
     daysBlock.innerHTML = "days!!!!!!!!";
     datepicker.appendChild(newDiv);
     newDiv.appendChild(leftButton);
     newDiv.appendChild(yearBlock);
     newDiv.appendChild(rightButton);
     newDiv.appendChild(daysBlock);
     this.setDate();
     //event.target.removeEventListener(event.type, arguments.callee);
     };*/


    /*DatePicker.prototype.decodeMonths = function() {
     for (var index = 0; index < this.months.length; index++) {
     //this.data[index][this.months[index]] = this.data[index].month;
     //this.data[index][this.months[index]] = this.data[index].month;
     //delete this.data[index].month;
     }
     return this.data;
     };*/

    /*DatePicker.prototype.renameProperty = function (oldName, newName) {
     datePicker.decodeMonthId();
     if (oldName == newName) {
     return this.objFirst;
     }
     if (this.objFirst.hasOwnProperty(oldName)) {
     this.objFirst[newName] = this.objFirst[oldName];
     delete this.objFirst[oldName];
     }
     return this.objFirst;
     };*/


    /*(function datePicker(){
     var start, end, difference, monthDays, monthsPerYear, daysPerMonth, daysPerWeek;
     var day = 86400000;
     var daysInMonth = [];
     var years = [2015];
     var months = ["January","February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     for(var i = 0; i < months.length; i++){
     start = new Date(years[0], i, 1);
     end = new Date(years[0], i+1, 1);
     difference = end - start;
     monthDays = difference/day;
     monthsPerYear = months[i].toString();
     for(var j = 1; j <= monthDays; j++ ){
     daysPerMonth = daysInMonth[j] = j;
     console.log(monthsPerYear + " " + daysPerMonth);
     //console.log(Math.round(monthDays) + " " + yearMonths + daysPerMonth);
     }
     }
     }());*/