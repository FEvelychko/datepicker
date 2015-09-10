/**
 * Created by Maksym on 10.09.2015.
 */

//debugger;

    function DatePicker(){
        this.data = [];
        this.day = 86400000;
        this.months = ["Jan","Fab","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    }
    DatePicker.prototype.getMonthDays = function(year){
        for(var index = 0; index < this.months.length; index++){
            this.startDate = new Date(year, index, 1);
            this.endDate = new Date(year, index+1, 1);
            this.monthDays = Math.round((this.endDate - this.startDate)/this.day);
            this.data[index] = {month: this.monthDays};
        }
        return this;
    };
    DatePicker.prototype.decodeMonths = function() {
        for (var index = 0; index < this.months.length; index++) {
            this.data[index][this.months[index]] = this.data[index].month;
            delete this.data[index].month;
        }
        return this.data;
    };
    DatePicker.prototype.showDatePicker = function(){

    };

    var datePicker = new DatePicker();
    var decodedData = datePicker.getMonthDays(2015);
    var showDecodedMonthId = datePicker.decodeMonths();
    console.log(showDecodedMonthId);
    var shownBlock = datePicker.showDatePicker();


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