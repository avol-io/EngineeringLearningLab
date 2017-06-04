"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var router_1 = require("@angular/router");
var events_routing_1 = require("./events.routing");
var events_item_component_1 = require("./components/events-item/events-item.component");
var events_page_component_1 = require("./components/events-page/events-page.component");
var events_service_1 = require("./services/events.service");
var home_component_1 = require("./components/home/home.component");
var core_1 = require("@angular/core");
var shared_module_1 = require("./../shared/shared.module");
var events_component_1 = require("./events.component");
var common_1 = require("@angular/common");
var registration_component_1 = require("./components/registration/registration.component");
var registration_service_1 = require("./services/registration.service");
var create_event_component_1 = require("./components/create-event/create-event.component");
var EventsModule = (function () {
    function EventsModule() {
    }
    return EventsModule;
}());
EventsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            shared_module_1.SharedModule,
            events_routing_1.EventsRoutingModule
        ],
        declarations: [
            events_component_1.EventsComponent,
            home_component_1.HomeComponent,
            events_page_component_1.EventsPageComponent,
            events_item_component_1.EventsItemComponent,
            registration_component_1.RegistrationComponent,
            create_event_component_1.CreateEventComponent
        ],
        providers: [
            events_service_1.EventsService,
            registration_service_1.RegistrationService
        ],
        bootstrap: []
    })
], EventsModule);
exports.EventsModule = EventsModule;

//# sourceMappingURL=events.module.js.map
