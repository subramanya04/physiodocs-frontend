import { User } from './user';

export interface AuthResponse extends User {
  token: string;
}

export interface AuthToken extends User {
  sub?: string;
  iat?: number;
  eat?: number;
}
