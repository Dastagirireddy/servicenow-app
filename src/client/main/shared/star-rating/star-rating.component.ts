import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'star-rating',
	template: `
		<div [ngClass]="{'disabled': !disabled}">
			<span (mouseover)="onEnter(rate)" (mouseleave)="onLeave(rate)" (click)="onClick(rate)" class="glyphicon glyphicon-star" *ngFor="let rate of ratings" [ngClass]="{'glyphicon-star-blue': rate <= rating}"></span>
		</div>
	`,
	styles: [`
		.glyphicon {
			font-size: 20px;
		}
		.glyphicon:hover{
			cursor: pointer;
		}
		.glyphicon-star-blue {
			color: #e91e63;
		}
		.disabled {
			pointer-events: none;
		}
		`
	]
})
export class StarRatingComponent {
	@Input() rating: any;
	@Output() onRate: EventEmitter<any>;
	@Input() disabled: Boolean;

	cpRating: number;
	ratings: Array<number>;

	constructor(){
		this.ratings = [1, 2, 3, 4,5];
		this.cpRating = this.rating;
		this.onRate = new EventEmitter();
	}

	onClick(rate: number) {
		
		this.rating = rate;
		this.cpRating = this.rating;
		this.onRate.emit(this.rating);
	}

	onEnter(rate: number) {
   			
   		this.cpRating = this.rating;
		this.rating = rate;
  	}

  	onLeave(rate: number) {
   	
   		this.rating = this.cpRating;
  	}
}