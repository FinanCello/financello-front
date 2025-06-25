import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SavingGoalService } from '../../../../services/SavingGoal.service';
import { AddSavingGoalResponse } from '../../../../models/SavingGoal';

@Component({
  selector: 'app-savinggoal-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './savinggoal-list.component.html',
  styleUrls: ['./savinggoal-list.component.css']
})
export class SavingGoalListComponent implements OnInit {
  savingGoals: AddSavingGoalResponse[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private savingGoalService: SavingGoalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchSavingGoals();
  }

  fetchSavingGoals() {
    this.loading = true;
    this.error = null;
    
    this.savingGoalService.listSavingGoals().subscribe({
      next: (goals) => {
        this.savingGoals = goals;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching saving goals:', err);
        this.error = 'Error al cargar las metas de ahorro. Por favor, intenta nuevamente.';
        this.loading = false;
      }
    });
  }

  onEdit(goal: AddSavingGoalResponse) {
    this.router.navigate(['/dashboard/savinggoals/edit', goal.id]);
  }

  onDelete(goal: AddSavingGoalResponse) {
    if (confirm(`¿Seguro que deseas eliminar la meta "${goal.name}"?`)) {
      this.loading = true;
      
      this.savingGoalService.deleteSavingGoal(goal.id).subscribe({
        next: () => {
          this.fetchSavingGoals();
        },
        error: (err) => {
          console.error('Error deleting saving goal:', err);
          this.error = 'No se pudo eliminar la meta. Por favor, intenta nuevamente.';
          this.loading = false;
        }
      });
    }
  }
}
