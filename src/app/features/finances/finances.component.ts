import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/Category.service';
import { FinancialMovementService } from '../../services/FinancialMovement.service';
import { AuthResponse } from '../../models/User';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.css'],
  imports: [CommonModule, RouterModule]
})
export class FinancesComponent implements OnInit {
  user!: AuthResponse;
  categories: any[] = [];
  transactions: any[] = [];

  constructor(
    private categoryService: CategoryService,
    private financialMovementService: FinancialMovementService
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
    this.categoryService.getCategories(this.user.id).subscribe({
      next: (data) => {
        this.categories = data;
  
        // Cargar montos por cada categoría
        this.categories.forEach((cat) => {
          this.categoryService
            .getTotalExpensesByCategory(this.user.id, cat.id)
            .subscribe({
              next: (totalResponse) => {
                cat.amount = totalResponse.totalAmount || 0; // ← agrega el monto a la categoría
              },
              error: (err) => {
                console.error(`Error loading total for category ${cat.name}`, err);
                cat.amount = 0;
              },
            });
        });
      },
      error: (err) => {
        console.error('Error loading categories', err);
      },
    });
  }
  

  loadTransactions(): void {
    console.log('Calling backend for transactions...');
    this.financialMovementService.getMovements(this.user.id).subscribe({
      next: (data) => {
        console.log('Movements loaded:', data);
        this.transactions = data
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 5);
      },
      error: (err) => {
        console.error('Error loading transactions', err);
      }
    });
  }
  
  toggleCheck(event: MouseEvent) {
    const checkbox = (event.currentTarget as HTMLElement);
    checkbox.classList.toggle('checked');
  }
}
