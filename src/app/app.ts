import { Component, effect, inject, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { slideInAnimation } from './route-animations';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { SnackbarService } from './shared/snackbar/snackbar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SnackbarComponent, NgIf],
  animations: [slideInAnimation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'financello-front';

  snackbarData = signal<{
    title: string;
    message: string;
    icon?: string;
    showUndo?: boolean;
  } | null>(null);

  private snackbarService = inject(SnackbarService);

  constructor() {
    effect(() => {
      this.snackbarService.snackbarState$.subscribe(data => {
        this.snackbarData.set(data);
        setTimeout(() => this.snackbarData.set(null), 3000);
      });
    });
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
