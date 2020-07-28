import { createReducer, on } from '@ngrx/store';
import * as loginAction from '../actions/login.actions';

export const loginFeatureKey = 'login';

export interface loginState {
  success?: boolean;
  loading?: boolean;
  error?: any;
}
export const loginStateInitialState: loginState = {};

const _checkingLoginReducer = createReducer(
  loginStateInitialState,
  on(loginAction.login, (state, action) => ({
    ...state,
    // username: action.username,
    success: false,
    loading: true,
    error: false,
  })),
  on(loginAction.loginSucces, (state, action) => ({
    ...state,
    success: true,
    loading: false,
    error: null,
  })),
  on(loginAction.loginFailed, (state, action) => ({
    ...state,
    success: false,
    loading: false,
    error: action.error,
  })),
  on(loginAction.loginInfoClear, (state, action) => ({
    ...state,
    success: null,
    loading: null,
    error: null,
  }))
);

export function checkingLoginReducer(state, action) {
  return _checkingLoginReducer(state, action);
}
