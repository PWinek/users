import { createSelector } from '@ngrx/store';
import { selectAuthState } from '../reducer/auth.reducer';

export const selectUserInfo = createSelector(
  selectAuthState,
  (state) => state && state.loggedUser
);

export const selectUserInfoSucces = createSelector(
  selectUserInfo,
  (state) => state && state.success
);

export const selectUserId = createSelector(
  selectUserInfo,
  (state) => state && state.id
);

export const selectUserName = createSelector(
  selectUserInfo,
  (state) => state && state.username
);
