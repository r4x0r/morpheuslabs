import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule } from '@nebular/theme';
import { Routes, RouterModule } from '@angular/router';

import { PagesSharedModule } from '../shared/shared.module';

import { BugReporterComponent } from './bugreporter.component';


const routes: Routes = [{
  path: '',
  component: BugReporterComponent
}];

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule,
    RouterModule.forChild(routes),
    PagesSharedModule
  ],
  declarations: [
    BugReporterComponent
  ]
})
export class BugReporterModule { }
