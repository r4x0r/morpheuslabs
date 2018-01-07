import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './containers/register/register.component';


const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  },
];

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    NbThemeModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class RegisterModule { }
