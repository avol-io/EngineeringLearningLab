import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventsService} from "../../services/events.service";
import {Subscription} from "rxjs/Subscription";
import {Response} from "../../../shared/models/response.model";
import {Event} from "../../../shared/models/event.models";

@Component({
    moduleId: module.id,
    selector: 'event-detail',
    templateUrl: 'event-detail.component.html',
    styleUrls: ['event-detail.component.css']
})

export class EventDetailComponent implements OnInit{
    private subscription: Subscription;
    private error: string;
    private loading: boolean;
    model: Event;

    constructor(private activatedRoute: ActivatedRoute,
                private eventService: EventsService) {
    }

    ngOnInit(){
        this.subscription = this.activatedRoute.params.subscribe( (params) => {
            this.error = null;
            let id = +params['ID_EVENT'];
            if(id){
                this.loadEvent(id);
            } else {
                this.error = 'Il path parameter non è un numero!';
            }
        })
    }

    private loadEvent(id: number) {
        this.loading = true;
        this.error = null;

        this.eventService.getEvent(id)
            .then( (response: Response) => {
                this.model = response.data;
                this.loading = false;
            })
            .catch( (response: Response) => {
                this.loading = false;
                this.error = response.error;
            })

    }
}