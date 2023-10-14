import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.isValidCredentials()) {
      this.router.navigate(['/home']);
    } else {
      window.alert('Invalid credentials. Please enter both username and password.');
    }
  }

  private isValidCredentials(): boolean {
    return this.username.trim() !== '' && this.password.trim() !== '';
  }
}
