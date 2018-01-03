import { Component, OnInit, Input } from '@angular/core';
import { Workspace } from '../../../model/workspace.model'

@Component({
  selector: 'app-workspace-list',
  templateUrl: './workspace-list.component.html',
  styleUrls: ['./workspace-list.component.scss']
})
export class WorkspaceListComponent implements OnInit {
  
  @Input() workspaceList: Workspace[]
  constructor() { }

  ngOnInit() {
  }

}
