import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent {
  constructor(private router: Router) {}
  isUpdatePopupVisible: boolean = false;
  newBio: string = '';
  selectedFile: File | null = null;
  bio: string = 'Your bio goes here!!';
  profileImage: string = 'assets/images/profile.png';

  showUpdatePopup() {
    this.isUpdatePopupVisible = true;
  }

  cancelUpdate() {
    this.isUpdatePopupVisible = false;
    this.newBio = '';
    this.selectedFile = null;
  }

  updateBioAndPicture() {
    if (this.newBio) {
      this.bio = this.newBio; 
    }

    if (this.selectedFile) {
     
   
    }

    
    alert('Profile updated successfully');
  
    this.router.navigate(['/home']);
  
    this.isUpdatePopupVisible = false;
    this.newBio = '';
    this.selectedFile = null;
  }
  skipUpdate() {
    this.router.navigate(['/home']);
  }
  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }
  page = {
    image: 'assets/images/logo.png',
    
  
  };
}
