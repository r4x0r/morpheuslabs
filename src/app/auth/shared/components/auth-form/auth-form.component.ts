import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'ml-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  
  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  });

  @Output()
  submitted = new EventEmitter<FormGroup>();

  constructor(private fb:FormBuilder){

  }

  onSubmit()
  {
    // if (this.form.valid)
    // {
    //   this.submitted.emit(this.form);
    // }
    this.submitted.emit(this.form);
  }

  get passwordInvalid()
  {
    const control = this.form.get('password');
    return control.hasError('required') && control.touched;
  }

  get emailInvalid()
  {
    const control = this.form.get('email');
    return control.hasError('email') && control.touched;
  }
}
