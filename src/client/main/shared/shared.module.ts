import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {StarRatingComponent} from './star-rating/star-rating.component';
import {ChartComponent} from './chart/chart.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [StarRatingComponent, ChartComponent],
	declarations: [StarRatingComponent, ChartComponent]
})
export class SharedModule {

}