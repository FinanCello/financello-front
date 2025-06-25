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
    private router: Router
  ) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      console.error('No user found');
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
        console.error('Error loading categories:', err);
      }
    });
  }

  submit(): void {
    if (this.movementForm.invalid) return;

    const movement: RegisterFinancialMovementRequest = {
      ...this.movementForm.value
    };

    this.movementService.register(this.user.id, movement).subscribe({
      next: () => {
        alert('Movimiento registrado correctamente');
        this.router.navigate(['/finances']);
      },
      error: (err) => {
        console.error('Error registering movement:', err);
        alert('Error al registrar el movimiento');
      }
    });
  }
}
