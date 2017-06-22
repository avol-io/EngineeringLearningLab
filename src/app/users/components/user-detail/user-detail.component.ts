import {Component, OnDestroy, OnInit} from "@angular/core";
import {User} from "../../../shared/models/user.model";
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
    private model: User;
    private loading: boolean;
    private subRouteParam: Subscription;
    private title: string;

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

        this.loadUser();
    }

    ngOnDestroy() {
        this.subRouteParam.unsubscribe();
    }

    private loadUser() {
        this.loading = true;
        this.registrationService.loggedUser.subscribe((user) => {
            if(user) {
                this.loading = false;
                this.model = user;
            }
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