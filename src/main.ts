import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { authInterceptor } from './app/interceptors/auth.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideAnimations(),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
});
