import {Injectable} from "@angular/core";
import {USERS_MOCK, VENUES_MOCK} from "./registration.mock";
import {User} from "../models/user.model";
import {Response} from "../models/response.model";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class RegistrationService {
    private waitingTime = 1000;

    private _sedi: Array<string>;
    private _users: Array<User>;
    loggedUser: BehaviorSubject<User>;
    private logged: boolean;

    constructor() {
        this._sedi = VENUES_MOCK;
        this._users = USERS_MOCK;
        this.loggedUser = new BehaviorSubject<User>(null);
        this.logged = false;
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

    registerUser(user: User): Promise<Response | boolean> {
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

    login(email: string, password: string) {
        return new Promise((resolve, reject) => {
            let user = this._users.find((user) => {
                return user.email === email && user.password === password;
            });
            let response = new Response();
            if(user){
                response.data = user;

                setTimeout( () => {
                    this.logged = true;
                    this.loggedUser.next(user);
                    resolve(response)}, this.waitingTime
                );
            } else {
                response.error = 'Email o password non corretti';
                setTimeout( () => reject(response), this.waitingTime);
            }
        });
    }

    isUserLogged(): boolean {
        return this.logged;
    }

    logout() {
        return new Promise((resolve, reject) => {
            let response = new Response();
            setTimeout( () => {
                this.loggedUser.next(null);
                this.logged = false;
                resolve(response)
            }, this.waitingTime);
        });
    }
}