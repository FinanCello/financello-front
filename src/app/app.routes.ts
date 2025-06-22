import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'movements',
    loadChildren: () =>
      import('./features/financialMovement/financialMovement-routes')
        .then(m => m.financialMovementRoutes)
  }

];
