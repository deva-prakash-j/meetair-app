import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../form.common.css']
})
export class HomeComponent implements OnInit {

  mode = ""
  joinForm: FormGroup;
  newMeetingId = "";
  errorMsg = '';

  constructor(private fb: FormBuilder) {
    this.mode = "host";
    this.newMeetingId = this.generateRandomString();
    this.joinForm = this.fb.group({
      name: [''],
      meetingId: [this.newMeetingId, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  generateRandomString() {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';

    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }

    return result;
  }

  updateMode(value: string) {
    this.mode = value;
    var meetingId = '';
    if(value == 'host') {
      meetingId = this.newMeetingId;
    }
    this.joinForm.get('meetingId')?.setValue(meetingId);
  }

  onSubmit(form: FormGroup) {
    if(form.invalid) {
      this.errorMsg = 'Invalid meeting ID';
      return;
    }
  }

  closeError() {
    this.errorMsg = '';
  }
}
