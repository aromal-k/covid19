import { Component, OnInit } from '@angular/core';
import { Constants } from '../shared/constants/constant';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public invalidUser = false;
  public username;
  public password;
  public signUpForm;
  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    localStorage.clear();
    this.createForm();
  }

  private createForm(): void {
    this.signUpForm = this.formBuilder.group({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
  /**
   * Function for handling the login click action
   * navigates to home once the entered credentials are correct
   * displays erros if entered credentails are incorrect
   */
  public loginClicked(): void {
    if (this.signUpForm.get('userName').value === Constants.userCredentials.username &&
      this.signUpForm.get('password').value === Constants.userCredentials.password) {
      this.invalidUser = false;
      localStorage.setItem('userDetails', JSON.stringify(this.signUpForm.value));
      this.router.navigate(['home/dashboard']);
    } else {
      this.invalidUser = true;
    }
  }

}

