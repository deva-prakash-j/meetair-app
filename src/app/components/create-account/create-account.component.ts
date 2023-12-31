import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['../../form.common.css']
})
export class CreateAccountComponent {

  signupForm: FormGroup;
  errorMsg = '';
  isFormSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.signupForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(15)]),
      'confirmPassword': new FormControl('', [Validators.required])
    }, {validators:this.confirmPasswordValidator});
  }

  confirmPasswordValidator(control: AbstractControl) {
    let password = control.get('password')?.value;
    let confirmPassword = control.get('confirmPassword')?.value;
    return password && password != confirmPassword ? {'confirmPasswordMatch': 'notValid'} : null;
  }

  onSubmit(form: FormGroup) {
    this.isFormSubmitted = true;
    if(form.invalid) {
      return;
    }
  }

  closeError() {
    this.errorMsg = '';
  }

}
