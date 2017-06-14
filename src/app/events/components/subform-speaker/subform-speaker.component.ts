import {Component, Input, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {validateEmail} from "../../../shared/validators/email.validator";
import {emailUnique} from "../../../shared/validators/email-unique.async-validator";
import {RegistrationService} from "../../services/registration.service";

@Component({
    moduleId: module.id,
    selector: 'subform-speaker',
    templateUrl: 'subform-speaker.component.html',
    styleUrls: ['subform-speaker.component.css']
})

export class SubformSpeakerComponent implements OnInit {
    private myForm: FormGroup;
    @Input() private parentForm: FormGroup;

    constructor(private fb: FormBuilder, private registrationService: RegistrationService) {
    }

    ngOnInit(): void {
        this.createForm();
    }

    createForm(): void {
        this.myForm = this.fb.group({
            name: '',
            surname: '',
            email: ['', validateEmail, emailUnique(this.registrationService)],
            address: this.fb.group({
                street: '',
                postalCode: ['', Validators.pattern(/^\d{5}$/)],
                city: ''
            })
        });

        this.parentForm.addControl('speaker', this.myForm);
    }
}