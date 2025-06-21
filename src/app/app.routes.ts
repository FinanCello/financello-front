import { Routes } from '@angular/router';
import { CategoryFormComponent } from './features/categories/pages/category-form/category-form.component';

export const routes: Routes = [
    {
        path: '',
        component: CategoryFormComponent,
        pathMatch: 'full'
    }
];
