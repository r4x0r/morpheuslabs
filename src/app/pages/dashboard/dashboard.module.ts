import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule } from '@nebular/theme';

import { DashboardComponent } from './dashboard.component';
import { WorkspaceListComponent } from './workspace-list/workspace-list.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { SampleRepoListComponent } from './sample-repo-list/sample-repo-list.component';
import { WorkspaceItemComponent } from './workspace-list/workspace-item/workspace-item.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { RepoItemComponent } from './repo-list/repo-item/repo-item.component';

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule
  ],
  declarations: [
    DashboardComponent,
    WorkspaceListComponent,
    RepoListComponent,
    SampleRepoListComponent,
    WorkspaceItemComponent,
    ListHeaderComponent,
    RepoItemComponent
  ]
})
export class DashboardModule { }
