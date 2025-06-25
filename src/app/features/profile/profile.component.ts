import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/Auth.service';
import { UserProfileResponse, UpdateProfileRequest } from '../../models/User';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  userInfo: any;
  showMenu = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6)]]
    });

    // Obtener información del usuario actual del localStorage
    const userStr = localStorage.getItem('user');
    if (userStr) {
      this.userInfo = JSON.parse(userStr);
      console.log(this.userInfo);
    }
  }

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.isLoading = true;
    this.errorMessage = '';

    this.authService.getUserProfile(this.userInfo.id).subscribe({
      next: (profile: UserProfileResponse) => {
        this.profileForm.patchValue({
          firstName: profile.firstName,
          lastName: profile.lastName,
          email: profile.email,
          password: '' // No cargamos la contraseña
        });
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'Error al cargar el perfil';
        this.isLoading = false;
      }
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.isLoading = true;
      this.successMessage = '';
      this.errorMessage = '';

      const updateRequest: UpdateProfileRequest = {
        firstName: this.profileForm.get('firstName')?.value,
        lastName: this.profileForm.get('lastName')?.value,
        email: this.profileForm.get('email')?.value
      };

      // Solo incluir password si se proporcionó
      const password = this.profileForm.get('password')?.value;
      if (password) {
        updateRequest.password = password;
      }

      this.authService.updateUserProfile(this.userInfo.id, updateRequest).subscribe({
        next: (updatedProfile: UserProfileResponse) => {
          this.successMessage = 'Perfil actualizado correctamente';
          this.isLoading = false;
          
          // Actualizar información en localStorage
          const userStr = localStorage.getItem('user');
          if (userStr) {
            const user = JSON.parse(userStr);
            user.firstName = updatedProfile.firstName;
            user.lastName = updatedProfile.lastName;
            user.email = updatedProfile.email;
            localStorage.setItem('user', JSON.stringify(user));
          }

          // Limpiar campo de contraseña
          this.profileForm.patchValue({ password: '' });
        },
        error: (error) => {
          this.errorMessage = error.error?.message || 'Error al actualizar el perfil';
          this.isLoading = false;
        }
      });
    }
  }

  resetForm() {
    this.loadUserProfile();
    this.successMessage = '';
    this.errorMessage = '';
  }
} 