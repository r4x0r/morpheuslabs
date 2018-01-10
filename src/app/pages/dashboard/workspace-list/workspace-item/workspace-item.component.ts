import { Component, OnInit, Input } from '@angular/core'
import { Workspace } from '../../../../model/workspace.model'

@Component({
  selector: 'app-workspace-item',
  templateUrl: './workspace-item.component.html',
  styleUrls: ['./workspace-item.component.scss']
})
export class WorkspaceItemComponent implements OnInit {
  @Input() workspace: Workspace

  constructor() { }

  ngOnInit() {
  }

}
