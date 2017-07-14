import { User } from '../../../shared/models/user.model';
import { RegistrationService } from '../../../shared/services/registration.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'user-detail',
    templateUrl: 'user-detail.component.html',
    styleUrls: ['user-detail.component.css']
})

export class UserDetailComponent implements OnInit, OnDestroy {
    private model: User;
    private loading: boolean;
    private subRouteParam: Subscription;
    private subRouteIdParam: Subscription;
    private title: string;
    private id: number;

    constructor(private registrationService: RegistrationService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.subRouteParam = this.activatedRoute.data.subscribe((data) => {
            let title = data['title'];
            if (title) {
                this.title = title;
            }
        });

        this.subRouteIdParam = this.activatedRoute.params.subscribe((params) => {
            let id = +params['id'];
            if (id) {
                this.id = id;
                this.loadUser();
            }
        });

        
    }

    ngOnDestroy() {
        this.subRouteParam.unsubscribe();
        this.subRouteIdParam.unsubscribe();
    }

    private loadUser() {
        this.loading = true;
        this.registrationService.getUser(this.id).subscribe((response) => {
            if(response.data) {
                this.loading = false;
                let user;
                if(response.data.name){
                    user = response.data;
                }
                else{
                    user = new User(response.data._name, response.data._surname,response.data._email,response.data._password,response.data._venue, response.data.id);
                }
                this.model = user;
            }
        }
        ,error => {
            console.error(error);
        });
    }

    protected logout() {
        this.loading = true;
        this.registrationService.logout()
            .then(response => {
                this.loading = false;
                this.router.navigate(['home']);
            })
    }
}