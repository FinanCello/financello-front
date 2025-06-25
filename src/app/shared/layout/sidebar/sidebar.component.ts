import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  userInfo: any;
  activeSection = 'home';
  constructor(private router: Router) {}

  sectionRoutes: { [key: string]: string } = {
    home: '/home',
    loadfiles: '/dashboard/load-files',
    myfinances: '/dashboard/finances',
    savinggoals: '/dashboard/savinggoals',
    //analytics: '/analytics',
    profile: '/dashboard/profile',
    settings: '/dashboard/settings'
  };
  

  
  setActive(section: string): void {
    this.activeSection = section;
    const route = this.sectionRoutes[section];
    if (route) {
        this.router.navigate([route]);
    } else {
        this.router.navigate(['/auth/login']);
    }
  }

  ngAfterViewInit(): void {
    const buttons = document.querySelectorAll('.sidebar-button');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => {
          // Si no es el botón HOME, quítale la clase active
          if (!btn.classList.contains('home-button')) {
            btn.classList.remove('active');
          }
        });
  
        // Agrega la clase active al botón clickeado
        button.classList.add('active');
      });
    });
  }  
} 