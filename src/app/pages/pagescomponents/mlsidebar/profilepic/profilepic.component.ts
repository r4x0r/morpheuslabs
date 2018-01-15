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
  avatarLink: String 

  constructor(private us: UserService) { }

  ngOnInit() 
  {
    this.user = this.us.getUser()
    
    //Set up the avatar initials
    this.avatarLink = `https://ui-avatars.com/api/?size=45&background=fff&color=0D8ABC&name=${this.user.firstName}+${this.user.lastName}`
  }

}
