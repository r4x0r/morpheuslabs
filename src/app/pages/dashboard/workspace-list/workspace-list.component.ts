import { Component, OnInit, Input } from '@angular/core';
import { Workspace } from '../../../model/workspace.model'
import { workspaceList } from '../../../data/workspace-list'

@Component({
  selector: 'app-workspace-list',
  templateUrl: './workspace-list.component.html',
  styleUrls: ['./workspace-list.component.scss']
})
export class WorkspaceListComponent implements OnInit {
  
  workspaceList: Workspace[]
  showPopover: boolean = false;

  constructor() { }

  ngOnInit() {
    this.workspaceList = workspaceList
  }

  onPlusBtnClicked(){
    this.showPopover = true
  }

  dismissPopover(){
    this.showPopover = false
  }

  addWorkspace(workspace: Workspace) {
    this.workspaceList.push(workspace)
    console.log(this.workspaceList)
    this.showPopover = false
  }
}
