import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  resetPasswordForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  forgotpassword() {
    if (this.resetPasswordForm.valid) {
    
      this.router.navigate(['/otp-verification']);
    }
  }
}
