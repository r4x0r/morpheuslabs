import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Sanitizer } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [],
	providers: [DatePipe],
	exports: [
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		CommonModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule { }