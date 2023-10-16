import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {
  otpValue: string = '';

  constructor(private router: Router) {}

  otpverify() {
    alert("Password has been changed");
    this.router.navigate(['/login']);
  }
}
