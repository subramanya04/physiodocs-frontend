import { GenderTypes, LanguageTypes } from './dropdown';

export enum UserRoles {
  PATIENT = 1,
  STAFF = 2,
  DOCTOR = 3,
  ADMIN = 4,
  SUPERADMIN = 5
}
export interface User {
  userId?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  dateOfBirth?: string;
  gender?: GenderTypes;
  nationality?: string;
  language?: LanguageTypes;
  email?: string;
  password?: string;
  phone?: string;
  userRole?: UserRoles;
}

export const getAgeInYears = (date: string): number =>
  Math.floor(
    (new Date().getTime() - new Date(date).getTime()) /
      (1000 * 60 * 60 * 24 * 365)
  );
