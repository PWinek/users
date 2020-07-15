import { combineReducers } from '@ngrx/store';
import * as fromLoginReducer from './login.reducers';
import * as fromUserDataReducer from './loggedUser.reducer';
import * as fromlogoutReducer from './logout.reducer';

export const commonFeatureKey = 'Auth';
export interface AuthState {
  [fromLoginReducer.loginFeatureKey]: fromLoginReducer.loginState;
  [fromlogoutReducer.logoutFeatureKey]: fromlogoutReducer.logoutState;
  [fromUserDataReducer.loggedUserFeatureKey]: fromUserDataReducer.loggedUserState;
}
export const commonInitialState: AuthState = {
  [fromLoginReducer.loginFeatureKey]: fromLoginReducer.loginStateInitialState,
  [fromlogoutReducer.logoutFeatureKey]:
    fromlogoutReducer.logoutStateInitialState,
  [fromUserDataReducer.loggedUserFeatureKey]:
    fromUserDataReducer.loggedUserInitialState,
};
export const commonReducer = combineReducers(
  {
    [fromLoginReducer.loginFeatureKey]: fromLoginReducer.checkingLoginReducer,
    [fromUserDataReducer.loggedUserFeatureKey]:
      fromUserDataReducer.checkingLoggedUserDataReducer,
    [fromlogoutReducer.logoutFeatureKey]:
      fromlogoutReducer.checkingLogoutReducer,
  },
  commonInitialState
);

export const selectAuthState = (state: AuthState) =>
  state && state[commonFeatureKey];
