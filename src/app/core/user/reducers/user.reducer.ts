import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import * as fromUserEntity from './user-entity.reducer';

export const userFeatureKey = 'user';

export interface UserState {
  list: {};
  userEntities: fromUserEntity.UserEntitiesState;
}

export const userInitialState: UserState = {
  list: {},
  [fromUserEntity.userEntitiesFeatureKey]: fromUserEntity.initialState,
};

export const userReducer = createReducer(
  userInitialState,
  on(UserActions.loadUsers, (state) => state),
  on(UserActions.loadUsersSuccess, (state, action) => ({
    ...state,
    list: action.data,
  })),
  on(UserActions.loadUsersFailure, (state, action) => state)
);
