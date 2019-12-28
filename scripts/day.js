'use strict'

class Day {
    constructor(dayN) {
        this.dayNumber = dayN;
        this.events = [new DayEvent("Feed the dog", "1:00pm"), new DayEvent("Live life", "5:00pm")];
        this.hasEvent = false;
        
        this.setNewEvent = function(e) {
            this.events.push(e);
        }

        this.checkForEvents = function() {
            if(this.events.length > 0) {
                this.hasEvent = true;
            }
        }

        this.addEvent = function(e) {
            this.events.push(e);
        }

        this.findEventIndex = function(title) {
            for (let i = 0; i < this.events.length; i++) {
                if(this.events[i].title == title) {
                    return i;
                }
            }

            return null;
        }

        this.deleteEvent = function(title) {
            var ind = this.findEventIndex(title);
            this.events.splice(ind, 1);
        }
    }
}