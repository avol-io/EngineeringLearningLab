import { NgModule }     from '@angular/core';
import {FormsModule, ReactiveFormsModule}  from '@angular/forms';
import {RegistrationService} from "./services/registration.service";
import {LoginGuard} from "./services/login-guard.service";

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [],
    providers: [
        LoginGuard,
        RegistrationService
    ]
})

export class SharedModule { }