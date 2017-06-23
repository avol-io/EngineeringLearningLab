import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {SharedModule} from "../shared/shared.module";
import {HomeRoutingModule} from "./home-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [],
    bootstrap: []
})

export class HomeModule {
}
