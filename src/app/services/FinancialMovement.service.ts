import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  RegisterFinancialMovementRequest,
  RegisterFinancialMovementResponse
} from '../models/FinancialMovement';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinancialMovementService {

  private apiUrl = `${environment.apiUrl}/movements`;

  constructor(private http: HttpClient) {}

  registerMovement(
    userId: number,
    request: RegisterFinancialMovementRequest
  ): Observable<RegisterFinancialMovementResponse> {
    const params = new HttpParams().set('userId', userId);
    return this.http.post<RegisterFinancialMovementResponse>(this.apiUrl, request, { params });
  }

  filterMovements(
    userId: number,
    categoryId?: number,
    movementType?: string
  ): Observable<RegisterFinancialMovementResponse[]> {
    let params = new HttpParams().set('userId', userId);

    if (categoryId !== undefined && categoryId !== null) {
      params = params.set('categoryId', categoryId);
    }

    if (movementType !== undefined && movementType !== null) {
      params = params.set('movementType', movementType);
    }

    return this.http.get<RegisterFinancialMovementResponse[]>(
      `${this.apiUrl}/filter`,
      { params }
    );
  }
}
