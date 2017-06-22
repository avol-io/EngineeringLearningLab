import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {RegistrationService} from "./registration.service";

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private registrationService: RegistrationService,
                private router: Router) {
    }

    canActivate() {
        console.log('Guardia chiamata');
        if(!this.registrationService.isUserLogged()){
            this.router.navigate(['permission-denied']);
            return false;
        }
        return true;
    }
}