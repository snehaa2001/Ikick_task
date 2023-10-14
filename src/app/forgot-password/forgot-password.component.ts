import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  constructor(private router: Router) {}
  selectedOption: 'email' | 'phone' = 'email'; 
  email: string = '';
  phone: string = '';
  otp: string = '';
  newPassword: string = '';
  otpRequired: boolean = false;
  otpVerified: boolean = false;

  forgotpassword() {
    
      this.router.navigate(['/otp-verification']);
    
  }
}
