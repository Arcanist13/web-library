/**
 * Model for auth response
 */
export interface ITokenUser {
  info: IUser;
}

/**
 * User information
 */
export interface IUser {
  id: number;
  username: string;
  email: string;
  admin: number;
  created: number;
  activity: number;
  default_grade: string;
}

/**
 * User Registration information
 */
export interface IRegisterUser {
  username: string;
  email: string;
  password: string;
}
