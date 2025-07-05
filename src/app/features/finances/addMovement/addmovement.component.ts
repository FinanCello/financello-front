import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinancialMovementService } from '../../../services/FinancialMovement.service';
import { CategoryService } from '../../../services/Category.service';
import { RegisterFinancialMovementRequest } from '../../../models/FinancialMovement';
import { AuthResponse } from '../../../models/User';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SnackbarService } from '../../../shared/layout/snackbar/snackbar.service';
import { SpendingLimitService } from '../../../services/SpendingLimit.service';

@Component({
  selector: 'app-addmovement',
  templateUrl: './addmovement.component.html',
  styleUrls: ['./addmovement.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class AddMovementComponent implements OnInit {

  movementForm!: FormGroup;
  user!: AuthResponse;
  categories: any[] = [];
  movementTypes: string[] = ['INCOME', 'OUTCOME'];
  currencyTypes: string[] = ['PEN', 'USD', 'EUR']; // Podés ajustar esto según tus enums

  constructor(
    private fb: FormBuilder,
    private movementService: FinancialMovementService,
    private categoryService: CategoryService,
    private router: Router,
    private snackbar: SnackbarService,
    private spendingLimitService: SpendingLimitService
  ) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      this.snackbar.showSnackbar('Error', 'No se encontró usuario autenticado', 'assets/icons/error.png', true);
      return;
    }

    this.user = JSON.parse(storedUser);

    this.initForm();
    this.loadCategories();
  }

  initForm(): void {
    this.movementForm = this.fb.group({
      amount: [null, [Validators.required, Validators.min(0.01)]],
      date: [null, Validators.required],
      movementType: ['INCOME', Validators.required],
      categoryId: [null, Validators.required],
      currencyType: ['PEN', Validators.required]
    });
  }

  loadCategories(): void {
    this.categoryService.getCategories(this.user.id).subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        this.snackbar.showSnackbar('Error', 'No se pudieron cargar las categorías', 'assets/icons/error.png', true);
      }
    });
  }

  submit(): void {
    if (this.movementForm.invalid) {
      this.snackbar.showSnackbar('Formulario inválido', 'Completa los datos faltantes', 'assets/icons/warning.png', true);
      this.movementForm.markAllAsTouched();
      return;
    }

    const movement: RegisterFinancialMovementRequest = {
      ...this.movementForm.value
    };

    // Validar límite solo para OUTCOME
    if (movement.movementType === 'OUTCOME') {
      this.spendingLimitService.getSpendingLimitAlerts(this.user.id).subscribe({
        next: (alerts) => {
          const selectedCategory = this.categories.find(c => c.id === movement.categoryId);
          const alert = alerts.find(a => a.categoryName === selectedCategory?.name);
          if (alert && alert.overLimit) {
            this.snackbar.showSnackbar('Límite excedido', 'No puedes registrar este gasto porque supera el límite de la categoría.', 'assets/icons/warning.png', true);
            return;
          }
          this.registerMovement(movement);
        },
        error: () => {
          this.snackbar.showSnackbar('Error', 'No se pudo validar el límite de gasto', 'assets/icons/error.png', true);
        }
      });
    } else {
      this.registerMovement(movement);
    }
  }

  private registerMovement(movement: RegisterFinancialMovementRequest) {
    this.movementService.register(this.user.id, movement).subscribe({
      next: () => {
        this.snackbar.showSnackbar('Éxito', 'Movimiento registrado correctamente', 'assets/icons/success.png', true);
        this.router.navigate(['/finances']);
      },
      error: (err) => {
        const msg = err?.error?.message || 'Error al registrar el movimiento';
        this.snackbar.showSnackbar('Error', msg, 'assets/icons/error.png', true);
      }
    });
  }
}
