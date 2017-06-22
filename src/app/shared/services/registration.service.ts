import {Injectable} from "@angular/core";
import {USERS_MOCK, VENUES_MOCK} from "./registration.mock";
import {User} from "../models/user.model";
import {Response} from "../models/response.model";

@Injectable()
export class RegistrationService {
    private waitingTime = 1000;

    private _sedi: Array<string>;
    private _users: Array<User>;

    constructor() {
        this._sedi = VENUES_MOCK;
        this._users = USERS_MOCK;
    }

    get sedi(): Array<string> {
        return this._sedi;
    }

    emailUsed(value: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let result = this._users.find((item) => item.email === value);

            if (result) {
                setTimeout(() => resolve(true), 1500);
            } else {
                setTimeout(() => resolve(false), 1500);
            }
        })
    }

    registerUser(user: User): Promise<Response> {
        let response = new Response();
        return this.emailUsed(user.email)
            .then( used => {
                return new Promise((resolve, reject) => {
                    if(used){
                        response.error = 'Utente già presente';
                        setTimeout( () => reject(response), this.waitingTime);
                    } else {
                        user.id = this._users.length;
                        this._users.push(user);
                        response.data = user;
                        setTimeout( () => resolve(response), this.waitingTime);
                    }
                })
            });
    }

    getUser(id: number) {
        return new Promise((resolve, reject) => {
            let user = this._users.find((user) => user.id == id);
            let response = new Response();
            if(user){
                response.data = user;
                setTimeout( () => resolve(response), this.waitingTime);
            } else {
                response.error = 'Utente non trovato';
                setTimeout( () => reject(response), this.waitingTime);
            }
        });
    }
}