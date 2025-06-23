import { Routes } from '@angular/router';
import { savingGoalsRoutes } from './features/savinggoals/savinggoals-routes';

export const routes: Routes = [
  { path: 'savinggoals', children: savingGoalsRoutes },
];
