import { createSelector } from '@ngrx/store';
import { selectAuthState } from '../reducer/auth.reducer';

export const selectLogout = createSelector(
  selectAuthState,
  (state) => state && state.logout
);
export const selectLogoutSucces = createSelector(
  selectLogout,
  (state) => state && state.success
);
