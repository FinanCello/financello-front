import { Routes } from '@angular/router';
import { SavingGoalListComponent } from './pages/savinggoal-list/savinggoal-list.component';
import { SavinggoalFormComponent } from './pages/savinggoal-form/savinggoal-form.component';

export const savingGoalsRoutes: Routes = [
  { path: '', component: SavingGoalListComponent },
  { path: 'new', component: SavinggoalFormComponent },
  { path: 'edit/:id', component: SavinggoalFormComponent },
];