'use strict'

function deleteDayEvent(day) {
    var selectedItem = document.getElementsByClassName("selected");
    selectedItem = selectedItem[0];

    var selectedText = selectedItem.textContent;
    selectedText = selectedText.match(new RegExp("[^\\t]+"))[0];

    var divTitle = document.getElementById("single-day-title").textContent;
    var dayNum = divTitle.match(new RegExp('\\d{1,2}'));
    dayNum = dayNum[0];

    var day = c.days[dayNum - 1];

    day.deleteEvent(selectedText);

    showDayEvents(day);
}