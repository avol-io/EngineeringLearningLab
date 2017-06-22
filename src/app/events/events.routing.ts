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
                // Dettaglio utente, separa dettaglio da aggiungi,
                // query param per lista solo preferiti (oppure anche ricerca)
                // Guardie di registrazione
                // Titolo dettaglio utente passato da parametro (utente, speaker)
                // {path: 'registrazione', component: RegistrationComponent},
                {path: 'aggiungi', component: AddEventComponent},
                {path: 'list', component: EventsPageComponent},
                { path: ':ID_EVENT', component: EventDetailComponent},
                {path: '', redirectTo: '/eventi/list', pathMatch: 'full'}
            ]
        }])]
})

export class EventsRoutingModule {
}