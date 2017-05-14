"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AlertComponent = (function () {
    function AlertComponent() {
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () { };
    AlertComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    return AlertComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AlertComponent.prototype, "alerts", void 0);
AlertComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'esl-alert',
        templateUrl: './alert.component.html',
        styleUrls: ['./alert.component.css']
    }),
    __metadata("design:paramtypes", [])
], AlertComponent);
exports.AlertComponent = AlertComponent;

//# sourceMappingURL=alert.component.js.map
