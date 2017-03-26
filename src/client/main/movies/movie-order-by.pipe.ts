import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {

	transform(arr: Array<any>, filterName: string): Array<any> {

		console.log(arr, filterName);

	    return arr.sort((a,b) => {

	    	if (a[filterName] < b[filterName])
	    	  return -1;
	    	if (a[filterName] > b[filterName])
	    	  return 1;
	    	return 0;
	    });
	}
}