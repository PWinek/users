import { combineReducers } from '@ngrx/store';
import * as fromUserList from './user-list.reducer';

export const userFeatureKey = 'user';
export interface UserState {
  [fromUserList.userListFeatureKey]: fromUserList.ListUserState;
}

export const userInitialState: UserState = {
  [fromUserList.userListFeatureKey]: fromUserList.listUserInitialState,
};
export const userReducer = combineReducers<UserState>(
  {
    [fromUserList.userListFeatureKey]: fromUserList.reducer,
  },
  userInitialState
);
