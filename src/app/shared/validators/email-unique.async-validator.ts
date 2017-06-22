import {FormControl} from '@angular/forms';
import {RegistrationService} from '../services/registration.service';

export const emailUnique = (service: RegistrationService) => {
    return (control: FormControl) => {
        return new Promise((resolve, reject) => {
            service.emailUsed(control.value)
                .then(response => {
                    if (response) {
                        resolve({ emailAlreadyExist: true });
                    } else {
                        resolve(null);
                    }
                })
                .catch(error => {
                    resolve({ serverError: true });
                });
        });
    };
};
