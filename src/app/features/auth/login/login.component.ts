import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/Auth.service';
import { LoginRequest } from '../../../models/User';
import { SnackbarService } from '../../../shared/snackbar/snackbar.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  private snackbarService = inject(SnackbarService);

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      this.snackbarService.showSnackbar(
        'Data are Missing',
        'Complete all the required fields',
        'icons/warning.png'
      );
      return;
    }
  
    this.isLoading = true;
    this.errorMessage = '';
  
    const loginRequest: LoginRequest = this.loginForm.value;
  
    this.authService.login(loginRequest).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify({
          id: response.id,
          email: response.email,
          firstName: response.firstName,
          lastName: response.lastName,
          userType: response.userType
        }));
  
        this.snackbarService.showSnackbar(
          'Successful Record',
          'The user was created correctly',
          'icons/success.png'
        );
  
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.isLoading = false;
        const backendMsg = error.error?.detail || 'Access Denied';
      
        if (backendMsg.includes('Incorrect password')) {
          this.snackbarService.showSnackbar(
            'Access Denied',
            'Incorrect password',
            'icons/error.png'
          );
        } else if (backendMsg.includes('User not found')) {
          this.snackbarService.showSnackbar(
            'Access Denied',
            'User does not exist',
            'icons/error.png'
          );
        } else {
          this.snackbarService.showSnackbar(
            'Access Denied',
            backendMsg,
            'icons/error.png'
          );
        }
      }
      
    });
  }

  goToSignup() {
    this.router.navigate(['/auth/register']);
  }  
}
