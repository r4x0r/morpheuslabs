import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule } from '@nebular/theme';
import { Routes, RouterModule } from '@angular/router';

import { PagesSharedModule } from '../shared/shared.module';

import { TechSupportComponent } from './techsupport.component';


const routes: Routes = [{
  path: '',
  component: TechSupportComponent
}];

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule,
    RouterModule.forChild(routes),
    PagesSharedModule
  ],
  declarations: [
    TechSupportComponent
  ]
})
export class TechSupportModule { }
