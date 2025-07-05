import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialization code
  }

  navigateToTransactions(): void {
    this.router.navigate(['/dashboard/transactions']);
  }
}
