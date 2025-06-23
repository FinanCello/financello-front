import { FilterFinancialMovementComponent } from './pages/FilterFinancialMovement/filter-financial-movement.component';
import {Routes} from '@angular/router';

export const financialMovementRoutes: Routes = [
  {
    path: 'filter',
    component: FilterFinancialMovementComponent
  }
];
