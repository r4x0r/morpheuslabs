import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo:'login'
      },
      {
        path: 'login',
        loadChildren: './login/loginModule#LoginModule'
      },
      {
        path: 'register',
        loadChildren: './register/registerModule#RegisterModule'
      }
    ],
  },
];

@NgModule({
  declarations: [
  ],
  imports: [
    NbThemeModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class AuthModule { }
