import { HttpClient, HttpEventType, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User, UserRoles } from '../core/models';

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

  getByTerm(term: string, role?: UserRoles) {
    const params = new HttpParams({
      fromObject: role ? { role } : {}
    });
    return this.http
      .get<{ messages: string[]; data: User[] }>(
        `${environment.baseUrl}/patient-service/search/${term}`,
        { reportProgress: true, observe: 'events', params }
      )
      .pipe(
        map(res =>
          res.type === HttpEventType.Response ? res.body?.data : undefined
        )
      );
  }
}
