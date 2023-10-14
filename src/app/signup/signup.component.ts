import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  passwordStrength: number = 0; 

  constructor(private router: Router) {}

  onsignup(){
    alert("Registered Successfully")
    this.router.navigate(['/profile-update']);
  }
}
