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
var _ = require("lodash");
var proposals_mock_1 = require("../../proposal/shared/proposals-mock");
var ProposalService = (function () {
    function ProposalService() {
        this.proposalList = proposals_mock_1.PROPOSALS;
    }
    ProposalService.prototype.getProposals = function (criteria) {
        return Promise.resolve(this.proposalList);
    };
    ProposalService.prototype.getProposalById = function (id) {
        var proposal = null;
        for (var _i = 0, _a = this.proposalList; _i < _a.length; _i++) {
            var prop = _a[_i];
            console.log(JSON.stringify(prop));
            if (prop.id == id) {
                proposal = _.cloneDeep(prop);
            }
        }
        return Promise.resolve(proposal);
    };
    ProposalService.prototype.updateProposal = function (proposal) {
        var index = -1;
        for (var _i = 0, _a = this.proposalList; _i < _a.length; _i++) {
            var prop = _a[_i];
            if (prop.id === proposal.id) {
                index = this.proposalList.indexOf(prop);
            }
        }
        this.proposalList.splice(index, 1, proposal);
        return Promise.resolve(proposal);
    };
    ProposalService.prototype.insertProposal = function (proposal) {
        return null;
    };
    ProposalService.prototype.deleteProposal = function (proposal) {
        for (var _i = 0, _a = this.proposalList; _i < _a.length; _i++) {
            var prop = _a[_i];
            console.log('check', prop, prop.id === proposal.id);
            if (prop.id === proposal.id) {
                prop.companyProfile = 'N.A.';
                prop.nationalWorkProfile = 'N.A.';
                prop.moneyProposal = 'N.A.';
                prop.motivation = '';
            }
        }
        console.log('new List', this.proposalList);
        return Promise.resolve(proposal);
        // let index = -1;
        // let promposalDeleted = null;
        // for (let prop of this.proposalList) { 
        //     if (prop.id === proposal.id) {
        //             index = this.proposalList.indexOf(prop);
        //             promposalDeleted = _.cloneDeep(prop);
        //             promposalDeleted.companyProfile = 'N.A.';
        //             promposalDeleted.nationalWorkProfile = 'N.A.';
        //             promposalDeleted.moneyProposal = 'N.A.';
        //             promposalDeleted.motivation = '';
        //         }
        // }
        // this.proposalList.splice(index, 1, promposalDeleted);
        // return Promise.resolve(proposal);
    };
    return ProposalService;
}());
ProposalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ProposalService);
exports.ProposalService = ProposalService;

//# sourceMappingURL=proposal.service.js.map
