import {Component} from '@angular/core';
import {RegistrationService} from "./shared/services/registration.service";
import {User} from "./shared/models/user.model";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    private user: User;

    constructor(private registrationService: RegistrationService){

    }

    ngOnInit(){
        this.registrationService.loggedUser.subscribe((user) => {
            this.user = user;
        })
    }

}