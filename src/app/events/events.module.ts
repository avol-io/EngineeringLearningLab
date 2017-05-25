import { RouterModule } from '@angular/router';
import { EventsRoutingModule } from './events.routing';
import { EventsItemComponent } from './components/events-item/events-item.component';
import { EventsPageComponent } from './components/events-page/events-page.component';
import { EventsService } from './services/events.service';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { EventsComponent } from './events.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    EventsRoutingModule
  ],
  declarations: [
    EventsComponent,
    HomeComponent,
    EventsPageComponent,
    EventsItemComponent
  ],
  providers: [EventsService],
  bootstrap: []
})

export class EventsModule { }
