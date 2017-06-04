import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "../../services/registration.service";
import {User} from "../../../shared/models/user.model";

@Component({
    moduleId: module.id,
    selector: 'registration',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.css']
})

export class RegistrationComponent implements OnInit {
    private sedi: Array<string>;
    private model: User;
    private submitted: boolean;

    constructor(registrationService: RegistrationService) {
        this.submitted = false;
        this.sedi = registrationService.sedi;
        this.model = new User('', '', '', '');
    }

    ngOnInit() { }

    private registration() {
        this.submitted = true;
    }
}