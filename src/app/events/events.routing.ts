import {EventsPageComponent} from "./components/events-page/events-page.component";
import {EventsComponent} from "./events.component";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {AddEventComponent} from "./components/add-event/add-event.component";

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: 'eventi',
            component: EventsComponent,
            children: [
                // Dettaglio utente, separa dettaglio da aggiungi,
                // query param per lista solo preferiti (oppure anche ricerca)
                // Guardie di registrazione
                // Titolo dettaglio utente passato da parametro (utente, speaker)
                // {path: 'registrazione', component: RegistrationComponent},
                {path: 'aggiungi', component: AddEventComponent},
                {path: 'list', component: EventsPageComponent},
                // { path: ':ID_EVENTO', component: EventDetail},
                // {path: '', component: HomeComponent}
            ]
        }])]
})

export class EventsRoutingModule {
}