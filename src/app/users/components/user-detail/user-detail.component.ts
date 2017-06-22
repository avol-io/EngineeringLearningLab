import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../../shared/models/user.model";
import {Response} from "../../../shared/models/response.model";
import {RegistrationService} from "../../../shared/services/registration.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
    moduleId: module.id,
    selector: 'user-detail',
    templateUrl: 'user-detail.component.html',
    styleUrls: ['user-detail.component.css']
})

export class UserDetailComponent implements OnInit, OnDestroy {
    private sedi: Array<string>;
    private model: User;
    private submitted: boolean;
    private error: string;
    private loading: boolean;
    private subscription: Subscription;

    constructor(private registrationService: RegistrationService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe( (params) => {
            this.error = null;
            let id = +params['ID_USER'];
            if(id){
                this.loadUser(id);
            } else {
                this.error = 'Il path parameter non è un numero!';
            }
        })
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    private loadUser(id: number){
        this.loading = true;
        this.error = null;
        this.registrationService.getUser(id)
            .then( (response: Response) => {
                this.loading = false;
                let user = response.data;
                if(user){
                    this.model = user;
                } else {
                    this.error = 'Errore strano';
                }
            })
            .catch( (response: Response) => {
                this.loading = false;
                this.error = response.error;
            });
    }

    protected logout(){
        this.loading = true;
        this.registrationService.logout()
            .then( response => {
                this.loading = false;
                this.router.navigate(['home']);
            })
    }
}