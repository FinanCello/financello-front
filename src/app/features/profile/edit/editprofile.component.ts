import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { UpdateProfileRequest, UserProfileResponse } from '../../../models/User';
import { AuthService } from '../../../services/Auth.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule]
})
export class EditProfileComponent implements OnInit {
  profileForm!: FormGroup;
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  userInfo: any;
  showMenu = false;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      this.userInfo = JSON.parse(userStr);

      this.profileForm = this.fb.group({
        firstName: [this.userInfo.firstName || '', Validators.required],
        lastName: [this.userInfo.lastName || '', Validators.required],
        password: [this.userInfo.password],
        email: [this.userInfo.email || '', [Validators.required, Validators.email]]
      });
    }
  }
  
  onSave(): void {
    if (this.profileForm.valid) {
      this.isLoading = true;
      this.successMessage = '';
      this.errorMessage = '';
      
      const rawFormValue = this.profileForm.getRawValue();
  
      const updateRequest: UpdateProfileRequest = {
        firstName: rawFormValue.firstName,
        lastName: rawFormValue.lastName,
        email: rawFormValue.email,
        password: rawFormValue.password
      };
      console.log(this.profileForm.value);
      if (rawFormValue.password?.trim()) {
        updateRequest.password = rawFormValue.password.trim();
      }
  
      this.authService.updateUserProfile(this.userInfo.id, updateRequest).subscribe({
        next: (updatedProfile: UserProfileResponse) => {
          this.successMessage = 'Perfil actualizado correctamente';
          this.isLoading = false;
  
          const userStr = localStorage.getItem('user');
          if (userStr) {
            const user = JSON.parse(userStr);
            user.firstName = updatedProfile.firstName;
            user.lastName = updatedProfile.lastName;
            user.email = updatedProfile.email;
            localStorage.setItem('user', JSON.stringify(user));
          }
  
          this.profileForm.patchValue({ password: '' });

          this.router.navigate(['dashboard/profile']);
        },
        error: (error) => {
          this.errorMessage = error.error?.message || 'Error al actualizar el perfil';
          this.isLoading = false;
        }
      });
    }
  }
  
}
