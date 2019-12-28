function showDayEvents(day){
    //Remove all of the events already displayed, then display the new day's events
    let eventDiv = document.getElementById("single-day-events");

    eventDiv.innerHTML = '';

    //For each event in a day, display it in the list
    for(let i = 0; i < day.events.length; i++) {
        //Creating the new list item
        let newItem = document.createElement("li");
        let itemTitle = day.events[i].title + "\t (" + day.events[i].time + ")";
        newItem.textContent = itemTitle;
        //Adding a click listener to the list item
        newItem.addEventListener("click", () => {
            let selected = document.getElementsByClassName("selected");

            //Remove the 'selected' class from all elements
            while(selected[0]) {
                selected[0].classList.remove('selected');
            }
            
            //Add the 'selected' class to the selected item
            newItem.classList.add("selected");
        });
        eventDiv.append(newItem);
    }
}