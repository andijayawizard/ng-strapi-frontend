import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import environment from 'src/environments/environment';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/api/categories`)
  }
  getDetails(id: string): Observable<Category> {
    return this.http.get<Category>(`${environment.apiUrl}/api/categories/${id}`)
  }
}
