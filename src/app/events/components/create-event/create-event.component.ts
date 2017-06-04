import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'create-event',
    templateUrl: 'create-event.component.html',
    styleUrls: ['create-event.component.css']
})

export class CreateEventComponent implements OnInit {
    private eventName: FormControl;

    constructor() {
        eventName = new FormControl();
    }

    ngOnInit() { }
}