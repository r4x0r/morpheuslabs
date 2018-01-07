import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo:'login'
      },
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule'
      }
    ],
  },
];

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    NbThemeModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class AuthModule { }
