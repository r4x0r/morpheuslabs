import { Component, OnInit, Input } from '@angular/core';
import { Workspace } from '../../../model/workspace.model'
import { WorkspaceService } from '../../../services/workspace.service'

@Component({
  selector: 'app-workspace-list',
  templateUrl: './workspace-list.component.html',
  styleUrls: ['./workspace-list.component.scss']
})
export class WorkspaceListComponent implements OnInit {
  
  workspaceList: Workspace[]
  showPopover: boolean = false;

  constructor(private workspaceService: WorkspaceService) { }

  ngOnInit() {
    this.workspaceList = this.workspaceService.getWorkshops()
    this.workspaceService.createWorkshopBtnClicked
    .subscribe(
      () => {
        this.showPopover = true
      }
    );
  }

  onPlusBtnClicked(){
    this.showPopover = true
  }

  dismissPopover(){
    this.showPopover = false
  }

  addWorkspace(workspace: Workspace) {
    this.workspaceList = this.workspaceService.addWorkshop(workspace)
    this.showPopover = false
  }
}
