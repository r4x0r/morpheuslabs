import { Component, OnInit, Input } from '@angular/core';
import { Workspace } from '../../../model/workspace.model'
import { WorkspaceService } from '../../../services/workspace.service'
import { Observable } from 'rxjs/Rx';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

@Component({
  selector: 'app-workspace-list',
  templateUrl: './workspace-list.component.html',
  styleUrls: ['./workspace-list.component.scss']
})
export class WorkspaceListComponent implements OnInit {

  workspaceList: Workspace[]
  showPopover: boolean = false;
  alive: boolean = false;

  constructor(
    private workspaceService: WorkspaceService,
  ) {
    this.alive = true;
  }

  ngOnInit() {

    // IntervalObservable.create(3000)
    //   .takeWhile(() => this.alive) // only fires when component is alive
    //   .subscribe(() => {
    //     this.workspaceService.getWorkspaces()
    //   });

    this.workspaceService.workshopRefreshed.subscribe((workspaces: Workspace[]) => {
      this.workspaceList = workspaces
    })

    this.workspaceService.createWorkshopBtnClicked
      .subscribe(
      () => {
        this.showPopover = true
      }
      );

    this.workspaceService.getWorkspaces()
  }

  onPlusBtnClicked() {
    this.showPopover = true
  }

  dismissPopover() {
    this.showPopover = false
  }

  addWorkspace(workspace: Workspace) {
    this.workspaceList = this.workspaceService.addWorkspace(workspace)
    this.showPopover = false
  }
}
