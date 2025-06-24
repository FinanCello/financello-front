import { Routes } from '@angular/router';
import { MovementUploadComponent } from './features/movements/pages/movement-upload/movement-upload.component';

export const routes: Routes = [

    {
        path: '',
        component: MovementUploadComponent,
        pathMatch: 'full'
    }
];
