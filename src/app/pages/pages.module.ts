import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbMenuModule, NbMenuService } from '@nebular/theme';

import { PagesComponent } from './pages.component';

import { MlheaderComponent } from './mlheader/mlheader.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MembershipModule } from './membership/membership.module';
import { MembershipComponent } from './membership/membership.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'membership',
    component: MembershipComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  // {
  //   path: 'ui-features',
  //   loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  // }
  ],
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    NbThemeModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),

    DashboardModule,
    MembershipModule
  ],
  declarations: [
    PagesComponent,
    MlheaderComponent
  ],
  providers: [NbSidebarService, NbMenuService]
})
export class PagesModule { }
