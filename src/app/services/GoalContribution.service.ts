import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import {
  RegisterGoalContributionRequest,
  RegisterGoalContributionResponse
} from '../models/GoalContribution';

@Injectable({
  providedIn: 'root'
})
export class GoalContributionService {
  private apiUrl = `${environment.apiUrl}/contribution`;

  constructor(private http: HttpClient) {}

  registerContribution(request: RegisterGoalContributionRequest): Observable<RegisterGoalContributionResponse> {
    return this.http.post<RegisterGoalContributionResponse>(
      `${this.apiUrl}/register`,
      request
    );
  }

  getHistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/history`);
  }

  getHistoryByDate(date: string): Observable<any[]> {
    const params = new HttpParams().set('date', date);
    return this.http.get<any[]>(`${this.apiUrl}/history/date`, { params });
  }
}
