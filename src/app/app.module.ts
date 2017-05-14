import { EventsModule } from './events/events.module';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [ 
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      SharedModule,
      EventsModule
    ],
  declarations: [ 
      AppComponent
    ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
