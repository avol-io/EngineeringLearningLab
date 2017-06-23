import {Event} from '../../../shared/models/event.models';
import {EventsService} from '../../services/events.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";


@Component({
    moduleId: module.id,
    selector: 'events-page',
    templateUrl: 'events-page.component.html',
    styleUrls: ['events-page.component.css']
})

export class EventsPageComponent implements OnInit, OnDestroy {

    private eventsFull: Event[];
    private events: Array<Event>;
    private searchControl: FormControl;
    private subQueryParam: Subscription;


    constructor(private eventsService: EventsService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
        this.events = [];
        this.searchControl = new FormControl('');
    }

    ngOnInit() {

        this.subQueryParam = this.activatedRoute.queryParams.subscribe( (param) => {
            let q = param['q'];
            this.searchControl.setValue(q);
            this.filterEvents(q);
        });

        this.reloadEvents();
    }

    ngOnDestroy(){
        this.subQueryParam.unsubscribe();
    }

    filterEvents(search: string){
        if(this.eventsFull && this.eventsFull.length != 0) {
            if(!search){
                this.events = this.eventsFull;
                return;
            }
            this.events = this.eventsFull.filter((event: Event) => {
                return event.title.includes(search) || event.description.includes(search);
            })
        }
    }

    reloadEvents() {
        this.eventsFull = this.eventsService.getEvents();
        this.filterEvents('');
    }

    manageFavorito(event: Event) {
        event.favorite = !event.favorite;
        this.eventsService.updateEvents(event);
        this.reloadEvents();
    }

    search(){
        let params = {};
        let searchString = this.searchControl.value;
        if(searchString){
            params['q'] = searchString;
        }
        this.router.navigate(['eventi', 'list'], {queryParams: params});
    }

}