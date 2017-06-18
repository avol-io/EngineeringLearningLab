import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EventsService} from "../../services/events.service";
import {validateEmail} from "../../../shared/validators/email.validator";
import {emailUnique} from "../../../shared/validators/email-unique.async-validator";
import {RegistrationService} from "../../services/registration.service";

@Component({
    moduleId: module.id,
    selector: 'add-event',
    templateUrl: 'add-event.component.html',
    styleUrls: ['add-event.component.css']
})

export class AddEventComponent {
    private eventForm: FormGroup;
    private eventTypes: Array<String>;
    private submitted: boolean;

    constructor(private fb: FormBuilder, private eventsService: EventsService, private registrationService: RegistrationService) {
        this.submitted = false;
        this.eventTypes = this.eventsService.getEventTypes();
        this.createForm();
        // this.logChanges();
    }

    createForm(): void {
        // this.eventForm = new FormGroup ({
        //     title: new FormControl()
        // });

        this.eventForm = this.fb.group({
            title: ['', Validators.required],
            type: '',
            description: ['', Validators.required],
            annotation: '',
            speaker: this.fb.group({
                name: '',
                surname: '',
                email: ['', validateEmail, emailUnique(this.registrationService)],
                address: this.fb.group({
                    street: '',
                    postalCode: ['', Validators.pattern(/^\d{5}$/)],
                    city: ''
                })
            })
        });
    }

    logChanges() {
        let titleControl = this.eventForm.get('title');
        titleControl.valueChanges.subscribe((changes) => {
           console.log(changes);
        });
    }

    addEvent(): void {
        this.submitted = true;
    }

    testSet(): void {
        this.eventForm.setValue({
            title: 'my title',
            type: 'my type',
            description: 'my description',
            annotation: 'my annotation',
            speaker: {
                name: 'my name',
                surname: 'my surname',
                email: 'my email',
                address: {
                    street: 'my street',
                    postalCode: 'my postal code',
                    city: 'my city'
                }
            }
        });
    }

    testPatch(): void {
        this.eventForm.patchValue({
            title: 'my title',
            speaker: {
                name: 'my name',
                address: {
                    street: 'my street'
                }
            }
        })
    }
}