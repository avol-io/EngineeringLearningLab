import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {RegistrationComponent} from "./components/registration/registration.component";
import {UsersComponent} from "./users.component";
import {UserDetailComponent} from "./components/user-detail/user-detail.component";

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: 'utenti',
            component: UsersComponent,
            children: [
                {path: 'registrazione', component: RegistrationComponent},
                {path: ':ID_USER', component: UserDetailComponent}
            ]
        }])
    ]
})

export class UsersRoutingModule {
}