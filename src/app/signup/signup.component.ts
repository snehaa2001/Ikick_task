import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import the necessary modules
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  passwordStrength: string = '';
 

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.signupForm = this.formBuilder.group({
     username: [
  '',
  [Validators.required, Validators.pattern(/^[a-z_]{1,20}$/)],
],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*\d)[A-Za-z\d@$!%*?&]{8,30}$/),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
      fullName: [
        '',
        [Validators.required, Validators.maxLength(50)],
      ],
      phoneNumber: [''],
      email: ['', [Validators.email]],
    }, {
      validator: this.passwordMatchValidator
    });
  }
  
  

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (passwordControl && confirmPasswordControl) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;

      if (password !== confirmPassword) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }
  


  checkPasswordStrength() {
    const passwordControl = this.signupForm.get('password');

    if (passwordControl && passwordControl.valid) {
      const password = passwordControl.value;

      if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,30}$/.test(password)) {
        this.passwordStrength = 'Strong';
      } else if (/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d!@#$%^&*]{8,30}$/.test(password)) {
        this.passwordStrength = 'Moderate';
      } else {
        this.passwordStrength = 'Weak';
      }
    } else {
      this.passwordStrength = '';
    }
  }

 

  onRegister() {
    if (this.signupForm && this.signupForm.valid) {
      const passwordControl = this.signupForm.get('password');
      const confirmPasswordControl = this.signupForm.get('confirmPassword');
  
      if (passwordControl && confirmPasswordControl) {
        const password = passwordControl.value;
        const confirmPassword = confirmPasswordControl.value;
  
        if (password !== confirmPassword) {
          this.signupForm.setErrors({ passwordMismatch: true });
        } else {
          this.router.navigate(['/home']);
        }
      }
    }
  }
  

}
