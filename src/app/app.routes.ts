import { Routes } from '@angular/router';
import { SavinggoalFormComponent } from './features/savinggoals/pages/savinggoal-form/savinggoal-form.component';

export const routes: Routes = [
  { path: 'savinggoals/new', component: SavinggoalFormComponent },
  // Puedes agregar aquí la ruta para editar, por ejemplo:
  // { path: 'savinggoals/edit/:id', component: SavinggoalFormComponent },
];
