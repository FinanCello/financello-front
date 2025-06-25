import { Routes } from '@angular/router';
import { HistorialContributionFormComponent } from './features/historialcontribution.form/historialcontribution.form.component';
import { HistorialContributionListComponent } from './features/historialcontribution.list/historialcontribution.list.component';
import { NewcategoryFormComponent } from './features/newcategory.form/newcategory.form.component';


export const routes: Routes = [
    { path: '', redirectTo: 'historial-form', pathMatch: 'full' },
    { path: 'historial-form', component: HistorialContributionFormComponent },
    { path: 'historial-list', component: HistorialContributionListComponent },

  ];
  