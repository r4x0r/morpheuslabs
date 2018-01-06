import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NbThemeModule } from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService, NbMenuModule, NbMenuService } from '@nebular/theme';

import { PagesComponent } from './pages.component';

import { MlheaderComponent } from './pagescomponents/mlheader/mlheader.component';
import { MlsidebarComponent } from './pagescomponents/mlsidebar/mlsidebar.component';
import { ProfilepicComponent } from './pagescomponents/mlsidebar/profilepic/profilepic.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MembershipModule } from './membership/membership.module';
import { MembershipComponent } from './membership/membership.component';
import { WorkspacePopover1Component } from './workspace-list/workspace-popover-1/workspace-popover-1.component';
import { WorkspacePopover2Component } from './workspace-list/workspace-popover-2/workspace-popover-2.component';


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
  }
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
    MlheaderComponent,
    MlsidebarComponent,
    ProfilepicComponent,
    WorkspacePopover1Component,
    WorkspacePopover2Component
  ],
  providers: [NbSidebarService, NbMenuService]
})
export class PagesModule { }
