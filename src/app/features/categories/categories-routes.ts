import { Routes } from '@angular/router';

export const CATEGORIES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/category-form/category-form.component').then(m => m.CategoryFormComponent)
  }
]; 