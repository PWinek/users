import {createSelector} from '@ngrx/store';
import {selectAuthState} from '../reducer/auth.reducer';

export const selectUserInfo = createSelector(selectAuthState, (state) => {
  return state && state.loggedUser;
});
export const selectUserInfoSucces = createSelector(selectUserInfo, (state) => {
  return state && state.success;
});
export const selectUserId = createSelector(selectUserInfo, (state) => {
  return state && state.id;
});
export const selectUserName = createSelector(selectUserInfo, (state) => {
  return state && state.username;
});
