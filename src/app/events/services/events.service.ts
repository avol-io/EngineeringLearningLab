import {EVENT_MOCK, EVENT_TYPES_MOCK} from './events.mock';
import { Event } from './../../shared/models/event.models';
import { Injectable } from '@angular/core';

@Injectable()
export class EventsService {
    private events: Array<Event>;
    private eventTypes: Array<String>;

    constructor() { 
        this.events = EVENT_MOCK;
        this.eventTypes = EVENT_TYPES_MOCK;
    }
    
    public getEvents() {
        return this.events;
    }

    public getEventTypes() {
        return this.eventTypes;
    }

    public updateEvents(event: Event) {
        this.events.forEach((e) => {
            if (e.title === event.title) {
                for (let att in e) {
                    e[att] = event[att];
                }
            }
        });
    }
}