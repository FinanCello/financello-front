import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { SpendingLimitService } from  '../../../../services/SpendingLimit.service';
import { CategoryService } from '../../../../services/Category.service';
import {SpendingLimitResponse} from '../../../../models/SpendingLimit';

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
    private categoryService: CategoryService
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
          },
          error: (err) => alert('Error al guardar límite'),
        });
    }
  }

  onCancel(): void {
    this.limitForm.reset();
  }


}
