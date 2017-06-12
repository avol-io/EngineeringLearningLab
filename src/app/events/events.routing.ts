import { EventsPageComponent } from './components/events-page/events-page.component';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './events.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from "./components/registration/registration.component";
import { AddEventComponent } from "./components/add-event/add-event.component";

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: 'eventi',
            component: EventsComponent,
            children: [
                { path: 'registrazione', component: RegistrationComponent },
                { path: 'aggiungi-evento', component: AddEventComponent },
                { path: 'list', component: EventsPageComponent },
                { path: '', component: HomeComponent }
            ]
        }])]
})

export class EventsRoutingModule { }