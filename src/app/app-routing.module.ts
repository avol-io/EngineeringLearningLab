import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found.component";


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'sotto-albero', loadChildren: 'app/home/home.module#HomeModule'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule {
}