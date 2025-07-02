import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/Category.service';
import { FinancialMovementService } from '../../services/FinancialMovement.service';
import { AuthResponse } from '../../models/User';
import { TransactionResponse } from '../../models/FinancialMovement';
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
  recentMovements: TransactionResponse[] = [];

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
      this.loadRecentMovements();
    } else {
      console.error('No user found in localStorage');
    }
  }

  loadCategories(): void {
    this.categoryService.getCategories(this.user.id).subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Error loading categories', err);
      }
    });
  }

  loadTransactions(): void {
    console.log('Calling backend for transactions...');
    this.financialMovementService.getMovements(this.user.id).subscribe({
      next: (data) => {
        console.log('Movements loaded:', data);
        this.transactions = data;
      },
      error: (err) => {
        console.error('Error loading transactions', err);
      }
    });
  }

  loadRecentMovements(): void {
    this.financialMovementService.getMovements(this.user.id).subscribe({
      next: (data) => {
        // Ordenar por fecha (más reciente primero) y tomar solo los primeros 5
        this.recentMovements = data
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 5);
        console.log('Recent movements loaded:', this.recentMovements);
      },
      error: (err) => {
        console.error('Error loading recent movements', err);
      }
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear().toString().slice(-2)}`;
  }

  getMovementIcon(movementType: string): string {
    return movementType === 'INCOME' ? 'assets/icons/plus.svg' : 'assets/icons/minus.svg';
  }
}
