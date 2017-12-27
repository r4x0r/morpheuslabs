import { Component } from '@angular/core';

import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ml-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent {

  menu: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'fa-tachometer',
      link: '/pages/dashboard',
      home: true,
    },
    {
      title: 'Membership',
      icon: 'nb-home',
      link: '/pages/membership'
    }
  ]
}
