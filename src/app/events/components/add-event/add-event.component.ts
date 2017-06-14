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
    private myForm: FormGroup;
    private eventTypes: Array<String>;
    private submitted: boolean;

    constructor(private fb: FormBuilder, private eventsService: EventsService) {
        this.submitted = false;
        this.eventTypes = this.eventsService.getEventTypes();
        this.createForm();
        // this.logChanges();
    }

    createForm(): void {
        // this.myForm = new FormGroup ({
        //     title: new FormControl()
        // });

        this.myForm = this.fb.group({
            title: ['', Validators.required],
            type: '',
            description: ['', Validators.required],
            annotation: ''
        });
    }

    logChanges() {
        let titleControl = this.myForm.get('title');
        titleControl.valueChanges.subscribe((changes) => {
           console.log(changes);
        });
    }

    addEvent(): void {
        this.submitted = true;
    }
}