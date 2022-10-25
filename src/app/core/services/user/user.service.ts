import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { User } from '../../models/user';
import { AuthToken } from '../../models';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = new BehaviorSubject<User | null>(null);
  constructor(private router: Router) {
    this.getToken();
  }

  getUserObservable(): Observable<User> {
    return this.user.asObservable();
  }

  setUserObservable(user?: User): void {
    this.user.next(user);
  }

  setUserDetails({ token, ...user }): void {
    if (token) {
      localStorage.setItem('token', token);
    }
    this.setUserObservable(user);
  }

  getToken(): string | undefined {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    const decoded: AuthToken = jwtDecode(token);
    if (!decoded) {
      localStorage.removeItem('token');
      return;
    }
    const isValid = Date.now() <= decoded.eat;
    if (!isValid) {
      this.setUserObservable();
      localStorage.removeItem('token');
      return;
    }
    this.setUserObservable(decoded);
    return token;
  }

  logoutUser(): void {
    this.setUserObservable();
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
