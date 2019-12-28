'use strict'

const NUMWEEKS = 6;
const NUMDAYS = 7;


const Calendar = class{
    
    constructor(date){
        //Storing all of the month names in array and store some ways to keep track of the amount of days in each month
        this.months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.month = this.months[date.getMonth()];
        this.year = date.getFullYear();
        this.numDays = new Date(this.year, date.getMonth() + 1, 0).getDate();
        this.days = [];
    
        //Function that loads the month name, year, and calendar days
        this.loadCalendar = function(){
            this.days = [];
            var startDay = new Date(this.year, date.getMonth(), 1).getDay();
            var header = document.getElementById("calendar-title");
            var calendarBody = document.getElementById("calendar-body");

            header.insertAdjacentHTML("beforeend", "<h3>" + this.month + "\t" + this.year + "</h3>");
            let day = 1;

            //Max number of weeks is 6
            //At most loop through and create 6 rows (weeks)
            for(let i = 0; i < NUMWEEKS; i++) {
                //Create a new row (week)
                var row = document.createElement("tr");
                //Loop through the number of days in a week
                for(let k = 0; k < NUMDAYS; k++) {
                    //While in the first week and the month hasn't started yet
                    //create empty calendar cells
                    if(i === 0 && k < startDay) {
                        let cell = document.createElement("td");
                        cell.classList.add("empty");
                        cell.textContent = " ";
                        row.append(cell);
                    }
                    //If the day is past the number of days in the month
                    //End the loop
                    else if(day > this.numDays){
                        break;
                    }
                    //Create the day number for each day of the week and add it to the new week (row)
                    else {
                        let c = document.createElement("td");
                        let newDay = new Day(day);
                        this.days.push(newDay);
                        c.classList.add("day");
                        c.textContent = day;
                        c.addEventListener("click", showDay.bind(this, newDay, k));
                        day++;
                        row.append(c);
                    }
                    //Add the row to the calendarBody
                    calendarBody.appendChild(row);
                }
            }            
        }
    }
}

function showDay(day, dayOfWeek) {
    //Add the date and the day of the week to the html title div
    let titleDiv = document.getElementById("single-day-title");
    let dayOfWeekName = "";
    switch(dayOfWeek) {
        case 0:
            dayOfWeekName = "Sunday";
            break;
        case 1:
            dayOfWeekName = "Monday";
            break;
        case 2:
            dayOfWeekName = "Tuesday";
            break;
        case 3:
            dayOfWeekName = "Wednesday";
            break;
        case 4:
            dayOfWeekName = "Thursday";
            break;
        case 5:
            dayOfWeekName = "Friday";
            break;
        case 6:
            dayOfWeekName = "Saturday";
            break;
        default:
            dayOfWeekName = "Something went wrong";
    }

    let divStr = "" + dayOfWeekName + "\t" + day.dayNumber;

    titleDiv.textContent = divStr;

    showDayEvents(day);
}

//Creating calendar object and loading the days
var date = new Date();
var c = new Calendar(date);
c.loadCalendar();