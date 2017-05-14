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
var proposal_list_component_1 = require("./../proposal-list/proposal-list.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var $ = require("jquery");
var alert_model_1 = require("../../shared/alert/shared/alert.model");
var ProposalsComponent = (function () {
    function ProposalsComponent(router) {
        this.router = router;
        this.alerts = [];
    }
    ProposalsComponent.prototype.ngOnInit = function () {
        console.log("ngOninit proposal");
        this.editProposal = null;
        this.alerts = [];
        // test
        this.onError("Test error!");
    };
    /**
     * Opens Edit Modal
     *
     * @param Proposal proposal to be edited
     */
    ProposalsComponent.prototype.onEditClick = function (proposal) {
        //this.editProposal = proposal;
        console.log("this.proposalEditId = " + proposal.id);
        this.proposalEditId = proposal.id;
        $('#myModal').modal('show');
        //this.router.navigate(['/proposal-edit', proposal.id]);
    };
    /**
     * Handles errors from server.
     *
     * @param string errorMessage to display to user
     */
    ProposalsComponent.prototype.onError = function (errorMessage) {
        this.alerts.push(new alert_model_1.Alert(alert_model_1.Alert.TYPE_DANGER, errorMessage));
    };
    ProposalsComponent.prototype.onEditedProposalSubmitted = function (proposalUpdated) {
        if (proposalUpdated) {
            this.proposalList.reload();
        }
        $('#myModal').modal('hide');
        this.proposalEditId = undefined;
    };
    return ProposalsComponent;
}());
__decorate([
    core_1.ViewChild('proposalList'),
    __metadata("design:type", proposal_list_component_1.ProposalListComponent)
], ProposalsComponent.prototype, "proposalList", void 0);
ProposalsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'esl-proposals',
        templateUrl: 'proposals.component.html',
        styleUrls: ['proposals.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ProposalsComponent);
exports.ProposalsComponent = ProposalsComponent;

//# sourceMappingURL=proposals.component.js.map
