import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  passwordResetForm: FormGroup
  constructor(private formBuild: FormBuilder,public userService:UserServiceService) { }

  ngOnInit(): void {

    this.passwordResetForm = this.formBuild.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    })

  }
  get username() {
    return this.passwordResetForm.get('username');
  }
  get password() {
    return this.passwordResetForm.get('password');
  }
}
