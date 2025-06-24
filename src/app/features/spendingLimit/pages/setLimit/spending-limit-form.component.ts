import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { SpendingLimitService } from  '../../../../services/SpendingLimit.service';
import { CategoryService } from '../../../../services/Category.service';
import {SpendingLimitResponse} from '../../../../models/SpendingLimit';
import { SnackbarService } from '../../../../shared/snackbar/snackbar.service';

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

  createdLimit: SpendingLimitResponse | null = null;

  constructor(
    private fb: FormBuilder,
    private spendingLimitService: SpendingLimitService,
    private categoryService: CategoryService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.limitForm = this.fb.group({
      categoryId: ['', Validators.required],
      monthlyLimit: [null, [Validators.required, Validators.min(1)]],
    });

    const userId = 1;
    this.categoryService.getCategories(userId).subscribe({
      next: (res) => (this.categories = res),
      error: (err) => console.error('Error cargando categorías', err),
    });
  }

  onSubmit(): void {
    if (this.limitForm.valid) {
      const userId = 1;
      this.spendingLimitService
        .createSpendingLimit(userId, this.limitForm.value)
        .subscribe({
          next: (res) => {
            this.createdLimit = res;
            this.limitForm.reset();
            this.snackbarService.showSnackbar(
                'Successsful Limit',
                'The limit was created correctrly'
            );
          },
          error: (err) => {
            const backendMessage = err.error?.message || '';
            if (backendMessage.includes('Ya existe')) {
              this.snackbarService.showSnackbar(
                  'Duplicated Limit',
                  'The limit was already created '
              );
            } else if (backendMessage.includes('monto') || backendMessage.includes('mayor a 0')) {
              this.snackbarService.showSnackbar(
                  'Amount value incorrect',
                  'Zero-value are not allowed',
              );
            } else {
              this.snackbarService.showSnackbar(
                  'Error',
                  'Limit was not created',
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
