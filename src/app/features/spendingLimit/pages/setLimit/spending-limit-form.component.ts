import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { SpendingLimitService } from  '../../../../services/SpendingLimit.service';
import { CategoryService } from '../../../../services/Category.service';
import {SpendingLimitRequest, SpendingLimitResponse} from '../../../../models/SpendingLimit';
import { SnackbarService } from '../../../../shared/snackbar/snackbar.service';
import { AuthService } from '../../../../services/Auth.service';

@Component({
  selector: 'app-spending-limit-form',
  standalone: true,
  templateUrl: './spending-limit-form.component.html',
  styleUrls: ['./spending-limit-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SpendingLimitFormComponent implements OnInit {
  limitForm!: FormGroup;
  categories: any[] = [];
  userInfo: any;
  createdLimit: SpendingLimitResponse | null = null;

  constructor(
    private fb: FormBuilder,
    private spendingLimitService: SpendingLimitService,
    private categoryService: CategoryService,
    private snackbarService: SnackbarService,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      console.error('No se encontró el usuario en localStorage');
      return;
    }

    const user = JSON.parse(userStr);

    if (!user.token) {
      console.error('No se encontró el token en el objeto user');
      return;
    }

    const decoded = this.decodeToken(user.token);
    const email = decoded?.sub;

    if (!email) {
      console.error('No se pudo extraer el email del token');
      return;
    }


    this.authService.getUserByEmail(email).subscribe({
      next: (userData) => {
        this.userInfo = userData;

        this.limitForm = this.fb.group({
          categoryId: ['', Validators.required],
          monthlyLimit: [null, [Validators.required, Validators.min(1)]],
        });

        this.loadCategories();
      },
      error: () => {
        console.error('Error al obtener el usuario por email');
      }
    });
  }
  decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (e) {
      console.error('Error al decodificar el token:', e);
      return null;
    }
  }

  initForm(): void {
    this.limitForm = this.fb.group({
      categoryId: ['', Validators.required],
      monthlyLimit: [null, [Validators.required, Validators.min(1)]],
    });

    this.loadCategories();
  }

  /*waitForUserId(): void {
    const interval = setInterval(() => {
      const userStr = localStorage.getItem('user');
      if (!userStr) return;

      const userParsed = JSON.parse(userStr);
      if (userParsed.id) {
        clearInterval(interval);
        this.userInfo = userParsed;
        console.log('User con ID recuperado:', this.userInfo);

        this.limitForm = this.fb.group({
          categoryId: ['', Validators.required],
          monthlyLimit: [null, [Validators.required, Validators.min(1)]],
        });

        this.loadCategories();
      } else {
        console.log('Esperando que user.id aparezca...');
      }
    }, 300);
  }*/

  finishInit(): void {
    this.limitForm = this.fb.group({
      categoryId: ['', Validators.required],
      monthlyLimit: [null, [Validators.required, Validators.min(1)]],
    });

    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories(this.userInfo.id).subscribe({
      next: (res) => {
        console.log('Categorías recibidas:', res);
        this.categories = res;
      },
      error: (err) => console.error('Error cargando categorías', err),
    });
  }

  onSubmit(): void {
    if (!this.userInfo?.id) {
      this.snackbarService.showSnackbar(
        'Authentication Error',
        'User ID not found. Please log in again.'
      );
      return;
    }

    if (this.limitForm.valid) {

      const raw = this.limitForm.value;

      const data = {
        userId: this.userInfo.id,
        categoryId: Number(raw.categoryId),
        monthlyLimit: Number(raw.monthlyLimit)
      }as SpendingLimitRequest;

      console.log('Enviando datos al backend con userId:', this.userInfo.id);
      console.log('Payload enviado:', data);

      this.spendingLimitService
        .createSpendingLimit(this.userInfo.id, data)
        .subscribe({
          next: (res) => {
            this.createdLimit = res;
            this.limitForm.reset();
            this.loadCategories();
            this.snackbarService.showSnackbar(
              'Successful Limit',
              'The limit was created correctly'
            );
          },
          error: (err) => {
            console.error('Error completo recibido:', err);
            const backendMessage = err.error?.message || '';

            if (backendMessage.includes('Ya existe')) {
              this.snackbarService.showSnackbar(
                'Duplicated Limit',
                'The limit was already created'
              );
            } else if (
              backendMessage.includes('monto') ||
              backendMessage.includes('mayor a 0')
            ) {
              this.snackbarService.showSnackbar(
                'Amount value incorrect',
                'Zero-value are not allowed'
              );
            } else {
              this.snackbarService.showSnackbar(
                'Error',
                backendMessage || 'Limit was not created'
              );
            }
          }
        });
    }
  }


  onCancel(): void {
    this.limitForm.reset();
    this.createdLimit = null;
  }
}
