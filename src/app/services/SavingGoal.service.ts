import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './Api.service';
import {
  AddSavingGoalRequest,
  UpdateSavingGoalRequest,
  AddSavingGoalResponse,
} from '../models/SavingGoal';

@Injectable({
  providedIn: 'root'
})
export class SavingGoalService {
  private readonly PREFIX = '/goals'; // ajusta a '/saving-goals' si ese es tu @RequestMapping

  constructor(private apiService: ApiService) {}

  addSavingGoal(
    request: AddSavingGoalRequest
  ): Observable<AddSavingGoalResponse> {
    return this.apiService.post<AddSavingGoalResponse>(
      `${this.PREFIX}/add`,
      request
    );
  }

  updateSavingGoal(
    goalId: number,
    request: UpdateSavingGoalRequest
  ): Observable<AddSavingGoalResponse> {
    return this.apiService.put<AddSavingGoalResponse>(
      `${this.PREFIX}/${goalId}`,
      request
    );
  }

  deleteSavingGoal(goalId: number): Observable<void> {
    return this.apiService.delete(
      `${this.PREFIX}/${goalId}`
    );
  }

  listSavingGoals(): Observable<AddSavingGoalResponse[]> {
    return this.apiService.get<AddSavingGoalResponse[]>(
      `${this.PREFIX}`
    );
  }
}