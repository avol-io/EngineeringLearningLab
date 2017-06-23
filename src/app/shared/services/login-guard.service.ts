import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {RegistrationService} from "./registration.service";

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private registrationService: RegistrationService,
                private router: Router) {
    }

    canActivate() {
        if(!this.registrationService.isUserLogged()){
            this.router.navigate(['permesso-negato']);
            return false;
        }
        return true;
    }
}