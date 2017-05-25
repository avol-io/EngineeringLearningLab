import { EventsPageComponent } from './components/events-page/events-page.component';

import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './events.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



@NgModule({
    imports: [
        RouterModule.forChild([{
            path: 'events',
            component: EventsComponent,
            data: { breadcrumb: 'Conti giudiziali' },
            children: [
                { path: 'list', component: EventsPageComponent },
                { path: '', component: HomeComponent }
            ]
        }])]
})

export class EventsRoutingModule { }

