import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  SpendingLimitRequest,
  SpendingLimitResponse,
  SpendingLimitAlertResponse
} from '../models/SpendingLimit';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpendingLimitService {
  private apiUrl = `${environment.apiUrl}/spending-limits`;

  constructor(private http: HttpClient) {}

  createSpendingLimit(
    userId: number,
    request: SpendingLimitRequest
  ): Observable<SpendingLimitResponse> {
    const params = new HttpParams().set('userId', userId);
    return this.http.post<SpendingLimitResponse>(this.apiUrl, request, { params });
  }

  getSpendingLimitAlerts(userId: number): Observable<SpendingLimitAlertResponse[]> {
    return this.http.get<SpendingLimitAlertResponse[]>(
      `${this.apiUrl}/alerts`,
      { params: new HttpParams().set('userId', String(userId)) }
    );
  }

  deleteSpendingLimit(limitId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/limits/${limitId}`);
  }

}
