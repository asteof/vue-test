export enum AuthMutationEnum {
  SET_LOCAL_STORAGE = 'SET_LOCAL_STORAGE',
  GET_LOCAL_STORAGE = 'GET_LOCAL_STORAGE',
  REMOVE_LOCAL_STORAGE = 'REMOVE_LOCAL_STORAGE',
  SET_LOGGED_IN = 'SET_LOGGED_IN',
}

export enum AuthActionEnum {
  SET = 'SET',
  GET = 'GET',
  REMOVE = 'REMOVE',
  LOGIN_USER = 'LOGIN_USER',
  LOGOUT_USER = 'LOGOUT_USER',
}

export enum AuthGettersEnum {
  isLoggedIn = 'isLoggedIn',
  doesTokenExist = 'doesTokenExist'
}

export interface AuthStateInterface {
  isLoggedIn: boolean,
  token: string | null,
}

export interface LocalStorageInterface {
  key: string,
  value: boolean,
}

export interface UserInterface {
  username: string,
  password: string,
}
