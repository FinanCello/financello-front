import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/layout/header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `
    <div class="min-h-screen bg-gray-100">
      <app-header></app-header>
      
      <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div class="text-center">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Bienvenido a Financello</h2>
              <p class="text-gray-600">Tu panel de control financiero</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: []
})
export class DashboardComponent {
  constructor() {}
} 