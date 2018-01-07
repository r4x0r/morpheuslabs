import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthFormComponent } from './containers/auth-form/auth-form.component';


@NgModule({
  declarations: [
    AuthFormComponent
  ],
  imports: [
    NbThemeModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AuthFormComponent
  ]
})
export class SharedModule { }
