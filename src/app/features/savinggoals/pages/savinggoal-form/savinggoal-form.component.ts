import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-savinggoal-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './savinggoal-form.component.html',
  styleUrls: ['./savinggoal-form.component.css']
})
export class SavingGoalFormComponent {
  showModal = false;
  
  goal = {
    name: '',
    targetAmount: 0,
    currentAmount: 0,
    dueDate: ''
  };

  constructor(private router: Router) {}

  submitForm() {
    const today = new Date();
    const dueDate = new Date(this.goal.dueDate);

    if (this.goal.targetAmount <= 0 || this.goal.currentAmount < 0) {
      alert('❌ Amount value incorrect. Zero-value are not allowed.');
      return;
    }

    if (dueDate <= today) {
      alert('❌ Due Date Incorrect. Due date must be future.');
      return;
    }

    // Aquí puedes pasar la meta a un servicio para luego guardarla
    alert('✅ Saving Goal Submitted Successfully!');
    this.showModal = false;
    this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
