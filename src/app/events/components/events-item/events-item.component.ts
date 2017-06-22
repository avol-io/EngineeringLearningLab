import { Event } from './../../../shared/models/event.models';
import { EventsService } from './../../services/events.service';
import { Component, OnInit,Input ,EventEmitter,Output} from '@angular/core';
import {Router} from "@angular/router";


@Component({
	moduleId: module.id,
	selector: 'event-item',
	templateUrl: 'events-item.component.html',
	styleUrls: ['events-item.component.css']
})
export class EventsItemComponent {

	@Input('event')
	private model: Event;

  	@Output('onFavorito') 
	protected callbackActionOnFavorito: EventEmitter<Event> = new EventEmitter();


	constructor(private router: Router) {

	}

	onFavorito(event:Event){
		this.callbackActionOnFavorito.emit(event);
	}

	goToEventDetail(){
		this.router.navigate(['eventi', this.model.id]);
	}
}