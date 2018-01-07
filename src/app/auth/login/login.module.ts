import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './containers/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    NbThemeModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class LoginModule { }
