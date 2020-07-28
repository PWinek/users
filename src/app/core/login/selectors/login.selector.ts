import { createSelector } from '@ngrx/store';
import { selectAuthState } from '../reducer/auth.reducer';

export const selectLogin = createSelector(
  selectAuthState,
  (state) => state && state.login
);
export const selectLoginSucces = createSelector(
  selectLogin,
  (state) => state && state.success
);
export const sleectUserError = createSelector(
  selectLogin,
  (state) => state && state.error
);
