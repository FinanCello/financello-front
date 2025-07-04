import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
    RegisterFinancialMovementRequest,
    RegisterFinancialMovementResponse,
    TransactionResponse,
} from '../models/FinancialMovement';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class FinancialMovementService {
    private apiUrl = `${environment.apiUrl}/movements`;

    constructor(private http: HttpClient) {}

    getMovements(userId: number, type?: string, categoryId?: number): Observable<TransactionResponse[]> {
        let params = new HttpParams();
      
        if (type && type.trim() !== '') {
          params = params.set('type', type);
        }
      
        if (categoryId !== undefined && categoryId !== 0) {
          params = params.set('categoryId', categoryId.toString());
        }
      
        const fullUrl = `${this.apiUrl}/${userId}?${params.toString()}`;
        return this.http.get<TransactionResponse[]>(`${this.apiUrl}/${userId}`, { params });
      }

    register(userId: number, request: RegisterFinancialMovementRequest): Observable<RegisterFinancialMovementResponse> {
        const params = new HttpParams().set('userId', userId.toString());
        return this.http.post<RegisterFinancialMovementResponse>(`${this.apiUrl}/register`, request, { params });
    }

    filter(userId: number, categoryId: number | null, type: string | null): Observable<RegisterFinancialMovementResponse[]> {
    let params = new HttpParams().set('userId', userId.toString());
    if (categoryId !== null) params = params.set('categoryId', categoryId.toString());
    if (type) params = params.set('type', type);

        return this.http.get<RegisterFinancialMovementResponse[]>(`${this.apiUrl}/filter`, { params });
    }

    uploadExcel(file: File): Observable<string> {
        const formData = new FormData();
        formData.append('file', file);

        return this.http.post(`${this.apiUrl}/upload`, formData, { responseType: 'text' });
    }
}
