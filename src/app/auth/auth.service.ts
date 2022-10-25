import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthResponse, User } from '../core/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user: User) {
    return this.http.post<{ data: AuthResponse; messages: string[] }>(
      `${environment.baseUrl}/auth-service/register`,
      user
    );
  }

  login(user: User) {
    return this.http.post<{ data: AuthResponse; messages: string[] }>(
      `${environment.baseUrl}/auth-service/login`,
      user
    );
  }
}
