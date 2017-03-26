import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'movie-card',
	templateUrl: './movies/movie/movie-card.component.html',
	styles: [
		`.panel{border-color:#fff;}`
	]
})
export class MovieCardComponent {
	@Input() item: Object;
	@Output() onMovieRate: EventEmitter<any>;

	constructor() {
		this.onMovieRate = new EventEmitter();
	}
	
	onRate(rate: number, item: any) {
		
		item.rating = rate;
		this.onMovieRate.emit(item);
	}

	isMovieReleased(date: string): Boolean {

		let value = (new Date(date).getTime() <= new Date().getTime());
		return value;
	}
}