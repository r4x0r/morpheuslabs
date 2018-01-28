import { Component, OnInit, Input } from '@angular/core'
import { Workspace } from '../../../../model/workspace.model'
import { WindowService } from '../../../../util/window.service'

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
  constructor(private windowService: WindowService) {
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

}
