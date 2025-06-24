import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Aquí puedes definir lógicas de dashboard, como KPIs, tarjetas, gráficos, etc.

  userName = 'John Doe'; // ejemplo de uso simple
}