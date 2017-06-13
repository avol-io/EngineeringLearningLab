import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EventsService} from "../../services/events.service";

@Component({
    moduleId: module.id,
    selector: 'add-event',
    templateUrl: 'add-event.component.html',
    styleUrls: ['add-event.component.css']
})

export class AddEventComponent {
    private eventForm: FormGroup;
    private eventTypes: Array<String>;

    constructor(private fb: FormBuilder, private eventsService: EventsService) {
        this.createForm();
        this.eventTypes = this.eventsService.getEventTypes();
    }


    createForm() {
        // this.eventForm = new FormGroup ({
        //     title: new FormControl()
        // });

        this.eventForm = this.fb.group({
            title: ['', Validators.required],
            type: '',
            description: [''],
            annotation: '',
            speaker: this.fb.group({
                name: '',
                surname: '',
                address: this.fb.group({
                    street: '',
                    postalCode: ['', Validators.pattern(/^\d{5}$/)],
                    city: ''
                })
            })
        });
    }
}