import { Event } from './../../../shared/models/event.models';
import { EventsService } from './../../services/events.service';
import { Component, OnInit } from '@angular/core';


@Component({
	moduleId: module.id,
	selector: 'events-page',
	templateUrl: 'events-page.component.html',
	styleUrls: ['events-page.component.css']
})

export class EventsPageComponent implements OnInit {

	private events: Array<Event>;

	constructor(private eventsService: EventsService) { 
		this.events=[];
	}

	ngOnInit() {
		this.reloadEvents();
	}

	reloadEvents(){
			this.events = this.eventsService.getEvents();
	}

	manageFavorito(event:Event){
		event.favorite=!event.favorite;
		this.eventsService.updateEvents(event);
		this.reloadEvents();
	}

}