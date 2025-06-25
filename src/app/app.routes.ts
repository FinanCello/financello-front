import { Routes } from '@angular/router';
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
        data: {animation: 'LoginPage'}
      },
      {
        path: 'register',
        loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent),
        data: {animation: 'RegisterPage'}
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
      { path: 'categories', loadComponent: () => import('./features/categories/pages/category-form/category-form.component').then(m => m.CategoryFormComponent) }
     // { path: 'load-files', component: LoadFilesComponent },
      //{ path: 'my-finances', component: MyFinancesComponent },
      //{ path: 'saving-goals', component: SavingGoalsComponent }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
