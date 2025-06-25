import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../../services/Budget.service';
import { BudgetResponse } from '../../models/Budget';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './budget.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetComponent implements OnInit {
  budgetForm: FormGroup;
  budgetSummary: BudgetResponse | null = null;
  confirmationMessage: string | null = null;

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      period: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{4}$/)]],
      income: [0, [Validators.required, Validators.min(0)]],
      expenses: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.budgetService.currentBudget$.subscribe(b => this.budgetSummary = b);
  }

  get remaining(): number {
    const income = this.budgetForm.get('income')?.value || 0;
    const expenses = this.budgetForm.get('expenses')?.value || 0;
    return income - expenses;
  }

  onSubmit(): void {
    if (this.budgetForm.valid) {
      const { period, income, expenses } = this.budgetForm.value;
      this.budgetService.saveBudget({
        period,
        totalIncomePlanned: income,
        totalOutcomePlanned: expenses,
        userId: 1,
      });
      this.confirmationMessage = 'Presupuesto actualizado';
    } else {
      this.confirmationMessage = null;
      this.budgetForm.markAllAsTouched();
    }
  }
}
