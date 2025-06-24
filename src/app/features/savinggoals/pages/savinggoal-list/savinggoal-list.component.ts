/*
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
    this.savingGoalService.listSavingGoals().subscribe({
      next: (goals) => {
        this.savingGoals = goals;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las metas de ahorro';
        this.loading = false;
      }
    });
  }

  onEdit(goal: AddSavingGoalResponse) {
    this.router.navigate(['/savinggoals/edit', goal.id]);
  }

  onDelete(goal: AddSavingGoalResponse) {
    if (confirm(`¿Seguro que deseas eliminar la meta "${goal.name}"?`)) {
      this.savingGoalService.deleteSavingGoal(Number(goal.id)).subscribe({
        next: () => this.fetchSavingGoals(),
        error: () => alert('No se pudo eliminar la meta.')
      });
    }
  }

  onCreate() {
    this.router.navigate(['/savinggoals/new']);
  }
}
*/

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-savinggoal-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './savinggoal-list.component.html',
  styleUrls: ['./savinggoal-list.component.css']
})
export class SavingGoalListComponent {

}
