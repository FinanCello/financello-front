import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AchievementDTO } from '../models/AchievementDTO';
import { UserAchievementDTO } from '../models/UserAchievementDTO';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AchievementService {
    private baseUrl = 'http://localhost:8080/api/achievements'; // cambia esto si tu backend usa otra URL

  constructor(private http: HttpClient) {}

  getAllAchievements(): Observable<AchievementDTO[]> {
    return this.http.get<AchievementDTO[]>(`${this.baseUrl}`);
  }

  getUserAchievements(userId: number): Observable<UserAchievementDTO[]> {
    return this.http.get<UserAchievementDTO[]>(`${this.baseUrl}/user/${userId}`);
  }

  checkAchievements(userId: number): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/user/${userId}/check`, {});
  }
}
