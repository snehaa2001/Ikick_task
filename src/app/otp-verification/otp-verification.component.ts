import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {
  constructor(private router: Router) {}
  otpverify(){
    alert("Pasword has been changed")
    this.router.navigate(['/login']);
  }
}
