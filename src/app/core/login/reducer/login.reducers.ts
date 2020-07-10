import { createReducer, props, on } from '@ngrx/store';
import * as loginAction from '../actions/login.actions';
import * as logoutAction from '../actions/logout.actions';


export const loginFeatureKey = 'login';

export interface LoginState {
  username: string;
  password: string;
  isLogin: boolean;
  isAuth: boolean;
  error: string;
}

export const loginInitialState: LoginState = {
  username: null,
  password: null,
  isLogin: null,
  isAuth: null,
  error: null,
 };

const _checkingReducer = createReducer(
  loginInitialState,
  on(loginAction.login, (state, action) => ({
    ...state,
    username: action.username,
    password: action.password,
  })),
  on(loginAction.loginSucces, (state, action) => ({
    ...state,
    isAuth: action.isAuth,
    isLogin: action.isLogin,
  })),
  on(loginAction.loginFail, (state, action) => ({
    ...state,
    error: action.error,
  })),
  on(logoutAction.logout, (state, action) => ({
    ...state,
  })),
  on(logoutAction.logoutSucces, (state, action) => ({
    ...state,
    username: null,
    password: null,
    isAuth: action.isAuth,
    isLogin: action.isLogin,
   })),
  on(logoutAction.logoutFail, (state, action) => ({
    ...state,
    error: action.error,
   }))
);
export function checkingReducer(state, action) {
  return _checkingReducer(state, action);
}
