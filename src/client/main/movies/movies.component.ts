import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'movies',
	template: `
		<div class="row">
			<movie-card *ngFor="let item of items | orderBy: filterName" [item]="item" (onMovieRate)="onMovieRate($event)"></movie-card>
		</div>
	`
})
export class MoviesComponent {
	@Input() items: Array<Object>;
	@Output() onMovie: EventEmitter<any>;
	@Input() filterName: any;

	constructor() {
		this.onMovie = new EventEmitter();
	}

	onMovieRate(item: Object) {

		this.onMovie.emit(item);
	}
}