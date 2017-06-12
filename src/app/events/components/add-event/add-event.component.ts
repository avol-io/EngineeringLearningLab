import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'add-event',
    templateUrl: 'add-event.component.html',
    styleUrls: ['add-event.component.css']
})

export class AddEventComponent implements OnInit {
    private eventForm: FormGroup;

    constructor() {
    }

    ngOnInit() {
        this.eventForm = new FormGroup ({
            title: new FormControl()
        });
    }
}