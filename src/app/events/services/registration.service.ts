import { Injectable } from '@angular/core';
import {EMAILS_MOCK, VENUES_MOCK} from "./registration.mock";

@Injectable()
export class RegistrationService {
    private _sedi: Array<string>;
    private _emails: Array<string>;

    constructor() {
        this._sedi = VENUES_MOCK;
        this._emails = EMAILS_MOCK;
    }

    get sedi(): Array<string> {
        return this._sedi;
    }

    emailUsed(value: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let result = this._emails.find((item) => item === value);

            if (result) {
                setTimeout(() => resolve(true), 1500);
            } else {
                setTimeout(() => resolve(false), 1500);
            }
        })
    }
}