import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/Auth.service';
import { UserProfileResponse, UpdateProfileRequest } from '../../models/User';
import { HeaderComponent } from '../../shared/layout/header/header.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  template: `
    <div class="min-h-screen bg-gray-100">
      <app-header></app-header>
      
      <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="bg-white shadow rounded-lg">
            <!-- Header -->
            <div class="px-4 py-5 sm:p-6 border-b border-gray-200">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Perfil de Usuario
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                Gestiona tu información personal
              </p>
            </div>

            <!-- Form -->
            <div class="px-4 py-5 sm:p-6">
              <form [formGroup]="profileForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <!-- First Name -->
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      formControlName="firstName"
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      [class.border-red-300]="profileForm.get('firstName')?.invalid && profileForm.get('firstName')?.touched"
                    />
                    <div *ngIf="profileForm.get('firstName')?.invalid && profileForm.get('firstName')?.touched" class="mt-1 text-sm text-red-600">
                      El nombre es requerido
                    </div>
                  </div>

                  <!-- Last Name -->
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-gray-700">
                      Apellido
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      formControlName="lastName"
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      [class.border-red-300]="profileForm.get('lastName')?.invalid && profileForm.get('lastName')?.touched"
                    />
                    <div *ngIf="profileForm.get('lastName')?.invalid && profileForm.get('lastName')?.touched" class="mt-1 text-sm text-red-600">
                      El apellido es requerido
                    </div>
                  </div>

                  <!-- Email -->
                  <div class="sm:col-span-2">
                    <label for="email" class="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      formControlName="email"
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      [class.border-red-300]="profileForm.get('email')?.invalid && profileForm.get('email')?.touched"
                    />
                    <div *ngIf="profileForm.get('email')?.invalid && profileForm.get('email')?.touched" class="mt-1 text-sm text-red-600">
                      <span *ngIf="profileForm.get('email')?.errors?.['required']">El email es requerido</span>
                      <span *ngIf="profileForm.get('email')?.errors?.['email']">El email no es válido</span>
                    </div>
                  </div>

                  <!-- Password -->
                  <div class="sm:col-span-2">
                    <label for="password" class="block text-sm font-medium text-gray-700">
                      Nueva Contraseña (opcional)
                    </label>
                    <input
                      type="password"
                      id="password"
                      formControlName="password"
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      [class.border-red-300]="profileForm.get('password')?.invalid && profileForm.get('password')?.touched"
                    />
                    <div *ngIf="profileForm.get('password')?.invalid && profileForm.get('password')?.touched" class="mt-1 text-sm text-red-600">
                      La contraseña debe tener al menos 6 caracteres
                    </div>
                    <p class="mt-1 text-sm text-gray-500">
                      Deja en blanco si no quieres cambiar la contraseña
                    </p>
                  </div>
                </div>

                <!-- Buttons -->
                <div class="flex justify-end space-x-3">
                  <button
                    type="button"
                    (click)="resetForm()"
                    class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    [disabled]="profileForm.invalid || isLoading"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                  >
                    <span *ngIf="isLoading">Guardando...</span>
                    <span *ngIf="!isLoading">Guardar Cambios</span>
                  </button>
                </div>
              </form>

              <!-- Success/Error Messages -->
              <div *ngIf="successMessage" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-green-800">{{ successMessage }}</p>
                  </div>
                </div>
              </div>

              <div *ngIf="errorMessage" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-red-800">{{ errorMessage }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  isLoading = false;
  successMessage = '';
  errorMessage = '';
  currentUser: any;
  userId: number = 0;

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
      this.currentUser = JSON.parse(userStr);
      // Asumiendo que el userId está en el token o en la información del usuario
      // Por ahora usaremos un valor por defecto o lo obtendremos del backend
      this.userId = 1; // Esto debería venir del backend o del token decodificado
    }
  }

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.isLoading = true;
    this.errorMessage = '';

    this.authService.getUserProfile(this.userId).subscribe({
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

      this.authService.updateUserProfile(this.userId, updateRequest).subscribe({
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