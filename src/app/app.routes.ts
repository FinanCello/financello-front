import { Routes } from '@angular/router';
import { SavingGoalListComponent } from './features/savinggoals/pages/savinggoal-list/savinggoal-list.component';
import { SavingGoalFormComponent } from './features/savinggoals/pages/savinggoal-form/savinggoal-form.component';
import { authGuard } from './core/auth.guard';
import { HomeComponent } from './pages/home.component';
import { ProfileComponent } from './features/profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'savinggoals', pathMatch: 'full' },            // Redirección a la lista por defecto
  { path: 'savinggoals', component: SavingGoalListComponent },               // Lista de metas
  { path: 'savinggoals/new', component: SavingGoalFormComponent },           // Formulario para crear meta
  { path: 'savinggoals/edit/:id', component: SavingGoalFormComponent },      // Formulario para editar meta
  { path: '**', redirectTo: 'savinggoals' }                                  // Redirección por defecto para rutas no válidas

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
      { path: 'profile', component: ProfileComponent }
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
