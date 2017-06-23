import { EventsModule } from './events/events.module';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { SharedModule } from './shared/shared.module';
import {UsersModule} from "./users/users.module";
import {HomeModule} from "./home/home.module";
import {PageNotFoundComponent} from "./page-not-found.component";

@NgModule({
  imports: [ 
      BrowserModule,
      SharedModule,
      HomeModule,
      UsersModule,
      EventsModule,
      AppRoutingModule
  ],
  declarations: [ 
      AppComponent,
      PageNotFoundComponent
    ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
