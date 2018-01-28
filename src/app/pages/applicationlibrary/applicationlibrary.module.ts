import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule } from '@nebular/theme';
import { Routes, RouterModule } from '@angular/router';

import { PagesSharedModule } from '../shared/shared.module';

import { ApplicationLibraryComponent } from './applicationlibrary.component';
import { ApplicationComponent } from './application/application.component';


const routes: Routes = [{
  path: '',
  component: ApplicationLibraryComponent
}];

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule,
    RouterModule.forChild(routes),
    PagesSharedModule
  ],
  declarations: [
    ApplicationLibraryComponent,
    ApplicationComponent
  ]
})
export class ApplicationLibraryModule { }
