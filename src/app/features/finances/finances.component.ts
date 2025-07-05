import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/Category.service';
import { FinancialMovementService } from '../../services/FinancialMovement.service';
import { AuthResponse } from '../../models/User';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PdfService } from './Pdf.service';
import { CategorySimpleResponse } from '../../models/Category';
import { TransactionResponse } from '../../models/FinancialMovement';

// Extended interface to include amount property
interface CategoryWithAmount extends CategorySimpleResponse {
  amount?: number;
}

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.css'],
  imports: [CommonModule, RouterModule]
})
export class FinancesComponent implements OnInit {
  user!: AuthResponse;
  categories: CategoryWithAmount[] = [];
  transactions: TransactionResponse[] = [];

  constructor(
    private categoryService: CategoryService,
    private financialMovementService: FinancialMovementService,
    private pdfService: PdfService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.loadCategories();
      this.loadTransactions();
    } else {
      console.error('No user found in localStorage');
    }
  }

  loadCategories(): void {
    console.log('Loading categories for user ID:', this.user.id);
    this.categoryService.getCategories(this.user.id).subscribe({
      next: (data) => {
        console.log('Categories loaded from backend:', data);

        // Make a copy of the data and initialize amounts to 0
        this.categories = data.map(cat => ({
          ...cat,
          amount: 0
        }));

        console.log('Initialized categories with zero amounts:', this.categories);

        // Cargar montos por cada categoría
        this.categories.forEach((cat) => {
          console.log('Loading total expenses and incomes for category:', cat.name, 'with ID:', cat.id);

          // Load expenses
          this.categoryService
            .getTotalExpensesByCategory(this.user.id, cat.id)
            .subscribe({
              next: (expenseResponse) => {
                console.log('Total expenses for category', cat.name, ':', expenseResponse);
                // Find the category in the array and update its amount
                const categoryIndex = this.categories.findIndex(c => c.id === cat.id);
                if (categoryIndex !== -1) {
                  this.categories[categoryIndex].amount =
                    (this.categories[categoryIndex].amount || 0) +
                    (expenseResponse.totalAmount || 0);
                  console.log('Updated category with expense amount:', this.categories[categoryIndex]);
                }
              },
              error: (err) => {
                console.error(`Error loading expenses for category ${cat.name}`, err);
              },
            });

          // Load incomes
          this.categoryService
            .getTotalIncomesByCategory(this.user.id, cat.id)
            .subscribe({
              next: (incomeResponse) => {
                console.log('Total incomes for category', cat.name, ':', incomeResponse);
                // Find the category in the array and update its amount
                const categoryIndex = this.categories.findIndex(c => c.id === cat.id);
                if (categoryIndex !== -1) {
                  this.categories[categoryIndex].amount =
                    (this.categories[categoryIndex].amount || 0) +
                    (incomeResponse.totalAmount || 0);
                  console.log('Updated category with income amount:', this.categories[categoryIndex]);
                }
              },
              error: (err) => {
                console.error(`Error loading incomes for category ${cat.name}`, err);
              },
            });
        });
      },
      error: (err) => {
        console.error('Error loading categories', err);
      },
    });
  }


// In finances.component.ts
  loadTransactions(): void {
    console.log('Loading transactions from shared state...');

    // First, subscribe to the shared state
    this.financialMovementService.getTransactions().subscribe({
      next: (data) => {
        console.log('Transactions received from shared state:', data);
        this.transactions = data
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 5);
      }
    });

    // Then, refresh the data from the API
    this.financialMovementService.refreshTransactions(this.user.id).subscribe({
      error: (err) => {
        console.error('Error refreshing transactions', err);
      }
    });
  }

  downloadTransactionsPdf(): void {
    this.pdfService.generateTransactionsPdf(this.transactions);
  }

  toggleCheck(event: MouseEvent) {
    const checkbox = (event.currentTarget as HTMLElement);
    checkbox.classList.toggle('checked');
  }

  navigateToTransactions(): void {
    this.router.navigate(['/dashboard/transactions']);
  }
}
