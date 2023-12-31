import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../form.common.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMsg = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(form: FormGroup) {
    if(form.invalid) {
      this.errorMsg = 'Invalid Username & Password.';
      return;
    }
  }

  closeError() {
    this.errorMsg = '';
  }

}
