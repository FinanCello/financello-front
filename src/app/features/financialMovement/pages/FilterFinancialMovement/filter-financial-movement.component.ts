import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FinancialMovementService } from '../../../../services/FinancialMovement.service';
import { CategoryService } from '../../../../services/Category.service';
import { RegisterFinancialMovementResponse } from '../../../../models/FinancialMovement';
import {CategoryResponse, CategorySimpleResponse} from '../../../../models/Category';

@Component({
  selector: 'app-filter-movements',
  templateUrl: './filter-financial-Movement.component.html',
  styleUrls: ['./filter-financial-movement.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class FilterFinancialMovementComponent implements OnInit {

  filterForm: FormGroup;
  categories: CategorySimpleResponse[] = [];
  results: RegisterFinancialMovementResponse[] = [];
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private movementService: FinancialMovementService,
    private categoryService: CategoryService
  ) {
    this.filterForm = this.fb.group({
      categoryId: [''],
      movementType: ['']
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories(1).subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Error al cargar las categorías', err);
      }
    });
  }

  onSubmit(): void {
    const { categoryId, movementType } = this.filterForm.value;
    const userId = 1;

    this.movementService
      .filterMovements(userId, categoryId || null, movementType || null)
      .subscribe({
        next: (data) => {
          this.results = data;
          this.submitted = true;
        },
        error: (err) => {
          console.error('Error al filtrar movimientos', err);
        }
      });
  }

  onCancel(): void {
    this.filterForm.reset();
    this.results = [];
    this.submitted = false;
  }
}
