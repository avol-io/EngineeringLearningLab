import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { EventsComponent } from './events.component';


@NgModule({
  imports: [ 
      SharedModule
    ],
  declarations: [ 
      EventsComponent,
      HomeComponent
    ],
  providers: [ ],
  bootstrap: [ ]
})

export class EventsModule { }
