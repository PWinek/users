import { createSelector } from '@ngrx/store';
import { selectAuthState } from '../reducer/auth.reducer';

export const selectLogin = createSelector(selectAuthState, (state) => {
  return state && state.login;
});
export const selectLoginSucces = createSelector(selectLogin, (state) => {
  return state && state.success;
});
export const sleectUserError = createSelector(selectLogin, (state) => {
  return state && state.error;
});
