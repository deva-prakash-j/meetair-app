import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../../form.common.css']
})
export class ForgotPasswordComponent {

  fpForm: FormGroup;
  errorMsg = '';

  constructor(private fb: FormBuilder) {
    this.fpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(form: FormGroup) {
    if(form.invalid) {
      this.errorMsg = 'Please Provide Valid Email Address.';
      return;
    }
  }

  closeError() {
    this.errorMsg = '';
  }
}
