import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<{ data: any; messages: string[] }>(
      `${environment.baseUrl}/department-service/`
    );
  }

  getById(id: string | number) {
    return this.http.get<{ data: any; messages: string[] }>(
      `${environment.baseUrl}/department-service/${id}`
    );
  }
}
