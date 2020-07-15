import { createReducer, on } from '@ngrx/store';
import * as loggedUserActions from '../actions/loggedUser.actions';

export const loggedUserFeatureKey = 'loggedUser';
export interface loggedUserState {
  id?: number;
  username?: string;
  success?: boolean;
  loading?: boolean;
  error?: any;
}

export const loggedUserInitialState: loggedUserState = {};

const _checkingLoggedUserDataReducer = createReducer(
  loggedUserInitialState,
  on(loggedUserActions.UserInfoGathering, (state, action) => ({
    ...state,
    username: action.username,
    success: false,
    loading: true,
    error: false,
  })),
  on(loggedUserActions.UserInfoGatheringSucces, (state, action) => ({
    ...state,
    id: action.id,
    username: action.username,
    success: true,
    loading: false,
    error: null,
  })),
  on(loggedUserActions.UserInfoGatheringFail, (state, action) => ({
    ...state,
    success: false,
    loading: false,
    error: action.error,
  })),
  on(loggedUserActions.UserInfoClear, (state, action) => ({
    ...state,
    id: null,
    username: null,
    success: null,
    loading: null,
    error: null,
  }))
);

export function checkingLoggedUserDataReducer(state, action) {
  return _checkingLoggedUserDataReducer(state, action);
}
