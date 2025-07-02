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
  
  
  
  

}
