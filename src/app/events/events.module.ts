import {RouterModule} from '@angular/router';
import {EventsRoutingModule} from './events.routing';
import {EventsItemComponent} from './components/events-item/events-item.component';
import {EventsPageComponent} from './components/events-page/events-page.component';
import {EventsService} from './services/events.service';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {EventsComponent} from './events.component';
import {CommonModule} from '@angular/common';
import {AddEventComponent} from "./components/add-event/add-event.component";
import {SubformSpeakerComponent} from "./components/subform-speaker/subform-speaker.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        EventsRoutingModule
    ],
    declarations: [
        EventsComponent,
        EventsPageComponent,
        EventsItemComponent,
        AddEventComponent,
        SubformSpeakerComponent
    ],
    providers: [
        EventsService,
        // RegistrationService
    ],
    bootstrap: []
})

export class EventsModule {
}
