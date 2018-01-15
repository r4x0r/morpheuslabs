import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule } from '@nebular/theme';
import { Routes, RouterModule } from '@angular/router';

import { MembershipComponent } from './membership.component';

const routes: Routes = [{
  path: '',
  component: MembershipComponent
}];

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    MembershipComponent
  ]
})
export class MembershipModule { }
