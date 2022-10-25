import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../core/models';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<{ messages: string[]; data: User[]; count: number }>(
      `${environment.baseUrl}/patient-service/`
    );
  }

  getById(id: number) {
    return this.http.get<{ messages: string[]; data: User }>(
      `${environment.baseUrl}/patient-service/${id}`
    );
  }
}
