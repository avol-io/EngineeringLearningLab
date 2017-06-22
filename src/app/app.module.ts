import { EventsModule } from './events/events.module';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { SharedModule } from './shared/shared.module';
import {UsersModule} from "./users/users.module";
import {CoreModule} from "./home/home.module";

@NgModule({
  imports: [ 
      BrowserModule,
      AppRoutingModule,
      SharedModule,
      CoreModule,
      UsersModule,
      EventsModule
    ],
  declarations: [ 
      AppComponent
    ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
