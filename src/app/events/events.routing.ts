import {EventsPageComponent} from "./components/events-page/events-page.component";
import {EventsComponent} from "./events.component";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {AddEventComponent} from "./components/add-event/add-event.component";
import {EventDetailComponent} from "./components/event-detail/event-detail.component";
import {LoginGuard} from "../shared/services/login-guard.service";

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: 'eventi',
            component: EventsComponent,
            canActivate: [LoginGuard],
            children: [
                {path: 'aggiungi', component: AddEventComponent},
                {path: 'list', component: EventsPageComponent},
                {path: ':ID_EVENTO', component: EventDetailComponent},
                {path: '', redirectTo: '/eventi/list', pathMatch: 'full'}
            ]
        }])]
})

export class EventsRoutingModule {
}