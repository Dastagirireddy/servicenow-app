import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class AppService {
	movieStore: ReplaySubject<any>;

	constructor(private http: Http) {
		this.movieStore = new ReplaySubject<any>(null);
	}

	getMovies() {
		return this.http.get('/api/movies')
			.map(res => res.json());
	}

	updateMovies(item: any) {
		return this.http.put('/api/movies', item)
				.map(res => res.json())
				.subscribe((data) => {
					this.movieStore.next(data);
				});
	}	

	getYItems(data: Array<any>) {

		let yitems = [0, 0, 0, 0, 0];

		if(Array.isArray(data)) {
			data.map((val: any) => {

				if(val.rating > 0) {
					yitems[val.rating - 1]++;
				}
			});
		}

		return yitems;
	}
}