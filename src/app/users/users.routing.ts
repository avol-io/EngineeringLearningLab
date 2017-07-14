import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {RegistrationComponent} from "./components/registration/registration.component";
import {UsersComponent} from "./users.component";
import {UserDetailComponent} from "./components/user-detail/user-detail.component";
import {LoginComponent} from "./components/login/login.component";
import {PermissionDeniedComponent} from "./components/permission-denied/permission-denied.component";
import {LoginGuard} from "../shared/services/login-guard.service";

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'permesso-negato', component: PermissionDeniedComponent},
            {
                path: 'utenti',
                component: UsersComponent,
                children: [
                    {path: 'login', component: LoginComponent},
                    {path: 'registrazione', component: RegistrationComponent},
                    {
                        path: 'profilo/:id',
                        canActivate: [LoginGuard],
                        component: UserDetailComponent,
                        data: {title: 'Profilo utente'}
                    },
                    {
                        path: 'profilo-altro-titolo',
                        canActivate: [LoginGuard],
                        component: UserDetailComponent,
                        data: {title: 'Altro titolo'}
                    },
                    {path: '', redirectTo: '/utenti/login', pathMatch: 'full'}
                ]
            }])
    ]
})

export class UsersRoutingModule {
}