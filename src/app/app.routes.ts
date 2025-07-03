import { Routes } from '@angular/router';
import { SavingGoalListComponent } from './features/savinggoals/pages/savinggoal-list/savinggoal-list.component';
import { SavingGoalFormComponent } from './features/savinggoals/pages/savinggoal-form/savinggoal-form.component';
import { authGuard } from './core/auth.guard';
import { HomeComponent } from './pages/home.component';
import { ProfileComponent } from './features/profile/profile.component';
import { SettingsComponent } from './features/settings/settings.component';
import { EditProfileComponent } from './features/profile/edit/editprofile.component';
import { TransactionHistoryComponent } from './features/transactionshistory/transaction.history.component';
import { MovementUploadComponent } from './features/movements/pages/movement-upload/movement-upload.component';
import { FinancesComponent } from './features/finances/finances.component';
import { AddMovementComponent } from './features/finances/addMovement/addmovement.component';
import { AnalyticsComponent } from './features/analytics/analytics.component';
import { CategoryComponent } from './features/categories/pages/category.component';
import { CategoryFormComponent } from './features/categories/pages/category-form/category-form.component';


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
      { path: 'load-files', component: MovementUploadComponent },
      { path: 'savinggoals', component: SavingGoalListComponent, children: [
        { path: 'new', component: SavingGoalFormComponent },
        { path: 'edit/:id', component: SavingGoalFormComponent }
      ] },
      { path: 'transactions', component: TransactionHistoryComponent },
      { path: 'finances', component: FinancesComponent, children: [
        { path: 'addmovement', component: AddMovementComponent }
      ] },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'categories', component: CategoryComponent, children:[
        { path: 'new', component: CategoryFormComponent }
      ] },
      { path: 'logros', loadComponent: () => import('./features/achievements/achievements.component').then(m => m.AchievementsComponent) }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  },
  
      { path: 'logros', loadComponent: () => import('./features/achievements/achievements.component').then(m => m.AchievementsComponent) }
];
