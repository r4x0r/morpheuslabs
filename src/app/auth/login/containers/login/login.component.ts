import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'ml-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router)
  {

  }

  loginUser(event: FormGroup)
  {
    console.log(event.value);
    this.router.navigate(['pages']);
  }

}
