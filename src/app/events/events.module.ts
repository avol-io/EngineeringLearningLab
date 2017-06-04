import {RouterModule} from '@angular/router';
import {EventsRoutingModule} from './events.routing';
import {EventsItemComponent} from './components/events-item/events-item.component';
import {EventsPageComponent} from './components/events-page/events-page.component';
import {EventsService} from './services/events.service';
import {HomeComponent} from './components/home/home.component';
import {NgModule} from '@angular/core';
import {SharedModule} from './../shared/shared.module';
import {EventsComponent} from './events.component';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from "./components/registration/registration.component";
import {RegistrationService} from "./services/registration.service";
import {CreateEventComponent} from "./components/create-event/create-event.component";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        EventsRoutingModule
    ],
    declarations: [
        EventsComponent,
        HomeComponent,
        EventsPageComponent,
        EventsItemComponent,
        RegistrationComponent,
        CreateEventComponent
    ],
    providers: [
        EventsService,
        RegistrationService
    ],
    bootstrap: []
})

export class EventsModule {
}
