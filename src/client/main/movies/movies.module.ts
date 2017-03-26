import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../shared/shared.module';

import {MovieCardComponent} from './movie/movie-card.component';
import {MoviesComponent} from './movies.component';
import {OrderByPipe} from './movie-order-by.pipe';

@NgModule({
	imports: [
		BrowserModule,
		SharedModule
	],
	declarations: [
		MoviesComponent, 
		MovieCardComponent,
		OrderByPipe
	],
	exports: [
		MoviesComponent
	]
})
export class MovieModule {

}