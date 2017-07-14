import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';

@NgModule({
  imports: [ 
      BrowserModule,
      SharedModule,
      HomeModule,
      UsersModule,
      EventsModule,
      AppRoutingModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ 
      AppComponent,
      PageNotFoundComponent
    ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
