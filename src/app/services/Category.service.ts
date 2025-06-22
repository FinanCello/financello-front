import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpEventType,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CategoryRequest,
  CategorySimpleResponse,
  CategoryResponse,
} from '../models/Category';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = `${environment.apiUrl}/categories`;

  constructor(private http: HttpClient) {}

  createCategory(
    userId: number,
    request: CategoryRequest
  ): Observable<CategoryResponse> {
    const params = new HttpParams().set('userId', userId);
    return this.http.post<CategoryResponse>(this.apiUrl, request, {
      params,
    });
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateCategory(
    id: number,
    request: CategoryRequest
  ): Observable<CategoryResponse> {
    return this.http.put<CategoryResponse>(`${this.apiUrl}/${id}`, request);
  }

  getCategories(userId: number): Observable<CategorySimpleResponse[]> {
    return this.http.get<CategorySimpleResponse[]>(
      `${this.apiUrl}/${userId}`
    );
  }
}
