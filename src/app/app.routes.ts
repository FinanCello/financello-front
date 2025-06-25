import { Routes } from '@angular/router';
import { SavingGoalListComponent } from './features/savinggoals/pages/savinggoal-list/savinggoal-list.component';
import { SavingGoalFormComponent } from './features/savinggoals/pages/savinggoal-form/savinggoal-form.component';
import { authGuard } from './core/auth.guard';
import { HomeComponent } from './pages/home.component';
import { ProfileComponent } from './features/profile/profile.component';
import { SettingsComponent } from './features/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent),
        data: { animation: 'LoginPage' }
      },
      {
        path: 'register',
        loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent),
        data: { animation: 'RegisterPage' }
      }
    ]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'savinggoals', component: SavingGoalListComponent, children: [
        { path: '', component: SavingGoalListComponent },
        { path: 'new', component: SavingGoalFormComponent },
        { path: 'edit/:id', component: SavingGoalFormComponent }
      ] },
      {
        path: 'categories',
        loadChildren: () => import('./features/categories/categories-routes').then(m => m.CATEGORIES_ROUTES)
      },
      {
        path: 'spending-limit',
        loadComponent: () => import('./features/spendingLimit/pages/setLimit/spending-limit-form.component').then(m => m.SpendingLimitFormComponent)
      }
      // Puedes agregar más rutas hijas aquí
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
