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
var proposal_model_1 = require("../../shared/models/proposal.model");
var user_acount_model_1 = require("../../shared/models/user-acount.model");
var proposal_service_1 = require("../../shared/services/proposal.service");
var sort_service_1 = require("../../shared/services/sort/sort.service");
var filter_service_1 = require("../../shared/services/filter/filter.service");
var ProposalListComponent = (function () {
    function ProposalListComponent(proposalService, sortService, filterService) {
        this.proposalService = proposalService;
        this.sortService = sortService;
        this.filterService = filterService;
        this.onEdit = new core_1.EventEmitter();
    }
    ProposalListComponent.prototype.ngOnInit = function () {
        // change proposalCriteria!!!
        this.proposalCriteria = null;
        this.getProposals(this.proposalCriteria);
        this.sortByProperties = [];
        this.sortByOrders = [];
        this.sortingIcons = {
            fisrtName: { asc: false, sort: false },
            lastName: { asc: false, sort: false },
            manager: { asc: false, sort: false },
            companyProfile: { asc: false, sort: false },
            nationalWorkProfile: { asc: false, sort: false }
        };
        this.proposalFilter = new proposal_model_1.Proposal();
        this.proposalFilter.userAccount = new user_acount_model_1.UserAccount();
    };
    /**
     * Get list of proposlas.
     *
     * @param criteria ProposalCriteria
     */
    ProposalListComponent.prototype.getProposals = function (criteria) {
        var _this = this;
        this.proposalService.getProposals(criteria).then(function (proposals) {
            _this.proposals = proposals;
            _this.proposalSortedFiltered = proposals;
            console.log(JSON.stringify(_this.proposals));
        });
    };
    /**
     * Emits proposal for the edit modal.
     */
    ProposalListComponent.prototype.openEditModal = function (proposal) {
        this.onEdit.emit(proposal);
    };
    /**
     * Delets selected propsal.
     */
    ProposalListComponent.prototype.deleteProposal = function (proposal) {
        this.proposalService.deleteProposal(proposal).then(function (proposal) { }, function (reason) { });
    };
    /**
     * Set sorting state arrays sortByProperties and sortByOrders by given parameters.
     *
     * @param columnName string; Variabile to add sort para,eter to sortByProperties array.
     * @param columnNameIcon string; Variable to manage the state of fa-sort icon.
     */
    ProposalListComponent.prototype.sortByColumn = function (columnName, columnNameIcon) {
        // this.proposalsSorted = this.sortService.sortArray(this.proposals, columnName, columnNameIcon,
        //                                                      this.sortByProperties, this.sortByOrders, this.sortingIcons);
        var index = this.sortByProperties.indexOf(columnName);
        var isInSortArray = index !== -1;
        if (isInSortArray) {
            if (this.sortByOrders[index] == 'asc') {
                this.sortByOrders[index] = 'desc';
                this.sortingIcons[columnNameIcon].asc = false;
                this.sortingIcons[columnNameIcon].sort = true;
            }
            else {
                _.pullAt(this.sortByProperties, [index]);
                _.pullAt(this.sortByOrders, [index]);
                this.sortingIcons[columnNameIcon].asc = false;
                this.sortingIcons[columnNameIcon].sort = false;
            }
        }
        else {
            // For one column sort:
            this.sortByProperties = [];
            this.sortByOrders = [];
            this.resetSortingIcons();
            //
            this.sortByProperties.push(columnName);
            this.sortByOrders.push('asc');
            this.sortingIcons[columnNameIcon].asc = true;
            this.sortingIcons[columnNameIcon].sort = true;
        }
    };
    /**
     * Reset state of fa-sort icons in sortingIcons object to default values.
     */
    ProposalListComponent.prototype.resetSortingIcons = function () {
        this.sortingIcons = {
            fisrtName: { asc: false, sort: false },
            lastName: { asc: false, sort: false },
            manager: { asc: false, sort: false },
            companyProfile: { asc: false, sort: false },
            nationalWorkProfile: { asc: false, sort: false },
            moneyProposal: { asc: false, sort: false }
        };
    };
    /**
     * Sort and filter proposal array.
     */
    ProposalListComponent.prototype.proposalSortAndFilter = function () {
        this.proposalSortedFiltered = this.proposals;
        // Create filter object.
        this.proposalFilter = new proposal_model_1.Proposal();
        this.proposalFilter.userAccount = new user_acount_model_1.UserAccount();
        this.proposalFilter.userAccount.firstName = this.filterFirstName;
        this.proposalFilter.userAccount.lastName = this.filterLastName;
        this.proposalFilter.manager = this.filterManagerName;
        this.proposalFilter.companyProfile = this.filterCompanyProfile;
        this.proposalFilter.nationalWorkProfile = this.filterNationalWorkProfile;
        console.log('proposalFilter: ' + JSON.stringify(this.proposalFilter));
        // FILTER
        this.proposalSortedFiltered = this.filterService.filterBy(this.proposals, this.proposalFilter);
        // SORT
        this.proposalSortedFiltered = _.orderBy(this.proposalSortedFiltered, this.sortByProperties, this.sortByOrders);
    };
    ProposalListComponent.prototype.reload = function () {
        this.getProposals(this.proposalCriteria);
    };
    return ProposalListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ProposalListComponent.prototype, "onEdit", void 0);
ProposalListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'esl-proposal-list',
        templateUrl: 'proposal-list.component.html',
        styleUrls: ['proposal-list.component.css'],
        providers: [proposal_service_1.ProposalService, sort_service_1.SortService, filter_service_1.FilterService]
    }),
    __metadata("design:paramtypes", [proposal_service_1.ProposalService, sort_service_1.SortService, filter_service_1.FilterService])
], ProposalListComponent);
exports.ProposalListComponent = ProposalListComponent;

//# sourceMappingURL=proposal-list.component.js.map
