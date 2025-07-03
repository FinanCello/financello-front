import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SavingGoalService } from '../../../../services/SavingGoal.service';
import { AddSavingGoalResponse } from '../../../../models/SavingGoal';
import { SnackbarService } from '../../../../shared/layout/snackbar/snackbar.service';
import { EditGoalFormComponent } from '../savinggoal-form/edit/editgoal-form.component';
import { ContributionsModalComponent } from './contributions-modal.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-savinggoal-list',
  standalone: true,
  imports: [CommonModule, RouterModule, EditGoalFormComponent, ContributionsModalComponent],
  templateUrl: './savinggoal-list.component.html',
  styleUrls: ['./savinggoal-list.component.css'],
  animations: [trigger('routeAnimations', [
    transition('* => new', [
      style({ opacity: 0, transform: 'translateY(10%)' }),
      animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ])]
})
export class SavingGoalListComponent implements OnInit {
  savingGoals: AddSavingGoalResponse[] = [];
  selectedGoal: AddSavingGoalResponse | null = null;
  selectedGoalForContributions: AddSavingGoalResponse | null = null;
  showContributionsModal = false;
  loading = false;
  error: string | null = null;

  constructor(
    private savingGoalService: SavingGoalService,
    private router: Router,
    private snackbarService: SnackbarService
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
        this.snackbarService.showSnackbar(
          'Error',
          'No se pudieron cargar las metas de ahorro',
          'assets/icons/error.png'
        );
      }
    });
  }

  onEdit(goal: AddSavingGoalResponse) {
    this.selectedGoal = goal;
  }

  onDelete(goal: AddSavingGoalResponse) {
    // Verificar si la meta tiene contribuciones
    const hasContributions = goal.currentAmount > 0;
    
    let message = `¿Seguro que deseas eliminar la meta "${goal.name}"?`;
    
    if (hasContributions) {
      const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(goal.currentAmount);
      
      message = `⚠️ ADVERTENCIA: Esta meta tiene contribuciones de ${formattedAmount}.\n\n¿Estás seguro de que deseas eliminar la meta "${goal.name}"?\n\nEsta acción eliminará también todas las contribuciones asociadas y no se puede deshacer.`;
    }
    
    if (confirm(message)) {
      this.loading = true;
      
      this.savingGoalService.deleteSavingGoal(goal.id).subscribe({
        next: (response) => {
          const successMessage = hasContributions 
            ? 'Meta eliminada junto con todas sus contribuciones'
            : 'La meta de ahorro se ha eliminado exitosamente';
            
          this.snackbarService.showSnackbar(
            'Meta eliminada',
            successMessage,
            'assets/icons/success.png'
          );
          this.fetchSavingGoals();
        },
        error: (err) => {
          console.error('Error completo:', err);
          console.error('Error deleting saving goal:', err);
          console.error('Status:', err.status);
          console.error('Message:', err.message);
          console.error('Error body:', err.error);
          
          this.loading = false;
          
          // Manejar el error específico del backend
          if (err.status === 500 && err.error?.detail) {
            const errorMessage = err.error.detail;
            if (errorMessage.includes('tiene aportes registrados')) {
              this.snackbarService.showSnackbar(
                'No se puede eliminar',
                'Esta meta tiene contribuciones registradas. Primero debes eliminar las contribuciones.',
                'assets/icons/warning.png'
              );
            } else {
              this.snackbarService.showSnackbar(
                'Error del servidor',
                errorMessage,
                'assets/icons/error.png'
              );
            }
          } else {
            this.error = 'No se pudo eliminar la meta. Por favor, intenta nuevamente.';
            this.snackbarService.showSnackbar(
              'Error',
              'No se pudo eliminar la meta de ahorro',
              'assets/icons/error.png'
            );
          }
        }
      });
    } else {
      console.log('Usuario canceló la eliminación');
    }
  }

  onNewGoal() {
    this.router.navigate(['/dashboard/savinggoals/new']);
  }

  onCloseEditForm() {
    this.selectedGoal = null;
    // Recargar las metas para mostrar los cambios
    this.fetchSavingGoals();
  }

  onViewContributions(goal: AddSavingGoalResponse) {
    this.selectedGoalForContributions = goal;
    this.showContributionsModal = true;
  }

  onCloseContributionsModal() {
    this.showContributionsModal = false;
    this.selectedGoalForContributions = null;
  }

  onContributionsDeleted() {
    // Recargar las metas para actualizar los montos
    this.fetchSavingGoals();
  }
}
