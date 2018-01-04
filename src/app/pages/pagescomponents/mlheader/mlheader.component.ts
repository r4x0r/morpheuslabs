import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'ml-header',
  templateUrl: './mlheader.component.html',
  styleUrls: ['./mlheader.component.scss']
})
export class MlheaderComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService) { }

  ngOnInit() {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

}
