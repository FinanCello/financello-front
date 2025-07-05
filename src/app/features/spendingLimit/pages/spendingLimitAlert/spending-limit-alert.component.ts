import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SpendingLimitService } from '../../../../services/SpendingLimit.service';
import { SpendingLimitAlertResponse } from '../../../../models/SpendingLimit';
import { AuthResponse } from '../../../../models/User';

@Component({
  selector: 'app-spending-limit-alert',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './spending-limit-alert.component.html',
  styleUrls: ['./spending-limit-alert.component.css'],
})
export class SpendingLimitAlertComponent implements OnInit {
  user!: AuthResponse;
  alerts: SpendingLimitAlertResponse[] = [];
  selectedAlert: SpendingLimitAlertResponse | null = null;
  barWidth = '0%';
  exceededAmount = 0;

  constructor(private spendingLimitService: SpendingLimitService) {}

  ngOnInit(): void {
    // 1) Leer user de localStorage
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      console.error('No user found in localStorage');
      return;
    }
    this.user = JSON.parse(storedUser);

    // 2) Cargar las alertas del backend
    this.loadAlerts();
  }

  private loadAlerts(): void {
    this.spendingLimitService
        .getSpendingLimitAlerts(this.user.id)
        .subscribe({
          next: (data) => {
            // 3) Filtrar sólo las que estén por encima del límite
            this.alerts = data.filter(a => a.overLimit);
            if (this.alerts.length) {
              this.selectAlert(this.alerts[0]);
            }
          },
          error: (err) => {
            console.error('Error loading alerts', err);
          }
        });
  }

  selectAlert(alert: SpendingLimitAlertResponse): void {
    this.selectedAlert = alert;
    const pct = Math.min((alert.totalSpent / alert.monthlyLimit) * 100, 150);
    this.barWidth = `${pct}%`;
    this.exceededAmount = Math.max(alert.totalSpent - alert.monthlyLimit, 0);
  }

  dismiss(alert: SpendingLimitAlertResponse): void {
    this.alerts = this.alerts.filter(a => a !== alert);
    if (this.selectedAlert === alert) {
      this.selectedAlert = null;
    }
  }

  goBack(): void {
    window.history.back();
  }
}

