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
/**
 * Service which is used for filtering array of objects
 */
var FilterService = (function () {
    function FilterService() {
    }
    /**
     * function which filters an array by comparing each element with filter object
     *
     * @param array array of objects
     * @param filter object which is used as a filter criteria
     */
    FilterService.prototype.filterBy = function (array, filter) {
        console.log("filter");
        var type = typeof filter;
        if (!array) {
            return array;
        }
        if (type === 'boolean') {
            return array.filter(this.filterByBoolean(filter));
        }
        if (type === 'string') {
            if (this.isNumber(filter)) {
                return array.filter(this.filterDefault(filter));
            }
            return array.filter(this.filterByString(filter));
        }
        if (type === 'object') {
            console.log('filter obj');
            return array.filter(this.filterByObject(filter));
        }
        if (type === 'function') {
            return array.filter(filter);
        }
        return array.filter(this.filterDefault(filter));
    };
    FilterService.prototype.filterByString = function (filter) {
        console.log("filter string");
        if (filter) {
            filter = filter.toLowerCase();
        }
        return function (value) {
            return !filter || (value ? value.toLowerCase().indexOf(filter) !== -1 : false);
        };
    };
    FilterService.prototype.filterByBoolean = function (filter) {
        return function (value) {
            return Boolean(value) === filter;
        };
    };
    FilterService.prototype.filterByObject = function (filter) {
        var _this = this;
        return function (value) {
            for (var key in filter) {
                var type = typeof filter[key];
                console.log("filfilter[key]: " + JSON.stringify(filter[key]));
                if (filter[key]) {
                    if (type === 'string' && filter[key] === '') {
                        console.log('filter 1');
                        return true;
                    }
                    if (value) {
                        if (!value.hasOwnProperty(key) && !Object.getOwnPropertyDescriptor(Object.getPrototypeOf(value), key)) {
                            return false;
                        }
                        var val = _this.getValue(value[key]);
                        var isMatching = void 0;
                        if (type === 'boolean') {
                            isMatching = _this.filterByBoolean(filter[key])(val);
                        }
                        else if (type === 'string') {
                            isMatching = _this.filterByString(filter[key])(val);
                        }
                        else if (type === 'object') {
                            isMatching = _this.filterByObject(filter[key])(val);
                        }
                        else {
                            isMatching = _this.filterDefault(filter[key])(val);
                        }
                        if (!isMatching) {
                            console.log('filter 2');
                            return false;
                        }
                    }
                    else {
                        console.log('filter 3');
                        return false;
                    }
                }
            }
            console.log('filter 4');
            return true;
        };
    };
    FilterService.prototype.getValue = function (value) {
        return typeof value === 'function' ? value() : value;
    };
    FilterService.prototype.filterDefault = function (filter) {
        return function (value) {
            return !filter || filter == value;
        };
    };
    FilterService.prototype.isNumber = function (value) {
        return !isNaN(parseInt(value, 10)) && isFinite(value);
    };
    return FilterService;
}());
FilterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], FilterService);
exports.FilterService = FilterService;

//# sourceMappingURL=filter.service.js.map
