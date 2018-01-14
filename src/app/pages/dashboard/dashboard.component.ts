import { Component } from '@angular/core';
import { KeycloakService } from '../../shared/keycloak/keycloak.service';
import { UserService } from '../../services/user.service'
import { User } from '../../model/user.model'

@Component({
  selector: 'ml-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent {
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
