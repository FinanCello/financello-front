import { Routes } from '@angular/router';
import { SavingGoalListComponent } from './pages/savinggoal-list/savinggoal-list.component';
import { SavingGoalFormComponent } from './pages/savinggoal-form/savinggoal-form.component';

export const savingGoalsRoutes: Routes = [
  { path: '', component: SavingGoalListComponent },
  { path: 'new', component: SavingGoalFormComponent },
  { path: 'edit/:id', component: SavingGoalFormComponent },
];