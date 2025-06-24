import { Component, OnInit } from '@angular/core';
import { SpendingLimitService } from '../../../../services/SpendingLimit.service';
import { SpendingLimitAlertResponse } from '../../../../models/SpendingLimit';

@Component({
  selector: 'app-spending-limit-alert',
  templateUrl: './spending-limit-alert.component.html',
  styleUrls: ['./spending-limit-alert.component.css']
})
export class SpendingLimitAlertComponent implements OnInit {
  alerts: SpendingLimitAlertResponse[] = [];
  selectedAlert!: SpendingLimitAlertResponse;
  barWidth = '0%';
  exceededAmount = 0;

  constructor(private spendingLimitService: SpendingLimitService) {}
/*
  ngOnInit(): void {
    const userId = 1;

    this.spendingLimitService.getSpendingLimitAlerts(userId).subscribe(response => {
      this.alerts = response;

      if (this.alerts.length > 0) {
        this.selectedAlert = this.alerts[0];

        const percent = Math.min(
            (this.selectedAlert.totalSpent / this.selectedAlert.monthlyLimit) * 100,
            150
        );
        this.barWidth = `${percent}%`;

        const exceeded = this.selectedAlert.totalSpent - this.selectedAlert.monthlyLimit;
        this.exceededAmount = exceeded > 0 ? exceeded : 0;
      }
    });
  }*/

  ngOnInit(): void {
    this.selectedAlert = {
      categoryName: 'Comidas',
      monthlyLimit: 100,
      totalSpent: 150,
      overLimit: true,
      alertMessage: '¡Has excedido tu límite en la categoría Comidas!'
    };

    const percent = Math.min((this.selectedAlert.totalSpent / this.selectedAlert.monthlyLimit) * 100, 150);
    this.barWidth = `${percent}%`;
    this.exceededAmount = this.selectedAlert.totalSpent - this.selectedAlert.monthlyLimit;
  }

  goBack(): void {
    window.history.back();
  }
}

