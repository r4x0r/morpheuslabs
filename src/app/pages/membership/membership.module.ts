import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule } from '@nebular/theme';

import { MembershipComponent } from './membership.component';

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule
  ],
  declarations: [
    MembershipComponent
  ]
})
export class MembershipModule { }
