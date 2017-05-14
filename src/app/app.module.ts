import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';

import { SharedModule } from './shared/shared.module';
import { ProposalsModule } from './proposal/proposals.module';

@NgModule({
  imports: [ 
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      SharedModule,
      ProposalsModule
    ],
  declarations: [ 
      AppComponent
    ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
