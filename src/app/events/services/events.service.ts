import { EVENT_MOCK } from './events.mock';
import { Event } from './../../shared/models/event.models';
import { Injectable } from '@angular/core';

@Injectable()
export class EventsService {

    private events:Array<Event>;

    constructor() { 
        this.events=EVENT_MOCK;
    }
    
    public getEvents(){
        return this.events;
    }

    public updateEvents(event:Event){
        this.events.forEach((e)=>{
            if(e.title===event.title){
                for(let att in e){
                    e[att]=event[att];
                }
            }
        });
    }
}