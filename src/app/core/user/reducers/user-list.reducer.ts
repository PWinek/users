import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { listByIdReducerUtil } from '../../common/reducers/list/by-id.reducer';
import { ByIdState } from '../../common/models/state/by-id-state';
import { ListState } from '../../common/models/state/list-state';

export const userListFeatureKey = 'userList';
export interface ListUserState extends ByIdState<ListState> {}
export const listUserInitialState: ListUserState = {};
export const listUserReducer = createReducer<ListUserState>(
  listUserInitialState,
  on(
    UserActions.loadUsers,
    (state): ByIdState<ListState> => {
      return listByIdReducerUtil.getById(state);
    }
  ),
  on(UserActions.loadUsersSuccess, (state, actions) =>
    listByIdReducerUtil.getSuccessById(state, actions)
  ),
  on(UserActions.loadUsersFailure, (state, actions) =>
    listByIdReducerUtil.getFailureById(state, actions)
  )
);

export function reducer(state: ListUserState, action: Action) {
  return listUserReducer(state, action);
}
