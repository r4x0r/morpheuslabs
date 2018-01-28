import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule } from '@nebular/theme';
import { Routes, RouterModule } from '@angular/router';

import { PagesSharedModule } from '../shared/shared.module';

import { ApiLibraryComponent } from './apilibrary.component';


const routes: Routes = [{
  path: '',
  component: ApiLibraryComponent
}];

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule,
    RouterModule.forChild(routes),
    PagesSharedModule
  ],
  declarations: [
    ApiLibraryComponent
  ]
})
export class ApiLibraryModule { }
