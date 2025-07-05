import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoalContributionService } from '../../../../services/GoalContribution.service';
import { AddSavingGoalResponse } from '../../../../models/SavingGoal';
import { SnackbarService } from '../../../../shared/layout/snackbar/snackbar.service';
import { AchievementEventsService } from '../../../../services/achievement-events.service';
import { RegisterGoalContributionRequest } from '../../../../models/GoalContribution';

@Component({
  selector: 'app-contributions-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contributions-modal.component.html',
  styleUrls: ['./contributions-modal.component.css']
})
export class ContributionsModalComponent implements OnInit {
  @Input() goal: AddSavingGoalResponse | null = null;
  @Input() isVisible: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() contributionsDeleted = new EventEmitter<void>();

  contributions: any[] = [];
  totalContributions: number = 0;
  loading: boolean = false;
  deletingContribution: number | null = null;
  deletingAll: boolean = false;

  // New contribution form
  showAddForm = false;
  newContribution = {
    amount: 0,
    date: new Date().toISOString().split('T')[0]
  };
  addingContribution = false;

  constructor(
    private goalContributionService: GoalContributionService,
    private snackbarService: SnackbarService,
    private achievementEventsService: AchievementEventsService
  ) {}

  ngOnInit() {
    if (this.isVisible && this.goal) {
      this.loadContributions();
    }
  }

  loadContributions() {
    if (!this.goal) return;
    
    console.log('Cargando contribuciones para meta:', this.goal);
    this.loading = true;
    
    // Primero intentar con el endpoint específico
    this.goalContributionService.getContributionsByGoalId(this.goal.id).subscribe({
      next: (contributions) => {
        console.log('Contribuciones recibidas del endpoint específico:', contributions);
        this.contributions = contributions;
        this.totalContributions = contributions.reduce((sum, c) => sum + c.amount, 0);
        console.log('Total calculado:', this.totalContributions);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error con endpoint específico:', err);
        
        // Si falla, intentar con getHistory y filtrar
        console.log('Intentando con getHistory...');
        this.goalContributionService.getHistory().subscribe({
          next: (allContributions) => {
            console.log('Todas las contribuciones:', allContributions);
            
            // Filtrar por goalId
            const filteredContributions = allContributions.filter(c => c.goalId === this.goal?.id);
            console.log('Contribuciones filtradas:', filteredContributions);
            
            this.contributions = filteredContributions;
            this.totalContributions = filteredContributions.reduce((sum, c) => sum + c.amount, 0);
            console.log('Total calculado:', this.totalContributions);
            this.loading = false;
          },
          error: (historyErr) => {
            console.error('Error con getHistory:', historyErr);
            this.snackbarService.showSnackbar(
              'Error',
              'No se pudieron cargar las contribuciones',
              'assets/icons/error.png'
            );
            this.loading = false;
          }
        });
      }
    });
  }

  addContribution() {
    if (!this.goal || this.newContribution.amount <= 0) {
      this.snackbarService.showSnackbar(
        'Error',
        'Por favor ingresa un monto válido',
        'assets/icons/error.png'
      );
      return;
    }

    this.addingContribution = true;
    const request: RegisterGoalContributionRequest = {
      goalId: this.goal.id,
      amount: this.newContribution.amount,
      date: this.newContribution.date
    };

    this.goalContributionService.registerContribution(request).subscribe({
      next: () => {
        this.snackbarService.showSnackbar(
          'Contribución agregada',
          'La contribución se ha agregado exitosamente',
          'assets/icons/success.png'
        );
        
        // Reset form
        this.newContribution = {
          amount: 0,
          date: new Date().toISOString().split('T')[0]
        };
        this.showAddForm = false;
        
        // Reload contributions
        this.loadContributions();
        
        // Trigger achievement refresh
        this.achievementEventsService.triggerContributionRefresh();
        
        this.addingContribution = false;
      },
      error: (err) => {
        console.error('Error adding contribution:', err);
        this.snackbarService.showSnackbar(
          'Error',
          'No se pudo agregar la contribución',
          'assets/icons/error.png'
        );
        this.addingContribution = false;
      }
    });
  }

  deleteContribution(contributionId: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta contribución?')) {
      this.deletingContribution = contributionId;
      
      this.goalContributionService.deleteContribution(contributionId).subscribe({
        next: () => {
          this.snackbarService.showSnackbar(
            'Contribución eliminada',
            'La contribución se ha eliminado exitosamente',
            'assets/icons/success.png'
          );
          this.loadContributions(); // Recargar la lista
          this.contributionsDeleted.emit();
          
          // Trigger achievement refresh
          this.achievementEventsService.triggerContributionRefresh();
        },
        error: (err) => {
          console.error('Error deleting contribution:', err);
          this.snackbarService.showSnackbar(
            'Error',
            'No se pudo eliminar la contribución',
            'assets/icons/error.png'
          );
          this.deletingContribution = null;
        }
      });
    }
  }

  deleteAllContributions() {
    if (!this.goal) return;
    
    const message = `¿Estás seguro de que deseas eliminar TODAS las contribuciones de "${this.goal.name}"?\n\nEsta acción no se puede deshacer.`;
    
    if (confirm(message)) {
      this.deletingAll = true;
      
      // Eliminar todas las contribuciones una por una
      const deletePromises = this.contributions.map(contribution => 
        this.goalContributionService.deleteContribution(contribution.id).toPromise()
      );
      
      Promise.all(deletePromises).then(() => {
        this.snackbarService.showSnackbar(
          'Contribuciones eliminadas',
          'Todas las contribuciones se han eliminado exitosamente',
          'assets/icons/success.png'
        );
        this.loadContributions(); // Recargar la lista
        this.contributionsDeleted.emit();
        
        // Trigger achievement refresh
        this.achievementEventsService.triggerContributionRefresh();
        
        this.deletingAll = false;
      }).catch(err => {
        console.error('Error deleting all contributions:', err);
        this.snackbarService.showSnackbar(
          'Error',
          'No se pudieron eliminar todas las contribuciones',
          'assets/icons/error.png'
        );
        this.deletingAll = false;
      });
    }
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  close() {
    this.closeModal.emit();
  }
} 