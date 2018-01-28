import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { WorkspaceService } from '../../../services/workspace.service';
import { KeycloakService } from '../../../shared/keycloak/keycloak.service';

@Component({
  selector: 'ml-header',
  templateUrl: './mlheader.component.html',
  styleUrls: ['./mlheader.component.scss']
})
export class MlheaderComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService, private ks: KeycloakService,
    private menuService: NbMenuService, private workspaceService: WorkspaceService) { }

  ngOnInit() {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  createBtnClicked() {
    this.workspaceService.createWorkshopBtnClicked.emit()
  }

  logoutTapped() {
    this.ks.logout()
  }

}
