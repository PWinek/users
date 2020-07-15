import { createSelector } from '@ngrx/store';
import { selectAuthState } from '../reducer/auth.reducer';

export const selectLogout = createSelector(selectAuthState, (state) => {
  return state && state.logout;
});
export const selectLogoutSucces = createSelector(selectLogout, (state) => {
  return state && state.success;
});
