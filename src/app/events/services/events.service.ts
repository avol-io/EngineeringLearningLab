import {EVENT_MOCK, EVENT_TYPES_MOCK} from './events.mock';
import { Event } from '../../shared/models/event.models';
import { Injectable } from '@angular/core';
import {Response} from "../../shared/models/response.model";

@Injectable()
export class EventsService {
    private events: Array<Event>;
    private eventTypes: Array<String>;
    private waitingTime: number = 1000;

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

    getEvent(id: number) {
        return new Promise((resolve, reject) => {
            let evento = this.events.find((e: Event) => e.id === id);
            let response = new Response();
            if(evento){
                response.data = evento;
                setTimeout( () => resolve(response), this.waitingTime);
            } else {
                response.error = 'Evento non trovato';
                setTimeout( () => reject(response), this.waitingTime);
            }
        })
    }
}