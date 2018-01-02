import { Component, OnInit, Input } from '@angular/core';

import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ml-sidebar',
  templateUrl: './mlsidebar.component.html',
  styleUrls: ['./mlsidebar.component.scss']
})
export class MlsidebarComponent implements OnInit {
  @Input()
  menu: NbMenuItem[];

  constructor() { }

  ngOnInit() {
  }

}
