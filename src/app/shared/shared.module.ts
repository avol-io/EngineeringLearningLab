import { NgModule }     from '@angular/core';
import {FormsModule, ReactiveFormsModule}  from '@angular/forms';
import {RegistrationService} from "./services/registration.service";

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
        RegistrationService
    ]
})

export class SharedModule { }