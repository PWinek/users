import {createReducer, on} from '@ngrx/store';
import * as logoutAction from '../actions/logout.actions';

export const logoutFeatureKey = 'logout';

export interface logoutState {
  success?: boolean;
  loading?: boolean;
  error?: any;
}

export const logoutStateInitialState: logoutState = {};

const _checkingLogoutReducer = createReducer(
  logoutStateInitialState,
  on(logoutAction.logout, (state, action) => ({
    ...state,
    success: false,
    loading: true,
    error: false,
  })),
  on(logoutAction.logoutSucces, (state, action) => ({
    ...state,
    success: true,
    loading: false,
    error: null,
  })),
  on(logoutAction.logoutFail, (state, action) => ({
    ...state,
    success: false,
    loading: false,
    error: null,
  })),
  on(logoutAction.logoutInfoClear, (state, action) => ({
    ...state,
    success: null,
    loading: null,
    error: null,
  }))
);

export function checkingLogoutReducer(state, action) {
  return _checkingLogoutReducer(state, action);
}
