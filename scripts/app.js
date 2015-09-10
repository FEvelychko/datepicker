/**
 * Created by Maksym on 10.09.2015.
 */

//debugger;

    function DatePicker(){
        this.currentDate = new Date();
        this.data = [];
        this.days = [];
        this.day = 86400000;
        this.months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        this.weekdays = ["Sun", "Mon", "Tus", "Wen", "Thu", "Fri", "Sat"];
        return this;
    }
    DatePicker.prototype.getMonthDays = function(){
        for(var index = 0; index < this.months.length; index++){
            this.year = this.currentDate.getFullYear();
            this.month = this.currentDate.getMonth();
            this.startDate = new Date(this.year, index, 1);
            this.endDate = new Date(this.year, index+1, 1);
            this.monthDays = Math.round((this.endDate - this.startDate)/this.day);
            this.data[index] = {year: this.year, month: this.months[index], days: this.monthDays};
        }
        return this;
    };
    DatePicker.prototype.getTemplate = function(){
        this.template =
            '<div class="datepicker">'+
            '<div class="head">'+
            '<div class="previous"></div>'+
            '<div class="yearview">August 2015</div>'+
            '<div class="next"></div>'+
            '</div>'+
            '<div class="body">'+
            '<div class="calendarhead"></div>'+
            '<div class="calendarbody"></div>'+
            '</div>'+
            '</div>';
        this.newDiv = document.createElement("div");
        this.newDiv.innerHTML = this.template;
        document.body.appendChild(this.newDiv);
        return this;
    };
    DatePicker.prototype.setDate = function(){
        this.yearDisplay = this.newDiv.querySelector('.yearview');                 /* setting year dating */
        this.weekdaysDisplay = this.newDiv.querySelector('.calendarhead');         /* setting week days dating */
        this.daysDisplay = this.newDiv.querySelector('.calendarbody');
        this.yearDisplay.innerHTML = this.months[this.currentDate.getMonth()] + " " + this.year;
        this.ul = document.createElement('ul');
        this.ul.className = "ul";
        this.weekdaysDisplay.appendChild(this.ul);
        for(var i=0; i<this.weekdays.length;i++){
            this.li = document.createElement('li');
            this.li.className = "li";
            this.li.innerHTML = this.weekdays[i];
            this.ul.appendChild(this.li);
        }
        this.startDate = new Date(this.year, this.currentDate.getMonth(), 1);
        this.endDate = new Date(this.year, this.currentDate.getMonth()+1, 1);
        this.monthDays = Math.round((this.endDate - this.startDate)/this.day);
        this.ulDays = document.createElement('ul');
        this.ulDays.className = "ulDays";
        this.daysDisplay.appendChild(this.ulDays);
        for(var j=0;j<this.monthDays;j++){
            this.liDays = document.createElement('li');
            this.liDays.className = "li";
            this.liDays.innerHTML = j;
            this.ulDays.appendChild(this.liDays);
        }
        return this.monthDays;
    };

    var datePicker = new DatePicker();
    datePicker.getMonthDays();
    datePicker.getTemplate();
    console.log(datePicker.setDate());

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