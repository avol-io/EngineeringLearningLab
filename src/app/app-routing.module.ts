import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProposalsComponent } from './proposal/components/proposals.component';
import { ProposalEditComponent } from './proposal/proposal-edit/proposal-edit.component';

const routes: Routes = [
    { path: '', redirectTo: '/proposals', pathMatch: 'full' },
    { path: 'proposals',  component: ProposalsComponent },
    { path: 'proposals/:id/edit',  component: ProposalEditComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}