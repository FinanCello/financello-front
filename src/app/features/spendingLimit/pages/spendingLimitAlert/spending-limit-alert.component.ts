import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-alarm',
  standalone: true,
  templateUrl: './spending-limit-alert.component.html',
  styleUrls: ['./spending-limit-alert.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class SpendingLimitAlertComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }
}
