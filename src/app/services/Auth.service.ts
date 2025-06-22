import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './Api.service';
import {
  RegisterRequest,
  LoginRequest,
  AuthResponse,
  UserProfileResponse,
  UpdateProfileRequest,
  UserWithRoleResponse,
} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly PREFIX = '/auth';

  constructor(private apiService: ApiService) {}

  register(request: RegisterRequest): Observable<void> {
    return this.apiService.post<void>(
      `${this.PREFIX}/register`,
      request
    );
  }

  login(request: LoginRequest): Observable<AuthResponse> {
    return this.apiService.post<AuthResponse>(
      `${this.PREFIX}/login`,
      request
    );
  }

  getUserProfile(userId: number): Observable<UserProfileResponse> {
    // si tu controlador mapea GET /auth/profile/{userId}
    return this.apiService.get<UserProfileResponse>(
      `${this.PREFIX}/profile/${userId}`
    );
  }

  updateUserProfile(
    userId: number,
    request: UpdateProfileRequest
  ): Observable<UserProfileResponse> {
    // si tu controlador mapea PUT /auth/profile/{userId}
    return this.apiService.put<UserProfileResponse>(
      `${this.PREFIX}/profile/${userId}`,
      request
    );
  }

  getAllUsers(): Observable<UserWithRoleResponse[]> {
    // si tu controlador tiene GET /users
    return this.apiService.get<UserWithRoleResponse[]>(`/users`);
  }
}