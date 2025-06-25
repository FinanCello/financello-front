import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/Auth.service';
import { UserProfileResponse } from '../models/User';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userInfo: any;

  constructor(private authService: AuthService) {
    
    const userStr = localStorage.getItem('user');
    if (userStr) {
      this.userInfo = JSON.parse(userStr);
      console.log(this.userInfo);
    }
  }
}