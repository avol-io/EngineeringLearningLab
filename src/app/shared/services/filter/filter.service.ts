import { Injectable } from '@angular/core';

/**
 * Service which is used for filtering array of objects
 */
@Injectable()
export class FilterService {

    constructor() { }

    /**
     * function which filters an array by comparing each element with filter object
     * 
     * @param array array of objects
     * @param filter object which is used as a filter criteria
     */
    filterBy(array: any[], filter: any): any {
        console.log("filter");
        const type = typeof filter;

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

        if (type === 'object') { console.log('filter obj');
            return array.filter(this.filterByObject(filter));
        }

        if (type === 'function') {
            return array.filter(filter);
        }

        return array.filter(this.filterDefault(filter));
    }

    private filterByString(filter : any) {
        console.log("filter string");
        if (filter) {
            filter = filter.toLowerCase();
        }

        return (value: any) => {
            return !filter || (value ? value.toLowerCase().indexOf(filter) !== -1 : false);
        }
    }

    private filterByBoolean(filter : any) {
        return (value: any) => {
            return Boolean(value) === filter;
        }
    }

    private filterByObject(filter: any) {

        return (value: any) => {

            for (let key in filter) {

                const type = typeof filter[key];
console.log("filfilter[key]: " + JSON.stringify(filter[key]));
                if(filter[key]) {

                    if (type === 'string' && filter[key] === '') {
                        console.log('filter 1');
                        return true
                    }
    
                    if (value) {

                        if (!value.hasOwnProperty(key) && !Object.getOwnPropertyDescriptor(Object.getPrototypeOf(value), key)) {
                            return false;
                        }

                        let val = this.getValue(value[key]);
                        let isMatching: any;

                        if (type === 'boolean') {
                            isMatching = this.filterByBoolean(filter[key])(val);
                        } else if (type === 'string') {
                            isMatching = this.filterByString(filter[key])(val);
                        } else if (type === 'object') {
                            isMatching = this.filterByObject(filter[key])(val);
                        } else {
                            isMatching = this.filterDefault(filter[key])(val);
                        }

                        if (!isMatching) {
                            console.log('filter 2');
                            return false;
                        }

                    } else {
                        console.log('filter 3');
                        return false;
                    }
                }

            }
console.log('filter 4');
            return true;
        }
    }

    private getValue(value: any) {
        return typeof value === 'function' ? value() : value;
    }

    private filterDefault(filter: any) {
        return (value: any) => {
            return !filter || filter == value;
        }
    }

    private isNumber(value: any) {
        return !isNaN(parseInt(value, 10)) && isFinite(value);
    }
}