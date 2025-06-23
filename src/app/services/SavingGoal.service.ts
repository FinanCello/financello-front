import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AddSavingGoalRequest,
  UpdateSavingGoalRequest,
  AddSavingGoalResponse,
} from '../models/SavingGoal';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SavingGoalService {
  private apiUrl = `${environment.apiUrl}/goals`;

  constructor(private http: HttpClient) {}

  addSavingGoal(
    request: AddSavingGoalRequest
  ): Observable<AddSavingGoalResponse> {
    return this.http.post<AddSavingGoalResponse>(
      `${this.apiUrl}/add`,
      request
    );
  }

  updateSavingGoal(
    goalId: number,
    request: UpdateSavingGoalRequest
  ): Observable<AddSavingGoalResponse> {
    return this.http.put<AddSavingGoalResponse>(
      `${this.apiUrl}/${goalId}`,
      request
    );
  }

  deleteSavingGoal(goalId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${goalId}`
    );
  }

  listSavingGoals(): Observable<AddSavingGoalResponse[]> {
    return this.http.get<AddSavingGoalResponse[]>(
      `${this.apiUrl}`
    );
  }
}