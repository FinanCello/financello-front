import { Routes } from '@angular/router';
import { spendingLimitRoutes } from './features/spendingLimit/spendingLimit-routes';

export const routes: Routes = [
  {
    path: 'spending-limit',
    children: spendingLimitRoutes
  }
];

