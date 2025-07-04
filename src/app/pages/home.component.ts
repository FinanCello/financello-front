import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/Auth.service';
import { UserProfileResponse } from '../models/User';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userInfo: any;
  currentDate = new Date();

  // Stats data
  totalIncome = 8500;
  totalExpenses = 3200;
  currentBalance = 5300;
  activeGoals = 3;
  completedGoals = 1;

  // Recent transactions
  recentTransactions = [
    {
      title: 'Salario',
      category: 'Ingresos',
      amount: 2500,
      type: 'income',
      date: new Date('2024-01-15')
    },
    {
      title: 'Supermercado',
      category: 'Alimentación',
      amount: 180,
      type: 'expense',
      date: new Date('2024-01-14')
    },
    {
      title: 'Gasolina',
      category: 'Transporte',
      amount: 45,
      type: 'expense',
      date: new Date('2024-01-13')
    },
    {
      title: 'Freelance',
      category: 'Ingresos',
      amount: 800,
      type: 'income',
      date: new Date('2024-01-12')
    }
  ];

  // Active goals
  activeGoalsList = [
    {
      title: 'Vacaciones en Europa',
      description: 'Ahorrar para viajar por Europa',
      currentAmount: 2500,
      targetAmount: 8000,
      progress: 31
    },
    {
      title: 'Fondo de Emergencia',
      description: 'Crear un fondo de emergencia de 6 meses',
      currentAmount: 12000,
      targetAmount: 18000,
      progress: 67
    },
    {
      title: 'Nuevo Laptop',
      description: 'Comprar un laptop para trabajo',
      currentAmount: 800,
      targetAmount: 2000,
      progress: 40
    }
  ];

  constructor(private authService: AuthService) {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      this.userInfo = JSON.parse(userStr);
      console.log(this.userInfo);
    }
  }
}