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


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'membership',
    loadChildren: './membership/membership.module#MembershipModule'
  },
  {
    path: 'applicationlibrary',
    loadChildren: './applicationlibrary/applicationlibrary.module#ApplicationLibraryModule'
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

    DashboardModule
  ],
  declarations: [
    PagesComponent,
    MlheaderComponent,
    MlsidebarComponent,
    ProfilepicComponent,
  ],
  providers: [NbSidebarService, NbMenuService]
})
export class PagesModule { }
