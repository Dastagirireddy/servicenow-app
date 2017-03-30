import {Component} from '@angular/core';
import {AppService} from './app.service';

import './app.component.scss';

@Component({
	selector: 'servicenow-app',
	templateUrl: './app/app.component.html'
})
export class AppComponent {
	public items: Array<any>;
	public yitems: Array<any>;
	public xitems: Array<any>;
	public filterName: String;
	
	constructor(private appSrvc: AppService) {
		this.items = [];
		this.filterName = "";
		this.xitems = [1, 2, 3, 4, 5];

		this.appSrvc.getMovies()
			.subscribe((data) => {

				this.items = data;
				this.appSrvc.movieStore.next(data);
			});

		this.appSrvc.movieStore
			.subscribe((data) => {

				this.yitems = this.appSrvc.getYItems(data);
			});
	}

	onMovie(item: Object) {

		this.appSrvc.updateMovies(item);
		this.appSrvc.movieStore.next(this.items);
	}
}