import { EventsPageComponent } from './events/components/events-page/events-page.component';
import { HomeComponent } from './events/components/home/home.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    // { path: 'proposals/:id/edit',  component: ProposalEditComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}