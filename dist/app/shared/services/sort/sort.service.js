"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var _ = require("lodash");
var SortService = (function () {
    function SortService() {
    }
    SortService.prototype.sortArray = function (array, columnName, columnNameIcon, sortByProperties, sortByOrders, sortingIcons) {
        var index = sortByProperties.indexOf(columnName);
        var isInSortArray = index !== -1;
        if (isInSortArray) {
            if (sortByOrders[index] == 'asc') {
                sortByOrders[index] = 'desc';
                sortingIcons[columnNameIcon].asc = false;
                sortingIcons[columnNameIcon].sort = true;
            }
            else {
                _.pullAt(sortByProperties, [index]);
                _.pullAt(sortByOrders, [index]);
                sortingIcons[columnNameIcon].asc = false;
                sortingIcons[columnNameIcon].sort = false;
            }
        }
        else {
            // For one column sort:
            sortByProperties = [];
            sortByOrders = [];
            this.resetSortingIcons(sortingIcons);
            //
            sortByProperties.push(columnName);
            sortByOrders.push('asc');
            sortingIcons[columnNameIcon].asc = true;
            sortingIcons[columnNameIcon].sort = true;
        }
        return _.orderBy(array, sortByProperties, sortByOrders);
    };
    SortService.prototype.resetSortingIcons = function (sortingIcons) {
        for (var key in sortingIcons) {
            sortingIcons[key].asc = false;
            sortingIcons[key].sort = false;
        }
    };
    return SortService;
}());
SortService = __decorate([
    core_1.Injectable()
], SortService);
exports.SortService = SortService;

//# sourceMappingURL=sort.service.js.map
