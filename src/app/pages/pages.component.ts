import { Component } from '@angular/core';

import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ml-pages',
  templateUrl: './pages.component.html',
  styleUrls:['./pages.component.scss']
})
export class PagesComponent {

  menu: NbMenuItem[] = [
    {
      title: 'PROGRAM RESOURCES',
      group: true,
    },
    {
      title: 'Dashboard',
      icon: 'nb-layout-default',
      link: '/pages/dashboard',
      home: true,
    },
    {
      title: 'Membership',
      icon: 'nb-person',
      link: '/pages/membership'
    },
    {
      title: 'Team',
      icon: 'nb-person',
      link: '/pages/membership'
    },
    {
      title: 'Technical Support',
      icon: 'nb-person',
      link: '/pages/membership'
    },
    {
      title: 'Application Library',
      icon: 'nb-person',
      link: '/pages/membership'
    },
    {
      title: 'API Library',
      icon: 'nb-person',
      link: '/pages/membership'
    },
    {
      title: 'OTHER RESOURCES',
      group: true,
    },
    {
      title: 'Forum',
      icon: 'nb-person',
      link: '/pages/membership'
    },
    {
      title: 'Bug Reporter',
      icon: 'nb-person',
      link: '/pages/membership'
    },
    {
      title: 'News & Reporter',
      icon: 'nb-person',
      link: '/pages/membership'
    }
  ]
}
