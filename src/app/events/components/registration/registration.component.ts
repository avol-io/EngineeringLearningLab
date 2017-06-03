import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../../services/registration.service";

@Component({
    moduleId: module.id,
    selector: 'registration',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.css']
})

export class RegistrationComponent implements OnInit {
    private sedi: Array<string>;

    constructor(registrationService: RegistrationService) {
        this.sedi = registrationService.sedi;
    }

    ngOnInit() { }
}