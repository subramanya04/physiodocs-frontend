import { UserRoles } from './user-roles';

export interface User {
  userId?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  userRole?: UserRoles;
}
