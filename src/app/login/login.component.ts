import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  formSubmitted: boolean = false; 

  constructor(private router: Router) {}

  onLogin(loginForm: NgForm) {
    this.formSubmitted = true; 
    if (loginForm.valid && this.isValidCredentials()) {
      this.router.navigate(['/home']);
    }
  }

  private isValidCredentials(): boolean {
    return this.username.trim() !== '' && this.password.trim() !== '';
  }
}
