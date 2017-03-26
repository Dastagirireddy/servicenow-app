import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {SharedModule} from '../shared/shared.module';
import {MovieModule} from '../movies/movies.module';

import {AppComponent} from './app.component';
import {AppService} from './app.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		SharedModule,
		MovieModule,
		FormsModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent],
	providers: [AppService]
})
export class AppModule {

}