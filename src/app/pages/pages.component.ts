import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { KeycloakService } from '../shared/keycloak/keycloak.service';
import { UserService } from '../services/user.service'
import { User } from '../model/user.model'

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

  kcUserProfile: any = {};
  isUserLoaded: boolean = false;
  constructor(
    private kc: KeycloakService,
    private us: UserService
  ) { }

  ngOnInit() {
    this.kc.loadProfile().then(user => {
      this.kcUserProfile = user;
      // console.log(this.kcUserProfile)
      this.kc.getToken().then(res => {
        // console.log(res)
        let user = this.us.initUser(
          new User(res,this.kcUserProfile.firstName,this.kcUserProfile.lastName,this.kcUserProfile.username,this.kcUserProfile.email)
        )
        this.isUserLoaded = true
        console.log(this.us.getUser())
      })
		})
  }

}
