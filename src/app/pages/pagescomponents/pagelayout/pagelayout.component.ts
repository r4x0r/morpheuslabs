import { Component, OnInit, Input } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'ml-pagelayout',
  templateUrl: './pagelayout.component.html',
  styleUrls: ['./pagelayout.component.scss']
})
export class MlPagelayoutComponent implements OnInit
{
  @Input()
  pageDetails;

  pageTitle: String;
  pageDescription: String;
  pageIcon: String;

  constructor() { }

  ngOnInit()
  {
    this.pageTitle = this.pageDetails.pageTitle;
    this.pageDescription = this.pageDetails.pageDescription;
    this.pageIcon = this.pageDetails.pageIcon;
  }

}
