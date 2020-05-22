import { Component, OnInit } from '@angular/core';
import { PasswordValidators } from './password.validators';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        oldPassword: [
          '',
          Validators.required,
          PasswordValidators.validOldPassword,
        ],
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: PasswordValidators.passwordShouldMatch }
    );
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  /*
  form = new FormGroup({
    oldPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  */
}
