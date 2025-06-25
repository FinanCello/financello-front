import { Routes } from '@angular/router';
import { SavingGoalListComponent } from './features/savinggoals/pages/savinggoal-list/savinggoal-list.component';
import { SavingGoalFormComponent } from './features/savinggoals/pages/savinggoal-form/savinggoal-form.component';
import { authGuard } from './core/auth.guard';
import { HomeComponent } from './pages/home.component';
import { ProfileComponent } from './features/profile/profile.component';
import { SettingsComponent } from './features/settings/settings.component';
import { EditProfileComponent } from './features/profile/edit/editprofile.component';
import { TransactionHistoryComponent } from './features/transactionshistory/transaction.history.component';

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
      { path: 'profile', component: ProfileComponent, children:[
        { path: 'edit', component: EditProfileComponent }
      ] },
      { path: 'settings', component: SettingsComponent },
      { path: 'savinggoals', component: SavingGoalListComponent, children: [
        { path: '', component: SavingGoalListComponent },
        { path: 'new', component: SavingGoalFormComponent },
        { path: 'edit/:id', component: SavingGoalFormComponent }
      ] },
      { path: 'transactions', component: TransactionHistoryComponent },
      {
        path: 'spending-limit',
        loadComponent: () => import('./features/spendingLimit/pages/setLimit/spending-limit-form.component').then(m => m.SpendingLimitFormComponent)
      },
      {
        path: 'alerts',
        loadComponent: () => import('./features/spendingLimit/pages/spendingLimitAlert/spending-limit-alert.component').then(m => m.SpendingLimitAlertComponent)
      },
      { path: 'filter-movements', loadComponent: () => import('./features/movements/pages/filterMovement/filter-movement.component').then(m => m.FilterFinancialMovementComponent) }
      // Puedes agregar más rutas hijas aquí
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
