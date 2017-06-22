import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegistrationService} from "../../../shared/services/registration.service";
import {Router} from "@angular/router";
import {Response} from "../../../shared/models/response.model";

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {
    private loginForm: FormGroup;
    private loading: boolean;
    private error: string;

    constructor(fb: FormBuilder,
                private router: Router,
                private registrationService: RegistrationService) {
        this.loginForm = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    protected login(){
        let email = this.loginForm.value.email;
        let password = this.loginForm.value.password;

        this.loading = true;
        this.error = null;

        this.registrationService.login(email, password)
            .then( (response: Response) => {
                this.router.navigate(['eventi', 'list']);
            })
            .catch( (response: Response) => {
                this.loading = false;
                this.loginForm.reset();
                this.error = response.error;
            })
    }
}