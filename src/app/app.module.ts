import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple.reducer';


import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, StoreModule.forRoot({ message: simpleReducer })],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
