import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service'
import { User } from '../../../../model/user.model'

@Component({
  selector: 'ml-profilepic',
  templateUrl: './profilepic.component.html',
  styleUrls: ['./profilepic.component.scss']
})
export class ProfilepicComponent implements OnInit {

  user: User
  constructor(private us: UserService) { }

  ngOnInit() {
    this.user = this.us.getUser()
    console.log(this.user)
  }

}
