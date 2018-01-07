import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { WorkspaceListComponent } from './workspace-list/workspace-list.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { WorkspaceItemComponent } from './workspace-list/workspace-item/workspace-item.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { RepoItemComponent } from './repo-list/repo-item/repo-item.component';
import { WorkspacePopoverComponent } from './workspace-list/workspace-popover/workspace-popover.component';
import { CheckboxItemComponent } from './workspace-list/workspace-popover/checkbox-item/checkbox-item.component';
import { OptionSectionComponent } from './workspace-list/workspace-popover/option-section/option-section.component';

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    WorkspaceListComponent,
    RepoListComponent,
    WorkspaceItemComponent,
    ListHeaderComponent,
    RepoItemComponent,
    WorkspacePopoverComponent,
    CheckboxItemComponent,
    OptionSectionComponent,
  ]
})
export class DashboardModule { }
