import { Observable } from 'rxjs/Rx';
import { User } from './../models/user.model';
import { Headers, Http } from '@angular/http';
import {Injectable} from "@angular/core";
import {USERS_MOCK, VENUES_MOCK} from "./registration.mock";
import {Response} from "../models/response.model";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class RegistrationService {
    private waitingTime = 1000;

    private _sedi: Array<string>;
    private _users: Array<User>;
    loggedUser: BehaviorSubject<User>;
    private logged: boolean;
    private usersUrl = 'app/users'; //URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
        this._sedi = VENUES_MOCK;
        this._users = USERS_MOCK;
        this.loggedUser = new BehaviorSubject<User>(null);
        this.logged = false;
    }

    get sedi(): Array<string> {
        return this._sedi;
    }

    emailUsed(value: string): Promise<boolean> {
        // return new Promise((resolve, reject) => {
        //     let result = this._users.find((item) => item.email === value);
        //     if (result) {
        //         setTimeout(() => resolve(true), 1500);
        //     } else {
        //         setTimeout(() => resolve(false), 1500);
        //     }
        // })
        // return this.http.get(this.url)
        return this.http.get(this.usersUrl)
        .toPromise()
        .then(response => {
            // let o = response.json() ? response.json().value as User[] : [];
            let o = response.json() ? response.json().data as User[] : [];
            let result = o.find((item) => item.email === value);
            if (result) {
                return true;
            } else {
                return false;
            }
        })
        .catch(error => {
            console.log('ERRORE', error);
            throw error; 
        });
    }

    registerUser(user: User): Promise<Response> {
        let response = new Response();
        return this.emailUsed(user.email)
            .then(used => {
                    if (used) {
                        response.error = 'Utente già presente';
                        return Promise.reject(response);
                    } else {
                        return this.http.post(this.usersUrl, JSON.stringify(user), {headers: this.headers})
                        .toPromise()
                        .then(
                            userInserito => {
                                response.data = userInserito.json().data;
                                let utente = new User(response.data._name, response.data._surname,response.data._email,response.data._password,response.data._venue, response.data.id);
                                this.loggedUser.next(utente);
                                this.logged = true;
                                return response;
                            }
                        )
                        .catch(error => {
                            console.log('ERRORE', error);
                            throw error; 
                        });
                    }
            });
    }

    getUser(id: number): Observable<Response> {
        let responseObservable = Observable.fromPromise(
            this.http.get(this.usersUrl)
            .toPromise()
            .then(userList => {
                    let o = userList.json() ? userList.json().data as User[] : [];
                    let user = o.find((user) => user.id == id);
                    let response = new Response();
                    if (user) {
                        response.data = user;
                    } else {
                        response.error = 'Utente non trovato';
                    }
                    return response;
                }
            )
        );
        return responseObservable;
    }

    login(email: string, password: string) {
        return this.http.get(this.usersUrl).toPromise()
        .then( users => {
            let user = users.json().data.find((user: User) => {
                return user.email === email && user.password === password;
            });
            let response = new Response();
            if (user) {
                response.data = user;
                this.logged = true;
                this.loggedUser.next(user);
                return response;
            } else {
                response.error = 'Email o password non corretti';
                return response;
            }
        });
    }

    isUserLogged(): boolean {
        return this.logged;
    }

    logout() {
        return new Promise((resolve, reject) => {
            let response = new Response();
            setTimeout(() => {
                this.loggedUser.next(null);
                this.logged = false;
                resolve(response)
            }, this.waitingTime);
        });
    }
}