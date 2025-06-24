import { Routes } from '@angular/router';
import { SavingGoalListComponent } from './features/savinggoals/pages/savinggoal-list/savinggoal-list.component';
import { SavingGoalFormComponent } from './features/savinggoals/pages/savinggoal-form/savinggoal-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'savinggoals', pathMatch: 'full' },            // Redirección a la lista por defecto
  { path: 'savinggoals', component: SavingGoalListComponent },               // Lista de metas
  { path: 'savinggoals/new', component: SavingGoalFormComponent },           // Formulario para crear meta
  { path: 'savinggoals/edit/:id', component: SavingGoalFormComponent },      // Formulario para editar meta
  { path: '**', redirectTo: 'savinggoals' }                                  // Redirección por defecto para rutas no válidas
];
