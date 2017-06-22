import {Component, OnInit} from '@angular/core';
import {User} from "../../../shared/models/user.model";
import {Response} from "../../../shared/models/response.model";
import {RegistrationService} from "../../../shared/services/registration.service";
import {Router} from "@angular/router";

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
    private error: string;

    constructor(private registrationService: RegistrationService,
                private router: Router) {
        this.submitted = false;
        this.sedi = registrationService.sedi;
        this.model = new User('', '', '', '', '');
    }

    ngOnInit() {
    }

    private registration() {
        this.submitted = true;
        this.error = null;
        this.registrationService.registerUser(this.model)
            .then((response: Response) => {
                let user: User = response.data;
                this.router.navigate(['utenti', user.id]);
            })
            .catch((response: Response) => {
                this.submitted = false;
                this.error = response.error;
            })
    }
}