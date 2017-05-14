"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var home_component_1 = require("./components/home/home.component");
var core_1 = require("@angular/core");
var shared_module_1 = require("./../shared/shared.module");
var events_component_1 = require("./events.component");
var EventsModule = (function () {
    function EventsModule() {
    }
    return EventsModule;
}());
EventsModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule
        ],
        declarations: [
            events_component_1.EventsComponent,
            home_component_1.HomeComponent
        ],
        providers: [],
        bootstrap: []
    })
], EventsModule);
exports.EventsModule = EventsModule;

//# sourceMappingURL=events.module.js.map
