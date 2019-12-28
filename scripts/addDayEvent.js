'use strict'

function addDayEvent() {
    var divTitle = document.getElementById("single-day-title").textContent;
    var dayNum = divTitle.match(new RegExp('\\d{1,2}'));
    dayNum = dayNum[0];

    var day = c.days[dayNum - 1];
    day.addEvent(new DayEvent("Let the dog out", "1:30pm"));
    
    showDayEvents(day);
}