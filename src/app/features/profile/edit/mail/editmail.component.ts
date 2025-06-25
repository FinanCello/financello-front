import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editmail',
  templateUrl: './editmail.component.html',
  styleUrls: ['./editmail.component.css']
})
export class EditMailComponent implements OnInit {
  userInfo: any;
  email: string = '';
  confirmEmail: string = '';

  constructor(private router: Router) {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      this.userInfo = JSON.parse(userStr);
      console.log(this.userInfo);
    }
  }

  ngOnInit(): void {
    // Simulamos traer el email actual (puedes usar un servicio real aquí)
    // this.email = this.authService.getCurrentUserEmail();
  }

  onSave(): void {
    if (this.email !== this.confirmEmail) {
      alert('Los correos no coinciden');
      return;
    }

    console.log('Email actualizado a:', this.email);
    this.router.navigate(['/profile']); // Redirige después del cambio
  }
}
