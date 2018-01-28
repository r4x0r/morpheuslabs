import { Component, OnInit, Input } from '@angular/core'
import { Workspace } from '../../../../model/workspace.model'
import { WindowService } from '../../../../util/window.service'
import { WorkspaceService } from '../../../../services/workspace.service'

@Component({
  selector: 'app-workspace-item',
  templateUrl: './workspace-item.component.html',
  styleUrls: ['./workspace-item.component.scss'],
  providers: [WindowService]
})
export class WorkspaceItemComponent implements OnInit {
  @Input() workspace: Workspace
  nativeWindow: any
  showInfo: boolean = false
  constructor(private windowService: WindowService, private workspaceService: WorkspaceService) {
    this.nativeWindow = windowService.getNativeWindow();
  }

  ngOnInit() {
  }

  onWorkshopSelect() {
    var newWindow = this.nativeWindow.open(this.workspace.link);
  }

  onInfoTapped(event) {
    event.stopPropagation();
    this.showInfo = true
    console.log('onInfoTapped')
  }

  onDeleteTapped(event) {
    event.stopPropagation();
  }

  onInfoMaskTapped(event) {
    event.stopPropagation();
    this.showInfo = false
  }

  onActionTapped(event) {
    event.stopPropagation();
    console.log(this.workspace)
    if (this.workspace.status == "RUNNING") {
      this.workspaceService.stopWorkspace(this.workspace.id)
    } else if (this.workspace.status == "STOPPED") {
      this.workspaceService.startWorkspace(this.workspace.id)
    }
  }

}
