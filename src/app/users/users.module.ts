import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {RegistrationComponent} from "./components/registration/registration.component";
import {UsersRoutingModule} from "./users.routing";
import {UsersComponent} from "./users.component";
import {UserDetailComponent} from "./components/user-detail/user-detail.component";
import {LoginComponent} from "./components/login/login.component";
import {PermissionDeniedComponent} from "./components/permission-denied/permission-denied.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        UsersRoutingModule
    ],
    declarations: [
        UsersComponent,
        UserDetailComponent,
        LoginComponent,
        PermissionDeniedComponent,
        RegistrationComponent
    ],
    providers: [
    ],
    bootstrap: []
})

export class UsersModule {
}
