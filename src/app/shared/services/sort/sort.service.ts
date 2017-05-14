import { Injectable } from '@angular/core';
import * as _ from "lodash";

@Injectable()
export class SortService {

    sortArray(array: any[], columnName: string, columnNameIcon: string, sortByProperties: string[], sortByOrders: string[], sortingIcons: any)  {

        let index = sortByProperties.indexOf(columnName);
        let isInSortArray =  index !== -1 ;

        if (isInSortArray) {
            if (sortByOrders[index] == 'asc') {

                sortByOrders[index] = 'desc';

                sortingIcons[columnNameIcon].asc = false;
                sortingIcons[columnNameIcon].sort = true;
            }
            else {
                _.pullAt(sortByProperties,[index]);
                _.pullAt(sortByOrders,[index]);

                sortingIcons[columnNameIcon].asc = false;
                sortingIcons[columnNameIcon].sort = false;
            }
        } else {
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

        return  _.orderBy(array, sortByProperties, sortByOrders);
    }

    resetSortingIcons(sortingIcons: any){

        for (let key in sortingIcons) {
            sortingIcons[key].asc = false;
            sortingIcons[key].sort = false;
        }
    }
}