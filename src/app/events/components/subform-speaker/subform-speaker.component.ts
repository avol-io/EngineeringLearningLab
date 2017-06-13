import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'subform-speaker',
    templateUrl: 'subform-speaker.component.html',
    styleUrls: ['subform-speaker.component.css']
})

export class SubformSpeakerComponent implements OnInit {
    private myForm: FormGroup;
    @Input() private parentForm: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.createForm();
    }

    createForm(): void {
        this.myForm = this.fb.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            address: this.fb.group({
                street: '',
                postalCode: ['', Validators.pattern(/^\d{5}$/)],
                city: ''
            })
        });

        this.parentForm.addControl('speaker', this.myForm);
    }
}