import { EventsPageComponent } from './components/events-page/events-page.component';

import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './events.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {RegistrationComponent} from "./components/registration/registration.component";



@NgModule({
    imports: [
        RouterModule.forChild([{
            path: 'events',
            component: EventsComponent,
            children: [
                { path: 'registration', component: RegistrationComponent },
                { path: 'list', component: EventsPageComponent },
                { path: '', component: HomeComponent }
            ]
        }])]
})

export class EventsRoutingModule { }

