import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule } from '@nebular/theme';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
