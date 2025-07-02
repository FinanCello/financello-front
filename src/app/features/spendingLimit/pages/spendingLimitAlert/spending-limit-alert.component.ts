import { Component, OnInit } from '@angular/core';
import { SpendingLimitService } from '../../../../services/SpendingLimit.service';
import { SpendingLimitAlertResponse } from '../../../../models/SpendingLimit';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spending-limit-alert',
  templateUrl: './spending-limit-alert.component.html',
  styleUrls: ['./spending-limit-alert.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SpendingLimitAlertComponent implements OnInit {
  alerts: SpendingLimitAlertResponse[] = [];
  selectedAlert: SpendingLimitAlertResponse | null = null;
  barWidth = '0%';
  exceededAmount = 0;

  constructor(private spendingLimitService: SpendingLimitService) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user.id as number;

    this.spendingLimitService.getSpendingLimitAlerts(userId)
      .subscribe(alerts => {
        this.alerts = alerts.filter(a => a.overLimit);

        if (this.alerts.length) {
          this.selectAlert(this.alerts[0]);
        }
      });
  }

  selectAlert(alert: SpendingLimitAlertResponse) {
    this.selectedAlert = alert;
    const pct = Math.min((alert.totalSpent / alert.monthlyLimit) * 100, 150);
    this.barWidth = `${pct}%`;
    this.exceededAmount = Math.max(alert.totalSpent - alert.monthlyLimit, 0);
  }

  dismiss(alert: SpendingLimitAlertResponse) {
    this.alerts = this.alerts.filter(a => a !== alert);
    if (this.selectedAlert === alert) {
      this.selectedAlert = null;
    }
  }

  goBack(): void {
    window.history.back();
  }
}

